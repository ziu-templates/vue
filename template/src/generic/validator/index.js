/**
 * 验证
 */
import ruleFns from './rule';
var Validator = function () {
    this.cache = [];
}
Validator.prototype = {
    constructor: Validator,
    addRule: function (val, rules) {
        var _this = this;
        rules.forEach(function (rule) {
            var ruleArr = rule.rule.split(':'),
                    errMsg = rule.errMsg;
            _this.cache.push(function () {
                var ruleFn = ruleArr.shift();
                ruleArr.unshift(val);
                ruleArr.push(errMsg);
                return ruleFns[ruleFn].apply(_this, ruleArr);
            });
        }, this);
    },
    start: function () {
    	for (let i = 0, ruleFn; ruleFn = this.cache[i++];) {
		    var errMsg = ruleFn();
		    if (errMsg) {
			    return errMsg;
		    }
	    }
    },
    clear: function () {
        this.cache = [];
    }
};
export default Validator;
