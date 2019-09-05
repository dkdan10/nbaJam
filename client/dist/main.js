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
    var canvasBackground = document.getElementById('nba-jam-background');

    // Prevent scrolling with arrow keys
    window.addEventListener("keydown", function (e) {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
    new _game2.default(canvas, canvasBackground);
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
    COURT_WIDTH: 5,
    HOOP_Y_MULTIPLIER: 0.3,
    HOOP_HEIGHT: 40,
    HOOP_WIDTH: 50,
    HOOP_X_DISTANCE: 50,
    BACKBOARD_WIDTH: 15,
    BACKBOARD_HEIGHT: 50
};

var Court = function (_Rect) {
    _inherits(Court, _Rect);

    function Court(dimensions, backgroundCavas) {
        _classCallCheck(this, Court);

        var _this = _possibleConstructorReturn(this, (Court.__proto__ || Object.getPrototypeOf(Court)).call(this, { width: dimensions.width, height: CONSTANTS.COURT_WIDTH }));

        _this.dimensions = dimensions;
        _this.position = {
            x: 0,
            y: dimensions.height * CONSTANTS.COURT_FLOOR
        };
        _this.hoopLeftPosition = {
            x: 0 + CONSTANTS.HOOP_X_DISTANCE - 6,
            y: dimensions.height * CONSTANTS.HOOP_Y_MULTIPLIER
        };
        _this.hoopRightPosition = {
            x: dimensions.width - CONSTANTS.HOOP_X_DISTANCE - CONSTANTS.HOOP_WIDTH - CONSTANTS.BACKBOARD_WIDTH,
            y: dimensions.height * CONSTANTS.HOOP_Y_MULTIPLIER
        };
        _this.leftHoopImage = new Image();
        _this.rightHoopImage = new Image();
        _this.leftHoopImage.src = "src/assets/cartoonHoopLeft.png";
        _this.rightHoopImage.src = "src/assets/cartoonHoopRight.png";

        _this.standsImage = new Image();
        _this.standsImage.src = "src/assets/basketball-stands.png";

        _this.color = "green";
        _this.courtImage = new Image();
        _this.courtImage.src = "src/assets/bballcourtsmall.png";
        _this.setupBackgroundCourt(backgroundCavas);
        return _this;
    }

    _createClass(Court, [{
        key: "setupBackgroundCourt",
        value: function setupBackgroundCourt(canvas) {
            var _this2 = this;

            var ctx = canvas.getContext("2d");
            ctx.fillStyle = "orange";
            ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
            this.courtImage.onload = function () {
                ctx.drawImage(_this2.courtImage, _this2.position.x - _this2.courtImage.width / 12, _this2.position.y - _this2.courtImage.height / 2, _this2.width + _this2.courtImage.width / 6, _this2.courtImage.height);
            };
            this.standsImage.onload = function () {
                ctx.drawImage(_this2.standsImage, 0, 0, _this2.standsImage.width, _this2.standsImage.height);
                ctx.drawImage(_this2.leftHoopImage, _this2.hoopLeftPosition.x, _this2.hoopLeftPosition.y - (CONSTANTS.HOOP_HEIGHT + 5), CONSTANTS.HOOP_WIDTH + CONSTANTS.BACKBOARD_WIDTH + 10, CONSTANTS.HOOP_HEIGHT + CONSTANTS.BACKBOARD_HEIGHT);
                ctx.drawImage(_this2.rightHoopImage, _this2.hoopRightPosition.x, _this2.hoopRightPosition.y - (CONSTANTS.HOOP_HEIGHT + 5), CONSTANTS.HOOP_WIDTH + CONSTANTS.BACKBOARD_WIDTH + 10, CONSTANTS.HOOP_HEIGHT + CONSTANTS.BACKBOARD_HEIGHT);
            };
            this.leftHoopImage.onload = function () {
                ctx.drawImage(_this2.leftHoopImage, _this2.hoopLeftPosition.x, _this2.hoopLeftPosition.y - (CONSTANTS.HOOP_HEIGHT + 5), CONSTANTS.HOOP_WIDTH + CONSTANTS.BACKBOARD_WIDTH + 10, CONSTANTS.HOOP_HEIGHT + CONSTANTS.BACKBOARD_HEIGHT);
            };
            this.rightHoopImage.onload = function () {
                ctx.drawImage(_this2.rightHoopImage, _this2.hoopRightPosition.x, _this2.hoopRightPosition.y - (CONSTANTS.HOOP_HEIGHT + 5), CONSTANTS.HOOP_WIDTH + CONSTANTS.BACKBOARD_WIDTH + 10, CONSTANTS.HOOP_HEIGHT + CONSTANTS.BACKBOARD_HEIGHT);
            };
        }
    }, {
        key: "animate",
        value: function animate(ctx) {
            // ctx.fillStyle = this.color;
            // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
            //     ctx.drawImage(this.courtImage,
            //         this.position.x - this.courtImage.width / 12, 
            //         this.position.y - this.courtImage.height / 2,
            //         this.width + this.courtImage.width / 6,
            //         this.courtImage.height);
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
    function NBAJamGame(canvas, backgroundCanvas) {
        _classCallCheck(this, NBAJamGame);

        this.ctx = canvas.getContext("2d");
        this.backgroundCanvas = backgroundCanvas;
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
            this.court = new _court2.default(this.dimensions, this.backgroundCanvas);
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
            // this.ctx.fillStyle = "orange";
            // this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
            this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);

            this.court.animate(this.ctx);
            this.scoreboard.animate(this.ctx);
            // ANIMATE OBJECTS
            this.player.animate(this.ctx);
            this.player2.animate(this.ctx);
            this.ball.animate(this.ctx);
            this.leftHoop.animate(this.ctx);
            this.rightHoop.animate(this.ctx);

            if (this.gameOver()) {
                this.displayWinner();
            }
            // REQUEST NEXT FRAME
            if (this.playingGame) {
                //     setTimeout( () => {
                requestAnimationFrame(this.animate.bind(this));
                // }, 1000 / 60)
            }
        }
    }, {
        key: 'runOnlineGame',
        value: function runOnlineGame(leftSprite, rightSprite, mySide) {
            var _this = this;

            this.court = new _court2.default(this.dimensions, this.backgroundCanvas);
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
            // this.ctx.fillStyle = "orange";
            // this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
            this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);

            this.court.animate(this.ctx);
            // ANIMATE OBJECTS
            this.otherPlayer.animate(this.ctx);
            this.myPlayer.animate(this.ctx);

            this.ball.animate(this.ctx);

            this.leftHoop.animate(this.ctx);
            this.rightHoop.animate(this.ctx);

            this.scoreboard.animate(this.ctx);

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
            if (this.playingGame) {
                //     setTimeout(() => {
                requestAnimationFrame(this.runOnline.bind(this));
                // }, 1000 / 60)
            }
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
        _this.hoopSide = hoopSide;

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

        _this.hoopLeftScored = new Image();
        _this.hoopLeftScored.src = "src/assets/hoopLeftScored.png";
        _this.hoopRightScored = new Image();
        _this.hoopRightScored.src = "src/assets/hoopRightScored.png";
        return _this;
    }

    _createClass(Hoop, [{
        key: "animate",
        value: function animate(ctx) {
            var _this2 = this;

            this.checkBallCollision();
            // this.backboard.animate(ctx)
            // ctx.fillStyle = this.color;
            // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
            // this.scoreHitbox.animate(ctx)
            if (this.ball.isOverlappingRect(this.scoreHitbox)) {
                if (!this.justScored) this.score += 2;
                this.justScored = true;
                if (this.hoopSide === "LEFT") {
                    ctx.drawImage(this.hoopLeftScored, this.position.x - 5, this.position.y - (CONSTANTS.HOOP_HEIGHT + 5), CONSTANTS.HOOP_WIDTH + CONSTANTS.BACKBOARD_WIDTH + 10, CONSTANTS.HOOP_HEIGHT + CONSTANTS.BACKBOARD_HEIGHT);
                } else if (this.hoopSide === "RIGHT") {
                    ctx.drawImage(this.hoopRightScored, this.position.x - 15, this.position.y - (CONSTANTS.HOOP_HEIGHT + 5), CONSTANTS.HOOP_WIDTH + CONSTANTS.BACKBOARD_WIDTH + 10, CONSTANTS.HOOP_HEIGHT + CONSTANTS.BACKBOARD_HEIGHT);
                }
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
            _this.onlineMode = false;
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

            // ctx.fillStyle = "#1c2c55";
            // ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

            // LEFT SIDE
            var leftSideChar = this.characters[this.leftSelected];
            var loc = { x: this.dimensions.width / 4, y: this.dimensions.height / 2 };
            ctx.font = "bold 40pt 'Scoreboard'";
            ctx.textAlign = "center";
            ctx.fillStyle = "white";

            if (this.onlineMode) ctx.fillText("Online Mode", this.dimensions.width / 2, loc.y - 80);
            ctx.font = "bold 12pt 'Scoreboard'";
            if (this.leftReady) ctx.fillText("Ready", loc.x, loc.y - 70);
            if (this.leftPlayerId && this.rightPlayerId) {
                ctx.fillText("" + this.leftPlayerId, loc.x, loc.y - 50);
            } else if (this.onlineMode) {
                ctx.fillText("" + socket.id, loc.x, loc.y - 50);
            }

            ctx.font = "bold 40pt 'Scoreboard'";
            ctx.fillText("" + leftSideChar.name, loc.x, loc.y);
            // ctx.strokeStyle = "white";
            // ctx.lineWidth = 1;
            // ctx.strokeText(`${leftSideChar.name}`, loc.x, loc.y);
            ctx.drawImage(this.leftChar, loc.x - this.leftChar.width / 2, loc.y);

            // RIGHT SIDE
            var rightSideChar = this.characters[this.rightSelected];
            loc = { x: this.dimensions.width * 3 / 4, y: this.dimensions.height / 2 };
            ctx.font = "bold 40pt 'Scoreboard'";
            ctx.textAlign = "center";
            ctx.fillStyle = "white";

            // if (this.onlineMode) ctx.fillText("Online Mode", loc.x, loc.y - 100)
            ctx.font = "bold 12pt 'Scoreboard'";
            if (this.rightReady) ctx.fillText("Ready", loc.x, loc.y - 70);
            if (this.leftPlayerId && this.rightPlayerId) {
                ctx.fillText("" + this.rightPlayerId, loc.x, loc.y - 50);
            } else if (this.onlineMode) {
                ctx.fillText("Waiting for Player", loc.x, loc.y - 50);
            }
            ctx.font = "bold 40pt 'Scoreboard'";

            ctx.fillText("" + rightSideChar.name, loc.x, loc.y);
            // ctx.strokeStyle = "white";
            // ctx.lineWidth = 1;
            // ctx.strokeText(`${rightSideChar.name}`, loc.x, loc.y);
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
                } else if (_this2.onlineMode) {

                    (0, _keymaster2.default)('up', function () {
                        if (_this2.gameId && _this2.onlineMode) {
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
                        if (_this2.gameId && _this2.onlineMode) {
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
                        if (_this2.gameId && _this2.onlineMode) {
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

            ctx.fillStyle = "#1c2c55";
            ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
            // RENDER TITLE
            var titleText = this.selectingCharacters ? "Character Select" : "NBA Jam Slam";
            ctx.font = this.selectingCharacters ? "bold 64pt 'Scoreboard'" : "bold 82pt 'Scoreboard'";
            ctx.textAlign = "center";
            ctx.fillStyle = "white";
            var titleLocation = this.selectingCharacters ? { x: this.dimensions.width / 2, y: 0 + 80 } : { x: this.dimensions.width / 2, y: this.dimensions.height / 2 - 80 };
            ctx.fillText('' + titleText, titleLocation.x, titleLocation.y);

            // RENDER CONTENT
            if (!this.selectingCharacters) {
                this.options.forEach(function (option, i) {
                    var loc = { x: _this.dimensions.width / 2, y: _this.dimensions.height / 2 + 60 * i + 60 };
                    ctx.font = "bold 40pt 'Scoreboard'";
                    ctx.textAlign = "center";
                    ctx.fillStyle = "white";

                    var width = ctx.measureText('' + option).width;

                    if (_this.selectedOption === i) ctx.fillRect(loc.x - width / 2 - 5, loc.y - 50, width + 10, 60);

                    // ctx.fillStyle = "black";
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
                if (_this2.selectedOption === 0 && !_this2.selectingCharacters) {
                    _keymaster2.default.unbind('down');
                    _keymaster2.default.unbind('up');
                    _keymaster2.default.unbind('enter');
                    _this2.selectingCharacters = true;
                    _this2.characterSelect.onlineMode = false;
                    _this2.characterSelect.setupKeyHandlers();
                } else if (_this2.selectedOption === 1 && !_this2.selectingCharacters) {
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
            var backgroundBoxLoc = { x: this.dimensions.width / 4, y: this.dimensions.height / 30 };
            ctx.fillStyle = '#1c2c55';
            ctx.fillRect(backgroundBoxLoc.x - 10, backgroundBoxLoc.y, this.dimensions.width / 2 + 20, this.dimensions.height / 5);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 1;
            ctx.strokeRect(backgroundBoxLoc.x - 10, backgroundBoxLoc.y, this.dimensions.width / 2 + 20, this.dimensions.height / 5);

            var leftNameLoc = { x: this.dimensions.width / 3, y: this.dimensions.height / 10 };
            ctx.font = "bold 22pt 'Scoreboard'";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Player 1", leftNameLoc.x, leftNameLoc.y);
            // ctx.strokeStyle = "black";
            // ctx.lineWidth = 1;
            // ctx.strokeText(`Player 1`, leftNameLoc.x, leftNameLoc.y);

            var leftScoreLoc = { x: this.dimensions.width / 3, y: this.dimensions.height / 5 };
            ctx.font = "bold 40pt 'Scoreboard'";
            ctx.fillStyle = "red";
            ctx.textAlign = "center";
            ctx.fillText("" + this.rightHoop.score, leftScoreLoc.x, leftScoreLoc.y);
            // ctx.strokeStyle = "red";
            // ctx.lineWidth = 1;
            // ctx.strokeText(`${this.rightHoop.score}`, leftScoreLoc.x, leftScoreLoc.y);

            var timeLeftLoc = { x: this.dimensions.width / 2, y: this.dimensions.height / 5 };
            ctx.font = "bold 64pt 'Scoreboard'";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("" + this.timeLeft, timeLeftLoc.x, timeLeftLoc.y);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 0.01;
            ctx.strokeText("" + this.timeLeft, timeLeftLoc.x, timeLeftLoc.y);

            var rightNameLoc = { x: this.dimensions.width * 2 / 3, y: this.dimensions.height / 10 };
            ctx.font = "bold 22pt 'Scoreboard'";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Player 2", rightNameLoc.x, rightNameLoc.y);
            // ctx.strokeStyle = "black";
            // ctx.lineWidth = 1;
            // ctx.strokeText(`Player 2`, rightNameLoc.x, rightNameLoc.y);

            var rightScoreLoc = { x: this.dimensions.width * 2 / 3, y: this.dimensions.height / 5 };
            ctx.font = "bold 40pt 'Scoreboard'";
            ctx.fillStyle = "red";
            ctx.textAlign = "center";
            ctx.fillText("" + this.leftHoop.score, rightScoreLoc.x, rightScoreLoc.y);
            // ctx.strokeStyle = "black";
            // ctx.lineWidth = 1;
            // ctx.strokeText(`${this.leftHoop.score}`, rightScoreLoc.x, rightScoreLoc.y);


            // let loc = { x: this.dimensions.width / 2, y: this.dimensions.height / 10 }
            // ctx.font = "bold 40pt 'Scoreboard'";
            // ctx.fillStyle = "white";
            // ctx.textAlign = "center"; 
            // ctx.fillText(`Player 1: ${this.rightHoop.score} Player 2: ${this.leftHoop.score}`, loc.x, loc.y);
            // ctx.strokeStyle = "black";
            // ctx.lineWidth = 2;
            // ctx.strokeText(`Player 1: ${this.rightHoop.score} Player 2: ${this.leftHoop.score}`, loc.x, loc.y);

            // loc = { x: this.dimensions.width / 2, y: this.dimensions.height / 5 }
            // ctx.fillStyle = "white";
            // ctx.textAlign = "center";
            // ctx.fillText(`${this.timeLeft}`, loc.x, loc.y);
            // ctx.strokeStyle = "black";
            // ctx.lineWidth = 2;
            // ctx.strokeText(`${this.timeLeft}`, loc.x, loc.y);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9jb3VydC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9ob29wLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvbWVudV9zY3JlZW5zL2NoYXJhY3Rlcl9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9tZW51X3NjcmVlbnMvbWFpbl9tZW51LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvb25saW5lX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllcjIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMva2V5bWFzdGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvcmVjdC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhc0JhY2tncm91bmQiLCJ3aW5kb3ciLCJlIiwiaW5kZXhPZiIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsIk5CQUphbUdhbWUiLCJDT05TVEFOVFMiLCJSQURJVVMiLCJHUkFWSVRZIiwiQk9VTkNFX1JFVEVOVElPTiIsIkRSSUJCTEVfU1BFRUQiLCJCYWxsIiwiZGltZW5zaW9ucyIsImNvdXJ0IiwibGVmdEhvb3AiLCJyaWdodEhvb3AiLCJnYW1lSWQiLCJiYWxsIiwicG9zaXRpb24iLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwidmVsb2NpdHkiLCJjb2xvciIsInBvc3Nlc3Npb24iLCJub1RvdWNoIiwicG93ZXIiLCJjdHgiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwicmFkaXVzIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsInBsYXllciIsInNvY2tldCIsImVtaXQiLCJmcm9tU29ja2V0IiwiaWQiLCJzaG9vdGluZ1BsYXllciIsImZhY2luZ1JpZ2h0Iiwic2hvb3RpbmdUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbGVhc2VCYWxsIiwic2NvcmVQb3NpdGlvbiIsInNjb3JlSGl0Ym94IiwiaHlwb3QiLCJudW1iZXJPZkZyYW1lcyIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsImRpZmYiLCJhZGp1c3RlZFgiLCJyZW1vdmVQb3NzZXNzaW9uIiwiZmFsbCIsIm1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbiIsImNoZWNrQm91bmRzIiwianVtcGluZyIsIkNpcmNsZSIsIkNPVVJUX0ZMT09SIiwiQ09VUlRfV0lEVEgiLCJIT09QX1lfTVVMVElQTElFUiIsIkhPT1BfSEVJR0hUIiwiSE9PUF9XSURUSCIsIkhPT1BfWF9ESVNUQU5DRSIsIkJBQ0tCT0FSRF9XSURUSCIsIkJBQ0tCT0FSRF9IRUlHSFQiLCJDb3VydCIsImJhY2tncm91bmRDYXZhcyIsImhvb3BMZWZ0UG9zaXRpb24iLCJob29wUmlnaHRQb3NpdGlvbiIsImxlZnRIb29wSW1hZ2UiLCJJbWFnZSIsInJpZ2h0SG9vcEltYWdlIiwic3JjIiwic3RhbmRzSW1hZ2UiLCJjb3VydEltYWdlIiwic2V0dXBCYWNrZ3JvdW5kQ291cnQiLCJnZXRDb250ZXh0IiwiZmlsbFJlY3QiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJSZWN0IiwiYmFja2dyb3VuZENhbnZhcyIsIm1haW5NZW51IiwiTWFpbk1lbnUiLCJzdGFydEdhbWUiLCJiaW5kIiwic3RhcnRPbmxpbmVHYW1lIiwicGxheWluZ0dhbWUiLCJyZW5kZXJNZW51Iiwic2V0dXBLZXlIYW5kbGVycyIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxlZnRTcHJpdGUiLCJyaWdodFNwcml0ZSIsInJlc3RhcnQiLCJteVNpZGUiLCJvbmxpbmVHYW1lSWQiLCJydW5PbmxpbmVHYW1lIiwiSG9vcCIsInNjb3JlYm9hcmQiLCJTY29yZWJvYXJkIiwiUGxheWVyIiwicGxheWVyMiIsIlBsYXllcjIiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiZ2FtZU92ZXIiLCJkaXNwbGF5V2lubmVyIiwibXlQbGF5ZXIiLCJPbmxpbmVQbGF5ZXIiLCJvdGhlclBsYXllciIsIm9uIiwiZGF0YSIsInNob3dNZW51IiwicnVuT25saW5lIiwib3RoZXJQbGF5ZXJGYWNpbmciLCJvdGhlclBsYXllckp1bXBpbmciLCJ0aW1lTGVmdCIsInRleHQiLCJzY29yZSIsImxvYyIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlVGV4dCIsImhvb3BTaWRlIiwiYmFja2JvYXJkIiwiQmFja2JvYXJkIiwiU2NvcmVIaXRib3giLCJqdXN0U2NvcmVkIiwiaG9vcExlZnRTY29yZWQiLCJob29wUmlnaHRTY29yZWQiLCJjaGVja0JhbGxDb2xsaXNpb24iLCJpc092ZXJsYXBwaW5nUmVjdCIsImhvb3AiLCJDaGFyYWN0ZXJTZWxlY3QiLCJzZWxlY3RlZENoYXJhY3RlcnMiLCJsZWZ0U2VsZWN0ZWQiLCJyaWdodFNlbGVjdGVkIiwiY2hhcmFjdGVycyIsIm5hbWUiLCJsZWZ0Q2hhciIsInJpZ2h0Q2hhciIsImxlZnRSZWFkeSIsInJpZ2h0UmVhZHkiLCJsZWZ0UGxheWVySWQiLCJyaWdodFBsYXllcklkIiwiaXNQbGF5aW5nTGVmdCIsImlzUGxheWluZ1JpZ2h0Iiwia2V5IiwidW5iaW5kIiwib25saW5lTW9kZSIsImxlZnRTaWRlQ2hhciIsInJpZ2h0U2lkZUNoYXIiLCJsZW5ndGgiLCJzZWxlY3RlZE9wdGlvbiIsIm9wdGlvbnMiLCJjaGFyYWN0ZXJTZWxlY3QiLCJzZWxlY3RpbmdDaGFyYWN0ZXJzIiwibGVmdFNyYyIsInJpZ2h0U3JjIiwidGl0bGVUZXh0IiwidGl0bGVMb2NhdGlvbiIsImZvckVhY2giLCJvcHRpb24iLCJpIiwibWVhc3VyZVRleHQiLCJhYnMiLCJQTEFZRVJfV0lEVEgiLCJQTEFZRVJfSEVJR0hUIiwiTU9WRVNQRUVEIiwiSlVNUF9IRUlHSFQiLCJzcHJpdGVTcmMiLCJzdGFydFNpZGUiLCJhY3RpdmUiLCJzcHJpdGUiLCJpc1ByZXNzZWQiLCJwcmVmb3JtQWN0aW9uIiwiY2hlY2tCYWxsIiwiaGFuZGxlR3Jhdml0eSIsInNob290IiwiY2xhaW1Qb3NzZXNzaW9uIiwiY291bnREb3duIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiYmFja2dyb3VuZEJveExvYyIsInN0cm9rZVJlY3QiLCJsZWZ0TmFtZUxvYyIsImxlZnRTY29yZUxvYyIsInRpbWVMZWZ0TG9jIiwicmlnaHROYW1lTG9jIiwicmlnaHRTY29yZUxvYyIsInJlY3QiLCJkaXN0WCIsImRpc3RZIiwiZHgiLCJkeSIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImdsb2JhbCIsImsiLCJfaGFuZGxlcnMiLCJfbW9kcyIsIl9zY29wZSIsIl9NT0RJRklFUlMiLCJzaGlmdCIsImFsdCIsImN0cmwiLCJjb250cm9sIiwiY29tbWFuZCIsIl9NQVAiLCJiYWNrc3BhY2UiLCJ0YWIiLCJjbGVhciIsImVudGVyIiwiZXNjIiwiZXNjYXBlIiwic3BhY2UiLCJ1cCIsImRvd24iLCJkZWwiLCJob21lIiwiZW5kIiwicGFnZXVwIiwicGFnZWRvd24iLCJjb2RlIiwidG9VcHBlckNhc2UiLCJjaGFyQ29kZUF0IiwiX2Rvd25LZXlzIiwiaW5kZXgiLCJhcnJheSIsIml0ZW0iLCJjb21wYXJlQXJyYXkiLCJhMSIsImEyIiwibW9kaWZpZXJNYXAiLCJ1cGRhdGVNb2RpZmllcktleSIsImV2ZW50IiwiZGlzcGF0Y2giLCJoYW5kbGVyIiwibW9kaWZpZXJzTWF0Y2giLCJzY29wZSIsInB1c2giLCJhc3NpZ25LZXkiLCJmaWx0ZXIiLCJjYWxsIiwiZ2V0U2NvcGUiLCJtb2RzIiwibWV0aG9kIiwicmV0dXJuVmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJjYW5jZWxCdWJibGUiLCJjbGVhck1vZGlmaWVyIiwic3BsaWNlIiwicmVzZXRNb2RpZmllcnMiLCJrZXlzIiwiZ2V0S2V5cyIsInVuZGVmaW5lZCIsInNwbGl0IiwiZ2V0TW9kcyIsInNob3J0Y3V0IiwidW5iaW5kS2V5IiwibXVsdGlwbGVLZXlzIiwiaiIsIm9iaiIsImdldFByZXNzZWRLZXlDb2RlcyIsInNsaWNlIiwidGFnTmFtZSIsInRhcmdldCIsInNyY0VsZW1lbnQiLCJzZXRTY29wZSIsImRlbGV0ZVNjb3BlIiwiaGFuZGxlcnMiLCJyZXBsYWNlIiwibWkiLCJhZGRFdmVudCIsIm9iamVjdCIsImF0dGFjaEV2ZW50IiwicHJldmlvdXNLZXkiLCJub0NvbmZsaWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsInNpemUiLCJyZWN0Q2xhc3MiLCJteUJvdW5kcyIsImdldEJvdW5kcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlD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QUFXLEtBQUtDLFNBQUwsRUFBakI7QUFDQSxnQkFBTS9GLE9BQU82RixVQUFVRSxTQUFWLEVBQWI7QUFDQSxnQkFBSUQsU0FBU3pGLElBQVQsR0FBZ0JMLEtBQUtNLEtBQXJCLElBQThCd0YsU0FBU3hGLEtBQVQsR0FBaUJOLEtBQUtLLElBQXhELEVBQThEO0FBQzFELHVCQUFPLEtBQVA7QUFDSDtBQUNELGdCQUFJeUYsU0FBU3ZGLEdBQVQsR0FBZVAsS0FBS1EsTUFBcEIsSUFBOEJzRixTQUFTdEYsTUFBVCxHQUFrQlIsS0FBS08sR0FBekQsRUFBOEQ7QUFDMUQsdUJBQU8sS0FBUDtBQUNIO0FBQ0QsbUJBQU8sSUFBUDtBQUNIOzs7b0NBRVc7QUFDUixtQkFBTztBQUNIRixzQkFBTSxLQUFLM0wsUUFBTCxDQUFjQyxDQURqQjtBQUVIMkwsdUJBQU8sS0FBSzVMLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLQyxLQUYzQjtBQUdIMkwscUJBQUssS0FBSzdMLFFBQUwsQ0FBY0csQ0FIaEI7QUFJSDJMLHdCQUFRLEtBQUs5TCxRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS0M7QUFKNUIsYUFBUDtBQU1IOzs7Ozs7a0JBekJnQmdFLEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY2xpZW50L3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBOQkFKYW1HYW1lIGZyb20gJy4vanMvZ2FtZS5qcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmJhLWphbS1nYW1lJyk7XG4gICAgY29uc3QgY2FudmFzQmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYmEtamFtLWJhY2tncm91bmQnKTtcblxuICAgIC8vIFByZXZlbnQgc2Nyb2xsaW5nIHdpdGggYXJyb3cga2V5c1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBzcGFjZSBhbmQgYXJyb3cga2V5c1xuICAgICAgICBpZiAoWzMyLCAzNywgMzgsIDM5LCA0MF0uaW5kZXhPZihlLmtleUNvZGUpID4gLTEpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgICBuZXcgTkJBSmFtR2FtZShjYW52YXMsIGNhbnZhc0JhY2tncm91bmQpO1xufSk7IiwiaW1wb3J0IENpcmNsZSBmcm9tIFwiLi91dGlscy9jaXJjbGVcIjtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIFJBRElVUzogMTUsXG4gICAgR1JBVklUWTogMC41LFxuICAgIEJPVU5DRV9SRVRFTlRJT046IDAuNixcbiAgICBEUklCQkxFX1NQRUVEOiAzLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIGV4dGVuZHMgQ2lyY2xlIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBjb3VydCwgbGVmdEhvb3AsIHJpZ2h0SG9vcCwgZ2FtZUlkKSB7XG4gICAgICAgIHN1cGVyKENPTlNUQU5UUy5SQURJVVMpXG4gICAgICAgIHRoaXMuY291cnQgPSBjb3VydFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBsZWZ0SG9vcFxuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IHJpZ2h0SG9vcFxuICAgICAgICB0aGlzLmxlZnRIb29wLmJhbGwgPSB0aGlzXG4gICAgICAgIHRoaXMucmlnaHRIb29wLmJhbGwgPSB0aGlzXG5cbiAgICAgICAgdGhpcy5nYW1lSWQgPSBnYW1lSWRcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jb3VydC53aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMlxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImhvdHBpbmtcIlxuICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgIHRoaXMubm9Ub3VjaCA9IHt9XG4gICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCwgXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnksIFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsIFxuICAgICAgICAgICAgMCwgXG4gICAgICAgICAgICBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIFxuICAgIGNsYWltUG9zc2Vzc2lvbihwbGF5ZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vVG91Y2hbcGxheWVyLmNvbG9yXSkge1xuICAgICAgICAgICAgdGhpcy5wb3NzZXNzaW9uID0gcGxheWVyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcImNoYW5nZU9mUG9zc2VzaW9uXCIsIHtcbiAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkLFxuICAgICAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc2hvb3QgKCkge1xuICAgICAgICAvLyBCRVRBIFNIT09USU5HXG5cbiAgICAgICAgLy8gdGhpcy5wb3dlciArPSAxXG4gICAgICAgIC8vIGNvbnN0IHNob290aW5nUGxheWVyID0gdGhpcy5wb3NzZXNzaW9uXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID9cbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54ICsgc2hvb3RpbmdQbGF5ZXIud2lkdGggKyB0aGlzLnJhZGl1cykgOlxuICAgICAgICAvLyAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cylcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ID0gc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueVxuXG4gICAgICAgIC8vIGlmICh0aGlzLnNob290aW5nSW50ZXJ2YWwgJiYgdGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgIC8vICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG9vdGluZ0ludGVydmFsKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmICh0aGlzLnBvd2VyIDwgNjApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuc2hvb3RpbmdJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gNiA6IC02XG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gdGhpcy5wb3dlclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcbiAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWUgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gZmFsc2VcbiAgICAgICAgLy8gICAgICAgICB9LCA1MDApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgICAgIC8vICAgICB9LCAyMCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBBSU1CT1QgU0hPT1RJTkdcblxuICAgICAgICAvLyBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICAvLyBjb25zdCBzY29yZVBvc2l0aW9uID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgPyAoXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgeDogdGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueCArICh0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC53aWR0aCAvIDIpLFxuICAgICAgICAvLyAgICAgICAgIHk6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnlcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gKSA6IChcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICB4OiB0aGlzLmxlZnRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgLy8gICAgICAgICB5OiB0aGlzLmxlZnRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnlcbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyApXG5cbiAgICAgICAgLy8gY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSA1MFxuXG4gICAgICAgIC8vIGNvbnN0IHZlbG9jaXR5WCA9IChzY29yZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICAgICAgLy8gY29uc3QgdmVsb2NpdHlZID0gKCAoLXNjb3JlUG9zaXRpb24ueSArIHRoaXMucG9zaXRpb24ueSkgLSAwLjUgKiAtQ09OU1RBTlRTLkdSQVZJVFkgKiAobnVtYmVyT2ZGcmFtZXMgKiBudW1iZXJPZkZyYW1lcykgKSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAvLyAgICAgeDogdmVsb2NpdHlYLFxuICAgICAgICAvLyAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gdHJ1ZSAgICAgICAgXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IGZhbHNlXG4gICAgICAgIC8vIH0sIDUwMCk7XG5cbiAgICAgICAgLy8gdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuXG4gICAgICAgIC8vIFBPV0VSQkFTRUQgQUlNRUQgU0hPT1RJTkdcblxuXG4gICAgICAgIHRoaXMucG93ZXIgKz0gMVxuXG4gICAgICAgIGNvbnN0IHNob290aW5nUGxheWVyID0gdGhpcy5wb3NzZXNzaW9uXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID9cbiAgICAgICAgICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54ICsgc2hvb3RpbmdQbGF5ZXIud2lkdGggKyB0aGlzLnJhZGl1cykgOlxuICAgICAgICAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cylcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueVxuXG4gICAgICAgIGlmICh0aGlzLnNob290aW5nVGltZW91dCAmJiB0aGlzLnBvd2VyIDwgNjApIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNob290aW5nVGltZW91dClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgICAgICB0aGlzLnNob290aW5nVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVsZWFzZUJhbGwoKVxuICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZWxlYXNlQmFsbCAoKSB7XG4gICAgICAgIGNvbnN0IHNob290aW5nUGxheWVyID0gdGhpcy5wb3NzZXNzaW9uXG5cbiAgICAgICAgY29uc3Qgc2NvcmVQb3NpdGlvbiA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgICAgICB9XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgICAgICB9XG4gICAgICAgIClcblxuICAgICAgICAvLyBMQVlVUFxuICAgICAgICBpZiAoMTUwID4gTWF0aC5oeXBvdCh0aGlzLnBvc2l0aW9uLnggLSBzY29yZVBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSAtIHNjb3JlUG9zaXRpb24ueSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlck9mRnJhbWVzID0gMzBcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WCA9IChzY29yZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WSA9ICgoLXNjb3JlUG9zaXRpb24ueSArIHRoaXMucG9zaXRpb24ueSkgLSAwLjUgKiAtQ09OU1RBTlRTLkdSQVZJVFkgKiAobnVtYmVyT2ZGcmFtZXMgKiBudW1iZXJPZkZyYW1lcykpIC8gbnVtYmVyT2ZGcmFtZXNcblxuICAgICAgICAgICAgY29uc3QgZGlmZiA9ICh0aGlzLnBvd2VyIC0gMzApIC8gMjBcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkWCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCArIGRpZmZcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYIC0gZGlmZlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgICAgICB4OiBhZGp1c3RlZFgsXG4gICAgICAgICAgICAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTSE9UXG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IDUwXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WCA9IChzY29yZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WSA9ICgoLXNjb3JlUG9zaXRpb24ueSArIHRoaXMucG9zaXRpb24ueSkgLSAwLjUgKiAtQ09OU1RBTlRTLkdSQVZJVFkgKiAobnVtYmVyT2ZGcmFtZXMgKiBudW1iZXJPZkZyYW1lcykpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAodGhpcy5wb3dlciAtIDMwKSAvIDZcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkWCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCArIGRpZmZcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYIC0gZGlmZlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgICAgICB4OiBhZGp1c3RlZFgsXG4gICAgICAgICAgICAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gdHJ1ZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSBmYWxzZVxuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgICAgIHRoaXMucmVtb3ZlUG9zc2Vzc2lvbigpXG5cbiAgICB9XG5cbiAgICByZW1vdmVQb3NzZXNzaW9uKCkge1xuICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgIHNvY2tldC5lbWl0KFwicmVtb3ZlQmFsbFBvc3Nlc3Npb25cIiwge1xuICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZCxcbiAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb25cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5wb3NzZXNzaW9uKSB7XG4gICAgICAgICAgICB0aGlzLmZhbGwoKVxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbigpIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG4gICAgbW92ZVdpdGhQbGF5ZXJQb3NzZXNzaW9uKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnBvc3Nlc3Npb24uZmFjaW5nUmlnaHQgP1xuICAgICAgICAgICAgKHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi54ICsgdGhpcy5wb3NzZXNzaW9uLndpZHRoKSA6ICh0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueClcblxuICAgICAgICBpZiAodGhpcy5wb3NzZXNzaW9uLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIC8vIEhPTEQgQkFMTFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLnkgKyB0aGlzLnBvc3Nlc3Npb24uaGVpZ2h0IC8gMlxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEUklCQkxJTkdcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPCB0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueSArIHRoaXMucG9zc2Vzc2lvbi5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLUNPTlNUQU5UUy5EUklCQkxFX1NQRUVEXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+IHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi55ICsgdGhpcy5wb3NzZXNzaW9uLmhlaWdodCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkRSSUJCTEVfU1BFRURcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5LnlcbiAgICAgICAgfVxuICAgICAgICAvLyBzb2NrZXQuZW1pdChcInVwZGF0ZUJhbGxXaXRoUG9zXCIsIHtcbiAgICAgICAgLy8gICAgIGdhbWVJZDogdGhpcy5nYW1lSWQsXG4gICAgICAgIC8vICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgIC8vICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICAvLyAgICAgb3RoZXJQbGF5ZXJGYWNpbmc6IHRoaXMucG9zc2Vzc2lvbi5mYWNpbmdSaWdodFxuICAgICAgICAvLyB9KVxuICAgIH1cblxuXG4gICAgZmFsbCAoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgICAgIC8vIEdSQVZJVFlcbiAgICAgICAgLy8gaWYgdGhlIHBvcyBpcyBncmVhdGVyIHRoYW4gdGhlIGZsb29yXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnJhZGl1cyA8IHRoaXMuY291cnQucG9zaXRpb24ueSkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IENPTlNUQU5UUy5HUkFWSVRZO1xuICAgICAgICAgICAgLy8gZWxzZSBzZXQgdGhlIHJldmVyc2UgdmVsb2NpdHlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZlbG9jaXR5LnkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy52ZWxvY2l0eS55ICogQ09OU1RBTlRTLkJPVU5DRV9SRVRFTlRJT05cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2hlY2tCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY291cnQud2lkdGggLSB0aGlzLnJhZGl1c1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDBcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5LnhcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCBSZWN0IGZyb20gXCIuL3V0aWxzL3JlY3RcIjtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIENPVVJUX0ZMT09SOiAwLjg1LFxuICAgIENPVVJUX1dJRFRIOiA1LFxuICAgIEhPT1BfWV9NVUxUSVBMSUVSOiAwLjMsXG4gICAgSE9PUF9IRUlHSFQ6IDQwLFxuICAgIEhPT1BfV0lEVEg6IDUwLFxuICAgIEhPT1BfWF9ESVNUQU5DRTogNTAsXG4gICAgQkFDS0JPQVJEX1dJRFRIOiAxNSxcbiAgICBCQUNLQk9BUkRfSEVJR0hUOiA1MFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291cnQgZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBiYWNrZ3JvdW5kQ2F2YXMpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogZGltZW5zaW9ucy53aWR0aCwgaGVpZ2h0OiBDT05TVEFOVFMuQ09VUlRfV0lEVEggfSlcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IGRpbWVuc2lvbnMuaGVpZ2h0ICogQ09OU1RBTlRTLkNPVVJUX0ZMT09SXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob29wTGVmdFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMCArIENPTlNUQU5UUy5IT09QX1hfRElTVEFOQ0UgLSA2LFxuICAgICAgICAgICAgeTogZGltZW5zaW9ucy5oZWlnaHQgKiBDT05TVEFOVFMuSE9PUF9ZX01VTFRJUExJRVJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvb3BSaWdodFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogZGltZW5zaW9ucy53aWR0aCAtIENPTlNUQU5UUy5IT09QX1hfRElTVEFOQ0UgLSBDT05TVEFOVFMuSE9PUF9XSURUSCAtIENPTlNUQU5UUy5CQUNLQk9BUkRfV0lEVEgsXG4gICAgICAgICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAqIENPTlNUQU5UUy5IT09QX1lfTVVMVElQTElFUlxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGVmdEhvb3BJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubGVmdEhvb3BJbWFnZS5zcmMgPSBcInNyYy9hc3NldHMvY2FydG9vbkhvb3BMZWZ0LnBuZ1wiXG4gICAgICAgIHRoaXMucmlnaHRIb29wSW1hZ2Uuc3JjID0gXCJzcmMvYXNzZXRzL2NhcnRvb25Ib29wUmlnaHQucG5nXCJcblxuXG4gICAgICAgIHRoaXMuc3RhbmRzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zdGFuZHNJbWFnZS5zcmMgPSBcInNyYy9hc3NldHMvYmFza2V0YmFsbC1zdGFuZHMucG5nXCJcblxuICAgICAgICB0aGlzLmNvbG9yID0gXCJncmVlblwiXG4gICAgICAgIHRoaXMuY291cnRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmNvdXJ0SW1hZ2Uuc3JjID0gXCJzcmMvYXNzZXRzL2JiYWxsY291cnRzbWFsbC5wbmdcIlxuICAgICAgICB0aGlzLnNldHVwQmFja2dyb3VuZENvdXJ0KGJhY2tncm91bmRDYXZhcylcbiAgICB9ICBcblxuICAgIHNldHVwQmFja2dyb3VuZENvdXJ0KGNhbnZhcykge1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY291cnRJbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY291cnRJbWFnZSxcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmNvdXJ0SW1hZ2Uud2lkdGggLyAxMiwgXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5jb3VydEltYWdlLmhlaWdodCAvIDIsXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCArIHRoaXMuY291cnRJbWFnZS53aWR0aCAvIDYsXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VydEltYWdlLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGFuZHNJbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuc3RhbmRzSW1hZ2UsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhbmRzSW1hZ2Uud2lkdGgsIHRoaXMuc3RhbmRzSW1hZ2UuaGVpZ2h0KVxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRIb29wSW1hZ2UsXG4gICAgICAgICAgICAgICAgdGhpcy5ob29wTGVmdFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgdGhpcy5ob29wTGVmdFBvc2l0aW9uLnkgLSAoQ09OU1RBTlRTLkhPT1BfSEVJR0hUICsgNSksXG4gICAgICAgICAgICAgICAgQ09OU1RBTlRTLkhPT1BfV0lEVEggKyBDT05TVEFOVFMuQkFDS0JPQVJEX1dJRFRIICsgMTAsXG4gICAgICAgICAgICAgICAgQ09OU1RBTlRTLkhPT1BfSEVJR0hUICsgQ09OU1RBTlRTLkJBQ0tCT0FSRF9IRUlHSFQpXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMucmlnaHRIb29wSW1hZ2UsXG4gICAgICAgICAgICAgICAgdGhpcy5ob29wUmlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIHRoaXMuaG9vcFJpZ2h0UG9zaXRpb24ueSAtIChDT05TVEFOVFMuSE9PUF9IRUlHSFQgKyA1KSxcbiAgICAgICAgICAgICAgICBDT05TVEFOVFMuSE9PUF9XSURUSCArIENPTlNUQU5UUy5CQUNLQk9BUkRfV0lEVEggKyAxMCxcbiAgICAgICAgICAgICAgICBDT05TVEFOVFMuSE9PUF9IRUlHSFQgKyBDT05TVEFOVFMuQkFDS0JPQVJEX0hFSUdIVClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxlZnRIb29wSW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRIb29wSW1hZ2UsXG4gICAgICAgICAgICAgICAgdGhpcy5ob29wTGVmdFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgdGhpcy5ob29wTGVmdFBvc2l0aW9uLnkgLSAoQ09OU1RBTlRTLkhPT1BfSEVJR0hUICsgNSksXG4gICAgICAgICAgICAgICAgQ09OU1RBTlRTLkhPT1BfV0lEVEggKyBDT05TVEFOVFMuQkFDS0JPQVJEX1dJRFRIICsgMTAsXG4gICAgICAgICAgICAgICAgQ09OU1RBTlRTLkhPT1BfSEVJR0hUICsgQ09OU1RBTlRTLkJBQ0tCT0FSRF9IRUlHSFQpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yaWdodEhvb3BJbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMucmlnaHRIb29wSW1hZ2UsXG4gICAgICAgICAgICAgICAgdGhpcy5ob29wUmlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIHRoaXMuaG9vcFJpZ2h0UG9zaXRpb24ueSAtIChDT05TVEFOVFMuSE9PUF9IRUlHSFQgKyA1KSxcbiAgICAgICAgICAgICAgICBDT05TVEFOVFMuSE9PUF9XSURUSCArIENPTlNUQU5UUy5CQUNLQk9BUkRfV0lEVEggKyAxMCxcbiAgICAgICAgICAgICAgICBDT05TVEFOVFMuSE9PUF9IRUlHSFQgKyBDT05TVEFOVFMuQkFDS0JPQVJEX0hFSUdIVClcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgLy8gICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jb3VydEltYWdlLFxuICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5jb3VydEltYWdlLndpZHRoIC8gMTIsIFxuICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5jb3VydEltYWdlLmhlaWdodCAvIDIsXG4gICAgLy8gICAgICAgICB0aGlzLndpZHRoICsgdGhpcy5jb3VydEltYWdlLndpZHRoIC8gNixcbiAgICAvLyAgICAgICAgIHRoaXMuY291cnRJbWFnZS5oZWlnaHQpO1xuICAgIH1cblxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInXG5pbXBvcnQgQ291cnQgZnJvbSAnLi9jb3VydCc7XG5pbXBvcnQgSG9vcCBmcm9tICcuL2hvb3AnO1xuaW1wb3J0IEJhbGwgZnJvbSAnLi9iYWxsJztcbmltcG9ydCBTY29yZWJvYXJkIGZyb20gJy4vc2NvcmVib2FyZCc7XG5pbXBvcnQgUGxheWVyMiBmcm9tICcuL3BsYXllcjInO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vbWVudV9zY3JlZW5zL21haW5fbWVudSc7XG5pbXBvcnQgT25saW5lUGxheWVyIGZyb20gJy4vb25saW5lX3BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5CQUphbUdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgYmFja2dyb3VuZENhbnZhcykgeyAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ2FudmFzID0gYmFja2dyb3VuZENhbnZhc1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLm1haW5NZW51ID0gbmV3IE1haW5NZW51KHRoaXMuZGltZW5zaW9ucywgdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKSwgdGhpcy5zdGFydE9ubGluZUdhbWUuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlck1lbnUoKVxuICAgIH1cblxuICAgIHNob3dNZW51KCkge1xuICAgICAgICB0aGlzLm1haW5NZW51LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICB0aGlzLnJlbmRlck1lbnUodGhpcy5jdHgpXG4gICAgfVxuXG4gICAgcmVuZGVyTWVudSAoKSB7XG4gICAgICAgIHRoaXMubWFpbk1lbnUucmVuZGVyKHRoaXMuY3R4KVxuICAgICAgICBpZiAoIXRoaXMucGxheWluZ0dhbWUpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlck1lbnUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lIChsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSkge1xuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gdHJ1ZVxuICAgICAgICB0aGlzLnJlc3RhcnQobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUpXG4gICAgfVxuXG4gICAgc3RhcnRPbmxpbmVHYW1lKGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlLCBteVNpZGUsIGdhbWVJZCkge1xuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gdHJ1ZVxuICAgICAgICB0aGlzLm9ubGluZUdhbWVJZCA9IGdhbWVJZFxuICAgICAgICB0aGlzLnJ1bk9ubGluZUdhbWUobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUsIG15U2lkZSlcbiAgICB9XG5cbiAgICByZXN0YXJ0KGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlKSB7XG4gICAgICAgIC8vIFNUQVJUIEFOSU1BVElPTiBTWUNMRVxuICAgICAgICB0aGlzLmNvdXJ0ID0gbmV3IENvdXJ0KHRoaXMuZGltZW5zaW9ucywgdGhpcy5iYWNrZ3JvdW5kQ2FudmFzKTtcbiAgICAgICAgdGhpcy5sZWZ0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJMRUZUXCIpO1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJSSUdIVFwiKTtcbiAgICAgICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5kaW1lbnNpb25zLCB0aGlzLmNvdXJ0LCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcClcblxuICAgICAgICB0aGlzLnNjb3JlYm9hcmQgPSBuZXcgU2NvcmVib2FyZCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMubGVmdEhvb3AsIHRoaXMucmlnaHRIb29wKVxuXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIHJpZ2h0U3ByaXRlKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcjIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCBsZWZ0U3ByaXRlKTtcblxuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG4gICAgXG4gICAgYW5pbWF0ZSgpIHsgICAgICAgIFxuICAgICAgICAvLyBDUkVBVEVTIEJBQ0tHUk9VTkRcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG5cbiAgICAgICAgXG4gICAgICAgIHRoaXMuY291cnQuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5zY29yZWJvYXJkLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIC8vIEFOSU1BVEUgT0JKRUNUU1xuICAgICAgICB0aGlzLnBsYXllci5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLnBsYXllcjIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5iYWxsLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMubGVmdEhvb3AuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5yaWdodEhvb3AuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5nYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlXaW5uZXIoKVxuICAgICAgICB9XG4gICAgICAgIC8vIFJFUVVFU1QgTkVYVCBGUkFNRVxuICAgICAgICBpZiAodGhpcy5wbGF5aW5nR2FtZSkge1xuICAgICAgICAvLyAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAvLyB9LCAxMDAwIC8gNjApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBydW5PbmxpbmVHYW1lKGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlLCBteVNpZGUpIHtcbiAgICAgICAgdGhpcy5jb3VydCA9IG5ldyBDb3VydCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuYmFja2dyb3VuZENhbnZhcyk7XG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiTEVGVFwiKTtcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiUklHSFRcIik7XG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKHRoaXMuZGltZW5zaW9ucywgdGhpcy5jb3VydCwgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3AsIHRoaXMub25saW5lR2FtZUlkKVxuXG4gICAgICAgIHRoaXMuc2NvcmVib2FyZCA9IG5ldyBTY29yZWJvYXJkKHRoaXMuZGltZW5zaW9ucywgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3ApXG5cbiAgICAgICAgaWYgKG15U2lkZSA9PT0gXCJMRUZUXCIpIHtcbiAgICAgICAgICAgIHRoaXMubXlQbGF5ZXIgPSBuZXcgT25saW5lUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgbGVmdFNwcml0ZSwgXCJMRUZUXCIsIHRydWUpXG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyID0gbmV3IE9ubGluZVBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIHJpZ2h0U3ByaXRlLCBcIlJJR0hUXCIsIGZhbHNlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllciA9IG5ldyBPbmxpbmVQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCBsZWZ0U3ByaXRlLCBcIkxFRlRcIiwgZmFsc2UpXG4gICAgICAgICAgICB0aGlzLm15UGxheWVyID0gbmV3IE9ubGluZVBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIHJpZ2h0U3ByaXRlLCBcIlJJR0hUXCIsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVPdGhlclBvc1wiLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllci5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB4OiBkYXRhW1wieFwiXSxcbiAgICAgICAgICAgICAgICB5OiBkYXRhW1wieVwiXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIuZmFjaW5nUmlnaHQgID0gZGF0YVtcIm90aGVyUGxheWVyRmFjaW5nXCJdXG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyLmp1bXBpbmcgPSBkYXRhW1wib3RoZXJQbGF5ZXJKdW1waW5nXCJdXG4gICAgICAgIH0pIFxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVCYWxsUG9zc2VzaW9uXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5iYWxsLnBvc3Nlc3Npb24gPSB0aGlzLm90aGVyUGxheWVyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInJlZ2lzdGVyZWRQb3NzZXNpb25DaGFuZ2VcIiwge1xuICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5vbmxpbmVHYW1lSWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZU5vQmFsbFBvc3Nlc2lvblwiLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC5wb3NzZXNzaW9uID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5iYWxsLnBvc2l0aW9uID0gZGF0YVtcInBvc2l0aW9uXCJdXG4gICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkgPSBkYXRhW1widmVsb2NpdHlcIl1cbiAgICAgICAgfSlcbiAgICAgICAgLy8gc29ja2V0Lm9uKFwidXBkYXRlQmFsbFBvc1wiLCBkYXRhID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMuYmFsbC5wb3NpdGlvbiA9IGRhdGFbXCJwb3NpdGlvblwiXVxuICAgICAgICAvLyAgICAgdGhpcy5iYWxsLnZlbG9jaXR5ID0gZGF0YVtcInZlbG9jaXR5XCJdXG4gICAgICAgIC8vICAgICB0aGlzLm90aGVyUGxheWVyLmZhY2luZ1JpZ2h0ID0gZGF0YVtcIm90aGVyUGxheWVyRmFjaW5nXCJdXG4gICAgICAgIC8vIH0pXG4gICAgICAgIHNvY2tldC5vbihcImVuZEdhbWVGcm9tRGlzY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMub25saW5lR2FtZUlkID0gbnVsbFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TWVudSgpXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnJ1bk9ubGluZSgpO1xuICAgIH1cblxuICAgIHJ1bk9ubGluZSAoKSB7XG4gICAgICAgIC8vIENSRUFURVMgQkFDS0dST1VORFxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIm9yYW5nZVwiO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcblxuXG4gICAgICAgIHRoaXMuY291cnQuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgLy8gQU5JTUFURSBPQkpFQ1RTXG4gICAgICAgIHRoaXMub3RoZXJQbGF5ZXIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5teVBsYXllci5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5iYWxsLmFuaW1hdGUodGhpcy5jdHgpXG5cbiAgICAgICAgdGhpcy5sZWZ0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLnJpZ2h0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuXG4gICAgICAgIHRoaXMuc2NvcmVib2FyZC5hbmltYXRlKHRoaXMuY3R4KVxuXG4gICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVdpbm5lcigpXG4gICAgICAgIH1cblxuXG4gICAgICAgIHNvY2tldC5lbWl0KFwidXBkYXRlTXlQb3NcIiwge1xuICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLm9ubGluZUdhbWVJZCxcbiAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgIHg6IHRoaXMubXlQbGF5ZXIucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMubXlQbGF5ZXIucG9zaXRpb24ueSxcbiAgICAgICAgICAgIG90aGVyUGxheWVyRmFjaW5nOiB0aGlzLm15UGxheWVyLmZhY2luZ1JpZ2h0LFxuICAgICAgICAgICAgb3RoZXJQbGF5ZXJKdW1waW5nOiB0aGlzLm15UGxheWVyLmp1bXBpbmdcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0LmVtaXQoXCJ1cGRhdGVCYWxsUG9zXCIsIHtcbiAgICAgICAgICAgIGdhbWVJZDogdGhpcy5vbmxpbmVHYW1lSWQsXG4gICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgICAgICB4OiB0aGlzLmJhbGwucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMuYmFsbC5wb3NpdGlvbi55XG4gICAgICAgIH0pXG4gICAgICAgIC8vIFJFUVVFU1QgTkVYVCBGUkFNRVxuICAgICAgICBpZiAodGhpcy5wbGF5aW5nR2FtZSkge1xuICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucnVuT25saW5lLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgLy8gfSwgMTAwMCAvIDYwKVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGdhbWVPdmVyICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmVib2FyZC50aW1lTGVmdCA9PT0gMFxuICAgIH1cblxuICAgIGRpc3BsYXlXaW5uZXIgKCkge1xuICAgICAgICBsZXQgdGV4dDtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRIb29wLnNjb3JlID4gdGhpcy5sZWZ0SG9vcC5zY29yZSkge1xuICAgICAgICAgICAgdGV4dCA9IFwiUGxheWVyIDEgd2luc1wiXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0SG9vcC5zY29yZSA+IHRoaXMucmlnaHRIb29wLnNjb3JlKSB7XG4gICAgICAgICAgICB0ZXh0ID0gXCJQbGF5ZXIgMiB3aW5zXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQgPSBcIlRpZSBHYW1lXCJcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiB9XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke3RleHR9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoYCR7dGV4dH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlXG4gICAgICAgIHRoaXMub25saW5lR2FtZUlkID0gbnVsbFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lbnUoKVxuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgUmVjdCBmcm9tICcuL3V0aWxzL3JlY3QnXG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBIT09QX1lfTVVMVElQTElFUjogMC4zLFxuICAgIEhPT1BfSEVJR0hUOiA0MCxcbiAgICBIT09QX1dJRFRIOiA1MCxcbiAgICBIT09QX1hfRElTVEFOQ0U6IDUwLFxuICAgIEJBQ0tCT0FSRF9XSURUSDogMTUsXG4gICAgQkFDS0JPQVJEX0hFSUdIVDogNTAsXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9vcCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIGhvb3BTaWRlLCBiYWxsKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5IT09QX1dJRFRILCBoZWlnaHQ6IENPTlNUQU5UUy5IT09QX0hFSUdIVCB9KVxuICAgICAgICB0aGlzLmJhbGwgPSBiYWxsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5ob29wU2lkZSA9IGhvb3BTaWRlXG5cbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgICAgICAwICsgQ09OU1RBTlRTLkhPT1BfWF9ESVNUQU5DRVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zLndpZHRoIC0gQ09OU1RBTlRTLkhPT1BfWF9ESVNUQU5DRSAtIHRoaXMud2lkdGhcbiAgICAgICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsIFxuICAgICAgICAgICAgeTogZGltZW5zaW9ucy5oZWlnaHQgKiBDT05TVEFOVFMuSE9PUF9ZX01VTFRJUExJRVJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tib2FyZCA9IG5ldyBCYWNrYm9hcmQodGhpcywgaG9vcFNpZGUpXG4gICAgICAgIHRoaXMuc2NvcmVIaXRib3ggPSBuZXcgU2NvcmVIaXRib3godGhpcywgaG9vcFNpZGUpXG4gICAgICAgIHRoaXMuY29sb3IgPSBcInB1cnBsZVwiXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgICAgIHRoaXMuanVzdFNjb3JlZCA9IGZhbHNlXG5cbiAgICAgICAgdGhpcy5ob29wTGVmdFNjb3JlZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmhvb3BMZWZ0U2NvcmVkLnNyYyA9IFwic3JjL2Fzc2V0cy9ob29wTGVmdFNjb3JlZC5wbmdcIlxuICAgICAgICB0aGlzLmhvb3BSaWdodFNjb3JlZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmhvb3BSaWdodFNjb3JlZC5zcmMgPSBcInNyYy9hc3NldHMvaG9vcFJpZ2h0U2NvcmVkLnBuZ1wiXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5jaGVja0JhbGxDb2xsaXNpb24oKVxuICAgICAgICAvLyB0aGlzLmJhY2tib2FyZC5hbmltYXRlKGN0eClcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAvLyB0aGlzLnNjb3JlSGl0Ym94LmFuaW1hdGUoY3R4KVxuICAgICAgICBpZiAodGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMuc2NvcmVIaXRib3gpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuanVzdFNjb3JlZCkgdGhpcy5zY29yZSArPSAyXG4gICAgICAgICAgICB0aGlzLmp1c3RTY29yZWQgPSB0cnVlXG4gICAgICAgICAgICBpZiAodGhpcy5ob29wU2lkZSA9PT0gXCJMRUZUXCIpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaG9vcExlZnRTY29yZWQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIDUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIChDT05TVEFOVFMuSE9PUF9IRUlHSFQgKyA1KSxcbiAgICAgICAgICAgICAgICAgICAgQ09OU1RBTlRTLkhPT1BfV0lEVEggKyBDT05TVEFOVFMuQkFDS0JPQVJEX1dJRFRIICsgMTAsXG4gICAgICAgICAgICAgICAgICAgIENPTlNUQU5UUy5IT09QX0hFSUdIVCArIENPTlNUQU5UUy5CQUNLQk9BUkRfSEVJR0hUXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmhvb3BTaWRlID09PSBcIlJJR0hUXCIpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaG9vcFJpZ2h0U2NvcmVkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSAxNSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gKENPTlNUQU5UUy5IT09QX0hFSUdIVCArIDUpLFxuICAgICAgICAgICAgICAgICAgICBDT05TVEFOVFMuSE9PUF9XSURUSCArIENPTlNUQU5UUy5CQUNLQk9BUkRfV0lEVEggKyAxMCxcbiAgICAgICAgICAgICAgICAgICAgQ09OU1RBTlRTLkhPT1BfSEVJR0hUICsgQ09OU1RBTlRTLkJBQ0tCT0FSRF9IRUlHSFRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gXCJncmVlblwiXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1c3RTY29yZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcInB1cnBsZVwiXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCYWxsQ29sbGlzaW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzKSB8fCB0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcy5iYWNrYm9hcmQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5iYWxsLnBvc2l0aW9uLnkgLSB0aGlzLmJhbGwucmFkaXVzID4gdGhpcy5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFsbC52ZWxvY2l0eS55ID4gMCkgdGhpcy5iYWxsLnZlbG9jaXR5LnkgPSAtdGhpcy5iYWxsLnZlbG9jaXR5LnlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFsbC5wb3NpdGlvbi55ICsgdGhpcy5iYWxsLnJhZGl1cyA8IHRoaXMuYmFja2JvYXJkLnBvc2l0aW9uLnkgJiYgdGhpcy5iYWxsLnZlbG9jaXR5LnkgPCAwKSAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkueSA9IC10aGlzLmJhbGwudmVsb2NpdHkueVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkueCA9IC10aGlzLmJhbGwudmVsb2NpdHkueFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNsYXNzIFNjb3JlSGl0Ym94IGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoaG9vcCwgaG9vcFNpZGUpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLkhPT1BfV0lEVEggLSAzMCwgaGVpZ2h0OiBDT05TVEFOVFMuSE9PUF9IRUlHSFQgKiAwLjA1IH0pXG4gICAgICAgIGNvbnN0IHggPSBob29wU2lkZSA9PT0gXCJMRUZUXCIgPyAoXG4gICAgICAgICAgICBob29wLnBvc2l0aW9uLnggKyAxNVxuICAgICAgICApIDogKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54ICsgaG9vcC53aWR0aCAtIHRoaXMud2lkdGggLSAxNVxuICAgICAgICApXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogaG9vcC5wb3NpdGlvbi55XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwid2hpdGVcIlxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tib2FyZCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGhvb3AsIGhvb3BTaWRlKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5CQUNLQk9BUkRfV0lEVEgsIGhlaWdodDogQ09OU1RBTlRTLkJBQ0tCT0FSRF9IRUlHSFQgfSlcbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCBcbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCArIGhvb3Aud2lkdGggLSB0aGlzLndpZHRoXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiBob29wLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImFxdWFcIlxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59IiwiaW1wb3J0IGtleSBmcm9tICcuLi91dGlscy9rZXltYXN0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXJTZWxlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIHNlbGVjdGVkQ2hhcmFjdGVycykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzID0gc2VsZWN0ZWRDaGFyYWN0ZXJzXG4gICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gMFxuICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAxXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJSb2RtYW5cIiwgc3JjOiBcInNyYy9hc3NldHMvcm9kbWFuU21hbGwucG5nXCJ9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkRyYWtlXCIsIHNyYzogXCJzcmMvYXNzZXRzL2RyYWtlU21hbGwucG5nXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJMZWJyb25cIiwgc3JjOiBcInNyYy9hc3NldHMvbGVicm9uU21hbGwucG5nXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJQZWFjaFwiLCBzcmM6IFwic3JjL2Fzc2V0cy9wZWFjaFNtYWxsLnBuZ1wifVxuICAgICAgICBdXG4gICAgICAgIFxuICAgICAgICB0aGlzLmxlZnRDaGFyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMucmlnaHRDaGFyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubGVmdENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXS5zcmNcbiAgICAgICAgdGhpcy5yaWdodENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjXG5cbiAgICAgICAgdGhpcy5sZWZ0UmVhZHkgPSBmYWxzZVxuICAgICAgICB0aGlzLnJpZ2h0UmVhZHkgPSBmYWxzZVxuXG4gICAgICAgIHNvY2tldC5vbihcIm1hdGNoRm91bmRcIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRQbGF5ZXJJZCA9IGRhdGFbXCJsZWZ0UGxheWVySWRcIl1cbiAgICAgICAgICAgIHRoaXMucmlnaHRQbGF5ZXJJZCA9IGRhdGFbXCJyaWdodFBsYXllcklkXCJdXG4gICAgICAgICAgICBpZiAoc29ja2V0LmlkID09PSB0aGlzLmxlZnRQbGF5ZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nTGVmdCA9IHRydWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdSaWdodCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gMFxuICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gMVxuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSBkYXRhW1wiZ2FtZUlkXCJdXG4gICAgICAgIH0pXG5cbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZFNlbGVjdGVkQ2hhcnNcIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9IGRhdGFbXCJsZWZ0U2VsZWN0ZWRcIl1cbiAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9IGRhdGFbXCJyaWdodFNlbGVjdGVkXCJdXG4gICAgICAgIH0pXG5cbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZExlZnRSZWFkeVwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRSZWFkeSA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZFJpZ2h0UmVhZHlcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yaWdodFJlYWR5ID0gdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHNvY2tldC5vbihcInN0YXJ0R2FtZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBrZXkudW5iaW5kKCdkb3duJylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ3cnKVxuICAgICAgICAgICAga2V5LnVuYmluZCgncycpXG4gICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVycyh0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdLnNyYywgdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjLCB0aGlzLmdhbWVJZClcbiAgICAgICAgICAgIHRoaXMubGVmdFBsYXllcklkID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5yaWdodFBsYXllcklkID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdMZWZ0ID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nUmlnaHQgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5vbmxpbmVNb2RlID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gMFxuICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gMVxuICAgICAgICAgICAgdGhpcy5sZWZ0UmVhZHkgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5yaWdodFJlYWR5ID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gbnVsbFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcihjdHgpIHtcblxuICAgICAgICB0aGlzLmxlZnRDaGFyLnNyYyA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjXG4gICAgICAgIHRoaXMucmlnaHRDaGFyLnNyYyA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdLnNyY1xuXG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiMxYzJjNTVcIjtcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG5cbiAgICAgICAgLy8gTEVGVCBTSURFXG4gICAgICAgIGNvbnN0IGxlZnRTaWRlQ2hhciA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF1cbiAgICAgICAgbGV0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gNCwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDJ9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgJ1Njb3JlYm9hcmQnXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuXG4gICAgICAgIGlmICh0aGlzLm9ubGluZU1vZGUpIGN0eC5maWxsVGV4dChcIk9ubGluZSBNb2RlXCIsIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsIGxvYy55IC0gODApXG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDEycHQgJ1Njb3JlYm9hcmQnXCI7XG4gICAgICAgIGlmICh0aGlzLmxlZnRSZWFkeSkgY3R4LmZpbGxUZXh0KFwiUmVhZHlcIiwgbG9jLngsIGxvYy55IC0gNzApXG4gICAgICAgIGlmICh0aGlzLmxlZnRQbGF5ZXJJZCAmJiB0aGlzLnJpZ2h0UGxheWVySWQpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChgJHt0aGlzLmxlZnRQbGF5ZXJJZH1gLCBsb2MueCwgbG9jLnkgLSA1MClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9ubGluZU1vZGUpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChgJHtzb2NrZXQuaWR9YCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH1cblxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0ICdTY29yZWJvYXJkJ1wiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCR7bGVmdFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAvLyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgLy8gY3R4LnN0cm9rZVRleHQoYCR7bGVmdFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRDaGFyLFxuICAgICAgICAgICAgbG9jLnggLSB0aGlzLmxlZnRDaGFyLndpZHRoIC8gMixcbiAgICAgICAgICAgIGxvYy55KVxuXG4gICAgICAgIC8vIFJJR0hUIFNJREVcbiAgICAgICAgY29uc3QgcmlnaHRTaWRlQ2hhciA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdXG4gICAgICAgIGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoICogMyAvIDQsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyIH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCAnU2NvcmVib2FyZCdcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5cbiAgICAgICAgLy8gaWYgKHRoaXMub25saW5lTW9kZSkgY3R4LmZpbGxUZXh0KFwiT25saW5lIE1vZGVcIiwgbG9jLngsIGxvYy55IC0gMTAwKVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCAxMnB0ICdTY29yZWJvYXJkJ1wiO1xuICAgICAgICBpZiAodGhpcy5yaWdodFJlYWR5KSBjdHguZmlsbFRleHQoXCJSZWFkeVwiLCBsb2MueCwgbG9jLnkgLSA3MClcbiAgICAgICAgaWYgKHRoaXMubGVmdFBsYXllcklkICYmIHRoaXMucmlnaHRQbGF5ZXJJZCkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke3RoaXMucmlnaHRQbGF5ZXJJZH1gLCBsb2MueCwgbG9jLnkgLSA1MClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9ubGluZU1vZGUpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChgV2FpdGluZyBmb3IgUGxheWVyYCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCAnU2NvcmVib2FyZCdcIjtcblxuICAgICAgICBjdHguZmlsbFRleHQoYCR7cmlnaHRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgLy8gY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIC8vIGN0eC5zdHJva2VUZXh0KGAke3JpZ2h0U2lkZUNoYXIubmFtZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMucmlnaHRDaGFyLFxuICAgICAgICAgICAgbG9jLnggLSB0aGlzLnJpZ2h0Q2hhci53aWR0aCAvIDIsXG4gICAgICAgICAgICBsb2MueSlcbiBcbiAgICB9XG5cbiAgICBzZXR1cEtleUhhbmRsZXJzKCkge1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm9ubGluZU1vZGUpIHtcbiAgICAgICAgICAgICAgICBrZXkoJ2Rvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgndXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgLSAxKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yaWdodFNlbGVjdGVkID09PSAtMSkgdGhpcy5yaWdodFNlbGVjdGVkID0gdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgndycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgncycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgLSAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdFNlbGVjdGVkID09PSAtMSkgdGhpcy5sZWZ0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgndycpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3MnKVxuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzKHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjLCB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmMpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbmxpbmVNb2RlKSB7XG5cbiAgICAgICAgICAgICAgICBrZXkoJ3VwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmdhbWVJZCAmJiB0aGlzLm9ubGluZU1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUGxheWluZ0xlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9ICh0aGlzLmxlZnRTZWxlY3RlZCArIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1BsYXlpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0U2VsZWN0ZWQgPT09IC0xKSB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lSWQgJiYgdGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmdMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgLSAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZWZ0U2VsZWN0ZWQgPT09IC0xKSB0aGlzLmxlZnRTZWxlY3RlZCA9IHRoaXMuY2hhcmFjdGVycy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGxheWluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gKHRoaXMucmlnaHRTZWxlY3RlZCArIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZUlkICYmIHRoaXMub25saW5lTW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdsZWZ0UmVhZHknLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGxheWluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3JpZ2h0UmVhZHknLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG5cblxuXG59IiwiaW1wb3J0IGtleSBmcm9tICcuLi91dGlscy9rZXltYXN0ZXInO1xuaW1wb3J0IENoYXJhY3RlclNlbGVjdCBmcm9tICcuL2NoYXJhY3Rlcl9zZWxlY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSB7XG4gICAgY29uc3RydWN0b3IgKGRpbWVuc2lvbnMsIHN0YXJ0R2FtZSwgc3RhcnRPbmxpbmVHYW1lKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5zdGFydEdhbWUgPSBzdGFydEdhbWVcbiAgICAgICAgdGhpcy5zdGFydE9ubGluZUdhbWUgPSBzdGFydE9ubGluZUdhbWVcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IDBcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW1wiU3RhcnQgR2FtZVwiLCBcIk9ubGluZVwiXVxuICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdCA9IG5ldyBDaGFyYWN0ZXJTZWxlY3QodGhpcy5kaW1lbnNpb25zLCB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVycy5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgPSBmYWxzZVxuICAgICAgICB0aGlzLnNldHVwS2V5SGFuZGxlcnMoKVxuICAgIH1cblxuICAgIHNlbGVjdGVkQ2hhcmFjdGVycyAobGVmdFNyYywgcmlnaHRTcmMsIGdhbWVJZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJTZWxlY3Qub25saW5lTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Qub25saW5lTW9kZSA9IGZhbHNlXG4gICAgICAgICAgICBjb25zdCBteVNpZGUgPSB0aGlzLmNoYXJhY3RlclNlbGVjdC5pc1BsYXlpbmdMZWZ0ID8gXCJMRUZUXCIgOiBcIlJJR0hUXCJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRPbmxpbmVHYW1lKGxlZnRTcmMsIHJpZ2h0U3JjLCBteVNpZGUsIGdhbWVJZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKGxlZnRTcmMsIHJpZ2h0U3JjKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgcmVuZGVyIChjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzFjMmM1NVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgLy8gUkVOREVSIFRJVExFXG4gICAgICAgIGNvbnN0IHRpdGxlVGV4dCA9IHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA/IFwiQ2hhcmFjdGVyIFNlbGVjdFwiIDogXCJOQkEgSmFtIFNsYW1cIlxuICAgICAgICBjdHguZm9udCA9IHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA/IFwiYm9sZCA2NHB0ICdTY29yZWJvYXJkJ1wiIDogXCJib2xkIDgycHQgJ1Njb3JlYm9hcmQnXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjb25zdCB0aXRsZUxvY2F0aW9uID0gXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgP1xuICAgICAgICAgICAgICAgIHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogMCArICg4MCkgfVxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogKHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyKSAtICg4MCkgfVxuICAgICAgICBjdHguZmlsbFRleHQoYCR7dGl0bGVUZXh0fWAsIHRpdGxlTG9jYXRpb24ueCwgdGl0bGVMb2NhdGlvbi55KVxuXG4gICAgICAgIC8vIFJFTkRFUiBDT05URU5UXG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jID0geyB4OiAodGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiksIHk6ICh0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMikgKyAoNjAgKiBpKSArIDYwIH1cbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0ICdTY29yZWJvYXJkJ1wiO1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IGN0eC5tZWFzdXJlVGV4dChgJHtvcHRpb259YCkud2lkdGhcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uID09PSBpKSBjdHguZmlsbFJlY3QoKGxvYy54IC0gd2lkdGggLyAyKSAtIDUsIGxvYy55IC0gNTAsIHdpZHRoICsgMTAsIDYwKTtcblxuICAgICAgICAgICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke29wdGlvbn1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHtvcHRpb259YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5yZW5kZXIoY3R4KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0dXBLZXlIYW5kbGVycygpIHtcbiAgICAgICAga2V5KCdkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9ICh0aGlzLnNlbGVjdGVkT3B0aW9uICsgMSkgJSB0aGlzLm9wdGlvbnMubGVuZ3RoXG4gICAgICAgIH0pXG4gICAgICAgIGtleSgndXAnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gTWF0aC5hYnMoKHRoaXMuc2VsZWN0ZWRPcHRpb24gLSAxKSAlIHRoaXMub3B0aW9ucy5sZW5ndGgpXG4gICAgICAgIH0pXG4gICAgICAgIGtleSgnZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PT0gMCAmJiAhdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgndXAnKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2VudGVyJylcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Qub25saW5lTW9kZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Quc2V0dXBLZXlIYW5kbGVycygpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT09IDEgJiYgIXRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycykge1xuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2Rvd24nKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0Lm9ubGluZU1vZGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3BsYXllckFkZGVkVG9RdWV1ZScsIHNvY2tldC5pZClcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5zZXR1cEtleUhhbmRsZXJzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBcblxuXG5cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBHUkFWSVRZOiAwLjUsXG4gICAgUExBWUVSX1dJRFRIOiA0MCxcbiAgICBQTEFZRVJfSEVJR0hUOiA3MCxcbiAgICBNT1ZFU1BFRUQ6IDUsXG4gICAgLy8gV0lUSF9CQUxMX01PVkVTUEVFRDogMy41LFxuICAgIEpVTVBfSEVJR0hUOiAxNCxcbiAgICAvLyBPTl9GSVJFX0pVTVBfSEVJR0hUOiAxNlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25saW5lUGxheWVyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjLCBzdGFydFNpZGUsIGFjdGl2ZSkge1xuICAgICAgICBzdXBlcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHN0YXJ0U2lkZSA9PT0gXCJMRUZUXCIgPyAoe1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH0pIDogKHtcbiAgICAgICAgICAgIHg6IHRoaXMuY291cnQud2lkdGggLSB0aGlzLndpZHRoLFxuICAgICAgICAgICAgeTogdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKSB0aGlzLmNvbG9yID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlXG4gICAgfVxuXG5cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSA1LFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5zcHJpdGUuaGVpZ2h0IC8gMylcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgncmlnaHQnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdsZWZ0JykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBKVU1QSU5HXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCd1cCcpICYmICF0aGlzLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5KVU1QX0hFSUdIVDtcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdzcGFjZScpKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZvcm1BY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tCYWxsKClcblxuICAgICAgICB0aGlzLmhhbmRsZUdyYXZpdHkoKVxuXG4gICAgICAgIHRoaXMuY2hlY2tCb3VuZHMoKVxuICAgIH1cblxufVxuXG4iLCJpbXBvcnQgUmVjdCBmcm9tICcuL3V0aWxzL3JlY3QnO1xuaW1wb3J0IGtleSBmcm9tICcuL3V0aWxzL2tleW1hc3Rlcic7XG5cblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBQTEFZRVJfV0lEVEg6IDQwLFxuICAgIFBMQVlFUl9IRUlHSFQ6IDcwLFxuICAgIE1PVkVTUEVFRDogNSxcbiAgICAvLyBXSVRIX0JBTExfTU9WRVNQRUVEOiAzLjUsXG4gICAgSlVNUF9IRUlHSFQ6IDE0LFxuICAgIC8vIE9OX0ZJUkVfSlVNUF9IRUlHSFQ6IDE2XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5QTEFZRVJfV0lEVEgsIGhlaWdodDogQ09OU1RBTlRTLlBMQVlFUl9IRUlHSFQgfSlcbiAgICAgICAgdGhpcy5jb3VydCA9IGNvdXJ0XG4gICAgICAgIHRoaXMuYmFsbCA9IGJhbGxcblxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuZGVubmlzUm9kbWFuSGVhZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAvLyB0aGlzLmRlbm5pc1JvZG1hbkhlYWQuc3JjID0gJ3NyYy9hc3NldHMvZGVubmlzUm9kbWFuSGVhZC5wbmcnXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNyYyA9IHNwcml0ZVNyY1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZSh0aGlzLmRlbm5pc1JvZG1hbkhlYWQsIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIHRoaXMud2lkdGggKyAodGhpcy5kZW5uaXNSb2RtYW5IZWFkLndpZHRoIC8gMiksIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0ICsgKHRoaXMuZGVubmlzUm9kbWFuSGVhZC5oZWlnaHQgLyAzKSlcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSxcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSA1LFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5zcHJpdGUuaGVpZ2h0IC8gMylcbiAgICB9XG5cbiAgICBtb3ZlICgpIHtcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3JpZ2h0JykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnbGVmdCcpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSlVNUElOR1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgndXAnKSAmJiAhdGhpcy5qdW1waW5nKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSBDT05TVEFOVFMuSlVNUF9IRUlHSFQ7XG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnLycpKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZvcm1BY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tCYWxsKCkgXG5cbiAgICAgICAgdGhpcy5oYW5kbGVHcmF2aXR5KClcblxuICAgICAgICB0aGlzLmNoZWNrQm91bmRzKClcbiAgICB9XG5cbiAgICBwcmVmb3JtQWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5iYWxsLnBvc3Nlc3Npb24gPT09IHRoaXMpIHtcbiAgICAgICAgICAgIC8vIEhvbGQgdG8gc2hvb3QuIFxuICAgICAgICAgICAgdGhpcy5iYWxsLnNob290KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQmFsbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhbGwucG9zc2Vzc2lvbiAmJiB0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcykpIHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC5jbGFpbVBvc3Nlc3Npb24odGhpcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUdyYXZpdHkoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgICAgIC8vIEdSQVZJVFlcbiAgICAgICAgLy8gaWYgdGhlIHBvcyBpcyBncmVhdGVyIHRoYW4gdGhlIGZsb29yXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA8IHRoaXMuY291cnQucG9zaXRpb24ueSkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IENPTlNUQU5UUy5HUkFWSVRZO1xuICAgICAgICAgICAgLy8gZWxzZSBzZXQgdGhlIHBvcyB0byB0aGUgZmxvb3JcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDBcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGhcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBHUkFWSVRZOiAwLjUsXG4gICAgUExBWUVSX1dJRFRIOiA0MCxcbiAgICBQTEFZRVJfSEVJR0hUOiA3MCxcbiAgICBNT1ZFU1BFRUQ6IDUsXG4gICAgLy8gV0lUSF9CQUxMX01PVkVTUEVFRDogMy41LFxuICAgIEpVTVBfSEVJR0hUOiAxNCxcbiAgICAvLyBPTl9GSVJFX0pVTVBfSEVJR0hUOiAxNlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyMiBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY291cnQsIGJhbGwsIHNwcml0ZVNyYykge1xuICAgICAgICBzdXBlcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKVxuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdkJykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnYScpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSlVNUElOR1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgndycpICYmICF0aGlzLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5KVU1QX0hFSUdIVDtcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdxJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZm9ybUFjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JhbGwoKVxuXG4gICAgICAgIHRoaXMuaGFuZGxlR3Jhdml0eSgpXG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgbGVmdEhvb3AsIHJpZ2h0SG9vcCkge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBsZWZ0SG9vcFxuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IHJpZ2h0SG9vcFxuICAgICAgICB0aGlzLnRpbWVMZWZ0ID0gNjBcbiAgICAgICAgdGhpcy5jb3VudERvd24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7IFxuICAgICAgICAgICAgdGhpcy50aW1lTGVmdC0tXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lTGVmdCA9PT0gMCkgY2xlYXJJbnRlcnZhbCh0aGlzLmNvdW50RG93bilcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSAoY3R4KSB7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRCb3hMb2MgPSB7eDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gNCwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDMwfVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMxYzJjNTUnXG4gICAgICAgIGN0eC5maWxsUmVjdChiYWNrZ3JvdW5kQm94TG9jLnggLSAxMCwgYmFja2dyb3VuZEJveExvYy55LCB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyICsgMjAsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyA1IClcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoYmFja2dyb3VuZEJveExvYy54IC0gMTAsIGJhY2tncm91bmRCb3hMb2MueSwgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiArIDIwLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gNSApO1xuXG4gICAgICAgIGNvbnN0IGxlZnROYW1lTG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAzLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMTB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDIycHQgJ1Njb3JlYm9hcmQnXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiOyBcbiAgICAgICAgY3R4LmZpbGxUZXh0KGBQbGF5ZXIgMWAsIGxlZnROYW1lTG9jLngsIGxlZnROYW1lTG9jLnkpO1xuICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIC8vIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAvLyBjdHguc3Ryb2tlVGV4dChgUGxheWVyIDFgLCBsZWZ0TmFtZUxvYy54LCBsZWZ0TmFtZUxvYy55KTtcblxuICAgICAgICBjb25zdCBsZWZ0U2NvcmVMb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDMsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyA1IH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCAnU2NvcmVib2FyZCdcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiOyBcbiAgICAgICAgY3R4LmZpbGxUZXh0KGAke3RoaXMucmlnaHRIb29wLnNjb3JlfWAsIGxlZnRTY29yZUxvYy54LCBsZWZ0U2NvcmVMb2MueSk7XG4gICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIC8vIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAvLyBjdHguc3Ryb2tlVGV4dChgJHt0aGlzLnJpZ2h0SG9vcC5zY29yZX1gLCBsZWZ0U2NvcmVMb2MueCwgbGVmdFNjb3JlTG9jLnkpO1xuXG4gICAgICAgIGNvbnN0IHRpbWVMZWZ0TG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gNSB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDY0cHQgJ1Njb3JlYm9hcmQnXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy50aW1lTGVmdH1gLCB0aW1lTGVmdExvYy54LCB0aW1lTGVmdExvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMC4wMTtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYCR7dGhpcy50aW1lTGVmdH1gLCB0aW1lTGVmdExvYy54LCB0aW1lTGVmdExvYy55KTtcblxuICAgICAgICBjb25zdCByaWdodE5hbWVMb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAqIDIgLyAzLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMTAgfVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCAyMnB0ICdTY29yZWJvYXJkJ1wiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGBQbGF5ZXIgMmAsIHJpZ2h0TmFtZUxvYy54LCByaWdodE5hbWVMb2MueSk7XG4gICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgLy8gY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIC8vIGN0eC5zdHJva2VUZXh0KGBQbGF5ZXIgMmAsIHJpZ2h0TmFtZUxvYy54LCByaWdodE5hbWVMb2MueSk7XG5cbiAgICAgICAgY29uc3QgcmlnaHRTY29yZUxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoICogMiAvIDMsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyA1IH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCAnU2NvcmVib2FyZCdcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy5sZWZ0SG9vcC5zY29yZX1gLCByaWdodFNjb3JlTG9jLngsIHJpZ2h0U2NvcmVMb2MueSk7XG4gICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgLy8gY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIC8vIGN0eC5zdHJva2VUZXh0KGAke3RoaXMubGVmdEhvb3Auc2NvcmV9YCwgcmlnaHRTY29yZUxvYy54LCByaWdodFNjb3JlTG9jLnkpO1xuXG5cblxuICAgICAgICAvLyBsZXQgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMTAgfVxuICAgICAgICAvLyBjdHguZm9udCA9IFwiYm9sZCA0MHB0ICdTY29yZWJvYXJkJ1wiO1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAvLyBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG4gICAgICAgIC8vIGN0eC5maWxsVGV4dChgUGxheWVyIDE6ICR7dGhpcy5yaWdodEhvb3Auc2NvcmV9IFBsYXllciAyOiAke3RoaXMubGVmdEhvb3Auc2NvcmV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAvLyBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgLy8gY3R4LnN0cm9rZVRleHQoYFBsYXllciAxOiAke3RoaXMucmlnaHRIb29wLnNjb3JlfSBQbGF5ZXIgMjogJHt0aGlzLmxlZnRIb29wLnNjb3JlfWAsIGxvYy54LCBsb2MueSk7XG5cbiAgICAgICAgLy8gbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gNSB9XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIC8vIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAvLyBjdHguZmlsbFRleHQoYCR7dGhpcy50aW1lTGVmdH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIC8vIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICAvLyBjdHguc3Ryb2tlVGV4dChgJHt0aGlzLnRpbWVMZWZ0fWAsIGxvYy54LCBsb2MueSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IocmFkaXVzKSB7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cblxuICAgIGlzT3ZlcmxhcHBpbmdSZWN0KHJlY3QpIHtcbiAgICAgICAgY29uc3QgZGlzdFggPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSByZWN0LnBvc2l0aW9uLnggLSByZWN0LndpZHRoIC8gMik7XG4gICAgICAgIGNvbnN0IGRpc3RZID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gcmVjdC5wb3NpdGlvbi55IC0gcmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgaWYgKGRpc3RYID4gKHJlY3Qud2lkdGggLyAyICsgdGhpcy5yYWRpdXMpKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICBpZiAoZGlzdFkgPiAocmVjdC5oZWlnaHQgLyAyICsgdGhpcy5yYWRpdXMpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICAgIGlmIChkaXN0WCA8PSAocmVjdC53aWR0aCAvIDIpKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIGlmIChkaXN0WSA8PSAocmVjdC5oZWlnaHQgLyAyKSkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgICAgIGNvbnN0IGR4ID0gZGlzdFggLSByZWN0LndpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgZHkgPSBkaXN0WSAtIHJlY3QuaGVpZ2h0IC8gMjtcbiAgICAgICAgcmV0dXJuIChkeCAqIGR4ICsgZHkgKiBkeSA8PSAodGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cykpO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuXG59IiwiLy8gICAgIGtleW1hc3Rlci5qc1xuLy8gICAgIChjKSAyMDExLTIwMTMgVGhvbWFzIEZ1Y2hzXG4vLyAgICAga2V5bWFzdGVyLmpzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG47IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgdmFyIGssXG4gICAgICAgIF9oYW5kbGVycyA9IHt9LFxuICAgICAgICBfbW9kcyA9IHsgMTY6IGZhbHNlLCAxODogZmFsc2UsIDE3OiBmYWxzZSwgOTE6IGZhbHNlIH0sXG4gICAgICAgIF9zY29wZSA9ICdhbGwnLFxuICAgICAgICAvLyBtb2RpZmllciBrZXlzXG4gICAgICAgIF9NT0RJRklFUlMgPSB7XG4gICAgICAgICAgICAn4oenJzogMTYsIHNoaWZ0OiAxNixcbiAgICAgICAgICAgICfijKUnOiAxOCwgYWx0OiAxOCwgb3B0aW9uOiAxOCxcbiAgICAgICAgICAgICfijIMnOiAxNywgY3RybDogMTcsIGNvbnRyb2w6IDE3LFxuICAgICAgICAgICAgJ+KMmCc6IDkxLCBjb21tYW5kOiA5MVxuICAgICAgICB9LFxuICAgICAgICAvLyBzcGVjaWFsIGtleXNcbiAgICAgICAgX01BUCA9IHtcbiAgICAgICAgICAgIGJhY2tzcGFjZTogOCwgdGFiOiA5LCBjbGVhcjogMTIsXG4gICAgICAgICAgICBlbnRlcjogMTMsICdyZXR1cm4nOiAxMyxcbiAgICAgICAgICAgIGVzYzogMjcsIGVzY2FwZTogMjcsIHNwYWNlOiAzMixcbiAgICAgICAgICAgIGxlZnQ6IDM3LCB1cDogMzgsXG4gICAgICAgICAgICByaWdodDogMzksIGRvd246IDQwLFxuICAgICAgICAgICAgZGVsOiA0NiwgJ2RlbGV0ZSc6IDQ2LFxuICAgICAgICAgICAgaG9tZTogMzYsIGVuZDogMzUsXG4gICAgICAgICAgICBwYWdldXA6IDMzLCBwYWdlZG93bjogMzQsXG4gICAgICAgICAgICAnLCc6IDE4OCwgJy4nOiAxOTAsICcvJzogMTkxLFxuICAgICAgICAgICAgJ2AnOiAxOTIsICctJzogMTg5LCAnPSc6IDE4NyxcbiAgICAgICAgICAgICc7JzogMTg2LCAnXFwnJzogMjIyLFxuICAgICAgICAgICAgJ1snOiAyMTksICddJzogMjIxLCAnXFxcXCc6IDIyMFxuICAgICAgICB9LFxuICAgICAgICBjb2RlID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBfTUFQW3hdIHx8IHgudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApO1xuICAgICAgICB9LFxuICAgICAgICBfZG93bktleXMgPSBbXTtcblxuICAgIGZvciAoayA9IDE7IGsgPCAyMDsgaysrKSBfTUFQWydmJyArIGtdID0gMTExICsgaztcblxuICAgIC8vIElFIGRvZXNuJ3Qgc3VwcG9ydCBBcnJheSNpbmRleE9mLCBzbyBoYXZlIGEgc2ltcGxlIHJlcGxhY2VtZW50XG4gICAgZnVuY3Rpb24gaW5kZXgoYXJyYXksIGl0ZW0pIHtcbiAgICAgICAgdmFyIGkgPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpLS0pIGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvLyBmb3IgY29tcGFyaW5nIG1vZHMgYmVmb3JlIHVuYXNzaWdubWVudFxuICAgIGZ1bmN0aW9uIGNvbXBhcmVBcnJheShhMSwgYTIpIHtcbiAgICAgICAgaWYgKGExLmxlbmd0aCAhPSBhMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGExW2ldICE9PSBhMltpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBtb2RpZmllck1hcCA9IHtcbiAgICAgICAgMTY6ICdzaGlmdEtleScsXG4gICAgICAgIDE4OiAnYWx0S2V5JyxcbiAgICAgICAgMTc6ICdjdHJsS2V5JyxcbiAgICAgICAgOTE6ICdtZXRhS2V5J1xuICAgIH07XG4gICAgZnVuY3Rpb24gdXBkYXRlTW9kaWZpZXJLZXkoZXZlbnQpIHtcbiAgICAgICAgZm9yIChrIGluIF9tb2RzKSBfbW9kc1trXSA9IGV2ZW50W21vZGlmaWVyTWFwW2tdXTtcbiAgICB9O1xuXG4gICAgLy8gaGFuZGxlIGtleWRvd24gZXZlbnRcbiAgICBmdW5jdGlvbiBkaXNwYXRjaChldmVudCkge1xuICAgICAgICB2YXIga2V5LCBoYW5kbGVyLCBrLCBpLCBtb2RpZmllcnNNYXRjaCwgc2NvcGU7XG4gICAgICAgIGtleSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgICAgaWYgKGluZGV4KF9kb3duS2V5cywga2V5KSA9PSAtMSkge1xuICAgICAgICAgICAgX2Rvd25LZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGEgbW9kaWZpZXIga2V5LCBzZXQgdGhlIGtleS48bW9kaWZpZXJrZXluYW1lPiBwcm9wZXJ0eSB0byB0cnVlIGFuZCByZXR1cm5cbiAgICAgICAgaWYgKGtleSA9PSA5MyB8fCBrZXkgPT0gMjI0KSBrZXkgPSA5MTsgLy8gcmlnaHQgY29tbWFuZCBvbiB3ZWJraXQsIGNvbW1hbmQgb24gR2Vja29cbiAgICAgICAgaWYgKGtleSBpbiBfbW9kcykge1xuICAgICAgICAgICAgX21vZHNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAvLyAnYXNzaWduS2V5JyBmcm9tIGluc2lkZSB0aGlzIGNsb3N1cmUgaXMgZXhwb3J0ZWQgdG8gd2luZG93LmtleVxuICAgICAgICAgICAgZm9yIChrIGluIF9NT0RJRklFUlMpIGlmIChfTU9ESUZJRVJTW2tdID09IGtleSkgYXNzaWduS2V5W2tdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVNb2RpZmllcktleShldmVudCk7XG5cbiAgICAgICAgLy8gc2VlIGlmIHdlIG5lZWQgdG8gaWdub3JlIHRoZSBrZXlwcmVzcyAoZmlsdGVyKCkgY2FuIGNhbiBiZSBvdmVycmlkZGVuKVxuICAgICAgICAvLyBieSBkZWZhdWx0IGlnbm9yZSBrZXkgcHJlc3NlcyBpZiBhIHNlbGVjdCwgdGV4dGFyZWEsIG9yIGlucHV0IGlzIGZvY3VzZWRcbiAgICAgICAgaWYgKCFhc3NpZ25LZXkuZmlsdGVyLmNhbGwodGhpcywgZXZlbnQpKSByZXR1cm47XG5cbiAgICAgICAgLy8gYWJvcnQgaWYgbm8gcG90ZW50aWFsbHkgbWF0Y2hpbmcgc2hvcnRjdXRzIGZvdW5kXG4gICAgICAgIGlmICghKGtleSBpbiBfaGFuZGxlcnMpKSByZXR1cm47XG5cbiAgICAgICAgc2NvcGUgPSBnZXRTY29wZSgpO1xuXG4gICAgICAgIC8vIGZvciBlYWNoIHBvdGVudGlhbCBzaG9ydGN1dFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX2hhbmRsZXJzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBfaGFuZGxlcnNba2V5XVtpXTtcblxuICAgICAgICAgICAgLy8gc2VlIGlmIGl0J3MgaW4gdGhlIGN1cnJlbnQgc2NvcGVcbiAgICAgICAgICAgIGlmIChoYW5kbGVyLnNjb3BlID09IHNjb3BlIHx8IGhhbmRsZXIuc2NvcGUgPT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBtb2RpZmllcnMgbWF0Y2ggaWYgYW55XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzTWF0Y2ggPSBoYW5kbGVyLm1vZHMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgaW4gX21vZHMpXG4gICAgICAgICAgICAgICAgICAgIGlmICgoIV9tb2RzW2tdICYmIGluZGV4KGhhbmRsZXIubW9kcywgK2spID4gLTEpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoX21vZHNba10gJiYgaW5kZXgoaGFuZGxlci5tb2RzLCAraykgPT0gLTEpKSBtb2RpZmllcnNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIGNhbGwgdGhlIGhhbmRsZXIgYW5kIHN0b3AgdGhlIGV2ZW50IGlmIG5lY2Nlc3NhcnlcbiAgICAgICAgICAgICAgICBpZiAoKGhhbmRsZXIubW9kcy5sZW5ndGggPT0gMCAmJiAhX21vZHNbMTZdICYmICFfbW9kc1sxOF0gJiYgIV9tb2RzWzE3XSAmJiAhX21vZHNbOTFdKSB8fCBtb2RpZmllcnNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlci5tZXRob2QoZXZlbnQsIGhhbmRsZXIpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY2FuY2VsQnViYmxlKSBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHVuc2V0IG1vZGlmaWVyIGtleXMgb24ga2V5dXBcbiAgICBmdW5jdGlvbiBjbGVhck1vZGlmaWVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXkgPSBldmVudC5rZXlDb2RlLCBrLFxuICAgICAgICAgICAgaSA9IGluZGV4KF9kb3duS2V5cywga2V5KTtcblxuICAgICAgICAvLyByZW1vdmUga2V5IGZyb20gX2Rvd25LZXlzXG4gICAgICAgIGlmIChpID49IDApIHtcbiAgICAgICAgICAgIF9kb3duS2V5cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IDkzIHx8IGtleSA9PSAyMjQpIGtleSA9IDkxO1xuICAgICAgICBpZiAoa2V5IGluIF9tb2RzKSB7XG4gICAgICAgICAgICBfbW9kc1trZXldID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgaWYgKF9NT0RJRklFUlNba10gPT0ga2V5KSBhc3NpZ25LZXlba10gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNldE1vZGlmaWVycygpIHtcbiAgICAgICAgZm9yIChrIGluIF9tb2RzKSBfbW9kc1trXSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgYXNzaWduS2V5W2tdID0gZmFsc2U7XG4gICAgfTtcblxuICAgIC8vIHBhcnNlIGFuZCBhc3NpZ24gc2hvcnRjdXRcbiAgICBmdW5jdGlvbiBhc3NpZ25LZXkoa2V5LCBzY29wZSwgbWV0aG9kKSB7XG4gICAgICAgIHZhciBrZXlzLCBtb2RzO1xuICAgICAgICBrZXlzID0gZ2V0S2V5cyhrZXkpO1xuICAgICAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9IHNjb3BlO1xuICAgICAgICAgICAgc2NvcGUgPSAnYWxsJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBlYWNoIHNob3J0Y3V0XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gc2V0IG1vZGlmaWVyIGtleXMgaWYgYW55XG4gICAgICAgICAgICBtb2RzID0gW107XG4gICAgICAgICAgICBrZXkgPSBrZXlzW2ldLnNwbGl0KCcrJyk7XG4gICAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBtb2RzID0gZ2V0TW9kcyhrZXkpO1xuICAgICAgICAgICAgICAgIGtleSA9IFtrZXlba2V5Lmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnZlcnQgdG8ga2V5Y29kZSBhbmQuLi5cbiAgICAgICAgICAgIGtleSA9IGtleVswXVxuICAgICAgICAgICAga2V5ID0gY29kZShrZXkpO1xuICAgICAgICAgICAgLy8gLi4uc3RvcmUgaGFuZGxlclxuICAgICAgICAgICAgaWYgKCEoa2V5IGluIF9oYW5kbGVycykpIF9oYW5kbGVyc1trZXldID0gW107XG4gICAgICAgICAgICBfaGFuZGxlcnNba2V5XS5wdXNoKHsgc2hvcnRjdXQ6IGtleXNbaV0sIHNjb3BlOiBzY29wZSwgbWV0aG9kOiBtZXRob2QsIGtleToga2V5c1tpXSwgbW9kczogbW9kcyB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB1bmJpbmQgYWxsIGhhbmRsZXJzIGZvciBnaXZlbiBrZXkgaW4gY3VycmVudCBzY29wZVxuICAgIGZ1bmN0aW9uIHVuYmluZEtleShrZXksIHNjb3BlKSB7XG4gICAgICAgIHZhciBtdWx0aXBsZUtleXMsIGtleXMsXG4gICAgICAgICAgICBtb2RzID0gW10sXG4gICAgICAgICAgICBpLCBqLCBvYmo7XG5cbiAgICAgICAgbXVsdGlwbGVLZXlzID0gZ2V0S2V5cyhrZXkpO1xuXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBtdWx0aXBsZUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGtleXMgPSBtdWx0aXBsZUtleXNbal0uc3BsaXQoJysnKTtcblxuICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIG1vZHMgPSBnZXRNb2RzKGtleXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXkgPSBrZXlzW2tleXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBrZXkgPSBjb2RlKGtleSk7XG5cbiAgICAgICAgICAgIGlmIChzY29wZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBnZXRTY29wZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFfaGFuZGxlcnNba2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBfaGFuZGxlcnNba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG9iaiA9IF9oYW5kbGVyc1trZXldW2ldO1xuICAgICAgICAgICAgICAgIC8vIG9ubHkgY2xlYXIgaGFuZGxlcnMgaWYgY29ycmVjdCBzY29wZSBhbmQgbW9kcyBtYXRjaFxuICAgICAgICAgICAgICAgIGlmIChvYmouc2NvcGUgPT09IHNjb3BlICYmIGNvbXBhcmVBcnJheShvYmoubW9kcywgbW9kcykpIHtcbiAgICAgICAgICAgICAgICAgICAgX2hhbmRsZXJzW2tleV1baV0gPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBrZXkgd2l0aCBjb2RlICdrZXlDb2RlJyBpcyBjdXJyZW50bHkgZG93blxuICAgIC8vIENvbnZlcnRzIHN0cmluZ3MgaW50byBrZXkgY29kZXMuXG4gICAgZnVuY3Rpb24gaXNQcmVzc2VkKGtleUNvZGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoa2V5Q29kZSkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGtleUNvZGUgPSBjb2RlKGtleUNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleChfZG93bktleXMsIGtleUNvZGUpICE9IC0xO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByZXNzZWRLZXlDb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIF9kb3duS2V5cy5zbGljZSgwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSAoZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQpLnRhZ05hbWU7XG4gICAgICAgIC8vIGlnbm9yZSBrZXlwcmVzc2VkIGluIGFueSBlbGVtZW50cyB0aGF0IHN1cHBvcnQga2V5Ym9hcmQgZGF0YSBpbnB1dFxuICAgICAgICByZXR1cm4gISh0YWdOYW1lID09ICdJTlBVVCcgfHwgdGFnTmFtZSA9PSAnU0VMRUNUJyB8fCB0YWdOYW1lID09ICdURVhUQVJFQScpO1xuICAgIH1cblxuICAgIC8vIGluaXRpYWxpemUga2V5Ljxtb2RpZmllcj4gdG8gZmFsc2VcbiAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgYXNzaWduS2V5W2tdID0gZmFsc2U7XG5cbiAgICAvLyBzZXQgY3VycmVudCBzY29wZSAoZGVmYXVsdCAnYWxsJylcbiAgICBmdW5jdGlvbiBzZXRTY29wZShzY29wZSkgeyBfc2NvcGUgPSBzY29wZSB8fCAnYWxsJyB9O1xuICAgIGZ1bmN0aW9uIGdldFNjb3BlKCkgeyByZXR1cm4gX3Njb3BlIHx8ICdhbGwnIH07XG5cbiAgICAvLyBkZWxldGUgYWxsIGhhbmRsZXJzIGZvciBhIGdpdmVuIHNjb3BlXG4gICAgZnVuY3Rpb24gZGVsZXRlU2NvcGUoc2NvcGUpIHtcbiAgICAgICAgdmFyIGtleSwgaGFuZGxlcnMsIGk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gX2hhbmRsZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGVycyA9IF9oYW5kbGVyc1trZXldO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0uc2NvcGUgPT09IHNjb3BlKSBoYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYWJzdHJhY3Qga2V5IGxvZ2ljIGZvciBhc3NpZ24gYW5kIHVuYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0S2V5cyhrZXkpIHtcbiAgICAgICAgdmFyIGtleXM7XG4gICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICBrZXlzID0ga2V5LnNwbGl0KCcsJyk7XG4gICAgICAgIGlmICgoa2V5c1trZXlzLmxlbmd0aCAtIDFdKSA9PSAnJykge1xuICAgICAgICAgICAga2V5c1trZXlzLmxlbmd0aCAtIDJdICs9ICcsJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG5cbiAgICAvLyBhYnN0cmFjdCBtb2RzIGxvZ2ljIGZvciBhc3NpZ24gYW5kIHVuYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0TW9kcyhrZXkpIHtcbiAgICAgICAgdmFyIG1vZHMgPSBrZXkuc2xpY2UoMCwga2V5Lmxlbmd0aCAtIDEpO1xuICAgICAgICBmb3IgKHZhciBtaSA9IDA7IG1pIDwgbW9kcy5sZW5ndGg7IG1pKyspXG4gICAgICAgICAgICBtb2RzW21pXSA9IF9NT0RJRklFUlNbbW9kc1ttaV1dO1xuICAgICAgICByZXR1cm4gbW9kcztcbiAgICB9XG5cbiAgICAvLyBjcm9zcy1icm93c2VyIGV2ZW50c1xuICAgIGZ1bmN0aW9uIGFkZEV2ZW50KG9iamVjdCwgZXZlbnQsIG1ldGhvZCkge1xuICAgICAgICBpZiAob2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbWV0aG9kLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgaWYgKG9iamVjdC5hdHRhY2hFdmVudClcbiAgICAgICAgICAgIG9iamVjdC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZ1bmN0aW9uICgpIHsgbWV0aG9kKHdpbmRvdy5ldmVudCkgfSk7XG4gICAgfTtcblxuICAgIC8vIHNldCB0aGUgaGFuZGxlcnMgZ2xvYmFsbHkgb24gZG9jdW1lbnRcbiAgICBhZGRFdmVudChkb2N1bWVudCwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHsgZGlzcGF0Y2goZXZlbnQpIH0pOyAvLyBQYXNzaW5nIF9zY29wZSB0byBhIGNhbGxiYWNrIHRvIGVuc3VyZSBpdCByZW1haW5zIHRoZSBzYW1lIGJ5IGV4ZWN1dGlvbi4gRml4ZXMgIzQ4XG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsICdrZXl1cCcsIGNsZWFyTW9kaWZpZXIpO1xuXG4gICAgLy8gcmVzZXQgbW9kaWZpZXJzIHRvIGZhbHNlIHdoZW5ldmVyIHRoZSB3aW5kb3cgaXMgKHJlKWZvY3VzZWQuXG4gICAgYWRkRXZlbnQod2luZG93LCAnZm9jdXMnLCByZXNldE1vZGlmaWVycyk7XG5cbiAgICAvLyBzdG9yZSBwcmV2aW91c2x5IGRlZmluZWQga2V5XG4gICAgdmFyIHByZXZpb3VzS2V5ID0gd2luZG93LmtleTtcblxuICAgIC8vIHJlc3RvcmUgcHJldmlvdXNseSBkZWZpbmVkIGtleSBhbmQgcmV0dXJuIHJlZmVyZW5jZSB0byBvdXIga2V5IG9iamVjdFxuICAgIGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgICAgIHZhciBrID0gd2luZG93LmtleTtcbiAgICAgICAgd2luZG93LmtleSA9IHByZXZpb3VzS2V5O1xuICAgICAgICByZXR1cm4gaztcbiAgICB9XG5cbiAgICAvLyBzZXQgd2luZG93LmtleSBhbmQgd2luZG93LmtleS5zZXQvZ2V0L2RlbGV0ZVNjb3BlLCBhbmQgdGhlIGRlZmF1bHQgZmlsdGVyXG4gICAgd2luZG93LmtleSA9IGFzc2lnbktleTtcbiAgICB3aW5kb3cua2V5LnNldFNjb3BlID0gc2V0U2NvcGU7XG4gICAgd2luZG93LmtleS5nZXRTY29wZSA9IGdldFNjb3BlO1xuICAgIHdpbmRvdy5rZXkuZGVsZXRlU2NvcGUgPSBkZWxldGVTY29wZTtcbiAgICB3aW5kb3cua2V5LmZpbHRlciA9IGZpbHRlcjtcbiAgICB3aW5kb3cua2V5LmlzUHJlc3NlZCA9IGlzUHJlc3NlZDtcbiAgICB3aW5kb3cua2V5LmdldFByZXNzZWRLZXlDb2RlcyA9IGdldFByZXNzZWRLZXlDb2RlcztcbiAgICB3aW5kb3cua2V5Lm5vQ29uZmxpY3QgPSBub0NvbmZsaWN0O1xuICAgIHdpbmRvdy5rZXkudW5iaW5kID0gdW5iaW5kS2V5O1xuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSBtb2R1bGUuZXhwb3J0cyA9IGFzc2lnbktleTtcblxufSkodGhpcyk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICB0aGlzLndpZHRoID0gc2l6ZS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcbiAgICB9XG5cbiAgICBpc092ZXJsYXBwaW5nT3RoZXJSZWN0KHJlY3RDbGFzcykge1xuICAgICAgICBjb25zdCBteUJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKClcbiAgICAgICAgY29uc3QgcmVjdCA9IHJlY3RDbGFzcy5nZXRCb3VuZHMoKVxuICAgICAgICBpZiAobXlCb3VuZHMubGVmdCA+IHJlY3QucmlnaHQgfHwgbXlCb3VuZHMucmlnaHQgPCByZWN0LmxlZnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXlCb3VuZHMudG9wID4gcmVjdC5ib3R0b20gfHwgbXlCb3VuZHMuYm90dG9tIDwgcmVjdC50b3ApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICByaWdodDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=