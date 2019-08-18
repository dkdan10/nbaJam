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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(/*! ./js/game.js */ "./client/src/js/game.js");

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('nba-jam-game');
    new _game2.default(canvas);
});

/***/ }),

/***/ "./client/src/js/ball.js":
/*!*******************************!*\
  !*** ./client/src/js/ball.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _circle = __webpack_require__(/*! ./utils/circle */ "./client/src/js/utils/circle.js");

var _circle2 = _interopRequireDefault(_circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CONSTANTS = {
    RADIUS: 15,
    GRAVITY: 0.5,
    BOUNCE_RETENTION: 0.6,
    DRIBBLE_SPEED: 3
};

var Ball = function (_Circle) {
    _inherits(Ball, _Circle);

    function Ball(dimensions, court, leftHoop, rightHoop, gameId) {
        _classCallCheck(this, Ball);

        var _this = _possibleConstructorReturn(this, (Ball.__proto__ || Object.getPrototypeOf(Ball)).call(this, CONSTANTS.RADIUS));

        _this.court = court;
        _this.dimensions = dimensions;
        _this.leftHoop = leftHoop;
        _this.rightHoop = rightHoop;
        _this.leftHoop.ball = _this;
        _this.rightHoop.ball = _this;

        _this.gameId = gameId;

        _this.position = {
            x: _this.court.width / 2,
            y: _this.dimensions.height / 2
        };
        _this.velocity = {
            x: 0,
            y: 0
        };
        _this.color = "hotpink";
        _this.possession = null;
        _this.noTouch = {};
        _this.power = 0;
        return _this;
    }

    _createClass(Ball, [{
        key: "animate",
        value: function animate(ctx) {
            this.move();
            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    }, {
        key: "claimPossession",
        value: function claimPossession(player) {
            if (!this.noTouch[player.color]) {
                this.possession = player;
                socket.emit("changeOfPossesion", {
                    gameId: this.gameId,
                    fromSocket: socket.id
                });
            }
        }
    }, {
        key: "shoot",
        value: function shoot() {
            var _this2 = this;

            // BETA SHOOTING

            // this.power += 1
            // const shootingPlayer = this.possession
            // this.position.x = shootingPlayer.facingRight ?
            //     (shootingPlayer.position.x + shootingPlayer.width + this.radius) :
            //     (shootingPlayer.position.x - this.radius)
            // this.position.y = shootingPlayer.position.y

            // if (this.shootingInterval && this.power < 60) {
            //     clearTimeout(this.shootingInterval)
            // }
            // if (this.power < 60) {
            //     this.shootingInterval = setTimeout(() => {


            //         this.velocity.x = shootingPlayer.facingRight ? 6 : -6
            //         this.velocity.y = this.power
            //         this.possession = null

            //         this.noTouch[shootingPlayer.color] = true        
            //         setTimeout(() => {
            //             this.noTouch[shootingPlayer.color] = false
            //         }, 500);
            //         this.power = 0
            //     }, 20);
            // }

            // AIMBOT SHOOTING

            // const shootingPlayer = this.possession
            // this.position.x = shootingPlayer.facingRight ?
            //     (shootingPlayer.position.x + shootingPlayer.width + this.radius) :
            //     (shootingPlayer.position.x - this.radius)
            // this.position.y = shootingPlayer.position.y

            // const scorePosition = shootingPlayer.facingRight ? (
            //     {
            //         x: this.rightHoop.scoreHitbox.position.x + (this.rightHoop.scoreHitbox.width / 2),
            //         y: this.rightHoop.scoreHitbox.position.y
            //     }
            // ) : (
            //     {
            //         x: this.leftHoop.scoreHitbox.position.x + (this.rightHoop.scoreHitbox.width / 2),
            //         y: this.leftHoop.scoreHitbox.position.y
            //     }

            // )

            // const numberOfFrames = 50

            // const velocityX = (scorePosition.x - this.position.x) / numberOfFrames
            // const velocityY = ( (-scorePosition.y + this.position.y) - 0.5 * -CONSTANTS.GRAVITY * (numberOfFrames * numberOfFrames) ) / numberOfFrames

            // this.velocity = {
            //     x: velocityX,
            //     y: velocityY
            // }

            // this.noTouch[shootingPlayer.color] = true        
            // setTimeout(() => {
            //     this.noTouch[shootingPlayer.color] = false
            // }, 500);

            // this.possession = null

            // POWERBASED AIMED SHOOTING


            this.power += 1;

            var shootingPlayer = this.possession;
            this.position.x = shootingPlayer.facingRight ? shootingPlayer.position.x + shootingPlayer.width + this.radius : shootingPlayer.position.x - this.radius;
            this.position.y = shootingPlayer.position.y;

            if (this.shootingTimeout && this.power < 60) {
                clearTimeout(this.shootingTimeout);
            }
            if (this.power < 60) {
                this.shootingTimeout = setTimeout(function () {
                    _this2.releaseBall();
                }, 20);
            }
        }
    }, {
        key: "releaseBall",
        value: function releaseBall() {
            var _this3 = this;

            var shootingPlayer = this.possession;

            var scorePosition = shootingPlayer.facingRight ? {
                x: this.rightHoop.scoreHitbox.position.x + this.rightHoop.scoreHitbox.width / 2,
                y: this.rightHoop.scoreHitbox.position.y
            } : {
                x: this.leftHoop.scoreHitbox.position.x + this.rightHoop.scoreHitbox.width / 2,
                y: this.leftHoop.scoreHitbox.position.y
            };

            // LAYUP
            if (150 > Math.hypot(this.position.x - scorePosition.x, this.position.y - scorePosition.y)) {
                var numberOfFrames = 30;
                var velocityX = (scorePosition.x - this.position.x) / numberOfFrames;
                var velocityY = (-scorePosition.y + this.position.y - 0.5 * -CONSTANTS.GRAVITY * (numberOfFrames * numberOfFrames)) / numberOfFrames;

                var diff = (this.power - 30) / 20;
                var adjustedX = shootingPlayer.facingRight ? velocityX + diff : velocityX - diff;
                this.velocity = {
                    x: adjustedX,
                    y: velocityY
                };
            } else {
                // SHOT
                var _numberOfFrames = 50;

                var _velocityX = (scorePosition.x - this.position.x) / _numberOfFrames;
                var _velocityY = (-scorePosition.y + this.position.y - 0.5 * -CONSTANTS.GRAVITY * (_numberOfFrames * _numberOfFrames)) / _numberOfFrames;

                var _diff = (this.power - 30) / 6;
                var _adjustedX = shootingPlayer.facingRight ? _velocityX + _diff : _velocityX - _diff;
                this.velocity = {
                    x: _adjustedX,
                    y: _velocityY
                };
            }

            this.noTouch[shootingPlayer.color] = true;
            setTimeout(function () {
                _this3.noTouch[shootingPlayer.color] = false;
            }, 500);

            this.power = 0;
            this.removePossession();
        }
    }, {
        key: "removePossession",
        value: function removePossession() {
            this.possession = null;
            socket.emit("removeBallPossession", {
                gameId: this.gameId,
                fromSocket: socket.id,
                velocity: this.velocity,
                position: this.position
            });
        }
    }, {
        key: "move",
        value: function move() {

            if (!this.possession) {
                this.fall();
            } else {
                this.moveWithPlayerPossession();
            }

            this.checkBounds();
        }
    }, {
        key: "moveWithPlayerPossession",
        value: function moveWithPlayerPossession() {
            this.position.x = this.possession.facingRight ? this.possession.position.x + this.possession.width : this.possession.position.x;

            if (this.possession.jumping) {
                // HOLD BALL
                this.position.y = this.possession.position.y + this.possession.height / 2;
            } else {
                // DRIBBLING
                if (this.position.y < this.possession.position.y + this.possession.height / 2) {
                    this.velocity.y = -CONSTANTS.DRIBBLE_SPEED;
                } else if (this.position.y > this.possession.position.y + this.possession.height - this.radius) {
                    this.velocity.y = CONSTANTS.DRIBBLE_SPEED;
                }
                this.position.y -= this.velocity.y;
            }
            // socket.emit("updateBallWithPos", {
            //     gameId: this.gameId,
            //     fromSocket: socket.id,
            //     velocity: this.velocity,
            //     position: this.position,
            //     otherPlayerFacing: this.possession.facingRight
            // })
        }
    }, {
        key: "fall",
        value: function fall() {
            this.position.y -= this.velocity.y;
            this.position.x += this.velocity.x;
            // GRAVITY
            // if the pos is greater than the floor
            if (this.position.y + this.radius < this.court.position.y) {
                this.velocity.y -= CONSTANTS.GRAVITY;
                // else set the reverse velocity
            } else if (this.velocity.y < 0) {
                this.velocity.y = -this.velocity.y * CONSTANTS.BOUNCE_RETENTION;
            }
        }
    }, {
        key: "checkBounds",
        value: function checkBounds() {
            if (this.position.x > this.court.width - this.radius) {
                this.position.x = this.court.width - this.radius;
                this.velocity.x = -this.velocity.x;
            } else if (this.position.x < 0) {
                this.position.x = 0;
                this.velocity.x = -this.velocity.x;
            }
        }
    }]);

    return Ball;
}(_circle2.default);

exports.default = Ball;

/***/ }),

/***/ "./client/src/js/court.js":
/*!********************************!*\
  !*** ./client/src/js/court.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rect = __webpack_require__(/*! ./utils/rect */ "./client/src/js/utils/rect.js");

var _rect2 = _interopRequireDefault(_rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CONSTANTS = {
    COURT_FLOOR: 0.85,
    COURT_WIDTH: 5
};

var Court = function (_Rect) {
    _inherits(Court, _Rect);

    function Court(dimensions) {
        _classCallCheck(this, Court);

        var _this = _possibleConstructorReturn(this, (Court.__proto__ || Object.getPrototypeOf(Court)).call(this, { width: dimensions.width, height: CONSTANTS.COURT_WIDTH }));

        _this.position = {
            x: 0,
            y: dimensions.height * CONSTANTS.COURT_FLOOR
        };
        _this.color = "green";
        return _this;
    }

    _createClass(Court, [{
        key: "animate",
        value: function animate(ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }]);

    return Court;
}(_rect2.default);

exports.default = Court;

/***/ }),

/***/ "./client/src/js/game.js":
/*!*******************************!*\
  !*** ./client/src/js/game.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(/*! ./player */ "./client/src/js/player.js");

var _player2 = _interopRequireDefault(_player);

var _court = __webpack_require__(/*! ./court */ "./client/src/js/court.js");

var _court2 = _interopRequireDefault(_court);

var _hoop = __webpack_require__(/*! ./hoop */ "./client/src/js/hoop.js");

var _hoop2 = _interopRequireDefault(_hoop);

var _ball = __webpack_require__(/*! ./ball */ "./client/src/js/ball.js");

var _ball2 = _interopRequireDefault(_ball);

var _scoreboard = __webpack_require__(/*! ./scoreboard */ "./client/src/js/scoreboard.js");

var _scoreboard2 = _interopRequireDefault(_scoreboard);

var _player3 = __webpack_require__(/*! ./player2 */ "./client/src/js/player2.js");

var _player4 = _interopRequireDefault(_player3);

var _main_menu = __webpack_require__(/*! ./menu_screens/main_menu */ "./client/src/js/menu_screens/main_menu.js");

var _main_menu2 = _interopRequireDefault(_main_menu);

var _online_player = __webpack_require__(/*! ./online_player */ "./client/src/js/online_player.js");

var _online_player2 = _interopRequireDefault(_online_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NBAJamGame = function () {
    function NBAJamGame(canvas) {
        _classCallCheck(this, NBAJamGame);

        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.mainMenu = new _main_menu2.default(this.dimensions, this.startGame.bind(this), this.startOnlineGame.bind(this));
        this.playingGame = false;
        this.renderMenu();
    }

    _createClass(NBAJamGame, [{
        key: 'showMenu',
        value: function showMenu() {
            this.mainMenu.setupKeyHandlers();
            this.renderMenu(this.ctx);
        }
    }, {
        key: 'renderMenu',
        value: function renderMenu() {
            this.mainMenu.render(this.ctx);
            if (!this.playingGame) requestAnimationFrame(this.renderMenu.bind(this));
        }
    }, {
        key: 'startGame',
        value: function startGame(leftSprite, rightSprite) {
            this.playingGame = true;
            this.restart(leftSprite, rightSprite);
        }
    }, {
        key: 'startOnlineGame',
        value: function startOnlineGame(leftSprite, rightSprite, mySide, gameId) {
            this.playingGame = true;
            this.onlineGameId = gameId;
            this.runOnlineGame(leftSprite, rightSprite, mySide);
        }
    }, {
        key: 'restart',
        value: function restart(leftSprite, rightSprite) {
            // START ANIMATION SYCLE
            this.court = new _court2.default(this.dimensions);
            this.leftHoop = new _hoop2.default(this.dimensions, "LEFT");
            this.rightHoop = new _hoop2.default(this.dimensions, "RIGHT");
            this.ball = new _ball2.default(this.dimensions, this.court, this.leftHoop, this.rightHoop);

            this.scoreboard = new _scoreboard2.default(this.dimensions, this.leftHoop, this.rightHoop);

            this.player = new _player2.default(this.court, this.ball, rightSprite);
            this.player2 = new _player4.default(this.court, this.ball, leftSprite);

            this.animate();
        }
    }, {
        key: 'animate',
        value: function animate() {
            // CREATES BACKGROUND
            this.ctx.fillStyle = "orange";
            this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

            // ANIMATE OBJECTS
            this.player.animate(this.ctx);
            this.player2.animate(this.ctx);
            this.ball.animate(this.ctx);
            this.leftHoop.animate(this.ctx);
            this.rightHoop.animate(this.ctx);

            this.scoreboard.animate(this.ctx);
            this.court.animate(this.ctx);

            if (this.gameOver()) {
                this.displayWinner();
            }
            // REQUEST NEXT FRAME
            if (this.playingGame) requestAnimationFrame(this.animate.bind(this));
        }
    }, {
        key: 'runOnlineGame',
        value: function runOnlineGame(leftSprite, rightSprite, mySide) {
            var _this = this;

            this.court = new _court2.default(this.dimensions);
            this.leftHoop = new _hoop2.default(this.dimensions, "LEFT");
            this.rightHoop = new _hoop2.default(this.dimensions, "RIGHT");
            this.ball = new _ball2.default(this.dimensions, this.court, this.leftHoop, this.rightHoop, this.onlineGameId);

            this.scoreboard = new _scoreboard2.default(this.dimensions, this.leftHoop, this.rightHoop);

            if (mySide === "LEFT") {
                this.myPlayer = new _online_player2.default(this.court, this.ball, leftSprite, "LEFT", true);
                this.otherPlayer = new _online_player2.default(this.court, this.ball, rightSprite, "RIGHT", false);
            } else {
                this.otherPlayer = new _online_player2.default(this.court, this.ball, leftSprite, "LEFT", false);
                this.myPlayer = new _online_player2.default(this.court, this.ball, rightSprite, "RIGHT", true);
            }

            socket.on("updateOtherPos", function (data) {
                _this.otherPlayer.position = {
                    x: data["x"],
                    y: data["y"]
                };
                _this.otherPlayer.facingRight = data["otherPlayerFacing"];
                _this.otherPlayer.jumping = data["otherPlayerJumping"];
            });
            socket.on("updateBallPossesion", function (data) {
                _this.ball.possession = _this.otherPlayer;
                socket.emit("registeredPossesionChange", {
                    gameId: _this.onlineGameId
                });
            });
            socket.on("updateNoBallPossesion", function (data) {
                _this.ball.possession = null;
                _this.ball.position = data["position"];
                _this.ball.velocity = data["velocity"];
            });
            // socket.on("updateBallPos", data => {
            //     this.ball.position = data["position"]
            //     this.ball.velocity = data["velocity"]
            //     this.otherPlayer.facingRight = data["otherPlayerFacing"]
            // })
            socket.on("endGameFromDisconnect", function () {
                _this.playingGame = false;
                _this.onlineGameId = null;
                setTimeout(function () {
                    _this.showMenu();
                }, 1000);
            });

            this.runOnline();
        }
    }, {
        key: 'runOnline',
        value: function runOnline() {
            // CREATES BACKGROUND
            this.ctx.fillStyle = "orange";
            this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

            // ANIMATE OBJECTS
            this.otherPlayer.animate(this.ctx);
            this.myPlayer.animate(this.ctx);

            this.ball.animate(this.ctx);

            this.leftHoop.animate(this.ctx);
            this.rightHoop.animate(this.ctx);

            this.scoreboard.animate(this.ctx);
            this.court.animate(this.ctx);

            if (this.gameOver()) {
                this.displayWinner();
            }

            socket.emit("updateMyPos", {
                gameId: this.onlineGameId,
                fromSocket: socket.id,
                x: this.myPlayer.position.x,
                y: this.myPlayer.position.y,
                otherPlayerFacing: this.myPlayer.facingRight,
                otherPlayerJumping: this.myPlayer.jumping
            });
            socket.emit("updateBallPos", {
                gameId: this.onlineGameId,
                fromSocket: socket.id,
                x: this.ball.position.x,
                y: this.ball.position.y
            });
            // REQUEST NEXT FRAME
            if (this.playingGame) requestAnimationFrame(this.runOnline.bind(this));
        }
    }, {
        key: 'gameOver',
        value: function gameOver() {
            return this.scoreboard.timeLeft === 0;
        }
    }, {
        key: 'displayWinner',
        value: function displayWinner() {
            var _this2 = this;

            var text = void 0;
            if (this.rightHoop.score > this.leftHoop.score) {
                text = "Player 1 wins";
            } else if (this.leftHoop.score > this.rightHoop.score) {
                text = "Player 2 wins";
            } else {
                text = "Tie Game";
            }
            var loc = { x: this.dimensions.width / 2, y: this.dimensions.height / 2 };
            this.ctx.font = "bold 40pt serif";
            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.fillText('' + text, loc.x, loc.y);
            this.ctx.strokeStyle = "black";
            this.ctx.lineWidth = 2;
            this.ctx.strokeText('' + text, loc.x, loc.y);

            this.playingGame = false;
            this.onlineGameId = null;
            setTimeout(function () {
                _this2.showMenu();
            }, 2000);
        }
    }]);

    return NBAJamGame;
}();

exports.default = NBAJamGame;

/***/ }),

