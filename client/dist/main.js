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
                        debugger;
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
                        debugger;
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
                debugger;
            });
            (0, _keymaster2.default)('up', function () {
                _this2.selectedOption = Math.abs((_this2.selectedOption - 1) % _this2.options.length);
                debugger;
            });
            (0, _keymaster2.default)('enter', function () {
                debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9jb3VydC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9ob29wLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvbWVudV9zY3JlZW5zL2NoYXJhY3Rlcl9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9tZW51X3NjcmVlbnMvbWFpbl9tZW51LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvb25saW5lX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllcjIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMva2V5bWFzdGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvcmVjdC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhc0JhY2tncm91bmQiLCJ3aW5kb3ciLCJlIiwiaW5kZXhPZiIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsIk5CQUphbUdhbWUiLCJDT05TVEFOVFMiLCJSQURJVVMiLCJHUkFWSVRZIiwiQk9VTkNFX1JFVEVOVElPTiIsIkRSSUJCTEVfU1BFRUQiLCJCYWxsIiwiZGltZW5zaW9ucyIsImNvdXJ0IiwibGVmdEhvb3AiLCJyaWdodEhvb3AiLCJnYW1lSWQiLCJiYWxsIiwicG9zaXRpb24iLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwidmVsb2NpdHkiLCJjb2xvciIsInBvc3Nlc3Npb24iLCJub1RvdWNoIiwicG93ZXIiLCJjdHgiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwicmFkaXVzIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsInBsYXllciIsInNvY2tldCIsImVtaXQiLCJmcm9tU29ja2V0IiwiaWQiLCJzaG9vdGluZ1BsYXllciIsImZhY2luZ1JpZ2h0Iiwic2hvb3RpbmdUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbGVhc2VCYWxsIiwic2NvcmVQb3NpdGlvbiIsInNjb3JlSGl0Ym94IiwiaHlwb3QiLCJudW1iZXJPZkZyYW1lcyIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsImRpZmYiLCJhZGp1c3RlZFgiLCJyZW1vdmVQb3NzZXNzaW9uIiwiZmFsbCIsIm1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbiIsImNoZWNrQm91bmRzIiwianVtcGluZyIsIkNpcmNsZSIsIkNPVVJUX0ZMT09SIiwiQ09VUlRfV0lEVEgiLCJIT09QX1lfTVVMVElQTElFUiIsIkhPT1BfSEVJR0hUIiwiSE9PUF9XSURUSCIsIkhPT1BfWF9ESVNUQU5DRSIsIkJBQ0tCT0FSRF9XSURUSCIsIkJBQ0tCT0FSRF9IRUlHSFQiLCJDb3VydCIsImJhY2tncm91bmRDYXZhcyIsImhvb3BMZWZ0UG9zaXRpb24iLCJob29wUmlnaHRQb3NpdGlvbiIsImxlZnRIb29wSW1hZ2UiLCJJbWFnZSIsInJpZ2h0SG9vcEltYWdlIiwic3JjIiwiY291cnRJbWFnZSIsInNldHVwQmFja2dyb3VuZENvdXJ0IiwiZ2V0Q29udGV4dCIsImZpbGxSZWN0Iiwib25sb2FkIiwiZHJhd0ltYWdlIiwiUmVjdCIsImJhY2tncm91bmRDYW52YXMiLCJtYWluTWVudSIsIk1haW5NZW51Iiwic3RhcnRHYW1lIiwiYmluZCIsInN0YXJ0T25saW5lR2FtZSIsInBsYXlpbmdHYW1lIiwicmVuZGVyTWVudSIsInNldHVwS2V5SGFuZGxlcnMiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsZWZ0U3ByaXRlIiwicmlnaHRTcHJpdGUiLCJyZXN0YXJ0IiwibXlTaWRlIiwib25saW5lR2FtZUlkIiwicnVuT25saW5lR2FtZSIsIkhvb3AiLCJzY29yZWJvYXJkIiwiU2NvcmVib2FyZCIsIlBsYXllciIsInBsYXllcjIiLCJQbGF5ZXIyIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImdhbWVPdmVyIiwiZGlzcGxheVdpbm5lciIsIm15UGxheWVyIiwiT25saW5lUGxheWVyIiwib3RoZXJQbGF5ZXIiLCJvbiIsImRhdGEiLCJzaG93TWVudSIsInJ1bk9ubGluZSIsIm90aGVyUGxheWVyRmFjaW5nIiwib3RoZXJQbGF5ZXJKdW1waW5nIiwidGltZUxlZnQiLCJ0ZXh0Iiwic2NvcmUiLCJsb2MiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZVRleHQiLCJob29wU2lkZSIsImJhY2tib2FyZCIsIkJhY2tib2FyZCIsIlNjb3JlSGl0Ym94IiwianVzdFNjb3JlZCIsImNoZWNrQmFsbENvbGxpc2lvbiIsImlzT3ZlcmxhcHBpbmdSZWN0IiwiaG9vcCIsIkNoYXJhY3RlclNlbGVjdCIsInNlbGVjdGVkQ2hhcmFjdGVycyIsImxlZnRTZWxlY3RlZCIsInJpZ2h0U2VsZWN0ZWQiLCJjaGFyYWN0ZXJzIiwibmFtZSIsImxlZnRDaGFyIiwicmlnaHRDaGFyIiwibGVmdFJlYWR5IiwicmlnaHRSZWFkeSIsImxlZnRQbGF5ZXJJZCIsInJpZ2h0UGxheWVySWQiLCJpc1BsYXlpbmdMZWZ0IiwiaXNQbGF5aW5nUmlnaHQiLCJrZXkiLCJ1bmJpbmQiLCJvbmxpbmVNb2RlIiwibGVmdFNpZGVDaGFyIiwicmlnaHRTaWRlQ2hhciIsImxlbmd0aCIsInNlbGVjdGVkT3B0aW9uIiwib3B0aW9ucyIsImNoYXJhY3RlclNlbGVjdCIsInNlbGVjdGluZ0NoYXJhY3RlcnMiLCJsZWZ0U3JjIiwicmlnaHRTcmMiLCJmb3JFYWNoIiwib3B0aW9uIiwiaSIsIm1lYXN1cmVUZXh0IiwiYWJzIiwiUExBWUVSX1dJRFRIIiwiUExBWUVSX0hFSUdIVCIsIk1PVkVTUEVFRCIsIkpVTVBfSEVJR0hUIiwic3ByaXRlU3JjIiwic3RhcnRTaWRlIiwiYWN0aXZlIiwic3ByaXRlIiwiaXNQcmVzc2VkIiwicHJlZm9ybUFjdGlvbiIsImNoZWNrQmFsbCIsImhhbmRsZUdyYXZpdHkiLCJzaG9vdCIsImNsYWltUG9zc2Vzc2lvbiIsImNvdW50RG93biIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJlY3QiLCJkaXN0WCIsImRpc3RZIiwiZHgiLCJkeSIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImdsb2JhbCIsImsiLCJfaGFuZGxlcnMiLCJfbW9kcyIsIl9zY29wZSIsIl9NT0RJRklFUlMiLCJzaGlmdCIsImFsdCIsImN0cmwiLCJjb250cm9sIiwiY29tbWFuZCIsIl9NQVAiLCJiYWNrc3BhY2UiLCJ0YWIiLCJjbGVhciIsImVudGVyIiwiZXNjIiwiZXNjYXBlIiwic3BhY2UiLCJ1cCIsImRvd24iLCJkZWwiLCJob21lIiwiZW5kIiwicGFnZXVwIiwicGFnZWRvd24iLCJjb2RlIiwidG9VcHBlckNhc2UiLCJjaGFyQ29kZUF0IiwiX2Rvd25LZXlzIiwiaW5kZXgiLCJhcnJheSIsIml0ZW0iLCJjb21wYXJlQXJyYXkiLCJhMSIsImEyIiwibW9kaWZpZXJNYXAiLCJ1cGRhdGVNb2RpZmllcktleSIsImV2ZW50IiwiZGlzcGF0Y2giLCJoYW5kbGVyIiwibW9kaWZpZXJzTWF0Y2giLCJzY29wZSIsInB1c2giLCJhc3NpZ25LZXkiLCJmaWx0ZXIiLCJjYWxsIiwiZ2V0U2NvcGUiLCJtb2RzIiwibWV0aG9kIiwicmV0dXJuVmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJjYW5jZWxCdWJibGUiLCJjbGVhck1vZGlmaWVyIiwic3BsaWNlIiwicmVzZXRNb2RpZmllcnMiLCJrZXlzIiwiZ2V0S2V5cyIsInVuZGVmaW5lZCIsInNwbGl0IiwiZ2V0TW9kcyIsInNob3J0Y3V0IiwidW5iaW5kS2V5IiwibXVsdGlwbGVLZXlzIiwiaiIsIm9iaiIsImdldFByZXNzZWRLZXlDb2RlcyIsInNsaWNlIiwidGFnTmFtZSIsInRhcmdldCIsInNyY0VsZW1lbnQiLCJzZXRTY29wZSIsImRlbGV0ZVNjb3BlIiwiaGFuZGxlcnMiLCJyZXBsYWNlIiwibWkiLCJhZGRFdmVudCIsIm9iamVjdCIsImF0dGFjaEV2ZW50IiwicHJldmlvdXNLZXkiLCJub0NvbmZsaWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsInNpemUiLCJyZWN0Q2xhc3MiLCJteUJvdW5kcyIsImdldEJvdW5kcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZB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LFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLQyxLQUYzQjtBQUdIK0sscUJBQUssS0FBS2pMLFFBQUwsQ0FBY0csQ0FIaEI7QUFJSCtLLHdCQUFRLEtBQUtsTCxRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS0M7QUFKNUIsYUFBUDtBQU1IOzs7Ozs7a0JBekJnQitELEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY2xpZW50L3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBOQkFKYW1HYW1lIGZyb20gJy4vanMvZ2FtZS5qcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmJhLWphbS1nYW1lJyk7XG4gICAgY29uc3QgY2FudmFzQmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYmEtamFtLWJhY2tncm91bmQnKTtcblxuICAgIC8vIFByZXZlbnQgc2Nyb2xsaW5nIHdpdGggYXJyb3cga2V5c1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBzcGFjZSBhbmQgYXJyb3cga2V5c1xuICAgICAgICBpZiAoWzMyLCAzNywgMzgsIDM5LCA0MF0uaW5kZXhPZihlLmtleUNvZGUpID4gLTEpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgICBuZXcgTkJBSmFtR2FtZShjYW52YXMsIGNhbnZhc0JhY2tncm91bmQpO1xufSk7IiwiaW1wb3J0IENpcmNsZSBmcm9tIFwiLi91dGlscy9jaXJjbGVcIjtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIFJBRElVUzogMTUsXG4gICAgR1JBVklUWTogMC41LFxuICAgIEJPVU5DRV9SRVRFTlRJT046IDAuNixcbiAgICBEUklCQkxFX1NQRUVEOiAzLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIGV4dGVuZHMgQ2lyY2xlIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBjb3VydCwgbGVmdEhvb3AsIHJpZ2h0SG9vcCwgZ2FtZUlkKSB7XG4gICAgICAgIHN1cGVyKENPTlNUQU5UUy5SQURJVVMpXG4gICAgICAgIHRoaXMuY291cnQgPSBjb3VydFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBsZWZ0SG9vcFxuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IHJpZ2h0SG9vcFxuICAgICAgICB0aGlzLmxlZnRIb29wLmJhbGwgPSB0aGlzXG4gICAgICAgIHRoaXMucmlnaHRIb29wLmJhbGwgPSB0aGlzXG5cbiAgICAgICAgdGhpcy5nYW1lSWQgPSBnYW1lSWRcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jb3VydC53aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMlxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImhvdHBpbmtcIlxuICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgIHRoaXMubm9Ub3VjaCA9IHt9XG4gICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCwgXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnksIFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsIFxuICAgICAgICAgICAgMCwgXG4gICAgICAgICAgICBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIFxuICAgIGNsYWltUG9zc2Vzc2lvbihwbGF5ZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vVG91Y2hbcGxheWVyLmNvbG9yXSkge1xuICAgICAgICAgICAgdGhpcy5wb3NzZXNzaW9uID0gcGxheWVyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcImNoYW5nZU9mUG9zc2VzaW9uXCIsIHtcbiAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkLFxuICAgICAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc2hvb3QgKCkge1xuICAgICAgICAvLyBCRVRBIFNIT09USU5HXG5cbiAgICAgICAgLy8gdGhpcy5wb3dlciArPSAxXG4gICAgICAgIC8vIGNvbnN0IHNob290aW5nUGxheWVyID0gdGhpcy5wb3NzZXNzaW9uXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID9cbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54ICsgc2hvb3RpbmdQbGF5ZXIud2lkdGggKyB0aGlzLnJhZGl1cykgOlxuICAgICAgICAvLyAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cylcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ID0gc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueVxuXG4gICAgICAgIC8vIGlmICh0aGlzLnNob290aW5nSW50ZXJ2YWwgJiYgdGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgIC8vICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG9vdGluZ0ludGVydmFsKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmICh0aGlzLnBvd2VyIDwgNjApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuc2hvb3RpbmdJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gNiA6IC02XG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gdGhpcy5wb3dlclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcbiAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWUgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gZmFsc2VcbiAgICAgICAgLy8gICAgICAgICB9LCA1MDApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgICAgIC8vICAgICB9LCAyMCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBBSU1CT1QgU0hPT1RJTkdcblxuICAgICAgICAvLyBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICAvLyBjb25zdCBzY29yZVBvc2l0aW9uID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgPyAoXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgeDogdGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueCArICh0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC53aWR0aCAvIDIpLFxuICAgICAgICAvLyAgICAgICAgIHk6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnlcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gKSA6IChcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICB4OiB0aGlzLmxlZnRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgLy8gICAgICAgICB5OiB0aGlzLmxlZnRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnlcbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyApXG5cbiAgICAgICAgLy8gY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSA1MFxuXG4gICAgICAgIC8vIGNvbnN0IHZlbG9jaXR5WCA9IChzY29yZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICAgICAgLy8gY29uc3QgdmVsb2NpdHlZID0gKCAoLXNjb3JlUG9zaXRpb24ueSArIHRoaXMucG9zaXRpb24ueSkgLSAwLjUgKiAtQ09OU1RBTlRTLkdSQVZJVFkgKiAobnVtYmVyT2ZGcmFtZXMgKiBudW1iZXJPZkZyYW1lcykgKSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAvLyAgICAgeDogdmVsb2NpdHlYLFxuICAgICAgICAvLyAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gdHJ1ZSAgICAgICAgXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IGZhbHNlXG4gICAgICAgIC8vIH0sIDUwMCk7XG5cbiAgICAgICAgLy8gdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuXG4gICAgICAgIC8vIFBPV0VSQkFTRUQgQUlNRUQgU0hPT1RJTkdcblxuXG4gICAgICAgIHRoaXMucG93ZXIgKz0gMVxuXG4gICAgICAgIGNvbnN0IHNob290aW5nUGxheWVyID0gdGhpcy5wb3NzZXNzaW9uXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID9cbiAgICAgICAgICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54ICsgc2hvb3RpbmdQbGF5ZXIud2lkdGggKyB0aGlzLnJhZGl1cykgOlxuICAgICAgICAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cylcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueVxuXG4gICAgICAgIGlmICh0aGlzLnNob290aW5nVGltZW91dCAmJiB0aGlzLnBvd2VyIDwgNjApIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNob290aW5nVGltZW91dClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgICAgICB0aGlzLnNob290aW5nVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVsZWFzZUJhbGwoKVxuICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZWxlYXNlQmFsbCAoKSB7XG4gICAgICAgIGNvbnN0IHNob290aW5nUGxheWVyID0gdGhpcy5wb3NzZXNzaW9uXG5cbiAgICAgICAgY29uc3Qgc2NvcmVQb3NpdGlvbiA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgICAgICB9XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgICAgICB9XG4gICAgICAgIClcblxuICAgICAgICAvLyBMQVlVUFxuICAgICAgICBpZiAoMTUwID4gTWF0aC5oeXBvdCh0aGlzLnBvc2l0aW9uLnggLSBzY29yZVBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSAtIHNjb3JlUG9zaXRpb24ueSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlck9mRnJhbWVzID0gMzBcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WCA9IChzY29yZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WSA9ICgoLXNjb3JlUG9zaXRpb24ueSArIHRoaXMucG9zaXRpb24ueSkgLSAwLjUgKiAtQ09OU1RBTlRTLkdSQVZJVFkgKiAobnVtYmVyT2ZGcmFtZXMgKiBudW1iZXJPZkZyYW1lcykpIC8gbnVtYmVyT2ZGcmFtZXNcblxuICAgICAgICAgICAgY29uc3QgZGlmZiA9ICh0aGlzLnBvd2VyIC0gMzApIC8gMjBcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkWCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCArIGRpZmZcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYIC0gZGlmZlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgICAgICB4OiBhZGp1c3RlZFgsXG4gICAgICAgICAgICAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTSE9UXG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IDUwXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WCA9IChzY29yZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WSA9ICgoLXNjb3JlUG9zaXRpb24ueSArIHRoaXMucG9zaXRpb24ueSkgLSAwLjUgKiAtQ09OU1RBTlRTLkdSQVZJVFkgKiAobnVtYmVyT2ZGcmFtZXMgKiBudW1iZXJPZkZyYW1lcykpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAodGhpcy5wb3dlciAtIDMwKSAvIDZcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkWCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCArIGRpZmZcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYIC0gZGlmZlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgICAgICB4OiBhZGp1c3RlZFgsXG4gICAgICAgICAgICAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gdHJ1ZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSBmYWxzZVxuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgICAgIHRoaXMucmVtb3ZlUG9zc2Vzc2lvbigpXG5cbiAgICB9XG5cbiAgICByZW1vdmVQb3NzZXNzaW9uKCkge1xuICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgIHNvY2tldC5lbWl0KFwicmVtb3ZlQmFsbFBvc3Nlc3Npb25cIiwge1xuICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZCxcbiAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb25cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5wb3NzZXNzaW9uKSB7XG4gICAgICAgICAgICB0aGlzLmZhbGwoKVxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbigpIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG4gICAgbW92ZVdpdGhQbGF5ZXJQb3NzZXNzaW9uKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnBvc3Nlc3Npb24uZmFjaW5nUmlnaHQgP1xuICAgICAgICAgICAgKHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi54ICsgdGhpcy5wb3NzZXNzaW9uLndpZHRoKSA6ICh0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueClcblxuICAgICAgICBpZiAodGhpcy5wb3NzZXNzaW9uLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIC8vIEhPTEQgQkFMTFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLnkgKyB0aGlzLnBvc3Nlc3Npb24uaGVpZ2h0IC8gMlxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEUklCQkxJTkdcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPCB0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueSArIHRoaXMucG9zc2Vzc2lvbi5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLUNPTlNUQU5UUy5EUklCQkxFX1NQRUVEXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+IHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi55ICsgdGhpcy5wb3NzZXNzaW9uLmhlaWdodCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkRSSUJCTEVfU1BFRURcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5LnlcbiAgICAgICAgfVxuICAgICAgICAvLyBzb2NrZXQuZW1pdChcInVwZGF0ZUJhbGxXaXRoUG9zXCIsIHtcbiAgICAgICAgLy8gICAgIGdhbWVJZDogdGhpcy5nYW1lSWQsXG4gICAgICAgIC8vICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgIC8vICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICAvLyAgICAgb3RoZXJQbGF5ZXJGYWNpbmc6IHRoaXMucG9zc2Vzc2lvbi5mYWNpbmdSaWdodFxuICAgICAgICAvLyB9KVxuICAgIH1cblxuXG4gICAgZmFsbCAoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgICAgIC8vIEdSQVZJVFlcbiAgICAgICAgLy8gaWYgdGhlIHBvcyBpcyBncmVhdGVyIHRoYW4gdGhlIGZsb29yXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnJhZGl1cyA8IHRoaXMuY291cnQucG9zaXRpb24ueSkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IENPTlNUQU5UUy5HUkFWSVRZO1xuICAgICAgICAgICAgLy8gZWxzZSBzZXQgdGhlIHJldmVyc2UgdmVsb2NpdHlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZlbG9jaXR5LnkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy52ZWxvY2l0eS55ICogQ09OU1RBTlRTLkJPVU5DRV9SRVRFTlRJT05cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2hlY2tCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY291cnQud2lkdGggLSB0aGlzLnJhZGl1c1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDBcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5LnhcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCBSZWN0IGZyb20gXCIuL3V0aWxzL3JlY3RcIjtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIENPVVJUX0ZMT09SOiAwLjg1LFxuICAgIENPVVJUX1dJRFRIOiA1LFxuICAgIEhPT1BfWV9NVUxUSVBMSUVSOiAwLjMsXG4gICAgSE9PUF9IRUlHSFQ6IDQwLFxuICAgIEhPT1BfV0lEVEg6IDUwLFxuICAgIEhPT1BfWF9ESVNUQU5DRTogNTAsXG4gICAgQkFDS0JPQVJEX1dJRFRIOiAxNSxcbiAgICBCQUNLQk9BUkRfSEVJR0hUOiA1MFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291cnQgZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBiYWNrZ3JvdW5kQ2F2YXMpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogZGltZW5zaW9ucy53aWR0aCwgaGVpZ2h0OiBDT05TVEFOVFMuQ09VUlRfV0lEVEggfSlcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IGRpbWVuc2lvbnMuaGVpZ2h0ICogQ09OU1RBTlRTLkNPVVJUX0ZMT09SXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob29wTGVmdFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMCArIENPTlNUQU5UUy5IT09QX1hfRElTVEFOQ0UgLSA2LFxuICAgICAgICAgICAgeTogZGltZW5zaW9ucy5oZWlnaHQgKiBDT05TVEFOVFMuSE9PUF9ZX01VTFRJUExJRVJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvb3BSaWdodFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogZGltZW5zaW9ucy53aWR0aCAtIENPTlNUQU5UUy5IT09QX1hfRElTVEFOQ0UgLSBDT05TVEFOVFMuSE9PUF9XSURUSCAtIENPTlNUQU5UUy5CQUNLQk9BUkRfV0lEVEgsXG4gICAgICAgICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAqIENPTlNUQU5UUy5IT09QX1lfTVVMVElQTElFUlxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGVmdEhvb3BJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubGVmdEhvb3BJbWFnZS5zcmMgPSBcInNyYy9hc3NldHMvY2FydG9vbkhvb3BMZWZ0LnBuZ1wiXG4gICAgICAgIHRoaXMucmlnaHRIb29wSW1hZ2Uuc3JjID0gXCJzcmMvYXNzZXRzL2NhcnRvb25Ib29wUmlnaHQucG5nXCJcblxuICAgICAgICB0aGlzLmNvbG9yID0gXCJncmVlblwiXG4gICAgICAgIHRoaXMuY291cnRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmNvdXJ0SW1hZ2Uuc3JjID0gXCJzcmMvYXNzZXRzL2JiYWxsY291cnRzbWFsbC5wbmdcIlxuICAgICAgICB0aGlzLnNldHVwQmFja2dyb3VuZENvdXJ0KGJhY2tncm91bmRDYXZhcylcbiAgICB9ICBcblxuICAgIHNldHVwQmFja2dyb3VuZENvdXJ0KGNhbnZhcykge1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY291cnRJbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY291cnRJbWFnZSxcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmNvdXJ0SW1hZ2Uud2lkdGggLyAxMiwgXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5jb3VydEltYWdlLmhlaWdodCAvIDIsXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCArIHRoaXMuY291cnRJbWFnZS53aWR0aCAvIDYsXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VydEltYWdlLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sZWZ0SG9vcEltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5sZWZ0SG9vcEltYWdlLFxuICAgICAgICAgICAgICAgIHRoaXMuaG9vcExlZnRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIHRoaXMuaG9vcExlZnRQb3NpdGlvbi55IC0gKENPTlNUQU5UUy5IT09QX0hFSUdIVCArIDUpLFxuICAgICAgICAgICAgICAgIENPTlNUQU5UUy5IT09QX1dJRFRIICsgQ09OU1RBTlRTLkJBQ0tCT0FSRF9XSURUSCArIDEwLFxuICAgICAgICAgICAgICAgIENPTlNUQU5UUy5IT09QX0hFSUdIVCArIENPTlNUQU5UUy5CQUNLQk9BUkRfSEVJR0hUKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmlnaHRIb29wSW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnJpZ2h0SG9vcEltYWdlLFxuICAgICAgICAgICAgICAgIHRoaXMuaG9vcFJpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICB0aGlzLmhvb3BSaWdodFBvc2l0aW9uLnkgLSAoQ09OU1RBTlRTLkhPT1BfSEVJR0hUICsgNSksXG4gICAgICAgICAgICAgICAgQ09OU1RBTlRTLkhPT1BfV0lEVEggKyBDT05TVEFOVFMuQkFDS0JPQVJEX1dJRFRIICsgMTAsXG4gICAgICAgICAgICAgICAgQ09OU1RBTlRTLkhPT1BfSEVJR0hUICsgQ09OU1RBTlRTLkJBQ0tCT0FSRF9IRUlHSFQpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAvLyAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNvdXJ0SW1hZ2UsXG4gICAgLy8gICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmNvdXJ0SW1hZ2Uud2lkdGggLyAxMiwgXG4gICAgLy8gICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmNvdXJ0SW1hZ2UuaGVpZ2h0IC8gMixcbiAgICAvLyAgICAgICAgIHRoaXMud2lkdGggKyB0aGlzLmNvdXJ0SW1hZ2Uud2lkdGggLyA2LFxuICAgIC8vICAgICAgICAgdGhpcy5jb3VydEltYWdlLmhlaWdodCk7XG4gICAgfVxuXG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcidcbmltcG9ydCBDb3VydCBmcm9tICcuL2NvdXJ0JztcbmltcG9ydCBIb29wIGZyb20gJy4vaG9vcCc7XG5pbXBvcnQgQmFsbCBmcm9tICcuL2JhbGwnO1xuaW1wb3J0IFNjb3JlYm9hcmQgZnJvbSAnLi9zY29yZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIyIGZyb20gJy4vcGxheWVyMic7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9tZW51X3NjcmVlbnMvbWFpbl9tZW51JztcbmltcG9ydCBPbmxpbmVQbGF5ZXIgZnJvbSAnLi9vbmxpbmVfcGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTkJBSmFtR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBiYWNrZ3JvdW5kQ2FudmFzKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRDYW52YXMgPSBiYWNrZ3JvdW5kQ2FudmFzXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgICAgIHRoaXMubWFpbk1lbnUgPSBuZXcgTWFpbk1lbnUodGhpcy5kaW1lbnNpb25zLCB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpLCB0aGlzLnN0YXJ0T25saW5lR2FtZS5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVuZGVyTWVudSgpXG4gICAgfVxuXG4gICAgc2hvd01lbnUoKSB7XG4gICAgICAgIHRoaXMubWFpbk1lbnUuc2V0dXBLZXlIYW5kbGVycygpXG4gICAgICAgIHRoaXMucmVuZGVyTWVudSh0aGlzLmN0eClcbiAgICB9XG5cbiAgICByZW5kZXJNZW51ICgpIHtcbiAgICAgICAgdGhpcy5tYWluTWVudS5yZW5kZXIodGhpcy5jdHgpXG4gICAgICAgIGlmICghdGhpcy5wbGF5aW5nR2FtZSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyTWVudS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBzdGFydEdhbWUgKGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlKSB7XG4gICAgICAgIHRoaXMucGxheWluZ0dhbWUgPSB0cnVlXG4gICAgICAgIHRoaXMucmVzdGFydChsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSlcbiAgICB9XG5cbiAgICBzdGFydE9ubGluZUdhbWUobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUsIG15U2lkZSwgZ2FtZUlkKSB7XG4gICAgICAgIHRoaXMucGxheWluZ0dhbWUgPSB0cnVlXG4gICAgICAgIHRoaXMub25saW5lR2FtZUlkID0gZ2FtZUlkXG4gICAgICAgIHRoaXMucnVuT25saW5lR2FtZShsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSwgbXlTaWRlKVxuICAgIH1cblxuICAgIHJlc3RhcnQobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUpIHtcbiAgICAgICAgLy8gU1RBUlQgQU5JTUFUSU9OIFNZQ0xFXG4gICAgICAgIHRoaXMuY291cnQgPSBuZXcgQ291cnQodGhpcy5kaW1lbnNpb25zLCB0aGlzLmJhY2tncm91bmRDYW52YXMpO1xuICAgICAgICB0aGlzLmxlZnRIb29wID0gbmV3IEhvb3AodGhpcy5kaW1lbnNpb25zLCBcIkxFRlRcIik7XG4gICAgICAgIHRoaXMucmlnaHRIb29wID0gbmV3IEhvb3AodGhpcy5kaW1lbnNpb25zLCBcIlJJR0hUXCIpO1xuICAgICAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuY291cnQsIHRoaXMubGVmdEhvb3AsIHRoaXMucmlnaHRIb29wKVxuXG4gICAgICAgIHRoaXMuc2NvcmVib2FyZCA9IG5ldyBTY29yZWJvYXJkKHRoaXMuZGltZW5zaW9ucywgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3ApXG5cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgcmlnaHRTcHJpdGUpO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyMih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIGxlZnRTcHJpdGUpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cbiAgICBcbiAgICBhbmltYXRlKCkgeyAgICAgICAgXG4gICAgICAgIC8vIENSRUFURVMgQkFDS0dST1VORFxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIm9yYW5nZVwiO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcblxuICAgICAgICBcbiAgICAgICAgdGhpcy5jb3VydC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICAvLyBBTklNQVRFIE9CSkVDVFNcbiAgICAgICAgdGhpcy5wbGF5ZXIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMuYmFsbC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmxlZnRIb29wLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMucmlnaHRIb29wLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNjb3JlYm9hcmQuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVdpbm5lcigpXG4gICAgICAgIH1cbiAgICAgICAgLy8gUkVRVUVTVCBORVhUIEZSQU1FXG4gICAgICAgIGlmICh0aGlzLnBsYXlpbmdHYW1lKSB7XG4gICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIC8vIH0sIDEwMDAgLyA2MClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJ1bk9ubGluZUdhbWUobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUsIG15U2lkZSkge1xuICAgICAgICB0aGlzLmNvdXJ0ID0gbmV3IENvdXJ0KHRoaXMuZGltZW5zaW9ucywgdGhpcy5iYWNrZ3JvdW5kQ2FudmFzKTtcbiAgICAgICAgdGhpcy5sZWZ0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJMRUZUXCIpO1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJSSUdIVFwiKTtcbiAgICAgICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5kaW1lbnNpb25zLCB0aGlzLmNvdXJ0LCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcCwgdGhpcy5vbmxpbmVHYW1lSWQpXG5cbiAgICAgICAgdGhpcy5zY29yZWJvYXJkID0gbmV3IFNjb3JlYm9hcmQodGhpcy5kaW1lbnNpb25zLCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcClcblxuICAgICAgICBpZiAobXlTaWRlID09PSBcIkxFRlRcIikge1xuICAgICAgICAgICAgdGhpcy5teVBsYXllciA9IG5ldyBPbmxpbmVQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCBsZWZ0U3ByaXRlLCBcIkxFRlRcIiwgdHJ1ZSlcbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIgPSBuZXcgT25saW5lUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgcmlnaHRTcHJpdGUsIFwiUklHSFRcIiwgZmFsc2UpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyID0gbmV3IE9ubGluZVBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIGxlZnRTcHJpdGUsIFwiTEVGVFwiLCBmYWxzZSlcbiAgICAgICAgICAgIHRoaXMubXlQbGF5ZXIgPSBuZXcgT25saW5lUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgcmlnaHRTcHJpdGUsIFwiUklHSFRcIiwgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZU90aGVyUG9zXCIsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgIHg6IGRhdGFbXCJ4XCJdLFxuICAgICAgICAgICAgICAgIHk6IGRhdGFbXCJ5XCJdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllci5mYWNpbmdSaWdodCAgPSBkYXRhW1wib3RoZXJQbGF5ZXJGYWNpbmdcIl1cbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIuanVtcGluZyA9IGRhdGFbXCJvdGhlclBsYXllckp1bXBpbmdcIl1cbiAgICAgICAgfSkgXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZUJhbGxQb3NzZXNpb25cIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJhbGwucG9zc2Vzc2lvbiA9IHRoaXMub3RoZXJQbGF5ZXJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwicmVnaXN0ZXJlZFBvc3Nlc2lvbkNoYW5nZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLm9ubGluZUdhbWVJZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlTm9CYWxsUG9zc2VzaW9uXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5iYWxsLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgICAgICB0aGlzLmJhbGwucG9zaXRpb24gPSBkYXRhW1wicG9zaXRpb25cIl1cbiAgICAgICAgICAgIHRoaXMuYmFsbC52ZWxvY2l0eSA9IGRhdGFbXCJ2ZWxvY2l0eVwiXVxuICAgICAgICB9KVxuICAgICAgICAvLyBzb2NrZXQub24oXCJ1cGRhdGVCYWxsUG9zXCIsIGRhdGEgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5iYWxsLnBvc2l0aW9uID0gZGF0YVtcInBvc2l0aW9uXCJdXG4gICAgICAgIC8vICAgICB0aGlzLmJhbGwudmVsb2NpdHkgPSBkYXRhW1widmVsb2NpdHlcIl1cbiAgICAgICAgLy8gICAgIHRoaXMub3RoZXJQbGF5ZXIuZmFjaW5nUmlnaHQgPSBkYXRhW1wib3RoZXJQbGF5ZXJGYWNpbmdcIl1cbiAgICAgICAgLy8gfSlcbiAgICAgICAgc29ja2V0Lm9uKFwiZW5kR2FtZUZyb21EaXNjb25uZWN0XCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWluZ0dhbWUgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5vbmxpbmVHYW1lSWQgPSBudWxsXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNZW51KClcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMucnVuT25saW5lKCk7XG4gICAgfVxuXG4gICAgcnVuT25saW5lICgpIHtcbiAgICAgICAgLy8gQ1JFQVRFUyBCQUNLR1JPVU5EXG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuXG5cbiAgICAgICAgdGhpcy5jb3VydC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICAvLyBBTklNQVRFIE9CSkVDVFNcbiAgICAgICAgdGhpcy5vdGhlclBsYXllci5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLm15UGxheWVyLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIFxuICAgICAgICB0aGlzLmJhbGwuYW5pbWF0ZSh0aGlzLmN0eClcblxuICAgICAgICB0aGlzLmxlZnRIb29wLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMucmlnaHRIb29wLmFuaW1hdGUodGhpcy5jdHgpXG5cbiAgICAgICAgdGhpcy5zY29yZWJvYXJkLmFuaW1hdGUodGhpcy5jdHgpXG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5V2lubmVyKClcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc29ja2V0LmVtaXQoXCJ1cGRhdGVNeVBvc1wiLCB7XG4gICAgICAgICAgICBnYW1lSWQ6IHRoaXMub25saW5lR2FtZUlkLFxuICAgICAgICAgICAgZnJvbVNvY2tldDogc29ja2V0LmlkLFxuICAgICAgICAgICAgeDogdGhpcy5teVBsYXllci5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy5teVBsYXllci5wb3NpdGlvbi55LFxuICAgICAgICAgICAgb3RoZXJQbGF5ZXJGYWNpbmc6IHRoaXMubXlQbGF5ZXIuZmFjaW5nUmlnaHQsXG4gICAgICAgICAgICBvdGhlclBsYXllckp1bXBpbmc6IHRoaXMubXlQbGF5ZXIuanVtcGluZ1xuICAgICAgICB9KVxuICAgICAgICBzb2NrZXQuZW1pdChcInVwZGF0ZUJhbGxQb3NcIiwge1xuICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLm9ubGluZUdhbWVJZCxcbiAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgIHg6IHRoaXMuYmFsbC5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy5iYWxsLnBvc2l0aW9uLnlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gUkVRVUVTVCBORVhUIEZSQU1FXG4gICAgICAgIGlmICh0aGlzLnBsYXlpbmdHYW1lKSB7XG4gICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ydW5PbmxpbmUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAvLyB9LCAxMDAwIC8gNjApXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgZ2FtZU92ZXIgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29yZWJvYXJkLnRpbWVMZWZ0ID09PSAwXG4gICAgfVxuXG4gICAgZGlzcGxheVdpbm5lciAoKSB7XG4gICAgICAgIGxldCB0ZXh0O1xuICAgICAgICBpZiAodGhpcy5yaWdodEhvb3Auc2NvcmUgPiB0aGlzLmxlZnRIb29wLnNjb3JlKSB7XG4gICAgICAgICAgICB0ZXh0ID0gXCJQbGF5ZXIgMSB3aW5zXCJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlZnRIb29wLnNjb3JlID4gdGhpcy5yaWdodEhvb3Auc2NvcmUpIHtcbiAgICAgICAgICAgIHRleHQgPSBcIlBsYXllciAyIHdpbnNcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGV4dCA9IFwiVGllIEdhbWVcIlxuICAgICAgICB9XG4gICAgICAgIGxldCBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyIH1cbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYCR7dGV4dH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlVGV4dChgJHt0ZXh0fWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gZmFsc2VcbiAgICAgICAgdGhpcy5vbmxpbmVHYW1lSWQgPSBudWxsXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVudSgpXG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxufSIsImltcG9ydCBSZWN0IGZyb20gJy4vdXRpbHMvcmVjdCdcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEhPT1BfWV9NVUxUSVBMSUVSOiAwLjMsXG4gICAgSE9PUF9IRUlHSFQ6IDQwLFxuICAgIEhPT1BfV0lEVEg6IDUwLFxuICAgIEhPT1BfWF9ESVNUQU5DRTogNTAsXG4gICAgQkFDS0JPQVJEX1dJRFRIOiAxNSxcbiAgICBCQUNLQk9BUkRfSEVJR0hUOiA1MCxcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb29wIGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgaG9vcFNpZGUsIGJhbGwpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLkhPT1BfV0lEVEgsIGhlaWdodDogQ09OU1RBTlRTLkhPT1BfSEVJR0hUIH0pXG4gICAgICAgIHRoaXMuYmFsbCA9IGJhbGxcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICBjb25zdCB4ID0gaG9vcFNpZGUgPT09IFwiTEVGVFwiID8gKFxuICAgICAgICAgICAgICAgIDAgKyBDT05TVEFOVFMuSE9PUF9YX0RJU1RBTkNFXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMud2lkdGggLSBDT05TVEFOVFMuSE9PUF9YX0RJU1RBTkNFIC0gdGhpcy53aWR0aFxuICAgICAgICAgICAgKVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCwgXG4gICAgICAgICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAqIENPTlNUQU5UUy5IT09QX1lfTVVMVElQTElFUlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFja2JvYXJkID0gbmV3IEJhY2tib2FyZCh0aGlzLCBob29wU2lkZSlcbiAgICAgICAgdGhpcy5zY29yZUhpdGJveCA9IG5ldyBTY29yZUhpdGJveCh0aGlzLCBob29wU2lkZSlcbiAgICAgICAgdGhpcy5jb2xvciA9IFwicHVycGxlXCJcbiAgICAgICAgdGhpcy5zY29yZSA9IDBcbiAgICAgICAgdGhpcy5qdXN0U2NvcmVkID0gZmFsc2VcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmNoZWNrQmFsbENvbGxpc2lvbigpXG4gICAgICAgIC8vIHRoaXMuYmFja2JvYXJkLmFuaW1hdGUoY3R4KVxuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIC8vIHRoaXMuc2NvcmVIaXRib3guYW5pbWF0ZShjdHgpXG4gICAgICAgIGlmICh0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcy5zY29yZUhpdGJveCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5qdXN0U2NvcmVkKSB0aGlzLnNjb3JlICs9IDJcbiAgICAgICAgICAgIHRoaXMuanVzdFNjb3JlZCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcImdyZWVuXCJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuanVzdFNjb3JlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9IFwicHVycGxlXCJcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0JhbGxDb2xsaXNpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMpIHx8IHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzLmJhY2tib2FyZCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJhbGwucG9zaXRpb24ueSAtIHRoaXMuYmFsbC5yYWRpdXMgPiB0aGlzLnBvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYWxsLnZlbG9jaXR5LnkgPiAwKSB0aGlzLmJhbGwudmVsb2NpdHkueSA9IC10aGlzLmJhbGwudmVsb2NpdHkueVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYWxsLnBvc2l0aW9uLnkgKyB0aGlzLmJhbGwucmFkaXVzIDwgdGhpcy5iYWNrYm9hcmQucG9zaXRpb24ueSAmJiB0aGlzLmJhbGwudmVsb2NpdHkueSA8IDApICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsbC52ZWxvY2l0eS55ID0gLXRoaXMuYmFsbC52ZWxvY2l0eS55XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbC52ZWxvY2l0eS54ID0gLXRoaXMuYmFsbC52ZWxvY2l0eS54XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY2xhc3MgU2NvcmVIaXRib3ggZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihob29wLCBob29wU2lkZSkge1xuICAgICAgICBzdXBlcih7IHdpZHRoOiBDT05TVEFOVFMuSE9PUF9XSURUSCAtIDMwLCBoZWlnaHQ6IENPTlNUQU5UUy5IT09QX0hFSUdIVCAqIDAuMDUgfSlcbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCArIDE1XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICBob29wLnBvc2l0aW9uLnggKyBob29wLndpZHRoIC0gdGhpcy53aWR0aCAtIDE1XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiBob29wLnBvc2l0aW9uLnlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJ3aGl0ZVwiXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn1cblxuY2xhc3MgQmFja2JvYXJkIGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoaG9vcCwgaG9vcFNpZGUpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLkJBQ0tCT0FSRF9XSURUSCwgaGVpZ2h0OiBDT05TVEFOVFMuQkFDS0JPQVJEX0hFSUdIVCB9KVxuICAgICAgICBjb25zdCB4ID0gaG9vcFNpZGUgPT09IFwiTEVGVFwiID8gKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54IFxuICAgICAgICApIDogKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54ICsgaG9vcC53aWR0aCAtIHRoaXMud2lkdGhcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IGhvb3AucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwiYXF1YVwiXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn0iLCJpbXBvcnQga2V5IGZyb20gJy4uL3V0aWxzL2tleW1hc3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlclNlbGVjdCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgc2VsZWN0ZWRDaGFyYWN0ZXJzKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoYXJhY3RlcnMgPSBzZWxlY3RlZENoYXJhY3RlcnNcbiAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAwXG4gICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9IDFcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiBcIlJvZG1hblwiLCBzcmM6IFwic3JjL2Fzc2V0cy9yb2RtYW5TbWFsbC5wbmdcIn0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiRHJha2VcIiwgc3JjOiBcInNyYy9hc3NldHMvZHJha2VTbWFsbC5wbmdcIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkxlYnJvblwiLCBzcmM6IFwic3JjL2Fzc2V0cy9sZWJyb25TbWFsbC5wbmdcIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIlBlYWNoXCIsIHNyYzogXCJzcmMvYXNzZXRzL3BlYWNoU21hbGwucG5nXCJ9XG4gICAgICAgIF1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubGVmdENoYXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5yaWdodENoYXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5sZWZ0Q2hhci5zcmMgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdLnNyY1xuICAgICAgICB0aGlzLnJpZ2h0Q2hhci5zcmMgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmNcblxuICAgICAgICB0aGlzLmxlZnRSZWFkeSA9IGZhbHNlXG4gICAgICAgIHRoaXMucmlnaHRSZWFkeSA9IGZhbHNlXG5cbiAgICAgICAgc29ja2V0Lm9uKFwibWF0Y2hGb3VuZFwiLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMubGVmdFBsYXllcklkID0gZGF0YVtcImxlZnRQbGF5ZXJJZFwiXVxuICAgICAgICAgICAgdGhpcy5yaWdodFBsYXllcklkID0gZGF0YVtcInJpZ2h0UGxheWVySWRcIl1cbiAgICAgICAgICAgIGlmIChzb2NrZXQuaWQgPT09IHRoaXMubGVmdFBsYXllcklkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdMZWZ0ID0gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxheWluZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAwXG4gICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAxXG4gICAgICAgICAgICB0aGlzLmdhbWVJZCA9IGRhdGFbXCJnYW1lSWRcIl1cbiAgICAgICAgfSlcblxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVkU2VsZWN0ZWRDaGFyc1wiLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gZGF0YVtcImxlZnRTZWxlY3RlZFwiXVxuICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gZGF0YVtcInJpZ2h0U2VsZWN0ZWRcIl1cbiAgICAgICAgfSlcblxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVkTGVmdFJlYWR5XCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGVmdFJlYWR5ID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVkUmlnaHRSZWFkeVwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0UmVhZHkgPSB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgc29ja2V0Lm9uKFwic3RhcnRHYW1lXCIsICgpID0+IHtcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ2Rvd24nKVxuICAgICAgICAgICAga2V5LnVuYmluZCgndXAnKVxuICAgICAgICAgICAga2V5LnVuYmluZCgndycpXG4gICAgICAgICAgICBrZXkudW5iaW5kKCdzJylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ2VudGVyJylcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzKHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjLCB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmMsIHRoaXMuZ2FtZUlkKVxuICAgICAgICAgICAgdGhpcy5sZWZ0UGxheWVySWQgPSBudWxsXG4gICAgICAgICAgICB0aGlzLnJpZ2h0UGxheWVySWQgPSBudWxsXG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZ0xlZnQgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLm9ubGluZU1vZGUgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAwXG4gICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAxXG4gICAgICAgICAgICB0aGlzLmxlZnRSZWFkeSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLnJpZ2h0UmVhZHkgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSBudWxsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eCkge1xuXG4gICAgICAgIHRoaXMubGVmdENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXS5zcmNcbiAgICAgICAgdGhpcy5yaWdodENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjXG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicHVycGxlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIExFRlQgU0lERVxuICAgICAgICBjb25zdCBsZWZ0U2lkZUNoYXIgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdXG4gICAgICAgIGxldCBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDQsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyfVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuXG4gICAgICAgIGlmICh0aGlzLm9ubGluZU1vZGUpIGN0eC5maWxsVGV4dChcIk9ubGluZSBNb2RlXCIsIGxvYy54LCBsb2MueSAtIDEwMClcbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgMTJwdCBzZXJpZlwiO1xuICAgICAgICBpZiAodGhpcy5sZWZ0UmVhZHkpIGN0eC5maWxsVGV4dChcIlJlYWR5XCIsIGxvYy54LCBsb2MueSAtIDcwKVxuICAgICAgICBpZiAodGhpcy5sZWZ0UGxheWVySWQgJiYgdGhpcy5yaWdodFBsYXllcklkKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy5sZWZ0UGxheWVySWR9YCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7c29ja2V0LmlkfWAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCR7bGVmdFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYCR7bGVmdFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRDaGFyLFxuICAgICAgICAgICAgbG9jLnggLSB0aGlzLmxlZnRDaGFyLndpZHRoIC8gMixcbiAgICAgICAgICAgIGxvYy55KVxuXG4gICAgICAgIC8vIFJJR0hUIFNJREVcbiAgICAgICAgY29uc3QgcmlnaHRTaWRlQ2hhciA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdXG4gICAgICAgIGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoICogMyAvIDQsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyIH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblxuICAgICAgICBpZiAodGhpcy5vbmxpbmVNb2RlKSBjdHguZmlsbFRleHQoXCJPbmxpbmUgTW9kZVwiLCBsb2MueCwgbG9jLnkgLSAxMDApXG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDEycHQgc2VyaWZcIjtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRSZWFkeSkgY3R4LmZpbGxUZXh0KFwiUmVhZHlcIiwgbG9jLngsIGxvYy55IC0gNzApXG4gICAgICAgIGlmICh0aGlzLmxlZnRQbGF5ZXJJZCAmJiB0aGlzLnJpZ2h0UGxheWVySWQpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChgJHt0aGlzLnJpZ2h0UGxheWVySWR9YCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYFdhaXRpbmcgZm9yIFBsYXllcmAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcblxuICAgICAgICBjdHguZmlsbFRleHQoYCR7cmlnaHRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGAke3JpZ2h0U2lkZUNoYXIubmFtZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMucmlnaHRDaGFyLFxuICAgICAgICAgICAgbG9jLnggLSB0aGlzLnJpZ2h0Q2hhci53aWR0aCAvIDIsXG4gICAgICAgICAgICBsb2MueSlcbiBcbiAgICB9XG5cbiAgICBzZXR1cEtleUhhbmRsZXJzKCkge1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm9ubGluZU1vZGUpIHtcbiAgICAgICAgICAgICAgICBrZXkoJ2Rvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgndXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgLSAxKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yaWdodFNlbGVjdGVkID09PSAtMSkgdGhpcy5yaWdodFNlbGVjdGVkID0gdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgndycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgncycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgLSAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdFNlbGVjdGVkID09PSAtMSkgdGhpcy5sZWZ0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgndycpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3MnKVxuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzKHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjLCB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmMpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbmxpbmVNb2RlKSB7XG5cbiAgICAgICAgICAgICAgICBrZXkoJ3VwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmdhbWVJZCAmJiB0aGlzLm9ubGluZU1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUGxheWluZ0xlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9ICh0aGlzLmxlZnRTZWxlY3RlZCArIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1BsYXlpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0U2VsZWN0ZWQgPT09IC0xKSB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lSWQgJiYgdGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmdMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgLSAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZWZ0U2VsZWN0ZWQgPT09IC0xKSB0aGlzLmxlZnRTZWxlY3RlZCA9IHRoaXMuY2hhcmFjdGVycy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGxheWluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gKHRoaXMucmlnaHRTZWxlY3RlZCArIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZUlkICYmIHRoaXMub25saW5lTW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdsZWZ0UmVhZHknLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGxheWluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3JpZ2h0UmVhZHknLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG5cblxuXG59IiwiaW1wb3J0IGtleSBmcm9tICcuLi91dGlscy9rZXltYXN0ZXInO1xuaW1wb3J0IENoYXJhY3RlclNlbGVjdCBmcm9tICcuL2NoYXJhY3Rlcl9zZWxlY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSB7XG4gICAgY29uc3RydWN0b3IgKGRpbWVuc2lvbnMsIHN0YXJ0R2FtZSwgc3RhcnRPbmxpbmVHYW1lKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5zdGFydEdhbWUgPSBzdGFydEdhbWVcbiAgICAgICAgdGhpcy5zdGFydE9ubGluZUdhbWUgPSBzdGFydE9ubGluZUdhbWVcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IDBcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW1wiU3RhcnQgR2FtZVwiLCBcIk9ubGluZVwiXVxuICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdCA9IG5ldyBDaGFyYWN0ZXJTZWxlY3QodGhpcy5kaW1lbnNpb25zLCB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVycy5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgPSBmYWxzZVxuICAgICAgICB0aGlzLnNldHVwS2V5SGFuZGxlcnMoKVxuICAgIH1cblxuICAgIHNlbGVjdGVkQ2hhcmFjdGVycyAobGVmdFNyYywgcmlnaHRTcmMsIGdhbWVJZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJTZWxlY3Qub25saW5lTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Qub25saW5lTW9kZSA9IGZhbHNlXG4gICAgICAgICAgICBjb25zdCBteVNpZGUgPSB0aGlzLmNoYXJhY3RlclNlbGVjdC5pc1BsYXlpbmdMZWZ0ID8gXCJMRUZUXCIgOiBcIlJJR0hUXCJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRPbmxpbmVHYW1lKGxlZnRTcmMsIHJpZ2h0U3JjLCBteVNpZGUsIGdhbWVJZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKGxlZnRTcmMsIHJpZ2h0U3JjKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgcmVuZGVyIChjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicHVycGxlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvICgodGhpcy5vcHRpb25zLmxlbmd0aCArIDEpIC0gaSkgfVxuICAgICAgICAgICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBjdHgubWVhc3VyZVRleHQoYCR7b3B0aW9ufWApLndpZHRoXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PT0gaSkgY3R4LmZpbGxSZWN0KChsb2MueCAtIHdpZHRoIC8gMikgLSA1LCBsb2MueSAtIDQwLCB3aWR0aCArIDEwLCA1MCk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke29wdGlvbn1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHtvcHRpb259YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5yZW5kZXIoY3R4KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0dXBLZXlIYW5kbGVycygpIHtcbiAgICAgICAga2V5KCdkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9ICh0aGlzLnNlbGVjdGVkT3B0aW9uICsgMSkgJSB0aGlzLm9wdGlvbnMubGVuZ3RoXG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB9KVxuICAgICAgICBrZXkoJ3VwJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IE1hdGguYWJzKCh0aGlzLnNlbGVjdGVkT3B0aW9uIC0gMSkgJSB0aGlzLm9wdGlvbnMubGVuZ3RoKVxuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgfSlcbiAgICAgICAga2V5KCdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PT0gMCAmJiAhdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgndXAnKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2VudGVyJylcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Qub25saW5lTW9kZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Quc2V0dXBLZXlIYW5kbGVycygpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT09IDEgJiYgIXRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycykge1xuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2Rvd24nKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0Lm9ubGluZU1vZGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3BsYXllckFkZGVkVG9RdWV1ZScsIHNvY2tldC5pZClcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5zZXR1cEtleUhhbmRsZXJzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBcblxuXG5cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBHUkFWSVRZOiAwLjUsXG4gICAgUExBWUVSX1dJRFRIOiA0MCxcbiAgICBQTEFZRVJfSEVJR0hUOiA3MCxcbiAgICBNT1ZFU1BFRUQ6IDUsXG4gICAgLy8gV0lUSF9CQUxMX01PVkVTUEVFRDogMy41LFxuICAgIEpVTVBfSEVJR0hUOiAxNCxcbiAgICAvLyBPTl9GSVJFX0pVTVBfSEVJR0hUOiAxNlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25saW5lUGxheWVyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjLCBzdGFydFNpZGUsIGFjdGl2ZSkge1xuICAgICAgICBzdXBlcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHN0YXJ0U2lkZSA9PT0gXCJMRUZUXCIgPyAoe1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH0pIDogKHtcbiAgICAgICAgICAgIHg6IHRoaXMuY291cnQud2lkdGggLSB0aGlzLndpZHRoLFxuICAgICAgICAgICAgeTogdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKSB0aGlzLmNvbG9yID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlXG4gICAgfVxuXG5cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSA1LFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5zcHJpdGUuaGVpZ2h0IC8gMylcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgncmlnaHQnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdsZWZ0JykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBKVU1QSU5HXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCd1cCcpICYmICF0aGlzLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5KVU1QX0hFSUdIVDtcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdzcGFjZScpKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZvcm1BY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tCYWxsKClcblxuICAgICAgICB0aGlzLmhhbmRsZUdyYXZpdHkoKVxuXG4gICAgICAgIHRoaXMuY2hlY2tCb3VuZHMoKVxuICAgIH1cblxufVxuXG4iLCJpbXBvcnQgUmVjdCBmcm9tICcuL3V0aWxzL3JlY3QnO1xuaW1wb3J0IGtleSBmcm9tICcuL3V0aWxzL2tleW1hc3Rlcic7XG5cblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBQTEFZRVJfV0lEVEg6IDQwLFxuICAgIFBMQVlFUl9IRUlHSFQ6IDcwLFxuICAgIE1PVkVTUEVFRDogNSxcbiAgICAvLyBXSVRIX0JBTExfTU9WRVNQRUVEOiAzLjUsXG4gICAgSlVNUF9IRUlHSFQ6IDE0LFxuICAgIC8vIE9OX0ZJUkVfSlVNUF9IRUlHSFQ6IDE2XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5QTEFZRVJfV0lEVEgsIGhlaWdodDogQ09OU1RBTlRTLlBMQVlFUl9IRUlHSFQgfSlcbiAgICAgICAgdGhpcy5jb3VydCA9IGNvdXJ0XG4gICAgICAgIHRoaXMuYmFsbCA9IGJhbGxcblxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuZGVubmlzUm9kbWFuSGVhZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAvLyB0aGlzLmRlbm5pc1JvZG1hbkhlYWQuc3JjID0gJ3NyYy9hc3NldHMvZGVubmlzUm9kbWFuSGVhZC5wbmcnXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNyYyA9IHNwcml0ZVNyY1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZSh0aGlzLmRlbm5pc1JvZG1hbkhlYWQsIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIHRoaXMud2lkdGggKyAodGhpcy5kZW5uaXNSb2RtYW5IZWFkLndpZHRoIC8gMiksIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0ICsgKHRoaXMuZGVubmlzUm9kbWFuSGVhZC5oZWlnaHQgLyAzKSlcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSxcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSA1LFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5zcHJpdGUuaGVpZ2h0IC8gMylcbiAgICB9XG5cbiAgICBtb3ZlICgpIHtcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3JpZ2h0JykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnbGVmdCcpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSlVNUElOR1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgndXAnKSAmJiAhdGhpcy5qdW1waW5nKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSBDT05TVEFOVFMuSlVNUF9IRUlHSFQ7XG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnLycpKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZvcm1BY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tCYWxsKCkgXG5cbiAgICAgICAgdGhpcy5oYW5kbGVHcmF2aXR5KClcblxuICAgICAgICB0aGlzLmNoZWNrQm91bmRzKClcbiAgICB9XG5cbiAgICBwcmVmb3JtQWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5iYWxsLnBvc3Nlc3Npb24gPT09IHRoaXMpIHtcbiAgICAgICAgICAgIC8vIEhvbGQgdG8gc2hvb3QuIFxuICAgICAgICAgICAgdGhpcy5iYWxsLnNob290KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQmFsbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhbGwucG9zc2Vzc2lvbiAmJiB0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcykpIHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC5jbGFpbVBvc3Nlc3Npb24odGhpcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUdyYXZpdHkoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgICAgIC8vIEdSQVZJVFlcbiAgICAgICAgLy8gaWYgdGhlIHBvcyBpcyBncmVhdGVyIHRoYW4gdGhlIGZsb29yXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA8IHRoaXMuY291cnQucG9zaXRpb24ueSkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IENPTlNUQU5UUy5HUkFWSVRZO1xuICAgICAgICAgICAgLy8gZWxzZSBzZXQgdGhlIHBvcyB0byB0aGUgZmxvb3JcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDBcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGhcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBHUkFWSVRZOiAwLjUsXG4gICAgUExBWUVSX1dJRFRIOiA0MCxcbiAgICBQTEFZRVJfSEVJR0hUOiA3MCxcbiAgICBNT1ZFU1BFRUQ6IDUsXG4gICAgLy8gV0lUSF9CQUxMX01PVkVTUEVFRDogMy41LFxuICAgIEpVTVBfSEVJR0hUOiAxNCxcbiAgICAvLyBPTl9GSVJFX0pVTVBfSEVJR0hUOiAxNlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyMiBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY291cnQsIGJhbGwsIHNwcml0ZVNyYykge1xuICAgICAgICBzdXBlcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKVxuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdkJykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnYScpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSlVNUElOR1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgndycpICYmICF0aGlzLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5KVU1QX0hFSUdIVDtcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdxJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZm9ybUFjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JhbGwoKVxuXG4gICAgICAgIHRoaXMuaGFuZGxlR3Jhdml0eSgpXG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgbGVmdEhvb3AsIHJpZ2h0SG9vcCkge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBsZWZ0SG9vcFxuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IHJpZ2h0SG9vcFxuICAgICAgICB0aGlzLnRpbWVMZWZ0ID0gNjBcbiAgICAgICAgdGhpcy5jb3VudERvd24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7IFxuICAgICAgICAgICAgdGhpcy50aW1lTGVmdC0tXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lTGVmdCA9PT0gMCkgY2xlYXJJbnRlcnZhbCh0aGlzLmNvdW50RG93bilcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSAoY3R4KSB7XG4gICAgICAgIGxldCBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAxMCB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7IFxuICAgICAgICBjdHguZmlsbFRleHQoYFBsYXllciAxOiAke3RoaXMucmlnaHRIb29wLnNjb3JlfSBQbGF5ZXIgMjogJHt0aGlzLmxlZnRIb29wLnNjb3JlfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGBQbGF5ZXIgMTogJHt0aGlzLnJpZ2h0SG9vcC5zY29yZX0gUGxheWVyIDI6ICR7dGhpcy5sZWZ0SG9vcC5zY29yZX1gLCBsb2MueCwgbG9jLnkpO1xuXG4gICAgICAgIGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDUgfVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGAke3RoaXMudGltZUxlZnR9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYCR7dGhpcy50aW1lTGVmdH1gLCBsb2MueCwgbG9jLnkpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUge1xuICAgIGNvbnN0cnVjdG9yKHJhZGl1cykge1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG5cbiAgICBpc092ZXJsYXBwaW5nUmVjdChyZWN0KSB7XG4gICAgICAgIGNvbnN0IGRpc3RYID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi54IC0gcmVjdC5wb3NpdGlvbi54IC0gcmVjdC53aWR0aCAvIDIpO1xuICAgICAgICBjb25zdCBkaXN0WSA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueSAtIHJlY3QucG9zaXRpb24ueSAtIHJlY3QuaGVpZ2h0IC8gMik7XG4gICAgICAgIGlmIChkaXN0WCA+IChyZWN0LndpZHRoIC8gMiArIHRoaXMucmFkaXVzKSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgaWYgKGRpc3RZID4gKHJlY3QuaGVpZ2h0IC8gMiArIHRoaXMucmFkaXVzKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgICAgICBpZiAoZGlzdFggPD0gKHJlY3Qud2lkdGggLyAyKSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICBpZiAoZGlzdFkgPD0gKHJlY3QuaGVpZ2h0IC8gMikpIHsgcmV0dXJuIHRydWU7IH1cblxuICAgICAgICBjb25zdCBkeCA9IGRpc3RYIC0gcmVjdC53aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IGR5ID0gZGlzdFkgLSByZWN0LmhlaWdodCAvIDI7XG4gICAgICAgIHJldHVybiAoZHggKiBkeCArIGR5ICogZHkgPD0gKHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXMpKTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICByaWdodDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxufSIsIi8vICAgICBrZXltYXN0ZXIuanNcbi8vICAgICAoYykgMjAxMS0yMDEzIFRob21hcyBGdWNoc1xuLy8gICAgIGtleW1hc3Rlci5qcyBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuOyAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgIHZhciBrLFxuICAgICAgICBfaGFuZGxlcnMgPSB7fSxcbiAgICAgICAgX21vZHMgPSB7IDE2OiBmYWxzZSwgMTg6IGZhbHNlLCAxNzogZmFsc2UsIDkxOiBmYWxzZSB9LFxuICAgICAgICBfc2NvcGUgPSAnYWxsJyxcbiAgICAgICAgLy8gbW9kaWZpZXIga2V5c1xuICAgICAgICBfTU9ESUZJRVJTID0ge1xuICAgICAgICAgICAgJ+KHpyc6IDE2LCBzaGlmdDogMTYsXG4gICAgICAgICAgICAn4oylJzogMTgsIGFsdDogMTgsIG9wdGlvbjogMTgsXG4gICAgICAgICAgICAn4oyDJzogMTcsIGN0cmw6IDE3LCBjb250cm9sOiAxNyxcbiAgICAgICAgICAgICfijJgnOiA5MSwgY29tbWFuZDogOTFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gc3BlY2lhbCBrZXlzXG4gICAgICAgIF9NQVAgPSB7XG4gICAgICAgICAgICBiYWNrc3BhY2U6IDgsIHRhYjogOSwgY2xlYXI6IDEyLFxuICAgICAgICAgICAgZW50ZXI6IDEzLCAncmV0dXJuJzogMTMsXG4gICAgICAgICAgICBlc2M6IDI3LCBlc2NhcGU6IDI3LCBzcGFjZTogMzIsXG4gICAgICAgICAgICBsZWZ0OiAzNywgdXA6IDM4LFxuICAgICAgICAgICAgcmlnaHQ6IDM5LCBkb3duOiA0MCxcbiAgICAgICAgICAgIGRlbDogNDYsICdkZWxldGUnOiA0NixcbiAgICAgICAgICAgIGhvbWU6IDM2LCBlbmQ6IDM1LFxuICAgICAgICAgICAgcGFnZXVwOiAzMywgcGFnZWRvd246IDM0LFxuICAgICAgICAgICAgJywnOiAxODgsICcuJzogMTkwLCAnLyc6IDE5MSxcbiAgICAgICAgICAgICdgJzogMTkyLCAnLSc6IDE4OSwgJz0nOiAxODcsXG4gICAgICAgICAgICAnOyc6IDE4NiwgJ1xcJyc6IDIyMixcbiAgICAgICAgICAgICdbJzogMjE5LCAnXSc6IDIyMSwgJ1xcXFwnOiAyMjBcbiAgICAgICAgfSxcbiAgICAgICAgY29kZSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gX01BUFt4XSB8fCB4LnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgfSxcbiAgICAgICAgX2Rvd25LZXlzID0gW107XG5cbiAgICBmb3IgKGsgPSAxOyBrIDwgMjA7IGsrKykgX01BUFsnZicgKyBrXSA9IDExMSArIGs7XG5cbiAgICAvLyBJRSBkb2Vzbid0IHN1cHBvcnQgQXJyYXkjaW5kZXhPZiwgc28gaGF2ZSBhIHNpbXBsZSByZXBsYWNlbWVudFxuICAgIGZ1bmN0aW9uIGluZGV4KGFycmF5LCBpdGVtKSB7XG4gICAgICAgIHZhciBpID0gYXJyYXkubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaS0tKSBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLy8gZm9yIGNvbXBhcmluZyBtb2RzIGJlZm9yZSB1bmFzc2lnbm1lbnRcbiAgICBmdW5jdGlvbiBjb21wYXJlQXJyYXkoYTEsIGEyKSB7XG4gICAgICAgIGlmIChhMS5sZW5ndGggIT0gYTIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYTEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhMVtpXSAhPT0gYTJbaV0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgbW9kaWZpZXJNYXAgPSB7XG4gICAgICAgIDE2OiAnc2hpZnRLZXknLFxuICAgICAgICAxODogJ2FsdEtleScsXG4gICAgICAgIDE3OiAnY3RybEtleScsXG4gICAgICAgIDkxOiAnbWV0YUtleSdcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHVwZGF0ZU1vZGlmaWVyS2V5KGV2ZW50KSB7XG4gICAgICAgIGZvciAoayBpbiBfbW9kcykgX21vZHNba10gPSBldmVudFttb2RpZmllck1hcFtrXV07XG4gICAgfTtcblxuICAgIC8vIGhhbmRsZSBrZXlkb3duIGV2ZW50XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2goZXZlbnQpIHtcbiAgICAgICAgdmFyIGtleSwgaGFuZGxlciwgaywgaSwgbW9kaWZpZXJzTWF0Y2gsIHNjb3BlO1xuICAgICAgICBrZXkgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgICAgIGlmIChpbmRleChfZG93bktleXMsIGtleSkgPT0gLTEpIHtcbiAgICAgICAgICAgIF9kb3duS2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBhIG1vZGlmaWVyIGtleSwgc2V0IHRoZSBrZXkuPG1vZGlmaWVya2V5bmFtZT4gcHJvcGVydHkgdG8gdHJ1ZSBhbmQgcmV0dXJuXG4gICAgICAgIGlmIChrZXkgPT0gOTMgfHwga2V5ID09IDIyNCkga2V5ID0gOTE7IC8vIHJpZ2h0IGNvbW1hbmQgb24gd2Via2l0LCBjb21tYW5kIG9uIEdlY2tvXG4gICAgICAgIGlmIChrZXkgaW4gX21vZHMpIHtcbiAgICAgICAgICAgIF9tb2RzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgLy8gJ2Fzc2lnbktleScgZnJvbSBpbnNpZGUgdGhpcyBjbG9zdXJlIGlzIGV4cG9ydGVkIHRvIHdpbmRvdy5rZXlcbiAgICAgICAgICAgIGZvciAoayBpbiBfTU9ESUZJRVJTKSBpZiAoX01PRElGSUVSU1trXSA9PSBrZXkpIGFzc2lnbktleVtrXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlTW9kaWZpZXJLZXkoZXZlbnQpO1xuXG4gICAgICAgIC8vIHNlZSBpZiB3ZSBuZWVkIHRvIGlnbm9yZSB0aGUga2V5cHJlc3MgKGZpbHRlcigpIGNhbiBjYW4gYmUgb3ZlcnJpZGRlbilcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBpZ25vcmUga2V5IHByZXNzZXMgaWYgYSBzZWxlY3QsIHRleHRhcmVhLCBvciBpbnB1dCBpcyBmb2N1c2VkXG4gICAgICAgIGlmICghYXNzaWduS2V5LmZpbHRlci5jYWxsKHRoaXMsIGV2ZW50KSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIGFib3J0IGlmIG5vIHBvdGVudGlhbGx5IG1hdGNoaW5nIHNob3J0Y3V0cyBmb3VuZFxuICAgICAgICBpZiAoIShrZXkgaW4gX2hhbmRsZXJzKSkgcmV0dXJuO1xuXG4gICAgICAgIHNjb3BlID0gZ2V0U2NvcGUoKTtcblxuICAgICAgICAvLyBmb3IgZWFjaCBwb3RlbnRpYWwgc2hvcnRjdXRcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IF9oYW5kbGVyc1trZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYW5kbGVyID0gX2hhbmRsZXJzW2tleV1baV07XG5cbiAgICAgICAgICAgIC8vIHNlZSBpZiBpdCdzIGluIHRoZSBjdXJyZW50IHNjb3BlXG4gICAgICAgICAgICBpZiAoaGFuZGxlci5zY29wZSA9PSBzY29wZSB8fCBoYW5kbGVyLnNjb3BlID09ICdhbGwnKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgbW9kaWZpZXJzIG1hdGNoIGlmIGFueVxuICAgICAgICAgICAgICAgIG1vZGlmaWVyc01hdGNoID0gaGFuZGxlci5tb2RzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrIGluIF9tb2RzKVxuICAgICAgICAgICAgICAgICAgICBpZiAoKCFfbW9kc1trXSAmJiBpbmRleChoYW5kbGVyLm1vZHMsICtrKSA+IC0xKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKF9tb2RzW2tdICYmIGluZGV4KGhhbmRsZXIubW9kcywgK2spID09IC0xKSkgbW9kaWZpZXJzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBjYWxsIHRoZSBoYW5kbGVyIGFuZCBzdG9wIHRoZSBldmVudCBpZiBuZWNjZXNzYXJ5XG4gICAgICAgICAgICAgICAgaWYgKChoYW5kbGVyLm1vZHMubGVuZ3RoID09IDAgJiYgIV9tb2RzWzE2XSAmJiAhX21vZHNbMThdICYmICFfbW9kc1sxN10gJiYgIV9tb2RzWzkxXSkgfHwgbW9kaWZpZXJzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXIubWV0aG9kKGV2ZW50LCBoYW5kbGVyKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmNhbmNlbEJ1YmJsZSkgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB1bnNldCBtb2RpZmllciBrZXlzIG9uIGtleXVwXG4gICAgZnVuY3Rpb24gY2xlYXJNb2RpZmllcihldmVudCkge1xuICAgICAgICB2YXIga2V5ID0gZXZlbnQua2V5Q29kZSwgayxcbiAgICAgICAgICAgIGkgPSBpbmRleChfZG93bktleXMsIGtleSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGtleSBmcm9tIF9kb3duS2V5c1xuICAgICAgICBpZiAoaSA+PSAwKSB7XG4gICAgICAgICAgICBfZG93bktleXMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSA5MyB8fCBrZXkgPT0gMjI0KSBrZXkgPSA5MTtcbiAgICAgICAgaWYgKGtleSBpbiBfbW9kcykge1xuICAgICAgICAgICAgX21vZHNba2V5XSA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChrIGluIF9NT0RJRklFUlMpIGlmIChfTU9ESUZJRVJTW2tdID09IGtleSkgYXNzaWduS2V5W2tdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVzZXRNb2RpZmllcnMoKSB7XG4gICAgICAgIGZvciAoayBpbiBfbW9kcykgX21vZHNba10gPSBmYWxzZTtcbiAgICAgICAgZm9yIChrIGluIF9NT0RJRklFUlMpIGFzc2lnbktleVtrXSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICAvLyBwYXJzZSBhbmQgYXNzaWduIHNob3J0Y3V0XG4gICAgZnVuY3Rpb24gYXNzaWduS2V5KGtleSwgc2NvcGUsIG1ldGhvZCkge1xuICAgICAgICB2YXIga2V5cywgbW9kcztcbiAgICAgICAga2V5cyA9IGdldEtleXMoa2V5KTtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtZXRob2QgPSBzY29wZTtcbiAgICAgICAgICAgIHNjb3BlID0gJ2FsbCc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3IgZWFjaCBzaG9ydGN1dFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIHNldCBtb2RpZmllciBrZXlzIGlmIGFueVxuICAgICAgICAgICAgbW9kcyA9IFtdO1xuICAgICAgICAgICAga2V5ID0ga2V5c1tpXS5zcGxpdCgnKycpO1xuICAgICAgICAgICAgaWYgKGtleS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgbW9kcyA9IGdldE1vZHMoa2V5KTtcbiAgICAgICAgICAgICAgICBrZXkgPSBba2V5W2tleS5sZW5ndGggLSAxXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb252ZXJ0IHRvIGtleWNvZGUgYW5kLi4uXG4gICAgICAgICAgICBrZXkgPSBrZXlbMF1cbiAgICAgICAgICAgIGtleSA9IGNvZGUoa2V5KTtcbiAgICAgICAgICAgIC8vIC4uLnN0b3JlIGhhbmRsZXJcbiAgICAgICAgICAgIGlmICghKGtleSBpbiBfaGFuZGxlcnMpKSBfaGFuZGxlcnNba2V5XSA9IFtdO1xuICAgICAgICAgICAgX2hhbmRsZXJzW2tleV0ucHVzaCh7IHNob3J0Y3V0OiBrZXlzW2ldLCBzY29wZTogc2NvcGUsIG1ldGhvZDogbWV0aG9kLCBrZXk6IGtleXNbaV0sIG1vZHM6IG1vZHMgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gdW5iaW5kIGFsbCBoYW5kbGVycyBmb3IgZ2l2ZW4ga2V5IGluIGN1cnJlbnQgc2NvcGVcbiAgICBmdW5jdGlvbiB1bmJpbmRLZXkoa2V5LCBzY29wZSkge1xuICAgICAgICB2YXIgbXVsdGlwbGVLZXlzLCBrZXlzLFxuICAgICAgICAgICAgbW9kcyA9IFtdLFxuICAgICAgICAgICAgaSwgaiwgb2JqO1xuXG4gICAgICAgIG11bHRpcGxlS2V5cyA9IGdldEtleXMoa2V5KTtcblxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgbXVsdGlwbGVLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBrZXlzID0gbXVsdGlwbGVLZXlzW2pdLnNwbGl0KCcrJyk7XG5cbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBtb2RzID0gZ2V0TW9kcyhrZXlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5ID0ga2V5c1trZXlzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAga2V5ID0gY29kZShrZXkpO1xuXG4gICAgICAgICAgICBpZiAoc2NvcGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNjb3BlID0gZ2V0U2NvcGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghX2hhbmRsZXJzW2tleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX2hhbmRsZXJzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvYmogPSBfaGFuZGxlcnNba2V5XVtpXTtcbiAgICAgICAgICAgICAgICAvLyBvbmx5IGNsZWFyIGhhbmRsZXJzIGlmIGNvcnJlY3Qgc2NvcGUgYW5kIG1vZHMgbWF0Y2hcbiAgICAgICAgICAgICAgICBpZiAob2JqLnNjb3BlID09PSBzY29wZSAmJiBjb21wYXJlQXJyYXkob2JqLm1vZHMsIG1vZHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9oYW5kbGVyc1trZXldW2ldID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGUga2V5IHdpdGggY29kZSAna2V5Q29kZScgaXMgY3VycmVudGx5IGRvd25cbiAgICAvLyBDb252ZXJ0cyBzdHJpbmdzIGludG8ga2V5IGNvZGVzLlxuICAgIGZ1bmN0aW9uIGlzUHJlc3NlZChrZXlDb2RlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGtleUNvZGUpID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBrZXlDb2RlID0gY29kZShrZXlDb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXgoX2Rvd25LZXlzLCBrZXlDb2RlKSAhPSAtMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcmVzc2VkS2V5Q29kZXMoKSB7XG4gICAgICAgIHJldHVybiBfZG93bktleXMuc2xpY2UoMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YWdOYW1lID0gKGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50KS50YWdOYW1lO1xuICAgICAgICAvLyBpZ25vcmUga2V5cHJlc3NlZCBpbiBhbnkgZWxlbWVudHMgdGhhdCBzdXBwb3J0IGtleWJvYXJkIGRhdGEgaW5wdXRcbiAgICAgICAgcmV0dXJuICEodGFnTmFtZSA9PSAnSU5QVVQnIHx8IHRhZ05hbWUgPT0gJ1NFTEVDVCcgfHwgdGFnTmFtZSA9PSAnVEVYVEFSRUEnKTtcbiAgICB9XG5cbiAgICAvLyBpbml0aWFsaXplIGtleS48bW9kaWZpZXI+IHRvIGZhbHNlXG4gICAgZm9yIChrIGluIF9NT0RJRklFUlMpIGFzc2lnbktleVtrXSA9IGZhbHNlO1xuXG4gICAgLy8gc2V0IGN1cnJlbnQgc2NvcGUgKGRlZmF1bHQgJ2FsbCcpXG4gICAgZnVuY3Rpb24gc2V0U2NvcGUoc2NvcGUpIHsgX3Njb3BlID0gc2NvcGUgfHwgJ2FsbCcgfTtcbiAgICBmdW5jdGlvbiBnZXRTY29wZSgpIHsgcmV0dXJuIF9zY29wZSB8fCAnYWxsJyB9O1xuXG4gICAgLy8gZGVsZXRlIGFsbCBoYW5kbGVycyBmb3IgYSBnaXZlbiBzY29wZVxuICAgIGZ1bmN0aW9uIGRlbGV0ZVNjb3BlKHNjb3BlKSB7XG4gICAgICAgIHZhciBrZXksIGhhbmRsZXJzLCBpO1xuXG4gICAgICAgIGZvciAoa2V5IGluIF9oYW5kbGVycykge1xuICAgICAgICAgICAgaGFuZGxlcnMgPSBfaGFuZGxlcnNba2V5XTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJzW2ldLnNjb3BlID09PSBzY29wZSkgaGFuZGxlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGVsc2UgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGFic3RyYWN0IGtleSBsb2dpYyBmb3IgYXNzaWduIGFuZCB1bmFzc2lnblxuICAgIGZ1bmN0aW9uIGdldEtleXMoa2V5KSB7XG4gICAgICAgIHZhciBrZXlzO1xuICAgICAgICBrZXkgPSBrZXkucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAga2V5cyA9IGtleS5zcGxpdCgnLCcpO1xuICAgICAgICBpZiAoKGtleXNba2V5cy5sZW5ndGggLSAxXSkgPT0gJycpIHtcbiAgICAgICAgICAgIGtleXNba2V5cy5sZW5ndGggLSAyXSArPSAnLCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfVxuXG4gICAgLy8gYWJzdHJhY3QgbW9kcyBsb2dpYyBmb3IgYXNzaWduIGFuZCB1bmFzc2lnblxuICAgIGZ1bmN0aW9uIGdldE1vZHMoa2V5KSB7XG4gICAgICAgIHZhciBtb2RzID0ga2V5LnNsaWNlKDAsIGtleS5sZW5ndGggLSAxKTtcbiAgICAgICAgZm9yICh2YXIgbWkgPSAwOyBtaSA8IG1vZHMubGVuZ3RoOyBtaSsrKVxuICAgICAgICAgICAgbW9kc1ttaV0gPSBfTU9ESUZJRVJTW21vZHNbbWldXTtcbiAgICAgICAgcmV0dXJuIG1vZHM7XG4gICAgfVxuXG4gICAgLy8gY3Jvc3MtYnJvd3NlciBldmVudHNcbiAgICBmdW5jdGlvbiBhZGRFdmVudChvYmplY3QsIGV2ZW50LCBtZXRob2QpIHtcbiAgICAgICAgaWYgKG9iamVjdC5hZGRFdmVudExpc3RlbmVyKVxuICAgICAgICAgICAgb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG1ldGhvZCwgZmFsc2UpO1xuICAgICAgICBlbHNlIGlmIChvYmplY3QuYXR0YWNoRXZlbnQpXG4gICAgICAgICAgICBvYmplY3QuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBmdW5jdGlvbiAoKSB7IG1ldGhvZCh3aW5kb3cuZXZlbnQpIH0pO1xuICAgIH07XG5cbiAgICAvLyBzZXQgdGhlIGhhbmRsZXJzIGdsb2JhbGx5IG9uIGRvY3VtZW50XG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsICdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7IGRpc3BhdGNoKGV2ZW50KSB9KTsgLy8gUGFzc2luZyBfc2NvcGUgdG8gYSBjYWxsYmFjayB0byBlbnN1cmUgaXQgcmVtYWlucyB0aGUgc2FtZSBieSBleGVjdXRpb24uIEZpeGVzICM0OFxuICAgIGFkZEV2ZW50KGRvY3VtZW50LCAna2V5dXAnLCBjbGVhck1vZGlmaWVyKTtcblxuICAgIC8vIHJlc2V0IG1vZGlmaWVycyB0byBmYWxzZSB3aGVuZXZlciB0aGUgd2luZG93IGlzIChyZSlmb2N1c2VkLlxuICAgIGFkZEV2ZW50KHdpbmRvdywgJ2ZvY3VzJywgcmVzZXRNb2RpZmllcnMpO1xuXG4gICAgLy8gc3RvcmUgcHJldmlvdXNseSBkZWZpbmVkIGtleVxuICAgIHZhciBwcmV2aW91c0tleSA9IHdpbmRvdy5rZXk7XG5cbiAgICAvLyByZXN0b3JlIHByZXZpb3VzbHkgZGVmaW5lZCBrZXkgYW5kIHJldHVybiByZWZlcmVuY2UgdG8gb3VyIGtleSBvYmplY3RcbiAgICBmdW5jdGlvbiBub0NvbmZsaWN0KCkge1xuICAgICAgICB2YXIgayA9IHdpbmRvdy5rZXk7XG4gICAgICAgIHdpbmRvdy5rZXkgPSBwcmV2aW91c0tleTtcbiAgICAgICAgcmV0dXJuIGs7XG4gICAgfVxuXG4gICAgLy8gc2V0IHdpbmRvdy5rZXkgYW5kIHdpbmRvdy5rZXkuc2V0L2dldC9kZWxldGVTY29wZSwgYW5kIHRoZSBkZWZhdWx0IGZpbHRlclxuICAgIHdpbmRvdy5rZXkgPSBhc3NpZ25LZXk7XG4gICAgd2luZG93LmtleS5zZXRTY29wZSA9IHNldFNjb3BlO1xuICAgIHdpbmRvdy5rZXkuZ2V0U2NvcGUgPSBnZXRTY29wZTtcbiAgICB3aW5kb3cua2V5LmRlbGV0ZVNjb3BlID0gZGVsZXRlU2NvcGU7XG4gICAgd2luZG93LmtleS5maWx0ZXIgPSBmaWx0ZXI7XG4gICAgd2luZG93LmtleS5pc1ByZXNzZWQgPSBpc1ByZXNzZWQ7XG4gICAgd2luZG93LmtleS5nZXRQcmVzc2VkS2V5Q29kZXMgPSBnZXRQcmVzc2VkS2V5Q29kZXM7XG4gICAgd2luZG93LmtleS5ub0NvbmZsaWN0ID0gbm9Db25mbGljdDtcbiAgICB3aW5kb3cua2V5LnVuYmluZCA9IHVuYmluZEtleTtcblxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykgbW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25LZXk7XG5cbn0pKHRoaXMpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHNpemUud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgaXNPdmVybGFwcGluZ090aGVyUmVjdChyZWN0Q2xhc3MpIHtcbiAgICAgICAgY29uc3QgbXlCb3VuZHMgPSB0aGlzLmdldEJvdW5kcygpXG4gICAgICAgIGNvbnN0IHJlY3QgPSByZWN0Q2xhc3MuZ2V0Qm91bmRzKClcbiAgICAgICAgaWYgKG15Qm91bmRzLmxlZnQgPiByZWN0LnJpZ2h0IHx8IG15Qm91bmRzLnJpZ2h0IDwgcmVjdC5sZWZ0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG15Qm91bmRzLnRvcCA+IHJlY3QuYm90dG9tIHx8IG15Qm91bmRzLmJvdHRvbSA8IHJlY3QudG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHRcbiAgICAgICAgfTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9