import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
function NewRouter (opts) {
    Router.call(this, opts);
}

(function () {
    function Tmp () {}
    Tmp.prototype = Router.prototype;
    var tmp = new Tmp();
    tmp.constructor = NewRouter;
    NewRouter.prototype = tmp;
})();

NewRouter.prototype.newBeforeEach = function (cb) {
    this.beforeEach((to, from, next) => {
        if (typeof this.pathes[to.path] === 'function') {
            cb.bind(this)(to, from, function () {});
            return this.pathes[to.path](to, from, next);
        }
        typeof cb === 'function' && cb.bind(this)(to, from, next);
    });
};

NewRouter.prototype.get = function (path, cb) {
    if (!this.pathes) {
        this.pathes = {};
    }
    this.pathes[path] = typeof cb === 'function' ? cb.bind(this) : function () {};
};

export default NewRouter;
