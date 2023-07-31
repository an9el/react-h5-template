export function getUrlQuery() {
  const searchStr = location.search.substring(1)
  const searchList = searchStr.split('&')
  const kvObj: any = {}
  searchList.forEach((item: string) => {
    const kv = item.split('=')
    kvObj[kv[0]] = kv[1]
  })
  return kvObj
}

export const queryParams = (url: string, parmas: Record<string, string>) => {
  let queryStr = url + '?'
  const paramsKey = Object.keys(parmas)
  paramsKey.map((item: string, index: number) => {
    queryStr += `${item}=${parmas[item]}${index !== paramsKey.length - 1 ? '&' : ''}`
  })
  return queryStr
}
