import * as muType from './mutations_type';
export const acInit = function ({dispatch, commit}, params) {
    /*
    * 初始化
    * */
    return new Promise(function (resolve, reject) {
        dispatch('acAppInit', params).then(function (res) {
            resolve(res);
            commit(muType['INIT'], true);
        }, function (e) {
            reject(e);
            commit(muType['INIT'], false);
        });
    });
};
