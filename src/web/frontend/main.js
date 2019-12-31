"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
require("./style.css");
var App = function () {
    var _a = react_1.useState(0), counter = _a[0], setCounter = _a[1];
    return (<div className="App">
            <h1>{counter}</h1>
            <button onClick={function () { return setCounter(c + 1); }}>Press me</button>
        </div>);
};
react_dom_1.default.render(<App />, document.getElementById("root"));
