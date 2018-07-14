// HI ASH HI JUSTIN
var tableDate = require('../data/tableData');
var waitListData = require('../data/waitingListData');

module.exports = function (express) {
    express.get("/api/tables", function (req, res) {

        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true); // KEY LINE
        }

        // Or false if they don't have a table
        else {
            waitListData.push(req.body);
            res.json(false); // KEY LINE
        }

        res.json(tableData);
    })
};
