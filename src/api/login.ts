import request from '@/utils/request'
import loginResponse from './types/loginTypes'

export const login = (mobile_phone:string) => {
  return request<loginResponse>({
    method: 'GET',
    url: '/micro/api/wc/auth?mobile=' + mobile_phone
  })
}
