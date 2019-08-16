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

                var diff = (this.power - 30) / 100;
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

                var _diff = (this.power - 30) / 10;
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
            _this.leftPlayerId = "";
            _this.rightPlayerId = "";
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
                    });
                    (0, _keymaster2.default)('down', function () {
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
                    });

                    (0, _keymaster2.default)('enter', function () {
                        if (_this2.isPlayingLeft) {
                            socket.emit('leftReady', {
                                gameId: _this2.gameId
                            });
                        } else if (_this2.isPlayingRight) {
                            socket.emit('rightReady', {
                                gameId: _this2.gameId
                            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9jb3VydC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9ob29wLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvbWVudV9zY3JlZW5zL2NoYXJhY3Rlcl9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9tZW51X3NjcmVlbnMvbWFpbl9tZW51LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvb25saW5lX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllcjIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMva2V5bWFzdGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvcmVjdC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIk5CQUphbUdhbWUiLCJDT05TVEFOVFMiLCJSQURJVVMiLCJHUkFWSVRZIiwiQk9VTkNFX1JFVEVOVElPTiIsIkRSSUJCTEVfU1BFRUQiLCJCYWxsIiwiZGltZW5zaW9ucyIsImNvdXJ0IiwibGVmdEhvb3AiLCJyaWdodEhvb3AiLCJnYW1lSWQiLCJiYWxsIiwicG9zaXRpb24iLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwidmVsb2NpdHkiLCJjb2xvciIsInBvc3Nlc3Npb24iLCJub1RvdWNoIiwicG93ZXIiLCJjdHgiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwicmFkaXVzIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsInBsYXllciIsInNvY2tldCIsImVtaXQiLCJmcm9tU29ja2V0IiwiaWQiLCJzaG9vdGluZ1BsYXllciIsImZhY2luZ1JpZ2h0Iiwic2hvb3RpbmdUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbGVhc2VCYWxsIiwic2NvcmVQb3NpdGlvbiIsInNjb3JlSGl0Ym94IiwiaHlwb3QiLCJudW1iZXJPZkZyYW1lcyIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsImRpZmYiLCJhZGp1c3RlZFgiLCJyZW1vdmVQb3NzZXNzaW9uIiwiZmFsbCIsIm1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbiIsImNoZWNrQm91bmRzIiwianVtcGluZyIsIkNpcmNsZSIsIkNPVVJUX0ZMT09SIiwiQ09VUlRfV0lEVEgiLCJDb3VydCIsImZpbGxSZWN0IiwiUmVjdCIsImdldENvbnRleHQiLCJtYWluTWVudSIsIk1haW5NZW51Iiwic3RhcnRHYW1lIiwiYmluZCIsInN0YXJ0T25saW5lR2FtZSIsInBsYXlpbmdHYW1lIiwicmVuZGVyTWVudSIsInNldHVwS2V5SGFuZGxlcnMiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsZWZ0U3ByaXRlIiwicmlnaHRTcHJpdGUiLCJyZXN0YXJ0IiwibXlTaWRlIiwib25saW5lR2FtZUlkIiwicnVuT25saW5lR2FtZSIsIkhvb3AiLCJzY29yZWJvYXJkIiwiU2NvcmVib2FyZCIsIlBsYXllciIsInBsYXllcjIiLCJQbGF5ZXIyIiwiYW5pbWF0ZSIsImdhbWVPdmVyIiwiZGlzcGxheVdpbm5lciIsIm15UGxheWVyIiwiT25saW5lUGxheWVyIiwib3RoZXJQbGF5ZXIiLCJvbiIsImRhdGEiLCJzaG93TWVudSIsInJ1bk9ubGluZSIsIm90aGVyUGxheWVyRmFjaW5nIiwib3RoZXJQbGF5ZXJKdW1waW5nIiwidGltZUxlZnQiLCJ0ZXh0Iiwic2NvcmUiLCJsb2MiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZVRleHQiLCJIT09QX1lfTVVMVElQTElFUiIsIkhPT1BfSEVJR0hUIiwiSE9PUF9XSURUSCIsIkhPT1BfWF9ESVNUQU5DRSIsIkJBQ0tCT0FSRF9XSURUSCIsIkJBQ0tCT0FSRF9IRUlHSFQiLCJob29wU2lkZSIsImJhY2tib2FyZCIsIkJhY2tib2FyZCIsIlNjb3JlSGl0Ym94IiwianVzdFNjb3JlZCIsImNoZWNrQmFsbENvbGxpc2lvbiIsImlzT3ZlcmxhcHBpbmdSZWN0IiwiaG9vcCIsIkNoYXJhY3RlclNlbGVjdCIsInNlbGVjdGVkQ2hhcmFjdGVycyIsImxlZnRTZWxlY3RlZCIsInJpZ2h0U2VsZWN0ZWQiLCJjaGFyYWN0ZXJzIiwibmFtZSIsInNyYyIsImxlZnRDaGFyIiwiSW1hZ2UiLCJyaWdodENoYXIiLCJsZWZ0UmVhZHkiLCJyaWdodFJlYWR5IiwibGVmdFBsYXllcklkIiwicmlnaHRQbGF5ZXJJZCIsImlzUGxheWluZ0xlZnQiLCJpc1BsYXlpbmdSaWdodCIsImtleSIsInVuYmluZCIsImxlZnRTaWRlQ2hhciIsIm9ubGluZU1vZGUiLCJkcmF3SW1hZ2UiLCJyaWdodFNpZGVDaGFyIiwibGVuZ3RoIiwic2VsZWN0ZWRPcHRpb24iLCJvcHRpb25zIiwiY2hhcmFjdGVyU2VsZWN0Iiwic2VsZWN0aW5nQ2hhcmFjdGVycyIsImxlZnRTcmMiLCJyaWdodFNyYyIsImZvckVhY2giLCJvcHRpb24iLCJpIiwibWVhc3VyZVRleHQiLCJhYnMiLCJzcHJpdGVTcmMiLCJzdGFydFNpZGUiLCJhY3RpdmUiLCJzcHJpdGUiLCJQTEFZRVJfV0lEVEgiLCJQTEFZRVJfSEVJR0hUIiwiTU9WRVNQRUVEIiwiSlVNUF9IRUlHSFQiLCJpc1ByZXNzZWQiLCJwcmVmb3JtQWN0aW9uIiwiY2hlY2tCYWxsIiwiaGFuZGxlR3Jhdml0eSIsInNob290IiwiY2xhaW1Qb3NzZXNzaW9uIiwiY291bnREb3duIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicmVjdCIsImRpc3RYIiwiZGlzdFkiLCJkeCIsImR5IiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiZ2xvYmFsIiwiayIsIl9oYW5kbGVycyIsIl9tb2RzIiwiX3Njb3BlIiwiX01PRElGSUVSUyIsInNoaWZ0IiwiYWx0IiwiY3RybCIsImNvbnRyb2wiLCJjb21tYW5kIiwiX01BUCIsImJhY2tzcGFjZSIsInRhYiIsImNsZWFyIiwiZW50ZXIiLCJlc2MiLCJlc2NhcGUiLCJzcGFjZSIsInVwIiwiZG93biIsImRlbCIsImhvbWUiLCJlbmQiLCJwYWdldXAiLCJwYWdlZG93biIsImNvZGUiLCJ0b1VwcGVyQ2FzZSIsImNoYXJDb2RlQXQiLCJfZG93bktleXMiLCJpbmRleCIsImFycmF5IiwiaXRlbSIsImNvbXBhcmVBcnJheSIsImExIiwiYTIiLCJtb2RpZmllck1hcCIsInVwZGF0ZU1vZGlmaWVyS2V5IiwiZXZlbnQiLCJkaXNwYXRjaCIsImhhbmRsZXIiLCJtb2RpZmllcnNNYXRjaCIsInNjb3BlIiwia2V5Q29kZSIsInB1c2giLCJhc3NpZ25LZXkiLCJmaWx0ZXIiLCJjYWxsIiwiZ2V0U2NvcGUiLCJtb2RzIiwibWV0aG9kIiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsInN0b3BQcm9wYWdhdGlvbiIsImNhbmNlbEJ1YmJsZSIsImNsZWFyTW9kaWZpZXIiLCJzcGxpY2UiLCJyZXNldE1vZGlmaWVycyIsImtleXMiLCJnZXRLZXlzIiwidW5kZWZpbmVkIiwic3BsaXQiLCJnZXRNb2RzIiwic2hvcnRjdXQiLCJ1bmJpbmRLZXkiLCJtdWx0aXBsZUtleXMiLCJqIiwib2JqIiwiZ2V0UHJlc3NlZEtleUNvZGVzIiwic2xpY2UiLCJ0YWdOYW1lIiwidGFyZ2V0Iiwic3JjRWxlbWVudCIsInNldFNjb3BlIiwiZGVsZXRlU2NvcGUiLCJoYW5kbGVycyIsInJlcGxhY2UiLCJtaSIsImFkZEV2ZW50Iiwib2JqZWN0IiwiYXR0YWNoRXZlbnQiLCJ3aW5kb3ciLCJwcmV2aW91c0tleSIsIm5vQ29uZmxpY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwic2l6ZSIsInJlY3RDbGFzcyIsIm15Qm91bmRzIiwiZ2V0Qm91bmRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7OztBQUVBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxRQUFNQyxTQUFTRixTQUFTRyxjQUFULENBQXdCLGNBQXhCLENBQWY7QUFDQSxRQUFJQyxjQUFKLENBQWVGLE1BQWY7QUFDSCxDQUhELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1HLFlBQVk7QUFDZEMsWUFBUSxFQURNO0FBRWRDLGFBQVMsR0FGSztBQUdkQyxzQkFBa0IsR0FISjtBQUlkQyxtQkFBZTtBQUpELENBQWxCOztJQU9xQkMsSTs7O0FBQ2pCLGtCQUFZQyxVQUFaLEVBQXdCQyxLQUF4QixFQUErQkMsUUFBL0IsRUFBeUNDLFNBQXpDLEVBQW9EQyxNQUFwRCxFQUE0RDtBQUFBOztBQUFBLGdIQUNsRFYsVUFBVUMsTUFEd0M7O0FBRXhELGNBQUtNLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0UsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxjQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGNBQUtELFFBQUwsQ0FBY0csSUFBZDtBQUNBLGNBQUtGLFNBQUwsQ0FBZUUsSUFBZjs7QUFFQSxjQUFLRCxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsY0FBS0UsUUFBTCxHQUFnQjtBQUNaQyxlQUFHLE1BQUtOLEtBQUwsQ0FBV08sS0FBWCxHQUFtQixDQURWO0FBRVpDLGVBQUcsTUFBS1QsVUFBTCxDQUFnQlUsTUFBaEIsR0FBeUI7QUFGaEIsU0FBaEI7QUFJQSxjQUFLQyxRQUFMLEdBQWdCO0FBQ1pKLGVBQUcsQ0FEUztBQUVaRSxlQUFHO0FBRlMsU0FBaEI7QUFJQSxjQUFLRyxLQUFMLEdBQWEsU0FBYjtBQUNBLGNBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxjQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLGNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBdEJ3RDtBQXVCM0Q7Ozs7Z0NBRU9DLEcsRUFBSztBQUNULGlCQUFLQyxJQUFMO0FBQ0FELGdCQUFJRSxTQUFKO0FBQ0FGLGdCQUFJRyxHQUFKLENBQ0ksS0FBS2IsUUFBTCxDQUFjQyxDQURsQixFQUVJLEtBQUtELFFBQUwsQ0FBY0csQ0FGbEIsRUFHSSxLQUFLVyxNQUhULEVBSUksQ0FKSixFQUtJQyxLQUFLQyxFQUFMLEdBQVUsQ0FMZDtBQU1BTixnQkFBSU8sU0FBSixHQUFnQixLQUFLWCxLQUFyQjtBQUNBSSxnQkFBSVEsSUFBSjtBQUNBUixnQkFBSVMsU0FBSjtBQUNIOzs7d0NBRWVDLE0sRUFBUTtBQUNwQixnQkFBSSxDQUFDLEtBQUtaLE9BQUwsQ0FBYVksT0FBT2QsS0FBcEIsQ0FBTCxFQUFpQztBQUM3QixxQkFBS0MsVUFBTCxHQUFrQmEsTUFBbEI7QUFDQUMsdUJBQU9DLElBQVAsQ0FBWSxtQkFBWixFQUFpQztBQUM3QnhCLDRCQUFRLEtBQUtBLE1BRGdCO0FBRTdCeUIsZ0NBQVlGLE9BQU9HO0FBRlUsaUJBQWpDO0FBSUg7QUFDSjs7O2dDQUdRO0FBQUE7O0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBLGlCQUFLZixLQUFMLElBQWMsQ0FBZDs7QUFFQSxnQkFBTWdCLGlCQUFpQixLQUFLbEIsVUFBNUI7QUFDQSxpQkFBS1AsUUFBTCxDQUFjQyxDQUFkLEdBQWtCd0IsZUFBZUMsV0FBZixHQUNiRCxlQUFlekIsUUFBZixDQUF3QkMsQ0FBeEIsR0FBNEJ3QixlQUFldkIsS0FBM0MsR0FBbUQsS0FBS1ksTUFEM0MsR0FFYlcsZUFBZXpCLFFBQWYsQ0FBd0JDLENBQXhCLEdBQTRCLEtBQUthLE1BRnRDO0FBR0EsaUJBQUtkLFFBQUwsQ0FBY0csQ0FBZCxHQUFrQnNCLGVBQWV6QixRQUFmLENBQXdCRyxDQUExQzs7QUFFQSxnQkFBSSxLQUFLd0IsZUFBTCxJQUF3QixLQUFLbEIsS0FBTCxHQUFhLEVBQXpDLEVBQTZDO0FBQ3pDbUIsNkJBQWEsS0FBS0QsZUFBbEI7QUFDSDtBQUNELGdCQUFJLEtBQUtsQixLQUFMLEdBQWEsRUFBakIsRUFBcUI7QUFDakIscUJBQUtrQixlQUFMLEdBQXVCRSxXQUFXLFlBQU07QUFDcEMsMkJBQUtDLFdBQUw7QUFDSCxpQkFGc0IsRUFFcEIsRUFGb0IsQ0FBdkI7QUFHSDtBQUVKOzs7c0NBRWM7QUFBQTs7QUFDWCxnQkFBTUwsaUJBQWlCLEtBQUtsQixVQUE1Qjs7QUFFQSxnQkFBTXdCLGdCQUFnQk4sZUFBZUMsV0FBZixHQUNsQjtBQUNJekIsbUJBQUcsS0FBS0osU0FBTCxDQUFlbUMsV0FBZixDQUEyQmhDLFFBQTNCLENBQW9DQyxDQUFwQyxHQUF5QyxLQUFLSixTQUFMLENBQWVtQyxXQUFmLENBQTJCOUIsS0FBM0IsR0FBbUMsQ0FEbkY7QUFFSUMsbUJBQUcsS0FBS04sU0FBTCxDQUFlbUMsV0FBZixDQUEyQmhDLFFBQTNCLENBQW9DRztBQUYzQyxhQURrQixHQU1sQjtBQUNJRixtQkFBRyxLQUFLTCxRQUFMLENBQWNvQyxXQUFkLENBQTBCaEMsUUFBMUIsQ0FBbUNDLENBQW5DLEdBQXdDLEtBQUtKLFNBQUwsQ0FBZW1DLFdBQWYsQ0FBMkI5QixLQUEzQixHQUFtQyxDQURsRjtBQUVJQyxtQkFBRyxLQUFLUCxRQUFMLENBQWNvQyxXQUFkLENBQTBCaEMsUUFBMUIsQ0FBbUNHO0FBRjFDLGFBTko7O0FBWUE7QUFDQSxnQkFBSSxNQUFNWSxLQUFLa0IsS0FBTCxDQUFXLEtBQUtqQyxRQUFMLENBQWNDLENBQWQsR0FBa0I4QixjQUFjOUIsQ0FBM0MsRUFBOEMsS0FBS0QsUUFBTCxDQUFjRyxDQUFkLEdBQWtCNEIsY0FBYzVCLENBQTlFLENBQVYsRUFBNEY7QUFDeEYsb0JBQU0rQixpQkFBaUIsRUFBdkI7QUFDQSxvQkFBTUMsWUFBWSxDQUFDSixjQUFjOUIsQ0FBZCxHQUFrQixLQUFLRCxRQUFMLENBQWNDLENBQWpDLElBQXNDaUMsY0FBeEQ7QUFDQSxvQkFBTUUsWUFBWSxDQUFFLENBQUNMLGNBQWM1QixDQUFmLEdBQW1CLEtBQUtILFFBQUwsQ0FBY0csQ0FBbEMsR0FBdUMsTUFBTSxDQUFDZixVQUFVRSxPQUFqQixJQUE0QjRDLGlCQUFpQkEsY0FBN0MsQ0FBeEMsSUFBd0dBLGNBQTFIOztBQUVBLG9CQUFNRyxPQUFPLENBQUMsS0FBSzVCLEtBQUwsR0FBYSxFQUFkLElBQW9CLEdBQWpDO0FBQ0Esb0JBQU02QixZQUFZYixlQUFlQyxXQUFmLEdBQ2RTLFlBQVlFLElBREUsR0FHZEYsWUFBWUUsSUFIaEI7QUFLQSxxQkFBS2hDLFFBQUwsR0FBZ0I7QUFDWkosdUJBQUdxQyxTQURTO0FBRVpuQyx1QkFBR2lDO0FBRlMsaUJBQWhCO0FBSUgsYUFmRCxNQWVPO0FBQ0g7QUFDQSxvQkFBTUYsa0JBQWlCLEVBQXZCOztBQUVBLG9CQUFNQyxhQUFZLENBQUNKLGNBQWM5QixDQUFkLEdBQWtCLEtBQUtELFFBQUwsQ0FBY0MsQ0FBakMsSUFBc0NpQyxlQUF4RDtBQUNBLG9CQUFNRSxhQUFZLENBQUUsQ0FBQ0wsY0FBYzVCLENBQWYsR0FBbUIsS0FBS0gsUUFBTCxDQUFjRyxDQUFsQyxHQUF1QyxNQUFNLENBQUNmLFVBQVVFLE9BQWpCLElBQTRCNEMsa0JBQWlCQSxlQUE3QyxDQUF4QyxJQUF3R0EsZUFBMUg7O0FBRUEsb0JBQU1HLFFBQU8sQ0FBQyxLQUFLNUIsS0FBTCxHQUFhLEVBQWQsSUFBb0IsRUFBakM7QUFDQSxvQkFBTTZCLGFBQVliLGVBQWVDLFdBQWYsR0FDZFMsYUFBWUUsS0FERSxHQUdkRixhQUFZRSxLQUhoQjtBQUtBLHFCQUFLaEMsUUFBTCxHQUFnQjtBQUNaSix1QkFBR3FDLFVBRFM7QUFFWm5DLHVCQUFHaUM7QUFGUyxpQkFBaEI7QUFLSDs7QUFFRCxpQkFBSzVCLE9BQUwsQ0FBYWlCLGVBQWVuQixLQUE1QixJQUFxQyxJQUFyQztBQUNBdUIsdUJBQVcsWUFBTTtBQUNiLHVCQUFLckIsT0FBTCxDQUFhaUIsZUFBZW5CLEtBQTVCLElBQXFDLEtBQXJDO0FBQ0gsYUFGRCxFQUVHLEdBRkg7O0FBSUEsaUJBQUtHLEtBQUwsR0FBYSxDQUFiO0FBQ0EsaUJBQUs4QixnQkFBTDtBQUVIOzs7MkNBRWtCO0FBQ2YsaUJBQUtoQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0FjLG1CQUFPQyxJQUFQLENBQVksc0JBQVosRUFBb0M7QUFDaEN4Qix3QkFBUSxLQUFLQSxNQURtQjtBQUVoQ3lCLDRCQUFZRixPQUFPRyxFQUZhO0FBR2hDbkIsMEJBQVUsS0FBS0EsUUFIaUI7QUFJaENMLDBCQUFVLEtBQUtBO0FBSmlCLGFBQXBDO0FBTUg7OzsrQkFFTTs7QUFFSCxnQkFBSSxDQUFDLEtBQUtPLFVBQVYsRUFBc0I7QUFDbEIscUJBQUtpQyxJQUFMO0FBRUgsYUFIRCxNQUdPO0FBQ0gscUJBQUtDLHdCQUFMO0FBQ0g7O0FBRUQsaUJBQUtDLFdBQUw7QUFDSDs7O21EQUUwQjtBQUN2QixpQkFBSzFDLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLTSxVQUFMLENBQWdCbUIsV0FBaEIsR0FDYixLQUFLbkIsVUFBTCxDQUFnQlAsUUFBaEIsQ0FBeUJDLENBQXpCLEdBQTZCLEtBQUtNLFVBQUwsQ0FBZ0JMLEtBRGhDLEdBQzBDLEtBQUtLLFVBQUwsQ0FBZ0JQLFFBQWhCLENBQXlCQyxDQURyRjs7QUFHQSxnQkFBSSxLQUFLTSxVQUFMLENBQWdCb0MsT0FBcEIsRUFBNkI7QUFDekI7QUFDQSxxQkFBSzNDLFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixLQUFLSSxVQUFMLENBQWdCUCxRQUFoQixDQUF5QkcsQ0FBekIsR0FBNkIsS0FBS0ksVUFBTCxDQUFnQkgsTUFBaEIsR0FBeUIsQ0FBeEU7QUFFSCxhQUpELE1BSU87QUFDSDtBQUNBLG9CQUFJLEtBQUtKLFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixLQUFLSSxVQUFMLENBQWdCUCxRQUFoQixDQUF5QkcsQ0FBekIsR0FBNkIsS0FBS0ksVUFBTCxDQUFnQkgsTUFBaEIsR0FBeUIsQ0FBNUUsRUFBK0U7QUFDM0UseUJBQUtDLFFBQUwsQ0FBY0YsQ0FBZCxHQUFrQixDQUFDZixVQUFVSSxhQUE3QjtBQUNILGlCQUZELE1BRU8sSUFBSSxLQUFLUSxRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS0ksVUFBTCxDQUFnQlAsUUFBaEIsQ0FBeUJHLENBQXpCLEdBQTZCLEtBQUtJLFVBQUwsQ0FBZ0JILE1BQTdDLEdBQXNELEtBQUtVLE1BQWpGLEVBQXlGO0FBQzVGLHlCQUFLVCxRQUFMLENBQWNGLENBQWQsR0FBa0JmLFVBQVVJLGFBQTVCO0FBQ0g7QUFDRCxxQkFBS1EsUUFBTCxDQUFjRyxDQUFkLElBQW1CLEtBQUtFLFFBQUwsQ0FBY0YsQ0FBakM7QUFDSDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7OzsrQkFHTztBQUNKLGlCQUFLSCxRQUFMLENBQWNHLENBQWQsSUFBbUIsS0FBS0UsUUFBTCxDQUFjRixDQUFqQztBQUNBLGlCQUFLSCxRQUFMLENBQWNDLENBQWQsSUFBbUIsS0FBS0ksUUFBTCxDQUFjSixDQUFqQztBQUNBO0FBQ0E7QUFDQSxnQkFBSSxLQUFLRCxRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS1csTUFBdkIsR0FBZ0MsS0FBS25CLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQkcsQ0FBeEQsRUFBMkQ7QUFDdkQscUJBQUtFLFFBQUwsQ0FBY0YsQ0FBZCxJQUFtQmYsVUFBVUUsT0FBN0I7QUFDQTtBQUNILGFBSEQsTUFHTyxJQUFJLEtBQUtlLFFBQUwsQ0FBY0YsQ0FBZCxHQUFrQixDQUF0QixFQUF5QjtBQUM1QixxQkFBS0UsUUFBTCxDQUFjRixDQUFkLEdBQWtCLENBQUMsS0FBS0UsUUFBTCxDQUFjRixDQUFmLEdBQW1CZixVQUFVRyxnQkFBL0M7QUFDSDtBQUNKOzs7c0NBR2E7QUFDVixnQkFBSSxLQUFLUyxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS04sS0FBTCxDQUFXTyxLQUFYLEdBQW1CLEtBQUtZLE1BQTlDLEVBQXNEO0FBQ2xELHFCQUFLZCxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS04sS0FBTCxDQUFXTyxLQUFYLEdBQW1CLEtBQUtZLE1BQTFDO0FBQ0EscUJBQUtULFFBQUwsQ0FBY0osQ0FBZCxHQUFrQixDQUFDLEtBQUtJLFFBQUwsQ0FBY0osQ0FBakM7QUFDSCxhQUhELE1BR08sSUFBSSxLQUFLRCxRQUFMLENBQWNDLENBQWQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFDNUIscUJBQUtELFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixDQUFsQjtBQUNBLHFCQUFLSSxRQUFMLENBQWNKLENBQWQsR0FBa0IsQ0FBQyxLQUFLSSxRQUFMLENBQWNKLENBQWpDO0FBQ0g7QUFDSjs7OztFQWhSNkIyQyxnQjs7a0JBQWJuRCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RyQjs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUwsWUFBWTtBQUNkeUQsaUJBQWEsSUFEQztBQUVkQyxpQkFBYTtBQUZDLENBQWxCOztJQUtxQkMsSzs7O0FBQ2pCLG1CQUFZckQsVUFBWixFQUF3QjtBQUFBOztBQUFBLGtIQUNkLEVBQUVRLE9BQU9SLFdBQVdRLEtBQXBCLEVBQTJCRSxRQUFRaEIsVUFBVTBELFdBQTdDLEVBRGM7O0FBRXBCLGNBQUs5QyxRQUFMLEdBQWdCO0FBQ1pDLGVBQUcsQ0FEUztBQUVaRSxlQUFHVCxXQUFXVSxNQUFYLEdBQW9CaEIsVUFBVXlEO0FBRnJCLFNBQWhCO0FBSUEsY0FBS3ZDLEtBQUwsR0FBYSxPQUFiO0FBTm9CO0FBT3ZCOzs7O2dDQUVPSSxHLEVBQUs7QUFDVEEsZ0JBQUlPLFNBQUosR0FBZ0IsS0FBS1gsS0FBckI7QUFDQUksZ0JBQUlzQyxRQUFKLENBQWEsS0FBS2hELFFBQUwsQ0FBY0MsQ0FBM0IsRUFBOEIsS0FBS0QsUUFBTCxDQUFjRyxDQUE1QyxFQUErQyxLQUFLRCxLQUFwRCxFQUEyRCxLQUFLRSxNQUFoRTtBQUNIOzs7O0VBYjhCNkMsYzs7a0JBQWRGLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCNUQsVTtBQUNqQix3QkFBWUYsTUFBWixFQUFvQjtBQUFBOztBQUNoQixhQUFLeUIsR0FBTCxHQUFXekIsT0FBT2lFLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWDtBQUNBLGFBQUt4RCxVQUFMLEdBQWtCLEVBQUVRLE9BQU9qQixPQUFPaUIsS0FBaEIsRUFBdUJFLFFBQVFuQixPQUFPbUIsTUFBdEMsRUFBbEI7QUFDQSxhQUFLK0MsUUFBTCxHQUFnQixJQUFJQyxtQkFBSixDQUFhLEtBQUsxRCxVQUFsQixFQUE4QixLQUFLMkQsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQTlCLEVBQXlELEtBQUtDLGVBQUwsQ0FBcUJELElBQXJCLENBQTBCLElBQTFCLENBQXpELENBQWhCO0FBQ0EsYUFBS0UsV0FBTCxHQUFtQixLQUFuQjtBQUNBLGFBQUtDLFVBQUw7QUFDSDs7OzttQ0FFVTtBQUNQLGlCQUFLTixRQUFMLENBQWNPLGdCQUFkO0FBQ0EsaUJBQUtELFVBQUwsQ0FBZ0IsS0FBSy9DLEdBQXJCO0FBQ0g7OztxQ0FFYTtBQUNWLGlCQUFLeUMsUUFBTCxDQUFjUSxNQUFkLENBQXFCLEtBQUtqRCxHQUExQjtBQUNBLGdCQUFJLENBQUMsS0FBSzhDLFdBQVYsRUFBdUJJLHNCQUFzQixLQUFLSCxVQUFMLENBQWdCSCxJQUFoQixDQUFxQixJQUFyQixDQUF0QjtBQUMxQjs7O2tDQUVVTyxVLEVBQVlDLFcsRUFBYTtBQUNoQyxpQkFBS04sV0FBTCxHQUFtQixJQUFuQjtBQUNBLGlCQUFLTyxPQUFMLENBQWFGLFVBQWIsRUFBeUJDLFdBQXpCO0FBQ0g7Ozt3Q0FFZUQsVSxFQUFZQyxXLEVBQWFFLE0sRUFBUWxFLE0sRUFBUTtBQUNyRCxpQkFBSzBELFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxpQkFBS1MsWUFBTCxHQUFvQm5FLE1BQXBCO0FBQ0EsaUJBQUtvRSxhQUFMLENBQW1CTCxVQUFuQixFQUErQkMsV0FBL0IsRUFBNENFLE1BQTVDO0FBQ0g7OztnQ0FFT0gsVSxFQUFZQyxXLEVBQWE7QUFDN0I7QUFDQSxpQkFBS25FLEtBQUwsR0FBYSxJQUFJb0QsZUFBSixDQUFVLEtBQUtyRCxVQUFmLENBQWI7QUFDQSxpQkFBS0UsUUFBTCxHQUFnQixJQUFJdUUsY0FBSixDQUFTLEtBQUt6RSxVQUFkLEVBQTBCLE1BQTFCLENBQWhCO0FBQ0EsaUJBQUtHLFNBQUwsR0FBaUIsSUFBSXNFLGNBQUosQ0FBUyxLQUFLekUsVUFBZCxFQUEwQixPQUExQixDQUFqQjtBQUNBLGlCQUFLSyxJQUFMLEdBQVksSUFBSU4sY0FBSixDQUFTLEtBQUtDLFVBQWQsRUFBMEIsS0FBS0MsS0FBL0IsRUFBc0MsS0FBS0MsUUFBM0MsRUFBcUQsS0FBS0MsU0FBMUQsQ0FBWjs7QUFFQSxpQkFBS3VFLFVBQUwsR0FBa0IsSUFBSUMsb0JBQUosQ0FBZSxLQUFLM0UsVUFBcEIsRUFBZ0MsS0FBS0UsUUFBckMsRUFBK0MsS0FBS0MsU0FBcEQsQ0FBbEI7O0FBRUEsaUJBQUt1QixNQUFMLEdBQWMsSUFBSWtELGdCQUFKLENBQVcsS0FBSzNFLEtBQWhCLEVBQXVCLEtBQUtJLElBQTVCLEVBQWtDK0QsV0FBbEMsQ0FBZDtBQUNBLGlCQUFLUyxPQUFMLEdBQWUsSUFBSUMsZ0JBQUosQ0FBWSxLQUFLN0UsS0FBakIsRUFBd0IsS0FBS0ksSUFBN0IsRUFBbUM4RCxVQUFuQyxDQUFmOztBQUVBLGlCQUFLWSxPQUFMO0FBQ0g7OztrQ0FFUztBQUNOO0FBQ0EsaUJBQUsvRCxHQUFMLENBQVNPLFNBQVQsR0FBcUIsUUFBckI7QUFDQSxpQkFBS1AsR0FBTCxDQUFTc0MsUUFBVCxDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixLQUFLdEQsVUFBTCxDQUFnQlEsS0FBeEMsRUFBK0MsS0FBS1IsVUFBTCxDQUFnQlUsTUFBL0Q7O0FBRUE7QUFDQSxpQkFBS2dCLE1BQUwsQ0FBWXFELE9BQVosQ0FBb0IsS0FBSy9ELEdBQXpCO0FBQ0EsaUJBQUs2RCxPQUFMLENBQWFFLE9BQWIsQ0FBcUIsS0FBSy9ELEdBQTFCO0FBQ0EsaUJBQUtYLElBQUwsQ0FBVTBFLE9BQVYsQ0FBa0IsS0FBSy9ELEdBQXZCO0FBQ0EsaUJBQUtkLFFBQUwsQ0FBYzZFLE9BQWQsQ0FBc0IsS0FBSy9ELEdBQTNCO0FBQ0EsaUJBQUtiLFNBQUwsQ0FBZTRFLE9BQWYsQ0FBdUIsS0FBSy9ELEdBQTVCOztBQUVBLGlCQUFLMEQsVUFBTCxDQUFnQkssT0FBaEIsQ0FBd0IsS0FBSy9ELEdBQTdCO0FBQ0EsaUJBQUtmLEtBQUwsQ0FBVzhFLE9BQVgsQ0FBbUIsS0FBSy9ELEdBQXhCOztBQUVBLGdCQUFJLEtBQUtnRSxRQUFMLEVBQUosRUFBcUI7QUFDakIscUJBQUtDLGFBQUw7QUFDSDtBQUNEO0FBQ0EsZ0JBQUksS0FBS25CLFdBQVQsRUFBc0JJLHNCQUFzQixLQUFLYSxPQUFMLENBQWFuQixJQUFiLENBQWtCLElBQWxCLENBQXRCO0FBQ3pCOzs7c0NBRWFPLFUsRUFBWUMsVyxFQUFhRSxNLEVBQVE7QUFBQTs7QUFDM0MsaUJBQUtyRSxLQUFMLEdBQWEsSUFBSW9ELGVBQUosQ0FBVSxLQUFLckQsVUFBZixDQUFiO0FBQ0EsaUJBQUtFLFFBQUwsR0FBZ0IsSUFBSXVFLGNBQUosQ0FBUyxLQUFLekUsVUFBZCxFQUEwQixNQUExQixDQUFoQjtBQUNBLGlCQUFLRyxTQUFMLEdBQWlCLElBQUlzRSxjQUFKLENBQVMsS0FBS3pFLFVBQWQsRUFBMEIsT0FBMUIsQ0FBakI7QUFDQSxpQkFBS0ssSUFBTCxHQUFZLElBQUlOLGNBQUosQ0FBUyxLQUFLQyxVQUFkLEVBQTBCLEtBQUtDLEtBQS9CLEVBQXNDLEtBQUtDLFFBQTNDLEVBQXFELEtBQUtDLFNBQTFELEVBQXFFLEtBQUtvRSxZQUExRSxDQUFaOztBQUVBLGlCQUFLRyxVQUFMLEdBQWtCLElBQUlDLG9CQUFKLENBQWUsS0FBSzNFLFVBQXBCLEVBQWdDLEtBQUtFLFFBQXJDLEVBQStDLEtBQUtDLFNBQXBELENBQWxCOztBQUVBLGdCQUFJbUUsV0FBVyxNQUFmLEVBQXVCO0FBQ25CLHFCQUFLWSxRQUFMLEdBQWdCLElBQUlDLHVCQUFKLENBQWlCLEtBQUtsRixLQUF0QixFQUE2QixLQUFLSSxJQUFsQyxFQUF3QzhELFVBQXhDLEVBQW9ELE1BQXBELEVBQTRELElBQTVELENBQWhCO0FBQ0EscUJBQUtpQixXQUFMLEdBQW1CLElBQUlELHVCQUFKLENBQWlCLEtBQUtsRixLQUF0QixFQUE2QixLQUFLSSxJQUFsQyxFQUF3QytELFdBQXhDLEVBQXFELE9BQXJELEVBQThELEtBQTlELENBQW5CO0FBQ0gsYUFIRCxNQUdPO0FBQ0gscUJBQUtnQixXQUFMLEdBQW1CLElBQUlELHVCQUFKLENBQWlCLEtBQUtsRixLQUF0QixFQUE2QixLQUFLSSxJQUFsQyxFQUF3QzhELFVBQXhDLEVBQW9ELE1BQXBELEVBQTRELEtBQTVELENBQW5CO0FBQ0EscUJBQUtlLFFBQUwsR0FBZ0IsSUFBSUMsdUJBQUosQ0FBaUIsS0FBS2xGLEtBQXRCLEVBQTZCLEtBQUtJLElBQWxDLEVBQXdDK0QsV0FBeEMsRUFBcUQsT0FBckQsRUFBOEQsSUFBOUQsQ0FBaEI7QUFDSDs7QUFFRHpDLG1CQUFPMEQsRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFVBQUNDLElBQUQsRUFBVTtBQUNsQyxzQkFBS0YsV0FBTCxDQUFpQjlFLFFBQWpCLEdBQTRCO0FBQ3hCQyx1QkFBRytFLEtBQUssR0FBTCxDQURxQjtBQUV4QjdFLHVCQUFHNkUsS0FBSyxHQUFMO0FBRnFCLGlCQUE1QjtBQUlBLHNCQUFLRixXQUFMLENBQWlCcEQsV0FBakIsR0FBZ0NzRCxLQUFLLG1CQUFMLENBQWhDO0FBQ0Esc0JBQUtGLFdBQUwsQ0FBaUJuQyxPQUFqQixHQUEyQnFDLEtBQUssb0JBQUwsQ0FBM0I7QUFDSCxhQVBEO0FBUUEzRCxtQkFBTzBELEVBQVAsQ0FBVSxxQkFBVixFQUFpQyxnQkFBUTtBQUNyQyxzQkFBS2hGLElBQUwsQ0FBVVEsVUFBVixHQUF1QixNQUFLdUUsV0FBNUI7QUFDSCxhQUZEO0FBR0F6RCxtQkFBTzBELEVBQVAsQ0FBVSx1QkFBVixFQUFtQyxnQkFBUTtBQUN2QyxzQkFBS2hGLElBQUwsQ0FBVVEsVUFBVixHQUF1QixJQUF2QjtBQUNBLHNCQUFLUixJQUFMLENBQVVDLFFBQVYsR0FBcUJnRixLQUFLLFVBQUwsQ0FBckI7QUFDQSxzQkFBS2pGLElBQUwsQ0FBVU0sUUFBVixHQUFxQjJFLEtBQUssVUFBTCxDQUFyQjtBQUNILGFBSkQ7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EzRCxtQkFBTzBELEVBQVAsQ0FBVSx1QkFBVixFQUFtQyxZQUFNO0FBQ3JDLHNCQUFLdkIsV0FBTCxHQUFtQixLQUFuQjtBQUNBLHNCQUFLUyxZQUFMLEdBQW9CLElBQXBCO0FBQ0FwQywyQkFBVyxZQUFNO0FBQ2IsMEJBQUtvRCxRQUFMO0FBQ0gsaUJBRkQsRUFFRyxJQUZIO0FBR0gsYUFORDs7QUFRQSxpQkFBS0MsU0FBTDtBQUNIOzs7b0NBRVk7QUFDVDtBQUNBLGlCQUFLeEUsR0FBTCxDQUFTTyxTQUFULEdBQXFCLFFBQXJCO0FBQ0EsaUJBQUtQLEdBQUwsQ0FBU3NDLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsS0FBS3RELFVBQUwsQ0FBZ0JRLEtBQXhDLEVBQStDLEtBQUtSLFVBQUwsQ0FBZ0JVLE1BQS9EOztBQUVBO0FBQ0EsaUJBQUswRSxXQUFMLENBQWlCTCxPQUFqQixDQUF5QixLQUFLL0QsR0FBOUI7QUFDQSxpQkFBS2tFLFFBQUwsQ0FBY0gsT0FBZCxDQUFzQixLQUFLL0QsR0FBM0I7O0FBRUEsaUJBQUtYLElBQUwsQ0FBVTBFLE9BQVYsQ0FBa0IsS0FBSy9ELEdBQXZCOztBQUVBLGlCQUFLZCxRQUFMLENBQWM2RSxPQUFkLENBQXNCLEtBQUsvRCxHQUEzQjtBQUNBLGlCQUFLYixTQUFMLENBQWU0RSxPQUFmLENBQXVCLEtBQUsvRCxHQUE1Qjs7QUFFQSxpQkFBSzBELFVBQUwsQ0FBZ0JLLE9BQWhCLENBQXdCLEtBQUsvRCxHQUE3QjtBQUNBLGlCQUFLZixLQUFMLENBQVc4RSxPQUFYLENBQW1CLEtBQUsvRCxHQUF4Qjs7QUFFQSxnQkFBSSxLQUFLZ0UsUUFBTCxFQUFKLEVBQXFCO0FBQ2pCLHFCQUFLQyxhQUFMO0FBQ0g7O0FBR0R0RCxtQkFBT0MsSUFBUCxDQUFZLGFBQVosRUFBMkI7QUFDdkJ4Qix3QkFBUSxLQUFLbUUsWUFEVTtBQUV2QjFDLDRCQUFZRixPQUFPRyxFQUZJO0FBR3ZCdkIsbUJBQUcsS0FBSzJFLFFBQUwsQ0FBYzVFLFFBQWQsQ0FBdUJDLENBSEg7QUFJdkJFLG1CQUFHLEtBQUt5RSxRQUFMLENBQWM1RSxRQUFkLENBQXVCRyxDQUpIO0FBS3ZCZ0YsbUNBQW1CLEtBQUtQLFFBQUwsQ0FBY2xELFdBTFY7QUFNdkIwRCxvQ0FBb0IsS0FBS1IsUUFBTCxDQUFjakM7QUFOWCxhQUEzQjtBQVFBdEIsbUJBQU9DLElBQVAsQ0FBWSxlQUFaLEVBQTZCO0FBQ3pCeEIsd0JBQVEsS0FBS21FLFlBRFk7QUFFekIxQyw0QkFBWUYsT0FBT0csRUFGTTtBQUd6QnZCLG1CQUFHLEtBQUtGLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsQ0FIRztBQUl6QkUsbUJBQUcsS0FBS0osSUFBTCxDQUFVQyxRQUFWLENBQW1CRztBQUpHLGFBQTdCO0FBTUE7QUFDQSxnQkFBSSxLQUFLcUQsV0FBVCxFQUFzQkksc0JBQXNCLEtBQUtzQixTQUFMLENBQWU1QixJQUFmLENBQW9CLElBQXBCLENBQXRCO0FBQ3pCOzs7bUNBSVc7QUFDUixtQkFBTyxLQUFLYyxVQUFMLENBQWdCaUIsUUFBaEIsS0FBNkIsQ0FBcEM7QUFDSDs7O3dDQUVnQjtBQUFBOztBQUNiLGdCQUFJQyxhQUFKO0FBQ0EsZ0JBQUksS0FBS3pGLFNBQUwsQ0FBZTBGLEtBQWYsR0FBdUIsS0FBSzNGLFFBQUwsQ0FBYzJGLEtBQXpDLEVBQWdEO0FBQzVDRCx1QkFBTyxlQUFQO0FBQ0gsYUFGRCxNQUVPLElBQUksS0FBSzFGLFFBQUwsQ0FBYzJGLEtBQWQsR0FBc0IsS0FBSzFGLFNBQUwsQ0FBZTBGLEtBQXpDLEVBQWdEO0FBQ25ERCx1QkFBTyxlQUFQO0FBQ0gsYUFGTSxNQUVBO0FBQ0hBLHVCQUFPLFVBQVA7QUFDSDtBQUNELGdCQUFJRSxNQUFNLEVBQUV2RixHQUFHLEtBQUtQLFVBQUwsQ0FBZ0JRLEtBQWhCLEdBQXdCLENBQTdCLEVBQWdDQyxHQUFHLEtBQUtULFVBQUwsQ0FBZ0JVLE1BQWhCLEdBQXlCLENBQTVELEVBQVY7QUFDQSxpQkFBS00sR0FBTCxDQUFTK0UsSUFBVCxHQUFnQixpQkFBaEI7QUFDQSxpQkFBSy9FLEdBQUwsQ0FBU08sU0FBVCxHQUFxQixPQUFyQjtBQUNBLGlCQUFLUCxHQUFMLENBQVNnRixTQUFULEdBQXFCLFFBQXJCO0FBQ0EsaUJBQUtoRixHQUFMLENBQVNpRixRQUFULE1BQXFCTCxJQUFyQixFQUE2QkUsSUFBSXZGLENBQWpDLEVBQW9DdUYsSUFBSXJGLENBQXhDO0FBQ0EsaUJBQUtPLEdBQUwsQ0FBU2tGLFdBQVQsR0FBdUIsT0FBdkI7QUFDQSxpQkFBS2xGLEdBQUwsQ0FBU21GLFNBQVQsR0FBcUIsQ0FBckI7QUFDQSxpQkFBS25GLEdBQUwsQ0FBU29GLFVBQVQsTUFBdUJSLElBQXZCLEVBQStCRSxJQUFJdkYsQ0FBbkMsRUFBc0N1RixJQUFJckYsQ0FBMUM7O0FBRUEsaUJBQUtxRCxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsaUJBQUtTLFlBQUwsR0FBb0IsSUFBcEI7QUFDQXBDLHVCQUFXLFlBQU07QUFDYix1QkFBS29ELFFBQUw7QUFDSCxhQUZELEVBRUcsSUFGSDtBQUdIOzs7Ozs7a0JBeExnQjlGLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHJCOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQyxZQUFZO0FBQ2QyRyx1QkFBbUIsR0FETDtBQUVkQyxpQkFBYSxFQUZDO0FBR2RDLGdCQUFZLEVBSEU7QUFJZEMscUJBQWlCLEVBSkg7QUFLZEMscUJBQWlCLEVBTEg7QUFNZEMsc0JBQWtCO0FBTkosQ0FBbEI7O0lBVXFCakMsSTs7O0FBQ2pCLGtCQUFZekUsVUFBWixFQUF3QjJHLFFBQXhCLEVBQWtDdEcsSUFBbEMsRUFBd0M7QUFBQTs7QUFBQSxnSEFDOUIsRUFBRUcsT0FBT2QsVUFBVTZHLFVBQW5CLEVBQStCN0YsUUFBUWhCLFVBQVU0RyxXQUFqRCxFQUQ4Qjs7QUFFcEMsY0FBS2pHLElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtMLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsWUFBTU8sSUFBSW9HLGFBQWEsTUFBYixHQUNGLElBQUlqSCxVQUFVOEcsZUFEWixHQUdGeEcsV0FBV1EsS0FBWCxHQUFtQmQsVUFBVThHLGVBQTdCLEdBQStDLE1BQUtoRyxLQUg1RDtBQUtBLGNBQUtGLFFBQUwsR0FBZ0I7QUFDWkMsZUFBR0EsQ0FEUztBQUVaRSxlQUFHVCxXQUFXVSxNQUFYLEdBQW9CaEIsVUFBVTJHO0FBRnJCLFNBQWhCO0FBSUEsY0FBS08sU0FBTCxHQUFpQixJQUFJQyxTQUFKLFFBQW9CRixRQUFwQixDQUFqQjtBQUNBLGNBQUtyRSxXQUFMLEdBQW1CLElBQUl3RSxXQUFKLFFBQXNCSCxRQUF0QixDQUFuQjtBQUNBLGNBQUsvRixLQUFMLEdBQWEsUUFBYjtBQUNBLGNBQUtpRixLQUFMLEdBQWEsQ0FBYjtBQUNBLGNBQUtrQixVQUFMLEdBQWtCLEtBQWxCO0FBakJvQztBQWtCdkM7Ozs7Z0NBRU8vRixHLEVBQUs7QUFBQTs7QUFDVCxpQkFBS2dHLGtCQUFMO0FBQ0EsaUJBQUtKLFNBQUwsQ0FBZTdCLE9BQWYsQ0FBdUIvRCxHQUF2QjtBQUNBQSxnQkFBSU8sU0FBSixHQUFnQixLQUFLWCxLQUFyQjtBQUNBSSxnQkFBSXNDLFFBQUosQ0FBYSxLQUFLaEQsUUFBTCxDQUFjQyxDQUEzQixFQUE4QixLQUFLRCxRQUFMLENBQWNHLENBQTVDLEVBQStDLEtBQUtELEtBQXBELEVBQTJELEtBQUtFLE1BQWhFO0FBQ0EsaUJBQUs0QixXQUFMLENBQWlCeUMsT0FBakIsQ0FBeUIvRCxHQUF6QjtBQUNBLGdCQUFJLEtBQUtYLElBQUwsQ0FBVTRHLGlCQUFWLENBQTRCLEtBQUszRSxXQUFqQyxDQUFKLEVBQW1EO0FBQy9DLG9CQUFJLENBQUMsS0FBS3lFLFVBQVYsRUFBc0IsS0FBS2xCLEtBQUwsSUFBYyxDQUFkO0FBQ3RCLHFCQUFLa0IsVUFBTCxHQUFrQixJQUFsQjtBQUNBLHFCQUFLbkcsS0FBTCxHQUFhLE9BQWI7QUFDQXVCLDJCQUFXLFlBQU07QUFDYiwyQkFBSzRFLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSwyQkFBS25HLEtBQUwsR0FBYSxRQUFiO0FBQ0gsaUJBSEQsRUFHRyxJQUhIO0FBS0g7QUFDSjs7OzZDQUVxQjtBQUNsQixnQkFBSSxLQUFLUCxJQUFMLENBQVU0RyxpQkFBVixDQUE0QixJQUE1QixLQUFxQyxLQUFLNUcsSUFBTCxDQUFVNEcsaUJBQVYsQ0FBNEIsS0FBS0wsU0FBakMsQ0FBekMsRUFBc0Y7QUFDbEYsb0JBQUksS0FBS3ZHLElBQUwsQ0FBVUMsUUFBVixDQUFtQkcsQ0FBbkIsR0FBdUIsS0FBS0osSUFBTCxDQUFVZSxNQUFqQyxHQUEwQyxLQUFLZCxRQUFMLENBQWNHLENBQTVELEVBQStEO0FBQzNELHdCQUFJLEtBQUtKLElBQUwsQ0FBVU0sUUFBVixDQUFtQkYsQ0FBbkIsR0FBdUIsQ0FBM0IsRUFBOEIsS0FBS0osSUFBTCxDQUFVTSxRQUFWLENBQW1CRixDQUFuQixHQUF1QixDQUFDLEtBQUtKLElBQUwsQ0FBVU0sUUFBVixDQUFtQkYsQ0FBM0M7QUFDakMsaUJBRkQsTUFFTztBQUNILHdCQUFJLEtBQUtKLElBQUwsQ0FBVUMsUUFBVixDQUFtQkcsQ0FBbkIsR0FBdUIsS0FBS0osSUFBTCxDQUFVZSxNQUFqQyxHQUEwQyxLQUFLd0YsU0FBTCxDQUFldEcsUUFBZixDQUF3QkcsQ0FBbEUsSUFBdUUsS0FBS0osSUFBTCxDQUFVTSxRQUFWLENBQW1CRixDQUFuQixHQUF1QixDQUFsRyxFQUFzRztBQUNsRyw2QkFBS0osSUFBTCxDQUFVTSxRQUFWLENBQW1CRixDQUFuQixHQUF1QixDQUFDLEtBQUtKLElBQUwsQ0FBVU0sUUFBVixDQUFtQkYsQ0FBM0M7QUFDSDtBQUNELHlCQUFLSixJQUFMLENBQVVNLFFBQVYsQ0FBbUJKLENBQW5CLEdBQXVCLENBQUMsS0FBS0YsSUFBTCxDQUFVTSxRQUFWLENBQW1CSixDQUEzQztBQUNIO0FBQ0o7QUFDSjs7OztFQWxENkJnRCxjOztrQkFBYmtCLEk7O0lBc0RmcUMsVzs7O0FBQ0YseUJBQVlJLElBQVosRUFBa0JQLFFBQWxCLEVBQTRCO0FBQUE7O0FBQUEsK0hBQ2xCLEVBQUVuRyxPQUFPZCxVQUFVNkcsVUFBVixHQUF1QixFQUFoQyxFQUFvQzdGLFFBQVFoQixVQUFVNEcsV0FBVixHQUF3QixJQUFwRSxFQURrQjs7QUFFeEIsWUFBTS9GLElBQUlvRyxhQUFhLE1BQWIsR0FDTk8sS0FBSzVHLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixFQURaLEdBR04yRyxLQUFLNUcsUUFBTCxDQUFjQyxDQUFkLEdBQWtCMkcsS0FBSzFHLEtBQXZCLEdBQStCLE9BQUtBLEtBQXBDLEdBQTRDLEVBSGhEO0FBS0EsZUFBS0YsUUFBTCxHQUFnQjtBQUNaQyxlQUFHQSxDQURTO0FBRVpFLGVBQUd5RyxLQUFLNUcsUUFBTCxDQUFjRztBQUZMLFNBQWhCO0FBSUEsZUFBS0csS0FBTCxHQUFhLE9BQWI7QUFYd0I7QUFZM0I7Ozs7Z0NBRU9JLEcsRUFBSztBQUNUQSxnQkFBSU8sU0FBSixHQUFnQixLQUFLWCxLQUFyQjtBQUNBSSxnQkFBSXNDLFFBQUosQ0FBYSxLQUFLaEQsUUFBTCxDQUFjQyxDQUEzQixFQUE4QixLQUFLRCxRQUFMLENBQWNHLENBQTVDLEVBQStDLEtBQUtELEtBQXBELEVBQTJELEtBQUtFLE1BQWhFO0FBQ0g7Ozs7RUFsQnFCNkMsYzs7SUFxQnBCc0QsUzs7O0FBQ0YsdUJBQVlLLElBQVosRUFBa0JQLFFBQWxCLEVBQTRCO0FBQUE7O0FBQUEsMkhBQ2xCLEVBQUVuRyxPQUFPZCxVQUFVK0csZUFBbkIsRUFBb0MvRixRQUFRaEIsVUFBVWdILGdCQUF0RCxFQURrQjs7QUFFeEIsWUFBTW5HLElBQUlvRyxhQUFhLE1BQWIsR0FDTk8sS0FBSzVHLFFBQUwsQ0FBY0MsQ0FEUixHQUdOMkcsS0FBSzVHLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQjJHLEtBQUsxRyxLQUF2QixHQUErQixPQUFLQSxLQUh4QztBQUtBLGVBQUtGLFFBQUwsR0FBZ0I7QUFDWkMsZUFBR0EsQ0FEUztBQUVaRSxlQUFHeUcsS0FBSzVHLFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixPQUFLQztBQUZkLFNBQWhCO0FBSUEsZUFBS0UsS0FBTCxHQUFhLE1BQWI7QUFYd0I7QUFZM0I7Ozs7Z0NBRU9JLEcsRUFBSztBQUNUQSxnQkFBSU8sU0FBSixHQUFnQixLQUFLWCxLQUFyQjtBQUNBSSxnQkFBSXNDLFFBQUosQ0FBYSxLQUFLaEQsUUFBTCxDQUFjQyxDQUEzQixFQUE4QixLQUFLRCxRQUFMLENBQWNHLENBQTVDLEVBQStDLEtBQUtELEtBQXBELEVBQTJELEtBQUtFLE1BQWhFO0FBQ0g7Ozs7RUFsQm1CNkMsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RnhCOzs7Ozs7OztJQUVxQjRELGU7QUFDakIsNkJBQVluSCxVQUFaLEVBQXdCb0gsa0JBQXhCLEVBQTRDO0FBQUE7O0FBQUE7O0FBQ3hDLGFBQUtwSCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGFBQUtvSCxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0EsYUFBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLGFBQUtDLGFBQUwsR0FBcUIsQ0FBckI7QUFDQSxhQUFLQyxVQUFMLEdBQWtCLENBQ2QsRUFBRUMsTUFBTSxRQUFSLEVBQWtCQyxLQUFLLDRCQUF2QixFQURjLEVBRWQsRUFBRUQsTUFBTSxPQUFSLEVBQWlCQyxLQUFLLDJCQUF0QixFQUZjLEVBR2QsRUFBRUQsTUFBTSxRQUFSLEVBQWtCQyxLQUFLLDRCQUF2QixFQUhjLEVBSWQsRUFBRUQsTUFBTSxPQUFSLEVBQWlCQyxLQUFLLDJCQUF0QixFQUpjLENBQWxCOztBQU9BLGFBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsS0FBSixFQUFoQjtBQUNBLGFBQUtDLFNBQUwsR0FBaUIsSUFBSUQsS0FBSixFQUFqQjtBQUNBLGFBQUtELFFBQUwsQ0FBY0QsR0FBZCxHQUFvQixLQUFLRixVQUFMLENBQWdCLEtBQUtGLFlBQXJCLEVBQW1DSSxHQUF2RDtBQUNBLGFBQUtHLFNBQUwsQ0FBZUgsR0FBZixHQUFxQixLQUFLRixVQUFMLENBQWdCLEtBQUtELGFBQXJCLEVBQW9DRyxHQUF6RDs7QUFFQSxhQUFLSSxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQixLQUFsQjs7QUFFQW5HLGVBQU8wRCxFQUFQLENBQVUsWUFBVixFQUF3QixnQkFBUTtBQUM1QixrQkFBSzBDLFlBQUwsR0FBb0J6QyxLQUFLLGNBQUwsQ0FBcEI7QUFDQSxrQkFBSzBDLGFBQUwsR0FBcUIxQyxLQUFLLGVBQUwsQ0FBckI7QUFDQSxnQkFBSTNELE9BQU9HLEVBQVAsS0FBYyxNQUFLaUcsWUFBdkIsRUFBcUM7QUFDakMsc0JBQUtFLGFBQUwsR0FBcUIsSUFBckI7QUFDSCxhQUZELE1BRU87QUFDSCxzQkFBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNIO0FBQ0Qsa0JBQUtiLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxrQkFBS0MsYUFBTCxHQUFxQixDQUFyQjtBQUNBLGtCQUFLbEgsTUFBTCxHQUFja0YsS0FBSyxRQUFMLENBQWQ7QUFDSCxTQVhEOztBQWFBM0QsZUFBTzBELEVBQVAsQ0FBVSxzQkFBVixFQUFrQyxnQkFBUTtBQUN0QyxrQkFBS2dDLFlBQUwsR0FBb0IvQixLQUFLLGNBQUwsQ0FBcEI7QUFDQSxrQkFBS2dDLGFBQUwsR0FBcUJoQyxLQUFLLGVBQUwsQ0FBckI7QUFDSCxTQUhEOztBQUtBM0QsZUFBTzBELEVBQVAsQ0FBVSxrQkFBVixFQUE4QixZQUFNO0FBQ2hDLGtCQUFLd0MsU0FBTCxHQUFpQixJQUFqQjtBQUNILFNBRkQ7QUFHQWxHLGVBQU8wRCxFQUFQLENBQVUsbUJBQVYsRUFBK0IsWUFBTTtBQUNqQyxrQkFBS3lDLFVBQUwsR0FBa0IsSUFBbEI7QUFDSCxTQUZEOztBQUlBbkcsZUFBTzBELEVBQVAsQ0FBVSxXQUFWLEVBQXVCLFlBQU07QUFDekI4QyxnQ0FBSUMsTUFBSixDQUFXLE1BQVg7QUFDQUQsZ0NBQUlDLE1BQUosQ0FBVyxJQUFYO0FBQ0FELGdDQUFJQyxNQUFKLENBQVcsR0FBWDtBQUNBRCxnQ0FBSUMsTUFBSixDQUFXLEdBQVg7QUFDQUQsZ0NBQUlDLE1BQUosQ0FBVyxPQUFYO0FBQ0Esa0JBQUtoQixrQkFBTCxDQUF3QixNQUFLRyxVQUFMLENBQWdCLE1BQUtGLFlBQXJCLEVBQW1DSSxHQUEzRCxFQUFnRSxNQUFLRixVQUFMLENBQWdCLE1BQUtELGFBQXJCLEVBQW9DRyxHQUFwRyxFQUF5RyxNQUFLckgsTUFBOUc7QUFDQSxrQkFBSzJILFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxrQkFBS0MsYUFBTCxHQUFxQixFQUFyQjtBQUNBLGtCQUFLWCxZQUFMLEdBQW9CLENBQXBCO0FBQ0Esa0JBQUtDLGFBQUwsR0FBcUIsQ0FBckI7QUFDQSxrQkFBS08sU0FBTCxHQUFpQixLQUFqQjtBQUNBLGtCQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0Esa0JBQUsxSCxNQUFMLEdBQWMsSUFBZDtBQUNILFNBZEQ7QUFlSDs7OzsrQkFFTVksRyxFQUFLOztBQUVSLGlCQUFLMEcsUUFBTCxDQUFjRCxHQUFkLEdBQW9CLEtBQUtGLFVBQUwsQ0FBZ0IsS0FBS0YsWUFBckIsRUFBbUNJLEdBQXZEO0FBQ0EsaUJBQUtHLFNBQUwsQ0FBZUgsR0FBZixHQUFxQixLQUFLRixVQUFMLENBQWdCLEtBQUtELGFBQXJCLEVBQW9DRyxHQUF6RDs7QUFFQXpHLGdCQUFJTyxTQUFKLEdBQWdCLFFBQWhCO0FBQ0FQLGdCQUFJc0MsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsS0FBS3RELFVBQUwsQ0FBZ0JRLEtBQW5DLEVBQTBDLEtBQUtSLFVBQUwsQ0FBZ0JVLE1BQTFEOztBQUVBO0FBQ0EsZ0JBQU0ySCxlQUFlLEtBQUtkLFVBQUwsQ0FBZ0IsS0FBS0YsWUFBckIsQ0FBckI7QUFDQSxnQkFBSXZCLE1BQU0sRUFBRXZGLEdBQUcsS0FBS1AsVUFBTCxDQUFnQlEsS0FBaEIsR0FBd0IsQ0FBN0IsRUFBZ0NDLEdBQUcsS0FBS1QsVUFBTCxDQUFnQlUsTUFBaEIsR0FBeUIsQ0FBNUQsRUFBVjtBQUNBTSxnQkFBSStFLElBQUosR0FBVyxpQkFBWDtBQUNBL0UsZ0JBQUlnRixTQUFKLEdBQWdCLFFBQWhCO0FBQ0FoRixnQkFBSU8sU0FBSixHQUFnQixPQUFoQjs7QUFFQSxnQkFBSSxLQUFLK0csVUFBVCxFQUFxQnRILElBQUlpRixRQUFKLENBQWEsYUFBYixFQUE0QkgsSUFBSXZGLENBQWhDLEVBQW1DdUYsSUFBSXJGLENBQUosR0FBUSxHQUEzQztBQUNyQk8sZ0JBQUkrRSxJQUFKLEdBQVcsaUJBQVg7QUFDQSxnQkFBSSxLQUFLOEIsU0FBVCxFQUFvQjdHLElBQUlpRixRQUFKLENBQWEsT0FBYixFQUFzQkgsSUFBSXZGLENBQTFCLEVBQTZCdUYsSUFBSXJGLENBQUosR0FBUSxFQUFyQztBQUNwQixnQkFBSSxLQUFLc0gsWUFBTCxJQUFxQixLQUFLQyxhQUE5QixFQUE2QztBQUN6Q2hILG9CQUFJaUYsUUFBSixNQUFnQixLQUFLOEIsWUFBckIsRUFBcUNqQyxJQUFJdkYsQ0FBekMsRUFBNEN1RixJQUFJckYsQ0FBSixHQUFRLEVBQXBEO0FBQ0gsYUFGRCxNQUVPLElBQUksS0FBSzZILFVBQVQsRUFBcUI7QUFDeEJ0SCxvQkFBSWlGLFFBQUosTUFBZ0J0RSxPQUFPRyxFQUF2QixFQUE2QmdFLElBQUl2RixDQUFqQyxFQUFvQ3VGLElBQUlyRixDQUFKLEdBQVEsRUFBNUM7QUFDSDs7QUFFRE8sZ0JBQUkrRSxJQUFKLEdBQVcsaUJBQVg7QUFDQS9FLGdCQUFJaUYsUUFBSixNQUFnQm9DLGFBQWFiLElBQTdCLEVBQXFDMUIsSUFBSXZGLENBQXpDLEVBQTRDdUYsSUFBSXJGLENBQWhEO0FBQ0FPLGdCQUFJa0YsV0FBSixHQUFrQixPQUFsQjtBQUNBbEYsZ0JBQUltRixTQUFKLEdBQWdCLENBQWhCO0FBQ0FuRixnQkFBSW9GLFVBQUosTUFBa0JpQyxhQUFhYixJQUEvQixFQUF1QzFCLElBQUl2RixDQUEzQyxFQUE4Q3VGLElBQUlyRixDQUFsRDtBQUNBTyxnQkFBSXVILFNBQUosQ0FBYyxLQUFLYixRQUFuQixFQUNJNUIsSUFBSXZGLENBQUosR0FBUSxLQUFLbUgsUUFBTCxDQUFjbEgsS0FBZCxHQUFzQixDQURsQyxFQUVJc0YsSUFBSXJGLENBRlI7O0FBSUE7QUFDQSxnQkFBTStILGdCQUFnQixLQUFLakIsVUFBTCxDQUFnQixLQUFLRCxhQUFyQixDQUF0QjtBQUNBeEIsa0JBQU0sRUFBRXZGLEdBQUcsS0FBS1AsVUFBTCxDQUFnQlEsS0FBaEIsR0FBd0IsQ0FBeEIsR0FBNEIsQ0FBakMsRUFBb0NDLEdBQUcsS0FBS1QsVUFBTCxDQUFnQlUsTUFBaEIsR0FBeUIsQ0FBaEUsRUFBTjtBQUNBTSxnQkFBSStFLElBQUosR0FBVyxpQkFBWDtBQUNBL0UsZ0JBQUlnRixTQUFKLEdBQWdCLFFBQWhCO0FBQ0FoRixnQkFBSU8sU0FBSixHQUFnQixPQUFoQjs7QUFFQSxnQkFBSSxLQUFLK0csVUFBVCxFQUFxQnRILElBQUlpRixRQUFKLENBQWEsYUFBYixFQUE0QkgsSUFBSXZGLENBQWhDLEVBQW1DdUYsSUFBSXJGLENBQUosR0FBUSxHQUEzQztBQUNyQk8sZ0JBQUkrRSxJQUFKLEdBQVcsaUJBQVg7QUFDQSxnQkFBSSxLQUFLK0IsVUFBVCxFQUFxQjlHLElBQUlpRixRQUFKLENBQWEsT0FBYixFQUFzQkgsSUFBSXZGLENBQTFCLEVBQTZCdUYsSUFBSXJGLENBQUosR0FBUSxFQUFyQztBQUNyQixnQkFBSSxLQUFLc0gsWUFBTCxJQUFxQixLQUFLQyxhQUE5QixFQUE2QztBQUN6Q2hILG9CQUFJaUYsUUFBSixNQUFnQixLQUFLK0IsYUFBckIsRUFBc0NsQyxJQUFJdkYsQ0FBMUMsRUFBNkN1RixJQUFJckYsQ0FBSixHQUFRLEVBQXJEO0FBQ0gsYUFGRCxNQUVPLElBQUksS0FBSzZILFVBQVQsRUFBcUI7QUFDeEJ0SCxvQkFBSWlGLFFBQUosdUJBQW1DSCxJQUFJdkYsQ0FBdkMsRUFBMEN1RixJQUFJckYsQ0FBSixHQUFRLEVBQWxEO0FBQ0g7QUFDRE8sZ0JBQUkrRSxJQUFKLEdBQVcsaUJBQVg7O0FBRUEvRSxnQkFBSWlGLFFBQUosTUFBZ0J1QyxjQUFjaEIsSUFBOUIsRUFBc0MxQixJQUFJdkYsQ0FBMUMsRUFBNkN1RixJQUFJckYsQ0FBakQ7QUFDQU8sZ0JBQUlrRixXQUFKLEdBQWtCLE9BQWxCO0FBQ0FsRixnQkFBSW1GLFNBQUosR0FBZ0IsQ0FBaEI7QUFDQW5GLGdCQUFJb0YsVUFBSixNQUFrQm9DLGNBQWNoQixJQUFoQyxFQUF3QzFCLElBQUl2RixDQUE1QyxFQUErQ3VGLElBQUlyRixDQUFuRDtBQUNBTyxnQkFBSXVILFNBQUosQ0FBYyxLQUFLWCxTQUFuQixFQUNJOUIsSUFBSXZGLENBQUosR0FBUSxLQUFLcUgsU0FBTCxDQUFlcEgsS0FBZixHQUF1QixDQURuQyxFQUVJc0YsSUFBSXJGLENBRlI7QUFJSDs7OzJDQUVrQjtBQUFBOztBQUVmMEIsdUJBQVcsWUFBTTtBQUNiLG9CQUFJLENBQUMsT0FBS21HLFVBQVYsRUFBc0I7QUFDbEIsNkNBQUksTUFBSixFQUFZLFlBQU07QUFDZCwrQkFBS2hCLGFBQUwsR0FBcUIsQ0FBQyxPQUFLQSxhQUFMLEdBQXFCLENBQXRCLElBQTJCLE9BQUtDLFVBQUwsQ0FBZ0JrQixNQUFoRTtBQUNILHFCQUZEO0FBR0EsNkNBQUksSUFBSixFQUFVLFlBQU07QUFDWiwrQkFBS25CLGFBQUwsR0FBc0IsT0FBS0EsYUFBTCxHQUFxQixDQUEzQztBQUNBLDRCQUFJLE9BQUtBLGFBQUwsS0FBdUIsQ0FBQyxDQUE1QixFQUErQixPQUFLQSxhQUFMLEdBQXFCLE9BQUtDLFVBQUwsQ0FBZ0JrQixNQUFoQixHQUF5QixDQUE5QztBQUNsQyxxQkFIRDtBQUlBLDZDQUFJLEdBQUosRUFBUyxZQUFNO0FBQ1gsK0JBQUtwQixZQUFMLEdBQW9CLENBQUMsT0FBS0EsWUFBTCxHQUFvQixDQUFyQixJQUEwQixPQUFLRSxVQUFMLENBQWdCa0IsTUFBOUQ7QUFFSCxxQkFIRDtBQUlBLDZDQUFJLEdBQUosRUFBUyxZQUFNO0FBQ1gsK0JBQUtwQixZQUFMLEdBQW9CLENBQUMsT0FBS0EsWUFBTCxHQUFvQixDQUFyQixJQUEwQixPQUFLRSxVQUFMLENBQWdCa0IsTUFBOUQ7QUFDQSw0QkFBSSxPQUFLcEIsWUFBTCxLQUFzQixDQUFDLENBQTNCLEVBQThCLE9BQUtBLFlBQUwsR0FBb0IsT0FBS0UsVUFBTCxDQUFnQmtCLE1BQWhCLEdBQXlCLENBQTdDO0FBRWpDLHFCQUpEO0FBS0EsNkNBQUksT0FBSixFQUFhLFlBQU07QUFDZk4sNENBQUlDLE1BQUosQ0FBVyxNQUFYO0FBQ0FELDRDQUFJQyxNQUFKLENBQVcsSUFBWDtBQUNBRCw0Q0FBSUMsTUFBSixDQUFXLEdBQVg7QUFDQUQsNENBQUlDLE1BQUosQ0FBVyxHQUFYO0FBQ0FELDRDQUFJQyxNQUFKLENBQVcsT0FBWDtBQUNBLCtCQUFLaEIsa0JBQUwsQ0FBd0IsT0FBS0csVUFBTCxDQUFnQixPQUFLRixZQUFyQixFQUFtQ0ksR0FBM0QsRUFBZ0UsT0FBS0YsVUFBTCxDQUFnQixPQUFLRCxhQUFyQixFQUFvQ0csR0FBcEc7QUFDSCxxQkFQRDtBQVFILGlCQXpCRCxNQXlCTzs7QUFFSCw2Q0FBSSxJQUFKLEVBQVUsWUFBTTtBQUNaLDRCQUFJLE9BQUtRLGFBQVQsRUFBd0I7QUFDcEIsbUNBQUtaLFlBQUwsR0FBb0IsQ0FBQyxPQUFLQSxZQUFMLEdBQW9CLENBQXJCLElBQTBCLE9BQUtFLFVBQUwsQ0FBZ0JrQixNQUE5RDtBQUNBOUcsbUNBQU9DLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQ3ZCMEYsK0NBQWUsT0FBS0EsYUFERztBQUV2QkQsOENBQWMsT0FBS0EsWUFGSTtBQUd2QmpILHdDQUFRLE9BQUtBO0FBSFUsNkJBQTNCO0FBS0gseUJBUEQsTUFPTyxJQUFJLE9BQUs4SCxjQUFULEVBQXlCO0FBQzVCLG1DQUFLWixhQUFMLEdBQXNCLE9BQUtBLGFBQUwsR0FBcUIsQ0FBM0M7QUFDQSxnQ0FBSSxPQUFLQSxhQUFMLEtBQXVCLENBQUMsQ0FBNUIsRUFBK0IsT0FBS0EsYUFBTCxHQUFxQixPQUFLQyxVQUFMLENBQWdCa0IsTUFBaEIsR0FBeUIsQ0FBOUM7QUFDL0I5RyxtQ0FBT0MsSUFBUCxDQUFZLGFBQVosRUFBMkI7QUFDdkIwRiwrQ0FBZSxPQUFLQSxhQURHO0FBRXZCRCw4Q0FBYyxPQUFLQSxZQUZJO0FBR3ZCakgsd0NBQVEsT0FBS0E7QUFIVSw2QkFBM0I7QUFLSDtBQUNKLHFCQWpCRDtBQWtCQSw2Q0FBSSxNQUFKLEVBQVksWUFBTTtBQUNkLDRCQUFJLE9BQUs2SCxhQUFULEVBQXdCO0FBQ3BCLG1DQUFLWixZQUFMLEdBQW9CLENBQUMsT0FBS0EsWUFBTCxHQUFvQixDQUFyQixJQUEwQixPQUFLRSxVQUFMLENBQWdCa0IsTUFBOUQ7QUFDQSxnQ0FBSSxPQUFLcEIsWUFBTCxLQUFzQixDQUFDLENBQTNCLEVBQThCLE9BQUtBLFlBQUwsR0FBb0IsT0FBS0UsVUFBTCxDQUFnQmtCLE1BQWhCLEdBQXlCLENBQTdDO0FBQzlCOUcsbUNBQU9DLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQ3ZCMEYsK0NBQWUsT0FBS0EsYUFERztBQUV2QkQsOENBQWMsT0FBS0EsWUFGSTtBQUd2QmpILHdDQUFRLE9BQUtBO0FBSFUsNkJBQTNCO0FBS0gseUJBUkQsTUFRTyxJQUFJLE9BQUs4SCxjQUFULEVBQXlCO0FBQzVCLG1DQUFLWixhQUFMLEdBQXFCLENBQUMsT0FBS0EsYUFBTCxHQUFxQixDQUF0QixJQUEyQixPQUFLQyxVQUFMLENBQWdCa0IsTUFBaEU7QUFDQTlHLG1DQUFPQyxJQUFQLENBQVksYUFBWixFQUEyQjtBQUN2QjBGLCtDQUFlLE9BQUtBLGFBREc7QUFFdkJELDhDQUFjLE9BQUtBLFlBRkk7QUFHdkJqSCx3Q0FBUSxPQUFLQTtBQUhVLDZCQUEzQjtBQUtIO0FBQ0oscUJBakJEOztBQW1CQSw2Q0FBSSxPQUFKLEVBQWEsWUFBTTtBQUNmLDRCQUFJLE9BQUs2SCxhQUFULEVBQXdCO0FBQ3BCdEcsbUNBQU9DLElBQVAsQ0FBWSxXQUFaLEVBQXlCO0FBQ3JCeEIsd0NBQVEsT0FBS0E7QUFEUSw2QkFBekI7QUFHSCx5QkFKRCxNQUlPLElBQUksT0FBSzhILGNBQVQsRUFBeUI7QUFDNUJ2RyxtQ0FBT0MsSUFBUCxDQUFZLFlBQVosRUFBMEI7QUFDdEJ4Qix3Q0FBUSxPQUFLQTtBQURTLDZCQUExQjtBQUdIO0FBQ0oscUJBVkQ7QUFhSDtBQUNKLGFBL0VELEVBK0VHLEdBL0VIO0FBZ0ZIOzs7Ozs7a0JBN01nQitHLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCekQsUTtBQUNqQixzQkFBYTFELFVBQWIsRUFBeUIyRCxTQUF6QixFQUFvQ0UsZUFBcEMsRUFBcUQ7QUFBQTs7QUFDakQsYUFBSzdELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsYUFBSzJELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsYUFBS0UsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxhQUFLNkUsY0FBTCxHQUFzQixDQUF0QjtBQUNBLGFBQUtDLE9BQUwsR0FBZSxDQUFDLFlBQUQsRUFBZSxRQUFmLENBQWY7QUFDQSxhQUFLQyxlQUFMLEdBQXVCLElBQUl6QiwwQkFBSixDQUFvQixLQUFLbkgsVUFBekIsRUFBcUMsS0FBS29ILGtCQUFMLENBQXdCeEQsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBckMsQ0FBdkI7QUFDQSxhQUFLaUYsbUJBQUwsR0FBMkIsS0FBM0I7QUFDQSxhQUFLN0UsZ0JBQUw7QUFDSDs7OzsyQ0FFbUI4RSxPLEVBQVNDLFEsRUFBVTNJLE0sRUFBUTtBQUMzQyxpQkFBS3lJLG1CQUFMLEdBQTJCLEtBQTNCO0FBQ0EsZ0JBQUksS0FBS0QsZUFBTCxDQUFxQk4sVUFBekIsRUFBcUM7QUFDakMsb0JBQU1oRSxTQUFTLEtBQUtzRSxlQUFMLENBQXFCWCxhQUFyQixHQUFxQyxNQUFyQyxHQUE4QyxPQUE3RDtBQUNBLHFCQUFLcEUsZUFBTCxDQUFxQmlGLE9BQXJCLEVBQThCQyxRQUE5QixFQUF3Q3pFLE1BQXhDLEVBQWdEbEUsTUFBaEQ7QUFDSCxhQUhELE1BR087QUFDSCxxQkFBS3VELFNBQUwsQ0FBZW1GLE9BQWYsRUFBd0JDLFFBQXhCO0FBQ0g7QUFDSjs7OytCQUdPL0gsRyxFQUFLO0FBQUE7O0FBQ1RBLGdCQUFJTyxTQUFKLEdBQWdCLFFBQWhCO0FBQ0FQLGdCQUFJc0MsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsS0FBS3RELFVBQUwsQ0FBZ0JRLEtBQW5DLEVBQTBDLEtBQUtSLFVBQUwsQ0FBZ0JVLE1BQTFEOztBQUVBLGdCQUFJLENBQUMsS0FBS21JLG1CQUFWLEVBQStCO0FBQzNCLHFCQUFLRixPQUFMLENBQWFLLE9BQWIsQ0FBcUIsVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDaEMsd0JBQU1wRCxNQUFNLEVBQUV2RixHQUFHLE1BQUtQLFVBQUwsQ0FBZ0JRLEtBQWhCLEdBQXdCLENBQTdCLEVBQWdDQyxHQUFHLE1BQUtULFVBQUwsQ0FBZ0JVLE1BQWhCLElBQTJCLE1BQUtpSSxPQUFMLENBQWFGLE1BQWIsR0FBc0IsQ0FBdkIsR0FBNEJTLENBQXRELENBQW5DLEVBQVo7QUFDQWxJLHdCQUFJK0UsSUFBSixHQUFXLGlCQUFYO0FBQ0EvRSx3QkFBSWdGLFNBQUosR0FBZ0IsUUFBaEI7QUFDQWhGLHdCQUFJTyxTQUFKLEdBQWdCLE9BQWhCOztBQUVBLHdCQUFNZixRQUFRUSxJQUFJbUksV0FBSixNQUFtQkYsTUFBbkIsRUFBNkJ6SSxLQUEzQzs7QUFFQSx3QkFBSSxNQUFLa0ksY0FBTCxLQUF3QlEsQ0FBNUIsRUFBK0JsSSxJQUFJc0MsUUFBSixDQUFjd0MsSUFBSXZGLENBQUosR0FBUUMsUUFBUSxDQUFqQixHQUFzQixDQUFuQyxFQUFzQ3NGLElBQUlyRixDQUFKLEdBQVEsRUFBOUMsRUFBa0RELFFBQVEsRUFBMUQsRUFBOEQsRUFBOUQ7QUFDL0JRLHdCQUFJaUYsUUFBSixNQUFnQmdELE1BQWhCLEVBQTBCbkQsSUFBSXZGLENBQTlCLEVBQWlDdUYsSUFBSXJGLENBQXJDO0FBQ0FPLHdCQUFJa0YsV0FBSixHQUFrQixPQUFsQjtBQUNBbEYsd0JBQUltRixTQUFKLEdBQWdCLENBQWhCO0FBQ0FuRix3QkFBSW9GLFVBQUosTUFBa0I2QyxNQUFsQixFQUE0Qm5ELElBQUl2RixDQUFoQyxFQUFtQ3VGLElBQUlyRixDQUF2QztBQUNILGlCQWJEO0FBY0gsYUFmRCxNQWVPLElBQUksS0FBS29JLG1CQUFULEVBQThCO0FBQ2pDLHFCQUFLRCxlQUFMLENBQXFCM0UsTUFBckIsQ0FBNEJqRCxHQUE1QjtBQUNIO0FBQ0o7OzsyQ0FFa0I7QUFBQTs7QUFDZixxQ0FBSSxNQUFKLEVBQVksWUFBTTtBQUNkLHVCQUFLMEgsY0FBTCxHQUFzQixDQUFDLE9BQUtBLGNBQUwsR0FBc0IsQ0FBdkIsSUFBNEIsT0FBS0MsT0FBTCxDQUFhRixNQUEvRDtBQUNILGFBRkQ7QUFHQSxxQ0FBSSxJQUFKLEVBQVUsWUFBTTtBQUNaLHVCQUFLQyxjQUFMLEdBQXNCckgsS0FBSytILEdBQUwsQ0FBUyxDQUFDLE9BQUtWLGNBQUwsR0FBc0IsQ0FBdkIsSUFBNEIsT0FBS0MsT0FBTCxDQUFhRixNQUFsRCxDQUF0QjtBQUNILGFBRkQ7QUFHQSxxQ0FBSSxPQUFKLEVBQWEsWUFBTTtBQUNmLG9CQUFJLE9BQUtDLGNBQUwsS0FBd0IsQ0FBNUIsRUFBK0I7QUFDM0JQLHdDQUFJQyxNQUFKLENBQVcsTUFBWDtBQUNBRCx3Q0FBSUMsTUFBSixDQUFXLElBQVg7QUFDQUQsd0NBQUlDLE1BQUosQ0FBVyxPQUFYO0FBQ0EsMkJBQUtTLG1CQUFMLEdBQTJCLElBQTNCO0FBQ0EsMkJBQUtELGVBQUwsQ0FBcUJOLFVBQXJCLEdBQWtDLEtBQWxDO0FBQ0EsMkJBQUtNLGVBQUwsQ0FBcUI1RSxnQkFBckI7QUFDSCxpQkFQRCxNQU9PLElBQUksT0FBSzBFLGNBQUwsS0FBd0IsQ0FBNUIsRUFBK0I7QUFDbENQLHdDQUFJQyxNQUFKLENBQVcsTUFBWDtBQUNBRCx3Q0FBSUMsTUFBSixDQUFXLElBQVg7QUFDQUQsd0NBQUlDLE1BQUosQ0FBVyxPQUFYO0FBQ0EsMkJBQUtTLG1CQUFMLEdBQTJCLElBQTNCO0FBQ0EsMkJBQUtELGVBQUwsQ0FBcUJOLFVBQXJCLEdBQWtDLElBQWxDO0FBQ0EzRywyQkFBT0MsSUFBUCxDQUFZLG9CQUFaLEVBQWtDRCxPQUFPRyxFQUF6QztBQUNBLDJCQUFLOEcsZUFBTCxDQUFxQjVFLGdCQUFyQjtBQUNIO0FBQ0osYUFqQkQ7QUFtQkg7Ozs7OztrQkF6RWdCTixROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7Ozs7Ozs7Ozs7O0lBRXFCeUIsWTs7O0FBQ2pCLDBCQUFZbEYsS0FBWixFQUFtQkksSUFBbkIsRUFBeUJnSixTQUF6QixFQUFvQ0MsU0FBcEMsRUFBK0NDLE1BQS9DLEVBQXVEO0FBQUE7O0FBQUEsZ0lBQzdDdEosS0FENkMsRUFDdENJLElBRHNDLEVBQ2hDZ0osU0FEZ0M7O0FBR25ELGNBQUsvSSxRQUFMLEdBQWdCZ0osY0FBYyxNQUFkLEdBQXdCO0FBQ3BDL0ksZUFBRyxDQURpQztBQUVwQ0UsZUFBRyxNQUFLUixLQUFMLENBQVdLLFFBQVgsQ0FBb0JHLENBQXBCLEdBQXdCLE1BQUtDO0FBRkksU0FBeEIsR0FHVjtBQUNGSCxlQUFHLE1BQUtOLEtBQUwsQ0FBV08sS0FBWCxHQUFtQixNQUFLQSxLQUR6QjtBQUVGQyxlQUFHLE1BQUtSLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQkcsQ0FBcEIsR0FBd0IsTUFBS0M7QUFGOUIsU0FITjs7QUFRQSxZQUFJLENBQUMsTUFBSzZJLE1BQVYsRUFBa0IsTUFBSzNJLEtBQUwsR0FBYSxPQUFiO0FBQ2xCLGNBQUsySSxNQUFMLEdBQWNBLE1BQWQ7QUFabUQ7QUFhdEQ7Ozs7Z0NBSU92SSxHLEVBQUs7QUFDVCxnQkFBSSxLQUFLdUksTUFBVCxFQUFpQjtBQUNiLHFCQUFLdEksSUFBTDtBQUNIOztBQUVERCxnQkFBSXVILFNBQUosQ0FBYyxLQUFLaUIsTUFBbkIsRUFDSSxLQUFLbEosUUFBTCxDQUFjQyxDQUFkLEdBQWtCLENBRHRCLEVBRUksS0FBS0QsUUFBTCxDQUFjRyxDQUFkLEdBQWtCLEtBQUsrSSxNQUFMLENBQVk5SSxNQUFaLEdBQXFCLENBRjNDO0FBR0g7Ozs7RUExQnFDa0UsZ0I7O2tCQUFyQk8sWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTXpGLFlBQVk7QUFDZEUsYUFBUyxHQURLO0FBRWQ2SixrQkFBYyxFQUZBO0FBR2RDLG1CQUFlLEVBSEQ7QUFJZEMsZUFBVyxDQUpHO0FBS2Q7QUFDQUMsaUJBQWE7QUFDYjtBQVBjLENBQWxCOztJQVVxQmhGLE07OztBQUNqQixvQkFBWTNFLEtBQVosRUFBbUJJLElBQW5CLEVBQXlCZ0osU0FBekIsRUFBb0M7QUFBQTs7QUFBQSxvSEFDMUIsRUFBRTdJLE9BQU9kLFVBQVUrSixZQUFuQixFQUFpQy9JLFFBQVFoQixVQUFVZ0ssYUFBbkQsRUFEMEI7O0FBRWhDLGNBQUt6SixLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLSSxJQUFMLEdBQVlBLElBQVo7O0FBRUEsY0FBS00sUUFBTCxHQUFnQjtBQUNaSixlQUFHLENBRFM7QUFFWkUsZUFBRztBQUZTLFNBQWhCO0FBSUEsY0FBS0gsUUFBTCxHQUFnQjtBQUNaQyxlQUFHLE1BQUtOLEtBQUwsQ0FBV08sS0FBWCxHQUFtQixNQUFLQSxLQURmO0FBRVpDLGVBQUcsTUFBS1IsS0FBTCxDQUFXSyxRQUFYLENBQW9CRyxDQUFwQixHQUF3QixNQUFLQztBQUZwQixTQUFoQjtBQUlBLGNBQUtFLEtBQUwsR0FBYSxLQUFiO0FBQ0EsY0FBS3FDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsY0FBS2pCLFdBQUwsR0FBbUIsSUFBbkI7QUFDQTtBQUNBO0FBQ0EsY0FBS3dILE1BQUwsR0FBYyxJQUFJN0IsS0FBSixFQUFkO0FBQ0EsY0FBSzZCLE1BQUwsQ0FBWS9CLEdBQVosR0FBa0I0QixTQUFsQjtBQW5CZ0M7QUFvQm5DOzs7O2dDQUVPckksRyxFQUFLO0FBQ1QsaUJBQUtDLElBQUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBRCxnQkFBSXVILFNBQUosQ0FBYyxLQUFLaUIsTUFBbkIsRUFDUSxLQUFLbEosUUFBTCxDQUFjQyxDQUFkLEdBQWtCLENBRDFCLEVBRUksS0FBS0QsUUFBTCxDQUFjRyxDQUFkLEdBQWtCLEtBQUsrSSxNQUFMLENBQVk5SSxNQUFaLEdBQXFCLENBRjNDO0FBR0g7OzsrQkFFTztBQUNKLGdCQUFJeUgsb0JBQUkwQixTQUFKLENBQWMsT0FBZCxDQUFKLEVBQTRCO0FBQ3hCLHFCQUFLdkosUUFBTCxDQUFjQyxDQUFkLElBQW1CYixVQUFVaUssU0FBN0I7QUFDQSxxQkFBSzNILFdBQUwsR0FBbUIsSUFBbkI7QUFDSDtBQUNELGdCQUFJbUcsb0JBQUkwQixTQUFKLENBQWMsTUFBZCxDQUFKLEVBQTJCO0FBQ3ZCLHFCQUFLdkosUUFBTCxDQUFjQyxDQUFkLElBQW1CYixVQUFVaUssU0FBN0I7QUFDQSxxQkFBSzNILFdBQUwsR0FBbUIsS0FBbkI7QUFDSDs7QUFFRDtBQUNBLGdCQUFJbUcsb0JBQUkwQixTQUFKLENBQWMsSUFBZCxLQUF1QixDQUFDLEtBQUs1RyxPQUFqQyxFQUEwQztBQUN0QyxxQkFBS3RDLFFBQUwsQ0FBY0YsQ0FBZCxHQUFrQmYsVUFBVWtLLFdBQTVCO0FBQ0EscUJBQUszRyxPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUVELGdCQUFJa0Ysb0JBQUkwQixTQUFKLENBQWMsR0FBZCxDQUFKLEVBQXdCO0FBQ3BCLHFCQUFLQyxhQUFMO0FBQ0g7O0FBRUQsaUJBQUtDLFNBQUw7O0FBRUEsaUJBQUtDLGFBQUw7O0FBRUEsaUJBQUtoSCxXQUFMO0FBQ0g7Ozt3Q0FFZTtBQUNaLGdCQUFJLEtBQUszQyxJQUFMLENBQVVRLFVBQVYsS0FBeUIsSUFBN0IsRUFBbUM7QUFDL0I7QUFDQSxxQkFBS1IsSUFBTCxDQUFVNEosS0FBVjtBQUNIO0FBQ0o7OztvQ0FFVztBQUNSLGdCQUFJLENBQUMsS0FBSzVKLElBQUwsQ0FBVVEsVUFBWCxJQUF5QixLQUFLUixJQUFMLENBQVU0RyxpQkFBVixDQUE0QixJQUE1QixDQUE3QixFQUFnRTtBQUM1RCxxQkFBSzVHLElBQUwsQ0FBVTZKLGVBQVYsQ0FBMEIsSUFBMUI7QUFDSDtBQUNKOzs7d0NBRWU7QUFDWixpQkFBSzVKLFFBQUwsQ0FBY0csQ0FBZCxJQUFtQixLQUFLRSxRQUFMLENBQWNGLENBQWpDO0FBQ0E7QUFDQTtBQUNBLGdCQUFJLEtBQUtILFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixLQUFLQyxNQUF2QixHQUFnQyxLQUFLVCxLQUFMLENBQVdLLFFBQVgsQ0FBb0JHLENBQXhELEVBQTJEO0FBQ3ZELHFCQUFLRSxRQUFMLENBQWNGLENBQWQsSUFBbUJmLFVBQVVFLE9BQTdCO0FBQ0E7QUFDSCxhQUhELE1BR087QUFDSCxxQkFBS2UsUUFBTCxDQUFjRixDQUFkLEdBQWtCLENBQWxCO0FBQ0EscUJBQUtILFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixLQUFLUixLQUFMLENBQVdLLFFBQVgsQ0FBb0JHLENBQXBCLEdBQXdCLEtBQUtDLE1BQS9DO0FBQ0EscUJBQUt1QyxPQUFMLEdBQWUsS0FBZjtBQUNIO0FBQ0o7OztzQ0FFYTtBQUNWLGdCQUFJLEtBQUszQyxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS04sS0FBTCxDQUFXTyxLQUFYLEdBQW1CLEtBQUtBLEtBQTlDLEVBQXFEO0FBQ2pELHFCQUFLRixRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS04sS0FBTCxDQUFXTyxLQUFYLEdBQW1CLEtBQUtBLEtBQTFDO0FBQ0gsYUFGRCxNQUVPLElBQUksS0FBS0YsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLENBQXRCLEVBQXlCO0FBQzVCLHFCQUFLRCxRQUFMLENBQWNDLENBQWQsR0FBa0IsQ0FBbEI7QUFDSDtBQUNKOzs7O0VBaEcrQmdELGM7O2tCQUFmcUIsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkckI7Ozs7Ozs7Ozs7OztBQUVBLElBQU1sRixZQUFZO0FBQ2RFLGFBQVMsR0FESztBQUVkNkosa0JBQWMsRUFGQTtBQUdkQyxtQkFBZSxFQUhEO0FBSWRDLGVBQVcsQ0FKRztBQUtkO0FBQ0FDLGlCQUFhO0FBQ2I7QUFQYyxDQUFsQjs7SUFVcUI5RSxPOzs7QUFDakIscUJBQVk3RSxLQUFaLEVBQW1CSSxJQUFuQixFQUF5QmdKLFNBQXpCLEVBQW9DO0FBQUE7O0FBQUEsc0hBQzFCcEosS0FEMEIsRUFDbkJJLElBRG1CLEVBQ2JnSixTQURhOztBQUdoQyxjQUFLL0ksUUFBTCxHQUFnQjtBQUNaQyxlQUFHLENBRFM7QUFFWkUsZUFBRyxNQUFLUixLQUFMLENBQVdLLFFBQVgsQ0FBb0JHLENBQXBCLEdBQXdCLE1BQUtDO0FBRnBCLFNBQWhCO0FBSUEsY0FBS0UsS0FBTCxHQUFhLE9BQWI7QUFDQSxjQUFLcUMsT0FBTCxHQUFlLEtBQWY7QUFDQSxjQUFLakIsV0FBTCxHQUFtQixLQUFuQjtBQVRnQztBQVVuQzs7OzsrQkFFTTtBQUNILGdCQUFJbUcsSUFBSTBCLFNBQUosQ0FBYyxHQUFkLENBQUosRUFBd0I7QUFDcEIscUJBQUt2SixRQUFMLENBQWNDLENBQWQsSUFBbUJiLFVBQVVpSyxTQUE3QjtBQUNBLHFCQUFLM0gsV0FBTCxHQUFtQixJQUFuQjtBQUNIO0FBQ0QsZ0JBQUltRyxJQUFJMEIsU0FBSixDQUFjLEdBQWQsQ0FBSixFQUF3QjtBQUNwQixxQkFBS3ZKLFFBQUwsQ0FBY0MsQ0FBZCxJQUFtQmIsVUFBVWlLLFNBQTdCO0FBQ0EscUJBQUszSCxXQUFMLEdBQW1CLEtBQW5CO0FBQ0g7O0FBRUQ7QUFDQSxnQkFBSW1HLElBQUkwQixTQUFKLENBQWMsR0FBZCxLQUFzQixDQUFDLEtBQUs1RyxPQUFoQyxFQUF5QztBQUNyQyxxQkFBS3RDLFFBQUwsQ0FBY0YsQ0FBZCxHQUFrQmYsVUFBVWtLLFdBQTVCO0FBQ0EscUJBQUszRyxPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUVELGdCQUFJa0YsSUFBSTBCLFNBQUosQ0FBYyxHQUFkLENBQUosRUFBd0I7QUFDcEIscUJBQUtDLGFBQUw7QUFDSDs7QUFFRCxpQkFBS0MsU0FBTDs7QUFFQSxpQkFBS0MsYUFBTDs7QUFFQSxpQkFBS2hILFdBQUw7QUFDSDs7OztFQXRDZ0M0QixnQjs7a0JBQWhCRSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDWkFILFU7QUFDakIsd0JBQVkzRSxVQUFaLEVBQXdCRSxRQUF4QixFQUFrQ0MsU0FBbEMsRUFBNkM7QUFBQTs7QUFBQTs7QUFDekMsYUFBS0gsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxhQUFLRSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGFBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsYUFBS3dGLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxhQUFLd0UsU0FBTCxHQUFpQkMsWUFBWSxZQUFNO0FBQy9CLGtCQUFLekUsUUFBTDtBQUNBLGdCQUFJLE1BQUtBLFFBQUwsS0FBa0IsQ0FBdEIsRUFBeUIwRSxjQUFjLE1BQUtGLFNBQW5CO0FBQzVCLFNBSGdCLEVBR2QsSUFIYyxDQUFqQjtBQUlIOzs7O2dDQUVRbkosRyxFQUFLO0FBQ1YsZ0JBQUk4RSxNQUFNLEVBQUV2RixHQUFHLEtBQUtQLFVBQUwsQ0FBZ0JRLEtBQWhCLEdBQXdCLENBQTdCLEVBQWdDQyxHQUFHLEtBQUtULFVBQUwsQ0FBZ0JVLE1BQWhCLEdBQXlCLEVBQTVELEVBQVY7QUFDQU0sZ0JBQUkrRSxJQUFKLEdBQVcsaUJBQVg7QUFDQS9FLGdCQUFJTyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FQLGdCQUFJZ0YsU0FBSixHQUFnQixRQUFoQjtBQUNBaEYsZ0JBQUlpRixRQUFKLGdCQUEwQixLQUFLOUYsU0FBTCxDQUFlMEYsS0FBekMsbUJBQTRELEtBQUszRixRQUFMLENBQWMyRixLQUExRSxFQUFtRkMsSUFBSXZGLENBQXZGLEVBQTBGdUYsSUFBSXJGLENBQTlGO0FBQ0FPLGdCQUFJa0YsV0FBSixHQUFrQixPQUFsQjtBQUNBbEYsZ0JBQUltRixTQUFKLEdBQWdCLENBQWhCO0FBQ0FuRixnQkFBSW9GLFVBQUosZ0JBQTRCLEtBQUtqRyxTQUFMLENBQWUwRixLQUEzQyxtQkFBOEQsS0FBSzNGLFFBQUwsQ0FBYzJGLEtBQTVFLEVBQXFGQyxJQUFJdkYsQ0FBekYsRUFBNEZ1RixJQUFJckYsQ0FBaEc7O0FBRUFxRixrQkFBTSxFQUFFdkYsR0FBRyxLQUFLUCxVQUFMLENBQWdCUSxLQUFoQixHQUF3QixDQUE3QixFQUFnQ0MsR0FBRyxLQUFLVCxVQUFMLENBQWdCVSxNQUFoQixHQUF5QixDQUE1RCxFQUFOO0FBQ0FNLGdCQUFJTyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FQLGdCQUFJZ0YsU0FBSixHQUFnQixRQUFoQjtBQUNBaEYsZ0JBQUlpRixRQUFKLE1BQWdCLEtBQUtOLFFBQXJCLEVBQWlDRyxJQUFJdkYsQ0FBckMsRUFBd0N1RixJQUFJckYsQ0FBNUM7QUFDQU8sZ0JBQUlrRixXQUFKLEdBQWtCLE9BQWxCO0FBQ0FsRixnQkFBSW1GLFNBQUosR0FBZ0IsQ0FBaEI7QUFDQW5GLGdCQUFJb0YsVUFBSixNQUFrQixLQUFLVCxRQUF2QixFQUFtQ0csSUFBSXZGLENBQXZDLEVBQTBDdUYsSUFBSXJGLENBQTlDO0FBQ0g7Ozs7OztrQkE3QmdCa0UsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBekIsTTtBQUNqQixvQkFBWTlCLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsYUFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7Ozs7MENBRWlCa0osSSxFQUFNO0FBQ3BCLGdCQUFNQyxRQUFRbEosS0FBSytILEdBQUwsQ0FBUyxLQUFLOUksUUFBTCxDQUFjQyxDQUFkLEdBQWtCK0osS0FBS2hLLFFBQUwsQ0FBY0MsQ0FBaEMsR0FBb0MrSixLQUFLOUosS0FBTCxHQUFhLENBQTFELENBQWQ7QUFDQSxnQkFBTWdLLFFBQVFuSixLQUFLK0gsR0FBTCxDQUFTLEtBQUs5SSxRQUFMLENBQWNHLENBQWQsR0FBa0I2SixLQUFLaEssUUFBTCxDQUFjRyxDQUFoQyxHQUFvQzZKLEtBQUs1SixNQUFMLEdBQWMsQ0FBM0QsQ0FBZDtBQUNBLGdCQUFJNkosUUFBU0QsS0FBSzlKLEtBQUwsR0FBYSxDQUFiLEdBQWlCLEtBQUtZLE1BQW5DLEVBQTRDO0FBQUUsdUJBQU8sS0FBUDtBQUFlO0FBQzdELGdCQUFJb0osUUFBU0YsS0FBSzVKLE1BQUwsR0FBYyxDQUFkLEdBQWtCLEtBQUtVLE1BQXBDLEVBQTZDO0FBQUUsdUJBQU8sS0FBUDtBQUFlOztBQUU5RCxnQkFBSW1KLFNBQVVELEtBQUs5SixLQUFMLEdBQWEsQ0FBM0IsRUFBK0I7QUFBRSx1QkFBTyxJQUFQO0FBQWM7QUFDL0MsZ0JBQUlnSyxTQUFVRixLQUFLNUosTUFBTCxHQUFjLENBQTVCLEVBQWdDO0FBQUUsdUJBQU8sSUFBUDtBQUFjOztBQUVoRCxnQkFBTStKLEtBQUtGLFFBQVFELEtBQUs5SixLQUFMLEdBQWEsQ0FBaEM7QUFDQSxnQkFBTWtLLEtBQUtGLFFBQVFGLEtBQUs1SixNQUFMLEdBQWMsQ0FBakM7QUFDQSxtQkFBUStKLEtBQUtBLEVBQUwsR0FBVUMsS0FBS0EsRUFBZixJQUFzQixLQUFLdEosTUFBTCxHQUFjLEtBQUtBLE1BQWpEO0FBQ0g7OztvQ0FFVztBQUNSLG1CQUFPO0FBQ0h1SixzQkFBTSxLQUFLckssUUFBTCxDQUFjQyxDQURqQjtBQUVIcUssdUJBQU8sS0FBS3RLLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLQyxLQUYzQjtBQUdIcUsscUJBQUssS0FBS3ZLLFFBQUwsQ0FBY0csQ0FIaEI7QUFJSHFLLHdCQUFRLEtBQUt4SyxRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS0M7QUFKNUIsYUFBUDtBQU1IOzs7Ozs7a0JBMUJnQndDLE07Ozs7Ozs7Ozs7Ozs7O0FDQXJCO0FBQ0E7QUFDQTs7QUFFQSxDQUFFLENBQUMsVUFBVTZILE1BQVYsRUFBa0I7QUFDakIsUUFBSUMsQ0FBSjtBQUFBLFFBQ0lDLFlBQVksRUFEaEI7QUFBQSxRQUVJQyxRQUFRLEVBQUUsSUFBSSxLQUFOLEVBQWEsSUFBSSxLQUFqQixFQUF3QixJQUFJLEtBQTVCLEVBQW1DLElBQUksS0FBdkMsRUFGWjtBQUFBLFFBR0lDLFNBQVMsS0FIYjs7QUFJSTtBQUNBQyxpQkFBYTtBQUNULGFBQUssRUFESSxFQUNBQyxPQUFPLEVBRFA7QUFFVCxhQUFLLEVBRkksRUFFQUMsS0FBSyxFQUZMLEVBRVNyQyxRQUFRLEVBRmpCO0FBR1QsYUFBSyxFQUhJLEVBR0FzQyxNQUFNLEVBSE4sRUFHVUMsU0FBUyxFQUhuQjtBQUlULGFBQUssRUFKSSxFQUlBQyxTQUFTO0FBSlQsS0FMakI7O0FBV0k7QUFDQUMsV0FBTztBQUNIQyxtQkFBVyxDQURSLEVBQ1dDLEtBQUssQ0FEaEIsRUFDbUJDLE9BQU8sRUFEMUI7QUFFSEMsZUFBTyxFQUZKLEVBRVEsVUFBVSxFQUZsQjtBQUdIQyxhQUFLLEVBSEYsRUFHTUMsUUFBUSxFQUhkLEVBR2tCQyxPQUFPLEVBSHpCO0FBSUh0QixjQUFNLEVBSkgsRUFJT3VCLElBQUksRUFKWDtBQUtIdEIsZUFBTyxFQUxKLEVBS1F1QixNQUFNLEVBTGQ7QUFNSEMsYUFBSyxFQU5GLEVBTU0sVUFBVSxFQU5oQjtBQU9IQyxjQUFNLEVBUEgsRUFPT0MsS0FBSyxFQVBaO0FBUUhDLGdCQUFRLEVBUkwsRUFRU0MsVUFBVSxFQVJuQjtBQVNILGFBQUssR0FURixFQVNPLEtBQUssR0FUWixFQVNpQixLQUFLLEdBVHRCO0FBVUgsYUFBSyxHQVZGLEVBVU8sS0FBSyxHQVZaLEVBVWlCLEtBQUssR0FWdEI7QUFXSCxhQUFLLEdBWEYsRUFXTyxNQUFNLEdBWGI7QUFZSCxhQUFLLEdBWkYsRUFZTyxLQUFLLEdBWlosRUFZaUIsTUFBTTtBQVp2QixLQVpYO0FBQUEsUUEwQklDLE9BQU8sU0FBUEEsSUFBTyxDQUFVbE0sQ0FBVixFQUFhO0FBQ2hCLGVBQU9tTCxLQUFLbkwsQ0FBTCxLQUFXQSxFQUFFbU0sV0FBRixHQUFnQkMsVUFBaEIsQ0FBMkIsQ0FBM0IsQ0FBbEI7QUFDSCxLQTVCTDtBQUFBLFFBNkJJQyxZQUFZLEVBN0JoQjs7QUErQkEsU0FBSzVCLElBQUksQ0FBVCxFQUFZQSxJQUFJLEVBQWhCLEVBQW9CQSxHQUFwQjtBQUF5QlUsYUFBSyxNQUFNVixDQUFYLElBQWdCLE1BQU1BLENBQXRCO0FBQXpCLEtBaENpQixDQWtDakI7QUFDQSxhQUFTNkIsS0FBVCxDQUFlQyxLQUFmLEVBQXNCQyxJQUF0QixFQUE0QjtBQUN4QixZQUFJN0QsSUFBSTRELE1BQU1yRSxNQUFkO0FBQ0EsZUFBT1MsR0FBUDtBQUFZLGdCQUFJNEQsTUFBTTVELENBQU4sTUFBYTZELElBQWpCLEVBQXVCLE9BQU83RCxDQUFQO0FBQW5DLFNBQ0EsT0FBTyxDQUFDLENBQVI7QUFDSDs7QUFFRDtBQUNBLGFBQVM4RCxZQUFULENBQXNCQyxFQUF0QixFQUEwQkMsRUFBMUIsRUFBOEI7QUFDMUIsWUFBSUQsR0FBR3hFLE1BQUgsSUFBYXlFLEdBQUd6RSxNQUFwQixFQUE0QixPQUFPLEtBQVA7QUFDNUIsYUFBSyxJQUFJUyxJQUFJLENBQWIsRUFBZ0JBLElBQUkrRCxHQUFHeEUsTUFBdkIsRUFBK0JTLEdBQS9CLEVBQW9DO0FBQ2hDLGdCQUFJK0QsR0FBRy9ELENBQUgsTUFBVWdFLEdBQUdoRSxDQUFILENBQWQsRUFBcUIsT0FBTyxLQUFQO0FBQ3hCO0FBQ0QsZUFBTyxJQUFQO0FBQ0g7O0FBRUQsUUFBSWlFLGNBQWM7QUFDZCxZQUFJLFVBRFU7QUFFZCxZQUFJLFFBRlU7QUFHZCxZQUFJLFNBSFU7QUFJZCxZQUFJO0FBSlUsS0FBbEI7QUFNQSxhQUFTQyxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFDOUIsYUFBS3JDLENBQUwsSUFBVUUsS0FBVjtBQUFpQkEsa0JBQU1GLENBQU4sSUFBV3FDLE1BQU1GLFlBQVluQyxDQUFaLENBQU4sQ0FBWDtBQUFqQjtBQUNIOztBQUVEO0FBQ0EsYUFBU3NDLFFBQVQsQ0FBa0JELEtBQWxCLEVBQXlCO0FBQ3JCLFlBQUlsRixHQUFKLEVBQVNvRixPQUFULEVBQWtCdkMsQ0FBbEIsRUFBcUI5QixDQUFyQixFQUF3QnNFLGNBQXhCLEVBQXdDQyxLQUF4QztBQUNBdEYsY0FBTWtGLE1BQU1LLE9BQVo7O0FBRUEsWUFBSWIsTUFBTUQsU0FBTixFQUFpQnpFLEdBQWpCLEtBQXlCLENBQUMsQ0FBOUIsRUFBaUM7QUFDN0J5RSxzQkFBVWUsSUFBVixDQUFleEYsR0FBZjtBQUNIOztBQUVEO0FBQ0EsWUFBSUEsT0FBTyxFQUFQLElBQWFBLE9BQU8sR0FBeEIsRUFBNkJBLE1BQU0sRUFBTixDQVRSLENBU2tCO0FBQ3ZDLFlBQUlBLE9BQU8rQyxLQUFYLEVBQWtCO0FBQ2RBLGtCQUFNL0MsR0FBTixJQUFhLElBQWI7QUFDQTtBQUNBLGlCQUFLNkMsQ0FBTCxJQUFVSSxVQUFWO0FBQXNCLG9CQUFJQSxXQUFXSixDQUFYLEtBQWlCN0MsR0FBckIsRUFBMEJ5RixVQUFVNUMsQ0FBVixJQUFlLElBQWY7QUFBaEQsYUFDQTtBQUNIO0FBQ0RvQywwQkFBa0JDLEtBQWxCOztBQUVBO0FBQ0E7QUFDQSxZQUFJLENBQUNPLFVBQVVDLE1BQVYsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLEVBQTRCVCxLQUE1QixDQUFMLEVBQXlDOztBQUV6QztBQUNBLFlBQUksRUFBRWxGLE9BQU84QyxTQUFULENBQUosRUFBeUI7O0FBRXpCd0MsZ0JBQVFNLFVBQVI7O0FBRUE7QUFDQSxhQUFLN0UsSUFBSSxDQUFULEVBQVlBLElBQUkrQixVQUFVOUMsR0FBVixFQUFlTSxNQUEvQixFQUF1Q1MsR0FBdkMsRUFBNEM7QUFDeENxRSxzQkFBVXRDLFVBQVU5QyxHQUFWLEVBQWVlLENBQWYsQ0FBVjs7QUFFQTtBQUNBLGdCQUFJcUUsUUFBUUUsS0FBUixJQUFpQkEsS0FBakIsSUFBMEJGLFFBQVFFLEtBQVIsSUFBaUIsS0FBL0MsRUFBc0Q7QUFDbEQ7QUFDQUQsaUNBQWlCRCxRQUFRUyxJQUFSLENBQWF2RixNQUFiLEdBQXNCLENBQXZDO0FBQ0EscUJBQUt1QyxDQUFMLElBQVVFLEtBQVY7QUFDSSx3QkFBSyxDQUFDQSxNQUFNRixDQUFOLENBQUQsSUFBYTZCLE1BQU1VLFFBQVFTLElBQWQsRUFBb0IsQ0FBQ2hELENBQXJCLElBQTBCLENBQUMsQ0FBekMsSUFDQ0UsTUFBTUYsQ0FBTixLQUFZNkIsTUFBTVUsUUFBUVMsSUFBZCxFQUFvQixDQUFDaEQsQ0FBckIsS0FBMkIsQ0FBQyxDQUQ3QyxFQUNpRHdDLGlCQUFpQixLQUFqQjtBQUZyRCxpQkFIa0QsQ0FNbEQ7QUFDQSxvQkFBS0QsUUFBUVMsSUFBUixDQUFhdkYsTUFBYixJQUF1QixDQUF2QixJQUE0QixDQUFDeUMsTUFBTSxFQUFOLENBQTdCLElBQTBDLENBQUNBLE1BQU0sRUFBTixDQUEzQyxJQUF3RCxDQUFDQSxNQUFNLEVBQU4sQ0FBekQsSUFBc0UsQ0FBQ0EsTUFBTSxFQUFOLENBQXhFLElBQXNGc0MsY0FBMUYsRUFBMEc7QUFDdEcsd0JBQUlELFFBQVFVLE1BQVIsQ0FBZVosS0FBZixFQUFzQkUsT0FBdEIsTUFBbUMsS0FBdkMsRUFBOEM7QUFDMUMsNEJBQUlGLE1BQU1hLGNBQVYsRUFBMEJiLE1BQU1hLGNBQU4sR0FBMUIsS0FDS2IsTUFBTWMsV0FBTixHQUFvQixLQUFwQjtBQUNMLDRCQUFJZCxNQUFNZSxlQUFWLEVBQTJCZixNQUFNZSxlQUFOO0FBQzNCLDRCQUFJZixNQUFNZ0IsWUFBVixFQUF3QmhCLE1BQU1nQixZQUFOLEdBQXFCLElBQXJCO0FBQzNCO0FBQ0o7QUFDSjtBQUNKO0FBQ0o7O0FBRUQ7QUFDQSxhQUFTQyxhQUFULENBQXVCakIsS0FBdkIsRUFBOEI7QUFDMUIsWUFBSWxGLE1BQU1rRixNQUFNSyxPQUFoQjtBQUFBLFlBQXlCMUMsQ0FBekI7QUFBQSxZQUNJOUIsSUFBSTJELE1BQU1ELFNBQU4sRUFBaUJ6RSxHQUFqQixDQURSOztBQUdBO0FBQ0EsWUFBSWUsS0FBSyxDQUFULEVBQVk7QUFDUjBELHNCQUFVMkIsTUFBVixDQUFpQnJGLENBQWpCLEVBQW9CLENBQXBCO0FBQ0g7O0FBRUQsWUFBSWYsT0FBTyxFQUFQLElBQWFBLE9BQU8sR0FBeEIsRUFBNkJBLE1BQU0sRUFBTjtBQUM3QixZQUFJQSxPQUFPK0MsS0FBWCxFQUFrQjtBQUNkQSxrQkFBTS9DLEdBQU4sSUFBYSxLQUFiO0FBQ0EsaUJBQUs2QyxDQUFMLElBQVVJLFVBQVY7QUFBc0Isb0JBQUlBLFdBQVdKLENBQVgsS0FBaUI3QyxHQUFyQixFQUEwQnlGLFVBQVU1QyxDQUFWLElBQWUsS0FBZjtBQUFoRDtBQUNIO0FBQ0o7O0FBRUQsYUFBU3dELGNBQVQsR0FBMEI7QUFDdEIsYUFBS3hELENBQUwsSUFBVUUsS0FBVjtBQUFpQkEsa0JBQU1GLENBQU4sSUFBVyxLQUFYO0FBQWpCLFNBQ0EsS0FBS0EsQ0FBTCxJQUFVSSxVQUFWO0FBQXNCd0Msc0JBQVU1QyxDQUFWLElBQWUsS0FBZjtBQUF0QjtBQUNIOztBQUVEO0FBQ0EsYUFBUzRDLFNBQVQsQ0FBbUJ6RixHQUFuQixFQUF3QnNGLEtBQXhCLEVBQStCUSxNQUEvQixFQUF1QztBQUNuQyxZQUFJUSxJQUFKLEVBQVVULElBQVY7QUFDQVMsZUFBT0MsUUFBUXZHLEdBQVIsQ0FBUDtBQUNBLFlBQUk4RixXQUFXVSxTQUFmLEVBQTBCO0FBQ3RCVixxQkFBU1IsS0FBVDtBQUNBQSxvQkFBUSxLQUFSO0FBQ0g7O0FBRUQ7QUFDQSxhQUFLLElBQUl2RSxJQUFJLENBQWIsRUFBZ0JBLElBQUl1RixLQUFLaEcsTUFBekIsRUFBaUNTLEdBQWpDLEVBQXNDO0FBQ2xDO0FBQ0E4RSxtQkFBTyxFQUFQO0FBQ0E3RixrQkFBTXNHLEtBQUt2RixDQUFMLEVBQVEwRixLQUFSLENBQWMsR0FBZCxDQUFOO0FBQ0EsZ0JBQUl6RyxJQUFJTSxNQUFKLEdBQWEsQ0FBakIsRUFBb0I7QUFDaEJ1Rix1QkFBT2EsUUFBUTFHLEdBQVIsQ0FBUDtBQUNBQSxzQkFBTSxDQUFDQSxJQUFJQSxJQUFJTSxNQUFKLEdBQWEsQ0FBakIsQ0FBRCxDQUFOO0FBQ0g7QUFDRDtBQUNBTixrQkFBTUEsSUFBSSxDQUFKLENBQU47QUFDQUEsa0JBQU1zRSxLQUFLdEUsR0FBTCxDQUFOO0FBQ0E7QUFDQSxnQkFBSSxFQUFFQSxPQUFPOEMsU0FBVCxDQUFKLEVBQXlCQSxVQUFVOUMsR0FBVixJQUFpQixFQUFqQjtBQUN6QjhDLHNCQUFVOUMsR0FBVixFQUFld0YsSUFBZixDQUFvQixFQUFFbUIsVUFBVUwsS0FBS3ZGLENBQUwsQ0FBWixFQUFxQnVFLE9BQU9BLEtBQTVCLEVBQW1DUSxRQUFRQSxNQUEzQyxFQUFtRDlGLEtBQUtzRyxLQUFLdkYsQ0FBTCxDQUF4RCxFQUFpRThFLE1BQU1BLElBQXZFLEVBQXBCO0FBQ0g7QUFDSjs7QUFFRDtBQUNBLGFBQVNlLFNBQVQsQ0FBbUI1RyxHQUFuQixFQUF3QnNGLEtBQXhCLEVBQStCO0FBQzNCLFlBQUl1QixZQUFKO0FBQUEsWUFBa0JQLElBQWxCO0FBQUEsWUFDSVQsT0FBTyxFQURYO0FBQUEsWUFFSTlFLENBRko7QUFBQSxZQUVPK0YsQ0FGUDtBQUFBLFlBRVVDLEdBRlY7O0FBSUFGLHVCQUFlTixRQUFRdkcsR0FBUixDQUFmOztBQUVBLGFBQUs4RyxJQUFJLENBQVQsRUFBWUEsSUFBSUQsYUFBYXZHLE1BQTdCLEVBQXFDd0csR0FBckMsRUFBMEM7QUFDdENSLG1CQUFPTyxhQUFhQyxDQUFiLEVBQWdCTCxLQUFoQixDQUFzQixHQUF0QixDQUFQOztBQUVBLGdCQUFJSCxLQUFLaEcsTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ2pCdUYsdUJBQU9hLFFBQVFKLElBQVIsQ0FBUDtBQUNIOztBQUVEdEcsa0JBQU1zRyxLQUFLQSxLQUFLaEcsTUFBTCxHQUFjLENBQW5CLENBQU47QUFDQU4sa0JBQU1zRSxLQUFLdEUsR0FBTCxDQUFOOztBQUVBLGdCQUFJc0YsVUFBVWtCLFNBQWQsRUFBeUI7QUFDckJsQix3QkFBUU0sVUFBUjtBQUNIO0FBQ0QsZ0JBQUksQ0FBQzlDLFVBQVU5QyxHQUFWLENBQUwsRUFBcUI7QUFDakI7QUFDSDtBQUNELGlCQUFLZSxJQUFJLENBQVQsRUFBWUEsSUFBSStCLFVBQVU5QyxHQUFWLEVBQWVNLE1BQS9CLEVBQXVDUyxHQUF2QyxFQUE0QztBQUN4Q2dHLHNCQUFNakUsVUFBVTlDLEdBQVYsRUFBZWUsQ0FBZixDQUFOO0FBQ0E7QUFDQSxvQkFBSWdHLElBQUl6QixLQUFKLEtBQWNBLEtBQWQsSUFBdUJULGFBQWFrQyxJQUFJbEIsSUFBakIsRUFBdUJBLElBQXZCLENBQTNCLEVBQXlEO0FBQ3JEL0MsOEJBQVU5QyxHQUFWLEVBQWVlLENBQWYsSUFBb0IsRUFBcEI7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7QUFFRDtBQUNBO0FBQ0EsYUFBU1csU0FBVCxDQUFtQjZELE9BQW5CLEVBQTRCO0FBQ3hCLFlBQUksT0FBUUEsT0FBUixJQUFvQixRQUF4QixFQUFrQztBQUM5QkEsc0JBQVVqQixLQUFLaUIsT0FBTCxDQUFWO0FBQ0g7QUFDRCxlQUFPYixNQUFNRCxTQUFOLEVBQWlCYyxPQUFqQixLQUE2QixDQUFDLENBQXJDO0FBQ0g7O0FBRUQsYUFBU3lCLGtCQUFULEdBQThCO0FBQzFCLGVBQU92QyxVQUFVd0MsS0FBVixDQUFnQixDQUFoQixDQUFQO0FBQ0g7O0FBRUQsYUFBU3ZCLE1BQVQsQ0FBZ0JSLEtBQWhCLEVBQXVCO0FBQ25CLFlBQUlnQyxVQUFVLENBQUNoQyxNQUFNaUMsTUFBTixJQUFnQmpDLE1BQU1rQyxVQUF2QixFQUFtQ0YsT0FBakQ7QUFDQTtBQUNBLGVBQU8sRUFBRUEsV0FBVyxPQUFYLElBQXNCQSxXQUFXLFFBQWpDLElBQTZDQSxXQUFXLFVBQTFELENBQVA7QUFDSDs7QUFFRDtBQUNBLFNBQUtyRSxDQUFMLElBQVVJLFVBQVY7QUFBc0J3QyxrQkFBVTVDLENBQVYsSUFBZSxLQUFmO0FBQXRCLEtBdk5pQixDQXlOakI7QUFDQSxhQUFTd0UsUUFBVCxDQUFrQi9CLEtBQWxCLEVBQXlCO0FBQUV0QyxpQkFBU3NDLFNBQVMsS0FBbEI7QUFBeUI7QUFDcEQsYUFBU00sUUFBVCxHQUFvQjtBQUFFLGVBQU81QyxVQUFVLEtBQWpCO0FBQXdCOztBQUU5QztBQUNBLGFBQVNzRSxXQUFULENBQXFCaEMsS0FBckIsRUFBNEI7QUFDeEIsWUFBSXRGLEdBQUosRUFBU3VILFFBQVQsRUFBbUJ4RyxDQUFuQjs7QUFFQSxhQUFLZixHQUFMLElBQVk4QyxTQUFaLEVBQXVCO0FBQ25CeUUsdUJBQVd6RSxVQUFVOUMsR0FBVixDQUFYO0FBQ0EsaUJBQUtlLElBQUksQ0FBVCxFQUFZQSxJQUFJd0csU0FBU2pILE1BQXpCLEdBQWtDO0FBQzlCLG9CQUFJaUgsU0FBU3hHLENBQVQsRUFBWXVFLEtBQVosS0FBc0JBLEtBQTFCLEVBQWlDaUMsU0FBU25CLE1BQVQsQ0FBZ0JyRixDQUFoQixFQUFtQixDQUFuQixFQUFqQyxLQUNLQTtBQUNSO0FBQ0o7QUFDSjs7QUFFRDtBQUNBLGFBQVN3RixPQUFULENBQWlCdkcsR0FBakIsRUFBc0I7QUFDbEIsWUFBSXNHLElBQUo7QUFDQXRHLGNBQU1BLElBQUl3SCxPQUFKLENBQVksS0FBWixFQUFtQixFQUFuQixDQUFOO0FBQ0FsQixlQUFPdEcsSUFBSXlHLEtBQUosQ0FBVSxHQUFWLENBQVA7QUFDQSxZQUFLSCxLQUFLQSxLQUFLaEcsTUFBTCxHQUFjLENBQW5CLENBQUQsSUFBMkIsRUFBL0IsRUFBbUM7QUFDL0JnRyxpQkFBS0EsS0FBS2hHLE1BQUwsR0FBYyxDQUFuQixLQUF5QixHQUF6QjtBQUNIO0FBQ0QsZUFBT2dHLElBQVA7QUFDSDs7QUFFRDtBQUNBLGFBQVNJLE9BQVQsQ0FBaUIxRyxHQUFqQixFQUFzQjtBQUNsQixZQUFJNkYsT0FBTzdGLElBQUlpSCxLQUFKLENBQVUsQ0FBVixFQUFhakgsSUFBSU0sTUFBSixHQUFhLENBQTFCLENBQVg7QUFDQSxhQUFLLElBQUltSCxLQUFLLENBQWQsRUFBaUJBLEtBQUs1QixLQUFLdkYsTUFBM0IsRUFBbUNtSCxJQUFuQztBQUNJNUIsaUJBQUs0QixFQUFMLElBQVd4RSxXQUFXNEMsS0FBSzRCLEVBQUwsQ0FBWCxDQUFYO0FBREosU0FFQSxPQUFPNUIsSUFBUDtBQUNIOztBQUVEO0FBQ0EsYUFBUzZCLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCekMsS0FBMUIsRUFBaUNZLE1BQWpDLEVBQXlDO0FBQ3JDLFlBQUk2QixPQUFPeFEsZ0JBQVgsRUFDSXdRLE9BQU94USxnQkFBUCxDQUF3QitOLEtBQXhCLEVBQStCWSxNQUEvQixFQUF1QyxLQUF2QyxFQURKLEtBRUssSUFBSTZCLE9BQU9DLFdBQVgsRUFDREQsT0FBT0MsV0FBUCxDQUFtQixPQUFPMUMsS0FBMUIsRUFBaUMsWUFBWTtBQUFFWSxtQkFBTytCLE9BQU8zQyxLQUFkO0FBQXNCLFNBQXJFO0FBQ1A7O0FBRUQ7QUFDQXdDLGFBQVN4USxRQUFULEVBQW1CLFNBQW5CLEVBQThCLFVBQVVnTyxLQUFWLEVBQWlCO0FBQUVDLGlCQUFTRCxLQUFUO0FBQWlCLEtBQWxFLEVBdFFpQixDQXNRb0Q7QUFDckV3QyxhQUFTeFEsUUFBVCxFQUFtQixPQUFuQixFQUE0QmlQLGFBQTVCOztBQUVBO0FBQ0F1QixhQUFTRyxNQUFULEVBQWlCLE9BQWpCLEVBQTBCeEIsY0FBMUI7O0FBRUE7QUFDQSxRQUFJeUIsY0FBY0QsT0FBTzdILEdBQXpCOztBQUVBO0FBQ0EsYUFBUytILFVBQVQsR0FBc0I7QUFDbEIsWUFBSWxGLElBQUlnRixPQUFPN0gsR0FBZjtBQUNBNkgsZUFBTzdILEdBQVAsR0FBYThILFdBQWI7QUFDQSxlQUFPakYsQ0FBUDtBQUNIOztBQUVEO0FBQ0FnRixXQUFPN0gsR0FBUCxHQUFheUYsU0FBYjtBQUNBb0MsV0FBTzdILEdBQVAsQ0FBV3FILFFBQVgsR0FBc0JBLFFBQXRCO0FBQ0FRLFdBQU83SCxHQUFQLENBQVc0RixRQUFYLEdBQXNCQSxRQUF0QjtBQUNBaUMsV0FBTzdILEdBQVAsQ0FBV3NILFdBQVgsR0FBeUJBLFdBQXpCO0FBQ0FPLFdBQU83SCxHQUFQLENBQVcwRixNQUFYLEdBQW9CQSxNQUFwQjtBQUNBbUMsV0FBTzdILEdBQVAsQ0FBVzBCLFNBQVgsR0FBdUJBLFNBQXZCO0FBQ0FtRyxXQUFPN0gsR0FBUCxDQUFXZ0gsa0JBQVgsR0FBZ0NBLGtCQUFoQztBQUNBYSxXQUFPN0gsR0FBUCxDQUFXK0gsVUFBWCxHQUF3QkEsVUFBeEI7QUFDQUYsV0FBTzdILEdBQVAsQ0FBV0MsTUFBWCxHQUFvQjJHLFNBQXBCOztBQUVBLFFBQUksSUFBSixFQUFtQ29CLE9BQU9DLE9BQVAsR0FBaUJ4QyxTQUFqQjtBQUV0QyxDQW5TQyxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSm1CckssSTtBQUNqQixrQkFBWThNLElBQVosRUFBa0I7QUFBQTs7QUFDZCxhQUFLN1AsS0FBTCxHQUFhNlAsS0FBSzdQLEtBQWxCO0FBQ0EsYUFBS0UsTUFBTCxHQUFjMlAsS0FBSzNQLE1BQW5CO0FBQ0g7Ozs7K0NBRXNCNFAsUyxFQUFXO0FBQzlCLGdCQUFNQyxXQUFXLEtBQUtDLFNBQUwsRUFBakI7QUFDQSxnQkFBTWxHLE9BQU9nRyxVQUFVRSxTQUFWLEVBQWI7QUFDQSxnQkFBSUQsU0FBUzVGLElBQVQsR0FBZ0JMLEtBQUtNLEtBQXJCLElBQThCMkYsU0FBUzNGLEtBQVQsR0FBaUJOLEtBQUtLLElBQXhELEVBQThEO0FBQzFELHVCQUFPLEtBQVA7QUFDSDtBQUNELGdCQUFJNEYsU0FBUzFGLEdBQVQsR0FBZVAsS0FBS1EsTUFBcEIsSUFBOEJ5RixTQUFTekYsTUFBVCxHQUFrQlIsS0FBS08sR0FBekQsRUFBOEQ7QUFDMUQsdUJBQU8sS0FBUDtBQUNIO0FBQ0QsbUJBQU8sSUFBUDtBQUNIOzs7b0NBRVc7QUFDUixtQkFBTztBQUNIRixzQkFBTSxLQUFLckssUUFBTCxDQUFjQyxDQURqQjtBQUVIcUssdUJBQU8sS0FBS3RLLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLQyxLQUYzQjtBQUdIcUsscUJBQUssS0FBS3ZLLFFBQUwsQ0FBY0csQ0FIaEI7QUFJSHFLLHdCQUFRLEtBQUt4SyxRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS0M7QUFKNUIsYUFBUDtBQU1IOzs7Ozs7a0JBekJnQjZDLEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY2xpZW50L3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBOQkFKYW1HYW1lIGZyb20gJy4vanMvZ2FtZS5qcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmJhLWphbS1nYW1lJyk7XG4gICAgbmV3IE5CQUphbUdhbWUoY2FudmFzKTtcbn0pOyIsImltcG9ydCBDaXJjbGUgZnJvbSBcIi4vdXRpbHMvY2lyY2xlXCI7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBSQURJVVM6IDE1LFxuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBCT1VOQ0VfUkVURU5USU9OOiAwLjYsXG4gICAgRFJJQkJMRV9TUEVFRDogMyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCBleHRlbmRzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgY291cnQsIGxlZnRIb29wLCByaWdodEhvb3AsIGdhbWVJZCkge1xuICAgICAgICBzdXBlcihDT05TVEFOVFMuUkFESVVTKVxuICAgICAgICB0aGlzLmNvdXJ0ID0gY291cnRcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLmxlZnRIb29wID0gbGVmdEhvb3BcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSByaWdodEhvb3BcbiAgICAgICAgdGhpcy5sZWZ0SG9vcC5iYWxsID0gdGhpc1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcC5iYWxsID0gdGhpc1xuXG4gICAgICAgIHRoaXMuZ2FtZUlkID0gZ2FtZUlkXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY291cnQud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJob3RwaW5rXCJcbiAgICAgICAgdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuICAgICAgICB0aGlzLm5vVG91Y2ggPSB7fVxuICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLngsIFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55LCBcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLCBcbiAgICAgICAgICAgIDAsIFxuICAgICAgICAgICAgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICBcbiAgICBjbGFpbVBvc3Nlc3Npb24ocGxheWVyKSB7XG4gICAgICAgIGlmICghdGhpcy5ub1RvdWNoW3BsYXllci5jb2xvcl0pIHtcbiAgICAgICAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IHBsYXllclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJjaGFuZ2VPZlBvc3Nlc2lvblwiLCB7XG4gICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZCxcbiAgICAgICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNob290ICgpIHtcbiAgICAgICAgLy8gQkVUQSBTSE9PVElOR1xuXG4gICAgICAgIC8vIHRoaXMucG93ZXIgKz0gMVxuICAgICAgICAvLyBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICAvLyBpZiAodGhpcy5zaG9vdGluZ0ludGVydmFsICYmIHRoaXMucG93ZXIgPCA2MCkge1xuICAgICAgICAvLyAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2hvb3RpbmdJbnRlcnZhbClcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNob290aW5nSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IDYgOiAtNlxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IHRoaXMucG93ZXJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSB0cnVlICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IGZhbHNlXG4gICAgICAgIC8vICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgICAgICAvLyAgICAgfSwgMjApO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gQUlNQk9UIFNIT09USU5HXG5cbiAgICAgICAgLy8gY29uc3Qgc2hvb3RpbmdQbGF5ZXIgPSB0aGlzLnBvc3Nlc3Npb25cbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi54ID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgP1xuICAgICAgICAvLyAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggKyBzaG9vdGluZ1BsYXllci53aWR0aCArIHRoaXMucmFkaXVzKSA6XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzKVxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnkgPSBzaG9vdGluZ1BsYXllci5wb3NpdGlvbi55XG5cbiAgICAgICAgLy8gY29uc3Qgc2NvcmVQb3NpdGlvbiA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIHg6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgLy8gICAgICAgICB5OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICkgOiAoXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgeDogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgIC8vICAgICAgICAgeTogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gKVxuXG4gICAgICAgIC8vIGNvbnN0IG51bWJlck9mRnJhbWVzID0gNTBcblxuICAgICAgICAvLyBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgIC8vIGNvbnN0IHZlbG9jaXR5WSA9ICggKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpICkgLyBudW1iZXJPZkZyYW1lc1xuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgLy8gICAgIHg6IHZlbG9jaXR5WCxcbiAgICAgICAgLy8gICAgIHk6IHZlbG9jaXR5WVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWUgICAgICAgIFxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSBmYWxzZVxuICAgICAgICAvLyB9LCA1MDApO1xuXG4gICAgICAgIC8vIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcblxuICAgICAgICAvLyBQT1dFUkJBU0VEIEFJTUVEIFNIT09USU5HXG5cblxuICAgICAgICB0aGlzLnBvd2VyICs9IDFcblxuICAgICAgICBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICBpZiAodGhpcy5zaG9vdGluZ1RpbWVvdXQgJiYgdGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG9vdGluZ1RpbWVvdXQpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG93ZXIgPCA2MCkge1xuICAgICAgICAgICAgdGhpcy5zaG9vdGluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VCYWxsKClcbiAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVsZWFzZUJhbGwgKCkge1xuICAgICAgICBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuXG4gICAgICAgIGNvbnN0IHNjb3JlUG9zaXRpb24gPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueVxuICAgICAgICAgICAgfVxuICAgICAgICApIDogKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMubGVmdEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueCArICh0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC53aWR0aCAvIDIpLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMubGVmdEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueVxuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgLy8gTEFZVVBcbiAgICAgICAgaWYgKDE1MCA+IE1hdGguaHlwb3QodGhpcy5wb3NpdGlvbi54IC0gc2NvcmVQb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgLSBzY29yZVBvc2l0aW9uLnkpKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IDMwXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVkgPSAoKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpKSAvIG51bWJlck9mRnJhbWVzXG5cbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAodGhpcy5wb3dlciAtIDMwKSAvIDEwMFxuICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWRYID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgPyAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYICsgZGlmZlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eVggLSBkaWZmXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgICAgIHg6IGFkanVzdGVkWCxcbiAgICAgICAgICAgICAgICB5OiB2ZWxvY2l0eVlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNIT1RcbiAgICAgICAgICAgIGNvbnN0IG51bWJlck9mRnJhbWVzID0gNTBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdmVsb2NpdHlYID0gKHNjb3JlUG9zaXRpb24ueCAtIHRoaXMucG9zaXRpb24ueCkgLyBudW1iZXJPZkZyYW1lc1xuICAgICAgICAgICAgY29uc3QgdmVsb2NpdHlZID0gKCgtc2NvcmVQb3NpdGlvbi55ICsgdGhpcy5wb3NpdGlvbi55KSAtIDAuNSAqIC1DT05TVEFOVFMuR1JBVklUWSAqIChudW1iZXJPZkZyYW1lcyAqIG51bWJlck9mRnJhbWVzKSkgLyBudW1iZXJPZkZyYW1lc1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGlmZiA9ICh0aGlzLnBvd2VyIC0gMzApIC8gMTBcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkWCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCArIGRpZmZcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYIC0gZGlmZlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgICAgICB4OiBhZGp1c3RlZFgsXG4gICAgICAgICAgICAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gdHJ1ZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSBmYWxzZVxuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgICAgIHRoaXMucmVtb3ZlUG9zc2Vzc2lvbigpXG5cbiAgICB9XG5cbiAgICByZW1vdmVQb3NzZXNzaW9uKCkge1xuICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgIHNvY2tldC5lbWl0KFwicmVtb3ZlQmFsbFBvc3Nlc3Npb25cIiwge1xuICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZCxcbiAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb25cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5wb3NzZXNzaW9uKSB7XG4gICAgICAgICAgICB0aGlzLmZhbGwoKVxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbigpIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG4gICAgbW92ZVdpdGhQbGF5ZXJQb3NzZXNzaW9uKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnBvc3Nlc3Npb24uZmFjaW5nUmlnaHQgP1xuICAgICAgICAgICAgKHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi54ICsgdGhpcy5wb3NzZXNzaW9uLndpZHRoKSA6ICh0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueClcblxuICAgICAgICBpZiAodGhpcy5wb3NzZXNzaW9uLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIC8vIEhPTEQgQkFMTFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLnkgKyB0aGlzLnBvc3Nlc3Npb24uaGVpZ2h0IC8gMlxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEUklCQkxJTkdcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPCB0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueSArIHRoaXMucG9zc2Vzc2lvbi5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLUNPTlNUQU5UUy5EUklCQkxFX1NQRUVEXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+IHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi55ICsgdGhpcy5wb3NzZXNzaW9uLmhlaWdodCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkRSSUJCTEVfU1BFRURcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5LnlcbiAgICAgICAgfVxuICAgICAgICAvLyBzb2NrZXQuZW1pdChcInVwZGF0ZUJhbGxXaXRoUG9zXCIsIHtcbiAgICAgICAgLy8gICAgIGdhbWVJZDogdGhpcy5nYW1lSWQsXG4gICAgICAgIC8vICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgIC8vICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICAvLyAgICAgb3RoZXJQbGF5ZXJGYWNpbmc6IHRoaXMucG9zc2Vzc2lvbi5mYWNpbmdSaWdodFxuICAgICAgICAvLyB9KVxuICAgIH1cblxuXG4gICAgZmFsbCAoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgICAgIC8vIEdSQVZJVFlcbiAgICAgICAgLy8gaWYgdGhlIHBvcyBpcyBncmVhdGVyIHRoYW4gdGhlIGZsb29yXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnJhZGl1cyA8IHRoaXMuY291cnQucG9zaXRpb24ueSkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IENPTlNUQU5UUy5HUkFWSVRZO1xuICAgICAgICAgICAgLy8gZWxzZSBzZXQgdGhlIHJldmVyc2UgdmVsb2NpdHlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZlbG9jaXR5LnkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy52ZWxvY2l0eS55ICogQ09OU1RBTlRTLkJPVU5DRV9SRVRFTlRJT05cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2hlY2tCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY291cnQud2lkdGggLSB0aGlzLnJhZGl1c1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDBcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5LnhcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCBSZWN0IGZyb20gXCIuL3V0aWxzL3JlY3RcIjtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIENPVVJUX0ZMT09SOiAwLjg1LFxuICAgIENPVVJUX1dJRFRIOiA1XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VydCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogZGltZW5zaW9ucy53aWR0aCwgaGVpZ2h0OiBDT05TVEFOVFMuQ09VUlRfV0lEVEggfSlcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAqIENPTlNUQU5UUy5DT1VSVF9GTE9PUlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImdyZWVuXCJcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcidcbmltcG9ydCBDb3VydCBmcm9tICcuL2NvdXJ0JztcbmltcG9ydCBIb29wIGZyb20gJy4vaG9vcCc7XG5pbXBvcnQgQmFsbCBmcm9tICcuL2JhbGwnO1xuaW1wb3J0IFNjb3JlYm9hcmQgZnJvbSAnLi9zY29yZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIyIGZyb20gJy4vcGxheWVyMic7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9tZW51X3NjcmVlbnMvbWFpbl9tZW51JztcbmltcG9ydCBPbmxpbmVQbGF5ZXIgZnJvbSAnLi9vbmxpbmVfcGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTkJBSmFtR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLm1haW5NZW51ID0gbmV3IE1haW5NZW51KHRoaXMuZGltZW5zaW9ucywgdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKSwgdGhpcy5zdGFydE9ubGluZUdhbWUuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlck1lbnUoKVxuICAgIH1cblxuICAgIHNob3dNZW51KCkge1xuICAgICAgICB0aGlzLm1haW5NZW51LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICB0aGlzLnJlbmRlck1lbnUodGhpcy5jdHgpXG4gICAgfVxuXG4gICAgcmVuZGVyTWVudSAoKSB7XG4gICAgICAgIHRoaXMubWFpbk1lbnUucmVuZGVyKHRoaXMuY3R4KVxuICAgICAgICBpZiAoIXRoaXMucGxheWluZ0dhbWUpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlck1lbnUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lIChsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSkge1xuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gdHJ1ZVxuICAgICAgICB0aGlzLnJlc3RhcnQobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUpXG4gICAgfVxuXG4gICAgc3RhcnRPbmxpbmVHYW1lKGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlLCBteVNpZGUsIGdhbWVJZCkge1xuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gdHJ1ZVxuICAgICAgICB0aGlzLm9ubGluZUdhbWVJZCA9IGdhbWVJZFxuICAgICAgICB0aGlzLnJ1bk9ubGluZUdhbWUobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUsIG15U2lkZSlcbiAgICB9XG5cbiAgICByZXN0YXJ0KGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlKSB7XG4gICAgICAgIC8vIFNUQVJUIEFOSU1BVElPTiBTWUNMRVxuICAgICAgICB0aGlzLmNvdXJ0ID0gbmV3IENvdXJ0KHRoaXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiTEVGVFwiKTtcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiUklHSFRcIik7XG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKHRoaXMuZGltZW5zaW9ucywgdGhpcy5jb3VydCwgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3ApXG5cbiAgICAgICAgdGhpcy5zY29yZWJvYXJkID0gbmV3IFNjb3JlYm9hcmQodGhpcy5kaW1lbnNpb25zLCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcClcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCByaWdodFNwcml0ZSk7XG4gICAgICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgbGVmdFNwcml0ZSk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuICAgIFxuICAgIGFuaW1hdGUoKSB7ICAgICAgICBcbiAgICAgICAgLy8gQ1JFQVRFUyBCQUNLR1JPVU5EXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICAvLyBBTklNQVRFIE9CSkVDVFNcbiAgICAgICAgdGhpcy5wbGF5ZXIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMuYmFsbC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmxlZnRIb29wLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMucmlnaHRIb29wLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNjb3JlYm9hcmQuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5jb3VydC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5V2lubmVyKClcbiAgICAgICAgfVxuICAgICAgICAvLyBSRVFVRVNUIE5FWFQgRlJBTUVcbiAgICAgICAgaWYgKHRoaXMucGxheWluZ0dhbWUpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcnVuT25saW5lR2FtZShsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSwgbXlTaWRlKSB7XG4gICAgICAgIHRoaXMuY291cnQgPSBuZXcgQ291cnQodGhpcy5kaW1lbnNpb25zKTtcbiAgICAgICAgdGhpcy5sZWZ0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJMRUZUXCIpO1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJSSUdIVFwiKTtcbiAgICAgICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5kaW1lbnNpb25zLCB0aGlzLmNvdXJ0LCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcCwgdGhpcy5vbmxpbmVHYW1lSWQpXG5cbiAgICAgICAgdGhpcy5zY29yZWJvYXJkID0gbmV3IFNjb3JlYm9hcmQodGhpcy5kaW1lbnNpb25zLCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcClcblxuICAgICAgICBpZiAobXlTaWRlID09PSBcIkxFRlRcIikge1xuICAgICAgICAgICAgdGhpcy5teVBsYXllciA9IG5ldyBPbmxpbmVQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCBsZWZ0U3ByaXRlLCBcIkxFRlRcIiwgdHJ1ZSlcbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIgPSBuZXcgT25saW5lUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgcmlnaHRTcHJpdGUsIFwiUklHSFRcIiwgZmFsc2UpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyID0gbmV3IE9ubGluZVBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIGxlZnRTcHJpdGUsIFwiTEVGVFwiLCBmYWxzZSlcbiAgICAgICAgICAgIHRoaXMubXlQbGF5ZXIgPSBuZXcgT25saW5lUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgcmlnaHRTcHJpdGUsIFwiUklHSFRcIiwgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZU90aGVyUG9zXCIsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgIHg6IGRhdGFbXCJ4XCJdLFxuICAgICAgICAgICAgICAgIHk6IGRhdGFbXCJ5XCJdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllci5mYWNpbmdSaWdodCAgPSBkYXRhW1wib3RoZXJQbGF5ZXJGYWNpbmdcIl1cbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIuanVtcGluZyA9IGRhdGFbXCJvdGhlclBsYXllckp1bXBpbmdcIl1cbiAgICAgICAgfSkgXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZUJhbGxQb3NzZXNpb25cIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJhbGwucG9zc2Vzc2lvbiA9IHRoaXMub3RoZXJQbGF5ZXJcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlTm9CYWxsUG9zc2VzaW9uXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5iYWxsLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgICAgICB0aGlzLmJhbGwucG9zaXRpb24gPSBkYXRhW1wicG9zaXRpb25cIl1cbiAgICAgICAgICAgIHRoaXMuYmFsbC52ZWxvY2l0eSA9IGRhdGFbXCJ2ZWxvY2l0eVwiXVxuICAgICAgICB9KVxuICAgICAgICAvLyBzb2NrZXQub24oXCJ1cGRhdGVCYWxsUG9zXCIsIGRhdGEgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5iYWxsLnBvc2l0aW9uID0gZGF0YVtcInBvc2l0aW9uXCJdXG4gICAgICAgIC8vICAgICB0aGlzLmJhbGwudmVsb2NpdHkgPSBkYXRhW1widmVsb2NpdHlcIl1cbiAgICAgICAgLy8gICAgIHRoaXMub3RoZXJQbGF5ZXIuZmFjaW5nUmlnaHQgPSBkYXRhW1wib3RoZXJQbGF5ZXJGYWNpbmdcIl1cbiAgICAgICAgLy8gfSlcbiAgICAgICAgc29ja2V0Lm9uKFwiZW5kR2FtZUZyb21EaXNjb25uZWN0XCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWluZ0dhbWUgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5vbmxpbmVHYW1lSWQgPSBudWxsXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNZW51KClcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMucnVuT25saW5lKCk7XG4gICAgfVxuXG4gICAgcnVuT25saW5lICgpIHtcbiAgICAgICAgLy8gQ1JFQVRFUyBCQUNLR1JPVU5EXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG5cbiAgICAgICAgLy8gQU5JTUFURSBPQkpFQ1RTXG4gICAgICAgIHRoaXMub3RoZXJQbGF5ZXIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5teVBsYXllci5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5iYWxsLmFuaW1hdGUodGhpcy5jdHgpXG5cbiAgICAgICAgdGhpcy5sZWZ0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLnJpZ2h0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuXG4gICAgICAgIHRoaXMuc2NvcmVib2FyZC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmNvdXJ0LmFuaW1hdGUodGhpcy5jdHgpXG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5V2lubmVyKClcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc29ja2V0LmVtaXQoXCJ1cGRhdGVNeVBvc1wiLCB7XG4gICAgICAgICAgICBnYW1lSWQ6IHRoaXMub25saW5lR2FtZUlkLFxuICAgICAgICAgICAgZnJvbVNvY2tldDogc29ja2V0LmlkLFxuICAgICAgICAgICAgeDogdGhpcy5teVBsYXllci5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy5teVBsYXllci5wb3NpdGlvbi55LFxuICAgICAgICAgICAgb3RoZXJQbGF5ZXJGYWNpbmc6IHRoaXMubXlQbGF5ZXIuZmFjaW5nUmlnaHQsXG4gICAgICAgICAgICBvdGhlclBsYXllckp1bXBpbmc6IHRoaXMubXlQbGF5ZXIuanVtcGluZ1xuICAgICAgICB9KVxuICAgICAgICBzb2NrZXQuZW1pdChcInVwZGF0ZUJhbGxQb3NcIiwge1xuICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLm9ubGluZUdhbWVJZCxcbiAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgIHg6IHRoaXMuYmFsbC5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy5iYWxsLnBvc2l0aW9uLnlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gUkVRVUVTVCBORVhUIEZSQU1FXG4gICAgICAgIGlmICh0aGlzLnBsYXlpbmdHYW1lKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ydW5PbmxpbmUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG5cblxuICAgIGdhbWVPdmVyICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmVib2FyZC50aW1lTGVmdCA9PT0gMFxuICAgIH1cblxuICAgIGRpc3BsYXlXaW5uZXIgKCkge1xuICAgICAgICBsZXQgdGV4dDtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRIb29wLnNjb3JlID4gdGhpcy5sZWZ0SG9vcC5zY29yZSkge1xuICAgICAgICAgICAgdGV4dCA9IFwiUGxheWVyIDEgd2luc1wiXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0SG9vcC5zY29yZSA+IHRoaXMucmlnaHRIb29wLnNjb3JlKSB7XG4gICAgICAgICAgICB0ZXh0ID0gXCJQbGF5ZXIgMiB3aW5zXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQgPSBcIlRpZSBHYW1lXCJcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiB9XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke3RleHR9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoYCR7dGV4dH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlXG4gICAgICAgIHRoaXMub25saW5lR2FtZUlkID0gbnVsbFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lbnUoKVxuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgUmVjdCBmcm9tICcuL3V0aWxzL3JlY3QnXG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBIT09QX1lfTVVMVElQTElFUjogMC4zLFxuICAgIEhPT1BfSEVJR0hUOiA0MCxcbiAgICBIT09QX1dJRFRIOiA1MCxcbiAgICBIT09QX1hfRElTVEFOQ0U6IDUwLFxuICAgIEJBQ0tCT0FSRF9XSURUSDogMTUsXG4gICAgQkFDS0JPQVJEX0hFSUdIVDogNTAsXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9vcCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIGhvb3BTaWRlLCBiYWxsKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5IT09QX1dJRFRILCBoZWlnaHQ6IENPTlNUQU5UUy5IT09QX0hFSUdIVCB9KVxuICAgICAgICB0aGlzLmJhbGwgPSBiYWxsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgICAgICAwICsgQ09OU1RBTlRTLkhPT1BfWF9ESVNUQU5DRVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zLndpZHRoIC0gQ09OU1RBTlRTLkhPT1BfWF9ESVNUQU5DRSAtIHRoaXMud2lkdGhcbiAgICAgICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsIFxuICAgICAgICAgICAgeTogZGltZW5zaW9ucy5oZWlnaHQgKiBDT05TVEFOVFMuSE9PUF9ZX01VTFRJUExJRVJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tib2FyZCA9IG5ldyBCYWNrYm9hcmQodGhpcywgaG9vcFNpZGUpXG4gICAgICAgIHRoaXMuc2NvcmVIaXRib3ggPSBuZXcgU2NvcmVIaXRib3godGhpcywgaG9vcFNpZGUpXG4gICAgICAgIHRoaXMuY29sb3IgPSBcInB1cnBsZVwiXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgICAgIHRoaXMuanVzdFNjb3JlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5jaGVja0JhbGxDb2xsaXNpb24oKVxuICAgICAgICB0aGlzLmJhY2tib2FyZC5hbmltYXRlKGN0eClcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnNjb3JlSGl0Ym94LmFuaW1hdGUoY3R4KVxuICAgICAgICBpZiAodGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMuc2NvcmVIaXRib3gpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuanVzdFNjb3JlZCkgdGhpcy5zY29yZSArPSAyXG4gICAgICAgICAgICB0aGlzLmp1c3RTY29yZWQgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gXCJncmVlblwiXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1c3RTY29yZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcInB1cnBsZVwiXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCYWxsQ29sbGlzaW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzKSB8fCB0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcy5iYWNrYm9hcmQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5iYWxsLnBvc2l0aW9uLnkgLSB0aGlzLmJhbGwucmFkaXVzID4gdGhpcy5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFsbC52ZWxvY2l0eS55ID4gMCkgdGhpcy5iYWxsLnZlbG9jaXR5LnkgPSAtdGhpcy5iYWxsLnZlbG9jaXR5LnlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFsbC5wb3NpdGlvbi55ICsgdGhpcy5iYWxsLnJhZGl1cyA8IHRoaXMuYmFja2JvYXJkLnBvc2l0aW9uLnkgJiYgdGhpcy5iYWxsLnZlbG9jaXR5LnkgPCAwKSAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkueSA9IC10aGlzLmJhbGwudmVsb2NpdHkueVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkueCA9IC10aGlzLmJhbGwudmVsb2NpdHkueFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNsYXNzIFNjb3JlSGl0Ym94IGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoaG9vcCwgaG9vcFNpZGUpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLkhPT1BfV0lEVEggLSAzMCwgaGVpZ2h0OiBDT05TVEFOVFMuSE9PUF9IRUlHSFQgKiAwLjA1IH0pXG4gICAgICAgIGNvbnN0IHggPSBob29wU2lkZSA9PT0gXCJMRUZUXCIgPyAoXG4gICAgICAgICAgICBob29wLnBvc2l0aW9uLnggKyAxNVxuICAgICAgICApIDogKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54ICsgaG9vcC53aWR0aCAtIHRoaXMud2lkdGggLSAxNVxuICAgICAgICApXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogaG9vcC5wb3NpdGlvbi55XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwid2hpdGVcIlxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tib2FyZCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGhvb3AsIGhvb3BTaWRlKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5CQUNLQk9BUkRfV0lEVEgsIGhlaWdodDogQ09OU1RBTlRTLkJBQ0tCT0FSRF9IRUlHSFQgfSlcbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCBcbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCArIGhvb3Aud2lkdGggLSB0aGlzLndpZHRoXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiBob29wLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImFxdWFcIlxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59IiwiaW1wb3J0IGtleSBmcm9tICcuLi91dGlscy9rZXltYXN0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXJTZWxlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIHNlbGVjdGVkQ2hhcmFjdGVycykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzID0gc2VsZWN0ZWRDaGFyYWN0ZXJzXG4gICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gMFxuICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAxXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJSb2RtYW5cIiwgc3JjOiBcInNyYy9hc3NldHMvcm9kbWFuU21hbGwucG5nXCJ9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkRyYWtlXCIsIHNyYzogXCJzcmMvYXNzZXRzL2RyYWtlU21hbGwucG5nXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJMZWJyb25cIiwgc3JjOiBcInNyYy9hc3NldHMvbGVicm9uU21hbGwucG5nXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJQZWFjaFwiLCBzcmM6IFwic3JjL2Fzc2V0cy9wZWFjaFNtYWxsLnBuZ1wifVxuICAgICAgICBdXG4gICAgICAgIFxuICAgICAgICB0aGlzLmxlZnRDaGFyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMucmlnaHRDaGFyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubGVmdENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXS5zcmNcbiAgICAgICAgdGhpcy5yaWdodENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjXG5cbiAgICAgICAgdGhpcy5sZWZ0UmVhZHkgPSBmYWxzZVxuICAgICAgICB0aGlzLnJpZ2h0UmVhZHkgPSBmYWxzZVxuXG4gICAgICAgIHNvY2tldC5vbihcIm1hdGNoRm91bmRcIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRQbGF5ZXJJZCA9IGRhdGFbXCJsZWZ0UGxheWVySWRcIl1cbiAgICAgICAgICAgIHRoaXMucmlnaHRQbGF5ZXJJZCA9IGRhdGFbXCJyaWdodFBsYXllcklkXCJdXG4gICAgICAgICAgICBpZiAoc29ja2V0LmlkID09PSB0aGlzLmxlZnRQbGF5ZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nTGVmdCA9IHRydWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdSaWdodCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gMFxuICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gMVxuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSBkYXRhW1wiZ2FtZUlkXCJdXG4gICAgICAgIH0pXG5cbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZFNlbGVjdGVkQ2hhcnNcIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9IGRhdGFbXCJsZWZ0U2VsZWN0ZWRcIl1cbiAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9IGRhdGFbXCJyaWdodFNlbGVjdGVkXCJdXG4gICAgICAgIH0pXG5cbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZExlZnRSZWFkeVwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRSZWFkeSA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZFJpZ2h0UmVhZHlcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yaWdodFJlYWR5ID0gdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHNvY2tldC5vbihcInN0YXJ0R2FtZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBrZXkudW5iaW5kKCdkb3duJylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ3cnKVxuICAgICAgICAgICAga2V5LnVuYmluZCgncycpXG4gICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVycyh0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdLnNyYywgdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjLCB0aGlzLmdhbWVJZClcbiAgICAgICAgICAgIHRoaXMubGVmdFBsYXllcklkID0gXCJcIlxuICAgICAgICAgICAgdGhpcy5yaWdodFBsYXllcklkID0gXCJcIlxuICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAwXG4gICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAxXG4gICAgICAgICAgICB0aGlzLmxlZnRSZWFkeSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLnJpZ2h0UmVhZHkgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSBudWxsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eCkge1xuXG4gICAgICAgIHRoaXMubGVmdENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXS5zcmNcbiAgICAgICAgdGhpcy5yaWdodENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjXG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicHVycGxlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIExFRlQgU0lERVxuICAgICAgICBjb25zdCBsZWZ0U2lkZUNoYXIgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdXG4gICAgICAgIGxldCBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDQsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyfVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuXG4gICAgICAgIGlmICh0aGlzLm9ubGluZU1vZGUpIGN0eC5maWxsVGV4dChcIk9ubGluZSBNb2RlXCIsIGxvYy54LCBsb2MueSAtIDEwMClcbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgMTJwdCBzZXJpZlwiO1xuICAgICAgICBpZiAodGhpcy5sZWZ0UmVhZHkpIGN0eC5maWxsVGV4dChcIlJlYWR5XCIsIGxvYy54LCBsb2MueSAtIDcwKVxuICAgICAgICBpZiAodGhpcy5sZWZ0UGxheWVySWQgJiYgdGhpcy5yaWdodFBsYXllcklkKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy5sZWZ0UGxheWVySWR9YCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7c29ja2V0LmlkfWAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCR7bGVmdFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYCR7bGVmdFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRDaGFyLFxuICAgICAgICAgICAgbG9jLnggLSB0aGlzLmxlZnRDaGFyLndpZHRoIC8gMixcbiAgICAgICAgICAgIGxvYy55KVxuXG4gICAgICAgIC8vIFJJR0hUIFNJREVcbiAgICAgICAgY29uc3QgcmlnaHRTaWRlQ2hhciA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdXG4gICAgICAgIGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoICogMyAvIDQsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyIH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblxuICAgICAgICBpZiAodGhpcy5vbmxpbmVNb2RlKSBjdHguZmlsbFRleHQoXCJPbmxpbmUgTW9kZVwiLCBsb2MueCwgbG9jLnkgLSAxMDApXG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDEycHQgc2VyaWZcIjtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRSZWFkeSkgY3R4LmZpbGxUZXh0KFwiUmVhZHlcIiwgbG9jLngsIGxvYy55IC0gNzApXG4gICAgICAgIGlmICh0aGlzLmxlZnRQbGF5ZXJJZCAmJiB0aGlzLnJpZ2h0UGxheWVySWQpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChgJHt0aGlzLnJpZ2h0UGxheWVySWR9YCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYFdhaXRpbmcgZm9yIFBsYXllcmAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcblxuICAgICAgICBjdHguZmlsbFRleHQoYCR7cmlnaHRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGAke3JpZ2h0U2lkZUNoYXIubmFtZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMucmlnaHRDaGFyLFxuICAgICAgICAgICAgbG9jLnggLSB0aGlzLnJpZ2h0Q2hhci53aWR0aCAvIDIsXG4gICAgICAgICAgICBsb2MueSlcbiBcbiAgICB9XG5cbiAgICBzZXR1cEtleUhhbmRsZXJzKCkge1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm9ubGluZU1vZGUpIHtcbiAgICAgICAgICAgICAgICBrZXkoJ2Rvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgndXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgLSAxKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yaWdodFNlbGVjdGVkID09PSAtMSkgdGhpcy5yaWdodFNlbGVjdGVkID0gdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgndycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgncycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgLSAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdFNlbGVjdGVkID09PSAtMSkgdGhpcy5sZWZ0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgndycpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3MnKVxuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzKHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjLCB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmMpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBrZXkoJ3VwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmdMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9ICh0aGlzLmxlZnRTZWxlY3RlZCArIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0U2VsZWN0ZWQ6IHRoaXMucmlnaHRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1BsYXlpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gKHRoaXMucmlnaHRTZWxlY3RlZCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yaWdodFNlbGVjdGVkID09PSAtMSkgdGhpcy5yaWdodFNlbGVjdGVkID0gdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFNlbGVjdGVkOiB0aGlzLmxlZnRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ2Rvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUGxheWluZ0xlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkIC0gMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZWZ0U2VsZWN0ZWQgPT09IC0xKSB0aGlzLmxlZnRTZWxlY3RlZCA9IHRoaXMuY2hhcmFjdGVycy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnY2hhckNoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGxheWluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAodGhpcy5yaWdodFNlbGVjdGVkICsgMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnY2hhckNoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBrZXkoJ2VudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmdMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnbGVmdFJlYWR5Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1BsYXlpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3JpZ2h0UmVhZHknLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgIH1cblxuXG5cblxufSIsImltcG9ydCBrZXkgZnJvbSAnLi4vdXRpbHMva2V5bWFzdGVyJztcbmltcG9ydCBDaGFyYWN0ZXJTZWxlY3QgZnJvbSAnLi9jaGFyYWN0ZXJfc2VsZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUge1xuICAgIGNvbnN0cnVjdG9yIChkaW1lbnNpb25zLCBzdGFydEdhbWUsIHN0YXJ0T25saW5lR2FtZSkge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lID0gc3RhcnRHYW1lXG4gICAgICAgIHRoaXMuc3RhcnRPbmxpbmVHYW1lID0gc3RhcnRPbmxpbmVHYW1lXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSAwXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFtcIlN0YXJ0IEdhbWVcIiwgXCJPbmxpbmVcIl1cbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3QgPSBuZXcgQ2hhcmFjdGVyU2VsZWN0KHRoaXMuZGltZW5zaW9ucywgdGhpcy5zZWxlY3RlZENoYXJhY3RlcnMuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzID0gZmFsc2VcbiAgICAgICAgdGhpcy5zZXR1cEtleUhhbmRsZXJzKClcbiAgICB9XG5cbiAgICBzZWxlY3RlZENoYXJhY3RlcnMgKGxlZnRTcmMsIHJpZ2h0U3JjLCBnYW1lSWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzID0gZmFsc2VcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyU2VsZWN0Lm9ubGluZU1vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG15U2lkZSA9IHRoaXMuY2hhcmFjdGVyU2VsZWN0LmlzUGxheWluZ0xlZnQgPyBcIkxFRlRcIiA6IFwiUklHSFRcIlxuICAgICAgICAgICAgdGhpcy5zdGFydE9ubGluZUdhbWUobGVmdFNyYywgcmlnaHRTcmMsIG15U2lkZSwgZ2FtZUlkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUobGVmdFNyYywgcmlnaHRTcmMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbiAgICByZW5kZXIgKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJwdXJwbGVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvICgodGhpcy5vcHRpb25zLmxlbmd0aCArIDEpIC0gaSkgfVxuICAgICAgICAgICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBjdHgubWVhc3VyZVRleHQoYCR7b3B0aW9ufWApLndpZHRoXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PT0gaSkgY3R4LmZpbGxSZWN0KChsb2MueCAtIHdpZHRoIC8gMikgLSA1LCBsb2MueSAtIDQwLCB3aWR0aCArIDEwLCA1MCk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke29wdGlvbn1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHtvcHRpb259YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5yZW5kZXIoY3R4KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0dXBLZXlIYW5kbGVycygpIHtcbiAgICAgICAga2V5KCdkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9ICh0aGlzLnNlbGVjdGVkT3B0aW9uICsgMSkgJSB0aGlzLm9wdGlvbnMubGVuZ3RoXG4gICAgICAgIH0pXG4gICAgICAgIGtleSgndXAnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gTWF0aC5hYnMoKHRoaXMuc2VsZWN0ZWRPcHRpb24gLSAxKSAlIHRoaXMub3B0aW9ucy5sZW5ndGgpXG4gICAgICAgIH0pXG4gICAgICAgIGtleSgnZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2Rvd24nKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0Lm9ubGluZU1vZGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgndXAnKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2VudGVyJylcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Qub25saW5lTW9kZSA9IHRydWVcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgncGxheWVyQWRkZWRUb1F1ZXVlJywgc29ja2V0LmlkKVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIFxuXG5cblxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ubGluZVBsYXllciBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY291cnQsIGJhbGwsIHNwcml0ZVNyYywgc3RhcnRTaWRlLCBhY3RpdmUpIHtcbiAgICAgICAgc3VwZXIoY291cnQsIGJhbGwsIHNwcml0ZVNyYylcbiAgICAgICAgXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBzdGFydFNpZGUgPT09IFwiTEVGVFwiID8gKHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9KSA6ICh7XG4gICAgICAgICAgICB4OiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHk6IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkgdGhpcy5jb2xvciA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZVxuICAgIH1cblxuXG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZSgpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSA1LFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5zcHJpdGUuaGVpZ2h0IC8gMylcbiAgICB9XG5cbn1cblxuIiwiaW1wb3J0IFJlY3QgZnJvbSAnLi91dGlscy9yZWN0JztcbmltcG9ydCBrZXkgZnJvbSAnLi91dGlscy9rZXltYXN0ZXInO1xuXG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBHUkFWSVRZOiAwLjUsXG4gICAgUExBWUVSX1dJRFRIOiA0MCxcbiAgICBQTEFZRVJfSEVJR0hUOiA3MCxcbiAgICBNT1ZFU1BFRUQ6IDUsXG4gICAgLy8gV0lUSF9CQUxMX01PVkVTUEVFRDogMy41LFxuICAgIEpVTVBfSEVJR0hUOiAxNCxcbiAgICAvLyBPTl9GSVJFX0pVTVBfSEVJR0hUOiAxNlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoY291cnQsIGJhbGwsIHNwcml0ZVNyYykge1xuICAgICAgICBzdXBlcih7IHdpZHRoOiBDT05TVEFOVFMuUExBWUVSX1dJRFRILCBoZWlnaHQ6IENPTlNUQU5UUy5QTEFZRVJfSEVJR0hUIH0pXG4gICAgICAgIHRoaXMuY291cnQgPSBjb3VydFxuICAgICAgICB0aGlzLmJhbGwgPSBiYWxsXG5cbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY291cnQud2lkdGggLSB0aGlzLndpZHRoLFxuICAgICAgICAgICAgeTogdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLmRlbm5pc1JvZG1hbkhlYWQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgLy8gdGhpcy5kZW5uaXNSb2RtYW5IZWFkLnNyYyA9ICdzcmMvYXNzZXRzL2Rlbm5pc1JvZG1hbkhlYWQucG5nJ1xuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnNwcml0ZS5zcmMgPSBzcHJpdGVTcmNcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLm1vdmUoKTtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UodGhpcy5kZW5uaXNSb2RtYW5IZWFkLCBcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLndpZHRoICsgKHRoaXMuZGVubmlzUm9kbWFuSGVhZC53aWR0aCAvIDIpLCBcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCArICh0aGlzLmRlbm5pc1JvZG1hbkhlYWQuaGVpZ2h0IC8gMykpXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gNSxcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuc3ByaXRlLmhlaWdodCAvIDMpXG4gICAgfVxuXG4gICAgbW92ZSAoKSB7XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdyaWdodCcpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ2xlZnQnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpVTVBJTkdcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3VwJykgJiYgIXRoaXMuanVtcGluZykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkpVTVBfSEVJR0hUO1xuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJy8nKSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmb3JtQWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrQmFsbCgpIFxuXG4gICAgICAgIHRoaXMuaGFuZGxlR3Jhdml0eSgpXG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG4gICAgcHJlZm9ybUFjdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFsbC5wb3NzZXNzaW9uID09PSB0aGlzKSB7XG4gICAgICAgICAgICAvLyBIb2xkIHRvIHNob290LiBcbiAgICAgICAgICAgIHRoaXMuYmFsbC5zaG9vdCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0JhbGwoKSB7XG4gICAgICAgIGlmICghdGhpcy5iYWxsLnBvc3Nlc3Npb24gJiYgdGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMpKSB7XG4gICAgICAgICAgICB0aGlzLmJhbGwuY2xhaW1Qb3NzZXNzaW9uKHRoaXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVHcmF2aXR5KCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy52ZWxvY2l0eS55O1xuICAgICAgICAvLyBHUkFWSVRZXG4gICAgICAgIC8vIGlmIHRoZSBwb3MgaXMgZ3JlYXRlciB0aGFuIHRoZSBmbG9vclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgPCB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSAtPSBDT05TVEFOVFMuR1JBVklUWTtcbiAgICAgICAgICAgIC8vIGVsc2Ugc2V0IHRoZSBwb3MgdG8gdGhlIGZsb29yXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAwXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ID4gdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY291cnQud2lkdGggLSB0aGlzLndpZHRoXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMFxuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgR1JBVklUWTogMC41LFxuICAgIFBMQVlFUl9XSURUSDogNDAsXG4gICAgUExBWUVSX0hFSUdIVDogNzAsXG4gICAgTU9WRVNQRUVEOiA1LFxuICAgIC8vIFdJVEhfQkFMTF9NT1ZFU1BFRUQ6IDMuNSxcbiAgICBKVU1QX0hFSUdIVDogMTQsXG4gICAgLy8gT05fRklSRV9KVU1QX0hFSUdIVDogMTZcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllcjIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpIHtcbiAgICAgICAgc3VwZXIoY291cnQsIGJhbGwsIHNwcml0ZVNyYylcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnZCcpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ2EnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpVTVBJTkdcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3cnKSAmJiAhdGhpcy5qdW1waW5nKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSBDT05TVEFOVFMuSlVNUF9IRUlHSFQ7XG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgncScpKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZvcm1BY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tCYWxsKClcblxuICAgICAgICB0aGlzLmhhbmRsZUdyYXZpdHkoKVxuXG4gICAgICAgIHRoaXMuY2hlY2tCb3VuZHMoKVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIGxlZnRIb29wLCByaWdodEhvb3ApIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLmxlZnRIb29wID0gbGVmdEhvb3BcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSByaWdodEhvb3BcbiAgICAgICAgdGhpcy50aW1lTGVmdCA9IDYwXG4gICAgICAgIHRoaXMuY291bnREb3duID0gc2V0SW50ZXJ2YWwoKCkgPT4geyBcbiAgICAgICAgICAgIHRoaXMudGltZUxlZnQtLVxuICAgICAgICAgICAgaWYgKHRoaXMudGltZUxlZnQgPT09IDApIGNsZWFySW50ZXJ2YWwodGhpcy5jb3VudERvd24pXG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGFuaW1hdGUgKGN0eCkge1xuICAgICAgICBsZXQgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMTAgfVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiOyBcbiAgICAgICAgY3R4LmZpbGxUZXh0KGBQbGF5ZXIgMTogJHt0aGlzLnJpZ2h0SG9vcC5zY29yZX0gUGxheWVyIDI6ICR7dGhpcy5sZWZ0SG9vcC5zY29yZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguc3Ryb2tlVGV4dChgUGxheWVyIDE6ICR7dGhpcy5yaWdodEhvb3Auc2NvcmV9IFBsYXllciAyOiAke3RoaXMubGVmdEhvb3Auc2NvcmV9YCwgbG9jLngsIGxvYy55KTtcblxuICAgICAgICBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyA1IH1cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dChgJHt0aGlzLnRpbWVMZWZ0fWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGAke3RoaXMudGltZUxlZnR9YCwgbG9jLngsIGxvYy55KTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIHtcbiAgICBjb25zdHJ1Y3RvcihyYWRpdXMpIHtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgfVxuXG4gICAgaXNPdmVybGFwcGluZ1JlY3QocmVjdCkge1xuICAgICAgICBjb25zdCBkaXN0WCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueCAtIHJlY3QucG9zaXRpb24ueCAtIHJlY3Qud2lkdGggLyAyKTtcbiAgICAgICAgY29uc3QgZGlzdFkgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnkgLSByZWN0LnBvc2l0aW9uLnkgLSByZWN0LmhlaWdodCAvIDIpO1xuICAgICAgICBpZiAoZGlzdFggPiAocmVjdC53aWR0aCAvIDIgKyB0aGlzLnJhZGl1cykpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIGlmIChkaXN0WSA+IChyZWN0LmhlaWdodCAvIDIgKyB0aGlzLnJhZGl1cykpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICAgICAgaWYgKGRpc3RYIDw9IChyZWN0LndpZHRoIC8gMikpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgaWYgKGRpc3RZIDw9IChyZWN0LmhlaWdodCAvIDIpKSB7IHJldHVybiB0cnVlOyB9XG5cbiAgICAgICAgY29uc3QgZHggPSBkaXN0WCAtIHJlY3Qud2lkdGggLyAyO1xuICAgICAgICBjb25zdCBkeSA9IGRpc3RZIC0gcmVjdC5oZWlnaHQgLyAyO1xuICAgICAgICByZXR1cm4gKGR4ICogZHggKyBkeSAqIGR5IDw9ICh0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzKSk7XG4gICAgfVxuXG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHRcbiAgICAgICAgfTtcbiAgICB9XG5cbn0iLCIvLyAgICAga2V5bWFzdGVyLmpzXG4vLyAgICAgKGMpIDIwMTEtMjAxMyBUaG9tYXMgRnVjaHNcbi8vICAgICBrZXltYXN0ZXIuanMgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbjsgKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICB2YXIgayxcbiAgICAgICAgX2hhbmRsZXJzID0ge30sXG4gICAgICAgIF9tb2RzID0geyAxNjogZmFsc2UsIDE4OiBmYWxzZSwgMTc6IGZhbHNlLCA5MTogZmFsc2UgfSxcbiAgICAgICAgX3Njb3BlID0gJ2FsbCcsXG4gICAgICAgIC8vIG1vZGlmaWVyIGtleXNcbiAgICAgICAgX01PRElGSUVSUyA9IHtcbiAgICAgICAgICAgICfih6cnOiAxNiwgc2hpZnQ6IDE2LFxuICAgICAgICAgICAgJ+KMpSc6IDE4LCBhbHQ6IDE4LCBvcHRpb246IDE4LFxuICAgICAgICAgICAgJ+KMgyc6IDE3LCBjdHJsOiAxNywgY29udHJvbDogMTcsXG4gICAgICAgICAgICAn4oyYJzogOTEsIGNvbW1hbmQ6IDkxXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNwZWNpYWwga2V5c1xuICAgICAgICBfTUFQID0ge1xuICAgICAgICAgICAgYmFja3NwYWNlOiA4LCB0YWI6IDksIGNsZWFyOiAxMixcbiAgICAgICAgICAgIGVudGVyOiAxMywgJ3JldHVybic6IDEzLFxuICAgICAgICAgICAgZXNjOiAyNywgZXNjYXBlOiAyNywgc3BhY2U6IDMyLFxuICAgICAgICAgICAgbGVmdDogMzcsIHVwOiAzOCxcbiAgICAgICAgICAgIHJpZ2h0OiAzOSwgZG93bjogNDAsXG4gICAgICAgICAgICBkZWw6IDQ2LCAnZGVsZXRlJzogNDYsXG4gICAgICAgICAgICBob21lOiAzNiwgZW5kOiAzNSxcbiAgICAgICAgICAgIHBhZ2V1cDogMzMsIHBhZ2Vkb3duOiAzNCxcbiAgICAgICAgICAgICcsJzogMTg4LCAnLic6IDE5MCwgJy8nOiAxOTEsXG4gICAgICAgICAgICAnYCc6IDE5MiwgJy0nOiAxODksICc9JzogMTg3LFxuICAgICAgICAgICAgJzsnOiAxODYsICdcXCcnOiAyMjIsXG4gICAgICAgICAgICAnWyc6IDIxOSwgJ10nOiAyMjEsICdcXFxcJzogMjIwXG4gICAgICAgIH0sXG4gICAgICAgIGNvZGUgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIF9NQVBbeF0gfHwgeC50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIH0sXG4gICAgICAgIF9kb3duS2V5cyA9IFtdO1xuXG4gICAgZm9yIChrID0gMTsgayA8IDIwOyBrKyspIF9NQVBbJ2YnICsga10gPSAxMTEgKyBrO1xuXG4gICAgLy8gSUUgZG9lc24ndCBzdXBwb3J0IEFycmF5I2luZGV4T2YsIHNvIGhhdmUgYSBzaW1wbGUgcmVwbGFjZW1lbnRcbiAgICBmdW5jdGlvbiBpbmRleChhcnJheSwgaXRlbSkge1xuICAgICAgICB2YXIgaSA9IGFycmF5Lmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSkgaWYgKGFycmF5W2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIC8vIGZvciBjb21wYXJpbmcgbW9kcyBiZWZvcmUgdW5hc3NpZ25tZW50XG4gICAgZnVuY3Rpb24gY29tcGFyZUFycmF5KGExLCBhMikge1xuICAgICAgICBpZiAoYTEubGVuZ3RoICE9IGEyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGExLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYTFbaV0gIT09IGEyW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIG1vZGlmaWVyTWFwID0ge1xuICAgICAgICAxNjogJ3NoaWZ0S2V5JyxcbiAgICAgICAgMTg6ICdhbHRLZXknLFxuICAgICAgICAxNzogJ2N0cmxLZXknLFxuICAgICAgICA5MTogJ21ldGFLZXknXG4gICAgfTtcbiAgICBmdW5jdGlvbiB1cGRhdGVNb2RpZmllcktleShldmVudCkge1xuICAgICAgICBmb3IgKGsgaW4gX21vZHMpIF9tb2RzW2tdID0gZXZlbnRbbW9kaWZpZXJNYXBba11dO1xuICAgIH07XG5cbiAgICAvLyBoYW5kbGUga2V5ZG93biBldmVudFxuICAgIGZ1bmN0aW9uIGRpc3BhdGNoKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXksIGhhbmRsZXIsIGssIGksIG1vZGlmaWVyc01hdGNoLCBzY29wZTtcbiAgICAgICAga2V5ID0gZXZlbnQua2V5Q29kZTtcblxuICAgICAgICBpZiAoaW5kZXgoX2Rvd25LZXlzLCBrZXkpID09IC0xKSB7XG4gICAgICAgICAgICBfZG93bktleXMucHVzaChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgYSBtb2RpZmllciBrZXksIHNldCB0aGUga2V5Ljxtb2RpZmllcmtleW5hbWU+IHByb3BlcnR5IHRvIHRydWUgYW5kIHJldHVyblxuICAgICAgICBpZiAoa2V5ID09IDkzIHx8IGtleSA9PSAyMjQpIGtleSA9IDkxOyAvLyByaWdodCBjb21tYW5kIG9uIHdlYmtpdCwgY29tbWFuZCBvbiBHZWNrb1xuICAgICAgICBpZiAoa2V5IGluIF9tb2RzKSB7XG4gICAgICAgICAgICBfbW9kc1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICdhc3NpZ25LZXknIGZyb20gaW5zaWRlIHRoaXMgY2xvc3VyZSBpcyBleHBvcnRlZCB0byB3aW5kb3cua2V5XG4gICAgICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgaWYgKF9NT0RJRklFUlNba10gPT0ga2V5KSBhc3NpZ25LZXlba10gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZU1vZGlmaWVyS2V5KGV2ZW50KTtcblxuICAgICAgICAvLyBzZWUgaWYgd2UgbmVlZCB0byBpZ25vcmUgdGhlIGtleXByZXNzIChmaWx0ZXIoKSBjYW4gY2FuIGJlIG92ZXJyaWRkZW4pXG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgaWdub3JlIGtleSBwcmVzc2VzIGlmIGEgc2VsZWN0LCB0ZXh0YXJlYSwgb3IgaW5wdXQgaXMgZm9jdXNlZFxuICAgICAgICBpZiAoIWFzc2lnbktleS5maWx0ZXIuY2FsbCh0aGlzLCBldmVudCkpIHJldHVybjtcblxuICAgICAgICAvLyBhYm9ydCBpZiBubyBwb3RlbnRpYWxseSBtYXRjaGluZyBzaG9ydGN1dHMgZm91bmRcbiAgICAgICAgaWYgKCEoa2V5IGluIF9oYW5kbGVycykpIHJldHVybjtcblxuICAgICAgICBzY29wZSA9IGdldFNjb3BlKCk7XG5cbiAgICAgICAgLy8gZm9yIGVhY2ggcG90ZW50aWFsIHNob3J0Y3V0XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBfaGFuZGxlcnNba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFuZGxlciA9IF9oYW5kbGVyc1trZXldW2ldO1xuXG4gICAgICAgICAgICAvLyBzZWUgaWYgaXQncyBpbiB0aGUgY3VycmVudCBzY29wZVxuICAgICAgICAgICAgaWYgKGhhbmRsZXIuc2NvcGUgPT0gc2NvcGUgfHwgaGFuZGxlci5zY29wZSA9PSAnYWxsJykge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIG1vZGlmaWVycyBtYXRjaCBpZiBhbnlcbiAgICAgICAgICAgICAgICBtb2RpZmllcnNNYXRjaCA9IGhhbmRsZXIubW9kcy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgIGZvciAoayBpbiBfbW9kcylcbiAgICAgICAgICAgICAgICAgICAgaWYgKCghX21vZHNba10gJiYgaW5kZXgoaGFuZGxlci5tb2RzLCAraykgPiAtMSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChfbW9kc1trXSAmJiBpbmRleChoYW5kbGVyLm1vZHMsICtrKSA9PSAtMSkpIG1vZGlmaWVyc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gY2FsbCB0aGUgaGFuZGxlciBhbmQgc3RvcCB0aGUgZXZlbnQgaWYgbmVjY2Vzc2FyeVxuICAgICAgICAgICAgICAgIGlmICgoaGFuZGxlci5tb2RzLmxlbmd0aCA9PSAwICYmICFfbW9kc1sxNl0gJiYgIV9tb2RzWzE4XSAmJiAhX21vZHNbMTddICYmICFfbW9kc1s5MV0pIHx8IG1vZGlmaWVyc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyLm1ldGhvZChldmVudCwgaGFuZGxlcikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5jYW5jZWxCdWJibGUpIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gdW5zZXQgbW9kaWZpZXIga2V5cyBvbiBrZXl1cFxuICAgIGZ1bmN0aW9uIGNsZWFyTW9kaWZpZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIGtleSA9IGV2ZW50LmtleUNvZGUsIGssXG4gICAgICAgICAgICBpID0gaW5kZXgoX2Rvd25LZXlzLCBrZXkpO1xuXG4gICAgICAgIC8vIHJlbW92ZSBrZXkgZnJvbSBfZG93bktleXNcbiAgICAgICAgaWYgKGkgPj0gMCkge1xuICAgICAgICAgICAgX2Rvd25LZXlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gOTMgfHwga2V5ID09IDIyNCkga2V5ID0gOTE7XG4gICAgICAgIGlmIChrZXkgaW4gX21vZHMpIHtcbiAgICAgICAgICAgIF9tb2RzW2tleV0gPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoayBpbiBfTU9ESUZJRVJTKSBpZiAoX01PRElGSUVSU1trXSA9PSBrZXkpIGFzc2lnbktleVtrXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlc2V0TW9kaWZpZXJzKCkge1xuICAgICAgICBmb3IgKGsgaW4gX21vZHMpIF9tb2RzW2tdID0gZmFsc2U7XG4gICAgICAgIGZvciAoayBpbiBfTU9ESUZJRVJTKSBhc3NpZ25LZXlba10gPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgLy8gcGFyc2UgYW5kIGFzc2lnbiBzaG9ydGN1dFxuICAgIGZ1bmN0aW9uIGFzc2lnbktleShrZXksIHNjb3BlLCBtZXRob2QpIHtcbiAgICAgICAgdmFyIGtleXMsIG1vZHM7XG4gICAgICAgIGtleXMgPSBnZXRLZXlzKGtleSk7XG4gICAgICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbWV0aG9kID0gc2NvcGU7XG4gICAgICAgICAgICBzY29wZSA9ICdhbGwnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yIGVhY2ggc2hvcnRjdXRcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBzZXQgbW9kaWZpZXIga2V5cyBpZiBhbnlcbiAgICAgICAgICAgIG1vZHMgPSBbXTtcbiAgICAgICAgICAgIGtleSA9IGtleXNbaV0uc3BsaXQoJysnKTtcbiAgICAgICAgICAgIGlmIChrZXkubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIG1vZHMgPSBnZXRNb2RzKGtleSk7XG4gICAgICAgICAgICAgICAga2V5ID0gW2tleVtrZXkubGVuZ3RoIC0gMV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udmVydCB0byBrZXljb2RlIGFuZC4uLlxuICAgICAgICAgICAga2V5ID0ga2V5WzBdXG4gICAgICAgICAgICBrZXkgPSBjb2RlKGtleSk7XG4gICAgICAgICAgICAvLyAuLi5zdG9yZSBoYW5kbGVyXG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gX2hhbmRsZXJzKSkgX2hhbmRsZXJzW2tleV0gPSBbXTtcbiAgICAgICAgICAgIF9oYW5kbGVyc1trZXldLnB1c2goeyBzaG9ydGN1dDoga2V5c1tpXSwgc2NvcGU6IHNjb3BlLCBtZXRob2Q6IG1ldGhvZCwga2V5OiBrZXlzW2ldLCBtb2RzOiBtb2RzIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHVuYmluZCBhbGwgaGFuZGxlcnMgZm9yIGdpdmVuIGtleSBpbiBjdXJyZW50IHNjb3BlXG4gICAgZnVuY3Rpb24gdW5iaW5kS2V5KGtleSwgc2NvcGUpIHtcbiAgICAgICAgdmFyIG11bHRpcGxlS2V5cywga2V5cyxcbiAgICAgICAgICAgIG1vZHMgPSBbXSxcbiAgICAgICAgICAgIGksIGosIG9iajtcblxuICAgICAgICBtdWx0aXBsZUtleXMgPSBnZXRLZXlzKGtleSk7XG5cbiAgICAgICAgZm9yIChqID0gMDsgaiA8IG11bHRpcGxlS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAga2V5cyA9IG11bHRpcGxlS2V5c1tqXS5zcGxpdCgnKycpO1xuXG4gICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgbW9kcyA9IGdldE1vZHMoa2V5cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGtleSA9IGtleXNba2V5cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGtleSA9IGNvZGUoa2V5KTtcblxuICAgICAgICAgICAgaWYgKHNjb3BlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IGdldFNjb3BlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIV9oYW5kbGVyc1trZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IF9oYW5kbGVyc1trZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb2JqID0gX2hhbmRsZXJzW2tleV1baV07XG4gICAgICAgICAgICAgICAgLy8gb25seSBjbGVhciBoYW5kbGVycyBpZiBjb3JyZWN0IHNjb3BlIGFuZCBtb2RzIG1hdGNoXG4gICAgICAgICAgICAgICAgaWYgKG9iai5zY29wZSA9PT0gc2NvcGUgJiYgY29tcGFyZUFycmF5KG9iai5tb2RzLCBtb2RzKSkge1xuICAgICAgICAgICAgICAgICAgICBfaGFuZGxlcnNba2V5XVtpXSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIGtleSB3aXRoIGNvZGUgJ2tleUNvZGUnIGlzIGN1cnJlbnRseSBkb3duXG4gICAgLy8gQ29udmVydHMgc3RyaW5ncyBpbnRvIGtleSBjb2Rlcy5cbiAgICBmdW5jdGlvbiBpc1ByZXNzZWQoa2V5Q29kZSkge1xuICAgICAgICBpZiAodHlwZW9mIChrZXlDb2RlKSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAga2V5Q29kZSA9IGNvZGUoa2V5Q29kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4KF9kb3duS2V5cywga2V5Q29kZSkgIT0gLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJlc3NlZEtleUNvZGVzKCkge1xuICAgICAgICByZXR1cm4gX2Rvd25LZXlzLnNsaWNlKDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbHRlcihldmVudCkge1xuICAgICAgICB2YXIgdGFnTmFtZSA9IChldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCkudGFnTmFtZTtcbiAgICAgICAgLy8gaWdub3JlIGtleXByZXNzZWQgaW4gYW55IGVsZW1lbnRzIHRoYXQgc3VwcG9ydCBrZXlib2FyZCBkYXRhIGlucHV0XG4gICAgICAgIHJldHVybiAhKHRhZ05hbWUgPT0gJ0lOUFVUJyB8fCB0YWdOYW1lID09ICdTRUxFQ1QnIHx8IHRhZ05hbWUgPT0gJ1RFWFRBUkVBJyk7XG4gICAgfVxuXG4gICAgLy8gaW5pdGlhbGl6ZSBrZXkuPG1vZGlmaWVyPiB0byBmYWxzZVxuICAgIGZvciAoayBpbiBfTU9ESUZJRVJTKSBhc3NpZ25LZXlba10gPSBmYWxzZTtcblxuICAgIC8vIHNldCBjdXJyZW50IHNjb3BlIChkZWZhdWx0ICdhbGwnKVxuICAgIGZ1bmN0aW9uIHNldFNjb3BlKHNjb3BlKSB7IF9zY29wZSA9IHNjb3BlIHx8ICdhbGwnIH07XG4gICAgZnVuY3Rpb24gZ2V0U2NvcGUoKSB7IHJldHVybiBfc2NvcGUgfHwgJ2FsbCcgfTtcblxuICAgIC8vIGRlbGV0ZSBhbGwgaGFuZGxlcnMgZm9yIGEgZ2l2ZW4gc2NvcGVcbiAgICBmdW5jdGlvbiBkZWxldGVTY29wZShzY29wZSkge1xuICAgICAgICB2YXIga2V5LCBoYW5kbGVycywgaTtcblxuICAgICAgICBmb3IgKGtleSBpbiBfaGFuZGxlcnMpIHtcbiAgICAgICAgICAgIGhhbmRsZXJzID0gX2hhbmRsZXJzW2tleV07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOykge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyc1tpXS5zY29wZSA9PT0gc2NvcGUpIGhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBlbHNlIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBhYnN0cmFjdCBrZXkgbG9naWMgZm9yIGFzc2lnbiBhbmQgdW5hc3NpZ25cbiAgICBmdW5jdGlvbiBnZXRLZXlzKGtleSkge1xuICAgICAgICB2YXIga2V5cztcbiAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIGtleXMgPSBrZXkuc3BsaXQoJywnKTtcbiAgICAgICAgaWYgKChrZXlzW2tleXMubGVuZ3RoIC0gMV0pID09ICcnKSB7XG4gICAgICAgICAgICBrZXlzW2tleXMubGVuZ3RoIC0gMl0gKz0gJywnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH1cblxuICAgIC8vIGFic3RyYWN0IG1vZHMgbG9naWMgZm9yIGFzc2lnbiBhbmQgdW5hc3NpZ25cbiAgICBmdW5jdGlvbiBnZXRNb2RzKGtleSkge1xuICAgICAgICB2YXIgbW9kcyA9IGtleS5zbGljZSgwLCBrZXkubGVuZ3RoIC0gMSk7XG4gICAgICAgIGZvciAodmFyIG1pID0gMDsgbWkgPCBtb2RzLmxlbmd0aDsgbWkrKylcbiAgICAgICAgICAgIG1vZHNbbWldID0gX01PRElGSUVSU1ttb2RzW21pXV07XG4gICAgICAgIHJldHVybiBtb2RzO1xuICAgIH1cblxuICAgIC8vIGNyb3NzLWJyb3dzZXIgZXZlbnRzXG4gICAgZnVuY3Rpb24gYWRkRXZlbnQob2JqZWN0LCBldmVudCwgbWV0aG9kKSB7XG4gICAgICAgIGlmIChvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgIG9iamVjdC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBtZXRob2QsIGZhbHNlKTtcbiAgICAgICAgZWxzZSBpZiAob2JqZWN0LmF0dGFjaEV2ZW50KVxuICAgICAgICAgICAgb2JqZWN0LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgZnVuY3Rpb24gKCkgeyBtZXRob2Qod2luZG93LmV2ZW50KSB9KTtcbiAgICB9O1xuXG4gICAgLy8gc2V0IHRoZSBoYW5kbGVycyBnbG9iYWxseSBvbiBkb2N1bWVudFxuICAgIGFkZEV2ZW50KGRvY3VtZW50LCAna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkgeyBkaXNwYXRjaChldmVudCkgfSk7IC8vIFBhc3NpbmcgX3Njb3BlIHRvIGEgY2FsbGJhY2sgdG8gZW5zdXJlIGl0IHJlbWFpbnMgdGhlIHNhbWUgYnkgZXhlY3V0aW9uLiBGaXhlcyAjNDhcbiAgICBhZGRFdmVudChkb2N1bWVudCwgJ2tleXVwJywgY2xlYXJNb2RpZmllcik7XG5cbiAgICAvLyByZXNldCBtb2RpZmllcnMgdG8gZmFsc2Ugd2hlbmV2ZXIgdGhlIHdpbmRvdyBpcyAocmUpZm9jdXNlZC5cbiAgICBhZGRFdmVudCh3aW5kb3csICdmb2N1cycsIHJlc2V0TW9kaWZpZXJzKTtcblxuICAgIC8vIHN0b3JlIHByZXZpb3VzbHkgZGVmaW5lZCBrZXlcbiAgICB2YXIgcHJldmlvdXNLZXkgPSB3aW5kb3cua2V5O1xuXG4gICAgLy8gcmVzdG9yZSBwcmV2aW91c2x5IGRlZmluZWQga2V5IGFuZCByZXR1cm4gcmVmZXJlbmNlIHRvIG91ciBrZXkgb2JqZWN0XG4gICAgZnVuY3Rpb24gbm9Db25mbGljdCgpIHtcbiAgICAgICAgdmFyIGsgPSB3aW5kb3cua2V5O1xuICAgICAgICB3aW5kb3cua2V5ID0gcHJldmlvdXNLZXk7XG4gICAgICAgIHJldHVybiBrO1xuICAgIH1cblxuICAgIC8vIHNldCB3aW5kb3cua2V5IGFuZCB3aW5kb3cua2V5LnNldC9nZXQvZGVsZXRlU2NvcGUsIGFuZCB0aGUgZGVmYXVsdCBmaWx0ZXJcbiAgICB3aW5kb3cua2V5ID0gYXNzaWduS2V5O1xuICAgIHdpbmRvdy5rZXkuc2V0U2NvcGUgPSBzZXRTY29wZTtcbiAgICB3aW5kb3cua2V5LmdldFNjb3BlID0gZ2V0U2NvcGU7XG4gICAgd2luZG93LmtleS5kZWxldGVTY29wZSA9IGRlbGV0ZVNjb3BlO1xuICAgIHdpbmRvdy5rZXkuZmlsdGVyID0gZmlsdGVyO1xuICAgIHdpbmRvdy5rZXkuaXNQcmVzc2VkID0gaXNQcmVzc2VkO1xuICAgIHdpbmRvdy5rZXkuZ2V0UHJlc3NlZEtleUNvZGVzID0gZ2V0UHJlc3NlZEtleUNvZGVzO1xuICAgIHdpbmRvdy5rZXkubm9Db25mbGljdCA9IG5vQ29uZmxpY3Q7XG4gICAgd2luZG93LmtleS51bmJpbmQgPSB1bmJpbmRLZXk7XG5cbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIG1vZHVsZS5leHBvcnRzID0gYXNzaWduS2V5O1xuXG59KSh0aGlzKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBzaXplLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuICAgIH1cblxuICAgIGlzT3ZlcmxhcHBpbmdPdGhlclJlY3QocmVjdENsYXNzKSB7XG4gICAgICAgIGNvbnN0IG15Qm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKVxuICAgICAgICBjb25zdCByZWN0ID0gcmVjdENsYXNzLmdldEJvdW5kcygpXG4gICAgICAgIGlmIChteUJvdW5kcy5sZWZ0ID4gcmVjdC5yaWdodCB8fCBteUJvdW5kcy5yaWdodCA8IHJlY3QubGVmdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChteUJvdW5kcy50b3AgPiByZWN0LmJvdHRvbSB8fCBteUJvdW5kcy5ib3R0b20gPCByZWN0LnRvcCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==