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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_product_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/product-upload */ \"(rsc)/./lib/product-upload.ts\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/Product */ \"(rsc)/./models/Product.ts\");\n\n\n\n\n\nfunction getProductErrorMessage(error) {\n    if (typeof error === \"object\" && error !== null && \"code\" in error && error.code === 11000) {\n        return \"A product with this slug already exists. Use a different slug.\";\n    }\n    if (error instanceof Error) {\n        if (error.name === \"MongooseServerSelectionError\" || error.message.includes(\"querySrv\") || error.message.includes(\"ETIMEOUT\") || error.message.includes(\"ENOTFOUND\") || error.message.includes(\"IP\") || error.message.includes(\"whitelisted\") || error.message.includes(\"SSL\")) {\n            return \"Could not connect to MongoDB Atlas. Check your internet/DNS connection and Atlas Network Access IP allowlist, then try again.\";\n        }\n        return error.message;\n    }\n    return \"Could not create product\";\n}\nasync function GET(request) {\n    try {\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n        const category = request.nextUrl.searchParams.get(\"category\");\n        const query = category ? {\n            category\n        } : {};\n        const products = await _models_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"].find(query).sort({\n            createdAt: -1\n        }).lean();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(products);\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json([]);\n    }\n}\nasync function POST(request) {\n    const admin = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.requireAdminFromRequest)(request);\n    if (!admin) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    try {\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n        const product = await _models_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"].create(await (0,_lib_product_upload__WEBPACK_IMPORTED_MODULE_3__.parseProductRequest)(request, {\n            allowNameSlug: true\n        }));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(product, {\n            status: 201\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: getProductErrorMessage(error)\n        }, {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2R1Y3RzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0Q7QUFDbkI7QUFDZ0I7QUFDTTtBQUNwQjtBQUV2QyxTQUFTSyx1QkFBdUJDLEtBQWM7SUFDNUMsSUFBSSxPQUFPQSxVQUFVLFlBQVlBLFVBQVUsUUFBUSxVQUFVQSxTQUFTQSxNQUFNQyxJQUFJLEtBQUssT0FBTztRQUMxRixPQUFPO0lBQ1Q7SUFFQSxJQUFJRCxpQkFBaUJFLE9BQU87UUFDMUIsSUFDRUYsTUFBTUcsSUFBSSxLQUFLLGtDQUNmSCxNQUFNSSxPQUFPLENBQUNDLFFBQVEsQ0FBQyxlQUN2QkwsTUFBTUksT0FBTyxDQUFDQyxRQUFRLENBQUMsZUFDdkJMLE1BQU1JLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLGdCQUN2QkwsTUFBTUksT0FBTyxDQUFDQyxRQUFRLENBQUMsU0FDdkJMLE1BQU1JLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLGtCQUN2QkwsTUFBTUksT0FBTyxDQUFDQyxRQUFRLENBQUMsUUFDdkI7WUFDQSxPQUFPO1FBQ1Q7UUFFQSxPQUFPTCxNQUFNSSxPQUFPO0lBQ3RCO0lBRUEsT0FBTztBQUNUO0FBRU8sZUFBZUUsSUFBSUMsT0FBb0I7SUFDNUMsSUFBSTtRQUNGLE1BQU1aLGtEQUFTQTtRQUNmLE1BQU1hLFdBQVdELFFBQVFFLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDQyxHQUFHLENBQUM7UUFDbEQsTUFBTUMsUUFBUUosV0FBVztZQUFFQTtRQUFTLElBQUksQ0FBQztRQUN6QyxNQUFNSyxXQUFXLE1BQU1mLHVEQUFPQSxDQUFDZ0IsSUFBSSxDQUFDRixPQUFPRyxJQUFJLENBQUM7WUFBRUMsV0FBVyxDQUFDO1FBQUUsR0FBR0MsSUFBSTtRQUN2RSxPQUFPdkIscURBQVlBLENBQUN3QixJQUFJLENBQUNMO0lBQzNCLEVBQUUsT0FBTTtRQUNOLE9BQU9uQixxREFBWUEsQ0FBQ3dCLElBQUksQ0FBQyxFQUFFO0lBQzdCO0FBQ0Y7QUFFTyxlQUFlQyxLQUFLWixPQUFvQjtJQUM3QyxNQUFNYSxRQUFRLE1BQU14QixrRUFBdUJBLENBQUNXO0lBQzVDLElBQUksQ0FBQ2EsT0FBTyxPQUFPMUIscURBQVlBLENBQUN3QixJQUFJLENBQUM7UUFBRWQsU0FBUztJQUFlLEdBQUc7UUFBRWlCLFFBQVE7SUFBSTtJQUVoRixJQUFJO1FBQ0YsTUFBTTFCLGtEQUFTQTtRQUNmLE1BQU0yQixVQUFVLE1BQU14Qix1REFBT0EsQ0FBQ3lCLE1BQU0sQ0FBQyxNQUFNMUIsd0VBQW1CQSxDQUFDVSxTQUFTO1lBQUVpQixlQUFlO1FBQUs7UUFDOUYsT0FBTzlCLHFEQUFZQSxDQUFDd0IsSUFBSSxDQUFDSSxTQUFTO1lBQUVELFFBQVE7UUFBSTtJQUNsRCxFQUFFLE9BQU9yQixPQUFPO1FBQ2QsT0FBT04scURBQVlBLENBQUN3QixJQUFJLENBQUM7WUFBRWQsU0FBU0wsdUJBQXVCQztRQUFPLEdBQUc7WUFBRXFCLFFBQVE7UUFBSTtJQUNyRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFqYXN0aGFuLWVtcG9yaXVtLy4vYXBwL2FwaS9wcm9kdWN0cy9yb3V0ZS50cz85MmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gXCJAL2xpYi9kYlwiO1xuaW1wb3J0IHsgcmVxdWlyZUFkbWluRnJvbVJlcXVlc3QgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuaW1wb3J0IHsgcGFyc2VQcm9kdWN0UmVxdWVzdCB9IGZyb20gXCJAL2xpYi9wcm9kdWN0LXVwbG9hZFwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIkAvbW9kZWxzL1Byb2R1Y3RcIjtcblxuZnVuY3Rpb24gZ2V0UHJvZHVjdEVycm9yTWVzc2FnZShlcnJvcjogdW5rbm93bikge1xuICBpZiAodHlwZW9mIGVycm9yID09PSBcIm9iamVjdFwiICYmIGVycm9yICE9PSBudWxsICYmIFwiY29kZVwiIGluIGVycm9yICYmIGVycm9yLmNvZGUgPT09IDExMDAwKSB7XG4gICAgcmV0dXJuIFwiQSBwcm9kdWN0IHdpdGggdGhpcyBzbHVnIGFscmVhZHkgZXhpc3RzLiBVc2UgYSBkaWZmZXJlbnQgc2x1Zy5cIjtcbiAgfVxuXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgaWYgKFxuICAgICAgZXJyb3IubmFtZSA9PT0gXCJNb25nb29zZVNlcnZlclNlbGVjdGlvbkVycm9yXCIgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJxdWVyeVNydlwiKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcIkVUSU1FT1VUXCIpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKFwiRU5PVEZPVU5EXCIpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKFwiSVBcIikgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJ3aGl0ZWxpc3RlZFwiKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcIlNTTFwiKVxuICAgICkge1xuICAgICAgcmV0dXJuIFwiQ291bGQgbm90IGNvbm5lY3QgdG8gTW9uZ29EQiBBdGxhcy4gQ2hlY2sgeW91ciBpbnRlcm5ldC9ETlMgY29ubmVjdGlvbiBhbmQgQXRsYXMgTmV0d29yayBBY2Nlc3MgSVAgYWxsb3dsaXN0LCB0aGVuIHRyeSBhZ2Fpbi5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgfVxuXG4gIHJldHVybiBcIkNvdWxkIG5vdCBjcmVhdGUgcHJvZHVjdFwiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY29ubmVjdERCKCk7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSByZXF1ZXN0Lm5leHRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNhdGVnb3J5XCIpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gY2F0ZWdvcnkgPyB7IGNhdGVnb3J5IH0gOiB7fTtcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IFByb2R1Y3QuZmluZChxdWVyeSkuc29ydCh7IGNyZWF0ZWRBdDogLTEgfSkubGVhbigpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihwcm9kdWN0cyk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihbXSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3QgYWRtaW4gPSBhd2FpdCByZXF1aXJlQWRtaW5Gcm9tUmVxdWVzdChyZXF1ZXN0KTtcbiAgaWYgKCFhZG1pbikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9LCB7IHN0YXR1czogNDAxIH0pO1xuXG4gIHRyeSB7XG4gICAgYXdhaXQgY29ubmVjdERCKCk7XG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IFByb2R1Y3QuY3JlYXRlKGF3YWl0IHBhcnNlUHJvZHVjdFJlcXVlc3QocmVxdWVzdCwgeyBhbGxvd05hbWVTbHVnOiB0cnVlIH0pKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocHJvZHVjdCwgeyBzdGF0dXM6IDIwMSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBnZXRQcm9kdWN0RXJyb3JNZXNzYWdlKGVycm9yKSB9LCB7IHN0YXR1czogNDAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY29ubmVjdERCIiwicmVxdWlyZUFkbWluRnJvbVJlcXVlc3QiLCJwYXJzZVByb2R1Y3RSZXF1ZXN0IiwiUHJvZHVjdCIsImdldFByb2R1Y3RFcnJvck1lc3NhZ2UiLCJlcnJvciIsImNvZGUiLCJFcnJvciIsIm5hbWUiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJHRVQiLCJyZXF1ZXN0IiwiY2F0ZWdvcnkiLCJuZXh0VXJsIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwicXVlcnkiLCJwcm9kdWN0cyIsImZpbmQiLCJzb3J0IiwiY3JlYXRlZEF0IiwibGVhbiIsImpzb24iLCJQT1NUIiwiYWRtaW4iLCJzdGF0dXMiLCJwcm9kdWN0IiwiY3JlYXRlIiwiYWxsb3dOYW1lU2x1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/products/route.ts\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseProductRequest: () => (/* binding */ parseProductRequest),\n/* harmony export */   slugify: () => (/* binding */ slugify)\n/* harmony export */ });\n/* harmony import */ var _lib_cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/cloudinary */ \"(rsc)/./lib/cloudinary.ts\");\n\nconst MAX_IMAGE_SIZE = 5 * 1024 * 1024;\nconst CLOUDINARY_FOLDER = \"rajasthan-emporium/products\";\nfunction slugify(value) {\n    return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, \"-\").replace(/(^-|-$)/g, \"\");\n}\nfunction readString(formData, key) {\n    return String(formData.get(key) || \"\").trim();\n}\nasync function uploadImage(file) {\n    if (!file.type.startsWith(\"image/\")) {\n        throw new Error(\"Only image files can be uploaded.\");\n    }\n    if (file.size > MAX_IMAGE_SIZE) {\n        throw new Error(\"Each image must be 5MB or smaller.\");\n    }\n    const buffer = Buffer.from(await file.arrayBuffer());\n    const dataUri = `data:${file.type};base64,${buffer.toString(\"base64\")}`;\n    const result = await _lib_cloudinary__WEBPACK_IMPORTED_MODULE_0__[\"default\"].uploader.upload(dataUri, {\n        folder: CLOUDINARY_FOLDER,\n        resource_type: \"image\"\n    });\n    return result.secure_url;\n}\nasync function parseProductRequest(request, options = {}) {\n    const contentType = request.headers.get(\"content-type\") || \"\";\n    if (!contentType.includes(\"multipart/form-data\")) {\n        const body = await request.json();\n        return {\n            ...body,\n            name: String(body.name || \"\").trim(),\n            slug: String(body.slug || (options.allowNameSlug ? slugify(String(body.name || \"\")) : \"\")).trim(),\n            category: String(body.category || \"\").trim(),\n            description: String(body.description || \"\").trim(),\n            longDescription: String(body.longDescription || \"\").trim(),\n            color: String(body.color || \"\").trim()\n        };\n    }\n    const formData = await request.formData();\n    const name = readString(formData, \"name\");\n    const selectedImages = formData.getAll(\"images\").filter((item)=>item instanceof File && item.size > 0);\n    const uploadedImages = await Promise.all(selectedImages.map(uploadImage));\n    const existingImages = formData.getAll(\"existingImages\").map(String).filter(Boolean);\n    return {\n        name,\n        slug: readString(formData, \"slug\") || (options.allowNameSlug ? slugify(name) : \"\"),\n        category: readString(formData, \"category\"),\n        description: readString(formData, \"description\"),\n        longDescription: readString(formData, \"longDescription\"),\n        images: [\n            ...existingImages,\n            ...uploadedImages\n        ],\n        color: readString(formData, \"color\"),\n        inStock: formData.get(\"inStock\") === \"on\",\n        isFeatured: formData.get(\"isFeatured\") === \"on\"\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0QsUUFBUTtlQUFJRjtlQUFtQko7U0FBZTtRQUM5Q04sT0FBT3JDLFdBQVdDLFVBQVU7UUFDNUJpRCxTQUFTakQsU0FBU0csR0FBRyxDQUFDLGVBQWU7UUFDckMrQyxZQUFZbEQsU0FBU0csR0FBRyxDQUFDLGtCQUFrQjtJQUM3QztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFqYXN0aGFuLWVtcG9yaXVtLy4vbGliL3Byb2R1Y3QtdXBsb2FkLnRzPzE2YzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBjbG91ZGluYXJ5IGZyb20gXCJAL2xpYi9jbG91ZGluYXJ5XCI7XG5cbmNvbnN0IE1BWF9JTUFHRV9TSVpFID0gNSAqIDEwMjQgKiAxMDI0O1xuY29uc3QgQ0xPVURJTkFSWV9GT0xERVIgPSBcInJhamFzdGhhbi1lbXBvcml1bS9wcm9kdWN0c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2x1Z2lmeSh2YWx1ZTogc3RyaW5nKSB7XG4gIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKC9bXmEtejAtOV0rL2csIFwiLVwiKS5yZXBsYWNlKC8oXi18LSQpL2csIFwiXCIpO1xufVxuXG5mdW5jdGlvbiByZWFkU3RyaW5nKGZvcm1EYXRhOiBGb3JtRGF0YSwga2V5OiBzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhmb3JtRGF0YS5nZXQoa2V5KSB8fCBcIlwiKS50cmltKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwbG9hZEltYWdlKGZpbGU6IEZpbGUpIHtcbiAgaWYgKCFmaWxlLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk9ubHkgaW1hZ2UgZmlsZXMgY2FuIGJlIHVwbG9hZGVkLlwiKTtcbiAgfVxuXG4gIGlmIChmaWxlLnNpemUgPiBNQVhfSU1BR0VfU0laRSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkVhY2ggaW1hZ2UgbXVzdCBiZSA1TUIgb3Igc21hbGxlci5cIik7XG4gIH1cblxuICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCkpO1xuICBjb25zdCBkYXRhVXJpID0gYGRhdGE6JHtmaWxlLnR5cGV9O2Jhc2U2NCwke2J1ZmZlci50b1N0cmluZyhcImJhc2U2NFwiKX1gO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbG91ZGluYXJ5LnVwbG9hZGVyLnVwbG9hZChkYXRhVXJpLCB7XG4gICAgZm9sZGVyOiBDTE9VRElOQVJZX0ZPTERFUixcbiAgICByZXNvdXJjZV90eXBlOiBcImltYWdlXCJcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdC5zZWN1cmVfdXJsO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2VQcm9kdWN0UmVxdWVzdChyZXF1ZXN0OiBOZXh0UmVxdWVzdCwgb3B0aW9uczogeyBhbGxvd05hbWVTbHVnPzogYm9vbGVhbiB9ID0ge30pIHtcbiAgY29uc3QgY29udGVudFR5cGUgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpIHx8IFwiXCI7XG5cbiAgaWYgKCFjb250ZW50VHlwZS5pbmNsdWRlcyhcIm11bHRpcGFydC9mb3JtLWRhdGFcIikpIHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmJvZHksXG4gICAgICBuYW1lOiBTdHJpbmcoYm9keS5uYW1lIHx8IFwiXCIpLnRyaW0oKSxcbiAgICAgIHNsdWc6IFN0cmluZyhib2R5LnNsdWcgfHwgKG9wdGlvbnMuYWxsb3dOYW1lU2x1ZyA/IHNsdWdpZnkoU3RyaW5nKGJvZHkubmFtZSB8fCBcIlwiKSkgOiBcIlwiKSkudHJpbSgpLFxuICAgICAgY2F0ZWdvcnk6IFN0cmluZyhib2R5LmNhdGVnb3J5IHx8IFwiXCIpLnRyaW0oKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBTdHJpbmcoYm9keS5kZXNjcmlwdGlvbiB8fCBcIlwiKS50cmltKCksXG4gICAgICBsb25nRGVzY3JpcHRpb246IFN0cmluZyhib2R5LmxvbmdEZXNjcmlwdGlvbiB8fCBcIlwiKS50cmltKCksXG4gICAgICBjb2xvcjogU3RyaW5nKGJvZHkuY29sb3IgfHwgXCJcIikudHJpbSgpXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBuYW1lID0gcmVhZFN0cmluZyhmb3JtRGF0YSwgXCJuYW1lXCIpO1xuICBjb25zdCBzZWxlY3RlZEltYWdlcyA9IGZvcm1EYXRhXG4gICAgLmdldEFsbChcImltYWdlc1wiKVxuICAgIC5maWx0ZXIoKGl0ZW0pOiBpdGVtIGlzIEZpbGUgPT4gaXRlbSBpbnN0YW5jZW9mIEZpbGUgJiYgaXRlbS5zaXplID4gMCk7XG4gIGNvbnN0IHVwbG9hZGVkSW1hZ2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoc2VsZWN0ZWRJbWFnZXMubWFwKHVwbG9hZEltYWdlKSk7XG4gIGNvbnN0IGV4aXN0aW5nSW1hZ2VzID0gZm9ybURhdGEuZ2V0QWxsKFwiZXhpc3RpbmdJbWFnZXNcIikubWFwKFN0cmluZykuZmlsdGVyKEJvb2xlYW4pO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBzbHVnOiByZWFkU3RyaW5nKGZvcm1EYXRhLCBcInNsdWdcIikgfHwgKG9wdGlvbnMuYWxsb3dOYW1lU2x1ZyA/IHNsdWdpZnkobmFtZSkgOiBcIlwiKSxcbiAgICBjYXRlZ29yeTogcmVhZFN0cmluZyhmb3JtRGF0YSwgXCJjYXRlZ29yeVwiKSxcbiAgICBkZXNjcmlwdGlvbjogcmVhZFN0cmluZyhmb3JtRGF0YSwgXCJkZXNjcmlwdGlvblwiKSxcbiAgICBsb25nRGVzY3JpcHRpb246IHJlYWRTdHJpbmcoZm9ybURhdGEsIFwibG9uZ0Rlc2NyaXB0aW9uXCIpLFxuICAgIGltYWdlczogWy4uLmV4aXN0aW5nSW1hZ2VzLCAuLi51cGxvYWRlZEltYWdlc10sXG4gICAgY29sb3I6IHJlYWRTdHJpbmcoZm9ybURhdGEsIFwiY29sb3JcIiksXG4gICAgaW5TdG9jazogZm9ybURhdGEuZ2V0KFwiaW5TdG9ja1wiKSA9PT0gXCJvblwiLFxuICAgIGlzRmVhdHVyZWQ6IGZvcm1EYXRhLmdldChcImlzRmVhdHVyZWRcIikgPT09IFwib25cIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbImNsb3VkaW5hcnkiLCJNQVhfSU1BR0VfU0laRSIsIkNMT1VESU5BUllfRk9MREVSIiwic2x1Z2lmeSIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJ0cmltIiwicmVwbGFjZSIsInJlYWRTdHJpbmciLCJmb3JtRGF0YSIsImtleSIsIlN0cmluZyIsImdldCIsInVwbG9hZEltYWdlIiwiZmlsZSIsInR5cGUiLCJzdGFydHNXaXRoIiwiRXJyb3IiLCJzaXplIiwiYnVmZmVyIiwiQnVmZmVyIiwiZnJvbSIsImFycmF5QnVmZmVyIiwiZGF0YVVyaSIsInRvU3RyaW5nIiwicmVzdWx0IiwidXBsb2FkZXIiLCJ1cGxvYWQiLCJmb2xkZXIiLCJyZXNvdXJjZV90eXBlIiwic2VjdXJlX3VybCIsInBhcnNlUHJvZHVjdFJlcXVlc3QiLCJyZXF1ZXN0Iiwib3B0aW9ucyIsImNvbnRlbnRUeXBlIiwiaGVhZGVycyIsImluY2x1ZGVzIiwiYm9keSIsImpzb24iLCJuYW1lIiwic2x1ZyIsImFsbG93TmFtZVNsdWciLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwibG9uZ0Rlc2NyaXB0aW9uIiwiY29sb3IiLCJzZWxlY3RlZEltYWdlcyIsImdldEFsbCIsImZpbHRlciIsIml0ZW0iLCJGaWxlIiwidXBsb2FkZWRJbWFnZXMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiZXhpc3RpbmdJbWFnZXMiLCJCb29sZWFuIiwiaW1hZ2VzIiwiaW5TdG9jayIsImlzRmVhdHVyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/product-upload.ts\n");

