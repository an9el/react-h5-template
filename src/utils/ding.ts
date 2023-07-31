import * as dd from 'dingtalk-jsapi'
import { get } from '@/utils/axios'
import { getUrlQuery } from './getUrlQuery'

export function ddAuthInit() {
  localStorage.setItem('dingloginStatus', '1')
  dd.ready(function () {
    const searchObj = getUrlQuery()
    // dd.ready参数为回调函数，在 环境准备就绪时触发，jsapi的调用需要保证在该回调函数触发后调用，否则无效。
    dd.runtime.permission
      .requestAuthCode({
        corpId: searchObj.corpId, //三方企业ID
      })
      .then((res2: { code: string }) => {
        // 钉钉登陆后的业务流程
        console.log(res2)
      })
  })
}
