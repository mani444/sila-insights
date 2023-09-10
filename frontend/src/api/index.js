import axios from 'axios'

const axiosIns = axios.create({
  baseURL:
      process.env.REACT_APP_baseURL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
})

window.http = axiosIns

export const getRequest = (url, body) => {
  const token = localStorage.getItem('auth_token')
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  return axiosIns.get(url, body, {
    headers
  })
}
export const postRequest = (url, body) => {
  const token = localStorage.getItem('auth_token')
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  return axiosIns.post(url, body, {
    headers
  })
}
export const patchRequest = (url, body) => {
  const token = localStorage.getItem('auth_token')
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  return axiosIns.patch(url, body, {
    headers
  })
}

export default axiosIns