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
            var _this = this;

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
            if (this.playingGame) {
                setTimeout(function () {
                    requestAnimationFrame(_this.animate.bind(_this));
                }, 1000 / 60);
            }
        }
    }, {
        key: 'runOnlineGame',
        value: function runOnlineGame(leftSprite, rightSprite, mySide) {
            var _this2 = this;

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
                _this2.otherPlayer.position = {
                    x: data["x"],
                    y: data["y"]
                };
                _this2.otherPlayer.facingRight = data["otherPlayerFacing"];
                _this2.otherPlayer.jumping = data["otherPlayerJumping"];
            });
            socket.on("updateBallPossesion", function (data) {
                _this2.ball.possession = _this2.otherPlayer;
                socket.emit("registeredPossesionChange", {
                    gameId: _this2.onlineGameId
                });
            });
            socket.on("updateNoBallPossesion", function (data) {
                _this2.ball.possession = null;
                _this2.ball.position = data["position"];
                _this2.ball.velocity = data["velocity"];
            });
            // socket.on("updateBallPos", data => {
            //     this.ball.position = data["position"]
            //     this.ball.velocity = data["velocity"]
            //     this.otherPlayer.facingRight = data["otherPlayerFacing"]
            // })
            socket.on("endGameFromDisconnect", function () {
                _this2.playingGame = false;
                _this2.onlineGameId = null;
                setTimeout(function () {
                    _this2.showMenu();
                }, 1000);
            });

            this.runOnline();
        }
    }, {
        key: 'runOnline',
        value: function runOnline() {
            var _this3 = this;

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
                setTimeout(function () {
                    requestAnimationFrame(_this3.runOnline.bind(_this3));
                }, 1000 / 60);
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
            var _this4 = this;

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
                _this4.showMenu();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9jb3VydC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9ob29wLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvbWVudV9zY3JlZW5zL2NoYXJhY3Rlcl9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9tZW51X3NjcmVlbnMvbWFpbl9tZW51LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvb25saW5lX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllcjIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMva2V5bWFzdGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvcmVjdC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhc0JhY2tncm91bmQiLCJ3aW5kb3ciLCJlIiwiaW5kZXhPZiIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsIk5CQUphbUdhbWUiLCJDT05TVEFOVFMiLCJSQURJVVMiLCJHUkFWSVRZIiwiQk9VTkNFX1JFVEVOVElPTiIsIkRSSUJCTEVfU1BFRUQiLCJCYWxsIiwiZGltZW5zaW9ucyIsImNvdXJ0IiwibGVmdEhvb3AiLCJyaWdodEhvb3AiLCJnYW1lSWQiLCJiYWxsIiwicG9zaXRpb24iLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwidmVsb2NpdHkiLCJjb2xvciIsInBvc3Nlc3Npb24iLCJub1RvdWNoIiwicG93ZXIiLCJjdHgiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwicmFkaXVzIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsInBsYXllciIsInNvY2tldCIsImVtaXQiLCJmcm9tU29ja2V0IiwiaWQiLCJzaG9vdGluZ1BsYXllciIsImZhY2luZ1JpZ2h0Iiwic2hvb3RpbmdUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbGVhc2VCYWxsIiwic2NvcmVQb3NpdGlvbiIsInNjb3JlSGl0Ym94IiwiaHlwb3QiLCJudW1iZXJPZkZyYW1lcyIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsImRpZmYiLCJhZGp1c3RlZFgiLCJyZW1vdmVQb3NzZXNzaW9uIiwiZmFsbCIsIm1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbiIsImNoZWNrQm91bmRzIiwianVtcGluZyIsIkNpcmNsZSIsIkNPVVJUX0ZMT09SIiwiQ09VUlRfV0lEVEgiLCJIT09QX1lfTVVMVElQTElFUiIsIkhPT1BfSEVJR0hUIiwiSE9PUF9XSURUSCIsIkhPT1BfWF9ESVNUQU5DRSIsIkJBQ0tCT0FSRF9XSURUSCIsIkJBQ0tCT0FSRF9IRUlHSFQiLCJDb3VydCIsImJhY2tncm91bmRDYXZhcyIsImhvb3BMZWZ0UG9zaXRpb24iLCJob29wUmlnaHRQb3NpdGlvbiIsImxlZnRIb29wSW1hZ2UiLCJJbWFnZSIsInJpZ2h0SG9vcEltYWdlIiwic3JjIiwiY291cnRJbWFnZSIsInNldHVwQmFja2dyb3VuZENvdXJ0IiwiZ2V0Q29udGV4dCIsImZpbGxSZWN0Iiwib25sb2FkIiwiZHJhd0ltYWdlIiwiUmVjdCIsImJhY2tncm91bmRDYW52YXMiLCJtYWluTWVudSIsIk1haW5NZW51Iiwic3RhcnRHYW1lIiwiYmluZCIsInN0YXJ0T25saW5lR2FtZSIsInBsYXlpbmdHYW1lIiwicmVuZGVyTWVudSIsInNldHVwS2V5SGFuZGxlcnMiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsZWZ0U3ByaXRlIiwicmlnaHRTcHJpdGUiLCJyZXN0YXJ0IiwibXlTaWRlIiwib25saW5lR2FtZUlkIiwicnVuT25saW5lR2FtZSIsIkhvb3AiLCJzY29yZWJvYXJkIiwiU2NvcmVib2FyZCIsIlBsYXllciIsInBsYXllcjIiLCJQbGF5ZXIyIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImdhbWVPdmVyIiwiZGlzcGxheVdpbm5lciIsIm15UGxheWVyIiwiT25saW5lUGxheWVyIiwib3RoZXJQbGF5ZXIiLCJvbiIsImRhdGEiLCJzaG93TWVudSIsInJ1bk9ubGluZSIsIm90aGVyUGxheWVyRmFjaW5nIiwib3RoZXJQbGF5ZXJKdW1waW5nIiwidGltZUxlZnQiLCJ0ZXh0Iiwic2NvcmUiLCJsb2MiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZVRleHQiLCJob29wU2lkZSIsImJhY2tib2FyZCIsIkJhY2tib2FyZCIsIlNjb3JlSGl0Ym94IiwianVzdFNjb3JlZCIsImNoZWNrQmFsbENvbGxpc2lvbiIsImlzT3ZlcmxhcHBpbmdSZWN0IiwiaG9vcCIsIkNoYXJhY3RlclNlbGVjdCIsInNlbGVjdGVkQ2hhcmFjdGVycyIsImxlZnRTZWxlY3RlZCIsInJpZ2h0U2VsZWN0ZWQiLCJjaGFyYWN0ZXJzIiwibmFtZSIsImxlZnRDaGFyIiwicmlnaHRDaGFyIiwibGVmdFJlYWR5IiwicmlnaHRSZWFkeSIsImxlZnRQbGF5ZXJJZCIsInJpZ2h0UGxheWVySWQiLCJpc1BsYXlpbmdMZWZ0IiwiaXNQbGF5aW5nUmlnaHQiLCJrZXkiLCJ1bmJpbmQiLCJsZWZ0U2lkZUNoYXIiLCJvbmxpbmVNb2RlIiwicmlnaHRTaWRlQ2hhciIsImxlbmd0aCIsInNlbGVjdGVkT3B0aW9uIiwib3B0aW9ucyIsImNoYXJhY3RlclNlbGVjdCIsInNlbGVjdGluZ0NoYXJhY3RlcnMiLCJsZWZ0U3JjIiwicmlnaHRTcmMiLCJmb3JFYWNoIiwib3B0aW9uIiwiaSIsIm1lYXN1cmVUZXh0IiwiYWJzIiwiUExBWUVSX1dJRFRIIiwiUExBWUVSX0hFSUdIVCIsIk1PVkVTUEVFRCIsIkpVTVBfSEVJR0hUIiwic3ByaXRlU3JjIiwic3RhcnRTaWRlIiwiYWN0aXZlIiwic3ByaXRlIiwiaXNQcmVzc2VkIiwicHJlZm9ybUFjdGlvbiIsImNoZWNrQmFsbCIsImhhbmRsZUdyYXZpdHkiLCJzaG9vdCIsImNsYWltUG9zc2Vzc2lvbiIsImNvdW50RG93biIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJlY3QiLCJkaXN0WCIsImRpc3RZIiwiZHgiLCJkeSIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImdsb2JhbCIsImsiLCJfaGFuZGxlcnMiLCJfbW9kcyIsIl9zY29wZSIsIl9NT0RJRklFUlMiLCJzaGlmdCIsImFsdCIsImN0cmwiLCJjb250cm9sIiwiY29tbWFuZCIsIl9NQVAiLCJiYWNrc3BhY2UiLCJ0YWIiLCJjbGVhciIsImVudGVyIiwiZXNjIiwiZXNjYXBlIiwic3BhY2UiLCJ1cCIsImRvd24iLCJkZWwiLCJob21lIiwiZW5kIiwicGFnZXVwIiwicGFnZWRvd24iLCJjb2RlIiwidG9VcHBlckNhc2UiLCJjaGFyQ29kZUF0IiwiX2Rvd25LZXlzIiwiaW5kZXgiLCJhcnJheSIsIml0ZW0iLCJjb21wYXJlQXJyYXkiLCJhMSIsImEyIiwibW9kaWZpZXJNYXAiLCJ1cGRhdGVNb2RpZmllcktleSIsImV2ZW50IiwiZGlzcGF0Y2giLCJoYW5kbGVyIiwibW9kaWZpZXJzTWF0Y2giLCJzY29wZSIsInB1c2giLCJhc3NpZ25LZXkiLCJmaWx0ZXIiLCJjYWxsIiwiZ2V0U2NvcGUiLCJtb2RzIiwibWV0aG9kIiwicmV0dXJuVmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJjYW5jZWxCdWJibGUiLCJjbGVhck1vZGlmaWVyIiwic3BsaWNlIiwicmVzZXRNb2RpZmllcnMiLCJrZXlzIiwiZ2V0S2V5cyIsInVuZGVmaW5lZCIsInNwbGl0IiwiZ2V0TW9kcyIsInNob3J0Y3V0IiwidW5iaW5kS2V5IiwibXVsdGlwbGVLZXlzIiwiaiIsIm9iaiIsImdldFByZXNzZWRLZXlDb2RlcyIsInNsaWNlIiwidGFnTmFtZSIsInRhcmdldCIsInNyY0VsZW1lbnQiLCJzZXRTY29wZSIsImRlbGV0ZVNjb3BlIiwiaGFuZGxlcnMiLCJyZXBsYWNlIiwibWkiLCJhZGRFdmVudCIsIm9iamVjdCIsImF0dGFjaEV2ZW50IiwicHJldmlvdXNLZXkiLCJub0NvbmZsaWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsInNpemUiLCJyZWN0Q2xhc3MiLCJteUJvdW5kcyIsImdldEJvdW5kcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7QUFFQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsUUFBTUMsU0FBU0YsU0FBU0csY0FBVCxDQUF3QixjQUF4QixDQUFmO0FBQ0EsUUFBTUMsbUJBQW1CSixTQUFTRyxjQUFULENBQXdCLG9CQUF4QixDQUF6Qjs7QUFFQTtBQUNBRSxXQUFPSixnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFVSyxDQUFWLEVBQWE7QUFDNUM7QUFDQSxZQUFJLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQkMsT0FBckIsQ0FBNkJELEVBQUVFLE9BQS9CLElBQTBDLENBQUMsQ0FBL0MsRUFBa0Q7QUFDOUNGLGNBQUVHLGNBQUY7QUFDSDtBQUNKLEtBTEQsRUFLRyxLQUxIO0FBTUEsUUFBSUMsY0FBSixDQUFlUixNQUFmLEVBQXVCRSxnQkFBdkI7QUFDSCxDQVpELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1PLFlBQVk7QUFDZEMsWUFBUSxFQURNO0FBRWRDLGFBQVMsR0FGSztBQUdkQyxzQkFBa0IsR0FISjtBQUlkQyxtQkFBZTtBQUpELENBQWxCOztJQU9xQkMsSTs7O0FBQ2pCLGtCQUFZQyxVQUFaLEVBQXdCQyxLQUF4QixFQUErQkMsUUFBL0IsRUFBeUNDLFNBQXpDLEVBQW9EQyxNQUFwRCxFQUE0RDtBQUFBOztBQUFBLGdIQUNsRFYsVUFBVUMsTUFEd0M7O0FBRXhELGNBQUtNLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0UsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxjQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGNBQUtELFFBQUwsQ0FBY0csSUFBZDtBQUNBLGNBQUtGLFNBQUwsQ0FBZUUsSUFBZjs7QUFFQSxjQUFLRCxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsY0FBS0UsUUFBTCxHQUFnQjtBQUNaQyxlQUFHLE1BQUtOLEtBQUwsQ0FBV08sS0FBWCxHQUFtQixDQURWO0FBRVpDLGVBQUcsTUFBS1QsVUFBTCxDQUFnQlUsTUFBaEIsR0FBeUI7QUFGaEIsU0FBaEI7QUFJQSxjQUFLQyxRQUFMLEdBQWdCO0FBQ1pKLGVBQUcsQ0FEUztBQUVaRSxlQUFHO0FBRlMsU0FBaEI7QUFJQSxjQUFLRyxLQUFMLEdBQWEsU0FBYjtBQUNBLGNBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxjQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLGNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBdEJ3RDtBQXVCM0Q7Ozs7Z0NBRU9DLEcsRUFBSztBQUNULGlCQUFLQyxJQUFMO0FBQ0FELGdCQUFJRSxTQUFKO0FBQ0FGLGdCQUFJRyxHQUFKLENBQ0ksS0FBS2IsUUFBTCxDQUFjQyxDQURsQixFQUVJLEtBQUtELFFBQUwsQ0FBY0csQ0FGbEIsRUFHSSxLQUFLVyxNQUhULEVBSUksQ0FKSixFQUtJQyxLQUFLQyxFQUFMLEdBQVUsQ0FMZDtBQU1BTixnQkFBSU8sU0FBSixHQUFnQixLQUFLWCxLQUFyQjtBQUNBSSxnQkFBSVEsSUFBSjtBQUNBUixnQkFBSVMsU0FBSjtBQUNIOzs7d0NBRWVDLE0sRUFBUTtBQUNwQixnQkFBSSxDQUFDLEtBQUtaLE9BQUwsQ0FBYVksT0FBT2QsS0FBcEIsQ0FBTCxFQUFpQztBQUM3QixxQkFBS0MsVUFBTCxHQUFrQmEsTUFBbEI7QUFDQUMsdUJBQU9DLElBQVAsQ0FBWSxtQkFBWixFQUFpQztBQUM3QnhCLDRCQUFRLEtBQUtBLE1BRGdCO0FBRTdCeUIsZ0NBQVlGLE9BQU9HO0FBRlUsaUJBQWpDO0FBSUg7QUFDSjs7O2dDQUdRO0FBQUE7O0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBLGlCQUFLZixLQUFMLElBQWMsQ0FBZDs7QUFFQSxnQkFBTWdCLGlCQUFpQixLQUFLbEIsVUFBNUI7QUFDQSxpQkFBS1AsUUFBTCxDQUFjQyxDQUFkLEdBQWtCd0IsZUFBZUMsV0FBZixHQUNiRCxlQUFlekIsUUFBZixDQUF3QkMsQ0FBeEIsR0FBNEJ3QixlQUFldkIsS0FBM0MsR0FBbUQsS0FBS1ksTUFEM0MsR0FFYlcsZUFBZXpCLFFBQWYsQ0FBd0JDLENBQXhCLEdBQTRCLEtBQUthLE1BRnRDO0FBR0EsaUJBQUtkLFFBQUwsQ0FBY0csQ0FBZCxHQUFrQnNCLGVBQWV6QixRQUFmLENBQXdCRyxDQUExQzs7QUFFQSxnQkFBSSxLQUFLd0IsZUFBTCxJQUF3QixLQUFLbEIsS0FBTCxHQUFhLEVBQXpDLEVBQTZDO0FBQ3pDbUIsNkJBQWEsS0FBS0QsZUFBbEI7QUFDSDtBQUNELGdCQUFJLEtBQUtsQixLQUFMLEdBQWEsRUFBakIsRUFBcUI7QUFDakIscUJBQUtrQixlQUFMLEdBQXVCRSxXQUFXLFlBQU07QUFDcEMsMkJBQUtDLFdBQUw7QUFDSCxpQkFGc0IsRUFFcEIsRUFGb0IsQ0FBdkI7QUFHSDtBQUVKOzs7c0NBRWM7QUFBQTs7QUFDWCxnQkFBTUwsaUJBQWlCLEtBQUtsQixVQUE1Qjs7QUFFQSxnQkFBTXdCLGdCQUFnQk4sZUFBZUMsV0FBZixHQUNsQjtBQUNJekIsbUJBQUcsS0FBS0osU0FBTCxDQUFlbUMsV0FBZixDQUEyQmhDLFFBQTNCLENBQW9DQyxDQUFwQyxHQUF5QyxLQUFLSixTQUFMLENBQWVtQyxXQUFmLENBQTJCOUIsS0FBM0IsR0FBbUMsQ0FEbkY7QUFFSUMsbUJBQUcsS0FBS04sU0FBTCxDQUFlbUMsV0FBZixDQUEyQmhDLFFBQTNCLENBQW9DRztBQUYzQyxhQURrQixHQU1sQjtBQUNJRixtQkFBRyxLQUFLTCxRQUFMLENBQWNvQyxXQUFkLENBQTBCaEMsUUFBMUIsQ0FBbUNDLENBQW5DLEdBQXdDLEtBQUtKLFNBQUwsQ0FBZW1DLFdBQWYsQ0FBMkI5QixLQUEzQixHQUFtQyxDQURsRjtBQUVJQyxtQkFBRyxLQUFLUCxRQUFMLENBQWNvQyxXQUFkLENBQTBCaEMsUUFBMUIsQ0FBbUNHO0FBRjFDLGFBTko7O0FBWUE7QUFDQSxnQkFBSSxNQUFNWSxLQUFLa0IsS0FBTCxDQUFXLEtBQUtqQyxRQUFMLENBQWNDLENBQWQsR0FBa0I4QixjQUFjOUIsQ0FBM0MsRUFBOEMsS0FBS0QsUUFBTCxDQUFjRyxDQUFkLEdBQWtCNEIsY0FBYzVCLENBQTlFLENBQVYsRUFBNEY7QUFDeEYsb0JBQU0rQixpQkFBaUIsRUFBdkI7QUFDQSxvQkFBTUMsWUFBWSxDQUFDSixjQUFjOUIsQ0FBZCxHQUFrQixLQUFLRCxRQUFMLENBQWNDLENBQWpDLElBQXNDaUMsY0FBeEQ7QUFDQSxvQkFBTUUsWUFBWSxDQUFFLENBQUNMLGNBQWM1QixDQUFmLEdBQW1CLEtBQUtILFFBQUwsQ0FBY0csQ0FBbEMsR0FBdUMsTUFBTSxDQUFDZixVQUFVRSxPQUFqQixJQUE0QjRDLGlCQUFpQkEsY0FBN0MsQ0FBeEMsSUFBd0dBLGNBQTFIOztBQUVBLG9CQUFNRyxPQUFPLENBQUMsS0FBSzVCLEtBQUwsR0FBYSxFQUFkLElBQW9CLEVBQWpDO0FBQ0Esb0JBQU02QixZQUFZYixlQUFlQyxXQUFmLEdBQ2RTLFlBQVlFLElBREUsR0FHZEYsWUFBWUUsSUFIaEI7QUFLQSxxQkFBS2hDLFFBQUwsR0FBZ0I7QUFDWkosdUJBQUdxQyxTQURTO0FBRVpuQyx1QkFBR2lDO0FBRlMsaUJBQWhCO0FBSUgsYUFmRCxNQWVPO0FBQ0g7QUFDQSxvQkFBTUYsa0JBQWlCLEVBQXZCOztBQUVBLG9CQUFNQyxhQUFZLENBQUNKLGNBQWM5QixDQUFkLEdBQWtCLEtBQUtELFFBQUwsQ0FBY0MsQ0FBakMsSUFBc0NpQyxlQUF4RDtBQUNBLG9CQUFNRSxhQUFZLENBQUUsQ0FBQ0wsY0FBYzVCLENBQWYsR0FBbUIsS0FBS0gsUUFBTCxDQUFjRyxDQUFsQyxHQUF1QyxNQUFNLENBQUNmLFVBQVVFLE9BQWpCLElBQTRCNEMsa0JBQWlCQSxlQUE3QyxDQUF4QyxJQUF3R0EsZUFBMUg7O0FBRUEsb0JBQU1HLFFBQU8sQ0FBQyxLQUFLNUIsS0FBTCxHQUFhLEVBQWQsSUFBb0IsQ0FBakM7QUFDQSxvQkFBTTZCLGFBQVliLGVBQWVDLFdBQWYsR0FDZFMsYUFBWUUsS0FERSxHQUdkRixhQUFZRSxLQUhoQjtBQUtBLHFCQUFLaEMsUUFBTCxHQUFnQjtBQUNaSix1QkFBR3FDLFVBRFM7QUFFWm5DLHVCQUFHaUM7QUFGUyxpQkFBaEI7QUFLSDs7QUFFRCxpQkFBSzVCLE9BQUwsQ0FBYWlCLGVBQWVuQixLQUE1QixJQUFxQyxJQUFyQztBQUNBdUIsdUJBQVcsWUFBTTtBQUNiLHVCQUFLckIsT0FBTCxDQUFhaUIsZUFBZW5CLEtBQTVCLElBQXFDLEtBQXJDO0FBQ0gsYUFGRCxFQUVHLEdBRkg7O0FBSUEsaUJBQUtHLEtBQUwsR0FBYSxDQUFiO0FBQ0EsaUJBQUs4QixnQkFBTDtBQUVIOzs7MkNBRWtCO0FBQ2YsaUJBQUtoQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0FjLG1CQUFPQyxJQUFQLENBQVksc0JBQVosRUFBb0M7QUFDaEN4Qix3QkFBUSxLQUFLQSxNQURtQjtBQUVoQ3lCLDRCQUFZRixPQUFPRyxFQUZhO0FBR2hDbkIsMEJBQVUsS0FBS0EsUUFIaUI7QUFJaENMLDBCQUFVLEtBQUtBO0FBSmlCLGFBQXBDO0FBTUg7OzsrQkFFTTs7QUFFSCxnQkFBSSxDQUFDLEtBQUtPLFVBQVYsRUFBc0I7QUFDbEIscUJBQUtpQyxJQUFMO0FBRUgsYUFIRCxNQUdPO0FBQ0gscUJBQUtDLHdCQUFMO0FBQ0g7O0FBRUQsaUJBQUtDLFdBQUw7QUFDSDs7O21EQUUwQjtBQUN2QixpQkFBSzFDLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLTSxVQUFMLENBQWdCbUIsV0FBaEIsR0FDYixLQUFLbkIsVUFBTCxDQUFnQlAsUUFBaEIsQ0FBeUJDLENBQXpCLEdBQTZCLEtBQUtNLFVBQUwsQ0FBZ0JMLEtBRGhDLEdBQzBDLEtBQUtLLFVBQUwsQ0FBZ0JQLFFBQWhCLENBQXlCQyxDQURyRjs7QUFHQSxnQkFBSSxLQUFLTSxVQUFMLENBQWdCb0MsT0FBcEIsRUFBNkI7QUFDekI7QUFDQSxxQkFBSzNDLFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixLQUFLSSxVQUFMLENBQWdCUCxRQUFoQixDQUF5QkcsQ0FBekIsR0FBNkIsS0FBS0ksVUFBTCxDQUFnQkgsTUFBaEIsR0FBeUIsQ0FBeEU7QUFFSCxhQUpELE1BSU87QUFDSDtBQUNBLG9CQUFJLEtBQUtKLFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixLQUFLSSxVQUFMLENBQWdCUCxRQUFoQixDQUF5QkcsQ0FBekIsR0FBNkIsS0FBS0ksVUFBTCxDQUFnQkgsTUFBaEIsR0FBeUIsQ0FBNUUsRUFBK0U7QUFDM0UseUJBQUtDLFFBQUwsQ0FBY0YsQ0FBZCxHQUFrQixDQUFDZixVQUFVSSxhQUE3QjtBQUNILGlCQUZELE1BRU8sSUFBSSxLQUFLUSxRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS0ksVUFBTCxDQUFnQlAsUUFBaEIsQ0FBeUJHLENBQXpCLEdBQTZCLEtBQUtJLFVBQUwsQ0FBZ0JILE1BQTdDLEdBQXNELEtBQUtVLE1BQWpGLEVBQXlGO0FBQzVGLHlCQUFLVCxRQUFMLENBQWNGLENBQWQsR0FBa0JmLFVBQVVJLGFBQTVCO0FBQ0g7QUFDRCxxQkFBS1EsUUFBTCxDQUFjRyxDQUFkLElBQW1CLEtBQUtFLFFBQUwsQ0FBY0YsQ0FBakM7QUFDSDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7OzsrQkFHTztBQUNKLGlCQUFLSCxRQUFMLENBQWNHLENBQWQsSUFBbUIsS0FBS0UsUUFBTCxDQUFjRixDQUFqQztBQUNBLGlCQUFLSCxRQUFMLENBQWNDLENBQWQsSUFBbUIsS0FBS0ksUUFBTCxDQUFjSixDQUFqQztBQUNBO0FBQ0E7QUFDQSxnQkFBSSxLQUFLRCxRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS1csTUFBdkIsR0FBZ0MsS0FBS25CLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQkcsQ0FBeEQsRUFBMkQ7QUFDdkQscUJBQUtFLFFBQUwsQ0FBY0YsQ0FBZCxJQUFtQmYsVUFBVUUsT0FBN0I7QUFDQTtBQUNILGFBSEQsTUFHTyxJQUFJLEtBQUtlLFFBQUwsQ0FBY0YsQ0FBZCxHQUFrQixDQUF0QixFQUF5QjtBQUM1QixxQkFBS0UsUUFBTCxDQUFjRixDQUFkLEdBQWtCLENBQUMsS0FBS0UsUUFBTCxDQUFjRixDQUFmLEdBQW1CZixVQUFVRyxnQkFBL0M7QUFDSDtBQUNKOzs7c0NBR2E7QUFDVixnQkFBSSxLQUFLUyxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS04sS0FBTCxDQUFXTyxLQUFYLEdBQW1CLEtBQUtZLE1BQTlDLEVBQXNEO0FBQ2xELHFCQUFLZCxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS04sS0FBTCxDQUFXTyxLQUFYLEdBQW1CLEtBQUtZLE1BQTFDO0FBQ0EscUJBQUtULFFBQUwsQ0FBY0osQ0FBZCxHQUFrQixDQUFDLEtBQUtJLFFBQUwsQ0FBY0osQ0FBakM7QUFDSCxhQUhELE1BR08sSUFBSSxLQUFLRCxRQUFMLENBQWNDLENBQWQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFDNUIscUJBQUtELFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixDQUFsQjtBQUNBLHFCQUFLSSxRQUFMLENBQWNKLENBQWQsR0FBa0IsQ0FBQyxLQUFLSSxRQUFMLENBQWNKLENBQWpDO0FBQ0g7QUFDSjs7OztFQWhSNkIyQyxnQjs7a0JBQWJuRCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RyQjs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUwsWUFBWTtBQUNkeUQsaUJBQWEsSUFEQztBQUVkQyxpQkFBYSxDQUZDO0FBR2RDLHVCQUFtQixHQUhMO0FBSWRDLGlCQUFhLEVBSkM7QUFLZEMsZ0JBQVksRUFMRTtBQU1kQyxxQkFBaUIsRUFOSDtBQU9kQyxxQkFBaUIsRUFQSDtBQVFkQyxzQkFBa0I7QUFSSixDQUFsQjs7SUFXcUJDLEs7OztBQUNqQixtQkFBWTNELFVBQVosRUFBd0I0RCxlQUF4QixFQUF5QztBQUFBOztBQUFBLGtIQUMvQixFQUFFcEQsT0FBT1IsV0FBV1EsS0FBcEIsRUFBMkJFLFFBQVFoQixVQUFVMEQsV0FBN0MsRUFEK0I7O0FBRXJDLGNBQUtwRCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtNLFFBQUwsR0FBZ0I7QUFDWkMsZUFBRyxDQURTO0FBRVpFLGVBQUdULFdBQVdVLE1BQVgsR0FBb0JoQixVQUFVeUQ7QUFGckIsU0FBaEI7QUFJQSxjQUFLVSxnQkFBTCxHQUF3QjtBQUNwQnRELGVBQUcsSUFBSWIsVUFBVThELGVBQWQsR0FBZ0MsQ0FEZjtBQUVwQi9DLGVBQUdULFdBQVdVLE1BQVgsR0FBb0JoQixVQUFVMkQ7QUFGYixTQUF4QjtBQUlBLGNBQUtTLGlCQUFMLEdBQXlCO0FBQ3JCdkQsZUFBR1AsV0FBV1EsS0FBWCxHQUFtQmQsVUFBVThELGVBQTdCLEdBQStDOUQsVUFBVTZELFVBQXpELEdBQXNFN0QsVUFBVStELGVBRDlEO0FBRXJCaEQsZUFBR1QsV0FBV1UsTUFBWCxHQUFvQmhCLFVBQVUyRDtBQUZaLFNBQXpCO0FBSUEsY0FBS1UsYUFBTCxHQUFxQixJQUFJQyxLQUFKLEVBQXJCO0FBQ0EsY0FBS0MsY0FBTCxHQUFzQixJQUFJRCxLQUFKLEVBQXRCO0FBQ0EsY0FBS0QsYUFBTCxDQUFtQkcsR0FBbkIsR0FBeUIsZ0NBQXpCO0FBQ0EsY0FBS0QsY0FBTCxDQUFvQkMsR0FBcEIsR0FBMEIsaUNBQTFCOztBQUVBLGNBQUt0RCxLQUFMLEdBQWEsT0FBYjtBQUNBLGNBQUt1RCxVQUFMLEdBQWtCLElBQUlILEtBQUosRUFBbEI7QUFDQSxjQUFLRyxVQUFMLENBQWdCRCxHQUFoQixHQUFzQixnQ0FBdEI7QUFDQSxjQUFLRSxvQkFBTCxDQUEwQlIsZUFBMUI7QUF2QnFDO0FBd0J4Qzs7Ozs2Q0FFb0IzRSxNLEVBQVE7QUFBQTs7QUFDekIsZ0JBQU0rQixNQUFNL0IsT0FBT29GLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBckQsZ0JBQUlPLFNBQUosR0FBZ0IsUUFBaEI7QUFDQVAsZ0JBQUlzRCxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixLQUFLdEUsVUFBTCxDQUFnQlEsS0FBbkMsRUFBMEMsS0FBS1IsVUFBTCxDQUFnQlUsTUFBMUQ7QUFDQSxpQkFBS3lELFVBQUwsQ0FBZ0JJLE1BQWhCLEdBQXlCLFlBQU07QUFDM0J2RCxvQkFBSXdELFNBQUosQ0FBYyxPQUFLTCxVQUFuQixFQUNJLE9BQUs3RCxRQUFMLENBQWNDLENBQWQsR0FBa0IsT0FBSzRELFVBQUwsQ0FBZ0IzRCxLQUFoQixHQUF3QixFQUQ5QyxFQUVJLE9BQUtGLFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixPQUFLMEQsVUFBTCxDQUFnQnpELE1BQWhCLEdBQXlCLENBRi9DLEVBR0ksT0FBS0YsS0FBTCxHQUFhLE9BQUsyRCxVQUFMLENBQWdCM0QsS0FBaEIsR0FBd0IsQ0FIekMsRUFJSSxPQUFLMkQsVUFBTCxDQUFnQnpELE1BSnBCO0FBS0gsYUFORDtBQU9BLGlCQUFLcUQsYUFBTCxDQUFtQlEsTUFBbkIsR0FBNEIsWUFBTTtBQUM5QnZELG9CQUFJd0QsU0FBSixDQUFjLE9BQUtULGFBQW5CLEVBQ0ksT0FBS0YsZ0JBQUwsQ0FBc0J0RCxDQUQxQixFQUVJLE9BQUtzRCxnQkFBTCxDQUFzQnBELENBQXRCLElBQTJCZixVQUFVNEQsV0FBVixHQUF3QixDQUFuRCxDQUZKLEVBR0k1RCxVQUFVNkQsVUFBVixHQUF1QjdELFVBQVUrRCxlQUFqQyxHQUFtRCxFQUh2RCxFQUlJL0QsVUFBVTRELFdBQVYsR0FBd0I1RCxVQUFVZ0UsZ0JBSnRDO0FBS0gsYUFORDtBQU9BLGlCQUFLTyxjQUFMLENBQW9CTSxNQUFwQixHQUE2QixZQUFNO0FBQy9CdkQsb0JBQUl3RCxTQUFKLENBQWMsT0FBS1AsY0FBbkIsRUFDSSxPQUFLSCxpQkFBTCxDQUF1QnZELENBRDNCLEVBRUksT0FBS3VELGlCQUFMLENBQXVCckQsQ0FBdkIsSUFBNEJmLFVBQVU0RCxXQUFWLEdBQXdCLENBQXBELENBRkosRUFHSTVELFVBQVU2RCxVQUFWLEdBQXVCN0QsVUFBVStELGVBQWpDLEdBQW1ELEVBSHZELEVBSUkvRCxVQUFVNEQsV0FBVixHQUF3QjVELFVBQVVnRSxnQkFKdEM7QUFLSCxhQU5EO0FBUUg7OztnQ0FFTzFDLEcsRUFBSztBQUNUO0FBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7Ozs7RUEvRDhCeUQsYzs7a0JBQWRkLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCbEUsVTtBQUNqQix3QkFBWVIsTUFBWixFQUFvQnlGLGdCQUFwQixFQUFzQztBQUFBOztBQUNsQyxhQUFLMUQsR0FBTCxHQUFXL0IsT0FBT29GLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWDtBQUNBLGFBQUtLLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxhQUFLMUUsVUFBTCxHQUFrQixFQUFFUSxPQUFPdkIsT0FBT3VCLEtBQWhCLEVBQXVCRSxRQUFRekIsT0FBT3lCLE1BQXRDLEVBQWxCO0FBQ0EsYUFBS2lFLFFBQUwsR0FBZ0IsSUFBSUMsbUJBQUosQ0FBYSxLQUFLNUUsVUFBbEIsRUFBOEIsS0FBSzZFLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUE5QixFQUF5RCxLQUFLQyxlQUFMLENBQXFCRCxJQUFyQixDQUEwQixJQUExQixDQUF6RCxDQUFoQjtBQUNBLGFBQUtFLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxhQUFLQyxVQUFMO0FBQ0g7Ozs7bUNBRVU7QUFDUCxpQkFBS04sUUFBTCxDQUFjTyxnQkFBZDtBQUNBLGlCQUFLRCxVQUFMLENBQWdCLEtBQUtqRSxHQUFyQjtBQUNIOzs7cUNBRWE7QUFDVixpQkFBSzJELFFBQUwsQ0FBY1EsTUFBZCxDQUFxQixLQUFLbkUsR0FBMUI7QUFDQSxnQkFBSSxDQUFDLEtBQUtnRSxXQUFWLEVBQXVCSSxzQkFBc0IsS0FBS0gsVUFBTCxDQUFnQkgsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBdEI7QUFDMUI7OztrQ0FFVU8sVSxFQUFZQyxXLEVBQWE7QUFDaEMsaUJBQUtOLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxpQkFBS08sT0FBTCxDQUFhRixVQUFiLEVBQXlCQyxXQUF6QjtBQUNIOzs7d0NBRWVELFUsRUFBWUMsVyxFQUFhRSxNLEVBQVFwRixNLEVBQVE7QUFDckQsaUJBQUs0RSxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsaUJBQUtTLFlBQUwsR0FBb0JyRixNQUFwQjtBQUNBLGlCQUFLc0YsYUFBTCxDQUFtQkwsVUFBbkIsRUFBK0JDLFdBQS9CLEVBQTRDRSxNQUE1QztBQUNIOzs7Z0NBRU9ILFUsRUFBWUMsVyxFQUFhO0FBQzdCO0FBQ0EsaUJBQUtyRixLQUFMLEdBQWEsSUFBSTBELGVBQUosQ0FBVSxLQUFLM0QsVUFBZixFQUEyQixLQUFLMEUsZ0JBQWhDLENBQWI7QUFDQSxpQkFBS3hFLFFBQUwsR0FBZ0IsSUFBSXlGLGNBQUosQ0FBUyxLQUFLM0YsVUFBZCxFQUEwQixNQUExQixDQUFoQjtBQUNBLGlCQUFLRyxTQUFMLEdBQWlCLElBQUl3RixjQUFKLENBQVMsS0FBSzNGLFVBQWQsRUFBMEIsT0FBMUIsQ0FBakI7QUFDQSxpQkFBS0ssSUFBTCxHQUFZLElBQUlOLGNBQUosQ0FBUyxLQUFLQyxVQUFkLEVBQTBCLEtBQUtDLEtBQS9CLEVBQXNDLEtBQUtDLFFBQTNDLEVBQXFELEtBQUtDLFNBQTFELENBQVo7O0FBRUEsaUJBQUt5RixVQUFMLEdBQWtCLElBQUlDLG9CQUFKLENBQWUsS0FBSzdGLFVBQXBCLEVBQWdDLEtBQUtFLFFBQXJDLEVBQStDLEtBQUtDLFNBQXBELENBQWxCOztBQUVBLGlCQUFLdUIsTUFBTCxHQUFjLElBQUlvRSxnQkFBSixDQUFXLEtBQUs3RixLQUFoQixFQUF1QixLQUFLSSxJQUE1QixFQUFrQ2lGLFdBQWxDLENBQWQ7QUFDQSxpQkFBS1MsT0FBTCxHQUFlLElBQUlDLGdCQUFKLENBQVksS0FBSy9GLEtBQWpCLEVBQXdCLEtBQUtJLElBQTdCLEVBQW1DZ0YsVUFBbkMsQ0FBZjs7QUFFQSxpQkFBS1ksT0FBTDtBQUNIOzs7a0NBRVM7QUFBQTs7QUFDTjtBQUNBO0FBQ0E7QUFDQSxpQkFBS2pGLEdBQUwsQ0FBU2tGLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS2xHLFVBQUwsQ0FBZ0JRLEtBQXpDLEVBQWdELEtBQUtSLFVBQUwsQ0FBZ0JVLE1BQWhFOztBQUdBLGlCQUFLVCxLQUFMLENBQVdnRyxPQUFYLENBQW1CLEtBQUtqRixHQUF4QjtBQUNBO0FBQ0EsaUJBQUtVLE1BQUwsQ0FBWXVFLE9BQVosQ0FBb0IsS0FBS2pGLEdBQXpCO0FBQ0EsaUJBQUsrRSxPQUFMLENBQWFFLE9BQWIsQ0FBcUIsS0FBS2pGLEdBQTFCO0FBQ0EsaUJBQUtYLElBQUwsQ0FBVTRGLE9BQVYsQ0FBa0IsS0FBS2pGLEdBQXZCO0FBQ0EsaUJBQUtkLFFBQUwsQ0FBYytGLE9BQWQsQ0FBc0IsS0FBS2pGLEdBQTNCO0FBQ0EsaUJBQUtiLFNBQUwsQ0FBZThGLE9BQWYsQ0FBdUIsS0FBS2pGLEdBQTVCOztBQUVBLGlCQUFLNEUsVUFBTCxDQUFnQkssT0FBaEIsQ0FBd0IsS0FBS2pGLEdBQTdCOztBQUVBLGdCQUFJLEtBQUttRixRQUFMLEVBQUosRUFBcUI7QUFDakIscUJBQUtDLGFBQUw7QUFDSDtBQUNEO0FBQ0EsZ0JBQUksS0FBS3BCLFdBQVQsRUFBc0I7QUFDbEI3QywyQkFBWSxZQUFNO0FBQ2RpRCwwQ0FBc0IsTUFBS2EsT0FBTCxDQUFhbkIsSUFBYixDQUFrQixLQUFsQixDQUF0QjtBQUNILGlCQUZELEVBRUcsT0FBTyxFQUZWO0FBR0g7QUFDSjs7O3NDQUVhTyxVLEVBQVlDLFcsRUFBYUUsTSxFQUFRO0FBQUE7O0FBQzNDLGlCQUFLdkYsS0FBTCxHQUFhLElBQUkwRCxlQUFKLENBQVUsS0FBSzNELFVBQWYsRUFBMkIsS0FBSzBFLGdCQUFoQyxDQUFiO0FBQ0EsaUJBQUt4RSxRQUFMLEdBQWdCLElBQUl5RixjQUFKLENBQVMsS0FBSzNGLFVBQWQsRUFBMEIsTUFBMUIsQ0FBaEI7QUFDQSxpQkFBS0csU0FBTCxHQUFpQixJQUFJd0YsY0FBSixDQUFTLEtBQUszRixVQUFkLEVBQTBCLE9BQTFCLENBQWpCO0FBQ0EsaUJBQUtLLElBQUwsR0FBWSxJQUFJTixjQUFKLENBQVMsS0FBS0MsVUFBZCxFQUEwQixLQUFLQyxLQUEvQixFQUFzQyxLQUFLQyxRQUEzQyxFQUFxRCxLQUFLQyxTQUExRCxFQUFxRSxLQUFLc0YsWUFBMUUsQ0FBWjs7QUFFQSxpQkFBS0csVUFBTCxHQUFrQixJQUFJQyxvQkFBSixDQUFlLEtBQUs3RixVQUFwQixFQUFnQyxLQUFLRSxRQUFyQyxFQUErQyxLQUFLQyxTQUFwRCxDQUFsQjs7QUFFQSxnQkFBSXFGLFdBQVcsTUFBZixFQUF1QjtBQUNuQixxQkFBS2EsUUFBTCxHQUFnQixJQUFJQyx1QkFBSixDQUFpQixLQUFLckcsS0FBdEIsRUFBNkIsS0FBS0ksSUFBbEMsRUFBd0NnRixVQUF4QyxFQUFvRCxNQUFwRCxFQUE0RCxJQUE1RCxDQUFoQjtBQUNBLHFCQUFLa0IsV0FBTCxHQUFtQixJQUFJRCx1QkFBSixDQUFpQixLQUFLckcsS0FBdEIsRUFBNkIsS0FBS0ksSUFBbEMsRUFBd0NpRixXQUF4QyxFQUFxRCxPQUFyRCxFQUE4RCxLQUE5RCxDQUFuQjtBQUNILGFBSEQsTUFHTztBQUNILHFCQUFLaUIsV0FBTCxHQUFtQixJQUFJRCx1QkFBSixDQUFpQixLQUFLckcsS0FBdEIsRUFBNkIsS0FBS0ksSUFBbEMsRUFBd0NnRixVQUF4QyxFQUFvRCxNQUFwRCxFQUE0RCxLQUE1RCxDQUFuQjtBQUNBLHFCQUFLZ0IsUUFBTCxHQUFnQixJQUFJQyx1QkFBSixDQUFpQixLQUFLckcsS0FBdEIsRUFBNkIsS0FBS0ksSUFBbEMsRUFBd0NpRixXQUF4QyxFQUFxRCxPQUFyRCxFQUE4RCxJQUE5RCxDQUFoQjtBQUNIOztBQUVEM0QsbUJBQU82RSxFQUFQLENBQVUsZ0JBQVYsRUFBNEIsVUFBQ0MsSUFBRCxFQUFVO0FBQ2xDLHVCQUFLRixXQUFMLENBQWlCakcsUUFBakIsR0FBNEI7QUFDeEJDLHVCQUFHa0csS0FBSyxHQUFMLENBRHFCO0FBRXhCaEcsdUJBQUdnRyxLQUFLLEdBQUw7QUFGcUIsaUJBQTVCO0FBSUEsdUJBQUtGLFdBQUwsQ0FBaUJ2RSxXQUFqQixHQUFnQ3lFLEtBQUssbUJBQUwsQ0FBaEM7QUFDQSx1QkFBS0YsV0FBTCxDQUFpQnRELE9BQWpCLEdBQTJCd0QsS0FBSyxvQkFBTCxDQUEzQjtBQUNILGFBUEQ7QUFRQTlFLG1CQUFPNkUsRUFBUCxDQUFVLHFCQUFWLEVBQWlDLGdCQUFRO0FBQ3JDLHVCQUFLbkcsSUFBTCxDQUFVUSxVQUFWLEdBQXVCLE9BQUswRixXQUE1QjtBQUNBNUUsdUJBQU9DLElBQVAsQ0FBWSwyQkFBWixFQUF5QztBQUNyQ3hCLDRCQUFRLE9BQUtxRjtBQUR3QixpQkFBekM7QUFHSCxhQUxEO0FBTUE5RCxtQkFBTzZFLEVBQVAsQ0FBVSx1QkFBVixFQUFtQyxnQkFBUTtBQUN2Qyx1QkFBS25HLElBQUwsQ0FBVVEsVUFBVixHQUF1QixJQUF2QjtBQUNBLHVCQUFLUixJQUFMLENBQVVDLFFBQVYsR0FBcUJtRyxLQUFLLFVBQUwsQ0FBckI7QUFDQSx1QkFBS3BHLElBQUwsQ0FBVU0sUUFBVixHQUFxQjhGLEtBQUssVUFBTCxDQUFyQjtBQUNILGFBSkQ7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E5RSxtQkFBTzZFLEVBQVAsQ0FBVSx1QkFBVixFQUFtQyxZQUFNO0FBQ3JDLHVCQUFLeEIsV0FBTCxHQUFtQixLQUFuQjtBQUNBLHVCQUFLUyxZQUFMLEdBQW9CLElBQXBCO0FBQ0F0RCwyQkFBVyxZQUFNO0FBQ2IsMkJBQUt1RSxRQUFMO0FBQ0gsaUJBRkQsRUFFRyxJQUZIO0FBR0gsYUFORDs7QUFRQSxpQkFBS0MsU0FBTDtBQUNIOzs7b0NBRVk7QUFBQTs7QUFDVDtBQUNBO0FBQ0E7QUFDQSxpQkFBSzNGLEdBQUwsQ0FBU2tGLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS2xHLFVBQUwsQ0FBZ0JRLEtBQXpDLEVBQWdELEtBQUtSLFVBQUwsQ0FBZ0JVLE1BQWhFOztBQUdBLGlCQUFLVCxLQUFMLENBQVdnRyxPQUFYLENBQW1CLEtBQUtqRixHQUF4QjtBQUNBO0FBQ0EsaUJBQUt1RixXQUFMLENBQWlCTixPQUFqQixDQUF5QixLQUFLakYsR0FBOUI7QUFDQSxpQkFBS3FGLFFBQUwsQ0FBY0osT0FBZCxDQUFzQixLQUFLakYsR0FBM0I7O0FBRUEsaUJBQUtYLElBQUwsQ0FBVTRGLE9BQVYsQ0FBa0IsS0FBS2pGLEdBQXZCOztBQUVBLGlCQUFLZCxRQUFMLENBQWMrRixPQUFkLENBQXNCLEtBQUtqRixHQUEzQjtBQUNBLGlCQUFLYixTQUFMLENBQWU4RixPQUFmLENBQXVCLEtBQUtqRixHQUE1Qjs7QUFFQSxpQkFBSzRFLFVBQUwsQ0FBZ0JLLE9BQWhCLENBQXdCLEtBQUtqRixHQUE3Qjs7QUFFQSxnQkFBSSxLQUFLbUYsUUFBTCxFQUFKLEVBQXFCO0FBQ2pCLHFCQUFLQyxhQUFMO0FBQ0g7O0FBR0R6RSxtQkFBT0MsSUFBUCxDQUFZLGFBQVosRUFBMkI7QUFDdkJ4Qix3QkFBUSxLQUFLcUYsWUFEVTtBQUV2QjVELDRCQUFZRixPQUFPRyxFQUZJO0FBR3ZCdkIsbUJBQUcsS0FBSzhGLFFBQUwsQ0FBYy9GLFFBQWQsQ0FBdUJDLENBSEg7QUFJdkJFLG1CQUFHLEtBQUs0RixRQUFMLENBQWMvRixRQUFkLENBQXVCRyxDQUpIO0FBS3ZCbUcsbUNBQW1CLEtBQUtQLFFBQUwsQ0FBY3JFLFdBTFY7QUFNdkI2RSxvQ0FBb0IsS0FBS1IsUUFBTCxDQUFjcEQ7QUFOWCxhQUEzQjtBQVFBdEIsbUJBQU9DLElBQVAsQ0FBWSxlQUFaLEVBQTZCO0FBQ3pCeEIsd0JBQVEsS0FBS3FGLFlBRFk7QUFFekI1RCw0QkFBWUYsT0FBT0csRUFGTTtBQUd6QnZCLG1CQUFHLEtBQUtGLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsQ0FIRztBQUl6QkUsbUJBQUcsS0FBS0osSUFBTCxDQUFVQyxRQUFWLENBQW1CRztBQUpHLGFBQTdCO0FBTUE7QUFDSSxnQkFBSSxLQUFLdUUsV0FBVCxFQUFzQjtBQUNsQjdDLDJCQUFXLFlBQU07QUFDYmlELDBDQUFzQixPQUFLdUIsU0FBTCxDQUFlN0IsSUFBZixDQUFvQixNQUFwQixDQUF0QjtBQUNILGlCQUZELEVBRUcsT0FBTyxFQUZWO0FBR0g7QUFDUjs7O21DQUlXO0FBQ1IsbUJBQU8sS0FBS2MsVUFBTCxDQUFnQmtCLFFBQWhCLEtBQTZCLENBQXBDO0FBQ0g7Ozt3Q0FFZ0I7QUFBQTs7QUFDYixnQkFBSUMsYUFBSjtBQUNBLGdCQUFJLEtBQUs1RyxTQUFMLENBQWU2RyxLQUFmLEdBQXVCLEtBQUs5RyxRQUFMLENBQWM4RyxLQUF6QyxFQUFnRDtBQUM1Q0QsdUJBQU8sZUFBUDtBQUNILGFBRkQsTUFFTyxJQUFJLEtBQUs3RyxRQUFMLENBQWM4RyxLQUFkLEdBQXNCLEtBQUs3RyxTQUFMLENBQWU2RyxLQUF6QyxFQUFnRDtBQUNuREQsdUJBQU8sZUFBUDtBQUNILGFBRk0sTUFFQTtBQUNIQSx1QkFBTyxVQUFQO0FBQ0g7QUFDRCxnQkFBSUUsTUFBTSxFQUFFMUcsR0FBRyxLQUFLUCxVQUFMLENBQWdCUSxLQUFoQixHQUF3QixDQUE3QixFQUFnQ0MsR0FBRyxLQUFLVCxVQUFMLENBQWdCVSxNQUFoQixHQUF5QixDQUE1RCxFQUFWO0FBQ0EsaUJBQUtNLEdBQUwsQ0FBU2tHLElBQVQsR0FBZ0IsaUJBQWhCO0FBQ0EsaUJBQUtsRyxHQUFMLENBQVNPLFNBQVQsR0FBcUIsT0FBckI7QUFDQSxpQkFBS1AsR0FBTCxDQUFTbUcsU0FBVCxHQUFxQixRQUFyQjtBQUNBLGlCQUFLbkcsR0FBTCxDQUFTb0csUUFBVCxNQUFxQkwsSUFBckIsRUFBNkJFLElBQUkxRyxDQUFqQyxFQUFvQzBHLElBQUl4RyxDQUF4QztBQUNBLGlCQUFLTyxHQUFMLENBQVNxRyxXQUFULEdBQXVCLE9BQXZCO0FBQ0EsaUJBQUtyRyxHQUFMLENBQVNzRyxTQUFULEdBQXFCLENBQXJCO0FBQ0EsaUJBQUt0RyxHQUFMLENBQVN1RyxVQUFULE1BQXVCUixJQUF2QixFQUErQkUsSUFBSTFHLENBQW5DLEVBQXNDMEcsSUFBSXhHLENBQTFDOztBQUVBLGlCQUFLdUUsV0FBTCxHQUFtQixLQUFuQjtBQUNBLGlCQUFLUyxZQUFMLEdBQW9CLElBQXBCO0FBQ0F0RCx1QkFBVyxZQUFNO0FBQ2IsdUJBQUt1RSxRQUFMO0FBQ0gsYUFGRCxFQUVHLElBRkg7QUFHSDs7Ozs7O2tCQXhNZ0JqSCxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RyQjs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUMsWUFBWTtBQUNkMkQsdUJBQW1CLEdBREw7QUFFZEMsaUJBQWEsRUFGQztBQUdkQyxnQkFBWSxFQUhFO0FBSWRDLHFCQUFpQixFQUpIO0FBS2RDLHFCQUFpQixFQUxIO0FBTWRDLHNCQUFrQjtBQU5KLENBQWxCOztJQVVxQmlDLEk7OztBQUNqQixrQkFBWTNGLFVBQVosRUFBd0J3SCxRQUF4QixFQUFrQ25ILElBQWxDLEVBQXdDO0FBQUE7O0FBQUEsZ0hBQzlCLEVBQUVHLE9BQU9kLFVBQVU2RCxVQUFuQixFQUErQjdDLFFBQVFoQixVQUFVNEQsV0FBakQsRUFEOEI7O0FBRXBDLGNBQUtqRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLTCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFlBQU1PLElBQUlpSCxhQUFhLE1BQWIsR0FDRixJQUFJOUgsVUFBVThELGVBRFosR0FHRnhELFdBQVdRLEtBQVgsR0FBbUJkLFVBQVU4RCxlQUE3QixHQUErQyxNQUFLaEQsS0FINUQ7QUFLQSxjQUFLRixRQUFMLEdBQWdCO0FBQ1pDLGVBQUdBLENBRFM7QUFFWkUsZUFBR1QsV0FBV1UsTUFBWCxHQUFvQmhCLFVBQVUyRDtBQUZyQixTQUFoQjtBQUlBLGNBQUtvRSxTQUFMLEdBQWlCLElBQUlDLFNBQUosUUFBb0JGLFFBQXBCLENBQWpCO0FBQ0EsY0FBS2xGLFdBQUwsR0FBbUIsSUFBSXFGLFdBQUosUUFBc0JILFFBQXRCLENBQW5CO0FBQ0EsY0FBSzVHLEtBQUwsR0FBYSxRQUFiO0FBQ0EsY0FBS29HLEtBQUwsR0FBYSxDQUFiO0FBQ0EsY0FBS1ksVUFBTCxHQUFrQixLQUFsQjtBQWpCb0M7QUFrQnZDOzs7O2dDQUVPNUcsRyxFQUFLO0FBQUE7O0FBQ1QsaUJBQUs2RyxrQkFBTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQUksS0FBS3hILElBQUwsQ0FBVXlILGlCQUFWLENBQTRCLEtBQUt4RixXQUFqQyxDQUFKLEVBQW1EO0FBQy9DLG9CQUFJLENBQUMsS0FBS3NGLFVBQVYsRUFBc0IsS0FBS1osS0FBTCxJQUFjLENBQWQ7QUFDdEIscUJBQUtZLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxxQkFBS2hILEtBQUwsR0FBYSxPQUFiO0FBQ0F1QiwyQkFBVyxZQUFNO0FBQ2IsMkJBQUt5RixVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsMkJBQUtoSCxLQUFMLEdBQWEsUUFBYjtBQUNILGlCQUhELEVBR0csSUFISDtBQUtIO0FBQ0o7Ozs2Q0FFcUI7QUFDbEIsZ0JBQUksS0FBS1AsSUFBTCxDQUFVeUgsaUJBQVYsQ0FBNEIsSUFBNUIsS0FBcUMsS0FBS3pILElBQUwsQ0FBVXlILGlCQUFWLENBQTRCLEtBQUtMLFNBQWpDLENBQXpDLEVBQXNGO0FBQ2xGLG9CQUFJLEtBQUtwSCxJQUFMLENBQVVDLFFBQVYsQ0FBbUJHLENBQW5CLEdBQXVCLEtBQUtKLElBQUwsQ0FBVWUsTUFBakMsR0FBMEMsS0FBS2QsUUFBTCxDQUFjRyxDQUE1RCxFQUErRDtBQUMzRCx3QkFBSSxLQUFLSixJQUFMLENBQVVNLFFBQVYsQ0FBbUJGLENBQW5CLEdBQXVCLENBQTNCLEVBQThCLEtBQUtKLElBQUwsQ0FBVU0sUUFBVixDQUFtQkYsQ0FBbkIsR0FBdUIsQ0FBQyxLQUFLSixJQUFMLENBQVVNLFFBQVYsQ0FBbUJGLENBQTNDO0FBQ2pDLGlCQUZELE1BRU87QUFDSCx3QkFBSSxLQUFLSixJQUFMLENBQVVDLFFBQVYsQ0FBbUJHLENBQW5CLEdBQXVCLEtBQUtKLElBQUwsQ0FBVWUsTUFBakMsR0FBMEMsS0FBS3FHLFNBQUwsQ0FBZW5ILFFBQWYsQ0FBd0JHLENBQWxFLElBQXVFLEtBQUtKLElBQUwsQ0FBVU0sUUFBVixDQUFtQkYsQ0FBbkIsR0FBdUIsQ0FBbEcsRUFBc0c7QUFDbEcsNkJBQUtKLElBQUwsQ0FBVU0sUUFBVixDQUFtQkYsQ0FBbkIsR0FBdUIsQ0FBQyxLQUFLSixJQUFMLENBQVVNLFFBQVYsQ0FBbUJGLENBQTNDO0FBQ0g7QUFDRCx5QkFBS0osSUFBTCxDQUFVTSxRQUFWLENBQW1CSixDQUFuQixHQUF1QixDQUFDLEtBQUtGLElBQUwsQ0FBVU0sUUFBVixDQUFtQkosQ0FBM0M7QUFDSDtBQUNKO0FBQ0o7Ozs7RUFsRDZCa0UsYzs7a0JBQWJrQixJOztJQXNEZmdDLFc7OztBQUNGLHlCQUFZSSxJQUFaLEVBQWtCUCxRQUFsQixFQUE0QjtBQUFBOztBQUFBLCtIQUNsQixFQUFFaEgsT0FBT2QsVUFBVTZELFVBQVYsR0FBdUIsRUFBaEMsRUFBb0M3QyxRQUFRaEIsVUFBVTRELFdBQVYsR0FBd0IsSUFBcEUsRUFEa0I7O0FBRXhCLFlBQU0vQyxJQUFJaUgsYUFBYSxNQUFiLEdBQ05PLEtBQUt6SCxRQUFMLENBQWNDLENBQWQsR0FBa0IsRUFEWixHQUdOd0gsS0FBS3pILFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQndILEtBQUt2SCxLQUF2QixHQUErQixPQUFLQSxLQUFwQyxHQUE0QyxFQUhoRDtBQUtBLGVBQUtGLFFBQUwsR0FBZ0I7QUFDWkMsZUFBR0EsQ0FEUztBQUVaRSxlQUFHc0gsS0FBS3pILFFBQUwsQ0FBY0c7QUFGTCxTQUFoQjtBQUlBLGVBQUtHLEtBQUwsR0FBYSxPQUFiO0FBWHdCO0FBWTNCOzs7O2dDQUVPSSxHLEVBQUs7QUFDVEEsZ0JBQUlPLFNBQUosR0FBZ0IsS0FBS1gsS0FBckI7QUFDQUksZ0JBQUlzRCxRQUFKLENBQWEsS0FBS2hFLFFBQUwsQ0FBY0MsQ0FBM0IsRUFBOEIsS0FBS0QsUUFBTCxDQUFjRyxDQUE1QyxFQUErQyxLQUFLRCxLQUFwRCxFQUEyRCxLQUFLRSxNQUFoRTtBQUNIOzs7O0VBbEJxQitELGM7O0lBcUJwQmlELFM7OztBQUNGLHVCQUFZSyxJQUFaLEVBQWtCUCxRQUFsQixFQUE0QjtBQUFBOztBQUFBLDJIQUNsQixFQUFFaEgsT0FBT2QsVUFBVStELGVBQW5CLEVBQW9DL0MsUUFBUWhCLFVBQVVnRSxnQkFBdEQsRUFEa0I7O0FBRXhCLFlBQU1uRCxJQUFJaUgsYUFBYSxNQUFiLEdBQ05PLEtBQUt6SCxRQUFMLENBQWNDLENBRFIsR0FHTndILEtBQUt6SCxRQUFMLENBQWNDLENBQWQsR0FBa0J3SCxLQUFLdkgsS0FBdkIsR0FBK0IsT0FBS0EsS0FIeEM7QUFLQSxlQUFLRixRQUFMLEdBQWdCO0FBQ1pDLGVBQUdBLENBRFM7QUFFWkUsZUFBR3NILEtBQUt6SCxRQUFMLENBQWNHLENBQWQsR0FBa0IsT0FBS0M7QUFGZCxTQUFoQjtBQUlBLGVBQUtFLEtBQUwsR0FBYSxNQUFiO0FBWHdCO0FBWTNCOzs7O2dDQUVPSSxHLEVBQUs7QUFDVEEsZ0JBQUlPLFNBQUosR0FBZ0IsS0FBS1gsS0FBckI7QUFDQUksZ0JBQUlzRCxRQUFKLENBQWEsS0FBS2hFLFFBQUwsQ0FBY0MsQ0FBM0IsRUFBOEIsS0FBS0QsUUFBTCxDQUFjRyxDQUE1QyxFQUErQyxLQUFLRCxLQUFwRCxFQUEyRCxLQUFLRSxNQUFoRTtBQUNIOzs7O0VBbEJtQitELGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZ4Qjs7Ozs7Ozs7SUFFcUJ1RCxlO0FBQ2pCLDZCQUFZaEksVUFBWixFQUF3QmlJLGtCQUF4QixFQUE0QztBQUFBOztBQUFBOztBQUN4QyxhQUFLakksVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxhQUFLaUksa0JBQUwsR0FBMEJBLGtCQUExQjtBQUNBLGFBQUtDLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxhQUFLQyxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQixDQUNkLEVBQUVDLE1BQU0sUUFBUixFQUFrQm5FLEtBQUssNEJBQXZCLEVBRGMsRUFFZCxFQUFFbUUsTUFBTSxPQUFSLEVBQWlCbkUsS0FBSywyQkFBdEIsRUFGYyxFQUdkLEVBQUVtRSxNQUFNLFFBQVIsRUFBa0JuRSxLQUFLLDRCQUF2QixFQUhjLEVBSWQsRUFBRW1FLE1BQU0sT0FBUixFQUFpQm5FLEtBQUssMkJBQXRCLEVBSmMsQ0FBbEI7O0FBT0EsYUFBS29FLFFBQUwsR0FBZ0IsSUFBSXRFLEtBQUosRUFBaEI7QUFDQSxhQUFLdUUsU0FBTCxHQUFpQixJQUFJdkUsS0FBSixFQUFqQjtBQUNBLGFBQUtzRSxRQUFMLENBQWNwRSxHQUFkLEdBQW9CLEtBQUtrRSxVQUFMLENBQWdCLEtBQUtGLFlBQXJCLEVBQW1DaEUsR0FBdkQ7QUFDQSxhQUFLcUUsU0FBTCxDQUFlckUsR0FBZixHQUFxQixLQUFLa0UsVUFBTCxDQUFnQixLQUFLRCxhQUFyQixFQUFvQ2pFLEdBQXpEOztBQUVBLGFBQUtzRSxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQixLQUFsQjs7QUFFQTlHLGVBQU82RSxFQUFQLENBQVUsWUFBVixFQUF3QixnQkFBUTtBQUM1QixrQkFBS2tDLFlBQUwsR0FBb0JqQyxLQUFLLGNBQUwsQ0FBcEI7QUFDQSxrQkFBS2tDLGFBQUwsR0FBcUJsQyxLQUFLLGVBQUwsQ0FBckI7QUFDQSxnQkFBSTlFLE9BQU9HLEVBQVAsS0FBYyxNQUFLNEcsWUFBdkIsRUFBcUM7QUFDakMsc0JBQUtFLGFBQUwsR0FBcUIsSUFBckI7QUFDSCxhQUZELE1BRU87QUFDSCxzQkFBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNIO0FBQ0Qsa0JBQUtYLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxrQkFBS0MsYUFBTCxHQUFxQixDQUFyQjtBQUNBLGtCQUFLL0gsTUFBTCxHQUFjcUcsS0FBSyxRQUFMLENBQWQ7QUFDSCxTQVhEOztBQWFBOUUsZUFBTzZFLEVBQVAsQ0FBVSxzQkFBVixFQUFrQyxnQkFBUTtBQUN0QyxrQkFBSzBCLFlBQUwsR0FBb0J6QixLQUFLLGNBQUwsQ0FBcEI7QUFDQSxrQkFBSzBCLGFBQUwsR0FBcUIxQixLQUFLLGVBQUwsQ0FBckI7QUFDSCxTQUhEOztBQUtBOUUsZUFBTzZFLEVBQVAsQ0FBVSxrQkFBVixFQUE4QixZQUFNO0FBQ2hDLGtCQUFLZ0MsU0FBTCxHQUFpQixJQUFqQjtBQUNILFNBRkQ7QUFHQTdHLGVBQU82RSxFQUFQLENBQVUsbUJBQVYsRUFBK0IsWUFBTTtBQUNqQyxrQkFBS2lDLFVBQUwsR0FBa0IsSUFBbEI7QUFDSCxTQUZEOztBQUlBOUcsZUFBTzZFLEVBQVAsQ0FBVSxXQUFWLEVBQXVCLFlBQU07QUFDekJzQyxnQ0FBSUMsTUFBSixDQUFXLE1BQVg7QUFDQUQsZ0NBQUlDLE1BQUosQ0FBVyxJQUFYO0FBQ0FELGdDQUFJQyxNQUFKLENBQVcsR0FBWDtBQUNBRCxnQ0FBSUMsTUFBSixDQUFXLEdBQVg7QUFDQUQsZ0NBQUlDLE1BQUosQ0FBVyxPQUFYO0FBQ0Esa0JBQUtkLGtCQUFMLENBQXdCLE1BQUtHLFVBQUwsQ0FBZ0IsTUFBS0YsWUFBckIsRUFBbUNoRSxHQUEzRCxFQUFnRSxNQUFLa0UsVUFBTCxDQUFnQixNQUFLRCxhQUFyQixFQUFvQ2pFLEdBQXBHLEVBQXlHLE1BQUs5RCxNQUE5RztBQUNBLGtCQUFLc0ksWUFBTCxHQUFvQixJQUFwQjtBQUNBLGtCQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0Esa0JBQUtDLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxrQkFBS0MsY0FBTCxHQUFzQixLQUF0QjtBQUNBLGtCQUFLWCxZQUFMLEdBQW9CLENBQXBCO0FBQ0Esa0JBQUtDLGFBQUwsR0FBcUIsQ0FBckI7QUFDQSxrQkFBS0ssU0FBTCxHQUFpQixLQUFqQjtBQUNBLGtCQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0Esa0JBQUtySSxNQUFMLEdBQWMsSUFBZDtBQUNILFNBaEJEO0FBaUJIOzs7OytCQUVNWSxHLEVBQUs7O0FBRVIsaUJBQUtzSCxRQUFMLENBQWNwRSxHQUFkLEdBQW9CLEtBQUtrRSxVQUFMLENBQWdCLEtBQUtGLFlBQXJCLEVBQW1DaEUsR0FBdkQ7QUFDQSxpQkFBS3FFLFNBQUwsQ0FBZXJFLEdBQWYsR0FBcUIsS0FBS2tFLFVBQUwsQ0FBZ0IsS0FBS0QsYUFBckIsRUFBb0NqRSxHQUF6RDs7QUFFQWxELGdCQUFJTyxTQUFKLEdBQWdCLFFBQWhCO0FBQ0FQLGdCQUFJc0QsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsS0FBS3RFLFVBQUwsQ0FBZ0JRLEtBQW5DLEVBQTBDLEtBQUtSLFVBQUwsQ0FBZ0JVLE1BQTFEOztBQUVBO0FBQ0EsZ0JBQU1zSSxlQUFlLEtBQUtaLFVBQUwsQ0FBZ0IsS0FBS0YsWUFBckIsQ0FBckI7QUFDQSxnQkFBSWpCLE1BQU0sRUFBRTFHLEdBQUcsS0FBS1AsVUFBTCxDQUFnQlEsS0FBaEIsR0FBd0IsQ0FBN0IsRUFBZ0NDLEdBQUcsS0FBS1QsVUFBTCxDQUFnQlUsTUFBaEIsR0FBeUIsQ0FBNUQsRUFBVjtBQUNBTSxnQkFBSWtHLElBQUosR0FBVyxpQkFBWDtBQUNBbEcsZ0JBQUltRyxTQUFKLEdBQWdCLFFBQWhCO0FBQ0FuRyxnQkFBSU8sU0FBSixHQUFnQixPQUFoQjs7QUFFQSxnQkFBSSxLQUFLMEgsVUFBVCxFQUFxQmpJLElBQUlvRyxRQUFKLENBQWEsYUFBYixFQUE0QkgsSUFBSTFHLENBQWhDLEVBQW1DMEcsSUFBSXhHLENBQUosR0FBUSxHQUEzQztBQUNyQk8sZ0JBQUlrRyxJQUFKLEdBQVcsaUJBQVg7QUFDQSxnQkFBSSxLQUFLc0IsU0FBVCxFQUFvQnhILElBQUlvRyxRQUFKLENBQWEsT0FBYixFQUFzQkgsSUFBSTFHLENBQTFCLEVBQTZCMEcsSUFBSXhHLENBQUosR0FBUSxFQUFyQztBQUNwQixnQkFBSSxLQUFLaUksWUFBTCxJQUFxQixLQUFLQyxhQUE5QixFQUE2QztBQUN6QzNILG9CQUFJb0csUUFBSixNQUFnQixLQUFLc0IsWUFBckIsRUFBcUN6QixJQUFJMUcsQ0FBekMsRUFBNEMwRyxJQUFJeEcsQ0FBSixHQUFRLEVBQXBEO0FBQ0gsYUFGRCxNQUVPLElBQUksS0FBS3dJLFVBQVQsRUFBcUI7QUFDeEJqSSxvQkFBSW9HLFFBQUosTUFBZ0J6RixPQUFPRyxFQUF2QixFQUE2Qm1GLElBQUkxRyxDQUFqQyxFQUFvQzBHLElBQUl4RyxDQUFKLEdBQVEsRUFBNUM7QUFDSDs7QUFFRE8sZ0JBQUlrRyxJQUFKLEdBQVcsaUJBQVg7QUFDQWxHLGdCQUFJb0csUUFBSixNQUFnQjRCLGFBQWFYLElBQTdCLEVBQXFDcEIsSUFBSTFHLENBQXpDLEVBQTRDMEcsSUFBSXhHLENBQWhEO0FBQ0FPLGdCQUFJcUcsV0FBSixHQUFrQixPQUFsQjtBQUNBckcsZ0JBQUlzRyxTQUFKLEdBQWdCLENBQWhCO0FBQ0F0RyxnQkFBSXVHLFVBQUosTUFBa0J5QixhQUFhWCxJQUEvQixFQUF1Q3BCLElBQUkxRyxDQUEzQyxFQUE4QzBHLElBQUl4RyxDQUFsRDtBQUNBTyxnQkFBSXdELFNBQUosQ0FBYyxLQUFLOEQsUUFBbkIsRUFDSXJCLElBQUkxRyxDQUFKLEdBQVEsS0FBSytILFFBQUwsQ0FBYzlILEtBQWQsR0FBc0IsQ0FEbEMsRUFFSXlHLElBQUl4RyxDQUZSOztBQUlBO0FBQ0EsZ0JBQU15SSxnQkFBZ0IsS0FBS2QsVUFBTCxDQUFnQixLQUFLRCxhQUFyQixDQUF0QjtBQUNBbEIsa0JBQU0sRUFBRTFHLEdBQUcsS0FBS1AsVUFBTCxDQUFnQlEsS0FBaEIsR0FBd0IsQ0FBeEIsR0FBNEIsQ0FBakMsRUFBb0NDLEdBQUcsS0FBS1QsVUFBTCxDQUFnQlUsTUFBaEIsR0FBeUIsQ0FBaEUsRUFBTjtBQUNBTSxnQkFBSWtHLElBQUosR0FBVyxpQkFBWDtBQUNBbEcsZ0JBQUltRyxTQUFKLEdBQWdCLFFBQWhCO0FBQ0FuRyxnQkFBSU8sU0FBSixHQUFnQixPQUFoQjs7QUFFQSxnQkFBSSxLQUFLMEgsVUFBVCxFQUFxQmpJLElBQUlvRyxRQUFKLENBQWEsYUFBYixFQUE0QkgsSUFBSTFHLENBQWhDLEVBQW1DMEcsSUFBSXhHLENBQUosR0FBUSxHQUEzQztBQUNyQk8sZ0JBQUlrRyxJQUFKLEdBQVcsaUJBQVg7QUFDQSxnQkFBSSxLQUFLdUIsVUFBVCxFQUFxQnpILElBQUlvRyxRQUFKLENBQWEsT0FBYixFQUFzQkgsSUFBSTFHLENBQTFCLEVBQTZCMEcsSUFBSXhHLENBQUosR0FBUSxFQUFyQztBQUNyQixnQkFBSSxLQUFLaUksWUFBTCxJQUFxQixLQUFLQyxhQUE5QixFQUE2QztBQUN6QzNILG9CQUFJb0csUUFBSixNQUFnQixLQUFLdUIsYUFBckIsRUFBc0MxQixJQUFJMUcsQ0FBMUMsRUFBNkMwRyxJQUFJeEcsQ0FBSixHQUFRLEVBQXJEO0FBQ0gsYUFGRCxNQUVPLElBQUksS0FBS3dJLFVBQVQsRUFBcUI7QUFDeEJqSSxvQkFBSW9HLFFBQUosdUJBQW1DSCxJQUFJMUcsQ0FBdkMsRUFBMEMwRyxJQUFJeEcsQ0FBSixHQUFRLEVBQWxEO0FBQ0g7QUFDRE8sZ0JBQUlrRyxJQUFKLEdBQVcsaUJBQVg7O0FBRUFsRyxnQkFBSW9HLFFBQUosTUFBZ0I4QixjQUFjYixJQUE5QixFQUFzQ3BCLElBQUkxRyxDQUExQyxFQUE2QzBHLElBQUl4RyxDQUFqRDtBQUNBTyxnQkFBSXFHLFdBQUosR0FBa0IsT0FBbEI7QUFDQXJHLGdCQUFJc0csU0FBSixHQUFnQixDQUFoQjtBQUNBdEcsZ0JBQUl1RyxVQUFKLE1BQWtCMkIsY0FBY2IsSUFBaEMsRUFBd0NwQixJQUFJMUcsQ0FBNUMsRUFBK0MwRyxJQUFJeEcsQ0FBbkQ7QUFDQU8sZ0JBQUl3RCxTQUFKLENBQWMsS0FBSytELFNBQW5CLEVBQ0l0QixJQUFJMUcsQ0FBSixHQUFRLEtBQUtnSSxTQUFMLENBQWUvSCxLQUFmLEdBQXVCLENBRG5DLEVBRUl5RyxJQUFJeEcsQ0FGUjtBQUlIOzs7MkNBRWtCO0FBQUE7O0FBRWYwQix1QkFBVyxZQUFNO0FBQ2Isb0JBQUksQ0FBQyxPQUFLOEcsVUFBVixFQUFzQjtBQUNsQiw2Q0FBSSxNQUFKLEVBQVksWUFBTTtBQUNkLCtCQUFLZCxhQUFMLEdBQXFCLENBQUMsT0FBS0EsYUFBTCxHQUFxQixDQUF0QixJQUEyQixPQUFLQyxVQUFMLENBQWdCZSxNQUFoRTtBQUNILHFCQUZEO0FBR0EsNkNBQUksSUFBSixFQUFVLFlBQU07QUFDWiwrQkFBS2hCLGFBQUwsR0FBc0IsT0FBS0EsYUFBTCxHQUFxQixDQUEzQztBQUNBLDRCQUFJLE9BQUtBLGFBQUwsS0FBdUIsQ0FBQyxDQUE1QixFQUErQixPQUFLQSxhQUFMLEdBQXFCLE9BQUtDLFVBQUwsQ0FBZ0JlLE1BQWhCLEdBQXlCLENBQTlDO0FBQ2xDLHFCQUhEO0FBSUEsNkNBQUksR0FBSixFQUFTLFlBQU07QUFDWCwrQkFBS2pCLFlBQUwsR0FBb0IsQ0FBQyxPQUFLQSxZQUFMLEdBQW9CLENBQXJCLElBQTBCLE9BQUtFLFVBQUwsQ0FBZ0JlLE1BQTlEO0FBRUgscUJBSEQ7QUFJQSw2Q0FBSSxHQUFKLEVBQVMsWUFBTTtBQUNYLCtCQUFLakIsWUFBTCxHQUFvQixDQUFDLE9BQUtBLFlBQUwsR0FBb0IsQ0FBckIsSUFBMEIsT0FBS0UsVUFBTCxDQUFnQmUsTUFBOUQ7QUFDQSw0QkFBSSxPQUFLakIsWUFBTCxLQUFzQixDQUFDLENBQTNCLEVBQThCLE9BQUtBLFlBQUwsR0FBb0IsT0FBS0UsVUFBTCxDQUFnQmUsTUFBaEIsR0FBeUIsQ0FBN0M7QUFFakMscUJBSkQ7QUFLQSw2Q0FBSSxPQUFKLEVBQWEsWUFBTTtBQUNmTCw0Q0FBSUMsTUFBSixDQUFXLE1BQVg7QUFDQUQsNENBQUlDLE1BQUosQ0FBVyxJQUFYO0FBQ0FELDRDQUFJQyxNQUFKLENBQVcsR0FBWDtBQUNBRCw0Q0FBSUMsTUFBSixDQUFXLEdBQVg7QUFDQUQsNENBQUlDLE1BQUosQ0FBVyxPQUFYO0FBQ0EsK0JBQUtkLGtCQUFMLENBQXdCLE9BQUtHLFVBQUwsQ0FBZ0IsT0FBS0YsWUFBckIsRUFBbUNoRSxHQUEzRCxFQUFnRSxPQUFLa0UsVUFBTCxDQUFnQixPQUFLRCxhQUFyQixFQUFvQ2pFLEdBQXBHO0FBQ0gscUJBUEQ7QUFRSCxpQkF6QkQsTUF5Qk87O0FBRUgsNkNBQUksSUFBSixFQUFVLFlBQU07QUFDWiw0QkFBRyxPQUFLOUQsTUFBUixFQUFnQjtBQUNaLGdDQUFJLE9BQUt3SSxhQUFULEVBQXdCO0FBQ3BCLHVDQUFLVixZQUFMLEdBQW9CLENBQUMsT0FBS0EsWUFBTCxHQUFvQixDQUFyQixJQUEwQixPQUFLRSxVQUFMLENBQWdCZSxNQUE5RDtBQUNBeEgsdUNBQU9DLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQ3ZCdUcsbURBQWUsT0FBS0EsYUFERztBQUV2QkQsa0RBQWMsT0FBS0EsWUFGSTtBQUd2QjlILDRDQUFRLE9BQUtBO0FBSFUsaUNBQTNCO0FBS0gsNkJBUEQsTUFPTyxJQUFJLE9BQUt5SSxjQUFULEVBQXlCO0FBQzVCLHVDQUFLVixhQUFMLEdBQXNCLE9BQUtBLGFBQUwsR0FBcUIsQ0FBM0M7QUFDQSxvQ0FBSSxPQUFLQSxhQUFMLEtBQXVCLENBQUMsQ0FBNUIsRUFBK0IsT0FBS0EsYUFBTCxHQUFxQixPQUFLQyxVQUFMLENBQWdCZSxNQUFoQixHQUF5QixDQUE5QztBQUMvQnhILHVDQUFPQyxJQUFQLENBQVksYUFBWixFQUEyQjtBQUN2QnVHLG1EQUFlLE9BQUtBLGFBREc7QUFFdkJELGtEQUFjLE9BQUtBLFlBRkk7QUFHdkI5SCw0Q0FBUSxPQUFLQTtBQUhVLGlDQUEzQjtBQUtIO0FBQ0o7QUFDSixxQkFuQkQ7QUFvQkEsNkNBQUksTUFBSixFQUFZLFlBQU07QUFDZCw0QkFBSSxPQUFLQSxNQUFULEVBQWlCO0FBQ2IsZ0NBQUksT0FBS3dJLGFBQVQsRUFBd0I7QUFDcEIsdUNBQUtWLFlBQUwsR0FBb0IsQ0FBQyxPQUFLQSxZQUFMLEdBQW9CLENBQXJCLElBQTBCLE9BQUtFLFVBQUwsQ0FBZ0JlLE1BQTlEO0FBQ0Esb0NBQUksT0FBS2pCLFlBQUwsS0FBc0IsQ0FBQyxDQUEzQixFQUE4QixPQUFLQSxZQUFMLEdBQW9CLE9BQUtFLFVBQUwsQ0FBZ0JlLE1BQWhCLEdBQXlCLENBQTdDO0FBQzlCeEgsdUNBQU9DLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQ3ZCdUcsbURBQWUsT0FBS0EsYUFERztBQUV2QkQsa0RBQWMsT0FBS0EsWUFGSTtBQUd2QjlILDRDQUFRLE9BQUtBO0FBSFUsaUNBQTNCO0FBS0gsNkJBUkQsTUFRTyxJQUFJLE9BQUt5SSxjQUFULEVBQXlCO0FBQzVCLHVDQUFLVixhQUFMLEdBQXFCLENBQUMsT0FBS0EsYUFBTCxHQUFxQixDQUF0QixJQUEyQixPQUFLQyxVQUFMLENBQWdCZSxNQUFoRTtBQUNBeEgsdUNBQU9DLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQ3ZCdUcsbURBQWUsT0FBS0EsYUFERztBQUV2QkQsa0RBQWMsT0FBS0EsWUFGSTtBQUd2QjlILDRDQUFRLE9BQUtBO0FBSFUsaUNBQTNCO0FBS0g7QUFDSjtBQUNKLHFCQW5CRDtBQW9CQSw2Q0FBSSxPQUFKLEVBQWEsWUFBTTtBQUNmLDRCQUFHLE9BQUtBLE1BQVIsRUFBZ0I7QUFDWixnQ0FBSSxPQUFLd0ksYUFBVCxFQUF3QjtBQUNwQmpILHVDQUFPQyxJQUFQLENBQVksV0FBWixFQUF5QjtBQUNyQnhCLDRDQUFRLE9BQUtBO0FBRFEsaUNBQXpCO0FBR0gsNkJBSkQsTUFJTyxJQUFJLE9BQUt5SSxjQUFULEVBQXlCO0FBQzVCbEgsdUNBQU9DLElBQVAsQ0FBWSxZQUFaLEVBQTBCO0FBQ3RCeEIsNENBQVEsT0FBS0E7QUFEUyxpQ0FBMUI7QUFHSDtBQUNKO0FBQ0oscUJBWkQ7QUFlSDtBQUNKLGFBcEZELEVBb0ZHLEdBcEZIO0FBcUZIOzs7Ozs7a0JBcE5nQjRILGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCcEQsUTtBQUNqQixzQkFBYTVFLFVBQWIsRUFBeUI2RSxTQUF6QixFQUFvQ0UsZUFBcEMsRUFBcUQ7QUFBQTs7QUFDakQsYUFBSy9FLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsYUFBSzZFLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsYUFBS0UsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxhQUFLcUUsY0FBTCxHQUFzQixDQUF0QjtBQUNBLGFBQUtDLE9BQUwsR0FBZSxDQUFDLFlBQUQsRUFBZSxRQUFmLENBQWY7QUFDQSxhQUFLQyxlQUFMLEdBQXVCLElBQUl0QiwwQkFBSixDQUFvQixLQUFLaEksVUFBekIsRUFBcUMsS0FBS2lJLGtCQUFMLENBQXdCbkQsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBckMsQ0FBdkI7QUFDQSxhQUFLeUUsbUJBQUwsR0FBMkIsS0FBM0I7QUFDQSxhQUFLckUsZ0JBQUw7QUFDSDs7OzsyQ0FFbUJzRSxPLEVBQVNDLFEsRUFBVXJKLE0sRUFBUTtBQUMzQyxpQkFBS21KLG1CQUFMLEdBQTJCLEtBQTNCO0FBQ0EsZ0JBQUksS0FBS0QsZUFBTCxDQUFxQkwsVUFBekIsRUFBcUM7QUFDakMscUJBQUtLLGVBQUwsQ0FBcUJMLFVBQXJCLEdBQWtDLEtBQWxDO0FBQ0Esb0JBQU16RCxTQUFTLEtBQUs4RCxlQUFMLENBQXFCVixhQUFyQixHQUFxQyxNQUFyQyxHQUE4QyxPQUE3RDtBQUNBLHFCQUFLN0QsZUFBTCxDQUFxQnlFLE9BQXJCLEVBQThCQyxRQUE5QixFQUF3Q2pFLE1BQXhDLEVBQWdEcEYsTUFBaEQ7QUFDSCxhQUpELE1BSU87QUFDSCxxQkFBS3lFLFNBQUwsQ0FBZTJFLE9BQWYsRUFBd0JDLFFBQXhCO0FBQ0g7QUFDSjs7OytCQUdPekksRyxFQUFLO0FBQUE7O0FBQ1RBLGdCQUFJTyxTQUFKLEdBQWdCLFFBQWhCO0FBQ0FQLGdCQUFJc0QsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsS0FBS3RFLFVBQUwsQ0FBZ0JRLEtBQW5DLEVBQTBDLEtBQUtSLFVBQUwsQ0FBZ0JVLE1BQTFEOztBQUVBLGdCQUFJLENBQUMsS0FBSzZJLG1CQUFWLEVBQStCO0FBQzNCLHFCQUFLRixPQUFMLENBQWFLLE9BQWIsQ0FBcUIsVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDaEMsd0JBQU0zQyxNQUFNLEVBQUUxRyxHQUFHLE1BQUtQLFVBQUwsQ0FBZ0JRLEtBQWhCLEdBQXdCLENBQTdCLEVBQWdDQyxHQUFHLE1BQUtULFVBQUwsQ0FBZ0JVLE1BQWhCLElBQTJCLE1BQUsySSxPQUFMLENBQWFGLE1BQWIsR0FBc0IsQ0FBdkIsR0FBNEJTLENBQXRELENBQW5DLEVBQVo7QUFDQTVJLHdCQUFJa0csSUFBSixHQUFXLGlCQUFYO0FBQ0FsRyx3QkFBSW1HLFNBQUosR0FBZ0IsUUFBaEI7QUFDQW5HLHdCQUFJTyxTQUFKLEdBQWdCLE9BQWhCOztBQUVBLHdCQUFNZixRQUFRUSxJQUFJNkksV0FBSixNQUFtQkYsTUFBbkIsRUFBNkJuSixLQUEzQzs7QUFFQSx3QkFBSSxNQUFLNEksY0FBTCxLQUF3QlEsQ0FBNUIsRUFBK0I1SSxJQUFJc0QsUUFBSixDQUFjMkMsSUFBSTFHLENBQUosR0FBUUMsUUFBUSxDQUFqQixHQUFzQixDQUFuQyxFQUFzQ3lHLElBQUl4RyxDQUFKLEdBQVEsRUFBOUMsRUFBa0RELFFBQVEsRUFBMUQsRUFBOEQsRUFBOUQ7QUFDL0JRLHdCQUFJb0csUUFBSixNQUFnQnVDLE1BQWhCLEVBQTBCMUMsSUFBSTFHLENBQTlCLEVBQWlDMEcsSUFBSXhHLENBQXJDO0FBQ0FPLHdCQUFJcUcsV0FBSixHQUFrQixPQUFsQjtBQUNBckcsd0JBQUlzRyxTQUFKLEdBQWdCLENBQWhCO0FBQ0F0Ryx3QkFBSXVHLFVBQUosTUFBa0JvQyxNQUFsQixFQUE0QjFDLElBQUkxRyxDQUFoQyxFQUFtQzBHLElBQUl4RyxDQUF2QztBQUNILGlCQWJEO0FBY0gsYUFmRCxNQWVPLElBQUksS0FBSzhJLG1CQUFULEVBQThCO0FBQ2pDLHFCQUFLRCxlQUFMLENBQXFCbkUsTUFBckIsQ0FBNEJuRSxHQUE1QjtBQUNIO0FBQ0o7OzsyQ0FFa0I7QUFBQTs7QUFDZixxQ0FBSSxNQUFKLEVBQVksWUFBTTtBQUNkLHVCQUFLb0ksY0FBTCxHQUFzQixDQUFDLE9BQUtBLGNBQUwsR0FBc0IsQ0FBdkIsSUFBNEIsT0FBS0MsT0FBTCxDQUFhRixNQUEvRDtBQUNILGFBRkQ7QUFHQSxxQ0FBSSxJQUFKLEVBQVUsWUFBTTtBQUNaLHVCQUFLQyxjQUFMLEdBQXNCL0gsS0FBS3lJLEdBQUwsQ0FBUyxDQUFDLE9BQUtWLGNBQUwsR0FBc0IsQ0FBdkIsSUFBNEIsT0FBS0MsT0FBTCxDQUFhRixNQUFsRCxDQUF0QjtBQUNILGFBRkQ7QUFHQSxxQ0FBSSxPQUFKLEVBQWEsWUFBTTtBQUNmLG9CQUFJLE9BQUtDLGNBQUwsS0FBd0IsQ0FBNUIsRUFBK0I7QUFDM0JOLHdDQUFJQyxNQUFKLENBQVcsTUFBWDtBQUNBRCx3Q0FBSUMsTUFBSixDQUFXLElBQVg7QUFDQUQsd0NBQUlDLE1BQUosQ0FBVyxPQUFYO0FBQ0EsMkJBQUtRLG1CQUFMLEdBQTJCLElBQTNCO0FBQ0EsMkJBQUtELGVBQUwsQ0FBcUJMLFVBQXJCLEdBQWtDLEtBQWxDO0FBQ0EsMkJBQUtLLGVBQUwsQ0FBcUJwRSxnQkFBckI7QUFDSCxpQkFQRCxNQU9PLElBQUksT0FBS2tFLGNBQUwsS0FBd0IsQ0FBNUIsRUFBK0I7QUFDbENOLHdDQUFJQyxNQUFKLENBQVcsTUFBWDtBQUNBRCx3Q0FBSUMsTUFBSixDQUFXLElBQVg7QUFDQUQsd0NBQUlDLE1BQUosQ0FBVyxPQUFYO0FBQ0EsMkJBQUtRLG1CQUFMLEdBQTJCLElBQTNCO0FBQ0EsMkJBQUtELGVBQUwsQ0FBcUJMLFVBQXJCLEdBQWtDLElBQWxDO0FBQ0F0SCwyQkFBT0MsSUFBUCxDQUFZLG9CQUFaLEVBQWtDRCxPQUFPRyxFQUF6QztBQUNBLDJCQUFLd0gsZUFBTCxDQUFxQnBFLGdCQUFyQjtBQUNIO0FBQ0osYUFqQkQ7QUFtQkg7Ozs7OztrQkExRWdCTixROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTWxGLFlBQVk7QUFDZEUsYUFBUyxHQURLO0FBRWRtSyxrQkFBYyxFQUZBO0FBR2RDLG1CQUFlLEVBSEQ7QUFJZEMsZUFBVyxDQUpHO0FBS2Q7QUFDQUMsaUJBQWE7QUFDYjtBQVBjLENBQWxCOztJQVVxQjVELFk7OztBQUNqQiwwQkFBWXJHLEtBQVosRUFBbUJJLElBQW5CLEVBQXlCOEosU0FBekIsRUFBb0NDLFNBQXBDLEVBQStDQyxNQUEvQyxFQUF1RDtBQUFBOztBQUFBLGdJQUM3Q3BLLEtBRDZDLEVBQ3RDSSxJQURzQyxFQUNoQzhKLFNBRGdDOztBQUduRCxjQUFLN0osUUFBTCxHQUFnQjhKLGNBQWMsTUFBZCxHQUF3QjtBQUNwQzdKLGVBQUcsQ0FEaUM7QUFFcENFLGVBQUcsTUFBS1IsS0FBTCxDQUFXSyxRQUFYLENBQW9CRyxDQUFwQixHQUF3QixNQUFLQztBQUZJLFNBQXhCLEdBR1Y7QUFDRkgsZUFBRyxNQUFLTixLQUFMLENBQVdPLEtBQVgsR0FBbUIsTUFBS0EsS0FEekI7QUFFRkMsZUFBRyxNQUFLUixLQUFMLENBQVdLLFFBQVgsQ0FBb0JHLENBQXBCLEdBQXdCLE1BQUtDO0FBRjlCLFNBSE47O0FBUUEsWUFBSSxDQUFDLE1BQUsySixNQUFWLEVBQWtCLE1BQUt6SixLQUFMLEdBQWEsT0FBYjtBQUNsQixjQUFLeUosTUFBTCxHQUFjQSxNQUFkO0FBWm1EO0FBYXREOzs7O2dDQUlPckosRyxFQUFLO0FBQ1QsZ0JBQUksS0FBS3FKLE1BQVQsRUFBaUI7QUFDYixxQkFBS3BKLElBQUw7QUFDSDs7QUFFREQsZ0JBQUl3RCxTQUFKLENBQWMsS0FBSzhGLE1BQW5CLEVBQ0ksS0FBS2hLLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixDQUR0QixFQUVJLEtBQUtELFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixLQUFLNkosTUFBTCxDQUFZNUosTUFBWixHQUFxQixDQUYzQztBQUdIOzs7K0JBRU07QUFDSCxnQkFBSW9JLElBQUl5QixTQUFKLENBQWMsT0FBZCxDQUFKLEVBQTRCO0FBQ3hCLHFCQUFLakssUUFBTCxDQUFjQyxDQUFkLElBQW1CYixVQUFVdUssU0FBN0I7QUFDQSxxQkFBS2pJLFdBQUwsR0FBbUIsSUFBbkI7QUFDSDtBQUNELGdCQUFJOEcsSUFBSXlCLFNBQUosQ0FBYyxNQUFkLENBQUosRUFBMkI7QUFDdkIscUJBQUtqSyxRQUFMLENBQWNDLENBQWQsSUFBbUJiLFVBQVV1SyxTQUE3QjtBQUNBLHFCQUFLakksV0FBTCxHQUFtQixLQUFuQjtBQUNIOztBQUVEO0FBQ0EsZ0JBQUk4RyxJQUFJeUIsU0FBSixDQUFjLElBQWQsS0FBdUIsQ0FBQyxLQUFLdEgsT0FBakMsRUFBMEM7QUFDdEMscUJBQUt0QyxRQUFMLENBQWNGLENBQWQsR0FBa0JmLFVBQVV3SyxXQUE1QjtBQUNBLHFCQUFLakgsT0FBTCxHQUFlLElBQWY7QUFDSDs7QUFFRCxnQkFBSTZGLElBQUl5QixTQUFKLENBQWMsT0FBZCxDQUFKLEVBQTRCO0FBQ3hCLHFCQUFLQyxhQUFMO0FBQ0g7O0FBRUQsaUJBQUtDLFNBQUw7O0FBRUEsaUJBQUtDLGFBQUw7O0FBRUEsaUJBQUsxSCxXQUFMO0FBQ0g7Ozs7RUFyRHFDOEMsZ0I7O2tCQUFyQlEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNickI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTTVHLFlBQVk7QUFDZEUsYUFBUyxHQURLO0FBRWRtSyxrQkFBYyxFQUZBO0FBR2RDLG1CQUFlLEVBSEQ7QUFJZEMsZUFBVyxDQUpHO0FBS2Q7QUFDQUMsaUJBQWE7QUFDYjtBQVBjLENBQWxCOztJQVVxQnBFLE07OztBQUNqQixvQkFBWTdGLEtBQVosRUFBbUJJLElBQW5CLEVBQXlCOEosU0FBekIsRUFBb0M7QUFBQTs7QUFBQSxvSEFDMUIsRUFBRTNKLE9BQU9kLFVBQVVxSyxZQUFuQixFQUFpQ3JKLFFBQVFoQixVQUFVc0ssYUFBbkQsRUFEMEI7O0FBRWhDLGNBQUsvSixLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLSSxJQUFMLEdBQVlBLElBQVo7O0FBRUEsY0FBS00sUUFBTCxHQUFnQjtBQUNaSixlQUFHLENBRFM7QUFFWkUsZUFBRztBQUZTLFNBQWhCO0FBSUEsY0FBS0gsUUFBTCxHQUFnQjtBQUNaQyxlQUFHLE1BQUtOLEtBQUwsQ0FBV08sS0FBWCxHQUFtQixNQUFLQSxLQURmO0FBRVpDLGVBQUcsTUFBS1IsS0FBTCxDQUFXSyxRQUFYLENBQW9CRyxDQUFwQixHQUF3QixNQUFLQztBQUZwQixTQUFoQjtBQUlBLGNBQUtFLEtBQUwsR0FBYSxLQUFiO0FBQ0EsY0FBS3FDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsY0FBS2pCLFdBQUwsR0FBbUIsSUFBbkI7QUFDQTtBQUNBO0FBQ0EsY0FBS3NJLE1BQUwsR0FBYyxJQUFJdEcsS0FBSixFQUFkO0FBQ0EsY0FBS3NHLE1BQUwsQ0FBWXBHLEdBQVosR0FBa0JpRyxTQUFsQjtBQW5CZ0M7QUFvQm5DOzs7O2dDQUVPbkosRyxFQUFLO0FBQ1QsaUJBQUtDLElBQUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBRCxnQkFBSXdELFNBQUosQ0FBYyxLQUFLOEYsTUFBbkIsRUFDUSxLQUFLaEssUUFBTCxDQUFjQyxDQUFkLEdBQWtCLENBRDFCLEVBRUksS0FBS0QsUUFBTCxDQUFjRyxDQUFkLEdBQWtCLEtBQUs2SixNQUFMLENBQVk1SixNQUFaLEdBQXFCLENBRjNDO0FBR0g7OzsrQkFFTztBQUNKLGdCQUFJb0ksb0JBQUl5QixTQUFKLENBQWMsT0FBZCxDQUFKLEVBQTRCO0FBQ3hCLHFCQUFLakssUUFBTCxDQUFjQyxDQUFkLElBQW1CYixVQUFVdUssU0FBN0I7QUFDQSxxQkFBS2pJLFdBQUwsR0FBbUIsSUFBbkI7QUFDSDtBQUNELGdCQUFJOEcsb0JBQUl5QixTQUFKLENBQWMsTUFBZCxDQUFKLEVBQTJCO0FBQ3ZCLHFCQUFLakssUUFBTCxDQUFjQyxDQUFkLElBQW1CYixVQUFVdUssU0FBN0I7QUFDQSxxQkFBS2pJLFdBQUwsR0FBbUIsS0FBbkI7QUFDSDs7QUFFRDtBQUNBLGdCQUFJOEcsb0JBQUl5QixTQUFKLENBQWMsSUFBZCxLQUF1QixDQUFDLEtBQUt0SCxPQUFqQyxFQUEwQztBQUN0QyxxQkFBS3RDLFFBQUwsQ0FBY0YsQ0FBZCxHQUFrQmYsVUFBVXdLLFdBQTVCO0FBQ0EscUJBQUtqSCxPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUVELGdCQUFJNkYsb0JBQUl5QixTQUFKLENBQWMsR0FBZCxDQUFKLEVBQXdCO0FBQ3BCLHFCQUFLQyxhQUFMO0FBQ0g7O0FBRUQsaUJBQUtDLFNBQUw7O0FBRUEsaUJBQUtDLGFBQUw7O0FBRUEsaUJBQUsxSCxXQUFMO0FBQ0g7Ozt3Q0FFZTtBQUNaLGdCQUFJLEtBQUszQyxJQUFMLENBQVVRLFVBQVYsS0FBeUIsSUFBN0IsRUFBbUM7QUFDL0I7QUFDQSxxQkFBS1IsSUFBTCxDQUFVc0ssS0FBVjtBQUNIO0FBQ0o7OztvQ0FFVztBQUNSLGdCQUFJLENBQUMsS0FBS3RLLElBQUwsQ0FBVVEsVUFBWCxJQUF5QixLQUFLUixJQUFMLENBQVV5SCxpQkFBVixDQUE0QixJQUE1QixDQUE3QixFQUFnRTtBQUM1RCxxQkFBS3pILElBQUwsQ0FBVXVLLGVBQVYsQ0FBMEIsSUFBMUI7QUFDSDtBQUNKOzs7d0NBRWU7QUFDWixpQkFBS3RLLFFBQUwsQ0FBY0csQ0FBZCxJQUFtQixLQUFLRSxRQUFMLENBQWNGLENBQWpDO0FBQ0E7QUFDQTtBQUNBLGdCQUFJLEtBQUtILFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixLQUFLQyxNQUF2QixHQUFnQyxLQUFLVCxLQUFMLENBQVdLLFFBQVgsQ0FBb0JHLENBQXhELEVBQTJEO0FBQ3ZELHFCQUFLRSxRQUFMLENBQWNGLENBQWQsSUFBbUJmLFVBQVVFLE9BQTdCO0FBQ0E7QUFDSCxhQUhELE1BR087QUFDSCxxQkFBS2UsUUFBTCxDQUFjRixDQUFkLEdBQWtCLENBQWxCO0FBQ0EscUJBQUtILFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixLQUFLUixLQUFMLENBQVdLLFFBQVgsQ0FBb0JHLENBQXBCLEdBQXdCLEtBQUtDLE1BQS9DO0FBQ0EscUJBQUt1QyxPQUFMLEdBQWUsS0FBZjtBQUNIO0FBQ0o7OztzQ0FFYTtBQUNWLGdCQUFJLEtBQUszQyxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS04sS0FBTCxDQUFXTyxLQUFYLEdBQW1CLEtBQUtBLEtBQTlDLEVBQXFEO0FBQ2pELHFCQUFLRixRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS04sS0FBTCxDQUFXTyxLQUFYLEdBQW1CLEtBQUtBLEtBQTFDO0FBQ0gsYUFGRCxNQUVPLElBQUksS0FBS0YsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLENBQXRCLEVBQXlCO0FBQzVCLHFCQUFLRCxRQUFMLENBQWNDLENBQWQsR0FBa0IsQ0FBbEI7QUFDSDtBQUNKOzs7O0VBaEcrQmtFLGM7O2tCQUFmcUIsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkckI7Ozs7Ozs7Ozs7OztBQUVBLElBQU1wRyxZQUFZO0FBQ2RFLGFBQVMsR0FESztBQUVkbUssa0JBQWMsRUFGQTtBQUdkQyxtQkFBZSxFQUhEO0FBSWRDLGVBQVcsQ0FKRztBQUtkO0FBQ0FDLGlCQUFhO0FBQ2I7QUFQYyxDQUFsQjs7SUFVcUJsRSxPOzs7QUFDakIscUJBQVkvRixLQUFaLEVBQW1CSSxJQUFuQixFQUF5QjhKLFNBQXpCLEVBQW9DO0FBQUE7O0FBQUEsc0hBQzFCbEssS0FEMEIsRUFDbkJJLElBRG1CLEVBQ2I4SixTQURhOztBQUdoQyxjQUFLN0osUUFBTCxHQUFnQjtBQUNaQyxlQUFHLENBRFM7QUFFWkUsZUFBRyxNQUFLUixLQUFMLENBQVdLLFFBQVgsQ0FBb0JHLENBQXBCLEdBQXdCLE1BQUtDO0FBRnBCLFNBQWhCO0FBSUEsY0FBS0UsS0FBTCxHQUFhLE9BQWI7QUFDQSxjQUFLcUMsT0FBTCxHQUFlLEtBQWY7QUFDQSxjQUFLakIsV0FBTCxHQUFtQixLQUFuQjtBQVRnQztBQVVuQzs7OzsrQkFFTTtBQUNILGdCQUFJOEcsSUFBSXlCLFNBQUosQ0FBYyxHQUFkLENBQUosRUFBd0I7QUFDcEIscUJBQUtqSyxRQUFMLENBQWNDLENBQWQsSUFBbUJiLFVBQVV1SyxTQUE3QjtBQUNBLHFCQUFLakksV0FBTCxHQUFtQixJQUFuQjtBQUNIO0FBQ0QsZ0JBQUk4RyxJQUFJeUIsU0FBSixDQUFjLEdBQWQsQ0FBSixFQUF3QjtBQUNwQixxQkFBS2pLLFFBQUwsQ0FBY0MsQ0FBZCxJQUFtQmIsVUFBVXVLLFNBQTdCO0FBQ0EscUJBQUtqSSxXQUFMLEdBQW1CLEtBQW5CO0FBQ0g7O0FBRUQ7QUFDQSxnQkFBSThHLElBQUl5QixTQUFKLENBQWMsR0FBZCxLQUFzQixDQUFDLEtBQUt0SCxPQUFoQyxFQUF5QztBQUNyQyxxQkFBS3RDLFFBQUwsQ0FBY0YsQ0FBZCxHQUFrQmYsVUFBVXdLLFdBQTVCO0FBQ0EscUJBQUtqSCxPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUVELGdCQUFJNkYsSUFBSXlCLFNBQUosQ0FBYyxHQUFkLENBQUosRUFBd0I7QUFDcEIscUJBQUtDLGFBQUw7QUFDSDs7QUFFRCxpQkFBS0MsU0FBTDs7QUFFQSxpQkFBS0MsYUFBTDs7QUFFQSxpQkFBSzFILFdBQUw7QUFDSDs7OztFQXRDZ0M4QyxnQjs7a0JBQWhCRSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDWkFILFU7QUFDakIsd0JBQVk3RixVQUFaLEVBQXdCRSxRQUF4QixFQUFrQ0MsU0FBbEMsRUFBNkM7QUFBQTs7QUFBQTs7QUFDekMsYUFBS0gsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxhQUFLRSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGFBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsYUFBSzJHLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxhQUFLK0QsU0FBTCxHQUFpQkMsWUFBWSxZQUFNO0FBQy9CLGtCQUFLaEUsUUFBTDtBQUNBLGdCQUFJLE1BQUtBLFFBQUwsS0FBa0IsQ0FBdEIsRUFBeUJpRSxjQUFjLE1BQUtGLFNBQW5CO0FBQzVCLFNBSGdCLEVBR2QsSUFIYyxDQUFqQjtBQUlIOzs7O2dDQUVRN0osRyxFQUFLO0FBQ1YsZ0JBQUlpRyxNQUFNLEVBQUUxRyxHQUFHLEtBQUtQLFVBQUwsQ0FBZ0JRLEtBQWhCLEdBQXdCLENBQTdCLEVBQWdDQyxHQUFHLEtBQUtULFVBQUwsQ0FBZ0JVLE1BQWhCLEdBQXlCLEVBQTVELEVBQVY7QUFDQU0sZ0JBQUlrRyxJQUFKLEdBQVcsaUJBQVg7QUFDQWxHLGdCQUFJTyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FQLGdCQUFJbUcsU0FBSixHQUFnQixRQUFoQjtBQUNBbkcsZ0JBQUlvRyxRQUFKLGdCQUEwQixLQUFLakgsU0FBTCxDQUFlNkcsS0FBekMsbUJBQTRELEtBQUs5RyxRQUFMLENBQWM4RyxLQUExRSxFQUFtRkMsSUFBSTFHLENBQXZGLEVBQTBGMEcsSUFBSXhHLENBQTlGO0FBQ0FPLGdCQUFJcUcsV0FBSixHQUFrQixPQUFsQjtBQUNBckcsZ0JBQUlzRyxTQUFKLEdBQWdCLENBQWhCO0FBQ0F0RyxnQkFBSXVHLFVBQUosZ0JBQTRCLEtBQUtwSCxTQUFMLENBQWU2RyxLQUEzQyxtQkFBOEQsS0FBSzlHLFFBQUwsQ0FBYzhHLEtBQTVFLEVBQXFGQyxJQUFJMUcsQ0FBekYsRUFBNEYwRyxJQUFJeEcsQ0FBaEc7O0FBRUF3RyxrQkFBTSxFQUFFMUcsR0FBRyxLQUFLUCxVQUFMLENBQWdCUSxLQUFoQixHQUF3QixDQUE3QixFQUFnQ0MsR0FBRyxLQUFLVCxVQUFMLENBQWdCVSxNQUFoQixHQUF5QixDQUE1RCxFQUFOO0FBQ0FNLGdCQUFJTyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FQLGdCQUFJbUcsU0FBSixHQUFnQixRQUFoQjtBQUNBbkcsZ0JBQUlvRyxRQUFKLE1BQWdCLEtBQUtOLFFBQXJCLEVBQWlDRyxJQUFJMUcsQ0FBckMsRUFBd0MwRyxJQUFJeEcsQ0FBNUM7QUFDQU8sZ0JBQUlxRyxXQUFKLEdBQWtCLE9BQWxCO0FBQ0FyRyxnQkFBSXNHLFNBQUosR0FBZ0IsQ0FBaEI7QUFDQXRHLGdCQUFJdUcsVUFBSixNQUFrQixLQUFLVCxRQUF2QixFQUFtQ0csSUFBSTFHLENBQXZDLEVBQTBDMEcsSUFBSXhHLENBQTlDO0FBQ0g7Ozs7OztrQkE3QmdCb0YsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBM0MsTTtBQUNqQixvQkFBWTlCLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsYUFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7Ozs7MENBRWlCNEosSSxFQUFNO0FBQ3BCLGdCQUFNQyxRQUFRNUosS0FBS3lJLEdBQUwsQ0FBUyxLQUFLeEosUUFBTCxDQUFjQyxDQUFkLEdBQWtCeUssS0FBSzFLLFFBQUwsQ0FBY0MsQ0FBaEMsR0FBb0N5SyxLQUFLeEssS0FBTCxHQUFhLENBQTFELENBQWQ7QUFDQSxnQkFBTTBLLFFBQVE3SixLQUFLeUksR0FBTCxDQUFTLEtBQUt4SixRQUFMLENBQWNHLENBQWQsR0FBa0J1SyxLQUFLMUssUUFBTCxDQUFjRyxDQUFoQyxHQUFvQ3VLLEtBQUt0SyxNQUFMLEdBQWMsQ0FBM0QsQ0FBZDtBQUNBLGdCQUFJdUssUUFBU0QsS0FBS3hLLEtBQUwsR0FBYSxDQUFiLEdBQWlCLEtBQUtZLE1BQW5DLEVBQTRDO0FBQUUsdUJBQU8sS0FBUDtBQUFlO0FBQzdELGdCQUFJOEosUUFBU0YsS0FBS3RLLE1BQUwsR0FBYyxDQUFkLEdBQWtCLEtBQUtVLE1BQXBDLEVBQTZDO0FBQUUsdUJBQU8sS0FBUDtBQUFlOztBQUU5RCxnQkFBSTZKLFNBQVVELEtBQUt4SyxLQUFMLEdBQWEsQ0FBM0IsRUFBK0I7QUFBRSx1QkFBTyxJQUFQO0FBQWM7QUFDL0MsZ0JBQUkwSyxTQUFVRixLQUFLdEssTUFBTCxHQUFjLENBQTVCLEVBQWdDO0FBQUUsdUJBQU8sSUFBUDtBQUFjOztBQUVoRCxnQkFBTXlLLEtBQUtGLFFBQVFELEtBQUt4SyxLQUFMLEdBQWEsQ0FBaEM7QUFDQSxnQkFBTTRLLEtBQUtGLFFBQVFGLEtBQUt0SyxNQUFMLEdBQWMsQ0FBakM7QUFDQSxtQkFBUXlLLEtBQUtBLEVBQUwsR0FBVUMsS0FBS0EsRUFBZixJQUFzQixLQUFLaEssTUFBTCxHQUFjLEtBQUtBLE1BQWpEO0FBQ0g7OztvQ0FFVztBQUNSLG1CQUFPO0FBQ0hpSyxzQkFBTSxLQUFLL0ssUUFBTCxDQUFjQyxDQURqQjtBQUVIK0ssdUJBQU8sS0FBS2hMLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLQyxLQUYzQjtBQUdIK0sscUJBQUssS0FBS2pMLFFBQUwsQ0FBY0csQ0FIaEI7QUFJSCtLLHdCQUFRLEtBQUtsTCxRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS0M7QUFKNUIsYUFBUDtBQU1IOzs7Ozs7a0JBMUJnQndDLE07Ozs7Ozs7Ozs7Ozs7O0FDQXJCO0FBQ0E7QUFDQTs7QUFFQSxDQUFFLENBQUMsVUFBVXVJLE1BQVYsRUFBa0I7QUFDakIsUUFBSUMsQ0FBSjtBQUFBLFFBQ0lDLFlBQVksRUFEaEI7QUFBQSxRQUVJQyxRQUFRLEVBQUUsSUFBSSxLQUFOLEVBQWEsSUFBSSxLQUFqQixFQUF3QixJQUFJLEtBQTVCLEVBQW1DLElBQUksS0FBdkMsRUFGWjtBQUFBLFFBR0lDLFNBQVMsS0FIYjs7QUFJSTtBQUNBQyxpQkFBYTtBQUNULGFBQUssRUFESSxFQUNBQyxPQUFPLEVBRFA7QUFFVCxhQUFLLEVBRkksRUFFQUMsS0FBSyxFQUZMLEVBRVNyQyxRQUFRLEVBRmpCO0FBR1QsYUFBSyxFQUhJLEVBR0FzQyxNQUFNLEVBSE4sRUFHVUMsU0FBUyxFQUhuQjtBQUlULGFBQUssRUFKSSxFQUlBQyxTQUFTO0FBSlQsS0FMakI7O0FBV0k7QUFDQUMsV0FBTztBQUNIQyxtQkFBVyxDQURSLEVBQ1dDLEtBQUssQ0FEaEIsRUFDbUJDLE9BQU8sRUFEMUI7QUFFSEMsZUFBTyxFQUZKLEVBRVEsVUFBVSxFQUZsQjtBQUdIQyxhQUFLLEVBSEYsRUFHTUMsUUFBUSxFQUhkLEVBR2tCQyxPQUFPLEVBSHpCO0FBSUh0QixjQUFNLEVBSkgsRUFJT3VCLElBQUksRUFKWDtBQUtIdEIsZUFBTyxFQUxKLEVBS1F1QixNQUFNLEVBTGQ7QUFNSEMsYUFBSyxFQU5GLEVBTU0sVUFBVSxFQU5oQjtBQU9IQyxjQUFNLEVBUEgsRUFPT0MsS0FBSyxFQVBaO0FBUUhDLGdCQUFRLEVBUkwsRUFRU0MsVUFBVSxFQVJuQjtBQVNILGFBQUssR0FURixFQVNPLEtBQUssR0FUWixFQVNpQixLQUFLLEdBVHRCO0FBVUgsYUFBSyxHQVZGLEVBVU8sS0FBSyxHQVZaLEVBVWlCLEtBQUssR0FWdEI7QUFXSCxhQUFLLEdBWEYsRUFXTyxNQUFNLEdBWGI7QUFZSCxhQUFLLEdBWkYsRUFZTyxLQUFLLEdBWlosRUFZaUIsTUFBTTtBQVp2QixLQVpYO0FBQUEsUUEwQklDLE9BQU8sU0FBUEEsSUFBTyxDQUFVNU0sQ0FBVixFQUFhO0FBQ2hCLGVBQU82TCxLQUFLN0wsQ0FBTCxLQUFXQSxFQUFFNk0sV0FBRixHQUFnQkMsVUFBaEIsQ0FBMkIsQ0FBM0IsQ0FBbEI7QUFDSCxLQTVCTDtBQUFBLFFBNkJJQyxZQUFZLEVBN0JoQjs7QUErQkEsU0FBSzVCLElBQUksQ0FBVCxFQUFZQSxJQUFJLEVBQWhCLEVBQW9CQSxHQUFwQjtBQUF5QlUsYUFBSyxNQUFNVixDQUFYLElBQWdCLE1BQU1BLENBQXRCO0FBQXpCLEtBaENpQixDQWtDakI7QUFDQSxhQUFTNkIsS0FBVCxDQUFlQyxLQUFmLEVBQXNCQyxJQUF0QixFQUE0QjtBQUN4QixZQUFJN0QsSUFBSTRELE1BQU1yRSxNQUFkO0FBQ0EsZUFBT1MsR0FBUDtBQUFZLGdCQUFJNEQsTUFBTTVELENBQU4sTUFBYTZELElBQWpCLEVBQXVCLE9BQU83RCxDQUFQO0FBQW5DLFNBQ0EsT0FBTyxDQUFDLENBQVI7QUFDSDs7QUFFRDtBQUNBLGFBQVM4RCxZQUFULENBQXNCQyxFQUF0QixFQUEwQkMsRUFBMUIsRUFBOEI7QUFDMUIsWUFBSUQsR0FBR3hFLE1BQUgsSUFBYXlFLEdBQUd6RSxNQUFwQixFQUE0QixPQUFPLEtBQVA7QUFDNUIsYUFBSyxJQUFJUyxJQUFJLENBQWIsRUFBZ0JBLElBQUkrRCxHQUFHeEUsTUFBdkIsRUFBK0JTLEdBQS9CLEVBQW9DO0FBQ2hDLGdCQUFJK0QsR0FBRy9ELENBQUgsTUFBVWdFLEdBQUdoRSxDQUFILENBQWQsRUFBcUIsT0FBTyxLQUFQO0FBQ3hCO0FBQ0QsZUFBTyxJQUFQO0FBQ0g7O0FBRUQsUUFBSWlFLGNBQWM7QUFDZCxZQUFJLFVBRFU7QUFFZCxZQUFJLFFBRlU7QUFHZCxZQUFJLFNBSFU7QUFJZCxZQUFJO0FBSlUsS0FBbEI7QUFNQSxhQUFTQyxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFDOUIsYUFBS3JDLENBQUwsSUFBVUUsS0FBVjtBQUFpQkEsa0JBQU1GLENBQU4sSUFBV3FDLE1BQU1GLFlBQVluQyxDQUFaLENBQU4sQ0FBWDtBQUFqQjtBQUNIOztBQUVEO0FBQ0EsYUFBU3NDLFFBQVQsQ0FBa0JELEtBQWxCLEVBQXlCO0FBQ3JCLFlBQUlqRixHQUFKLEVBQVNtRixPQUFULEVBQWtCdkMsQ0FBbEIsRUFBcUI5QixDQUFyQixFQUF3QnNFLGNBQXhCLEVBQXdDQyxLQUF4QztBQUNBckYsY0FBTWlGLE1BQU14TyxPQUFaOztBQUVBLFlBQUlnTyxNQUFNRCxTQUFOLEVBQWlCeEUsR0FBakIsS0FBeUIsQ0FBQyxDQUE5QixFQUFpQztBQUM3QndFLHNCQUFVYyxJQUFWLENBQWV0RixHQUFmO0FBQ0g7O0FBRUQ7QUFDQSxZQUFJQSxPQUFPLEVBQVAsSUFBYUEsT0FBTyxHQUF4QixFQUE2QkEsTUFBTSxFQUFOLENBVFIsQ0FTa0I7QUFDdkMsWUFBSUEsT0FBTzhDLEtBQVgsRUFBa0I7QUFDZEEsa0JBQU05QyxHQUFOLElBQWEsSUFBYjtBQUNBO0FBQ0EsaUJBQUs0QyxDQUFMLElBQVVJLFVBQVY7QUFBc0Isb0JBQUlBLFdBQVdKLENBQVgsS0FBaUI1QyxHQUFyQixFQUEwQnVGLFVBQVUzQyxDQUFWLElBQWUsSUFBZjtBQUFoRCxhQUNBO0FBQ0g7QUFDRG9DLDBCQUFrQkMsS0FBbEI7O0FBRUE7QUFDQTtBQUNBLFlBQUksQ0FBQ00sVUFBVUMsTUFBVixDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEJSLEtBQTVCLENBQUwsRUFBeUM7O0FBRXpDO0FBQ0EsWUFBSSxFQUFFakYsT0FBTzZDLFNBQVQsQ0FBSixFQUF5Qjs7QUFFekJ3QyxnQkFBUUssVUFBUjs7QUFFQTtBQUNBLGFBQUs1RSxJQUFJLENBQVQsRUFBWUEsSUFBSStCLFVBQVU3QyxHQUFWLEVBQWVLLE1BQS9CLEVBQXVDUyxHQUF2QyxFQUE0QztBQUN4Q3FFLHNCQUFVdEMsVUFBVTdDLEdBQVYsRUFBZWMsQ0FBZixDQUFWOztBQUVBO0FBQ0EsZ0JBQUlxRSxRQUFRRSxLQUFSLElBQWlCQSxLQUFqQixJQUEwQkYsUUFBUUUsS0FBUixJQUFpQixLQUEvQyxFQUFzRDtBQUNsRDtBQUNBRCxpQ0FBaUJELFFBQVFRLElBQVIsQ0FBYXRGLE1BQWIsR0FBc0IsQ0FBdkM7QUFDQSxxQkFBS3VDLENBQUwsSUFBVUUsS0FBVjtBQUNJLHdCQUFLLENBQUNBLE1BQU1GLENBQU4sQ0FBRCxJQUFhNkIsTUFBTVUsUUFBUVEsSUFBZCxFQUFvQixDQUFDL0MsQ0FBckIsSUFBMEIsQ0FBQyxDQUF6QyxJQUNDRSxNQUFNRixDQUFOLEtBQVk2QixNQUFNVSxRQUFRUSxJQUFkLEVBQW9CLENBQUMvQyxDQUFyQixLQUEyQixDQUFDLENBRDdDLEVBQ2lEd0MsaUJBQWlCLEtBQWpCO0FBRnJELGlCQUhrRCxDQU1sRDtBQUNBLG9CQUFLRCxRQUFRUSxJQUFSLENBQWF0RixNQUFiLElBQXVCLENBQXZCLElBQTRCLENBQUN5QyxNQUFNLEVBQU4sQ0FBN0IsSUFBMEMsQ0FBQ0EsTUFBTSxFQUFOLENBQTNDLElBQXdELENBQUNBLE1BQU0sRUFBTixDQUF6RCxJQUFzRSxDQUFDQSxNQUFNLEVBQU4sQ0FBeEUsSUFBc0ZzQyxjQUExRixFQUEwRztBQUN0Ryx3QkFBSUQsUUFBUVMsTUFBUixDQUFlWCxLQUFmLEVBQXNCRSxPQUF0QixNQUFtQyxLQUF2QyxFQUE4QztBQUMxQyw0QkFBSUYsTUFBTXZPLGNBQVYsRUFBMEJ1TyxNQUFNdk8sY0FBTixHQUExQixLQUNLdU8sTUFBTVksV0FBTixHQUFvQixLQUFwQjtBQUNMLDRCQUFJWixNQUFNYSxlQUFWLEVBQTJCYixNQUFNYSxlQUFOO0FBQzNCLDRCQUFJYixNQUFNYyxZQUFWLEVBQXdCZCxNQUFNYyxZQUFOLEdBQXFCLElBQXJCO0FBQzNCO0FBQ0o7QUFDSjtBQUNKO0FBQ0o7O0FBRUQ7QUFDQSxhQUFTQyxhQUFULENBQXVCZixLQUF2QixFQUE4QjtBQUMxQixZQUFJakYsTUFBTWlGLE1BQU14TyxPQUFoQjtBQUFBLFlBQXlCbU0sQ0FBekI7QUFBQSxZQUNJOUIsSUFBSTJELE1BQU1ELFNBQU4sRUFBaUJ4RSxHQUFqQixDQURSOztBQUdBO0FBQ0EsWUFBSWMsS0FBSyxDQUFULEVBQVk7QUFDUjBELHNCQUFVeUIsTUFBVixDQUFpQm5GLENBQWpCLEVBQW9CLENBQXBCO0FBQ0g7O0FBRUQsWUFBSWQsT0FBTyxFQUFQLElBQWFBLE9BQU8sR0FBeEIsRUFBNkJBLE1BQU0sRUFBTjtBQUM3QixZQUFJQSxPQUFPOEMsS0FBWCxFQUFrQjtBQUNkQSxrQkFBTTlDLEdBQU4sSUFBYSxLQUFiO0FBQ0EsaUJBQUs0QyxDQUFMLElBQVVJLFVBQVY7QUFBc0Isb0JBQUlBLFdBQVdKLENBQVgsS0FBaUI1QyxHQUFyQixFQUEwQnVGLFVBQVUzQyxDQUFWLElBQWUsS0FBZjtBQUFoRDtBQUNIO0FBQ0o7O0FBRUQsYUFBU3NELGNBQVQsR0FBMEI7QUFDdEIsYUFBS3RELENBQUwsSUFBVUUsS0FBVjtBQUFpQkEsa0JBQU1GLENBQU4sSUFBVyxLQUFYO0FBQWpCLFNBQ0EsS0FBS0EsQ0FBTCxJQUFVSSxVQUFWO0FBQXNCdUMsc0JBQVUzQyxDQUFWLElBQWUsS0FBZjtBQUF0QjtBQUNIOztBQUVEO0FBQ0EsYUFBUzJDLFNBQVQsQ0FBbUJ2RixHQUFuQixFQUF3QnFGLEtBQXhCLEVBQStCTyxNQUEvQixFQUF1QztBQUNuQyxZQUFJTyxJQUFKLEVBQVVSLElBQVY7QUFDQVEsZUFBT0MsUUFBUXBHLEdBQVIsQ0FBUDtBQUNBLFlBQUk0RixXQUFXUyxTQUFmLEVBQTBCO0FBQ3RCVCxxQkFBU1AsS0FBVDtBQUNBQSxvQkFBUSxLQUFSO0FBQ0g7O0FBRUQ7QUFDQSxhQUFLLElBQUl2RSxJQUFJLENBQWIsRUFBZ0JBLElBQUlxRixLQUFLOUYsTUFBekIsRUFBaUNTLEdBQWpDLEVBQXNDO0FBQ2xDO0FBQ0E2RSxtQkFBTyxFQUFQO0FBQ0EzRixrQkFBTW1HLEtBQUtyRixDQUFMLEVBQVF3RixLQUFSLENBQWMsR0FBZCxDQUFOO0FBQ0EsZ0JBQUl0RyxJQUFJSyxNQUFKLEdBQWEsQ0FBakIsRUFBb0I7QUFDaEJzRix1QkFBT1ksUUFBUXZHLEdBQVIsQ0FBUDtBQUNBQSxzQkFBTSxDQUFDQSxJQUFJQSxJQUFJSyxNQUFKLEdBQWEsQ0FBakIsQ0FBRCxDQUFOO0FBQ0g7QUFDRDtBQUNBTCxrQkFBTUEsSUFBSSxDQUFKLENBQU47QUFDQUEsa0JBQU1xRSxLQUFLckUsR0FBTCxDQUFOO0FBQ0E7QUFDQSxnQkFBSSxFQUFFQSxPQUFPNkMsU0FBVCxDQUFKLEVBQXlCQSxVQUFVN0MsR0FBVixJQUFpQixFQUFqQjtBQUN6QjZDLHNCQUFVN0MsR0FBVixFQUFlc0YsSUFBZixDQUFvQixFQUFFa0IsVUFBVUwsS0FBS3JGLENBQUwsQ0FBWixFQUFxQnVFLE9BQU9BLEtBQTVCLEVBQW1DTyxRQUFRQSxNQUEzQyxFQUFtRDVGLEtBQUttRyxLQUFLckYsQ0FBTCxDQUF4RCxFQUFpRTZFLE1BQU1BLElBQXZFLEVBQXBCO0FBQ0g7QUFDSjs7QUFFRDtBQUNBLGFBQVNjLFNBQVQsQ0FBbUJ6RyxHQUFuQixFQUF3QnFGLEtBQXhCLEVBQStCO0FBQzNCLFlBQUlxQixZQUFKO0FBQUEsWUFBa0JQLElBQWxCO0FBQUEsWUFDSVIsT0FBTyxFQURYO0FBQUEsWUFFSTdFLENBRko7QUFBQSxZQUVPNkYsQ0FGUDtBQUFBLFlBRVVDLEdBRlY7O0FBSUFGLHVCQUFlTixRQUFRcEcsR0FBUixDQUFmOztBQUVBLGFBQUsyRyxJQUFJLENBQVQsRUFBWUEsSUFBSUQsYUFBYXJHLE1BQTdCLEVBQXFDc0csR0FBckMsRUFBMEM7QUFDdENSLG1CQUFPTyxhQUFhQyxDQUFiLEVBQWdCTCxLQUFoQixDQUFzQixHQUF0QixDQUFQOztBQUVBLGdCQUFJSCxLQUFLOUYsTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ2pCc0YsdUJBQU9ZLFFBQVFKLElBQVIsQ0FBUDtBQUNIOztBQUVEbkcsa0JBQU1tRyxLQUFLQSxLQUFLOUYsTUFBTCxHQUFjLENBQW5CLENBQU47QUFDQUwsa0JBQU1xRSxLQUFLckUsR0FBTCxDQUFOOztBQUVBLGdCQUFJcUYsVUFBVWdCLFNBQWQsRUFBeUI7QUFDckJoQix3QkFBUUssVUFBUjtBQUNIO0FBQ0QsZ0JBQUksQ0FBQzdDLFVBQVU3QyxHQUFWLENBQUwsRUFBcUI7QUFDakI7QUFDSDtBQUNELGlCQUFLYyxJQUFJLENBQVQsRUFBWUEsSUFBSStCLFVBQVU3QyxHQUFWLEVBQWVLLE1BQS9CLEVBQXVDUyxHQUF2QyxFQUE0QztBQUN4QzhGLHNCQUFNL0QsVUFBVTdDLEdBQVYsRUFBZWMsQ0FBZixDQUFOO0FBQ0E7QUFDQSxvQkFBSThGLElBQUl2QixLQUFKLEtBQWNBLEtBQWQsSUFBdUJULGFBQWFnQyxJQUFJakIsSUFBakIsRUFBdUJBLElBQXZCLENBQTNCLEVBQXlEO0FBQ3JEOUMsOEJBQVU3QyxHQUFWLEVBQWVjLENBQWYsSUFBb0IsRUFBcEI7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7QUFFRDtBQUNBO0FBQ0EsYUFBU1csU0FBVCxDQUFtQmhMLE9BQW5CLEVBQTRCO0FBQ3hCLFlBQUksT0FBUUEsT0FBUixJQUFvQixRQUF4QixFQUFrQztBQUM5QkEsc0JBQVU0TixLQUFLNU4sT0FBTCxDQUFWO0FBQ0g7QUFDRCxlQUFPZ08sTUFBTUQsU0FBTixFQUFpQi9OLE9BQWpCLEtBQTZCLENBQUMsQ0FBckM7QUFDSDs7QUFFRCxhQUFTb1Esa0JBQVQsR0FBOEI7QUFDMUIsZUFBT3JDLFVBQVVzQyxLQUFWLENBQWdCLENBQWhCLENBQVA7QUFDSDs7QUFFRCxhQUFTdEIsTUFBVCxDQUFnQlAsS0FBaEIsRUFBdUI7QUFDbkIsWUFBSThCLFVBQVUsQ0FBQzlCLE1BQU0rQixNQUFOLElBQWdCL0IsTUFBTWdDLFVBQXZCLEVBQW1DRixPQUFqRDtBQUNBO0FBQ0EsZUFBTyxFQUFFQSxXQUFXLE9BQVgsSUFBc0JBLFdBQVcsUUFBakMsSUFBNkNBLFdBQVcsVUFBMUQsQ0FBUDtBQUNIOztBQUVEO0FBQ0EsU0FBS25FLENBQUwsSUFBVUksVUFBVjtBQUFzQnVDLGtCQUFVM0MsQ0FBVixJQUFlLEtBQWY7QUFBdEIsS0F2TmlCLENBeU5qQjtBQUNBLGFBQVNzRSxRQUFULENBQWtCN0IsS0FBbEIsRUFBeUI7QUFBRXRDLGlCQUFTc0MsU0FBUyxLQUFsQjtBQUF5QjtBQUNwRCxhQUFTSyxRQUFULEdBQW9CO0FBQUUsZUFBTzNDLFVBQVUsS0FBakI7QUFBd0I7O0FBRTlDO0FBQ0EsYUFBU29FLFdBQVQsQ0FBcUI5QixLQUFyQixFQUE0QjtBQUN4QixZQUFJckYsR0FBSixFQUFTb0gsUUFBVCxFQUFtQnRHLENBQW5COztBQUVBLGFBQUtkLEdBQUwsSUFBWTZDLFNBQVosRUFBdUI7QUFDbkJ1RSx1QkFBV3ZFLFVBQVU3QyxHQUFWLENBQVg7QUFDQSxpQkFBS2MsSUFBSSxDQUFULEVBQVlBLElBQUlzRyxTQUFTL0csTUFBekIsR0FBa0M7QUFDOUIsb0JBQUkrRyxTQUFTdEcsQ0FBVCxFQUFZdUUsS0FBWixLQUFzQkEsS0FBMUIsRUFBaUMrQixTQUFTbkIsTUFBVCxDQUFnQm5GLENBQWhCLEVBQW1CLENBQW5CLEVBQWpDLEtBQ0tBO0FBQ1I7QUFDSjtBQUNKOztBQUVEO0FBQ0EsYUFBU3NGLE9BQVQsQ0FBaUJwRyxHQUFqQixFQUFzQjtBQUNsQixZQUFJbUcsSUFBSjtBQUNBbkcsY0FBTUEsSUFBSXFILE9BQUosQ0FBWSxLQUFaLEVBQW1CLEVBQW5CLENBQU47QUFDQWxCLGVBQU9uRyxJQUFJc0csS0FBSixDQUFVLEdBQVYsQ0FBUDtBQUNBLFlBQUtILEtBQUtBLEtBQUs5RixNQUFMLEdBQWMsQ0FBbkIsQ0FBRCxJQUEyQixFQUEvQixFQUFtQztBQUMvQjhGLGlCQUFLQSxLQUFLOUYsTUFBTCxHQUFjLENBQW5CLEtBQXlCLEdBQXpCO0FBQ0g7QUFDRCxlQUFPOEYsSUFBUDtBQUNIOztBQUVEO0FBQ0EsYUFBU0ksT0FBVCxDQUFpQnZHLEdBQWpCLEVBQXNCO0FBQ2xCLFlBQUkyRixPQUFPM0YsSUFBSThHLEtBQUosQ0FBVSxDQUFWLEVBQWE5RyxJQUFJSyxNQUFKLEdBQWEsQ0FBMUIsQ0FBWDtBQUNBLGFBQUssSUFBSWlILEtBQUssQ0FBZCxFQUFpQkEsS0FBSzNCLEtBQUt0RixNQUEzQixFQUFtQ2lILElBQW5DO0FBQ0kzQixpQkFBSzJCLEVBQUwsSUFBV3RFLFdBQVcyQyxLQUFLMkIsRUFBTCxDQUFYLENBQVg7QUFESixTQUVBLE9BQU8zQixJQUFQO0FBQ0g7O0FBRUQ7QUFDQSxhQUFTNEIsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEJ2QyxLQUExQixFQUFpQ1csTUFBakMsRUFBeUM7QUFDckMsWUFBSTRCLE9BQU90UixnQkFBWCxFQUNJc1IsT0FBT3RSLGdCQUFQLENBQXdCK08sS0FBeEIsRUFBK0JXLE1BQS9CLEVBQXVDLEtBQXZDLEVBREosS0FFSyxJQUFJNEIsT0FBT0MsV0FBWCxFQUNERCxPQUFPQyxXQUFQLENBQW1CLE9BQU94QyxLQUExQixFQUFpQyxZQUFZO0FBQUVXLG1CQUFPdFAsT0FBTzJPLEtBQWQ7QUFBc0IsU0FBckU7QUFDUDs7QUFFRDtBQUNBc0MsYUFBU3RSLFFBQVQsRUFBbUIsU0FBbkIsRUFBOEIsVUFBVWdQLEtBQVYsRUFBaUI7QUFBRUMsaUJBQVNELEtBQVQ7QUFBaUIsS0FBbEUsRUF0UWlCLENBc1FvRDtBQUNyRXNDLGFBQVN0UixRQUFULEVBQW1CLE9BQW5CLEVBQTRCK1AsYUFBNUI7O0FBRUE7QUFDQXVCLGFBQVNqUixNQUFULEVBQWlCLE9BQWpCLEVBQTBCNFAsY0FBMUI7O0FBRUE7QUFDQSxRQUFJd0IsY0FBY3BSLE9BQU8wSixHQUF6Qjs7QUFFQTtBQUNBLGFBQVMySCxVQUFULEdBQXNCO0FBQ2xCLFlBQUkvRSxJQUFJdE0sT0FBTzBKLEdBQWY7QUFDQTFKLGVBQU8wSixHQUFQLEdBQWEwSCxXQUFiO0FBQ0EsZUFBTzlFLENBQVA7QUFDSDs7QUFFRDtBQUNBdE0sV0FBTzBKLEdBQVAsR0FBYXVGLFNBQWI7QUFDQWpQLFdBQU8wSixHQUFQLENBQVdrSCxRQUFYLEdBQXNCQSxRQUF0QjtBQUNBNVEsV0FBTzBKLEdBQVAsQ0FBVzBGLFFBQVgsR0FBc0JBLFFBQXRCO0FBQ0FwUCxXQUFPMEosR0FBUCxDQUFXbUgsV0FBWCxHQUF5QkEsV0FBekI7QUFDQTdRLFdBQU8wSixHQUFQLENBQVd3RixNQUFYLEdBQW9CQSxNQUFwQjtBQUNBbFAsV0FBTzBKLEdBQVAsQ0FBV3lCLFNBQVgsR0FBdUJBLFNBQXZCO0FBQ0FuTCxXQUFPMEosR0FBUCxDQUFXNkcsa0JBQVgsR0FBZ0NBLGtCQUFoQztBQUNBdlEsV0FBTzBKLEdBQVAsQ0FBVzJILFVBQVgsR0FBd0JBLFVBQXhCO0FBQ0FyUixXQUFPMEosR0FBUCxDQUFXQyxNQUFYLEdBQW9Cd0csU0FBcEI7O0FBRUEsUUFBSSxJQUFKLEVBQW1DbUIsT0FBT0MsT0FBUCxHQUFpQnRDLFNBQWpCO0FBRXRDLENBblNDLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNKbUI1SixJO0FBQ2pCLGtCQUFZbU0sSUFBWixFQUFrQjtBQUFBOztBQUNkLGFBQUtwUSxLQUFMLEdBQWFvUSxLQUFLcFEsS0FBbEI7QUFDQSxhQUFLRSxNQUFMLEdBQWNrUSxLQUFLbFEsTUFBbkI7QUFDSDs7OzsrQ0FFc0JtUSxTLEVBQVc7QUFDOUIsZ0JBQU1DLFdBQVcsS0FBS0MsU0FBTCxFQUFqQjtBQUNBLGdCQUFNL0YsT0FBTzZGLFVBQVVFLFNBQVYsRUFBYjtBQUNBLGdCQUFJRCxTQUFTekYsSUFBVCxHQUFnQkwsS0FBS00sS0FBckIsSUFBOEJ3RixTQUFTeEYsS0FBVCxHQUFpQk4sS0FBS0ssSUFBeEQsRUFBOEQ7QUFDMUQsdUJBQU8sS0FBUDtBQUNIO0FBQ0QsZ0JBQUl5RixTQUFTdkYsR0FBVCxHQUFlUCxLQUFLUSxNQUFwQixJQUE4QnNGLFNBQVN0RixNQUFULEdBQWtCUixLQUFLTyxHQUF6RCxFQUE4RDtBQUMxRCx1QkFBTyxLQUFQO0FBQ0g7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7OztvQ0FFVztBQUNSLG1CQUFPO0FBQ0hGLHNCQUFNLEtBQUsvSyxRQUFMLENBQWNDLENBRGpCO0FBRUgrSyx1QkFBTyxLQUFLaEwsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLEtBQUtDLEtBRjNCO0FBR0grSyxxQkFBSyxLQUFLakwsUUFBTCxDQUFjRyxDQUhoQjtBQUlIK0ssd0JBQVEsS0FBS2xMLFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixLQUFLQztBQUo1QixhQUFQO0FBTUg7Ozs7OztrQkF6QmdCK0QsSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jbGllbnQvc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IE5CQUphbUdhbWUgZnJvbSAnLi9qcy9nYW1lLmpzJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYmEtamFtLWdhbWUnKTtcbiAgICBjb25zdCBjYW52YXNCYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25iYS1qYW0tYmFja2dyb3VuZCcpO1xuXG4gICAgLy8gUHJldmVudCBzY3JvbGxpbmcgd2l0aCBhcnJvdyBrZXlzXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIHNwYWNlIGFuZCBhcnJvdyBrZXlzXG4gICAgICAgIGlmIChbMzIsIDM3LCAzOCwgMzksIDQwXS5pbmRleE9mKGUua2V5Q29kZSkgPiAtMSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICAgIG5ldyBOQkFKYW1HYW1lKGNhbnZhcywgY2FudmFzQmFja2dyb3VuZCk7XG59KTsiLCJpbXBvcnQgQ2lyY2xlIGZyb20gXCIuL3V0aWxzL2NpcmNsZVwiO1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgUkFESVVTOiAxNSxcbiAgICBHUkFWSVRZOiAwLjUsXG4gICAgQk9VTkNFX1JFVEVOVElPTjogMC42LFxuICAgIERSSUJCTEVfU1BFRUQ6IDMsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGwgZXh0ZW5kcyBDaXJjbGUge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIGNvdXJ0LCBsZWZ0SG9vcCwgcmlnaHRIb29wLCBnYW1lSWQpIHtcbiAgICAgICAgc3VwZXIoQ09OU1RBTlRTLlJBRElVUylcbiAgICAgICAgdGhpcy5jb3VydCA9IGNvdXJ0XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5sZWZ0SG9vcCA9IGxlZnRIb29wXG4gICAgICAgIHRoaXMucmlnaHRIb29wID0gcmlnaHRIb29wXG4gICAgICAgIHRoaXMubGVmdEhvb3AuYmFsbCA9IHRoaXNcbiAgICAgICAgdGhpcy5yaWdodEhvb3AuYmFsbCA9IHRoaXNcblxuICAgICAgICB0aGlzLmdhbWVJZCA9IGdhbWVJZFxuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNvdXJ0LndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwiaG90cGlua1wiXG4gICAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcbiAgICAgICAgdGhpcy5ub1RvdWNoID0ge31cbiAgICAgICAgdGhpcy5wb3dlciA9IDBcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLm1vdmUoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54LCBcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSwgXG4gICAgICAgICAgICB0aGlzLnJhZGl1cywgXG4gICAgICAgICAgICAwLCBcbiAgICAgICAgICAgIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgXG4gICAgY2xhaW1Qb3NzZXNzaW9uKHBsYXllcikge1xuICAgICAgICBpZiAoIXRoaXMubm9Ub3VjaFtwbGF5ZXIuY29sb3JdKSB7XG4gICAgICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBwbGF5ZXJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwiY2hhbmdlT2ZQb3NzZXNpb25cIiwge1xuICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWQsXG4gICAgICAgICAgICAgICAgZnJvbVNvY2tldDogc29ja2V0LmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzaG9vdCAoKSB7XG4gICAgICAgIC8vIEJFVEEgU0hPT1RJTkdcblxuICAgICAgICAvLyB0aGlzLnBvd2VyICs9IDFcbiAgICAgICAgLy8gY29uc3Qgc2hvb3RpbmdQbGF5ZXIgPSB0aGlzLnBvc3Nlc3Npb25cbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi54ID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgP1xuICAgICAgICAvLyAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggKyBzaG9vdGluZ1BsYXllci53aWR0aCArIHRoaXMucmFkaXVzKSA6XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzKVxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnkgPSBzaG9vdGluZ1BsYXllci5wb3NpdGlvbi55XG5cbiAgICAgICAgLy8gaWYgKHRoaXMuc2hvb3RpbmdJbnRlcnZhbCAmJiB0aGlzLnBvd2VyIDwgNjApIHtcbiAgICAgICAgLy8gICAgIGNsZWFyVGltZW91dCh0aGlzLnNob290aW5nSW50ZXJ2YWwpXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKHRoaXMucG93ZXIgPCA2MCkge1xuICAgICAgICAvLyAgICAgdGhpcy5zaG9vdGluZ0ludGVydmFsID0gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgPyA2IDogLTZcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSB0aGlzLnBvd2VyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gdHJ1ZSAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSBmYWxzZVxuICAgICAgICAvLyAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wb3dlciA9IDBcbiAgICAgICAgLy8gICAgIH0sIDIwKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIEFJTUJPVCBTSE9PVElOR1xuXG4gICAgICAgIC8vIGNvbnN0IHNob290aW5nUGxheWVyID0gdGhpcy5wb3NzZXNzaW9uXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID9cbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54ICsgc2hvb3RpbmdQbGF5ZXIud2lkdGggKyB0aGlzLnJhZGl1cykgOlxuICAgICAgICAvLyAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cylcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ID0gc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueVxuXG4gICAgICAgIC8vIGNvbnN0IHNjb3JlUG9zaXRpb24gPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICB4OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgIC8vICAgICAgICAgeTogdGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyApIDogKFxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIHg6IHRoaXMubGVmdEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueCArICh0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC53aWR0aCAvIDIpLFxuICAgICAgICAvLyAgICAgICAgIHk6IHRoaXMubGVmdEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueVxuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgIC8vIClcblxuICAgICAgICAvLyBjb25zdCBudW1iZXJPZkZyYW1lcyA9IDUwXG5cbiAgICAgICAgLy8gY29uc3QgdmVsb2NpdHlYID0gKHNjb3JlUG9zaXRpb24ueCAtIHRoaXMucG9zaXRpb24ueCkgLyBudW1iZXJPZkZyYW1lc1xuICAgICAgICAvLyBjb25zdCB2ZWxvY2l0eVkgPSAoICgtc2NvcmVQb3NpdGlvbi55ICsgdGhpcy5wb3NpdGlvbi55KSAtIDAuNSAqIC1DT05TVEFOVFMuR1JBVklUWSAqIChudW1iZXJPZkZyYW1lcyAqIG51bWJlck9mRnJhbWVzKSApIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgIC8vICAgICB4OiB2ZWxvY2l0eVgsXG4gICAgICAgIC8vICAgICB5OiB2ZWxvY2l0eVlcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSB0cnVlICAgICAgICBcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gZmFsc2VcbiAgICAgICAgLy8gfSwgNTAwKTtcblxuICAgICAgICAvLyB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG5cbiAgICAgICAgLy8gUE9XRVJCQVNFRCBBSU1FRCBTSE9PVElOR1xuXG5cbiAgICAgICAgdGhpcy5wb3dlciArPSAxXG5cbiAgICAgICAgY29uc3Qgc2hvb3RpbmdQbGF5ZXIgPSB0aGlzLnBvc3Nlc3Npb25cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgP1xuICAgICAgICAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggKyBzaG9vdGluZ1BsYXllci53aWR0aCArIHRoaXMucmFkaXVzKSA6XG4gICAgICAgICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzKVxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBzaG9vdGluZ1BsYXllci5wb3NpdGlvbi55XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvb3RpbmdUaW1lb3V0ICYmIHRoaXMucG93ZXIgPCA2MCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2hvb3RpbmdUaW1lb3V0KVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvd2VyIDwgNjApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvb3RpbmdUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxlYXNlQmFsbCgpXG4gICAgICAgICAgICB9LCAyMCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlbGVhc2VCYWxsICgpIHtcbiAgICAgICAgY29uc3Qgc2hvb3RpbmdQbGF5ZXIgPSB0aGlzLnBvc3Nlc3Npb25cblxuICAgICAgICBjb25zdCBzY29yZVBvc2l0aW9uID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgPyAoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueCArICh0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC53aWR0aCAvIDIpLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmxlZnRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmxlZnRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuXG4gICAgICAgIC8vIExBWVVQXG4gICAgICAgIGlmICgxNTAgPiBNYXRoLmh5cG90KHRoaXMucG9zaXRpb24ueCAtIHNjb3JlUG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55IC0gc2NvcmVQb3NpdGlvbi55KSkge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSAzMFxuICAgICAgICAgICAgY29uc3QgdmVsb2NpdHlYID0gKHNjb3JlUG9zaXRpb24ueCAtIHRoaXMucG9zaXRpb24ueCkgLyBudW1iZXJPZkZyYW1lc1xuICAgICAgICAgICAgY29uc3QgdmVsb2NpdHlZID0gKCgtc2NvcmVQb3NpdGlvbi55ICsgdGhpcy5wb3NpdGlvbi55KSAtIDAuNSAqIC1DT05TVEFOVFMuR1JBVklUWSAqIChudW1iZXJPZkZyYW1lcyAqIG51bWJlck9mRnJhbWVzKSkgLyBudW1iZXJPZkZyYW1lc1xuXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gKHRoaXMucG93ZXIgLSAzMCkgLyAyMFxuICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWRYID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgPyAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYICsgZGlmZlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eVggLSBkaWZmXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgICAgIHg6IGFkanVzdGVkWCxcbiAgICAgICAgICAgICAgICB5OiB2ZWxvY2l0eVlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNIT1RcbiAgICAgICAgICAgIGNvbnN0IG51bWJlck9mRnJhbWVzID0gNTBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdmVsb2NpdHlYID0gKHNjb3JlUG9zaXRpb24ueCAtIHRoaXMucG9zaXRpb24ueCkgLyBudW1iZXJPZkZyYW1lc1xuICAgICAgICAgICAgY29uc3QgdmVsb2NpdHlZID0gKCgtc2NvcmVQb3NpdGlvbi55ICsgdGhpcy5wb3NpdGlvbi55KSAtIDAuNSAqIC1DT05TVEFOVFMuR1JBVklUWSAqIChudW1iZXJPZkZyYW1lcyAqIG51bWJlck9mRnJhbWVzKSkgLyBudW1iZXJPZkZyYW1lc1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGlmZiA9ICh0aGlzLnBvd2VyIC0gMzApIC8gNlxuICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWRYID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgPyAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYICsgZGlmZlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eVggLSBkaWZmXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgICAgIHg6IGFkanVzdGVkWCxcbiAgICAgICAgICAgICAgICB5OiB2ZWxvY2l0eVlcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSB0cnVlXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IGZhbHNlXG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgdGhpcy5wb3dlciA9IDBcbiAgICAgICAgdGhpcy5yZW1vdmVQb3NzZXNzaW9uKClcblxuICAgIH1cblxuICAgIHJlbW92ZVBvc3Nlc3Npb24oKSB7XG4gICAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcbiAgICAgICAgc29ja2V0LmVtaXQoXCJyZW1vdmVCYWxsUG9zc2Vzc2lvblwiLCB7XG4gICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkLFxuICAgICAgICAgICAgZnJvbVNvY2tldDogc29ja2V0LmlkLFxuICAgICAgICAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHksXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG1vdmUoKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnBvc3Nlc3Npb24pIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbCgpXG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVdpdGhQbGF5ZXJQb3NzZXNzaW9uKCkgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrQm91bmRzKClcbiAgICB9XG5cbiAgICBtb3ZlV2l0aFBsYXllclBvc3Nlc3Npb24oKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMucG9zc2Vzc2lvbi5mYWNpbmdSaWdodCA/XG4gICAgICAgICAgICAodGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLnggKyB0aGlzLnBvc3Nlc3Npb24ud2lkdGgpIDogKHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi54KVxuXG4gICAgICAgIGlmICh0aGlzLnBvc3Nlc3Npb24uanVtcGluZykge1xuICAgICAgICAgICAgLy8gSE9MRCBCQUxMXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueSArIHRoaXMucG9zc2Vzc2lvbi5oZWlnaHQgLyAyXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIERSSUJCTElOR1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA8IHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi55ICsgdGhpcy5wb3NzZXNzaW9uLmhlaWdodCAvIDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtQ09OU1RBTlRTLkRSSUJCTEVfU1BFRURcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi55ID4gdGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLnkgKyB0aGlzLnBvc3Nlc3Npb24uaGVpZ2h0IC0gdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSBDT05TVEFOVFMuRFJJQkJMRV9TUEVFRFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMudmVsb2NpdHkueVxuICAgICAgICB9XG4gICAgICAgIC8vIHNvY2tldC5lbWl0KFwidXBkYXRlQmFsbFdpdGhQb3NcIiwge1xuICAgICAgICAvLyAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZCxcbiAgICAgICAgLy8gICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZCxcbiAgICAgICAgLy8gICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxuICAgICAgICAvLyAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICAgIC8vICAgICBvdGhlclBsYXllckZhY2luZzogdGhpcy5wb3NzZXNzaW9uLmZhY2luZ1JpZ2h0XG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG5cbiAgICBmYWxsICgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMudmVsb2NpdHkueTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICAgICAgLy8gR1JBVklUWVxuICAgICAgICAvLyBpZiB0aGUgcG9zIGlzIGdyZWF0ZXIgdGhhbiB0aGUgZmxvb3JcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMucmFkaXVzIDwgdGhpcy5jb3VydC5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gQ09OU1RBTlRTLkdSQVZJVFk7XG4gICAgICAgICAgICAvLyBlbHNlIHNldCB0aGUgcmV2ZXJzZSB2ZWxvY2l0eVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmVsb2NpdHkueSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLnZlbG9jaXR5LnkgKiBDT05TVEFOVFMuQk9VTkNFX1JFVEVOVElPTlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjaGVja0JvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA+IHRoaXMuY291cnQud2lkdGggLSB0aGlzLnJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jb3VydC53aWR0aCAtIHRoaXMucmFkaXVzXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMFxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueFxuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IFJlY3QgZnJvbSBcIi4vdXRpbHMvcmVjdFwiO1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgQ09VUlRfRkxPT1I6IDAuODUsXG4gICAgQ09VUlRfV0lEVEg6IDUsXG4gICAgSE9PUF9ZX01VTFRJUExJRVI6IDAuMyxcbiAgICBIT09QX0hFSUdIVDogNDAsXG4gICAgSE9PUF9XSURUSDogNTAsXG4gICAgSE9PUF9YX0RJU1RBTkNFOiA1MCxcbiAgICBCQUNLQk9BUkRfV0lEVEg6IDE1LFxuICAgIEJBQ0tCT0FSRF9IRUlHSFQ6IDUwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VydCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIGJhY2tncm91bmRDYXZhcykge1xuICAgICAgICBzdXBlcih7IHdpZHRoOiBkaW1lbnNpb25zLndpZHRoLCBoZWlnaHQ6IENPTlNUQU5UUy5DT1VSVF9XSURUSCB9KVxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogZGltZW5zaW9ucy5oZWlnaHQgKiBDT05TVEFOVFMuQ09VUlRfRkxPT1JcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvb3BMZWZ0UG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwICsgQ09OU1RBTlRTLkhPT1BfWF9ESVNUQU5DRSAtIDYsXG4gICAgICAgICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAqIENPTlNUQU5UUy5IT09QX1lfTVVMVElQTElFUlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG9vcFJpZ2h0UG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiBkaW1lbnNpb25zLndpZHRoIC0gQ09OU1RBTlRTLkhPT1BfWF9ESVNUQU5DRSAtIENPTlNUQU5UUy5IT09QX1dJRFRIIC0gQ09OU1RBTlRTLkJBQ0tCT0FSRF9XSURUSCxcbiAgICAgICAgICAgIHk6IGRpbWVuc2lvbnMuaGVpZ2h0ICogQ09OU1RBTlRTLkhPT1BfWV9NVUxUSVBMSUVSXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sZWZ0SG9vcEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMucmlnaHRIb29wSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5sZWZ0SG9vcEltYWdlLnNyYyA9IFwic3JjL2Fzc2V0cy9jYXJ0b29uSG9vcExlZnQucG5nXCJcbiAgICAgICAgdGhpcy5yaWdodEhvb3BJbWFnZS5zcmMgPSBcInNyYy9hc3NldHMvY2FydG9vbkhvb3BSaWdodC5wbmdcIlxuXG4gICAgICAgIHRoaXMuY29sb3IgPSBcImdyZWVuXCJcbiAgICAgICAgdGhpcy5jb3VydEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuY291cnRJbWFnZS5zcmMgPSBcInNyYy9hc3NldHMvYmJhbGxjb3VydHNtYWxsLnBuZ1wiXG4gICAgICAgIHRoaXMuc2V0dXBCYWNrZ3JvdW5kQ291cnQoYmFja2dyb3VuZENhdmFzKVxuICAgIH0gIFxuXG4gICAgc2V0dXBCYWNrZ3JvdW5kQ291cnQoY2FudmFzKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIm9yYW5nZVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb3VydEltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jb3VydEltYWdlLFxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIHRoaXMuY291cnRJbWFnZS53aWR0aCAvIDEyLCBcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmNvdXJ0SW1hZ2UuaGVpZ2h0IC8gMixcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoICsgdGhpcy5jb3VydEltYWdlLndpZHRoIC8gNixcbiAgICAgICAgICAgICAgICB0aGlzLmNvdXJ0SW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxlZnRIb29wSW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRIb29wSW1hZ2UsXG4gICAgICAgICAgICAgICAgdGhpcy5ob29wTGVmdFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgdGhpcy5ob29wTGVmdFBvc2l0aW9uLnkgLSAoQ09OU1RBTlRTLkhPT1BfSEVJR0hUICsgNSksXG4gICAgICAgICAgICAgICAgQ09OU1RBTlRTLkhPT1BfV0lEVEggKyBDT05TVEFOVFMuQkFDS0JPQVJEX1dJRFRIICsgMTAsXG4gICAgICAgICAgICAgICAgQ09OU1RBTlRTLkhPT1BfSEVJR0hUICsgQ09OU1RBTlRTLkJBQ0tCT0FSRF9IRUlHSFQpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yaWdodEhvb3BJbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMucmlnaHRIb29wSW1hZ2UsXG4gICAgICAgICAgICAgICAgdGhpcy5ob29wUmlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIHRoaXMuaG9vcFJpZ2h0UG9zaXRpb24ueSAtIChDT05TVEFOVFMuSE9PUF9IRUlHSFQgKyA1KSxcbiAgICAgICAgICAgICAgICBDT05TVEFOVFMuSE9PUF9XSURUSCArIENPTlNUQU5UUy5CQUNLQk9BUkRfV0lEVEggKyAxMCxcbiAgICAgICAgICAgICAgICBDT05TVEFOVFMuSE9PUF9IRUlHSFQgKyBDT05TVEFOVFMuQkFDS0JPQVJEX0hFSUdIVClcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIC8vICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY291cnRJbWFnZSxcbiAgICAvLyAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIHRoaXMuY291cnRJbWFnZS53aWR0aCAvIDEyLCBcbiAgICAvLyAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuY291cnRJbWFnZS5oZWlnaHQgLyAyLFxuICAgIC8vICAgICAgICAgdGhpcy53aWR0aCArIHRoaXMuY291cnRJbWFnZS53aWR0aCAvIDYsXG4gICAgLy8gICAgICAgICB0aGlzLmNvdXJ0SW1hZ2UuaGVpZ2h0KTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJ1xuaW1wb3J0IENvdXJ0IGZyb20gJy4vY291cnQnO1xuaW1wb3J0IEhvb3AgZnJvbSAnLi9ob29wJztcbmltcG9ydCBCYWxsIGZyb20gJy4vYmFsbCc7XG5pbXBvcnQgU2NvcmVib2FyZCBmcm9tICcuL3Njb3JlYm9hcmQnO1xuaW1wb3J0IFBsYXllcjIgZnJvbSAnLi9wbGF5ZXIyJztcbmltcG9ydCBNYWluTWVudSBmcm9tICcuL21lbnVfc2NyZWVucy9tYWluX21lbnUnO1xuaW1wb3J0IE9ubGluZVBsYXllciBmcm9tICcuL29ubGluZV9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOQkFKYW1HYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGJhY2tncm91bmRDYW52YXMpIHsgICAgICAgIFxuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENhbnZhcyA9IGJhY2tncm91bmRDYW52YXNcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICAgICAgdGhpcy5tYWluTWVudSA9IG5ldyBNYWluTWVudSh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyksIHRoaXMuc3RhcnRPbmxpbmVHYW1lLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMucGxheWluZ0dhbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW5kZXJNZW51KClcbiAgICB9XG5cbiAgICBzaG93TWVudSgpIHtcbiAgICAgICAgdGhpcy5tYWluTWVudS5zZXR1cEtleUhhbmRsZXJzKClcbiAgICAgICAgdGhpcy5yZW5kZXJNZW51KHRoaXMuY3R4KVxuICAgIH1cblxuICAgIHJlbmRlck1lbnUgKCkge1xuICAgICAgICB0aGlzLm1haW5NZW51LnJlbmRlcih0aGlzLmN0eClcbiAgICAgICAgaWYgKCF0aGlzLnBsYXlpbmdHYW1lKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXJNZW51LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHN0YXJ0R2FtZSAobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUpIHtcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IHRydWVcbiAgICAgICAgdGhpcy5yZXN0YXJ0KGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlKVxuICAgIH1cblxuICAgIHN0YXJ0T25saW5lR2FtZShsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSwgbXlTaWRlLCBnYW1lSWQpIHtcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IHRydWVcbiAgICAgICAgdGhpcy5vbmxpbmVHYW1lSWQgPSBnYW1lSWRcbiAgICAgICAgdGhpcy5ydW5PbmxpbmVHYW1lKGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlLCBteVNpZGUpXG4gICAgfVxuXG4gICAgcmVzdGFydChsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSkge1xuICAgICAgICAvLyBTVEFSVCBBTklNQVRJT04gU1lDTEVcbiAgICAgICAgdGhpcy5jb3VydCA9IG5ldyBDb3VydCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuYmFja2dyb3VuZENhbnZhcyk7XG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiTEVGVFwiKTtcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiUklHSFRcIik7XG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKHRoaXMuZGltZW5zaW9ucywgdGhpcy5jb3VydCwgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3ApXG5cbiAgICAgICAgdGhpcy5zY29yZWJvYXJkID0gbmV3IFNjb3JlYm9hcmQodGhpcy5kaW1lbnNpb25zLCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcClcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCByaWdodFNwcml0ZSk7XG4gICAgICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgbGVmdFNwcml0ZSk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuICAgIFxuICAgIGFuaW1hdGUoKSB7ICAgICAgICBcbiAgICAgICAgLy8gQ1JFQVRFUyBCQUNLR1JPVU5EXG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvdXJ0LmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIC8vIEFOSU1BVEUgT0JKRUNUU1xuICAgICAgICB0aGlzLnBsYXllci5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLnBsYXllcjIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5iYWxsLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMubGVmdEhvb3AuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5yaWdodEhvb3AuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2NvcmVib2FyZC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5V2lubmVyKClcbiAgICAgICAgfVxuICAgICAgICAvLyBSRVFVRVNUIE5FWFQgRlJBTUVcbiAgICAgICAgaWYgKHRoaXMucGxheWluZ0dhbWUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSwgMTAwMCAvIDYwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcnVuT25saW5lR2FtZShsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSwgbXlTaWRlKSB7XG4gICAgICAgIHRoaXMuY291cnQgPSBuZXcgQ291cnQodGhpcy5kaW1lbnNpb25zLCB0aGlzLmJhY2tncm91bmRDYW52YXMpO1xuICAgICAgICB0aGlzLmxlZnRIb29wID0gbmV3IEhvb3AodGhpcy5kaW1lbnNpb25zLCBcIkxFRlRcIik7XG4gICAgICAgIHRoaXMucmlnaHRIb29wID0gbmV3IEhvb3AodGhpcy5kaW1lbnNpb25zLCBcIlJJR0hUXCIpO1xuICAgICAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuY291cnQsIHRoaXMubGVmdEhvb3AsIHRoaXMucmlnaHRIb29wLCB0aGlzLm9ubGluZUdhbWVJZClcblxuICAgICAgICB0aGlzLnNjb3JlYm9hcmQgPSBuZXcgU2NvcmVib2FyZCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMubGVmdEhvb3AsIHRoaXMucmlnaHRIb29wKVxuXG4gICAgICAgIGlmIChteVNpZGUgPT09IFwiTEVGVFwiKSB7XG4gICAgICAgICAgICB0aGlzLm15UGxheWVyID0gbmV3IE9ubGluZVBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIGxlZnRTcHJpdGUsIFwiTEVGVFwiLCB0cnVlKVxuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllciA9IG5ldyBPbmxpbmVQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCByaWdodFNwcml0ZSwgXCJSSUdIVFwiLCBmYWxzZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIgPSBuZXcgT25saW5lUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgbGVmdFNwcml0ZSwgXCJMRUZUXCIsIGZhbHNlKVxuICAgICAgICAgICAgdGhpcy5teVBsYXllciA9IG5ldyBPbmxpbmVQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCByaWdodFNwcml0ZSwgXCJSSUdIVFwiLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlT3RoZXJQb3NcIiwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIucG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgeDogZGF0YVtcInhcIl0sXG4gICAgICAgICAgICAgICAgeTogZGF0YVtcInlcIl0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyLmZhY2luZ1JpZ2h0ICA9IGRhdGFbXCJvdGhlclBsYXllckZhY2luZ1wiXVxuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllci5qdW1waW5nID0gZGF0YVtcIm90aGVyUGxheWVySnVtcGluZ1wiXVxuICAgICAgICB9KSBcbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlQmFsbFBvc3Nlc2lvblwiLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC5wb3NzZXNzaW9uID0gdGhpcy5vdGhlclBsYXllclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJyZWdpc3RlcmVkUG9zc2VzaW9uQ2hhbmdlXCIsIHtcbiAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMub25saW5lR2FtZUlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVOb0JhbGxQb3NzZXNpb25cIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJhbGwucG9zc2Vzc2lvbiA9IG51bGxcbiAgICAgICAgICAgIHRoaXMuYmFsbC5wb3NpdGlvbiA9IGRhdGFbXCJwb3NpdGlvblwiXVxuICAgICAgICAgICAgdGhpcy5iYWxsLnZlbG9jaXR5ID0gZGF0YVtcInZlbG9jaXR5XCJdXG4gICAgICAgIH0pXG4gICAgICAgIC8vIHNvY2tldC5vbihcInVwZGF0ZUJhbGxQb3NcIiwgZGF0YSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmJhbGwucG9zaXRpb24gPSBkYXRhW1wicG9zaXRpb25cIl1cbiAgICAgICAgLy8gICAgIHRoaXMuYmFsbC52ZWxvY2l0eSA9IGRhdGFbXCJ2ZWxvY2l0eVwiXVxuICAgICAgICAvLyAgICAgdGhpcy5vdGhlclBsYXllci5mYWNpbmdSaWdodCA9IGRhdGFbXCJvdGhlclBsYXllckZhY2luZ1wiXVxuICAgICAgICAvLyB9KVxuICAgICAgICBzb2NrZXQub24oXCJlbmRHYW1lRnJvbURpc2Nvbm5lY3RcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLm9ubGluZUdhbWVJZCA9IG51bGxcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lbnUoKVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ydW5PbmxpbmUoKTtcbiAgICB9XG5cbiAgICBydW5PbmxpbmUgKCkge1xuICAgICAgICAvLyBDUkVBVEVTIEJBQ0tHUk9VTkRcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG5cblxuICAgICAgICB0aGlzLmNvdXJ0LmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIC8vIEFOSU1BVEUgT0JKRUNUU1xuICAgICAgICB0aGlzLm90aGVyUGxheWVyLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMubXlQbGF5ZXIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYmFsbC5hbmltYXRlKHRoaXMuY3R4KVxuXG4gICAgICAgIHRoaXMubGVmdEhvb3AuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5yaWdodEhvb3AuYW5pbWF0ZSh0aGlzLmN0eClcblxuICAgICAgICB0aGlzLnNjb3JlYm9hcmQuYW5pbWF0ZSh0aGlzLmN0eClcblxuICAgICAgICBpZiAodGhpcy5nYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlXaW5uZXIoKVxuICAgICAgICB9XG5cblxuICAgICAgICBzb2NrZXQuZW1pdChcInVwZGF0ZU15UG9zXCIsIHtcbiAgICAgICAgICAgIGdhbWVJZDogdGhpcy5vbmxpbmVHYW1lSWQsXG4gICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgICAgICB4OiB0aGlzLm15UGxheWVyLnBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiB0aGlzLm15UGxheWVyLnBvc2l0aW9uLnksXG4gICAgICAgICAgICBvdGhlclBsYXllckZhY2luZzogdGhpcy5teVBsYXllci5mYWNpbmdSaWdodCxcbiAgICAgICAgICAgIG90aGVyUGxheWVySnVtcGluZzogdGhpcy5teVBsYXllci5qdW1waW5nXG4gICAgICAgIH0pXG4gICAgICAgIHNvY2tldC5lbWl0KFwidXBkYXRlQmFsbFBvc1wiLCB7XG4gICAgICAgICAgICBnYW1lSWQ6IHRoaXMub25saW5lR2FtZUlkLFxuICAgICAgICAgICAgZnJvbVNvY2tldDogc29ja2V0LmlkLFxuICAgICAgICAgICAgeDogdGhpcy5iYWxsLnBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiB0aGlzLmJhbGwucG9zaXRpb24ueVxuICAgICAgICB9KVxuICAgICAgICAvLyBSRVFVRVNUIE5FWFQgRlJBTUVcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXlpbmdHYW1lKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJ1bk9ubGluZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwIC8gNjApXG4gICAgICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGdhbWVPdmVyICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmVib2FyZC50aW1lTGVmdCA9PT0gMFxuICAgIH1cblxuICAgIGRpc3BsYXlXaW5uZXIgKCkge1xuICAgICAgICBsZXQgdGV4dDtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRIb29wLnNjb3JlID4gdGhpcy5sZWZ0SG9vcC5zY29yZSkge1xuICAgICAgICAgICAgdGV4dCA9IFwiUGxheWVyIDEgd2luc1wiXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0SG9vcC5zY29yZSA+IHRoaXMucmlnaHRIb29wLnNjb3JlKSB7XG4gICAgICAgICAgICB0ZXh0ID0gXCJQbGF5ZXIgMiB3aW5zXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQgPSBcIlRpZSBHYW1lXCJcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiB9XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke3RleHR9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoYCR7dGV4dH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlXG4gICAgICAgIHRoaXMub25saW5lR2FtZUlkID0gbnVsbFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lbnUoKVxuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgUmVjdCBmcm9tICcuL3V0aWxzL3JlY3QnXG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBIT09QX1lfTVVMVElQTElFUjogMC4zLFxuICAgIEhPT1BfSEVJR0hUOiA0MCxcbiAgICBIT09QX1dJRFRIOiA1MCxcbiAgICBIT09QX1hfRElTVEFOQ0U6IDUwLFxuICAgIEJBQ0tCT0FSRF9XSURUSDogMTUsXG4gICAgQkFDS0JPQVJEX0hFSUdIVDogNTAsXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9vcCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIGhvb3BTaWRlLCBiYWxsKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5IT09QX1dJRFRILCBoZWlnaHQ6IENPTlNUQU5UUy5IT09QX0hFSUdIVCB9KVxuICAgICAgICB0aGlzLmJhbGwgPSBiYWxsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgICAgICAwICsgQ09OU1RBTlRTLkhPT1BfWF9ESVNUQU5DRVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zLndpZHRoIC0gQ09OU1RBTlRTLkhPT1BfWF9ESVNUQU5DRSAtIHRoaXMud2lkdGhcbiAgICAgICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsIFxuICAgICAgICAgICAgeTogZGltZW5zaW9ucy5oZWlnaHQgKiBDT05TVEFOVFMuSE9PUF9ZX01VTFRJUExJRVJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tib2FyZCA9IG5ldyBCYWNrYm9hcmQodGhpcywgaG9vcFNpZGUpXG4gICAgICAgIHRoaXMuc2NvcmVIaXRib3ggPSBuZXcgU2NvcmVIaXRib3godGhpcywgaG9vcFNpZGUpXG4gICAgICAgIHRoaXMuY29sb3IgPSBcInB1cnBsZVwiXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgICAgIHRoaXMuanVzdFNjb3JlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5jaGVja0JhbGxDb2xsaXNpb24oKVxuICAgICAgICAvLyB0aGlzLmJhY2tib2FyZC5hbmltYXRlKGN0eClcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAvLyB0aGlzLnNjb3JlSGl0Ym94LmFuaW1hdGUoY3R4KVxuICAgICAgICBpZiAodGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMuc2NvcmVIaXRib3gpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuanVzdFNjb3JlZCkgdGhpcy5zY29yZSArPSAyXG4gICAgICAgICAgICB0aGlzLmp1c3RTY29yZWQgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gXCJncmVlblwiXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1c3RTY29yZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcInB1cnBsZVwiXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCYWxsQ29sbGlzaW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzKSB8fCB0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcy5iYWNrYm9hcmQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5iYWxsLnBvc2l0aW9uLnkgLSB0aGlzLmJhbGwucmFkaXVzID4gdGhpcy5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFsbC52ZWxvY2l0eS55ID4gMCkgdGhpcy5iYWxsLnZlbG9jaXR5LnkgPSAtdGhpcy5iYWxsLnZlbG9jaXR5LnlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFsbC5wb3NpdGlvbi55ICsgdGhpcy5iYWxsLnJhZGl1cyA8IHRoaXMuYmFja2JvYXJkLnBvc2l0aW9uLnkgJiYgdGhpcy5iYWxsLnZlbG9jaXR5LnkgPCAwKSAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkueSA9IC10aGlzLmJhbGwudmVsb2NpdHkueVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkueCA9IC10aGlzLmJhbGwudmVsb2NpdHkueFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNsYXNzIFNjb3JlSGl0Ym94IGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoaG9vcCwgaG9vcFNpZGUpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLkhPT1BfV0lEVEggLSAzMCwgaGVpZ2h0OiBDT05TVEFOVFMuSE9PUF9IRUlHSFQgKiAwLjA1IH0pXG4gICAgICAgIGNvbnN0IHggPSBob29wU2lkZSA9PT0gXCJMRUZUXCIgPyAoXG4gICAgICAgICAgICBob29wLnBvc2l0aW9uLnggKyAxNVxuICAgICAgICApIDogKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54ICsgaG9vcC53aWR0aCAtIHRoaXMud2lkdGggLSAxNVxuICAgICAgICApXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogaG9vcC5wb3NpdGlvbi55XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwid2hpdGVcIlxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tib2FyZCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGhvb3AsIGhvb3BTaWRlKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5CQUNLQk9BUkRfV0lEVEgsIGhlaWdodDogQ09OU1RBTlRTLkJBQ0tCT0FSRF9IRUlHSFQgfSlcbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCBcbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCArIGhvb3Aud2lkdGggLSB0aGlzLndpZHRoXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiBob29wLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImFxdWFcIlxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59IiwiaW1wb3J0IGtleSBmcm9tICcuLi91dGlscy9rZXltYXN0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXJTZWxlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIHNlbGVjdGVkQ2hhcmFjdGVycykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzID0gc2VsZWN0ZWRDaGFyYWN0ZXJzXG4gICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gMFxuICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAxXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJSb2RtYW5cIiwgc3JjOiBcInNyYy9hc3NldHMvcm9kbWFuU21hbGwucG5nXCJ9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkRyYWtlXCIsIHNyYzogXCJzcmMvYXNzZXRzL2RyYWtlU21hbGwucG5nXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJMZWJyb25cIiwgc3JjOiBcInNyYy9hc3NldHMvbGVicm9uU21hbGwucG5nXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJQZWFjaFwiLCBzcmM6IFwic3JjL2Fzc2V0cy9wZWFjaFNtYWxsLnBuZ1wifVxuICAgICAgICBdXG4gICAgICAgIFxuICAgICAgICB0aGlzLmxlZnRDaGFyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMucmlnaHRDaGFyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubGVmdENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXS5zcmNcbiAgICAgICAgdGhpcy5yaWdodENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjXG5cbiAgICAgICAgdGhpcy5sZWZ0UmVhZHkgPSBmYWxzZVxuICAgICAgICB0aGlzLnJpZ2h0UmVhZHkgPSBmYWxzZVxuXG4gICAgICAgIHNvY2tldC5vbihcIm1hdGNoRm91bmRcIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRQbGF5ZXJJZCA9IGRhdGFbXCJsZWZ0UGxheWVySWRcIl1cbiAgICAgICAgICAgIHRoaXMucmlnaHRQbGF5ZXJJZCA9IGRhdGFbXCJyaWdodFBsYXllcklkXCJdXG4gICAgICAgICAgICBpZiAoc29ja2V0LmlkID09PSB0aGlzLmxlZnRQbGF5ZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nTGVmdCA9IHRydWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdSaWdodCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gMFxuICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gMVxuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSBkYXRhW1wiZ2FtZUlkXCJdXG4gICAgICAgIH0pXG5cbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZFNlbGVjdGVkQ2hhcnNcIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9IGRhdGFbXCJsZWZ0U2VsZWN0ZWRcIl1cbiAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9IGRhdGFbXCJyaWdodFNlbGVjdGVkXCJdXG4gICAgICAgIH0pXG5cbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZExlZnRSZWFkeVwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRSZWFkeSA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZFJpZ2h0UmVhZHlcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yaWdodFJlYWR5ID0gdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHNvY2tldC5vbihcInN0YXJ0R2FtZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBrZXkudW5iaW5kKCdkb3duJylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ3cnKVxuICAgICAgICAgICAga2V5LnVuYmluZCgncycpXG4gICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVycyh0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdLnNyYywgdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjLCB0aGlzLmdhbWVJZClcbiAgICAgICAgICAgIHRoaXMubGVmdFBsYXllcklkID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5yaWdodFBsYXllcklkID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdMZWZ0ID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nUmlnaHQgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAwXG4gICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAxXG4gICAgICAgICAgICB0aGlzLmxlZnRSZWFkeSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLnJpZ2h0UmVhZHkgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSBudWxsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eCkge1xuXG4gICAgICAgIHRoaXMubGVmdENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXS5zcmNcbiAgICAgICAgdGhpcy5yaWdodENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjXG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicHVycGxlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIExFRlQgU0lERVxuICAgICAgICBjb25zdCBsZWZ0U2lkZUNoYXIgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdXG4gICAgICAgIGxldCBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDQsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyfVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuXG4gICAgICAgIGlmICh0aGlzLm9ubGluZU1vZGUpIGN0eC5maWxsVGV4dChcIk9ubGluZSBNb2RlXCIsIGxvYy54LCBsb2MueSAtIDEwMClcbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgMTJwdCBzZXJpZlwiO1xuICAgICAgICBpZiAodGhpcy5sZWZ0UmVhZHkpIGN0eC5maWxsVGV4dChcIlJlYWR5XCIsIGxvYy54LCBsb2MueSAtIDcwKVxuICAgICAgICBpZiAodGhpcy5sZWZ0UGxheWVySWQgJiYgdGhpcy5yaWdodFBsYXllcklkKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy5sZWZ0UGxheWVySWR9YCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7c29ja2V0LmlkfWAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCR7bGVmdFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYCR7bGVmdFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRDaGFyLFxuICAgICAgICAgICAgbG9jLnggLSB0aGlzLmxlZnRDaGFyLndpZHRoIC8gMixcbiAgICAgICAgICAgIGxvYy55KVxuXG4gICAgICAgIC8vIFJJR0hUIFNJREVcbiAgICAgICAgY29uc3QgcmlnaHRTaWRlQ2hhciA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdXG4gICAgICAgIGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoICogMyAvIDQsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyIH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblxuICAgICAgICBpZiAodGhpcy5vbmxpbmVNb2RlKSBjdHguZmlsbFRleHQoXCJPbmxpbmUgTW9kZVwiLCBsb2MueCwgbG9jLnkgLSAxMDApXG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDEycHQgc2VyaWZcIjtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRSZWFkeSkgY3R4LmZpbGxUZXh0KFwiUmVhZHlcIiwgbG9jLngsIGxvYy55IC0gNzApXG4gICAgICAgIGlmICh0aGlzLmxlZnRQbGF5ZXJJZCAmJiB0aGlzLnJpZ2h0UGxheWVySWQpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChgJHt0aGlzLnJpZ2h0UGxheWVySWR9YCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYFdhaXRpbmcgZm9yIFBsYXllcmAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcblxuICAgICAgICBjdHguZmlsbFRleHQoYCR7cmlnaHRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGAke3JpZ2h0U2lkZUNoYXIubmFtZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMucmlnaHRDaGFyLFxuICAgICAgICAgICAgbG9jLnggLSB0aGlzLnJpZ2h0Q2hhci53aWR0aCAvIDIsXG4gICAgICAgICAgICBsb2MueSlcbiBcbiAgICB9XG5cbiAgICBzZXR1cEtleUhhbmRsZXJzKCkge1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm9ubGluZU1vZGUpIHtcbiAgICAgICAgICAgICAgICBrZXkoJ2Rvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgndXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgLSAxKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yaWdodFNlbGVjdGVkID09PSAtMSkgdGhpcy5yaWdodFNlbGVjdGVkID0gdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgndycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgncycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgLSAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdFNlbGVjdGVkID09PSAtMSkgdGhpcy5sZWZ0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgndycpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3MnKVxuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzKHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjLCB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmMpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBrZXkoJ3VwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmdhbWVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkICsgMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGxheWluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gKHRoaXMucmlnaHRTZWxlY3RlZCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmlnaHRTZWxlY3RlZCA9PT0gLTEpIHRoaXMucmlnaHRTZWxlY3RlZCA9IHRoaXMuY2hhcmFjdGVycy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ2Rvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkIC0gMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdFNlbGVjdGVkID09PSAtMSkgdGhpcy5sZWZ0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1BsYXlpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnY2hhckNoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0U2VsZWN0ZWQ6IHRoaXMucmlnaHRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFNlbGVjdGVkOiB0aGlzLmxlZnRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgnZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZ2FtZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmdMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2xlZnRSZWFkeScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQbGF5aW5nUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgncmlnaHRSZWFkeScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cblxuXG5cbn0iLCJpbXBvcnQga2V5IGZyb20gJy4uL3V0aWxzL2tleW1hc3Rlcic7XG5pbXBvcnQgQ2hhcmFjdGVyU2VsZWN0IGZyb20gJy4vY2hhcmFjdGVyX3NlbGVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IHtcbiAgICBjb25zdHJ1Y3RvciAoZGltZW5zaW9ucywgc3RhcnRHYW1lLCBzdGFydE9ubGluZUdhbWUpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSA9IHN0YXJ0R2FtZVxuICAgICAgICB0aGlzLnN0YXJ0T25saW5lR2FtZSA9IHN0YXJ0T25saW5lR2FtZVxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gMFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXCJTdGFydCBHYW1lXCIsIFwiT25saW5lXCJdXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0ID0gbmV3IENoYXJhY3RlclNlbGVjdCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2V0dXBLZXlIYW5kbGVycygpXG4gICAgfVxuXG4gICAgc2VsZWN0ZWRDaGFyYWN0ZXJzIChsZWZ0U3JjLCByaWdodFNyYywgZ2FtZUlkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlclNlbGVjdC5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5vbmxpbmVNb2RlID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnN0IG15U2lkZSA9IHRoaXMuY2hhcmFjdGVyU2VsZWN0LmlzUGxheWluZ0xlZnQgPyBcIkxFRlRcIiA6IFwiUklHSFRcIlxuICAgICAgICAgICAgdGhpcy5zdGFydE9ubGluZUdhbWUobGVmdFNyYywgcmlnaHRTcmMsIG15U2lkZSwgZ2FtZUlkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUobGVmdFNyYywgcmlnaHRTcmMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbiAgICByZW5kZXIgKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJwdXJwbGVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvICgodGhpcy5vcHRpb25zLmxlbmd0aCArIDEpIC0gaSkgfVxuICAgICAgICAgICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBjdHgubWVhc3VyZVRleHQoYCR7b3B0aW9ufWApLndpZHRoXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PT0gaSkgY3R4LmZpbGxSZWN0KChsb2MueCAtIHdpZHRoIC8gMikgLSA1LCBsb2MueSAtIDQwLCB3aWR0aCArIDEwLCA1MCk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke29wdGlvbn1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHtvcHRpb259YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5yZW5kZXIoY3R4KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0dXBLZXlIYW5kbGVycygpIHtcbiAgICAgICAga2V5KCdkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9ICh0aGlzLnNlbGVjdGVkT3B0aW9uICsgMSkgJSB0aGlzLm9wdGlvbnMubGVuZ3RoXG4gICAgICAgIH0pXG4gICAgICAgIGtleSgndXAnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gTWF0aC5hYnMoKHRoaXMuc2VsZWN0ZWRPcHRpb24gLSAxKSAlIHRoaXMub3B0aW9ucy5sZW5ndGgpXG4gICAgICAgIH0pXG4gICAgICAgIGtleSgnZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2Rvd24nKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0Lm9ubGluZU1vZGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgndXAnKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2VudGVyJylcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Qub25saW5lTW9kZSA9IHRydWVcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgncGxheWVyQWRkZWRUb1F1ZXVlJywgc29ja2V0LmlkKVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIFxuXG5cblxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBQTEFZRVJfV0lEVEg6IDQwLFxuICAgIFBMQVlFUl9IRUlHSFQ6IDcwLFxuICAgIE1PVkVTUEVFRDogNSxcbiAgICAvLyBXSVRIX0JBTExfTU9WRVNQRUVEOiAzLjUsXG4gICAgSlVNUF9IRUlHSFQ6IDE0LFxuICAgIC8vIE9OX0ZJUkVfSlVNUF9IRUlHSFQ6IDE2XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbmxpbmVQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMsIHN0YXJ0U2lkZSwgYWN0aXZlKSB7XG4gICAgICAgIHN1cGVyKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpXG4gICAgICAgIFxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gc3RhcnRTaWRlID09PSBcIkxFRlRcIiA/ICh7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfSkgOiAoe1xuICAgICAgICAgICAgeDogdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHRoaXMuY29sb3IgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmVcbiAgICB9XG5cblxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSxcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIDUsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnNwcml0ZS5oZWlnaHQgLyAzKVxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdyaWdodCcpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ2xlZnQnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpVTVBJTkdcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3VwJykgJiYgIXRoaXMuanVtcGluZykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkpVTVBfSEVJR0hUO1xuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3NwYWNlJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZm9ybUFjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JhbGwoKVxuXG4gICAgICAgIHRoaXMuaGFuZGxlR3Jhdml0eSgpXG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG59XG5cbiIsImltcG9ydCBSZWN0IGZyb20gJy4vdXRpbHMvcmVjdCc7XG5pbXBvcnQga2V5IGZyb20gJy4vdXRpbHMva2V5bWFzdGVyJztcblxuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgR1JBVklUWTogMC41LFxuICAgIFBMQVlFUl9XSURUSDogNDAsXG4gICAgUExBWUVSX0hFSUdIVDogNzAsXG4gICAgTU9WRVNQRUVEOiA1LFxuICAgIC8vIFdJVEhfQkFMTF9NT1ZFU1BFRUQ6IDMuNSxcbiAgICBKVU1QX0hFSUdIVDogMTQsXG4gICAgLy8gT05fRklSRV9KVU1QX0hFSUdIVDogMTZcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLlBMQVlFUl9XSURUSCwgaGVpZ2h0OiBDT05TVEFOVFMuUExBWUVSX0hFSUdIVCB9KVxuICAgICAgICB0aGlzLmNvdXJ0ID0gY291cnRcbiAgICAgICAgdGhpcy5iYWxsID0gYmFsbFxuXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHk6IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5kZW5uaXNSb2RtYW5IZWFkID0gbmV3IEltYWdlKCk7XG4gICAgICAgIC8vIHRoaXMuZGVubmlzUm9kbWFuSGVhZC5zcmMgPSAnc3JjL2Fzc2V0cy9kZW5uaXNSb2RtYW5IZWFkLnBuZydcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc3JjID0gc3ByaXRlU3JjXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBjdHguZHJhd0ltYWdlKHRoaXMuZGVubmlzUm9kbWFuSGVhZCwgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy53aWR0aCArICh0aGlzLmRlbm5pc1JvZG1hbkhlYWQud2lkdGggLyAyKSwgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgKyAodGhpcy5kZW5uaXNSb2RtYW5IZWFkLmhlaWdodCAvIDMpKVxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuc3ByaXRlLFxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIDUsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnNwcml0ZS5oZWlnaHQgLyAzKVxuICAgIH1cblxuICAgIG1vdmUgKCkge1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgncmlnaHQnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdsZWZ0JykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBKVU1QSU5HXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCd1cCcpICYmICF0aGlzLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5KVU1QX0hFSUdIVDtcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCcvJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZm9ybUFjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JhbGwoKSBcblxuICAgICAgICB0aGlzLmhhbmRsZUdyYXZpdHkoKVxuXG4gICAgICAgIHRoaXMuY2hlY2tCb3VuZHMoKVxuICAgIH1cblxuICAgIHByZWZvcm1BY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmJhbGwucG9zc2Vzc2lvbiA9PT0gdGhpcykge1xuICAgICAgICAgICAgLy8gSG9sZCB0byBzaG9vdC4gXG4gICAgICAgICAgICB0aGlzLmJhbGwuc2hvb3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCYWxsKCkge1xuICAgICAgICBpZiAoIXRoaXMuYmFsbC5wb3NzZXNzaW9uICYmIHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzKSkge1xuICAgICAgICAgICAgdGhpcy5iYWxsLmNsYWltUG9zc2Vzc2lvbih0aGlzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlR3Jhdml0eSgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMudmVsb2NpdHkueTtcbiAgICAgICAgLy8gR1JBVklUWVxuICAgICAgICAvLyBpZiB0aGUgcG9zIGlzIGdyZWF0ZXIgdGhhbiB0aGUgZmxvb3JcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0IDwgdGhpcy5jb3VydC5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gQ09OU1RBTlRTLkdSQVZJVFk7XG4gICAgICAgICAgICAvLyBlbHNlIHNldCB0aGUgcG9zIHRvIHRoZSBmbG9vclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0JvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA+IHRoaXMuY291cnQud2lkdGggLSB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDBcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBQTEFZRVJfV0lEVEg6IDQwLFxuICAgIFBMQVlFUl9IRUlHSFQ6IDcwLFxuICAgIE1PVkVTUEVFRDogNSxcbiAgICAvLyBXSVRIX0JBTExfTU9WRVNQRUVEOiAzLjUsXG4gICAgSlVNUF9IRUlHSFQ6IDE0LFxuICAgIC8vIE9OX0ZJUkVfSlVNUF9IRUlHSFQ6IDE2XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKSB7XG4gICAgICAgIHN1cGVyKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ2QnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdhJykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBKVU1QSU5HXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCd3JykgJiYgIXRoaXMuanVtcGluZykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkpVTVBfSEVJR0hUO1xuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3EnKSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmb3JtQWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrQmFsbCgpXG5cbiAgICAgICAgdGhpcy5oYW5kbGVHcmF2aXR5KClcblxuICAgICAgICB0aGlzLmNoZWNrQm91bmRzKClcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBsZWZ0SG9vcCwgcmlnaHRIb29wKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5sZWZ0SG9vcCA9IGxlZnRIb29wXG4gICAgICAgIHRoaXMucmlnaHRIb29wID0gcmlnaHRIb29wXG4gICAgICAgIHRoaXMudGltZUxlZnQgPSA2MFxuICAgICAgICB0aGlzLmNvdW50RG93biA9IHNldEludGVydmFsKCgpID0+IHsgXG4gICAgICAgICAgICB0aGlzLnRpbWVMZWZ0LS1cbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVMZWZ0ID09PSAwKSBjbGVhckludGVydmFsKHRoaXMuY291bnREb3duKVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlIChjdHgpIHtcbiAgICAgICAgbGV0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDEwIH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG4gICAgICAgIGN0eC5maWxsVGV4dChgUGxheWVyIDE6ICR7dGhpcy5yaWdodEhvb3Auc2NvcmV9IFBsYXllciAyOiAke3RoaXMubGVmdEhvb3Auc2NvcmV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYFBsYXllciAxOiAke3RoaXMucmlnaHRIb29wLnNjb3JlfSBQbGF5ZXIgMjogJHt0aGlzLmxlZnRIb29wLnNjb3JlfWAsIGxvYy54LCBsb2MueSk7XG5cbiAgICAgICAgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gNSB9XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy50aW1lTGVmdH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHt0aGlzLnRpbWVMZWZ0fWAsIGxvYy54LCBsb2MueSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IocmFkaXVzKSB7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cblxuICAgIGlzT3ZlcmxhcHBpbmdSZWN0KHJlY3QpIHtcbiAgICAgICAgY29uc3QgZGlzdFggPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSByZWN0LnBvc2l0aW9uLnggLSByZWN0LndpZHRoIC8gMik7XG4gICAgICAgIGNvbnN0IGRpc3RZID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gcmVjdC5wb3NpdGlvbi55IC0gcmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgaWYgKGRpc3RYID4gKHJlY3Qud2lkdGggLyAyICsgdGhpcy5yYWRpdXMpKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICBpZiAoZGlzdFkgPiAocmVjdC5oZWlnaHQgLyAyICsgdGhpcy5yYWRpdXMpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICAgIGlmIChkaXN0WCA8PSAocmVjdC53aWR0aCAvIDIpKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIGlmIChkaXN0WSA8PSAocmVjdC5oZWlnaHQgLyAyKSkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgICAgIGNvbnN0IGR4ID0gZGlzdFggLSByZWN0LndpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgZHkgPSBkaXN0WSAtIHJlY3QuaGVpZ2h0IC8gMjtcbiAgICAgICAgcmV0dXJuIChkeCAqIGR4ICsgZHkgKiBkeSA8PSAodGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cykpO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuXG59IiwiLy8gICAgIGtleW1hc3Rlci5qc1xuLy8gICAgIChjKSAyMDExLTIwMTMgVGhvbWFzIEZ1Y2hzXG4vLyAgICAga2V5bWFzdGVyLmpzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG47IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgdmFyIGssXG4gICAgICAgIF9oYW5kbGVycyA9IHt9LFxuICAgICAgICBfbW9kcyA9IHsgMTY6IGZhbHNlLCAxODogZmFsc2UsIDE3OiBmYWxzZSwgOTE6IGZhbHNlIH0sXG4gICAgICAgIF9zY29wZSA9ICdhbGwnLFxuICAgICAgICAvLyBtb2RpZmllciBrZXlzXG4gICAgICAgIF9NT0RJRklFUlMgPSB7XG4gICAgICAgICAgICAn4oenJzogMTYsIHNoaWZ0OiAxNixcbiAgICAgICAgICAgICfijKUnOiAxOCwgYWx0OiAxOCwgb3B0aW9uOiAxOCxcbiAgICAgICAgICAgICfijIMnOiAxNywgY3RybDogMTcsIGNvbnRyb2w6IDE3LFxuICAgICAgICAgICAgJ+KMmCc6IDkxLCBjb21tYW5kOiA5MVxuICAgICAgICB9LFxuICAgICAgICAvLyBzcGVjaWFsIGtleXNcbiAgICAgICAgX01BUCA9IHtcbiAgICAgICAgICAgIGJhY2tzcGFjZTogOCwgdGFiOiA5LCBjbGVhcjogMTIsXG4gICAgICAgICAgICBlbnRlcjogMTMsICdyZXR1cm4nOiAxMyxcbiAgICAgICAgICAgIGVzYzogMjcsIGVzY2FwZTogMjcsIHNwYWNlOiAzMixcbiAgICAgICAgICAgIGxlZnQ6IDM3LCB1cDogMzgsXG4gICAgICAgICAgICByaWdodDogMzksIGRvd246IDQwLFxuICAgICAgICAgICAgZGVsOiA0NiwgJ2RlbGV0ZSc6IDQ2LFxuICAgICAgICAgICAgaG9tZTogMzYsIGVuZDogMzUsXG4gICAgICAgICAgICBwYWdldXA6IDMzLCBwYWdlZG93bjogMzQsXG4gICAgICAgICAgICAnLCc6IDE4OCwgJy4nOiAxOTAsICcvJzogMTkxLFxuICAgICAgICAgICAgJ2AnOiAxOTIsICctJzogMTg5LCAnPSc6IDE4NyxcbiAgICAgICAgICAgICc7JzogMTg2LCAnXFwnJzogMjIyLFxuICAgICAgICAgICAgJ1snOiAyMTksICddJzogMjIxLCAnXFxcXCc6IDIyMFxuICAgICAgICB9LFxuICAgICAgICBjb2RlID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBfTUFQW3hdIHx8IHgudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApO1xuICAgICAgICB9LFxuICAgICAgICBfZG93bktleXMgPSBbXTtcblxuICAgIGZvciAoayA9IDE7IGsgPCAyMDsgaysrKSBfTUFQWydmJyArIGtdID0gMTExICsgaztcblxuICAgIC8vIElFIGRvZXNuJ3Qgc3VwcG9ydCBBcnJheSNpbmRleE9mLCBzbyBoYXZlIGEgc2ltcGxlIHJlcGxhY2VtZW50XG4gICAgZnVuY3Rpb24gaW5kZXgoYXJyYXksIGl0ZW0pIHtcbiAgICAgICAgdmFyIGkgPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpLS0pIGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvLyBmb3IgY29tcGFyaW5nIG1vZHMgYmVmb3JlIHVuYXNzaWdubWVudFxuICAgIGZ1bmN0aW9uIGNvbXBhcmVBcnJheShhMSwgYTIpIHtcbiAgICAgICAgaWYgKGExLmxlbmd0aCAhPSBhMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGExW2ldICE9PSBhMltpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBtb2RpZmllck1hcCA9IHtcbiAgICAgICAgMTY6ICdzaGlmdEtleScsXG4gICAgICAgIDE4OiAnYWx0S2V5JyxcbiAgICAgICAgMTc6ICdjdHJsS2V5JyxcbiAgICAgICAgOTE6ICdtZXRhS2V5J1xuICAgIH07XG4gICAgZnVuY3Rpb24gdXBkYXRlTW9kaWZpZXJLZXkoZXZlbnQpIHtcbiAgICAgICAgZm9yIChrIGluIF9tb2RzKSBfbW9kc1trXSA9IGV2ZW50W21vZGlmaWVyTWFwW2tdXTtcbiAgICB9O1xuXG4gICAgLy8gaGFuZGxlIGtleWRvd24gZXZlbnRcbiAgICBmdW5jdGlvbiBkaXNwYXRjaChldmVudCkge1xuICAgICAgICB2YXIga2V5LCBoYW5kbGVyLCBrLCBpLCBtb2RpZmllcnNNYXRjaCwgc2NvcGU7XG4gICAgICAgIGtleSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgICAgaWYgKGluZGV4KF9kb3duS2V5cywga2V5KSA9PSAtMSkge1xuICAgICAgICAgICAgX2Rvd25LZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGEgbW9kaWZpZXIga2V5LCBzZXQgdGhlIGtleS48bW9kaWZpZXJrZXluYW1lPiBwcm9wZXJ0eSB0byB0cnVlIGFuZCByZXR1cm5cbiAgICAgICAgaWYgKGtleSA9PSA5MyB8fCBrZXkgPT0gMjI0KSBrZXkgPSA5MTsgLy8gcmlnaHQgY29tbWFuZCBvbiB3ZWJraXQsIGNvbW1hbmQgb24gR2Vja29cbiAgICAgICAgaWYgKGtleSBpbiBfbW9kcykge1xuICAgICAgICAgICAgX21vZHNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAvLyAnYXNzaWduS2V5JyBmcm9tIGluc2lkZSB0aGlzIGNsb3N1cmUgaXMgZXhwb3J0ZWQgdG8gd2luZG93LmtleVxuICAgICAgICAgICAgZm9yIChrIGluIF9NT0RJRklFUlMpIGlmIChfTU9ESUZJRVJTW2tdID09IGtleSkgYXNzaWduS2V5W2tdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVNb2RpZmllcktleShldmVudCk7XG5cbiAgICAgICAgLy8gc2VlIGlmIHdlIG5lZWQgdG8gaWdub3JlIHRoZSBrZXlwcmVzcyAoZmlsdGVyKCkgY2FuIGNhbiBiZSBvdmVycmlkZGVuKVxuICAgICAgICAvLyBieSBkZWZhdWx0IGlnbm9yZSBrZXkgcHJlc3NlcyBpZiBhIHNlbGVjdCwgdGV4dGFyZWEsIG9yIGlucHV0IGlzIGZvY3VzZWRcbiAgICAgICAgaWYgKCFhc3NpZ25LZXkuZmlsdGVyLmNhbGwodGhpcywgZXZlbnQpKSByZXR1cm47XG5cbiAgICAgICAgLy8gYWJvcnQgaWYgbm8gcG90ZW50aWFsbHkgbWF0Y2hpbmcgc2hvcnRjdXRzIGZvdW5kXG4gICAgICAgIGlmICghKGtleSBpbiBfaGFuZGxlcnMpKSByZXR1cm47XG5cbiAgICAgICAgc2NvcGUgPSBnZXRTY29wZSgpO1xuXG4gICAgICAgIC8vIGZvciBlYWNoIHBvdGVudGlhbCBzaG9ydGN1dFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX2hhbmRsZXJzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBfaGFuZGxlcnNba2V5XVtpXTtcblxuICAgICAgICAgICAgLy8gc2VlIGlmIGl0J3MgaW4gdGhlIGN1cnJlbnQgc2NvcGVcbiAgICAgICAgICAgIGlmIChoYW5kbGVyLnNjb3BlID09IHNjb3BlIHx8IGhhbmRsZXIuc2NvcGUgPT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBtb2RpZmllcnMgbWF0Y2ggaWYgYW55XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzTWF0Y2ggPSBoYW5kbGVyLm1vZHMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgaW4gX21vZHMpXG4gICAgICAgICAgICAgICAgICAgIGlmICgoIV9tb2RzW2tdICYmIGluZGV4KGhhbmRsZXIubW9kcywgK2spID4gLTEpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoX21vZHNba10gJiYgaW5kZXgoaGFuZGxlci5tb2RzLCAraykgPT0gLTEpKSBtb2RpZmllcnNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIGNhbGwgdGhlIGhhbmRsZXIgYW5kIHN0b3AgdGhlIGV2ZW50IGlmIG5lY2Nlc3NhcnlcbiAgICAgICAgICAgICAgICBpZiAoKGhhbmRsZXIubW9kcy5sZW5ndGggPT0gMCAmJiAhX21vZHNbMTZdICYmICFfbW9kc1sxOF0gJiYgIV9tb2RzWzE3XSAmJiAhX21vZHNbOTFdKSB8fCBtb2RpZmllcnNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlci5tZXRob2QoZXZlbnQsIGhhbmRsZXIpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY2FuY2VsQnViYmxlKSBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHVuc2V0IG1vZGlmaWVyIGtleXMgb24ga2V5dXBcbiAgICBmdW5jdGlvbiBjbGVhck1vZGlmaWVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXkgPSBldmVudC5rZXlDb2RlLCBrLFxuICAgICAgICAgICAgaSA9IGluZGV4KF9kb3duS2V5cywga2V5KTtcblxuICAgICAgICAvLyByZW1vdmUga2V5IGZyb20gX2Rvd25LZXlzXG4gICAgICAgIGlmIChpID49IDApIHtcbiAgICAgICAgICAgIF9kb3duS2V5cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IDkzIHx8IGtleSA9PSAyMjQpIGtleSA9IDkxO1xuICAgICAgICBpZiAoa2V5IGluIF9tb2RzKSB7XG4gICAgICAgICAgICBfbW9kc1trZXldID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgaWYgKF9NT0RJRklFUlNba10gPT0ga2V5KSBhc3NpZ25LZXlba10gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNldE1vZGlmaWVycygpIHtcbiAgICAgICAgZm9yIChrIGluIF9tb2RzKSBfbW9kc1trXSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgYXNzaWduS2V5W2tdID0gZmFsc2U7XG4gICAgfTtcblxuICAgIC8vIHBhcnNlIGFuZCBhc3NpZ24gc2hvcnRjdXRcbiAgICBmdW5jdGlvbiBhc3NpZ25LZXkoa2V5LCBzY29wZSwgbWV0aG9kKSB7XG4gICAgICAgIHZhciBrZXlzLCBtb2RzO1xuICAgICAgICBrZXlzID0gZ2V0S2V5cyhrZXkpO1xuICAgICAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9IHNjb3BlO1xuICAgICAgICAgICAgc2NvcGUgPSAnYWxsJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBlYWNoIHNob3J0Y3V0XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gc2V0IG1vZGlmaWVyIGtleXMgaWYgYW55XG4gICAgICAgICAgICBtb2RzID0gW107XG4gICAgICAgICAgICBrZXkgPSBrZXlzW2ldLnNwbGl0KCcrJyk7XG4gICAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBtb2RzID0gZ2V0TW9kcyhrZXkpO1xuICAgICAgICAgICAgICAgIGtleSA9IFtrZXlba2V5Lmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnZlcnQgdG8ga2V5Y29kZSBhbmQuLi5cbiAgICAgICAgICAgIGtleSA9IGtleVswXVxuICAgICAgICAgICAga2V5ID0gY29kZShrZXkpO1xuICAgICAgICAgICAgLy8gLi4uc3RvcmUgaGFuZGxlclxuICAgICAgICAgICAgaWYgKCEoa2V5IGluIF9oYW5kbGVycykpIF9oYW5kbGVyc1trZXldID0gW107XG4gICAgICAgICAgICBfaGFuZGxlcnNba2V5XS5wdXNoKHsgc2hvcnRjdXQ6IGtleXNbaV0sIHNjb3BlOiBzY29wZSwgbWV0aG9kOiBtZXRob2QsIGtleToga2V5c1tpXSwgbW9kczogbW9kcyB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB1bmJpbmQgYWxsIGhhbmRsZXJzIGZvciBnaXZlbiBrZXkgaW4gY3VycmVudCBzY29wZVxuICAgIGZ1bmN0aW9uIHVuYmluZEtleShrZXksIHNjb3BlKSB7XG4gICAgICAgIHZhciBtdWx0aXBsZUtleXMsIGtleXMsXG4gICAgICAgICAgICBtb2RzID0gW10sXG4gICAgICAgICAgICBpLCBqLCBvYmo7XG5cbiAgICAgICAgbXVsdGlwbGVLZXlzID0gZ2V0S2V5cyhrZXkpO1xuXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBtdWx0aXBsZUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGtleXMgPSBtdWx0aXBsZUtleXNbal0uc3BsaXQoJysnKTtcblxuICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIG1vZHMgPSBnZXRNb2RzKGtleXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXkgPSBrZXlzW2tleXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBrZXkgPSBjb2RlKGtleSk7XG5cbiAgICAgICAgICAgIGlmIChzY29wZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBnZXRTY29wZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFfaGFuZGxlcnNba2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBfaGFuZGxlcnNba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG9iaiA9IF9oYW5kbGVyc1trZXldW2ldO1xuICAgICAgICAgICAgICAgIC8vIG9ubHkgY2xlYXIgaGFuZGxlcnMgaWYgY29ycmVjdCBzY29wZSBhbmQgbW9kcyBtYXRjaFxuICAgICAgICAgICAgICAgIGlmIChvYmouc2NvcGUgPT09IHNjb3BlICYmIGNvbXBhcmVBcnJheShvYmoubW9kcywgbW9kcykpIHtcbiAgICAgICAgICAgICAgICAgICAgX2hhbmRsZXJzW2tleV1baV0gPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBrZXkgd2l0aCBjb2RlICdrZXlDb2RlJyBpcyBjdXJyZW50bHkgZG93blxuICAgIC8vIENvbnZlcnRzIHN0cmluZ3MgaW50byBrZXkgY29kZXMuXG4gICAgZnVuY3Rpb24gaXNQcmVzc2VkKGtleUNvZGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoa2V5Q29kZSkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGtleUNvZGUgPSBjb2RlKGtleUNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleChfZG93bktleXMsIGtleUNvZGUpICE9IC0xO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByZXNzZWRLZXlDb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIF9kb3duS2V5cy5zbGljZSgwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSAoZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQpLnRhZ05hbWU7XG4gICAgICAgIC8vIGlnbm9yZSBrZXlwcmVzc2VkIGluIGFueSBlbGVtZW50cyB0aGF0IHN1cHBvcnQga2V5Ym9hcmQgZGF0YSBpbnB1dFxuICAgICAgICByZXR1cm4gISh0YWdOYW1lID09ICdJTlBVVCcgfHwgdGFnTmFtZSA9PSAnU0VMRUNUJyB8fCB0YWdOYW1lID09ICdURVhUQVJFQScpO1xuICAgIH1cblxuICAgIC8vIGluaXRpYWxpemUga2V5Ljxtb2RpZmllcj4gdG8gZmFsc2VcbiAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgYXNzaWduS2V5W2tdID0gZmFsc2U7XG5cbiAgICAvLyBzZXQgY3VycmVudCBzY29wZSAoZGVmYXVsdCAnYWxsJylcbiAgICBmdW5jdGlvbiBzZXRTY29wZShzY29wZSkgeyBfc2NvcGUgPSBzY29wZSB8fCAnYWxsJyB9O1xuICAgIGZ1bmN0aW9uIGdldFNjb3BlKCkgeyByZXR1cm4gX3Njb3BlIHx8ICdhbGwnIH07XG5cbiAgICAvLyBkZWxldGUgYWxsIGhhbmRsZXJzIGZvciBhIGdpdmVuIHNjb3BlXG4gICAgZnVuY3Rpb24gZGVsZXRlU2NvcGUoc2NvcGUpIHtcbiAgICAgICAgdmFyIGtleSwgaGFuZGxlcnMsIGk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gX2hhbmRsZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGVycyA9IF9oYW5kbGVyc1trZXldO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0uc2NvcGUgPT09IHNjb3BlKSBoYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYWJzdHJhY3Qga2V5IGxvZ2ljIGZvciBhc3NpZ24gYW5kIHVuYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0S2V5cyhrZXkpIHtcbiAgICAgICAgdmFyIGtleXM7XG4gICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICBrZXlzID0ga2V5LnNwbGl0KCcsJyk7XG4gICAgICAgIGlmICgoa2V5c1trZXlzLmxlbmd0aCAtIDFdKSA9PSAnJykge1xuICAgICAgICAgICAga2V5c1trZXlzLmxlbmd0aCAtIDJdICs9ICcsJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG5cbiAgICAvLyBhYnN0cmFjdCBtb2RzIGxvZ2ljIGZvciBhc3NpZ24gYW5kIHVuYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0TW9kcyhrZXkpIHtcbiAgICAgICAgdmFyIG1vZHMgPSBrZXkuc2xpY2UoMCwga2V5Lmxlbmd0aCAtIDEpO1xuICAgICAgICBmb3IgKHZhciBtaSA9IDA7IG1pIDwgbW9kcy5sZW5ndGg7IG1pKyspXG4gICAgICAgICAgICBtb2RzW21pXSA9IF9NT0RJRklFUlNbbW9kc1ttaV1dO1xuICAgICAgICByZXR1cm4gbW9kcztcbiAgICB9XG5cbiAgICAvLyBjcm9zcy1icm93c2VyIGV2ZW50c1xuICAgIGZ1bmN0aW9uIGFkZEV2ZW50KG9iamVjdCwgZXZlbnQsIG1ldGhvZCkge1xuICAgICAgICBpZiAob2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbWV0aG9kLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgaWYgKG9iamVjdC5hdHRhY2hFdmVudClcbiAgICAgICAgICAgIG9iamVjdC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZ1bmN0aW9uICgpIHsgbWV0aG9kKHdpbmRvdy5ldmVudCkgfSk7XG4gICAgfTtcblxuICAgIC8vIHNldCB0aGUgaGFuZGxlcnMgZ2xvYmFsbHkgb24gZG9jdW1lbnRcbiAgICBhZGRFdmVudChkb2N1bWVudCwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHsgZGlzcGF0Y2goZXZlbnQpIH0pOyAvLyBQYXNzaW5nIF9zY29wZSB0byBhIGNhbGxiYWNrIHRvIGVuc3VyZSBpdCByZW1haW5zIHRoZSBzYW1lIGJ5IGV4ZWN1dGlvbi4gRml4ZXMgIzQ4XG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsICdrZXl1cCcsIGNsZWFyTW9kaWZpZXIpO1xuXG4gICAgLy8gcmVzZXQgbW9kaWZpZXJzIHRvIGZhbHNlIHdoZW5ldmVyIHRoZSB3aW5kb3cgaXMgKHJlKWZvY3VzZWQuXG4gICAgYWRkRXZlbnQod2luZG93LCAnZm9jdXMnLCByZXNldE1vZGlmaWVycyk7XG5cbiAgICAvLyBzdG9yZSBwcmV2aW91c2x5IGRlZmluZWQga2V5XG4gICAgdmFyIHByZXZpb3VzS2V5ID0gd2luZG93LmtleTtcblxuICAgIC8vIHJlc3RvcmUgcHJldmlvdXNseSBkZWZpbmVkIGtleSBhbmQgcmV0dXJuIHJlZmVyZW5jZSB0byBvdXIga2V5IG9iamVjdFxuICAgIGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgICAgIHZhciBrID0gd2luZG93LmtleTtcbiAgICAgICAgd2luZG93LmtleSA9IHByZXZpb3VzS2V5O1xuICAgICAgICByZXR1cm4gaztcbiAgICB9XG5cbiAgICAvLyBzZXQgd2luZG93LmtleSBhbmQgd2luZG93LmtleS5zZXQvZ2V0L2RlbGV0ZVNjb3BlLCBhbmQgdGhlIGRlZmF1bHQgZmlsdGVyXG4gICAgd2luZG93LmtleSA9IGFzc2lnbktleTtcbiAgICB3aW5kb3cua2V5LnNldFNjb3BlID0gc2V0U2NvcGU7XG4gICAgd2luZG93LmtleS5nZXRTY29wZSA9IGdldFNjb3BlO1xuICAgIHdpbmRvdy5rZXkuZGVsZXRlU2NvcGUgPSBkZWxldGVTY29wZTtcbiAgICB3aW5kb3cua2V5LmZpbHRlciA9IGZpbHRlcjtcbiAgICB3aW5kb3cua2V5LmlzUHJlc3NlZCA9IGlzUHJlc3NlZDtcbiAgICB3aW5kb3cua2V5LmdldFByZXNzZWRLZXlDb2RlcyA9IGdldFByZXNzZWRLZXlDb2RlcztcbiAgICB3aW5kb3cua2V5Lm5vQ29uZmxpY3QgPSBub0NvbmZsaWN0O1xuICAgIHdpbmRvdy5rZXkudW5iaW5kID0gdW5iaW5kS2V5O1xuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSBtb2R1bGUuZXhwb3J0cyA9IGFzc2lnbktleTtcblxufSkodGhpcyk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICB0aGlzLndpZHRoID0gc2l6ZS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcbiAgICB9XG5cbiAgICBpc092ZXJsYXBwaW5nT3RoZXJSZWN0KHJlY3RDbGFzcykge1xuICAgICAgICBjb25zdCBteUJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKClcbiAgICAgICAgY29uc3QgcmVjdCA9IHJlY3RDbGFzcy5nZXRCb3VuZHMoKVxuICAgICAgICBpZiAobXlCb3VuZHMubGVmdCA+IHJlY3QucmlnaHQgfHwgbXlCb3VuZHMucmlnaHQgPCByZWN0LmxlZnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXlCb3VuZHMudG9wID4gcmVjdC5ib3R0b20gfHwgbXlCb3VuZHMuYm90dG9tIDwgcmVjdC50b3ApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICByaWdodDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=