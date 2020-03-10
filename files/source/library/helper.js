var Helper = {
    "convertResultsToRows": function (columns, results) {
        var rows = [];
        var resultCount = results.length;
        var row = {};
        var result = {};
        var columnCount = columns.length;
        var column = "";

        for (var i = 0; i < resultCount; i++) {
            result = results[i];
            row = [];

            for (j = 0; j < columnCount; j++) {
                column = String(columns[j]).toLowerCase();
                if (result[column] !== undefined) {
                    row.push(result[column]);
                } else {
                    row.push("");
                }
            }

            rows.push(row);
        }

        return rows;
    }
}

module.exports = Helper;