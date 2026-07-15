"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/products/route";
exports.ids = ["app/api/products/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=D%3A%5C2026%5Crj-emp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5C2026%5Crj-emp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=D%3A%5C2026%5Crj-emp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5C2026%5Crj-emp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_2026_rj_emp_app_api_products_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/products/route.ts */ \"(rsc)/./app/api/products/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/products/route\",\n        pathname: \"/api/products\",\n        filename: \"route\",\n        bundlePath: \"app/api/products/route\"\n    },\n    resolvedPagePath: \"D:\\\\2026\\\\rj-emp\\\\app\\\\api\\\\products\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_2026_rj_emp_app_api_products_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/products/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJvZHVjdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcm9kdWN0cyUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDMjAyNiU1Q3JqLWVtcCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1QzIwMjYlNUNyai1lbXAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ0Y7QUFDM0U7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWphc3RoYW4tZW1wb3JpdW0vP2MzZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcMjAyNlxcXFxyai1lbXBcXFxcYXBwXFxcXGFwaVxcXFxwcm9kdWN0c1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcHJvZHVjdHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wcm9kdWN0c1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJvZHVjdHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFwyMDI2XFxcXHJqLWVtcFxcXFxhcHBcXFxcYXBpXFxcXHByb2R1Y3RzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9wcm9kdWN0cy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=D%3A%5C2026%5Crj-emp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5C2026%5Crj-emp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/products/route.ts":
/*!***********************************!*\
  !*** ./app/api/products/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_product_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/product-upload */ \"(rsc)/./lib/product-upload.ts\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/Product */ \"(rsc)/./models/Product.ts\");\n\n\n\n\n\nfunction getProductErrorMessage(error) {\n    if (typeof error === \"object\" && error !== null && \"code\" in error && error.code === 11000) {\n        return \"A product with the same unique value already exists.\";\n    }\n    if (error instanceof Error) {\n        if (error.name === \"MongooseServerSelectionError\" || error.message.includes(\"querySrv\") || error.message.includes(\"ETIMEOUT\") || error.message.includes(\"ENOTFOUND\") || error.message.includes(\"IP\") || error.message.includes(\"whitelisted\") || error.message.includes(\"SSL\")) {\n            return \"Could not connect to MongoDB Atlas. Check your internet/DNS connection and Atlas Network Access IP allowlist, then try again.\";\n        }\n        return error.message;\n    }\n    return \"Could not create product\";\n}\nasync function GET(request) {\n    try {\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n        const category = request.nextUrl.searchParams.get(\"category\");\n        const query = category ? {\n            category\n        } : {};\n        const products = await _models_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"].find(query).sort({\n            createdAt: -1\n        }).lean();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(products);\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json([]);\n    }\n}\nasync function POST(request) {\n    const admin = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.requireAdminFromRequest)(request);\n    if (!admin) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    try {\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n        const productData = await (0,_lib_product_upload__WEBPACK_IMPORTED_MODULE_3__.parseProductRequest)(request);\n        const product = await _models_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"].create(productData);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(product, {\n            status: 201\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: getProductErrorMessage(error)\n        }, {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2R1Y3RzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0Q7QUFDbkI7QUFDZ0I7QUFDTTtBQUNwQjtBQUV2QyxTQUFTSyx1QkFBdUJDLEtBQWM7SUFDNUMsSUFBSSxPQUFPQSxVQUFVLFlBQVlBLFVBQVUsUUFBUSxVQUFVQSxTQUFTQSxNQUFNQyxJQUFJLEtBQUssT0FBTztRQUMxRixPQUFPO0lBQ1Q7SUFFQSxJQUFJRCxpQkFBaUJFLE9BQU87UUFDMUIsSUFDRUYsTUFBTUcsSUFBSSxLQUFLLGtDQUNmSCxNQUFNSSxPQUFPLENBQUNDLFFBQVEsQ0FBQyxlQUN2QkwsTUFBTUksT0FBTyxDQUFDQyxRQUFRLENBQUMsZUFDdkJMLE1BQU1JLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLGdCQUN2QkwsTUFBTUksT0FBTyxDQUFDQyxRQUFRLENBQUMsU0FDdkJMLE1BQU1JLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLGtCQUN2QkwsTUFBTUksT0FBTyxDQUFDQyxRQUFRLENBQUMsUUFDdkI7WUFDQSxPQUFPO1FBQ1Q7UUFFQSxPQUFPTCxNQUFNSSxPQUFPO0lBQ3RCO0lBRUEsT0FBTztBQUNUO0FBRU8sZUFBZUUsSUFBSUMsT0FBb0I7SUFDNUMsSUFBSTtRQUNGLE1BQU1aLGtEQUFTQTtRQUNmLE1BQU1hLFdBQVdELFFBQVFFLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDQyxHQUFHLENBQUM7UUFDbEQsTUFBTUMsUUFBUUosV0FBVztZQUFFQTtRQUFTLElBQUksQ0FBQztRQUN6QyxNQUFNSyxXQUFXLE1BQU1mLHVEQUFPQSxDQUFDZ0IsSUFBSSxDQUFDRixPQUFPRyxJQUFJLENBQUM7WUFBRUMsV0FBVyxDQUFDO1FBQUUsR0FBR0MsSUFBSTtRQUN2RSxPQUFPdkIscURBQVlBLENBQUN3QixJQUFJLENBQUNMO0lBQzNCLEVBQUUsT0FBTTtRQUNOLE9BQU9uQixxREFBWUEsQ0FBQ3dCLElBQUksQ0FBQyxFQUFFO0lBQzdCO0FBQ0Y7QUFFTyxlQUFlQyxLQUFLWixPQUFvQjtJQUM3QyxNQUFNYSxRQUFRLE1BQU14QixrRUFBdUJBLENBQUNXO0lBQzVDLElBQUksQ0FBQ2EsT0FBTyxPQUFPMUIscURBQVlBLENBQUN3QixJQUFJLENBQUM7UUFBRWQsU0FBUztJQUFlLEdBQUc7UUFBRWlCLFFBQVE7SUFBSTtJQUVoRixJQUFJO1FBQ0YsTUFBTTFCLGtEQUFTQTtRQUNmLE1BQU0yQixjQUFjLE1BQU16Qix3RUFBbUJBLENBQUNVO1FBQzlDLE1BQU1nQixVQUFVLE1BQU16Qix1REFBT0EsQ0FBQzBCLE1BQU0sQ0FBQ0Y7UUFDckMsT0FBTzVCLHFEQUFZQSxDQUFDd0IsSUFBSSxDQUFDSyxTQUFTO1lBQUVGLFFBQVE7UUFBSTtJQUNsRCxFQUFFLE9BQU9yQixPQUFPO1FBQ2QsT0FBT04scURBQVlBLENBQUN3QixJQUFJLENBQUM7WUFBRWQsU0FBU0wsdUJBQXVCQztRQUFPLEdBQUc7WUFBRXFCLFFBQVE7UUFBSTtJQUNyRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFqYXN0aGFuLWVtcG9yaXVtLy4vYXBwL2FwaS9wcm9kdWN0cy9yb3V0ZS50cz85MmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gXCJAL2xpYi9kYlwiO1xuaW1wb3J0IHsgcmVxdWlyZUFkbWluRnJvbVJlcXVlc3QgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuaW1wb3J0IHsgcGFyc2VQcm9kdWN0UmVxdWVzdCB9IGZyb20gXCJAL2xpYi9wcm9kdWN0LXVwbG9hZFwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIkAvbW9kZWxzL1Byb2R1Y3RcIjtcblxuZnVuY3Rpb24gZ2V0UHJvZHVjdEVycm9yTWVzc2FnZShlcnJvcjogdW5rbm93bikge1xuICBpZiAodHlwZW9mIGVycm9yID09PSBcIm9iamVjdFwiICYmIGVycm9yICE9PSBudWxsICYmIFwiY29kZVwiIGluIGVycm9yICYmIGVycm9yLmNvZGUgPT09IDExMDAwKSB7XG4gICAgcmV0dXJuIFwiQSBwcm9kdWN0IHdpdGggdGhlIHNhbWUgdW5pcXVlIHZhbHVlIGFscmVhZHkgZXhpc3RzLlwiO1xuICB9XG5cbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICBpZiAoXG4gICAgICBlcnJvci5uYW1lID09PSBcIk1vbmdvb3NlU2VydmVyU2VsZWN0aW9uRXJyb3JcIiB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcInF1ZXJ5U3J2XCIpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKFwiRVRJTUVPVVRcIikgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJFTk9URk9VTkRcIikgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJJUFwiKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcIndoaXRlbGlzdGVkXCIpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKFwiU1NMXCIpXG4gICAgKSB7XG4gICAgICByZXR1cm4gXCJDb3VsZCBub3QgY29ubmVjdCB0byBNb25nb0RCIEF0bGFzLiBDaGVjayB5b3VyIGludGVybmV0L0ROUyBjb25uZWN0aW9uIGFuZCBBdGxhcyBOZXR3b3JrIEFjY2VzcyBJUCBhbGxvd2xpc3QsIHRoZW4gdHJ5IGFnYWluLlwiO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICB9XG5cbiAgcmV0dXJuIFwiQ291bGQgbm90IGNyZWF0ZSBwcm9kdWN0XCI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBjb25uZWN0REIoKTtcbiAgICBjb25zdCBjYXRlZ29yeSA9IHJlcXVlc3QubmV4dFVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiY2F0ZWdvcnlcIik7XG4gICAgY29uc3QgcXVlcnkgPSBjYXRlZ29yeSA/IHsgY2F0ZWdvcnkgfSA6IHt9O1xuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdC5maW5kKHF1ZXJ5KS5zb3J0KHsgY3JlYXRlZEF0OiAtMSB9KS5sZWFuKCk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHByb2R1Y3RzKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFtdKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBhZG1pbiA9IGF3YWl0IHJlcXVpcmVBZG1pbkZyb21SZXF1ZXN0KHJlcXVlc3QpO1xuICBpZiAoIWFkbWluKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBjb25uZWN0REIoKTtcbiAgICBjb25zdCBwcm9kdWN0RGF0YSA9IGF3YWl0IHBhcnNlUHJvZHVjdFJlcXVlc3QocmVxdWVzdCk7XG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IFByb2R1Y3QuY3JlYXRlKHByb2R1Y3REYXRhKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocHJvZHVjdCwgeyBzdGF0dXM6IDIwMSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBnZXRQcm9kdWN0RXJyb3JNZXNzYWdlKGVycm9yKSB9LCB7IHN0YXR1czogNDAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY29ubmVjdERCIiwicmVxdWlyZUFkbWluRnJvbVJlcXVlc3QiLCJwYXJzZVByb2R1Y3RSZXF1ZXN0IiwiUHJvZHVjdCIsImdldFByb2R1Y3RFcnJvck1lc3NhZ2UiLCJlcnJvciIsImNvZGUiLCJFcnJvciIsIm5hbWUiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJHRVQiLCJyZXF1ZXN0IiwiY2F0ZWdvcnkiLCJuZXh0VXJsIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwicXVlcnkiLCJwcm9kdWN0cyIsImZpbmQiLCJzb3J0IiwiY3JlYXRlZEF0IiwibGVhbiIsImpzb24iLCJQT1NUIiwiYWRtaW4iLCJzdGF0dXMiLCJwcm9kdWN0RGF0YSIsInByb2R1Y3QiLCJjcmVhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/products/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAdminToken: () => (/* binding */ createAdminToken),\n/* harmony export */   requireAdmin: () => (/* binding */ requireAdmin),\n/* harmony export */   requireAdminFromRequest: () => (/* binding */ requireAdminFromRequest),\n/* harmony export */   verifyAdminToken: () => (/* binding */ verifyAdminToken)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/sign.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/verify.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nconst secret = new TextEncoder().encode(process.env.JWT_SECRET || \"your_jwt_secret_key\");\nasync function createAdminToken(email) {\n    return new jose__WEBPACK_IMPORTED_MODULE_1__.SignJWT({\n        email,\n        role: \"admin\"\n    }).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"7d\").sign(secret);\n}\nasync function verifyAdminToken(token) {\n    if (!token) return null;\n    try {\n        const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_2__.jwtVerify)(token, secret);\n        return payload.role === \"admin\" ? payload : null;\n    } catch  {\n        return null;\n    }\n}\nasync function requireAdmin() {\n    const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().get(\"admin_token\")?.value;\n    return verifyAdminToken(token);\n}\nasync function requireAdminFromRequest(request) {\n    const token = request.cookies.get(\"admin_token\")?.value;\n    return verifyAdminToken(token);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBDO0FBQ0g7QUFHdkMsTUFBTUcsU0FBUyxJQUFJQyxjQUFjQyxNQUFNLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxJQUFJO0FBRTNELGVBQWVDLGlCQUFpQkMsS0FBYTtJQUNsRCxPQUFPLElBQUlWLHlDQUFPQSxDQUFDO1FBQUVVO1FBQU9DLE1BQU07SUFBUSxHQUN2Q0Msa0JBQWtCLENBQUM7UUFBRUMsS0FBSztJQUFRLEdBQ2xDQyxXQUFXLEdBQ1hDLGlCQUFpQixDQUFDLE1BQ2xCQyxJQUFJLENBQUNiO0FBQ1Y7QUFFTyxlQUFlYyxpQkFBaUJDLEtBQWM7SUFDbkQsSUFBSSxDQUFDQSxPQUFPLE9BQU87SUFFbkIsSUFBSTtRQUNGLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUcsTUFBTWxCLCtDQUFTQSxDQUFDaUIsT0FBT2Y7UUFDM0MsT0FBT2dCLFFBQVFSLElBQUksS0FBSyxVQUFVUSxVQUFVO0lBQzlDLEVBQUUsT0FBTTtRQUNOLE9BQU87SUFDVDtBQUNGO0FBRU8sZUFBZUM7SUFDcEIsTUFBTUYsUUFBUWhCLHFEQUFPQSxHQUFHbUIsR0FBRyxDQUFDLGdCQUFnQkM7SUFDNUMsT0FBT0wsaUJBQWlCQztBQUMxQjtBQUVPLGVBQWVLLHdCQUF3QkMsT0FBb0I7SUFDaEUsTUFBTU4sUUFBUU0sUUFBUXRCLE9BQU8sQ0FBQ21CLEdBQUcsQ0FBQyxnQkFBZ0JDO0lBQ2xELE9BQU9MLGlCQUFpQkM7QUFDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWphc3RoYW4tZW1wb3JpdW0vLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZ25KV1QsIGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuY29uc3Qgc2VjcmV0ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJ5b3VyX2p3dF9zZWNyZXRfa2V5XCIpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQWRtaW5Ub2tlbihlbWFpbDogc3RyaW5nKSB7XG4gIHJldHVybiBuZXcgU2lnbkpXVCh7IGVtYWlsLCByb2xlOiBcImFkbWluXCIgfSlcbiAgICAuc2V0UHJvdGVjdGVkSGVhZGVyKHsgYWxnOiBcIkhTMjU2XCIgfSlcbiAgICAuc2V0SXNzdWVkQXQoKVxuICAgIC5zZXRFeHBpcmF0aW9uVGltZShcIjdkXCIpXG4gICAgLnNpZ24oc2VjcmV0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeUFkbWluVG9rZW4odG9rZW4/OiBzdHJpbmcpIHtcbiAgaWYgKCF0b2tlbikgcmV0dXJuIG51bGw7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IGF3YWl0IGp3dFZlcmlmeSh0b2tlbiwgc2VjcmV0KTtcbiAgICByZXR1cm4gcGF5bG9hZC5yb2xlID09PSBcImFkbWluXCIgPyBwYXlsb2FkIDogbnVsbDtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVBZG1pbigpIHtcbiAgY29uc3QgdG9rZW4gPSBjb29raWVzKCkuZ2V0KFwiYWRtaW5fdG9rZW5cIik/LnZhbHVlO1xuICByZXR1cm4gdmVyaWZ5QWRtaW5Ub2tlbih0b2tlbik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlQWRtaW5Gcm9tUmVxdWVzdChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoXCJhZG1pbl90b2tlblwiKT8udmFsdWU7XG4gIHJldHVybiB2ZXJpZnlBZG1pblRva2VuKHRva2VuKTtcbn1cbiJdLCJuYW1lcyI6WyJTaWduSldUIiwiand0VmVyaWZ5IiwiY29va2llcyIsInNlY3JldCIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJjcmVhdGVBZG1pblRva2VuIiwiZW1haWwiLCJyb2xlIiwic2V0UHJvdGVjdGVkSGVhZGVyIiwiYWxnIiwic2V0SXNzdWVkQXQiLCJzZXRFeHBpcmF0aW9uVGltZSIsInNpZ24iLCJ2ZXJpZnlBZG1pblRva2VuIiwidG9rZW4iLCJwYXlsb2FkIiwicmVxdWlyZUFkbWluIiwiZ2V0IiwidmFsdWUiLCJyZXF1aXJlQWRtaW5Gcm9tUmVxdWVzdCIsInJlcXVlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/cloudinary.ts":
/*!***************************!*\
  !*** ./lib/cloudinary.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"(rsc)/./node_modules/cloudinary/cloudinary.js\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n\ncloudinary__WEBPACK_IMPORTED_MODULE_0__.v2.config({\n    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,\n    api_key: process.env.CLOUDINARY_API_KEY,\n    api_secret: process.env.CLOUDINARY_API_SECRET\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudinary__WEBPACK_IMPORTED_MODULE_0__.v2);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY2xvdWRpbmFyeS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUNDLDBDQUFVQSxDQUFDQyxNQUFNLENBQUM7SUFDaEJDLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MscUJBQXFCO0lBQzdDQyxTQUFTSCxRQUFRQyxHQUFHLENBQUNHLGtCQUFrQjtJQUN2Q0MsWUFBWUwsUUFBUUMsR0FBRyxDQUFDSyxxQkFBcUI7QUFDL0M7QUFFQSxpRUFBZVQsMENBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWphc3RoYW4tZW1wb3JpdW0vLi9saWIvY2xvdWRpbmFyeS50cz84NDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHYyIGFzIGNsb3VkaW5hcnkgfSBmcm9tIFwiY2xvdWRpbmFyeVwiO1xuXG5jbG91ZGluYXJ5LmNvbmZpZyh7XG4gIGNsb3VkX25hbWU6IHByb2Nlc3MuZW52LkNMT1VESU5BUllfQ0xPVURfTkFNRSxcbiAgYXBpX2tleTogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9BUElfS0VZLFxuICBhcGlfc2VjcmV0OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0FQSV9TRUNSRVRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbG91ZGluYXJ5O1xuIl0sIm5hbWVzIjpbInYyIiwiY2xvdWRpbmFyeSIsImNvbmZpZyIsImNsb3VkX25hbWUiLCJwcm9jZXNzIiwiZW52IiwiQ0xPVURJTkFSWV9DTE9VRF9OQU1FIiwiYXBpX2tleSIsIkNMT1VESU5BUllfQVBJX0tFWSIsImFwaV9zZWNyZXQiLCJDTE9VRElOQVJZX0FQSV9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/cloudinary.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI || ( false ? 0 : \"mongodb://localhost:27017/rajasthan-emporium\");\nconst globalWithMongoose = global;\nconst cached = globalWithMongoose.mongooseCache || {\n    conn: null,\n    promise: null\n};\nglobalWithMongoose.mongooseCache = cached;\nasync function connectDB() {\n    if (!MONGODB_URI) {\n        throw new Error(\"MONGODB_URI is required. Add your MongoDB Atlas connection string to the environment.\");\n    }\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            bufferCommands: false,\n            serverSelectionTimeoutMS: 10000\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (error) {\n        cached.promise = null;\n        throw error;\n    }\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQ0pDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVyxJQUN0QkMsQ0FBQUEsTUFBcUMsR0FBRyxDQUFFLEdBQUcsOENBQTZDO0FBTzdGLE1BQU1FLHFCQUFxQkM7QUFJM0IsTUFBTUMsU0FBU0YsbUJBQW1CRyxhQUFhLElBQUk7SUFBRUMsTUFBTTtJQUFNQyxTQUFTO0FBQUs7QUFDL0VMLG1CQUFtQkcsYUFBYSxHQUFHRDtBQUU1QixlQUFlSTtJQUNwQixJQUFJLENBQUNULGFBQWE7UUFDaEIsTUFBTSxJQUFJVSxNQUFNO0lBQ2xCO0lBRUEsSUFBSUwsT0FBT0UsSUFBSSxFQUFFLE9BQU9GLE9BQU9FLElBQUk7SUFFbkMsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDbkJILE9BQU9HLE9BQU8sR0FBR1QsdURBQWdCLENBQUNDLGFBQWE7WUFDN0NZLGdCQUFnQjtZQUNoQkMsMEJBQTBCO1FBQzVCO0lBQ0Y7SUFFQSxJQUFJO1FBQ0ZSLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ3BDLEVBQUUsT0FBT00sT0FBTztRQUNkVCxPQUFPRyxPQUFPLEdBQUc7UUFDakIsTUFBTU07SUFDUjtJQUVBLE9BQU9ULE9BQU9FLElBQUk7QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWphc3RoYW4tZW1wb3JpdW0vLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IE1PTkdPREJfVVJJID1cbiAgcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgfHxcbiAgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIm1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvcmFqYXN0aGFuLWVtcG9yaXVtXCIpO1xuXG50eXBlIENhY2hlZENvbm5lY3Rpb24gPSB7XG4gIGNvbm46IHR5cGVvZiBtb25nb29zZSB8IG51bGw7XG4gIHByb21pc2U6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiB8IG51bGw7XG59O1xuXG5jb25zdCBnbG9iYWxXaXRoTW9uZ29vc2UgPSBnbG9iYWwgYXMgdHlwZW9mIGdsb2JhbFRoaXMgJiB7XG4gIG1vbmdvb3NlQ2FjaGU/OiBDYWNoZWRDb25uZWN0aW9uO1xufTtcblxuY29uc3QgY2FjaGVkID0gZ2xvYmFsV2l0aE1vbmdvb3NlLm1vbmdvb3NlQ2FjaGUgfHwgeyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG5nbG9iYWxXaXRoTW9uZ29vc2UubW9uZ29vc2VDYWNoZSA9IGNhY2hlZDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcbiAgaWYgKCFNT05HT0RCX1VSSSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1PTkdPREJfVVJJIGlzIHJlcXVpcmVkLiBBZGQgeW91ciBNb25nb0RCIEF0bGFzIGNvbm5lY3Rpb24gc3RyaW5nIHRvIHRoZSBlbnZpcm9ubWVudC5cIik7XG4gIH1cblxuICBpZiAoY2FjaGVkLmNvbm4pIHJldHVybiBjYWNoZWQuY29ubjtcblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCB7XG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXG4gICAgICBzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVM6IDEwMDAwXG4gICAgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBudWxsO1xuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiZ2xvYmFsV2l0aE1vbmdvb3NlIiwiZ2xvYmFsIiwiY2FjaGVkIiwibW9uZ29vc2VDYWNoZSIsImNvbm4iLCJwcm9taXNlIiwiY29ubmVjdERCIiwiRXJyb3IiLCJjb25uZWN0IiwiYnVmZmVyQ29tbWFuZHMiLCJzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./lib/product-upload.ts":
/*!*******************************!*\
  !*** ./lib/product-upload.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseProductRequest: () => (/* binding */ parseProductRequest)\n/* harmony export */ });\n/* harmony import */ var _lib_cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/cloudinary */ \"(rsc)/./lib/cloudinary.ts\");\n// lib/product-upload.ts\n\nasync function parseProductRequest(request) {\n    const formData = await request.formData();\n    // Get existing images from the form\n    const existingImages = formData.getAll(\"existingImages\");\n    // Get new image files\n    const imageFiles = formData.getAll(\"images\");\n    const uploadedImages = [];\n    // Upload new images to Cloudinary\n    for (const file of imageFiles){\n        if (file.size > 0) {\n            try {\n                const buffer = await file.arrayBuffer();\n                const base64 = Buffer.from(buffer).toString(\"base64\");\n                const dataUri = `data:${file.type};base64,${base64}`;\n                const result = await _lib_cloudinary__WEBPACK_IMPORTED_MODULE_0__[\"default\"].uploader.upload(dataUri, {\n                    folder: \"rajasthan-emporium\",\n                    resource_type: \"image\"\n                });\n                uploadedImages.push(result.secure_url);\n                console.log(\"Uploaded image:\", result.secure_url); // Debug log\n            } catch (error) {\n                console.error(\"Cloudinary upload error:\", error);\n                throw new Error(\"Image upload failed. The product was not saved.\");\n            }\n        }\n    }\n    // Combine existing and new images\n    const allImages = [\n        ...existingImages,\n        ...uploadedImages\n    ];\n    // Build the product data object\n    const productData = {\n        category: formData.get(\"category\"),\n        color: formData.get(\"color\") || \"\",\n        inStock: formData.get(\"inStock\") === \"on\" || formData.get(\"inStock\") === \"true\",\n        isFeatured: formData.get(\"isFeatured\") === \"on\" || formData.get(\"isFeatured\") === \"true\"\n    };\n    // Only add images if there are any\n    if (allImages.length > 0) {\n        productData.images = allImages;\n    }\n    return productData;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJvZHVjdC11cGxvYWQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3QkFBd0I7QUFFa0I7QUFFbkMsZUFBZUMsb0JBQ3BCQyxPQUFvQjtJQUVwQixNQUFNQyxXQUFXLE1BQU1ELFFBQVFDLFFBQVE7SUFFdkMsb0NBQW9DO0lBQ3BDLE1BQU1DLGlCQUFpQkQsU0FBU0UsTUFBTSxDQUFDO0lBRXZDLHNCQUFzQjtJQUN0QixNQUFNQyxhQUFhSCxTQUFTRSxNQUFNLENBQUM7SUFDbkMsTUFBTUUsaUJBQTJCLEVBQUU7SUFFbkMsa0NBQWtDO0lBQ2xDLEtBQUssTUFBTUMsUUFBUUYsV0FBWTtRQUM3QixJQUFJRSxLQUFLQyxJQUFJLEdBQUcsR0FBRztZQUNqQixJQUFJO2dCQUNGLE1BQU1DLFNBQVMsTUFBTUYsS0FBS0csV0FBVztnQkFDckMsTUFBTUMsU0FBU0MsT0FBT0MsSUFBSSxDQUFDSixRQUFRSyxRQUFRLENBQUM7Z0JBQzVDLE1BQU1DLFVBQVUsQ0FBQyxLQUFLLEVBQUVSLEtBQUtTLElBQUksQ0FBQyxRQUFRLEVBQUVMLE9BQU8sQ0FBQztnQkFFcEQsTUFBTU0sU0FBUyxNQUFNbEIsdURBQVVBLENBQUNtQixRQUFRLENBQUNDLE1BQU0sQ0FBQ0osU0FBUztvQkFDdkRLLFFBQVE7b0JBQ1JDLGVBQWU7Z0JBQ2pCO2dCQUNBZixlQUFlZ0IsSUFBSSxDQUFDTCxPQUFPTSxVQUFVO2dCQUNyQ0MsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQlIsT0FBT00sVUFBVSxHQUFHLFlBQVk7WUFDakUsRUFBRSxPQUFPRyxPQUFPO2dCQUNkRixRQUFRRSxLQUFLLENBQUMsNEJBQTRCQTtnQkFDMUMsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1FBQ0Y7SUFDRjtJQUVBLGtDQUFrQztJQUNsQyxNQUFNQyxZQUFZO1dBQUl6QjtXQUFtQkc7S0FBZTtJQUV4RCxnQ0FBZ0M7SUFDaEMsTUFBTXVCLGNBQW1DO1FBQ3ZDQyxVQUFVNUIsU0FBUzZCLEdBQUcsQ0FBQztRQUN2QkMsT0FBTzlCLFNBQVM2QixHQUFHLENBQUMsWUFBc0I7UUFDMUNFLFNBQVMvQixTQUFTNkIsR0FBRyxDQUFDLGVBQWUsUUFBUTdCLFNBQVM2QixHQUFHLENBQUMsZUFBZTtRQUN6RUcsWUFBWWhDLFNBQVM2QixHQUFHLENBQUMsa0JBQWtCLFFBQVE3QixTQUFTNkIsR0FBRyxDQUFDLGtCQUFrQjtJQUNwRjtJQUVBLG1DQUFtQztJQUNuQyxJQUFJSCxVQUFVTyxNQUFNLEdBQUcsR0FBRztRQUN4Qk4sWUFBWU8sTUFBTSxHQUFHUjtJQUN2QjtJQUVBLE9BQU9DO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWphc3RoYW4tZW1wb3JpdW0vLi9saWIvcHJvZHVjdC11cGxvYWQudHM/MTZjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvcHJvZHVjdC11cGxvYWQudHNcbmltcG9ydCB7IE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgY2xvdWRpbmFyeSBmcm9tIFwiQC9saWIvY2xvdWRpbmFyeVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2VQcm9kdWN0UmVxdWVzdChcbiAgcmVxdWVzdDogTmV4dFJlcXVlc3Rcbikge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICAvLyBHZXQgZXhpc3RpbmcgaW1hZ2VzIGZyb20gdGhlIGZvcm1cbiAgY29uc3QgZXhpc3RpbmdJbWFnZXMgPSBmb3JtRGF0YS5nZXRBbGwoXCJleGlzdGluZ0ltYWdlc1wiKSBhcyBzdHJpbmdbXTtcblxuICAvLyBHZXQgbmV3IGltYWdlIGZpbGVzXG4gIGNvbnN0IGltYWdlRmlsZXMgPSBmb3JtRGF0YS5nZXRBbGwoXCJpbWFnZXNcIikgYXMgRmlsZVtdO1xuICBjb25zdCB1cGxvYWRlZEltYWdlczogc3RyaW5nW10gPSBbXTtcblxuICAvLyBVcGxvYWQgbmV3IGltYWdlcyB0byBDbG91ZGluYXJ5XG4gIGZvciAoY29uc3QgZmlsZSBvZiBpbWFnZUZpbGVzKSB7XG4gICAgaWYgKGZpbGUuc2l6ZSA+IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgY29uc3QgYmFzZTY0ID0gQnVmZmVyLmZyb20oYnVmZmVyKS50b1N0cmluZyhcImJhc2U2NFwiKTtcbiAgICAgICAgY29uc3QgZGF0YVVyaSA9IGBkYXRhOiR7ZmlsZS50eXBlfTtiYXNlNjQsJHtiYXNlNjR9YDtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbG91ZGluYXJ5LnVwbG9hZGVyLnVwbG9hZChkYXRhVXJpLCB7XG4gICAgICAgICAgZm9sZGVyOiBcInJhamFzdGhhbi1lbXBvcml1bVwiLFxuICAgICAgICAgIHJlc291cmNlX3R5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHVwbG9hZGVkSW1hZ2VzLnB1c2gocmVzdWx0LnNlY3VyZV91cmwpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVwbG9hZGVkIGltYWdlOlwiLCByZXN1bHQuc2VjdXJlX3VybCk7IC8vIERlYnVnIGxvZ1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNsb3VkaW5hcnkgdXBsb2FkIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkltYWdlIHVwbG9hZCBmYWlsZWQuIFRoZSBwcm9kdWN0IHdhcyBub3Qgc2F2ZWQuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENvbWJpbmUgZXhpc3RpbmcgYW5kIG5ldyBpbWFnZXNcbiAgY29uc3QgYWxsSW1hZ2VzID0gWy4uLmV4aXN0aW5nSW1hZ2VzLCAuLi51cGxvYWRlZEltYWdlc107XG5cbiAgLy8gQnVpbGQgdGhlIHByb2R1Y3QgZGF0YSBvYmplY3RcbiAgY29uc3QgcHJvZHVjdERhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7XG4gICAgY2F0ZWdvcnk6IGZvcm1EYXRhLmdldChcImNhdGVnb3J5XCIpIGFzIHN0cmluZyxcbiAgICBjb2xvcjogZm9ybURhdGEuZ2V0KFwiY29sb3JcIikgYXMgc3RyaW5nIHx8IFwiXCIsXG4gICAgaW5TdG9jazogZm9ybURhdGEuZ2V0KFwiaW5TdG9ja1wiKSA9PT0gXCJvblwiIHx8IGZvcm1EYXRhLmdldChcImluU3RvY2tcIikgPT09IFwidHJ1ZVwiLFxuICAgIGlzRmVhdHVyZWQ6IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwib25cIiB8fCBmb3JtRGF0YS5nZXQoXCJpc0ZlYXR1cmVkXCIpID09PSBcInRydWVcIixcbiAgfTtcblxuICAvLyBPbmx5IGFkZCBpbWFnZXMgaWYgdGhlcmUgYXJlIGFueVxuICBpZiAoYWxsSW1hZ2VzLmxlbmd0aCA+IDApIHtcbiAgICBwcm9kdWN0RGF0YS5pbWFnZXMgPSBhbGxJbWFnZXM7XG4gIH1cblxuICByZXR1cm4gcHJvZHVjdERhdGE7XG59XG4iXSwibmFtZXMiOlsiY2xvdWRpbmFyeSIsInBhcnNlUHJvZHVjdFJlcXVlc3QiLCJyZXF1ZXN0IiwiZm9ybURhdGEiLCJleGlzdGluZ0ltYWdlcyIsImdldEFsbCIsImltYWdlRmlsZXMiLCJ1cGxvYWRlZEltYWdlcyIsImZpbGUiLCJzaXplIiwiYnVmZmVyIiwiYXJyYXlCdWZmZXIiLCJiYXNlNjQiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJkYXRhVXJpIiwidHlwZSIsInJlc3VsdCIsInVwbG9hZGVyIiwidXBsb2FkIiwiZm9sZGVyIiwicmVzb3VyY2VfdHlwZSIsInB1c2giLCJzZWN1cmVfdXJsIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiRXJyb3IiLCJhbGxJbWFnZXMiLCJwcm9kdWN0RGF0YSIsImNhdGVnb3J5IiwiZ2V0IiwiY29sb3IiLCJpblN0b2NrIiwiaXNGZWF0dXJlZCIsImxlbmd0aCIsImltYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/product-upload.ts\n");

