/**
 * 公共接口
 */
let host = `${import.meta.env.VITE_APP_DOMAIN}/inssceneprod`
if (import.meta.env.VITE_APP_STATUS === 'dev') {
  host = '/inssceneprod'
}
export const publicApi = {
  upload: host + '/api/common/file/upload',
  getUrl: host + '/api/common/file/getUrl',
  ossOrigin: '//deepinnet-business-public.oss-cn-hangzhou.aliyuncs.com/',
}
