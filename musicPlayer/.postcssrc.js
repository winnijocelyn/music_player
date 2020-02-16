// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-pxtorem":{
      "rootValue":37.5,
      "unitPrecision":5,//最小精度，小数点位数
      "propList":["*"],
      "selectorBlackList":[],//选择器黑名单
      "minPixelValue":0//替换的最小像素值
    }
  }
}