/***/ }),

/***/ "(rsc)/./models/Product.ts":
/*!***************************!*\
  !*** ./models/Product.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    // Removed: name, slug, description, longDescription\n    category: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    images: [\n        {\n            type: String\n        }\n    ],\n    color: {\n        type: String,\n        default: \"\"\n    },\n    inStock: {\n        type: Boolean,\n        default: true\n    },\n    isFeatured: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", ProductSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvUHJvZHVjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0Q7QUFFcEQsTUFBTUcsZ0JBQWdCLElBQUlGLDRDQUFNQSxDQUM5QjtJQUNFLG9EQUFvRDtJQUNwREcsVUFBVTtRQUFFQyxNQUFNQztRQUFRQyxVQUFVO1FBQU1DLE1BQU07SUFBSztJQUNyREMsUUFBUTtRQUFDO1lBQUVKLE1BQU1DO1FBQU87S0FBRTtJQUMxQkksT0FBTztRQUFFTCxNQUFNQztRQUFRSyxTQUFTO0lBQUc7SUFDbkNDLFNBQVM7UUFBRVAsTUFBTVE7UUFBU0YsU0FBUztJQUFLO0lBQ3hDRyxZQUFZO1FBQUVULE1BQU1RO1FBQVNGLFNBQVM7SUFBTTtBQUM5QyxHQUNBO0lBQUVJLFlBQVk7QUFBSztBQUdyQixpRUFBZWIsNENBQU1BLENBQUNjLE9BQU8sSUFBSWhCLHFEQUFjLENBQUMsV0FBV0csY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JhamFzdGhhbi1lbXBvcml1bS8uL21vZGVscy9Qcm9kdWN0LnRzP2E3YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFByb2R1Y3RTY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgLy8gUmVtb3ZlZDogbmFtZSwgc2x1ZywgZGVzY3JpcHRpb24sIGxvbmdEZXNjcmlwdGlvblxuICAgIGNhdGVnb3J5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHRyaW06IHRydWUgfSxcbiAgICBpbWFnZXM6IFt7IHR5cGU6IFN0cmluZyB9XSxcbiAgICBjb2xvcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICBpblN0b2NrOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSxcbiAgICBpc0ZlYXR1cmVkOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH1cbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGVscy5Qcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKFwiUHJvZHVjdFwiLCBQcm9kdWN0U2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJtb2RlbHMiLCJQcm9kdWN0U2NoZW1hIiwiY2F0ZWdvcnkiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwiaW1hZ2VzIiwiY29sb3IiLCJkZWZhdWx0IiwiaW5TdG9jayIsIkJvb2xlYW4iLCJpc0ZlYXR1cmVkIiwidGltZXN0YW1wcyIsIlByb2R1Y3QiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/Product.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/lodash","vendor-chunks/cloudinary","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.ts&appDir=D%3A%5C2026%5Crj-emp%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5C2026%5Crj-emp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();