/***/ "./client/src/js/hoop.js":
/*!*******************************!*\
  !*** ./client/src/js/hoop.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rect = __webpack_require__(/*! ./utils/rect */ "./client/src/js/utils/rect.js");

var _rect2 = _interopRequireDefault(_rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CONSTANTS = {
    HOOP_Y_MULTIPLIER: 0.3,
    HOOP_HEIGHT: 40,
    HOOP_WIDTH: 50,
    HOOP_X_DISTANCE: 50,
    BACKBOARD_WIDTH: 15,
    BACKBOARD_HEIGHT: 50
};

var Hoop = function (_Rect) {
    _inherits(Hoop, _Rect);

    function Hoop(dimensions, hoopSide, ball) {
        _classCallCheck(this, Hoop);

        var _this = _possibleConstructorReturn(this, (Hoop.__proto__ || Object.getPrototypeOf(Hoop)).call(this, { width: CONSTANTS.HOOP_WIDTH, height: CONSTANTS.HOOP_HEIGHT }));

        _this.ball = ball;
        _this.dimensions = dimensions;
        var x = hoopSide === "LEFT" ? 0 + CONSTANTS.HOOP_X_DISTANCE : dimensions.width - CONSTANTS.HOOP_X_DISTANCE - _this.width;
        _this.position = {
            x: x,
            y: dimensions.height * CONSTANTS.HOOP_Y_MULTIPLIER
        };
        _this.backboard = new Backboard(_this, hoopSide);
        _this.scoreHitbox = new ScoreHitbox(_this, hoopSide);
        _this.color = "purple";
        _this.score = 0;
        _this.justScored = false;
        return _this;
    }

    _createClass(Hoop, [{
        key: "animate",
        value: function animate(ctx) {
            var _this2 = this;

            this.checkBallCollision();
            this.backboard.animate(ctx);
            ctx.fillStyle = this.color;
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
            this.scoreHitbox.animate(ctx);
            if (this.ball.isOverlappingRect(this.scoreHitbox)) {
                if (!this.justScored) this.score += 2;
                this.justScored = true;
                this.color = "green";
                setTimeout(function () {
                    _this2.justScored = false;
                    _this2.color = "purple";
                }, 1000);
            }
        }
    }, {
        key: "checkBallCollision",
        value: function checkBallCollision() {
            if (this.ball.isOverlappingRect(this) || this.ball.isOverlappingRect(this.backboard)) {
                if (this.ball.position.y - this.ball.radius > this.position.y) {
                    if (this.ball.velocity.y > 0) this.ball.velocity.y = -this.ball.velocity.y;
                } else {
                    if (this.ball.position.y + this.ball.radius < this.backboard.position.y && this.ball.velocity.y < 0) {
                        this.ball.velocity.y = -this.ball.velocity.y;
                    }
                    this.ball.velocity.x = -this.ball.velocity.x;
                }
            }
        }
    }]);

    return Hoop;
}(_rect2.default);

exports.default = Hoop;

var ScoreHitbox = function (_Rect2) {
    _inherits(ScoreHitbox, _Rect2);

    function ScoreHitbox(hoop, hoopSide) {
        _classCallCheck(this, ScoreHitbox);

        var _this3 = _possibleConstructorReturn(this, (ScoreHitbox.__proto__ || Object.getPrototypeOf(ScoreHitbox)).call(this, { width: CONSTANTS.HOOP_WIDTH - 30, height: CONSTANTS.HOOP_HEIGHT * 0.05 }));

        var x = hoopSide === "LEFT" ? hoop.position.x + 15 : hoop.position.x + hoop.width - _this3.width - 15;
        _this3.position = {
            x: x,
            y: hoop.position.y
        };
        _this3.color = "white";
        return _this3;
    }

    _createClass(ScoreHitbox, [{
        key: "animate",
        value: function animate(ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }]);

    return ScoreHitbox;
}(_rect2.default);

var Backboard = function (_Rect3) {
    _inherits(Backboard, _Rect3);

    function Backboard(hoop, hoopSide) {
        _classCallCheck(this, Backboard);

        var _this4 = _possibleConstructorReturn(this, (Backboard.__proto__ || Object.getPrototypeOf(Backboard)).call(this, { width: CONSTANTS.BACKBOARD_WIDTH, height: CONSTANTS.BACKBOARD_HEIGHT }));

        var x = hoopSide === "LEFT" ? hoop.position.x : hoop.position.x + hoop.width - _this4.width;
        _this4.position = {
            x: x,
            y: hoop.position.y - _this4.height
        };
        _this4.color = "aqua";
        return _this4;
    }

    _createClass(Backboard, [{
        key: "animate",
        value: function animate(ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }]);

    return Backboard;
}(_rect2.default);

/***/ }),

/***/ "./client/src/js/menu_screens/character_select.js":
/*!********************************************************!*\
  !*** ./client/src/js/menu_screens/character_select.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keymaster = __webpack_require__(/*! ../utils/keymaster */ "./client/src/js/utils/keymaster.js");

var _keymaster2 = _interopRequireDefault(_keymaster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CharacterSelect = function () {
    function CharacterSelect(dimensions, selectedCharacters) {
        var _this = this;

        _classCallCheck(this, CharacterSelect);

        this.dimensions = dimensions;
        this.selectedCharacters = selectedCharacters;
        this.leftSelected = 0;
        this.rightSelected = 1;
        this.characters = [{ name: "Rodman", src: "src/assets/rodmanSmall.png" }, { name: "Drake", src: "src/assets/drakeSmall.png" }, { name: "Lebron", src: "src/assets/lebronSmall.png" }, { name: "Peach", src: "src/assets/peachSmall.png" }];

        this.leftChar = new Image();
        this.rightChar = new Image();
        this.leftChar.src = this.characters[this.leftSelected].src;
        this.rightChar.src = this.characters[this.rightSelected].src;

        this.leftReady = false;
        this.rightReady = false;

        socket.on("matchFound", function (data) {
            _this.leftPlayerId = data["leftPlayerId"];
            _this.rightPlayerId = data["rightPlayerId"];
            if (socket.id === _this.leftPlayerId) {
                _this.isPlayingLeft = true;
            } else {
                _this.isPlayingRight = true;
            }
            _this.leftSelected = 0;
            _this.rightSelected = 1;
            _this.gameId = data["gameId"];
        });

        socket.on("updatedSelectedChars", function (data) {
            _this.leftSelected = data["leftSelected"];
            _this.rightSelected = data["rightSelected"];
        });

        socket.on("updatedLeftReady", function () {
            _this.leftReady = true;
        });
        socket.on("updatedRightReady", function () {
            _this.rightReady = true;
        });

        socket.on("startGame", function () {
            _keymaster2.default.unbind('down');
            _keymaster2.default.unbind('up');
            _keymaster2.default.unbind('w');
            _keymaster2.default.unbind('s');
            _keymaster2.default.unbind('enter');
            _this.selectedCharacters(_this.characters[_this.leftSelected].src, _this.characters[_this.rightSelected].src, _this.gameId);
            _this.leftPlayerId = null;
            _this.rightPlayerId = null;
            _this.isPlayingLeft = false;
            _this.isPlayingRight = false;
            _this.leftSelected = 0;
            _this.rightSelected = 1;
            _this.leftReady = false;
            _this.rightReady = false;
            _this.gameId = null;
        });
    }

    _createClass(CharacterSelect, [{
        key: "render",
        value: function render(ctx) {

            this.leftChar.src = this.characters[this.leftSelected].src;
            this.rightChar.src = this.characters[this.rightSelected].src;

            ctx.fillStyle = "purple";
            ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

            // LEFT SIDE
            var leftSideChar = this.characters[this.leftSelected];
            var loc = { x: this.dimensions.width / 4, y: this.dimensions.height / 2 };
            ctx.font = "bold 40pt serif";
            ctx.textAlign = "center";
            ctx.fillStyle = "white";

            if (this.onlineMode) ctx.fillText("Online Mode", loc.x, loc.y - 100);
            ctx.font = "bold 12pt serif";
            if (this.leftReady) ctx.fillText("Ready", loc.x, loc.y - 70);
            if (this.leftPlayerId && this.rightPlayerId) {
                ctx.fillText("" + this.leftPlayerId, loc.x, loc.y - 50);
            } else if (this.onlineMode) {
                ctx.fillText("" + socket.id, loc.x, loc.y - 50);
            }

            ctx.font = "bold 40pt serif";
            ctx.fillText("" + leftSideChar.name, loc.x, loc.y);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.strokeText("" + leftSideChar.name, loc.x, loc.y);
            ctx.drawImage(this.leftChar, loc.x - this.leftChar.width / 2, loc.y);

            // RIGHT SIDE
            var rightSideChar = this.characters[this.rightSelected];
            loc = { x: this.dimensions.width * 3 / 4, y: this.dimensions.height / 2 };
            ctx.font = "bold 40pt serif";
            ctx.textAlign = "center";
            ctx.fillStyle = "white";

            if (this.onlineMode) ctx.fillText("Online Mode", loc.x, loc.y - 100);
            ctx.font = "bold 12pt serif";
            if (this.rightReady) ctx.fillText("Ready", loc.x, loc.y - 70);
            if (this.leftPlayerId && this.rightPlayerId) {
                ctx.fillText("" + this.rightPlayerId, loc.x, loc.y - 50);
            } else if (this.onlineMode) {
                ctx.fillText("Waiting for Player", loc.x, loc.y - 50);
            }
            ctx.font = "bold 40pt serif";

            ctx.fillText("" + rightSideChar.name, loc.x, loc.y);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.strokeText("" + rightSideChar.name, loc.x, loc.y);
            ctx.drawImage(this.rightChar, loc.x - this.rightChar.width / 2, loc.y);
        }
    }, {
        key: "setupKeyHandlers",
        value: function setupKeyHandlers() {
            var _this2 = this;

            setTimeout(function () {
                if (!_this2.onlineMode) {
                    (0, _keymaster2.default)('down', function () {
                        _this2.rightSelected = (_this2.rightSelected + 1) % _this2.characters.length;
                    });
                    (0, _keymaster2.default)('up', function () {
                        _this2.rightSelected = _this2.rightSelected - 1;
                        if (_this2.rightSelected === -1) _this2.rightSelected = _this2.characters.length - 1;
                    });
                    (0, _keymaster2.default)('w', function () {
                        _this2.leftSelected = (_this2.leftSelected + 1) % _this2.characters.length;
                    });
                    (0, _keymaster2.default)('s', function () {
                        _this2.leftSelected = (_this2.leftSelected - 1) % _this2.characters.length;
                        if (_this2.leftSelected === -1) _this2.leftSelected = _this2.characters.length - 1;
                    });
                    (0, _keymaster2.default)('enter', function () {
                        _keymaster2.default.unbind('down');
                        _keymaster2.default.unbind('up');
                        _keymaster2.default.unbind('w');
                        _keymaster2.default.unbind('s');
                        _keymaster2.default.unbind('enter');
                        _this2.selectedCharacters(_this2.characters[_this2.leftSelected].src, _this2.characters[_this2.rightSelected].src);
                    });
                } else {

                    (0, _keymaster2.default)('up', function () {
                        if (_this2.gameId) {
                            if (_this2.isPlayingLeft) {
                                _this2.leftSelected = (_this2.leftSelected + 1) % _this2.characters.length;
                                socket.emit('charChanged', {
                                    rightSelected: _this2.rightSelected,
                                    leftSelected: _this2.leftSelected,
                                    gameId: _this2.gameId
                                });
                            } else if (_this2.isPlayingRight) {
                                _this2.rightSelected = _this2.rightSelected - 1;
                                if (_this2.rightSelected === -1) _this2.rightSelected = _this2.characters.length - 1;
                                socket.emit('charChanged', {
                                    rightSelected: _this2.rightSelected,
                                    leftSelected: _this2.leftSelected,
                                    gameId: _this2.gameId
                                });
                            }
                        }
                    });
                    (0, _keymaster2.default)('down', function () {
                        if (_this2.gameId) {
                            if (_this2.isPlayingLeft) {
                                _this2.leftSelected = (_this2.leftSelected - 1) % _this2.characters.length;
                                if (_this2.leftSelected === -1) _this2.leftSelected = _this2.characters.length - 1;
                                socket.emit('charChanged', {
                                    rightSelected: _this2.rightSelected,
                                    leftSelected: _this2.leftSelected,
                                    gameId: _this2.gameId
                                });
                            } else if (_this2.isPlayingRight) {
                                _this2.rightSelected = (_this2.rightSelected + 1) % _this2.characters.length;
                                socket.emit('charChanged', {
                                    rightSelected: _this2.rightSelected,
                                    leftSelected: _this2.leftSelected,
                                    gameId: _this2.gameId
                                });
                            }
                        }
                    });
                    (0, _keymaster2.default)('enter', function () {
                        if (_this2.gameId) {
                            if (_this2.isPlayingLeft) {
                                socket.emit('leftReady', {
                                    gameId: _this2.gameId
                                });
                            } else if (_this2.isPlayingRight) {
                                socket.emit('rightReady', {
                                    gameId: _this2.gameId
                                });
                            }
                        }
                    });
                }
            }, 100);
        }
    }]);

    return CharacterSelect;
}();

exports.default = CharacterSelect;

/***/ }),

/***/ "./client/src/js/menu_screens/main_menu.js":
/*!*************************************************!*\
  !*** ./client/src/js/menu_screens/main_menu.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keymaster = __webpack_require__(/*! ../utils/keymaster */ "./client/src/js/utils/keymaster.js");

var _keymaster2 = _interopRequireDefault(_keymaster);

var _character_select = __webpack_require__(/*! ./character_select */ "./client/src/js/menu_screens/character_select.js");

