import * as $ANTDD from 'dingtalk-jsapi'
/**
 * 获取页面执行的环境
 * endpoint 可能返回 2 种值 mobile、pc
 * system 可能返回 4 种值 Android、SymbianOS、WindowsPhone、iOS
 * weChat true 表示在微信环境下
 *
 * @returns {{endpoint: string|undefined, system: string|undefined, weChat: boolean}}
 */
export const getOperatingEnvironment = () => {
  // 判断系统
  const { userAgent } = navigator
  let endpoint
  let system
  let weChat // 是否是微信环境
  let wxWork // 是否是企业微信环境
  let dingApp = false // 是否是钉钉小程序
  let isMobileH5 = false // 是否是H5
  // #ifdef MP-DINGTALK
  dingApp = true
  // #endif
  // #ifdef H5
  isMobileH5 = true
  // #endif
  if (typeof userAgent === 'string') {
    const isAndroid = userAgent.indexOf('Android') > 0
    const isIPhone = userAgent.indexOf('iPhone') > 0
    const isSymbianOS = userAgent.indexOf('SymbianOS') > 0
    const isWindowsPhone = userAgent.indexOf('Windows Phone') > 0
    const isIPad = userAgent.indexOf('iPad') > 0
    const isIPod = userAgent.indexOf('iPod') > 0

    // 判断平台
    endpoint = isAndroid || isIPhone || isSymbianOS || isWindowsPhone || isIPad || isIPod ? 'mobile' : 'pc'

    // 判断系统
    if (isAndroid) {
      system = 'Android'
    } else if (isSymbianOS) {
      system = 'SymbianOS'
    } else if (isWindowsPhone) {
      system = 'WindowsPhone'
    } else if (isIPhone || isIPad || isIPod) {
      system = 'ios'
    }

    // 判断微信浏览器
    weChat = userAgent.indexOf('MicroMessenger') > 0
    wxWork = weChat ? userAgent.toLowerCase().includes('wxwork') : false
  }
  return {
    endpoint,
    system,
    weChat,
    wxWork,
    dingApp,
    isMobileH5,
    isDdBrowser: $ANTDD.env.platform !== 'notInDingTalk', // 是否是钉钉浏览器环境
  }
}
