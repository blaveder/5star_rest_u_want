var tableDate = require('../data/tableData');
var waitLIstData = require('../data/waitingListData');

module.exports = fuction(app) {
    app.get("/api/tables")
    res.json(tableData);
}