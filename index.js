var url = require('url');

//Provide a piece of connect middleware
module.exports = function middleware() {
    return function (request, response, next) {
        if (!request.query)
            request.query = url.parse(request.url, true).query;

        if (request.query.hasOwnProperty("d") && request.query.hasOwnProperty("h")) {
            response.writeHead(301, {Location: decodeURIComponent(request.query["d"]) + "#" + decodeURIComponent(request.query.["h"])});
        } else if (request.query.hasOwnProperty("u")) {
            response.writeHead(301, {Location: decodeURIComponent(request.query["u"]));
        } else {
            next();
        }
    }
};
