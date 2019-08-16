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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(/*! ./js/game.js */ "./src/js/game.js");

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('nba-jam-game');
    new _game2.default(canvas);
});

/***/ }),

/***/ "./src/js/ball.js":
/*!************************!*\
  !*** ./src/js/ball.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _circle = __webpack_require__(/*! ./utils/circle */ "./src/js/utils/circle.js");

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

/***/ "./src/js/court.js":
/*!*************************!*\
  !*** ./src/js/court.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rect = __webpack_require__(/*! ./utils/rect */ "./src/js/utils/rect.js");

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

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(/*! ./player */ "./src/js/player.js");

var _player2 = _interopRequireDefault(_player);

var _court = __webpack_require__(/*! ./court */ "./src/js/court.js");

var _court2 = _interopRequireDefault(_court);

var _hoop = __webpack_require__(/*! ./hoop */ "./src/js/hoop.js");

var _hoop2 = _interopRequireDefault(_hoop);

var _ball = __webpack_require__(/*! ./ball */ "./src/js/ball.js");

var _ball2 = _interopRequireDefault(_ball);

var _scoreboard = __webpack_require__(/*! ./scoreboard */ "./src/js/scoreboard.js");

var _scoreboard2 = _interopRequireDefault(_scoreboard);

var _player3 = __webpack_require__(/*! ./player2 */ "./src/js/player2.js");

var _player4 = _interopRequireDefault(_player3);

var _main_menu = __webpack_require__(/*! ./menu_screens/main_menu */ "./src/js/menu_screens/main_menu.js");

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
        // this.restart();
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

/***/ "./src/js/hoop.js":
/*!************************!*\
  !*** ./src/js/hoop.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rect = __webpack_require__(/*! ./utils/rect */ "./src/js/utils/rect.js");

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
                setTimeout(function () {
                    _this2.justScored = false;
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

/***/ "./src/js/menu_screens/character_select.js":
/*!*************************************************!*\
  !*** ./src/js/menu_screens/character_select.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keymaster = __webpack_require__(/*! ../utils/keymaster */ "./src/js/utils/keymaster.js");

var _keymaster2 = _interopRequireDefault(_keymaster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CharacterSelect = function () {
    function CharacterSelect(dimensions, selectedCharacters) {
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

            ctx.fillText("" + rightSideChar.name, loc.x, loc.y);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.strokeText("" + rightSideChar.name, loc.x, loc.y);
            ctx.drawImage(this.rightChar, loc.x - this.rightChar.width / 2, loc.y);
        }
    }, {
        key: "setupKeyHandlers",
        value: function setupKeyHandlers() {
            var _this = this;

            setTimeout(function () {
                (0, _keymaster2.default)('down', function () {
                    _this.rightSelected = (_this.rightSelected + 1) % _this.characters.length;
                });
                (0, _keymaster2.default)('up', function () {
                    _this.rightSelected = _this.rightSelected - 1;
                    if (_this.rightSelected === -1) _this.rightSelected = _this.characters.length - 1;
                });
                (0, _keymaster2.default)('w', function () {
                    _this.leftSelected = (_this.leftSelected + 1) % _this.characters.length;
                });
                (0, _keymaster2.default)('s', function () {
                    _this.leftSelected = (_this.leftSelected - 1) % _this.characters.length;
                    if (_this.leftSelected === -1) _this.leftSelected = _this.characters.length - 1;
                });
                (0, _keymaster2.default)('enter', function () {
                    _keymaster2.default.unbind('down');
                    _keymaster2.default.unbind('up');
                    _keymaster2.default.unbind('w');
                    _keymaster2.default.unbind('s');
                    _keymaster2.default.unbind('enter');
                    _this.selectedCharacters(_this.characters[_this.leftSelected].src, _this.characters[_this.rightSelected].src);
                });
            }, 100);
        }
    }]);

    return CharacterSelect;
}();

exports.default = CharacterSelect;

/***/ }),

/***/ "./src/js/menu_screens/main_menu.js":
/*!******************************************!*\
  !*** ./src/js/menu_screens/main_menu.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keymaster = __webpack_require__(/*! ../utils/keymaster */ "./src/js/utils/keymaster.js");

var _keymaster2 = _interopRequireDefault(_keymaster);

var _character_select = __webpack_require__(/*! ./character_select */ "./src/js/menu_screens/character_select.js");

var _character_select2 = _interopRequireDefault(_character_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainMenu = function () {
    function MainMenu(dimensions, startGame) {
        _classCallCheck(this, MainMenu);

        this.dimensions = dimensions;
        this.startGame = startGame;
        this.selectedOption = 0;
        this.options = ["Start Game", "Two Players"];
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
                    _this2.characterSelect.setupKeyHandlers();
                }
            });
        }
    }]);

    return MainMenu;
}();

exports.default = MainMenu;

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rect = __webpack_require__(/*! ./utils/rect */ "./src/js/utils/rect.js");

var _rect2 = _interopRequireDefault(_rect);

var _keymaster = __webpack_require__(/*! ./utils/keymaster */ "./src/js/utils/keymaster.js");

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

/***/ "./src/js/player2.js":
/*!***************************!*\
  !*** ./src/js/player2.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(/*! ./player */ "./src/js/player.js");

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

/***/ "./src/js/scoreboard.js":
/*!******************************!*\
  !*** ./src/js/scoreboard.js ***!
  \******************************/
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

/***/ "./src/js/utils/circle.js":
/*!********************************!*\
  !*** ./src/js/utils/circle.js ***!
  \********************************/
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

/***/ "./src/js/utils/keymaster.js":
/*!***********************************!*\
  !*** ./src/js/utils/keymaster.js ***!
  \***********************************/
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

