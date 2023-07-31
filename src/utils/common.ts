import { get } from '@/utils/axios'
import { inssceneprodApi } from '@/services/inssceneprod/inssceneprod.api'

export function getUser(success?: () => void, fail?: () => void) {
  get(inssceneprodApi.getDingTalkUserInfo)
    .then((res: any) => {
      if (res.data) {
        const { userNo } = res.data
        localStorage.setItem('shenduUserId', userNo)
        success && success()
      }
    })
    .catch((e) => {
      fail && fail()
    })
}
