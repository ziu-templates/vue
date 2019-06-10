/**
 * Created by Gary.zhou on 2017/3/27.
 */
import apiRetcode from './apiRetcode';

let apiConf = {
  apiEnv: process && process.env ? (process.env.API_ENV || 'production') : 'production',
  appId: '',
  componentAppid: '',
  vssKey: '', // 大数据key
  development: 'https://xx.com',
  test: 'https://xx.com',
  staging: 'https://xx.com',
  production: 'https://xx.com'
};
const DEVELOPMENT = true ? apiConf['test'] : apiConf[apiConf.apiEnv];
const PRODUCTION = apiConf[apiConf.apiEnv];

export default {
  get app_id() {
    return apiConf.appId;
  },
  get component_appid() {
    return apiConf.componentAppid;
  },
  get vssKey() {
    return apiConf.vssKey;
  },
  get apiConf() {
    return {
      domain: {
        development: DEVELOPMENT,
        production: PRODUCTION
      }
    };
  },
  ticketErrCode: 5001,
  apiRetcode
};
