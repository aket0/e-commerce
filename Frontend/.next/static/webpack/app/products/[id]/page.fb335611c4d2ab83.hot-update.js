"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/[id]/page",{

/***/ "(app-pages-browser)/./src/app/products/[id]/page.js":
/*!***************************************!*\
  !*** ./src/app/products/[id]/page.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Header/Header */ \"(app-pages-browser)/./src/app/component/Header/Header.js\");\n/* harmony import */ var _component_Cart_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/Cart/Cart */ \"(app-pages-browser)/./src/app/component/Cart/Cart.js\");\n/* harmony import */ var _component_Login_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/component/Login/Login */ \"(app-pages-browser)/./src/app/component/Login/Login.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var _component_Item_Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/Item/Item */ \"(app-pages-browser)/./src/app/component/Item/Item.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ProductPage = ()=>{\n    _s();\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [list, setList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(n);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://localhost:4000/api/itemList\").then((res)=>res.json()).then((data)=>setList(data));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedToken = localStorage.getItem(\"jwtToken\") || [];\n            if (storedToken) {\n                setUser(storedToken);\n            }\n        }\n    }, []);\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedCartItems = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n            return storedCartItems;\n        }\n    });\n    const [isCartVisible, setCartVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLoginVisible, setLogginVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedCartItems = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n            setCartItems(storedCartItems);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n    }, [\n        cartItems\n    ]);\n    const toggleCart = ()=>{\n        setCartVisible(!isCartVisible);\n        setLogginVisible(false);\n    };\n    const toggleLogin = ()=>{\n        setLogginVisible(!isLoginVisible);\n        setCartVisible(false);\n    };\n    const handleSelect = (type)=>{\n        setSelectedOption(type);\n    };\n    const handleWeater = (weater)=>{\n        setSelectedOption(weater);\n    };\n    const addToCart = (product)=>{\n        const existingItem = cartItems.find((cartItem)=>cartItem.name === product.name);\n        if (existingItem) {\n            const updatedCartItems = cartItems.map((cartItem)=>{\n                if (cartItem.name === product.name) {\n                    return {\n                        ...cartItem,\n                        qte: cartItem.qte + product.qte\n                    };\n                }\n                return cartItem;\n            });\n            setCartItems(updatedCartItems);\n        } else {\n            const newItem = {\n                name: product.name,\n                price: product.price,\n                src: product.src,\n                qte: product.qte,\n                description: product.description\n            };\n            setCartItems([\n                ...cartItems,\n                newItem\n            ]);\n        }\n    };\n    const handleMinus = (index)=>{\n        const updatedCartItems = [\n            ...cartItems\n        ];\n        if (updatedCartItems[index].qte > 1) {\n            updatedCartItems[index].qte--;\n            setCartItems(updatedCartItems);\n        } else if (updatedCartItems[index].qte <= 1) {\n            handleDelete(index);\n        }\n    };\n    const handlePlus = (index)=>{\n        const updatedCartItems = [\n            ...cartItems\n        ];\n        if (updatedCartItems[index].qte >= 0) {\n            updatedCartItems[index].qte++;\n            setCartItems(updatedCartItems);\n        }\n    };\n    const handleDelete = (index)=>{\n        const updatedCartItems = cartItems.filter((_, i)=>i !== index);\n        alert(\"remove from cart ?\");\n        setCartItems(updatedCartItems);\n    };\n    if (cartItems && Array.isArray(cartItems)) {\n        const totalSum = cartItems.reduce((acc, item)=>acc + item.price * item.qte, 0);\n        const totalProduct = cartItems.reduce((acc, item)=>acc + item.qte, 0);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n        }, [\n            cartItems\n        ]);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            const fetchProduct = async ()=>{\n                try {\n                    const productId = window.location.pathname.split(\"/\").pop();\n                    const response = await fetch(\"http://localhost:4000/api/product/\".concat(productId));\n                    if (response.ok) {\n                        const data = await response.json();\n                        setProduct(data);\n                    } else {\n                        console.error(\"Error fetching product data:\", response.statusText);\n                    }\n                } catch (error) {\n                    console.error(\"Error fetching product data:\", error);\n                }\n            };\n            fetchProduct();\n        }, []);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onCartToggle: toggleCart,\n                    totalProduct: totalProduct,\n                    onLogginToggle: toggleLogin,\n                    user: user\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/products/[id]/page.js\",\n                    lineNumber: 165,\n                    columnNumber: 7\n                }, undefined),\n                isLoginVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Login_Login__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/products/[id]/page.js\",\n                    lineNumber: 166,\n                    columnNumber: 26\n                }, undefined),\n                isCartVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Cart_Cart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    cartItems: cartItems,\n                    handleMinus: handleMinus,\n                    handlePlus: handlePlus,\n                    handleDelete: handleDelete,\n                    totalProduct: totalProduct,\n                    totalSum: totalSum\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/products/[id]/page.js\",\n                    lineNumber: 167,\n                    columnNumber: 25\n                }, undefined),\n                product && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Item_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    product: product,\n                    addToCart: addToCart\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/products/[id]/page.js\",\n                    lineNumber: 168,\n                    columnNumber: 18\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/products/[id]/page.js\",\n            lineNumber: 164,\n            columnNumber: 5\n        }, undefined);\n    }\n    ;\n};\n_s(ProductPage, \"IJi3C3PqiLFWW/D5LFbK/eaJ4jk=\");\n_c = ProductPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_c1 = ()=>Promise.resolve(ProductPage), {\n    ssr: false\n}));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ProductPage\");\n$RefreshReg$(_c1, \"%default%$dynamic\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdHMvW2lkXS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3lCO0FBQ21CO0FBQ087QUFDTjtBQUNEO0FBQ1Q7QUFDVTtBQUU3QyxNQUFNUSxjQUFjOztJQUNsQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdaLHFEQUFjLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNhLE1BQU1DLFFBQVEsR0FBR2QscURBQWMsQ0FBQ2U7SUFLdkNkLGdEQUFTQSxDQUFDO1FBQ1JlLE1BQU8sc0NBQ0pDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxJQUNwQkYsSUFBSSxDQUFDRyxDQUFBQSxPQUFRUixRQUFRUTtJQUUxQixHQUFHLEVBQUU7SUFDTG5CLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxPQUFPb0IsaUJBQWlCLGFBQWE7WUFFekMsTUFBTUMsY0FBY0QsYUFBYUUsT0FBTyxDQUFDLGVBQWUsRUFBRTtZQUMxRCxJQUFJRCxhQUFZO2dCQUNoQlIsUUFBUVE7WUFDUjtRQUNKO0lBQUMsR0FBRyxFQUFFO0lBSUosTUFBTSxDQUFDRSxnQkFBZ0JDLGtCQUFrQixHQUFHdkIsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDd0IsV0FBV0MsYUFBYSxHQUFHekIsK0NBQVFBLENBQUM7UUFDekMsSUFBSSxPQUFPbUIsaUJBQWlCLGFBQWE7WUFDekMsTUFBTU8sa0JBQWtCQyxLQUFLQyxLQUFLLENBQUNULGFBQWFFLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUMzRSxPQUFPSztRQUVYO0lBQUM7SUFFQyxNQUFNLENBQUNHLGVBQWVDLGVBQWUsR0FBRzlCLCtDQUFRQSxDQUFDO0lBRWpELE1BQUssQ0FBQytCLGdCQUFnQkMsaUJBQWlCLEdBQUdoQywrQ0FBUUEsQ0FBQztJQUVuREQsZ0RBQVNBLENBQUM7UUFD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O2dCQUNuQixJQUFJO29CQUVGLE1BQU1DLFlBQVlDLE9BQU9DLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLLENBQUMsS0FBS0MsR0FBRztvQkFJekQsTUFBTUMsV0FBVyxNQUFNN0QsTUFBTSxxQ0FBK0MsT0FBVnVEO29CQUdsRSxJQUFJTSxTQUFTQyxFQUFFLEVBQUU7d0JBRWYsTUFBTTFELE9BQU8sTUFBTXlELFNBQVMxRCxJQUFJO3dCQUVoQ1QsV0FBV1U7b0JBR2IsT0FBTzt3QkFDTDJELFFBQVFDLEtBQUssQ0FBQyxnQ0FBZ0NILFNBQVNJLFVBQVU7b0JBQ25FO2dCQUNGLEVBQUUsT0FBT0QsT0FBTztvQkFDZEQsUUFBUUMsS0FBSyxDQUFDLGdDQUFnQ0E7Z0JBQ2hEO1lBQ0Y7WUFFQVY7UUFDRixHQUFHLEVBQUU7UUFFTCxxQkFDRSw4REFBQ1k7OzhCQUNDLDhEQUFDL0UsZ0VBQU1BO29CQUFDZ0YsY0FBYzlDO29CQUFZZ0MsY0FBY0E7b0JBQWNlLGdCQUFnQjlDO29CQUFhekIsTUFBTUE7Ozs7OztnQkFDaEdvQixnQ0FBa0IsOERBQUM1Qiw4REFBS0E7Ozs7O2dCQUN4QjBCLCtCQUFpQiw4REFBQzNCLDREQUFJQTtvQkFBQ3NCLFdBQVdBO29CQUFXNkIsYUFBYUE7b0JBQWFHLFlBQVlBO29CQUFZRCxjQUFjQTtvQkFBY1ksY0FBY0E7b0JBQWNKLFVBQVVBOzs7Ozs7Z0JBQ2xLeEQseUJBQVcsOERBQUNGLDREQUFJQTtvQkFBQ0UsU0FBU0E7b0JBQVNrQyxXQUFXQTs7Ozs7Ozs7Ozs7O0lBSXBEOztBQUNBO0dBbktNbkM7S0FBQUE7QUFxS04sK0RBQWUsTUFBQUYsd0RBQU9BLE9BQUUsSUFBTStFLFFBQVFDLE9BQU8sQ0FBQzlFLGNBQWE7SUFBQytFLEtBQUs7QUFBSyxJQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZHVjdHMvW2lkXS9wYWdlLmpzP2FhZTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIiBcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudC9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBDYXJ0IGZyb20gJy4uLy4uL2NvbXBvbmVudC9DYXJ0L0NhcnQnO1xuaW1wb3J0IExvZ2luIGZyb20gJ0AvY29tcG9uZW50L0xvZ2luL0xvZ2luJztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgSXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnQvSXRlbS9JdGVtJztcblxuY29uc3QgUHJvZHVjdFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKG4pO1xuXG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvaXRlbUxpc3RgKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHNldExpc3QoZGF0YSkpXG4gICBcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgXG4gICAgY29uc3Qgc3RvcmVkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFRva2VuXCIpIHx8IFtdO1xuICAgIGlmIChzdG9yZWRUb2tlbil7XG4gICAgc2V0VXNlcihzdG9yZWRUb2tlbik7XG4gICAgfVxufX0sIFtdKTtcblxuICAgICBcblxuICBjb25zdCBbc2VsZWN0ZWRPcHRpb24sIHNldFNlbGVjdGVkT3B0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IHN0b3JlZENhcnRJdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0SXRlbXNcIikpIHx8IFtdO1xuICAgIHJldHVybiBzdG9yZWRDYXJ0SXRlbXM7XG4gIFxufX0pO1xuICBcbiAgY29uc3QgW2lzQ2FydFZpc2libGUsIHNldENhcnRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdFtpc0xvZ2luVmlzaWJsZSwgc2V0TG9nZ2luVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICBcbiAgICBjb25zdCBzdG9yZWRDYXJ0SXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydEl0ZW1zXCIpKSB8fCBbXTtcbiAgICBzZXRDYXJ0SXRlbXMoc3RvcmVkQ2FydEl0ZW1zKTtcbn19LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRJdGVtc1wiLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKTtcbiAgICBcbiAgfSwgW2NhcnRJdGVtc10pO1xuICBcbiAgY29uc3QgdG9nZ2xlQ2FydCA9ICgpID0+IHtcbiAgICAgIHNldENhcnRWaXNpYmxlKCFpc0NhcnRWaXNpYmxlKTtcbiAgICAgIHNldExvZ2dpblZpc2libGUoZmFsc2UpXG4gICAgICBcbiAgfTtcbiAgY29uc3QgdG9nZ2xlTG9naW4gPSAoKSA9PiB7XG4gICAgc2V0TG9nZ2luVmlzaWJsZSghaXNMb2dpblZpc2libGUpO1xuICAgIHNldENhcnRWaXNpYmxlKGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9ICh0eXBlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRPcHRpb24odHlwZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVdlYXRlciA9ICh3ZWF0ZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbih3ZWF0ZXIpO1xuICB9O1xuICBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdCkgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nSXRlbSA9IGNhcnRJdGVtcy5maW5kKGNhcnRJdGVtID0+IGNhcnRJdGVtLm5hbWUgPT09IHByb2R1Y3QubmFtZSk7XG5cbiAgICBpZiAoZXhpc3RpbmdJdGVtKSB7XG4gICAgICBjb25zdCB1cGRhdGVkQ2FydEl0ZW1zID0gY2FydEl0ZW1zLm1hcChjYXJ0SXRlbSA9PiB7XG4gICAgICAgIGlmIChjYXJ0SXRlbS5uYW1lID09PSBwcm9kdWN0Lm5hbWUpIHtcbiAgICAgICAgICByZXR1cm4geyAuLi5jYXJ0SXRlbSwgcXRlOiBjYXJ0SXRlbS5xdGUgKyBwcm9kdWN0LnF0ZSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXJ0SXRlbTtcbiAgICAgIH0pO1xuICBcbiAgICAgIHNldENhcnRJdGVtcyh1cGRhdGVkQ2FydEl0ZW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV3SXRlbSA9IHtcbiAgICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxuICAgICAgICBwcmljZTogcHJvZHVjdC5wcmljZSxcbiAgICAgICAgc3JjOiBwcm9kdWN0LnNyYyxcbiAgICAgICAgcXRlOiBwcm9kdWN0LnF0ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb25cbiAgICAgIH07XG4gICAgICBcbiAgXG4gICAgICBzZXRDYXJ0SXRlbXMoWy4uLmNhcnRJdGVtcywgbmV3SXRlbV0pO1xuICAgIH1cbiAgfTtcblxuXG4gIGNvbnN0IGhhbmRsZU1pbnVzID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZENhcnRJdGVtcyA9IFsuLi5jYXJ0SXRlbXNdO1xuICAgIGlmICh1cGRhdGVkQ2FydEl0ZW1zW2luZGV4XS5xdGUgPiAxKSB7XG4gICAgICB1cGRhdGVkQ2FydEl0ZW1zW2luZGV4XS5xdGUtLTtcbiAgICAgIHNldENhcnRJdGVtcyh1cGRhdGVkQ2FydEl0ZW1zKTtcbiAgICB9IGVsc2UgaWYgKHVwZGF0ZWRDYXJ0SXRlbXNbaW5kZXhdLnF0ZSA8PSAxKSB7XG4gICAgICBcbiAgICAgIGhhbmRsZURlbGV0ZShpbmRleCk7XG4gICAgfVxuICB9OyAgXG5cbiAgY29uc3QgaGFuZGxlUGx1cyA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbXMgPSBbLi4uY2FydEl0ZW1zXTtcbiAgICBpZiAodXBkYXRlZENhcnRJdGVtc1tpbmRleF0ucXRlID49IDApIHtcbiAgICAgIHVwZGF0ZWRDYXJ0SXRlbXNbaW5kZXhdLnF0ZSsrO1xuICAgICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZWRDYXJ0SXRlbXMpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZENhcnRJdGVtcyA9IGNhcnRJdGVtcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KTtcbiAgICBhbGVydChcInJlbW92ZSBmcm9tIGNhcnQgP1wiKTtcbiAgICBzZXRDYXJ0SXRlbXModXBkYXRlZENhcnRJdGVtcyk7XG4gIH07XG4gIGlmIChjYXJ0SXRlbXMgJiYgQXJyYXkuaXNBcnJheShjYXJ0SXRlbXMpKSB7XG4gIGNvbnN0IHRvdGFsU3VtID0gY2FydEl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBhY2MgKyBpdGVtLnByaWNlICogaXRlbS5xdGUsIDApXG4gIGNvbnN0IHRvdGFsUHJvZHVjdCA9IGNhcnRJdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5xdGUsIDApXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydEl0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcykpO1xuICB9LCBbY2FydEl0ZW1zXSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUHJvZHVjdCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvcHJvZHVjdC8ke3Byb2R1Y3RJZH1gKTtcblxuICAgICAgICBcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBcbiAgICAgICAgICBzZXRQcm9kdWN0KGRhdGEpO1xuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3QgZGF0YTonLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdCBkYXRhOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hQcm9kdWN0KCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIG9uQ2FydFRvZ2dsZT17dG9nZ2xlQ2FydH0gdG90YWxQcm9kdWN0PXt0b3RhbFByb2R1Y3R9IG9uTG9nZ2luVG9nZ2xlPXt0b2dnbGVMb2dpbn0gdXNlcj17dXNlcn0vPlxuICAgICAge2lzTG9naW5WaXNpYmxlICYmIDxMb2dpbiAvPn1cbiAgICAgIHtpc0NhcnRWaXNpYmxlICYmIDxDYXJ0IGNhcnRJdGVtcz17Y2FydEl0ZW1zfSBoYW5kbGVNaW51cz17aGFuZGxlTWludXN9IGhhbmRsZVBsdXM9e2hhbmRsZVBsdXN9IGhhbmRsZURlbGV0ZT17aGFuZGxlRGVsZXRlfSB0b3RhbFByb2R1Y3Q9e3RvdGFsUHJvZHVjdH0gdG90YWxTdW09e3RvdGFsU3VtfSAgLz59XG4gICAgIHtwcm9kdWN0ICYmIDxJdGVtIHByb2R1Y3Q9e3Byb2R1Y3R9IGFkZFRvQ2FydD17YWRkVG9DYXJ0fS8+fVxuICAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkeW5hbWljICgoKSA9PiBQcm9taXNlLnJlc29sdmUoUHJvZHVjdFBhZ2UpLHtzc3I6IGZhbHNlfSApIFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkZXIiLCJDYXJ0IiwiTG9naW4iLCJkeW5hbWljIiwiSXRlbSIsIlByb2R1Y3RQYWdlIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJsaXN0Iiwic2V0TGlzdCIsInVzZXIiLCJzZXRVc2VyIiwibiIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic3RvcmVkVG9rZW4iLCJnZXRJdGVtIiwic2VsZWN0ZWRPcHRpb24iLCJzZXRTZWxlY3RlZE9wdGlvbiIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsInN0b3JlZENhcnRJdGVtcyIsIkpTT04iLCJwYXJzZSIsImlzQ2FydFZpc2libGUiLCJzZXRDYXJ0VmlzaWJsZSIsImlzTG9naW5WaXNpYmxlIiwic2V0TG9nZ2luVmlzaWJsZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ0b2dnbGVDYXJ0IiwidG9nZ2xlTG9naW4iLCJoYW5kbGVTZWxlY3QiLCJ0eXBlIiwiaGFuZGxlV2VhdGVyIiwid2VhdGVyIiwiYWRkVG9DYXJ0IiwiZXhpc3RpbmdJdGVtIiwiZmluZCIsImNhcnRJdGVtIiwibmFtZSIsInVwZGF0ZWRDYXJ0SXRlbXMiLCJtYXAiLCJxdGUiLCJuZXdJdGVtIiwicHJpY2UiLCJzcmMiLCJkZXNjcmlwdGlvbiIsImhhbmRsZU1pbnVzIiwiaW5kZXgiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVQbHVzIiwiZmlsdGVyIiwiXyIsImkiLCJhbGVydCIsIkFycmF5IiwiaXNBcnJheSIsInRvdGFsU3VtIiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsInRvdGFsUHJvZHVjdCIsImZldGNoUHJvZHVjdCIsInByb2R1Y3RJZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsInBvcCIsInJlc3BvbnNlIiwib2siLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwiZGl2Iiwib25DYXJ0VG9nZ2xlIiwib25Mb2dnaW5Ub2dnbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/products/[id]/page.js\n"));

/***/ })

});