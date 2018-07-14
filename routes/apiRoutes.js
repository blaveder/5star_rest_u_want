// HI ASH HI JUSTIN
var tableDate = require('../data/tableData');
var waitListData = require('../data/waitingListData');

module.exports = function (express) {
    express.get("/api/tables", function (req, res) {
        res.json(tableData);
    })
};