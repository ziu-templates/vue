/**
 * Created by Gary.zhou on 2017/7/3.
 */
let events = {};
function add (pattern, cb) {
	events[pattern.evt] = {
		addCb: cb || function () {
		},
		msg: null
	};
}
function act (pattern, cb) {
	!events[pattern.evt].addCb || events[pattern.evt].addCb({
		body: pattern.msg
	}, {
		end: cb
	});
}
function rm (evt) {
	delete events[evt];
}
export default {
	add,
	act,
	rm
};

// add({
//     evt: 'asd'
// }, function (req, res) {
//     console.log(req);
//     res.end(null, msg);
// });
// act({
//     evt: 'asd',
//     msg: 1
// }, function (err, res) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(res);
// });
