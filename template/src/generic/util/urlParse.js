/**
 * Created by Gary.zhou on 2017/5/31.
 */
export default function urlParse (url) {
	var decode = decodeURIComponent,
		tempArr = [],
		retObj = urlObj(url);
	retObj.search.split('&').forEach(function (item) {
		var k = decode(getQuery(item)[0]),
			v = decode(getQuery(item)[1]),
			vTemp;
		if (v.indexOf('#') > -1) {
			vTemp = v.split('#');
			retObj.hash = vTemp[1];
			v = vTemp[0];
		}
		if (item) {
			retObj.params[k] = v;
			tempArr.push(k + '=' + v);
		}
	});
	console.log(retObj.search.split('&'));
	retObj.search = tempArr.join('&');
	return {
		urlObj: retObj,
		url: retObj.protocol + '://' + retObj.hostname + '/' + retObj.pathname.replace(/^\//, '') + (retObj.search ? '?' : '') + retObj.search.replace(/^\//, '') + (retObj.hash ? '#' : '') + retObj.hash
	};
};
function getQuery (str) {
	return str.split('=');
}
function urlObj (url) {
	var el = document.createElement('a');
	if (document.documentMode) {
		el.href = url;
		url = el.href;
	}
	el.href = url;
	return {
		href: el.href,
		protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
		port: el.port,
		host: el.host,
		hostname: el.hostname,
		pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
		search: el.search ? el.search.replace(/^\?/, '') : '',
		params: {},
		hash: el.hash ? el.hash.replace(/^#/, '') : ''
	};
}