var _character_select2 = _interopRequireDefault(_character_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainMenu = function () {
    function MainMenu(dimensions, startGame, startOnlineGame) {
        _classCallCheck(this, MainMenu);

        this.dimensions = dimensions;
        this.startGame = startGame;
        this.startOnlineGame = startOnlineGame;
        this.selectedOption = 0;
        this.options = ["Start Game", "Online"];
        this.characterSelect = new _character_select2.default(this.dimensions, this.selectedCharacters.bind(this));
        this.selectingCharacters = false;
        this.setupKeyHandlers();
    }

    _createClass(MainMenu, [{
        key: 'selectedCharacters',
        value: function selectedCharacters(leftSrc, rightSrc, gameId) {
            this.selectingCharacters = false;
            if (this.characterSelect.onlineMode) {
                this.characterSelect.onlineMode = false;
                var mySide = this.characterSelect.isPlayingLeft ? "LEFT" : "RIGHT";
                this.startOnlineGame(leftSrc, rightSrc, mySide, gameId);
            } else {
                this.startGame(leftSrc, rightSrc);
            }
        }
    }, {
        key: 'render',
        value: function render(ctx) {
            var _this = this;

            ctx.fillStyle = "purple";
            ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

            if (!this.selectingCharacters) {
                this.options.forEach(function (option, i) {
                    var loc = { x: _this.dimensions.width / 2, y: _this.dimensions.height / (_this.options.length + 1 - i) };
                    ctx.font = "bold 40pt serif";
                    ctx.textAlign = "center";
                    ctx.fillStyle = "white";

                    var width = ctx.measureText('' + option).width;

                    if (_this.selectedOption === i) ctx.fillRect(loc.x - width / 2 - 5, loc.y - 40, width + 10, 50);
                    ctx.fillText('' + option, loc.x, loc.y);
                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 2;
                    ctx.strokeText('' + option, loc.x, loc.y);
                });
            } else if (this.selectingCharacters) {
                this.characterSelect.render(ctx);
            }
        }
    }, {
        key: 'setupKeyHandlers',
        value: function setupKeyHandlers() {
            var _this2 = this;

            (0, _keymaster2.default)('down', function () {
                _this2.selectedOption = (_this2.selectedOption + 1) % _this2.options.length;
            });
            (0, _keymaster2.default)('up', function () {
                _this2.selectedOption = Math.abs((_this2.selectedOption - 1) % _this2.options.length);
            });
            (0, _keymaster2.default)('enter', function () {
                if (_this2.selectedOption === 0) {
                    _keymaster2.default.unbind('down');
                    _keymaster2.default.unbind('up');
                    _keymaster2.default.unbind('enter');
                    _this2.selectingCharacters = true;
                    _this2.characterSelect.onlineMode = false;
                    _this2.characterSelect.setupKeyHandlers();
                } else if (_this2.selectedOption === 1) {
                    _keymaster2.default.unbind('down');
                    _keymaster2.default.unbind('up');
                    _keymaster2.default.unbind('enter');
                    _this2.selectingCharacters = true;
                    _this2.characterSelect.onlineMode = true;
                    socket.emit('playerAddedToQueue', socket.id);
                    _this2.characterSelect.setupKeyHandlers();
                }
            });
        }
    }]);

    return MainMenu;
}();

exports.default = MainMenu;

/***/ }),

/***/ "./client/src/js/online_player.js":
/*!****************************************!*\
  !*** ./client/src/js/online_player.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(/*! ./player */ "./client/src/js/player.js");

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CONSTANTS = {
    GRAVITY: 0.5,
    PLAYER_WIDTH: 40,
    PLAYER_HEIGHT: 70,
    MOVESPEED: 5,
    // WITH_BALL_MOVESPEED: 3.5,
    JUMP_HEIGHT: 14
    // ON_FIRE_JUMP_HEIGHT: 16
};

var OnlinePlayer = function (_Player) {
    _inherits(OnlinePlayer, _Player);

    function OnlinePlayer(court, ball, spriteSrc, startSide, active) {
        _classCallCheck(this, OnlinePlayer);

        var _this = _possibleConstructorReturn(this, (OnlinePlayer.__proto__ || Object.getPrototypeOf(OnlinePlayer)).call(this, court, ball, spriteSrc));

        _this.position = startSide === "LEFT" ? {
            x: 0,
            y: _this.court.position.y - _this.height
        } : {
            x: _this.court.width - _this.width,
            y: _this.court.position.y - _this.height
        };

        if (!_this.active) _this.color = "black";
        _this.active = active;
        return _this;
    }

    _createClass(OnlinePlayer, [{
        key: "animate",
        value: function animate(ctx) {
            if (this.active) {
                this.move();
            }

            ctx.drawImage(this.sprite, this.position.x - 5, this.position.y - this.sprite.height / 3);
        }
    }, {
        key: "move",
        value: function move() {
            if (key.isPressed('right')) {
                this.position.x += CONSTANTS.MOVESPEED;
                this.facingRight = true;
            }
            if (key.isPressed('left')) {
                this.position.x -= CONSTANTS.MOVESPEED;
                this.facingRight = false;
            }

            // JUMPING
            if (key.isPressed('up') && !this.jumping) {
                this.velocity.y = CONSTANTS.JUMP_HEIGHT;
                this.jumping = true;
            }

            if (key.isPressed('space')) {
                this.preformAction();
            }

            this.checkBall();

            this.handleGravity();

            this.checkBounds();
        }
    }]);

    return OnlinePlayer;
}(_player2.default);

exports.default = OnlinePlayer;

/***/ }),

/***/ "./client/src/js/player.js":
/*!*********************************!*\
  !*** ./client/src/js/player.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rect = __webpack_require__(/*! ./utils/rect */ "./client/src/js/utils/rect.js");

var _rect2 = _interopRequireDefault(_rect);

var _keymaster = __webpack_require__(/*! ./utils/keymaster */ "./client/src/js/utils/keymaster.js");

var _keymaster2 = _interopRequireDefault(_keymaster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CONSTANTS = {
    GRAVITY: 0.5,
    PLAYER_WIDTH: 40,
    PLAYER_HEIGHT: 70,
    MOVESPEED: 5,
    // WITH_BALL_MOVESPEED: 3.5,
    JUMP_HEIGHT: 14
    // ON_FIRE_JUMP_HEIGHT: 16
};

var Player = function (_Rect) {
    _inherits(Player, _Rect);

    function Player(court, ball, spriteSrc) {
        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, { width: CONSTANTS.PLAYER_WIDTH, height: CONSTANTS.PLAYER_HEIGHT }));

        _this.court = court;
        _this.ball = ball;

        _this.velocity = {
            x: 0,
            y: 0
        };
        _this.position = {
            x: _this.court.width - _this.width,
            y: _this.court.position.y - _this.height
        };
        _this.color = "red";
        _this.jumping = false;
        _this.facingRight = true;
        // this.dennisRodmanHead = new Image();
        // this.dennisRodmanHead.src = 'src/assets/dennisRodmanHead.png'
        _this.sprite = new Image();
        _this.sprite.src = spriteSrc;
        return _this;
    }

    _createClass(Player, [{
        key: 'animate',
        value: function animate(ctx) {
            this.move();
            // ctx.fillStyle = this.color;
            // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

            // ctx.drawImage(this.dennisRodmanHead, 
            //         this.position.x - this.width + (this.dennisRodmanHead.width / 2), 
            //         this.position.y - this.height + (this.dennisRodmanHead.height / 3))
            ctx.drawImage(this.sprite, this.position.x - 5, this.position.y - this.sprite.height / 3);
        }
    }, {
        key: 'move',
        value: function move() {
            if (_keymaster2.default.isPressed('right')) {
                this.position.x += CONSTANTS.MOVESPEED;
                this.facingRight = true;
            }
            if (_keymaster2.default.isPressed('left')) {
                this.position.x -= CONSTANTS.MOVESPEED;
                this.facingRight = false;
            }

            // JUMPING
            if (_keymaster2.default.isPressed('up') && !this.jumping) {
                this.velocity.y = CONSTANTS.JUMP_HEIGHT;
                this.jumping = true;
            }

            if (_keymaster2.default.isPressed('/')) {
                this.preformAction();
            }

            this.checkBall();

            this.handleGravity();

            this.checkBounds();
        }
    }, {
        key: 'preformAction',
        value: function preformAction() {
            if (this.ball.possession === this) {
                // Hold to shoot. 
                this.ball.shoot();
            }
        }
    }, {
        key: 'checkBall',
        value: function checkBall() {
            if (!this.ball.possession && this.ball.isOverlappingRect(this)) {
                this.ball.claimPossession(this);
            }
        }
    }, {
        key: 'handleGravity',
        value: function handleGravity() {
            this.position.y -= this.velocity.y;
            // GRAVITY
            // if the pos is greater than the floor
            if (this.position.y + this.height < this.court.position.y) {
                this.velocity.y -= CONSTANTS.GRAVITY;
                // else set the pos to the floor
            } else {
                this.velocity.y = 0;
                this.position.y = this.court.position.y - this.height;
                this.jumping = false;
            }
        }
    }, {
        key: 'checkBounds',
        value: function checkBounds() {
            if (this.position.x > this.court.width - this.width) {
                this.position.x = this.court.width - this.width;
            } else if (this.position.x < 0) {
                this.position.x = 0;
            }
        }
    }]);

    return Player;
}(_rect2.default);

exports.default = Player;

/***/ }),

/***/ "./client/src/js/player2.js":
/*!**********************************!*\
  !*** ./client/src/js/player2.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(/*! ./player */ "./client/src/js/player.js");

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CONSTANTS = {
    GRAVITY: 0.5,
    PLAYER_WIDTH: 40,
    PLAYER_HEIGHT: 70,
    MOVESPEED: 5,
    // WITH_BALL_MOVESPEED: 3.5,
    JUMP_HEIGHT: 14
    // ON_FIRE_JUMP_HEIGHT: 16
};

var Player2 = function (_Player) {
    _inherits(Player2, _Player);

    function Player2(court, ball, spriteSrc) {
        _classCallCheck(this, Player2);

        var _this = _possibleConstructorReturn(this, (Player2.__proto__ || Object.getPrototypeOf(Player2)).call(this, court, ball, spriteSrc));

        _this.position = {
            x: 0,
            y: _this.court.position.y - _this.height
        };
        _this.color = "black";
        _this.jumping = false;
        _this.facingRight = false;
        return _this;
    }

    _createClass(Player2, [{
        key: "move",
        value: function move() {
            if (key.isPressed('d')) {
                this.position.x += CONSTANTS.MOVESPEED;
                this.facingRight = true;
            }
            if (key.isPressed('a')) {
                this.position.x -= CONSTANTS.MOVESPEED;
                this.facingRight = false;
            }

            // JUMPING
            if (key.isPressed('w') && !this.jumping) {
                this.velocity.y = CONSTANTS.JUMP_HEIGHT;
                this.jumping = true;
            }

            if (key.isPressed('q')) {
                this.preformAction();
            }

            this.checkBall();

            this.handleGravity();

            this.checkBounds();
        }
    }]);

    return Player2;
}(_player2.default);

exports.default = Player2;

/***/ }),

/***/ "./client/src/js/scoreboard.js":
/*!*************************************!*\
  !*** ./client/src/js/scoreboard.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scoreboard = function () {
    function Scoreboard(dimensions, leftHoop, rightHoop) {
        var _this = this;

        _classCallCheck(this, Scoreboard);

        this.dimensions = dimensions;
        this.leftHoop = leftHoop;
        this.rightHoop = rightHoop;
        this.timeLeft = 60;
        this.countDown = setInterval(function () {
            _this.timeLeft--;
            if (_this.timeLeft === 0) clearInterval(_this.countDown);
        }, 1000);
    }

    _createClass(Scoreboard, [{
        key: "animate",
        value: function animate(ctx) {
            var loc = { x: this.dimensions.width / 2, y: this.dimensions.height / 10 };
            ctx.font = "bold 40pt serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Player 1: " + this.rightHoop.score + " Player 2: " + this.leftHoop.score, loc.x, loc.y);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.strokeText("Player 1: " + this.rightHoop.score + " Player 2: " + this.leftHoop.score, loc.x, loc.y);

            loc = { x: this.dimensions.width / 2, y: this.dimensions.height / 5 };
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("" + this.timeLeft, loc.x, loc.y);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.strokeText("" + this.timeLeft, loc.x, loc.y);
        }
    }]);

    return Scoreboard;
}();

exports.default = Scoreboard;

/***/ }),

/***/ "./client/src/js/utils/circle.js":
/*!***************************************!*\
  !*** ./client/src/js/utils/circle.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function () {
    function Circle(radius) {
        _classCallCheck(this, Circle);

        this.radius = radius;
    }

    _createClass(Circle, [{
        key: "isOverlappingRect",
        value: function isOverlappingRect(rect) {
            var distX = Math.abs(this.position.x - rect.position.x - rect.width / 2);
            var distY = Math.abs(this.position.y - rect.position.y - rect.height / 2);
            if (distX > rect.width / 2 + this.radius) {
                return false;
            }
            if (distY > rect.height / 2 + this.radius) {
                return false;
            }

            if (distX <= rect.width / 2) {
                return true;
            }
            if (distY <= rect.height / 2) {
                return true;
            }

            var dx = distX - rect.width / 2;
            var dy = distY - rect.height / 2;
            return dx * dx + dy * dy <= this.radius * this.radius;
        }
    }, {
        key: "getBounds",
        value: function getBounds() {
            return {
                left: this.position.x,
                right: this.position.x + this.width,
                top: this.position.y,
                bottom: this.position.y + this.height
            };
        }
    }]);

    return Circle;
}();

exports.default = Circle;

/***/ }),

