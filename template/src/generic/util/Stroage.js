/**
 * Author: Peter.Ge
 */

export default  {
    handler: window.localStorage,
    driver: function(str) {
        var _driver = {'local': window.localStorage, 'session': window.sessionStorage};
        if (Object.keys(_driver).indexOf(str) === -1){
            this.handler = _driver['local'];
            typeof(str) !== 'undefined' && console.warn(str + ' driver not exists, switch to localStorage');
        } else {
            this.handler = _driver[str];
        }
        return this;
    },
    get: function(key) {
        return JSON.parse(this.handler.getItem(key));
    },
    set: function(key,value) {
        this.handler.setItem(key,JSON.stringify(value));
        return this;
    },
    remove: function(key) {
        this.handler.removeItem(key);
        return this;
    },
    clear: function() {
        this.handler.clear();
        return this;
    }
};
