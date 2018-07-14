module.exports = function (express) {
    express.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../home.html"))
    });
    express.get("/reservation", function (req, res) {
        res.sendFile(path.join(__dirname, "../makeRes.html"));
    });
    express.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "../tableData.html"));
    });
};