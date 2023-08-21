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
import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { Item } from "../Item/Item";
import "./List.style.css";
export var List = function (_a) {
    var array = _a.array, style = _a.style;
    var listRef = useRef(null);
    return (_jsx("div", __assign({ className: "container", ref: listRef }, { children: array.map(function (element, index) {
            return (_jsx(Item, { content: element, index: index + 1, listRef: listRef, style: style, showIndex: true }));
        }) })));
};