/***/ "./client/src/js/utils/keymaster.js":
/*!******************************************!*\
  !*** ./client/src/js/utils/keymaster.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//     keymaster.js
//     (c) 2011-2013 Thomas Fuchs
//     keymaster.js may be freely distributed under the MIT license.

;(function (global) {
    var k,
        _handlers = {},
        _mods = { 16: false, 18: false, 17: false, 91: false },
        _scope = 'all',

    // modifier keys
    _MODIFIERS = {
        '⇧': 16, shift: 16,
        '⌥': 18, alt: 18, option: 18,
        '⌃': 17, ctrl: 17, control: 17,
        '⌘': 91, command: 91
    },

    // special keys
    _MAP = {
        backspace: 8, tab: 9, clear: 12,
        enter: 13, 'return': 13,
        esc: 27, escape: 27, space: 32,
        left: 37, up: 38,
        right: 39, down: 40,
        del: 46, 'delete': 46,
        home: 36, end: 35,
        pageup: 33, pagedown: 34,
        ',': 188, '.': 190, '/': 191,
        '`': 192, '-': 189, '=': 187,
        ';': 186, '\'': 222,
        '[': 219, ']': 221, '\\': 220
    },
        code = function code(x) {
        return _MAP[x] || x.toUpperCase().charCodeAt(0);
    },
        _downKeys = [];

    for (k = 1; k < 20; k++) {
        _MAP['f' + k] = 111 + k;
    } // IE doesn't support Array#indexOf, so have a simple replacement
    function index(array, item) {
        var i = array.length;
        while (i--) {
            if (array[i] === item) return i;
        }return -1;
    }

    // for comparing mods before unassignment
    function compareArray(a1, a2) {
        if (a1.length != a2.length) return false;
        for (var i = 0; i < a1.length; i++) {
            if (a1[i] !== a2[i]) return false;
        }
        return true;
    }

    var modifierMap = {
        16: 'shiftKey',
        18: 'altKey',
        17: 'ctrlKey',
        91: 'metaKey'
    };
    function updateModifierKey(event) {
        for (k in _mods) {
            _mods[k] = event[modifierMap[k]];
        }
    };

    // handle keydown event
    function dispatch(event) {
        var key, handler, k, i, modifiersMatch, scope;
        key = event.keyCode;

        if (index(_downKeys, key) == -1) {
            _downKeys.push(key);
        }

        // if a modifier key, set the key.<modifierkeyname> property to true and return
        if (key == 93 || key == 224) key = 91; // right command on webkit, command on Gecko
        if (key in _mods) {
            _mods[key] = true;
            // 'assignKey' from inside this closure is exported to window.key
            for (k in _MODIFIERS) {
                if (_MODIFIERS[k] == key) assignKey[k] = true;
            }return;
        }
        updateModifierKey(event);

        // see if we need to ignore the keypress (filter() can can be overridden)
        // by default ignore key presses if a select, textarea, or input is focused
        if (!assignKey.filter.call(this, event)) return;

        // abort if no potentially matching shortcuts found
        if (!(key in _handlers)) return;

        scope = getScope();

        // for each potential shortcut
        for (i = 0; i < _handlers[key].length; i++) {
            handler = _handlers[key][i];

            // see if it's in the current scope
            if (handler.scope == scope || handler.scope == 'all') {
                // check if modifiers match if any
                modifiersMatch = handler.mods.length > 0;
                for (k in _mods) {
                    if (!_mods[k] && index(handler.mods, +k) > -1 || _mods[k] && index(handler.mods, +k) == -1) modifiersMatch = false;
                } // call the handler and stop the event if neccessary
                if (handler.mods.length == 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91] || modifiersMatch) {
                    if (handler.method(event, handler) === false) {
                        if (event.preventDefault) event.preventDefault();else event.returnValue = false;
                        if (event.stopPropagation) event.stopPropagation();
                        if (event.cancelBubble) event.cancelBubble = true;
                    }
                }
            }
        }
    };

    // unset modifier keys on keyup
    function clearModifier(event) {
        var key = event.keyCode,
            k,
            i = index(_downKeys, key);

        // remove key from _downKeys
        if (i >= 0) {
            _downKeys.splice(i, 1);
        }

        if (key == 93 || key == 224) key = 91;
        if (key in _mods) {
            _mods[key] = false;
            for (k in _MODIFIERS) {
                if (_MODIFIERS[k] == key) assignKey[k] = false;
            }
        }
    };

    function resetModifiers() {
        for (k in _mods) {
            _mods[k] = false;
        }for (k in _MODIFIERS) {
            assignKey[k] = false;
        }
    };

    // parse and assign shortcut
    function assignKey(key, scope, method) {
        var keys, mods;
        keys = getKeys(key);
        if (method === undefined) {
            method = scope;
            scope = 'all';
        }

        // for each shortcut
        for (var i = 0; i < keys.length; i++) {
            // set modifier keys if any
            mods = [];
            key = keys[i].split('+');
            if (key.length > 1) {
                mods = getMods(key);
                key = [key[key.length - 1]];
            }
            // convert to keycode and...
            key = key[0];
            key = code(key);
            // ...store handler
            if (!(key in _handlers)) _handlers[key] = [];
            _handlers[key].push({ shortcut: keys[i], scope: scope, method: method, key: keys[i], mods: mods });
        }
    };

    // unbind all handlers for given key in current scope
    function unbindKey(key, scope) {
        var multipleKeys,
            keys,
            mods = [],
            i,
            j,
            obj;

        multipleKeys = getKeys(key);

        for (j = 0; j < multipleKeys.length; j++) {
            keys = multipleKeys[j].split('+');

            if (keys.length > 1) {
                mods = getMods(keys);
            }

            key = keys[keys.length - 1];
            key = code(key);

            if (scope === undefined) {
                scope = getScope();
            }
            if (!_handlers[key]) {
                return;
            }
            for (i = 0; i < _handlers[key].length; i++) {
                obj = _handlers[key][i];
                // only clear handlers if correct scope and mods match
                if (obj.scope === scope && compareArray(obj.mods, mods)) {
                    _handlers[key][i] = {};
                }
            }
        }
    };

    // Returns true if the key with code 'keyCode' is currently down
    // Converts strings into key codes.
    function isPressed(keyCode) {
        if (typeof keyCode == 'string') {
            keyCode = code(keyCode);
        }
        return index(_downKeys, keyCode) != -1;
    }

    function getPressedKeyCodes() {
        return _downKeys.slice(0);
    }

    function filter(event) {
        var tagName = (event.target || event.srcElement).tagName;
        // ignore keypressed in any elements that support keyboard data input
        return !(tagName == 'INPUT' || tagName == 'SELECT' || tagName == 'TEXTAREA');
    }

    // initialize key.<modifier> to false
    for (k in _MODIFIERS) {
        assignKey[k] = false;
    } // set current scope (default 'all')
    function setScope(scope) {
        _scope = scope || 'all';
    };
    function getScope() {
        return _scope || 'all';
    };

    // delete all handlers for a given scope
    function deleteScope(scope) {
        var key, handlers, i;

        for (key in _handlers) {
            handlers = _handlers[key];
            for (i = 0; i < handlers.length;) {
                if (handlers[i].scope === scope) handlers.splice(i, 1);else i++;
            }
        }
    };

    // abstract key logic for assign and unassign
    function getKeys(key) {
        var keys;
        key = key.replace(/\s/g, '');
        keys = key.split(',');
        if (keys[keys.length - 1] == '') {
            keys[keys.length - 2] += ',';
        }
        return keys;
    }

    // abstract mods logic for assign and unassign
    function getMods(key) {
        var mods = key.slice(0, key.length - 1);
        for (var mi = 0; mi < mods.length; mi++) {
            mods[mi] = _MODIFIERS[mods[mi]];
        }return mods;
    }

    // cross-browser events
    function addEvent(object, event, method) {
        if (object.addEventListener) object.addEventListener(event, method, false);else if (object.attachEvent) object.attachEvent('on' + event, function () {
            method(window.event);
        });
    };

    // set the handlers globally on document
    addEvent(document, 'keydown', function (event) {
        dispatch(event);
    }); // Passing _scope to a callback to ensure it remains the same by execution. Fixes #48
    addEvent(document, 'keyup', clearModifier);

    // reset modifiers to false whenever the window is (re)focused.
    addEvent(window, 'focus', resetModifiers);

    // store previously defined key
    var previousKey = window.key;

    // restore previously defined key and return reference to our key object
    function noConflict() {
        var k = window.key;
        window.key = previousKey;
        return k;
    }

    // set window.key and window.key.set/get/deleteScope, and the default filter
    window.key = assignKey;
    window.key.setScope = setScope;
    window.key.getScope = getScope;
    window.key.deleteScope = deleteScope;
    window.key.filter = filter;
    window.key.isPressed = isPressed;
    window.key.getPressedKeyCodes = getPressedKeyCodes;
    window.key.noConflict = noConflict;
    window.key.unbind = unbindKey;

    if (true) module.exports = assignKey;
})(undefined);

/***/ }),

