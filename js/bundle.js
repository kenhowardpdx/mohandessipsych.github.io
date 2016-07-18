webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	$('a').filter(function () {
	    return this.hostname && this.hostname !== location.hostname;
	}).attr("target", "_blank");


/***/ }
]);