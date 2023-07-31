import { publicApi } from '@/services/public.api'
import { Toast } from 'antd-mobile'
import { post } from './axios'

export const downloadFile = (url: string) => {
  post(publicApi.getUrl, {
    bucketType: 1,
    key: url,
  }).then((res: any) => {
    if (res.errorCode) {
      Toast.show(res.errorDesc)
    } else {
      location.href = res.data
      // const newTab = window.open('about:blank')
      // if (newTab) {
      //   newTab.location.href = res.data
      // } else {
      //   location.href = res.data
      // }
    }
  })
}