/***/ "./client/src/js/utils/rect.js":
/*!*************************************!*\
  !*** ./client/src/js/utils/rect.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rect = function () {
    function Rect(size) {
        _classCallCheck(this, Rect);

        this.width = size.width;
        this.height = size.height;
    }

    _createClass(Rect, [{
        key: "isOverlappingOtherRect",
        value: function isOverlappingOtherRect(rectClass) {
            var myBounds = this.getBounds();
            var rect = rectClass.getBounds();
            if (myBounds.left > rect.right || myBounds.right < rect.left) {
                return false;
            }
            if (myBounds.top > rect.bottom || myBounds.bottom < rect.top) {
                return false;
            }
            return true;
        }
    }, {
        key: "getBounds",
        value: function getBounds() {
            return {
                left: this.position.x,
                right: this.position.x + this.width,
                top: this.position.y,
                bottom: this.position.y + this.height
            };
        }
    }]);

    return Rect;
}();

exports.default = Rect;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9jb3VydC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9ob29wLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvbWVudV9zY3JlZW5zL2NoYXJhY3Rlcl9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9tZW51X3NjcmVlbnMvbWFpbl9tZW51LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvb25saW5lX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllcjIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMva2V5bWFzdGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvcmVjdC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIk5CQUphbUdhbWUiLCJDT05TVEFOVFMiLCJSQURJVVMiLCJHUkFWSVRZIiwiQk9VTkNFX1JFVEVOVElPTiIsIkRSSUJCTEVfU1BFRUQiLCJCYWxsIiwiZGltZW5zaW9ucyIsImNvdXJ0IiwibGVmdEhvb3AiLCJyaWdodEhvb3AiLCJnYW1lSWQiLCJiYWxsIiwicG9zaXRpb24iLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwidmVsb2NpdHkiLCJjb2xvciIsInBvc3Nlc3Npb24iLCJub1RvdWNoIiwicG93ZXIiLCJjdHgiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwicmFkaXVzIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsInBsYXllciIsInNvY2tldCIsImVtaXQiLCJmcm9tU29ja2V0IiwiaWQiLCJzaG9vdGluZ1BsYXllciIsImZhY2luZ1JpZ2h0Iiwic2hvb3RpbmdUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbGVhc2VCYWxsIiwic2NvcmVQb3NpdGlvbiIsInNjb3JlSGl0Ym94IiwiaHlwb3QiLCJudW1iZXJPZkZyYW1lcyIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsImRpZmYiLCJhZGp1c3RlZFgiLCJyZW1vdmVQb3NzZXNzaW9uIiwiZmFsbCIsIm1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbiIsImNoZWNrQm91bmRzIiwianVtcGluZyIsIkNpcmNsZSIsIkNPVVJUX0ZMT09SIiwiQ09VUlRfV0lEVEgiLCJDb3VydCIsImZpbGxSZWN0IiwiUmVjdCIsImdldENvbnRleHQiLCJtYWluTWVudSIsIk1haW5NZW51Iiwic3RhcnRHYW1lIiwiYmluZCIsInN0YXJ0T25saW5lR2FtZSIsInBsYXlpbmdHYW1lIiwicmVuZGVyTWVudSIsInNldHVwS2V5SGFuZGxlcnMiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsZWZ0U3ByaXRlIiwicmlnaHRTcHJpdGUiLCJyZXN0YXJ0IiwibXlTaWRlIiwib25saW5lR2FtZUlkIiwicnVuT25saW5lR2FtZSIsIkhvb3AiLCJzY29yZWJvYXJkIiwiU2NvcmVib2FyZCIsIlBsYXllciIsInBsYXllcjIiLCJQbGF5ZXIyIiwiYW5pbWF0ZSIsImdhbWVPdmVyIiwiZGlzcGxheVdpbm5lciIsIm15UGxheWVyIiwiT25saW5lUGxheWVyIiwib3RoZXJQbGF5ZXIiLCJvbiIsImRhdGEiLCJzaG93TWVudSIsInJ1bk9ubGluZSIsIm90aGVyUGxheWVyRmFjaW5nIiwib3RoZXJQbGF5ZXJKdW1waW5nIiwidGltZUxlZnQiLCJ0ZXh0Iiwic2NvcmUiLCJsb2MiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZVRleHQiLCJIT09QX1lfTVVMVElQTElFUiIsIkhPT1BfSEVJR0hUIiwiSE9PUF9XSURUSCIsIkhPT1BfWF9ESVNUQU5DRSIsIkJBQ0tCT0FSRF9XSURUSCIsIkJBQ0tCT0FSRF9IRUlHSFQiLCJob29wU2lkZSIsImJhY2tib2FyZCIsIkJhY2tib2FyZCIsIlNjb3JlSGl0Ym94IiwianVzdFNjb3JlZCIsImNoZWNrQmFsbENvbGxpc2lvbiIsImlzT3ZlcmxhcHBpbmdSZWN0IiwiaG9vcCIsIkNoYXJhY3RlclNlbGVjdCIsInNlbGVjdGVkQ2hhcmFjdGVycyIsImxlZnRTZWxlY3RlZCIsInJpZ2h0U2VsZWN0ZWQiLCJjaGFyYWN0ZXJzIiwibmFtZSIsInNyYyIsImxlZnRDaGFyIiwiSW1hZ2UiLCJyaWdodENoYXIiLCJsZWZ0UmVhZHkiLCJyaWdodFJlYWR5IiwibGVmdFBsYXllcklkIiwicmlnaHRQbGF5ZXJJZCIsImlzUGxheWluZ0xlZnQiLCJpc1BsYXlpbmdSaWdodCIsImtleSIsInVuYmluZCIsImxlZnRTaWRlQ2hhciIsIm9ubGluZU1vZGUiLCJkcmF3SW1hZ2UiLCJyaWdodFNpZGVDaGFyIiwibGVuZ3RoIiwic2VsZWN0ZWRPcHRpb24iLCJvcHRpb25zIiwiY2hhcmFjdGVyU2VsZWN0Iiwic2VsZWN0aW5nQ2hhcmFjdGVycyIsImxlZnRTcmMiLCJyaWdodFNyYyIsImZvckVhY2giLCJvcHRpb24iLCJpIiwibWVhc3VyZVRleHQiLCJhYnMiLCJQTEFZRVJfV0lEVEgiLCJQTEFZRVJfSEVJR0hUIiwiTU9WRVNQRUVEIiwiSlVNUF9IRUlHSFQiLCJzcHJpdGVTcmMiLCJzdGFydFNpZGUiLCJhY3RpdmUiLCJzcHJpdGUiLCJpc1ByZXNzZWQiLCJwcmVmb3JtQWN0aW9uIiwiY2hlY2tCYWxsIiwiaGFuZGxlR3Jhdml0eSIsInNob290IiwiY2xhaW1Qb3NzZXNzaW9uIiwiY291bnREb3duIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicmVjdCIsImRpc3RYIiwiZGlzdFkiLCJkeCIsImR5IiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiZ2xvYmFsIiwiayIsIl9oYW5kbGVycyIsIl9tb2RzIiwiX3Njb3BlIiwiX01PRElGSUVSUyIsInNoaWZ0IiwiYWx0IiwiY3RybCIsImNvbnRyb2wiLCJjb21tYW5kIiwiX01BUCIsImJhY2tzcGFjZSIsInRhYiIsImNsZWFyIiwiZW50ZXIiLCJlc2MiLCJlc2NhcGUiLCJzcGFjZSIsInVwIiwiZG93biIsImRlbCIsImhvbWUiLCJlbmQiLCJwYWdldXAiLCJwYWdlZG93biIsImNvZGUiLCJ0b1VwcGVyQ2FzZSIsImNoYXJDb2RlQXQiLCJfZG93bktleXMiLCJpbmRleCIsImFycmF5IiwiaXRlbSIsImNvbXBhcmVBcnJheSIsImExIiwiYTIiLCJtb2RpZmllck1hcCIsInVwZGF0ZU1vZGlmaWVyS2V5IiwiZXZlbnQiLCJkaXNwYXRjaCIsImhhbmRsZXIiLCJtb2RpZmllcnNNYXRjaCIsInNjb3BlIiwia2V5Q29kZSIsInB1c2giLCJhc3NpZ25LZXkiLCJmaWx0ZXIiLCJjYWxsIiwiZ2V0U2NvcGUiLCJtb2RzIiwibWV0aG9kIiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsInN0b3BQcm9wYWdhdGlvbiIsImNhbmNlbEJ1YmJsZSIsImNsZWFyTW9kaWZpZXIiLCJzcGxpY2UiLCJyZXNldE1vZGlmaWVycyIsImtleXMiLCJnZXRLZXlzIiwidW5kZWZpbmVkIiwic3BsaXQiLCJnZXRNb2RzIiwic2hvcnRjdXQiLCJ1bmJpbmRLZXkiLCJtdWx0aXBsZUtleXMiLCJqIiwib2JqIiwiZ2V0UHJlc3NlZEtleUNvZGVzIiwic2xpY2UiLCJ0YWdOYW1lIiwidGFyZ2V0Iiwic3JjRWxlbWVudCIsInNldFNjb3BlIiwiZGVsZXRlU2NvcGUiLCJoYW5kbGVycyIsInJlcGxhY2UiLCJtaSIsImFkZEV2ZW50Iiwib2JqZWN0IiwiYXR0YWNoRXZlbnQiLCJ3aW5kb3ciLCJwcmV2aW91c0tleSIsIm5vQ29uZmxpY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwic2l6ZSIsInJlY3RDbGFzcyIsIm15Qm91bmRzIiwiZ2V0Qm91bmRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7OztBQUVBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxRQUFNQyxTQUFTRixTQUFTRyxjQUFULENBQXdCLGNBQXhCLENBQWY7QUFDQSxRQUFJQyxjQUFKLENBQWVGLE1BQWY7QUFDSCxDQUhELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1HLFlBQVk7QUFDZEMsWUFBUSxFQURN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QWE2UCxLQUFLN1AsS0FBbEI7QUFDQSxhQUFLRSxNQUFMLEdBQWMyUCxLQUFLM1AsTUFBbkI7QUFDSDs7OzsrQ0FFc0I0UCxTLEVBQVc7QUFDOUIsZ0JBQU1DLFdBQVcsS0FBS0MsU0FBTCxFQUFqQjtBQUNBLGdCQUFNbEcsT0FBT2dHLFVBQVVFLFNBQVYsRUFBYjtBQUNBLGdCQUFJRCxTQUFTNUYsSUFBVCxHQUFnQkwsS0FBS00sS0FBckIsSUFBOEIyRixTQUFTM0YsS0FBVCxHQUFpQk4sS0FBS0ssSUFBeEQsRUFBOEQ7QUFDMUQsdUJBQU8sS0FBUDtBQUNIO0FBQ0QsZ0JBQUk0RixTQUFTMUYsR0FBVCxHQUFlUCxLQUFLUSxNQUFwQixJQUE4QnlGLFNBQVN6RixNQUFULEdBQWtCUixLQUFLTyxHQUF6RCxFQUE4RDtBQUMxRCx1QkFBTyxLQUFQO0FBQ0g7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7OztvQ0FFVztBQUNSLG1CQUFPO0FBQ0hGLHNCQUFNLEtBQUtySyxRQUFMLENBQWNDLENBRGpCO0FBRUhxSyx1QkFBTyxLQUFLdEssUUFBTCxDQUFjQyxDQUFkLEdBQWtCLEtBQUtDLEtBRjNCO0FBR0hxSyxxQkFBSyxLQUFLdkssUUFBTCxDQUFjRyxDQUhoQjtBQUlIcUssd0JBQVEsS0FBS3hLLFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixLQUFLQztBQUo1QixhQUFQO0FBTUg7Ozs7OztrQkF6QmdCNkMsSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jbGllbnQvc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IE5CQUphbUdhbWUgZnJvbSAnLi9qcy9nYW1lLmpzJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYmEtamFtLWdhbWUnKTtcbiAgICBuZXcgTkJBSmFtR2FtZShjYW52YXMpO1xufSk7IiwiaW1wb3J0IENpcmNsZSBmcm9tIFwiLi91dGlscy9jaXJjbGVcIjtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIFJBRElVUzogMTUsXG4gICAgR1JBVklUWTogMC41LFxuICAgIEJPVU5DRV9SRVRFTlRJT046IDAuNixcbiAgICBEUklCQkxFX1NQRUVEOiAzLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIGV4dGVuZHMgQ2lyY2xlIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBjb3VydCwgbGVmdEhvb3AsIHJpZ2h0SG9vcCwgZ2FtZUlkKSB7XG4gICAgICAgIHN1cGVyKENPTlNUQU5UUy5SQURJVVMpXG4gICAgICAgIHRoaXMuY291cnQgPSBjb3VydFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBsZWZ0SG9vcFxuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IHJpZ2h0SG9vcFxuICAgICAgICB0aGlzLmxlZnRIb29wLmJhbGwgPSB0aGlzXG4gICAgICAgIHRoaXMucmlnaHRIb29wLmJhbGwgPSB0aGlzXG5cbiAgICAgICAgdGhpcy5nYW1lSWQgPSBnYW1lSWRcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jb3VydC53aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMlxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImhvdHBpbmtcIlxuICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgIHRoaXMubm9Ub3VjaCA9IHt9XG4gICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCwgXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnksIFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsIFxuICAgICAgICAgICAgMCwgXG4gICAgICAgICAgICBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIFxuICAgIGNsYWltUG9zc2Vzc2lvbihwbGF5ZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vVG91Y2hbcGxheWVyLmNvbG9yXSkge1xuICAgICAgICAgICAgdGhpcy5wb3NzZXNzaW9uID0gcGxheWVyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcImNoYW5nZU9mUG9zc2VzaW9uXCIsIHtcbiAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkLFxuICAgICAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc2hvb3QgKCkge1xuICAgICAgICAvLyBCRVRBIFNIT09USU5HXG5cbiAgICAgICAgLy8gdGhpcy5wb3dlciArPSAxXG4gICAgICAgIC8vIGNvbnN0IHNob290aW5nUGxheWVyID0gdGhpcy5wb3NzZXNzaW9uXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID9cbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54ICsgc2hvb3RpbmdQbGF5ZXIud2lkdGggKyB0aGlzLnJhZGl1cykgOlxuICAgICAgICAvLyAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cylcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ID0gc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueVxuXG4gICAgICAgIC8vIGlmICh0aGlzLnNob290aW5nSW50ZXJ2YWwgJiYgdGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgIC8vICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG9vdGluZ0ludGVydmFsKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmICh0aGlzLnBvd2VyIDwgNjApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuc2hvb3RpbmdJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gNiA6IC02XG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gdGhpcy5wb3dlclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcbiAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWUgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gZmFsc2VcbiAgICAgICAgLy8gICAgICAgICB9LCA1MDApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgICAgIC8vICAgICB9LCAyMCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBBSU1CT1QgU0hPT1RJTkdcblxuICAgICAgICAvLyBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICAvLyBjb25zdCBzY29yZVBvc2l0aW9uID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgPyAoXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgeDogdGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueCArICh0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC53aWR0aCAvIDIpLFxuICAgICAgICAvLyAgICAgICAgIHk6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnlcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gKSA6IChcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICB4OiB0aGlzLmxlZnRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgLy8gICAgICAgICB5OiB0aGlzLmxlZnRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnlcbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyApXG5cbiAgICAgICAgLy8gY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSA1MFxuXG4gICAgICAgIC8vIGNvbnN0IHZlbG9jaXR5WCA9IChzY29yZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICAgICAgLy8gY29uc3QgdmVsb2NpdHlZID0gKCAoLXNjb3JlUG9zaXRpb24ueSArIHRoaXMucG9zaXRpb24ueSkgLSAwLjUgKiAtQ09OU1RBTlRTLkdSQVZJVFkgKiAobnVtYmVyT2ZGcmFtZXMgKiBudW1iZXJPZkZyYW1lcykgKSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAvLyAgICAgeDogdmVsb2NpdHlYLFxuICAgICAgICAvLyAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gdHJ1ZSAgICAgICAgXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IGZhbHNlXG4gICAgICAgIC8vIH0sIDUwMCk7XG5cbiAgICAgICAgLy8gdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuXG4gICAgICAgIC8vIFBPV0VSQkFTRUQgQUlNRUQgU0hPT1RJTkdcblxuXG4gICAgICAgIHRoaXMucG93ZXIgKz0gMVxuXG4gICAgICAgIGNvbnN0IHNob290aW5nUGxheWVyID0gdGhpcy5wb3NzZXNzaW9uXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID9cbiAgICAgICAgICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54ICsgc2hvb3RpbmdQbGF5ZXIud2lkdGggKyB0aGlzLnJhZGl1cykgOlxuICAgICAgICAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cylcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueVxuXG4gICAgICAgIGlmICh0aGlzLnNob290aW5nVGltZW91dCAmJiB0aGlzLnBvd2VyIDwgNjApIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNob290aW5nVGltZW91dClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgICAgICB0aGlzLnNob290aW5nVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVsZWFzZUJhbGwoKVxuICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZWxlYXNlQmFsbCAoKSB7XG4gICAgICAgIGNvbnN0IHNob290aW5nUGxheWVyID0gdGhpcy5wb3NzZXNzaW9uXG5cbiAgICAgICAgY29uc3Qgc2NvcmVQb3NpdGlvbiA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgICAgICB9XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgICAgICB9XG4gICAgICAgIClcblxuICAgICAgICAvLyBMQVlVUFxuICAgICAgICBpZiAoMTUwID4gTWF0aC5oeXBvdCh0aGlzLnBvc2l0aW9uLnggLSBzY29yZVBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSAtIHNjb3JlUG9zaXRpb24ueSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlck9mRnJhbWVzID0gMzBcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WCA9IChzY29yZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WSA9ICgoLXNjb3JlUG9zaXRpb24ueSArIHRoaXMucG9zaXRpb24ueSkgLSAwLjUgKiAtQ09OU1RBTlRTLkdSQVZJVFkgKiAobnVtYmVyT2ZGcmFtZXMgKiBudW1iZXJPZkZyYW1lcykpIC8gbnVtYmVyT2ZGcmFtZXNcblxuICAgICAgICAgICAgY29uc3QgZGlmZiA9ICh0aGlzLnBvd2VyIC0gMzApIC8gMjBcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkWCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCArIGRpZmZcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYIC0gZGlmZlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgICAgICB4OiBhZGp1c3RlZFgsXG4gICAgICAgICAgICAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTSE9UXG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IDUwXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WCA9IChzY29yZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WSA9ICgoLXNjb3JlUG9zaXRpb24ueSArIHRoaXMucG9zaXRpb24ueSkgLSAwLjUgKiAtQ09OU1RBTlRTLkdSQVZJVFkgKiAobnVtYmVyT2ZGcmFtZXMgKiBudW1iZXJPZkZyYW1lcykpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAodGhpcy5wb3dlciAtIDMwKSAvIDZcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkWCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCArIGRpZmZcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYIC0gZGlmZlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgICAgICB4OiBhZGp1c3RlZFgsXG4gICAgICAgICAgICAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gdHJ1ZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSBmYWxzZVxuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgICAgIHRoaXMucmVtb3ZlUG9zc2Vzc2lvbigpXG5cbiAgICB9XG5cbiAgICByZW1vdmVQb3NzZXNzaW9uKCkge1xuICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgIHNvY2tldC5lbWl0KFwicmVtb3ZlQmFsbFBvc3Nlc3Npb25cIiwge1xuICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZCxcbiAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb25cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5wb3NzZXNzaW9uKSB7XG4gICAgICAgICAgICB0aGlzLmZhbGwoKVxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbigpIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG4gICAgbW92ZVdpdGhQbGF5ZXJQb3NzZXNzaW9uKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnBvc3Nlc3Npb24uZmFjaW5nUmlnaHQgP1xuICAgICAgICAgICAgKHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi54ICsgdGhpcy5wb3NzZXNzaW9uLndpZHRoKSA6ICh0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueClcblxuICAgICAgICBpZiAodGhpcy5wb3NzZXNzaW9uLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIC8vIEhPTEQgQkFMTFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLnkgKyB0aGlzLnBvc3Nlc3Npb24uaGVpZ2h0IC8gMlxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEUklCQkxJTkdcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPCB0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueSArIHRoaXMucG9zc2Vzc2lvbi5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLUNPTlNUQU5UUy5EUklCQkxFX1NQRUVEXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+IHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi55ICsgdGhpcy5wb3NzZXNzaW9uLmhlaWdodCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkRSSUJCTEVfU1BFRURcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5LnlcbiAgICAgICAgfVxuICAgICAgICAvLyBzb2NrZXQuZW1pdChcInVwZGF0ZUJhbGxXaXRoUG9zXCIsIHtcbiAgICAgICAgLy8gICAgIGdhbWVJZDogdGhpcy5nYW1lSWQsXG4gICAgICAgIC8vICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgIC8vICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICAvLyAgICAgb3RoZXJQbGF5ZXJGYWNpbmc6IHRoaXMucG9zc2Vzc2lvbi5mYWNpbmdSaWdodFxuICAgICAgICAvLyB9KVxuICAgIH1cblxuXG4gICAgZmFsbCAoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgICAgIC8vIEdSQVZJVFlcbiAgICAgICAgLy8gaWYgdGhlIHBvcyBpcyBncmVhdGVyIHRoYW4gdGhlIGZsb29yXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnJhZGl1cyA8IHRoaXMuY291cnQucG9zaXRpb24ueSkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IENPTlNUQU5UUy5HUkFWSVRZO1xuICAgICAgICAgICAgLy8gZWxzZSBzZXQgdGhlIHJldmVyc2UgdmVsb2NpdHlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZlbG9jaXR5LnkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy52ZWxvY2l0eS55ICogQ09OU1RBTlRTLkJPVU5DRV9SRVRFTlRJT05cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2hlY2tCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY291cnQud2lkdGggLSB0aGlzLnJhZGl1c1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDBcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5LnhcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCBSZWN0IGZyb20gXCIuL3V0aWxzL3JlY3RcIjtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIENPVVJUX0ZMT09SOiAwLjg1LFxuICAgIENPVVJUX1dJRFRIOiA1XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VydCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogZGltZW5zaW9ucy53aWR0aCwgaGVpZ2h0OiBDT05TVEFOVFMuQ09VUlRfV0lEVEggfSlcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAqIENPTlNUQU5UUy5DT1VSVF9GTE9PUlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImdyZWVuXCJcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcidcbmltcG9ydCBDb3VydCBmcm9tICcuL2NvdXJ0JztcbmltcG9ydCBIb29wIGZyb20gJy4vaG9vcCc7XG5pbXBvcnQgQmFsbCBmcm9tICcuL2JhbGwnO1xuaW1wb3J0IFNjb3JlYm9hcmQgZnJvbSAnLi9zY29yZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIyIGZyb20gJy4vcGxheWVyMic7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9tZW51X3NjcmVlbnMvbWFpbl9tZW51JztcbmltcG9ydCBPbmxpbmVQbGF5ZXIgZnJvbSAnLi9vbmxpbmVfcGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTkJBSmFtR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLm1haW5NZW51ID0gbmV3IE1haW5NZW51KHRoaXMuZGltZW5zaW9ucywgdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKSwgdGhpcy5zdGFydE9ubGluZUdhbWUuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlck1lbnUoKVxuICAgIH1cblxuICAgIHNob3dNZW51KCkge1xuICAgICAgICB0aGlzLm1haW5NZW51LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICB0aGlzLnJlbmRlck1lbnUodGhpcy5jdHgpXG4gICAgfVxuXG4gICAgcmVuZGVyTWVudSAoKSB7XG4gICAgICAgIHRoaXMubWFpbk1lbnUucmVuZGVyKHRoaXMuY3R4KVxuICAgICAgICBpZiAoIXRoaXMucGxheWluZ0dhbWUpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlck1lbnUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lIChsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSkge1xuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gdHJ1ZVxuICAgICAgICB0aGlzLnJlc3RhcnQobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUpXG4gICAgfVxuXG4gICAgc3RhcnRPbmxpbmVHYW1lKGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlLCBteVNpZGUsIGdhbWVJZCkge1xuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gdHJ1ZVxuICAgICAgICB0aGlzLm9ubGluZUdhbWVJZCA9IGdhbWVJZFxuICAgICAgICB0aGlzLnJ1bk9ubGluZUdhbWUobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUsIG15U2lkZSlcbiAgICB9XG5cbiAgICByZXN0YXJ0KGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlKSB7XG4gICAgICAgIC8vIFNUQVJUIEFOSU1BVElPTiBTWUNMRVxuICAgICAgICB0aGlzLmNvdXJ0ID0gbmV3IENvdXJ0KHRoaXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiTEVGVFwiKTtcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiUklHSFRcIik7XG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKHRoaXMuZGltZW5zaW9ucywgdGhpcy5jb3VydCwgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3ApXG5cbiAgICAgICAgdGhpcy5zY29yZWJvYXJkID0gbmV3IFNjb3JlYm9hcmQodGhpcy5kaW1lbnNpb25zLCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcClcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCByaWdodFNwcml0ZSk7XG4gICAgICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgbGVmdFNwcml0ZSk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuICAgIFxuICAgIGFuaW1hdGUoKSB7ICAgICAgICBcbiAgICAgICAgLy8gQ1JFQVRFUyBCQUNLR1JPVU5EXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICAvLyBBTklNQVRFIE9CSkVDVFNcbiAgICAgICAgdGhpcy5wbGF5ZXIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMuYmFsbC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmxlZnRIb29wLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMucmlnaHRIb29wLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNjb3JlYm9hcmQuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5jb3VydC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5V2lubmVyKClcbiAgICAgICAgfVxuICAgICAgICAvLyBSRVFVRVNUIE5FWFQgRlJBTUVcbiAgICAgICAgaWYgKHRoaXMucGxheWluZ0dhbWUpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcnVuT25saW5lR2FtZShsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSwgbXlTaWRlKSB7XG4gICAgICAgIHRoaXMuY291cnQgPSBuZXcgQ291cnQodGhpcy5kaW1lbnNpb25zKTtcbiAgICAgICAgdGhpcy5sZWZ0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJMRUZUXCIpO1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJSSUdIVFwiKTtcbiAgICAgICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5kaW1lbnNpb25zLCB0aGlzLmNvdXJ0LCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcCwgdGhpcy5vbmxpbmVHYW1lSWQpXG5cbiAgICAgICAgdGhpcy5zY29yZWJvYXJkID0gbmV3IFNjb3JlYm9hcmQodGhpcy5kaW1lbnNpb25zLCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcClcblxuICAgICAgICBpZiAobXlTaWRlID09PSBcIkxFRlRcIikge1xuICAgICAgICAgICAgdGhpcy5teVBsYXllciA9IG5ldyBPbmxpbmVQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCBsZWZ0U3ByaXRlLCBcIkxFRlRcIiwgdHJ1ZSlcbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIgPSBuZXcgT25saW5lUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgcmlnaHRTcHJpdGUsIFwiUklHSFRcIiwgZmFsc2UpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyID0gbmV3IE9ubGluZVBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIGxlZnRTcHJpdGUsIFwiTEVGVFwiLCBmYWxzZSlcbiAgICAgICAgICAgIHRoaXMubXlQbGF5ZXIgPSBuZXcgT25saW5lUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgcmlnaHRTcHJpdGUsIFwiUklHSFRcIiwgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZU90aGVyUG9zXCIsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgIHg6IGRhdGFbXCJ4XCJdLFxuICAgICAgICAgICAgICAgIHk6IGRhdGFbXCJ5XCJdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllci5mYWNpbmdSaWdodCAgPSBkYXRhW1wib3RoZXJQbGF5ZXJGYWNpbmdcIl1cbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIuanVtcGluZyA9IGRhdGFbXCJvdGhlclBsYXllckp1bXBpbmdcIl1cbiAgICAgICAgfSkgXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZUJhbGxQb3NzZXNpb25cIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJhbGwucG9zc2Vzc2lvbiA9IHRoaXMub3RoZXJQbGF5ZXJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwicmVnaXN0ZXJlZFBvc3Nlc2lvbkNoYW5nZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLm9ubGluZUdhbWVJZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlTm9CYWxsUG9zc2VzaW9uXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5iYWxsLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgICAgICB0aGlzLmJhbGwucG9zaXRpb24gPSBkYXRhW1wicG9zaXRpb25cIl1cbiAgICAgICAgICAgIHRoaXMuYmFsbC52ZWxvY2l0eSA9IGRhdGFbXCJ2ZWxvY2l0eVwiXVxuICAgICAgICB9KVxuICAgICAgICAvLyBzb2NrZXQub24oXCJ1cGRhdGVCYWxsUG9zXCIsIGRhdGEgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5iYWxsLnBvc2l0aW9uID0gZGF0YVtcInBvc2l0aW9uXCJdXG4gICAgICAgIC8vICAgICB0aGlzLmJhbGwudmVsb2NpdHkgPSBkYXRhW1widmVsb2NpdHlcIl1cbiAgICAgICAgLy8gICAgIHRoaXMub3RoZXJQbGF5ZXIuZmFjaW5nUmlnaHQgPSBkYXRhW1wib3RoZXJQbGF5ZXJGYWNpbmdcIl1cbiAgICAgICAgLy8gfSlcbiAgICAgICAgc29ja2V0Lm9uKFwiZW5kR2FtZUZyb21EaXNjb25uZWN0XCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWluZ0dhbWUgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5vbmxpbmVHYW1lSWQgPSBudWxsXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNZW51KClcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMucnVuT25saW5lKCk7XG4gICAgfVxuXG4gICAgcnVuT25saW5lICgpIHtcbiAgICAgICAgLy8gQ1JFQVRFUyBCQUNLR1JPVU5EXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG5cbiAgICAgICAgLy8gQU5JTUFURSBPQkpFQ1RTXG4gICAgICAgIHRoaXMub3RoZXJQbGF5ZXIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5teVBsYXllci5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5iYWxsLmFuaW1hdGUodGhpcy5jdHgpXG5cbiAgICAgICAgdGhpcy5sZWZ0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLnJpZ2h0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuXG4gICAgICAgIHRoaXMuc2NvcmVib2FyZC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmNvdXJ0LmFuaW1hdGUodGhpcy5jdHgpXG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5V2lubmVyKClcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc29ja2V0LmVtaXQoXCJ1cGRhdGVNeVBvc1wiLCB7XG4gICAgICAgICAgICBnYW1lSWQ6IHRoaXMub25saW5lR2FtZUlkLFxuICAgICAgICAgICAgZnJvbVNvY2tldDogc29ja2V0LmlkLFxuICAgICAgICAgICAgeDogdGhpcy5teVBsYXllci5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy5teVBsYXllci5wb3NpdGlvbi55LFxuICAgICAgICAgICAgb3RoZXJQbGF5ZXJGYWNpbmc6IHRoaXMubXlQbGF5ZXIuZmFjaW5nUmlnaHQsXG4gICAgICAgICAgICBvdGhlclBsYXllckp1bXBpbmc6IHRoaXMubXlQbGF5ZXIuanVtcGluZ1xuICAgICAgICB9KVxuICAgICAgICBzb2NrZXQuZW1pdChcInVwZGF0ZUJhbGxQb3NcIiwge1xuICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLm9ubGluZUdhbWVJZCxcbiAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgIHg6IHRoaXMuYmFsbC5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy5iYWxsLnBvc2l0aW9uLnlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gUkVRVUVTVCBORVhUIEZSQU1FXG4gICAgICAgIGlmICh0aGlzLnBsYXlpbmdHYW1lKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ydW5PbmxpbmUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG5cblxuICAgIGdhbWVPdmVyICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmVib2FyZC50aW1lTGVmdCA9PT0gMFxuICAgIH1cblxuICAgIGRpc3BsYXlXaW5uZXIgKCkge1xuICAgICAgICBsZXQgdGV4dDtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRIb29wLnNjb3JlID4gdGhpcy5sZWZ0SG9vcC5zY29yZSkge1xuICAgICAgICAgICAgdGV4dCA9IFwiUGxheWVyIDEgd2luc1wiXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0SG9vcC5zY29yZSA+IHRoaXMucmlnaHRIb29wLnNjb3JlKSB7XG4gICAgICAgICAgICB0ZXh0ID0gXCJQbGF5ZXIgMiB3aW5zXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQgPSBcIlRpZSBHYW1lXCJcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiB9XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke3RleHR9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoYCR7dGV4dH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlXG4gICAgICAgIHRoaXMub25saW5lR2FtZUlkID0gbnVsbFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lbnUoKVxuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgUmVjdCBmcm9tICcuL3V0aWxzL3JlY3QnXG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBIT09QX1lfTVVMVElQTElFUjogMC4zLFxuICAgIEhPT1BfSEVJR0hUOiA0MCxcbiAgICBIT09QX1dJRFRIOiA1MCxcbiAgICBIT09QX1hfRElTVEFOQ0U6IDUwLFxuICAgIEJBQ0tCT0FSRF9XSURUSDogMTUsXG4gICAgQkFDS0JPQVJEX0hFSUdIVDogNTAsXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9vcCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIGhvb3BTaWRlLCBiYWxsKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5IT09QX1dJRFRILCBoZWlnaHQ6IENPTlNUQU5UUy5IT09QX0hFSUdIVCB9KVxuICAgICAgICB0aGlzLmJhbGwgPSBiYWxsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgICAgICAwICsgQ09OU1RBTlRTLkhPT1BfWF9ESVNUQU5DRVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zLndpZHRoIC0gQ09OU1RBTlRTLkhPT1BfWF9ESVNUQU5DRSAtIHRoaXMud2lkdGhcbiAgICAgICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsIFxuICAgICAgICAgICAgeTogZGltZW5zaW9ucy5oZWlnaHQgKiBDT05TVEFOVFMuSE9PUF9ZX01VTFRJUExJRVJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tib2FyZCA9IG5ldyBCYWNrYm9hcmQodGhpcywgaG9vcFNpZGUpXG4gICAgICAgIHRoaXMuc2NvcmVIaXRib3ggPSBuZXcgU2NvcmVIaXRib3godGhpcywgaG9vcFNpZGUpXG4gICAgICAgIHRoaXMuY29sb3IgPSBcInB1cnBsZVwiXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgICAgIHRoaXMuanVzdFNjb3JlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5jaGVja0JhbGxDb2xsaXNpb24oKVxuICAgICAgICB0aGlzLmJhY2tib2FyZC5hbmltYXRlKGN0eClcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnNjb3JlSGl0Ym94LmFuaW1hdGUoY3R4KVxuICAgICAgICBpZiAodGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMuc2NvcmVIaXRib3gpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuanVzdFNjb3JlZCkgdGhpcy5zY29yZSArPSAyXG4gICAgICAgICAgICB0aGlzLmp1c3RTY29yZWQgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gXCJncmVlblwiXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1c3RTY29yZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcInB1cnBsZVwiXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCYWxsQ29sbGlzaW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzKSB8fCB0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcy5iYWNrYm9hcmQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5iYWxsLnBvc2l0aW9uLnkgLSB0aGlzLmJhbGwucmFkaXVzID4gdGhpcy5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFsbC52ZWxvY2l0eS55ID4gMCkgdGhpcy5iYWxsLnZlbG9jaXR5LnkgPSAtdGhpcy5iYWxsLnZlbG9jaXR5LnlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFsbC5wb3NpdGlvbi55ICsgdGhpcy5iYWxsLnJhZGl1cyA8IHRoaXMuYmFja2JvYXJkLnBvc2l0aW9uLnkgJiYgdGhpcy5iYWxsLnZlbG9jaXR5LnkgPCAwKSAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkueSA9IC10aGlzLmJhbGwudmVsb2NpdHkueVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkueCA9IC10aGlzLmJhbGwudmVsb2NpdHkueFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNsYXNzIFNjb3JlSGl0Ym94IGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoaG9vcCwgaG9vcFNpZGUpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLkhPT1BfV0lEVEggLSAzMCwgaGVpZ2h0OiBDT05TVEFOVFMuSE9PUF9IRUlHSFQgKiAwLjA1IH0pXG4gICAgICAgIGNvbnN0IHggPSBob29wU2lkZSA9PT0gXCJMRUZUXCIgPyAoXG4gICAgICAgICAgICBob29wLnBvc2l0aW9uLnggKyAxNVxuICAgICAgICApIDogKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54ICsgaG9vcC53aWR0aCAtIHRoaXMud2lkdGggLSAxNVxuICAgICAgICApXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogaG9vcC5wb3NpdGlvbi55XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwid2hpdGVcIlxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tib2FyZCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGhvb3AsIGhvb3BTaWRlKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5CQUNLQk9BUkRfV0lEVEgsIGhlaWdodDogQ09OU1RBTlRTLkJBQ0tCT0FSRF9IRUlHSFQgfSlcbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCBcbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCArIGhvb3Aud2lkdGggLSB0aGlzLndpZHRoXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiBob29wLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImFxdWFcIlxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59IiwiaW1wb3J0IGtleSBmcm9tICcuLi91dGlscy9rZXltYXN0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXJTZWxlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIHNlbGVjdGVkQ2hhcmFjdGVycykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzID0gc2VsZWN0ZWRDaGFyYWN0ZXJzXG4gICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gMFxuICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAxXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJSb2RtYW5cIiwgc3JjOiBcInNyYy9hc3NldHMvcm9kbWFuU21hbGwucG5nXCJ9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkRyYWtlXCIsIHNyYzogXCJzcmMvYXNzZXRzL2RyYWtlU21hbGwucG5nXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJMZWJyb25cIiwgc3JjOiBcInNyYy9hc3NldHMvbGVicm9uU21hbGwucG5nXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJQZWFjaFwiLCBzcmM6IFwic3JjL2Fzc2V0cy9wZWFjaFNtYWxsLnBuZ1wifVxuICAgICAgICBdXG4gICAgICAgIFxuICAgICAgICB0aGlzLmxlZnRDaGFyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMucmlnaHRDaGFyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubGVmdENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXS5zcmNcbiAgICAgICAgdGhpcy5yaWdodENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjXG5cbiAgICAgICAgdGhpcy5sZWZ0UmVhZHkgPSBmYWxzZVxuICAgICAgICB0aGlzLnJpZ2h0UmVhZHkgPSBmYWxzZVxuXG4gICAgICAgIHNvY2tldC5vbihcIm1hdGNoRm91bmRcIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRQbGF5ZXJJZCA9IGRhdGFbXCJsZWZ0UGxheWVySWRcIl1cbiAgICAgICAgICAgIHRoaXMucmlnaHRQbGF5ZXJJZCA9IGRhdGFbXCJyaWdodFBsYXllcklkXCJdXG4gICAgICAgICAgICBpZiAoc29ja2V0LmlkID09PSB0aGlzLmxlZnRQbGF5ZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nTGVmdCA9IHRydWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdSaWdodCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gMFxuICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gMVxuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSBkYXRhW1wiZ2FtZUlkXCJdXG4gICAgICAgIH0pXG5cbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZFNlbGVjdGVkQ2hhcnNcIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9IGRhdGFbXCJsZWZ0U2VsZWN0ZWRcIl1cbiAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9IGRhdGFbXCJyaWdodFNlbGVjdGVkXCJdXG4gICAgICAgIH0pXG5cbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZExlZnRSZWFkeVwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRSZWFkeSA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZFJpZ2h0UmVhZHlcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yaWdodFJlYWR5ID0gdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHNvY2tldC5vbihcInN0YXJ0R2FtZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBrZXkudW5iaW5kKCdkb3duJylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ3cnKVxuICAgICAgICAgICAga2V5LnVuYmluZCgncycpXG4gICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVycyh0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdLnNyYywgdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjLCB0aGlzLmdhbWVJZClcbiAgICAgICAgICAgIHRoaXMubGVmdFBsYXllcklkID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5yaWdodFBsYXllcklkID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdMZWZ0ID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nUmlnaHQgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAwXG4gICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAxXG4gICAgICAgICAgICB0aGlzLmxlZnRSZWFkeSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLnJpZ2h0UmVhZHkgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSBudWxsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eCkge1xuXG4gICAgICAgIHRoaXMubGVmdENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXS5zcmNcbiAgICAgICAgdGhpcy5yaWdodENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjXG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicHVycGxlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIExFRlQgU0lERVxuICAgICAgICBjb25zdCBsZWZ0U2lkZUNoYXIgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdXG4gICAgICAgIGxldCBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDQsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyfVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuXG4gICAgICAgIGlmICh0aGlzLm9ubGluZU1vZGUpIGN0eC5maWxsVGV4dChcIk9ubGluZSBNb2RlXCIsIGxvYy54LCBsb2MueSAtIDEwMClcbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgMTJwdCBzZXJpZlwiO1xuICAgICAgICBpZiAodGhpcy5sZWZ0UmVhZHkpIGN0eC5maWxsVGV4dChcIlJlYWR5XCIsIGxvYy54LCBsb2MueSAtIDcwKVxuICAgICAgICBpZiAodGhpcy5sZWZ0UGxheWVySWQgJiYgdGhpcy5yaWdodFBsYXllcklkKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy5sZWZ0UGxheWVySWR9YCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7c29ja2V0LmlkfWAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCR7bGVmdFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYCR7bGVmdFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRDaGFyLFxuICAgICAgICAgICAgbG9jLnggLSB0aGlzLmxlZnRDaGFyLndpZHRoIC8gMixcbiAgICAgICAgICAgIGxvYy55KVxuXG4gICAgICAgIC8vIFJJR0hUIFNJREVcbiAgICAgICAgY29uc3QgcmlnaHRTaWRlQ2hhciA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdXG4gICAgICAgIGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoICogMyAvIDQsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyIH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblxuICAgICAgICBpZiAodGhpcy5vbmxpbmVNb2RlKSBjdHguZmlsbFRleHQoXCJPbmxpbmUgTW9kZVwiLCBsb2MueCwgbG9jLnkgLSAxMDApXG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDEycHQgc2VyaWZcIjtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRSZWFkeSkgY3R4LmZpbGxUZXh0KFwiUmVhZHlcIiwgbG9jLngsIGxvYy55IC0gNzApXG4gICAgICAgIGlmICh0aGlzLmxlZnRQbGF5ZXJJZCAmJiB0aGlzLnJpZ2h0UGxheWVySWQpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChgJHt0aGlzLnJpZ2h0UGxheWVySWR9YCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYFdhaXRpbmcgZm9yIFBsYXllcmAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcblxuICAgICAgICBjdHguZmlsbFRleHQoYCR7cmlnaHRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGAke3JpZ2h0U2lkZUNoYXIubmFtZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMucmlnaHRDaGFyLFxuICAgICAgICAgICAgbG9jLnggLSB0aGlzLnJpZ2h0Q2hhci53aWR0aCAvIDIsXG4gICAgICAgICAgICBsb2MueSlcbiBcbiAgICB9XG5cbiAgICBzZXR1cEtleUhhbmRsZXJzKCkge1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm9ubGluZU1vZGUpIHtcbiAgICAgICAgICAgICAgICBrZXkoJ2Rvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgndXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgLSAxKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yaWdodFNlbGVjdGVkID09PSAtMSkgdGhpcy5yaWdodFNlbGVjdGVkID0gdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgndycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgncycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgLSAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdFNlbGVjdGVkID09PSAtMSkgdGhpcy5sZWZ0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgndycpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3MnKVxuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzKHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjLCB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmMpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBrZXkoJ3VwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmdhbWVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkICsgMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGxheWluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gKHRoaXMucmlnaHRTZWxlY3RlZCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmlnaHRTZWxlY3RlZCA9PT0gLTEpIHRoaXMucmlnaHRTZWxlY3RlZCA9IHRoaXMuY2hhcmFjdGVycy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ2Rvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkIC0gMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdFNlbGVjdGVkID09PSAtMSkgdGhpcy5sZWZ0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1BsYXlpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnY2hhckNoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0U2VsZWN0ZWQ6IHRoaXMucmlnaHRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFNlbGVjdGVkOiB0aGlzLmxlZnRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgnZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZ2FtZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmdMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2xlZnRSZWFkeScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQbGF5aW5nUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgncmlnaHRSZWFkeScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cblxuXG5cbn0iLCJpbXBvcnQga2V5IGZyb20gJy4uL3V0aWxzL2tleW1hc3Rlcic7XG5pbXBvcnQgQ2hhcmFjdGVyU2VsZWN0IGZyb20gJy4vY2hhcmFjdGVyX3NlbGVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IHtcbiAgICBjb25zdHJ1Y3RvciAoZGltZW5zaW9ucywgc3RhcnRHYW1lLCBzdGFydE9ubGluZUdhbWUpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSA9IHN0YXJ0R2FtZVxuICAgICAgICB0aGlzLnN0YXJ0T25saW5lR2FtZSA9IHN0YXJ0T25saW5lR2FtZVxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gMFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXCJTdGFydCBHYW1lXCIsIFwiT25saW5lXCJdXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0ID0gbmV3IENoYXJhY3RlclNlbGVjdCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2V0dXBLZXlIYW5kbGVycygpXG4gICAgfVxuXG4gICAgc2VsZWN0ZWRDaGFyYWN0ZXJzIChsZWZ0U3JjLCByaWdodFNyYywgZ2FtZUlkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlclNlbGVjdC5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5vbmxpbmVNb2RlID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnN0IG15U2lkZSA9IHRoaXMuY2hhcmFjdGVyU2VsZWN0LmlzUGxheWluZ0xlZnQgPyBcIkxFRlRcIiA6IFwiUklHSFRcIlxuICAgICAgICAgICAgdGhpcy5zdGFydE9ubGluZUdhbWUobGVmdFNyYywgcmlnaHRTcmMsIG15U2lkZSwgZ2FtZUlkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUobGVmdFNyYywgcmlnaHRTcmMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbiAgICByZW5kZXIgKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJwdXJwbGVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvICgodGhpcy5vcHRpb25zLmxlbmd0aCArIDEpIC0gaSkgfVxuICAgICAgICAgICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBjdHgubWVhc3VyZVRleHQoYCR7b3B0aW9ufWApLndpZHRoXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PT0gaSkgY3R4LmZpbGxSZWN0KChsb2MueCAtIHdpZHRoIC8gMikgLSA1LCBsb2MueSAtIDQwLCB3aWR0aCArIDEwLCA1MCk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke29wdGlvbn1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHtvcHRpb259YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5yZW5kZXIoY3R4KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0dXBLZXlIYW5kbGVycygpIHtcbiAgICAgICAga2V5KCdkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9ICh0aGlzLnNlbGVjdGVkT3B0aW9uICsgMSkgJSB0aGlzLm9wdGlvbnMubGVuZ3RoXG4gICAgICAgIH0pXG4gICAgICAgIGtleSgndXAnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gTWF0aC5hYnMoKHRoaXMuc2VsZWN0ZWRPcHRpb24gLSAxKSAlIHRoaXMub3B0aW9ucy5sZW5ndGgpXG4gICAgICAgIH0pXG4gICAgICAgIGtleSgnZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2Rvd24nKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0Lm9ubGluZU1vZGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgndXAnKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2VudGVyJylcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Qub25saW5lTW9kZSA9IHRydWVcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgncGxheWVyQWRkZWRUb1F1ZXVlJywgc29ja2V0LmlkKVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIFxuXG5cblxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBQTEFZRVJfV0lEVEg6IDQwLFxuICAgIFBMQVlFUl9IRUlHSFQ6IDcwLFxuICAgIE1PVkVTUEVFRDogNSxcbiAgICAvLyBXSVRIX0JBTExfTU9WRVNQRUVEOiAzLjUsXG4gICAgSlVNUF9IRUlHSFQ6IDE0LFxuICAgIC8vIE9OX0ZJUkVfSlVNUF9IRUlHSFQ6IDE2XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbmxpbmVQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMsIHN0YXJ0U2lkZSwgYWN0aXZlKSB7XG4gICAgICAgIHN1cGVyKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpXG4gICAgICAgIFxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gc3RhcnRTaWRlID09PSBcIkxFRlRcIiA/ICh7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfSkgOiAoe1xuICAgICAgICAgICAgeDogdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHRoaXMuY29sb3IgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmVcbiAgICB9XG5cblxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSxcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIDUsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnNwcml0ZS5oZWlnaHQgLyAzKVxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdyaWdodCcpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ2xlZnQnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpVTVBJTkdcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3VwJykgJiYgIXRoaXMuanVtcGluZykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkpVTVBfSEVJR0hUO1xuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3NwYWNlJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZm9ybUFjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JhbGwoKVxuXG4gICAgICAgIHRoaXMuaGFuZGxlR3Jhdml0eSgpXG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG59XG5cbiIsImltcG9ydCBSZWN0IGZyb20gJy4vdXRpbHMvcmVjdCc7XG5pbXBvcnQga2V5IGZyb20gJy4vdXRpbHMva2V5bWFzdGVyJztcblxuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgR1JBVklUWTogMC41LFxuICAgIFBMQVlFUl9XSURUSDogNDAsXG4gICAgUExBWUVSX0hFSUdIVDogNzAsXG4gICAgTU9WRVNQRUVEOiA1LFxuICAgIC8vIFdJVEhfQkFMTF9NT1ZFU1BFRUQ6IDMuNSxcbiAgICBKVU1QX0hFSUdIVDogMTQsXG4gICAgLy8gT05fRklSRV9KVU1QX0hFSUdIVDogMTZcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLlBMQVlFUl9XSURUSCwgaGVpZ2h0OiBDT05TVEFOVFMuUExBWUVSX0hFSUdIVCB9KVxuICAgICAgICB0aGlzLmNvdXJ0ID0gY291cnRcbiAgICAgICAgdGhpcy5iYWxsID0gYmFsbFxuXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHk6IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5kZW5uaXNSb2RtYW5IZWFkID0gbmV3IEltYWdlKCk7XG4gICAgICAgIC8vIHRoaXMuZGVubmlzUm9kbWFuSGVhZC5zcmMgPSAnc3JjL2Fzc2V0cy9kZW5uaXNSb2RtYW5IZWFkLnBuZydcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc3JjID0gc3ByaXRlU3JjXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBjdHguZHJhd0ltYWdlKHRoaXMuZGVubmlzUm9kbWFuSGVhZCwgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy53aWR0aCArICh0aGlzLmRlbm5pc1JvZG1hbkhlYWQud2lkdGggLyAyKSwgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgKyAodGhpcy5kZW5uaXNSb2RtYW5IZWFkLmhlaWdodCAvIDMpKVxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuc3ByaXRlLFxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIDUsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnNwcml0ZS5oZWlnaHQgLyAzKVxuICAgIH1cblxuICAgIG1vdmUgKCkge1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgncmlnaHQnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdsZWZ0JykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBKVU1QSU5HXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCd1cCcpICYmICF0aGlzLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5KVU1QX0hFSUdIVDtcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCcvJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZm9ybUFjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JhbGwoKSBcblxuICAgICAgICB0aGlzLmhhbmRsZUdyYXZpdHkoKVxuXG4gICAgICAgIHRoaXMuY2hlY2tCb3VuZHMoKVxuICAgIH1cblxuICAgIHByZWZvcm1BY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmJhbGwucG9zc2Vzc2lvbiA9PT0gdGhpcykge1xuICAgICAgICAgICAgLy8gSG9sZCB0byBzaG9vdC4gXG4gICAgICAgICAgICB0aGlzLmJhbGwuc2hvb3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCYWxsKCkge1xuICAgICAgICBpZiAoIXRoaXMuYmFsbC5wb3NzZXNzaW9uICYmIHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzKSkge1xuICAgICAgICAgICAgdGhpcy5iYWxsLmNsYWltUG9zc2Vzc2lvbih0aGlzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlR3Jhdml0eSgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMudmVsb2NpdHkueTtcbiAgICAgICAgLy8gR1JBVklUWVxuICAgICAgICAvLyBpZiB0aGUgcG9zIGlzIGdyZWF0ZXIgdGhhbiB0aGUgZmxvb3JcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0IDwgdGhpcy5jb3VydC5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gQ09OU1RBTlRTLkdSQVZJVFk7XG4gICAgICAgICAgICAvLyBlbHNlIHNldCB0aGUgcG9zIHRvIHRoZSBmbG9vclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0JvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA+IHRoaXMuY291cnQud2lkdGggLSB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDBcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBQTEFZRVJfV0lEVEg6IDQwLFxuICAgIFBMQVlFUl9IRUlHSFQ6IDcwLFxuICAgIE1PVkVTUEVFRDogNSxcbiAgICAvLyBXSVRIX0JBTExfTU9WRVNQRUVEOiAzLjUsXG4gICAgSlVNUF9IRUlHSFQ6IDE0LFxuICAgIC8vIE9OX0ZJUkVfSlVNUF9IRUlHSFQ6IDE2XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKSB7XG4gICAgICAgIHN1cGVyKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ2QnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdhJykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBKVU1QSU5HXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCd3JykgJiYgIXRoaXMuanVtcGluZykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkpVTVBfSEVJR0hUO1xuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3EnKSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmb3JtQWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrQmFsbCgpXG5cbiAgICAgICAgdGhpcy5oYW5kbGVHcmF2aXR5KClcblxuICAgICAgICB0aGlzLmNoZWNrQm91bmRzKClcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBsZWZ0SG9vcCwgcmlnaHRIb29wKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5sZWZ0SG9vcCA9IGxlZnRIb29wXG4gICAgICAgIHRoaXMucmlnaHRIb29wID0gcmlnaHRIb29wXG4gICAgICAgIHRoaXMudGltZUxlZnQgPSA2MFxuICAgICAgICB0aGlzLmNvdW50RG93biA9IHNldEludGVydmFsKCgpID0+IHsgXG4gICAgICAgICAgICB0aGlzLnRpbWVMZWZ0LS1cbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVMZWZ0ID09PSAwKSBjbGVhckludGVydmFsKHRoaXMuY291bnREb3duKVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlIChjdHgpIHtcbiAgICAgICAgbGV0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDEwIH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG4gICAgICAgIGN0eC5maWxsVGV4dChgUGxheWVyIDE6ICR7dGhpcy5yaWdodEhvb3Auc2NvcmV9IFBsYXllciAyOiAke3RoaXMubGVmdEhvb3Auc2NvcmV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYFBsYXllciAxOiAke3RoaXMucmlnaHRIb29wLnNjb3JlfSBQbGF5ZXIgMjogJHt0aGlzLmxlZnRIb29wLnNjb3JlfWAsIGxvYy54LCBsb2MueSk7XG5cbiAgICAgICAgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gNSB9XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy50aW1lTGVmdH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHt0aGlzLnRpbWVMZWZ0fWAsIGxvYy54LCBsb2MueSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IocmFkaXVzKSB7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cblxuICAgIGlzT3ZlcmxhcHBpbmdSZWN0KHJlY3QpIHtcbiAgICAgICAgY29uc3QgZGlzdFggPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSByZWN0LnBvc2l0aW9uLnggLSByZWN0LndpZHRoIC8gMik7XG4gICAgICAgIGNvbnN0IGRpc3RZID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gcmVjdC5wb3NpdGlvbi55IC0gcmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgaWYgKGRpc3RYID4gKHJlY3Qud2lkdGggLyAyICsgdGhpcy5yYWRpdXMpKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICBpZiAoZGlzdFkgPiAocmVjdC5oZWlnaHQgLyAyICsgdGhpcy5yYWRpdXMpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICAgIGlmIChkaXN0WCA8PSAocmVjdC53aWR0aCAvIDIpKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIGlmIChkaXN0WSA8PSAocmVjdC5oZWlnaHQgLyAyKSkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgICAgIGNvbnN0IGR4ID0gZGlzdFggLSByZWN0LndpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgZHkgPSBkaXN0WSAtIHJlY3QuaGVpZ2h0IC8gMjtcbiAgICAgICAgcmV0dXJuIChkeCAqIGR4ICsgZHkgKiBkeSA8PSAodGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cykpO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuXG59IiwiLy8gICAgIGtleW1hc3Rlci5qc1xuLy8gICAgIChjKSAyMDExLTIwMTMgVGhvbWFzIEZ1Y2hzXG4vLyAgICAga2V5bWFzdGVyLmpzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG47IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgdmFyIGssXG4gICAgICAgIF9oYW5kbGVycyA9IHt9LFxuICAgICAgICBfbW9kcyA9IHsgMTY6IGZhbHNlLCAxODogZmFsc2UsIDE3OiBmYWxzZSwgOTE6IGZhbHNlIH0sXG4gICAgICAgIF9zY29wZSA9ICdhbGwnLFxuICAgICAgICAvLyBtb2RpZmllciBrZXlzXG4gICAgICAgIF9NT0RJRklFUlMgPSB7XG4gICAgICAgICAgICAn4oenJzogMTYsIHNoaWZ0OiAxNixcbiAgICAgICAgICAgICfijKUnOiAxOCwgYWx0OiAxOCwgb3B0aW9uOiAxOCxcbiAgICAgICAgICAgICfijIMnOiAxNywgY3RybDogMTcsIGNvbnRyb2w6IDE3LFxuICAgICAgICAgICAgJ+KMmCc6IDkxLCBjb21tYW5kOiA5MVxuICAgICAgICB9LFxuICAgICAgICAvLyBzcGVjaWFsIGtleXNcbiAgICAgICAgX01BUCA9IHtcbiAgICAgICAgICAgIGJhY2tzcGFjZTogOCwgdGFiOiA5LCBjbGVhcjogMTIsXG4gICAgICAgICAgICBlbnRlcjogMTMsICdyZXR1cm4nOiAxMyxcbiAgICAgICAgICAgIGVzYzogMjcsIGVzY2FwZTogMjcsIHNwYWNlOiAzMixcbiAgICAgICAgICAgIGxlZnQ6IDM3LCB1cDogMzgsXG4gICAgICAgICAgICByaWdodDogMzksIGRvd246IDQwLFxuICAgICAgICAgICAgZGVsOiA0NiwgJ2RlbGV0ZSc6IDQ2LFxuICAgICAgICAgICAgaG9tZTogMzYsIGVuZDogMzUsXG4gICAgICAgICAgICBwYWdldXA6IDMzLCBwYWdlZG93bjogMzQsXG4gICAgICAgICAgICAnLCc6IDE4OCwgJy4nOiAxOTAsICcvJzogMTkxLFxuICAgICAgICAgICAgJ2AnOiAxOTIsICctJzogMTg5LCAnPSc6IDE4NyxcbiAgICAgICAgICAgICc7JzogMTg2LCAnXFwnJzogMjIyLFxuICAgICAgICAgICAgJ1snOiAyMTksICddJzogMjIxLCAnXFxcXCc6IDIyMFxuICAgICAgICB9LFxuICAgICAgICBjb2RlID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBfTUFQW3hdIHx8IHgudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApO1xuICAgICAgICB9LFxuICAgICAgICBfZG93bktleXMgPSBbXTtcblxuICAgIGZvciAoayA9IDE7IGsgPCAyMDsgaysrKSBfTUFQWydmJyArIGtdID0gMTExICsgaztcblxuICAgIC8vIElFIGRvZXNuJ3Qgc3VwcG9ydCBBcnJheSNpbmRleE9mLCBzbyBoYXZlIGEgc2ltcGxlIHJlcGxhY2VtZW50XG4gICAgZnVuY3Rpb24gaW5kZXgoYXJyYXksIGl0ZW0pIHtcbiAgICAgICAgdmFyIGkgPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpLS0pIGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvLyBmb3IgY29tcGFyaW5nIG1vZHMgYmVmb3JlIHVuYXNzaWdubWVudFxuICAgIGZ1bmN0aW9uIGNvbXBhcmVBcnJheShhMSwgYTIpIHtcbiAgICAgICAgaWYgKGExLmxlbmd0aCAhPSBhMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGExW2ldICE9PSBhMltpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBtb2RpZmllck1hcCA9IHtcbiAgICAgICAgMTY6ICdzaGlmdEtleScsXG4gICAgICAgIDE4OiAnYWx0S2V5JyxcbiAgICAgICAgMTc6ICdjdHJsS2V5JyxcbiAgICAgICAgOTE6ICdtZXRhS2V5J1xuICAgIH07XG4gICAgZnVuY3Rpb24gdXBkYXRlTW9kaWZpZXJLZXkoZXZlbnQpIHtcbiAgICAgICAgZm9yIChrIGluIF9tb2RzKSBfbW9kc1trXSA9IGV2ZW50W21vZGlmaWVyTWFwW2tdXTtcbiAgICB9O1xuXG4gICAgLy8gaGFuZGxlIGtleWRvd24gZXZlbnRcbiAgICBmdW5jdGlvbiBkaXNwYXRjaChldmVudCkge1xuICAgICAgICB2YXIga2V5LCBoYW5kbGVyLCBrLCBpLCBtb2RpZmllcnNNYXRjaCwgc2NvcGU7XG4gICAgICAgIGtleSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgICAgaWYgKGluZGV4KF9kb3duS2V5cywga2V5KSA9PSAtMSkge1xuICAgICAgICAgICAgX2Rvd25LZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGEgbW9kaWZpZXIga2V5LCBzZXQgdGhlIGtleS48bW9kaWZpZXJrZXluYW1lPiBwcm9wZXJ0eSB0byB0cnVlIGFuZCByZXR1cm5cbiAgICAgICAgaWYgKGtleSA9PSA5MyB8fCBrZXkgPT0gMjI0KSBrZXkgPSA5MTsgLy8gcmlnaHQgY29tbWFuZCBvbiB3ZWJraXQsIGNvbW1hbmQgb24gR2Vja29cbiAgICAgICAgaWYgKGtleSBpbiBfbW9kcykge1xuICAgICAgICAgICAgX21vZHNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAvLyAnYXNzaWduS2V5JyBmcm9tIGluc2lkZSB0aGlzIGNsb3N1cmUgaXMgZXhwb3J0ZWQgdG8gd2luZG93LmtleVxuICAgICAgICAgICAgZm9yIChrIGluIF9NT0RJRklFUlMpIGlmIChfTU9ESUZJRVJTW2tdID09IGtleSkgYXNzaWduS2V5W2tdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVNb2RpZmllcktleShldmVudCk7XG5cbiAgICAgICAgLy8gc2VlIGlmIHdlIG5lZWQgdG8gaWdub3JlIHRoZSBrZXlwcmVzcyAoZmlsdGVyKCkgY2FuIGNhbiBiZSBvdmVycmlkZGVuKVxuICAgICAgICAvLyBieSBkZWZhdWx0IGlnbm9yZSBrZXkgcHJlc3NlcyBpZiBhIHNlbGVjdCwgdGV4dGFyZWEsIG9yIGlucHV0IGlzIGZvY3VzZWRcbiAgICAgICAgaWYgKCFhc3NpZ25LZXkuZmlsdGVyLmNhbGwodGhpcywgZXZlbnQpKSByZXR1cm47XG5cbiAgICAgICAgLy8gYWJvcnQgaWYgbm8gcG90ZW50aWFsbHkgbWF0Y2hpbmcgc2hvcnRjdXRzIGZvdW5kXG4gICAgICAgIGlmICghKGtleSBpbiBfaGFuZGxlcnMpKSByZXR1cm47XG5cbiAgICAgICAgc2NvcGUgPSBnZXRTY29wZSgpO1xuXG4gICAgICAgIC8vIGZvciBlYWNoIHBvdGVudGlhbCBzaG9ydGN1dFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX2hhbmRsZXJzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBfaGFuZGxlcnNba2V5XVtpXTtcblxuICAgICAgICAgICAgLy8gc2VlIGlmIGl0J3MgaW4gdGhlIGN1cnJlbnQgc2NvcGVcbiAgICAgICAgICAgIGlmIChoYW5kbGVyLnNjb3BlID09IHNjb3BlIHx8IGhhbmRsZXIuc2NvcGUgPT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBtb2RpZmllcnMgbWF0Y2ggaWYgYW55XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzTWF0Y2ggPSBoYW5kbGVyLm1vZHMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgaW4gX21vZHMpXG4gICAgICAgICAgICAgICAgICAgIGlmICgoIV9tb2RzW2tdICYmIGluZGV4KGhhbmRsZXIubW9kcywgK2spID4gLTEpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoX21vZHNba10gJiYgaW5kZXgoaGFuZGxlci5tb2RzLCAraykgPT0gLTEpKSBtb2RpZmllcnNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIGNhbGwgdGhlIGhhbmRsZXIgYW5kIHN0b3AgdGhlIGV2ZW50IGlmIG5lY2Nlc3NhcnlcbiAgICAgICAgICAgICAgICBpZiAoKGhhbmRsZXIubW9kcy5sZW5ndGggPT0gMCAmJiAhX21vZHNbMTZdICYmICFfbW9kc1sxOF0gJiYgIV9tb2RzWzE3XSAmJiAhX21vZHNbOTFdKSB8fCBtb2RpZmllcnNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlci5tZXRob2QoZXZlbnQsIGhhbmRsZXIpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY2FuY2VsQnViYmxlKSBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHVuc2V0IG1vZGlmaWVyIGtleXMgb24ga2V5dXBcbiAgICBmdW5jdGlvbiBjbGVhck1vZGlmaWVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXkgPSBldmVudC5rZXlDb2RlLCBrLFxuICAgICAgICAgICAgaSA9IGluZGV4KF9kb3duS2V5cywga2V5KTtcblxuICAgICAgICAvLyByZW1vdmUga2V5IGZyb20gX2Rvd25LZXlzXG4gICAgICAgIGlmIChpID49IDApIHtcbiAgICAgICAgICAgIF9kb3duS2V5cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IDkzIHx8IGtleSA9PSAyMjQpIGtleSA9IDkxO1xuICAgICAgICBpZiAoa2V5IGluIF9tb2RzKSB7XG4gICAgICAgICAgICBfbW9kc1trZXldID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgaWYgKF9NT0RJRklFUlNba10gPT0ga2V5KSBhc3NpZ25LZXlba10gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNldE1vZGlmaWVycygpIHtcbiAgICAgICAgZm9yIChrIGluIF9tb2RzKSBfbW9kc1trXSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgYXNzaWduS2V5W2tdID0gZmFsc2U7XG4gICAgfTtcblxuICAgIC8vIHBhcnNlIGFuZCBhc3NpZ24gc2hvcnRjdXRcbiAgICBmdW5jdGlvbiBhc3NpZ25LZXkoa2V5LCBzY29wZSwgbWV0aG9kKSB7XG4gICAgICAgIHZhciBrZXlzLCBtb2RzO1xuICAgICAgICBrZXlzID0gZ2V0S2V5cyhrZXkpO1xuICAgICAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9IHNjb3BlO1xuICAgICAgICAgICAgc2NvcGUgPSAnYWxsJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBlYWNoIHNob3J0Y3V0XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gc2V0IG1vZGlmaWVyIGtleXMgaWYgYW55XG4gICAgICAgICAgICBtb2RzID0gW107XG4gICAgICAgICAgICBrZXkgPSBrZXlzW2ldLnNwbGl0KCcrJyk7XG4gICAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBtb2RzID0gZ2V0TW9kcyhrZXkpO1xuICAgICAgICAgICAgICAgIGtleSA9IFtrZXlba2V5Lmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnZlcnQgdG8ga2V5Y29kZSBhbmQuLi5cbiAgICAgICAgICAgIGtleSA9IGtleVswXVxuICAgICAgICAgICAga2V5ID0gY29kZShrZXkpO1xuICAgICAgICAgICAgLy8gLi4uc3RvcmUgaGFuZGxlclxuICAgICAgICAgICAgaWYgKCEoa2V5IGluIF9oYW5kbGVycykpIF9oYW5kbGVyc1trZXldID0gW107XG4gICAgICAgICAgICBfaGFuZGxlcnNba2V5XS5wdXNoKHsgc2hvcnRjdXQ6IGtleXNbaV0sIHNjb3BlOiBzY29wZSwgbWV0aG9kOiBtZXRob2QsIGtleToga2V5c1tpXSwgbW9kczogbW9kcyB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB1bmJpbmQgYWxsIGhhbmRsZXJzIGZvciBnaXZlbiBrZXkgaW4gY3VycmVudCBzY29wZVxuICAgIGZ1bmN0aW9uIHVuYmluZEtleShrZXksIHNjb3BlKSB7XG4gICAgICAgIHZhciBtdWx0aXBsZUtleXMsIGtleXMsXG4gICAgICAgICAgICBtb2RzID0gW10sXG4gICAgICAgICAgICBpLCBqLCBvYmo7XG5cbiAgICAgICAgbXVsdGlwbGVLZXlzID0gZ2V0S2V5cyhrZXkpO1xuXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBtdWx0aXBsZUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGtleXMgPSBtdWx0aXBsZUtleXNbal0uc3BsaXQoJysnKTtcblxuICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIG1vZHMgPSBnZXRNb2RzKGtleXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXkgPSBrZXlzW2tleXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBrZXkgPSBjb2RlKGtleSk7XG5cbiAgICAgICAgICAgIGlmIChzY29wZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBnZXRTY29wZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFfaGFuZGxlcnNba2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBfaGFuZGxlcnNba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG9iaiA9IF9oYW5kbGVyc1trZXldW2ldO1xuICAgICAgICAgICAgICAgIC8vIG9ubHkgY2xlYXIgaGFuZGxlcnMgaWYgY29ycmVjdCBzY29wZSBhbmQgbW9kcyBtYXRjaFxuICAgICAgICAgICAgICAgIGlmIChvYmouc2NvcGUgPT09IHNjb3BlICYmIGNvbXBhcmVBcnJheShvYmoubW9kcywgbW9kcykpIHtcbiAgICAgICAgICAgICAgICAgICAgX2hhbmRsZXJzW2tleV1baV0gPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBrZXkgd2l0aCBjb2RlICdrZXlDb2RlJyBpcyBjdXJyZW50bHkgZG93blxuICAgIC8vIENvbnZlcnRzIHN0cmluZ3MgaW50byBrZXkgY29kZXMuXG4gICAgZnVuY3Rpb24gaXNQcmVzc2VkKGtleUNvZGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoa2V5Q29kZSkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGtleUNvZGUgPSBjb2RlKGtleUNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleChfZG93bktleXMsIGtleUNvZGUpICE9IC0xO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByZXNzZWRLZXlDb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIF9kb3duS2V5cy5zbGljZSgwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSAoZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQpLnRhZ05hbWU7XG4gICAgICAgIC8vIGlnbm9yZSBrZXlwcmVzc2VkIGluIGFueSBlbGVtZW50cyB0aGF0IHN1cHBvcnQga2V5Ym9hcmQgZGF0YSBpbnB1dFxuICAgICAgICByZXR1cm4gISh0YWdOYW1lID09ICdJTlBVVCcgfHwgdGFnTmFtZSA9PSAnU0VMRUNUJyB8fCB0YWdOYW1lID09ICdURVhUQVJFQScpO1xuICAgIH1cblxuICAgIC8vIGluaXRpYWxpemUga2V5Ljxtb2RpZmllcj4gdG8gZmFsc2VcbiAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgYXNzaWduS2V5W2tdID0gZmFsc2U7XG5cbiAgICAvLyBzZXQgY3VycmVudCBzY29wZSAoZGVmYXVsdCAnYWxsJylcbiAgICBmdW5jdGlvbiBzZXRTY29wZShzY29wZSkgeyBfc2NvcGUgPSBzY29wZSB8fCAnYWxsJyB9O1xuICAgIGZ1bmN0aW9uIGdldFNjb3BlKCkgeyByZXR1cm4gX3Njb3BlIHx8ICdhbGwnIH07XG5cbiAgICAvLyBkZWxldGUgYWxsIGhhbmRsZXJzIGZvciBhIGdpdmVuIHNjb3BlXG4gICAgZnVuY3Rpb24gZGVsZXRlU2NvcGUoc2NvcGUpIHtcbiAgICAgICAgdmFyIGtleSwgaGFuZGxlcnMsIGk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gX2hhbmRsZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGVycyA9IF9oYW5kbGVyc1trZXldO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0uc2NvcGUgPT09IHNjb3BlKSBoYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYWJzdHJhY3Qga2V5IGxvZ2ljIGZvciBhc3NpZ24gYW5kIHVuYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0S2V5cyhrZXkpIHtcbiAgICAgICAgdmFyIGtleXM7XG4gICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICBrZXlzID0ga2V5LnNwbGl0KCcsJyk7XG4gICAgICAgIGlmICgoa2V5c1trZXlzLmxlbmd0aCAtIDFdKSA9PSAnJykge1xuICAgICAgICAgICAga2V5c1trZXlzLmxlbmd0aCAtIDJdICs9ICcsJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG5cbiAgICAvLyBhYnN0cmFjdCBtb2RzIGxvZ2ljIGZvciBhc3NpZ24gYW5kIHVuYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0TW9kcyhrZXkpIHtcbiAgICAgICAgdmFyIG1vZHMgPSBrZXkuc2xpY2UoMCwga2V5Lmxlbmd0aCAtIDEpO1xuICAgICAgICBmb3IgKHZhciBtaSA9IDA7IG1pIDwgbW9kcy5sZW5ndGg7IG1pKyspXG4gICAgICAgICAgICBtb2RzW21pXSA9IF9NT0RJRklFUlNbbW9kc1ttaV1dO1xuICAgICAgICByZXR1cm4gbW9kcztcbiAgICB9XG5cbiAgICAvLyBjcm9zcy1icm93c2VyIGV2ZW50c1xuICAgIGZ1bmN0aW9uIGFkZEV2ZW50KG9iamVjdCwgZXZlbnQsIG1ldGhvZCkge1xuICAgICAgICBpZiAob2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbWV0aG9kLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgaWYgKG9iamVjdC5hdHRhY2hFdmVudClcbiAgICAgICAgICAgIG9iamVjdC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZ1bmN0aW9uICgpIHsgbWV0aG9kKHdpbmRvdy5ldmVudCkgfSk7XG4gICAgfTtcblxuICAgIC8vIHNldCB0aGUgaGFuZGxlcnMgZ2xvYmFsbHkgb24gZG9jdW1lbnRcbiAgICBhZGRFdmVudChkb2N1bWVudCwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHsgZGlzcGF0Y2goZXZlbnQpIH0pOyAvLyBQYXNzaW5nIF9zY29wZSB0byBhIGNhbGxiYWNrIHRvIGVuc3VyZSBpdCByZW1haW5zIHRoZSBzYW1lIGJ5IGV4ZWN1dGlvbi4gRml4ZXMgIzQ4XG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsICdrZXl1cCcsIGNsZWFyTW9kaWZpZXIpO1xuXG4gICAgLy8gcmVzZXQgbW9kaWZpZXJzIHRvIGZhbHNlIHdoZW5ldmVyIHRoZSB3aW5kb3cgaXMgKHJlKWZvY3VzZWQuXG4gICAgYWRkRXZlbnQod2luZG93LCAnZm9jdXMnLCByZXNldE1vZGlmaWVycyk7XG5cbiAgICAvLyBzdG9yZSBwcmV2aW91c2x5IGRlZmluZWQga2V5XG4gICAgdmFyIHByZXZpb3VzS2V5ID0gd2luZG93LmtleTtcblxuICAgIC8vIHJlc3RvcmUgcHJldmlvdXNseSBkZWZpbmVkIGtleSBhbmQgcmV0dXJuIHJlZmVyZW5jZSB0byBvdXIga2V5IG9iamVjdFxuICAgIGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgICAgIHZhciBrID0gd2luZG93LmtleTtcbiAgICAgICAgd2luZG93LmtleSA9IHByZXZpb3VzS2V5O1xuICAgICAgICByZXR1cm4gaztcbiAgICB9XG5cbiAgICAvLyBzZXQgd2luZG93LmtleSBhbmQgd2luZG93LmtleS5zZXQvZ2V0L2RlbGV0ZVNjb3BlLCBhbmQgdGhlIGRlZmF1bHQgZmlsdGVyXG4gICAgd2luZG93LmtleSA9IGFzc2lnbktleTtcbiAgICB3aW5kb3cua2V5LnNldFNjb3BlID0gc2V0U2NvcGU7XG4gICAgd2luZG93LmtleS5nZXRTY29wZSA9IGdldFNjb3BlO1xuICAgIHdpbmRvdy5rZXkuZGVsZXRlU2NvcGUgPSBkZWxldGVTY29wZTtcbiAgICB3aW5kb3cua2V5LmZpbHRlciA9IGZpbHRlcjtcbiAgICB3aW5kb3cua2V5LmlzUHJlc3NlZCA9IGlzUHJlc3NlZDtcbiAgICB3aW5kb3cua2V5LmdldFByZXNzZWRLZXlDb2RlcyA9IGdldFByZXNzZWRLZXlDb2RlcztcbiAgICB3aW5kb3cua2V5Lm5vQ29uZmxpY3QgPSBub0NvbmZsaWN0O1xuICAgIHdpbmRvdy5rZXkudW5iaW5kID0gdW5iaW5kS2V5O1xuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSBtb2R1bGUuZXhwb3J0cyA9IGFzc2lnbktleTtcblxufSkodGhpcyk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICB0aGlzLndpZHRoID0gc2l6ZS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcbiAgICB9XG5cbiAgICBpc092ZXJsYXBwaW5nT3RoZXJSZWN0KHJlY3RDbGFzcykge1xuICAgICAgICBjb25zdCBteUJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKClcbiAgICAgICAgY29uc3QgcmVjdCA9IHJlY3RDbGFzcy5nZXRCb3VuZHMoKVxuICAgICAgICBpZiAobXlCb3VuZHMubGVmdCA+IHJlY3QucmlnaHQgfHwgbXlCb3VuZHMucmlnaHQgPCByZWN0LmxlZnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXlCb3VuZHMudG9wID4gcmVjdC5ib3R0b20gfHwgbXlCb3VuZHMuYm90dG9tIDwgcmVjdC50b3ApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICByaWdodDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=