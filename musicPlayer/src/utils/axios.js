import Axios from 'axios'

const CancelToken = Axios.CancelToken
class HttpRequest {
    static requestBaseUrl = '/api'
    constructor () {
      this.baseOptions = {
        timeout: 5000
      }
    }
    handleInterceptorsRequest = (requestConfig) => {
      requestConfig.url = HttpRequest.requestBaseUrl + requestConfig.url
      requestConfig.cancelToken = new CancelToken(cancel => {
        window.__axiosPromiseArr = window.__axiosPromiseArr ? window.__axiosPromiseArr : []
        window.__axiosPromiseArr.push({ cancel })
      })
      return requestConfig
    }
    handleInterceptorsRespone = (responseConfig) => {
      const data = responseConfig.data
      const code = data.code
      if (code !== 200) {
        const msg = this.resolveCode(code)
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({
          code,
          msg
        })
      } else {
        return data
      }
    }
    errorHandler = (err) => {
      let errData = err
      if (Axios.isCancel(errData)) {
        console.log('Request canceled', errData.message)
        return
      } else {
        if (err && err.response) {
          err.message = this.resolveCode(err.response.status)
          errData = {
            code: err.response.status,
            msg: err.message
          }
        }
      }
      return Promise.reject(errData)
    }
    resolveCode (code) {
      switch (code) {
        case 400:
          return '错误请求'
        case 401:
          return '未授权，请重新登录'
        case 403:
          return '拒绝访问'
        case 404:
          return '请求错误,未找到该资源'
        case 405:
          return '请求方法未允许'
        case 408:
          return '请求超时'
        case 500:
          return '服务器端出错'
        case 501:
          return '网络未实现'
        case 502:
          return '网络错误'
        case 503:
          return '服务不可用'
        case 504:
          return '网络超时'
        case 505:
          return 'http版本不支持该请求'
        default:
          return `连接错误${code}`
      }
    }
    getInstall () {
      const install = Axios.create(this.baseOptions)
      install.interceptors.request.use(this.handleInterceptorsRequest, this.errorHandler)
      install.interceptors.response.use(this.handleInterceptorsRespone, this.errorHandler)

      return install
    }
}
export {
  HttpRequest
}

const http = new HttpRequest().getInstall()

export default http
