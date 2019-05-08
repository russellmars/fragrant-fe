import createBaseRequest from './createBaseRequest'
import AppConst from '@/config'

export const baseAPI = createBaseRequest({
  baseURL: AppConst.APP_BACKEND_API
})
