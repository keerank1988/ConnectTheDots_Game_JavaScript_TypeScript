/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./build/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/ClientAPI.js":
/*!****************************!*\
  !*** ./build/ClientAPI.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var messageController_1 = __webpack_require__(/*! ./controllers/messageController */ "./build/controllers/messageController.js");
exports.start = function (app) {
    app.ports.request.subscribe(function (message) {
        var payload = JSON.parse(message);
        messageController_1.handleRequest(payload);
    });
};
//# sourceMappingURL=ClientAPI.js.map

/***/ }),

/***/ "./build/controllers/gameController.js":
/*!*********************************************!*\
  !*** ./build/controllers/gameController.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.logMessage = exports.initGame = void 0;
var stateController_1 = __webpack_require__(/*! ./stateController */ "./build/controllers/stateController.js");
var playerController_1 = __webpack_require__(/*! ./playerController */ "./build/controllers/playerController.js");
var nodeController_1 = __webpack_require__(/*! ./nodeController */ "./build/controllers/nodeController.js");
exports.initGame = function () {
    playerController_1.setActivePlayer(playerController_1.player1);
    stateController_1.setActiveNode(nodeController_1.EMPTY_NODE);
    return {
        msg: "INITIALIZE" /* INITIALIZE */,
        body: {
            newLine: null,
            heading: playerController_1.getActivePlayer().name,
            message: "Awaiting " + playerController_1.getActivePlayer().name + "'s Move"
        }
    };
};
exports.logMessage = function () {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    // tslint:disable-next-line:no-console
    console.log.apply(console, message);
};
//# sourceMappingURL=gameController.js.map

/***/ }),

/***/ "./build/controllers/messageController.js":
/*!************************************************!*\
  !*** ./build/controllers/messageController.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = exports.handleRequest = void 0;
var gameController_1 = __webpack_require__(/*! ./gameController */ "./build/controllers/gameController.js");
var nodeController_1 = __webpack_require__(/*! ./nodeController */ "./build/controllers/nodeController.js");
var playerController_1 = __webpack_require__(/*! ./playerController */ "./build/controllers/playerController.js");
exports.handleRequest = function (payload) {
    var response = null;
    gameController_1.logMessage('REQUEST', payload);
    switch (payload.msg) {
        case "INITIALIZE" /* INITIALIZE */:
            response = gameController_1.initGame();
            break;
        case "NODE_CLICKED" /* NODE_CLICKED */:
            response = nodeController_1.onNodeClicked(payload.body);
            break;
        case "ERROR" /* ERROR */:
            gameController_1.logMessage('ERROR', payload);
            break;
    }
    if (response) {
        exports.sendResponse(response);
    }
    playerController_1.startPlayerTimer();
};
exports.sendResponse = function (payload) {
    gameController_1.logMessage('REQUEST', payload);
    app.ports.response.send(payload);
};
//# sourceMappingURL=messageController.js.map

/***/ }),

