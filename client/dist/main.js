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
            this.ball = new _ball2.default(this.dimensions, this.court, this.leftHoop, this.rightHoop);

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
            });
            this.justUpdatedRightScore = false;
            this.justUpdatedLeftScore = false;

            socket.on("updateLeftScore", function (data) {
                _this.leftHoop.score = data["leftScore"];
                _this.justUpdatedLeftScore = true;
            });
            socket.on("updateRightScore", function (data) {
                _this.rightHoop.score = data["rightScore"];
                _this.justUpdatedRightScore = true;
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

            var leftScore = this.leftHoop.score;
            var rightScore = this.leftHoop.score;
            this.leftHoop.animate(this.ctx);
            this.rightHoop.animate(this.ctx);

            this.updateOnlineScores(leftScore, rightScore);

            this.scoreboard.animate(this.ctx);
            this.court.animate(this.ctx);

            if (this.gameOver()) {
                this.displayWinner();
            }

            socket.emit("updateMyPos", {
                gameId: this.onlineGameId,
                fromSocket: socket.id,
                x: this.myPlayer.position.x,
                y: this.myPlayer.position.y
            });
            // REQUEST NEXT FRAME
            if (this.playingGame) requestAnimationFrame(this.runOnline.bind(this));
        }
    }, {
        key: 'updateOnlineScores',
        value: function updateOnlineScores(prevLeftScore, prevRightScore) {
            if (this.leftHoop.score !== prevLeftScore) {
                if (this.justUpdatedLeftScore) {
                    this.justUpdatedLeftScore = false;
                    return;
                }
                socket.emit("sendLeftScore", {
                    gameId: this.onlineGameId,
                    fromSocket: socket.id,
                    leftScore: this.leftHoop.score
                });
            }
            if (this.rightHoop.score !== prevRightScore) {
                if (this.justUpdatedRightScore) {
                    this.justUpdatedRightScore = false;
                    return;
                }
                socket.emit("sendRightScore", {
                    gameId: this.onlineGameId,
                    fromSocket: socket.id,
                    rightScore: this.rightHoop.score
                });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9jb3VydC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9ob29wLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvbWVudV9zY3JlZW5zL2NoYXJhY3Rlcl9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9tZW51X3NjcmVlbnMvbWFpbl9tZW51LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvb25saW5lX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllcjIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMva2V5bWFzdGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvcmVjdC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIk5CQUphbUdhbWUiLCJDT05TVEFOVFMiLCJSQURJVVMiLCJHUkFWSVRZIiwiQk9VTkNFX1JFVEVOVElPTiIsIkRSSUJCTEVfU1BFRUQiLCJCYWxsIiwiZGltZW5zaW9ucyIsImNvdXJ0IiwibGVmdEhvb3AiLCJyaWdodEhvb3AiLCJiYWxsIiwicG9zaXRpb24iLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwidmVsb2NpdHkiLCJjb2xvciIsInBvc3Nlc3Npb24iLCJub1RvdWNoIiwicG93ZXIiLCJjdHgiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwicmFkaXVzIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsInBsYXllciIsInNob290aW5nUGxheWVyIiwiZmFjaW5nUmlnaHQiLCJzaG9vdGluZ1RpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVsZWFzZUJhbGwiLCJzY29yZVBvc2l0aW9uIiwic2NvcmVIaXRib3giLCJoeXBvdCIsIm51bWJlck9mRnJhbWVzIiwidmVsb2NpdHlYIiwidmVsb2NpdHlZIiwiZGlmZiIsImFkanVzdGVkWCIsImZhbGwiLCJtb3ZlV2l0aFBsYXllclBvc3Nlc3Npb24iLCJjaGVja0JvdW5kcyIsImp1bXBpbmciLCJDaXJjbGUiLCJDT1VSVF9GTE9PUiIsIkNPVVJUX1dJRFRIIiwiQ291cnQiLCJmaWxsUmVjdCIsIlJlY3QiLCJnZXRDb250ZXh0IiwibWFpbk1lbnUiLCJNYWluTWVudSIsInN0YXJ0R2FtZSIsImJpbmQiLCJzdGFydE9ubGluZUdhbWUiLCJwbGF5aW5nR2FtZSIsInJlbmRlck1lbnUiLCJzZXR1cEtleUhhbmRsZXJzIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibGVmdFNwcml0ZSIsInJpZ2h0U3ByaXRlIiwicmVzdGFydCIsIm15U2lkZSIsImdhbWVJZCIsIm9ubGluZUdhbWVJZCIsInJ1bk9ubGluZUdhbWUiLCJIb29wIiwic2NvcmVib2FyZCIsIlNjb3JlYm9hcmQiLCJQbGF5ZXIiLCJwbGF5ZXIyIiwiUGxheWVyMiIsImFuaW1hdGUiLCJnYW1lT3ZlciIsImRpc3BsYXlXaW5uZXIiLCJteVBsYXllciIsIk9ubGluZVBsYXllciIsIm90aGVyUGxheWVyIiwic29ja2V0Iiwib24iLCJkYXRhIiwianVzdFVwZGF0ZWRSaWdodFNjb3JlIiwianVzdFVwZGF0ZWRMZWZ0U2NvcmUiLCJzY29yZSIsInJ1bk9ubGluZSIsImxlZnRTY29yZSIsInJpZ2h0U2NvcmUiLCJ1cGRhdGVPbmxpbmVTY29yZXMiLCJlbWl0IiwiZnJvbVNvY2tldCIsImlkIiwicHJldkxlZnRTY29yZSIsInByZXZSaWdodFNjb3JlIiwidGltZUxlZnQiLCJ0ZXh0IiwibG9jIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VUZXh0Iiwic2hvd01lbnUiLCJIT09QX1lfTVVMVElQTElFUiIsIkhPT1BfSEVJR0hUIiwiSE9PUF9XSURUSCIsIkhPT1BfWF9ESVNUQU5DRSIsIkJBQ0tCT0FSRF9XSURUSCIsIkJBQ0tCT0FSRF9IRUlHSFQiLCJob29wU2lkZSIsImJhY2tib2FyZCIsIkJhY2tib2FyZCIsIlNjb3JlSGl0Ym94IiwianVzdFNjb3JlZCIsImNoZWNrQmFsbENvbGxpc2lvbiIsImlzT3ZlcmxhcHBpbmdSZWN0IiwiaG9vcCIsIkNoYXJhY3RlclNlbGVjdCIsInNlbGVjdGVkQ2hhcmFjdGVycyIsImxlZnRTZWxlY3RlZCIsInJpZ2h0U2VsZWN0ZWQiLCJjaGFyYWN0ZXJzIiwibmFtZSIsInNyYyIsImxlZnRDaGFyIiwiSW1hZ2UiLCJyaWdodENoYXIiLCJsZWZ0UmVhZHkiLCJyaWdodFJlYWR5IiwibGVmdFBsYXllcklkIiwicmlnaHRQbGF5ZXJJZCIsImlzUGxheWluZ0xlZnQiLCJpc1BsYXlpbmdSaWdodCIsImtleSIsInVuYmluZCIsImxlZnRTaWRlQ2hhciIsIm9ubGluZU1vZGUiLCJkcmF3SW1hZ2UiLCJyaWdodFNpZGVDaGFyIiwibGVuZ3RoIiwic2VsZWN0ZWRPcHRpb24iLCJvcHRpb25zIiwiY2hhcmFjdGVyU2VsZWN0Iiwic2VsZWN0aW5nQ2hhcmFjdGVycyIsImxlZnRTcmMiLCJyaWdodFNyYyIsImZvckVhY2giLCJvcHRpb24iLCJpIiwibWVhc3VyZVRleHQiLCJhYnMiLCJzcHJpdGVTcmMiLCJzdGFydFNpZGUiLCJhY3RpdmUiLCJzcHJpdGUiLCJQTEFZRVJfV0lEVEgiLCJQTEFZRVJfSEVJR0hUIiwiTU9WRVNQRUVEIiwiSlVNUF9IRUlHSFQiLCJpc1ByZXNzZWQiLCJwcmVmb3JtQWN0aW9uIiwiY2hlY2tCYWxsIiwiaGFuZGxlR3Jhdml0eSIsInNob290IiwiY2xhaW1Qb3NzZXNzaW9uIiwiY291bnREb3duIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicmVjdCIsImRpc3RYIiwiZGlzdFkiLCJkeCIsImR5IiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiZ2xvYmFsIiwiayIsIl9oYW5kbGVycyIsIl9tb2RzIiwiX3Njb3BlIiwiX01PRElGSUVSUyIsInNoaWZ0IiwiYWx0IiwiY3RybCIsImNvbnRyb2wiLCJjb21tYW5kIiwiX01BUCIsImJhY2tzcGFjZSIsInRhYiIsImNsZWFyIiwiZW50ZXIiLCJlc2MiLCJlc2NhcGUiLCJzcGFjZSIsInVwIiwiZG93biIsImRlbCIsImhvbWUiLCJlbmQiLCJwYWdldXAiLCJwYWdlZG93biIsImNvZGUiLCJ0b1VwcGVyQ2FzZSIsImNoYXJDb2RlQXQiLCJfZG93bktleXMiLCJpbmRleCIsImFycmF5IiwiaXRlbSIsImNvbXBhcmVBcnJheSIsImExIiwiYTIiLCJtb2RpZmllck1hcCIsInVwZGF0ZU1vZGlmaWVyS2V5IiwiZXZlbnQiLCJkaXNwYXRjaCIsImhhbmRsZXIiLCJtb2RpZmllcnNNYXRjaCIsInNjb3BlIiwia2V5Q29kZSIsInB1c2giLCJhc3NpZ25LZXkiLCJmaWx0ZXIiLCJjYWxsIiwiZ2V0U2NvcGUiLCJtb2RzIiwibWV0aG9kIiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsInN0b3BQcm9wYWdhdGlvbiIsImNhbmNlbEJ1YmJsZSIsImNsZWFyTW9kaWZpZXIiLCJzcGxpY2UiLCJyZXNldE1vZGlmaWVycyIsImtleXMiLCJnZXRLZXlzIiwidW5kZWZpbmVkIiwic3BsaXQiLCJnZXRNb2RzIiwic2hvcnRjdXQiLCJ1bmJpbmRLZXkiLCJtdWx0aXBsZUtleXMiLCJqIiwib2JqIiwiZ2V0UHJlc3NlZEtleUNvZGVzIiwic2xpY2UiLCJ0YWdOYW1lIiwidGFyZ2V0Iiwic3JjRWxlbWVudCIsInNldFNjb3BlIiwiZGVsZXRlU2NvcGUiLCJoYW5kbGVycyIsInJlcGxhY2UiLCJtaSIsImFkZEV2ZW50Iiwib2JqZWN0IiwiYXR0YWNoRXZlbnQiLCJ3aW5kb3ciLCJwcmV2aW91c0tleSIsIm5vQ29uZmxpY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwic2l6ZSIsInJlY3RDbGFzcyIsIm15Qm91bmRzIiwiZ2V0Qm91bmRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7OztBQUVBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxRQUFNQyxTQUFTRixTQUFTRyxjQUFULENBQXdCLGNBQXhCLENBQWY7QUFDQSxRQUFJQyxjQUFKLENBQWVGLE1BQWY7QUFDSCxDQUhELEU7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R0FBa0IsS0FBS0MsS0FGM0I7QUFHSDBLLHFCQUFLLEtBQUs1SyxRQUFMLENBQWNHLENBSGhCO0FBSUgwSyx3QkFBUSxLQUFLN0ssUUFBTCxDQUFjRyxDQUFkLEdBQWtCLEtBQUtDO0FBSjVCLGFBQVA7QUFNSDs7Ozs7O2tCQXpCZ0J3QyxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NsaWVudC9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgTkJBSmFtR2FtZSBmcm9tICcuL2pzL2dhbWUuanMnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25iYS1qYW0tZ2FtZScpO1xuICAgIG5ldyBOQkFKYW1HYW1lKGNhbnZhcyk7XG59KTsiLCJpbXBvcnQgQ2lyY2xlIGZyb20gXCIuL3V0aWxzL2NpcmNsZVwiO1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgUkFESVVTOiAxNSxcbiAgICBHUkFWSVRZOiAwLjUsXG4gICAgQk9VTkNFX1JFVEVOVElPTjogMC42LFxuICAgIERSSUJCTEVfU1BFRUQ6IDMsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGwgZXh0ZW5kcyBDaXJjbGUge1xuICAgIGNvbnN0cnVjdG9yIChkaW1lbnNpb25zLCBjb3VydCwgbGVmdEhvb3AsIHJpZ2h0SG9vcCkge1xuICAgICAgICBzdXBlcihDT05TVEFOVFMuUkFESVVTKVxuICAgICAgICB0aGlzLmNvdXJ0ID0gY291cnRcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLmxlZnRIb29wID0gbGVmdEhvb3BcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSByaWdodEhvb3BcbiAgICAgICAgdGhpcy5sZWZ0SG9vcC5iYWxsID0gdGhpc1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcC5iYWxsID0gdGhpc1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNvdXJ0LndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwiaG90cGlua1wiXG4gICAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcbiAgICAgICAgdGhpcy5ub1RvdWNoID0ge31cbiAgICAgICAgdGhpcy5wb3dlciA9IDBcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLm1vdmUoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54LCBcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSwgXG4gICAgICAgICAgICB0aGlzLnJhZGl1cywgXG4gICAgICAgICAgICAwLCBcbiAgICAgICAgICAgIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgY2xhaW1Qb3NzZXNzaW9uKHBsYXllcikge1xuICAgICAgICBpZiAoIXRoaXMubm9Ub3VjaFtwbGF5ZXIuY29sb3JdKSB0aGlzLnBvc3Nlc3Npb24gPSBwbGF5ZXJcbiAgICB9XG5cblxuICAgIHNob290ICgpIHtcbiAgICAgICAgLy8gQkVUQSBTSE9PVElOR1xuXG4gICAgICAgIC8vIHRoaXMucG93ZXIgKz0gMVxuICAgICAgICAvLyBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICAvLyBpZiAodGhpcy5zaG9vdGluZ0ludGVydmFsICYmIHRoaXMucG93ZXIgPCA2MCkge1xuICAgICAgICAvLyAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2hvb3RpbmdJbnRlcnZhbClcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNob290aW5nSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IDYgOiAtNlxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IHRoaXMucG93ZXJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSB0cnVlICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IGZhbHNlXG4gICAgICAgIC8vICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgICAgICAvLyAgICAgfSwgMjApO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gQUlNQk9UIFNIT09USU5HXG5cbiAgICAgICAgLy8gY29uc3Qgc2hvb3RpbmdQbGF5ZXIgPSB0aGlzLnBvc3Nlc3Npb25cbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi54ID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgP1xuICAgICAgICAvLyAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggKyBzaG9vdGluZ1BsYXllci53aWR0aCArIHRoaXMucmFkaXVzKSA6XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzKVxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnkgPSBzaG9vdGluZ1BsYXllci5wb3NpdGlvbi55XG5cbiAgICAgICAgLy8gY29uc3Qgc2NvcmVQb3NpdGlvbiA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIHg6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgLy8gICAgICAgICB5OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICkgOiAoXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgeDogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgIC8vICAgICAgICAgeTogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gKVxuXG4gICAgICAgIC8vIGNvbnN0IG51bWJlck9mRnJhbWVzID0gNTBcblxuICAgICAgICAvLyBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgIC8vIGNvbnN0IHZlbG9jaXR5WSA9ICggKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpICkgLyBudW1iZXJPZkZyYW1lc1xuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgLy8gICAgIHg6IHZlbG9jaXR5WCxcbiAgICAgICAgLy8gICAgIHk6IHZlbG9jaXR5WVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWUgICAgICAgIFxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSBmYWxzZVxuICAgICAgICAvLyB9LCA1MDApO1xuXG4gICAgICAgIC8vIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcblxuICAgICAgICAvLyBQT1dFUkJBU0VEIEFJTUVEIFNIT09USU5HXG5cbiAgICAgICAgdGhpcy5wb3dlciArPSAxXG5cbiAgICAgICAgY29uc3Qgc2hvb3RpbmdQbGF5ZXIgPSB0aGlzLnBvc3Nlc3Npb25cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgP1xuICAgICAgICAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggKyBzaG9vdGluZ1BsYXllci53aWR0aCArIHRoaXMucmFkaXVzKSA6XG4gICAgICAgICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzKVxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBzaG9vdGluZ1BsYXllci5wb3NpdGlvbi55XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvb3RpbmdUaW1lb3V0ICYmIHRoaXMucG93ZXIgPCA2MCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2hvb3RpbmdUaW1lb3V0KVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvd2VyIDwgNjApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvb3RpbmdUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxlYXNlQmFsbCgpXG4gICAgICAgICAgICB9LCAyMCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlbGVhc2VCYWxsICgpIHtcbiAgICAgICAgY29uc3Qgc2hvb3RpbmdQbGF5ZXIgPSB0aGlzLnBvc3Nlc3Npb25cblxuICAgICAgICBjb25zdCBzY29yZVBvc2l0aW9uID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgPyAoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueCArICh0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC53aWR0aCAvIDIpLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmxlZnRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmxlZnRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuXG4gICAgICAgIC8vIExBWVVQXG4gICAgICAgIGlmICgxNTAgPiBNYXRoLmh5cG90KHRoaXMucG9zaXRpb24ueCAtIHNjb3JlUG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55IC0gc2NvcmVQb3NpdGlvbi55KSkge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSAzMFxuICAgICAgICAgICAgY29uc3QgdmVsb2NpdHlYID0gKHNjb3JlUG9zaXRpb24ueCAtIHRoaXMucG9zaXRpb24ueCkgLyBudW1iZXJPZkZyYW1lc1xuICAgICAgICAgICAgY29uc3QgdmVsb2NpdHlZID0gKCgtc2NvcmVQb3NpdGlvbi55ICsgdGhpcy5wb3NpdGlvbi55KSAtIDAuNSAqIC1DT05TVEFOVFMuR1JBVklUWSAqIChudW1iZXJPZkZyYW1lcyAqIG51bWJlck9mRnJhbWVzKSkgLyBudW1iZXJPZkZyYW1lc1xuXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gKHRoaXMucG93ZXIgLSAzMCkgLyAxMDBcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkWCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCArIGRpZmZcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYIC0gZGlmZlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgICAgICB4OiBhZGp1c3RlZFgsXG4gICAgICAgICAgICAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTSE9UXG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IDUwXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WCA9IChzY29yZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WSA9ICgoLXNjb3JlUG9zaXRpb24ueSArIHRoaXMucG9zaXRpb24ueSkgLSAwLjUgKiAtQ09OU1RBTlRTLkdSQVZJVFkgKiAobnVtYmVyT2ZGcmFtZXMgKiBudW1iZXJPZkZyYW1lcykpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAodGhpcy5wb3dlciAtIDMwKSAvIDEwXG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZFggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eVggKyBkaWZmXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCAtIGRpZmZcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICAgICAgeDogYWRqdXN0ZWRYLFxuICAgICAgICAgICAgICAgIHk6IHZlbG9jaXR5WVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWVcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gZmFsc2VcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG5cbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5wb3NzZXNzaW9uKSB7XG4gICAgICAgICAgICB0aGlzLmZhbGwoKVxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbigpIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG4gICAgbW92ZVdpdGhQbGF5ZXJQb3NzZXNzaW9uKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnBvc3Nlc3Npb24uZmFjaW5nUmlnaHQgP1xuICAgICAgICAgICAgKHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi54ICsgdGhpcy5wb3NzZXNzaW9uLndpZHRoKSA6ICh0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueClcblxuICAgICAgICBpZiAodGhpcy5wb3NzZXNzaW9uLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIC8vIEhPTEQgQkFMTFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLnkgKyB0aGlzLnBvc3Nlc3Npb24uaGVpZ2h0IC8gMlxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEUklCQkxJTkdcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPCB0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueSArIHRoaXMucG9zc2Vzc2lvbi5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLUNPTlNUQU5UUy5EUklCQkxFX1NQRUVEXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+IHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi55ICsgdGhpcy5wb3NzZXNzaW9uLmhlaWdodCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkRSSUJCTEVfU1BFRURcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5LnlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZmFsbCAoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgICAgIC8vIEdSQVZJVFlcbiAgICAgICAgLy8gaWYgdGhlIHBvcyBpcyBncmVhdGVyIHRoYW4gdGhlIGZsb29yXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnJhZGl1cyA8IHRoaXMuY291cnQucG9zaXRpb24ueSkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IENPTlNUQU5UUy5HUkFWSVRZO1xuICAgICAgICAgICAgLy8gZWxzZSBzZXQgdGhlIHJldmVyc2UgdmVsb2NpdHlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZlbG9jaXR5LnkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy52ZWxvY2l0eS55ICogQ09OU1RBTlRTLkJPVU5DRV9SRVRFTlRJT05cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2hlY2tCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY291cnQud2lkdGggLSB0aGlzLnJhZGl1c1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDBcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5LnhcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCBSZWN0IGZyb20gXCIuL3V0aWxzL3JlY3RcIjtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIENPVVJUX0ZMT09SOiAwLjg1LFxuICAgIENPVVJUX1dJRFRIOiA1XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VydCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogZGltZW5zaW9ucy53aWR0aCwgaGVpZ2h0OiBDT05TVEFOVFMuQ09VUlRfV0lEVEggfSlcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAqIENPTlNUQU5UUy5DT1VSVF9GTE9PUlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImdyZWVuXCJcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcidcbmltcG9ydCBDb3VydCBmcm9tICcuL2NvdXJ0JztcbmltcG9ydCBIb29wIGZyb20gJy4vaG9vcCc7XG5pbXBvcnQgQmFsbCBmcm9tICcuL2JhbGwnO1xuaW1wb3J0IFNjb3JlYm9hcmQgZnJvbSAnLi9zY29yZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIyIGZyb20gJy4vcGxheWVyMic7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9tZW51X3NjcmVlbnMvbWFpbl9tZW51JztcbmltcG9ydCBPbmxpbmVQbGF5ZXIgZnJvbSAnLi9vbmxpbmVfcGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTkJBSmFtR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLm1haW5NZW51ID0gbmV3IE1haW5NZW51KHRoaXMuZGltZW5zaW9ucywgdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKSwgdGhpcy5zdGFydE9ubGluZUdhbWUuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlck1lbnUoKVxuICAgIH1cblxuICAgIHNob3dNZW51KCkge1xuICAgICAgICB0aGlzLm1haW5NZW51LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICB0aGlzLnJlbmRlck1lbnUodGhpcy5jdHgpXG4gICAgfVxuXG4gICAgcmVuZGVyTWVudSAoKSB7XG4gICAgICAgIHRoaXMubWFpbk1lbnUucmVuZGVyKHRoaXMuY3R4KVxuICAgICAgICBpZiAoIXRoaXMucGxheWluZ0dhbWUpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlck1lbnUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lIChsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSkge1xuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gdHJ1ZVxuICAgICAgICB0aGlzLnJlc3RhcnQobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUpXG4gICAgfVxuXG4gICAgc3RhcnRPbmxpbmVHYW1lKGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlLCBteVNpZGUsIGdhbWVJZCkge1xuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gdHJ1ZVxuICAgICAgICB0aGlzLm9ubGluZUdhbWVJZCA9IGdhbWVJZFxuICAgICAgICB0aGlzLnJ1bk9ubGluZUdhbWUobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUsIG15U2lkZSlcbiAgICB9XG5cbiAgICByZXN0YXJ0KGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlKSB7XG4gICAgICAgIC8vIFNUQVJUIEFOSU1BVElPTiBTWUNMRVxuICAgICAgICB0aGlzLmNvdXJ0ID0gbmV3IENvdXJ0KHRoaXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiTEVGVFwiKTtcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiUklHSFRcIik7XG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKHRoaXMuZGltZW5zaW9ucywgdGhpcy5jb3VydCwgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3ApXG5cbiAgICAgICAgdGhpcy5zY29yZWJvYXJkID0gbmV3IFNjb3JlYm9hcmQodGhpcy5kaW1lbnNpb25zLCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcClcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCByaWdodFNwcml0ZSk7XG4gICAgICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgbGVmdFNwcml0ZSk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuICAgIFxuICAgIGFuaW1hdGUoKSB7ICAgICAgICBcbiAgICAgICAgLy8gQ1JFQVRFUyBCQUNLR1JPVU5EXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICAvLyBBTklNQVRFIE9CSkVDVFNcbiAgICAgICAgdGhpcy5wbGF5ZXIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMuYmFsbC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmxlZnRIb29wLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMucmlnaHRIb29wLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNjb3JlYm9hcmQuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5jb3VydC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5V2lubmVyKClcbiAgICAgICAgfVxuICAgICAgICAvLyBSRVFVRVNUIE5FWFQgRlJBTUVcbiAgICAgICAgaWYgKHRoaXMucGxheWluZ0dhbWUpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcnVuT25saW5lR2FtZShsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSwgbXlTaWRlKSB7XG4gICAgICAgIHRoaXMuY291cnQgPSBuZXcgQ291cnQodGhpcy5kaW1lbnNpb25zKTtcbiAgICAgICAgdGhpcy5sZWZ0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJMRUZUXCIpO1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJSSUdIVFwiKTtcbiAgICAgICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5kaW1lbnNpb25zLCB0aGlzLmNvdXJ0LCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcClcblxuICAgICAgICB0aGlzLnNjb3JlYm9hcmQgPSBuZXcgU2NvcmVib2FyZCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMubGVmdEhvb3AsIHRoaXMucmlnaHRIb29wKVxuXG4gICAgICAgIGlmIChteVNpZGUgPT09IFwiTEVGVFwiKSB7XG4gICAgICAgICAgICB0aGlzLm15UGxheWVyID0gbmV3IE9ubGluZVBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIGxlZnRTcHJpdGUsIFwiTEVGVFwiLCB0cnVlKVxuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllciA9IG5ldyBPbmxpbmVQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCByaWdodFNwcml0ZSwgXCJSSUdIVFwiLCBmYWxzZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIgPSBuZXcgT25saW5lUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgbGVmdFNwcml0ZSwgXCJMRUZUXCIsIGZhbHNlKVxuICAgICAgICAgICAgdGhpcy5teVBsYXllciA9IG5ldyBPbmxpbmVQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCByaWdodFNwcml0ZSwgXCJSSUdIVFwiLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlT3RoZXJQb3NcIiwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIucG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgeDogZGF0YVtcInhcIl0sXG4gICAgICAgICAgICAgICAgeTogZGF0YVtcInlcIl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgXG4gICAgICAgIHRoaXMuanVzdFVwZGF0ZWRSaWdodFNjb3JlID0gZmFsc2VcbiAgICAgICAgdGhpcy5qdXN0VXBkYXRlZExlZnRTY29yZSA9IGZhbHNlXG5cblxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVMZWZ0U2NvcmVcIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRIb29wLnNjb3JlID0gZGF0YVtcImxlZnRTY29yZVwiXVxuICAgICAgICAgICAgdGhpcy5qdXN0VXBkYXRlZExlZnRTY29yZSA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlUmlnaHRTY29yZVwiLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRIb29wLnNjb3JlID0gZGF0YVtcInJpZ2h0U2NvcmVcIl1cbiAgICAgICAgICAgIHRoaXMuanVzdFVwZGF0ZWRSaWdodFNjb3JlID0gdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMucnVuT25saW5lKCk7XG4gICAgfVxuXG4gICAgcnVuT25saW5lICgpIHtcbiAgICAgICAgLy8gQ1JFQVRFUyBCQUNLR1JPVU5EXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG5cbiAgICAgICAgLy8gQU5JTUFURSBPQkpFQ1RTXG4gICAgICAgIHRoaXMub3RoZXJQbGF5ZXIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5teVBsYXllci5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5iYWxsLmFuaW1hdGUodGhpcy5jdHgpXG5cbiAgICAgICAgY29uc3QgbGVmdFNjb3JlID0gdGhpcy5sZWZ0SG9vcC5zY29yZVxuICAgICAgICBjb25zdCByaWdodFNjb3JlID0gdGhpcy5sZWZ0SG9vcC5zY29yZVxuICAgICAgICB0aGlzLmxlZnRIb29wLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMucmlnaHRIb29wLmFuaW1hdGUodGhpcy5jdHgpXG5cbiAgICAgICAgdGhpcy51cGRhdGVPbmxpbmVTY29yZXMobGVmdFNjb3JlLCByaWdodFNjb3JlKVxuXG5cbiAgICAgICAgdGhpcy5zY29yZWJvYXJkLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMuY291cnQuYW5pbWF0ZSh0aGlzLmN0eClcblxuICAgICAgICBpZiAodGhpcy5nYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlXaW5uZXIoKVxuICAgICAgICB9XG5cblxuICAgICAgICBzb2NrZXQuZW1pdChcInVwZGF0ZU15UG9zXCIsIHtcbiAgICAgICAgICAgIGdhbWVJZDogdGhpcy5vbmxpbmVHYW1lSWQsXG4gICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgICAgICB4OiB0aGlzLm15UGxheWVyLnBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiB0aGlzLm15UGxheWVyLnBvc2l0aW9uLnlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gUkVRVUVTVCBORVhUIEZSQU1FXG4gICAgICAgIGlmICh0aGlzLnBsYXlpbmdHYW1lKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ydW5PbmxpbmUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlT25saW5lU2NvcmVzKHByZXZMZWZ0U2NvcmUsIHByZXZSaWdodFNjb3JlKSB7XG4gICAgICAgIGlmICh0aGlzLmxlZnRIb29wLnNjb3JlICE9PSBwcmV2TGVmdFNjb3JlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5qdXN0VXBkYXRlZExlZnRTY29yZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuanVzdFVwZGF0ZWRMZWZ0U2NvcmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJzZW5kTGVmdFNjb3JlXCIsIHtcbiAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMub25saW5lR2FtZUlkLFxuICAgICAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgICAgICBsZWZ0U2NvcmU6IHRoaXMubGVmdEhvb3Auc2NvcmVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmlnaHRIb29wLnNjb3JlICE9PSBwcmV2UmlnaHRTY29yZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuanVzdFVwZGF0ZWRSaWdodFNjb3JlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdXN0VXBkYXRlZFJpZ2h0U2NvcmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJzZW5kUmlnaHRTY29yZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLm9ubGluZUdhbWVJZCxcbiAgICAgICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgICAgICAgICAgcmlnaHRTY29yZTogdGhpcy5yaWdodEhvb3Auc2NvcmVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGdhbWVPdmVyICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmVib2FyZC50aW1lTGVmdCA9PT0gMFxuICAgIH1cblxuICAgIGRpc3BsYXlXaW5uZXIgKCkge1xuICAgICAgICBsZXQgdGV4dDtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRIb29wLnNjb3JlID4gdGhpcy5sZWZ0SG9vcC5zY29yZSkge1xuICAgICAgICAgICAgdGV4dCA9IFwiUGxheWVyIDEgd2luc1wiXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0SG9vcC5zY29yZSA+IHRoaXMucmlnaHRIb29wLnNjb3JlKSB7XG4gICAgICAgICAgICB0ZXh0ID0gXCJQbGF5ZXIgMiB3aW5zXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQgPSBcIlRpZSBHYW1lXCJcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiB9XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke3RleHR9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoYCR7dGV4dH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVudSgpXG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxufSIsImltcG9ydCBSZWN0IGZyb20gJy4vdXRpbHMvcmVjdCdcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEhPT1BfWV9NVUxUSVBMSUVSOiAwLjMsXG4gICAgSE9PUF9IRUlHSFQ6IDQwLFxuICAgIEhPT1BfV0lEVEg6IDUwLFxuICAgIEhPT1BfWF9ESVNUQU5DRTogNTAsXG4gICAgQkFDS0JPQVJEX1dJRFRIOiAxNSxcbiAgICBCQUNLQk9BUkRfSEVJR0hUOiA1MCxcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb29wIGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgaG9vcFNpZGUsIGJhbGwpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLkhPT1BfV0lEVEgsIGhlaWdodDogQ09OU1RBTlRTLkhPT1BfSEVJR0hUIH0pXG4gICAgICAgIHRoaXMuYmFsbCA9IGJhbGxcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICBjb25zdCB4ID0gaG9vcFNpZGUgPT09IFwiTEVGVFwiID8gKFxuICAgICAgICAgICAgICAgIDAgKyBDT05TVEFOVFMuSE9PUF9YX0RJU1RBTkNFXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMud2lkdGggLSBDT05TVEFOVFMuSE9PUF9YX0RJU1RBTkNFIC0gdGhpcy53aWR0aFxuICAgICAgICAgICAgKVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCwgXG4gICAgICAgICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAqIENPTlNUQU5UUy5IT09QX1lfTVVMVElQTElFUlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFja2JvYXJkID0gbmV3IEJhY2tib2FyZCh0aGlzLCBob29wU2lkZSlcbiAgICAgICAgdGhpcy5zY29yZUhpdGJveCA9IG5ldyBTY29yZUhpdGJveCh0aGlzLCBob29wU2lkZSlcbiAgICAgICAgdGhpcy5jb2xvciA9IFwicHVycGxlXCJcbiAgICAgICAgdGhpcy5zY29yZSA9IDBcbiAgICAgICAgdGhpcy5qdXN0U2NvcmVkID0gZmFsc2VcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmNoZWNrQmFsbENvbGxpc2lvbigpXG4gICAgICAgIHRoaXMuYmFja2JvYXJkLmFuaW1hdGUoY3R4KVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuc2NvcmVIaXRib3guYW5pbWF0ZShjdHgpXG4gICAgICAgIGlmICh0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcy5zY29yZUhpdGJveCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5qdXN0U2NvcmVkKSB0aGlzLnNjb3JlICs9IDJcbiAgICAgICAgICAgIHRoaXMuanVzdFNjb3JlZCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcImdyZWVuXCJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuanVzdFNjb3JlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9IFwicHVycGxlXCJcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0JhbGxDb2xsaXNpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMpIHx8IHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzLmJhY2tib2FyZCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJhbGwucG9zaXRpb24ueSAtIHRoaXMuYmFsbC5yYWRpdXMgPiB0aGlzLnBvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYWxsLnZlbG9jaXR5LnkgPiAwKSB0aGlzLmJhbGwudmVsb2NpdHkueSA9IC10aGlzLmJhbGwudmVsb2NpdHkueVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYWxsLnBvc2l0aW9uLnkgKyB0aGlzLmJhbGwucmFkaXVzIDwgdGhpcy5iYWNrYm9hcmQucG9zaXRpb24ueSAmJiB0aGlzLmJhbGwudmVsb2NpdHkueSA8IDApICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsbC52ZWxvY2l0eS55ID0gLXRoaXMuYmFsbC52ZWxvY2l0eS55XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbC52ZWxvY2l0eS54ID0gLXRoaXMuYmFsbC52ZWxvY2l0eS54XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY2xhc3MgU2NvcmVIaXRib3ggZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihob29wLCBob29wU2lkZSkge1xuICAgICAgICBzdXBlcih7IHdpZHRoOiBDT05TVEFOVFMuSE9PUF9XSURUSCAtIDMwLCBoZWlnaHQ6IENPTlNUQU5UUy5IT09QX0hFSUdIVCAqIDAuMDUgfSlcbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCArIDE1XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICBob29wLnBvc2l0aW9uLnggKyBob29wLndpZHRoIC0gdGhpcy53aWR0aCAtIDE1XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiBob29wLnBvc2l0aW9uLnlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJ3aGl0ZVwiXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn1cblxuY2xhc3MgQmFja2JvYXJkIGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoaG9vcCwgaG9vcFNpZGUpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLkJBQ0tCT0FSRF9XSURUSCwgaGVpZ2h0OiBDT05TVEFOVFMuQkFDS0JPQVJEX0hFSUdIVCB9KVxuICAgICAgICBjb25zdCB4ID0gaG9vcFNpZGUgPT09IFwiTEVGVFwiID8gKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54IFxuICAgICAgICApIDogKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54ICsgaG9vcC53aWR0aCAtIHRoaXMud2lkdGhcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IGhvb3AucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwiYXF1YVwiXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn0iLCJpbXBvcnQga2V5IGZyb20gJy4uL3V0aWxzL2tleW1hc3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlclNlbGVjdCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgc2VsZWN0ZWRDaGFyYWN0ZXJzKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoYXJhY3RlcnMgPSBzZWxlY3RlZENoYXJhY3RlcnNcbiAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAwXG4gICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9IDFcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiBcIlJvZG1hblwiLCBzcmM6IFwic3JjL2Fzc2V0cy9yb2RtYW5TbWFsbC5wbmdcIn0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiRHJha2VcIiwgc3JjOiBcInNyYy9hc3NldHMvZHJha2VTbWFsbC5wbmdcIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkxlYnJvblwiLCBzcmM6IFwic3JjL2Fzc2V0cy9sZWJyb25TbWFsbC5wbmdcIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIlBlYWNoXCIsIHNyYzogXCJzcmMvYXNzZXRzL3BlYWNoU21hbGwucG5nXCJ9XG4gICAgICAgIF1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubGVmdENoYXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5yaWdodENoYXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5sZWZ0Q2hhci5zcmMgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdLnNyY1xuICAgICAgICB0aGlzLnJpZ2h0Q2hhci5zcmMgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmNcblxuICAgICAgICB0aGlzLmxlZnRSZWFkeSA9IGZhbHNlXG4gICAgICAgIHRoaXMucmlnaHRSZWFkeSA9IGZhbHNlXG5cbiAgICAgICAgc29ja2V0Lm9uKFwibWF0Y2hGb3VuZFwiLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMubGVmdFBsYXllcklkID0gZGF0YVtcImxlZnRQbGF5ZXJJZFwiXVxuICAgICAgICAgICAgdGhpcy5yaWdodFBsYXllcklkID0gZGF0YVtcInJpZ2h0UGxheWVySWRcIl1cbiAgICAgICAgICAgIGlmIChzb2NrZXQuaWQgPT09IHRoaXMubGVmdFBsYXllcklkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdMZWZ0ID0gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxheWluZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAwXG4gICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAxXG4gICAgICAgICAgICB0aGlzLmdhbWVJZCA9IGRhdGFbXCJnYW1lSWRcIl1cbiAgICAgICAgfSlcblxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVkU2VsZWN0ZWRDaGFyc1wiLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gZGF0YVtcImxlZnRTZWxlY3RlZFwiXVxuICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gZGF0YVtcInJpZ2h0U2VsZWN0ZWRcIl1cbiAgICAgICAgfSlcblxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVkTGVmdFJlYWR5XCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGVmdFJlYWR5ID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVkUmlnaHRSZWFkeVwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0UmVhZHkgPSB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgc29ja2V0Lm9uKFwic3RhcnRHYW1lXCIsICgpID0+IHtcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ2Rvd24nKVxuICAgICAgICAgICAga2V5LnVuYmluZCgndXAnKVxuICAgICAgICAgICAga2V5LnVuYmluZCgndycpXG4gICAgICAgICAgICBrZXkudW5iaW5kKCdzJylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ2VudGVyJylcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzKHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjLCB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmMsIHRoaXMuZ2FtZUlkKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcihjdHgpIHtcblxuICAgICAgICB0aGlzLmxlZnRDaGFyLnNyYyA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjXG4gICAgICAgIHRoaXMucmlnaHRDaGFyLnNyYyA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdLnNyY1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInB1cnBsZVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBMRUZUIFNJREVcbiAgICAgICAgY29uc3QgbGVmdFNpZGVDaGFyID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXVxuICAgICAgICBsZXQgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyA0LCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMn1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblxuICAgICAgICBpZiAodGhpcy5vbmxpbmVNb2RlKSBjdHguZmlsbFRleHQoXCJPbmxpbmUgTW9kZVwiLCBsb2MueCwgbG9jLnkgLSAxMDApXG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDEycHQgc2VyaWZcIjtcbiAgICAgICAgaWYgKHRoaXMubGVmdFJlYWR5KSBjdHguZmlsbFRleHQoXCJSZWFkeVwiLCBsb2MueCwgbG9jLnkgLSA3MClcbiAgICAgICAgaWYgKHRoaXMubGVmdFBsYXllcklkICYmIHRoaXMucmlnaHRQbGF5ZXJJZCkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke3RoaXMubGVmdFBsYXllcklkfWAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub25saW5lTW9kZSkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke3NvY2tldC5pZH1gLCBsb2MueCwgbG9jLnkgLSA1MClcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGAke2xlZnRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGAke2xlZnRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5sZWZ0Q2hhcixcbiAgICAgICAgICAgIGxvYy54IC0gdGhpcy5sZWZ0Q2hhci53aWR0aCAvIDIsXG4gICAgICAgICAgICBsb2MueSlcblxuICAgICAgICAvLyBSSUdIVCBTSURFXG4gICAgICAgIGNvbnN0IHJpZ2h0U2lkZUNoYXIgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXVxuICAgICAgICBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAqIDMgLyA0LCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5cbiAgICAgICAgaWYgKHRoaXMub25saW5lTW9kZSkgY3R4LmZpbGxUZXh0KFwiT25saW5lIE1vZGVcIiwgbG9jLngsIGxvYy55IC0gMTAwKVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCAxMnB0IHNlcmlmXCI7XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0UmVhZHkpIGN0eC5maWxsVGV4dChcIlJlYWR5XCIsIGxvYy54LCBsb2MueSAtIDcwKVxuICAgICAgICBpZiAodGhpcy5sZWZ0UGxheWVySWQgJiYgdGhpcy5yaWdodFBsYXllcklkKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy5yaWdodFBsYXllcklkfWAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub25saW5lTW9kZSkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGBXYWl0aW5nIGZvciBQbGF5ZXJgLCBsb2MueCwgbG9jLnkgLSA1MClcbiAgICAgICAgfVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG5cbiAgICAgICAgY3R4LmZpbGxUZXh0KGAke3JpZ2h0U2lkZUNoYXIubmFtZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHtyaWdodFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnJpZ2h0Q2hhcixcbiAgICAgICAgICAgIGxvYy54IC0gdGhpcy5yaWdodENoYXIud2lkdGggLyAyLFxuICAgICAgICAgICAgbG9jLnkpXG4gXG4gICAgfVxuXG4gICAgc2V0dXBLZXlIYW5kbGVycygpIHtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICAgICAga2V5KCdkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAodGhpcy5yaWdodFNlbGVjdGVkICsgMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ3VwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAodGhpcy5yaWdodFNlbGVjdGVkIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmlnaHRTZWxlY3RlZCA9PT0gLTEpIHRoaXMucmlnaHRTZWxlY3RlZCA9IHRoaXMuY2hhcmFjdGVycy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ3cnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkICsgMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ3MnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkIC0gMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlZnRTZWxlY3RlZCA9PT0gLTEpIHRoaXMubGVmdFNlbGVjdGVkID0gdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aCAtIDFcbiAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgnZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2Rvd24nKVxuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCd1cCcpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3cnKVxuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdzJylcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZW50ZXInKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVycyh0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdLnNyYywgdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAga2V5KCd1cCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFNlbGVjdGVkOiB0aGlzLmxlZnRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQbGF5aW5nUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmlnaHRTZWxlY3RlZCA9PT0gLTEpIHRoaXMucmlnaHRTZWxlY3RlZCA9IHRoaXMuY2hhcmFjdGVycy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnY2hhckNoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmdMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9ICh0aGlzLmxlZnRTZWxlY3RlZCAtIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdFNlbGVjdGVkID09PSAtMSkgdGhpcy5sZWZ0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0U2VsZWN0ZWQ6IHRoaXMucmlnaHRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1BsYXlpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gKHRoaXMucmlnaHRTZWxlY3RlZCArIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0U2VsZWN0ZWQ6IHRoaXMucmlnaHRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAga2V5KCdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2xlZnRSZWFkeScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQbGF5aW5nUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdyaWdodFJlYWR5Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cblxuXG5cbn0iLCJpbXBvcnQga2V5IGZyb20gJy4uL3V0aWxzL2tleW1hc3Rlcic7XG5pbXBvcnQgQ2hhcmFjdGVyU2VsZWN0IGZyb20gJy4vY2hhcmFjdGVyX3NlbGVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IHtcbiAgICBjb25zdHJ1Y3RvciAoZGltZW5zaW9ucywgc3RhcnRHYW1lLCBzdGFydE9ubGluZUdhbWUpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSA9IHN0YXJ0R2FtZVxuICAgICAgICB0aGlzLnN0YXJ0T25saW5lR2FtZSA9IHN0YXJ0T25saW5lR2FtZVxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gMFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXCJTdGFydCBHYW1lXCIsIFwiT25saW5lXCJdXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0ID0gbmV3IENoYXJhY3RlclNlbGVjdCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2V0dXBLZXlIYW5kbGVycygpXG4gICAgfVxuXG4gICAgc2VsZWN0ZWRDaGFyYWN0ZXJzIChsZWZ0U3JjLCByaWdodFNyYywgZ2FtZUlkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlclNlbGVjdC5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBteVNpZGUgPSB0aGlzLmNoYXJhY3RlclNlbGVjdC5pc1BsYXlpbmdMZWZ0ID8gXCJMRUZUXCIgOiBcIlJJR0hUXCJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRPbmxpbmVHYW1lKGxlZnRTcmMsIHJpZ2h0U3JjLCBteVNpZGUsIGdhbWVJZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKGxlZnRTcmMsIHJpZ2h0U3JjKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgcmVuZGVyIChjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicHVycGxlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24sIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAoKHRoaXMub3B0aW9ucy5sZW5ndGggKyAxKSAtIGkpIH1cbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KGAke29wdGlvbn1gKS53aWR0aFxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT09IGkpIGN0eC5maWxsUmVjdCgobG9jLnggLSB3aWR0aCAvIDIpIC0gNSwgbG9jLnkgLSA0MCwgd2lkdGggKyAxMCwgNTApO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChgJHtvcHRpb259YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVRleHQoYCR7b3B0aW9ufWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycykge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3QucmVuZGVyKGN0eClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldHVwS2V5SGFuZGxlcnMoKSB7XG4gICAgICAgIGtleSgnZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSAodGhpcy5zZWxlY3RlZE9wdGlvbiArIDEpICUgdGhpcy5vcHRpb25zLmxlbmd0aFxuICAgICAgICB9KVxuICAgICAgICBrZXkoJ3VwJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IE1hdGguYWJzKCh0aGlzLnNlbGVjdGVkT3B0aW9uIC0gMSkgJSB0aGlzLm9wdGlvbnMubGVuZ3RoKVxuICAgICAgICB9KVxuICAgICAgICBrZXkoJ2VudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdkb3duJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCd1cCcpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZW50ZXInKVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5vbmxpbmVNb2RlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5zZXR1cEtleUhhbmRsZXJzKClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2Rvd24nKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0Lm9ubGluZU1vZGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3BsYXllckFkZGVkVG9RdWV1ZScsIHNvY2tldC5pZClcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5zZXR1cEtleUhhbmRsZXJzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBcblxuXG5cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbmxpbmVQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMsIHN0YXJ0U2lkZSwgYWN0aXZlKSB7XG4gICAgICAgIHN1cGVyKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpXG4gICAgICAgIFxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gc3RhcnRTaWRlID09PSBcIkxFRlRcIiA/ICh7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfSkgOiAoe1xuICAgICAgICAgICAgeDogdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHRoaXMuY29sb3IgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmVcbiAgICB9XG5cblxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuc3ByaXRlLFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gNSxcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuc3ByaXRlLmhlaWdodCAvIDMpXG4gICAgfVxuXG59XG5cbiIsImltcG9ydCBSZWN0IGZyb20gJy4vdXRpbHMvcmVjdCc7XG5pbXBvcnQga2V5IGZyb20gJy4vdXRpbHMva2V5bWFzdGVyJztcblxuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgR1JBVklUWTogMC41LFxuICAgIFBMQVlFUl9XSURUSDogNDAsXG4gICAgUExBWUVSX0hFSUdIVDogNzAsXG4gICAgTU9WRVNQRUVEOiA1LFxuICAgIC8vIFdJVEhfQkFMTF9NT1ZFU1BFRUQ6IDMuNSxcbiAgICBKVU1QX0hFSUdIVDogMTQsXG4gICAgLy8gT05fRklSRV9KVU1QX0hFSUdIVDogMTZcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLlBMQVlFUl9XSURUSCwgaGVpZ2h0OiBDT05TVEFOVFMuUExBWUVSX0hFSUdIVCB9KVxuICAgICAgICB0aGlzLmNvdXJ0ID0gY291cnRcbiAgICAgICAgdGhpcy5iYWxsID0gYmFsbFxuXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHk6IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5kZW5uaXNSb2RtYW5IZWFkID0gbmV3IEltYWdlKCk7XG4gICAgICAgIC8vIHRoaXMuZGVubmlzUm9kbWFuSGVhZC5zcmMgPSAnc3JjL2Fzc2V0cy9kZW5uaXNSb2RtYW5IZWFkLnBuZydcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc3JjID0gc3ByaXRlU3JjXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBjdHguZHJhd0ltYWdlKHRoaXMuZGVubmlzUm9kbWFuSGVhZCwgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy53aWR0aCArICh0aGlzLmRlbm5pc1JvZG1hbkhlYWQud2lkdGggLyAyKSwgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgKyAodGhpcy5kZW5uaXNSb2RtYW5IZWFkLmhlaWdodCAvIDMpKVxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuc3ByaXRlLFxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIDUsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnNwcml0ZS5oZWlnaHQgLyAzKVxuICAgIH1cblxuICAgIG1vdmUgKCkge1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgncmlnaHQnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdsZWZ0JykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBKVU1QSU5HXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCd1cCcpICYmICF0aGlzLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5KVU1QX0hFSUdIVDtcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCcvJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZm9ybUFjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JhbGwoKSBcblxuICAgICAgICB0aGlzLmhhbmRsZUdyYXZpdHkoKVxuXG4gICAgICAgIHRoaXMuY2hlY2tCb3VuZHMoKVxuICAgIH1cblxuICAgIHByZWZvcm1BY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmJhbGwucG9zc2Vzc2lvbiA9PT0gdGhpcykge1xuICAgICAgICAgICAgLy8gSG9sZCB0byBzaG9vdC4gXG4gICAgICAgICAgICB0aGlzLmJhbGwuc2hvb3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCYWxsKCkge1xuICAgICAgICBpZiAoIXRoaXMuYmFsbC5wb3NzZXNzaW9uICYmIHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzKSkge1xuICAgICAgICAgICAgdGhpcy5iYWxsLmNsYWltUG9zc2Vzc2lvbih0aGlzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlR3Jhdml0eSgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMudmVsb2NpdHkueTtcbiAgICAgICAgLy8gR1JBVklUWVxuICAgICAgICAvLyBpZiB0aGUgcG9zIGlzIGdyZWF0ZXIgdGhhbiB0aGUgZmxvb3JcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0IDwgdGhpcy5jb3VydC5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gQ09OU1RBTlRTLkdSQVZJVFk7XG4gICAgICAgICAgICAvLyBlbHNlIHNldCB0aGUgcG9zIHRvIHRoZSBmbG9vclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0JvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA+IHRoaXMuY291cnQud2lkdGggLSB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDBcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBQTEFZRVJfV0lEVEg6IDQwLFxuICAgIFBMQVlFUl9IRUlHSFQ6IDcwLFxuICAgIE1PVkVTUEVFRDogNSxcbiAgICAvLyBXSVRIX0JBTExfTU9WRVNQRUVEOiAzLjUsXG4gICAgSlVNUF9IRUlHSFQ6IDE0LFxuICAgIC8vIE9OX0ZJUkVfSlVNUF9IRUlHSFQ6IDE2XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKSB7XG4gICAgICAgIHN1cGVyKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ2QnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdhJykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBKVU1QSU5HXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCd3JykgJiYgIXRoaXMuanVtcGluZykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkpVTVBfSEVJR0hUO1xuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3EnKSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmb3JtQWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrQmFsbCgpXG5cbiAgICAgICAgdGhpcy5oYW5kbGVHcmF2aXR5KClcblxuICAgICAgICB0aGlzLmNoZWNrQm91bmRzKClcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBsZWZ0SG9vcCwgcmlnaHRIb29wKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5sZWZ0SG9vcCA9IGxlZnRIb29wXG4gICAgICAgIHRoaXMucmlnaHRIb29wID0gcmlnaHRIb29wXG4gICAgICAgIHRoaXMudGltZUxlZnQgPSA2MFxuICAgICAgICB0aGlzLmNvdW50RG93biA9IHNldEludGVydmFsKCgpID0+IHsgXG4gICAgICAgICAgICB0aGlzLnRpbWVMZWZ0LS1cbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVMZWZ0ID09PSAwKSBjbGVhckludGVydmFsKHRoaXMuY291bnREb3duKVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlIChjdHgpIHtcbiAgICAgICAgbGV0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDEwIH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG4gICAgICAgIGN0eC5maWxsVGV4dChgUGxheWVyIDE6ICR7dGhpcy5yaWdodEhvb3Auc2NvcmV9IFBsYXllciAyOiAke3RoaXMubGVmdEhvb3Auc2NvcmV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYFBsYXllciAxOiAke3RoaXMucmlnaHRIb29wLnNjb3JlfSBQbGF5ZXIgMjogJHt0aGlzLmxlZnRIb29wLnNjb3JlfWAsIGxvYy54LCBsb2MueSk7XG5cbiAgICAgICAgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gNSB9XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy50aW1lTGVmdH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHt0aGlzLnRpbWVMZWZ0fWAsIGxvYy54LCBsb2MueSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IocmFkaXVzKSB7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cblxuICAgIGlzT3ZlcmxhcHBpbmdSZWN0KHJlY3QpIHtcbiAgICAgICAgY29uc3QgZGlzdFggPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSByZWN0LnBvc2l0aW9uLnggLSByZWN0LndpZHRoIC8gMik7XG4gICAgICAgIGNvbnN0IGRpc3RZID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gcmVjdC5wb3NpdGlvbi55IC0gcmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgaWYgKGRpc3RYID4gKHJlY3Qud2lkdGggLyAyICsgdGhpcy5yYWRpdXMpKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICBpZiAoZGlzdFkgPiAocmVjdC5oZWlnaHQgLyAyICsgdGhpcy5yYWRpdXMpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICAgIGlmIChkaXN0WCA8PSAocmVjdC53aWR0aCAvIDIpKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIGlmIChkaXN0WSA8PSAocmVjdC5oZWlnaHQgLyAyKSkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgICAgIGNvbnN0IGR4ID0gZGlzdFggLSByZWN0LndpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgZHkgPSBkaXN0WSAtIHJlY3QuaGVpZ2h0IC8gMjtcbiAgICAgICAgcmV0dXJuIChkeCAqIGR4ICsgZHkgKiBkeSA8PSAodGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cykpO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuXG59IiwiLy8gICAgIGtleW1hc3Rlci5qc1xuLy8gICAgIChjKSAyMDExLTIwMTMgVGhvbWFzIEZ1Y2hzXG4vLyAgICAga2V5bWFzdGVyLmpzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG47IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgdmFyIGssXG4gICAgICAgIF9oYW5kbGVycyA9IHt9LFxuICAgICAgICBfbW9kcyA9IHsgMTY6IGZhbHNlLCAxODogZmFsc2UsIDE3OiBmYWxzZSwgOTE6IGZhbHNlIH0sXG4gICAgICAgIF9zY29wZSA9ICdhbGwnLFxuICAgICAgICAvLyBtb2RpZmllciBrZXlzXG4gICAgICAgIF9NT0RJRklFUlMgPSB7XG4gICAgICAgICAgICAn4oenJzogMTYsIHNoaWZ0OiAxNixcbiAgICAgICAgICAgICfijKUnOiAxOCwgYWx0OiAxOCwgb3B0aW9uOiAxOCxcbiAgICAgICAgICAgICfijIMnOiAxNywgY3RybDogMTcsIGNvbnRyb2w6IDE3LFxuICAgICAgICAgICAgJ+KMmCc6IDkxLCBjb21tYW5kOiA5MVxuICAgICAgICB9LFxuICAgICAgICAvLyBzcGVjaWFsIGtleXNcbiAgICAgICAgX01BUCA9IHtcbiAgICAgICAgICAgIGJhY2tzcGFjZTogOCwgdGFiOiA5LCBjbGVhcjogMTIsXG4gICAgICAgICAgICBlbnRlcjogMTMsICdyZXR1cm4nOiAxMyxcbiAgICAgICAgICAgIGVzYzogMjcsIGVzY2FwZTogMjcsIHNwYWNlOiAzMixcbiAgICAgICAgICAgIGxlZnQ6IDM3LCB1cDogMzgsXG4gICAgICAgICAgICByaWdodDogMzksIGRvd246IDQwLFxuICAgICAgICAgICAgZGVsOiA0NiwgJ2RlbGV0ZSc6IDQ2LFxuICAgICAgICAgICAgaG9tZTogMzYsIGVuZDogMzUsXG4gICAgICAgICAgICBwYWdldXA6IDMzLCBwYWdlZG93bjogMzQsXG4gICAgICAgICAgICAnLCc6IDE4OCwgJy4nOiAxOTAsICcvJzogMTkxLFxuICAgICAgICAgICAgJ2AnOiAxOTIsICctJzogMTg5LCAnPSc6IDE4NyxcbiAgICAgICAgICAgICc7JzogMTg2LCAnXFwnJzogMjIyLFxuICAgICAgICAgICAgJ1snOiAyMTksICddJzogMjIxLCAnXFxcXCc6IDIyMFxuICAgICAgICB9LFxuICAgICAgICBjb2RlID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBfTUFQW3hdIHx8IHgudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApO1xuICAgICAgICB9LFxuICAgICAgICBfZG93bktleXMgPSBbXTtcblxuICAgIGZvciAoayA9IDE7IGsgPCAyMDsgaysrKSBfTUFQWydmJyArIGtdID0gMTExICsgaztcblxuICAgIC8vIElFIGRvZXNuJ3Qgc3VwcG9ydCBBcnJheSNpbmRleE9mLCBzbyBoYXZlIGEgc2ltcGxlIHJlcGxhY2VtZW50XG4gICAgZnVuY3Rpb24gaW5kZXgoYXJyYXksIGl0ZW0pIHtcbiAgICAgICAgdmFyIGkgPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpLS0pIGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvLyBmb3IgY29tcGFyaW5nIG1vZHMgYmVmb3JlIHVuYXNzaWdubWVudFxuICAgIGZ1bmN0aW9uIGNvbXBhcmVBcnJheShhMSwgYTIpIHtcbiAgICAgICAgaWYgKGExLmxlbmd0aCAhPSBhMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGExW2ldICE9PSBhMltpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBtb2RpZmllck1hcCA9IHtcbiAgICAgICAgMTY6ICdzaGlmdEtleScsXG4gICAgICAgIDE4OiAnYWx0S2V5JyxcbiAgICAgICAgMTc6ICdjdHJsS2V5JyxcbiAgICAgICAgOTE6ICdtZXRhS2V5J1xuICAgIH07XG4gICAgZnVuY3Rpb24gdXBkYXRlTW9kaWZpZXJLZXkoZXZlbnQpIHtcbiAgICAgICAgZm9yIChrIGluIF9tb2RzKSBfbW9kc1trXSA9IGV2ZW50W21vZGlmaWVyTWFwW2tdXTtcbiAgICB9O1xuXG4gICAgLy8gaGFuZGxlIGtleWRvd24gZXZlbnRcbiAgICBmdW5jdGlvbiBkaXNwYXRjaChldmVudCkge1xuICAgICAgICB2YXIga2V5LCBoYW5kbGVyLCBrLCBpLCBtb2RpZmllcnNNYXRjaCwgc2NvcGU7XG4gICAgICAgIGtleSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgICAgaWYgKGluZGV4KF9kb3duS2V5cywga2V5KSA9PSAtMSkge1xuICAgICAgICAgICAgX2Rvd25LZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGEgbW9kaWZpZXIga2V5LCBzZXQgdGhlIGtleS48bW9kaWZpZXJrZXluYW1lPiBwcm9wZXJ0eSB0byB0cnVlIGFuZCByZXR1cm5cbiAgICAgICAgaWYgKGtleSA9PSA5MyB8fCBrZXkgPT0gMjI0KSBrZXkgPSA5MTsgLy8gcmlnaHQgY29tbWFuZCBvbiB3ZWJraXQsIGNvbW1hbmQgb24gR2Vja29cbiAgICAgICAgaWYgKGtleSBpbiBfbW9kcykge1xuICAgICAgICAgICAgX21vZHNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAvLyAnYXNzaWduS2V5JyBmcm9tIGluc2lkZSB0aGlzIGNsb3N1cmUgaXMgZXhwb3J0ZWQgdG8gd2luZG93LmtleVxuICAgICAgICAgICAgZm9yIChrIGluIF9NT0RJRklFUlMpIGlmIChfTU9ESUZJRVJTW2tdID09IGtleSkgYXNzaWduS2V5W2tdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVNb2RpZmllcktleShldmVudCk7XG5cbiAgICAgICAgLy8gc2VlIGlmIHdlIG5lZWQgdG8gaWdub3JlIHRoZSBrZXlwcmVzcyAoZmlsdGVyKCkgY2FuIGNhbiBiZSBvdmVycmlkZGVuKVxuICAgICAgICAvLyBieSBkZWZhdWx0IGlnbm9yZSBrZXkgcHJlc3NlcyBpZiBhIHNlbGVjdCwgdGV4dGFyZWEsIG9yIGlucHV0IGlzIGZvY3VzZWRcbiAgICAgICAgaWYgKCFhc3NpZ25LZXkuZmlsdGVyLmNhbGwodGhpcywgZXZlbnQpKSByZXR1cm47XG5cbiAgICAgICAgLy8gYWJvcnQgaWYgbm8gcG90ZW50aWFsbHkgbWF0Y2hpbmcgc2hvcnRjdXRzIGZvdW5kXG4gICAgICAgIGlmICghKGtleSBpbiBfaGFuZGxlcnMpKSByZXR1cm47XG5cbiAgICAgICAgc2NvcGUgPSBnZXRTY29wZSgpO1xuXG4gICAgICAgIC8vIGZvciBlYWNoIHBvdGVudGlhbCBzaG9ydGN1dFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX2hhbmRsZXJzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBfaGFuZGxlcnNba2V5XVtpXTtcblxuICAgICAgICAgICAgLy8gc2VlIGlmIGl0J3MgaW4gdGhlIGN1cnJlbnQgc2NvcGVcbiAgICAgICAgICAgIGlmIChoYW5kbGVyLnNjb3BlID09IHNjb3BlIHx8IGhhbmRsZXIuc2NvcGUgPT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBtb2RpZmllcnMgbWF0Y2ggaWYgYW55XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzTWF0Y2ggPSBoYW5kbGVyLm1vZHMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgaW4gX21vZHMpXG4gICAgICAgICAgICAgICAgICAgIGlmICgoIV9tb2RzW2tdICYmIGluZGV4KGhhbmRsZXIubW9kcywgK2spID4gLTEpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoX21vZHNba10gJiYgaW5kZXgoaGFuZGxlci5tb2RzLCAraykgPT0gLTEpKSBtb2RpZmllcnNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIGNhbGwgdGhlIGhhbmRsZXIgYW5kIHN0b3AgdGhlIGV2ZW50IGlmIG5lY2Nlc3NhcnlcbiAgICAgICAgICAgICAgICBpZiAoKGhhbmRsZXIubW9kcy5sZW5ndGggPT0gMCAmJiAhX21vZHNbMTZdICYmICFfbW9kc1sxOF0gJiYgIV9tb2RzWzE3XSAmJiAhX21vZHNbOTFdKSB8fCBtb2RpZmllcnNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlci5tZXRob2QoZXZlbnQsIGhhbmRsZXIpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY2FuY2VsQnViYmxlKSBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHVuc2V0IG1vZGlmaWVyIGtleXMgb24ga2V5dXBcbiAgICBmdW5jdGlvbiBjbGVhck1vZGlmaWVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXkgPSBldmVudC5rZXlDb2RlLCBrLFxuICAgICAgICAgICAgaSA9IGluZGV4KF9kb3duS2V5cywga2V5KTtcblxuICAgICAgICAvLyByZW1vdmUga2V5IGZyb20gX2Rvd25LZXlzXG4gICAgICAgIGlmIChpID49IDApIHtcbiAgICAgICAgICAgIF9kb3duS2V5cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IDkzIHx8IGtleSA9PSAyMjQpIGtleSA9IDkxO1xuICAgICAgICBpZiAoa2V5IGluIF9tb2RzKSB7XG4gICAgICAgICAgICBfbW9kc1trZXldID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgaWYgKF9NT0RJRklFUlNba10gPT0ga2V5KSBhc3NpZ25LZXlba10gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNldE1vZGlmaWVycygpIHtcbiAgICAgICAgZm9yIChrIGluIF9tb2RzKSBfbW9kc1trXSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgYXNzaWduS2V5W2tdID0gZmFsc2U7XG4gICAgfTtcblxuICAgIC8vIHBhcnNlIGFuZCBhc3NpZ24gc2hvcnRjdXRcbiAgICBmdW5jdGlvbiBhc3NpZ25LZXkoa2V5LCBzY29wZSwgbWV0aG9kKSB7XG4gICAgICAgIHZhciBrZXlzLCBtb2RzO1xuICAgICAgICBrZXlzID0gZ2V0S2V5cyhrZXkpO1xuICAgICAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9IHNjb3BlO1xuICAgICAgICAgICAgc2NvcGUgPSAnYWxsJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBlYWNoIHNob3J0Y3V0XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gc2V0IG1vZGlmaWVyIGtleXMgaWYgYW55XG4gICAgICAgICAgICBtb2RzID0gW107XG4gICAgICAgICAgICBrZXkgPSBrZXlzW2ldLnNwbGl0KCcrJyk7XG4gICAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBtb2RzID0gZ2V0TW9kcyhrZXkpO1xuICAgICAgICAgICAgICAgIGtleSA9IFtrZXlba2V5Lmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnZlcnQgdG8ga2V5Y29kZSBhbmQuLi5cbiAgICAgICAgICAgIGtleSA9IGtleVswXVxuICAgICAgICAgICAga2V5ID0gY29kZShrZXkpO1xuICAgICAgICAgICAgLy8gLi4uc3RvcmUgaGFuZGxlclxuICAgICAgICAgICAgaWYgKCEoa2V5IGluIF9oYW5kbGVycykpIF9oYW5kbGVyc1trZXldID0gW107XG4gICAgICAgICAgICBfaGFuZGxlcnNba2V5XS5wdXNoKHsgc2hvcnRjdXQ6IGtleXNbaV0sIHNjb3BlOiBzY29wZSwgbWV0aG9kOiBtZXRob2QsIGtleToga2V5c1tpXSwgbW9kczogbW9kcyB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB1bmJpbmQgYWxsIGhhbmRsZXJzIGZvciBnaXZlbiBrZXkgaW4gY3VycmVudCBzY29wZVxuICAgIGZ1bmN0aW9uIHVuYmluZEtleShrZXksIHNjb3BlKSB7XG4gICAgICAgIHZhciBtdWx0aXBsZUtleXMsIGtleXMsXG4gICAgICAgICAgICBtb2RzID0gW10sXG4gICAgICAgICAgICBpLCBqLCBvYmo7XG5cbiAgICAgICAgbXVsdGlwbGVLZXlzID0gZ2V0S2V5cyhrZXkpO1xuXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBtdWx0aXBsZUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGtleXMgPSBtdWx0aXBsZUtleXNbal0uc3BsaXQoJysnKTtcblxuICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIG1vZHMgPSBnZXRNb2RzKGtleXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXkgPSBrZXlzW2tleXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBrZXkgPSBjb2RlKGtleSk7XG5cbiAgICAgICAgICAgIGlmIChzY29wZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBnZXRTY29wZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFfaGFuZGxlcnNba2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBfaGFuZGxlcnNba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG9iaiA9IF9oYW5kbGVyc1trZXldW2ldO1xuICAgICAgICAgICAgICAgIC8vIG9ubHkgY2xlYXIgaGFuZGxlcnMgaWYgY29ycmVjdCBzY29wZSBhbmQgbW9kcyBtYXRjaFxuICAgICAgICAgICAgICAgIGlmIChvYmouc2NvcGUgPT09IHNjb3BlICYmIGNvbXBhcmVBcnJheShvYmoubW9kcywgbW9kcykpIHtcbiAgICAgICAgICAgICAgICAgICAgX2hhbmRsZXJzW2tleV1baV0gPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBrZXkgd2l0aCBjb2RlICdrZXlDb2RlJyBpcyBjdXJyZW50bHkgZG93blxuICAgIC8vIENvbnZlcnRzIHN0cmluZ3MgaW50byBrZXkgY29kZXMuXG4gICAgZnVuY3Rpb24gaXNQcmVzc2VkKGtleUNvZGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoa2V5Q29kZSkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGtleUNvZGUgPSBjb2RlKGtleUNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleChfZG93bktleXMsIGtleUNvZGUpICE9IC0xO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByZXNzZWRLZXlDb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIF9kb3duS2V5cy5zbGljZSgwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSAoZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQpLnRhZ05hbWU7XG4gICAgICAgIC8vIGlnbm9yZSBrZXlwcmVzc2VkIGluIGFueSBlbGVtZW50cyB0aGF0IHN1cHBvcnQga2V5Ym9hcmQgZGF0YSBpbnB1dFxuICAgICAgICByZXR1cm4gISh0YWdOYW1lID09ICdJTlBVVCcgfHwgdGFnTmFtZSA9PSAnU0VMRUNUJyB8fCB0YWdOYW1lID09ICdURVhUQVJFQScpO1xuICAgIH1cblxuICAgIC8vIGluaXRpYWxpemUga2V5Ljxtb2RpZmllcj4gdG8gZmFsc2VcbiAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgYXNzaWduS2V5W2tdID0gZmFsc2U7XG5cbiAgICAvLyBzZXQgY3VycmVudCBzY29wZSAoZGVmYXVsdCAnYWxsJylcbiAgICBmdW5jdGlvbiBzZXRTY29wZShzY29wZSkgeyBfc2NvcGUgPSBzY29wZSB8fCAnYWxsJyB9O1xuICAgIGZ1bmN0aW9uIGdldFNjb3BlKCkgeyByZXR1cm4gX3Njb3BlIHx8ICdhbGwnIH07XG5cbiAgICAvLyBkZWxldGUgYWxsIGhhbmRsZXJzIGZvciBhIGdpdmVuIHNjb3BlXG4gICAgZnVuY3Rpb24gZGVsZXRlU2NvcGUoc2NvcGUpIHtcbiAgICAgICAgdmFyIGtleSwgaGFuZGxlcnMsIGk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gX2hhbmRsZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGVycyA9IF9oYW5kbGVyc1trZXldO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0uc2NvcGUgPT09IHNjb3BlKSBoYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYWJzdHJhY3Qga2V5IGxvZ2ljIGZvciBhc3NpZ24gYW5kIHVuYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0S2V5cyhrZXkpIHtcbiAgICAgICAgdmFyIGtleXM7XG4gICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICBrZXlzID0ga2V5LnNwbGl0KCcsJyk7XG4gICAgICAgIGlmICgoa2V5c1trZXlzLmxlbmd0aCAtIDFdKSA9PSAnJykge1xuICAgICAgICAgICAga2V5c1trZXlzLmxlbmd0aCAtIDJdICs9ICcsJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG5cbiAgICAvLyBhYnN0cmFjdCBtb2RzIGxvZ2ljIGZvciBhc3NpZ24gYW5kIHVuYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0TW9kcyhrZXkpIHtcbiAgICAgICAgdmFyIG1vZHMgPSBrZXkuc2xpY2UoMCwga2V5Lmxlbmd0aCAtIDEpO1xuICAgICAgICBmb3IgKHZhciBtaSA9IDA7IG1pIDwgbW9kcy5sZW5ndGg7IG1pKyspXG4gICAgICAgICAgICBtb2RzW21pXSA9IF9NT0RJRklFUlNbbW9kc1ttaV1dO1xuICAgICAgICByZXR1cm4gbW9kcztcbiAgICB9XG5cbiAgICAvLyBjcm9zcy1icm93c2VyIGV2ZW50c1xuICAgIGZ1bmN0aW9uIGFkZEV2ZW50KG9iamVjdCwgZXZlbnQsIG1ldGhvZCkge1xuICAgICAgICBpZiAob2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbWV0aG9kLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgaWYgKG9iamVjdC5hdHRhY2hFdmVudClcbiAgICAgICAgICAgIG9iamVjdC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZ1bmN0aW9uICgpIHsgbWV0aG9kKHdpbmRvdy5ldmVudCkgfSk7XG4gICAgfTtcblxuICAgIC8vIHNldCB0aGUgaGFuZGxlcnMgZ2xvYmFsbHkgb24gZG9jdW1lbnRcbiAgICBhZGRFdmVudChkb2N1bWVudCwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHsgZGlzcGF0Y2goZXZlbnQpIH0pOyAvLyBQYXNzaW5nIF9zY29wZSB0byBhIGNhbGxiYWNrIHRvIGVuc3VyZSBpdCByZW1haW5zIHRoZSBzYW1lIGJ5IGV4ZWN1dGlvbi4gRml4ZXMgIzQ4XG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsICdrZXl1cCcsIGNsZWFyTW9kaWZpZXIpO1xuXG4gICAgLy8gcmVzZXQgbW9kaWZpZXJzIHRvIGZhbHNlIHdoZW5ldmVyIHRoZSB3aW5kb3cgaXMgKHJlKWZvY3VzZWQuXG4gICAgYWRkRXZlbnQod2luZG93LCAnZm9jdXMnLCByZXNldE1vZGlmaWVycyk7XG5cbiAgICAvLyBzdG9yZSBwcmV2aW91c2x5IGRlZmluZWQga2V5XG4gICAgdmFyIHByZXZpb3VzS2V5ID0gd2luZG93LmtleTtcblxuICAgIC8vIHJlc3RvcmUgcHJldmlvdXNseSBkZWZpbmVkIGtleSBhbmQgcmV0dXJuIHJlZmVyZW5jZSB0byBvdXIga2V5IG9iamVjdFxuICAgIGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgICAgIHZhciBrID0gd2luZG93LmtleTtcbiAgICAgICAgd2luZG93LmtleSA9IHByZXZpb3VzS2V5O1xuICAgICAgICByZXR1cm4gaztcbiAgICB9XG5cbiAgICAvLyBzZXQgd2luZG93LmtleSBhbmQgd2luZG93LmtleS5zZXQvZ2V0L2RlbGV0ZVNjb3BlLCBhbmQgdGhlIGRlZmF1bHQgZmlsdGVyXG4gICAgd2luZG93LmtleSA9IGFzc2lnbktleTtcbiAgICB3aW5kb3cua2V5LnNldFNjb3BlID0gc2V0U2NvcGU7XG4gICAgd2luZG93LmtleS5nZXRTY29wZSA9IGdldFNjb3BlO1xuICAgIHdpbmRvdy5rZXkuZGVsZXRlU2NvcGUgPSBkZWxldGVTY29wZTtcbiAgICB3aW5kb3cua2V5LmZpbHRlciA9IGZpbHRlcjtcbiAgICB3aW5kb3cua2V5LmlzUHJlc3NlZCA9IGlzUHJlc3NlZDtcbiAgICB3aW5kb3cua2V5LmdldFByZXNzZWRLZXlDb2RlcyA9IGdldFByZXNzZWRLZXlDb2RlcztcbiAgICB3aW5kb3cua2V5Lm5vQ29uZmxpY3QgPSBub0NvbmZsaWN0O1xuICAgIHdpbmRvdy5rZXkudW5iaW5kID0gdW5iaW5kS2V5O1xuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSBtb2R1bGUuZXhwb3J0cyA9IGFzc2lnbktleTtcblxufSkodGhpcyk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICB0aGlzLndpZHRoID0gc2l6ZS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcbiAgICB9XG5cbiAgICBpc092ZXJsYXBwaW5nT3RoZXJSZWN0KHJlY3RDbGFzcykge1xuICAgICAgICBjb25zdCBteUJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKClcbiAgICAgICAgY29uc3QgcmVjdCA9IHJlY3RDbGFzcy5nZXRCb3VuZHMoKVxuICAgICAgICBpZiAobXlCb3VuZHMubGVmdCA+IHJlY3QucmlnaHQgfHwgbXlCb3VuZHMucmlnaHQgPCByZWN0LmxlZnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXlCb3VuZHMudG9wID4gcmVjdC5ib3R0b20gfHwgbXlCb3VuZHMuYm90dG9tIDwgcmVjdC50b3ApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICByaWdodDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=