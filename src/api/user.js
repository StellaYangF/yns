import axios from '@/util/request';
import user from './config/user';

export const login = options => axios.post(user.login, options);
export const reg = options => axios.post(user.reg, options);
export const validate = () => axios.get(user.validate);