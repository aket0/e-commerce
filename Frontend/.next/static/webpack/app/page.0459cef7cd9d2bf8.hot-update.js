"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/component/app/App.js":
/*!**************************************!*\
  !*** ./src/app/component/app/App.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _Navbar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navbar/NavBar */ \"(app-pages-browser)/./src/app/component/Navbar/NavBar.js\");\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header/Header */ \"(app-pages-browser)/./src/app/component/Header/Header.js\");\n/* harmony import */ var _Body_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Body/Body */ \"(app-pages-browser)/./src/app/component/Body/Body.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Cart_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Cart/Cart */ \"(app-pages-browser)/./src/app/component/Cart/Cart.js\");\n/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Login/Login */ \"(app-pages-browser)/./src/app/component/Login/Login.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction App() {\n    _s();\n    const [list, setList] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        fetch(\"http://localhost:4000/api/itemList\").then((res)=>res.json()).then((data)=>setList(data));\n    }, []);\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedCartItems1 = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n            return storedCartItems1;\n        }\n    });\n    const [isCartVisible, setCartVisible] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [isLoginVisible, setLogginVisible] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedCartItems1 = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n            setCartItems(storedCartItems1);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n    }, [\n        cartItems\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedUser = JSON.parse(localStorage.getItem(\"jwtToken\")) || [];\n            setUser(storedCartItems);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        localStorage.setItem(\"\", JSON.stringify(user));\n    }, [\n        cartItems\n    ]);\n    const toggleCart = ()=>{\n        setCartVisible(!isCartVisible);\n        setLogginVisible(false);\n    };\n    const toggleLogin = ()=>{\n        setLogginVisible(!isLoginVisible);\n        setCartVisible(false);\n    };\n    const handleSelect = (type)=>{\n        setSelectedOption(type);\n    };\n    const handleWeater = (weater)=>{\n        setSelectedOption(weater);\n    };\n    const addToCart = (item)=>{\n        const existingItem = cartItems.find((cartItem)=>cartItem.name === item.name);\n        if (existingItem) {\n            const updatedCartItems = cartItems.map((cartItem)=>{\n                if (cartItem.name === item.name) {\n                    return {\n                        ...cartItem,\n                        qte: cartItem.qte + 1\n                    };\n                }\n                return cartItem;\n            });\n            setCartItems(updatedCartItems);\n        } else {\n            const newItem = {\n                name: item.name,\n                price: item.price,\n                src: item.src,\n                qte: 1,\n                description: item.description\n            };\n            setCartItems([\n                ...cartItems,\n                newItem\n            ]);\n        }\n    };\n    const handleMinus = (index)=>{\n        const updatedCartItems = [\n            ...cartItems\n        ];\n        if (updatedCartItems[index].qte > 1) {\n            updatedCartItems[index].qte--;\n            setCartItems(updatedCartItems);\n        } else if (updatedCartItems[index].qte <= 1) {\n            handleDelete(index);\n        }\n    };\n    const handlePlus = (index)=>{\n        const updatedCartItems = [\n            ...cartItems\n        ];\n        if (updatedCartItems[index].qte >= 0) {\n            updatedCartItems[index].qte++;\n            setCartItems(updatedCartItems);\n        }\n    };\n    const handleDelete = (index)=>{\n        const updatedCartItems = cartItems.filter((_, i)=>i !== index);\n        alert(\"remove from cart ?\");\n        setCartItems(updatedCartItems);\n    };\n    if (cartItems && Array.isArray(cartItems)) {\n        const totalSum = cartItems.reduce((acc, item)=>acc + item.price * item.qte, 0);\n        const totalProduct = cartItems.reduce((acc, item)=>acc + item.qte, 0);\n        (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n            localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n        }, [\n            cartItems\n        ]);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"App\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onCartToggle: toggleCart,\n                    totalProduct: totalProduct,\n                    onLogginToggle: toggleLogin\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 144,\n                    columnNumber: 7\n                }, this),\n                isLoginVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Login_Login__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    user: user\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 145,\n                    columnNumber: 26\n                }, this),\n                isCartVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart_Cart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    cartItems: cartItems,\n                    handleMinus: handleMinus,\n                    handlePlus: handlePlus,\n                    handleDelete: handleDelete,\n                    totalProduct: totalProduct,\n                    totalSum: totalSum\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 146,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onSelect: handleSelect,\n                    onWeaterSelect: handleWeater\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 147,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Body_Body__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    selectedOption: selectedOption,\n                    addToCart: addToCart,\n                    list: list\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 148,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n            lineNumber: 143,\n            columnNumber: 5\n        }, this);\n    }\n}\n_s(App, \"ksHFVXBSQ68Z7+vlV3FpeedJpj4=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_c1 = ()=>Promise.resolve(App), {\n    ssr: false\n}));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c1, \"%default%$dynamic\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L2FwcC9BcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMyQjtBQUNXO0FBQ0E7QUFDTjtBQUNOO0FBQ007QUFDRztBQUNTO0FBQ1Q7QUFJbEMsU0FBU1M7O0lBQ1IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLHFEQUFjLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNTLE1BQU1DLFFBQVEsR0FBR1YscURBQWMsQ0FBQyxFQUFFO0lBS3pDSSxnREFBU0EsQ0FBQztRQUNSTyxNQUFPLHNDQUNKQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksSUFDcEJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUVAsUUFBUU87SUFFMUIsR0FBRyxFQUFFO0lBSUwsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNlLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO1FBQ3pDLElBQUksT0FBT2lCLGlCQUFpQixhQUFhO1lBQ3pDLE1BQU1DLG1CQUFrQkMsS0FBS0MsS0FBSyxDQUFDSCxhQUFhSSxPQUFPLENBQUMsaUJBQWlCLEVBQUU7WUFDM0UsT0FBT0g7UUFFWDtJQUFDO0lBRUMsTUFBTSxDQUFDSSxlQUFlQyxlQUFlLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFLLENBQUN3QixnQkFBZ0JDLGlCQUFpQixHQUFHekIsK0NBQVFBLENBQUM7SUFFbkRDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxPQUFPZ0IsaUJBQWlCLGFBQWE7WUFFekMsTUFBTUMsbUJBQWtCQyxLQUFLQyxLQUFLLENBQUNILGFBQWFJLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUMzRUwsYUFBYUU7UUFDakI7SUFBQyxHQUFHLEVBQUU7SUFFSmpCLGdEQUFTQSxDQUFDO1FBQ1JnQixhQUFhUyxPQUFPLENBQUMsYUFBYVAsS0FBS1EsU0FBUyxDQUFD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QUNiLDhEQUFDcEUsc0RBQU1BO29CQUFDcUUsY0FBY25DO29CQUFZZ0MsY0FBY0E7b0JBQWNJLGdCQUFnQm5DOzs7Ozs7Z0JBQzdFTixnQ0FBa0IsOERBQUN6QixvREFBS0E7b0JBQUNPLE1BQU1BOzs7Ozs7Z0JBQy9CZ0IsK0JBQWlCLDhEQUFDeEIsa0RBQUlBO29CQUFDaUIsV0FBV0E7b0JBQVdpQyxhQUFhQTtvQkFBYUcsWUFBWUE7b0JBQVlELGNBQWNBO29CQUFjVyxjQUFjQTtvQkFBY0gsVUFBVUE7Ozs7Ozs4QkFDbEssOERBQUNoRSxzREFBTUE7b0JBQUN3RSxVQUFVbkM7b0JBQWNvQyxnQkFBZ0JsQzs7Ozs7OzhCQUNoRCw4REFBQ3JDLGtEQUFJQTtvQkFBQ2lCLGdCQUFnQkE7b0JBQWdCc0IsV0FBV0E7b0JBQVcvQixNQUFNQTs7Ozs7Ozs7Ozs7O0lBSXhFO0FBQ0E7R0EzSVVEO0tBQUFBO0FBNElWLCtEQUFlLE1BQUFELHdEQUFPQSxPQUFFLElBQU1rRSxRQUFRQyxPQUFPLENBQUNsRSxNQUFLO0lBQUNtRSxLQUFLO0FBQUssSUFBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9hcHAvQXBwLmpzPzAyOWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCAnLi4vLi4vZ2xvYmFscy5jc3MnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9OYXZiYXIvTmF2QmFyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9Cb2R5L0JvZHknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJ0IGZyb20gJy4uL0NhcnQvQ2FydCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vTG9naW4vTG9naW4nO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5cblxuXG4gZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcblxuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2l0ZW1MaXN0YClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiBzZXRMaXN0KGRhdGEpKVxuICAgXG4gIH0sIFtdKTtcblxuICAgICBcblxuICBjb25zdCBbc2VsZWN0ZWRPcHRpb24sIHNldFNlbGVjdGVkT3B0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IHN0b3JlZENhcnRJdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0SXRlbXNcIikpIHx8IFtdO1xuICAgIHJldHVybiBzdG9yZWRDYXJ0SXRlbXM7XG4gIFxufX0pO1xuICBcbiAgY29uc3QgW2lzQ2FydFZpc2libGUsIHNldENhcnRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdFtpc0xvZ2luVmlzaWJsZSwgc2V0TG9nZ2luVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICBcbiAgICBjb25zdCBzdG9yZWRDYXJ0SXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydEl0ZW1zXCIpKSB8fCBbXTtcbiAgICBzZXRDYXJ0SXRlbXMoc3RvcmVkQ2FydEl0ZW1zKTtcbn19LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRJdGVtc1wiLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKTtcbiAgICBcbiAgfSwgW2NhcnRJdGVtc10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgXG4gICAgY29uc3Qgc3RvcmVkVXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RUb2tlblwiKSkgfHwgW107XG4gICAgc2V0VXNlcihzdG9yZWRDYXJ0SXRlbXMpO1xufX0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICBcbiAgfSwgW2NhcnRJdGVtc10pO1xuICBcbiAgY29uc3QgdG9nZ2xlQ2FydCA9ICgpID0+IHtcbiAgICAgIHNldENhcnRWaXNpYmxlKCFpc0NhcnRWaXNpYmxlKTtcbiAgICAgIHNldExvZ2dpblZpc2libGUoZmFsc2UpXG4gICAgICBcbiAgfTtcbiAgY29uc3QgdG9nZ2xlTG9naW4gPSAoKSA9PiB7XG4gICAgc2V0TG9nZ2luVmlzaWJsZSghaXNMb2dpblZpc2libGUpO1xuICAgIHNldENhcnRWaXNpYmxlKGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9ICh0eXBlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRPcHRpb24odHlwZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVdlYXRlciA9ICh3ZWF0ZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbih3ZWF0ZXIpO1xuICB9O1xuICBjb25zdCBhZGRUb0NhcnQgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nSXRlbSA9IGNhcnRJdGVtcy5maW5kKGNhcnRJdGVtID0+IGNhcnRJdGVtLm5hbWUgPT09IGl0ZW0ubmFtZSk7XG5cbiAgICBpZiAoZXhpc3RpbmdJdGVtKSB7XG4gICAgICBjb25zdCB1cGRhdGVkQ2FydEl0ZW1zID0gY2FydEl0ZW1zLm1hcChjYXJ0SXRlbSA9PiB7XG4gICAgICAgIGlmIChjYXJ0SXRlbS5uYW1lID09PSBpdGVtLm5hbWUpIHtcbiAgICAgICAgICByZXR1cm4geyAuLi5jYXJ0SXRlbSwgcXRlOiBjYXJ0SXRlbS5xdGUgKyAxIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhcnRJdGVtO1xuICAgICAgfSk7XG4gIFxuICAgICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZWRDYXJ0SXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdJdGVtID0ge1xuICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgIHByaWNlOiBpdGVtLnByaWNlLFxuICAgICAgICBzcmM6IGl0ZW0uc3JjLFxuICAgICAgICBxdGU6IDEsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uXG4gICAgICB9O1xuICBcbiAgICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLCBuZXdJdGVtXSk7XG4gICAgfVxuICB9O1xuXG5cbiAgY29uc3QgaGFuZGxlTWludXMgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkQ2FydEl0ZW1zID0gWy4uLmNhcnRJdGVtc107XG4gICAgaWYgKHVwZGF0ZWRDYXJ0SXRlbXNbaW5kZXhdLnF0ZSA+IDEpIHtcbiAgICAgIHVwZGF0ZWRDYXJ0SXRlbXNbaW5kZXhdLnF0ZS0tO1xuICAgICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZWRDYXJ0SXRlbXMpO1xuICAgIH0gZWxzZSBpZiAodXBkYXRlZENhcnRJdGVtc1tpbmRleF0ucXRlIDw9IDEpIHtcbiAgICAgIFxuICAgICAgaGFuZGxlRGVsZXRlKGluZGV4KTtcbiAgICB9XG4gIH07ICBcblxuICBjb25zdCBoYW5kbGVQbHVzID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZENhcnRJdGVtcyA9IFsuLi5jYXJ0SXRlbXNdO1xuICAgIGlmICh1cGRhdGVkQ2FydEl0ZW1zW2luZGV4XS5xdGUgPj0gMCkge1xuICAgICAgdXBkYXRlZENhcnRJdGVtc1tpbmRleF0ucXRlKys7XG4gICAgICBzZXRDYXJ0SXRlbXModXBkYXRlZENhcnRJdGVtcyk7XG4gICAgfVxuICB9O1xuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkQ2FydEl0ZW1zID0gY2FydEl0ZW1zLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpO1xuICAgIGFsZXJ0KFwicmVtb3ZlIGZyb20gY2FydCA/XCIpO1xuICAgIHNldENhcnRJdGVtcyh1cGRhdGVkQ2FydEl0ZW1zKTtcbiAgfTtcbiAgaWYgKGNhcnRJdGVtcyAmJiBBcnJheS5pc0FycmF5KGNhcnRJdGVtcykpIHtcbiAgY29uc3QgdG90YWxTdW0gPSBjYXJ0SXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IGFjYyArIGl0ZW0ucHJpY2UgKiBpdGVtLnF0ZSwgMClcbiAgY29uc3QgdG90YWxQcm9kdWN0ID0gY2FydEl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBhY2MgKyBpdGVtLnF0ZSwgMClcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0SXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1zKSk7XG4gIH0sIFtjYXJ0SXRlbXNdKTtcblxuICBcblxuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8SGVhZGVyIG9uQ2FydFRvZ2dsZT17dG9nZ2xlQ2FydH0gdG90YWxQcm9kdWN0PXt0b3RhbFByb2R1Y3R9IG9uTG9nZ2luVG9nZ2xlPXt0b2dnbGVMb2dpbn0gLz5cbiAgICAgIHtpc0xvZ2luVmlzaWJsZSAmJiA8TG9naW4gdXNlcj17dXNlcn0gLz4gfVxuICAgICAge2lzQ2FydFZpc2libGUgJiYgPENhcnQgY2FydEl0ZW1zPXtjYXJ0SXRlbXN9IGhhbmRsZU1pbnVzPXtoYW5kbGVNaW51c30gaGFuZGxlUGx1cz17aGFuZGxlUGx1c30gaGFuZGxlRGVsZXRlPXtoYW5kbGVEZWxldGV9IHRvdGFsUHJvZHVjdD17dG90YWxQcm9kdWN0fSB0b3RhbFN1bT17dG90YWxTdW19ICAvPn1cbiAgICAgIDxOYXZiYXIgb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0gb25XZWF0ZXJTZWxlY3Q9e2hhbmRsZVdlYXRlcn0gLz5cbiAgICAgIDxCb2R5IHNlbGVjdGVkT3B0aW9uPXtzZWxlY3RlZE9wdGlvbn0gYWRkVG9DYXJ0PXthZGRUb0NhcnR9IGxpc3Q9e2xpc3R9Lz5cbiAgICA8L2Rpdj5cbiAgKTtcblxufVxufVxuZXhwb3J0IGRlZmF1bHQgZHluYW1pYyAoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKEFwcCkse3NzcjogZmFsc2V9ICkiXSwibmFtZXMiOlsiTmF2YmFyIiwiSGVhZGVyIiwiQm9keSIsIlJlYWN0IiwiQ2FydCIsIkxvZ2luIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkeW5hbWljIiwiQXBwIiwibGlzdCIsInNldExpc3QiLCJ1c2VyIiwic2V0VXNlciIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic2VsZWN0ZWRPcHRpb24iLCJzZXRTZWxlY3RlZE9wdGlvbiIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsImxvY2FsU3RvcmFnZSIsInN0b3JlZENhcnRJdGVtcyIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJpc0NhcnRWaXNpYmxlIiwic2V0Q2FydFZpc2libGUiLCJpc0xvZ2luVmlzaWJsZSIsInNldExvZ2dpblZpc2libGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic3RvcmVkVXNlciIsInRvZ2dsZUNhcnQiLCJ0b2dnbGVMb2dpbiIsImhhbmRsZVNlbGVjdCIsInR5cGUiLCJoYW5kbGVXZWF0ZXIiLCJ3ZWF0ZXIiLCJhZGRUb0NhcnQiLCJpdGVtIiwiZXhpc3RpbmdJdGVtIiwiZmluZCIsImNhcnRJdGVtIiwibmFtZSIsInVwZGF0ZWRDYXJ0SXRlbXMiLCJtYXAiLCJxdGUiLCJuZXdJdGVtIiwicHJpY2UiLCJzcmMiLCJkZXNjcmlwdGlvbiIsImhhbmRsZU1pbnVzIiwiaW5kZXgiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVQbHVzIiwiZmlsdGVyIiwiXyIsImkiLCJhbGVydCIsIkFycmF5IiwiaXNBcnJheSIsInRvdGFsU3VtIiwicmVkdWNlIiwiYWNjIiwidG90YWxQcm9kdWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DYXJ0VG9nZ2xlIiwib25Mb2dnaW5Ub2dnbGUiLCJvblNlbGVjdCIsIm9uV2VhdGVyU2VsZWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzc3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/app/App.js\n"));

/***/ })

});