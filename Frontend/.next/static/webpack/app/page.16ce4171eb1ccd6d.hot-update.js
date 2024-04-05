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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _Navbar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navbar/NavBar */ \"(app-pages-browser)/./src/app/component/Navbar/NavBar.js\");\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header/Header */ \"(app-pages-browser)/./src/app/component/Header/Header.js\");\n/* harmony import */ var _Body_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Body/Body */ \"(app-pages-browser)/./src/app/component/Body/Body.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Cart_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Cart/Cart */ \"(app-pages-browser)/./src/app/component/Cart/Cart.js\");\n/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Login/Login */ \"(app-pages-browser)/./src/app/component/Login/Login.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\na;\nfunction App() {\n    _s();\n    const [list, setList] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        fetch(\"http://localhost:4000/api/itemList\").then((res)=>res.json()).then((data)=>setList(data));\n    }, []);\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedCartItems = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n            return storedCartItems;\n        }\n    });\n    const [isCartVisible, setCartVisible] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [isLoginVisible, setLogginVisible] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedCartItems = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n            setCartItems(storedCartItems);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n    }, [\n        cartItems\n    ]);\n    const toggleCart = ()=>{\n        setCartVisible(!isCartVisible);\n        setLogginVisible(false);\n    };\n    const toggleLogin = ()=>{\n        setLogginVisible(!isLoginVisible);\n        setCartVisible(false);\n    };\n    const handleSelect = (type)=>{\n        setSelectedOption(type);\n    };\n    const handleWeater = (weater)=>{\n        setSelectedOption(weater);\n    };\n    const addToCart = (item)=>{\n        const existingItem = cartItems.find((cartItem)=>cartItem.name === item.name);\n        if (existingItem) {\n            const updatedCartItems = cartItems.map((cartItem)=>{\n                if (cartItem.name === item.name) {\n                    return {\n                        ...cartItem,\n                        qte: cartItem.qte + 1\n                    };\n                }\n                return cartItem;\n            });\n            setCartItems(updatedCartItems);\n        } else {\n            const newItem = {\n                name: item.name,\n                price: item.price,\n                src: item.src,\n                qte: 1,\n                description: item.description\n            };\n            setCartItems([\n                ...cartItems,\n                newItem\n            ]);\n        }\n    };\n    const handleMinus = (index)=>{\n        const updatedCartItems = [\n            ...cartItems\n        ];\n        if (updatedCartItems[index].qte > 1) {\n            updatedCartItems[index].qte--;\n            setCartItems(updatedCartItems);\n        } else if (updatedCartItems[index].qte <= 1) {\n            handleDelete(index);\n        }\n    };\n    const handlePlus = (index)=>{\n        const updatedCartItems = [\n            ...cartItems\n        ];\n        if (updatedCartItems[index].qte >= 0) {\n            updatedCartItems[index].qte++;\n            setCartItems(updatedCartItems);\n        }\n    };\n    const handleDelete = (index)=>{\n        const updatedCartItems = cartItems.filter((_, i)=>i !== index);\n        alert(\"remove from cart ?\");\n        setCartItems(updatedCartItems);\n    };\n    if (cartItems && Array.isArray(cartItems)) {\n        const totalSum = cartItems.reduce((acc, item)=>acc + item.price * item.qte, 0);\n        const totalProduct = cartItems.reduce((acc, item)=>acc + item.qte, 0);\n        (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n            localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n        }, [\n            cartItems\n        ]);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"App\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onCartToggle: toggleCart,\n                    totalProduct: totalProduct,\n                    onLogginToggle: toggleLogin\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 133,\n                    columnNumber: 7\n                }, this),\n                isLoginVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Login_Login__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    user: user\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 134,\n                    columnNumber: 26\n                }, this),\n                isCartVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart_Cart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    cartItems: cartItems,\n                    handleMinus: handleMinus,\n                    handlePlus: handlePlus,\n                    handleDelete: handleDelete,\n                    totalProduct: totalProduct,\n                    totalSum: totalSum\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 135,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onSelect: handleSelect,\n                    onWeaterSelect: handleWeater\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 136,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Body_Body__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    selectedOption: selectedOption,\n                    addToCart: addToCart,\n                    list: list\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 137,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n            lineNumber: 132,\n            columnNumber: 5\n        }, this);\n    }\n}\n_s(App, \"O9A9N2SGO1aCuBTbvpN1suweMlY=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_c1 = ()=>Promise.resolve(App), {\n    ssr: false\n}));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c1, \"%default%$dynamic\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L2FwcC9BcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMyQjtBQUNXO0FBQ0E7QUFDTjtBQUNOO0FBQ007QUFDRztBQUNTO0FBQ1Q7QUFDbkNTO0FBR0MsU0FBU0M7O0lBQ1IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULHFEQUFjLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR1gscURBQWMsQ0FBQyxFQUFFO0lBS3pDSSxnREFBU0EsQ0FBQztRQUNSUSxNQUFPLHNDQUNKQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksSUFDcEJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUVAsUUFBUU87SUFFMUIsR0FBRyxFQUFFO0lBSUwsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHZiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNnQixXQUFXQyxhQUFhLEdBQUdqQiwrQ0FBUUEsQ0FBQztRQUN6QyxJQUFJLE9BQU9rQixpQkFBaUIsYUFBYTtZQUN6QyxNQUFNQyxrQkFBa0JDLEtBQUtDLEtBQUssQ0FBQ0gsYUFBYUksT0FBTyxDQUFDLGlCQUFpQixFQUFFO1lBQzNFLE9BQU9IO1FBRVg7SUFBQztJQUVDLE1BQU0sQ0FBQ0ksZUFBZUMsZUFBZSxHQUFHeEIsK0NBQVFBLENBQUM7SUFFakQsTUFBSyxDQUFDeUIsZ0JBQWdCQyxpQkFBaUIsR0FBRzFCLCtDQUFRQSxDQUFDO0lBRW5EQyxnREFBU0EsQ0FBQztRQUNSLElBQUksT0FBT2lCLGlCQUFpQixhQUFhO1lBRXpDLE1BQU1DLGtCQUFrQkMsS0FBS0MsS0FBSyxDQUFDSCxhQUFhSSxPQUFPLENBQUMsaUJBQWlCLEVBQUU7WUFDM0VMLGFBQWFFO1FBQ2pCO0lBQUMsR0FBRyxFQUFFO0lBRUpsQixnREFBU0EsQ0FBQztRQUNSaUIsYUFBYVMsT0FBTyxDQUFDLGFBQWFQLEtBQUtRLFNB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QVVBOzs7Ozs7OEJBQ2xLLDhEQUFDaEUsc0RBQU1BO29CQUFDd0UsVUFBVW5DO29CQUFjb0MsZ0JBQWdCbEM7Ozs7Ozs4QkFDaEQsOERBQUNyQyxrREFBSUE7b0JBQUNrQixnQkFBZ0JBO29CQUFnQnFCLFdBQVdBO29CQUFXOUIsTUFBTUE7Ozs7Ozs7Ozs7OztJQUl4RTtBQUNBO0dBaElVRDtLQUFBQTtBQWlJViwrREFBZSxNQUFBRix3REFBT0EsT0FBRSxJQUFNa0UsUUFBUUMsT0FBTyxDQUFDakUsTUFBSztJQUFDa0UsS0FBSztBQUFLLElBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnQvYXBwL0FwcC5qcz8wMjljIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgJy4uLy4uL2dsb2JhbHMuY3NzJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vTmF2YmFyL05hdkJhcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vQm9keS9Cb2R5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FydCBmcm9tICcuLi9DYXJ0L0NhcnQnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL0xvZ2luL0xvZ2luJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuYVxuXG5cbiBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvaXRlbUxpc3RgKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHNldExpc3QoZGF0YSkpXG4gICBcbiAgfSwgW10pO1xuXG4gICAgIFxuXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3Qgc3RvcmVkQ2FydEl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRJdGVtc1wiKSkgfHwgW107XG4gICAgcmV0dXJuIHN0b3JlZENhcnRJdGVtcztcbiAgXG59fSk7XG4gIFxuICBjb25zdCBbaXNDYXJ0VmlzaWJsZSwgc2V0Q2FydFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0W2lzTG9naW5WaXNpYmxlLCBzZXRMb2dnaW5WaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgIFxuICAgIGNvbnN0IHN0b3JlZENhcnRJdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0SXRlbXNcIikpIHx8IFtdO1xuICAgIHNldENhcnRJdGVtcyhzdG9yZWRDYXJ0SXRlbXMpO1xufX0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydEl0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcykpO1xuICAgIFxuICB9LCBbY2FydEl0ZW1zXSk7XG4gIFxuICBjb25zdCB0b2dnbGVDYXJ0ID0gKCkgPT4ge1xuICAgICAgc2V0Q2FydFZpc2libGUoIWlzQ2FydFZpc2libGUpO1xuICAgICAgc2V0TG9nZ2luVmlzaWJsZShmYWxzZSlcbiAgICAgIFxuICB9O1xuICBjb25zdCB0b2dnbGVMb2dpbiA9ICgpID0+IHtcbiAgICBzZXRMb2dnaW5WaXNpYmxlKCFpc0xvZ2luVmlzaWJsZSk7XG4gICAgc2V0Q2FydFZpc2libGUoZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHR5cGUpID0+IHtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbih0eXBlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlV2VhdGVyID0gKHdlYXRlcikgPT4ge1xuICAgIHNldFNlbGVjdGVkT3B0aW9uKHdlYXRlcik7XG4gIH07XG4gIGNvbnN0IGFkZFRvQ2FydCA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdJdGVtID0gY2FydEl0ZW1zLmZpbmQoY2FydEl0ZW0gPT4gY2FydEl0ZW0ubmFtZSA9PT0gaXRlbS5uYW1lKTtcblxuICAgIGlmIChleGlzdGluZ0l0ZW0pIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbXMgPSBjYXJ0SXRlbXMubWFwKGNhcnRJdGVtID0+IHtcbiAgICAgICAgaWYgKGNhcnRJdGVtLm5hbWUgPT09IGl0ZW0ubmFtZSkge1xuICAgICAgICAgIHJldHVybiB7IC4uLmNhcnRJdGVtLCBxdGU6IGNhcnRJdGVtLnF0ZSArIDEgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FydEl0ZW07XG4gICAgICB9KTtcbiAgXG4gICAgICBzZXRDYXJ0SXRlbXModXBkYXRlZENhcnRJdGVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7XG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2UsXG4gICAgICAgIHNyYzogaXRlbS5zcmMsXG4gICAgICAgIHF0ZTogMSxcbiAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb25cbiAgICAgIH07XG4gIFxuICAgICAgc2V0Q2FydEl0ZW1zKFsuLi5jYXJ0SXRlbXMsIG5ld0l0ZW1dKTtcbiAgICB9XG4gIH07XG5cblxuICBjb25zdCBoYW5kbGVNaW51cyA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbXMgPSBbLi4uY2FydEl0ZW1zXTtcbiAgICBpZiAodXBkYXRlZENhcnRJdGVtc1tpbmRleF0ucXRlID4gMSkge1xuICAgICAgdXBkYXRlZENhcnRJdGVtc1tpbmRleF0ucXRlLS07XG4gICAgICBzZXRDYXJ0SXRlbXModXBkYXRlZENhcnRJdGVtcyk7XG4gICAgfSBlbHNlIGlmICh1cGRhdGVkQ2FydEl0ZW1zW2luZGV4XS5xdGUgPD0gMSkge1xuICAgICAgXG4gICAgICBoYW5kbGVEZWxldGUoaW5kZXgpO1xuICAgIH1cbiAgfTsgIFxuXG4gIGNvbnN0IGhhbmRsZVBsdXMgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkQ2FydEl0ZW1zID0gWy4uLmNhcnRJdGVtc107XG4gICAgaWYgKHVwZGF0ZWRDYXJ0SXRlbXNbaW5kZXhdLnF0ZSA+PSAwKSB7XG4gICAgICB1cGRhdGVkQ2FydEl0ZW1zW2luZGV4XS5xdGUrKztcbiAgICAgIHNldENhcnRJdGVtcyh1cGRhdGVkQ2FydEl0ZW1zKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbXMgPSBjYXJ0SXRlbXMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleCk7XG4gICAgYWxlcnQoXCJyZW1vdmUgZnJvbSBjYXJ0ID9cIik7XG4gICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZWRDYXJ0SXRlbXMpO1xuICB9O1xuICBpZiAoY2FydEl0ZW1zICYmIEFycmF5LmlzQXJyYXkoY2FydEl0ZW1zKSkge1xuICBjb25zdCB0b3RhbFN1bSA9IGNhcnRJdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5wcmljZSAqIGl0ZW0ucXRlLCAwKVxuICBjb25zdCB0b3RhbFByb2R1Y3QgPSBjYXJ0SXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IGFjYyArIGl0ZW0ucXRlLCAwKVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRJdGVtc1wiLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKTtcbiAgfSwgW2NhcnRJdGVtc10pO1xuXG4gIFxuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxIZWFkZXIgb25DYXJ0VG9nZ2xlPXt0b2dnbGVDYXJ0fSB0b3RhbFByb2R1Y3Q9e3RvdGFsUHJvZHVjdH0gb25Mb2dnaW5Ub2dnbGU9e3RvZ2dsZUxvZ2lufSAvPlxuICAgICAge2lzTG9naW5WaXNpYmxlICYmIDxMb2dpbiB1c2VyPXt1c2VyfSAvPiB9XG4gICAgICB7aXNDYXJ0VmlzaWJsZSAmJiA8Q2FydCBjYXJ0SXRlbXM9e2NhcnRJdGVtc30gaGFuZGxlTWludXM9e2hhbmRsZU1pbnVzfSBoYW5kbGVQbHVzPXtoYW5kbGVQbHVzfSBoYW5kbGVEZWxldGU9e2hhbmRsZURlbGV0ZX0gdG90YWxQcm9kdWN0PXt0b3RhbFByb2R1Y3R9IHRvdGFsU3VtPXt0b3RhbFN1bX0gIC8+fVxuICAgICAgPE5hdmJhciBvblNlbGVjdD17aGFuZGxlU2VsZWN0fSBvbldlYXRlclNlbGVjdD17aGFuZGxlV2VhdGVyfSAvPlxuICAgICAgPEJvZHkgc2VsZWN0ZWRPcHRpb249e3NlbGVjdGVkT3B0aW9ufSBhZGRUb0NhcnQ9e2FkZFRvQ2FydH0gbGlzdD17bGlzdH0vPlxuICAgIDwvZGl2PlxuICApO1xuXG59XG59XG5leHBvcnQgZGVmYXVsdCBkeW5hbWljICgoKSA9PiBQcm9taXNlLnJlc29sdmUoQXBwKSx7c3NyOiBmYWxzZX0gKSJdLCJuYW1lcyI6WyJOYXZiYXIiLCJIZWFkZXIiLCJCb2R5IiwiUmVhY3QiLCJDYXJ0IiwiTG9naW4iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImR5bmFtaWMiLCJhIiwiQXBwIiwibGlzdCIsInNldExpc3QiLCJ1c2VyIiwic2V0VXNlciIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic2VsZWN0ZWRPcHRpb24iLCJzZXRTZWxlY3RlZE9wdGlvbiIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsImxvY2FsU3RvcmFnZSIsInN0b3JlZENhcnRJdGVtcyIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJpc0NhcnRWaXNpYmxlIiwic2V0Q2FydFZpc2libGUiLCJpc0xvZ2luVmlzaWJsZSIsInNldExvZ2dpblZpc2libGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidG9nZ2xlQ2FydCIsInRvZ2dsZUxvZ2luIiwiaGFuZGxlU2VsZWN0IiwidHlwZSIsImhhbmRsZVdlYXRlciIsIndlYXRlciIsImFkZFRvQ2FydCIsIml0ZW0iLCJleGlzdGluZ0l0ZW0iLCJmaW5kIiwiY2FydEl0ZW0iLCJuYW1lIiwidXBkYXRlZENhcnRJdGVtcyIsIm1hcCIsInF0ZSIsIm5ld0l0ZW0iLCJwcmljZSIsInNyYyIsImRlc2NyaXB0aW9uIiwiaGFuZGxlTWludXMiLCJpbmRleCIsImhhbmRsZURlbGV0ZSIsImhhbmRsZVBsdXMiLCJmaWx0ZXIiLCJfIiwiaSIsImFsZXJ0IiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWxTdW0iLCJyZWR1Y2UiLCJhY2MiLCJ0b3RhbFByb2R1Y3QiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNhcnRUb2dnbGUiLCJvbkxvZ2dpblRvZ2dsZSIsIm9uU2VsZWN0Iiwib25XZWF0ZXJTZWxlY3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/app/App.js\n"));

/***/ })

});