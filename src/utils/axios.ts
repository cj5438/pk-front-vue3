import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

class AxiosService {
  private axiosInstance: AxiosInstance

  constructor(baseURL: string, timeout: number) {
    const config: AxiosRequestConfig = {
      baseURL,
      timeout
    }
    this.axiosInstance = axios.create(config)
  }

  public getInstance(): AxiosInstance {
    return this.axiosInstance
  }
}

const axiosService = new AxiosService(
  `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_API_PREFIX}`,
  5000
)
export default axiosService.getInstance()
