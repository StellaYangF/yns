import axios from '@/util/request';
import public from './config/public';
import { getLocal } from '@/util/local.js';

export const getSliders = () => axios.get(public.getSliders);
export const getCaptcha = () => axios.get(public.getCaptcha, {
  params:{
    uid: getLocal('uuid'),
  }
})