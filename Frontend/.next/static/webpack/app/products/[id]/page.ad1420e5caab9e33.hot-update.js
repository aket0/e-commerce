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

/***/ "(app-pages-browser)/./src/app/component/Login/Login.js":
/*!******************************************!*\
  !*** ./src/app/component/Login/Login.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.css */ \"(app-pages-browser)/./src/app/component/Login/Login.css\");\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-switch */ \"(app-pages-browser)/./node_modules/react-switch/dist/index.dev.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Login = (param)=>{\n    let { user } = param;\n    _s();\n    const [isLogged, setIsLogged] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isSwitch, setIsSwitched] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [familyName, setFamilyName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [codePostal, setCodePostal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [jwtToken, setJwtToken] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [superUser, setsuperUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleSwitchChange = (checked)=>{\n        setIsSwitched(checked);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:4000/api/user\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            if (response.ok) {\n                const responseData = await response.json();\n                if (responseData.userExists) {\n                    setIsLogged(true);\n                    const token = responseData.userExists.token;\n                    const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_4__.jwtDecode)(token);\n                    setJwtToken(decodedToken);\n                    localStorage.setItem(\"jwtToken\", jwtToken);\n                } else {\n                    setErrorMessage(\"Email or password is incorrect\");\n                }\n            } else {\n                setErrorMessage(\"Error connecting to the server\");\n            }\n        } catch (error) {\n            console.error(\"Error authenticating user:\", error);\n            setErrorMessage(\"Server error\");\n        }\n    };\n    const addNewUser = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:4000/api/newUser\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name,\n                    familyName,\n                    address,\n                    codePostal,\n                    city,\n                    superUser,\n                    email,\n                    password\n                })\n            });\n            if (response.ok) {\n                const responseData = await response.json();\n                if (responseData.userExists) {\n                    setIsSwitched(true);\n                } else {\n                    setIsLogged(false);\n                }\n            } else {\n                const errorData = await response.json();\n                setErrorMessage(errorData.message);\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de la creation de l'utilisateur :\", error);\n            setErrorMessage(\"mail deja utilis\\xe9\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"loginComponent\",\n        children: !isLogged ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"loginFrame\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"userPhotoDiv\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            id: \"title\",\n                            children: \"Login to the jungle.\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 108,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                        lineNumber: 107,\n                        columnNumber: 19\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"loginFormDivi\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            id: \"formi\",\n                            onSubmit: handleSubmit,\n                            method: \"post\",\n                            children: [\n                                errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        color: \"red\"\n                                    },\n                                    children: errorMessage\n                                }, void 0, false, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 40\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    id: \"email\",\n                                    children: [\n                                        \"E-mail\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            value: email,\n                                            placeholder: \"Your e-mail\",\n                                            onChange: (e)=>setEmail(e.target.value),\n                                            required: true,\n                                            name: \"email\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                            lineNumber: 115,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 23\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    id: \"password\",\n                                    children: [\n                                        \"Password\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            name: \"password\",\n                                            placeholder: \"Your password\",\n                                            onChange: (e)=>setPassword(e.target.value),\n                                            required: true,\n                                            value: password\n                                        }, void 0, false, {\n                                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                            lineNumber: 119,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 23\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    id: \"link\",\n                                    href: \"http://localhost:3000/register\",\n                                    children: \"not a tribe member ? Register now !\"\n                                }, void 0, false, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 23\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: \"button\",\n                                    type: \"submit\",\n                                    children: \"Log in\"\n                                }, void 0, false, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 111,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                        lineNumber: 110,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                lineNumber: 106,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n            lineNumber: 105,\n            columnNumber: 13\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"loged\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        \"Welcome back \",\n                        jwtToken.name,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                    lineNumber: 130,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"My personal information\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 132,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Mes achat\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 133,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"ai ai ai\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 134,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            onClick: ()=>setIsLogged(false),\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 135,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                    lineNumber: 131,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n            lineNumber: 129,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Login, \"WKaRBEavSalYQ7h1SSR4hXFNt+4=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0xvZ2luL0xvZ2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUI7QUFDYTtBQUNVO0FBQ1A7QUFDUjtBQUU3QixNQUFNSyxRQUFRO1FBQUMsRUFBQ0MsSUFBSSxFQUFDOztJQUNuQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxVQUFVQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1UsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNjLFlBQVlDLGNBQWMsR0FBR2YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDZ0IsU0FBU0MsV0FBVyxHQUFHakIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDa0IsWUFBWUMsY0FBYyxHQUFHbkIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDb0IsTUFBTUMsUUFBUSxHQUFHckIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDc0IsT0FBT0MsU0FBUyxHQUFHdkIsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDd0IsVUFBVUMsWUFBWSxHQUFHekIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDMEIsV0FBV0MsYUFBYSxHQUFHM0IsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDNEIsVUFBVUMsWUFBWSxHQUFHN0IsK0NBQVFBLENBQUM7SUFJekMsTUFBTThCLHFCQUFxQixDQUFDQztRQUMxQnRCLGNBQWNzQjtJQUNoQjtJQUVBLE1BQU1DLGVBQWUsT0FBT0M7UUFDMUJBLE1BQU1DLGNBQWM7UUFFcEIsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTyxrQ0FBaUM7Z0JBQzNEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFn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Qzs7Ozs7Ozs4QkFDaEMsOERBQUM4RDs7c0NBQ0csOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNBO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNBO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNGOzRCQUFPUixNQUFLOzRCQUFTVyxTQUFTLElBQU1yRSxZQUFZO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF0RTtHQXhJRUg7S0FBQUE7QUEwSU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnQvTG9naW4vTG9naW4uanM/NzNjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL0xvZ2luLmNzc1wiO1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2p3dERlY29kZX0gZnJvbSBcImp3dC1kZWNvZGVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgTG9naW4gPSAoe3VzZXJ9KSA9PiB7XG4gIGNvbnN0IFtpc0xvZ2dlZCwgc2V0SXNMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc1N3aXRjaCwgc2V0SXNTd2l0Y2hlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ZhbWlseU5hbWUsIHNldEZhbWlseU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29kZVBvc3RhbCwgc2V0Q29kZVBvc3RhbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtqd3RUb2tlbiwgc2V0Snd0VG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdXBlclVzZXIsIHNldHN1cGVyVXNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cblxuXG4gIGNvbnN0IGhhbmRsZVN3aXRjaENoYW5nZSA9IChjaGVja2VkKSA9PiB7XG4gICAgc2V0SXNTd2l0Y2hlZChjaGVja2VkKTtcbiAgfTtcbiAgXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3VzZXJgLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZURhdGEudXNlckV4aXN0cykge1xuICAgICAgICAgICAgICAgIHNldElzTG9nZ2VkKHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2VEYXRhLnVzZXJFeGlzdHMudG9rZW5cbiAgICAgICAgICAgICAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBqd3REZWNvZGUodG9rZW4pXG4gICAgICAgICAgICAgICAgc2V0Snd0VG9rZW4oZGVjb2RlZFRva2VuKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImp3dFRva2VuXCIsIGp3dFRva2VuKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJFbWFpbCBvciBwYXNzd29yZCBpcyBpbmNvcnJlY3RcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJFcnJvciBjb25uZWN0aW5nIHRvIHRoZSBzZXJ2ZXJcIik7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYXV0aGVudGljYXRpbmcgdXNlcjpcIiwgZXJyb3IpO1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJTZXJ2ZXIgZXJyb3JcIik7XG4gICAgfVxufTtcblxuICAgICAgY29uc3QgYWRkTmV3VXNlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBcbiAgICAgICAgdHJ5IHtcblxuXG4gICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL25ld1VzZXJgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLFxuICAgICAgICAgICAgICAgICAgZmFtaWx5TmFtZSxcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICBjb2RlUG9zdGFsLFxuICAgICAgICAgICAgICAgICAgY2l0eSxcbiAgICAgICAgICAgICAgICAgIHN1cGVyVXNlcixcbiAgICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgICAgcGFzc3dvcmQsfSksXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlRGF0YS51c2VyRXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgIHNldElzU3dpdGNoZWQodHJ1ZSk7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNldElzTG9nZ2VkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvckRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSBjcmVhdGlvbiBkZSBsJ3V0aWxpc2F0ZXVyIDpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJtYWlsIGRlamEgdXRpbGlzw6lcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgXG4gIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cImxvZ2luQ29tcG9uZW50XCI+XG4gICAgICAgICAgeyFpc0xvZ2dlZCA/IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvZ2luRnJhbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ1c2VyUGhvdG9EaXZcIj5cbiAgICAgICAgICAgICAgICAgIDxoMiBpZD1cInRpdGxlXCI+TG9naW4gdG8gdGhlIGp1bmdsZS48L2gyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9naW5Gb3JtRGl2aVwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImZvcm1pXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntlcnJvck1lc3NhZ2V9PC9wPn1cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaWQ9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRS1tYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBwbGFjZWhvbGRlcj1cIllvdXIgZS1tYWlsXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkICBuYW1lPVwiZW1haWxcIiAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBpZD1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAgdmFsdWU9e3Bhc3N3b3JkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaWQ9XCJsaW5rXCIgaHJlZj17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWdpc3RlcmB9Pm5vdCBhIHRyaWJlIG1lbWJlciA/IFJlZ2lzdGVyIG5vdyAhPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCI+TG9nIGluPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9nZWRcIj5cbiAgICAgICAgICAgIDxoMj5XZWxjb21lIGJhY2sge2p3dFRva2VuLm5hbWV9IDwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPk15IHBlcnNvbmFsIGluZm9ybWF0aW9uPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+TWVzIGFjaGF0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+YWkgYWkgYWk8L2xpPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IHNldElzTG9nZ2VkKGZhbHNlKSB9PkxvZ291dDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJTd2l0Y2giLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImp3dERlY29kZSIsIkxpbmsiLCJMb2dpbiIsInVzZXIiLCJpc0xvZ2dlZCIsInNldElzTG9nZ2VkIiwiaXNTd2l0Y2giLCJzZXRJc1N3aXRjaGVkIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwibmFtZSIsInNldE5hbWUiLCJmYW1pbHlOYW1lIiwic2V0RmFtaWx5TmFtZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiY29kZVBvc3RhbCIsInNldENvZGVQb3N0YWwiLCJjaXR5Iiwic2V0Q2l0eSIsImVtYWlsIiwic2V0RW1haWwiLCJqd3RUb2tlbiIsInNldEp3dFRva2VuIiwic3VwZXJVc2VyIiwic2V0c3VwZXJVc2VyIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN3aXRjaENoYW5nZSIsImNoZWNrZWQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwicmVzcG9uc2VEYXRhIiwianNvbiIsInVzZXJFeGlzdHMiLCJ0b2tlbiIsImRlY29kZWRUb2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnJvciIsImNvbnNvbGUiLCJhZGROZXdVc2VyIiwiZXJyb3JEYXRhIiwibWVzc2FnZSIsImRpdiIsImlkIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJwIiwic3R5bGUiLCJjb2xvciIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJlcXVpcmVkIiwiaHJlZiIsImJ1dHRvbiIsInVsIiwibGkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Login/Login.js\n"));

/***/ })

});