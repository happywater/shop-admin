import request from '@/utils/request'

export const login = (mobile:string) => {
  return request.get('/micro/api/wc/auth?mobile=' + mobile, {
    method: 'GET'
  })
}
