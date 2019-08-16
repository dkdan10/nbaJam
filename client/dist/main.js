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

    function Ball(dimensions, court, leftHoop, rightHoop) {
        _classCallCheck(this, Ball);

        var _this = _possibleConstructorReturn(this, (Ball.__proto__ || Object.getPrototypeOf(Ball)).call(this, CONSTANTS.RADIUS));

        _this.court = court;
        _this.dimensions = dimensions;
        _this.leftHoop = leftHoop;
        _this.rightHoop = rightHoop;
        _this.leftHoop.ball = _this;
        _this.rightHoop.ball = _this;

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
            if (!this.noTouch[player.color]) this.possession = player;
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
            this.possession = null;
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NBAJamGame = function () {
    function NBAJamGame(canvas) {
        _classCallCheck(this, NBAJamGame);

        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.mainMenu = new _main_menu2.default(this.dimensions, this.startGame.bind(this));
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
        key: 'gameOver',
        value: function gameOver() {
            return this.scoreboard.timeLeft === 0;
        }
    }, {
        key: 'displayWinner',
        value: function displayWinner() {
            var _this = this;

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
            setTimeout(function () {
                _this.showMenu();
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
            console.log("updateSelected");
            _this.leftSelected = data["leftSelected"];
            _this.rightSelected = data["rightSelected"];
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
            ctx.font = "bold 16pt serif";
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
            ctx.font = "bold 16pt serif";
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
    function MainMenu(dimensions, startGame) {
        _classCallCheck(this, MainMenu);

        this.dimensions = dimensions;
        this.startGame = startGame;
        this.selectedOption = 0;
        this.options = ["Start Game", "Online"];
        this.characterSelect = new _character_select2.default(this.dimensions, this.selectedCharacters.bind(this));
        this.selectingCharacters = false;
        this.setupKeyHandlers();
    }

    _createClass(MainMenu, [{
        key: 'selectedCharacters',
        value: function selectedCharacters(leftSrc, rightSrc) {
            this.selectingCharacters = false;
            this.startGame(leftSrc, rightSrc);
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
            y: _this.court.position.y - CONSTANTS.PLAYER_HEIGHT
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9jb3VydC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9ob29wLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvbWVudV9zY3JlZW5zL2NoYXJhY3Rlcl9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9tZW51X3NjcmVlbnMvbWFpbl9tZW51LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvcGxheWVyMi5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3Njb3JlYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy91dGlscy9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy91dGlscy9rZXltYXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy91dGlscy9yZWN0LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiTkJBSmFtR2FtZSIsIkNPTlNUQU5UUyIsIlJBRElVUyIsIkdSQVZJVFkiLCJCT1VOQ0VfUkVURU5USU9OIiwiRFJJQkJMRV9TUEVFRCIsIkJhbGwiLCJkaW1lbnNpb25zIiwiY291cnQiLCJsZWZ0SG9vcCIsInJpZ2h0SG9vcCIsImJhbGwiLCJwb3NpdGlvbiIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJ2ZWxvY2l0eSIsImNvbG9yIiwicG9zc2Vzc2lvbiIsIm5vVG91Y2giLCJwb3dlciIsImN0eCIsIm1vdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJyYWRpdXMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwiY2xvc2VQYXRoIiwicGxheWVyIiwic2hvb3RpbmdQbGF5ZXIiLCJmYWNpbmdSaWdodCIsInNob290aW5nVGltZW91dCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJyZWxlYXNlQmFsbCIsInNjb3JlUG9zaXRpb24iLCJzY29yZUhpdGJveCIsImh5cG90IiwibnVtYmVyT2ZGcmFtZXMiLCJ2ZWxvY2l0eVgiLCJ2ZWxvY2l0eVkiLCJkaWZmIiwiYWRqdXN0ZWRYIiwiZmFsbCIsIm1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbiIsImNoZWNrQm91bmRzIiwianVtcGluZyIsIkNpcmNsZSIsIkNPVVJUX0ZMT09SIiwiQ09VUlRfV0lEVEgiLCJDb3VydCIsImZpbGxSZWN0IiwiUmVjdCIsImdldENvbnRleHQiLCJtYWluTWVudSIsIk1haW5NZW51Iiwic3RhcnRHYW1lIiwiYmluZCIsInBsYXlpbmdHYW1lIiwicmVuZGVyTWVudSIsInNldHVwS2V5SGFuZGxlcnMiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsZWZ0U3ByaXRlIiwicmlnaHRTcHJpdGUiLCJyZXN0YXJ0IiwiSG9vcCIsInNjb3JlYm9hcmQiLCJTY29yZWJvYXJkIiwiUGxheWVyIiwicGxheWVyMiIsIlBsYXllcjIiLCJhbmltYXRlIiwiZ2FtZU92ZXIiLCJkaXNwbGF5V2lubmVyIiwidGltZUxlZnQiLCJ0ZXh0Iiwic2NvcmUiLCJsb2MiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZVRleHQiLCJzaG93TWVudSIsIkhPT1BfWV9NVUxUSVBMSUVSIiwiSE9PUF9IRUlHSFQiLCJIT09QX1dJRFRIIiwiSE9PUF9YX0RJU1RBTkNFIiwiQkFDS0JPQVJEX1dJRFRIIiwiQkFDS0JPQVJEX0hFSUdIVCIsImhvb3BTaWRlIiwiYmFja2JvYXJkIiwiQmFja2JvYXJkIiwiU2NvcmVIaXRib3giLCJqdXN0U2NvcmVkIiwiY2hlY2tCYWxsQ29sbGlzaW9uIiwiaXNPdmVybGFwcGluZ1JlY3QiLCJob29wIiwiQ2hhcmFjdGVyU2VsZWN0Iiwic2VsZWN0ZWRDaGFyYWN0ZXJzIiwibGVmdFNlbGVjdGVkIiwicmlnaHRTZWxlY3RlZCIsImNoYXJhY3RlcnMiLCJuYW1lIiwic3JjIiwibGVmdENoYXIiLCJJbWFnZSIsInJpZ2h0Q2hhciIsInNvY2tldCIsIm9uIiwibGVmdFBsYXllcklkIiwiZGF0YSIsInJpZ2h0UGxheWVySWQiLCJpZCIsImlzUGxheWluZ0xlZnQiLCJpc1BsYXlpbmdSaWdodCIsImdhbWVJZCIsImNvbnNvbGUiLCJsb2ciLCJsZWZ0U2lkZUNoYXIiLCJvbmxpbmVNb2RlIiwiZHJhd0ltYWdlIiwicmlnaHRTaWRlQ2hhciIsImxlbmd0aCIsImtleSIsInVuYmluZCIsImVtaXQiLCJzZWxlY3RlZE9wdGlvbiIsIm9wdGlvbnMiLCJjaGFyYWN0ZXJTZWxlY3QiLCJzZWxlY3RpbmdDaGFyYWN0ZXJzIiwibGVmdFNyYyIsInJpZ2h0U3JjIiwiZm9yRWFjaCIsIm9wdGlvbiIsImkiLCJtZWFzdXJlVGV4dCIsImFicyIsIlBMQVlFUl9XSURUSCIsIlBMQVlFUl9IRUlHSFQiLCJNT1ZFU1BFRUQiLCJKVU1QX0hFSUdIVCIsInNwcml0ZVNyYyIsInNwcml0ZSIsImlzUHJlc3NlZCIsInByZWZvcm1BY3Rpb24iLCJjaGVja0JhbGwiLCJoYW5kbGVHcmF2aXR5Iiwic2hvb3QiLCJjbGFpbVBvc3Nlc3Npb24iLCJjb3VudERvd24iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJyZWN0IiwiZGlzdFgiLCJkaXN0WSIsImR4IiwiZHkiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJnbG9iYWwiLCJrIiwiX2hhbmRsZXJzIiwiX21vZHMiLCJfc2NvcGUiLCJfTU9ESUZJRVJTIiwic2hpZnQiLCJhbHQiLCJjdHJsIiwiY29udHJvbCIsImNvbW1hbmQiLCJfTUFQIiwiYmFja3NwYWNlIiwidGFiIiwiY2xlYXIiLCJlbnRlciIsImVzYyIsImVzY2FwZSIsInNwYWNlIiwidXAiLCJkb3duIiwiZGVsIiwiaG9tZSIsImVuZCIsInBhZ2V1cCIsInBhZ2Vkb3duIiwiY29kZSIsInRvVXBwZXJDYXNlIiwiY2hhckNvZGVBdCIsIl9kb3duS2V5cyIsImluZGV4IiwiYXJyYXkiLCJpdGVtIiwiY29tcGFyZUFycmF5IiwiYTEiLCJhMiIsIm1vZGlmaWVyTWFwIiwidXBkYXRlTW9kaWZpZXJLZXkiLCJldmVudCIsImRpc3BhdGNoIiwiaGFuZGxlciIsIm1vZGlmaWVyc01hdGNoIiwic2NvcGUiLCJrZXlDb2RlIiwicHVzaCIsImFzc2lnbktleSIsImZpbHRlciIsImNhbGwiLCJnZXRTY29wZSIsIm1vZHMiLCJtZXRob2QiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwiY2FuY2VsQnViYmxlIiwiY2xlYXJNb2RpZmllciIsInNwbGljZSIsInJlc2V0TW9kaWZpZXJzIiwia2V5cyIsImdldEtleXMiLCJ1bmRlZmluZWQiLCJzcGxpdCIsImdldE1vZHMiLCJzaG9ydGN1dCIsInVuYmluZEtleSIsIm11bHRpcGxlS2V5cyIsImoiLCJvYmoiLCJnZXRQcmVzc2VkS2V5Q29kZXMiLCJzbGljZSIsInRhZ05hbWUiLCJ0YXJnZXQiLCJzcmNFbGVtZW50Iiwic2V0U2NvcGUiLCJkZWxldGVTY29wZSIsImhhbmRsZXJzIiwicmVwbGFjZSIsIm1pIiwiYWRkRXZlbnQiLCJvYmplY3QiLCJhdHRhY2hFdmVudCIsIndpbmRvdyIsInByZXZpb3VzS2V5Iiwibm9Db25mbGljdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzaXplIiwicmVjdENsYXNzIiwibXlCb3VuZHMiLCJnZXRCb3VuZHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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ZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY2xpZW50L3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBOQkFKYW1HYW1lIGZyb20gJy4vanMvZ2FtZS5qcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmJhLWphbS1nYW1lJyk7XG4gICAgbmV3IE5CQUphbUdhbWUoY2FudmFzKTtcbn0pOyIsImltcG9ydCBDaXJjbGUgZnJvbSBcIi4vdXRpbHMvY2lyY2xlXCI7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBSQURJVVM6IDE1LFxuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBCT1VOQ0VfUkVURU5USU9OOiAwLjYsXG4gICAgRFJJQkJMRV9TUEVFRDogMyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCBleHRlbmRzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IgKGRpbWVuc2lvbnMsIGNvdXJ0LCBsZWZ0SG9vcCwgcmlnaHRIb29wKSB7XG4gICAgICAgIHN1cGVyKENPTlNUQU5UUy5SQURJVVMpXG4gICAgICAgIHRoaXMuY291cnQgPSBjb3VydFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBsZWZ0SG9vcFxuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IHJpZ2h0SG9vcFxuICAgICAgICB0aGlzLmxlZnRIb29wLmJhbGwgPSB0aGlzXG4gICAgICAgIHRoaXMucmlnaHRIb29wLmJhbGwgPSB0aGlzXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY291cnQud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJob3RwaW5rXCJcbiAgICAgICAgdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuICAgICAgICB0aGlzLm5vVG91Y2ggPSB7fVxuICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLngsIFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55LCBcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLCBcbiAgICAgICAgICAgIDAsIFxuICAgICAgICAgICAgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICBjbGFpbVBvc3Nlc3Npb24ocGxheWVyKSB7XG4gICAgICAgIGlmICghdGhpcy5ub1RvdWNoW3BsYXllci5jb2xvcl0pIHRoaXMucG9zc2Vzc2lvbiA9IHBsYXllclxuICAgIH1cblxuXG4gICAgc2hvb3QgKCkge1xuICAgICAgICAvLyBCRVRBIFNIT09USU5HXG5cbiAgICAgICAgLy8gdGhpcy5wb3dlciArPSAxXG4gICAgICAgIC8vIGNvbnN0IHNob290aW5nUGxheWVyID0gdGhpcy5wb3NzZXNzaW9uXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID9cbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54ICsgc2hvb3RpbmdQbGF5ZXIud2lkdGggKyB0aGlzLnJhZGl1cykgOlxuICAgICAgICAvLyAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cylcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ID0gc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueVxuXG4gICAgICAgIC8vIGlmICh0aGlzLnNob290aW5nSW50ZXJ2YWwgJiYgdGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgIC8vICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG9vdGluZ0ludGVydmFsKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmICh0aGlzLnBvd2VyIDwgNjApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuc2hvb3RpbmdJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gNiA6IC02XG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gdGhpcy5wb3dlclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcbiAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWUgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gZmFsc2VcbiAgICAgICAgLy8gICAgICAgICB9LCA1MDApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgICAgIC8vICAgICB9LCAyMCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBBSU1CT1QgU0hPT1RJTkdcblxuICAgICAgICAvLyBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICAvLyBjb25zdCBzY29yZVBvc2l0aW9uID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgPyAoXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgeDogdGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueCArICh0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC53aWR0aCAvIDIpLFxuICAgICAgICAvLyAgICAgICAgIHk6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnlcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gKSA6IChcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICB4OiB0aGlzLmxlZnRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgLy8gICAgICAgICB5OiB0aGlzLmxlZnRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnlcbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyApXG5cbiAgICAgICAgLy8gY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSA1MFxuXG4gICAgICAgIC8vIGNvbnN0IHZlbG9jaXR5WCA9IChzY29yZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICAgICAgLy8gY29uc3QgdmVsb2NpdHlZID0gKCAoLXNjb3JlUG9zaXRpb24ueSArIHRoaXMucG9zaXRpb24ueSkgLSAwLjUgKiAtQ09OU1RBTlRTLkdSQVZJVFkgKiAobnVtYmVyT2ZGcmFtZXMgKiBudW1iZXJPZkZyYW1lcykgKSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAvLyAgICAgeDogdmVsb2NpdHlYLFxuICAgICAgICAvLyAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gdHJ1ZSAgICAgICAgXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IGZhbHNlXG4gICAgICAgIC8vIH0sIDUwMCk7XG5cbiAgICAgICAgLy8gdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuXG4gICAgICAgIC8vIFBPV0VSQkFTRUQgQUlNRUQgU0hPT1RJTkdcblxuICAgICAgICB0aGlzLnBvd2VyICs9IDFcblxuICAgICAgICBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICBpZiAodGhpcy5zaG9vdGluZ1RpbWVvdXQgJiYgdGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG9vdGluZ1RpbWVvdXQpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG93ZXIgPCA2MCkge1xuICAgICAgICAgICAgdGhpcy5zaG9vdGluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VCYWxsKClcbiAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVsZWFzZUJhbGwgKCkge1xuICAgICAgICBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuXG4gICAgICAgIGNvbnN0IHNjb3JlUG9zaXRpb24gPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueVxuICAgICAgICAgICAgfVxuICAgICAgICApIDogKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMubGVmdEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueCArICh0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC53aWR0aCAvIDIpLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMubGVmdEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueVxuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgLy8gTEFZVVBcbiAgICAgICAgaWYgKDE1MCA+IE1hdGguaHlwb3QodGhpcy5wb3NpdGlvbi54IC0gc2NvcmVQb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgLSBzY29yZVBvc2l0aW9uLnkpKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IDMwXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVkgPSAoKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpKSAvIG51bWJlck9mRnJhbWVzXG5cbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAodGhpcy5wb3dlciAtIDMwKSAvIDEwMFxuICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWRYID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgPyAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYICsgZGlmZlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eVggLSBkaWZmXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgICAgIHg6IGFkanVzdGVkWCxcbiAgICAgICAgICAgICAgICB5OiB2ZWxvY2l0eVlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNIT1RcbiAgICAgICAgICAgIGNvbnN0IG51bWJlck9mRnJhbWVzID0gNTBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdmVsb2NpdHlYID0gKHNjb3JlUG9zaXRpb24ueCAtIHRoaXMucG9zaXRpb24ueCkgLyBudW1iZXJPZkZyYW1lc1xuICAgICAgICAgICAgY29uc3QgdmVsb2NpdHlZID0gKCgtc2NvcmVQb3NpdGlvbi55ICsgdGhpcy5wb3NpdGlvbi55KSAtIDAuNSAqIC1DT05TVEFOVFMuR1JBVklUWSAqIChudW1iZXJPZkZyYW1lcyAqIG51bWJlck9mRnJhbWVzKSkgLyBudW1iZXJPZkZyYW1lc1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGlmZiA9ICh0aGlzLnBvd2VyIC0gMzApIC8gMTBcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkWCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCArIGRpZmZcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYIC0gZGlmZlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgICAgICB4OiBhZGp1c3RlZFgsXG4gICAgICAgICAgICAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gdHJ1ZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSBmYWxzZVxuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcblxuICAgIH1cblxuICAgIG1vdmUoKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnBvc3Nlc3Npb24pIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbCgpXG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVdpdGhQbGF5ZXJQb3NzZXNzaW9uKCkgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrQm91bmRzKClcbiAgICB9XG5cbiAgICBtb3ZlV2l0aFBsYXllclBvc3Nlc3Npb24oKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMucG9zc2Vzc2lvbi5mYWNpbmdSaWdodCA/XG4gICAgICAgICAgICAodGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLnggKyB0aGlzLnBvc3Nlc3Npb24ud2lkdGgpIDogKHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi54KVxuXG4gICAgICAgIGlmICh0aGlzLnBvc3Nlc3Npb24uanVtcGluZykge1xuICAgICAgICAgICAgLy8gSE9MRCBCQUxMXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueSArIHRoaXMucG9zc2Vzc2lvbi5oZWlnaHQgLyAyXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIERSSUJCTElOR1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA8IHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi55ICsgdGhpcy5wb3NzZXNzaW9uLmhlaWdodCAvIDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtQ09OU1RBTlRTLkRSSUJCTEVfU1BFRURcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi55ID4gdGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLnkgKyB0aGlzLnBvc3Nlc3Npb24uaGVpZ2h0IC0gdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSBDT05TVEFOVFMuRFJJQkJMRV9TUEVFRFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMudmVsb2NpdHkueVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmYWxsICgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMudmVsb2NpdHkueTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICAgICAgLy8gR1JBVklUWVxuICAgICAgICAvLyBpZiB0aGUgcG9zIGlzIGdyZWF0ZXIgdGhhbiB0aGUgZmxvb3JcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMucmFkaXVzIDwgdGhpcy5jb3VydC5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gQ09OU1RBTlRTLkdSQVZJVFk7XG4gICAgICAgICAgICAvLyBlbHNlIHNldCB0aGUgcmV2ZXJzZSB2ZWxvY2l0eVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmVsb2NpdHkueSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLnZlbG9jaXR5LnkgKiBDT05TVEFOVFMuQk9VTkNFX1JFVEVOVElPTlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjaGVja0JvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA+IHRoaXMuY291cnQud2lkdGggLSB0aGlzLnJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jb3VydC53aWR0aCAtIHRoaXMucmFkaXVzXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMFxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueFxuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IFJlY3QgZnJvbSBcIi4vdXRpbHMvcmVjdFwiO1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgQ09VUlRfRkxPT1I6IDAuODUsXG4gICAgQ09VUlRfV0lEVEg6IDVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdXJ0IGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucykge1xuICAgICAgICBzdXBlcih7IHdpZHRoOiBkaW1lbnNpb25zLndpZHRoLCBoZWlnaHQ6IENPTlNUQU5UUy5DT1VSVF9XSURUSCB9KVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IGRpbWVuc2lvbnMuaGVpZ2h0ICogQ09OU1RBTlRTLkNPVVJUX0ZMT09SXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwiZ3JlZW5cIlxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJ1xuaW1wb3J0IENvdXJ0IGZyb20gJy4vY291cnQnO1xuaW1wb3J0IEhvb3AgZnJvbSAnLi9ob29wJztcbmltcG9ydCBCYWxsIGZyb20gJy4vYmFsbCc7XG5pbXBvcnQgU2NvcmVib2FyZCBmcm9tICcuL3Njb3JlYm9hcmQnO1xuaW1wb3J0IFBsYXllcjIgZnJvbSAnLi9wbGF5ZXIyJztcbmltcG9ydCBNYWluTWVudSBmcm9tICcuL21lbnVfc2NyZWVucy9tYWluX21lbnUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOQkFKYW1HYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHsgICAgICAgIFxuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgICAgIHRoaXMubWFpbk1lbnUgPSBuZXcgTWFpbk1lbnUodGhpcy5kaW1lbnNpb25zLCB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVuZGVyTWVudSgpXG4gICAgfVxuXG4gICAgc2hvd01lbnUoKSB7XG4gICAgICAgIHRoaXMubWFpbk1lbnUuc2V0dXBLZXlIYW5kbGVycygpXG4gICAgICAgIHRoaXMucmVuZGVyTWVudSh0aGlzLmN0eClcbiAgICB9XG5cbiAgICByZW5kZXJNZW51ICgpIHtcbiAgICAgICAgdGhpcy5tYWluTWVudS5yZW5kZXIodGhpcy5jdHgpXG4gICAgICAgIGlmICghdGhpcy5wbGF5aW5nR2FtZSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyTWVudS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBzdGFydEdhbWUgKGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlKSB7XG4gICAgICAgIHRoaXMucGxheWluZ0dhbWUgPSB0cnVlXG4gICAgICAgIHRoaXMucmVzdGFydChsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSlcbiAgICB9XG5cbiAgICByZXN0YXJ0KGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlKSB7XG4gICAgICAgIC8vIFNUQVJUIEFOSU1BVElPTiBTWUNMRVxuICAgICAgICB0aGlzLmNvdXJ0ID0gbmV3IENvdXJ0KHRoaXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiTEVGVFwiKTtcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiUklHSFRcIik7XG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKHRoaXMuZGltZW5zaW9ucywgdGhpcy5jb3VydCwgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3ApXG5cbiAgICAgICAgdGhpcy5zY29yZWJvYXJkID0gbmV3IFNjb3JlYm9hcmQodGhpcy5kaW1lbnNpb25zLCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcClcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCByaWdodFNwcml0ZSk7XG4gICAgICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgbGVmdFNwcml0ZSk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuICAgIFxuICAgIGFuaW1hdGUoKSB7ICAgICAgICBcbiAgICAgICAgLy8gQ1JFQVRFUyBCQUNLR1JPVU5EXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICAvLyBBTklNQVRFIE9CSkVDVFNcbiAgICAgICAgdGhpcy5wbGF5ZXIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMuYmFsbC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmxlZnRIb29wLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMucmlnaHRIb29wLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNjb3JlYm9hcmQuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5jb3VydC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5V2lubmVyKClcbiAgICAgICAgfVxuICAgICAgICAvLyBSRVFVRVNUIE5FWFQgRlJBTUVcbiAgICAgICAgaWYgKHRoaXMucGxheWluZ0dhbWUpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG5cblxuICAgIGdhbWVPdmVyICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmVib2FyZC50aW1lTGVmdCA9PT0gMFxuICAgIH1cblxuICAgIGRpc3BsYXlXaW5uZXIgKCkge1xuICAgICAgICBsZXQgdGV4dDtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRIb29wLnNjb3JlID4gdGhpcy5sZWZ0SG9vcC5zY29yZSkge1xuICAgICAgICAgICAgdGV4dCA9IFwiUGxheWVyIDEgd2luc1wiXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0SG9vcC5zY29yZSA+IHRoaXMucmlnaHRIb29wLnNjb3JlKSB7XG4gICAgICAgICAgICB0ZXh0ID0gXCJQbGF5ZXIgMiB3aW5zXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQgPSBcIlRpZSBHYW1lXCJcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiB9XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke3RleHR9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoYCR7dGV4dH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVudSgpXG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxufSIsImltcG9ydCBSZWN0IGZyb20gJy4vdXRpbHMvcmVjdCdcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEhPT1BfWV9NVUxUSVBMSUVSOiAwLjMsXG4gICAgSE9PUF9IRUlHSFQ6IDQwLFxuICAgIEhPT1BfV0lEVEg6IDUwLFxuICAgIEhPT1BfWF9ESVNUQU5DRTogNTAsXG4gICAgQkFDS0JPQVJEX1dJRFRIOiAxNSxcbiAgICBCQUNLQk9BUkRfSEVJR0hUOiA1MCxcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb29wIGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgaG9vcFNpZGUsIGJhbGwpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLkhPT1BfV0lEVEgsIGhlaWdodDogQ09OU1RBTlRTLkhPT1BfSEVJR0hUIH0pXG4gICAgICAgIHRoaXMuYmFsbCA9IGJhbGxcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICBjb25zdCB4ID0gaG9vcFNpZGUgPT09IFwiTEVGVFwiID8gKFxuICAgICAgICAgICAgICAgIDAgKyBDT05TVEFOVFMuSE9PUF9YX0RJU1RBTkNFXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMud2lkdGggLSBDT05TVEFOVFMuSE9PUF9YX0RJU1RBTkNFIC0gdGhpcy53aWR0aFxuICAgICAgICAgICAgKVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCwgXG4gICAgICAgICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAqIENPTlNUQU5UUy5IT09QX1lfTVVMVElQTElFUlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFja2JvYXJkID0gbmV3IEJhY2tib2FyZCh0aGlzLCBob29wU2lkZSlcbiAgICAgICAgdGhpcy5zY29yZUhpdGJveCA9IG5ldyBTY29yZUhpdGJveCh0aGlzLCBob29wU2lkZSlcbiAgICAgICAgdGhpcy5jb2xvciA9IFwicHVycGxlXCJcbiAgICAgICAgdGhpcy5zY29yZSA9IDBcbiAgICAgICAgdGhpcy5qdXN0U2NvcmVkID0gZmFsc2VcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmNoZWNrQmFsbENvbGxpc2lvbigpXG4gICAgICAgIHRoaXMuYmFja2JvYXJkLmFuaW1hdGUoY3R4KVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuc2NvcmVIaXRib3guYW5pbWF0ZShjdHgpXG4gICAgICAgIGlmICh0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcy5zY29yZUhpdGJveCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5qdXN0U2NvcmVkKSB0aGlzLnNjb3JlICs9IDJcbiAgICAgICAgICAgIHRoaXMuanVzdFNjb3JlZCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcImdyZWVuXCJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuanVzdFNjb3JlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9IFwicHVycGxlXCJcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0JhbGxDb2xsaXNpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMpIHx8IHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzLmJhY2tib2FyZCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJhbGwucG9zaXRpb24ueSAtIHRoaXMuYmFsbC5yYWRpdXMgPiB0aGlzLnBvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYWxsLnZlbG9jaXR5LnkgPiAwKSB0aGlzLmJhbGwudmVsb2NpdHkueSA9IC10aGlzLmJhbGwudmVsb2NpdHkueVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYWxsLnBvc2l0aW9uLnkgKyB0aGlzLmJhbGwucmFkaXVzIDwgdGhpcy5iYWNrYm9hcmQucG9zaXRpb24ueSAmJiB0aGlzLmJhbGwudmVsb2NpdHkueSA8IDApICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsbC52ZWxvY2l0eS55ID0gLXRoaXMuYmFsbC52ZWxvY2l0eS55XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbC52ZWxvY2l0eS54ID0gLXRoaXMuYmFsbC52ZWxvY2l0eS54XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY2xhc3MgU2NvcmVIaXRib3ggZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihob29wLCBob29wU2lkZSkge1xuICAgICAgICBzdXBlcih7IHdpZHRoOiBDT05TVEFOVFMuSE9PUF9XSURUSCAtIDMwLCBoZWlnaHQ6IENPTlNUQU5UUy5IT09QX0hFSUdIVCAqIDAuMDUgfSlcbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCArIDE1XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICBob29wLnBvc2l0aW9uLnggKyBob29wLndpZHRoIC0gdGhpcy53aWR0aCAtIDE1XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiBob29wLnBvc2l0aW9uLnlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJ3aGl0ZVwiXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn1cblxuY2xhc3MgQmFja2JvYXJkIGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoaG9vcCwgaG9vcFNpZGUpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLkJBQ0tCT0FSRF9XSURUSCwgaGVpZ2h0OiBDT05TVEFOVFMuQkFDS0JPQVJEX0hFSUdIVCB9KVxuICAgICAgICBjb25zdCB4ID0gaG9vcFNpZGUgPT09IFwiTEVGVFwiID8gKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54IFxuICAgICAgICApIDogKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54ICsgaG9vcC53aWR0aCAtIHRoaXMud2lkdGhcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IGhvb3AucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwiYXF1YVwiXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn0iLCJpbXBvcnQga2V5IGZyb20gJy4uL3V0aWxzL2tleW1hc3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlclNlbGVjdCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgc2VsZWN0ZWRDaGFyYWN0ZXJzKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoYXJhY3RlcnMgPSBzZWxlY3RlZENoYXJhY3RlcnNcbiAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAwXG4gICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9IDFcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiBcIlJvZG1hblwiLCBzcmM6IFwic3JjL2Fzc2V0cy9yb2RtYW5TbWFsbC5wbmdcIn0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiRHJha2VcIiwgc3JjOiBcInNyYy9hc3NldHMvZHJha2VTbWFsbC5wbmdcIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkxlYnJvblwiLCBzcmM6IFwic3JjL2Fzc2V0cy9sZWJyb25TbWFsbC5wbmdcIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIlBlYWNoXCIsIHNyYzogXCJzcmMvYXNzZXRzL3BlYWNoU21hbGwucG5nXCJ9XG4gICAgICAgIF1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubGVmdENoYXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5yaWdodENoYXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5sZWZ0Q2hhci5zcmMgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdLnNyY1xuICAgICAgICB0aGlzLnJpZ2h0Q2hhci5zcmMgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmNcblxuICAgICAgICBzb2NrZXQub24oXCJtYXRjaEZvdW5kXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5sZWZ0UGxheWVySWQgPSBkYXRhW1wibGVmdFBsYXllcklkXCJdXG4gICAgICAgICAgICB0aGlzLnJpZ2h0UGxheWVySWQgPSBkYXRhW1wicmlnaHRQbGF5ZXJJZFwiXVxuICAgICAgICAgICAgaWYgKHNvY2tldC5pZCA9PT0gdGhpcy5sZWZ0UGxheWVySWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxheWluZ0xlZnQgPSB0cnVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nUmlnaHQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9IDBcbiAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9IDFcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gZGF0YVtcImdhbWVJZFwiXVxuICAgICAgICB9KVxuXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZWRTZWxlY3RlZENoYXJzXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVTZWxlY3RlZFwiKVxuICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSBkYXRhW1wibGVmdFNlbGVjdGVkXCJdXG4gICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSBkYXRhW1wicmlnaHRTZWxlY3RlZFwiXVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcihjdHgpIHtcblxuICAgICAgICB0aGlzLmxlZnRDaGFyLnNyYyA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjXG4gICAgICAgIHRoaXMucmlnaHRDaGFyLnNyYyA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdLnNyY1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInB1cnBsZVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBMRUZUIFNJREVcbiAgICAgICAgY29uc3QgbGVmdFNpZGVDaGFyID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXVxuICAgICAgICBsZXQgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyA0LCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMn1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblxuICAgICAgICBpZiAodGhpcy5vbmxpbmVNb2RlKSBjdHguZmlsbFRleHQoXCJPbmxpbmUgTW9kZVwiLCBsb2MueCwgbG9jLnkgLSAxMDApXG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDE2cHQgc2VyaWZcIjtcbiAgICAgICAgaWYgKHRoaXMubGVmdFBsYXllcklkICYmIHRoaXMucmlnaHRQbGF5ZXJJZCkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke3RoaXMubGVmdFBsYXllcklkfWAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub25saW5lTW9kZSkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke3NvY2tldC5pZH1gLCBsb2MueCwgbG9jLnkgLSA1MClcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGAke2xlZnRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGAke2xlZnRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5sZWZ0Q2hhcixcbiAgICAgICAgICAgIGxvYy54IC0gdGhpcy5sZWZ0Q2hhci53aWR0aCAvIDIsXG4gICAgICAgICAgICBsb2MueSlcblxuICAgICAgICAvLyBSSUdIVCBTSURFXG4gICAgICAgIGNvbnN0IHJpZ2h0U2lkZUNoYXIgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXVxuICAgICAgICBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAqIDMgLyA0LCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5cbiAgICAgICAgaWYgKHRoaXMub25saW5lTW9kZSkgY3R4LmZpbGxUZXh0KFwiT25saW5lIE1vZGVcIiwgbG9jLngsIGxvYy55IC0gMTAwKVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCAxNnB0IHNlcmlmXCI7XG4gICAgICAgIGlmICh0aGlzLmxlZnRQbGF5ZXJJZCAmJiB0aGlzLnJpZ2h0UGxheWVySWQpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChgJHt0aGlzLnJpZ2h0UGxheWVySWR9YCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYFdhaXRpbmcgZm9yIFBsYXllcmAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcblxuICAgICAgICBjdHguZmlsbFRleHQoYCR7cmlnaHRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGAke3JpZ2h0U2lkZUNoYXIubmFtZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMucmlnaHRDaGFyLFxuICAgICAgICAgICAgbG9jLnggLSB0aGlzLnJpZ2h0Q2hhci53aWR0aCAvIDIsXG4gICAgICAgICAgICBsb2MueSlcblxuICAgIH1cblxuICAgIHNldHVwS2V5SGFuZGxlcnMoKSB7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMub25saW5lTW9kZSkge1xuICAgICAgICAgICAgICAgIGtleSgnZG93bicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gKHRoaXMucmlnaHRTZWxlY3RlZCArIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCd1cCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gKHRoaXMucmlnaHRTZWxlY3RlZCAtIDEpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0U2VsZWN0ZWQgPT09IC0xKSB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCd3JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9ICh0aGlzLmxlZnRTZWxlY3RlZCArIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdzJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9ICh0aGlzLmxlZnRTZWxlY3RlZCAtIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZWZ0U2VsZWN0ZWQgPT09IC0xKSB0aGlzLmxlZnRTZWxlY3RlZCA9IHRoaXMuY2hhcmFjdGVycy5sZW5ndGggLSAxXG4gICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ2VudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdkb3duJylcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgndXAnKVxuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCd3JylcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgncycpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2VudGVyJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoYXJhY3RlcnModGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXS5zcmMsIHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdLnNyYylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGtleSgndXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUGxheWluZ0xlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkICsgMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnY2hhckNoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGxheWluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAodGhpcy5yaWdodFNlbGVjdGVkIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0U2VsZWN0ZWQgPT09IC0xKSB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0U2VsZWN0ZWQ6IHRoaXMucmlnaHRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgnZG93bicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgLSAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlZnRTZWxlY3RlZCA9PT0gLTEpIHRoaXMubGVmdFNlbGVjdGVkID0gdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFNlbGVjdGVkOiB0aGlzLmxlZnRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQbGF5aW5nUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFNlbGVjdGVkOiB0aGlzLmxlZnRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG5cblxuXG59IiwiaW1wb3J0IGtleSBmcm9tICcuLi91dGlscy9rZXltYXN0ZXInO1xuaW1wb3J0IENoYXJhY3RlclNlbGVjdCBmcm9tICcuL2NoYXJhY3Rlcl9zZWxlY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSB7XG4gICAgY29uc3RydWN0b3IgKGRpbWVuc2lvbnMsIHN0YXJ0R2FtZSkge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lID0gc3RhcnRHYW1lXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSAwXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFtcIlN0YXJ0IEdhbWVcIiwgXCJPbmxpbmVcIl1cbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3QgPSBuZXcgQ2hhcmFjdGVyU2VsZWN0KHRoaXMuZGltZW5zaW9ucywgdGhpcy5zZWxlY3RlZENoYXJhY3RlcnMuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzID0gZmFsc2VcbiAgICAgICAgdGhpcy5zZXR1cEtleUhhbmRsZXJzKClcbiAgICB9XG5cbiAgICBzZWxlY3RlZENoYXJhY3RlcnMgKGxlZnRTcmMsIHJpZ2h0U3JjKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IGZhbHNlXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKGxlZnRTcmMsIHJpZ2h0U3JjKVxuICAgIH1cblxuICAgIHJlbmRlciAoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInB1cnBsZVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgXG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gKCh0aGlzLm9wdGlvbnMubGVuZ3RoICsgMSkgLSBpKSB9XG4gICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IGN0eC5tZWFzdXJlVGV4dChgJHtvcHRpb259YCkud2lkdGhcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uID09PSBpKSBjdHguZmlsbFJlY3QoKGxvYy54IC0gd2lkdGggLyAyKSAtIDUsIGxvYy55IC0gNDAsIHdpZHRoICsgMTAsIDUwKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7b3B0aW9ufWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VUZXh0KGAke29wdGlvbn1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0LnJlbmRlcihjdHgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXR1cEtleUhhbmRsZXJzKCkge1xuICAgICAgICBrZXkoJ2Rvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gKHRoaXMuc2VsZWN0ZWRPcHRpb24gKyAxKSAlIHRoaXMub3B0aW9ucy5sZW5ndGhcbiAgICAgICAgfSlcbiAgICAgICAga2V5KCd1cCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBNYXRoLmFicygodGhpcy5zZWxlY3RlZE9wdGlvbiAtIDEpICUgdGhpcy5vcHRpb25zLmxlbmd0aClcbiAgICAgICAgfSlcbiAgICAgICAga2V5KCdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgndXAnKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2VudGVyJylcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Qub25saW5lTW9kZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Quc2V0dXBLZXlIYW5kbGVycygpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdkb3duJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCd1cCcpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZW50ZXInKVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5vbmxpbmVNb2RlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdwbGF5ZXJBZGRlZFRvUXVldWUnLCBzb2NrZXQuaWQpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Quc2V0dXBLZXlIYW5kbGVycygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgXG5cblxuXG59IiwiaW1wb3J0IFJlY3QgZnJvbSAnLi91dGlscy9yZWN0JztcbmltcG9ydCBrZXkgZnJvbSAnLi91dGlscy9rZXltYXN0ZXInO1xuXG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBHUkFWSVRZOiAwLjUsXG4gICAgUExBWUVSX1dJRFRIOiA0MCxcbiAgICBQTEFZRVJfSEVJR0hUOiA3MCxcbiAgICBNT1ZFU1BFRUQ6IDUsXG4gICAgLy8gV0lUSF9CQUxMX01PVkVTUEVFRDogMy41LFxuICAgIEpVTVBfSEVJR0hUOiAxNCxcbiAgICAvLyBPTl9GSVJFX0pVTVBfSEVJR0hUOiAxNlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoY291cnQsIGJhbGwsIHNwcml0ZVNyYykge1xuICAgICAgICBzdXBlcih7IHdpZHRoOiBDT05TVEFOVFMuUExBWUVSX1dJRFRILCBoZWlnaHQ6IENPTlNUQU5UUy5QTEFZRVJfSEVJR0hUIH0pXG4gICAgICAgIHRoaXMuY291cnQgPSBjb3VydFxuICAgICAgICB0aGlzLmJhbGwgPSBiYWxsXG5cbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY291cnQud2lkdGggLSB0aGlzLndpZHRoLFxuICAgICAgICAgICAgeTogdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gQ09OU1RBTlRTLlBMQVlFUl9IRUlHSFRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLmRlbm5pc1JvZG1hbkhlYWQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgLy8gdGhpcy5kZW5uaXNSb2RtYW5IZWFkLnNyYyA9ICdzcmMvYXNzZXRzL2Rlbm5pc1JvZG1hbkhlYWQucG5nJ1xuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnNwcml0ZS5zcmMgPSBzcHJpdGVTcmNcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLm1vdmUoKTtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UodGhpcy5kZW5uaXNSb2RtYW5IZWFkLCBcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLndpZHRoICsgKHRoaXMuZGVubmlzUm9kbWFuSGVhZC53aWR0aCAvIDIpLCBcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCArICh0aGlzLmRlbm5pc1JvZG1hbkhlYWQuaGVpZ2h0IC8gMykpXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gNSxcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuc3ByaXRlLmhlaWdodCAvIDMpXG4gICAgfVxuXG4gICAgbW92ZSAoKSB7XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdyaWdodCcpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ2xlZnQnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpVTVBJTkdcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3VwJykgJiYgIXRoaXMuanVtcGluZykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkpVTVBfSEVJR0hUO1xuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJy8nKSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmb3JtQWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrQmFsbCgpIFxuXG4gICAgICAgIHRoaXMuaGFuZGxlR3Jhdml0eSgpXG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG4gICAgcHJlZm9ybUFjdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFsbC5wb3NzZXNzaW9uID09PSB0aGlzKSB7XG4gICAgICAgICAgICAvLyBIb2xkIHRvIHNob290LiBcbiAgICAgICAgICAgIHRoaXMuYmFsbC5zaG9vdCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0JhbGwoKSB7XG4gICAgICAgIGlmICghdGhpcy5iYWxsLnBvc3Nlc3Npb24gJiYgdGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMpKSB7XG4gICAgICAgICAgICB0aGlzLmJhbGwuY2xhaW1Qb3NzZXNzaW9uKHRoaXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVHcmF2aXR5KCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy52ZWxvY2l0eS55O1xuICAgICAgICAvLyBHUkFWSVRZXG4gICAgICAgIC8vIGlmIHRoZSBwb3MgaXMgZ3JlYXRlciB0aGFuIHRoZSBmbG9vclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgPCB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSAtPSBDT05TVEFOVFMuR1JBVklUWTtcbiAgICAgICAgICAgIC8vIGVsc2Ugc2V0IHRoZSBwb3MgdG8gdGhlIGZsb29yXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAwXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ID4gdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY291cnQud2lkdGggLSB0aGlzLndpZHRoXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMFxuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgR1JBVklUWTogMC41LFxuICAgIFBMQVlFUl9XSURUSDogNDAsXG4gICAgUExBWUVSX0hFSUdIVDogNzAsXG4gICAgTU9WRVNQRUVEOiA1LFxuICAgIC8vIFdJVEhfQkFMTF9NT1ZFU1BFRUQ6IDMuNSxcbiAgICBKVU1QX0hFSUdIVDogMTQsXG4gICAgLy8gT05fRklSRV9KVU1QX0hFSUdIVDogMTZcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllcjIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpIHtcbiAgICAgICAgc3VwZXIoY291cnQsIGJhbGwsIHNwcml0ZVNyYylcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnZCcpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ2EnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpVTVBJTkdcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3cnKSAmJiAhdGhpcy5qdW1waW5nKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSBDT05TVEFOVFMuSlVNUF9IRUlHSFQ7XG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgncScpKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZvcm1BY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tCYWxsKClcblxuICAgICAgICB0aGlzLmhhbmRsZUdyYXZpdHkoKVxuXG4gICAgICAgIHRoaXMuY2hlY2tCb3VuZHMoKVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIGxlZnRIb29wLCByaWdodEhvb3ApIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLmxlZnRIb29wID0gbGVmdEhvb3BcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSByaWdodEhvb3BcbiAgICAgICAgdGhpcy50aW1lTGVmdCA9IDYwXG4gICAgICAgIHRoaXMuY291bnREb3duID0gc2V0SW50ZXJ2YWwoKCkgPT4geyBcbiAgICAgICAgICAgIHRoaXMudGltZUxlZnQtLVxuICAgICAgICAgICAgaWYgKHRoaXMudGltZUxlZnQgPT09IDApIGNsZWFySW50ZXJ2YWwodGhpcy5jb3VudERvd24pXG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGFuaW1hdGUgKGN0eCkge1xuICAgICAgICBsZXQgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMTAgfVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiOyBcbiAgICAgICAgY3R4LmZpbGxUZXh0KGBQbGF5ZXIgMTogJHt0aGlzLnJpZ2h0SG9vcC5zY29yZX0gUGxheWVyIDI6ICR7dGhpcy5sZWZ0SG9vcC5zY29yZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguc3Ryb2tlVGV4dChgUGxheWVyIDE6ICR7dGhpcy5yaWdodEhvb3Auc2NvcmV9IFBsYXllciAyOiAke3RoaXMubGVmdEhvb3Auc2NvcmV9YCwgbG9jLngsIGxvYy55KTtcblxuICAgICAgICBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyA1IH1cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dChgJHt0aGlzLnRpbWVMZWZ0fWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGAke3RoaXMudGltZUxlZnR9YCwgbG9jLngsIGxvYy55KTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIHtcbiAgICBjb25zdHJ1Y3RvcihyYWRpdXMpIHtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgfVxuXG4gICAgaXNPdmVybGFwcGluZ1JlY3QocmVjdCkge1xuICAgICAgICBjb25zdCBkaXN0WCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueCAtIHJlY3QucG9zaXRpb24ueCAtIHJlY3Qud2lkdGggLyAyKTtcbiAgICAgICAgY29uc3QgZGlzdFkgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnkgLSByZWN0LnBvc2l0aW9uLnkgLSByZWN0LmhlaWdodCAvIDIpO1xuICAgICAgICBpZiAoZGlzdFggPiAocmVjdC53aWR0aCAvIDIgKyB0aGlzLnJhZGl1cykpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIGlmIChkaXN0WSA+IChyZWN0LmhlaWdodCAvIDIgKyB0aGlzLnJhZGl1cykpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICAgICAgaWYgKGRpc3RYIDw9IChyZWN0LndpZHRoIC8gMikpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgaWYgKGRpc3RZIDw9IChyZWN0LmhlaWdodCAvIDIpKSB7IHJldHVybiB0cnVlOyB9XG5cbiAgICAgICAgY29uc3QgZHggPSBkaXN0WCAtIHJlY3Qud2lkdGggLyAyO1xuICAgICAgICBjb25zdCBkeSA9IGRpc3RZIC0gcmVjdC5oZWlnaHQgLyAyO1xuICAgICAgICByZXR1cm4gKGR4ICogZHggKyBkeSAqIGR5IDw9ICh0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzKSk7XG4gICAgfVxuXG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHRcbiAgICAgICAgfTtcbiAgICB9XG5cbn0iLCIvLyAgICAga2V5bWFzdGVyLmpzXG4vLyAgICAgKGMpIDIwMTEtMjAxMyBUaG9tYXMgRnVjaHNcbi8vICAgICBrZXltYXN0ZXIuanMgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbjsgKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICB2YXIgayxcbiAgICAgICAgX2hhbmRsZXJzID0ge30sXG4gICAgICAgIF9tb2RzID0geyAxNjogZmFsc2UsIDE4OiBmYWxzZSwgMTc6IGZhbHNlLCA5MTogZmFsc2UgfSxcbiAgICAgICAgX3Njb3BlID0gJ2FsbCcsXG4gICAgICAgIC8vIG1vZGlmaWVyIGtleXNcbiAgICAgICAgX01PRElGSUVSUyA9IHtcbiAgICAgICAgICAgICfih6cnOiAxNiwgc2hpZnQ6IDE2LFxuICAgICAgICAgICAgJ+KMpSc6IDE4LCBhbHQ6IDE4LCBvcHRpb246IDE4LFxuICAgICAgICAgICAgJ+KMgyc6IDE3LCBjdHJsOiAxNywgY29udHJvbDogMTcsXG4gICAgICAgICAgICAn4oyYJzogOTEsIGNvbW1hbmQ6IDkxXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNwZWNpYWwga2V5c1xuICAgICAgICBfTUFQID0ge1xuICAgICAgICAgICAgYmFja3NwYWNlOiA4LCB0YWI6IDksIGNsZWFyOiAxMixcbiAgICAgICAgICAgIGVudGVyOiAxMywgJ3JldHVybic6IDEzLFxuICAgICAgICAgICAgZXNjOiAyNywgZXNjYXBlOiAyNywgc3BhY2U6IDMyLFxuICAgICAgICAgICAgbGVmdDogMzcsIHVwOiAzOCxcbiAgICAgICAgICAgIHJpZ2h0OiAzOSwgZG93bjogNDAsXG4gICAgICAgICAgICBkZWw6IDQ2LCAnZGVsZXRlJzogNDYsXG4gICAgICAgICAgICBob21lOiAzNiwgZW5kOiAzNSxcbiAgICAgICAgICAgIHBhZ2V1cDogMzMsIHBhZ2Vkb3duOiAzNCxcbiAgICAgICAgICAgICcsJzogMTg4LCAnLic6IDE5MCwgJy8nOiAxOTEsXG4gICAgICAgICAgICAnYCc6IDE5MiwgJy0nOiAxODksICc9JzogMTg3LFxuICAgICAgICAgICAgJzsnOiAxODYsICdcXCcnOiAyMjIsXG4gICAgICAgICAgICAnWyc6IDIxOSwgJ10nOiAyMjEsICdcXFxcJzogMjIwXG4gICAgICAgIH0sXG4gICAgICAgIGNvZGUgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIF9NQVBbeF0gfHwgeC50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIH0sXG4gICAgICAgIF9kb3duS2V5cyA9IFtdO1xuXG4gICAgZm9yIChrID0gMTsgayA8IDIwOyBrKyspIF9NQVBbJ2YnICsga10gPSAxMTEgKyBrO1xuXG4gICAgLy8gSUUgZG9lc24ndCBzdXBwb3J0IEFycmF5I2luZGV4T2YsIHNvIGhhdmUgYSBzaW1wbGUgcmVwbGFjZW1lbnRcbiAgICBmdW5jdGlvbiBpbmRleChhcnJheSwgaXRlbSkge1xuICAgICAgICB2YXIgaSA9IGFycmF5Lmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSkgaWYgKGFycmF5W2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIC8vIGZvciBjb21wYXJpbmcgbW9kcyBiZWZvcmUgdW5hc3NpZ25tZW50XG4gICAgZnVuY3Rpb24gY29tcGFyZUFycmF5KGExLCBhMikge1xuICAgICAgICBpZiAoYTEubGVuZ3RoICE9IGEyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGExLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYTFbaV0gIT09IGEyW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIG1vZGlmaWVyTWFwID0ge1xuICAgICAgICAxNjogJ3NoaWZ0S2V5JyxcbiAgICAgICAgMTg6ICdhbHRLZXknLFxuICAgICAgICAxNzogJ2N0cmxLZXknLFxuICAgICAgICA5MTogJ21ldGFLZXknXG4gICAgfTtcbiAgICBmdW5jdGlvbiB1cGRhdGVNb2RpZmllcktleShldmVudCkge1xuICAgICAgICBmb3IgKGsgaW4gX21vZHMpIF9tb2RzW2tdID0gZXZlbnRbbW9kaWZpZXJNYXBba11dO1xuICAgIH07XG5cbiAgICAvLyBoYW5kbGUga2V5ZG93biBldmVudFxuICAgIGZ1bmN0aW9uIGRpc3BhdGNoKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXksIGhhbmRsZXIsIGssIGksIG1vZGlmaWVyc01hdGNoLCBzY29wZTtcbiAgICAgICAga2V5ID0gZXZlbnQua2V5Q29kZTtcblxuICAgICAgICBpZiAoaW5kZXgoX2Rvd25LZXlzLCBrZXkpID09IC0xKSB7XG4gICAgICAgICAgICBfZG93bktleXMucHVzaChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgYSBtb2RpZmllciBrZXksIHNldCB0aGUga2V5Ljxtb2RpZmllcmtleW5hbWU+IHByb3BlcnR5IHRvIHRydWUgYW5kIHJldHVyblxuICAgICAgICBpZiAoa2V5ID09IDkzIHx8IGtleSA9PSAyMjQpIGtleSA9IDkxOyAvLyByaWdodCBjb21tYW5kIG9uIHdlYmtpdCwgY29tbWFuZCBvbiBHZWNrb1xuICAgICAgICBpZiAoa2V5IGluIF9tb2RzKSB7XG4gICAgICAgICAgICBfbW9kc1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICdhc3NpZ25LZXknIGZyb20gaW5zaWRlIHRoaXMgY2xvc3VyZSBpcyBleHBvcnRlZCB0byB3aW5kb3cua2V5XG4gICAgICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgaWYgKF9NT0RJRklFUlNba10gPT0ga2V5KSBhc3NpZ25LZXlba10gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZU1vZGlmaWVyS2V5KGV2ZW50KTtcblxuICAgICAgICAvLyBzZWUgaWYgd2UgbmVlZCB0byBpZ25vcmUgdGhlIGtleXByZXNzIChmaWx0ZXIoKSBjYW4gY2FuIGJlIG92ZXJyaWRkZW4pXG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgaWdub3JlIGtleSBwcmVzc2VzIGlmIGEgc2VsZWN0LCB0ZXh0YXJlYSwgb3IgaW5wdXQgaXMgZm9jdXNlZFxuICAgICAgICBpZiAoIWFzc2lnbktleS5maWx0ZXIuY2FsbCh0aGlzLCBldmVudCkpIHJldHVybjtcblxuICAgICAgICAvLyBhYm9ydCBpZiBubyBwb3RlbnRpYWxseSBtYXRjaGluZyBzaG9ydGN1dHMgZm91bmRcbiAgICAgICAgaWYgKCEoa2V5IGluIF9oYW5kbGVycykpIHJldHVybjtcblxuICAgICAgICBzY29wZSA9IGdldFNjb3BlKCk7XG5cbiAgICAgICAgLy8gZm9yIGVhY2ggcG90ZW50aWFsIHNob3J0Y3V0XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBfaGFuZGxlcnNba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFuZGxlciA9IF9oYW5kbGVyc1trZXldW2ldO1xuXG4gICAgICAgICAgICAvLyBzZWUgaWYgaXQncyBpbiB0aGUgY3VycmVudCBzY29wZVxuICAgICAgICAgICAgaWYgKGhhbmRsZXIuc2NvcGUgPT0gc2NvcGUgfHwgaGFuZGxlci5zY29wZSA9PSAnYWxsJykge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIG1vZGlmaWVycyBtYXRjaCBpZiBhbnlcbiAgICAgICAgICAgICAgICBtb2RpZmllcnNNYXRjaCA9IGhhbmRsZXIubW9kcy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgIGZvciAoayBpbiBfbW9kcylcbiAgICAgICAgICAgICAgICAgICAgaWYgKCghX21vZHNba10gJiYgaW5kZXgoaGFuZGxlci5tb2RzLCAraykgPiAtMSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChfbW9kc1trXSAmJiBpbmRleChoYW5kbGVyLm1vZHMsICtrKSA9PSAtMSkpIG1vZGlmaWVyc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gY2FsbCB0aGUgaGFuZGxlciBhbmQgc3RvcCB0aGUgZXZlbnQgaWYgbmVjY2Vzc2FyeVxuICAgICAgICAgICAgICAgIGlmICgoaGFuZGxlci5tb2RzLmxlbmd0aCA9PSAwICYmICFfbW9kc1sxNl0gJiYgIV9tb2RzWzE4XSAmJiAhX21vZHNbMTddICYmICFfbW9kc1s5MV0pIHx8IG1vZGlmaWVyc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyLm1ldGhvZChldmVudCwgaGFuZGxlcikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5jYW5jZWxCdWJibGUpIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gdW5zZXQgbW9kaWZpZXIga2V5cyBvbiBrZXl1cFxuICAgIGZ1bmN0aW9uIGNsZWFyTW9kaWZpZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIGtleSA9IGV2ZW50LmtleUNvZGUsIGssXG4gICAgICAgICAgICBpID0gaW5kZXgoX2Rvd25LZXlzLCBrZXkpO1xuXG4gICAgICAgIC8vIHJlbW92ZSBrZXkgZnJvbSBfZG93bktleXNcbiAgICAgICAgaWYgKGkgPj0gMCkge1xuICAgICAgICAgICAgX2Rvd25LZXlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gOTMgfHwga2V5ID09IDIyNCkga2V5ID0gOTE7XG4gICAgICAgIGlmIChrZXkgaW4gX21vZHMpIHtcbiAgICAgICAgICAgIF9tb2RzW2tleV0gPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoayBpbiBfTU9ESUZJRVJTKSBpZiAoX01PRElGSUVSU1trXSA9PSBrZXkpIGFzc2lnbktleVtrXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlc2V0TW9kaWZpZXJzKCkge1xuICAgICAgICBmb3IgKGsgaW4gX21vZHMpIF9tb2RzW2tdID0gZmFsc2U7XG4gICAgICAgIGZvciAoayBpbiBfTU9ESUZJRVJTKSBhc3NpZ25LZXlba10gPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgLy8gcGFyc2UgYW5kIGFzc2lnbiBzaG9ydGN1dFxuICAgIGZ1bmN0aW9uIGFzc2lnbktleShrZXksIHNjb3BlLCBtZXRob2QpIHtcbiAgICAgICAgdmFyIGtleXMsIG1vZHM7XG4gICAgICAgIGtleXMgPSBnZXRLZXlzKGtleSk7XG4gICAgICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbWV0aG9kID0gc2NvcGU7XG4gICAgICAgICAgICBzY29wZSA9ICdhbGwnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yIGVhY2ggc2hvcnRjdXRcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBzZXQgbW9kaWZpZXIga2V5cyBpZiBhbnlcbiAgICAgICAgICAgIG1vZHMgPSBbXTtcbiAgICAgICAgICAgIGtleSA9IGtleXNbaV0uc3BsaXQoJysnKTtcbiAgICAgICAgICAgIGlmIChrZXkubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIG1vZHMgPSBnZXRNb2RzKGtleSk7XG4gICAgICAgICAgICAgICAga2V5ID0gW2tleVtrZXkubGVuZ3RoIC0gMV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udmVydCB0byBrZXljb2RlIGFuZC4uLlxuICAgICAgICAgICAga2V5ID0ga2V5WzBdXG4gICAgICAgICAgICBrZXkgPSBjb2RlKGtleSk7XG4gICAgICAgICAgICAvLyAuLi5zdG9yZSBoYW5kbGVyXG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gX2hhbmRsZXJzKSkgX2hhbmRsZXJzW2tleV0gPSBbXTtcbiAgICAgICAgICAgIF9oYW5kbGVyc1trZXldLnB1c2goeyBzaG9ydGN1dDoga2V5c1tpXSwgc2NvcGU6IHNjb3BlLCBtZXRob2Q6IG1ldGhvZCwga2V5OiBrZXlzW2ldLCBtb2RzOiBtb2RzIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHVuYmluZCBhbGwgaGFuZGxlcnMgZm9yIGdpdmVuIGtleSBpbiBjdXJyZW50IHNjb3BlXG4gICAgZnVuY3Rpb24gdW5iaW5kS2V5KGtleSwgc2NvcGUpIHtcbiAgICAgICAgdmFyIG11bHRpcGxlS2V5cywga2V5cyxcbiAgICAgICAgICAgIG1vZHMgPSBbXSxcbiAgICAgICAgICAgIGksIGosIG9iajtcblxuICAgICAgICBtdWx0aXBsZUtleXMgPSBnZXRLZXlzKGtleSk7XG5cbiAgICAgICAgZm9yIChqID0gMDsgaiA8IG11bHRpcGxlS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAga2V5cyA9IG11bHRpcGxlS2V5c1tqXS5zcGxpdCgnKycpO1xuXG4gICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgbW9kcyA9IGdldE1vZHMoa2V5cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGtleSA9IGtleXNba2V5cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGtleSA9IGNvZGUoa2V5KTtcblxuICAgICAgICAgICAgaWYgKHNjb3BlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IGdldFNjb3BlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIV9oYW5kbGVyc1trZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IF9oYW5kbGVyc1trZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb2JqID0gX2hhbmRsZXJzW2tleV1baV07XG4gICAgICAgICAgICAgICAgLy8gb25seSBjbGVhciBoYW5kbGVycyBpZiBjb3JyZWN0IHNjb3BlIGFuZCBtb2RzIG1hdGNoXG4gICAgICAgICAgICAgICAgaWYgKG9iai5zY29wZSA9PT0gc2NvcGUgJiYgY29tcGFyZUFycmF5KG9iai5tb2RzLCBtb2RzKSkge1xuICAgICAgICAgICAgICAgICAgICBfaGFuZGxlcnNba2V5XVtpXSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIGtleSB3aXRoIGNvZGUgJ2tleUNvZGUnIGlzIGN1cnJlbnRseSBkb3duXG4gICAgLy8gQ29udmVydHMgc3RyaW5ncyBpbnRvIGtleSBjb2Rlcy5cbiAgICBmdW5jdGlvbiBpc1ByZXNzZWQoa2V5Q29kZSkge1xuICAgICAgICBpZiAodHlwZW9mIChrZXlDb2RlKSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAga2V5Q29kZSA9IGNvZGUoa2V5Q29kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4KF9kb3duS2V5cywga2V5Q29kZSkgIT0gLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJlc3NlZEtleUNvZGVzKCkge1xuICAgICAgICByZXR1cm4gX2Rvd25LZXlzLnNsaWNlKDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbHRlcihldmVudCkge1xuICAgICAgICB2YXIgdGFnTmFtZSA9IChldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCkudGFnTmFtZTtcbiAgICAgICAgLy8gaWdub3JlIGtleXByZXNzZWQgaW4gYW55IGVsZW1lbnRzIHRoYXQgc3VwcG9ydCBrZXlib2FyZCBkYXRhIGlucHV0XG4gICAgICAgIHJldHVybiAhKHRhZ05hbWUgPT0gJ0lOUFVUJyB8fCB0YWdOYW1lID09ICdTRUxFQ1QnIHx8IHRhZ05hbWUgPT0gJ1RFWFRBUkVBJyk7XG4gICAgfVxuXG4gICAgLy8gaW5pdGlhbGl6ZSBrZXkuPG1vZGlmaWVyPiB0byBmYWxzZVxuICAgIGZvciAoayBpbiBfTU9ESUZJRVJTKSBhc3NpZ25LZXlba10gPSBmYWxzZTtcblxuICAgIC8vIHNldCBjdXJyZW50IHNjb3BlIChkZWZhdWx0ICdhbGwnKVxuICAgIGZ1bmN0aW9uIHNldFNjb3BlKHNjb3BlKSB7IF9zY29wZSA9IHNjb3BlIHx8ICdhbGwnIH07XG4gICAgZnVuY3Rpb24gZ2V0U2NvcGUoKSB7IHJldHVybiBfc2NvcGUgfHwgJ2FsbCcgfTtcblxuICAgIC8vIGRlbGV0ZSBhbGwgaGFuZGxlcnMgZm9yIGEgZ2l2ZW4gc2NvcGVcbiAgICBmdW5jdGlvbiBkZWxldGVTY29wZShzY29wZSkge1xuICAgICAgICB2YXIga2V5LCBoYW5kbGVycywgaTtcblxuICAgICAgICBmb3IgKGtleSBpbiBfaGFuZGxlcnMpIHtcbiAgICAgICAgICAgIGhhbmRsZXJzID0gX2hhbmRsZXJzW2tleV07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOykge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyc1tpXS5zY29wZSA9PT0gc2NvcGUpIGhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBlbHNlIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBhYnN0cmFjdCBrZXkgbG9naWMgZm9yIGFzc2lnbiBhbmQgdW5hc3NpZ25cbiAgICBmdW5jdGlvbiBnZXRLZXlzKGtleSkge1xuICAgICAgICB2YXIga2V5cztcbiAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIGtleXMgPSBrZXkuc3BsaXQoJywnKTtcbiAgICAgICAgaWYgKChrZXlzW2tleXMubGVuZ3RoIC0gMV0pID09ICcnKSB7XG4gICAgICAgICAgICBrZXlzW2tleXMubGVuZ3RoIC0gMl0gKz0gJywnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH1cblxuICAgIC8vIGFic3RyYWN0IG1vZHMgbG9naWMgZm9yIGFzc2lnbiBhbmQgdW5hc3NpZ25cbiAgICBmdW5jdGlvbiBnZXRNb2RzKGtleSkge1xuICAgICAgICB2YXIgbW9kcyA9IGtleS5zbGljZSgwLCBrZXkubGVuZ3RoIC0gMSk7XG4gICAgICAgIGZvciAodmFyIG1pID0gMDsgbWkgPCBtb2RzLmxlbmd0aDsgbWkrKylcbiAgICAgICAgICAgIG1vZHNbbWldID0gX01PRElGSUVSU1ttb2RzW21pXV07XG4gICAgICAgIHJldHVybiBtb2RzO1xuICAgIH1cblxuICAgIC8vIGNyb3NzLWJyb3dzZXIgZXZlbnRzXG4gICAgZnVuY3Rpb24gYWRkRXZlbnQob2JqZWN0LCBldmVudCwgbWV0aG9kKSB7XG4gICAgICAgIGlmIChvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgIG9iamVjdC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBtZXRob2QsIGZhbHNlKTtcbiAgICAgICAgZWxzZSBpZiAob2JqZWN0LmF0dGFjaEV2ZW50KVxuICAgICAgICAgICAgb2JqZWN0LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgZnVuY3Rpb24gKCkgeyBtZXRob2Qod2luZG93LmV2ZW50KSB9KTtcbiAgICB9O1xuXG4gICAgLy8gc2V0IHRoZSBoYW5kbGVycyBnbG9iYWxseSBvbiBkb2N1bWVudFxuICAgIGFkZEV2ZW50KGRvY3VtZW50LCAna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkgeyBkaXNwYXRjaChldmVudCkgfSk7IC8vIFBhc3NpbmcgX3Njb3BlIHRvIGEgY2FsbGJhY2sgdG8gZW5zdXJlIGl0IHJlbWFpbnMgdGhlIHNhbWUgYnkgZXhlY3V0aW9uLiBGaXhlcyAjNDhcbiAgICBhZGRFdmVudChkb2N1bWVudCwgJ2tleXVwJywgY2xlYXJNb2RpZmllcik7XG5cbiAgICAvLyByZXNldCBtb2RpZmllcnMgdG8gZmFsc2Ugd2hlbmV2ZXIgdGhlIHdpbmRvdyBpcyAocmUpZm9jdXNlZC5cbiAgICBhZGRFdmVudCh3aW5kb3csICdmb2N1cycsIHJlc2V0TW9kaWZpZXJzKTtcblxuICAgIC8vIHN0b3JlIHByZXZpb3VzbHkgZGVmaW5lZCBrZXlcbiAgICB2YXIgcHJldmlvdXNLZXkgPSB3aW5kb3cua2V5O1xuXG4gICAgLy8gcmVzdG9yZSBwcmV2aW91c2x5IGRlZmluZWQga2V5IGFuZCByZXR1cm4gcmVmZXJlbmNlIHRvIG91ciBrZXkgb2JqZWN0XG4gICAgZnVuY3Rpb24gbm9Db25mbGljdCgpIHtcbiAgICAgICAgdmFyIGsgPSB3aW5kb3cua2V5O1xuICAgICAgICB3aW5kb3cua2V5ID0gcHJldmlvdXNLZXk7XG4gICAgICAgIHJldHVybiBrO1xuICAgIH1cblxuICAgIC8vIHNldCB3aW5kb3cua2V5IGFuZCB3aW5kb3cua2V5LnNldC9nZXQvZGVsZXRlU2NvcGUsIGFuZCB0aGUgZGVmYXVsdCBmaWx0ZXJcbiAgICB3aW5kb3cua2V5ID0gYXNzaWduS2V5O1xuICAgIHdpbmRvdy5rZXkuc2V0U2NvcGUgPSBzZXRTY29wZTtcbiAgICB3aW5kb3cua2V5LmdldFNjb3BlID0gZ2V0U2NvcGU7XG4gICAgd2luZG93LmtleS5kZWxldGVTY29wZSA9IGRlbGV0ZVNjb3BlO1xuICAgIHdpbmRvdy5rZXkuZmlsdGVyID0gZmlsdGVyO1xuICAgIHdpbmRvdy5rZXkuaXNQcmVzc2VkID0gaXNQcmVzc2VkO1xuICAgIHdpbmRvdy5rZXkuZ2V0UHJlc3NlZEtleUNvZGVzID0gZ2V0UHJlc3NlZEtleUNvZGVzO1xuICAgIHdpbmRvdy5rZXkubm9Db25mbGljdCA9IG5vQ29uZmxpY3Q7XG4gICAgd2luZG93LmtleS51bmJpbmQgPSB1bmJpbmRLZXk7XG5cbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIG1vZHVsZS5leHBvcnRzID0gYXNzaWduS2V5O1xuXG59KSh0aGlzKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBzaXplLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuICAgIH1cblxuICAgIGlzT3ZlcmxhcHBpbmdPdGhlclJlY3QocmVjdENsYXNzKSB7XG4gICAgICAgIGNvbnN0IG15Qm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKVxuICAgICAgICBjb25zdCByZWN0ID0gcmVjdENsYXNzLmdldEJvdW5kcygpXG4gICAgICAgIGlmIChteUJvdW5kcy5sZWZ0ID4gcmVjdC5yaWdodCB8fCBteUJvdW5kcy5yaWdodCA8IHJlY3QubGVmdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChteUJvdW5kcy50b3AgPiByZWN0LmJvdHRvbSB8fCBteUJvdW5kcy5ib3R0b20gPCByZWN0LnRvcCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==