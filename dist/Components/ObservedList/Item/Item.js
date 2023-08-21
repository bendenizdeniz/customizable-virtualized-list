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
import { jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import './Item.style.css';
export var Item = function (_a) {
    var content = _a.content, index = _a.index, listRef = _a.listRef, root = _a.root, rootMargin = _a.rootMargin, threshold = _a.threshold, showIndex = _a.showIndex, style = _a.style;
    var _b = useState(false), isIntersecting = _b[0], setIsIntersecting = _b[1];
    var itemRef = useRef(null);
    useEffect(function () {
        var _a, _b;
        isIntersecting ? (_a = itemRef.current) === null || _a === void 0 ? void 0 : _a.classList.add("slide-in") : (_b = itemRef.current) === null || _b === void 0 ? void 0 : _b.classList.remove("slide-in");
        var options = {
            root: root !== null && root !== void 0 ? root : null,
            rootMargin: rootMargin !== null && rootMargin !== void 0 ? rootMargin : '0px',
            threshold: threshold !== null && threshold !== void 0 ? threshold : 0.1
        };
        var handleIntersect = function (_a, observer) {
            var entry = _a[0];
            setIsIntersecting(entry.isIntersecting);
        };
        var observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(itemRef.current);
        console.log(index + ": " + isIntersecting);
        return function () { return observer.disconnect(); };
    }, [isIntersecting, content, listRef, root, rootMargin, threshold, index]);
    return (_jsxs("div", __assign({ className: 'contentContainer', ref: itemRef, style: style }, { children: [showIndex && (index + "-"), content && content] })));
};
