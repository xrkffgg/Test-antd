import request from '../utils/request';

export function queryOnlineDay() {
  return request('/api/users');
}