/***/ "./build/controllers/nodeController.js":
/*!*********************************************!*\
  !*** ./build/controllers/nodeController.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.onNodeClicked = exports.EMPTY_NODE = void 0;
var playerController_1 = __webpack_require__(/*! ./playerController */ "./build/controllers/playerController.js");
var stateController_1 = __webpack_require__(/*! ./stateController */ "./build/controllers/stateController.js");
exports.EMPTY_NODE = { x: -1, y: -1 };
exports.onNodeClicked = function (node) {
    var response;
    if (stateController_1.getActiveNode() === exports.EMPTY_NODE) {
        var valid = stateController_1.isValidStartNode(node);
        if (valid) {
            response = {
                msg: "VALID_START_NODE" /* VALID_START_NODE */,
                body: {
                    newLine: null,
                    heading: playerController_1.getActivePlayer().name,
                    message: "Select a second node to complete the line."
                }
            };
            stateController_1.addStartNode(node);
        }
        else {
            response = {
                msg: "INVALID_START_NODE" /* INVALID_START_NODE */,
                body: {
                    newLine: null,
                    heading: playerController_1.getActivePlayer().name,
                    message: "Not a valid starting position."
                }
            };
        }
    }
    else {
        var valid = stateController_1.isValidEndNode(node);
        if (valid) {
            var start = stateController_1.getActiveNode();
            stateController_1.addEndNode(node);
            playerController_1.togglePlayer();
            if (stateController_1.isGameOver()) {
                response = {
                    msg: "GAME_OVER" /* GAME_OVER */,
                    body: {
                        newLine: {
                            start: start,
                            end: node
                        },
                        heading: 'Game Over',
                        message: playerController_1.getActivePlayer().name + " Wins!"
                    }
                };
            }
            else {
                response = {
                    msg: "VALID_END_NODE" /* VALID_END_NODE */,
                    body: {
                        newLine: {
                            start: start,
                            end: node
                        },
                        heading: playerController_1.getActivePlayer().name,
                        message: ""
                    }
                };
            }
        }
        else {
            response = {
                msg: "INVALID_END_NODE" /* INVALID_END_NODE */,
                body: {
                    newLine: null,
                    heading: playerController_1.getActivePlayer().name,
                    message: "Invalid move!"
                }
            };
            stateController_1.removeEndNode();
        }
    }
    return response;
};
//# sourceMappingURL=nodeController.js.map

/***/ }),

/***/ "./build/controllers/playerController.js":
/*!***********************************************!*\
  !*** ./build/controllers/playerController.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.startPlayerTimer = exports.togglePlayer = exports.getActivePlayer = exports.setActivePlayer = exports.player1 = exports.player2 = void 0;
var messageController_1 = __webpack_require__(/*! ./messageController */ "./build/controllers/messageController.js");
exports.player2 = { name: "Player 2" /* PLAYER_2 */ };
exports.player1 = { name: "Player 1" /* PLAYER_1 */ };
var PLAYER_TIMEOUT_DURATION = 6000; // 6 seconds
var activePlayer = exports.player1;
var playerTimeout = null;
exports.setActivePlayer = function (player) {
    activePlayer = player;
};
exports.getActivePlayer = function () {
    return activePlayer;
};
exports.togglePlayer = function () {
    exports.setActivePlayer(activePlayer === exports.player2 ? exports.player1 : exports.player2);
};
exports.startPlayerTimer = function () {
    if (playerTimeout) {
        clearTimeout(playerTimeout);
    }
    playerTimeout = window.setTimeout(function () {
        messageController_1.sendResponse({
            msg: "UPDATE_TEXT" /* UPDATE_TEXT */,
            body: {
                newLine: null,
                heading: exports.getActivePlayer().name,
                message: "Are you asleep?"
            }
        });
    }, PLAYER_TIMEOUT_DURATION);
    return playerTimeout;
};
//# sourceMappingURL=playerController.js.map

/***/ }),