/***/ "./src/js/utils/rect.js":
/*!******************************!*\
  !*** ./src/js/utils/rect.js ***!
  \******************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9iYWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3VydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudV9zY3JlZW5zL2NoYXJhY3Rlcl9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21lbnVfc2NyZWVucy9tYWluX21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGxheWVyMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NvcmVib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9rZXltYXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3JlY3QuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJOQkFKYW1HYW1lIiwiQ09OU1RBTlRTIiwiUkFESVVTIiwiR1JBVklUWSIsIkJPVU5DRV9SRVRFTlRJT04iLCJEUklCQkxFX1NQRUVEIiwiQmFsbCIsImRpbWVuc2lvbnMiLCJjb3VydCIsImxlZnRIb29wIiwicmlnaHRIb29wIiwiYmFsbCIsInBvc2l0aW9uIiwieCIsIndpZHRoIiwieSIsImhlaWdodCIsInZlbG9jaXR5IiwiY29sb3IiLCJwb3NzZXNzaW9uIiwibm9Ub3VjaCIsInBvd2VyIiwiY3R4IiwibW92ZSIsImJlZ2luUGF0aCIsImFyYyIsInJhZGl1cyIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJjbG9zZVBhdGgiLCJwbGF5ZXIiLCJzaG9vdGluZ1BsYXllciIsImZhY2luZ1JpZ2h0Iiwic2hvb3RpbmdUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbGVhc2VCYWxsIiwic2NvcmVQb3NpdGlvbiIsInNjb3JlSGl0Ym94IiwiaHlwb3QiLCJudW1iZXJPZkZyYW1lcyIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsImRpZmYiLCJhZGp1c3RlZFgiLCJmYWxsIiwibW92ZVdpdGhQbGF5ZXJQb3NzZXNzaW9uIiwiY2hlY2tCb3VuZHMiLCJqdW1waW5nIiwiQ2lyY2xlIiwiQ09VUlRfRkxPT1IiLCJDT1VSVF9XSURUSCIsIkNvdXJ0IiwiZmlsbFJlY3QiLCJSZWN0IiwiZ2V0Q29udGV4dCIsIm1haW5NZW51IiwiTWFpbk1lbnUiLCJzdGFydEdhbWUiLCJiaW5kIiwicGxheWluZ0dhbWUiLCJyZW5kZXJNZW51Iiwic2V0dXBLZXlIYW5kbGVycyIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxlZnRTcHJpdGUiLCJyaWdodFNwcml0ZSIsInJlc3RhcnQiLCJIb29wIiwic2NvcmVib2FyZCIsIlNjb3JlYm9hcmQiLCJQbGF5ZXIiLCJwbGF5ZXIyIiwiUGxheWVyMiIsImFuaW1hdGUiLCJnYW1lT3ZlciIsImRpc3BsYXlXaW5uZXIiLCJ0aW1lTGVmdCIsInRleHQiLCJzY29yZSIsImxvYyIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlVGV4dCIsInNob3dNZW51IiwiSE9PUF9ZX01VTFRJUExJRVIiLCJIT09QX0hFSUdIVCIsIkhPT1BfV0lEVEgiLCJIT09QX1hfRElTVEFOQ0UiLCJCQUNLQk9BUkRfV0lEVEgiLCJCQUNLQk9BUkRfSEVJR0hUIiwiaG9vcFNpZGUiLCJiYWNrYm9hcmQiLCJCYWNrYm9hcmQiLCJTY29yZUhpdGJveCIsImp1c3RTY29yZWQiLCJjaGVja0JhbGxDb2xsaXNpb24iLCJpc092ZXJsYXBwaW5nUmVjdCIsImhvb3AiLCJDaGFyYWN0ZXJTZWxlY3QiLCJzZWxlY3RlZENoYXJhY3RlcnMiLCJsZWZ0U2VsZWN0ZWQiLCJyaWdodFNlbGVjdGVkIiwiY2hhcmFjdGVycyIsIm5hbWUiLCJzcmMiLCJsZWZ0Q2hhciIsIkltYWdlIiwicmlnaHRDaGFyIiwibGVmdFNpZGVDaGFyIiwiZHJhd0ltYWdlIiwicmlnaHRTaWRlQ2hhciIsImxlbmd0aCIsImtleSIsInVuYmluZCIsInNlbGVjdGVkT3B0aW9uIiwib3B0aW9ucyIsImNoYXJhY3RlclNlbGVjdCIsInNlbGVjdGluZ0NoYXJhY3RlcnMiLCJsZWZ0U3JjIiwicmlnaHRTcmMiLCJmb3JFYWNoIiwib3B0aW9uIiwiaSIsIm1lYXN1cmVUZXh0IiwiYWJzIiwiUExBWUVSX1dJRFRIIiwiUExBWUVSX0hFSUdIVCIsIk1PVkVTUEVFRCIsIkpVTVBfSEVJR0hUIiwic3ByaXRlU3JjIiwic3ByaXRlIiwiaXNQcmVzc2VkIiwicHJlZm9ybUFjdGlvbiIsImNoZWNrQmFsbCIsImhhbmRsZUdyYXZpdHkiLCJzaG9vdCIsImNsYWltUG9zc2Vzc2lvbiIsImNvdW50RG93biIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJlY3QiLCJkaXN0WCIsImRpc3RZIiwiZHgiLCJkeSIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImdsb2JhbCIsImsiLCJfaGFuZGxlcnMiLCJfbW9kcyIsIl9zY29wZSIsIl9NT0RJRklFUlMiLCJzaGlmdCIsImFsdCIsImN0cmwiLCJjb250cm9sIiwiY29tbWFuZCIsIl9NQVAiLCJiYWNrc3BhY2UiLCJ0YWIiLCJjbGVhciIsImVudGVyIiwiZXNjIiwiZXNjYXBlIiwic3BhY2UiLCJ1cCIsImRvd24iLCJkZWwiLCJob21lIiwiZW5kIiwicGFnZXVwIiwicGFnZWRvd24iLCJjb2RlIiwidG9VcHBlckNhc2UiLCJjaGFyQ29kZUF0IiwiX2Rvd25LZXlzIiwiaW5kZXgiLCJhcnJheSIsIml0ZW0iLCJjb21wYXJlQXJyYXkiLCJhMSIsImEyIiwibW9kaWZpZXJNYXAiLCJ1cGRhdGVNb2RpZmllcktleSIsImV2ZW50IiwiZGlzcGF0Y2giLCJoYW5kbGVyIiwibW9kaWZpZXJzTWF0Y2giLCJzY29wZSIsImtleUNvZGUiLCJwdXNoIiwiYXNzaWduS2V5IiwiZmlsdGVyIiwiY2FsbCIsImdldFNjb3BlIiwibW9kcyIsIm1ldGhvZCIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJjYW5jZWxCdWJibGUiLCJjbGVhck1vZGlmaWVyIiwic3BsaWNlIiwicmVzZXRNb2RpZmllcnMiLCJrZXlzIiwiZ2V0S2V5cyIsInVuZGVmaW5lZCIsInNwbGl0IiwiZ2V0TW9kcyIsInNob3J0Y3V0IiwidW5iaW5kS2V5IiwibXVsdGlwbGVLZXlzIiwiaiIsIm9iaiIsImdldFByZXNzZWRLZXlDb2RlcyIsInNsaWNlIiwidGFnTmFtZSIsInRhcmdldCIsInNyY0VsZW1lbnQiLCJzZXRTY29wZSIsImRlbGV0ZVNjb3BlIiwiaGFuZGxlcnMiLCJyZXBsYWNlIiwibWkiLCJhZGRFdmVudCIsIm9iamVjdCIsImF0dGFjaEV2ZW50Iiwid2luZG93IiwicHJldmlvdXNLZXkiLCJub0NvbmZsaWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsInNpemUiLCJyZWN0Q2xhc3MiLCJteUJvdW5kcyIsImdldEJvdW5kcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7QUFFQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsUUFBTUMsU0FBU0YsU0FBU0csY0FBVCxDQUF3QixjQUF4QixDQUFmO0FBQ0EsUUFBSUMsY0FBSixDQUFlRixNQUFmO0FBQ0gsQ0FIRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNRyxZQUFZO0FBQ2RDLFlBQVEsRUFETTtBQUVkQyxhQUFTLEdBRks7QUFHZEMsc0JBQWtCLEdBSEo7QUFJZEMsbUJBQWU7QUFKRCxDQUFsQjs7SUFPcUJDLEk7OztBQUNqQixrQkFBYUMsVUFBYixFQUF5QkMsS0FBekIsRUFBZ0NDLFFBQWhDLEVBQTBDQyxTQUExQyxFQUFxRDtBQUFBOztBQUFBLGdIQUMzQ1QsVUFBVUMsTUFEaUM7O0FBRWpELGNBQUtNLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0UsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxjQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGNBQUtELFFBQUwsQ0FBY0UsSUFBZDtBQUNBLGNBQUtELFNBQUwsQ0FBZUMsSUFBZjs7QUFFQSxjQUFLQyxRQUFMLEdBQWdCO0FBQ1pDLGVBQUcsTUFBS0wsS0FBTCxDQUFXTSxLQUFYLEdBQW1CLENBRFY7QUFFWkMsZUFBRyxNQUFLUixVQUFMLENBQWdCUyxNQUFoQixHQUF5QjtBQUZoQixTQUFoQjtBQUlBLGNBQUtDLFFBQUwsR0FBZ0I7QUFDWkosZUFBRyxDQURTO0FBRVpFLGVBQUc7QUFGUyxTQUFoQjtBQUlBLGNBQUtHLEtBQUwsR0FBYSxTQUFiO0FBQ0EsY0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsY0FBS0MsS0FBTCxHQUFhLENBQWI7QUFwQmlEO0FBcUJwRDs7OztnQ0FFT0MsRyxFQUFLO0FBQ1QsaUJBQUtDLElBQUw7QUFDQUQsZ0JBQUlFLFNBQUo7QUFDQUYsZ0JBQUlHLEdBQUosQ0FDSSxLQUFLYixRQUFMLENBQWNDLENBRGxCLEVBRUksS0FBS0QsUUFBTCxDQUFjRyxDQUZsQixFQUdJLEtBQUtXLE1BSFQsRUFJSSxDQUpKLEVBS0lDLEtBQUtDLEVBQUwsR0FBVSxDQUxkO0FBTUFOLGdCQUFJTyxTQUFKLEdBQWdCLEtBQUtYLEtBQXJCO0FBQ0FJLGdCQUFJUSxJQUFKO0FBQ0FSLGdCQUFJUyxTQUFKO0FBQ0g7Ozt3Q0FDZUMsTSxFQUFRO0FBQ3BCLGdCQUFJLENBQUMsS0FBS1osT0FBTCxDQUFhWSxPQUFPZCxLQUFwQixDQUFMLEVBQWlDLEtBQUtDLFVBQUwsR0FBa0JhLE1BQWxCO0FBQ3BDOzs7Z0NBR1E7QUFBQTs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpQkFBS1gsS0FBTCxJQUFjLENBQWQ7O0FBRUEsZ0JBQU1ZLGlCQUFpQixLQUFLZCxVQUE1QjtBQUNBLGlCQUFLUCxRQUFMLENBQWNDLENBQWQsR0FBa0JvQixlQUFlQyxXQUFmLEdBQ2JELGVBQWVyQixRQUFmLENBQXdCQyxDQUF4QixHQUE0Qm9CLGVBQWVuQixLQUEzQyxHQUFtRCxLQUFLWSxNQUQzQyxHQUViTyxlQUFlckIsUUFBZixDQUF3QkMsQ0FBeEIsR0FBNEIsS0FBS2EsTUFGdEM7QUFHQSxpQkFBS2QsUUFBTCxDQUFjRyxDQUFkLEdBQWtCa0IsZUFBZXJCLFFBQWYsQ0FBd0JHLENBQTFDOztBQUVBLGdCQUFJLEtBQUtvQixlQUFMLElBQXdCLEtBQUtkLEtBQUwsR0FBYSxFQUF6QyxFQUE2QztBQUN6Q2UsNkJBQWEsS0FBS0QsZUFBbEI7QUFDSDtBQUNELGdCQUFJLEtBQUtkLEtBQUwsR0FBYSxFQUFqQixFQUFxQjtBQUNqQixxQkFBS2MsZUFBTCxHQUF1QkUsV0FBVyxZQUFNO0FBQ3BDLDJCQUFLQyxXQUFMO0FBQ0gsaUJBRnNCLEVBRXBCLEVBRm9CLENBQXZCO0FBR0g7QUFFSjs7O3NDQUVjO0FBQUE7O0FBQ1gsZ0JBQU1MLGlCQUFpQixLQUFLZCxVQUE1Qjs7QUFFQSxnQkFBTW9CLGdCQUFnQk4sZUFBZUMsV0FBZixHQUNsQjtBQUNJckIsbUJBQUcsS0FBS0gsU0FBTCxDQUFlOEIsV0FBZixDQUEyQjVCLFFBQTNCLENBQW9DQyxDQUFwQyxHQUF5QyxLQUFLSCxTQUFMLENBQWU4QixXQUFmLENBQTJCMUIsS0FBM0IsR0FBbUMsQ0FEbkY7QUFFSUMsbUJBQUcsS0FBS0wsU0FBTCxDQUFlOEIsV0FBZixDQUEyQjVCLFFBQTNCLENBQW9DRztBQUYzQyxhQURrQixHQU1sQjtBQUNJRixtQkFBRyxLQUFLSixRQUFMLENBQWMrQixXQUFkLENBQTBCNUIsUUFBMUIsQ0FBbUNDLENBQW5DLEdBQXdDLEtBQUtILFNBQUwsQ0FBZThCLFdBQWYsQ0FBMkIxQixLQUEzQixHQUFtQyxDQURsRjtBQUVJQyxtQkFBRyxLQUFLTixRQUFMLENBQWMrQixXQUFkLENBQTBCNUIsUUFBMUIsQ0FBbUNHO0FBRjFDLGFBTko7O0FBWUE7QUFDQSxnQkFBSSxNQUFNWSxLQUFLYyxLQUFMLENBQVcsS0FBSzdCLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQjBCLGNBQWMxQixDQUEzQyxFQUE4QyxLQUFLRCxRQUFMLENBQWNHLENBQWQsR0FBa0J3QixjQUFjeEIsQ0FBOUUsQ0FBVixFQUE0RjtBQUN4RixvQkFBTTJCLGlCQUFpQixFQUF2QjtBQUNBLG9CQUFNQyxZQUFZLENBQUNKLGNBQWMxQixDQUFkLEdBQWtCLEtBQUtELFFBQUwsQ0FBY0MsQ0FBakMsSUFBc0M2QixjQUF4RDtBQUNBLG9CQUFNRSxZQUFZLENBQUUsQ0FBQ0wsY0FBY3hCLENBQWYsR0FBbUIsS0FBS0gsUUFBTCxDQUFjRyxDQUFsQyxHQUF1QyxNQUFNLENBQUNkLFVBQVVFLE9BQWpCLElBQTRCdUMsaUJBQWlCQSxjQUE3QyxDQUF4QyxJQUF3R0EsY0FBMUg7O0FBRUEsb0JBQU1HLE9BQU8sQ0FBQyxLQUFLeEIsS0FBTCxHQUFhLEVBQWQsSUFBb0IsR0FBakM7QUFDQSxvQkFBTXlCLFlBQVliLGVBQWVDLFdBQWYsR0FDZFMsWUFBWUUsSUFERSxHQUdkRixZQUFZRSxJQUhoQjtBQUtBLHFCQUFLNUIsUUFBTCxHQUFnQjtBQUNaSix1QkFBR2lDLFNBRFM7QUFFWi9CLHVCQUFHNkI7QUFGUyxpQkFBaEI7QUFJSCxhQWZELE1BZU87QUFDSDtBQUNBLG9CQUFNRixrQkFBaUIsRUFBdkI7O0FBRUEsb0JBQU1DLGFBQVksQ0FBQ0osY0FBYzFCLENBQWQsR0FBa0IsS0FBS0QsUUFBTCxDQUFjQyxDQUFqQyxJQUFzQzZCLGVBQXhEO0FBQ0Esb0JBQU1FLGFBQVksQ0FBRSxDQUFDTCxjQUFjeEIsQ0FBZixHQUFtQixLQUFLSCxRQUFMLENBQWNHLENBQWxDLEdBQXVDLE1BQU0sQ0FBQ2QsVUFBVUUsT0FBakIsSUFBNEJ1QyxrQkFBaUJBLGVBQTdDLENBQXhDLElBQXdHQSxlQUExSDs7QUFFQSxvQkFBTUcsUUFBTyxDQUFDLEtBQUt4QixLQUFMLEdBQWEsRUFBZCxJQUFvQixFQUFqQztBQUNBLG9CQUFNeUIsYUFBWWIsZUFBZUMsV0FBZixHQUNkUyxhQUFZRSxLQURFLEdBR2RGLGFBQVlFLEtBSGhCO0FBS0EscUJBQUs1QixRQUFMLEdBQWdCO0FBQ1pKLHVCQUFHaUMsVUFEUztBQUVaL0IsdUJBQUc2QjtBQUZTLGlCQUFoQjtBQUtIOztBQUVELGlCQUFLeEIsT0FBTCxDQUFhYSxlQUFlZixLQUE1QixJQUFxQyxJQUFyQztBQUNBbUIsdUJBQVcsWUFBTTtBQUNiLHVCQUFLakIsT0FBTCxDQUFhYSxlQUFlZixLQUE1QixJQUFxQyxLQUFyQztBQUNILGFBRkQsRUFFRyxHQUZIOztBQUlBLGlCQUFLRyxLQUFMLEdBQWEsQ0FBYjtBQUNBLGlCQUFLRixVQUFMLEdBQWtCLElBQWxCO0FBRUg7OzsrQkFFTTs7QUFFSCxnQkFBSSxDQUFDLEtBQUtBLFVBQVYsRUFBc0I7QUFDbEIscUJBQUs0QixJQUFMO0FBRUgsYUFIRCxNQUdPO0FBQ0gscUJBQUtDLHdCQUFMO0FBQ0g7O0FBRUQsaUJBQUtDLFdBQUw7QUFDSDs7O21EQUUwQjtBQUN2QixpQkFBS3JDLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLTSxVQUFMLENBQWdCZSxXQUFoQixHQUNiLEtBQUtmLFVBQUwsQ0FBZ0JQLFFBQWhCLENBQXlCQyxDQUF6QixHQUE2QixLQUFLTSxVQUFMLENBQWdCTCxLQURoQyxHQUMwQyxLQUFLSyxVQUFMLENBQWdCUCxRQUFoQixDQUF5QkMsQ0FEckY7O0FBR0EsZ0JBQUksS0FBS00sVUFBTCxDQUFnQitCLE9BQXBCLEVBQTZCO0FBQ3pCO0FBQ0EscUJBQUt0QyxRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS0ksVUFBTCxDQUFnQlAsUUFBaEIsQ0FBeUJHLENBQXpCLEdBQTZCLEtBQUtJLFVBQUwsQ0FBZ0JILE1BQWhCLEdBQXlCLENBQXhFO0FBRUgsYUFKRCxNQUlPO0FBQ0g7QUFDQSxvQkFBSSxLQUFLSixRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS0ksVUFBTCxDQUFnQlAsUUFBaEIsQ0FBeUJHLENBQXpCLEdBQTZCLEtBQUtJLFVBQUwsQ0FBZ0JILE1BQWhCLEdBQXlCLENBQTVFLEVBQStFO0FBQzNFLHlCQUFLQyxRQUFMLENBQWNGLENBQWQsR0FBa0IsQ0FBQ2QsVUFBVUksYUFBN0I7QUFDSCxpQkFGRCxNQUVPLElBQUksS0FBS08sUUFBTCxDQUFjRyxDQUFkLEdBQWtCLEtBQUtJLFVBQUwsQ0FBZ0JQLFFBQWhCLENBQXlCRyxDQUF6QixHQUE2QixLQUFLSSxVQUFMLENBQWdCSCxNQUE3QyxHQUFzRCxLQUFLVSxNQUFqRixFQUF5RjtBQUM1Rix5QkFBS1QsUUFBTCxDQUFjRixDQUFkLEdBQWtCZCxVQUFVSSxhQUE1QjtBQUNIO0FBQ0QscUJBQUtPLFFBQUwsQ0FBY0csQ0FBZCxJQUFtQixLQUFLRSxRQUFMLENBQWNGLENBQWpDO0FBQ0g7QUFDSjs7OytCQUdPO0FBQ0osaUJBQUtILFFBQUwsQ0FBY0csQ0FBZCxJQUFtQixLQUFLRSxRQUFMLENBQWNGLENBQWpDO0FBQ0EsaUJBQUtILFFBQUwsQ0FBY0MsQ0FBZCxJQUFtQixLQUFLSSxRQUFMLENBQWNKLENBQWpDO0FBQ0E7QUFDQTtBQUNBLGdCQUFJLEtBQUtELFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixLQUFLVyxNQUF2QixHQUFnQyxLQUFLbEIsS0FBTCxDQUFXSSxRQUFYLENBQW9CRyxDQUF4RCxFQUEyRDtBQUN2RCxxQkFBS0UsUUFBTCxDQUFjRixDQUFkLElBQW1CZCxVQUFVRSxPQUE3QjtBQUNBO0FBQ0gsYUFIRCxNQUdPLElBQUksS0FBS2MsUUFBTCxDQUFjRixDQUFkLEdBQWtCLENBQXRCLEVBQXlCO0FBQzVCLHFCQUFLRSxRQUFMLENBQWNGLENBQWQsR0FBa0IsQ0FBQyxLQUFLRSxRQUFMLENBQWNGLENBQWYsR0FBbUJkLFVBQVVHLGdCQUEvQztBQUNIO0FBQ0o7OztzQ0FHYTtBQUNWLGdCQUFJLEtBQUtRLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLTCxLQUFMLENBQVdNLEtBQVgsR0FBbUIsS0FBS1ksTUFBOUMsRUFBc0Q7QUFDbEQscUJBQUtkLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLTCxLQUFMLENBQVdNLEtBQVgsR0FBbUIsS0FBS1ksTUFBMUM7QUFDQSxxQkFBS1QsUUFBTCxDQUFjSixDQUFkLEdBQWtCLENBQUMsS0FBS0ksUUFBTCxDQUFjSixDQUFqQztBQUNILGFBSEQsTUFHTyxJQUFJLEtBQUtELFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixDQUF0QixFQUF5QjtBQUM1QixxQkFBS0QsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLENBQWxCO0FBQ0EscUJBQUtJLFFBQUwsQ0FBY0osQ0FBZCxHQUFrQixDQUFDLEtBQUtJLFFBQUwsQ0FBY0osQ0FBakM7QUFDSDtBQUNKOzs7O0VBclA2QnNDLGdCOztrQkFBYjdDLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHJCOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNTCxZQUFZO0FBQ2RtRCxpQkFBYSxJQURDO0FBRWRDLGlCQUFhO0FBRkMsQ0FBbEI7O0lBS3FCQyxLOzs7QUFDakIsbUJBQVkvQyxVQUFaLEVBQXdCO0FBQUE7O0FBQUEsa0hBQ2QsRUFBRU8sT0FBT1AsV0FBV08sS0FBcEIsRUFBMkJFLFFBQVFmLFVBQVVvRCxXQUE3QyxFQURjOztBQUVwQixjQUFLekMsUUFBTCxHQUFnQjtBQUNaQyxlQUFHLENBRFM7QUFFWkUsZUFBR1IsV0FBV1MsTUFBWCxHQUFvQmYsVUFBVW1EO0FBRnJCLFNBQWhCO0FBSUEsY0FBS2xDLEtBQUwsR0FBYSxPQUFiO0FBTm9CO0FBT3ZCOzs7O2dDQUVPSSxHLEVBQUs7QUFDVEEsZ0JBQUlPLFNBQUosR0FBZ0IsS0FBS1gsS0FBckI7QUFDQUksZ0JBQUlpQyxRQUFKLENBQWEsS0FBSzNDLFFBQUwsQ0FBY0MsQ0FBM0IsRUFBOEIsS0FBS0QsUUFBTCxDQUFjRyxDQUE1QyxFQUErQyxLQUFLRCxLQUFwRCxFQUEyRCxLQUFLRSxNQUFoRTtBQUNIOzs7O0VBYjhCd0MsYzs7a0JBQWRGLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVxQnRELFU7QUFDakIsd0JBQVlGLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsYUFBS3dCLEdBQUwsR0FBV3hCLE9BQU8yRCxVQUFQLENBQWtCLElBQWxCLENBQVg7QUFDQSxhQUFLbEQsVUFBTCxHQUFrQixFQUFFTyxPQUFPaEIsT0FBT2dCLEtBQWhCLEVBQXVCRSxRQUFRbEIsT0FBT2tCLE1BQXRDLEVBQWxCO0FBQ0EsYUFBSzBDLFFBQUwsR0FBZ0IsSUFBSUMsbUJBQUosQ0FBYSxLQUFLcEQsVUFBbEIsRUFBOEIsS0FBS3FELFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUE5QixDQUFoQjtBQUNBLGFBQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxhQUFLQyxVQUFMO0FBQ0E7QUFDSDs7OzttQ0FFVTtBQUNQLGlCQUFLTCxRQUFMLENBQWNNLGdCQUFkO0FBQ0EsaUJBQUtELFVBQUwsQ0FBZ0IsS0FBS3pDLEdBQXJCO0FBQ0g7OztxQ0FFYTtBQUNWLGlCQUFLb0MsUUFBTCxDQUFjTyxNQUFkLENBQXFCLEtBQUszQyxHQUExQjtBQUNBLGdCQUFJLENBQUMsS0FBS3dDLFdBQVYsRUFBdUJJLHNCQUFzQixLQUFLSCxVQUFMLENBQWdCRixJQUFoQixDQUFxQixJQUFyQixDQUF0QjtBQUMxQjs7O2tDQUVVTSxVLEVBQVlDLFcsRUFBYTtBQUNoQyxpQkFBS04sV0FBTCxHQUFtQixJQUFuQjtBQUNBLGlCQUFLTyxPQUFMLENBQWFGLFVBQWIsRUFBeUJDLFdBQXpCO0FBQ0g7OztnQ0FFT0QsVSxFQUFZQyxXLEVBQWE7QUFDN0I7QUFDQSxpQkFBSzVELEtBQUwsR0FBYSxJQUFJOEMsZUFBSixDQUFVLEtBQUsvQyxVQUFmLENBQWI7QUFDQSxpQkFBS0UsUUFBTCxHQUFnQixJQUFJNkQsY0FBSixDQUFTLEtBQUsvRCxVQUFkLEVBQTBCLE1BQTFCLENBQWhCO0FBQ0EsaUJBQUtHLFNBQUwsR0FBaUIsSUFBSTRELGNBQUosQ0FBUyxLQUFLL0QsVUFBZCxFQUEwQixPQUExQixDQUFqQjtBQUNBLGlCQUFLSSxJQUFMLEdBQVksSUFBSUwsY0FBSixDQUFTLEtBQUtDLFVBQWQsRUFBMEIsS0FBS0MsS0FBL0IsRUFBc0MsS0FBS0MsUUFBM0MsRUFBcUQsS0FBS0MsU0FBMUQsQ0FBWjs7QUFFQSxpQkFBSzZELFVBQUwsR0FBa0IsSUFBSUMsb0JBQUosQ0FBZSxLQUFLakUsVUFBcEIsRUFBZ0MsS0FBS0UsUUFBckMsRUFBK0MsS0FBS0MsU0FBcEQsQ0FBbEI7O0FBRUEsaUJBQUtzQixNQUFMLEdBQWMsSUFBSXlDLGdCQUFKLENBQVcsS0FBS2pFLEtBQWhCLEVBQXVCLEtBQUtHLElBQTVCLEVBQWtDeUQsV0FBbEMsQ0FBZDtBQUNBLGlCQUFLTSxPQUFMLEdBQWUsSUFBSUMsZ0JBQUosQ0FBWSxLQUFLbkUsS0FBakIsRUFBd0IsS0FBS0csSUFBN0IsRUFBbUN3RCxVQUFuQyxDQUFmOztBQUVBLGlCQUFLUyxPQUFMO0FBQ0g7OztrQ0FFUztBQUNOO0FBQ0EsaUJBQUt0RCxHQUFMLENBQVNPLFNBQVQsR0FBcUIsUUFBckI7QUFDQSxpQkFBS1AsR0FBTCxDQUFTaUMsUUFBVCxDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixLQUFLaEQsVUFBTCxDQUFnQk8sS0FBeEMsRUFBK0MsS0FBS1AsVUFBTCxDQUFnQlMsTUFBL0Q7O0FBRUE7QUFDQSxpQkFBS2dCLE1BQUwsQ0FBWTRDLE9BQVosQ0FBb0IsS0FBS3RELEdBQXpCO0FBQ0EsaUJBQUtvRCxPQUFMLENBQWFFLE9BQWIsQ0FBcUIsS0FBS3RELEdBQTFCO0FBQ0EsaUJBQUtYLElBQUwsQ0FBVWlFLE9BQVYsQ0FBa0IsS0FBS3RELEdBQXZCO0FBQ0EsaUJBQUtiLFFBQUwsQ0FBY21FLE9BQWQsQ0FBc0IsS0FBS3RELEdBQTNCO0FBQ0EsaUJBQUtaLFNBQUwsQ0FBZWtFLE9BQWYsQ0FBdUIsS0FBS3RELEdBQTVCOztBQUVBLGlCQUFLaUQsVUFBTCxDQUFnQkssT0FBaEIsQ0FBd0IsS0FBS3RELEdBQTdCO0FBQ0EsaUJBQUtkLEtBQUwsQ0FBV29FLE9BQVgsQ0FBbUIsS0FBS3RELEdBQXhCOztBQUVBLGdCQUFJLEtBQUt1RCxRQUFMLEVBQUosRUFBcUI7QUFDakIscUJBQUtDLGFBQUw7QUFDSDtBQUNEO0FBQ0EsZ0JBQUksS0FBS2hCLFdBQVQsRUFBc0JJLHNCQUFzQixLQUFLVSxPQUFMLENBQWFmLElBQWIsQ0FBa0IsSUFBbEIsQ0FBdEI7QUFDekI7OzttQ0FJVztBQUNSLG1CQUFPLEtBQUtVLFVBQUwsQ0FBZ0JRLFFBQWhCLEtBQTZCLENBQXBDO0FBQ0g7Ozt3Q0FFZ0I7QUFBQTs7QUFDYixnQkFBSUMsYUFBSjtBQUNBLGdCQUFJLEtBQUt0RSxTQUFMLENBQWV1RSxLQUFmLEdBQXVCLEtBQUt4RSxRQUFMLENBQWN3RSxLQUF6QyxFQUFnRDtBQUM1Q0QsdUJBQU8sZUFBUDtBQUNILGFBRkQsTUFFTyxJQUFJLEtBQUt2RSxRQUFMLENBQWN3RSxLQUFkLEdBQXNCLEtBQUt2RSxTQUFMLENBQWV1RSxLQUF6QyxFQUFnRDtBQUNuREQsdUJBQU8sZUFBUDtBQUNILGFBRk0sTUFFQTtBQUNIQSx1QkFBTyxVQUFQO0FBQ0g7QUFDRCxnQkFBSUUsTUFBTSxFQUFFckUsR0FBRyxLQUFLTixVQUFMLENBQWdCTyxLQUFoQixHQUF3QixDQUE3QixFQUFnQ0MsR0FBRyxLQUFLUixVQUFMLENBQWdCUyxNQUFoQixHQUF5QixDQUE1RCxFQUFWO0FBQ0EsaUJBQUtNLEdBQUwsQ0FBUzZELElBQVQsR0FBZ0IsaUJBQWhCO0FBQ0EsaUJBQUs3RCxHQUFMLENBQVNPLFNBQVQsR0FBcUIsT0FBckI7QUFDQSxpQkFBS1AsR0FBTCxDQUFTOEQsU0FBVCxHQUFxQixRQUFyQjtBQUNBLGlCQUFLOUQsR0FBTCxDQUFTK0QsUUFBVCxNQUFxQkwsSUFBckIsRUFBNkJFLElBQUlyRSxDQUFqQyxFQUFvQ3FFLElBQUluRSxDQUF4QztBQUNBLGlCQUFLTyxHQUFMLENBQVNnRSxXQUFULEdBQXVCLE9BQXZCO0FBQ0EsaUJBQUtoRSxHQUFMLENBQVNpRSxTQUFULEdBQXFCLENBQXJCO0FBQ0EsaUJBQUtqRSxHQUFMLENBQVNrRSxVQUFULE1BQXVCUixJQUF2QixFQUErQkUsSUFBSXJFLENBQW5DLEVBQXNDcUUsSUFBSW5FLENBQTFDOztBQUVBLGlCQUFLK0MsV0FBTCxHQUFtQixLQUFuQjtBQUNBekIsdUJBQVcsWUFBTTtBQUNiLHNCQUFLb0QsUUFBTDtBQUNILGFBRkQsRUFFRyxJQUZIO0FBR0g7Ozs7OztrQkExRmdCekYsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSckI7Ozs7Ozs7Ozs7OztBQUVBLElBQU1DLFlBQVk7QUFDZHlGLHVCQUFtQixHQURMO0FBRWRDLGlCQUFhLEVBRkM7QUFHZEMsZ0JBQVksRUFIRTtBQUlkQyxxQkFBaUIsRUFKSDtBQUtkQyxxQkFBaUIsRUFMSDtBQU1kQyxzQkFBa0I7QUFOSixDQUFsQjs7SUFVcUJ6QixJOzs7QUFDakIsa0JBQVkvRCxVQUFaLEVBQXdCeUYsUUFBeEIsRUFBa0NyRixJQUFsQyxFQUF3QztBQUFBOztBQUFBLGdIQUM5QixFQUFFRyxPQUFPYixVQUFVMkYsVUFBbkIsRUFBK0I1RSxRQUFRZixVQUFVMEYsV0FBakQsRUFEOEI7O0FBRXBDLGNBQUtoRixJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLSixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFlBQU1NLElBQUltRixhQUFhLE1BQWIsR0FDRixJQUFJL0YsVUFBVTRGLGVBRFosR0FHRnRGLFdBQVdPLEtBQVgsR0FBbUJiLFVBQVU0RixlQUE3QixHQUErQyxNQUFLL0UsS0FINUQ7QUFLQSxjQUFLRixRQUFMLEdBQWdCO0FBQ1pDLGVBQUdBLENBRFM7QUFFWkUsZUFBR1IsV0FBV1MsTUFBWCxHQUFvQmYsVUFBVXlGO0FBRnJCLFNBQWhCO0FBSUEsY0FBS08sU0FBTCxHQUFpQixJQUFJQyxTQUFKLFFBQW9CRixRQUFwQixDQUFqQjtBQUNBLGNBQUt4RCxXQUFMLEdBQW1CLElBQUkyRCxXQUFKLFFBQXNCSCxRQUF0QixDQUFuQjtBQUNBLGNBQUs5RSxLQUFMLEdBQWEsUUFBYjtBQUNBLGNBQUsrRCxLQUFMLEdBQWEsQ0FBYjtBQUNBLGNBQUttQixVQUFMLEdBQWtCLEtBQWxCO0FBakJvQztBQWtCdkM7Ozs7Z0NBRU85RSxHLEVBQUs7QUFBQTs7QUFDVCxpQkFBSytFLGtCQUFMO0FBQ0EsaUJBQUtKLFNBQUwsQ0FBZXJCLE9BQWYsQ0FBdUJ0RCxHQUF2QjtBQUNBQSxnQkFBSU8sU0FBSixHQUFnQixLQUFLWCxLQUFyQjtBQUNBSSxnQkFBSWlDLFFBQUosQ0FBYSxLQUFLM0MsUUFBTCxDQUFjQyxDQUEzQixFQUE4QixLQUFLRCxRQUFMLENBQWNHLENBQTVDLEVBQStDLEtBQUtELEtBQXBELEVBQTJELEtBQUtFLE1BQWhFO0FBQ0EsaUJBQUt3QixXQUFMLENBQWlCb0MsT0FBakIsQ0FBeUJ0RCxHQUF6QjtBQUNBLGdCQUFJLEtBQUtYLElBQUwsQ0FBVTJGLGlCQUFWLENBQTRCLEtBQUs5RCxXQUFqQyxDQUFKLEVBQW1EO0FBQy9DLG9CQUFJLENBQUMsS0FBSzRELFVBQVYsRUFBc0IsS0FBS25CLEtBQUwsSUFBYyxDQUFkO0FBQ3RCLHFCQUFLbUIsVUFBTCxHQUFrQixJQUFsQjtBQUNBL0QsMkJBQVcsWUFBTTtBQUNiLDJCQUFLK0QsVUFBTCxHQUFrQixLQUFsQjtBQUNILGlCQUZELEVBRUcsSUFGSDtBQUlIO0FBQ0o7Ozs2Q0FFcUI7QUFDbEIsZ0JBQUksS0FBS3pGLElBQUwsQ0FBVTJGLGlCQUFWLENBQTRCLElBQTVCLEtBQXFDLEtBQUszRixJQUFMLENBQVUyRixpQkFBVixDQUE0QixLQUFLTCxTQUFqQyxDQUF6QyxFQUFzRjtBQUNsRixvQkFBSSxLQUFLdEYsSUFBTCxDQUFVQyxRQUFWLENBQW1CRyxDQUFuQixHQUF1QixLQUFLSixJQUFMLENBQVVlLE1BQWpDLEdBQTBDLEtBQUtkLFFBQUwsQ0FBY0csQ0FBNUQsRUFBK0Q7QUFDM0Qsd0JBQUksS0FBS0osSUFBTCxDQUFVTSxRQUFWLENBQW1CRixDQUFuQixHQUF1QixDQUEzQixFQUE4QixLQUFLSixJQUFMLENBQVVNLFFBQVYsQ0FBbUJGLENBQW5CLEdBQXVCLENBQUMsS0FBS0osSUFBTCxDQUFVTSxRQUFWLENBQW1CRixDQUEzQztBQUNqQyxpQkFGRCxNQUVPO0FBQ0gsd0JBQUksS0FBS0osSUFBTCxDQUFVQyxRQUFWLENBQW1CRyxDQUFuQixHQUF1QixLQUFLSixJQUFMLENBQVVlLE1BQWpDLEdBQTBDLEtBQUt1RSxTQUFMLENBQWVyRixRQUFmLENBQXdCRyxDQUFsRSxJQUF1RSxLQUFLSixJQUFMLENBQVVNLFFBQVYsQ0FBbUJGLENBQW5CLEdBQXVCLENBQWxHLEVBQXNHO0FBQ2xHLDZCQUFLSixJQUFMLENBQVVNLFFBQVYsQ0FBbUJGLENBQW5CLEdBQXVCLENBQUMsS0FBS0osSUFBTCxDQUFVTSxRQUFWLENBQW1CRixDQUEzQztBQUNIO0FBQ0QseUJBQUtKLElBQUwsQ0FBVU0sUUFBVixDQUFtQkosQ0FBbkIsR0FBdUIsQ0FBQyxLQUFLRixJQUFMLENBQVVNLFFBQVYsQ0FBbUJKLENBQTNDO0FBQ0g7QUFDSjtBQUNKOzs7O0VBaEQ2QjJDLGM7O2tCQUFiYyxJOztJQW9EZjZCLFc7OztBQUNGLHlCQUFZSSxJQUFaLEVBQWtCUCxRQUFsQixFQUE0QjtBQUFBOztBQUFBLCtIQUNsQixFQUFFbEYsT0FBT2IsVUFBVTJGLFVBQVYsR0FBdUIsRUFBaEMsRUFBb0M1RSxRQUFRZixVQUFVMEYsV0FBVixHQUF3QixJQUFwRSxFQURrQjs7QUFFeEIsWUFBTTlFLElBQUltRixhQUFhLE1BQWIsR0FDTk8sS0FBSzNGLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixFQURaLEdBR04wRixLQUFLM0YsUUFBTCxDQUFjQyxDQUFkLEdBQWtCMEYsS0FBS3pGLEtBQXZCLEdBQStCLE9BQUtBLEtBQXBDLEdBQTRDLEVBSGhEO0FBS0EsZUFBS0YsUUFBTCxHQUFnQjtBQUNaQyxlQUFHQSxDQURTO0FBRVpFLGVBQUd3RixLQUFLM0YsUUFBTCxDQUFjRztBQUZMLFNBQWhCO0FBSUEsZUFBS0csS0FBTCxHQUFhLE9BQWI7QUFYd0I7QUFZM0I7Ozs7Z0NBRU9JLEcsRUFBSztBQUNUQSxnQkFBSU8sU0FBSixHQUFnQixLQUFLWCxLQUFyQjtBQUNBSSxnQkFBSWlDLFFBQUosQ0FBYSxLQUFLM0MsUUFBTCxDQUFjQyxDQUEzQixFQUE4QixLQUFLRCxRQUFMLENBQWNHLENBQTVDLEVBQStDLEtBQUtELEtBQXBELEVBQTJELEtBQUtFLE1BQWhFO0FBQ0g7Ozs7RUFsQnFCd0MsYzs7SUFxQnBCMEMsUzs7O0FBQ0YsdUJBQVlLLElBQVosRUFBa0JQLFFBQWxCLEVBQTRCO0FBQUE7O0FBQUEsMkhBQ2xCLEVBQUVsRixPQUFPYixVQUFVNkYsZUFBbkIsRUFBb0M5RSxRQUFRZixVQUFVOEYsZ0JBQXRELEVBRGtCOztBQUV4QixZQUFNbEYsSUFBSW1GLGFBQWEsTUFBYixHQUNOTyxLQUFLM0YsUUFBTCxDQUFjQyxDQURSLEdBR04wRixLQUFLM0YsUUFBTCxDQUFjQyxDQUFkLEdBQWtCMEYsS0FBS3pGLEtBQXZCLEdBQStCLE9BQUtBLEtBSHhDO0FBS0EsZUFBS0YsUUFBTCxHQUFnQjtBQUNaQyxlQUFHQSxDQURTO0FBRVpFLGVBQUd3RixLQUFLM0YsUUFBTCxDQUFjRyxDQUFkLEdBQWtCLE9BQUtDO0FBRmQsU0FBaEI7QUFJQSxlQUFLRSxLQUFMLEdBQWEsTUFBYjtBQVh3QjtBQVkzQjs7OztnQ0FFT0ksRyxFQUFLO0FBQ1RBLGdCQUFJTyxTQUFKLEdBQWdCLEtBQUtYLEtBQXJCO0FBQ0FJLGdCQUFJaUMsUUFBSixDQUFhLEtBQUszQyxRQUFMLENBQWNDLENBQTNCLEVBQThCLEtBQUtELFFBQUwsQ0FBY0csQ0FBNUMsRUFBK0MsS0FBS0QsS0FBcEQsRUFBMkQsS0FBS0UsTUFBaEU7QUFDSDs7OztFQWxCbUJ3QyxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGeEI7Ozs7Ozs7O0lBRXFCZ0QsZTtBQUNqQiw2QkFBWWpHLFVBQVosRUFBd0JrRyxrQkFBeEIsRUFBNEM7QUFBQTs7QUFDeEMsYUFBS2xHLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsYUFBS2tHLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFDQSxhQUFLQyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsYUFBS0MsYUFBTCxHQUFxQixDQUFyQjtBQUNBLGFBQUtDLFVBQUwsR0FBa0IsQ0FDZCxFQUFFQyxNQUFNLFFBQVIsRUFBa0JDLEtBQUssNEJBQXZCLEVBRGMsRUFFZCxFQUFFRCxNQUFNLE9BQVIsRUFBaUJDLEtBQUssMkJBQXRCLEVBRmMsRUFHZCxFQUFFRCxNQUFNLFFBQVIsRUFBa0JDLEtBQUssNEJBQXZCLEVBSGMsRUFJZCxFQUFFRCxNQUFNLE9BQVIsRUFBaUJDLEtBQUssMkJBQXRCLEVBSmMsQ0FBbEI7O0FBT0EsYUFBS0MsUUFBTCxHQUFnQixJQUFJQyxLQUFKLEVBQWhCO0FBQ0EsYUFBS0MsU0FBTCxHQUFpQixJQUFJRCxLQUFKLEVBQWpCO0FBQ0EsYUFBS0QsUUFBTCxDQUFjRCxHQUFkLEdBQW9CLEtBQUtGLFVBQUwsQ0FBZ0IsS0FBS0YsWUFBckIsRUFBbUNJLEdBQXZEO0FBQ0EsYUFBS0csU0FBTCxDQUFlSCxHQUFmLEdBQXFCLEtBQUtGLFVBQUwsQ0FBZ0IsS0FBS0QsYUFBckIsRUFBb0NHLEdBQXpEO0FBQ0g7Ozs7K0JBRU14RixHLEVBQUs7QUFDUixpQkFBS3lGLFFBQUwsQ0FBY0QsR0FBZCxHQUFvQixLQUFLRixVQUFMLENBQWdCLEtBQUtGLFlBQXJCLEVBQW1DSSxHQUF2RDtBQUNBLGlCQUFLRyxTQUFMLENBQWVILEdBQWYsR0FBcUIsS0FBS0YsVUFBTCxDQUFnQixLQUFLRCxhQUFyQixFQUFvQ0csR0FBekQ7O0FBRUF4RixnQkFBSU8sU0FBSixHQUFnQixRQUFoQjtBQUNBUCxnQkFBSWlDLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEtBQUtoRCxVQUFMLENBQWdCTyxLQUFuQyxFQUEwQyxLQUFLUCxVQUFMLENBQWdCUyxNQUExRDs7QUFFQTtBQUNBLGdCQUFNa0csZUFBZSxLQUFLTixVQUFMLENBQWdCLEtBQUtGLFlBQXJCLENBQXJCO0FBQ0EsZ0JBQUl4QixNQUFNLEVBQUVyRSxHQUFHLEtBQUtOLFVBQUwsQ0FBZ0JPLEtBQWhCLEdBQXdCLENBQTdCLEVBQWdDQyxHQUFHLEtBQUtSLFVBQUwsQ0FBZ0JTLE1BQWhCLEdBQXlCLENBQTVELEVBQVY7QUFDQU0sZ0JBQUk2RCxJQUFKLEdBQVcsaUJBQVg7QUFDQTdELGdCQUFJOEQsU0FBSixHQUFnQixRQUFoQjtBQUNBOUQsZ0JBQUlPLFNBQUosR0FBZ0IsT0FBaEI7O0FBRUFQLGdCQUFJK0QsUUFBSixNQUFnQjZCLGFBQWFMLElBQTdCLEVBQXFDM0IsSUFBSXJFLENBQXpDLEVBQTRDcUUsSUFBSW5FLENBQWhEO0FBQ0FPLGdCQUFJZ0UsV0FBSixHQUFrQixPQUFsQjtBQUNBaEUsZ0JBQUlpRSxTQUFKLEdBQWdCLENBQWhCO0FBQ0FqRSxnQkFBSWtFLFVBQUosTUFBa0IwQixhQUFhTCxJQUEvQixFQUF1QzNCLElBQUlyRSxDQUEzQyxFQUE4Q3FFLElBQUluRSxDQUFsRDtBQUNBTyxnQkFBSTZGLFNBQUosQ0FBYyxLQUFLSixRQUFuQixFQUNJN0IsSUFBSXJFLENBQUosR0FBUSxLQUFLa0csUUFBTCxDQUFjakcsS0FBZCxHQUFzQixDQURsQyxFQUVJb0UsSUFBSW5FLENBRlI7O0FBSUE7QUFDQSxnQkFBTXFHLGdCQUFnQixLQUFLUixVQUFMLENBQWdCLEtBQUtELGFBQXJCLENBQXRCO0FBQ0F6QixrQkFBTSxFQUFFckUsR0FBRyxLQUFLTixVQUFMLENBQWdCTyxLQUFoQixHQUF3QixDQUF4QixHQUE0QixDQUFqQyxFQUFvQ0MsR0FBRyxLQUFLUixVQUFMLENBQWdCUyxNQUFoQixHQUF5QixDQUFoRSxFQUFOO0FBQ0FNLGdCQUFJNkQsSUFBSixHQUFXLGlCQUFYO0FBQ0E3RCxnQkFBSThELFNBQUosR0FBZ0IsUUFBaEI7QUFDQTlELGdCQUFJTyxTQUFKLEdBQWdCLE9BQWhCOztBQUVBUCxnQkFBSStELFFBQUosTUFBZ0IrQixjQUFjUCxJQUE5QixFQUFzQzNCLElBQUlyRSxDQUExQyxFQUE2Q3FFLElBQUluRSxDQUFqRDtBQUNBTyxnQkFBSWdFLFdBQUosR0FBa0IsT0FBbEI7QUFDQWhFLGdCQUFJaUUsU0FBSixHQUFnQixDQUFoQjtBQUNBakUsZ0JBQUlrRSxVQUFKLE1BQWtCNEIsY0FBY1AsSUFBaEMsRUFBd0MzQixJQUFJckUsQ0FBNUMsRUFBK0NxRSxJQUFJbkUsQ0FBbkQ7QUFDQU8sZ0JBQUk2RixTQUFKLENBQWMsS0FBS0YsU0FBbkIsRUFDSS9CLElBQUlyRSxDQUFKLEdBQVEsS0FBS29HLFNBQUwsQ0FBZW5HLEtBQWYsR0FBdUIsQ0FEbkMsRUFFSW9FLElBQUluRSxDQUZSO0FBSUg7OzsyQ0FFa0I7QUFBQTs7QUFFZnNCLHVCQUFXLFlBQU07QUFDYix5Q0FBSSxNQUFKLEVBQVksWUFBTTtBQUNkLDBCQUFLc0UsYUFBTCxHQUFxQixDQUFDLE1BQUtBLGFBQUwsR0FBcUIsQ0FBdEIsSUFBMkIsTUFBS0MsVUFBTCxDQUFnQlMsTUFBaEU7QUFDSCxpQkFGRDtBQUdBLHlDQUFJLElBQUosRUFBVSxZQUFNO0FBQ1osMEJBQUtWLGFBQUwsR0FBc0IsTUFBS0EsYUFBTCxHQUFxQixDQUEzQztBQUNBLHdCQUFJLE1BQUtBLGFBQUwsS0FBdUIsQ0FBQyxDQUE1QixFQUErQixNQUFLQSxhQUFMLEdBQXFCLE1BQUtDLFVBQUwsQ0FBZ0JTLE1BQWhCLEdBQXlCLENBQTlDO0FBQ2xDLGlCQUhEO0FBSUEseUNBQUksR0FBSixFQUFTLFlBQU07QUFDWCwwQkFBS1gsWUFBTCxHQUFvQixDQUFDLE1BQUtBLFlBQUwsR0FBb0IsQ0FBckIsSUFBMEIsTUFBS0UsVUFBTCxDQUFnQlMsTUFBOUQ7QUFFSCxpQkFIRDtBQUlBLHlDQUFJLEdBQUosRUFBUyxZQUFNO0FBQ1gsMEJBQUtYLFlBQUwsR0FBb0IsQ0FBQyxNQUFLQSxZQUFMLEdBQW9CLENBQXJCLElBQTBCLE1BQUtFLFVBQUwsQ0FBZ0JTLE1BQTlEO0FBQ0Esd0JBQUksTUFBS1gsWUFBTCxLQUFzQixDQUFDLENBQTNCLEVBQThCLE1BQUtBLFlBQUwsR0FBb0IsTUFBS0UsVUFBTCxDQUFnQlMsTUFBaEIsR0FBeUIsQ0FBN0M7QUFFakMsaUJBSkQ7QUFLQSx5Q0FBSSxPQUFKLEVBQWEsWUFBTTtBQUNmQyx3Q0FBSUMsTUFBSixDQUFXLE1BQVg7QUFDQUQsd0NBQUlDLE1BQUosQ0FBVyxJQUFYO0FBQ0FELHdDQUFJQyxNQUFKLENBQVcsR0FBWDtBQUNBRCx3Q0FBSUMsTUFBSixDQUFXLEdBQVg7QUFDQUQsd0NBQUlDLE1BQUosQ0FBVyxPQUFYO0FBQ0EsMEJBQUtkLGtCQUFMLENBQXdCLE1BQUtHLFVBQUwsQ0FBZ0IsTUFBS0YsWUFBckIsRUFBbUNJLEdBQTNELEVBQWdFLE1BQUtGLFVBQUwsQ0FBZ0IsTUFBS0QsYUFBckIsRUFBb0NHLEdBQXBHO0FBQ0gsaUJBUEQ7QUFRSCxhQXpCRCxFQXlCRyxHQXpCSDtBQTJCSDs7Ozs7O2tCQXZGZ0JOLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCN0MsUTtBQUNqQixzQkFBYXBELFVBQWIsRUFBeUJxRCxTQUF6QixFQUFvQztBQUFBOztBQUNoQyxhQUFLckQsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxhQUFLcUQsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxhQUFLNEQsY0FBTCxHQUFzQixDQUF0QjtBQUNBLGFBQUtDLE9BQUwsR0FBZSxDQUFDLFlBQUQsRUFBZSxhQUFmLENBQWY7QUFDQSxhQUFLQyxlQUFMLEdBQXVCLElBQUlsQiwwQkFBSixDQUFvQixLQUFLakcsVUFBekIsRUFBcUMsS0FBS2tHLGtCQUFMLENBQXdCNUMsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBckMsQ0FBdkI7QUFDQSxhQUFLOEQsbUJBQUwsR0FBMkIsS0FBM0I7QUFDQSxhQUFLM0QsZ0JBQUw7QUFDSDs7OzsyQ0FFbUI0RCxPLEVBQVNDLFEsRUFBVTtBQUNuQyxpQkFBS0YsbUJBQUwsR0FBMkIsS0FBM0I7QUFDQSxpQkFBSy9ELFNBQUwsQ0FBZWdFLE9BQWYsRUFBd0JDLFFBQXhCO0FBQ0g7OzsrQkFFT3ZHLEcsRUFBSztBQUFBOztBQUNUQSxnQkFBSU8sU0FBSixHQUFnQixRQUFoQjtBQUNBUCxnQkFBSWlDLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEtBQUtoRCxVQUFMLENBQWdCTyxLQUFuQyxFQUEwQyxLQUFLUCxVQUFMLENBQWdCUyxNQUExRDs7QUFFQSxnQkFBSSxDQUFDLEtBQUsyRyxtQkFBVixFQUErQjtBQUMzQixxQkFBS0YsT0FBTCxDQUFhSyxPQUFiLENBQXFCLFVBQUNDLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ2hDLHdCQUFNOUMsTUFBTSxFQUFFckUsR0FBRyxNQUFLTixVQUFMLENBQWdCTyxLQUFoQixHQUF3QixDQUE3QixFQUFnQ0MsR0FBRyxNQUFLUixVQUFMLENBQWdCUyxNQUFoQixJQUEyQixNQUFLeUcsT0FBTCxDQUFhSixNQUFiLEdBQXNCLENBQXZCLEdBQTRCVyxDQUF0RCxDQUFuQyxFQUFaO0FBQ0ExRyx3QkFBSTZELElBQUosR0FBVyxpQkFBWDtBQUNBN0Qsd0JBQUk4RCxTQUFKLEdBQWdCLFFBQWhCO0FBQ0E5RCx3QkFBSU8sU0FBSixHQUFnQixPQUFoQjs7QUFFQSx3QkFBTWYsUUFBUVEsSUFBSTJHLFdBQUosTUFBbUJGLE1BQW5CLEVBQTZCakgsS0FBM0M7O0FBRUEsd0JBQUksTUFBSzBHLGNBQUwsS0FBd0JRLENBQTVCLEVBQStCMUcsSUFBSWlDLFFBQUosQ0FBYzJCLElBQUlyRSxDQUFKLEdBQVFDLFFBQVEsQ0FBakIsR0FBc0IsQ0FBbkMsRUFBc0NvRSxJQUFJbkUsQ0FBSixHQUFRLEVBQTlDLEVBQWtERCxRQUFRLEVBQTFELEVBQThELEVBQTlEO0FBQy9CUSx3QkFBSStELFFBQUosTUFBZ0IwQyxNQUFoQixFQUEwQjdDLElBQUlyRSxDQUE5QixFQUFpQ3FFLElBQUluRSxDQUFyQztBQUNBTyx3QkFBSWdFLFdBQUosR0FBa0IsT0FBbEI7QUFDQWhFLHdCQUFJaUUsU0FBSixHQUFnQixDQUFoQjtBQUNBakUsd0JBQUlrRSxVQUFKLE1BQWtCdUMsTUFBbEIsRUFBNEI3QyxJQUFJckUsQ0FBaEMsRUFBbUNxRSxJQUFJbkUsQ0FBdkM7QUFDSCxpQkFiRDtBQWNILGFBZkQsTUFlTyxJQUFJLEtBQUs0RyxtQkFBVCxFQUE4QjtBQUNqQyxxQkFBS0QsZUFBTCxDQUFxQnpELE1BQXJCLENBQTRCM0MsR0FBNUI7QUFDSDtBQUNKOzs7MkNBRWtCO0FBQUE7O0FBQ2YscUNBQUksTUFBSixFQUFZLFlBQU07QUFDZCx1QkFBS2tHLGNBQUwsR0FBc0IsQ0FBQyxPQUFLQSxjQUFMLEdBQXNCLENBQXZCLElBQTRCLE9BQUtDLE9BQUwsQ0FBYUosTUFBL0Q7QUFDSCxhQUZEO0FBR0EscUNBQUksSUFBSixFQUFVLFlBQU07QUFDWix1QkFBS0csY0FBTCxHQUFzQjdGLEtBQUt1RyxHQUFMLENBQVMsQ0FBQyxPQUFLVixjQUFMLEdBQXNCLENBQXZCLElBQTRCLE9BQUtDLE9BQUwsQ0FBYUosTUFBbEQsQ0FBdEI7QUFDSCxhQUZEO0FBR0EscUNBQUksT0FBSixFQUFhLFlBQU07QUFDZixvQkFBSSxPQUFLRyxjQUFMLEtBQXdCLENBQTVCLEVBQStCO0FBQzNCRix3Q0FBSUMsTUFBSixDQUFXLE1BQVg7QUFDQUQsd0NBQUlDLE1BQUosQ0FBVyxJQUFYO0FBQ0FELHdDQUFJQyxNQUFKLENBQVcsT0FBWDtBQUNBLDJCQUFLSSxtQkFBTCxHQUEyQixJQUEzQjtBQUNBLDJCQUFLRCxlQUFMLENBQXFCMUQsZ0JBQXJCO0FBQ0g7QUFDSixhQVJEO0FBVUg7Ozs7OztrQkF6RGdCTCxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQSxJQUFNMUQsWUFBWTtBQUNkRSxhQUFTLEdBREs7QUFFZGdJLGtCQUFjLEVBRkE7QUFHZEMsbUJBQWUsRUFIRDtBQUlkQyxlQUFXLENBSkc7QUFLZDtBQUNBQyxpQkFBYTtBQUNiO0FBUGMsQ0FBbEI7O0lBVXFCN0QsTTs7O0FBQ2pCLG9CQUFZakUsS0FBWixFQUFtQkcsSUFBbkIsRUFBeUI0SCxTQUF6QixFQUFvQztBQUFBOztBQUFBLG9IQUMxQixFQUFFekgsT0FBT2IsVUFBVWtJLFlBQW5CLEVBQWlDbkgsUUFBUWYsVUFBVW1JLGFBQW5ELEVBRDBCOztBQUVoQyxjQUFLNUgsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0csSUFBTCxHQUFZQSxJQUFaOztBQUVBLGNBQUtNLFFBQUwsR0FBZ0I7QUFDWkosZUFBRyxDQURTO0FBRVpFLGVBQUc7QUFGUyxTQUFoQjtBQUlBLGNBQUtILFFBQUwsR0FBZ0I7QUFDWkMsZUFBRyxNQUFLTCxLQUFMLENBQVdNLEtBQVgsR0FBbUIsTUFBS0EsS0FEZjtBQUVaQyxlQUFHLE1BQUtQLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkcsQ0FBcEIsR0FBd0JkLFVBQVVtSTtBQUZ6QixTQUFoQjtBQUlBLGNBQUtsSCxLQUFMLEdBQWEsS0FBYjtBQUNBLGNBQUtnQyxPQUFMLEdBQWUsS0FBZjtBQUNBLGNBQUtoQixXQUFMLEdBQW1CLElBQW5CO0FBQ0E7QUFDQTtBQUNBLGNBQUtzRyxNQUFMLEdBQWMsSUFBSXhCLEtBQUosRUFBZDtBQUNBLGNBQUt3QixNQUFMLENBQVkxQixHQUFaLEdBQWtCeUIsU0FBbEI7QUFuQmdDO0FBb0JuQzs7OztnQ0FFT2pILEcsRUFBSztBQUNULGlCQUFLQyxJQUFMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQUQsZ0JBQUk2RixTQUFKLENBQWMsS0FBS3FCLE1BQW5CLEVBQ1EsS0FBSzVILFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixDQUQxQixFQUVJLEtBQUtELFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixLQUFLeUgsTUFBTCxDQUFZeEgsTUFBWixHQUFxQixDQUYzQztBQUdIOzs7K0JBRU87QUFDSixnQkFBSXNHLG9CQUFJbUIsU0FBSixDQUFjLE9BQWQsQ0FBSixFQUE0QjtBQUN4QixxQkFBSzdILFFBQUwsQ0FBY0MsQ0FBZCxJQUFtQlosVUFBVW9JLFNBQTdCO0FBQ0EscUJBQUtuRyxXQUFMLEdBQW1CLElBQW5CO0FBQ0g7QUFDRCxnQkFBSW9GLG9CQUFJbUIsU0FBSixDQUFjLE1BQWQsQ0FBSixFQUEyQjtBQUN2QixxQkFBSzdILFFBQUwsQ0FBY0MsQ0FBZCxJQUFtQlosVUFBVW9JLFNBQTdCO0FBQ0EscUJBQUtuRyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0g7O0FBRUQ7QUFDQSxnQkFBSW9GLG9CQUFJbUIsU0FBSixDQUFjLElBQWQsS0FBdUIsQ0FBQyxLQUFLdkYsT0FBakMsRUFBMEM7QUFDdEMscUJBQUtqQyxRQUFMLENBQWNGLENBQWQsR0FBa0JkLFVBQVVxSSxXQUE1QjtBQUNBLHFCQUFLcEYsT0FBTCxHQUFlLElBQWY7QUFDSDs7QUFFRCxnQkFBSW9FLG9CQUFJbUIsU0FBSixDQUFjLEdBQWQsQ0FBSixFQUF3QjtBQUNwQixxQkFBS0MsYUFBTDtBQUNIOztBQUVELGlCQUFLQyxTQUFMOztBQUVBLGlCQUFLQyxhQUFMOztBQUVBLGlCQUFLM0YsV0FBTDtBQUNIOzs7d0NBRWU7QUFDWixnQkFBSSxLQUFLdEMsSUFBTCxDQUFVUSxVQUFWLEtBQXlCLElBQTdCLEVBQW1DO0FBQy9CO0FBQ0EscUJBQUtSLElBQUwsQ0FBVWtJLEtBQVY7QUFDSDtBQUNKOzs7b0NBRVc7QUFDUixnQkFBSSxDQUFDLEtBQUtsSSxJQUFMLENBQVVRLFVBQVgsSUFBeUIsS0FBS1IsSUFBTCxDQUFVMkYsaUJBQVYsQ0FBNEIsSUFBNUIsQ0FBN0IsRUFBZ0U7QUFDNUQscUJBQUszRixJQUFMLENBQVVtSSxlQUFWLENBQTBCLElBQTFCO0FBQ0g7QUFDSjs7O3dDQUVlO0FBQ1osaUJBQUtsSSxRQUFMLENBQWNHLENBQWQsSUFBbUIsS0FBS0UsUUFBTCxDQUFjRixDQUFqQztBQUNBO0FBQ0E7QUFDQSxnQkFBSSxLQUFLSCxRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS0MsTUFBdkIsR0FBZ0MsS0FBS1IsS0FBTCxDQUFXSSxRQUFYLENBQW9CRyxDQUF4RCxFQUEyRDtBQUN2RCxxQkFBS0UsUUFBTCxDQUFjRixDQUFkLElBQW1CZCxVQUFVRSxPQUE3QjtBQUNBO0FBQ0gsYUFIRCxNQUdPO0FBQ0gscUJBQUtjLFFBQUwsQ0FBY0YsQ0FBZCxHQUFrQixDQUFsQjtBQUNBLHFCQUFLSCxRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS1AsS0FBTCxDQUFXSSxRQUFYLENBQW9CRyxDQUFwQixHQUF3QixLQUFLQyxNQUEvQztBQUNBLHFCQUFLa0MsT0FBTCxHQUFlLEtBQWY7QUFDSDtBQUNKOzs7c0NBRWE7QUFDVixnQkFBSSxLQUFLdEMsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLEtBQUtMLEtBQUwsQ0FBV00sS0FBWCxHQUFtQixLQUFLQSxLQUE5QyxFQUFxRDtBQUNqRCxxQkFBS0YsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLEtBQUtMLEtBQUwsQ0FBV00sS0FBWCxHQUFtQixLQUFLQSxLQUExQztBQUNILGFBRkQsTUFFTyxJQUFJLEtBQUtGLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixDQUF0QixFQUF5QjtBQUM1QixxQkFBS0QsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLENBQWxCO0FBQ0g7QUFDSjs7OztFQWhHK0IyQyxjOztrQkFBZmlCLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHJCOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNeEUsWUFBWTtBQUNkRSxhQUFTLEdBREs7QUFFZGdJLGtCQUFjLEVBRkE7QUFHZEMsbUJBQWUsRUFIRDtBQUlkQyxlQUFXLENBSkc7QUFLZDtBQUNBQyxpQkFBYTtBQUNiO0FBUGMsQ0FBbEI7O0lBVXFCM0QsTzs7O0FBQ2pCLHFCQUFZbkUsS0FBWixFQUFtQkcsSUFBbkIsRUFBeUI0SCxTQUF6QixFQUFvQztBQUFBOztBQUFBLHNIQUMxQi9ILEtBRDBCLEVBQ25CRyxJQURtQixFQUNiNEgsU0FEYTs7QUFHaEMsY0FBSzNILFFBQUwsR0FBZ0I7QUFDWkMsZUFBRyxDQURTO0FBRVpFLGVBQUcsTUFBS1AsS0FBTCxDQUFXSSxRQUFYLENBQW9CRyxDQUFwQixHQUF3QixNQUFLQztBQUZwQixTQUFoQjtBQUlBLGNBQUtFLEtBQUwsR0FBYSxPQUFiO0FBQ0EsY0FBS2dDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsY0FBS2hCLFdBQUwsR0FBbUIsS0FBbkI7QUFUZ0M7QUFVbkM7Ozs7K0JBRU07QUFDSCxnQkFBSW9GLElBQUltQixTQUFKLENBQWMsR0FBZCxDQUFKLEVBQXdCO0FBQ3BCLHFCQUFLN0gsUUFBTCxDQUFjQyxDQUFkLElBQW1CWixVQUFVb0ksU0FBN0I7QUFDQSxxQkFBS25HLFdBQUwsR0FBbUIsSUFBbkI7QUFDSDtBQUNELGdCQUFJb0YsSUFBSW1CLFNBQUosQ0FBYyxHQUFkLENBQUosRUFBd0I7QUFDcEIscUJBQUs3SCxRQUFMLENBQWNDLENBQWQsSUFBbUJaLFVBQVVvSSxTQUE3QjtBQUNBLHFCQUFLbkcsV0FBTCxHQUFtQixLQUFuQjtBQUNIOztBQUVEO0FBQ0EsZ0JBQUlvRixJQUFJbUIsU0FBSixDQUFjLEdBQWQsS0FBc0IsQ0FBQyxLQUFLdkYsT0FBaEMsRUFBeUM7QUFDckMscUJBQUtqQyxRQUFMLENBQWNGLENBQWQsR0FBa0JkLFVBQVVxSSxXQUE1QjtBQUNBLHFCQUFLcEYsT0FBTCxHQUFlLElBQWY7QUFDSDs7QUFFRCxnQkFBSW9FLElBQUltQixTQUFKLENBQWMsR0FBZCxDQUFKLEVBQXdCO0FBQ3BCLHFCQUFLQyxhQUFMO0FBQ0g7O0FBRUQsaUJBQUtDLFNBQUw7O0FBRUEsaUJBQUtDLGFBQUw7O0FBRUEsaUJBQUszRixXQUFMO0FBQ0g7Ozs7RUF0Q2dDd0IsZ0I7O2tCQUFoQkUsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1pBSCxVO0FBQ2pCLHdCQUFZakUsVUFBWixFQUF3QkUsUUFBeEIsRUFBa0NDLFNBQWxDLEVBQTZDO0FBQUE7O0FBQUE7O0FBQ3pDLGFBQUtILFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsYUFBS0UsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxhQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGFBQUtxRSxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsYUFBS2dFLFNBQUwsR0FBaUJDLFlBQVksWUFBTTtBQUMvQixrQkFBS2pFLFFBQUw7QUFDQSxnQkFBSSxNQUFLQSxRQUFMLEtBQWtCLENBQXRCLEVBQXlCa0UsY0FBYyxNQUFLRixTQUFuQjtBQUM1QixTQUhnQixFQUdkLElBSGMsQ0FBakI7QUFJSDs7OztnQ0FFUXpILEcsRUFBSztBQUNWLGdCQUFJNEQsTUFBTSxFQUFFckUsR0FBRyxLQUFLTixVQUFMLENBQWdCTyxLQUFoQixHQUF3QixDQUE3QixFQUFnQ0MsR0FBRyxLQUFLUixVQUFMLENBQWdCUyxNQUFoQixHQUF5QixFQUE1RCxFQUFWO0FBQ0FNLGdCQUFJNkQsSUFBSixHQUFXLGlCQUFYO0FBQ0E3RCxnQkFBSU8sU0FBSixHQUFnQixPQUFoQjtBQUNBUCxnQkFBSThELFNBQUosR0FBZ0IsUUFBaEI7QUFDQTlELGdCQUFJK0QsUUFBSixnQkFBMEIsS0FBSzNFLFNBQUwsQ0FBZXVFLEtBQXpDLG1CQUE0RCxLQUFLeEUsUUFBTCxDQUFjd0UsS0FBMUUsRUFBbUZDLElBQUlyRSxDQUF2RixFQUEwRnFFLElBQUluRSxDQUE5RjtBQUNBTyxnQkFBSWdFLFdBQUosR0FBa0IsT0FBbEI7QUFDQWhFLGdCQUFJaUUsU0FBSixHQUFnQixDQUFoQjtBQUNBakUsZ0JBQUlrRSxVQUFKLGdCQUE0QixLQUFLOUUsU0FBTCxDQUFldUUsS0FBM0MsbUJBQThELEtBQUt4RSxRQUFMLENBQWN3RSxLQUE1RSxFQUFxRkMsSUFBSXJFLENBQXpGLEVBQTRGcUUsSUFBSW5FLENBQWhHOztBQUVBbUUsa0JBQU0sRUFBRXJFLEdBQUcsS0FBS04sVUFBTCxDQUFnQk8sS0FBaEIsR0FBd0IsQ0FBN0IsRUFBZ0NDLEdBQUcsS0FBS1IsVUFBTCxDQUFnQlMsTUFBaEIsR0FBeUIsQ0FBNUQsRUFBTjtBQUNBTSxnQkFBSU8sU0FBSixHQUFnQixPQUFoQjtBQUNBUCxnQkFBSThELFNBQUosR0FBZ0IsUUFBaEI7QUFDQTlELGdCQUFJK0QsUUFBSixNQUFnQixLQUFLTixRQUFyQixFQUFpQ0csSUFBSXJFLENBQXJDLEVBQXdDcUUsSUFBSW5FLENBQTVDO0FBQ0FPLGdCQUFJZ0UsV0FBSixHQUFrQixPQUFsQjtBQUNBaEUsZ0JBQUlpRSxTQUFKLEdBQWdCLENBQWhCO0FBQ0FqRSxnQkFBSWtFLFVBQUosTUFBa0IsS0FBS1QsUUFBdkIsRUFBbUNHLElBQUlyRSxDQUF2QyxFQUEwQ3FFLElBQUluRSxDQUE5QztBQUNIOzs7Ozs7a0JBN0JnQnlELFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQXJCLE07QUFDakIsb0JBQVl6QixNQUFaLEVBQW9CO0FBQUE7O0FBQ2hCLGFBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIOzs7OzBDQUVpQndILEksRUFBTTtBQUNwQixnQkFBTUMsUUFBUXhILEtBQUt1RyxHQUFMLENBQVMsS0FBS3RILFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQnFJLEtBQUt0SSxRQUFMLENBQWNDLENBQWhDLEdBQW9DcUksS0FBS3BJLEtBQUwsR0FBYSxDQUExRCxDQUFkO0FBQ0EsZ0JBQU1zSSxRQUFRekgsS0FBS3VHLEdBQUwsQ0FBUyxLQUFLdEgsUUFBTCxDQUFjRyxDQUFkLEdBQWtCbUksS0FBS3RJLFFBQUwsQ0FBY0csQ0FBaEMsR0FBb0NtSSxLQUFLbEksTUFBTCxHQUFjLENBQTNELENBQWQ7QUFDQSxnQkFBSW1JLFFBQVNELEtBQUtwSSxLQUFMLEdBQWEsQ0FBYixHQUFpQixLQUFLWSxNQUFuQyxFQUE0QztBQUFFLHVCQUFPLEtBQVA7QUFBZTtBQUM3RCxnQkFBSTBILFFBQVNGLEtBQUtsSSxNQUFMLEdBQWMsQ0FBZCxHQUFrQixLQUFLVSxNQUFwQyxFQUE2QztBQUFFLHVCQUFPLEtBQVA7QUFBZTs7QUFFOUQsZ0JBQUl5SCxTQUFVRCxLQUFLcEksS0FBTCxHQUFhLENBQTNCLEVBQStCO0FBQUUsdUJBQU8sSUFBUDtBQUFjO0FBQy9DLGdCQUFJc0ksU0FBVUYsS0FBS2xJLE1BQUwsR0FBYyxDQUE1QixFQUFnQztBQUFFLHVCQUFPLElBQVA7QUFBYzs7QUFFaEQsZ0JBQU1xSSxLQUFLRixRQUFRRCxLQUFLcEksS0FBTCxHQUFhLENBQWhDO0FBQ0EsZ0JBQU13SSxLQUFLRixRQUFRRixLQUFLbEksTUFBTCxHQUFjLENBQWpDO0FBQ0EsbUJBQVFxSSxLQUFLQSxFQUFMLEdBQVVDLEtBQUtBLEVBQWYsSUFBc0IsS0FBSzVILE1BQUwsR0FBYyxLQUFLQSxNQUFqRDtBQUNIOzs7b0NBRVc7QUFDUixtQkFBTztBQUNINkgsc0JBQU0sS0FBSzNJLFFBQUwsQ0FBY0MsQ0FEakI7QUFFSDJJLHVCQUFPLEtBQUs1SSxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS0MsS0FGM0I7QUFHSDJJLHFCQUFLLEtBQUs3SSxRQUFMLENBQWNHLENBSGhCO0FBSUgySSx3QkFBUSxLQUFLOUksUUFBTCxDQUFjRyxDQUFkLEdBQWtCLEtBQUtDO0FBSjVCLGFBQVA7QUFNSDs7Ozs7O2tCQTFCZ0JtQyxNOzs7Ozs7Ozs7Ozs7OztBQ0FyQjtBQUNBO0FBQ0E7O0FBRUEsQ0FBRSxDQUFDLFVBQVV3RyxNQUFWLEVBQWtCO0FBQ2pCLFFBQUlDLENBQUo7QUFBQSxRQUNJQyxZQUFZLEVBRGhCO0FBQUEsUUFFSUMsUUFBUSxFQUFFLElBQUksS0FBTixFQUFhLElBQUksS0FBakIsRUFBd0IsSUFBSSxLQUE1QixFQUFtQyxJQUFJLEtBQXZDLEVBRlo7QUFBQSxRQUdJQyxTQUFTLEtBSGI7O0FBSUk7QUFDQUMsaUJBQWE7QUFDVCxhQUFLLEVBREksRUFDQUMsT0FBTyxFQURQO0FBRVQsYUFBSyxFQUZJLEVBRUFDLEtBQUssRUFGTCxFQUVTbkMsUUFBUSxFQUZqQjtBQUdULGFBQUssRUFISSxFQUdBb0MsTUFBTSxFQUhOLEVBR1VDLFNBQVMsRUFIbkI7QUFJVCxhQUFLLEVBSkksRUFJQUMsU0FBUztBQUpULEtBTGpCOztBQVdJO0FBQ0FDLFdBQU87QUFDSEMsbUJBQVcsQ0FEUixFQUNXQyxLQUFLLENBRGhCLEVBQ21CQyxPQUFPLEVBRDFCO0FBRUhDLGVBQU8sRUFGSixFQUVRLFVBQVUsRUFGbEI7QUFHSEMsYUFBSyxFQUhGLEVBR01DLFFBQVEsRUFIZCxFQUdrQkMsT0FBTyxFQUh6QjtBQUlIdEIsY0FBTSxFQUpILEVBSU91QixJQUFJLEVBSlg7QUFLSHRCLGVBQU8sRUFMSixFQUtRdUIsTUFBTSxFQUxkO0FBTUhDLGFBQUssRUFORixFQU1NLFVBQVUsRUFOaEI7QUFPSEMsY0FBTSxFQVBILEVBT09DLEtBQUssRUFQWjtBQVFIQyxnQkFBUSxFQVJMLEVBUVNDLFVBQVUsRUFSbkI7QUFTSCxhQUFLLEdBVEYsRUFTTyxLQUFLLEdBVFosRUFTaUIsS0FBSyxHQVR0QjtBQVVILGFBQUssR0FWRixFQVVPLEtBQUssR0FWWixFQVVpQixLQUFLLEdBVnRCO0FBV0gsYUFBSyxHQVhGLEVBV08sTUFBTSxHQVhiO0FBWUgsYUFBSyxHQVpGLEVBWU8sS0FBSyxHQVpaLEVBWWlCLE1BQU07QUFadkIsS0FaWDtBQUFBLFFBMEJJQyxPQUFPLFNBQVBBLElBQU8sQ0FBVXhLLENBQVYsRUFBYTtBQUNoQixlQUFPeUosS0FBS3pKLENBQUwsS0FBV0EsRUFBRXlLLFdBQUYsR0FBZ0JDLFVBQWhCLENBQTJCLENBQTNCLENBQWxCO0FBQ0gsS0E1Qkw7QUFBQSxRQTZCSUMsWUFBWSxFQTdCaEI7O0FBK0JBLFNBQUs1QixJQUFJLENBQVQsRUFBWUEsSUFBSSxFQUFoQixFQUFvQkEsR0FBcEI7QUFBeUJVLGFBQUssTUFBTVYsQ0FBWCxJQUFnQixNQUFNQSxDQUF0QjtBQUF6QixLQWhDaUIsQ0FrQ2pCO0FBQ0EsYUFBUzZCLEtBQVQsQ0FBZUMsS0FBZixFQUFzQkMsSUFBdEIsRUFBNEI7QUFDeEIsWUFBSTNELElBQUkwRCxNQUFNckUsTUFBZDtBQUNBLGVBQU9XLEdBQVA7QUFBWSxnQkFBSTBELE1BQU0xRCxDQUFOLE1BQWEyRCxJQUFqQixFQUF1QixPQUFPM0QsQ0FBUDtBQUFuQyxTQUNBLE9BQU8sQ0FBQyxDQUFSO0FBQ0g7O0FBRUQ7QUFDQSxhQUFTNEQsWUFBVCxDQUFzQkMsRUFBdEIsRUFBMEJDLEVBQTFCLEVBQThCO0FBQzFCLFlBQUlELEdBQUd4RSxNQUFILElBQWF5RSxHQUFHekUsTUFBcEIsRUFBNEIsT0FBTyxLQUFQO0FBQzVCLGFBQUssSUFBSVcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJNkQsR0FBR3hFLE1BQXZCLEVBQStCVyxHQUEvQixFQUFvQztBQUNoQyxnQkFBSTZELEdBQUc3RCxDQUFILE1BQVU4RCxHQUFHOUQsQ0FBSCxDQUFkLEVBQXFCLE9BQU8sS0FBUDtBQUN4QjtBQUNELGVBQU8sSUFBUDtBQUNIOztBQUVELFFBQUkrRCxjQUFjO0FBQ2QsWUFBSSxVQURVO0FBRWQsWUFBSSxRQUZVO0FBR2QsWUFBSSxTQUhVO0FBSWQsWUFBSTtBQUpVLEtBQWxCO0FBTUEsYUFBU0MsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQzlCLGFBQUtyQyxDQUFMLElBQVVFLEtBQVY7QUFBaUJBLGtCQUFNRixDQUFOLElBQVdxQyxNQUFNRixZQUFZbkMsQ0FBWixDQUFOLENBQVg7QUFBakI7QUFDSDs7QUFFRDtBQUNBLGFBQVNzQyxRQUFULENBQWtCRCxLQUFsQixFQUF5QjtBQUNyQixZQUFJM0UsR0FBSixFQUFTNkUsT0FBVCxFQUFrQnZDLENBQWxCLEVBQXFCNUIsQ0FBckIsRUFBd0JvRSxjQUF4QixFQUF3Q0MsS0FBeEM7QUFDQS9FLGNBQU0yRSxNQUFNSyxPQUFaOztBQUVBLFlBQUliLE1BQU1ELFNBQU4sRUFBaUJsRSxHQUFqQixLQUF5QixDQUFDLENBQTlCLEVBQWlDO0FBQzdCa0Usc0JBQVVlLElBQVYsQ0FBZWpGLEdBQWY7QUFDSDs7QUFFRDtBQUNBLFlBQUlBLE9BQU8sRUFBUCxJQUFhQSxPQUFPLEdBQXhCLEVBQTZCQSxNQUFNLEVBQU4sQ0FUUixDQVNrQjtBQUN2QyxZQUFJQSxPQUFPd0MsS0FBWCxFQUFrQjtBQUNkQSxrQkFBTXhDLEdBQU4sSUFBYSxJQUFiO0FBQ0E7QUFDQSxpQkFBS3NDLENBQUwsSUFBVUksVUFBVjtBQUFzQixvQkFBSUEsV0FBV0osQ0FBWCxLQUFpQnRDLEdBQXJCLEVBQTBCa0YsVUFBVTVDLENBQVYsSUFBZSxJQUFmO0FBQWhELGFBQ0E7QUFDSDtBQUNEb0MsMEJBQWtCQyxLQUFsQjs7QUFFQTtBQUNBO0FBQ0EsWUFBSSxDQUFDTyxVQUFVQyxNQUFWLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixFQUE0QlQsS0FBNUIsQ0FBTCxFQUF5Qzs7QUFFekM7QUFDQSxZQUFJLEVBQUUzRSxPQUFPdUMsU0FBVCxDQUFKLEVBQXlCOztBQUV6QndDLGdCQUFRTSxVQUFSOztBQUVBO0FBQ0EsYUFBSzNFLElBQUksQ0FBVCxFQUFZQSxJQUFJNkIsVUFBVXZDLEdBQVYsRUFBZUQsTUFBL0IsRUFBdUNXLEdBQXZDLEVBQTRDO0FBQ3hDbUUsc0JBQVV0QyxVQUFVdkMsR0FBVixFQUFlVSxDQUFmLENBQVY7O0FBRUE7QUFDQSxnQkFBSW1FLFFBQVFFLEtBQVIsSUFBaUJBLEtBQWpCLElBQTBCRixRQUFRRSxLQUFSLElBQWlCLEtBQS9DLEVBQXNEO0FBQ2xEO0FBQ0FELGlDQUFpQkQsUUFBUVMsSUFBUixDQUFhdkYsTUFBYixHQUFzQixDQUF2QztBQUNBLHFCQUFLdUMsQ0FBTCxJQUFVRSxLQUFWO0FBQ0ksd0JBQUssQ0FBQ0EsTUFBTUYsQ0FBTixDQUFELElBQWE2QixNQUFNVSxRQUFRUyxJQUFkLEVBQW9CLENBQUNoRCxDQUFyQixJQUEwQixDQUFDLENBQXpDLElBQ0NFLE1BQU1GLENBQU4sS0FBWTZCLE1BQU1VLFFBQVFTLElBQWQsRUFBb0IsQ0FBQ2hELENBQXJCLEtBQTJCLENBQUMsQ0FEN0MsRUFDaUR3QyxpQkFBaUIsS0FBakI7QUFGckQsaUJBSGtELENBTWxEO0FBQ0Esb0JBQUtELFFBQVFTLElBQVIsQ0FBYXZGLE1BQWIsSUFBdUIsQ0FBdkIsSUFBNEIsQ0FBQ3lDLE1BQU0sRUFBTixDQUE3QixJQUEwQyxDQUFDQSxNQUFNLEVBQU4sQ0FBM0MsSUFBd0QsQ0FBQ0EsTUFBTSxFQUFOLENBQXpELElBQXNFLENBQUNBLE1BQU0sRUFBTixDQUF4RSxJQUFzRnNDLGNBQTFGLEVBQTBHO0FBQ3RHLHdCQUFJRCxRQUFRVSxNQUFSLENBQWVaLEtBQWYsRUFBc0JFLE9BQXRCLE1BQW1DLEtBQXZDLEVBQThDO0FBQzFDLDRCQUFJRixNQUFNYSxjQUFWLEVBQTBCYixNQUFNYSxjQUFOLEdBQTFCLEtBQ0tiLE1BQU1jLFdBQU4sR0FBb0IsS0FBcEI7QUFDTCw0QkFBSWQsTUFBTWUsZUFBVixFQUEyQmYsTUFBTWUsZUFBTjtBQUMzQiw0QkFBSWYsTUFBTWdCLFlBQVYsRUFBd0JoQixNQUFNZ0IsWUFBTixHQUFxQixJQUFyQjtBQUMzQjtBQUNKO0FBQ0o7QUFDSjtBQUNKOztBQUVEO0FBQ0EsYUFBU0MsYUFBVCxDQUF1QmpCLEtBQXZCLEVBQThCO0FBQzFCLFlBQUkzRSxNQUFNMkUsTUFBTUssT0FBaEI7QUFBQSxZQUF5QjFDLENBQXpCO0FBQUEsWUFDSTVCLElBQUl5RCxNQUFNRCxTQUFOLEVBQWlCbEUsR0FBakIsQ0FEUjs7QUFHQTtBQUNBLFlBQUlVLEtBQUssQ0FBVCxFQUFZO0FBQ1J3RCxzQkFBVTJCLE1BQVYsQ0FBaUJuRixDQUFqQixFQUFvQixDQUFwQjtBQUNIOztBQUVELFlBQUlWLE9BQU8sRUFBUCxJQUFhQSxPQUFPLEdBQXhCLEVBQTZCQSxNQUFNLEVBQU47QUFDN0IsWUFBSUEsT0FBT3dDLEtBQVgsRUFBa0I7QUFDZEEsa0JBQU14QyxHQUFOLElBQWEsS0FBYjtBQUNBLGlCQUFLc0MsQ0FBTCxJQUFVSSxVQUFWO0FBQXNCLG9CQUFJQSxXQUFXSixDQUFYLEtBQWlCdEMsR0FBckIsRUFBMEJrRixVQUFVNUMsQ0FBVixJQUFlLEtBQWY7QUFBaEQ7QUFDSDtBQUNKOztBQUVELGFBQVN3RCxjQUFULEdBQTBCO0FBQ3RCLGFBQUt4RCxDQUFMLElBQVVFLEtBQVY7QUFBaUJBLGtCQUFNRixDQUFOLElBQVcsS0FBWDtBQUFqQixTQUNBLEtBQUtBLENBQUwsSUFBVUksVUFBVjtBQUFzQndDLHNCQUFVNUMsQ0FBVixJQUFlLEtBQWY7QUFBdEI7QUFDSDs7QUFFRDtBQUNBLGFBQVM0QyxTQUFULENBQW1CbEYsR0FBbkIsRUFBd0IrRSxLQUF4QixFQUErQlEsTUFBL0IsRUFBdUM7QUFDbkMsWUFBSVEsSUFBSixFQUFVVCxJQUFWO0FBQ0FTLGVBQU9DLFFBQVFoRyxHQUFSLENBQVA7QUFDQSxZQUFJdUYsV0FBV1UsU0FBZixFQUEwQjtBQUN0QlYscUJBQVNSLEtBQVQ7QUFDQUEsb0JBQVEsS0FBUjtBQUNIOztBQUVEO0FBQ0EsYUFBSyxJQUFJckUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJcUYsS0FBS2hHLE1BQXpCLEVBQWlDVyxHQUFqQyxFQUFzQztBQUNsQztBQUNBNEUsbUJBQU8sRUFBUDtBQUNBdEYsa0JBQU0rRixLQUFLckYsQ0FBTCxFQUFRd0YsS0FBUixDQUFjLEdBQWQsQ0FBTjtBQUNBLGdCQUFJbEcsSUFBSUQsTUFBSixHQUFhLENBQWpCLEVBQW9CO0FBQ2hCdUYsdUJBQU9hLFFBQVFuRyxHQUFSLENBQVA7QUFDQUEsc0JBQU0sQ0FBQ0EsSUFBSUEsSUFBSUQsTUFBSixHQUFhLENBQWpCLENBQUQsQ0FBTjtBQUNIO0FBQ0Q7QUFDQUMsa0JBQU1BLElBQUksQ0FBSixDQUFOO0FBQ0FBLGtCQUFNK0QsS0FBSy9ELEdBQUwsQ0FBTjtBQUNBO0FBQ0EsZ0JBQUksRUFBRUEsT0FBT3VDLFNBQVQsQ0FBSixFQUF5QkEsVUFBVXZDLEdBQVYsSUFBaUIsRUFBakI7QUFDekJ1QyxzQkFBVXZDLEdBQVYsRUFBZWlGLElBQWYsQ0FBb0IsRUFBRW1CLFVBQVVMLEtBQUtyRixDQUFMLENBQVosRUFBcUJxRSxPQUFPQSxLQUE1QixFQUFtQ1EsUUFBUUEsTUFBM0MsRUFBbUR2RixLQUFLK0YsS0FBS3JGLENBQUwsQ0FBeEQsRUFBaUU0RSxNQUFNQSxJQUF2RSxFQUFwQjtBQUNIO0FBQ0o7O0FBRUQ7QUFDQSxhQUFTZSxTQUFULENBQW1CckcsR0FBbkIsRUFBd0IrRSxLQUF4QixFQUErQjtBQUMzQixZQUFJdUIsWUFBSjtBQUFBLFlBQWtCUCxJQUFsQjtBQUFBLFlBQ0lULE9BQU8sRUFEWDtBQUFBLFlBRUk1RSxDQUZKO0FBQUEsWUFFTzZGLENBRlA7QUFBQSxZQUVVQyxHQUZWOztBQUlBRix1QkFBZU4sUUFBUWhHLEdBQVIsQ0FBZjs7QUFFQSxhQUFLdUcsSUFBSSxDQUFULEVBQVlBLElBQUlELGFBQWF2RyxNQUE3QixFQUFxQ3dHLEdBQXJDLEVBQTBDO0FBQ3RDUixtQkFBT08sYUFBYUMsQ0FBYixFQUFnQkwsS0FBaEIsQ0FBc0IsR0FBdEIsQ0FBUDs7QUFFQSxnQkFBSUgsS0FBS2hHLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNqQnVGLHVCQUFPYSxRQUFRSixJQUFSLENBQVA7QUFDSDs7QUFFRC9GLGtCQUFNK0YsS0FBS0EsS0FBS2hHLE1BQUwsR0FBYyxDQUFuQixDQUFOO0FBQ0FDLGtCQUFNK0QsS0FBSy9ELEdBQUwsQ0FBTjs7QUFFQSxnQkFBSStFLFVBQVVrQixTQUFkLEVBQXlCO0FBQ3JCbEIsd0JBQVFNLFVBQVI7QUFDSDtBQUNELGdCQUFJLENBQUM5QyxVQUFVdkMsR0FBVixDQUFMLEVBQXFCO0FBQ2pCO0FBQ0g7QUFDRCxpQkFBS1UsSUFBSSxDQUFULEVBQVlBLElBQUk2QixVQUFVdkMsR0FBVixFQUFlRCxNQUEvQixFQUF1Q1csR0FBdkMsRUFBNEM7QUFDeEM4RixzQkFBTWpFLFVBQVV2QyxHQUFWLEVBQWVVLENBQWYsQ0FBTjtBQUNBO0FBQ0Esb0JBQUk4RixJQUFJekIsS0FBSixLQUFjQSxLQUFkLElBQXVCVCxhQUFha0MsSUFBSWxCLElBQWpCLEVBQXVCQSxJQUF2QixDQUEzQixFQUF5RDtBQUNyRC9DLDhCQUFVdkMsR0FBVixFQUFlVSxDQUFmLElBQW9CLEVBQXBCO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7O0FBRUQ7QUFDQTtBQUNBLGFBQVNTLFNBQVQsQ0FBbUI2RCxPQUFuQixFQUE0QjtBQUN4QixZQUFJLE9BQVFBLE9BQVIsSUFBb0IsUUFBeEIsRUFBa0M7QUFDOUJBLHNCQUFVakIsS0FBS2lCLE9BQUwsQ0FBVjtBQUNIO0FBQ0QsZUFBT2IsTUFBTUQsU0FBTixFQUFpQmMsT0FBakIsS0FBNkIsQ0FBQyxDQUFyQztBQUNIOztBQUVELGFBQVN5QixrQkFBVCxHQUE4QjtBQUMxQixlQUFPdkMsVUFBVXdDLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBUDtBQUNIOztBQUVELGFBQVN2QixNQUFULENBQWdCUixLQUFoQixFQUF1QjtBQUNuQixZQUFJZ0MsVUFBVSxDQUFDaEMsTUFBTWlDLE1BQU4sSUFBZ0JqQyxNQUFNa0MsVUFBdkIsRUFBbUNGLE9BQWpEO0FBQ0E7QUFDQSxlQUFPLEVBQUVBLFdBQVcsT0FBWCxJQUFzQkEsV0FBVyxRQUFqQyxJQUE2Q0EsV0FBVyxVQUExRCxDQUFQO0FBQ0g7O0FBRUQ7QUFDQSxTQUFLckUsQ0FBTCxJQUFVSSxVQUFWO0FBQXNCd0Msa0JBQVU1QyxDQUFWLElBQWUsS0FBZjtBQUF0QixLQXZOaUIsQ0F5TmpCO0FBQ0EsYUFBU3dFLFFBQVQsQ0FBa0IvQixLQUFsQixFQUF5QjtBQUFFdEMsaUJBQVNzQyxTQUFTLEtBQWxCO0FBQXlCO0FBQ3BELGFBQVNNLFFBQVQsR0FBb0I7QUFBRSxlQUFPNUMsVUFBVSxLQUFqQjtBQUF3Qjs7QUFFOUM7QUFDQSxhQUFTc0UsV0FBVCxDQUFxQmhDLEtBQXJCLEVBQTRCO0FBQ3hCLFlBQUkvRSxHQUFKLEVBQVNnSCxRQUFULEVBQW1CdEcsQ0FBbkI7O0FBRUEsYUFBS1YsR0FBTCxJQUFZdUMsU0FBWixFQUF1QjtBQUNuQnlFLHVCQUFXekUsVUFBVXZDLEdBQVYsQ0FBWDtBQUNBLGlCQUFLVSxJQUFJLENBQVQsRUFBWUEsSUFBSXNHLFNBQVNqSCxNQUF6QixHQUFrQztBQUM5QixvQkFBSWlILFNBQVN0RyxDQUFULEVBQVlxRSxLQUFaLEtBQXNCQSxLQUExQixFQUFpQ2lDLFNBQVNuQixNQUFULENBQWdCbkYsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBakMsS0FDS0E7QUFDUjtBQUNKO0FBQ0o7O0FBRUQ7QUFDQSxhQUFTc0YsT0FBVCxDQUFpQmhHLEdBQWpCLEVBQXNCO0FBQ2xCLFlBQUkrRixJQUFKO0FBQ0EvRixjQUFNQSxJQUFJaUgsT0FBSixDQUFZLEtBQVosRUFBbUIsRUFBbkIsQ0FBTjtBQUNBbEIsZUFBTy9GLElBQUlrRyxLQUFKLENBQVUsR0FBVixDQUFQO0FBQ0EsWUFBS0gsS0FBS0EsS0FBS2hHLE1BQUwsR0FBYyxDQUFuQixDQUFELElBQTJCLEVBQS9CLEVBQW1DO0FBQy9CZ0csaUJBQUtBLEtBQUtoRyxNQUFMLEdBQWMsQ0FBbkIsS0FBeUIsR0FBekI7QUFDSDtBQUNELGVBQU9nRyxJQUFQO0FBQ0g7O0FBRUQ7QUFDQSxhQUFTSSxPQUFULENBQWlCbkcsR0FBakIsRUFBc0I7QUFDbEIsWUFBSXNGLE9BQU90RixJQUFJMEcsS0FBSixDQUFVLENBQVYsRUFBYTFHLElBQUlELE1BQUosR0FBYSxDQUExQixDQUFYO0FBQ0EsYUFBSyxJQUFJbUgsS0FBSyxDQUFkLEVBQWlCQSxLQUFLNUIsS0FBS3ZGLE1BQTNCLEVBQW1DbUgsSUFBbkM7QUFDSTVCLGlCQUFLNEIsRUFBTCxJQUFXeEUsV0FBVzRDLEtBQUs0QixFQUFMLENBQVgsQ0FBWDtBQURKLFNBRUEsT0FBTzVCLElBQVA7QUFDSDs7QUFFRDtBQUNBLGFBQVM2QixRQUFULENBQWtCQyxNQUFsQixFQUEwQnpDLEtBQTFCLEVBQWlDWSxNQUFqQyxFQUF5QztBQUNyQyxZQUFJNkIsT0FBTzdPLGdCQUFYLEVBQ0k2TyxPQUFPN08sZ0JBQVAsQ0FBd0JvTSxLQUF4QixFQUErQlksTUFBL0IsRUFBdUMsS0FBdkMsRUFESixLQUVLLElBQUk2QixPQUFPQyxXQUFYLEVBQ0RELE9BQU9DLFdBQVAsQ0FBbUIsT0FBTzFDLEtBQTFCLEVBQWlDLFlBQVk7QUFBRVksbUJBQU8rQixPQUFPM0MsS0FBZDtBQUFzQixTQUFyRTtBQUNQOztBQUVEO0FBQ0F3QyxhQUFTN08sUUFBVCxFQUFtQixTQUFuQixFQUE4QixVQUFVcU0sS0FBVixFQUFpQjtBQUFFQyxpQkFBU0QsS0FBVDtBQUFpQixLQUFsRSxFQXRRaUIsQ0FzUW9EO0FBQ3JFd0MsYUFBUzdPLFFBQVQsRUFBbUIsT0FBbkIsRUFBNEJzTixhQUE1Qjs7QUFFQTtBQUNBdUIsYUFBU0csTUFBVCxFQUFpQixPQUFqQixFQUEwQnhCLGNBQTFCOztBQUVBO0FBQ0EsUUFBSXlCLGNBQWNELE9BQU90SCxHQUF6Qjs7QUFFQTtBQUNBLGFBQVN3SCxVQUFULEdBQXNCO0FBQ2xCLFlBQUlsRixJQUFJZ0YsT0FBT3RILEdBQWY7QUFDQXNILGVBQU90SCxHQUFQLEdBQWF1SCxXQUFiO0FBQ0EsZUFBT2pGLENBQVA7QUFDSDs7QUFFRDtBQUNBZ0YsV0FBT3RILEdBQVAsR0FBYWtGLFNBQWI7QUFDQW9DLFdBQU90SCxHQUFQLENBQVc4RyxRQUFYLEdBQXNCQSxRQUF0QjtBQUNBUSxXQUFPdEgsR0FBUCxDQUFXcUYsUUFBWCxHQUFzQkEsUUFBdEI7QUFDQWlDLFdBQU90SCxHQUFQLENBQVcrRyxXQUFYLEdBQXlCQSxXQUF6QjtBQUNBTyxXQUFPdEgsR0FBUCxDQUFXbUYsTUFBWCxHQUFvQkEsTUFBcEI7QUFDQW1DLFdBQU90SCxHQUFQLENBQVdtQixTQUFYLEdBQXVCQSxTQUF2QjtBQUNBbUcsV0FBT3RILEdBQVAsQ0FBV3lHLGtCQUFYLEdBQWdDQSxrQkFBaEM7QUFDQWEsV0FBT3RILEdBQVAsQ0FBV3dILFVBQVgsR0FBd0JBLFVBQXhCO0FBQ0FGLFdBQU90SCxHQUFQLENBQVdDLE1BQVgsR0FBb0JvRyxTQUFwQjs7QUFFQSxRQUFJLElBQUosRUFBbUNvQixPQUFPQyxPQUFQLEdBQWlCeEMsU0FBakI7QUFFdEMsQ0FuU0MsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0ptQmhKLEk7QUFDakIsa0JBQVl5TCxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsYUFBS25PLEtBQUwsR0FBYW1PLEtBQUtuTyxLQUFsQjtBQUNBLGFBQUtFLE1BQUwsR0FBY2lPLEtBQUtqTyxNQUFuQjtBQUNIOzs7OytDQUVzQmtPLFMsRUFBVztBQUM5QixnQkFBTUMsV0FBVyxLQUFLQyxTQUFMLEVBQWpCO0FBQ0EsZ0JBQU1sRyxPQUFPZ0csVUFBVUUsU0FBVixFQUFiO0FBQ0EsZ0JBQUlELFNBQVM1RixJQUFULEdBQWdCTCxLQUFLTSxLQUFyQixJQUE4QjJGLFNBQVMzRixLQUFULEdBQWlCTixLQUFLSyxJQUF4RCxFQUE4RDtBQUMxRCx1QkFBTyxLQUFQO0FBQ0g7QUFDRCxnQkFBSTRGLFNBQVMxRixHQUFULEdBQWVQLEtBQUtRLE1BQXBCLElBQThCeUYsU0FBU3pGLE1BQVQsR0FBa0JSLEtBQUtPLEdBQXpELEVBQThEO0FBQzFELHVCQUFPLEtBQVA7QUFDSDtBQUNELG1CQUFPLElBQVA7QUFDSDs7O29DQUVXO0FBQ1IsbUJBQU87QUFDSEYsc0JBQU0sS0FBSzNJLFFBQUwsQ0FBY0MsQ0FEakI7QUFFSDJJLHVCQUFPLEtBQUs1SSxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS0MsS0FGM0I7QUFHSDJJLHFCQUFLLEtBQUs3SSxRQUFMLENBQWNHLENBSGhCO0FBSUgySSx3QkFBUSxLQUFLOUksUUFBTCxDQUFjRyxDQUFkLEdBQWtCLEtBQUtDO0FBSjVCLGFBQVA7QUFNSDs7Ozs7O2tCQXpCZ0J3QyxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBOQkFKYW1HYW1lIGZyb20gJy4vanMvZ2FtZS5qcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmJhLWphbS1nYW1lJyk7XG4gICAgbmV3IE5CQUphbUdhbWUoY2FudmFzKTtcbn0pOyIsImltcG9ydCBDaXJjbGUgZnJvbSBcIi4vdXRpbHMvY2lyY2xlXCI7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBSQURJVVM6IDE1LFxuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBCT1VOQ0VfUkVURU5USU9OOiAwLjYsXG4gICAgRFJJQkJMRV9TUEVFRDogMyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCBleHRlbmRzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IgKGRpbWVuc2lvbnMsIGNvdXJ0LCBsZWZ0SG9vcCwgcmlnaHRIb29wKSB7XG4gICAgICAgIHN1cGVyKENPTlNUQU5UUy5SQURJVVMpXG4gICAgICAgIHRoaXMuY291cnQgPSBjb3VydFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBsZWZ0SG9vcFxuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IHJpZ2h0SG9vcFxuICAgICAgICB0aGlzLmxlZnRIb29wLmJhbGwgPSB0aGlzXG4gICAgICAgIHRoaXMucmlnaHRIb29wLmJhbGwgPSB0aGlzXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY291cnQud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJob3RwaW5rXCJcbiAgICAgICAgdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuICAgICAgICB0aGlzLm5vVG91Y2ggPSB7fVxuICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLngsIFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55LCBcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLCBcbiAgICAgICAgICAgIDAsIFxuICAgICAgICAgICAgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICBjbGFpbVBvc3Nlc3Npb24ocGxheWVyKSB7XG4gICAgICAgIGlmICghdGhpcy5ub1RvdWNoW3BsYXllci5jb2xvcl0pIHRoaXMucG9zc2Vzc2lvbiA9IHBsYXllclxuICAgIH1cblxuXG4gICAgc2hvb3QgKCkge1xuICAgICAgICAvLyBCRVRBIFNIT09USU5HXG5cbiAgICAgICAgLy8gdGhpcy5wb3dlciArPSAxXG4gICAgICAgIC8vIGNvbnN0IHNob290aW5nUGxheWVyID0gdGhpcy5wb3NzZXNzaW9uXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID9cbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54ICsgc2hvb3RpbmdQbGF5ZXIud2lkdGggKyB0aGlzLnJhZGl1cykgOlxuICAgICAgICAvLyAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cylcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ID0gc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueVxuXG4gICAgICAgIC8vIGlmICh0aGlzLnNob290aW5nSW50ZXJ2YWwgJiYgdGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgIC8vICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG9vdGluZ0ludGVydmFsKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmICh0aGlzLnBvd2VyIDwgNjApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuc2hvb3RpbmdJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gNiA6IC02XG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gdGhpcy5wb3dlclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcbiAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWUgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gZmFsc2VcbiAgICAgICAgLy8gICAgICAgICB9LCA1MDApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgICAgIC8vICAgICB9LCAyMCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBBSU1CT1QgU0hPT1RJTkdcblxuICAgICAgICAvLyBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICAvLyBjb25zdCBzY29yZVBvc2l0aW9uID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgPyAoXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgeDogdGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueCArICh0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC53aWR0aCAvIDIpLFxuICAgICAgICAvLyAgICAgICAgIHk6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnlcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gKSA6IChcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICB4OiB0aGlzLmxlZnRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgLy8gICAgICAgICB5OiB0aGlzLmxlZnRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnlcbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyApXG5cbiAgICAgICAgLy8gY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSA1MFxuXG4gICAgICAgIC8vIGNvbnN0IHZlbG9jaXR5WCA9IChzY29yZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICAgICAgLy8gY29uc3QgdmVsb2NpdHlZID0gKCAoLXNjb3JlUG9zaXRpb24ueSArIHRoaXMucG9zaXRpb24ueSkgLSAwLjUgKiAtQ09OU1RBTlRTLkdSQVZJVFkgKiAobnVtYmVyT2ZGcmFtZXMgKiBudW1iZXJPZkZyYW1lcykgKSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAvLyAgICAgeDogdmVsb2NpdHlYLFxuICAgICAgICAvLyAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gdHJ1ZSAgICAgICAgXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IGZhbHNlXG4gICAgICAgIC8vIH0sIDUwMCk7XG5cbiAgICAgICAgLy8gdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuXG4gICAgICAgIC8vIFBPV0VSQkFTRUQgQUlNRUQgU0hPT1RJTkdcblxuICAgICAgICB0aGlzLnBvd2VyICs9IDFcblxuICAgICAgICBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICBpZiAodGhpcy5zaG9vdGluZ1RpbWVvdXQgJiYgdGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG9vdGluZ1RpbWVvdXQpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG93ZXIgPCA2MCkge1xuICAgICAgICAgICAgdGhpcy5zaG9vdGluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VCYWxsKClcbiAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVsZWFzZUJhbGwgKCkge1xuICAgICAgICBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuXG4gICAgICAgIGNvbnN0IHNjb3JlUG9zaXRpb24gPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueVxuICAgICAgICAgICAgfVxuICAgICAgICApIDogKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMubGVmdEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueCArICh0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC53aWR0aCAvIDIpLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMubGVmdEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueVxuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgLy8gTEFZVVBcbiAgICAgICAgaWYgKDE1MCA+IE1hdGguaHlwb3QodGhpcy5wb3NpdGlvbi54IC0gc2NvcmVQb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgLSBzY29yZVBvc2l0aW9uLnkpKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IDMwXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVkgPSAoKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpKSAvIG51bWJlck9mRnJhbWVzXG5cbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAodGhpcy5wb3dlciAtIDMwKSAvIDEwMFxuICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWRYID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgPyAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYICsgZGlmZlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eVggLSBkaWZmXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgICAgIHg6IGFkanVzdGVkWCxcbiAgICAgICAgICAgICAgICB5OiB2ZWxvY2l0eVlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNIT1RcbiAgICAgICAgICAgIGNvbnN0IG51bWJlck9mRnJhbWVzID0gNTBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdmVsb2NpdHlYID0gKHNjb3JlUG9zaXRpb24ueCAtIHRoaXMucG9zaXRpb24ueCkgLyBudW1iZXJPZkZyYW1lc1xuICAgICAgICAgICAgY29uc3QgdmVsb2NpdHlZID0gKCgtc2NvcmVQb3NpdGlvbi55ICsgdGhpcy5wb3NpdGlvbi55KSAtIDAuNSAqIC1DT05TVEFOVFMuR1JBVklUWSAqIChudW1iZXJPZkZyYW1lcyAqIG51bWJlck9mRnJhbWVzKSkgLyBudW1iZXJPZkZyYW1lc1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGlmZiA9ICh0aGlzLnBvd2VyIC0gMzApIC8gMTBcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkWCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCArIGRpZmZcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYIC0gZGlmZlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgICAgICB4OiBhZGp1c3RlZFgsXG4gICAgICAgICAgICAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gdHJ1ZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSBmYWxzZVxuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcblxuICAgIH1cblxuICAgIG1vdmUoKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnBvc3Nlc3Npb24pIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbCgpXG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVdpdGhQbGF5ZXJQb3NzZXNzaW9uKCkgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrQm91bmRzKClcbiAgICB9XG5cbiAgICBtb3ZlV2l0aFBsYXllclBvc3Nlc3Npb24oKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMucG9zc2Vzc2lvbi5mYWNpbmdSaWdodCA/XG4gICAgICAgICAgICAodGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLnggKyB0aGlzLnBvc3Nlc3Npb24ud2lkdGgpIDogKHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi54KVxuXG4gICAgICAgIGlmICh0aGlzLnBvc3Nlc3Npb24uanVtcGluZykge1xuICAgICAgICAgICAgLy8gSE9MRCBCQUxMXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueSArIHRoaXMucG9zc2Vzc2lvbi5oZWlnaHQgLyAyXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIERSSUJCTElOR1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA8IHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi55ICsgdGhpcy5wb3NzZXNzaW9uLmhlaWdodCAvIDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtQ09OU1RBTlRTLkRSSUJCTEVfU1BFRURcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi55ID4gdGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLnkgKyB0aGlzLnBvc3Nlc3Npb24uaGVpZ2h0IC0gdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSBDT05TVEFOVFMuRFJJQkJMRV9TUEVFRFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMudmVsb2NpdHkueVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmYWxsICgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMudmVsb2NpdHkueTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICAgICAgLy8gR1JBVklUWVxuICAgICAgICAvLyBpZiB0aGUgcG9zIGlzIGdyZWF0ZXIgdGhhbiB0aGUgZmxvb3JcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMucmFkaXVzIDwgdGhpcy5jb3VydC5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gQ09OU1RBTlRTLkdSQVZJVFk7XG4gICAgICAgICAgICAvLyBlbHNlIHNldCB0aGUgcmV2ZXJzZSB2ZWxvY2l0eVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmVsb2NpdHkueSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLnZlbG9jaXR5LnkgKiBDT05TVEFOVFMuQk9VTkNFX1JFVEVOVElPTlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjaGVja0JvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA+IHRoaXMuY291cnQud2lkdGggLSB0aGlzLnJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jb3VydC53aWR0aCAtIHRoaXMucmFkaXVzXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMFxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueFxuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IFJlY3QgZnJvbSBcIi4vdXRpbHMvcmVjdFwiO1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgQ09VUlRfRkxPT1I6IDAuODUsXG4gICAgQ09VUlRfV0lEVEg6IDVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdXJ0IGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucykge1xuICAgICAgICBzdXBlcih7IHdpZHRoOiBkaW1lbnNpb25zLndpZHRoLCBoZWlnaHQ6IENPTlNUQU5UUy5DT1VSVF9XSURUSCB9KVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IGRpbWVuc2lvbnMuaGVpZ2h0ICogQ09OU1RBTlRTLkNPVVJUX0ZMT09SXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwiZ3JlZW5cIlxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJ1xuaW1wb3J0IENvdXJ0IGZyb20gJy4vY291cnQnO1xuaW1wb3J0IEhvb3AgZnJvbSAnLi9ob29wJztcbmltcG9ydCBCYWxsIGZyb20gJy4vYmFsbCc7XG5pbXBvcnQgU2NvcmVib2FyZCBmcm9tICcuL3Njb3JlYm9hcmQnO1xuaW1wb3J0IFBsYXllcjIgZnJvbSAnLi9wbGF5ZXIyJztcbmltcG9ydCBNYWluTWVudSBmcm9tICcuL21lbnVfc2NyZWVucy9tYWluX21lbnUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOQkFKYW1HYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHsgICAgICAgIFxuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgICAgIHRoaXMubWFpbk1lbnUgPSBuZXcgTWFpbk1lbnUodGhpcy5kaW1lbnNpb25zLCB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVuZGVyTWVudSgpXG4gICAgICAgIC8vIHRoaXMucmVzdGFydCgpO1xuICAgIH1cblxuICAgIHNob3dNZW51KCkge1xuICAgICAgICB0aGlzLm1haW5NZW51LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICB0aGlzLnJlbmRlck1lbnUodGhpcy5jdHgpXG4gICAgfVxuXG4gICAgcmVuZGVyTWVudSAoKSB7XG4gICAgICAgIHRoaXMubWFpbk1lbnUucmVuZGVyKHRoaXMuY3R4KVxuICAgICAgICBpZiAoIXRoaXMucGxheWluZ0dhbWUpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlck1lbnUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lIChsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSkge1xuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gdHJ1ZVxuICAgICAgICB0aGlzLnJlc3RhcnQobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUpXG4gICAgfVxuXG4gICAgcmVzdGFydChsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSkge1xuICAgICAgICAvLyBTVEFSVCBBTklNQVRJT04gU1lDTEVcbiAgICAgICAgdGhpcy5jb3VydCA9IG5ldyBDb3VydCh0aGlzLmRpbWVuc2lvbnMpO1xuICAgICAgICB0aGlzLmxlZnRIb29wID0gbmV3IEhvb3AodGhpcy5kaW1lbnNpb25zLCBcIkxFRlRcIik7XG4gICAgICAgIHRoaXMucmlnaHRIb29wID0gbmV3IEhvb3AodGhpcy5kaW1lbnNpb25zLCBcIlJJR0hUXCIpO1xuICAgICAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuY291cnQsIHRoaXMubGVmdEhvb3AsIHRoaXMucmlnaHRIb29wKVxuXG4gICAgICAgIHRoaXMuc2NvcmVib2FyZCA9IG5ldyBTY29yZWJvYXJkKHRoaXMuZGltZW5zaW9ucywgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3ApXG5cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgcmlnaHRTcHJpdGUpO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyMih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIGxlZnRTcHJpdGUpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cbiAgICBcbiAgICBhbmltYXRlKCkgeyAgICAgICAgXG4gICAgICAgIC8vIENSRUFURVMgQkFDS0dST1VORFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIm9yYW5nZVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBcbiAgICAgICAgLy8gQU5JTUFURSBPQkpFQ1RTXG4gICAgICAgIHRoaXMucGxheWVyLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMucGxheWVyMi5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmJhbGwuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5sZWZ0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLnJpZ2h0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zY29yZWJvYXJkLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMuY291cnQuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVdpbm5lcigpXG4gICAgICAgIH1cbiAgICAgICAgLy8gUkVRVUVTVCBORVhUIEZSQU1FXG4gICAgICAgIGlmICh0aGlzLnBsYXlpbmdHYW1lKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuXG5cbiAgICBnYW1lT3ZlciAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3JlYm9hcmQudGltZUxlZnQgPT09IDBcbiAgICB9XG5cbiAgICBkaXNwbGF5V2lubmVyICgpIHtcbiAgICAgICAgbGV0IHRleHQ7XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0SG9vcC5zY29yZSA+IHRoaXMubGVmdEhvb3Auc2NvcmUpIHtcbiAgICAgICAgICAgIHRleHQgPSBcIlBsYXllciAxIHdpbnNcIlxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGVmdEhvb3Auc2NvcmUgPiB0aGlzLnJpZ2h0SG9vcC5zY29yZSkge1xuICAgICAgICAgICAgdGV4dCA9IFwiUGxheWVyIDIgd2luc1wiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ID0gXCJUaWUgR2FtZVwiXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgfVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgJHt0ZXh0fWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VUZXh0KGAke3RleHR9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGxheWluZ0dhbWUgPSBmYWxzZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lbnUoKVxuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgUmVjdCBmcm9tICcuL3V0aWxzL3JlY3QnXG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBIT09QX1lfTVVMVElQTElFUjogMC4zLFxuICAgIEhPT1BfSEVJR0hUOiA0MCxcbiAgICBIT09QX1dJRFRIOiA1MCxcbiAgICBIT09QX1hfRElTVEFOQ0U6IDUwLFxuICAgIEJBQ0tCT0FSRF9XSURUSDogMTUsXG4gICAgQkFDS0JPQVJEX0hFSUdIVDogNTAsXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9vcCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIGhvb3BTaWRlLCBiYWxsKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5IT09QX1dJRFRILCBoZWlnaHQ6IENPTlNUQU5UUy5IT09QX0hFSUdIVCB9KVxuICAgICAgICB0aGlzLmJhbGwgPSBiYWxsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgICAgICAwICsgQ09OU1RBTlRTLkhPT1BfWF9ESVNUQU5DRVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zLndpZHRoIC0gQ09OU1RBTlRTLkhPT1BfWF9ESVNUQU5DRSAtIHRoaXMud2lkdGhcbiAgICAgICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsIFxuICAgICAgICAgICAgeTogZGltZW5zaW9ucy5oZWlnaHQgKiBDT05TVEFOVFMuSE9PUF9ZX01VTFRJUExJRVJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tib2FyZCA9IG5ldyBCYWNrYm9hcmQodGhpcywgaG9vcFNpZGUpXG4gICAgICAgIHRoaXMuc2NvcmVIaXRib3ggPSBuZXcgU2NvcmVIaXRib3godGhpcywgaG9vcFNpZGUpXG4gICAgICAgIHRoaXMuY29sb3IgPSBcInB1cnBsZVwiXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgICAgIHRoaXMuanVzdFNjb3JlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5jaGVja0JhbGxDb2xsaXNpb24oKVxuICAgICAgICB0aGlzLmJhY2tib2FyZC5hbmltYXRlKGN0eClcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnNjb3JlSGl0Ym94LmFuaW1hdGUoY3R4KVxuICAgICAgICBpZiAodGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMuc2NvcmVIaXRib3gpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuanVzdFNjb3JlZCkgdGhpcy5zY29yZSArPSAyXG4gICAgICAgICAgICB0aGlzLmp1c3RTY29yZWQgPSB0cnVlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1c3RTY29yZWQgPSBmYWxzZVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQmFsbENvbGxpc2lvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcykgfHwgdGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMuYmFja2JvYXJkKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYmFsbC5wb3NpdGlvbi55IC0gdGhpcy5iYWxsLnJhZGl1cyA+IHRoaXMucG9zaXRpb24ueSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbGwudmVsb2NpdHkueSA+IDApIHRoaXMuYmFsbC52ZWxvY2l0eS55ID0gLXRoaXMuYmFsbC52ZWxvY2l0eS55XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbGwucG9zaXRpb24ueSArIHRoaXMuYmFsbC5yYWRpdXMgPCB0aGlzLmJhY2tib2FyZC5wb3NpdGlvbi55ICYmIHRoaXMuYmFsbC52ZWxvY2l0eS55IDwgMCkgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxsLnZlbG9jaXR5LnkgPSAtdGhpcy5iYWxsLnZlbG9jaXR5LnlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5iYWxsLnZlbG9jaXR5LnggPSAtdGhpcy5iYWxsLnZlbG9jaXR5LnhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5jbGFzcyBTY29yZUhpdGJveCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGhvb3AsIGhvb3BTaWRlKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5IT09QX1dJRFRIIC0gMzAsIGhlaWdodDogQ09OU1RBTlRTLkhPT1BfSEVJR0hUICogMC4wNSB9KVxuICAgICAgICBjb25zdCB4ID0gaG9vcFNpZGUgPT09IFwiTEVGVFwiID8gKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54ICsgMTVcbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCArIGhvb3Aud2lkdGggLSB0aGlzLndpZHRoIC0gMTVcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IGhvb3AucG9zaXRpb24ueVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcIndoaXRlXCJcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufVxuXG5jbGFzcyBCYWNrYm9hcmQgZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihob29wLCBob29wU2lkZSkge1xuICAgICAgICBzdXBlcih7IHdpZHRoOiBDT05TVEFOVFMuQkFDS0JPQVJEX1dJRFRILCBoZWlnaHQ6IENPTlNUQU5UUy5CQUNLQk9BUkRfSEVJR0hUIH0pXG4gICAgICAgIGNvbnN0IHggPSBob29wU2lkZSA9PT0gXCJMRUZUXCIgPyAoXG4gICAgICAgICAgICBob29wLnBvc2l0aW9uLnggXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICBob29wLnBvc2l0aW9uLnggKyBob29wLndpZHRoIC0gdGhpcy53aWR0aFxuICAgICAgICApXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogaG9vcC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJhcXVhXCJcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufSIsImltcG9ydCBrZXkgZnJvbSAnLi4vdXRpbHMva2V5bWFzdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyU2VsZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBzZWxlY3RlZENoYXJhY3RlcnMpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVycyA9IHNlbGVjdGVkQ2hhcmFjdGVyc1xuICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9IDBcbiAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gMVxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiUm9kbWFuXCIsIHNyYzogXCJzcmMvYXNzZXRzL3JvZG1hblNtYWxsLnBuZ1wifSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJEcmFrZVwiLCBzcmM6IFwic3JjL2Fzc2V0cy9kcmFrZVNtYWxsLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiTGVicm9uXCIsIHNyYzogXCJzcmMvYXNzZXRzL2xlYnJvblNtYWxsLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiUGVhY2hcIiwgc3JjOiBcInNyYy9hc3NldHMvcGVhY2hTbWFsbC5wbmdcIn1cbiAgICAgICAgXVxuICAgICAgICBcbiAgICAgICAgdGhpcy5sZWZ0Q2hhciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnJpZ2h0Q2hhciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmxlZnRDaGFyLnNyYyA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjXG4gICAgICAgIHRoaXMucmlnaHRDaGFyLnNyYyA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdLnNyY1xuICAgIH1cblxuICAgIHJlbmRlcihjdHgpIHtcbiAgICAgICAgdGhpcy5sZWZ0Q2hhci5zcmMgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdLnNyY1xuICAgICAgICB0aGlzLnJpZ2h0Q2hhci5zcmMgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmNcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJwdXJwbGVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG5cbiAgICAgICAgLy8gTEVGVCBTSURFXG4gICAgICAgIGNvbnN0IGxlZnRTaWRlQ2hhciA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF1cbiAgICAgICAgbGV0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gNCwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDJ9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5cbiAgICAgICAgY3R4LmZpbGxUZXh0KGAke2xlZnRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGAke2xlZnRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5sZWZ0Q2hhcixcbiAgICAgICAgICAgIGxvYy54IC0gdGhpcy5sZWZ0Q2hhci53aWR0aCAvIDIsXG4gICAgICAgICAgICBsb2MueSlcblxuICAgICAgICAvLyBSSUdIVCBTSURFXG4gICAgICAgIGNvbnN0IHJpZ2h0U2lkZUNoYXIgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXVxuICAgICAgICBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAqIDMgLyA0LCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5cbiAgICAgICAgY3R4LmZpbGxUZXh0KGAke3JpZ2h0U2lkZUNoYXIubmFtZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHtyaWdodFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnJpZ2h0Q2hhcixcbiAgICAgICAgICAgIGxvYy54IC0gdGhpcy5yaWdodENoYXIud2lkdGggLyAyLFxuICAgICAgICAgICAgbG9jLnkpXG5cbiAgICB9XG5cbiAgICBzZXR1cEtleUhhbmRsZXJzKCkge1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAga2V5KCdkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBrZXkoJ3VwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgLSAxKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0U2VsZWN0ZWQgPT09IC0xKSB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGtleSgndycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9ICh0aGlzLmxlZnRTZWxlY3RlZCArIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAga2V5KCdzJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkIC0gMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdFNlbGVjdGVkID09PSAtMSkgdGhpcy5sZWZ0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAga2V5KCdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdkb3duJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCd1cCcpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgndycpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgncycpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZW50ZXInKVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzKHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjLCB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmMpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAxMDApO1xuXG4gICAgfVxuXG5cblxuXG59IiwiaW1wb3J0IGtleSBmcm9tICcuLi91dGlscy9rZXltYXN0ZXInO1xuaW1wb3J0IENoYXJhY3RlclNlbGVjdCBmcm9tICcuL2NoYXJhY3Rlcl9zZWxlY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSB7XG4gICAgY29uc3RydWN0b3IgKGRpbWVuc2lvbnMsIHN0YXJ0R2FtZSkge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lID0gc3RhcnRHYW1lXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSAwXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFtcIlN0YXJ0IEdhbWVcIiwgXCJUd28gUGxheWVyc1wiXVxuICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdCA9IG5ldyBDaGFyYWN0ZXJTZWxlY3QodGhpcy5kaW1lbnNpb25zLCB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVycy5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgPSBmYWxzZVxuICAgICAgICB0aGlzLnNldHVwS2V5SGFuZGxlcnMoKVxuICAgIH1cblxuICAgIHNlbGVjdGVkQ2hhcmFjdGVycyAobGVmdFNyYywgcmlnaHRTcmMpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzID0gZmFsc2VcbiAgICAgICAgdGhpcy5zdGFydEdhbWUobGVmdFNyYywgcmlnaHRTcmMpXG4gICAgfVxuXG4gICAgcmVuZGVyIChjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicHVycGxlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24sIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAoKHRoaXMub3B0aW9ucy5sZW5ndGggKyAxKSAtIGkpIH1cbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KGAke29wdGlvbn1gKS53aWR0aFxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT09IGkpIGN0eC5maWxsUmVjdCgobG9jLnggLSB3aWR0aCAvIDIpIC0gNSwgbG9jLnkgLSA0MCwgd2lkdGggKyAxMCwgNTApO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChgJHtvcHRpb259YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVRleHQoYCR7b3B0aW9ufWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycykge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3QucmVuZGVyKGN0eClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldHVwS2V5SGFuZGxlcnMoKSB7XG4gICAgICAgIGtleSgnZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSAodGhpcy5zZWxlY3RlZE9wdGlvbiArIDEpICUgdGhpcy5vcHRpb25zLmxlbmd0aFxuICAgICAgICB9KVxuICAgICAgICBrZXkoJ3VwJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IE1hdGguYWJzKCh0aGlzLnNlbGVjdGVkT3B0aW9uIC0gMSkgJSB0aGlzLm9wdGlvbnMubGVuZ3RoKVxuICAgICAgICB9KVxuICAgICAgICBrZXkoJ2VudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdkb3duJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCd1cCcpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZW50ZXInKVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5zZXR1cEtleUhhbmRsZXJzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBcblxuXG5cbn0iLCJpbXBvcnQgUmVjdCBmcm9tICcuL3V0aWxzL3JlY3QnO1xuaW1wb3J0IGtleSBmcm9tICcuL3V0aWxzL2tleW1hc3Rlcic7XG5cblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBQTEFZRVJfV0lEVEg6IDQwLFxuICAgIFBMQVlFUl9IRUlHSFQ6IDcwLFxuICAgIE1PVkVTUEVFRDogNSxcbiAgICAvLyBXSVRIX0JBTExfTU9WRVNQRUVEOiAzLjUsXG4gICAgSlVNUF9IRUlHSFQ6IDE0LFxuICAgIC8vIE9OX0ZJUkVfSlVNUF9IRUlHSFQ6IDE2XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5QTEFZRVJfV0lEVEgsIGhlaWdodDogQ09OU1RBTlRTLlBMQVlFUl9IRUlHSFQgfSlcbiAgICAgICAgdGhpcy5jb3VydCA9IGNvdXJ0XG4gICAgICAgIHRoaXMuYmFsbCA9IGJhbGxcblxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSBDT05TVEFOVFMuUExBWUVSX0hFSUdIVFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuZGVubmlzUm9kbWFuSGVhZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAvLyB0aGlzLmRlbm5pc1JvZG1hbkhlYWQuc3JjID0gJ3NyYy9hc3NldHMvZGVubmlzUm9kbWFuSGVhZC5wbmcnXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNyYyA9IHNwcml0ZVNyY1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZSh0aGlzLmRlbm5pc1JvZG1hbkhlYWQsIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIHRoaXMud2lkdGggKyAodGhpcy5kZW5uaXNSb2RtYW5IZWFkLndpZHRoIC8gMiksIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0ICsgKHRoaXMuZGVubmlzUm9kbWFuSGVhZC5oZWlnaHQgLyAzKSlcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSxcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSA1LFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5zcHJpdGUuaGVpZ2h0IC8gMylcbiAgICB9XG5cbiAgICBtb3ZlICgpIHtcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3JpZ2h0JykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnbGVmdCcpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSlVNUElOR1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgndXAnKSAmJiAhdGhpcy5qdW1waW5nKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSBDT05TVEFOVFMuSlVNUF9IRUlHSFQ7XG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnLycpKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZvcm1BY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tCYWxsKCkgXG5cbiAgICAgICAgdGhpcy5oYW5kbGVHcmF2aXR5KClcblxuICAgICAgICB0aGlzLmNoZWNrQm91bmRzKClcbiAgICB9XG5cbiAgICBwcmVmb3JtQWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5iYWxsLnBvc3Nlc3Npb24gPT09IHRoaXMpIHtcbiAgICAgICAgICAgIC8vIEhvbGQgdG8gc2hvb3QuIFxuICAgICAgICAgICAgdGhpcy5iYWxsLnNob290KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQmFsbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhbGwucG9zc2Vzc2lvbiAmJiB0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcykpIHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC5jbGFpbVBvc3Nlc3Npb24odGhpcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUdyYXZpdHkoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgICAgIC8vIEdSQVZJVFlcbiAgICAgICAgLy8gaWYgdGhlIHBvcyBpcyBncmVhdGVyIHRoYW4gdGhlIGZsb29yXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA8IHRoaXMuY291cnQucG9zaXRpb24ueSkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IENPTlNUQU5UUy5HUkFWSVRZO1xuICAgICAgICAgICAgLy8gZWxzZSBzZXQgdGhlIHBvcyB0byB0aGUgZmxvb3JcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDBcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGhcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBHUkFWSVRZOiAwLjUsXG4gICAgUExBWUVSX1dJRFRIOiA0MCxcbiAgICBQTEFZRVJfSEVJR0hUOiA3MCxcbiAgICBNT1ZFU1BFRUQ6IDUsXG4gICAgLy8gV0lUSF9CQUxMX01PVkVTUEVFRDogMy41LFxuICAgIEpVTVBfSEVJR0hUOiAxNCxcbiAgICAvLyBPTl9GSVJFX0pVTVBfSEVJR0hUOiAxNlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyMiBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY291cnQsIGJhbGwsIHNwcml0ZVNyYykge1xuICAgICAgICBzdXBlcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKVxuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdkJykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnYScpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSlVNUElOR1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgndycpICYmICF0aGlzLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5KVU1QX0hFSUdIVDtcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdxJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZm9ybUFjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JhbGwoKVxuXG4gICAgICAgIHRoaXMuaGFuZGxlR3Jhdml0eSgpXG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgbGVmdEhvb3AsIHJpZ2h0SG9vcCkge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBsZWZ0SG9vcFxuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IHJpZ2h0SG9vcFxuICAgICAgICB0aGlzLnRpbWVMZWZ0ID0gNjBcbiAgICAgICAgdGhpcy5jb3VudERvd24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7IFxuICAgICAgICAgICAgdGhpcy50aW1lTGVmdC0tXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lTGVmdCA9PT0gMCkgY2xlYXJJbnRlcnZhbCh0aGlzLmNvdW50RG93bilcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSAoY3R4KSB7XG4gICAgICAgIGxldCBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAxMCB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7IFxuICAgICAgICBjdHguZmlsbFRleHQoYFBsYXllciAxOiAke3RoaXMucmlnaHRIb29wLnNjb3JlfSBQbGF5ZXIgMjogJHt0aGlzLmxlZnRIb29wLnNjb3JlfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGBQbGF5ZXIgMTogJHt0aGlzLnJpZ2h0SG9vcC5zY29yZX0gUGxheWVyIDI6ICR7dGhpcy5sZWZ0SG9vcC5zY29yZX1gLCBsb2MueCwgbG9jLnkpO1xuXG4gICAgICAgIGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDUgfVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGAke3RoaXMudGltZUxlZnR9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYCR7dGhpcy50aW1lTGVmdH1gLCBsb2MueCwgbG9jLnkpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUge1xuICAgIGNvbnN0cnVjdG9yKHJhZGl1cykge1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG5cbiAgICBpc092ZXJsYXBwaW5nUmVjdChyZWN0KSB7XG4gICAgICAgIGNvbnN0IGRpc3RYID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi54IC0gcmVjdC5wb3NpdGlvbi54IC0gcmVjdC53aWR0aCAvIDIpO1xuICAgICAgICBjb25zdCBkaXN0WSA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueSAtIHJlY3QucG9zaXRpb24ueSAtIHJlY3QuaGVpZ2h0IC8gMik7XG4gICAgICAgIGlmIChkaXN0WCA+IChyZWN0LndpZHRoIC8gMiArIHRoaXMucmFkaXVzKSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgaWYgKGRpc3RZID4gKHJlY3QuaGVpZ2h0IC8gMiArIHRoaXMucmFkaXVzKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgICAgICBpZiAoZGlzdFggPD0gKHJlY3Qud2lkdGggLyAyKSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICBpZiAoZGlzdFkgPD0gKHJlY3QuaGVpZ2h0IC8gMikpIHsgcmV0dXJuIHRydWU7IH1cblxuICAgICAgICBjb25zdCBkeCA9IGRpc3RYIC0gcmVjdC53aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IGR5ID0gZGlzdFkgLSByZWN0LmhlaWdodCAvIDI7XG4gICAgICAgIHJldHVybiAoZHggKiBkeCArIGR5ICogZHkgPD0gKHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXMpKTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICByaWdodDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxufSIsIi8vICAgICBrZXltYXN0ZXIuanNcbi8vICAgICAoYykgMjAxMS0yMDEzIFRob21hcyBGdWNoc1xuLy8gICAgIGtleW1hc3Rlci5qcyBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuOyAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgIHZhciBrLFxuICAgICAgICBfaGFuZGxlcnMgPSB7fSxcbiAgICAgICAgX21vZHMgPSB7IDE2OiBmYWxzZSwgMTg6IGZhbHNlLCAxNzogZmFsc2UsIDkxOiBmYWxzZSB9LFxuICAgICAgICBfc2NvcGUgPSAnYWxsJyxcbiAgICAgICAgLy8gbW9kaWZpZXIga2V5c1xuICAgICAgICBfTU9ESUZJRVJTID0ge1xuICAgICAgICAgICAgJ+KHpyc6IDE2LCBzaGlmdDogMTYsXG4gICAgICAgICAgICAn4oylJzogMTgsIGFsdDogMTgsIG9wdGlvbjogMTgsXG4gICAgICAgICAgICAn4oyDJzogMTcsIGN0cmw6IDE3LCBjb250cm9sOiAxNyxcbiAgICAgICAgICAgICfijJgnOiA5MSwgY29tbWFuZDogOTFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gc3BlY2lhbCBrZXlzXG4gICAgICAgIF9NQVAgPSB7XG4gICAgICAgICAgICBiYWNrc3BhY2U6IDgsIHRhYjogOSwgY2xlYXI6IDEyLFxuICAgICAgICAgICAgZW50ZXI6IDEzLCAncmV0dXJuJzogMTMsXG4gICAgICAgICAgICBlc2M6IDI3LCBlc2NhcGU6IDI3LCBzcGFjZTogMzIsXG4gICAgICAgICAgICBsZWZ0OiAzNywgdXA6IDM4LFxuICAgICAgICAgICAgcmlnaHQ6IDM5LCBkb3duOiA0MCxcbiAgICAgICAgICAgIGRlbDogNDYsICdkZWxldGUnOiA0NixcbiAgICAgICAgICAgIGhvbWU6IDM2LCBlbmQ6IDM1LFxuICAgICAgICAgICAgcGFnZXVwOiAzMywgcGFnZWRvd246IDM0LFxuICAgICAgICAgICAgJywnOiAxODgsICcuJzogMTkwLCAnLyc6IDE5MSxcbiAgICAgICAgICAgICdgJzogMTkyLCAnLSc6IDE4OSwgJz0nOiAxODcsXG4gICAgICAgICAgICAnOyc6IDE4NiwgJ1xcJyc6IDIyMixcbiAgICAgICAgICAgICdbJzogMjE5LCAnXSc6IDIyMSwgJ1xcXFwnOiAyMjBcbiAgICAgICAgfSxcbiAgICAgICAgY29kZSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gX01BUFt4XSB8fCB4LnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgfSxcbiAgICAgICAgX2Rvd25LZXlzID0gW107XG5cbiAgICBmb3IgKGsgPSAxOyBrIDwgMjA7IGsrKykgX01BUFsnZicgKyBrXSA9IDExMSArIGs7XG5cbiAgICAvLyBJRSBkb2Vzbid0IHN1cHBvcnQgQXJyYXkjaW5kZXhPZiwgc28gaGF2ZSBhIHNpbXBsZSByZXBsYWNlbWVudFxuICAgIGZ1bmN0aW9uIGluZGV4KGFycmF5LCBpdGVtKSB7XG4gICAgICAgIHZhciBpID0gYXJyYXkubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaS0tKSBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLy8gZm9yIGNvbXBhcmluZyBtb2RzIGJlZm9yZSB1bmFzc2lnbm1lbnRcbiAgICBmdW5jdGlvbiBjb21wYXJlQXJyYXkoYTEsIGEyKSB7XG4gICAgICAgIGlmIChhMS5sZW5ndGggIT0gYTIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYTEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhMVtpXSAhPT0gYTJbaV0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgbW9kaWZpZXJNYXAgPSB7XG4gICAgICAgIDE2OiAnc2hpZnRLZXknLFxuICAgICAgICAxODogJ2FsdEtleScsXG4gICAgICAgIDE3OiAnY3RybEtleScsXG4gICAgICAgIDkxOiAnbWV0YUtleSdcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHVwZGF0ZU1vZGlmaWVyS2V5KGV2ZW50KSB7XG4gICAgICAgIGZvciAoayBpbiBfbW9kcykgX21vZHNba10gPSBldmVudFttb2RpZmllck1hcFtrXV07XG4gICAgfTtcblxuICAgIC8vIGhhbmRsZSBrZXlkb3duIGV2ZW50XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2goZXZlbnQpIHtcbiAgICAgICAgdmFyIGtleSwgaGFuZGxlciwgaywgaSwgbW9kaWZpZXJzTWF0Y2gsIHNjb3BlO1xuICAgICAgICBrZXkgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgICAgIGlmIChpbmRleChfZG93bktleXMsIGtleSkgPT0gLTEpIHtcbiAgICAgICAgICAgIF9kb3duS2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBhIG1vZGlmaWVyIGtleSwgc2V0IHRoZSBrZXkuPG1vZGlmaWVya2V5bmFtZT4gcHJvcGVydHkgdG8gdHJ1ZSBhbmQgcmV0dXJuXG4gICAgICAgIGlmIChrZXkgPT0gOTMgfHwga2V5ID09IDIyNCkga2V5ID0gOTE7IC8vIHJpZ2h0IGNvbW1hbmQgb24gd2Via2l0LCBjb21tYW5kIG9uIEdlY2tvXG4gICAgICAgIGlmIChrZXkgaW4gX21vZHMpIHtcbiAgICAgICAgICAgIF9tb2RzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgLy8gJ2Fzc2lnbktleScgZnJvbSBpbnNpZGUgdGhpcyBjbG9zdXJlIGlzIGV4cG9ydGVkIHRvIHdpbmRvdy5rZXlcbiAgICAgICAgICAgIGZvciAoayBpbiBfTU9ESUZJRVJTKSBpZiAoX01PRElGSUVSU1trXSA9PSBrZXkpIGFzc2lnbktleVtrXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlTW9kaWZpZXJLZXkoZXZlbnQpO1xuXG4gICAgICAgIC8vIHNlZSBpZiB3ZSBuZWVkIHRvIGlnbm9yZSB0aGUga2V5cHJlc3MgKGZpbHRlcigpIGNhbiBjYW4gYmUgb3ZlcnJpZGRlbilcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBpZ25vcmUga2V5IHByZXNzZXMgaWYgYSBzZWxlY3QsIHRleHRhcmVhLCBvciBpbnB1dCBpcyBmb2N1c2VkXG4gICAgICAgIGlmICghYXNzaWduS2V5LmZpbHRlci5jYWxsKHRoaXMsIGV2ZW50KSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIGFib3J0IGlmIG5vIHBvdGVudGlhbGx5IG1hdGNoaW5nIHNob3J0Y3V0cyBmb3VuZFxuICAgICAgICBpZiAoIShrZXkgaW4gX2hhbmRsZXJzKSkgcmV0dXJuO1xuXG4gICAgICAgIHNjb3BlID0gZ2V0U2NvcGUoKTtcblxuICAgICAgICAvLyBmb3IgZWFjaCBwb3RlbnRpYWwgc2hvcnRjdXRcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IF9oYW5kbGVyc1trZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYW5kbGVyID0gX2hhbmRsZXJzW2tleV1baV07XG5cbiAgICAgICAgICAgIC8vIHNlZSBpZiBpdCdzIGluIHRoZSBjdXJyZW50IHNjb3BlXG4gICAgICAgICAgICBpZiAoaGFuZGxlci5zY29wZSA9PSBzY29wZSB8fCBoYW5kbGVyLnNjb3BlID09ICdhbGwnKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgbW9kaWZpZXJzIG1hdGNoIGlmIGFueVxuICAgICAgICAgICAgICAgIG1vZGlmaWVyc01hdGNoID0gaGFuZGxlci5tb2RzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrIGluIF9tb2RzKVxuICAgICAgICAgICAgICAgICAgICBpZiAoKCFfbW9kc1trXSAmJiBpbmRleChoYW5kbGVyLm1vZHMsICtrKSA+IC0xKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKF9tb2RzW2tdICYmIGluZGV4KGhhbmRsZXIubW9kcywgK2spID09IC0xKSkgbW9kaWZpZXJzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBjYWxsIHRoZSBoYW5kbGVyIGFuZCBzdG9wIHRoZSBldmVudCBpZiBuZWNjZXNzYXJ5XG4gICAgICAgICAgICAgICAgaWYgKChoYW5kbGVyLm1vZHMubGVuZ3RoID09IDAgJiYgIV9tb2RzWzE2XSAmJiAhX21vZHNbMThdICYmICFfbW9kc1sxN10gJiYgIV9tb2RzWzkxXSkgfHwgbW9kaWZpZXJzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXIubWV0aG9kKGV2ZW50LCBoYW5kbGVyKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmNhbmNlbEJ1YmJsZSkgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB1bnNldCBtb2RpZmllciBrZXlzIG9uIGtleXVwXG4gICAgZnVuY3Rpb24gY2xlYXJNb2RpZmllcihldmVudCkge1xuICAgICAgICB2YXIga2V5ID0gZXZlbnQua2V5Q29kZSwgayxcbiAgICAgICAgICAgIGkgPSBpbmRleChfZG93bktleXMsIGtleSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGtleSBmcm9tIF9kb3duS2V5c1xuICAgICAgICBpZiAoaSA+PSAwKSB7XG4gICAgICAgICAgICBfZG93bktleXMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSA5MyB8fCBrZXkgPT0gMjI0KSBrZXkgPSA5MTtcbiAgICAgICAgaWYgKGtleSBpbiBfbW9kcykge1xuICAgICAgICAgICAgX21vZHNba2V5XSA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChrIGluIF9NT0RJRklFUlMpIGlmIChfTU9ESUZJRVJTW2tdID09IGtleSkgYXNzaWduS2V5W2tdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVzZXRNb2RpZmllcnMoKSB7XG4gICAgICAgIGZvciAoayBpbiBfbW9kcykgX21vZHNba10gPSBmYWxzZTtcbiAgICAgICAgZm9yIChrIGluIF9NT0RJRklFUlMpIGFzc2lnbktleVtrXSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICAvLyBwYXJzZSBhbmQgYXNzaWduIHNob3J0Y3V0XG4gICAgZnVuY3Rpb24gYXNzaWduS2V5KGtleSwgc2NvcGUsIG1ldGhvZCkge1xuICAgICAgICB2YXIga2V5cywgbW9kcztcbiAgICAgICAga2V5cyA9IGdldEtleXMoa2V5KTtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtZXRob2QgPSBzY29wZTtcbiAgICAgICAgICAgIHNjb3BlID0gJ2FsbCc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3IgZWFjaCBzaG9ydGN1dFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIHNldCBtb2RpZmllciBrZXlzIGlmIGFueVxuICAgICAgICAgICAgbW9kcyA9IFtdO1xuICAgICAgICAgICAga2V5ID0ga2V5c1tpXS5zcGxpdCgnKycpO1xuICAgICAgICAgICAgaWYgKGtleS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgbW9kcyA9IGdldE1vZHMoa2V5KTtcbiAgICAgICAgICAgICAgICBrZXkgPSBba2V5W2tleS5sZW5ndGggLSAxXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb252ZXJ0IHRvIGtleWNvZGUgYW5kLi4uXG4gICAgICAgICAgICBrZXkgPSBrZXlbMF1cbiAgICAgICAgICAgIGtleSA9IGNvZGUoa2V5KTtcbiAgICAgICAgICAgIC8vIC4uLnN0b3JlIGhhbmRsZXJcbiAgICAgICAgICAgIGlmICghKGtleSBpbiBfaGFuZGxlcnMpKSBfaGFuZGxlcnNba2V5XSA9IFtdO1xuICAgICAgICAgICAgX2hhbmRsZXJzW2tleV0ucHVzaCh7IHNob3J0Y3V0OiBrZXlzW2ldLCBzY29wZTogc2NvcGUsIG1ldGhvZDogbWV0aG9kLCBrZXk6IGtleXNbaV0sIG1vZHM6IG1vZHMgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gdW5iaW5kIGFsbCBoYW5kbGVycyBmb3IgZ2l2ZW4ga2V5IGluIGN1cnJlbnQgc2NvcGVcbiAgICBmdW5jdGlvbiB1bmJpbmRLZXkoa2V5LCBzY29wZSkge1xuICAgICAgICB2YXIgbXVsdGlwbGVLZXlzLCBrZXlzLFxuICAgICAgICAgICAgbW9kcyA9IFtdLFxuICAgICAgICAgICAgaSwgaiwgb2JqO1xuXG4gICAgICAgIG11bHRpcGxlS2V5cyA9IGdldEtleXMoa2V5KTtcblxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgbXVsdGlwbGVLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBrZXlzID0gbXVsdGlwbGVLZXlzW2pdLnNwbGl0KCcrJyk7XG5cbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBtb2RzID0gZ2V0TW9kcyhrZXlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5ID0ga2V5c1trZXlzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAga2V5ID0gY29kZShrZXkpO1xuXG4gICAgICAgICAgICBpZiAoc2NvcGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNjb3BlID0gZ2V0U2NvcGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghX2hhbmRsZXJzW2tleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX2hhbmRsZXJzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvYmogPSBfaGFuZGxlcnNba2V5XVtpXTtcbiAgICAgICAgICAgICAgICAvLyBvbmx5IGNsZWFyIGhhbmRsZXJzIGlmIGNvcnJlY3Qgc2NvcGUgYW5kIG1vZHMgbWF0Y2hcbiAgICAgICAgICAgICAgICBpZiAob2JqLnNjb3BlID09PSBzY29wZSAmJiBjb21wYXJlQXJyYXkob2JqLm1vZHMsIG1vZHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9oYW5kbGVyc1trZXldW2ldID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGUga2V5IHdpdGggY29kZSAna2V5Q29kZScgaXMgY3VycmVudGx5IGRvd25cbiAgICAvLyBDb252ZXJ0cyBzdHJpbmdzIGludG8ga2V5IGNvZGVzLlxuICAgIGZ1bmN0aW9uIGlzUHJlc3NlZChrZXlDb2RlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGtleUNvZGUpID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBrZXlDb2RlID0gY29kZShrZXlDb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXgoX2Rvd25LZXlzLCBrZXlDb2RlKSAhPSAtMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcmVzc2VkS2V5Q29kZXMoKSB7XG4gICAgICAgIHJldHVybiBfZG93bktleXMuc2xpY2UoMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YWdOYW1lID0gKGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50KS50YWdOYW1lO1xuICAgICAgICAvLyBpZ25vcmUga2V5cHJlc3NlZCBpbiBhbnkgZWxlbWVudHMgdGhhdCBzdXBwb3J0IGtleWJvYXJkIGRhdGEgaW5wdXRcbiAgICAgICAgcmV0dXJuICEodGFnTmFtZSA9PSAnSU5QVVQnIHx8IHRhZ05hbWUgPT0gJ1NFTEVDVCcgfHwgdGFnTmFtZSA9PSAnVEVYVEFSRUEnKTtcbiAgICB9XG5cbiAgICAvLyBpbml0aWFsaXplIGtleS48bW9kaWZpZXI+IHRvIGZhbHNlXG4gICAgZm9yIChrIGluIF9NT0RJRklFUlMpIGFzc2lnbktleVtrXSA9IGZhbHNlO1xuXG4gICAgLy8gc2V0IGN1cnJlbnQgc2NvcGUgKGRlZmF1bHQgJ2FsbCcpXG4gICAgZnVuY3Rpb24gc2V0U2NvcGUoc2NvcGUpIHsgX3Njb3BlID0gc2NvcGUgfHwgJ2FsbCcgfTtcbiAgICBmdW5jdGlvbiBnZXRTY29wZSgpIHsgcmV0dXJuIF9zY29wZSB8fCAnYWxsJyB9O1xuXG4gICAgLy8gZGVsZXRlIGFsbCBoYW5kbGVycyBmb3IgYSBnaXZlbiBzY29wZVxuICAgIGZ1bmN0aW9uIGRlbGV0ZVNjb3BlKHNjb3BlKSB7XG4gICAgICAgIHZhciBrZXksIGhhbmRsZXJzLCBpO1xuXG4gICAgICAgIGZvciAoa2V5IGluIF9oYW5kbGVycykge1xuICAgICAgICAgICAgaGFuZGxlcnMgPSBfaGFuZGxlcnNba2V5XTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJzW2ldLnNjb3BlID09PSBzY29wZSkgaGFuZGxlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGVsc2UgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGFic3RyYWN0IGtleSBsb2dpYyBmb3IgYXNzaWduIGFuZCB1bmFzc2lnblxuICAgIGZ1bmN0aW9uIGdldEtleXMoa2V5KSB7XG4gICAgICAgIHZhciBrZXlzO1xuICAgICAgICBrZXkgPSBrZXkucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAga2V5cyA9IGtleS5zcGxpdCgnLCcpO1xuICAgICAgICBpZiAoKGtleXNba2V5cy5sZW5ndGggLSAxXSkgPT0gJycpIHtcbiAgICAgICAgICAgIGtleXNba2V5cy5sZW5ndGggLSAyXSArPSAnLCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfVxuXG4gICAgLy8gYWJzdHJhY3QgbW9kcyBsb2dpYyBmb3IgYXNzaWduIGFuZCB1bmFzc2lnblxuICAgIGZ1bmN0aW9uIGdldE1vZHMoa2V5KSB7XG4gICAgICAgIHZhciBtb2RzID0ga2V5LnNsaWNlKDAsIGtleS5sZW5ndGggLSAxKTtcbiAgICAgICAgZm9yICh2YXIgbWkgPSAwOyBtaSA8IG1vZHMubGVuZ3RoOyBtaSsrKVxuICAgICAgICAgICAgbW9kc1ttaV0gPSBfTU9ESUZJRVJTW21vZHNbbWldXTtcbiAgICAgICAgcmV0dXJuIG1vZHM7XG4gICAgfVxuXG4gICAgLy8gY3Jvc3MtYnJvd3NlciBldmVudHNcbiAgICBmdW5jdGlvbiBhZGRFdmVudChvYmplY3QsIGV2ZW50LCBtZXRob2QpIHtcbiAgICAgICAgaWYgKG9iamVjdC5hZGRFdmVudExpc3RlbmVyKVxuICAgICAgICAgICAgb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG1ldGhvZCwgZmFsc2UpO1xuICAgICAgICBlbHNlIGlmIChvYmplY3QuYXR0YWNoRXZlbnQpXG4gICAgICAgICAgICBvYmplY3QuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBmdW5jdGlvbiAoKSB7IG1ldGhvZCh3aW5kb3cuZXZlbnQpIH0pO1xuICAgIH07XG5cbiAgICAvLyBzZXQgdGhlIGhhbmRsZXJzIGdsb2JhbGx5IG9uIGRvY3VtZW50XG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsICdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7IGRpc3BhdGNoKGV2ZW50KSB9KTsgLy8gUGFzc2luZyBfc2NvcGUgdG8gYSBjYWxsYmFjayB0byBlbnN1cmUgaXQgcmVtYWlucyB0aGUgc2FtZSBieSBleGVjdXRpb24uIEZpeGVzICM0OFxuICAgIGFkZEV2ZW50KGRvY3VtZW50LCAna2V5dXAnLCBjbGVhck1vZGlmaWVyKTtcblxuICAgIC8vIHJlc2V0IG1vZGlmaWVycyB0byBmYWxzZSB3aGVuZXZlciB0aGUgd2luZG93IGlzIChyZSlmb2N1c2VkLlxuICAgIGFkZEV2ZW50KHdpbmRvdywgJ2ZvY3VzJywgcmVzZXRNb2RpZmllcnMpO1xuXG4gICAgLy8gc3RvcmUgcHJldmlvdXNseSBkZWZpbmVkIGtleVxuICAgIHZhciBwcmV2aW91c0tleSA9IHdpbmRvdy5rZXk7XG5cbiAgICAvLyByZXN0b3JlIHByZXZpb3VzbHkgZGVmaW5lZCBrZXkgYW5kIHJldHVybiByZWZlcmVuY2UgdG8gb3VyIGtleSBvYmplY3RcbiAgICBmdW5jdGlvbiBub0NvbmZsaWN0KCkge1xuICAgICAgICB2YXIgayA9IHdpbmRvdy5rZXk7XG4gICAgICAgIHdpbmRvdy5rZXkgPSBwcmV2aW91c0tleTtcbiAgICAgICAgcmV0dXJuIGs7XG4gICAgfVxuXG4gICAgLy8gc2V0IHdpbmRvdy5rZXkgYW5kIHdpbmRvdy5rZXkuc2V0L2dldC9kZWxldGVTY29wZSwgYW5kIHRoZSBkZWZhdWx0IGZpbHRlclxuICAgIHdpbmRvdy5rZXkgPSBhc3NpZ25LZXk7XG4gICAgd2luZG93LmtleS5zZXRTY29wZSA9IHNldFNjb3BlO1xuICAgIHdpbmRvdy5rZXkuZ2V0U2NvcGUgPSBnZXRTY29wZTtcbiAgICB3aW5kb3cua2V5LmRlbGV0ZVNjb3BlID0gZGVsZXRlU2NvcGU7XG4gICAgd2luZG93LmtleS5maWx0ZXIgPSBmaWx0ZXI7XG4gICAgd2luZG93LmtleS5pc1ByZXNzZWQgPSBpc1ByZXNzZWQ7XG4gICAgd2luZG93LmtleS5nZXRQcmVzc2VkS2V5Q29kZXMgPSBnZXRQcmVzc2VkS2V5Q29kZXM7XG4gICAgd2luZG93LmtleS5ub0NvbmZsaWN0ID0gbm9Db25mbGljdDtcbiAgICB3aW5kb3cua2V5LnVuYmluZCA9IHVuYmluZEtleTtcblxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykgbW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25LZXk7XG5cbn0pKHRoaXMpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHNpemUud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgaXNPdmVybGFwcGluZ090aGVyUmVjdChyZWN0Q2xhc3MpIHtcbiAgICAgICAgY29uc3QgbXlCb3VuZHMgPSB0aGlzLmdldEJvdW5kcygpXG4gICAgICAgIGNvbnN0IHJlY3QgPSByZWN0Q2xhc3MuZ2V0Qm91bmRzKClcbiAgICAgICAgaWYgKG15Qm91bmRzLmxlZnQgPiByZWN0LnJpZ2h0IHx8IG15Qm91bmRzLnJpZ2h0IDwgcmVjdC5sZWZ0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG15Qm91bmRzLnRvcCA+IHJlY3QuYm90dG9tIHx8IG15Qm91bmRzLmJvdHRvbSA8IHJlY3QudG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHRcbiAgICAgICAgfTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9