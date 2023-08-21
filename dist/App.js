var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import './App.css';
import { List } from './Components/ObservedList/List/List';
function App() {
    var arrayWithValues = Array.from({ length: 1000 }, function (element, index) { return _jsxs("div", { children: ["Element ", !element] }); });
    var contentContainerStyle = {
        border: '3px solid #e687d6',
        backgroundColor: '#f7bced',
        borderRadius: '5px'
    };
    return (_jsx("div", __assign({ className: "appContainer" }, { children: _jsx(List, { array: arrayWithValues, style: contentContainerStyle }) })));
}
export default App;