/***/ "./build/controllers/stateController.js":
/*!**********************************************!*\
  !*** ./build/controllers/stateController.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGameOver = exports.removeEndNode = exports.addEndNode = exports.addStartNode = exports.isValidEndNode = exports.isValidStartNode = exports.setActiveNode = exports.getActiveNode = void 0;
var nodeController_1 = __webpack_require__(/*! ./nodeController */ "./build/controllers/nodeController.js");
var visitedNodes = [];
var endNodes = [];
var activeNode = nodeController_1.EMPTY_NODE;
exports.getActiveNode = function () { return activeNode; };
exports.setActiveNode = function (node) { return activeNode = node; };
exports.isValidStartNode = function (node) {
    if (!endNodes.length) {
        return true;
    }
    else if (endNodes.find(function (end) { return end.x === node.x && end.y === node.y; })) {
        return true;
    }
    return false;
};
exports.isValidEndNode = function (node, start) {
    if (start === void 0) { start = exports.getActiveNode(); }
    if (isMovePossible(start, node)
        && !isNodeVisited(node)
        && !isLineIntersecting(start, node)) {
        return true;
    }
    return false;
};
exports.addStartNode = function (node) {
    exports.setActiveNode(node);
};
exports.addEndNode = function (node) {
    if (!endNodes.length) {
        visitedNodes.push(activeNode);
        endNodes.push(activeNode);
    }
    else {
        // Remove the old end point
        endNodes = endNodes.filter(function (n) { return !(n.x === activeNode.x && n.y === activeNode.y); });
    }
    // Add the new end point
    endNodes.push(node);
    // Add the intermediate points
    calculatePoints(activeNode, node).forEach(function (point) { return visitedNodes.push(point); });
    // Set the active node to empty
    exports.setActiveNode(nodeController_1.EMPTY_NODE);
};
exports.removeEndNode = function () {
    exports.setActiveNode(nodeController_1.EMPTY_NODE);
};
var isMovePossible = function (from, to) { return (from.x === to.x
    || from.y === to.y
    || Math.abs(from.x - to.x) === Math.abs(from.y - to.y)); };
var isNodeVisited = function (node) { return (!!visitedNodes.find(function (visited) { return visited.x === node.x && visited.y === node.y; })); };
var isLineIntersecting = function (from, to) {
    var points = calculatePoints(from, to);
    if (!points.length) {
        // check same point
        return true;
    }
    else if (points.length === 1) {
        // check level-1 points
        return [{
                x: from.x + ((to.x - from.x) / Math.abs(to.x - from.x)),
                y: from.y
            }, {
                x: from.x,
                y: from.y + ((to.y - from.y) / Math.abs(to.y - from.y))
            }].every(function (node) {
            return visitedNodes.find(function (visited) {
                return visited.x === node.x && visited.y === node.y;
            });
        });
    }
    else {
        // check level-n points
        return !points.every(function (p) {
            return !visitedNodes.find(function (visited) {
                return visited.x === p.x
                    && visited.y === p.y;
            });
        });
    }
};
var calculatePoints = function (from, to) {
    var points = [];
    var xStep = (to.x - from.x) / Math.abs((to.x - from.x) || 1);
    var yStep = (to.y - from.y) / Math.abs((to.y - from.y) || 1);
    var point = __assign({}, from);
    while (point.x !== to.x || point.y !== to.y) {
        if (Math.abs(point.x) !== Math.abs(to.x)) {
            point.x = point.x + 1 * xStep;
        }
        if (Math.abs(point.y) !== Math.abs(to.y)) {
            point.y = point.y + 1 * yStep;
        }
        points.push(__assign({}, point));
    }
    return points;
};
exports.isGameOver = function () {
    return !(getAdjacentNodes(endNodes[0]).some(function (node) { return exports.isValidEndNode(node, endNodes[0]); })
        || getAdjacentNodes(endNodes[1]).some(function (node) { return exports.isValidEndNode(node, endNodes[1]); }));
};
var getAdjacentNodes = function (node) {
    var points = [];
    [-1, 0, 1].forEach(function (dx) {
        [-1, 0, 1].forEach(function (dy) {
            var x = node.x + dx;
            var y = node.y + dy;
            if (x >= 0 && x <= 3 && y >= 0 && y <= 3 && !(x === node.x && y === node.y)) {
                points.push({ x: x, y: y });
            }
        });
    });
    return points;
};
//# sourceMappingURL=stateController.js.map

/***/ }),

/***/ "./build/index.js":
/*!************************!*\
  !*** ./build/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ClientAPI = __importStar(__webpack_require__(/*! ./ClientAPI */ "./build/ClientAPI.js"));
ClientAPI.start(app);
//# sourceMappingURL=index.js.map

/***/ })

/******/ });
//# sourceMappingURL=index.js.map