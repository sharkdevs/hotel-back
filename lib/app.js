'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _express2.default();
app.listen(3000, function () {
  console.log('Server started on 3000');
});

app.get('/', function (req, res) {
  return res.json({ value: "success" });
});