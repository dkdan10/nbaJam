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

                var _diff = this.power - 30;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9jb3VydC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9ob29wLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvbWVudV9zY3JlZW5zL2NoYXJhY3Rlcl9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9tZW51X3NjcmVlbnMvbWFpbl9tZW51LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvb25saW5lX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllcjIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMva2V5bWFzdGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvcmVjdC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIk5CQUphbUdhbWUiLCJDT05TVEFOVFMiLCJSQURJVVMiLCJHUkFWSVRZIiwiQk9VTkNFX1JFVEVOVElPTiIsIkRSSUJCTEVfU1BFRUQiLCJCYWxsIiwiZGltZW5zaW9ucyIsImNvdXJ0IiwibGVmdEhvb3AiLCJyaWdodEhvb3AiLCJnYW1lSWQiLCJiYWxsIiwicG9zaXRpb24iLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwidmVsb2NpdHkiLCJjb2xvciIsInBvc3Nlc3Npb24iLCJub1RvdWNoIiwicG93ZXIiLCJjdHgiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwicmFkaXVzIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsInBsYXllciIsInNvY2tldCIsImVtaXQiLCJmcm9tU29ja2V0IiwiaWQiLCJzaG9vdGluZ1BsYXllciIsImZhY2luZ1JpZ2h0Iiwic2hvb3RpbmdUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbGVhc2VCYWxsIiwic2NvcmVQb3NpdGlvbiIsInNjb3JlSGl0Ym94IiwiaHlwb3QiLCJudW1iZXJPZkZyYW1lcyIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsImRpZmYiLCJhZGp1c3RlZFgiLCJyZW1vdmVQb3NzZXNzaW9uIiwiZmFsbCIsIm1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbiIsImNoZWNrQm91bmRzIiwianVtcGluZyIsIkNpcmNsZSIsIkNPVVJUX0ZMT09SIiwiQ09VUlRfV0lEVEgiLCJDb3VydCIsImZpbGxSZWN0IiwiUmVjdCIsImdldENvbnRleHQiLCJtYWluTWVudSIsIk1haW5NZW51Iiwic3RhcnRHYW1lIiwiYmluZCIsInN0YXJ0T25saW5lR2FtZSIsInBsYXlpbmdHYW1lIiwicmVuZGVyTWVudSIsInNldHVwS2V5SGFuZGxlcnMiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsZWZ0U3ByaXRlIiwicmlnaHRTcHJpdGUiLCJyZXN0YXJ0IiwibXlTaWRlIiwib25saW5lR2FtZUlkIiwicnVuT25saW5lR2FtZSIsIkhvb3AiLCJzY29yZWJvYXJkIiwiU2NvcmVib2FyZCIsIlBsYXllciIsInBsYXllcjIiLCJQbGF5ZXIyIiwiYW5pbWF0ZSIsImdhbWVPdmVyIiwiZGlzcGxheVdpbm5lciIsIm15UGxheWVyIiwiT25saW5lUGxheWVyIiwib3RoZXJQbGF5ZXIiLCJvbiIsImRhdGEiLCJzaG93TWVudSIsInJ1bk9ubGluZSIsIm90aGVyUGxheWVyRmFjaW5nIiwib3RoZXJQbGF5ZXJKdW1waW5nIiwidGltZUxlZnQiLCJ0ZXh0Iiwic2NvcmUiLCJsb2MiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZVRleHQiLCJIT09QX1lfTVVMVElQTElFUiIsIkhPT1BfSEVJR0hUIiwiSE9PUF9XSURUSCIsIkhPT1BfWF9ESVNUQU5DRSIsIkJBQ0tCT0FSRF9XSURUSCIsIkJBQ0tCT0FSRF9IRUlHSFQiLCJob29wU2lkZSIsImJhY2tib2FyZCIsIkJhY2tib2FyZCIsIlNjb3JlSGl0Ym94IiwianVzdFNjb3JlZCIsImNoZWNrQmFsbENvbGxpc2lvbiIsImlzT3ZlcmxhcHBpbmdSZWN0IiwiaG9vcCIsIkNoYXJhY3RlclNlbGVjdCIsInNlbGVjdGVkQ2hhcmFjdGVycyIsImxlZnRTZWxlY3RlZCIsInJpZ2h0U2VsZWN0ZWQiLCJjaGFyYWN0ZXJzIiwibmFtZSIsInNyYyIsImxlZnRDaGFyIiwiSW1hZ2UiLCJyaWdodENoYXIiLCJsZWZ0UmVhZHkiLCJyaWdodFJlYWR5IiwibGVmdFBsYXllcklkIiwicmlnaHRQbGF5ZXJJZCIsImlzUGxheWluZ0xlZnQiLCJpc1BsYXlpbmdSaWdodCIsImtleSIsInVuYmluZCIsImxlZnRTaWRlQ2hhciIsIm9ubGluZU1vZGUiLCJkcmF3SW1hZ2UiLCJyaWdodFNpZGVDaGFyIiwibGVuZ3RoIiwic2VsZWN0ZWRPcHRpb24iLCJvcHRpb25zIiwiY2hhcmFjdGVyU2VsZWN0Iiwic2VsZWN0aW5nQ2hhcmFjdGVycyIsImxlZnRTcmMiLCJyaWdodFNyYyIsImZvckVhY2giLCJvcHRpb24iLCJpIiwibWVhc3VyZVRleHQiLCJhYnMiLCJzcHJpdGVTcmMiLCJzdGFydFNpZGUiLCJhY3RpdmUiLCJzcHJpdGUiLCJQTEFZRVJfV0lEVEgiLCJQTEFZRVJfSEVJR0hUIiwiTU9WRVNQRUVEIiwiSlVNUF9IRUlHSFQiLCJpc1ByZXNzZWQiLCJwcmVmb3JtQWN0aW9uIiwiY2hlY2tCYWxsIiwiaGFuZGxlR3Jhdml0eSIsInNob290IiwiY2xhaW1Qb3NzZXNzaW9uIiwiY291bnREb3duIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicmVjdCIsImRpc3RYIiwiZGlzdFkiLCJkeCIsImR5IiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiZ2xvYmFsIiwiayIsIl9oYW5kbGVycyIsIl9tb2RzIiwiX3Njb3BlIiwiX01PRElGSUVSUyIsInNoaWZ0IiwiYWx0IiwiY3RybCIsImNvbnRyb2wiLCJjb21tYW5kIiwiX01BUCIsImJhY2tzcGFjZSIsInRhYiIsImNsZWFyIiwiZW50ZXIiLCJlc2MiLCJlc2NhcGUiLCJzcGFjZSIsInVwIiwiZG93biIsImRlbCIsImhvbWUiLCJlbmQiLCJwYWdldXAiLCJwYWdlZG93biIsImNvZGUiLCJ0b1VwcGVyQ2FzZSIsImNoYXJDb2RlQXQiLCJfZG93bktleXMiLCJpbmRleCIsImFycmF5IiwiaXRlbSIsImNvbXBhcmVBcnJheSIsImExIiwiYTIiLCJtb2RpZmllck1hcCIsInVwZGF0ZU1vZGlmaWVyS2V5IiwiZXZlbnQiLCJkaXNwYXRjaCIsImhhbmRsZXIiLCJtb2RpZmllcnNNYXRjaCIsInNjb3BlIiwia2V5Q29kZSIsInB1c2giLCJhc3NpZ25LZXkiLCJmaWx0ZXIiLCJjYWxsIiwiZ2V0U2NvcGUiLCJtb2RzIiwibWV0aG9kIiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsInN0b3BQcm9wYWdhdGlvbiIsImNhbmNlbEJ1YmJsZSIsImNsZWFyTW9kaWZpZXIiLCJzcGxpY2UiLCJyZXNldE1vZGlmaWVycyIsImtleXMiLCJnZXRLZXlzIiwidW5kZWZpbmVkIiwic3BsaXQiLCJnZXRNb2RzIiwic2hvcnRjdXQiLCJ1bmJpbmRLZXkiLCJtdWx0aXBsZUtleXMiLCJqIiwib2JqIiwiZ2V0UHJlc3NlZEtleUNvZGVzIiwic2xpY2UiLCJ0YWdOYW1lIiwidGFyZ2V0Iiwic3JjRWxlbWVudCIsInNldFNjb3BlIiwiZGVsZXRlU2NvcGUiLCJoYW5kbGVycyIsInJlcGxhY2UiLCJtaSIsImFkZEV2ZW50Iiwib2JqZWN0IiwiYXR0YWNoRXZlbnQiLCJ3aW5kb3ciLCJwcmV2aW91c0tleSIsIm5vQ29uZmxpY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwic2l6ZSIsInJlY3RDbGFzcyIsIm15Qm91bmRzIiwiZ2V0Qm91bmRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7OztBQUVBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxRQUFNQyxTQUFTRixTQUFTRyxjQUFULENBQXdCLGNBQXhCLENBQWY7QUFDQSxRQUFJQyxjQUFKLENBQWVGLE1BQWY7QUFDSCxDQUhELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1HLFlBQVk7QUFDZEMsWUFBUSxFQURN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N1AsS0FBTCxHQUFhNlAsS0FBSzdQLEtBQWxCO0FBQ0EsYUFBS0UsTUFBTCxHQUFjMlAsS0FBSzNQLE1BQW5CO0FBQ0g7Ozs7K0NBRXNCNFAsUyxFQUFXO0FBQzlCLGdCQUFNQyxXQUFXLEtBQUtDLFNBQUwsRUFBakI7QUFDQSxnQkFBTWxHLE9BQU9nRyxVQUFVRSxTQUFWLEVBQWI7QUFDQSxnQkFBSUQsU0FBUzVGLElBQVQsR0FBZ0JMLEtBQUtNLEtBQXJCLElBQThCMkYsU0FBUzNGLEtBQVQsR0FBaUJOLEtBQUtLLElBQXhELEVBQThEO0FBQzFELHVCQUFPLEtBQVA7QUFDSDtBQUNELGdCQUFJNEYsU0FBUzFGLEdBQVQsR0FBZVAsS0FBS1EsTUFBcEIsSUFBOEJ5RixTQUFTekYsTUFBVCxHQUFrQlIsS0FBS08sR0FBekQsRUFBOEQ7QUFDMUQsdUJBQU8sS0FBUDtBQUNIO0FBQ0QsbUJBQU8sSUFBUDtBQUNIOzs7b0NBRVc7QUFDUixtQkFBTztBQUNIRixzQkFBTSxLQUFLckssUUFBTCxDQUFjQyxDQURqQjtBQUVIcUssdUJBQU8sS0FBS3RLLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLQyxLQUYzQjtBQUdIcUsscUJBQUssS0FBS3ZLLFFBQUwsQ0FBY0csQ0FIaEI7QUFJSHFLLHdCQUFRLEtBQUt4SyxRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS0M7QUFKNUIsYUFBUDtBQU1IOzs7Ozs7a0JBekJnQjZDLEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY2xpZW50L3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBOQkFKYW1HYW1lIGZyb20gJy4vanMvZ2FtZS5qcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmJhLWphbS1nYW1lJyk7XG4gICAgbmV3IE5CQUphbUdhbWUoY2FudmFzKTtcbn0pOyIsImltcG9ydCBDaXJjbGUgZnJvbSBcIi4vdXRpbHMvY2lyY2xlXCI7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBSQURJVVM6IDE1LFxuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBCT1VOQ0VfUkVURU5USU9OOiAwLjYsXG4gICAgRFJJQkJMRV9TUEVFRDogMyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCBleHRlbmRzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgY291cnQsIGxlZnRIb29wLCByaWdodEhvb3AsIGdhbWVJZCkge1xuICAgICAgICBzdXBlcihDT05TVEFOVFMuUkFESVVTKVxuICAgICAgICB0aGlzLmNvdXJ0ID0gY291cnRcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLmxlZnRIb29wID0gbGVmdEhvb3BcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSByaWdodEhvb3BcbiAgICAgICAgdGhpcy5sZWZ0SG9vcC5iYWxsID0gdGhpc1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcC5iYWxsID0gdGhpc1xuXG4gICAgICAgIHRoaXMuZ2FtZUlkID0gZ2FtZUlkXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY291cnQud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJob3RwaW5rXCJcbiAgICAgICAgdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuICAgICAgICB0aGlzLm5vVG91Y2ggPSB7fVxuICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLngsIFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55LCBcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLCBcbiAgICAgICAgICAgIDAsIFxuICAgICAgICAgICAgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICBcbiAgICBjbGFpbVBvc3Nlc3Npb24ocGxheWVyKSB7XG4gICAgICAgIGlmICghdGhpcy5ub1RvdWNoW3BsYXllci5jb2xvcl0pIHtcbiAgICAgICAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IHBsYXllclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJjaGFuZ2VPZlBvc3Nlc2lvblwiLCB7XG4gICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZCxcbiAgICAgICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNob290ICgpIHtcbiAgICAgICAgLy8gQkVUQSBTSE9PVElOR1xuXG4gICAgICAgIC8vIHRoaXMucG93ZXIgKz0gMVxuICAgICAgICAvLyBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICAvLyBpZiAodGhpcy5zaG9vdGluZ0ludGVydmFsICYmIHRoaXMucG93ZXIgPCA2MCkge1xuICAgICAgICAvLyAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2hvb3RpbmdJbnRlcnZhbClcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNob290aW5nSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IDYgOiAtNlxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IHRoaXMucG93ZXJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSB0cnVlICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IGZhbHNlXG4gICAgICAgIC8vICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgICAgICAvLyAgICAgfSwgMjApO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gQUlNQk9UIFNIT09USU5HXG5cbiAgICAgICAgLy8gY29uc3Qgc2hvb3RpbmdQbGF5ZXIgPSB0aGlzLnBvc3Nlc3Npb25cbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi54ID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgP1xuICAgICAgICAvLyAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggKyBzaG9vdGluZ1BsYXllci53aWR0aCArIHRoaXMucmFkaXVzKSA6XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzKVxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnkgPSBzaG9vdGluZ1BsYXllci5wb3NpdGlvbi55XG5cbiAgICAgICAgLy8gY29uc3Qgc2NvcmVQb3NpdGlvbiA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIHg6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgLy8gICAgICAgICB5OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICkgOiAoXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgeDogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgIC8vICAgICAgICAgeTogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gKVxuXG4gICAgICAgIC8vIGNvbnN0IG51bWJlck9mRnJhbWVzID0gNTBcblxuICAgICAgICAvLyBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgIC8vIGNvbnN0IHZlbG9jaXR5WSA9ICggKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpICkgLyBudW1iZXJPZkZyYW1lc1xuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgLy8gICAgIHg6IHZlbG9jaXR5WCxcbiAgICAgICAgLy8gICAgIHk6IHZlbG9jaXR5WVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWUgICAgICAgIFxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSBmYWxzZVxuICAgICAgICAvLyB9LCA1MDApO1xuXG4gICAgICAgIC8vIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcblxuICAgICAgICAvLyBQT1dFUkJBU0VEIEFJTUVEIFNIT09USU5HXG5cblxuICAgICAgICB0aGlzLnBvd2VyICs9IDFcblxuICAgICAgICBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICBpZiAodGhpcy5zaG9vdGluZ1RpbWVvdXQgJiYgdGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG9vdGluZ1RpbWVvdXQpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG93ZXIgPCA2MCkge1xuICAgICAgICAgICAgdGhpcy5zaG9vdGluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VCYWxsKClcbiAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVsZWFzZUJhbGwgKCkge1xuICAgICAgICBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuXG4gICAgICAgIGNvbnN0IHNjb3JlUG9zaXRpb24gPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueVxuICAgICAgICAgICAgfVxuICAgICAgICApIDogKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMubGVmdEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueCArICh0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC53aWR0aCAvIDIpLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMubGVmdEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueVxuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgLy8gTEFZVVBcbiAgICAgICAgaWYgKDE1MCA+IE1hdGguaHlwb3QodGhpcy5wb3NpdGlvbi54IC0gc2NvcmVQb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgLSBzY29yZVBvc2l0aW9uLnkpKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IDMwXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVkgPSAoKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpKSAvIG51bWJlck9mRnJhbWVzXG5cbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAodGhpcy5wb3dlciAtIDMwKSAvIDIwXG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZFggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eVggKyBkaWZmXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCAtIGRpZmZcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICAgICAgeDogYWRqdXN0ZWRYLFxuICAgICAgICAgICAgICAgIHk6IHZlbG9jaXR5WVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU0hPVFxuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSA1MFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVkgPSAoKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpKSAvIG51bWJlck9mRnJhbWVzXG4gICAgXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gKHRoaXMucG93ZXIgLSAzMCkgXG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZFggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eVggKyBkaWZmXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCAtIGRpZmZcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICAgICAgeDogYWRqdXN0ZWRYLFxuICAgICAgICAgICAgICAgIHk6IHZlbG9jaXR5WVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWVcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gZmFsc2VcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgICAgICB0aGlzLnJlbW92ZVBvc3Nlc3Npb24oKVxuXG4gICAgfVxuXG4gICAgcmVtb3ZlUG9zc2Vzc2lvbigpIHtcbiAgICAgICAgdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuICAgICAgICBzb2NrZXQuZW1pdChcInJlbW92ZUJhbGxQb3NzZXNzaW9uXCIsIHtcbiAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWQsXG4gICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbW92ZSgpIHtcblxuICAgICAgICBpZiAoIXRoaXMucG9zc2Vzc2lvbikge1xuICAgICAgICAgICAgdGhpcy5mYWxsKClcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb3ZlV2l0aFBsYXllclBvc3Nlc3Npb24oKSBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tCb3VuZHMoKVxuICAgIH1cblxuICAgIG1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbigpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5wb3NzZXNzaW9uLmZhY2luZ1JpZ2h0ID9cbiAgICAgICAgICAgICh0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueCArIHRoaXMucG9zc2Vzc2lvbi53aWR0aCkgOiAodGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLngpXG5cbiAgICAgICAgaWYgKHRoaXMucG9zc2Vzc2lvbi5qdW1waW5nKSB7XG4gICAgICAgICAgICAvLyBIT0xEIEJBTExcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi55ICsgdGhpcy5wb3NzZXNzaW9uLmhlaWdodCAvIDJcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRFJJQkJMSU5HXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55IDwgdGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLnkgKyB0aGlzLnBvc3Nlc3Npb24uaGVpZ2h0IC8gMikge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IC1DT05TVEFOVFMuRFJJQkJMRV9TUEVFRFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPiB0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueSArIHRoaXMucG9zc2Vzc2lvbi5oZWlnaHQgLSB0aGlzLnJhZGl1cykge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5EUklCQkxFX1NQRUVEXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy52ZWxvY2l0eS55XG4gICAgICAgIH1cbiAgICAgICAgLy8gc29ja2V0LmVtaXQoXCJ1cGRhdGVCYWxsV2l0aFBvc1wiLCB7XG4gICAgICAgIC8vICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkLFxuICAgICAgICAvLyAgICAgZnJvbVNvY2tldDogc29ja2V0LmlkLFxuICAgICAgICAvLyAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHksXG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgICAgLy8gICAgIG90aGVyUGxheWVyRmFjaW5nOiB0aGlzLnBvc3Nlc3Npb24uZmFjaW5nUmlnaHRcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cblxuICAgIGZhbGwgKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy52ZWxvY2l0eS55O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgICAgICAvLyBHUkFWSVRZXG4gICAgICAgIC8vIGlmIHRoZSBwb3MgaXMgZ3JlYXRlciB0aGFuIHRoZSBmbG9vclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5yYWRpdXMgPCB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSAtPSBDT05TVEFOVFMuR1JBVklUWTtcbiAgICAgICAgICAgIC8vIGVsc2Ugc2V0IHRoZSByZXZlcnNlIHZlbG9jaXR5XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52ZWxvY2l0eS55IDwgMCkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueSAqIENPTlNUQU5UUy5CT1VOQ0VfUkVURU5USU9OXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNoZWNrQm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ID4gdGhpcy5jb3VydC53aWR0aCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy5yYWRpdXNcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5LnhcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgUmVjdCBmcm9tIFwiLi91dGlscy9yZWN0XCI7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBDT1VSVF9GTE9PUjogMC44NSxcbiAgICBDT1VSVF9XSURUSDogNVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291cnQgZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IGRpbWVuc2lvbnMud2lkdGgsIGhlaWdodDogQ09OU1RBTlRTLkNPVVJUX1dJRFRIIH0pXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogZGltZW5zaW9ucy5oZWlnaHQgKiBDT05TVEFOVFMuQ09VUlRfRkxPT1JcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJncmVlblwiXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInXG5pbXBvcnQgQ291cnQgZnJvbSAnLi9jb3VydCc7XG5pbXBvcnQgSG9vcCBmcm9tICcuL2hvb3AnO1xuaW1wb3J0IEJhbGwgZnJvbSAnLi9iYWxsJztcbmltcG9ydCBTY29yZWJvYXJkIGZyb20gJy4vc2NvcmVib2FyZCc7XG5pbXBvcnQgUGxheWVyMiBmcm9tICcuL3BsYXllcjInO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vbWVudV9zY3JlZW5zL21haW5fbWVudSc7XG5pbXBvcnQgT25saW5lUGxheWVyIGZyb20gJy4vb25saW5lX3BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5CQUphbUdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykgeyAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICAgICAgdGhpcy5tYWluTWVudSA9IG5ldyBNYWluTWVudSh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyksIHRoaXMuc3RhcnRPbmxpbmVHYW1lLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMucGxheWluZ0dhbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW5kZXJNZW51KClcbiAgICB9XG5cbiAgICBzaG93TWVudSgpIHtcbiAgICAgICAgdGhpcy5tYWluTWVudS5zZXR1cEtleUhhbmRsZXJzKClcbiAgICAgICAgdGhpcy5yZW5kZXJNZW51KHRoaXMuY3R4KVxuICAgIH1cblxuICAgIHJlbmRlck1lbnUgKCkge1xuICAgICAgICB0aGlzLm1haW5NZW51LnJlbmRlcih0aGlzLmN0eClcbiAgICAgICAgaWYgKCF0aGlzLnBsYXlpbmdHYW1lKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXJNZW51LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHN0YXJ0R2FtZSAobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUpIHtcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IHRydWVcbiAgICAgICAgdGhpcy5yZXN0YXJ0KGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlKVxuICAgIH1cblxuICAgIHN0YXJ0T25saW5lR2FtZShsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSwgbXlTaWRlLCBnYW1lSWQpIHtcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IHRydWVcbiAgICAgICAgdGhpcy5vbmxpbmVHYW1lSWQgPSBnYW1lSWRcbiAgICAgICAgdGhpcy5ydW5PbmxpbmVHYW1lKGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlLCBteVNpZGUpXG4gICAgfVxuXG4gICAgcmVzdGFydChsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSkge1xuICAgICAgICAvLyBTVEFSVCBBTklNQVRJT04gU1lDTEVcbiAgICAgICAgdGhpcy5jb3VydCA9IG5ldyBDb3VydCh0aGlzLmRpbWVuc2lvbnMpO1xuICAgICAgICB0aGlzLmxlZnRIb29wID0gbmV3IEhvb3AodGhpcy5kaW1lbnNpb25zLCBcIkxFRlRcIik7XG4gICAgICAgIHRoaXMucmlnaHRIb29wID0gbmV3IEhvb3AodGhpcy5kaW1lbnNpb25zLCBcIlJJR0hUXCIpO1xuICAgICAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuY291cnQsIHRoaXMubGVmdEhvb3AsIHRoaXMucmlnaHRIb29wKVxuXG4gICAgICAgIHRoaXMuc2NvcmVib2FyZCA9IG5ldyBTY29yZWJvYXJkKHRoaXMuZGltZW5zaW9ucywgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3ApXG5cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgcmlnaHRTcHJpdGUpO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyMih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIGxlZnRTcHJpdGUpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cbiAgICBcbiAgICBhbmltYXRlKCkgeyAgICAgICAgXG4gICAgICAgIC8vIENSRUFURVMgQkFDS0dST1VORFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIm9yYW5nZVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBcbiAgICAgICAgLy8gQU5JTUFURSBPQkpFQ1RTXG4gICAgICAgIHRoaXMucGxheWVyLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMucGxheWVyMi5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmJhbGwuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5sZWZ0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLnJpZ2h0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zY29yZWJvYXJkLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMuY291cnQuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVdpbm5lcigpXG4gICAgICAgIH1cbiAgICAgICAgLy8gUkVRVUVTVCBORVhUIEZSQU1FXG4gICAgICAgIGlmICh0aGlzLnBsYXlpbmdHYW1lKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHJ1bk9ubGluZUdhbWUobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUsIG15U2lkZSkge1xuICAgICAgICB0aGlzLmNvdXJ0ID0gbmV3IENvdXJ0KHRoaXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiTEVGVFwiKTtcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiUklHSFRcIik7XG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKHRoaXMuZGltZW5zaW9ucywgdGhpcy5jb3VydCwgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3AsIHRoaXMub25saW5lR2FtZUlkKVxuXG4gICAgICAgIHRoaXMuc2NvcmVib2FyZCA9IG5ldyBTY29yZWJvYXJkKHRoaXMuZGltZW5zaW9ucywgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3ApXG5cbiAgICAgICAgaWYgKG15U2lkZSA9PT0gXCJMRUZUXCIpIHtcbiAgICAgICAgICAgIHRoaXMubXlQbGF5ZXIgPSBuZXcgT25saW5lUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgbGVmdFNwcml0ZSwgXCJMRUZUXCIsIHRydWUpXG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyID0gbmV3IE9ubGluZVBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIHJpZ2h0U3ByaXRlLCBcIlJJR0hUXCIsIGZhbHNlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllciA9IG5ldyBPbmxpbmVQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCBsZWZ0U3ByaXRlLCBcIkxFRlRcIiwgZmFsc2UpXG4gICAgICAgICAgICB0aGlzLm15UGxheWVyID0gbmV3IE9ubGluZVBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIHJpZ2h0U3ByaXRlLCBcIlJJR0hUXCIsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVPdGhlclBvc1wiLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllci5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB4OiBkYXRhW1wieFwiXSxcbiAgICAgICAgICAgICAgICB5OiBkYXRhW1wieVwiXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIuZmFjaW5nUmlnaHQgID0gZGF0YVtcIm90aGVyUGxheWVyRmFjaW5nXCJdXG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyLmp1bXBpbmcgPSBkYXRhW1wib3RoZXJQbGF5ZXJKdW1waW5nXCJdXG4gICAgICAgIH0pIFxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVCYWxsUG9zc2VzaW9uXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5iYWxsLnBvc3Nlc3Npb24gPSB0aGlzLm90aGVyUGxheWVyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInJlZ2lzdGVyZWRQb3NzZXNpb25DaGFuZ2VcIiwge1xuICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5vbmxpbmVHYW1lSWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZU5vQmFsbFBvc3Nlc2lvblwiLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC5wb3NzZXNzaW9uID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5iYWxsLnBvc2l0aW9uID0gZGF0YVtcInBvc2l0aW9uXCJdXG4gICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkgPSBkYXRhW1widmVsb2NpdHlcIl1cbiAgICAgICAgfSlcbiAgICAgICAgLy8gc29ja2V0Lm9uKFwidXBkYXRlQmFsbFBvc1wiLCBkYXRhID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMuYmFsbC5wb3NpdGlvbiA9IGRhdGFbXCJwb3NpdGlvblwiXVxuICAgICAgICAvLyAgICAgdGhpcy5iYWxsLnZlbG9jaXR5ID0gZGF0YVtcInZlbG9jaXR5XCJdXG4gICAgICAgIC8vICAgICB0aGlzLm90aGVyUGxheWVyLmZhY2luZ1JpZ2h0ID0gZGF0YVtcIm90aGVyUGxheWVyRmFjaW5nXCJdXG4gICAgICAgIC8vIH0pXG4gICAgICAgIHNvY2tldC5vbihcImVuZEdhbWVGcm9tRGlzY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMub25saW5lR2FtZUlkID0gbnVsbFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TWVudSgpXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnJ1bk9ubGluZSgpO1xuICAgIH1cblxuICAgIHJ1bk9ubGluZSAoKSB7XG4gICAgICAgIC8vIENSRUFURVMgQkFDS0dST1VORFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIm9yYW5nZVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIEFOSU1BVEUgT0JKRUNUU1xuICAgICAgICB0aGlzLm90aGVyUGxheWVyLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMubXlQbGF5ZXIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYmFsbC5hbmltYXRlKHRoaXMuY3R4KVxuXG4gICAgICAgIHRoaXMubGVmdEhvb3AuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5yaWdodEhvb3AuYW5pbWF0ZSh0aGlzLmN0eClcblxuICAgICAgICB0aGlzLnNjb3JlYm9hcmQuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5jb3VydC5hbmltYXRlKHRoaXMuY3R4KVxuXG4gICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVdpbm5lcigpXG4gICAgICAgIH1cblxuXG4gICAgICAgIHNvY2tldC5lbWl0KFwidXBkYXRlTXlQb3NcIiwge1xuICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLm9ubGluZUdhbWVJZCxcbiAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgIHg6IHRoaXMubXlQbGF5ZXIucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMubXlQbGF5ZXIucG9zaXRpb24ueSxcbiAgICAgICAgICAgIG90aGVyUGxheWVyRmFjaW5nOiB0aGlzLm15UGxheWVyLmZhY2luZ1JpZ2h0LFxuICAgICAgICAgICAgb3RoZXJQbGF5ZXJKdW1waW5nOiB0aGlzLm15UGxheWVyLmp1bXBpbmdcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0LmVtaXQoXCJ1cGRhdGVCYWxsUG9zXCIsIHtcbiAgICAgICAgICAgIGdhbWVJZDogdGhpcy5vbmxpbmVHYW1lSWQsXG4gICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgICAgICB4OiB0aGlzLmJhbGwucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMuYmFsbC5wb3NpdGlvbi55XG4gICAgICAgIH0pXG4gICAgICAgIC8vIFJFUVVFU1QgTkVYVCBGUkFNRVxuICAgICAgICBpZiAodGhpcy5wbGF5aW5nR2FtZSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucnVuT25saW5lLmJpbmQodGhpcykpO1xuICAgIH1cblxuXG5cbiAgICBnYW1lT3ZlciAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3JlYm9hcmQudGltZUxlZnQgPT09IDBcbiAgICB9XG5cbiAgICBkaXNwbGF5V2lubmVyICgpIHtcbiAgICAgICAgbGV0IHRleHQ7XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0SG9vcC5zY29yZSA+IHRoaXMubGVmdEhvb3Auc2NvcmUpIHtcbiAgICAgICAgICAgIHRleHQgPSBcIlBsYXllciAxIHdpbnNcIlxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGVmdEhvb3Auc2NvcmUgPiB0aGlzLnJpZ2h0SG9vcC5zY29yZSkge1xuICAgICAgICAgICAgdGV4dCA9IFwiUGxheWVyIDIgd2luc1wiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ID0gXCJUaWUgR2FtZVwiXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgfVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgJHt0ZXh0fWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VUZXh0KGAke3RleHR9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGxheWluZ0dhbWUgPSBmYWxzZVxuICAgICAgICB0aGlzLm9ubGluZUdhbWVJZCA9IG51bGxcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZW51KClcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuXG59IiwiaW1wb3J0IFJlY3QgZnJvbSAnLi91dGlscy9yZWN0J1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgSE9PUF9ZX01VTFRJUExJRVI6IDAuMyxcbiAgICBIT09QX0hFSUdIVDogNDAsXG4gICAgSE9PUF9XSURUSDogNTAsXG4gICAgSE9PUF9YX0RJU1RBTkNFOiA1MCxcbiAgICBCQUNLQk9BUkRfV0lEVEg6IDE1LFxuICAgIEJBQ0tCT0FSRF9IRUlHSFQ6IDUwLFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvb3AgZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBob29wU2lkZSwgYmFsbCkge1xuICAgICAgICBzdXBlcih7IHdpZHRoOiBDT05TVEFOVFMuSE9PUF9XSURUSCwgaGVpZ2h0OiBDT05TVEFOVFMuSE9PUF9IRUlHSFQgfSlcbiAgICAgICAgdGhpcy5iYWxsID0gYmFsbFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IHggPSBob29wU2lkZSA9PT0gXCJMRUZUXCIgPyAoXG4gICAgICAgICAgICAgICAgMCArIENPTlNUQU5UUy5IT09QX1hfRElTVEFOQ0VcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgZGltZW5zaW9ucy53aWR0aCAtIENPTlNUQU5UUy5IT09QX1hfRElTVEFOQ0UgLSB0aGlzLndpZHRoXG4gICAgICAgICAgICApXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LCBcbiAgICAgICAgICAgIHk6IGRpbWVuc2lvbnMuaGVpZ2h0ICogQ09OU1RBTlRTLkhPT1BfWV9NVUxUSVBMSUVSXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iYWNrYm9hcmQgPSBuZXcgQmFja2JvYXJkKHRoaXMsIGhvb3BTaWRlKVxuICAgICAgICB0aGlzLnNjb3JlSGl0Ym94ID0gbmV3IFNjb3JlSGl0Ym94KHRoaXMsIGhvb3BTaWRlKVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJwdXJwbGVcIlxuICAgICAgICB0aGlzLnNjb3JlID0gMFxuICAgICAgICB0aGlzLmp1c3RTY29yZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMuY2hlY2tCYWxsQ29sbGlzaW9uKClcbiAgICAgICAgdGhpcy5iYWNrYm9hcmQuYW5pbWF0ZShjdHgpXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5zY29yZUhpdGJveC5hbmltYXRlKGN0eClcbiAgICAgICAgaWYgKHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzLnNjb3JlSGl0Ym94KSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmp1c3RTY29yZWQpIHRoaXMuc2NvcmUgKz0gMlxuICAgICAgICAgICAgdGhpcy5qdXN0U2NvcmVkID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IFwiZ3JlZW5cIlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdXN0U2NvcmVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gXCJwdXJwbGVcIlxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQmFsbENvbGxpc2lvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcykgfHwgdGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMuYmFja2JvYXJkKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYmFsbC5wb3NpdGlvbi55IC0gdGhpcy5iYWxsLnJhZGl1cyA+IHRoaXMucG9zaXRpb24ueSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbGwudmVsb2NpdHkueSA+IDApIHRoaXMuYmFsbC52ZWxvY2l0eS55ID0gLXRoaXMuYmFsbC52ZWxvY2l0eS55XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbGwucG9zaXRpb24ueSArIHRoaXMuYmFsbC5yYWRpdXMgPCB0aGlzLmJhY2tib2FyZC5wb3NpdGlvbi55ICYmIHRoaXMuYmFsbC52ZWxvY2l0eS55IDwgMCkgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxsLnZlbG9jaXR5LnkgPSAtdGhpcy5iYWxsLnZlbG9jaXR5LnlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5iYWxsLnZlbG9jaXR5LnggPSAtdGhpcy5iYWxsLnZlbG9jaXR5LnhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5jbGFzcyBTY29yZUhpdGJveCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGhvb3AsIGhvb3BTaWRlKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5IT09QX1dJRFRIIC0gMzAsIGhlaWdodDogQ09OU1RBTlRTLkhPT1BfSEVJR0hUICogMC4wNSB9KVxuICAgICAgICBjb25zdCB4ID0gaG9vcFNpZGUgPT09IFwiTEVGVFwiID8gKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54ICsgMTVcbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCArIGhvb3Aud2lkdGggLSB0aGlzLndpZHRoIC0gMTVcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IGhvb3AucG9zaXRpb24ueVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcIndoaXRlXCJcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufVxuXG5jbGFzcyBCYWNrYm9hcmQgZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihob29wLCBob29wU2lkZSkge1xuICAgICAgICBzdXBlcih7IHdpZHRoOiBDT05TVEFOVFMuQkFDS0JPQVJEX1dJRFRILCBoZWlnaHQ6IENPTlNUQU5UUy5CQUNLQk9BUkRfSEVJR0hUIH0pXG4gICAgICAgIGNvbnN0IHggPSBob29wU2lkZSA9PT0gXCJMRUZUXCIgPyAoXG4gICAgICAgICAgICBob29wLnBvc2l0aW9uLnggXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICBob29wLnBvc2l0aW9uLnggKyBob29wLndpZHRoIC0gdGhpcy53aWR0aFxuICAgICAgICApXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogaG9vcC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJhcXVhXCJcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufSIsImltcG9ydCBrZXkgZnJvbSAnLi4vdXRpbHMva2V5bWFzdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyU2VsZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBzZWxlY3RlZENoYXJhY3RlcnMpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVycyA9IHNlbGVjdGVkQ2hhcmFjdGVyc1xuICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9IDBcbiAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gMVxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiUm9kbWFuXCIsIHNyYzogXCJzcmMvYXNzZXRzL3JvZG1hblNtYWxsLnBuZ1wifSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJEcmFrZVwiLCBzcmM6IFwic3JjL2Fzc2V0cy9kcmFrZVNtYWxsLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiTGVicm9uXCIsIHNyYzogXCJzcmMvYXNzZXRzL2xlYnJvblNtYWxsLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiUGVhY2hcIiwgc3JjOiBcInNyYy9hc3NldHMvcGVhY2hTbWFsbC5wbmdcIn1cbiAgICAgICAgXVxuICAgICAgICBcbiAgICAgICAgdGhpcy5sZWZ0Q2hhciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnJpZ2h0Q2hhciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmxlZnRDaGFyLnNyYyA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjXG4gICAgICAgIHRoaXMucmlnaHRDaGFyLnNyYyA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdLnNyY1xuXG4gICAgICAgIHRoaXMubGVmdFJlYWR5ID0gZmFsc2VcbiAgICAgICAgdGhpcy5yaWdodFJlYWR5ID0gZmFsc2VcblxuICAgICAgICBzb2NrZXQub24oXCJtYXRjaEZvdW5kXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5sZWZ0UGxheWVySWQgPSBkYXRhW1wibGVmdFBsYXllcklkXCJdXG4gICAgICAgICAgICB0aGlzLnJpZ2h0UGxheWVySWQgPSBkYXRhW1wicmlnaHRQbGF5ZXJJZFwiXVxuICAgICAgICAgICAgaWYgKHNvY2tldC5pZCA9PT0gdGhpcy5sZWZ0UGxheWVySWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxheWluZ0xlZnQgPSB0cnVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nUmlnaHQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9IDBcbiAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9IDFcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gZGF0YVtcImdhbWVJZFwiXVxuICAgICAgICB9KVxuXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZWRTZWxlY3RlZENoYXJzXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSBkYXRhW1wibGVmdFNlbGVjdGVkXCJdXG4gICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSBkYXRhW1wicmlnaHRTZWxlY3RlZFwiXVxuICAgICAgICB9KVxuXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZWRMZWZ0UmVhZHlcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sZWZ0UmVhZHkgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZWRSaWdodFJlYWR5XCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRSZWFkeSA9IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICBzb2NrZXQub24oXCJzdGFydEdhbWVcIiwgKCkgPT4ge1xuICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICBrZXkudW5iaW5kKCd1cCcpXG4gICAgICAgICAgICBrZXkudW5iaW5kKCd3JylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ3MnKVxuICAgICAgICAgICAga2V5LnVuYmluZCgnZW50ZXInKVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoYXJhY3RlcnModGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXS5zcmMsIHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdLnNyYywgdGhpcy5nYW1lSWQpXG4gICAgICAgICAgICB0aGlzLmxlZnRQbGF5ZXJJZCA9IFwiXCJcbiAgICAgICAgICAgIHRoaXMucmlnaHRQbGF5ZXJJZCA9IFwiXCJcbiAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gMFxuICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gMVxuICAgICAgICAgICAgdGhpcy5sZWZ0UmVhZHkgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5yaWdodFJlYWR5ID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gbnVsbFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcihjdHgpIHtcblxuICAgICAgICB0aGlzLmxlZnRDaGFyLnNyYyA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjXG4gICAgICAgIHRoaXMucmlnaHRDaGFyLnNyYyA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdLnNyY1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInB1cnBsZVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBMRUZUIFNJREVcbiAgICAgICAgY29uc3QgbGVmdFNpZGVDaGFyID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXVxuICAgICAgICBsZXQgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyA0LCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMn1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblxuICAgICAgICBpZiAodGhpcy5vbmxpbmVNb2RlKSBjdHguZmlsbFRleHQoXCJPbmxpbmUgTW9kZVwiLCBsb2MueCwgbG9jLnkgLSAxMDApXG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDEycHQgc2VyaWZcIjtcbiAgICAgICAgaWYgKHRoaXMubGVmdFJlYWR5KSBjdHguZmlsbFRleHQoXCJSZWFkeVwiLCBsb2MueCwgbG9jLnkgLSA3MClcbiAgICAgICAgaWYgKHRoaXMubGVmdFBsYXllcklkICYmIHRoaXMucmlnaHRQbGF5ZXJJZCkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke3RoaXMubGVmdFBsYXllcklkfWAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub25saW5lTW9kZSkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke3NvY2tldC5pZH1gLCBsb2MueCwgbG9jLnkgLSA1MClcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGAke2xlZnRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGAke2xlZnRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5sZWZ0Q2hhcixcbiAgICAgICAgICAgIGxvYy54IC0gdGhpcy5sZWZ0Q2hhci53aWR0aCAvIDIsXG4gICAgICAgICAgICBsb2MueSlcblxuICAgICAgICAvLyBSSUdIVCBTSURFXG4gICAgICAgIGNvbnN0IHJpZ2h0U2lkZUNoYXIgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXVxuICAgICAgICBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAqIDMgLyA0LCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5cbiAgICAgICAgaWYgKHRoaXMub25saW5lTW9kZSkgY3R4LmZpbGxUZXh0KFwiT25saW5lIE1vZGVcIiwgbG9jLngsIGxvYy55IC0gMTAwKVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCAxMnB0IHNlcmlmXCI7XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0UmVhZHkpIGN0eC5maWxsVGV4dChcIlJlYWR5XCIsIGxvYy54LCBsb2MueSAtIDcwKVxuICAgICAgICBpZiAodGhpcy5sZWZ0UGxheWVySWQgJiYgdGhpcy5yaWdodFBsYXllcklkKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy5yaWdodFBsYXllcklkfWAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub25saW5lTW9kZSkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGBXYWl0aW5nIGZvciBQbGF5ZXJgLCBsb2MueCwgbG9jLnkgLSA1MClcbiAgICAgICAgfVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG5cbiAgICAgICAgY3R4LmZpbGxUZXh0KGAke3JpZ2h0U2lkZUNoYXIubmFtZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHtyaWdodFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnJpZ2h0Q2hhcixcbiAgICAgICAgICAgIGxvYy54IC0gdGhpcy5yaWdodENoYXIud2lkdGggLyAyLFxuICAgICAgICAgICAgbG9jLnkpXG4gXG4gICAgfVxuXG4gICAgc2V0dXBLZXlIYW5kbGVycygpIHtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICAgICAga2V5KCdkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAodGhpcy5yaWdodFNlbGVjdGVkICsgMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ3VwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAodGhpcy5yaWdodFNlbGVjdGVkIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmlnaHRTZWxlY3RlZCA9PT0gLTEpIHRoaXMucmlnaHRTZWxlY3RlZCA9IHRoaXMuY2hhcmFjdGVycy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ3cnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkICsgMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ3MnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkIC0gMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlZnRTZWxlY3RlZCA9PT0gLTEpIHRoaXMubGVmdFNlbGVjdGVkID0gdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aCAtIDFcbiAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgnZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2Rvd24nKVxuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCd1cCcpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3cnKVxuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdzJylcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZW50ZXInKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVycyh0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdLnNyYywgdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAga2V5KCd1cCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFNlbGVjdGVkOiB0aGlzLmxlZnRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQbGF5aW5nUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmlnaHRTZWxlY3RlZCA9PT0gLTEpIHRoaXMucmlnaHRTZWxlY3RlZCA9IHRoaXMuY2hhcmFjdGVycy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnY2hhckNoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmdMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9ICh0aGlzLmxlZnRTZWxlY3RlZCAtIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdFNlbGVjdGVkID09PSAtMSkgdGhpcy5sZWZ0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0U2VsZWN0ZWQ6IHRoaXMucmlnaHRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1BsYXlpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gKHRoaXMucmlnaHRTZWxlY3RlZCArIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0U2VsZWN0ZWQ6IHRoaXMucmlnaHRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAga2V5KCdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2xlZnRSZWFkeScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQbGF5aW5nUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdyaWdodFJlYWR5Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cblxuXG5cbn0iLCJpbXBvcnQga2V5IGZyb20gJy4uL3V0aWxzL2tleW1hc3Rlcic7XG5pbXBvcnQgQ2hhcmFjdGVyU2VsZWN0IGZyb20gJy4vY2hhcmFjdGVyX3NlbGVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IHtcbiAgICBjb25zdHJ1Y3RvciAoZGltZW5zaW9ucywgc3RhcnRHYW1lLCBzdGFydE9ubGluZUdhbWUpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSA9IHN0YXJ0R2FtZVxuICAgICAgICB0aGlzLnN0YXJ0T25saW5lR2FtZSA9IHN0YXJ0T25saW5lR2FtZVxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gMFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXCJTdGFydCBHYW1lXCIsIFwiT25saW5lXCJdXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0ID0gbmV3IENoYXJhY3RlclNlbGVjdCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2V0dXBLZXlIYW5kbGVycygpXG4gICAgfVxuXG4gICAgc2VsZWN0ZWRDaGFyYWN0ZXJzIChsZWZ0U3JjLCByaWdodFNyYywgZ2FtZUlkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlclNlbGVjdC5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBteVNpZGUgPSB0aGlzLmNoYXJhY3RlclNlbGVjdC5pc1BsYXlpbmdMZWZ0ID8gXCJMRUZUXCIgOiBcIlJJR0hUXCJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRPbmxpbmVHYW1lKGxlZnRTcmMsIHJpZ2h0U3JjLCBteVNpZGUsIGdhbWVJZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKGxlZnRTcmMsIHJpZ2h0U3JjKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgcmVuZGVyIChjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicHVycGxlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24sIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAoKHRoaXMub3B0aW9ucy5sZW5ndGggKyAxKSAtIGkpIH1cbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KGAke29wdGlvbn1gKS53aWR0aFxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT09IGkpIGN0eC5maWxsUmVjdCgobG9jLnggLSB3aWR0aCAvIDIpIC0gNSwgbG9jLnkgLSA0MCwgd2lkdGggKyAxMCwgNTApO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChgJHtvcHRpb259YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVRleHQoYCR7b3B0aW9ufWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycykge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3QucmVuZGVyKGN0eClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldHVwS2V5SGFuZGxlcnMoKSB7XG4gICAgICAgIGtleSgnZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSAodGhpcy5zZWxlY3RlZE9wdGlvbiArIDEpICUgdGhpcy5vcHRpb25zLmxlbmd0aFxuICAgICAgICB9KVxuICAgICAgICBrZXkoJ3VwJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IE1hdGguYWJzKCh0aGlzLnNlbGVjdGVkT3B0aW9uIC0gMSkgJSB0aGlzLm9wdGlvbnMubGVuZ3RoKVxuICAgICAgICB9KVxuICAgICAgICBrZXkoJ2VudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdkb3duJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCd1cCcpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZW50ZXInKVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5vbmxpbmVNb2RlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5zZXR1cEtleUhhbmRsZXJzKClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2Rvd24nKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0Lm9ubGluZU1vZGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3BsYXllckFkZGVkVG9RdWV1ZScsIHNvY2tldC5pZClcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5zZXR1cEtleUhhbmRsZXJzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBcblxuXG5cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbmxpbmVQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMsIHN0YXJ0U2lkZSwgYWN0aXZlKSB7XG4gICAgICAgIHN1cGVyKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpXG4gICAgICAgIFxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gc3RhcnRTaWRlID09PSBcIkxFRlRcIiA/ICh7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfSkgOiAoe1xuICAgICAgICAgICAgeDogdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHRoaXMuY29sb3IgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmVcbiAgICB9XG5cblxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuc3ByaXRlLFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gNSxcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuc3ByaXRlLmhlaWdodCAvIDMpXG4gICAgfVxuXG59XG5cbiIsImltcG9ydCBSZWN0IGZyb20gJy4vdXRpbHMvcmVjdCc7XG5pbXBvcnQga2V5IGZyb20gJy4vdXRpbHMva2V5bWFzdGVyJztcblxuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgR1JBVklUWTogMC41LFxuICAgIFBMQVlFUl9XSURUSDogNDAsXG4gICAgUExBWUVSX0hFSUdIVDogNzAsXG4gICAgTU9WRVNQRUVEOiA1LFxuICAgIC8vIFdJVEhfQkFMTF9NT1ZFU1BFRUQ6IDMuNSxcbiAgICBKVU1QX0hFSUdIVDogMTQsXG4gICAgLy8gT05fRklSRV9KVU1QX0hFSUdIVDogMTZcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLlBMQVlFUl9XSURUSCwgaGVpZ2h0OiBDT05TVEFOVFMuUExBWUVSX0hFSUdIVCB9KVxuICAgICAgICB0aGlzLmNvdXJ0ID0gY291cnRcbiAgICAgICAgdGhpcy5iYWxsID0gYmFsbFxuXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHk6IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5kZW5uaXNSb2RtYW5IZWFkID0gbmV3IEltYWdlKCk7XG4gICAgICAgIC8vIHRoaXMuZGVubmlzUm9kbWFuSGVhZC5zcmMgPSAnc3JjL2Fzc2V0cy9kZW5uaXNSb2RtYW5IZWFkLnBuZydcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc3JjID0gc3ByaXRlU3JjXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBjdHguZHJhd0ltYWdlKHRoaXMuZGVubmlzUm9kbWFuSGVhZCwgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy53aWR0aCArICh0aGlzLmRlbm5pc1JvZG1hbkhlYWQud2lkdGggLyAyKSwgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgKyAodGhpcy5kZW5uaXNSb2RtYW5IZWFkLmhlaWdodCAvIDMpKVxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuc3ByaXRlLFxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIDUsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnNwcml0ZS5oZWlnaHQgLyAzKVxuICAgIH1cblxuICAgIG1vdmUgKCkge1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgncmlnaHQnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdsZWZ0JykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBKVU1QSU5HXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCd1cCcpICYmICF0aGlzLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5KVU1QX0hFSUdIVDtcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCcvJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZm9ybUFjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JhbGwoKSBcblxuICAgICAgICB0aGlzLmhhbmRsZUdyYXZpdHkoKVxuXG4gICAgICAgIHRoaXMuY2hlY2tCb3VuZHMoKVxuICAgIH1cblxuICAgIHByZWZvcm1BY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmJhbGwucG9zc2Vzc2lvbiA9PT0gdGhpcykge1xuICAgICAgICAgICAgLy8gSG9sZCB0byBzaG9vdC4gXG4gICAgICAgICAgICB0aGlzLmJhbGwuc2hvb3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCYWxsKCkge1xuICAgICAgICBpZiAoIXRoaXMuYmFsbC5wb3NzZXNzaW9uICYmIHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzKSkge1xuICAgICAgICAgICAgdGhpcy5iYWxsLmNsYWltUG9zc2Vzc2lvbih0aGlzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlR3Jhdml0eSgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMudmVsb2NpdHkueTtcbiAgICAgICAgLy8gR1JBVklUWVxuICAgICAgICAvLyBpZiB0aGUgcG9zIGlzIGdyZWF0ZXIgdGhhbiB0aGUgZmxvb3JcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0IDwgdGhpcy5jb3VydC5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gQ09OU1RBTlRTLkdSQVZJVFk7XG4gICAgICAgICAgICAvLyBlbHNlIHNldCB0aGUgcG9zIHRvIHRoZSBmbG9vclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0JvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA+IHRoaXMuY291cnQud2lkdGggLSB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDBcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBQTEFZRVJfV0lEVEg6IDQwLFxuICAgIFBMQVlFUl9IRUlHSFQ6IDcwLFxuICAgIE1PVkVTUEVFRDogNSxcbiAgICAvLyBXSVRIX0JBTExfTU9WRVNQRUVEOiAzLjUsXG4gICAgSlVNUF9IRUlHSFQ6IDE0LFxuICAgIC8vIE9OX0ZJUkVfSlVNUF9IRUlHSFQ6IDE2XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKSB7XG4gICAgICAgIHN1cGVyKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ2QnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdhJykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBKVU1QSU5HXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCd3JykgJiYgIXRoaXMuanVtcGluZykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkpVTVBfSEVJR0hUO1xuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3EnKSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmb3JtQWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrQmFsbCgpXG5cbiAgICAgICAgdGhpcy5oYW5kbGVHcmF2aXR5KClcblxuICAgICAgICB0aGlzLmNoZWNrQm91bmRzKClcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBsZWZ0SG9vcCwgcmlnaHRIb29wKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5sZWZ0SG9vcCA9IGxlZnRIb29wXG4gICAgICAgIHRoaXMucmlnaHRIb29wID0gcmlnaHRIb29wXG4gICAgICAgIHRoaXMudGltZUxlZnQgPSA2MFxuICAgICAgICB0aGlzLmNvdW50RG93biA9IHNldEludGVydmFsKCgpID0+IHsgXG4gICAgICAgICAgICB0aGlzLnRpbWVMZWZ0LS1cbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVMZWZ0ID09PSAwKSBjbGVhckludGVydmFsKHRoaXMuY291bnREb3duKVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlIChjdHgpIHtcbiAgICAgICAgbGV0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDEwIH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG4gICAgICAgIGN0eC5maWxsVGV4dChgUGxheWVyIDE6ICR7dGhpcy5yaWdodEhvb3Auc2NvcmV9IFBsYXllciAyOiAke3RoaXMubGVmdEhvb3Auc2NvcmV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYFBsYXllciAxOiAke3RoaXMucmlnaHRIb29wLnNjb3JlfSBQbGF5ZXIgMjogJHt0aGlzLmxlZnRIb29wLnNjb3JlfWAsIGxvYy54LCBsb2MueSk7XG5cbiAgICAgICAgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gNSB9XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy50aW1lTGVmdH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHt0aGlzLnRpbWVMZWZ0fWAsIGxvYy54LCBsb2MueSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IocmFkaXVzKSB7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cblxuICAgIGlzT3ZlcmxhcHBpbmdSZWN0KHJlY3QpIHtcbiAgICAgICAgY29uc3QgZGlzdFggPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSByZWN0LnBvc2l0aW9uLnggLSByZWN0LndpZHRoIC8gMik7XG4gICAgICAgIGNvbnN0IGRpc3RZID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gcmVjdC5wb3NpdGlvbi55IC0gcmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgaWYgKGRpc3RYID4gKHJlY3Qud2lkdGggLyAyICsgdGhpcy5yYWRpdXMpKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICBpZiAoZGlzdFkgPiAocmVjdC5oZWlnaHQgLyAyICsgdGhpcy5yYWRpdXMpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICAgIGlmIChkaXN0WCA8PSAocmVjdC53aWR0aCAvIDIpKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIGlmIChkaXN0WSA8PSAocmVjdC5oZWlnaHQgLyAyKSkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgICAgIGNvbnN0IGR4ID0gZGlzdFggLSByZWN0LndpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgZHkgPSBkaXN0WSAtIHJlY3QuaGVpZ2h0IC8gMjtcbiAgICAgICAgcmV0dXJuIChkeCAqIGR4ICsgZHkgKiBkeSA8PSAodGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cykpO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuXG59IiwiLy8gICAgIGtleW1hc3Rlci5qc1xuLy8gICAgIChjKSAyMDExLTIwMTMgVGhvbWFzIEZ1Y2hzXG4vLyAgICAga2V5bWFzdGVyLmpzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG47IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgdmFyIGssXG4gICAgICAgIF9oYW5kbGVycyA9IHt9LFxuICAgICAgICBfbW9kcyA9IHsgMTY6IGZhbHNlLCAxODogZmFsc2UsIDE3OiBmYWxzZSwgOTE6IGZhbHNlIH0sXG4gICAgICAgIF9zY29wZSA9ICdhbGwnLFxuICAgICAgICAvLyBtb2RpZmllciBrZXlzXG4gICAgICAgIF9NT0RJRklFUlMgPSB7XG4gICAgICAgICAgICAn4oenJzogMTYsIHNoaWZ0OiAxNixcbiAgICAgICAgICAgICfijKUnOiAxOCwgYWx0OiAxOCwgb3B0aW9uOiAxOCxcbiAgICAgICAgICAgICfijIMnOiAxNywgY3RybDogMTcsIGNvbnRyb2w6IDE3LFxuICAgICAgICAgICAgJ+KMmCc6IDkxLCBjb21tYW5kOiA5MVxuICAgICAgICB9LFxuICAgICAgICAvLyBzcGVjaWFsIGtleXNcbiAgICAgICAgX01BUCA9IHtcbiAgICAgICAgICAgIGJhY2tzcGFjZTogOCwgdGFiOiA5LCBjbGVhcjogMTIsXG4gICAgICAgICAgICBlbnRlcjogMTMsICdyZXR1cm4nOiAxMyxcbiAgICAgICAgICAgIGVzYzogMjcsIGVzY2FwZTogMjcsIHNwYWNlOiAzMixcbiAgICAgICAgICAgIGxlZnQ6IDM3LCB1cDogMzgsXG4gICAgICAgICAgICByaWdodDogMzksIGRvd246IDQwLFxuICAgICAgICAgICAgZGVsOiA0NiwgJ2RlbGV0ZSc6IDQ2LFxuICAgICAgICAgICAgaG9tZTogMzYsIGVuZDogMzUsXG4gICAgICAgICAgICBwYWdldXA6IDMzLCBwYWdlZG93bjogMzQsXG4gICAgICAgICAgICAnLCc6IDE4OCwgJy4nOiAxOTAsICcvJzogMTkxLFxuICAgICAgICAgICAgJ2AnOiAxOTIsICctJzogMTg5LCAnPSc6IDE4NyxcbiAgICAgICAgICAgICc7JzogMTg2LCAnXFwnJzogMjIyLFxuICAgICAgICAgICAgJ1snOiAyMTksICddJzogMjIxLCAnXFxcXCc6IDIyMFxuICAgICAgICB9LFxuICAgICAgICBjb2RlID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBfTUFQW3hdIHx8IHgudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApO1xuICAgICAgICB9LFxuICAgICAgICBfZG93bktleXMgPSBbXTtcblxuICAgIGZvciAoayA9IDE7IGsgPCAyMDsgaysrKSBfTUFQWydmJyArIGtdID0gMTExICsgaztcblxuICAgIC8vIElFIGRvZXNuJ3Qgc3VwcG9ydCBBcnJheSNpbmRleE9mLCBzbyBoYXZlIGEgc2ltcGxlIHJlcGxhY2VtZW50XG4gICAgZnVuY3Rpb24gaW5kZXgoYXJyYXksIGl0ZW0pIHtcbiAgICAgICAgdmFyIGkgPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpLS0pIGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvLyBmb3IgY29tcGFyaW5nIG1vZHMgYmVmb3JlIHVuYXNzaWdubWVudFxuICAgIGZ1bmN0aW9uIGNvbXBhcmVBcnJheShhMSwgYTIpIHtcbiAgICAgICAgaWYgKGExLmxlbmd0aCAhPSBhMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGExW2ldICE9PSBhMltpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBtb2RpZmllck1hcCA9IHtcbiAgICAgICAgMTY6ICdzaGlmdEtleScsXG4gICAgICAgIDE4OiAnYWx0S2V5JyxcbiAgICAgICAgMTc6ICdjdHJsS2V5JyxcbiAgICAgICAgOTE6ICdtZXRhS2V5J1xuICAgIH07XG4gICAgZnVuY3Rpb24gdXBkYXRlTW9kaWZpZXJLZXkoZXZlbnQpIHtcbiAgICAgICAgZm9yIChrIGluIF9tb2RzKSBfbW9kc1trXSA9IGV2ZW50W21vZGlmaWVyTWFwW2tdXTtcbiAgICB9O1xuXG4gICAgLy8gaGFuZGxlIGtleWRvd24gZXZlbnRcbiAgICBmdW5jdGlvbiBkaXNwYXRjaChldmVudCkge1xuICAgICAgICB2YXIga2V5LCBoYW5kbGVyLCBrLCBpLCBtb2RpZmllcnNNYXRjaCwgc2NvcGU7XG4gICAgICAgIGtleSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgICAgaWYgKGluZGV4KF9kb3duS2V5cywga2V5KSA9PSAtMSkge1xuICAgICAgICAgICAgX2Rvd25LZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGEgbW9kaWZpZXIga2V5LCBzZXQgdGhlIGtleS48bW9kaWZpZXJrZXluYW1lPiBwcm9wZXJ0eSB0byB0cnVlIGFuZCByZXR1cm5cbiAgICAgICAgaWYgKGtleSA9PSA5MyB8fCBrZXkgPT0gMjI0KSBrZXkgPSA5MTsgLy8gcmlnaHQgY29tbWFuZCBvbiB3ZWJraXQsIGNvbW1hbmQgb24gR2Vja29cbiAgICAgICAgaWYgKGtleSBpbiBfbW9kcykge1xuICAgICAgICAgICAgX21vZHNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAvLyAnYXNzaWduS2V5JyBmcm9tIGluc2lkZSB0aGlzIGNsb3N1cmUgaXMgZXhwb3J0ZWQgdG8gd2luZG93LmtleVxuICAgICAgICAgICAgZm9yIChrIGluIF9NT0RJRklFUlMpIGlmIChfTU9ESUZJRVJTW2tdID09IGtleSkgYXNzaWduS2V5W2tdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVNb2RpZmllcktleShldmVudCk7XG5cbiAgICAgICAgLy8gc2VlIGlmIHdlIG5lZWQgdG8gaWdub3JlIHRoZSBrZXlwcmVzcyAoZmlsdGVyKCkgY2FuIGNhbiBiZSBvdmVycmlkZGVuKVxuICAgICAgICAvLyBieSBkZWZhdWx0IGlnbm9yZSBrZXkgcHJlc3NlcyBpZiBhIHNlbGVjdCwgdGV4dGFyZWEsIG9yIGlucHV0IGlzIGZvY3VzZWRcbiAgICAgICAgaWYgKCFhc3NpZ25LZXkuZmlsdGVyLmNhbGwodGhpcywgZXZlbnQpKSByZXR1cm47XG5cbiAgICAgICAgLy8gYWJvcnQgaWYgbm8gcG90ZW50aWFsbHkgbWF0Y2hpbmcgc2hvcnRjdXRzIGZvdW5kXG4gICAgICAgIGlmICghKGtleSBpbiBfaGFuZGxlcnMpKSByZXR1cm47XG5cbiAgICAgICAgc2NvcGUgPSBnZXRTY29wZSgpO1xuXG4gICAgICAgIC8vIGZvciBlYWNoIHBvdGVudGlhbCBzaG9ydGN1dFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX2hhbmRsZXJzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBfaGFuZGxlcnNba2V5XVtpXTtcblxuICAgICAgICAgICAgLy8gc2VlIGlmIGl0J3MgaW4gdGhlIGN1cnJlbnQgc2NvcGVcbiAgICAgICAgICAgIGlmIChoYW5kbGVyLnNjb3BlID09IHNjb3BlIHx8IGhhbmRsZXIuc2NvcGUgPT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBtb2RpZmllcnMgbWF0Y2ggaWYgYW55XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzTWF0Y2ggPSBoYW5kbGVyLm1vZHMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgaW4gX21vZHMpXG4gICAgICAgICAgICAgICAgICAgIGlmICgoIV9tb2RzW2tdICYmIGluZGV4KGhhbmRsZXIubW9kcywgK2spID4gLTEpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoX21vZHNba10gJiYgaW5kZXgoaGFuZGxlci5tb2RzLCAraykgPT0gLTEpKSBtb2RpZmllcnNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIGNhbGwgdGhlIGhhbmRsZXIgYW5kIHN0b3AgdGhlIGV2ZW50IGlmIG5lY2Nlc3NhcnlcbiAgICAgICAgICAgICAgICBpZiAoKGhhbmRsZXIubW9kcy5sZW5ndGggPT0gMCAmJiAhX21vZHNbMTZdICYmICFfbW9kc1sxOF0gJiYgIV9tb2RzWzE3XSAmJiAhX21vZHNbOTFdKSB8fCBtb2RpZmllcnNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlci5tZXRob2QoZXZlbnQsIGhhbmRsZXIpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY2FuY2VsQnViYmxlKSBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHVuc2V0IG1vZGlmaWVyIGtleXMgb24ga2V5dXBcbiAgICBmdW5jdGlvbiBjbGVhck1vZGlmaWVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXkgPSBldmVudC5rZXlDb2RlLCBrLFxuICAgICAgICAgICAgaSA9IGluZGV4KF9kb3duS2V5cywga2V5KTtcblxuICAgICAgICAvLyByZW1vdmUga2V5IGZyb20gX2Rvd25LZXlzXG4gICAgICAgIGlmIChpID49IDApIHtcbiAgICAgICAgICAgIF9kb3duS2V5cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IDkzIHx8IGtleSA9PSAyMjQpIGtleSA9IDkxO1xuICAgICAgICBpZiAoa2V5IGluIF9tb2RzKSB7XG4gICAgICAgICAgICBfbW9kc1trZXldID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgaWYgKF9NT0RJRklFUlNba10gPT0ga2V5KSBhc3NpZ25LZXlba10gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNldE1vZGlmaWVycygpIHtcbiAgICAgICAgZm9yIChrIGluIF9tb2RzKSBfbW9kc1trXSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgYXNzaWduS2V5W2tdID0gZmFsc2U7XG4gICAgfTtcblxuICAgIC8vIHBhcnNlIGFuZCBhc3NpZ24gc2hvcnRjdXRcbiAgICBmdW5jdGlvbiBhc3NpZ25LZXkoa2V5LCBzY29wZSwgbWV0aG9kKSB7XG4gICAgICAgIHZhciBrZXlzLCBtb2RzO1xuICAgICAgICBrZXlzID0gZ2V0S2V5cyhrZXkpO1xuICAgICAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9IHNjb3BlO1xuICAgICAgICAgICAgc2NvcGUgPSAnYWxsJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBlYWNoIHNob3J0Y3V0XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gc2V0IG1vZGlmaWVyIGtleXMgaWYgYW55XG4gICAgICAgICAgICBtb2RzID0gW107XG4gICAgICAgICAgICBrZXkgPSBrZXlzW2ldLnNwbGl0KCcrJyk7XG4gICAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBtb2RzID0gZ2V0TW9kcyhrZXkpO1xuICAgICAgICAgICAgICAgIGtleSA9IFtrZXlba2V5Lmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnZlcnQgdG8ga2V5Y29kZSBhbmQuLi5cbiAgICAgICAgICAgIGtleSA9IGtleVswXVxuICAgICAgICAgICAga2V5ID0gY29kZShrZXkpO1xuICAgICAgICAgICAgLy8gLi4uc3RvcmUgaGFuZGxlclxuICAgICAgICAgICAgaWYgKCEoa2V5IGluIF9oYW5kbGVycykpIF9oYW5kbGVyc1trZXldID0gW107XG4gICAgICAgICAgICBfaGFuZGxlcnNba2V5XS5wdXNoKHsgc2hvcnRjdXQ6IGtleXNbaV0sIHNjb3BlOiBzY29wZSwgbWV0aG9kOiBtZXRob2QsIGtleToga2V5c1tpXSwgbW9kczogbW9kcyB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB1bmJpbmQgYWxsIGhhbmRsZXJzIGZvciBnaXZlbiBrZXkgaW4gY3VycmVudCBzY29wZVxuICAgIGZ1bmN0aW9uIHVuYmluZEtleShrZXksIHNjb3BlKSB7XG4gICAgICAgIHZhciBtdWx0aXBsZUtleXMsIGtleXMsXG4gICAgICAgICAgICBtb2RzID0gW10sXG4gICAgICAgICAgICBpLCBqLCBvYmo7XG5cbiAgICAgICAgbXVsdGlwbGVLZXlzID0gZ2V0S2V5cyhrZXkpO1xuXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBtdWx0aXBsZUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGtleXMgPSBtdWx0aXBsZUtleXNbal0uc3BsaXQoJysnKTtcblxuICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIG1vZHMgPSBnZXRNb2RzKGtleXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXkgPSBrZXlzW2tleXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBrZXkgPSBjb2RlKGtleSk7XG5cbiAgICAgICAgICAgIGlmIChzY29wZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBnZXRTY29wZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFfaGFuZGxlcnNba2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBfaGFuZGxlcnNba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG9iaiA9IF9oYW5kbGVyc1trZXldW2ldO1xuICAgICAgICAgICAgICAgIC8vIG9ubHkgY2xlYXIgaGFuZGxlcnMgaWYgY29ycmVjdCBzY29wZSBhbmQgbW9kcyBtYXRjaFxuICAgICAgICAgICAgICAgIGlmIChvYmouc2NvcGUgPT09IHNjb3BlICYmIGNvbXBhcmVBcnJheShvYmoubW9kcywgbW9kcykpIHtcbiAgICAgICAgICAgICAgICAgICAgX2hhbmRsZXJzW2tleV1baV0gPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBrZXkgd2l0aCBjb2RlICdrZXlDb2RlJyBpcyBjdXJyZW50bHkgZG93blxuICAgIC8vIENvbnZlcnRzIHN0cmluZ3MgaW50byBrZXkgY29kZXMuXG4gICAgZnVuY3Rpb24gaXNQcmVzc2VkKGtleUNvZGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoa2V5Q29kZSkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGtleUNvZGUgPSBjb2RlKGtleUNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleChfZG93bktleXMsIGtleUNvZGUpICE9IC0xO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByZXNzZWRLZXlDb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIF9kb3duS2V5cy5zbGljZSgwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSAoZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQpLnRhZ05hbWU7XG4gICAgICAgIC8vIGlnbm9yZSBrZXlwcmVzc2VkIGluIGFueSBlbGVtZW50cyB0aGF0IHN1cHBvcnQga2V5Ym9hcmQgZGF0YSBpbnB1dFxuICAgICAgICByZXR1cm4gISh0YWdOYW1lID09ICdJTlBVVCcgfHwgdGFnTmFtZSA9PSAnU0VMRUNUJyB8fCB0YWdOYW1lID09ICdURVhUQVJFQScpO1xuICAgIH1cblxuICAgIC8vIGluaXRpYWxpemUga2V5Ljxtb2RpZmllcj4gdG8gZmFsc2VcbiAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgYXNzaWduS2V5W2tdID0gZmFsc2U7XG5cbiAgICAvLyBzZXQgY3VycmVudCBzY29wZSAoZGVmYXVsdCAnYWxsJylcbiAgICBmdW5jdGlvbiBzZXRTY29wZShzY29wZSkgeyBfc2NvcGUgPSBzY29wZSB8fCAnYWxsJyB9O1xuICAgIGZ1bmN0aW9uIGdldFNjb3BlKCkgeyByZXR1cm4gX3Njb3BlIHx8ICdhbGwnIH07XG5cbiAgICAvLyBkZWxldGUgYWxsIGhhbmRsZXJzIGZvciBhIGdpdmVuIHNjb3BlXG4gICAgZnVuY3Rpb24gZGVsZXRlU2NvcGUoc2NvcGUpIHtcbiAgICAgICAgdmFyIGtleSwgaGFuZGxlcnMsIGk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gX2hhbmRsZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGVycyA9IF9oYW5kbGVyc1trZXldO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0uc2NvcGUgPT09IHNjb3BlKSBoYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYWJzdHJhY3Qga2V5IGxvZ2ljIGZvciBhc3NpZ24gYW5kIHVuYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0S2V5cyhrZXkpIHtcbiAgICAgICAgdmFyIGtleXM7XG4gICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICBrZXlzID0ga2V5LnNwbGl0KCcsJyk7XG4gICAgICAgIGlmICgoa2V5c1trZXlzLmxlbmd0aCAtIDFdKSA9PSAnJykge1xuICAgICAgICAgICAga2V5c1trZXlzLmxlbmd0aCAtIDJdICs9ICcsJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG5cbiAgICAvLyBhYnN0cmFjdCBtb2RzIGxvZ2ljIGZvciBhc3NpZ24gYW5kIHVuYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0TW9kcyhrZXkpIHtcbiAgICAgICAgdmFyIG1vZHMgPSBrZXkuc2xpY2UoMCwga2V5Lmxlbmd0aCAtIDEpO1xuICAgICAgICBmb3IgKHZhciBtaSA9IDA7IG1pIDwgbW9kcy5sZW5ndGg7IG1pKyspXG4gICAgICAgICAgICBtb2RzW21pXSA9IF9NT0RJRklFUlNbbW9kc1ttaV1dO1xuICAgICAgICByZXR1cm4gbW9kcztcbiAgICB9XG5cbiAgICAvLyBjcm9zcy1icm93c2VyIGV2ZW50c1xuICAgIGZ1bmN0aW9uIGFkZEV2ZW50KG9iamVjdCwgZXZlbnQsIG1ldGhvZCkge1xuICAgICAgICBpZiAob2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbWV0aG9kLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgaWYgKG9iamVjdC5hdHRhY2hFdmVudClcbiAgICAgICAgICAgIG9iamVjdC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZ1bmN0aW9uICgpIHsgbWV0aG9kKHdpbmRvdy5ldmVudCkgfSk7XG4gICAgfTtcblxuICAgIC8vIHNldCB0aGUgaGFuZGxlcnMgZ2xvYmFsbHkgb24gZG9jdW1lbnRcbiAgICBhZGRFdmVudChkb2N1bWVudCwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHsgZGlzcGF0Y2goZXZlbnQpIH0pOyAvLyBQYXNzaW5nIF9zY29wZSB0byBhIGNhbGxiYWNrIHRvIGVuc3VyZSBpdCByZW1haW5zIHRoZSBzYW1lIGJ5IGV4ZWN1dGlvbi4gRml4ZXMgIzQ4XG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsICdrZXl1cCcsIGNsZWFyTW9kaWZpZXIpO1xuXG4gICAgLy8gcmVzZXQgbW9kaWZpZXJzIHRvIGZhbHNlIHdoZW5ldmVyIHRoZSB3aW5kb3cgaXMgKHJlKWZvY3VzZWQuXG4gICAgYWRkRXZlbnQod2luZG93LCAnZm9jdXMnLCByZXNldE1vZGlmaWVycyk7XG5cbiAgICAvLyBzdG9yZSBwcmV2aW91c2x5IGRlZmluZWQga2V5XG4gICAgdmFyIHByZXZpb3VzS2V5ID0gd2luZG93LmtleTtcblxuICAgIC8vIHJlc3RvcmUgcHJldmlvdXNseSBkZWZpbmVkIGtleSBhbmQgcmV0dXJuIHJlZmVyZW5jZSB0byBvdXIga2V5IG9iamVjdFxuICAgIGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgICAgIHZhciBrID0gd2luZG93LmtleTtcbiAgICAgICAgd2luZG93LmtleSA9IHByZXZpb3VzS2V5O1xuICAgICAgICByZXR1cm4gaztcbiAgICB9XG5cbiAgICAvLyBzZXQgd2luZG93LmtleSBhbmQgd2luZG93LmtleS5zZXQvZ2V0L2RlbGV0ZVNjb3BlLCBhbmQgdGhlIGRlZmF1bHQgZmlsdGVyXG4gICAgd2luZG93LmtleSA9IGFzc2lnbktleTtcbiAgICB3aW5kb3cua2V5LnNldFNjb3BlID0gc2V0U2NvcGU7XG4gICAgd2luZG93LmtleS5nZXRTY29wZSA9IGdldFNjb3BlO1xuICAgIHdpbmRvdy5rZXkuZGVsZXRlU2NvcGUgPSBkZWxldGVTY29wZTtcbiAgICB3aW5kb3cua2V5LmZpbHRlciA9IGZpbHRlcjtcbiAgICB3aW5kb3cua2V5LmlzUHJlc3NlZCA9IGlzUHJlc3NlZDtcbiAgICB3aW5kb3cua2V5LmdldFByZXNzZWRLZXlDb2RlcyA9IGdldFByZXNzZWRLZXlDb2RlcztcbiAgICB3aW5kb3cua2V5Lm5vQ29uZmxpY3QgPSBub0NvbmZsaWN0O1xuICAgIHdpbmRvdy5rZXkudW5iaW5kID0gdW5iaW5kS2V5O1xuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSBtb2R1bGUuZXhwb3J0cyA9IGFzc2lnbktleTtcblxufSkodGhpcyk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICB0aGlzLndpZHRoID0gc2l6ZS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcbiAgICB9XG5cbiAgICBpc092ZXJsYXBwaW5nT3RoZXJSZWN0KHJlY3RDbGFzcykge1xuICAgICAgICBjb25zdCBteUJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKClcbiAgICAgICAgY29uc3QgcmVjdCA9IHJlY3RDbGFzcy5nZXRCb3VuZHMoKVxuICAgICAgICBpZiAobXlCb3VuZHMubGVmdCA+IHJlY3QucmlnaHQgfHwgbXlCb3VuZHMucmlnaHQgPCByZWN0LmxlZnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXlCb3VuZHMudG9wID4gcmVjdC5ib3R0b20gfHwgbXlCb3VuZHMuYm90dG9tIDwgcmVjdC50b3ApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICByaWdodDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=