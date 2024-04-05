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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _Navbar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navbar/NavBar */ \"(app-pages-browser)/./src/app/component/Navbar/NavBar.js\");\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header/Header */ \"(app-pages-browser)/./src/app/component/Header/Header.js\");\n/* harmony import */ var _Body_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Body/Body */ \"(app-pages-browser)/./src/app/component/Body/Body.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Cart_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Cart/Cart */ \"(app-pages-browser)/./src/app/component/Cart/Cart.js\");\n/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Login/Login */ \"(app-pages-browser)/./src/app/component/Login/Login.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction App() {\n    _s();\n    const [list, setList] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        fetch(\"http://localhost:4000/api/itemList\").then((res)=>res.json()).then((data)=>setList(data));\n    }, []);\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedCartItems = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n            return storedCartItems;\n        }\n    });\n    const [isCartVisible, setCartVisible] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [isLoginVisible, setLogginVisible] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedCartItems = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n            setCartItems(storedCartItems);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n    }, [\n        cartItems\n    ]);\n    const toggleCart = ()=>{\n        setCartVisible(!isCartVisible);\n        setLogginVisible(false);\n    };\n    const toggleLogin = ()=>{\n        setLogginVisible(!isLoginVisible);\n        setCartVisible(false);\n    };\n    const handleSelect = (type)=>{\n        setSelectedOption(type);\n    };\n    const handleWeater = (weater)=>{\n        setSelectedOption(weater);\n    };\n    const addToCart = (item)=>{\n        const existingItem = cartItems.find((cartItem)=>cartItem.name === item.name);\n        if (existingItem) {\n            const updatedCartItems = cartItems.map((cartItem)=>{\n                if (cartItem.name === item.name) {\n                    return {\n                        ...cartItem,\n                        qte: cartItem.qte + 1\n                    };\n                }\n                return cartItem;\n            });\n            setCartItems(updatedCartItems);\n        } else {\n            const newItem = {\n                name: item.name,\n                price: item.price,\n                src: item.src,\n                qte: 1,\n                description: item.description\n            };\n            setCartItems([\n                ...cartItems,\n                newItem\n            ]);\n        }\n    };\n    const handleMinus = (index)=>{\n        const updatedCartItems = [\n            ...cartItems\n        ];\n        if (updatedCartItems[index].qte > 1) {\n            updatedCartItems[index].qte--;\n            setCartItems(updatedCartItems);\n        } else if (updatedCartItems[index].qte <= 1) {\n            handleDelete(index);\n        }\n    };\n    const handlePlus = (index)=>{\n        const updatedCartItems = [\n            ...cartItems\n        ];\n        if (updatedCartItems[index].qte >= 0) {\n            updatedCartItems[index].qte++;\n            setCartItems(updatedCartItems);\n        }\n    };\n    const handleDelete = (index)=>{\n        const updatedCartItems = cartItems.filter((_, i)=>i !== index);\n        alert(\"remove from cart ?\");\n        setCartItems(updatedCartItems);\n    };\n    if (cartItems && Array.isArray(cartItems)) {\n        const totalSum = cartItems.reduce((acc, item)=>acc + item.price * item.qte, 0);\n        const totalProduct = cartItems.reduce((acc, item)=>acc + item.qte, 0);\n        (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n            localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n        }, [\n            cartItems\n        ]);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"App\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onCartToggle: toggleCart,\n                    totalProduct: totalProduct,\n                    onLogginToggle: toggleLogin\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 133,\n                    columnNumber: 7\n                }, this),\n                isLoginVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Login_Login__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 134,\n                    columnNumber: 26\n                }, this),\n                isCartVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart_Cart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    cartItems: cartItems,\n                    handleMinus: handleMinus,\n                    handlePlus: handlePlus,\n                    handleDelete: handleDelete,\n                    totalProduct: totalProduct,\n                    totalSum: totalSum\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 135,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onSelect: handleSelect,\n                    onWeaterSelect: handleWeater\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 136,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Body_Body__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    selectedOption: selectedOption,\n                    addToCart: addToCart,\n                    list: list\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 137,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n            lineNumber: 132,\n            columnNumber: 5\n        }, this);\n    }\n}\n_s(App, \"O9A9N2SGO1aCuBTbvpN1suweMlY=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_c1 = ()=>Promise.resolve(App), {\n    ssr: false\n}));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c1, \"%default%$dynamic\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L2FwcC9BcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMyQjtBQUNXO0FBQ0E7QUFDTjtBQUNOO0FBQ007QUFDRztBQUNTO0FBQ1Q7QUFJbEMsU0FBU1M7O0lBQ1IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLHFEQUFjLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNTLE1BQU1DLFFBQVEsR0FBR1YscURBQWMsQ0FBQyxFQUFFO0lBS3pDSSxnREFBU0EsQ0FBQztRQUNSTyxNQUFPLHNDQUNKQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksSUFDcEJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUVAsUUFBUU87SUFFMUIsR0FBRyxFQUFFO0lBSUwsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNlLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO1FBQ3pDLElBQUksT0FBT2lCLGlCQUFpQixhQUFhO1lBQ3pDLE1BQU1DLGtCQUFrQkMsS0FBS0MsS0FBSyxDQUFDSCxhQUFhSSxPQUFPLENBQUMsaUJBQWlCLEVBQUU7WUFDM0UsT0FBT0g7UUFFWDtJQUFDO0lBRUMsTUFBTSxDQUFDSSxlQUFlQyxlQUFlLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFLLENBQUN3QixnQkFBZ0JDLGlCQUFpQixHQUFHekIsK0NBQVFBLENBQUM7SUFFbkRDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxPQUFPZ0IsaUJBQWlCLGFBQWE7WUFFekMsTUFBTUMsa0JBQWtCQyxLQUFLQyxLQUFLLENBQUNILGFBQWFJLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUMzRUwsYUFBYUU7UUFDakI7SUFBQyxHQUFHLEVBQUU7SUFFSmpCLGdEQUFTQSxDQUFDO1FBQ1JnQixhQUFhUyxPQUFPLENBQUMsYUFBYVAsS0FBS1EsU0FBUyxDQUFD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L0Qsc0RBQU1BO29CQUFDdUUsVUFBVW5DO29CQUFjb0MsZ0JBQWdCbEM7Ozs7Ozs4QkFDaEQsOERBQUNwQyxrREFBSUE7b0JBQUNpQixnQkFBZ0JBO29CQUFnQnFCLFdBQVdBO29CQUFXOUIsTUFBTUE7Ozs7Ozs7Ozs7OztJQUl4RTtBQUNBO0dBaElVRDtLQUFBQTtBQWlJViwrREFBZSxNQUFBRCx3REFBT0EsT0FBRSxJQUFNaUUsUUFBUUMsT0FBTyxDQUFDakUsTUFBSztJQUFDa0UsS0FBSztBQUFLLElBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnQvYXBwL0FwcC5qcz8wMjljIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgJy4uLy4uL2dsb2JhbHMuY3NzJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vTmF2YmFyL05hdkJhcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vQm9keS9Cb2R5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FydCBmcm9tICcuLi9DYXJ0L0NhcnQnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL0xvZ2luL0xvZ2luJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuXG5cblxuIGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9pdGVtTGlzdGApXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gc2V0TGlzdChkYXRhKSlcbiAgIFxuICB9LCBbXSk7XG5cbiAgICAgXG5cbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZXRTZWxlY3RlZE9wdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCBzdG9yZWRDYXJ0SXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydEl0ZW1zXCIpKSB8fCBbXTtcbiAgICByZXR1cm4gc3RvcmVkQ2FydEl0ZW1zO1xuICBcbn19KTtcbiAgXG4gIGNvbnN0IFtpc0NhcnRWaXNpYmxlLCBzZXRDYXJ0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3RbaXNMb2dpblZpc2libGUsIHNldExvZ2dpblZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgXG4gICAgY29uc3Qgc3RvcmVkQ2FydEl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRJdGVtc1wiKSkgfHwgW107XG4gICAgc2V0Q2FydEl0ZW1zKHN0b3JlZENhcnRJdGVtcyk7XG59fSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0SXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1zKSk7XG4gICAgXG4gIH0sIFtjYXJ0SXRlbXNdKTtcbiAgXG4gIGNvbnN0IHRvZ2dsZUNhcnQgPSAoKSA9PiB7XG4gICAgICBzZXRDYXJ0VmlzaWJsZSghaXNDYXJ0VmlzaWJsZSk7XG4gICAgICBzZXRMb2dnaW5WaXNpYmxlKGZhbHNlKVxuICAgICAgXG4gIH07XG4gIGNvbnN0IHRvZ2dsZUxvZ2luID0gKCkgPT4ge1xuICAgIHNldExvZ2dpblZpc2libGUoIWlzTG9naW5WaXNpYmxlKTtcbiAgICBzZXRDYXJ0VmlzaWJsZShmYWxzZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAodHlwZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkT3B0aW9uKHR5cGUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVXZWF0ZXIgPSAod2VhdGVyKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRPcHRpb24od2VhdGVyKTtcbiAgfTtcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCBleGlzdGluZ0l0ZW0gPSBjYXJ0SXRlbXMuZmluZChjYXJ0SXRlbSA9PiBjYXJ0SXRlbS5uYW1lID09PSBpdGVtLm5hbWUpO1xuXG4gICAgaWYgKGV4aXN0aW5nSXRlbSkge1xuICAgICAgY29uc3QgdXBkYXRlZENhcnRJdGVtcyA9IGNhcnRJdGVtcy5tYXAoY2FydEl0ZW0gPT4ge1xuICAgICAgICBpZiAoY2FydEl0ZW0ubmFtZSA9PT0gaXRlbS5uYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHsgLi4uY2FydEl0ZW0sIHF0ZTogY2FydEl0ZW0ucXRlICsgMSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXJ0SXRlbTtcbiAgICAgIH0pO1xuICBcbiAgICAgIHNldENhcnRJdGVtcyh1cGRhdGVkQ2FydEl0ZW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV3SXRlbSA9IHtcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICBwcmljZTogaXRlbS5wcmljZSxcbiAgICAgICAgc3JjOiBpdGVtLnNyYyxcbiAgICAgICAgcXRlOiAxLFxuICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvblxuICAgICAgfTtcbiAgXG4gICAgICBzZXRDYXJ0SXRlbXMoWy4uLmNhcnRJdGVtcywgbmV3SXRlbV0pO1xuICAgIH1cbiAgfTtcblxuXG4gIGNvbnN0IGhhbmRsZU1pbnVzID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZENhcnRJdGVtcyA9IFsuLi5jYXJ0SXRlbXNdO1xuICAgIGlmICh1cGRhdGVkQ2FydEl0ZW1zW2luZGV4XS5xdGUgPiAxKSB7XG4gICAgICB1cGRhdGVkQ2FydEl0ZW1zW2luZGV4XS5xdGUtLTtcbiAgICAgIHNldENhcnRJdGVtcyh1cGRhdGVkQ2FydEl0ZW1zKTtcbiAgICB9IGVsc2UgaWYgKHVwZGF0ZWRDYXJ0SXRlbXNbaW5kZXhdLnF0ZSA8PSAxKSB7XG4gICAgICBcbiAgICAgIGhhbmRsZURlbGV0ZShpbmRleCk7XG4gICAgfVxuICB9OyAgXG5cbiAgY29uc3QgaGFuZGxlUGx1cyA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbXMgPSBbLi4uY2FydEl0ZW1zXTtcbiAgICBpZiAodXBkYXRlZENhcnRJdGVtc1tpbmRleF0ucXRlID49IDApIHtcbiAgICAgIHVwZGF0ZWRDYXJ0SXRlbXNbaW5kZXhdLnF0ZSsrO1xuICAgICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZWRDYXJ0SXRlbXMpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZENhcnRJdGVtcyA9IGNhcnRJdGVtcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KTtcbiAgICBhbGVydChcInJlbW92ZSBmcm9tIGNhcnQgP1wiKTtcbiAgICBzZXRDYXJ0SXRlbXModXBkYXRlZENhcnRJdGVtcyk7XG4gIH07XG4gIGlmIChjYXJ0SXRlbXMgJiYgQXJyYXkuaXNBcnJheShjYXJ0SXRlbXMpKSB7XG4gIGNvbnN0IHRvdGFsU3VtID0gY2FydEl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBhY2MgKyBpdGVtLnByaWNlICogaXRlbS5xdGUsIDApXG4gIGNvbnN0IHRvdGFsUHJvZHVjdCA9IGNhcnRJdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5xdGUsIDApXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydEl0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcykpO1xuICB9LCBbY2FydEl0ZW1zXSk7XG5cbiAgXG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPEhlYWRlciBvbkNhcnRUb2dnbGU9e3RvZ2dsZUNhcnR9IHRvdGFsUHJvZHVjdD17dG90YWxQcm9kdWN0fSBvbkxvZ2dpblRvZ2dsZT17dG9nZ2xlTG9naW59IC8+XG4gICAgICB7aXNMb2dpblZpc2libGUgJiYgPExvZ2luIC8+fVxuICAgICAge2lzQ2FydFZpc2libGUgJiYgPENhcnQgY2FydEl0ZW1zPXtjYXJ0SXRlbXN9IGhhbmRsZU1pbnVzPXtoYW5kbGVNaW51c30gaGFuZGxlUGx1cz17aGFuZGxlUGx1c30gaGFuZGxlRGVsZXRlPXtoYW5kbGVEZWxldGV9IHRvdGFsUHJvZHVjdD17dG90YWxQcm9kdWN0fSB0b3RhbFN1bT17dG90YWxTdW19ICAvPn1cbiAgICAgIDxOYXZiYXIgb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0gb25XZWF0ZXJTZWxlY3Q9e2hhbmRsZVdlYXRlcn0gLz5cbiAgICAgIDxCb2R5IHNlbGVjdGVkT3B0aW9uPXtzZWxlY3RlZE9wdGlvbn0gYWRkVG9DYXJ0PXthZGRUb0NhcnR9IGxpc3Q9e2xpc3R9Lz5cbiAgICA8L2Rpdj5cbiAgKTtcblxufVxufVxuZXhwb3J0IGRlZmF1bHQgZHluYW1pYyAoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKEFwcCkse3NzcjogZmFsc2V9ICkiXSwibmFtZXMiOlsiTmF2YmFyIiwiSGVhZGVyIiwiQm9keSIsIlJlYWN0IiwiQ2FydCIsIkxvZ2luIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkeW5hbWljIiwiQXBwIiwibGlzdCIsInNldExpc3QiLCJ1c2VyIiwic2V0VXNlciIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic2VsZWN0ZWRPcHRpb24iLCJzZXRTZWxlY3RlZE9wdGlvbiIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsImxvY2FsU3RvcmFnZSIsInN0b3JlZENhcnRJdGVtcyIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJpc0NhcnRWaXNpYmxlIiwic2V0Q2FydFZpc2libGUiLCJpc0xvZ2luVmlzaWJsZSIsInNldExvZ2dpblZpc2libGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidG9nZ2xlQ2FydCIsInRvZ2dsZUxvZ2luIiwiaGFuZGxlU2VsZWN0IiwidHlwZSIsImhhbmRsZVdlYXRlciIsIndlYXRlciIsImFkZFRvQ2FydCIsIml0ZW0iLCJleGlzdGluZ0l0ZW0iLCJmaW5kIiwiY2FydEl0ZW0iLCJuYW1lIiwidXBkYXRlZENhcnRJdGVtcyIsIm1hcCIsInF0ZSIsIm5ld0l0ZW0iLCJwcmljZSIsInNyYyIsImRlc2NyaXB0aW9uIiwiaGFuZGxlTWludXMiLCJpbmRleCIsImhhbmRsZURlbGV0ZSIsImhhbmRsZVBsdXMiLCJmaWx0ZXIiLCJfIiwiaSIsImFsZXJ0IiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWxTdW0iLCJyZWR1Y2UiLCJhY2MiLCJ0b3RhbFByb2R1Y3QiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNhcnRUb2dnbGUiLCJvbkxvZ2dpblRvZ2dsZSIsIm9uU2VsZWN0Iiwib25XZWF0ZXJTZWxlY3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/app/App.js\n"));

/***/ })

});