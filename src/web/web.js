"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var path_1 = __importDefault(require("path"));
// Express app initialization
var app = express_1.default();
// Template initial configuration
app.set('view engine', "ejs");
app.set('views', 'public');
// Static files configuration
app.use('/assets', express_1.default.static(path_1.default.join(__dirname, "frontend")));
// Controllers
app.get('/*', function (req, res) {
    res.render('index');
});
// Start function
exports.start = function (port) {
    var server = http_1.default.createServer(app);
    return new Promise(function (resolve) {
        server.listen(port, resolve);
    });
};
