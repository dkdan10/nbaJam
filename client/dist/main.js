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
            // ANIMATE OBJECTS
            this.player.animate(this.ctx);
            this.player2.animate(this.ctx);
            this.ball.animate(this.ctx);
            this.leftHoop.animate(this.ctx);
            this.rightHoop.animate(this.ctx);

            this.scoreboard.animate(this.ctx);

            if (this.gameOver()) {
                this.displayWinner();
            }
            // REQUEST NEXT FRAME
            // if (this.playingGame) {
            //     setTimeout( () => {
            requestAnimationFrame(this.animate.bind(this));
            // }, 1000 / 60)
            // }
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
            // if (this.playingGame) {
            //     setTimeout(() => {
            requestAnimationFrame(this.runOnline.bind(this));
            // }, 1000 / 60)
            // }
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
            // this.backboard.animate(ctx)
            // ctx.fillStyle = this.color;
            // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
            // this.scoreHitbox.animate(ctx)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9jb3VydC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9ob29wLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvbWVudV9zY3JlZW5zL2NoYXJhY3Rlcl9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9tZW51X3NjcmVlbnMvbWFpbl9tZW51LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvb25saW5lX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllcjIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMva2V5bWFzdGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvcmVjdC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhc0JhY2tncm91bmQiLCJ3aW5kb3ciLCJlIiwiaW5kZXhPZiIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsIk5CQUphbUdhbWUiLCJDT05TVEFOVFMiLCJSQURJVVMiLCJHUkFWSVRZIiwiQk9VTkNFX1JFVEVOVElPTiIsIkRSSUJCTEVfU1BFRUQiLCJCYWxsIiwiZGltZW5zaW9ucyIsImNvdXJ0IiwibGVmdEhvb3AiLCJyaWdodEhvb3AiLCJnYW1lSWQiLCJiYWxsIiwicG9zaXRpb24iLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwidmVsb2NpdHkiLCJjb2xvciIsInBvc3Nlc3Npb24iLCJub1RvdWNoIiwicG93ZXIiLCJjdHgiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwicmFkaXVzIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsInBsYXllciIsInNvY2tldCIsImVtaXQiLCJmcm9tU29ja2V0IiwiaWQiLCJzaG9vdGluZ1BsYXllciIsImZhY2luZ1JpZ2h0Iiwic2hvb3RpbmdUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbGVhc2VCYWxsIiwic2NvcmVQb3NpdGlvbiIsInNjb3JlSGl0Ym94IiwiaHlwb3QiLCJudW1iZXJPZkZyYW1lcyIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsImRpZmYiLCJhZGp1c3RlZFgiLCJyZW1vdmVQb3NzZXNzaW9uIiwiZmFsbCIsIm1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbiIsImNoZWNrQm91bmRzIiwianVtcGluZyIsIkNpcmNsZSIsIkNPVVJUX0ZMT09SIiwiQ09VUlRfV0lEVEgiLCJIT09QX1lfTVVMVElQTElFUiIsIkhPT1BfSEVJR0hUIiwiSE9PUF9XSURUSCIsIkhPT1BfWF9ESVNUQU5DRSIsIkJBQ0tCT0FSRF9XSURUSCIsIkJBQ0tCT0FSRF9IRUlHSFQiLCJDb3VydCIsImJhY2tncm91bmRDYXZhcyIsImhvb3BMZWZ0UG9zaXRpb24iLCJob29wUmlnaHRQb3NpdGlvbiIsImxlZnRIb29wSW1hZ2UiLCJJbWFnZSIsInJpZ2h0SG9vcEltYWdlIiwic3JjIiwiY291cnRJbWFnZSIsInNldHVwQmFja2dyb3VuZENvdXJ0IiwiZ2V0Q29udGV4dCIsImZpbGxSZWN0Iiwib25sb2FkIiwiZHJhd0ltYWdlIiwiUmVjdCIsImJhY2tncm91bmRDYW52YXMiLCJtYWluTWVudSIsIk1haW5NZW51Iiwic3RhcnRHYW1lIiwiYmluZCIsInN0YXJ0T25saW5lR2FtZSIsInBsYXlpbmdHYW1lIiwicmVuZGVyTWVudSIsInNldHVwS2V5SGFuZGxlcnMiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsZWZ0U3ByaXRlIiwicmlnaHRTcHJpdGUiLCJyZXN0YXJ0IiwibXlTaWRlIiwib25saW5lR2FtZUlkIiwicnVuT25saW5lR2FtZSIsIkhvb3AiLCJzY29yZWJvYXJkIiwiU2NvcmVib2FyZCIsIlBsYXllciIsInBsYXllcjIiLCJQbGF5ZXIyIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImdhbWVPdmVyIiwiZGlzcGxheVdpbm5lciIsIm15UGxheWVyIiwiT25saW5lUGxheWVyIiwib3RoZXJQbGF5ZXIiLCJvbiIsImRhdGEiLCJzaG93TWVudSIsInJ1bk9ubGluZSIsIm90aGVyUGxheWVyRmFjaW5nIiwib3RoZXJQbGF5ZXJKdW1waW5nIiwidGltZUxlZnQiLCJ0ZXh0Iiwic2NvcmUiLCJsb2MiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZVRleHQiLCJob29wU2lkZSIsImJhY2tib2FyZCIsIkJhY2tib2FyZCIsIlNjb3JlSGl0Ym94IiwianVzdFNjb3JlZCIsImNoZWNrQmFsbENvbGxpc2lvbiIsImlzT3ZlcmxhcHBpbmdSZWN0IiwiaG9vcCIsIkNoYXJhY3RlclNlbGVjdCIsInNlbGVjdGVkQ2hhcmFjdGVycyIsImxlZnRTZWxlY3RlZCIsInJpZ2h0U2VsZWN0ZWQiLCJjaGFyYWN0ZXJzIiwibmFtZSIsImxlZnRDaGFyIiwicmlnaHRDaGFyIiwibGVmdFJlYWR5IiwicmlnaHRSZWFkeSIsImxlZnRQbGF5ZXJJZCIsInJpZ2h0UGxheWVySWQiLCJpc1BsYXlpbmdMZWZ0IiwiaXNQbGF5aW5nUmlnaHQiLCJrZXkiLCJ1bmJpbmQiLCJsZWZ0U2lkZUNoYXIiLCJvbmxpbmVNb2RlIiwicmlnaHRTaWRlQ2hhciIsImxlbmd0aCIsInNlbGVjdGVkT3B0aW9uIiwib3B0aW9ucyIsImNoYXJhY3RlclNlbGVjdCIsInNlbGVjdGluZ0NoYXJhY3RlcnMiLCJsZWZ0U3JjIiwicmlnaHRTcmMiLCJmb3JFYWNoIiwib3B0aW9uIiwiaSIsIm1lYXN1cmVUZXh0IiwiYWJzIiwiUExBWUVSX1dJRFRIIiwiUExBWUVSX0hFSUdIVCIsIk1PVkVTUEVFRCIsIkpVTVBfSEVJR0hUIiwic3ByaXRlU3JjIiwic3RhcnRTaWRlIiwiYWN0aXZlIiwic3ByaXRlIiwiaXNQcmVzc2VkIiwicHJlZm9ybUFjdGlvbiIsImNoZWNrQmFsbCIsImhhbmRsZUdyYXZpdHkiLCJzaG9vdCIsImNsYWltUG9zc2Vzc2lvbiIsImNvdW50RG93biIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJlY3QiLCJkaXN0WCIsImRpc3RZIiwiZHgiLCJkeSIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImdsb2JhbCIsImsiLCJfaGFuZGxlcnMiLCJfbW9kcyIsIl9zY29wZSIsIl9NT0RJRklFUlMiLCJzaGlmdCIsImFsdCIsImN0cmwiLCJjb250cm9sIiwiY29tbWFuZCIsIl9NQVAiLCJiYWNrc3BhY2UiLCJ0YWIiLCJjbGVhciIsImVudGVyIiwiZXNjIiwiZXNjYXBlIiwic3BhY2UiLCJ1cCIsImRvd24iLCJkZWwiLCJob21lIiwiZW5kIiwicGFnZXVwIiwicGFnZWRvd24iLCJjb2RlIiwidG9VcHBlckNhc2UiLCJjaGFyQ29kZUF0IiwiX2Rvd25LZXlzIiwiaW5kZXgiLCJhcnJheSIsIml0ZW0iLCJjb21wYXJlQXJyYXkiLCJhMSIsImEyIiwibW9kaWZpZXJNYXAiLCJ1cGRhdGVNb2RpZmllcktleSIsImV2ZW50IiwiZGlzcGF0Y2giLCJoYW5kbGVyIiwibW9kaWZpZXJzTWF0Y2giLCJzY29wZSIsInB1c2giLCJhc3NpZ25LZXkiLCJmaWx0ZXIiLCJjYWxsIiwiZ2V0U2NvcGUiLCJtb2RzIiwibWV0aG9kIiwicmV0dXJuVmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJjYW5jZWxCdWJibGUiLCJjbGVhck1vZGlmaWVyIiwic3BsaWNlIiwicmVzZXRNb2RpZmllcnMiLCJrZXlzIiwiZ2V0S2V5cyIsInVuZGVmaW5lZCIsInNwbGl0IiwiZ2V0TW9kcyIsInNob3J0Y3V0IiwidW5iaW5kS2V5IiwibXVsdGlwbGVLZXlzIiwiaiIsIm9iaiIsImdldFByZXNzZWRLZXlDb2RlcyIsInNsaWNlIiwidGFnTmFtZSIsInRhcmdldCIsInNyY0VsZW1lbnQiLCJzZXRTY29wZSIsImRlbGV0ZVNjb3BlIiwiaGFuZGxlcnMiLCJyZXBsYWNlIiwibWkiLCJhZGRFdmVudCIsIm9iamVjdCIsImF0dGFjaEV2ZW50IiwicHJldmlvdXNLZXkiLCJub0NvbmZsaWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsInNpemUiLCJyZWN0Q2xhc3MiLCJteUJvdW5kcyIsImdldEJvdW5kcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZB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MkgsVUFBWCxHQUF3QkEsVUFBeEI7QUFDQXJSLFdBQU8wSixHQUFQLENBQVdDLE1BQVgsR0FBb0J3RyxTQUFwQjs7QUFFQSxRQUFJLElBQUosRUFBbUNtQixPQUFPQyxPQUFQLEdBQWlCdEMsU0FBakI7QUFFdEMsQ0FuU0MsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0ptQjVKLEk7QUFDakIsa0JBQVltTSxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsYUFBS3BRLEtBQUwsR0FBYW9RLEtBQUtwUSxLQUFsQjtBQUNBLGFBQUtFLE1BQUwsR0FBY2tRLEtBQUtsUSxNQUFuQjtBQUNIOzs7OytDQUVzQm1RLFMsRUFBVztBQUM5QixnQkFBTUMsV0FBVyxLQUFLQyxTQUFMLEVBQWpCO0FBQ0EsZ0JBQU0vRixPQUFPNkYsVUFBVUUsU0FBVixFQUFiO0FBQ0EsZ0JBQUlELFNBQVN6RixJQUFULEdBQWdCTCxLQUFLTSxLQUFyQixJQUE4QndGLFNBQVN4RixLQUFULEdBQWlCTixLQUFLSyxJQUF4RCxFQUE4RDtBQUMxRCx1QkFBTyxLQUFQO0FBQ0g7QUFDRCxnQkFBSXlGLFNBQVN2RixHQUFULEdBQWVQLEtBQUtRLE1BQXBCLElBQThCc0YsU0FBU3RGLE1BQVQsR0FBa0JSLEtBQUtPLEdBQXpELEVBQThEO0FBQzFELHVCQUFPLEtBQVA7QUFDSDtBQUNELG1CQUFPLElBQVA7QUFDSDs7O29DQUVXO0FBQ1IsbUJBQU87QUFDSEYsc0JBQU0sS0FBSy9LLFFBQUwsQ0FBY0MsQ0FEakI7QUFFSCtLLHVCQUFPLEtBQUtoTCxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS0MsS0FGM0I7QUFHSCtLLHFCQUFLLEtBQUtqTCxRQUFMLENBQWNHLENBSGhCO0FBSUgrSyx3QkFBUSxLQUFLbEwsUUFBTCxDQUFjRyxDQUFkLEdBQWtCLEtBQUtDO0FBSjVCLGFBQVA7QUFNSDs7Ozs7O2tCQXpCZ0IrRCxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NsaWVudC9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgTkJBSmFtR2FtZSBmcm9tICcuL2pzL2dhbWUuanMnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25iYS1qYW0tZ2FtZScpO1xuICAgIGNvbnN0IGNhbnZhc0JhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmJhLWphbS1iYWNrZ3JvdW5kJyk7XG5cbiAgICAvLyBQcmV2ZW50IHNjcm9sbGluZyB3aXRoIGFycm93IGtleXNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gc3BhY2UgYW5kIGFycm93IGtleXNcbiAgICAgICAgaWYgKFszMiwgMzcsIDM4LCAzOSwgNDBdLmluZGV4T2YoZS5rZXlDb2RlKSA+IC0xKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG4gICAgbmV3IE5CQUphbUdhbWUoY2FudmFzLCBjYW52YXNCYWNrZ3JvdW5kKTtcbn0pOyIsImltcG9ydCBDaXJjbGUgZnJvbSBcIi4vdXRpbHMvY2lyY2xlXCI7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBSQURJVVM6IDE1LFxuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBCT1VOQ0VfUkVURU5USU9OOiAwLjYsXG4gICAgRFJJQkJMRV9TUEVFRDogMyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCBleHRlbmRzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgY291cnQsIGxlZnRIb29wLCByaWdodEhvb3AsIGdhbWVJZCkge1xuICAgICAgICBzdXBlcihDT05TVEFOVFMuUkFESVVTKVxuICAgICAgICB0aGlzLmNvdXJ0ID0gY291cnRcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLmxlZnRIb29wID0gbGVmdEhvb3BcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSByaWdodEhvb3BcbiAgICAgICAgdGhpcy5sZWZ0SG9vcC5iYWxsID0gdGhpc1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcC5iYWxsID0gdGhpc1xuXG4gICAgICAgIHRoaXMuZ2FtZUlkID0gZ2FtZUlkXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY291cnQud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJob3RwaW5rXCJcbiAgICAgICAgdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuICAgICAgICB0aGlzLm5vVG91Y2ggPSB7fVxuICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLngsIFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55LCBcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLCBcbiAgICAgICAgICAgIDAsIFxuICAgICAgICAgICAgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICBcbiAgICBjbGFpbVBvc3Nlc3Npb24ocGxheWVyKSB7XG4gICAgICAgIGlmICghdGhpcy5ub1RvdWNoW3BsYXllci5jb2xvcl0pIHtcbiAgICAgICAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IHBsYXllclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJjaGFuZ2VPZlBvc3Nlc2lvblwiLCB7XG4gICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZCxcbiAgICAgICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNob290ICgpIHtcbiAgICAgICAgLy8gQkVUQSBTSE9PVElOR1xuXG4gICAgICAgIC8vIHRoaXMucG93ZXIgKz0gMVxuICAgICAgICAvLyBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICAvLyBpZiAodGhpcy5zaG9vdGluZ0ludGVydmFsICYmIHRoaXMucG93ZXIgPCA2MCkge1xuICAgICAgICAvLyAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2hvb3RpbmdJbnRlcnZhbClcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNob290aW5nSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IDYgOiAtNlxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IHRoaXMucG93ZXJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSB0cnVlICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IGZhbHNlXG4gICAgICAgIC8vICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgICAgICAvLyAgICAgfSwgMjApO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gQUlNQk9UIFNIT09USU5HXG5cbiAgICAgICAgLy8gY29uc3Qgc2hvb3RpbmdQbGF5ZXIgPSB0aGlzLnBvc3Nlc3Npb25cbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi54ID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgP1xuICAgICAgICAvLyAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggKyBzaG9vdGluZ1BsYXllci53aWR0aCArIHRoaXMucmFkaXVzKSA6XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzKVxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnkgPSBzaG9vdGluZ1BsYXllci5wb3NpdGlvbi55XG5cbiAgICAgICAgLy8gY29uc3Qgc2NvcmVQb3NpdGlvbiA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIHg6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgLy8gICAgICAgICB5OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICkgOiAoXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgeDogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgIC8vICAgICAgICAgeTogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gKVxuXG4gICAgICAgIC8vIGNvbnN0IG51bWJlck9mRnJhbWVzID0gNTBcblxuICAgICAgICAvLyBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgIC8vIGNvbnN0IHZlbG9jaXR5WSA9ICggKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpICkgLyBudW1iZXJPZkZyYW1lc1xuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgLy8gICAgIHg6IHZlbG9jaXR5WCxcbiAgICAgICAgLy8gICAgIHk6IHZlbG9jaXR5WVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWUgICAgICAgIFxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSBmYWxzZVxuICAgICAgICAvLyB9LCA1MDApO1xuXG4gICAgICAgIC8vIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcblxuICAgICAgICAvLyBQT1dFUkJBU0VEIEFJTUVEIFNIT09USU5HXG5cblxuICAgICAgICB0aGlzLnBvd2VyICs9IDFcblxuICAgICAgICBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICBpZiAodGhpcy5zaG9vdGluZ1RpbWVvdXQgJiYgdGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG9vdGluZ1RpbWVvdXQpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG93ZXIgPCA2MCkge1xuICAgICAgICAgICAgdGhpcy5zaG9vdGluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VCYWxsKClcbiAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVsZWFzZUJhbGwgKCkge1xuICAgICAgICBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuXG4gICAgICAgIGNvbnN0IHNjb3JlUG9zaXRpb24gPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueVxuICAgICAgICAgICAgfVxuICAgICAgICApIDogKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMubGVmdEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueCArICh0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC53aWR0aCAvIDIpLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMubGVmdEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueVxuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgLy8gTEFZVVBcbiAgICAgICAgaWYgKDE1MCA+IE1hdGguaHlwb3QodGhpcy5wb3NpdGlvbi54IC0gc2NvcmVQb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgLSBzY29yZVBvc2l0aW9uLnkpKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IDMwXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVkgPSAoKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpKSAvIG51bWJlck9mRnJhbWVzXG5cbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAodGhpcy5wb3dlciAtIDMwKSAvIDIwXG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZFggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eVggKyBkaWZmXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCAtIGRpZmZcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICAgICAgeDogYWRqdXN0ZWRYLFxuICAgICAgICAgICAgICAgIHk6IHZlbG9jaXR5WVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU0hPVFxuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSA1MFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVkgPSAoKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpKSAvIG51bWJlck9mRnJhbWVzXG4gICAgXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gKHRoaXMucG93ZXIgLSAzMCkgLyA2XG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZFggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eVggKyBkaWZmXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCAtIGRpZmZcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICAgICAgeDogYWRqdXN0ZWRYLFxuICAgICAgICAgICAgICAgIHk6IHZlbG9jaXR5WVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWVcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gZmFsc2VcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgICAgICB0aGlzLnJlbW92ZVBvc3Nlc3Npb24oKVxuXG4gICAgfVxuXG4gICAgcmVtb3ZlUG9zc2Vzc2lvbigpIHtcbiAgICAgICAgdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuICAgICAgICBzb2NrZXQuZW1pdChcInJlbW92ZUJhbGxQb3NzZXNzaW9uXCIsIHtcbiAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWQsXG4gICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbW92ZSgpIHtcblxuICAgICAgICBpZiAoIXRoaXMucG9zc2Vzc2lvbikge1xuICAgICAgICAgICAgdGhpcy5mYWxsKClcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb3ZlV2l0aFBsYXllclBvc3Nlc3Npb24oKSBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tCb3VuZHMoKVxuICAgIH1cblxuICAgIG1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbigpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5wb3NzZXNzaW9uLmZhY2luZ1JpZ2h0ID9cbiAgICAgICAgICAgICh0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueCArIHRoaXMucG9zc2Vzc2lvbi53aWR0aCkgOiAodGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLngpXG5cbiAgICAgICAgaWYgKHRoaXMucG9zc2Vzc2lvbi5qdW1waW5nKSB7XG4gICAgICAgICAgICAvLyBIT0xEIEJBTExcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi55ICsgdGhpcy5wb3NzZXNzaW9uLmhlaWdodCAvIDJcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRFJJQkJMSU5HXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55IDwgdGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLnkgKyB0aGlzLnBvc3Nlc3Npb24uaGVpZ2h0IC8gMikge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IC1DT05TVEFOVFMuRFJJQkJMRV9TUEVFRFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPiB0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueSArIHRoaXMucG9zc2Vzc2lvbi5oZWlnaHQgLSB0aGlzLnJhZGl1cykge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5EUklCQkxFX1NQRUVEXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy52ZWxvY2l0eS55XG4gICAgICAgIH1cbiAgICAgICAgLy8gc29ja2V0LmVtaXQoXCJ1cGRhdGVCYWxsV2l0aFBvc1wiLCB7XG4gICAgICAgIC8vICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkLFxuICAgICAgICAvLyAgICAgZnJvbVNvY2tldDogc29ja2V0LmlkLFxuICAgICAgICAvLyAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHksXG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgICAgLy8gICAgIG90aGVyUGxheWVyRmFjaW5nOiB0aGlzLnBvc3Nlc3Npb24uZmFjaW5nUmlnaHRcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cblxuICAgIGZhbGwgKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy52ZWxvY2l0eS55O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgICAgICAvLyBHUkFWSVRZXG4gICAgICAgIC8vIGlmIHRoZSBwb3MgaXMgZ3JlYXRlciB0aGFuIHRoZSBmbG9vclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5yYWRpdXMgPCB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSAtPSBDT05TVEFOVFMuR1JBVklUWTtcbiAgICAgICAgICAgIC8vIGVsc2Ugc2V0IHRoZSByZXZlcnNlIHZlbG9jaXR5XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52ZWxvY2l0eS55IDwgMCkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueSAqIENPTlNUQU5UUy5CT1VOQ0VfUkVURU5USU9OXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNoZWNrQm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ID4gdGhpcy5jb3VydC53aWR0aCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy5yYWRpdXNcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5LnhcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgUmVjdCBmcm9tIFwiLi91dGlscy9yZWN0XCI7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBDT1VSVF9GTE9PUjogMC44NSxcbiAgICBDT1VSVF9XSURUSDogNSxcbiAgICBIT09QX1lfTVVMVElQTElFUjogMC4zLFxuICAgIEhPT1BfSEVJR0hUOiA0MCxcbiAgICBIT09QX1dJRFRIOiA1MCxcbiAgICBIT09QX1hfRElTVEFOQ0U6IDUwLFxuICAgIEJBQ0tCT0FSRF9XSURUSDogMTUsXG4gICAgQkFDS0JPQVJEX0hFSUdIVDogNTBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdXJ0IGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgYmFja2dyb3VuZENhdmFzKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IGRpbWVuc2lvbnMud2lkdGgsIGhlaWdodDogQ09OU1RBTlRTLkNPVVJUX1dJRFRIIH0pXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAqIENPTlNUQU5UUy5DT1VSVF9GTE9PUlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG9vcExlZnRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAgKyBDT05TVEFOVFMuSE9PUF9YX0RJU1RBTkNFIC0gNixcbiAgICAgICAgICAgIHk6IGRpbWVuc2lvbnMuaGVpZ2h0ICogQ09OU1RBTlRTLkhPT1BfWV9NVUxUSVBMSUVSXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob29wUmlnaHRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IGRpbWVuc2lvbnMud2lkdGggLSBDT05TVEFOVFMuSE9PUF9YX0RJU1RBTkNFIC0gQ09OU1RBTlRTLkhPT1BfV0lEVEggLSBDT05TVEFOVFMuQkFDS0JPQVJEX1dJRFRILFxuICAgICAgICAgICAgeTogZGltZW5zaW9ucy5oZWlnaHQgKiBDT05TVEFOVFMuSE9PUF9ZX01VTFRJUExJRVJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxlZnRIb29wSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5yaWdodEhvb3BJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmxlZnRIb29wSW1hZ2Uuc3JjID0gXCJzcmMvYXNzZXRzL2NhcnRvb25Ib29wTGVmdC5wbmdcIlxuICAgICAgICB0aGlzLnJpZ2h0SG9vcEltYWdlLnNyYyA9IFwic3JjL2Fzc2V0cy9jYXJ0b29uSG9vcFJpZ2h0LnBuZ1wiXG5cbiAgICAgICAgdGhpcy5jb2xvciA9IFwiZ3JlZW5cIlxuICAgICAgICB0aGlzLmNvdXJ0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5jb3VydEltYWdlLnNyYyA9IFwic3JjL2Fzc2V0cy9iYmFsbGNvdXJ0c21hbGwucG5nXCJcbiAgICAgICAgdGhpcy5zZXR1cEJhY2tncm91bmRDb3VydChiYWNrZ3JvdW5kQ2F2YXMpXG4gICAgfSAgXG5cbiAgICBzZXR1cEJhY2tncm91bmRDb3VydChjYW52YXMpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNvdXJ0SW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNvdXJ0SW1hZ2UsXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5jb3VydEltYWdlLndpZHRoIC8gMTIsIFxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuY291cnRJbWFnZS5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggKyB0aGlzLmNvdXJ0SW1hZ2Uud2lkdGggLyA2LFxuICAgICAgICAgICAgICAgIHRoaXMuY291cnRJbWFnZS5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGVmdEhvb3BJbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMubGVmdEhvb3BJbWFnZSxcbiAgICAgICAgICAgICAgICB0aGlzLmhvb3BMZWZ0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICB0aGlzLmhvb3BMZWZ0UG9zaXRpb24ueSAtIChDT05TVEFOVFMuSE9PUF9IRUlHSFQgKyA1KSxcbiAgICAgICAgICAgICAgICBDT05TVEFOVFMuSE9PUF9XSURUSCArIENPTlNUQU5UUy5CQUNLQk9BUkRfV0lEVEggKyAxMCxcbiAgICAgICAgICAgICAgICBDT05TVEFOVFMuSE9PUF9IRUlHSFQgKyBDT05TVEFOVFMuQkFDS0JPQVJEX0hFSUdIVClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJpZ2h0SG9vcEltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5yaWdodEhvb3BJbWFnZSxcbiAgICAgICAgICAgICAgICB0aGlzLmhvb3BSaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgdGhpcy5ob29wUmlnaHRQb3NpdGlvbi55IC0gKENPTlNUQU5UUy5IT09QX0hFSUdIVCArIDUpLFxuICAgICAgICAgICAgICAgIENPTlNUQU5UUy5IT09QX1dJRFRIICsgQ09OU1RBTlRTLkJBQ0tCT0FSRF9XSURUSCArIDEwLFxuICAgICAgICAgICAgICAgIENPTlNUQU5UUy5IT09QX0hFSUdIVCArIENPTlNUQU5UUy5CQUNLQk9BUkRfSEVJR0hUKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgLy8gICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jb3VydEltYWdlLFxuICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5jb3VydEltYWdlLndpZHRoIC8gMTIsIFxuICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5jb3VydEltYWdlLmhlaWdodCAvIDIsXG4gICAgLy8gICAgICAgICB0aGlzLndpZHRoICsgdGhpcy5jb3VydEltYWdlLndpZHRoIC8gNixcbiAgICAvLyAgICAgICAgIHRoaXMuY291cnRJbWFnZS5oZWlnaHQpO1xuICAgIH1cblxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInXG5pbXBvcnQgQ291cnQgZnJvbSAnLi9jb3VydCc7XG5pbXBvcnQgSG9vcCBmcm9tICcuL2hvb3AnO1xuaW1wb3J0IEJhbGwgZnJvbSAnLi9iYWxsJztcbmltcG9ydCBTY29yZWJvYXJkIGZyb20gJy4vc2NvcmVib2FyZCc7XG5pbXBvcnQgUGxheWVyMiBmcm9tICcuL3BsYXllcjInO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vbWVudV9zY3JlZW5zL21haW5fbWVudSc7XG5pbXBvcnQgT25saW5lUGxheWVyIGZyb20gJy4vb25saW5lX3BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5CQUphbUdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgYmFja2dyb3VuZENhbnZhcykgeyAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ2FudmFzID0gYmFja2dyb3VuZENhbnZhc1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLm1haW5NZW51ID0gbmV3IE1haW5NZW51KHRoaXMuZGltZW5zaW9ucywgdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKSwgdGhpcy5zdGFydE9ubGluZUdhbWUuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlck1lbnUoKVxuICAgIH1cblxuICAgIHNob3dNZW51KCkge1xuICAgICAgICB0aGlzLm1haW5NZW51LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICB0aGlzLnJlbmRlck1lbnUodGhpcy5jdHgpXG4gICAgfVxuXG4gICAgcmVuZGVyTWVudSAoKSB7XG4gICAgICAgIHRoaXMubWFpbk1lbnUucmVuZGVyKHRoaXMuY3R4KVxuICAgICAgICBpZiAoIXRoaXMucGxheWluZ0dhbWUpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlck1lbnUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lIChsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSkge1xuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gdHJ1ZVxuICAgICAgICB0aGlzLnJlc3RhcnQobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUpXG4gICAgfVxuXG4gICAgc3RhcnRPbmxpbmVHYW1lKGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlLCBteVNpZGUsIGdhbWVJZCkge1xuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gdHJ1ZVxuICAgICAgICB0aGlzLm9ubGluZUdhbWVJZCA9IGdhbWVJZFxuICAgICAgICB0aGlzLnJ1bk9ubGluZUdhbWUobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUsIG15U2lkZSlcbiAgICB9XG5cbiAgICByZXN0YXJ0KGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlKSB7XG4gICAgICAgIC8vIFNUQVJUIEFOSU1BVElPTiBTWUNMRVxuICAgICAgICB0aGlzLmNvdXJ0ID0gbmV3IENvdXJ0KHRoaXMuZGltZW5zaW9ucywgdGhpcy5iYWNrZ3JvdW5kQ2FudmFzKTtcbiAgICAgICAgdGhpcy5sZWZ0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJMRUZUXCIpO1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJSSUdIVFwiKTtcbiAgICAgICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5kaW1lbnNpb25zLCB0aGlzLmNvdXJ0LCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcClcblxuICAgICAgICB0aGlzLnNjb3JlYm9hcmQgPSBuZXcgU2NvcmVib2FyZCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMubGVmdEhvb3AsIHRoaXMucmlnaHRIb29wKVxuXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIHJpZ2h0U3ByaXRlKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcjIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCBsZWZ0U3ByaXRlKTtcblxuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG4gICAgXG4gICAgYW5pbWF0ZSgpIHsgICAgICAgIFxuICAgICAgICAvLyBDUkVBVEVTIEJBQ0tHUk9VTkRcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG5cbiAgICAgICAgXG4gICAgICAgIHRoaXMuY291cnQuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgLy8gQU5JTUFURSBPQkpFQ1RTXG4gICAgICAgIHRoaXMucGxheWVyLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMucGxheWVyMi5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmJhbGwuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5sZWZ0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLnJpZ2h0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zY29yZWJvYXJkLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5nYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlXaW5uZXIoKVxuICAgICAgICB9XG4gICAgICAgIC8vIFJFUVVFU1QgTkVYVCBGUkFNRVxuICAgICAgICAvLyBpZiAodGhpcy5wbGF5aW5nR2FtZSkge1xuICAgICAgICAvLyAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAvLyB9LCAxMDAwIC8gNjApXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBydW5PbmxpbmVHYW1lKGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlLCBteVNpZGUpIHtcbiAgICAgICAgdGhpcy5jb3VydCA9IG5ldyBDb3VydCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuYmFja2dyb3VuZENhbnZhcyk7XG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiTEVGVFwiKTtcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiUklHSFRcIik7XG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKHRoaXMuZGltZW5zaW9ucywgdGhpcy5jb3VydCwgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3AsIHRoaXMub25saW5lR2FtZUlkKVxuXG4gICAgICAgIHRoaXMuc2NvcmVib2FyZCA9IG5ldyBTY29yZWJvYXJkKHRoaXMuZGltZW5zaW9ucywgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3ApXG5cbiAgICAgICAgaWYgKG15U2lkZSA9PT0gXCJMRUZUXCIpIHtcbiAgICAgICAgICAgIHRoaXMubXlQbGF5ZXIgPSBuZXcgT25saW5lUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgbGVmdFNwcml0ZSwgXCJMRUZUXCIsIHRydWUpXG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyID0gbmV3IE9ubGluZVBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIHJpZ2h0U3ByaXRlLCBcIlJJR0hUXCIsIGZhbHNlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllciA9IG5ldyBPbmxpbmVQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCBsZWZ0U3ByaXRlLCBcIkxFRlRcIiwgZmFsc2UpXG4gICAgICAgICAgICB0aGlzLm15UGxheWVyID0gbmV3IE9ubGluZVBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIHJpZ2h0U3ByaXRlLCBcIlJJR0hUXCIsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVPdGhlclBvc1wiLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllci5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB4OiBkYXRhW1wieFwiXSxcbiAgICAgICAgICAgICAgICB5OiBkYXRhW1wieVwiXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIuZmFjaW5nUmlnaHQgID0gZGF0YVtcIm90aGVyUGxheWVyRmFjaW5nXCJdXG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyLmp1bXBpbmcgPSBkYXRhW1wib3RoZXJQbGF5ZXJKdW1waW5nXCJdXG4gICAgICAgIH0pIFxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVCYWxsUG9zc2VzaW9uXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5iYWxsLnBvc3Nlc3Npb24gPSB0aGlzLm90aGVyUGxheWVyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInJlZ2lzdGVyZWRQb3NzZXNpb25DaGFuZ2VcIiwge1xuICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5vbmxpbmVHYW1lSWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZU5vQmFsbFBvc3Nlc2lvblwiLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC5wb3NzZXNzaW9uID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5iYWxsLnBvc2l0aW9uID0gZGF0YVtcInBvc2l0aW9uXCJdXG4gICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkgPSBkYXRhW1widmVsb2NpdHlcIl1cbiAgICAgICAgfSlcbiAgICAgICAgLy8gc29ja2V0Lm9uKFwidXBkYXRlQmFsbFBvc1wiLCBkYXRhID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMuYmFsbC5wb3NpdGlvbiA9IGRhdGFbXCJwb3NpdGlvblwiXVxuICAgICAgICAvLyAgICAgdGhpcy5iYWxsLnZlbG9jaXR5ID0gZGF0YVtcInZlbG9jaXR5XCJdXG4gICAgICAgIC8vICAgICB0aGlzLm90aGVyUGxheWVyLmZhY2luZ1JpZ2h0ID0gZGF0YVtcIm90aGVyUGxheWVyRmFjaW5nXCJdXG4gICAgICAgIC8vIH0pXG4gICAgICAgIHNvY2tldC5vbihcImVuZEdhbWVGcm9tRGlzY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMub25saW5lR2FtZUlkID0gbnVsbFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TWVudSgpXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnJ1bk9ubGluZSgpO1xuICAgIH1cblxuICAgIHJ1bk9ubGluZSAoKSB7XG4gICAgICAgIC8vIENSRUFURVMgQkFDS0dST1VORFxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIm9yYW5nZVwiO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcblxuXG4gICAgICAgIHRoaXMuY291cnQuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgLy8gQU5JTUFURSBPQkpFQ1RTXG4gICAgICAgIHRoaXMub3RoZXJQbGF5ZXIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5teVBsYXllci5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5iYWxsLmFuaW1hdGUodGhpcy5jdHgpXG5cbiAgICAgICAgdGhpcy5sZWZ0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLnJpZ2h0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuXG4gICAgICAgIHRoaXMuc2NvcmVib2FyZC5hbmltYXRlKHRoaXMuY3R4KVxuXG4gICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVdpbm5lcigpXG4gICAgICAgIH1cblxuXG4gICAgICAgIHNvY2tldC5lbWl0KFwidXBkYXRlTXlQb3NcIiwge1xuICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLm9ubGluZUdhbWVJZCxcbiAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgIHg6IHRoaXMubXlQbGF5ZXIucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMubXlQbGF5ZXIucG9zaXRpb24ueSxcbiAgICAgICAgICAgIG90aGVyUGxheWVyRmFjaW5nOiB0aGlzLm15UGxheWVyLmZhY2luZ1JpZ2h0LFxuICAgICAgICAgICAgb3RoZXJQbGF5ZXJKdW1waW5nOiB0aGlzLm15UGxheWVyLmp1bXBpbmdcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0LmVtaXQoXCJ1cGRhdGVCYWxsUG9zXCIsIHtcbiAgICAgICAgICAgIGdhbWVJZDogdGhpcy5vbmxpbmVHYW1lSWQsXG4gICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgICAgICB4OiB0aGlzLmJhbGwucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMuYmFsbC5wb3NpdGlvbi55XG4gICAgICAgIH0pXG4gICAgICAgIC8vIFJFUVVFU1QgTkVYVCBGUkFNRVxuICAgICAgICAvLyBpZiAodGhpcy5wbGF5aW5nR2FtZSkge1xuICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucnVuT25saW5lLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgLy8gfSwgMTAwMCAvIDYwKVxuICAgICAgICAvLyB9XG4gICAgfVxuXG5cblxuICAgIGdhbWVPdmVyICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmVib2FyZC50aW1lTGVmdCA9PT0gMFxuICAgIH1cblxuICAgIGRpc3BsYXlXaW5uZXIgKCkge1xuICAgICAgICBsZXQgdGV4dDtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRIb29wLnNjb3JlID4gdGhpcy5sZWZ0SG9vcC5zY29yZSkge1xuICAgICAgICAgICAgdGV4dCA9IFwiUGxheWVyIDEgd2luc1wiXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0SG9vcC5zY29yZSA+IHRoaXMucmlnaHRIb29wLnNjb3JlKSB7XG4gICAgICAgICAgICB0ZXh0ID0gXCJQbGF5ZXIgMiB3aW5zXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQgPSBcIlRpZSBHYW1lXCJcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiB9XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke3RleHR9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoYCR7dGV4dH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlXG4gICAgICAgIHRoaXMub25saW5lR2FtZUlkID0gbnVsbFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lbnUoKVxuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgUmVjdCBmcm9tICcuL3V0aWxzL3JlY3QnXG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBIT09QX1lfTVVMVElQTElFUjogMC4zLFxuICAgIEhPT1BfSEVJR0hUOiA0MCxcbiAgICBIT09QX1dJRFRIOiA1MCxcbiAgICBIT09QX1hfRElTVEFOQ0U6IDUwLFxuICAgIEJBQ0tCT0FSRF9XSURUSDogMTUsXG4gICAgQkFDS0JPQVJEX0hFSUdIVDogNTAsXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9vcCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIGhvb3BTaWRlLCBiYWxsKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5IT09QX1dJRFRILCBoZWlnaHQ6IENPTlNUQU5UUy5IT09QX0hFSUdIVCB9KVxuICAgICAgICB0aGlzLmJhbGwgPSBiYWxsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgICAgICAwICsgQ09OU1RBTlRTLkhPT1BfWF9ESVNUQU5DRVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zLndpZHRoIC0gQ09OU1RBTlRTLkhPT1BfWF9ESVNUQU5DRSAtIHRoaXMud2lkdGhcbiAgICAgICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsIFxuICAgICAgICAgICAgeTogZGltZW5zaW9ucy5oZWlnaHQgKiBDT05TVEFOVFMuSE9PUF9ZX01VTFRJUExJRVJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tib2FyZCA9IG5ldyBCYWNrYm9hcmQodGhpcywgaG9vcFNpZGUpXG4gICAgICAgIHRoaXMuc2NvcmVIaXRib3ggPSBuZXcgU2NvcmVIaXRib3godGhpcywgaG9vcFNpZGUpXG4gICAgICAgIHRoaXMuY29sb3IgPSBcInB1cnBsZVwiXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgICAgIHRoaXMuanVzdFNjb3JlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5jaGVja0JhbGxDb2xsaXNpb24oKVxuICAgICAgICAvLyB0aGlzLmJhY2tib2FyZC5hbmltYXRlKGN0eClcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAvLyB0aGlzLnNjb3JlSGl0Ym94LmFuaW1hdGUoY3R4KVxuICAgICAgICBpZiAodGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMuc2NvcmVIaXRib3gpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuanVzdFNjb3JlZCkgdGhpcy5zY29yZSArPSAyXG4gICAgICAgICAgICB0aGlzLmp1c3RTY29yZWQgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gXCJncmVlblwiXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1c3RTY29yZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcInB1cnBsZVwiXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCYWxsQ29sbGlzaW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzKSB8fCB0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcy5iYWNrYm9hcmQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5iYWxsLnBvc2l0aW9uLnkgLSB0aGlzLmJhbGwucmFkaXVzID4gdGhpcy5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFsbC52ZWxvY2l0eS55ID4gMCkgdGhpcy5iYWxsLnZlbG9jaXR5LnkgPSAtdGhpcy5iYWxsLnZlbG9jaXR5LnlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFsbC5wb3NpdGlvbi55ICsgdGhpcy5iYWxsLnJhZGl1cyA8IHRoaXMuYmFja2JvYXJkLnBvc2l0aW9uLnkgJiYgdGhpcy5iYWxsLnZlbG9jaXR5LnkgPCAwKSAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkueSA9IC10aGlzLmJhbGwudmVsb2NpdHkueVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkueCA9IC10aGlzLmJhbGwudmVsb2NpdHkueFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNsYXNzIFNjb3JlSGl0Ym94IGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoaG9vcCwgaG9vcFNpZGUpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLkhPT1BfV0lEVEggLSAzMCwgaGVpZ2h0OiBDT05TVEFOVFMuSE9PUF9IRUlHSFQgKiAwLjA1IH0pXG4gICAgICAgIGNvbnN0IHggPSBob29wU2lkZSA9PT0gXCJMRUZUXCIgPyAoXG4gICAgICAgICAgICBob29wLnBvc2l0aW9uLnggKyAxNVxuICAgICAgICApIDogKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54ICsgaG9vcC53aWR0aCAtIHRoaXMud2lkdGggLSAxNVxuICAgICAgICApXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogaG9vcC5wb3NpdGlvbi55XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwid2hpdGVcIlxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tib2FyZCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGhvb3AsIGhvb3BTaWRlKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5CQUNLQk9BUkRfV0lEVEgsIGhlaWdodDogQ09OU1RBTlRTLkJBQ0tCT0FSRF9IRUlHSFQgfSlcbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCBcbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCArIGhvb3Aud2lkdGggLSB0aGlzLndpZHRoXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiBob29wLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImFxdWFcIlxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59IiwiaW1wb3J0IGtleSBmcm9tICcuLi91dGlscy9rZXltYXN0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXJTZWxlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIHNlbGVjdGVkQ2hhcmFjdGVycykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzID0gc2VsZWN0ZWRDaGFyYWN0ZXJzXG4gICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gMFxuICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAxXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJSb2RtYW5cIiwgc3JjOiBcInNyYy9hc3NldHMvcm9kbWFuU21hbGwucG5nXCJ9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkRyYWtlXCIsIHNyYzogXCJzcmMvYXNzZXRzL2RyYWtlU21hbGwucG5nXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJMZWJyb25cIiwgc3JjOiBcInNyYy9hc3NldHMvbGVicm9uU21hbGwucG5nXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJQZWFjaFwiLCBzcmM6IFwic3JjL2Fzc2V0cy9wZWFjaFNtYWxsLnBuZ1wifVxuICAgICAgICBdXG4gICAgICAgIFxuICAgICAgICB0aGlzLmxlZnRDaGFyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMucmlnaHRDaGFyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubGVmdENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXS5zcmNcbiAgICAgICAgdGhpcy5yaWdodENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjXG5cbiAgICAgICAgdGhpcy5sZWZ0UmVhZHkgPSBmYWxzZVxuICAgICAgICB0aGlzLnJpZ2h0UmVhZHkgPSBmYWxzZVxuXG4gICAgICAgIHNvY2tldC5vbihcIm1hdGNoRm91bmRcIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRQbGF5ZXJJZCA9IGRhdGFbXCJsZWZ0UGxheWVySWRcIl1cbiAgICAgICAgICAgIHRoaXMucmlnaHRQbGF5ZXJJZCA9IGRhdGFbXCJyaWdodFBsYXllcklkXCJdXG4gICAgICAgICAgICBpZiAoc29ja2V0LmlkID09PSB0aGlzLmxlZnRQbGF5ZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nTGVmdCA9IHRydWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdSaWdodCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gMFxuICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gMVxuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSBkYXRhW1wiZ2FtZUlkXCJdXG4gICAgICAgIH0pXG5cbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZFNlbGVjdGVkQ2hhcnNcIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9IGRhdGFbXCJsZWZ0U2VsZWN0ZWRcIl1cbiAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9IGRhdGFbXCJyaWdodFNlbGVjdGVkXCJdXG4gICAgICAgIH0pXG5cbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZExlZnRSZWFkeVwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRSZWFkeSA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZFJpZ2h0UmVhZHlcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yaWdodFJlYWR5ID0gdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHNvY2tldC5vbihcInN0YXJ0R2FtZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBrZXkudW5iaW5kKCdkb3duJylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ3cnKVxuICAgICAgICAgICAga2V5LnVuYmluZCgncycpXG4gICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVycyh0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdLnNyYywgdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjLCB0aGlzLmdhbWVJZClcbiAgICAgICAgICAgIHRoaXMubGVmdFBsYXllcklkID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5yaWdodFBsYXllcklkID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdMZWZ0ID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nUmlnaHQgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAwXG4gICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAxXG4gICAgICAgICAgICB0aGlzLmxlZnRSZWFkeSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLnJpZ2h0UmVhZHkgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSBudWxsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eCkge1xuXG4gICAgICAgIHRoaXMubGVmdENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXS5zcmNcbiAgICAgICAgdGhpcy5yaWdodENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjXG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicHVycGxlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIExFRlQgU0lERVxuICAgICAgICBjb25zdCBsZWZ0U2lkZUNoYXIgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdXG4gICAgICAgIGxldCBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDQsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyfVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuXG4gICAgICAgIGlmICh0aGlzLm9ubGluZU1vZGUpIGN0eC5maWxsVGV4dChcIk9ubGluZSBNb2RlXCIsIGxvYy54LCBsb2MueSAtIDEwMClcbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgMTJwdCBzZXJpZlwiO1xuICAgICAgICBpZiAodGhpcy5sZWZ0UmVhZHkpIGN0eC5maWxsVGV4dChcIlJlYWR5XCIsIGxvYy54LCBsb2MueSAtIDcwKVxuICAgICAgICBpZiAodGhpcy5sZWZ0UGxheWVySWQgJiYgdGhpcy5yaWdodFBsYXllcklkKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy5sZWZ0UGxheWVySWR9YCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7c29ja2V0LmlkfWAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCR7bGVmdFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYCR7bGVmdFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRDaGFyLFxuICAgICAgICAgICAgbG9jLnggLSB0aGlzLmxlZnRDaGFyLndpZHRoIC8gMixcbiAgICAgICAgICAgIGxvYy55KVxuXG4gICAgICAgIC8vIFJJR0hUIFNJREVcbiAgICAgICAgY29uc3QgcmlnaHRTaWRlQ2hhciA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdXG4gICAgICAgIGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoICogMyAvIDQsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyIH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblxuICAgICAgICBpZiAodGhpcy5vbmxpbmVNb2RlKSBjdHguZmlsbFRleHQoXCJPbmxpbmUgTW9kZVwiLCBsb2MueCwgbG9jLnkgLSAxMDApXG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDEycHQgc2VyaWZcIjtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRSZWFkeSkgY3R4LmZpbGxUZXh0KFwiUmVhZHlcIiwgbG9jLngsIGxvYy55IC0gNzApXG4gICAgICAgIGlmICh0aGlzLmxlZnRQbGF5ZXJJZCAmJiB0aGlzLnJpZ2h0UGxheWVySWQpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChgJHt0aGlzLnJpZ2h0UGxheWVySWR9YCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYFdhaXRpbmcgZm9yIFBsYXllcmAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcblxuICAgICAgICBjdHguZmlsbFRleHQoYCR7cmlnaHRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGAke3JpZ2h0U2lkZUNoYXIubmFtZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMucmlnaHRDaGFyLFxuICAgICAgICAgICAgbG9jLnggLSB0aGlzLnJpZ2h0Q2hhci53aWR0aCAvIDIsXG4gICAgICAgICAgICBsb2MueSlcbiBcbiAgICB9XG5cbiAgICBzZXR1cEtleUhhbmRsZXJzKCkge1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm9ubGluZU1vZGUpIHtcbiAgICAgICAgICAgICAgICBrZXkoJ2Rvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgndXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgLSAxKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yaWdodFNlbGVjdGVkID09PSAtMSkgdGhpcy5yaWdodFNlbGVjdGVkID0gdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgndycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgncycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgLSAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdFNlbGVjdGVkID09PSAtMSkgdGhpcy5sZWZ0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgndycpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3MnKVxuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzKHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjLCB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmMpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBrZXkoJ3VwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmdhbWVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkICsgMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGxheWluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gKHRoaXMucmlnaHRTZWxlY3RlZCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmlnaHRTZWxlY3RlZCA9PT0gLTEpIHRoaXMucmlnaHRTZWxlY3RlZCA9IHRoaXMuY2hhcmFjdGVycy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ2Rvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkIC0gMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdFNlbGVjdGVkID09PSAtMSkgdGhpcy5sZWZ0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1BsYXlpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnY2hhckNoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0U2VsZWN0ZWQ6IHRoaXMucmlnaHRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFNlbGVjdGVkOiB0aGlzLmxlZnRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgnZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZ2FtZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmdMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2xlZnRSZWFkeScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQbGF5aW5nUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgncmlnaHRSZWFkeScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cblxuXG5cbn0iLCJpbXBvcnQga2V5IGZyb20gJy4uL3V0aWxzL2tleW1hc3Rlcic7XG5pbXBvcnQgQ2hhcmFjdGVyU2VsZWN0IGZyb20gJy4vY2hhcmFjdGVyX3NlbGVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IHtcbiAgICBjb25zdHJ1Y3RvciAoZGltZW5zaW9ucywgc3RhcnRHYW1lLCBzdGFydE9ubGluZUdhbWUpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSA9IHN0YXJ0R2FtZVxuICAgICAgICB0aGlzLnN0YXJ0T25saW5lR2FtZSA9IHN0YXJ0T25saW5lR2FtZVxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gMFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXCJTdGFydCBHYW1lXCIsIFwiT25saW5lXCJdXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0ID0gbmV3IENoYXJhY3RlclNlbGVjdCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2V0dXBLZXlIYW5kbGVycygpXG4gICAgfVxuXG4gICAgc2VsZWN0ZWRDaGFyYWN0ZXJzIChsZWZ0U3JjLCByaWdodFNyYywgZ2FtZUlkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlclNlbGVjdC5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5vbmxpbmVNb2RlID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnN0IG15U2lkZSA9IHRoaXMuY2hhcmFjdGVyU2VsZWN0LmlzUGxheWluZ0xlZnQgPyBcIkxFRlRcIiA6IFwiUklHSFRcIlxuICAgICAgICAgICAgdGhpcy5zdGFydE9ubGluZUdhbWUobGVmdFNyYywgcmlnaHRTcmMsIG15U2lkZSwgZ2FtZUlkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUobGVmdFNyYywgcmlnaHRTcmMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbiAgICByZW5kZXIgKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJwdXJwbGVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvICgodGhpcy5vcHRpb25zLmxlbmd0aCArIDEpIC0gaSkgfVxuICAgICAgICAgICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBjdHgubWVhc3VyZVRleHQoYCR7b3B0aW9ufWApLndpZHRoXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PT0gaSkgY3R4LmZpbGxSZWN0KChsb2MueCAtIHdpZHRoIC8gMikgLSA1LCBsb2MueSAtIDQwLCB3aWR0aCArIDEwLCA1MCk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke29wdGlvbn1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHtvcHRpb259YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5yZW5kZXIoY3R4KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0dXBLZXlIYW5kbGVycygpIHtcbiAgICAgICAga2V5KCdkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9ICh0aGlzLnNlbGVjdGVkT3B0aW9uICsgMSkgJSB0aGlzLm9wdGlvbnMubGVuZ3RoXG4gICAgICAgIH0pXG4gICAgICAgIGtleSgndXAnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gTWF0aC5hYnMoKHRoaXMuc2VsZWN0ZWRPcHRpb24gLSAxKSAlIHRoaXMub3B0aW9ucy5sZW5ndGgpXG4gICAgICAgIH0pXG4gICAgICAgIGtleSgnZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2Rvd24nKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0Lm9ubGluZU1vZGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgndXAnKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2VudGVyJylcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Qub25saW5lTW9kZSA9IHRydWVcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgncGxheWVyQWRkZWRUb1F1ZXVlJywgc29ja2V0LmlkKVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIFxuXG5cblxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBQTEFZRVJfV0lEVEg6IDQwLFxuICAgIFBMQVlFUl9IRUlHSFQ6IDcwLFxuICAgIE1PVkVTUEVFRDogNSxcbiAgICAvLyBXSVRIX0JBTExfTU9WRVNQRUVEOiAzLjUsXG4gICAgSlVNUF9IRUlHSFQ6IDE0LFxuICAgIC8vIE9OX0ZJUkVfSlVNUF9IRUlHSFQ6IDE2XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbmxpbmVQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMsIHN0YXJ0U2lkZSwgYWN0aXZlKSB7XG4gICAgICAgIHN1cGVyKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpXG4gICAgICAgIFxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gc3RhcnRTaWRlID09PSBcIkxFRlRcIiA/ICh7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfSkgOiAoe1xuICAgICAgICAgICAgeDogdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHRoaXMuY29sb3IgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmVcbiAgICB9XG5cblxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSxcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIDUsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnNwcml0ZS5oZWlnaHQgLyAzKVxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdyaWdodCcpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ2xlZnQnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpVTVBJTkdcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3VwJykgJiYgIXRoaXMuanVtcGluZykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkpVTVBfSEVJR0hUO1xuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3NwYWNlJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZm9ybUFjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JhbGwoKVxuXG4gICAgICAgIHRoaXMuaGFuZGxlR3Jhdml0eSgpXG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG59XG5cbiIsImltcG9ydCBSZWN0IGZyb20gJy4vdXRpbHMvcmVjdCc7XG5pbXBvcnQga2V5IGZyb20gJy4vdXRpbHMva2V5bWFzdGVyJztcblxuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgR1JBVklUWTogMC41LFxuICAgIFBMQVlFUl9XSURUSDogNDAsXG4gICAgUExBWUVSX0hFSUdIVDogNzAsXG4gICAgTU9WRVNQRUVEOiA1LFxuICAgIC8vIFdJVEhfQkFMTF9NT1ZFU1BFRUQ6IDMuNSxcbiAgICBKVU1QX0hFSUdIVDogMTQsXG4gICAgLy8gT05fRklSRV9KVU1QX0hFSUdIVDogMTZcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLlBMQVlFUl9XSURUSCwgaGVpZ2h0OiBDT05TVEFOVFMuUExBWUVSX0hFSUdIVCB9KVxuICAgICAgICB0aGlzLmNvdXJ0ID0gY291cnRcbiAgICAgICAgdGhpcy5iYWxsID0gYmFsbFxuXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHk6IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5kZW5uaXNSb2RtYW5IZWFkID0gbmV3IEltYWdlKCk7XG4gICAgICAgIC8vIHRoaXMuZGVubmlzUm9kbWFuSGVhZC5zcmMgPSAnc3JjL2Fzc2V0cy9kZW5uaXNSb2RtYW5IZWFkLnBuZydcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc3JjID0gc3ByaXRlU3JjXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBjdHguZHJhd0ltYWdlKHRoaXMuZGVubmlzUm9kbWFuSGVhZCwgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy53aWR0aCArICh0aGlzLmRlbm5pc1JvZG1hbkhlYWQud2lkdGggLyAyKSwgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgKyAodGhpcy5kZW5uaXNSb2RtYW5IZWFkLmhlaWdodCAvIDMpKVxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuc3ByaXRlLFxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIDUsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnNwcml0ZS5oZWlnaHQgLyAzKVxuICAgIH1cblxuICAgIG1vdmUgKCkge1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgncmlnaHQnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdsZWZ0JykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBKVU1QSU5HXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCd1cCcpICYmICF0aGlzLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5KVU1QX0hFSUdIVDtcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCcvJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZm9ybUFjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JhbGwoKSBcblxuICAgICAgICB0aGlzLmhhbmRsZUdyYXZpdHkoKVxuXG4gICAgICAgIHRoaXMuY2hlY2tCb3VuZHMoKVxuICAgIH1cblxuICAgIHByZWZvcm1BY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmJhbGwucG9zc2Vzc2lvbiA9PT0gdGhpcykge1xuICAgICAgICAgICAgLy8gSG9sZCB0byBzaG9vdC4gXG4gICAgICAgICAgICB0aGlzLmJhbGwuc2hvb3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCYWxsKCkge1xuICAgICAgICBpZiAoIXRoaXMuYmFsbC5wb3NzZXNzaW9uICYmIHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzKSkge1xuICAgICAgICAgICAgdGhpcy5iYWxsLmNsYWltUG9zc2Vzc2lvbih0aGlzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlR3Jhdml0eSgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMudmVsb2NpdHkueTtcbiAgICAgICAgLy8gR1JBVklUWVxuICAgICAgICAvLyBpZiB0aGUgcG9zIGlzIGdyZWF0ZXIgdGhhbiB0aGUgZmxvb3JcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0IDwgdGhpcy5jb3VydC5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gQ09OU1RBTlRTLkdSQVZJVFk7XG4gICAgICAgICAgICAvLyBlbHNlIHNldCB0aGUgcG9zIHRvIHRoZSBmbG9vclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0JvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA+IHRoaXMuY291cnQud2lkdGggLSB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDBcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBQTEFZRVJfV0lEVEg6IDQwLFxuICAgIFBMQVlFUl9IRUlHSFQ6IDcwLFxuICAgIE1PVkVTUEVFRDogNSxcbiAgICAvLyBXSVRIX0JBTExfTU9WRVNQRUVEOiAzLjUsXG4gICAgSlVNUF9IRUlHSFQ6IDE0LFxuICAgIC8vIE9OX0ZJUkVfSlVNUF9IRUlHSFQ6IDE2XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKSB7XG4gICAgICAgIHN1cGVyKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ2QnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdhJykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBKVU1QSU5HXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCd3JykgJiYgIXRoaXMuanVtcGluZykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkpVTVBfSEVJR0hUO1xuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3EnKSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmb3JtQWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrQmFsbCgpXG5cbiAgICAgICAgdGhpcy5oYW5kbGVHcmF2aXR5KClcblxuICAgICAgICB0aGlzLmNoZWNrQm91bmRzKClcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBsZWZ0SG9vcCwgcmlnaHRIb29wKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5sZWZ0SG9vcCA9IGxlZnRIb29wXG4gICAgICAgIHRoaXMucmlnaHRIb29wID0gcmlnaHRIb29wXG4gICAgICAgIHRoaXMudGltZUxlZnQgPSA2MFxuICAgICAgICB0aGlzLmNvdW50RG93biA9IHNldEludGVydmFsKCgpID0+IHsgXG4gICAgICAgICAgICB0aGlzLnRpbWVMZWZ0LS1cbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVMZWZ0ID09PSAwKSBjbGVhckludGVydmFsKHRoaXMuY291bnREb3duKVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlIChjdHgpIHtcbiAgICAgICAgbGV0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDEwIH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG4gICAgICAgIGN0eC5maWxsVGV4dChgUGxheWVyIDE6ICR7dGhpcy5yaWdodEhvb3Auc2NvcmV9IFBsYXllciAyOiAke3RoaXMubGVmdEhvb3Auc2NvcmV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYFBsYXllciAxOiAke3RoaXMucmlnaHRIb29wLnNjb3JlfSBQbGF5ZXIgMjogJHt0aGlzLmxlZnRIb29wLnNjb3JlfWAsIGxvYy54LCBsb2MueSk7XG5cbiAgICAgICAgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gNSB9XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy50aW1lTGVmdH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHt0aGlzLnRpbWVMZWZ0fWAsIGxvYy54LCBsb2MueSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IocmFkaXVzKSB7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cblxuICAgIGlzT3ZlcmxhcHBpbmdSZWN0KHJlY3QpIHtcbiAgICAgICAgY29uc3QgZGlzdFggPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSByZWN0LnBvc2l0aW9uLnggLSByZWN0LndpZHRoIC8gMik7XG4gICAgICAgIGNvbnN0IGRpc3RZID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gcmVjdC5wb3NpdGlvbi55IC0gcmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgaWYgKGRpc3RYID4gKHJlY3Qud2lkdGggLyAyICsgdGhpcy5yYWRpdXMpKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICBpZiAoZGlzdFkgPiAocmVjdC5oZWlnaHQgLyAyICsgdGhpcy5yYWRpdXMpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICAgIGlmIChkaXN0WCA8PSAocmVjdC53aWR0aCAvIDIpKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIGlmIChkaXN0WSA8PSAocmVjdC5oZWlnaHQgLyAyKSkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgICAgIGNvbnN0IGR4ID0gZGlzdFggLSByZWN0LndpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgZHkgPSBkaXN0WSAtIHJlY3QuaGVpZ2h0IC8gMjtcbiAgICAgICAgcmV0dXJuIChkeCAqIGR4ICsgZHkgKiBkeSA8PSAodGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cykpO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuXG59IiwiLy8gICAgIGtleW1hc3Rlci5qc1xuLy8gICAgIChjKSAyMDExLTIwMTMgVGhvbWFzIEZ1Y2hzXG4vLyAgICAga2V5bWFzdGVyLmpzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG47IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgdmFyIGssXG4gICAgICAgIF9oYW5kbGVycyA9IHt9LFxuICAgICAgICBfbW9kcyA9IHsgMTY6IGZhbHNlLCAxODogZmFsc2UsIDE3OiBmYWxzZSwgOTE6IGZhbHNlIH0sXG4gICAgICAgIF9zY29wZSA9ICdhbGwnLFxuICAgICAgICAvLyBtb2RpZmllciBrZXlzXG4gICAgICAgIF9NT0RJRklFUlMgPSB7XG4gICAgICAgICAgICAn4oenJzogMTYsIHNoaWZ0OiAxNixcbiAgICAgICAgICAgICfijKUnOiAxOCwgYWx0OiAxOCwgb3B0aW9uOiAxOCxcbiAgICAgICAgICAgICfijIMnOiAxNywgY3RybDogMTcsIGNvbnRyb2w6IDE3LFxuICAgICAgICAgICAgJ+KMmCc6IDkxLCBjb21tYW5kOiA5MVxuICAgICAgICB9LFxuICAgICAgICAvLyBzcGVjaWFsIGtleXNcbiAgICAgICAgX01BUCA9IHtcbiAgICAgICAgICAgIGJhY2tzcGFjZTogOCwgdGFiOiA5LCBjbGVhcjogMTIsXG4gICAgICAgICAgICBlbnRlcjogMTMsICdyZXR1cm4nOiAxMyxcbiAgICAgICAgICAgIGVzYzogMjcsIGVzY2FwZTogMjcsIHNwYWNlOiAzMixcbiAgICAgICAgICAgIGxlZnQ6IDM3LCB1cDogMzgsXG4gICAgICAgICAgICByaWdodDogMzksIGRvd246IDQwLFxuICAgICAgICAgICAgZGVsOiA0NiwgJ2RlbGV0ZSc6IDQ2LFxuICAgICAgICAgICAgaG9tZTogMzYsIGVuZDogMzUsXG4gICAgICAgICAgICBwYWdldXA6IDMzLCBwYWdlZG93bjogMzQsXG4gICAgICAgICAgICAnLCc6IDE4OCwgJy4nOiAxOTAsICcvJzogMTkxLFxuICAgICAgICAgICAgJ2AnOiAxOTIsICctJzogMTg5LCAnPSc6IDE4NyxcbiAgICAgICAgICAgICc7JzogMTg2LCAnXFwnJzogMjIyLFxuICAgICAgICAgICAgJ1snOiAyMTksICddJzogMjIxLCAnXFxcXCc6IDIyMFxuICAgICAgICB9LFxuICAgICAgICBjb2RlID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBfTUFQW3hdIHx8IHgudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApO1xuICAgICAgICB9LFxuICAgICAgICBfZG93bktleXMgPSBbXTtcblxuICAgIGZvciAoayA9IDE7IGsgPCAyMDsgaysrKSBfTUFQWydmJyArIGtdID0gMTExICsgaztcblxuICAgIC8vIElFIGRvZXNuJ3Qgc3VwcG9ydCBBcnJheSNpbmRleE9mLCBzbyBoYXZlIGEgc2ltcGxlIHJlcGxhY2VtZW50XG4gICAgZnVuY3Rpb24gaW5kZXgoYXJyYXksIGl0ZW0pIHtcbiAgICAgICAgdmFyIGkgPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpLS0pIGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvLyBmb3IgY29tcGFyaW5nIG1vZHMgYmVmb3JlIHVuYXNzaWdubWVudFxuICAgIGZ1bmN0aW9uIGNvbXBhcmVBcnJheShhMSwgYTIpIHtcbiAgICAgICAgaWYgKGExLmxlbmd0aCAhPSBhMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGExW2ldICE9PSBhMltpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBtb2RpZmllck1hcCA9IHtcbiAgICAgICAgMTY6ICdzaGlmdEtleScsXG4gICAgICAgIDE4OiAnYWx0S2V5JyxcbiAgICAgICAgMTc6ICdjdHJsS2V5JyxcbiAgICAgICAgOTE6ICdtZXRhS2V5J1xuICAgIH07XG4gICAgZnVuY3Rpb24gdXBkYXRlTW9kaWZpZXJLZXkoZXZlbnQpIHtcbiAgICAgICAgZm9yIChrIGluIF9tb2RzKSBfbW9kc1trXSA9IGV2ZW50W21vZGlmaWVyTWFwW2tdXTtcbiAgICB9O1xuXG4gICAgLy8gaGFuZGxlIGtleWRvd24gZXZlbnRcbiAgICBmdW5jdGlvbiBkaXNwYXRjaChldmVudCkge1xuICAgICAgICB2YXIga2V5LCBoYW5kbGVyLCBrLCBpLCBtb2RpZmllcnNNYXRjaCwgc2NvcGU7XG4gICAgICAgIGtleSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgICAgaWYgKGluZGV4KF9kb3duS2V5cywga2V5KSA9PSAtMSkge1xuICAgICAgICAgICAgX2Rvd25LZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGEgbW9kaWZpZXIga2V5LCBzZXQgdGhlIGtleS48bW9kaWZpZXJrZXluYW1lPiBwcm9wZXJ0eSB0byB0cnVlIGFuZCByZXR1cm5cbiAgICAgICAgaWYgKGtleSA9PSA5MyB8fCBrZXkgPT0gMjI0KSBrZXkgPSA5MTsgLy8gcmlnaHQgY29tbWFuZCBvbiB3ZWJraXQsIGNvbW1hbmQgb24gR2Vja29cbiAgICAgICAgaWYgKGtleSBpbiBfbW9kcykge1xuICAgICAgICAgICAgX21vZHNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAvLyAnYXNzaWduS2V5JyBmcm9tIGluc2lkZSB0aGlzIGNsb3N1cmUgaXMgZXhwb3J0ZWQgdG8gd2luZG93LmtleVxuICAgICAgICAgICAgZm9yIChrIGluIF9NT0RJRklFUlMpIGlmIChfTU9ESUZJRVJTW2tdID09IGtleSkgYXNzaWduS2V5W2tdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVNb2RpZmllcktleShldmVudCk7XG5cbiAgICAgICAgLy8gc2VlIGlmIHdlIG5lZWQgdG8gaWdub3JlIHRoZSBrZXlwcmVzcyAoZmlsdGVyKCkgY2FuIGNhbiBiZSBvdmVycmlkZGVuKVxuICAgICAgICAvLyBieSBkZWZhdWx0IGlnbm9yZSBrZXkgcHJlc3NlcyBpZiBhIHNlbGVjdCwgdGV4dGFyZWEsIG9yIGlucHV0IGlzIGZvY3VzZWRcbiAgICAgICAgaWYgKCFhc3NpZ25LZXkuZmlsdGVyLmNhbGwodGhpcywgZXZlbnQpKSByZXR1cm47XG5cbiAgICAgICAgLy8gYWJvcnQgaWYgbm8gcG90ZW50aWFsbHkgbWF0Y2hpbmcgc2hvcnRjdXRzIGZvdW5kXG4gICAgICAgIGlmICghKGtleSBpbiBfaGFuZGxlcnMpKSByZXR1cm47XG5cbiAgICAgICAgc2NvcGUgPSBnZXRTY29wZSgpO1xuXG4gICAgICAgIC8vIGZvciBlYWNoIHBvdGVudGlhbCBzaG9ydGN1dFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX2hhbmRsZXJzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBfaGFuZGxlcnNba2V5XVtpXTtcblxuICAgICAgICAgICAgLy8gc2VlIGlmIGl0J3MgaW4gdGhlIGN1cnJlbnQgc2NvcGVcbiAgICAgICAgICAgIGlmIChoYW5kbGVyLnNjb3BlID09IHNjb3BlIHx8IGhhbmRsZXIuc2NvcGUgPT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBtb2RpZmllcnMgbWF0Y2ggaWYgYW55XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzTWF0Y2ggPSBoYW5kbGVyLm1vZHMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgaW4gX21vZHMpXG4gICAgICAgICAgICAgICAgICAgIGlmICgoIV9tb2RzW2tdICYmIGluZGV4KGhhbmRsZXIubW9kcywgK2spID4gLTEpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoX21vZHNba10gJiYgaW5kZXgoaGFuZGxlci5tb2RzLCAraykgPT0gLTEpKSBtb2RpZmllcnNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIGNhbGwgdGhlIGhhbmRsZXIgYW5kIHN0b3AgdGhlIGV2ZW50IGlmIG5lY2Nlc3NhcnlcbiAgICAgICAgICAgICAgICBpZiAoKGhhbmRsZXIubW9kcy5sZW5ndGggPT0gMCAmJiAhX21vZHNbMTZdICYmICFfbW9kc1sxOF0gJiYgIV9tb2RzWzE3XSAmJiAhX21vZHNbOTFdKSB8fCBtb2RpZmllcnNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlci5tZXRob2QoZXZlbnQsIGhhbmRsZXIpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY2FuY2VsQnViYmxlKSBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHVuc2V0IG1vZGlmaWVyIGtleXMgb24ga2V5dXBcbiAgICBmdW5jdGlvbiBjbGVhck1vZGlmaWVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXkgPSBldmVudC5rZXlDb2RlLCBrLFxuICAgICAgICAgICAgaSA9IGluZGV4KF9kb3duS2V5cywga2V5KTtcblxuICAgICAgICAvLyByZW1vdmUga2V5IGZyb20gX2Rvd25LZXlzXG4gICAgICAgIGlmIChpID49IDApIHtcbiAgICAgICAgICAgIF9kb3duS2V5cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IDkzIHx8IGtleSA9PSAyMjQpIGtleSA9IDkxO1xuICAgICAgICBpZiAoa2V5IGluIF9tb2RzKSB7XG4gICAgICAgICAgICBfbW9kc1trZXldID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgaWYgKF9NT0RJRklFUlNba10gPT0ga2V5KSBhc3NpZ25LZXlba10gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNldE1vZGlmaWVycygpIHtcbiAgICAgICAgZm9yIChrIGluIF9tb2RzKSBfbW9kc1trXSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgYXNzaWduS2V5W2tdID0gZmFsc2U7XG4gICAgfTtcblxuICAgIC8vIHBhcnNlIGFuZCBhc3NpZ24gc2hvcnRjdXRcbiAgICBmdW5jdGlvbiBhc3NpZ25LZXkoa2V5LCBzY29wZSwgbWV0aG9kKSB7XG4gICAgICAgIHZhciBrZXlzLCBtb2RzO1xuICAgICAgICBrZXlzID0gZ2V0S2V5cyhrZXkpO1xuICAgICAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9IHNjb3BlO1xuICAgICAgICAgICAgc2NvcGUgPSAnYWxsJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBlYWNoIHNob3J0Y3V0XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gc2V0IG1vZGlmaWVyIGtleXMgaWYgYW55XG4gICAgICAgICAgICBtb2RzID0gW107XG4gICAgICAgICAgICBrZXkgPSBrZXlzW2ldLnNwbGl0KCcrJyk7XG4gICAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBtb2RzID0gZ2V0TW9kcyhrZXkpO1xuICAgICAgICAgICAgICAgIGtleSA9IFtrZXlba2V5Lmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnZlcnQgdG8ga2V5Y29kZSBhbmQuLi5cbiAgICAgICAgICAgIGtleSA9IGtleVswXVxuICAgICAgICAgICAga2V5ID0gY29kZShrZXkpO1xuICAgICAgICAgICAgLy8gLi4uc3RvcmUgaGFuZGxlclxuICAgICAgICAgICAgaWYgKCEoa2V5IGluIF9oYW5kbGVycykpIF9oYW5kbGVyc1trZXldID0gW107XG4gICAgICAgICAgICBfaGFuZGxlcnNba2V5XS5wdXNoKHsgc2hvcnRjdXQ6IGtleXNbaV0sIHNjb3BlOiBzY29wZSwgbWV0aG9kOiBtZXRob2QsIGtleToga2V5c1tpXSwgbW9kczogbW9kcyB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB1bmJpbmQgYWxsIGhhbmRsZXJzIGZvciBnaXZlbiBrZXkgaW4gY3VycmVudCBzY29wZVxuICAgIGZ1bmN0aW9uIHVuYmluZEtleShrZXksIHNjb3BlKSB7XG4gICAgICAgIHZhciBtdWx0aXBsZUtleXMsIGtleXMsXG4gICAgICAgICAgICBtb2RzID0gW10sXG4gICAgICAgICAgICBpLCBqLCBvYmo7XG5cbiAgICAgICAgbXVsdGlwbGVLZXlzID0gZ2V0S2V5cyhrZXkpO1xuXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBtdWx0aXBsZUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGtleXMgPSBtdWx0aXBsZUtleXNbal0uc3BsaXQoJysnKTtcblxuICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIG1vZHMgPSBnZXRNb2RzKGtleXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXkgPSBrZXlzW2tleXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBrZXkgPSBjb2RlKGtleSk7XG5cbiAgICAgICAgICAgIGlmIChzY29wZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBnZXRTY29wZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFfaGFuZGxlcnNba2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBfaGFuZGxlcnNba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG9iaiA9IF9oYW5kbGVyc1trZXldW2ldO1xuICAgICAgICAgICAgICAgIC8vIG9ubHkgY2xlYXIgaGFuZGxlcnMgaWYgY29ycmVjdCBzY29wZSBhbmQgbW9kcyBtYXRjaFxuICAgICAgICAgICAgICAgIGlmIChvYmouc2NvcGUgPT09IHNjb3BlICYmIGNvbXBhcmVBcnJheShvYmoubW9kcywgbW9kcykpIHtcbiAgICAgICAgICAgICAgICAgICAgX2hhbmRsZXJzW2tleV1baV0gPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBrZXkgd2l0aCBjb2RlICdrZXlDb2RlJyBpcyBjdXJyZW50bHkgZG93blxuICAgIC8vIENvbnZlcnRzIHN0cmluZ3MgaW50byBrZXkgY29kZXMuXG4gICAgZnVuY3Rpb24gaXNQcmVzc2VkKGtleUNvZGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoa2V5Q29kZSkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGtleUNvZGUgPSBjb2RlKGtleUNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleChfZG93bktleXMsIGtleUNvZGUpICE9IC0xO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByZXNzZWRLZXlDb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIF9kb3duS2V5cy5zbGljZSgwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSAoZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQpLnRhZ05hbWU7XG4gICAgICAgIC8vIGlnbm9yZSBrZXlwcmVzc2VkIGluIGFueSBlbGVtZW50cyB0aGF0IHN1cHBvcnQga2V5Ym9hcmQgZGF0YSBpbnB1dFxuICAgICAgICByZXR1cm4gISh0YWdOYW1lID09ICdJTlBVVCcgfHwgdGFnTmFtZSA9PSAnU0VMRUNUJyB8fCB0YWdOYW1lID09ICdURVhUQVJFQScpO1xuICAgIH1cblxuICAgIC8vIGluaXRpYWxpemUga2V5Ljxtb2RpZmllcj4gdG8gZmFsc2VcbiAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgYXNzaWduS2V5W2tdID0gZmFsc2U7XG5cbiAgICAvLyBzZXQgY3VycmVudCBzY29wZSAoZGVmYXVsdCAnYWxsJylcbiAgICBmdW5jdGlvbiBzZXRTY29wZShzY29wZSkgeyBfc2NvcGUgPSBzY29wZSB8fCAnYWxsJyB9O1xuICAgIGZ1bmN0aW9uIGdldFNjb3BlKCkgeyByZXR1cm4gX3Njb3BlIHx8ICdhbGwnIH07XG5cbiAgICAvLyBkZWxldGUgYWxsIGhhbmRsZXJzIGZvciBhIGdpdmVuIHNjb3BlXG4gICAgZnVuY3Rpb24gZGVsZXRlU2NvcGUoc2NvcGUpIHtcbiAgICAgICAgdmFyIGtleSwgaGFuZGxlcnMsIGk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gX2hhbmRsZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGVycyA9IF9oYW5kbGVyc1trZXldO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0uc2NvcGUgPT09IHNjb3BlKSBoYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYWJzdHJhY3Qga2V5IGxvZ2ljIGZvciBhc3NpZ24gYW5kIHVuYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0S2V5cyhrZXkpIHtcbiAgICAgICAgdmFyIGtleXM7XG4gICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICBrZXlzID0ga2V5LnNwbGl0KCcsJyk7XG4gICAgICAgIGlmICgoa2V5c1trZXlzLmxlbmd0aCAtIDFdKSA9PSAnJykge1xuICAgICAgICAgICAga2V5c1trZXlzLmxlbmd0aCAtIDJdICs9ICcsJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG5cbiAgICAvLyBhYnN0cmFjdCBtb2RzIGxvZ2ljIGZvciBhc3NpZ24gYW5kIHVuYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0TW9kcyhrZXkpIHtcbiAgICAgICAgdmFyIG1vZHMgPSBrZXkuc2xpY2UoMCwga2V5Lmxlbmd0aCAtIDEpO1xuICAgICAgICBmb3IgKHZhciBtaSA9IDA7IG1pIDwgbW9kcy5sZW5ndGg7IG1pKyspXG4gICAgICAgICAgICBtb2RzW21pXSA9IF9NT0RJRklFUlNbbW9kc1ttaV1dO1xuICAgICAgICByZXR1cm4gbW9kcztcbiAgICB9XG5cbiAgICAvLyBjcm9zcy1icm93c2VyIGV2ZW50c1xuICAgIGZ1bmN0aW9uIGFkZEV2ZW50KG9iamVjdCwgZXZlbnQsIG1ldGhvZCkge1xuICAgICAgICBpZiAob2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbWV0aG9kLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgaWYgKG9iamVjdC5hdHRhY2hFdmVudClcbiAgICAgICAgICAgIG9iamVjdC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZ1bmN0aW9uICgpIHsgbWV0aG9kKHdpbmRvdy5ldmVudCkgfSk7XG4gICAgfTtcblxuICAgIC8vIHNldCB0aGUgaGFuZGxlcnMgZ2xvYmFsbHkgb24gZG9jdW1lbnRcbiAgICBhZGRFdmVudChkb2N1bWVudCwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHsgZGlzcGF0Y2goZXZlbnQpIH0pOyAvLyBQYXNzaW5nIF9zY29wZSB0byBhIGNhbGxiYWNrIHRvIGVuc3VyZSBpdCByZW1haW5zIHRoZSBzYW1lIGJ5IGV4ZWN1dGlvbi4gRml4ZXMgIzQ4XG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsICdrZXl1cCcsIGNsZWFyTW9kaWZpZXIpO1xuXG4gICAgLy8gcmVzZXQgbW9kaWZpZXJzIHRvIGZhbHNlIHdoZW5ldmVyIHRoZSB3aW5kb3cgaXMgKHJlKWZvY3VzZWQuXG4gICAgYWRkRXZlbnQod2luZG93LCAnZm9jdXMnLCByZXNldE1vZGlmaWVycyk7XG5cbiAgICAvLyBzdG9yZSBwcmV2aW91c2x5IGRlZmluZWQga2V5XG4gICAgdmFyIHByZXZpb3VzS2V5ID0gd2luZG93LmtleTtcblxuICAgIC8vIHJlc3RvcmUgcHJldmlvdXNseSBkZWZpbmVkIGtleSBhbmQgcmV0dXJuIHJlZmVyZW5jZSB0byBvdXIga2V5IG9iamVjdFxuICAgIGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgICAgIHZhciBrID0gd2luZG93LmtleTtcbiAgICAgICAgd2luZG93LmtleSA9IHByZXZpb3VzS2V5O1xuICAgICAgICByZXR1cm4gaztcbiAgICB9XG5cbiAgICAvLyBzZXQgd2luZG93LmtleSBhbmQgd2luZG93LmtleS5zZXQvZ2V0L2RlbGV0ZVNjb3BlLCBhbmQgdGhlIGRlZmF1bHQgZmlsdGVyXG4gICAgd2luZG93LmtleSA9IGFzc2lnbktleTtcbiAgICB3aW5kb3cua2V5LnNldFNjb3BlID0gc2V0U2NvcGU7XG4gICAgd2luZG93LmtleS5nZXRTY29wZSA9IGdldFNjb3BlO1xuICAgIHdpbmRvdy5rZXkuZGVsZXRlU2NvcGUgPSBkZWxldGVTY29wZTtcbiAgICB3aW5kb3cua2V5LmZpbHRlciA9IGZpbHRlcjtcbiAgICB3aW5kb3cua2V5LmlzUHJlc3NlZCA9IGlzUHJlc3NlZDtcbiAgICB3aW5kb3cua2V5LmdldFByZXNzZWRLZXlDb2RlcyA9IGdldFByZXNzZWRLZXlDb2RlcztcbiAgICB3aW5kb3cua2V5Lm5vQ29uZmxpY3QgPSBub0NvbmZsaWN0O1xuICAgIHdpbmRvdy5rZXkudW5iaW5kID0gdW5iaW5kS2V5O1xuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSBtb2R1bGUuZXhwb3J0cyA9IGFzc2lnbktleTtcblxufSkodGhpcyk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICB0aGlzLndpZHRoID0gc2l6ZS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcbiAgICB9XG5cbiAgICBpc092ZXJsYXBwaW5nT3RoZXJSZWN0KHJlY3RDbGFzcykge1xuICAgICAgICBjb25zdCBteUJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKClcbiAgICAgICAgY29uc3QgcmVjdCA9IHJlY3RDbGFzcy5nZXRCb3VuZHMoKVxuICAgICAgICBpZiAobXlCb3VuZHMubGVmdCA+IHJlY3QucmlnaHQgfHwgbXlCb3VuZHMucmlnaHQgPCByZWN0LmxlZnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXlCb3VuZHMudG9wID4gcmVjdC5ib3R0b20gfHwgbXlCb3VuZHMuYm90dG9tIDwgcmVjdC50b3ApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICByaWdodDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=