/***/ }),

/***/ "(rsc)/./models/Product.ts":
/*!***************************!*\
  !*** ./models/Product.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    slug: {\n        type: String,\n        required: true,\n        unique: true,\n        trim: true\n    },\n    category: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    description: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    longDescription: {\n        type: String,\n        default: \"\"\n    },\n    images: [\n        {\n            type: String\n        }\n    ],\n    color: {\n        type: String,\n        default: \"\"\n    },\n    inStock: {\n        type: Boolean,\n        default: true\n    },\n    isFeatured: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", ProductSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvUHJvZHVjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0Q7QUFFcEQsTUFBTUcsZ0JBQWdCLElBQUlGLDRDQUFNQSxDQUM5QjtJQUNFRyxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUMsTUFBTTtJQUFLO0lBQ2pEQyxNQUFNO1FBQUVKLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUcsUUFBUTtRQUFNRixNQUFNO0lBQUs7SUFDL0RHLFVBQVU7UUFBRU4sTUFBTUM7UUFBUUMsVUFBVTtRQUFNQyxNQUFNO0lBQUs7SUFDckRJLGFBQWE7UUFBRVAsTUFBTUM7UUFBUUMsVUFBVTtRQUFNQyxNQUFNO0lBQUs7SUFDeERLLGlCQUFpQjtRQUFFUixNQUFNQztRQUFRUSxTQUFTO0lBQUc7SUFDN0NDLFFBQVE7UUFBQztZQUFFVixNQUFNQztRQUFPO0tBQUU7SUFDMUJVLE9BQU87UUFBRVgsTUFBTUM7UUFBUVEsU0FBUztJQUFHO0lBQ25DRyxTQUFTO1FBQUVaLE1BQU1hO1FBQVNKLFNBQVM7SUFBSztJQUN4Q0ssWUFBWTtRQUFFZCxNQUFNYTtRQUFTSixTQUFTO0lBQU07QUFDOUMsR0FDQTtJQUFFTSxZQUFZO0FBQUs7QUFHckIsaUVBQWVsQiw0Q0FBTUEsQ0FBQ21CLE9BQU8sSUFBSXJCLHFEQUFjLENBQUMsV0FBV0csY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JhamFzdGhhbi1lbXBvcml1bS8uL21vZGVscy9Qcm9kdWN0LnRzP2E3YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFByb2R1Y3RTY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXG4gICAgc2x1ZzogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUsIHRyaW06IHRydWUgfSxcbiAgICBjYXRlZ29yeTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXG4gICAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdHJpbTogdHJ1ZSB9LFxuICAgIGxvbmdEZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICBpbWFnZXM6IFt7IHR5cGU6IFN0cmluZyB9XSxcbiAgICBjb2xvcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgICBpblN0b2NrOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSxcbiAgICBpc0ZlYXR1cmVkOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH1cbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGVscy5Qcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKFwiUHJvZHVjdFwiLCBQcm9kdWN0U2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsIm1vZGVscyIsIlByb2R1Y3RTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidHJpbSIsInNsdWciLCJ1bmlxdWUiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwibG9uZ0Rlc2NyaXB0aW9uIiwiZGVmYXVsdCIsImltYWdlcyIsImNvbG9yIiwiaW5TdG9jayIsIkJvb2xlYW4iLCJpc0ZlYXR1cmVkIiwidGltZXN0YW1wcyIsIlByb2R1Y3QiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/Product.ts\n");

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