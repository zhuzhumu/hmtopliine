
const { sep } = require('path')
//    a/b/c
module.exports = ({ file }) => {
  console.log(file)
  const rootValue = file.dirname.indexOf(`node_modules${sep}vant`) !== -1
    ? 37.5
    : 75

  return {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue,
        propList: ['*']
      }
    }
  }
}
// module.exports = {
//   plugins: {
//     autoprefixer: {
//       overrideBrowserslist: ['Android >= 4.0', 'iOS >= 8']
//     },
//     'postcss-pxtorem': {
//       rootValue: 37.5,
//       propList: ['*']
//     }
//   }
// }
