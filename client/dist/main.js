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
    COURT_WIDTH: 5
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
            if (this.playingGame) requestAnimationFrame(this.animate.bind(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9jb3VydC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9ob29wLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvbWVudV9zY3JlZW5zL2NoYXJhY3Rlcl9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9tZW51X3NjcmVlbnMvbWFpbl9tZW51LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvb25saW5lX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllcjIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMva2V5bWFzdGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvcmVjdC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhc0JhY2tncm91bmQiLCJOQkFKYW1HYW1lIiwiQ09OU1RBTlRTIiwiUkFESVVTIiwiR1JBVklUWSIsIkJPVU5DRV9SRVRFTlRJT04iLCJEUklCQkxFX1NQRUVEIiwiQmFsbCIsImRpbWVuc2lvbnMiLCJjb3VydCIsImxlZnRIb29wIiwicmlnaHRIb29wIiwiZ2FtZUlkIiwiYmFsbCIsInBvc2l0aW9uIiwieCIsIndpZHRoIiwieSIsImhlaWdodCIsInZlbG9jaXR5IiwiY29sb3IiLCJwb3NzZXNzaW9uIiwibm9Ub3VjaCIsInBvd2VyIiwiY3R4IiwibW92ZSIsImJlZ2luUGF0aCIsImFyYyIsInJhZGl1cyIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJjbG9zZVBhdGgiLCJwbGF5ZXIiLCJzb2NrZXQiLCJlbWl0IiwiZnJvbVNvY2tldCIsImlkIiwic2hvb3RpbmdQbGF5ZXIiLCJmYWNpbmdSaWdodCIsInNob290aW5nVGltZW91dCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJyZWxlYXNlQmFsbCIsInNjb3JlUG9zaXRpb24iLCJzY29yZUhpdGJveCIsImh5cG90IiwibnVtYmVyT2ZGcmFtZXMiLCJ2ZWxvY2l0eVgiLCJ2ZWxvY2l0eVkiLCJkaWZmIiwiYWRqdXN0ZWRYIiwicmVtb3ZlUG9zc2Vzc2lvbiIsImZhbGwiLCJtb3ZlV2l0aFBsYXllclBvc3Nlc3Npb24iLCJjaGVja0JvdW5kcyIsImp1bXBpbmciLCJDaXJjbGUiLCJDT1VSVF9GTE9PUiIsIkNPVVJUX1dJRFRIIiwiQ291cnQiLCJiYWNrZ3JvdW5kQ2F2YXMiLCJjb3VydEltYWdlIiwiSW1hZ2UiLCJzcmMiLCJzZXR1cEJhY2tncm91bmRDb3VydCIsImdldENvbnRleHQiLCJmaWxsUmVjdCIsIm9ubG9hZCIsImRyYXdJbWFnZSIsIlJlY3QiLCJiYWNrZ3JvdW5kQ2FudmFzIiwibWFpbk1lbnUiLCJNYWluTWVudSIsInN0YXJ0R2FtZSIsImJpbmQiLCJzdGFydE9ubGluZUdhbWUiLCJwbGF5aW5nR2FtZSIsInJlbmRlck1lbnUiLCJzZXR1cEtleUhhbmRsZXJzIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibGVmdFNwcml0ZSIsInJpZ2h0U3ByaXRlIiwicmVzdGFydCIsIm15U2lkZSIsIm9ubGluZUdhbWVJZCIsInJ1bk9ubGluZUdhbWUiLCJIb29wIiwic2NvcmVib2FyZCIsIlNjb3JlYm9hcmQiLCJQbGF5ZXIiLCJwbGF5ZXIyIiwiUGxheWVyMiIsImFuaW1hdGUiLCJjbGVhclJlY3QiLCJnYW1lT3ZlciIsImRpc3BsYXlXaW5uZXIiLCJteVBsYXllciIsIk9ubGluZVBsYXllciIsIm90aGVyUGxheWVyIiwib24iLCJkYXRhIiwic2hvd01lbnUiLCJydW5PbmxpbmUiLCJvdGhlclBsYXllckZhY2luZyIsIm90aGVyUGxheWVySnVtcGluZyIsInRpbWVMZWZ0IiwidGV4dCIsInNjb3JlIiwibG9jIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VUZXh0IiwiSE9PUF9ZX01VTFRJUExJRVIiLCJIT09QX0hFSUdIVCIsIkhPT1BfV0lEVEgiLCJIT09QX1hfRElTVEFOQ0UiLCJCQUNLQk9BUkRfV0lEVEgiLCJCQUNLQk9BUkRfSEVJR0hUIiwiaG9vcFNpZGUiLCJiYWNrYm9hcmQiLCJCYWNrYm9hcmQiLCJTY29yZUhpdGJveCIsImp1c3RTY29yZWQiLCJjaGVja0JhbGxDb2xsaXNpb24iLCJpc092ZXJsYXBwaW5nUmVjdCIsImhvb3AiLCJDaGFyYWN0ZXJTZWxlY3QiLCJzZWxlY3RlZENoYXJhY3RlcnMiLCJsZWZ0U2VsZWN0ZWQiLCJyaWdodFNlbGVjdGVkIiwiY2hhcmFjdGVycyIsIm5hbWUiLCJsZWZ0Q2hhciIsInJpZ2h0Q2hhciIsImxlZnRSZWFkeSIsInJpZ2h0UmVhZHkiLCJsZWZ0UGxheWVySWQiLCJyaWdodFBsYXllcklkIiwiaXNQbGF5aW5nTGVmdCIsImlzUGxheWluZ1JpZ2h0Iiwia2V5IiwidW5iaW5kIiwibGVmdFNpZGVDaGFyIiwib25saW5lTW9kZSIsInJpZ2h0U2lkZUNoYXIiLCJsZW5ndGgiLCJzZWxlY3RlZE9wdGlvbiIsIm9wdGlvbnMiLCJjaGFyYWN0ZXJTZWxlY3QiLCJzZWxlY3RpbmdDaGFyYWN0ZXJzIiwibGVmdFNyYyIsInJpZ2h0U3JjIiwiZm9yRWFjaCIsIm9wdGlvbiIsImkiLCJtZWFzdXJlVGV4dCIsImFicyIsIlBMQVlFUl9XSURUSCIsIlBMQVlFUl9IRUlHSFQiLCJNT1ZFU1BFRUQiLCJKVU1QX0hFSUdIVCIsInNwcml0ZVNyYyIsInN0YXJ0U2lkZSIsImFjdGl2ZSIsInNwcml0ZSIsImlzUHJlc3NlZCIsInByZWZvcm1BY3Rpb24iLCJjaGVja0JhbGwiLCJoYW5kbGVHcmF2aXR5Iiwic2hvb3QiLCJjbGFpbVBvc3Nlc3Npb24iLCJjb3VudERvd24iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJyZWN0IiwiZGlzdFgiLCJkaXN0WSIsImR4IiwiZHkiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJnbG9iYWwiLCJrIiwiX2hhbmRsZXJzIiwiX21vZHMiLCJfc2NvcGUiLCJfTU9ESUZJRVJTIiwic2hpZnQiLCJhbHQiLCJjdHJsIiwiY29udHJvbCIsImNvbW1hbmQiLCJfTUFQIiwiYmFja3NwYWNlIiwidGFiIiwiY2xlYXIiLCJlbnRlciIsImVzYyIsImVzY2FwZSIsInNwYWNlIiwidXAiLCJkb3duIiwiZGVsIiwiaG9tZSIsImVuZCIsInBhZ2V1cCIsInBhZ2Vkb3duIiwiY29kZSIsInRvVXBwZXJDYXNlIiwiY2hhckNvZGVBdCIsIl9kb3duS2V5cyIsImluZGV4IiwiYXJyYXkiLCJpdGVtIiwiY29tcGFyZUFycmF5IiwiYTEiLCJhMiIsIm1vZGlmaWVyTWFwIiwidXBkYXRlTW9kaWZpZXJLZXkiLCJldmVudCIsImRpc3BhdGNoIiwiaGFuZGxlciIsIm1vZGlmaWVyc01hdGNoIiwic2NvcGUiLCJrZXlDb2RlIiwicHVzaCIsImFzc2lnbktleSIsImZpbHRlciIsImNhbGwiLCJnZXRTY29wZSIsIm1vZHMiLCJtZXRob2QiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwiY2FuY2VsQnViYmxlIiwiY2xlYXJNb2RpZmllciIsInNwbGljZSIsInJlc2V0TW9kaWZpZXJzIiwia2V5cyIsImdldEtleXMiLCJ1bmRlZmluZWQiLCJzcGxpdCIsImdldE1vZHMiLCJzaG9ydGN1dCIsInVuYmluZEtleSIsIm11bHRpcGxlS2V5cyIsImoiLCJvYmoiLCJnZXRQcmVzc2VkS2V5Q29kZXMiLCJzbGljZSIsInRhZ05hbWUiLCJ0YXJnZXQiLCJzcmNFbGVtZW50Iiwic2V0U2NvcGUiLCJkZWxldGVTY29wZSIsImhhbmRsZXJzIiwicmVwbGFjZSIsIm1pIiwiYWRkRXZlbnQiLCJvYmplY3QiLCJhdHRhY2hFdmVudCIsIndpbmRvdyIsInByZXZpb3VzS2V5Iiwibm9Db25mbGljdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzaXplIiwicmVjdENsYXNzIiwibXlCb3VuZHMiLCJnZXRCb3VuZHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7O0FBRUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELFFBQU1DLFNBQVNGLFNBQVNHLGNBQVQsQ0FBd0IsY0FB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QUFLQyxTQUFMLEVBQWpCO0FBQ0EsZ0JBQU1sRyxPQUFPZ0csVUFBVUUsU0FBVixFQUFiO0FBQ0EsZ0JBQUlELFNBQVM1RixJQUFULEdBQWdCTCxLQUFLTSxLQUFyQixJQUE4QjJGLFNBQVMzRixLQUFULEdBQWlCTixLQUFLSyxJQUF4RCxFQUE4RDtBQUMxRCx1QkFBTyxLQUFQO0FBQ0g7QUFDRCxnQkFBSTRGLFNBQVMxRixHQUFULEdBQWVQLEtBQUtRLE1BQXBCLElBQThCeUYsU0FBU3pGLE1BQVQsR0FBa0JSLEtBQUtPLEdBQXpELEVBQThEO0FBQzFELHVCQUFPLEtBQVA7QUFDSDtBQUNELG1CQUFPLElBQVA7QUFDSDs7O29DQUVXO0FBQ1IsbUJBQU87QUFDSEYsc0JBQU0sS0FBSzNLLFFBQUwsQ0FBY0MsQ0FEakI7QUFFSDJLLHVCQUFPLEtBQUs1SyxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS0MsS0FGM0I7QUFHSDJLLHFCQUFLLEtBQUs3SyxRQUFMLENBQWNHLENBSGhCO0FBSUgySyx3QkFBUSxLQUFLOUssUUFBTCxDQUFjRyxDQUFkLEdBQWtCLEtBQUtDO0FBSjVCLGFBQVA7QUFNSDs7Ozs7O2tCQXpCZ0JxRCxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NsaWVudC9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgTkJBSmFtR2FtZSBmcm9tICcuL2pzL2dhbWUuanMnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25iYS1qYW0tZ2FtZScpO1xuICAgIGNvbnN0IGNhbnZhc0JhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmJhLWphbS1iYWNrZ3JvdW5kJyk7XG4gICAgbmV3IE5CQUphbUdhbWUoY2FudmFzLCBjYW52YXNCYWNrZ3JvdW5kKTtcbn0pOyIsImltcG9ydCBDaXJjbGUgZnJvbSBcIi4vdXRpbHMvY2lyY2xlXCI7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBSQURJVVM6IDE1LFxuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBCT1VOQ0VfUkVURU5USU9OOiAwLjYsXG4gICAgRFJJQkJMRV9TUEVFRDogMyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCBleHRlbmRzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgY291cnQsIGxlZnRIb29wLCByaWdodEhvb3AsIGdhbWVJZCkge1xuICAgICAgICBzdXBlcihDT05TVEFOVFMuUkFESVVTKVxuICAgICAgICB0aGlzLmNvdXJ0ID0gY291cnRcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLmxlZnRIb29wID0gbGVmdEhvb3BcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSByaWdodEhvb3BcbiAgICAgICAgdGhpcy5sZWZ0SG9vcC5iYWxsID0gdGhpc1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcC5iYWxsID0gdGhpc1xuXG4gICAgICAgIHRoaXMuZ2FtZUlkID0gZ2FtZUlkXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY291cnQud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJob3RwaW5rXCJcbiAgICAgICAgdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuICAgICAgICB0aGlzLm5vVG91Y2ggPSB7fVxuICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLngsIFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55LCBcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLCBcbiAgICAgICAgICAgIDAsIFxuICAgICAgICAgICAgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICBcbiAgICBjbGFpbVBvc3Nlc3Npb24ocGxheWVyKSB7XG4gICAgICAgIGlmICghdGhpcy5ub1RvdWNoW3BsYXllci5jb2xvcl0pIHtcbiAgICAgICAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IHBsYXllclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJjaGFuZ2VPZlBvc3Nlc2lvblwiLCB7XG4gICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZCxcbiAgICAgICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNob290ICgpIHtcbiAgICAgICAgLy8gQkVUQSBTSE9PVElOR1xuXG4gICAgICAgIC8vIHRoaXMucG93ZXIgKz0gMVxuICAgICAgICAvLyBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICAvLyBpZiAodGhpcy5zaG9vdGluZ0ludGVydmFsICYmIHRoaXMucG93ZXIgPCA2MCkge1xuICAgICAgICAvLyAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2hvb3RpbmdJbnRlcnZhbClcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNob290aW5nSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IDYgOiAtNlxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IHRoaXMucG93ZXJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSB0cnVlICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IGZhbHNlXG4gICAgICAgIC8vICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgICAgICAvLyAgICAgfSwgMjApO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gQUlNQk9UIFNIT09USU5HXG5cbiAgICAgICAgLy8gY29uc3Qgc2hvb3RpbmdQbGF5ZXIgPSB0aGlzLnBvc3Nlc3Npb25cbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi54ID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgP1xuICAgICAgICAvLyAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggKyBzaG9vdGluZ1BsYXllci53aWR0aCArIHRoaXMucmFkaXVzKSA6XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzKVxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnkgPSBzaG9vdGluZ1BsYXllci5wb3NpdGlvbi55XG5cbiAgICAgICAgLy8gY29uc3Qgc2NvcmVQb3NpdGlvbiA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIHg6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgLy8gICAgICAgICB5OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICkgOiAoXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgeDogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgIC8vICAgICAgICAgeTogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gKVxuXG4gICAgICAgIC8vIGNvbnN0IG51bWJlck9mRnJhbWVzID0gNTBcblxuICAgICAgICAvLyBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgIC8vIGNvbnN0IHZlbG9jaXR5WSA9ICggKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpICkgLyBudW1iZXJPZkZyYW1lc1xuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgLy8gICAgIHg6IHZlbG9jaXR5WCxcbiAgICAgICAgLy8gICAgIHk6IHZlbG9jaXR5WVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWUgICAgICAgIFxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSBmYWxzZVxuICAgICAgICAvLyB9LCA1MDApO1xuXG4gICAgICAgIC8vIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcblxuICAgICAgICAvLyBQT1dFUkJBU0VEIEFJTUVEIFNIT09USU5HXG5cblxuICAgICAgICB0aGlzLnBvd2VyICs9IDFcblxuICAgICAgICBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICBpZiAodGhpcy5zaG9vdGluZ1RpbWVvdXQgJiYgdGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG9vdGluZ1RpbWVvdXQpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG93ZXIgPCA2MCkge1xuICAgICAgICAgICAgdGhpcy5zaG9vdGluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VCYWxsKClcbiAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVsZWFzZUJhbGwgKCkge1xuICAgICAgICBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuXG4gICAgICAgIGNvbnN0IHNjb3JlUG9zaXRpb24gPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueVxuICAgICAgICAgICAgfVxuICAgICAgICApIDogKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMubGVmdEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueCArICh0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC53aWR0aCAvIDIpLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMubGVmdEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueVxuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgLy8gTEFZVVBcbiAgICAgICAgaWYgKDE1MCA+IE1hdGguaHlwb3QodGhpcy5wb3NpdGlvbi54IC0gc2NvcmVQb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgLSBzY29yZVBvc2l0aW9uLnkpKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IDMwXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVkgPSAoKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpKSAvIG51bWJlck9mRnJhbWVzXG5cbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAodGhpcy5wb3dlciAtIDMwKSAvIDIwXG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZFggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eVggKyBkaWZmXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCAtIGRpZmZcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICAgICAgeDogYWRqdXN0ZWRYLFxuICAgICAgICAgICAgICAgIHk6IHZlbG9jaXR5WVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU0hPVFxuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSA1MFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVkgPSAoKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpKSAvIG51bWJlck9mRnJhbWVzXG4gICAgXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gKHRoaXMucG93ZXIgLSAzMCkgLyA2XG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZFggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eVggKyBkaWZmXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCAtIGRpZmZcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICAgICAgeDogYWRqdXN0ZWRYLFxuICAgICAgICAgICAgICAgIHk6IHZlbG9jaXR5WVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWVcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gZmFsc2VcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgICAgICB0aGlzLnJlbW92ZVBvc3Nlc3Npb24oKVxuXG4gICAgfVxuXG4gICAgcmVtb3ZlUG9zc2Vzc2lvbigpIHtcbiAgICAgICAgdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuICAgICAgICBzb2NrZXQuZW1pdChcInJlbW92ZUJhbGxQb3NzZXNzaW9uXCIsIHtcbiAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWQsXG4gICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbW92ZSgpIHtcblxuICAgICAgICBpZiAoIXRoaXMucG9zc2Vzc2lvbikge1xuICAgICAgICAgICAgdGhpcy5mYWxsKClcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb3ZlV2l0aFBsYXllclBvc3Nlc3Npb24oKSBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tCb3VuZHMoKVxuICAgIH1cblxuICAgIG1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbigpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5wb3NzZXNzaW9uLmZhY2luZ1JpZ2h0ID9cbiAgICAgICAgICAgICh0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueCArIHRoaXMucG9zc2Vzc2lvbi53aWR0aCkgOiAodGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLngpXG5cbiAgICAgICAgaWYgKHRoaXMucG9zc2Vzc2lvbi5qdW1waW5nKSB7XG4gICAgICAgICAgICAvLyBIT0xEIEJBTExcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi55ICsgdGhpcy5wb3NzZXNzaW9uLmhlaWdodCAvIDJcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRFJJQkJMSU5HXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55IDwgdGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLnkgKyB0aGlzLnBvc3Nlc3Npb24uaGVpZ2h0IC8gMikge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IC1DT05TVEFOVFMuRFJJQkJMRV9TUEVFRFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPiB0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueSArIHRoaXMucG9zc2Vzc2lvbi5oZWlnaHQgLSB0aGlzLnJhZGl1cykge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5EUklCQkxFX1NQRUVEXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy52ZWxvY2l0eS55XG4gICAgICAgIH1cbiAgICAgICAgLy8gc29ja2V0LmVtaXQoXCJ1cGRhdGVCYWxsV2l0aFBvc1wiLCB7XG4gICAgICAgIC8vICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkLFxuICAgICAgICAvLyAgICAgZnJvbVNvY2tldDogc29ja2V0LmlkLFxuICAgICAgICAvLyAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHksXG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgICAgLy8gICAgIG90aGVyUGxheWVyRmFjaW5nOiB0aGlzLnBvc3Nlc3Npb24uZmFjaW5nUmlnaHRcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cblxuICAgIGZhbGwgKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy52ZWxvY2l0eS55O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgICAgICAvLyBHUkFWSVRZXG4gICAgICAgIC8vIGlmIHRoZSBwb3MgaXMgZ3JlYXRlciB0aGFuIHRoZSBmbG9vclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5yYWRpdXMgPCB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSAtPSBDT05TVEFOVFMuR1JBVklUWTtcbiAgICAgICAgICAgIC8vIGVsc2Ugc2V0IHRoZSByZXZlcnNlIHZlbG9jaXR5XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52ZWxvY2l0eS55IDwgMCkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueSAqIENPTlNUQU5UUy5CT1VOQ0VfUkVURU5USU9OXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNoZWNrQm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ID4gdGhpcy5jb3VydC53aWR0aCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy5yYWRpdXNcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5LnhcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgUmVjdCBmcm9tIFwiLi91dGlscy9yZWN0XCI7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBDT1VSVF9GTE9PUjogMC44NSxcbiAgICBDT1VSVF9XSURUSDogNVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291cnQgZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBiYWNrZ3JvdW5kQ2F2YXMpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogZGltZW5zaW9ucy53aWR0aCwgaGVpZ2h0OiBDT05TVEFOVFMuQ09VUlRfV0lEVEggfSlcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IGRpbWVuc2lvbnMuaGVpZ2h0ICogQ09OU1RBTlRTLkNPVVJUX0ZMT09SXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwiZ3JlZW5cIlxuICAgICAgICB0aGlzLmNvdXJ0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5jb3VydEltYWdlLnNyYyA9IFwic3JjL2Fzc2V0cy9iYmFsbGNvdXJ0c21hbGwucG5nXCJcbiAgICAgICAgdGhpcy5zZXR1cEJhY2tncm91bmRDb3VydChiYWNrZ3JvdW5kQ2F2YXMpXG4gICAgfSAgXG5cbiAgICBzZXR1cEJhY2tncm91bmRDb3VydChjYW52YXMpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNvdXJ0SW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNvdXJ0SW1hZ2UsXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5jb3VydEltYWdlLndpZHRoIC8gMTIsIFxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuY291cnRJbWFnZS5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggKyB0aGlzLmNvdXJ0SW1hZ2Uud2lkdGggLyA2LFxuICAgICAgICAgICAgICAgIHRoaXMuY291cnRJbWFnZS5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgLy8gICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5jb3VydEltYWdlLFxuICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5jb3VydEltYWdlLndpZHRoIC8gMTIsIFxuICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5jb3VydEltYWdlLmhlaWdodCAvIDIsXG4gICAgLy8gICAgICAgICB0aGlzLndpZHRoICsgdGhpcy5jb3VydEltYWdlLndpZHRoIC8gNixcbiAgICAvLyAgICAgICAgIHRoaXMuY291cnRJbWFnZS5oZWlnaHQpO1xuICAgIH1cblxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInXG5pbXBvcnQgQ291cnQgZnJvbSAnLi9jb3VydCc7XG5pbXBvcnQgSG9vcCBmcm9tICcuL2hvb3AnO1xuaW1wb3J0IEJhbGwgZnJvbSAnLi9iYWxsJztcbmltcG9ydCBTY29yZWJvYXJkIGZyb20gJy4vc2NvcmVib2FyZCc7XG5pbXBvcnQgUGxheWVyMiBmcm9tICcuL3BsYXllcjInO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vbWVudV9zY3JlZW5zL21haW5fbWVudSc7XG5pbXBvcnQgT25saW5lUGxheWVyIGZyb20gJy4vb25saW5lX3BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5CQUphbUdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgYmFja2dyb3VuZENhbnZhcykgeyAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ2FudmFzID0gYmFja2dyb3VuZENhbnZhc1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLm1haW5NZW51ID0gbmV3IE1haW5NZW51KHRoaXMuZGltZW5zaW9ucywgdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKSwgdGhpcy5zdGFydE9ubGluZUdhbWUuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlck1lbnUoKVxuICAgIH1cblxuICAgIHNob3dNZW51KCkge1xuICAgICAgICB0aGlzLm1haW5NZW51LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICB0aGlzLnJlbmRlck1lbnUodGhpcy5jdHgpXG4gICAgfVxuXG4gICAgcmVuZGVyTWVudSAoKSB7XG4gICAgICAgIHRoaXMubWFpbk1lbnUucmVuZGVyKHRoaXMuY3R4KVxuICAgICAgICBpZiAoIXRoaXMucGxheWluZ0dhbWUpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlck1lbnUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lIChsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSkge1xuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gdHJ1ZVxuICAgICAgICB0aGlzLnJlc3RhcnQobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUpXG4gICAgfVxuXG4gICAgc3RhcnRPbmxpbmVHYW1lKGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlLCBteVNpZGUsIGdhbWVJZCkge1xuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gdHJ1ZVxuICAgICAgICB0aGlzLm9ubGluZUdhbWVJZCA9IGdhbWVJZFxuICAgICAgICB0aGlzLnJ1bk9ubGluZUdhbWUobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUsIG15U2lkZSlcbiAgICB9XG5cbiAgICByZXN0YXJ0KGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlKSB7XG4gICAgICAgIC8vIFNUQVJUIEFOSU1BVElPTiBTWUNMRVxuICAgICAgICB0aGlzLmNvdXJ0ID0gbmV3IENvdXJ0KHRoaXMuZGltZW5zaW9ucywgdGhpcy5iYWNrZ3JvdW5kQ2FudmFzKTtcbiAgICAgICAgdGhpcy5sZWZ0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJMRUZUXCIpO1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJSSUdIVFwiKTtcbiAgICAgICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5kaW1lbnNpb25zLCB0aGlzLmNvdXJ0LCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcClcblxuICAgICAgICB0aGlzLnNjb3JlYm9hcmQgPSBuZXcgU2NvcmVib2FyZCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMubGVmdEhvb3AsIHRoaXMucmlnaHRIb29wKVxuXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIHJpZ2h0U3ByaXRlKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcjIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCBsZWZ0U3ByaXRlKTtcblxuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG4gICAgXG4gICAgYW5pbWF0ZSgpIHsgICAgICAgIFxuICAgICAgICAvLyBDUkVBVEVTIEJBQ0tHUk9VTkRcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG5cbiAgICAgICAgXG4gICAgICAgIHRoaXMuY291cnQuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgLy8gQU5JTUFURSBPQkpFQ1RTXG4gICAgICAgIHRoaXMucGxheWVyLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMucGxheWVyMi5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmJhbGwuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5sZWZ0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLnJpZ2h0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zY29yZWJvYXJkLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5nYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlXaW5uZXIoKVxuICAgICAgICB9XG4gICAgICAgIC8vIFJFUVVFU1QgTkVYVCBGUkFNRVxuICAgICAgICBpZiAodGhpcy5wbGF5aW5nR2FtZSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBydW5PbmxpbmVHYW1lKGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlLCBteVNpZGUpIHtcbiAgICAgICAgdGhpcy5jb3VydCA9IG5ldyBDb3VydCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuYmFja2dyb3VuZENhbnZhcyk7XG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiTEVGVFwiKTtcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiUklHSFRcIik7XG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKHRoaXMuZGltZW5zaW9ucywgdGhpcy5jb3VydCwgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3AsIHRoaXMub25saW5lR2FtZUlkKVxuXG4gICAgICAgIHRoaXMuc2NvcmVib2FyZCA9IG5ldyBTY29yZWJvYXJkKHRoaXMuZGltZW5zaW9ucywgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3ApXG5cbiAgICAgICAgaWYgKG15U2lkZSA9PT0gXCJMRUZUXCIpIHtcbiAgICAgICAgICAgIHRoaXMubXlQbGF5ZXIgPSBuZXcgT25saW5lUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgbGVmdFNwcml0ZSwgXCJMRUZUXCIsIHRydWUpXG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyID0gbmV3IE9ubGluZVBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIHJpZ2h0U3ByaXRlLCBcIlJJR0hUXCIsIGZhbHNlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllciA9IG5ldyBPbmxpbmVQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCBsZWZ0U3ByaXRlLCBcIkxFRlRcIiwgZmFsc2UpXG4gICAgICAgICAgICB0aGlzLm15UGxheWVyID0gbmV3IE9ubGluZVBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIHJpZ2h0U3ByaXRlLCBcIlJJR0hUXCIsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVPdGhlclBvc1wiLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllci5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB4OiBkYXRhW1wieFwiXSxcbiAgICAgICAgICAgICAgICB5OiBkYXRhW1wieVwiXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIuZmFjaW5nUmlnaHQgID0gZGF0YVtcIm90aGVyUGxheWVyRmFjaW5nXCJdXG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyLmp1bXBpbmcgPSBkYXRhW1wib3RoZXJQbGF5ZXJKdW1waW5nXCJdXG4gICAgICAgIH0pIFxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVCYWxsUG9zc2VzaW9uXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5iYWxsLnBvc3Nlc3Npb24gPSB0aGlzLm90aGVyUGxheWVyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInJlZ2lzdGVyZWRQb3NzZXNpb25DaGFuZ2VcIiwge1xuICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5vbmxpbmVHYW1lSWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZU5vQmFsbFBvc3Nlc2lvblwiLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC5wb3NzZXNzaW9uID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5iYWxsLnBvc2l0aW9uID0gZGF0YVtcInBvc2l0aW9uXCJdXG4gICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkgPSBkYXRhW1widmVsb2NpdHlcIl1cbiAgICAgICAgfSlcbiAgICAgICAgLy8gc29ja2V0Lm9uKFwidXBkYXRlQmFsbFBvc1wiLCBkYXRhID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMuYmFsbC5wb3NpdGlvbiA9IGRhdGFbXCJwb3NpdGlvblwiXVxuICAgICAgICAvLyAgICAgdGhpcy5iYWxsLnZlbG9jaXR5ID0gZGF0YVtcInZlbG9jaXR5XCJdXG4gICAgICAgIC8vICAgICB0aGlzLm90aGVyUGxheWVyLmZhY2luZ1JpZ2h0ID0gZGF0YVtcIm90aGVyUGxheWVyRmFjaW5nXCJdXG4gICAgICAgIC8vIH0pXG4gICAgICAgIHNvY2tldC5vbihcImVuZEdhbWVGcm9tRGlzY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMub25saW5lR2FtZUlkID0gbnVsbFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TWVudSgpXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnJ1bk9ubGluZSgpO1xuICAgIH1cblxuICAgIHJ1bk9ubGluZSAoKSB7XG4gICAgICAgIC8vIENSRUFURVMgQkFDS0dST1VORFxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIm9yYW5nZVwiO1xuICAgICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcblxuXG4gICAgICAgIHRoaXMuY291cnQuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgLy8gQU5JTUFURSBPQkpFQ1RTXG4gICAgICAgIHRoaXMub3RoZXJQbGF5ZXIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5teVBsYXllci5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5iYWxsLmFuaW1hdGUodGhpcy5jdHgpXG5cbiAgICAgICAgdGhpcy5sZWZ0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLnJpZ2h0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuXG4gICAgICAgIHRoaXMuc2NvcmVib2FyZC5hbmltYXRlKHRoaXMuY3R4KVxuXG4gICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVdpbm5lcigpXG4gICAgICAgIH1cblxuXG4gICAgICAgIHNvY2tldC5lbWl0KFwidXBkYXRlTXlQb3NcIiwge1xuICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLm9ubGluZUdhbWVJZCxcbiAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgIHg6IHRoaXMubXlQbGF5ZXIucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMubXlQbGF5ZXIucG9zaXRpb24ueSxcbiAgICAgICAgICAgIG90aGVyUGxheWVyRmFjaW5nOiB0aGlzLm15UGxheWVyLmZhY2luZ1JpZ2h0LFxuICAgICAgICAgICAgb3RoZXJQbGF5ZXJKdW1waW5nOiB0aGlzLm15UGxheWVyLmp1bXBpbmdcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0LmVtaXQoXCJ1cGRhdGVCYWxsUG9zXCIsIHtcbiAgICAgICAgICAgIGdhbWVJZDogdGhpcy5vbmxpbmVHYW1lSWQsXG4gICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgICAgICB4OiB0aGlzLmJhbGwucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMuYmFsbC5wb3NpdGlvbi55XG4gICAgICAgIH0pXG4gICAgICAgIC8vIFJFUVVFU1QgTkVYVCBGUkFNRVxuICAgICAgICBpZiAodGhpcy5wbGF5aW5nR2FtZSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucnVuT25saW5lLmJpbmQodGhpcykpO1xuICAgIH1cblxuXG5cbiAgICBnYW1lT3ZlciAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3JlYm9hcmQudGltZUxlZnQgPT09IDBcbiAgICB9XG5cbiAgICBkaXNwbGF5V2lubmVyICgpIHtcbiAgICAgICAgbGV0IHRleHQ7XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0SG9vcC5zY29yZSA+IHRoaXMubGVmdEhvb3Auc2NvcmUpIHtcbiAgICAgICAgICAgIHRleHQgPSBcIlBsYXllciAxIHdpbnNcIlxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGVmdEhvb3Auc2NvcmUgPiB0aGlzLnJpZ2h0SG9vcC5zY29yZSkge1xuICAgICAgICAgICAgdGV4dCA9IFwiUGxheWVyIDIgd2luc1wiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ID0gXCJUaWUgR2FtZVwiXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgfVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgJHt0ZXh0fWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VUZXh0KGAke3RleHR9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGxheWluZ0dhbWUgPSBmYWxzZVxuICAgICAgICB0aGlzLm9ubGluZUdhbWVJZCA9IG51bGxcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZW51KClcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuXG59IiwiaW1wb3J0IFJlY3QgZnJvbSAnLi91dGlscy9yZWN0J1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgSE9PUF9ZX01VTFRJUExJRVI6IDAuMyxcbiAgICBIT09QX0hFSUdIVDogNDAsXG4gICAgSE9PUF9XSURUSDogNTAsXG4gICAgSE9PUF9YX0RJU1RBTkNFOiA1MCxcbiAgICBCQUNLQk9BUkRfV0lEVEg6IDE1LFxuICAgIEJBQ0tCT0FSRF9IRUlHSFQ6IDUwLFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvb3AgZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBob29wU2lkZSwgYmFsbCkge1xuICAgICAgICBzdXBlcih7IHdpZHRoOiBDT05TVEFOVFMuSE9PUF9XSURUSCwgaGVpZ2h0OiBDT05TVEFOVFMuSE9PUF9IRUlHSFQgfSlcbiAgICAgICAgdGhpcy5iYWxsID0gYmFsbFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IHggPSBob29wU2lkZSA9PT0gXCJMRUZUXCIgPyAoXG4gICAgICAgICAgICAgICAgMCArIENPTlNUQU5UUy5IT09QX1hfRElTVEFOQ0VcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgZGltZW5zaW9ucy53aWR0aCAtIENPTlNUQU5UUy5IT09QX1hfRElTVEFOQ0UgLSB0aGlzLndpZHRoXG4gICAgICAgICAgICApXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LCBcbiAgICAgICAgICAgIHk6IGRpbWVuc2lvbnMuaGVpZ2h0ICogQ09OU1RBTlRTLkhPT1BfWV9NVUxUSVBMSUVSXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iYWNrYm9hcmQgPSBuZXcgQmFja2JvYXJkKHRoaXMsIGhvb3BTaWRlKVxuICAgICAgICB0aGlzLnNjb3JlSGl0Ym94ID0gbmV3IFNjb3JlSGl0Ym94KHRoaXMsIGhvb3BTaWRlKVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJwdXJwbGVcIlxuICAgICAgICB0aGlzLnNjb3JlID0gMFxuICAgICAgICB0aGlzLmp1c3RTY29yZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMuY2hlY2tCYWxsQ29sbGlzaW9uKClcbiAgICAgICAgdGhpcy5iYWNrYm9hcmQuYW5pbWF0ZShjdHgpXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5zY29yZUhpdGJveC5hbmltYXRlKGN0eClcbiAgICAgICAgaWYgKHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzLnNjb3JlSGl0Ym94KSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmp1c3RTY29yZWQpIHRoaXMuc2NvcmUgKz0gMlxuICAgICAgICAgICAgdGhpcy5qdXN0U2NvcmVkID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IFwiZ3JlZW5cIlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdXN0U2NvcmVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gXCJwdXJwbGVcIlxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQmFsbENvbGxpc2lvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcykgfHwgdGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMuYmFja2JvYXJkKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYmFsbC5wb3NpdGlvbi55IC0gdGhpcy5iYWxsLnJhZGl1cyA+IHRoaXMucG9zaXRpb24ueSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbGwudmVsb2NpdHkueSA+IDApIHRoaXMuYmFsbC52ZWxvY2l0eS55ID0gLXRoaXMuYmFsbC52ZWxvY2l0eS55XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbGwucG9zaXRpb24ueSArIHRoaXMuYmFsbC5yYWRpdXMgPCB0aGlzLmJhY2tib2FyZC5wb3NpdGlvbi55ICYmIHRoaXMuYmFsbC52ZWxvY2l0eS55IDwgMCkgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxsLnZlbG9jaXR5LnkgPSAtdGhpcy5iYWxsLnZlbG9jaXR5LnlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5iYWxsLnZlbG9jaXR5LnggPSAtdGhpcy5iYWxsLnZlbG9jaXR5LnhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5jbGFzcyBTY29yZUhpdGJveCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGhvb3AsIGhvb3BTaWRlKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5IT09QX1dJRFRIIC0gMzAsIGhlaWdodDogQ09OU1RBTlRTLkhPT1BfSEVJR0hUICogMC4wNSB9KVxuICAgICAgICBjb25zdCB4ID0gaG9vcFNpZGUgPT09IFwiTEVGVFwiID8gKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54ICsgMTVcbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCArIGhvb3Aud2lkdGggLSB0aGlzLndpZHRoIC0gMTVcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IGhvb3AucG9zaXRpb24ueVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcIndoaXRlXCJcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufVxuXG5jbGFzcyBCYWNrYm9hcmQgZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihob29wLCBob29wU2lkZSkge1xuICAgICAgICBzdXBlcih7IHdpZHRoOiBDT05TVEFOVFMuQkFDS0JPQVJEX1dJRFRILCBoZWlnaHQ6IENPTlNUQU5UUy5CQUNLQk9BUkRfSEVJR0hUIH0pXG4gICAgICAgIGNvbnN0IHggPSBob29wU2lkZSA9PT0gXCJMRUZUXCIgPyAoXG4gICAgICAgICAgICBob29wLnBvc2l0aW9uLnggXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICBob29wLnBvc2l0aW9uLnggKyBob29wLndpZHRoIC0gdGhpcy53aWR0aFxuICAgICAgICApXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogaG9vcC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJhcXVhXCJcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufSIsImltcG9ydCBrZXkgZnJvbSAnLi4vdXRpbHMva2V5bWFzdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyU2VsZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBzZWxlY3RlZENoYXJhY3RlcnMpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVycyA9IHNlbGVjdGVkQ2hhcmFjdGVyc1xuICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9IDBcbiAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gMVxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiUm9kbWFuXCIsIHNyYzogXCJzcmMvYXNzZXRzL3JvZG1hblNtYWxsLnBuZ1wifSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJEcmFrZVwiLCBzcmM6IFwic3JjL2Fzc2V0cy9kcmFrZVNtYWxsLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiTGVicm9uXCIsIHNyYzogXCJzcmMvYXNzZXRzL2xlYnJvblNtYWxsLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiUGVhY2hcIiwgc3JjOiBcInNyYy9hc3NldHMvcGVhY2hTbWFsbC5wbmdcIn1cbiAgICAgICAgXVxuICAgICAgICBcbiAgICAgICAgdGhpcy5sZWZ0Q2hhciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnJpZ2h0Q2hhciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmxlZnRDaGFyLnNyYyA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjXG4gICAgICAgIHRoaXMucmlnaHRDaGFyLnNyYyA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdLnNyY1xuXG4gICAgICAgIHRoaXMubGVmdFJlYWR5ID0gZmFsc2VcbiAgICAgICAgdGhpcy5yaWdodFJlYWR5ID0gZmFsc2VcblxuICAgICAgICBzb2NrZXQub24oXCJtYXRjaEZvdW5kXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5sZWZ0UGxheWVySWQgPSBkYXRhW1wibGVmdFBsYXllcklkXCJdXG4gICAgICAgICAgICB0aGlzLnJpZ2h0UGxheWVySWQgPSBkYXRhW1wicmlnaHRQbGF5ZXJJZFwiXVxuICAgICAgICAgICAgaWYgKHNvY2tldC5pZCA9PT0gdGhpcy5sZWZ0UGxheWVySWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxheWluZ0xlZnQgPSB0cnVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nUmlnaHQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9IDBcbiAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9IDFcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gZGF0YVtcImdhbWVJZFwiXVxuICAgICAgICB9KVxuXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZWRTZWxlY3RlZENoYXJzXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSBkYXRhW1wibGVmdFNlbGVjdGVkXCJdXG4gICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSBkYXRhW1wicmlnaHRTZWxlY3RlZFwiXVxuICAgICAgICB9KVxuXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZWRMZWZ0UmVhZHlcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sZWZ0UmVhZHkgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZWRSaWdodFJlYWR5XCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRSZWFkeSA9IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICBzb2NrZXQub24oXCJzdGFydEdhbWVcIiwgKCkgPT4ge1xuICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICBrZXkudW5iaW5kKCd1cCcpXG4gICAgICAgICAgICBrZXkudW5iaW5kKCd3JylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ3MnKVxuICAgICAgICAgICAga2V5LnVuYmluZCgnZW50ZXInKVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoYXJhY3RlcnModGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXS5zcmMsIHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdLnNyYywgdGhpcy5nYW1lSWQpXG4gICAgICAgICAgICB0aGlzLmxlZnRQbGF5ZXJJZCA9IG51bGxcbiAgICAgICAgICAgIHRoaXMucmlnaHRQbGF5ZXJJZCA9IG51bGxcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nTGVmdCA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZ1JpZ2h0ID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gMFxuICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gMVxuICAgICAgICAgICAgdGhpcy5sZWZ0UmVhZHkgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5yaWdodFJlYWR5ID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gbnVsbFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcihjdHgpIHtcblxuICAgICAgICB0aGlzLmxlZnRDaGFyLnNyYyA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjXG4gICAgICAgIHRoaXMucmlnaHRDaGFyLnNyYyA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdLnNyY1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInB1cnBsZVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBMRUZUIFNJREVcbiAgICAgICAgY29uc3QgbGVmdFNpZGVDaGFyID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXVxuICAgICAgICBsZXQgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyA0LCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMn1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblxuICAgICAgICBpZiAodGhpcy5vbmxpbmVNb2RlKSBjdHguZmlsbFRleHQoXCJPbmxpbmUgTW9kZVwiLCBsb2MueCwgbG9jLnkgLSAxMDApXG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDEycHQgc2VyaWZcIjtcbiAgICAgICAgaWYgKHRoaXMubGVmdFJlYWR5KSBjdHguZmlsbFRleHQoXCJSZWFkeVwiLCBsb2MueCwgbG9jLnkgLSA3MClcbiAgICAgICAgaWYgKHRoaXMubGVmdFBsYXllcklkICYmIHRoaXMucmlnaHRQbGF5ZXJJZCkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke3RoaXMubGVmdFBsYXllcklkfWAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub25saW5lTW9kZSkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke3NvY2tldC5pZH1gLCBsb2MueCwgbG9jLnkgLSA1MClcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGAke2xlZnRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGAke2xlZnRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5sZWZ0Q2hhcixcbiAgICAgICAgICAgIGxvYy54IC0gdGhpcy5sZWZ0Q2hhci53aWR0aCAvIDIsXG4gICAgICAgICAgICBsb2MueSlcblxuICAgICAgICAvLyBSSUdIVCBTSURFXG4gICAgICAgIGNvbnN0IHJpZ2h0U2lkZUNoYXIgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXVxuICAgICAgICBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAqIDMgLyA0LCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5cbiAgICAgICAgaWYgKHRoaXMub25saW5lTW9kZSkgY3R4LmZpbGxUZXh0KFwiT25saW5lIE1vZGVcIiwgbG9jLngsIGxvYy55IC0gMTAwKVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCAxMnB0IHNlcmlmXCI7XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0UmVhZHkpIGN0eC5maWxsVGV4dChcIlJlYWR5XCIsIGxvYy54LCBsb2MueSAtIDcwKVxuICAgICAgICBpZiAodGhpcy5sZWZ0UGxheWVySWQgJiYgdGhpcy5yaWdodFBsYXllcklkKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy5yaWdodFBsYXllcklkfWAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub25saW5lTW9kZSkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGBXYWl0aW5nIGZvciBQbGF5ZXJgLCBsb2MueCwgbG9jLnkgLSA1MClcbiAgICAgICAgfVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG5cbiAgICAgICAgY3R4LmZpbGxUZXh0KGAke3JpZ2h0U2lkZUNoYXIubmFtZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHtyaWdodFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnJpZ2h0Q2hhcixcbiAgICAgICAgICAgIGxvYy54IC0gdGhpcy5yaWdodENoYXIud2lkdGggLyAyLFxuICAgICAgICAgICAgbG9jLnkpXG4gXG4gICAgfVxuXG4gICAgc2V0dXBLZXlIYW5kbGVycygpIHtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICAgICAga2V5KCdkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAodGhpcy5yaWdodFNlbGVjdGVkICsgMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ3VwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAodGhpcy5yaWdodFNlbGVjdGVkIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmlnaHRTZWxlY3RlZCA9PT0gLTEpIHRoaXMucmlnaHRTZWxlY3RlZCA9IHRoaXMuY2hhcmFjdGVycy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ3cnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkICsgMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ3MnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkIC0gMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlZnRTZWxlY3RlZCA9PT0gLTEpIHRoaXMubGVmdFNlbGVjdGVkID0gdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aCAtIDFcbiAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgnZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2Rvd24nKVxuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCd1cCcpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3cnKVxuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdzJylcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZW50ZXInKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVycyh0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdLnNyYywgdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAga2V5KCd1cCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5nYW1lSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUGxheWluZ0xlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9ICh0aGlzLmxlZnRTZWxlY3RlZCArIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1BsYXlpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0U2VsZWN0ZWQgPT09IC0xKSB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUGxheWluZ0xlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9ICh0aGlzLmxlZnRTZWxlY3RlZCAtIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlZnRTZWxlY3RlZCA9PT0gLTEpIHRoaXMubGVmdFNlbGVjdGVkID0gdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnY2hhckNoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0U2VsZWN0ZWQ6IHRoaXMucmlnaHRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFNlbGVjdGVkOiB0aGlzLmxlZnRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQbGF5aW5nUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAodGhpcy5yaWdodFNlbGVjdGVkICsgMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ2VudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmdhbWVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdsZWZ0UmVhZHknLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGxheWluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3JpZ2h0UmVhZHknLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG5cblxuXG59IiwiaW1wb3J0IGtleSBmcm9tICcuLi91dGlscy9rZXltYXN0ZXInO1xuaW1wb3J0IENoYXJhY3RlclNlbGVjdCBmcm9tICcuL2NoYXJhY3Rlcl9zZWxlY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSB7XG4gICAgY29uc3RydWN0b3IgKGRpbWVuc2lvbnMsIHN0YXJ0R2FtZSwgc3RhcnRPbmxpbmVHYW1lKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5zdGFydEdhbWUgPSBzdGFydEdhbWVcbiAgICAgICAgdGhpcy5zdGFydE9ubGluZUdhbWUgPSBzdGFydE9ubGluZUdhbWVcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IDBcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW1wiU3RhcnQgR2FtZVwiLCBcIk9ubGluZVwiXVxuICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdCA9IG5ldyBDaGFyYWN0ZXJTZWxlY3QodGhpcy5kaW1lbnNpb25zLCB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVycy5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgPSBmYWxzZVxuICAgICAgICB0aGlzLnNldHVwS2V5SGFuZGxlcnMoKVxuICAgIH1cblxuICAgIHNlbGVjdGVkQ2hhcmFjdGVycyAobGVmdFNyYywgcmlnaHRTcmMsIGdhbWVJZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJTZWxlY3Qub25saW5lTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Qub25saW5lTW9kZSA9IGZhbHNlXG4gICAgICAgICAgICBjb25zdCBteVNpZGUgPSB0aGlzLmNoYXJhY3RlclNlbGVjdC5pc1BsYXlpbmdMZWZ0ID8gXCJMRUZUXCIgOiBcIlJJR0hUXCJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRPbmxpbmVHYW1lKGxlZnRTcmMsIHJpZ2h0U3JjLCBteVNpZGUsIGdhbWVJZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKGxlZnRTcmMsIHJpZ2h0U3JjKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgcmVuZGVyIChjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicHVycGxlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24sIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAoKHRoaXMub3B0aW9ucy5sZW5ndGggKyAxKSAtIGkpIH1cbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KGAke29wdGlvbn1gKS53aWR0aFxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT09IGkpIGN0eC5maWxsUmVjdCgobG9jLnggLSB3aWR0aCAvIDIpIC0gNSwgbG9jLnkgLSA0MCwgd2lkdGggKyAxMCwgNTApO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChgJHtvcHRpb259YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVRleHQoYCR7b3B0aW9ufWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycykge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3QucmVuZGVyKGN0eClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldHVwS2V5SGFuZGxlcnMoKSB7XG4gICAgICAgIGtleSgnZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSAodGhpcy5zZWxlY3RlZE9wdGlvbiArIDEpICUgdGhpcy5vcHRpb25zLmxlbmd0aFxuICAgICAgICB9KVxuICAgICAgICBrZXkoJ3VwJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IE1hdGguYWJzKCh0aGlzLnNlbGVjdGVkT3B0aW9uIC0gMSkgJSB0aGlzLm9wdGlvbnMubGVuZ3RoKVxuICAgICAgICB9KVxuICAgICAgICBrZXkoJ2VudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdkb3duJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCd1cCcpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZW50ZXInKVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5vbmxpbmVNb2RlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5zZXR1cEtleUhhbmRsZXJzKClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2Rvd24nKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0Lm9ubGluZU1vZGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3BsYXllckFkZGVkVG9RdWV1ZScsIHNvY2tldC5pZClcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5zZXR1cEtleUhhbmRsZXJzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBcblxuXG5cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBHUkFWSVRZOiAwLjUsXG4gICAgUExBWUVSX1dJRFRIOiA0MCxcbiAgICBQTEFZRVJfSEVJR0hUOiA3MCxcbiAgICBNT1ZFU1BFRUQ6IDUsXG4gICAgLy8gV0lUSF9CQUxMX01PVkVTUEVFRDogMy41LFxuICAgIEpVTVBfSEVJR0hUOiAxNCxcbiAgICAvLyBPTl9GSVJFX0pVTVBfSEVJR0hUOiAxNlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25saW5lUGxheWVyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjLCBzdGFydFNpZGUsIGFjdGl2ZSkge1xuICAgICAgICBzdXBlcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHN0YXJ0U2lkZSA9PT0gXCJMRUZUXCIgPyAoe1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH0pIDogKHtcbiAgICAgICAgICAgIHg6IHRoaXMuY291cnQud2lkdGggLSB0aGlzLndpZHRoLFxuICAgICAgICAgICAgeTogdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKSB0aGlzLmNvbG9yID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlXG4gICAgfVxuXG5cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSA1LFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5zcHJpdGUuaGVpZ2h0IC8gMylcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgncmlnaHQnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdsZWZ0JykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBKVU1QSU5HXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCd1cCcpICYmICF0aGlzLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5KVU1QX0hFSUdIVDtcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdzcGFjZScpKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZvcm1BY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tCYWxsKClcblxuICAgICAgICB0aGlzLmhhbmRsZUdyYXZpdHkoKVxuXG4gICAgICAgIHRoaXMuY2hlY2tCb3VuZHMoKVxuICAgIH1cblxufVxuXG4iLCJpbXBvcnQgUmVjdCBmcm9tICcuL3V0aWxzL3JlY3QnO1xuaW1wb3J0IGtleSBmcm9tICcuL3V0aWxzL2tleW1hc3Rlcic7XG5cblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBQTEFZRVJfV0lEVEg6IDQwLFxuICAgIFBMQVlFUl9IRUlHSFQ6IDcwLFxuICAgIE1PVkVTUEVFRDogNSxcbiAgICAvLyBXSVRIX0JBTExfTU9WRVNQRUVEOiAzLjUsXG4gICAgSlVNUF9IRUlHSFQ6IDE0LFxuICAgIC8vIE9OX0ZJUkVfSlVNUF9IRUlHSFQ6IDE2XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5QTEFZRVJfV0lEVEgsIGhlaWdodDogQ09OU1RBTlRTLlBMQVlFUl9IRUlHSFQgfSlcbiAgICAgICAgdGhpcy5jb3VydCA9IGNvdXJ0XG4gICAgICAgIHRoaXMuYmFsbCA9IGJhbGxcblxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuZGVubmlzUm9kbWFuSGVhZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAvLyB0aGlzLmRlbm5pc1JvZG1hbkhlYWQuc3JjID0gJ3NyYy9hc3NldHMvZGVubmlzUm9kbWFuSGVhZC5wbmcnXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNyYyA9IHNwcml0ZVNyY1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZSh0aGlzLmRlbm5pc1JvZG1hbkhlYWQsIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIHRoaXMud2lkdGggKyAodGhpcy5kZW5uaXNSb2RtYW5IZWFkLndpZHRoIC8gMiksIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0ICsgKHRoaXMuZGVubmlzUm9kbWFuSGVhZC5oZWlnaHQgLyAzKSlcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSxcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSA1LFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5zcHJpdGUuaGVpZ2h0IC8gMylcbiAgICB9XG5cbiAgICBtb3ZlICgpIHtcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3JpZ2h0JykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnbGVmdCcpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSlVNUElOR1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgndXAnKSAmJiAhdGhpcy5qdW1waW5nKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSBDT05TVEFOVFMuSlVNUF9IRUlHSFQ7XG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnLycpKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZvcm1BY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tCYWxsKCkgXG5cbiAgICAgICAgdGhpcy5oYW5kbGVHcmF2aXR5KClcblxuICAgICAgICB0aGlzLmNoZWNrQm91bmRzKClcbiAgICB9XG5cbiAgICBwcmVmb3JtQWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5iYWxsLnBvc3Nlc3Npb24gPT09IHRoaXMpIHtcbiAgICAgICAgICAgIC8vIEhvbGQgdG8gc2hvb3QuIFxuICAgICAgICAgICAgdGhpcy5iYWxsLnNob290KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQmFsbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhbGwucG9zc2Vzc2lvbiAmJiB0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcykpIHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC5jbGFpbVBvc3Nlc3Npb24odGhpcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUdyYXZpdHkoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgICAgIC8vIEdSQVZJVFlcbiAgICAgICAgLy8gaWYgdGhlIHBvcyBpcyBncmVhdGVyIHRoYW4gdGhlIGZsb29yXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA8IHRoaXMuY291cnQucG9zaXRpb24ueSkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IENPTlNUQU5UUy5HUkFWSVRZO1xuICAgICAgICAgICAgLy8gZWxzZSBzZXQgdGhlIHBvcyB0byB0aGUgZmxvb3JcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDBcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGhcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBHUkFWSVRZOiAwLjUsXG4gICAgUExBWUVSX1dJRFRIOiA0MCxcbiAgICBQTEFZRVJfSEVJR0hUOiA3MCxcbiAgICBNT1ZFU1BFRUQ6IDUsXG4gICAgLy8gV0lUSF9CQUxMX01PVkVTUEVFRDogMy41LFxuICAgIEpVTVBfSEVJR0hUOiAxNCxcbiAgICAvLyBPTl9GSVJFX0pVTVBfSEVJR0hUOiAxNlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyMiBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY291cnQsIGJhbGwsIHNwcml0ZVNyYykge1xuICAgICAgICBzdXBlcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKVxuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdkJykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnYScpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSlVNUElOR1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgndycpICYmICF0aGlzLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5KVU1QX0hFSUdIVDtcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdxJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZm9ybUFjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JhbGwoKVxuXG4gICAgICAgIHRoaXMuaGFuZGxlR3Jhdml0eSgpXG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgbGVmdEhvb3AsIHJpZ2h0SG9vcCkge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBsZWZ0SG9vcFxuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IHJpZ2h0SG9vcFxuICAgICAgICB0aGlzLnRpbWVMZWZ0ID0gNjBcbiAgICAgICAgdGhpcy5jb3VudERvd24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7IFxuICAgICAgICAgICAgdGhpcy50aW1lTGVmdC0tXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lTGVmdCA9PT0gMCkgY2xlYXJJbnRlcnZhbCh0aGlzLmNvdW50RG93bilcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSAoY3R4KSB7XG4gICAgICAgIGxldCBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAxMCB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7IFxuICAgICAgICBjdHguZmlsbFRleHQoYFBsYXllciAxOiAke3RoaXMucmlnaHRIb29wLnNjb3JlfSBQbGF5ZXIgMjogJHt0aGlzLmxlZnRIb29wLnNjb3JlfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGBQbGF5ZXIgMTogJHt0aGlzLnJpZ2h0SG9vcC5zY29yZX0gUGxheWVyIDI6ICR7dGhpcy5sZWZ0SG9vcC5zY29yZX1gLCBsb2MueCwgbG9jLnkpO1xuXG4gICAgICAgIGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDUgfVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGAke3RoaXMudGltZUxlZnR9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYCR7dGhpcy50aW1lTGVmdH1gLCBsb2MueCwgbG9jLnkpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUge1xuICAgIGNvbnN0cnVjdG9yKHJhZGl1cykge1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB9XG5cbiAgICBpc092ZXJsYXBwaW5nUmVjdChyZWN0KSB7XG4gICAgICAgIGNvbnN0IGRpc3RYID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi54IC0gcmVjdC5wb3NpdGlvbi54IC0gcmVjdC53aWR0aCAvIDIpO1xuICAgICAgICBjb25zdCBkaXN0WSA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueSAtIHJlY3QucG9zaXRpb24ueSAtIHJlY3QuaGVpZ2h0IC8gMik7XG4gICAgICAgIGlmIChkaXN0WCA+IChyZWN0LndpZHRoIC8gMiArIHRoaXMucmFkaXVzKSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgaWYgKGRpc3RZID4gKHJlY3QuaGVpZ2h0IC8gMiArIHRoaXMucmFkaXVzKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgICAgICBpZiAoZGlzdFggPD0gKHJlY3Qud2lkdGggLyAyKSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICBpZiAoZGlzdFkgPD0gKHJlY3QuaGVpZ2h0IC8gMikpIHsgcmV0dXJuIHRydWU7IH1cblxuICAgICAgICBjb25zdCBkeCA9IGRpc3RYIC0gcmVjdC53aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IGR5ID0gZGlzdFkgLSByZWN0LmhlaWdodCAvIDI7XG4gICAgICAgIHJldHVybiAoZHggKiBkeCArIGR5ICogZHkgPD0gKHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXMpKTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICByaWdodDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxufSIsIi8vICAgICBrZXltYXN0ZXIuanNcbi8vICAgICAoYykgMjAxMS0yMDEzIFRob21hcyBGdWNoc1xuLy8gICAgIGtleW1hc3Rlci5qcyBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuOyAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgIHZhciBrLFxuICAgICAgICBfaGFuZGxlcnMgPSB7fSxcbiAgICAgICAgX21vZHMgPSB7IDE2OiBmYWxzZSwgMTg6IGZhbHNlLCAxNzogZmFsc2UsIDkxOiBmYWxzZSB9LFxuICAgICAgICBfc2NvcGUgPSAnYWxsJyxcbiAgICAgICAgLy8gbW9kaWZpZXIga2V5c1xuICAgICAgICBfTU9ESUZJRVJTID0ge1xuICAgICAgICAgICAgJ+KHpyc6IDE2LCBzaGlmdDogMTYsXG4gICAgICAgICAgICAn4oylJzogMTgsIGFsdDogMTgsIG9wdGlvbjogMTgsXG4gICAgICAgICAgICAn4oyDJzogMTcsIGN0cmw6IDE3LCBjb250cm9sOiAxNyxcbiAgICAgICAgICAgICfijJgnOiA5MSwgY29tbWFuZDogOTFcbiAgICAgICAgfSxcbiAgICAgICAgLy8gc3BlY2lhbCBrZXlzXG4gICAgICAgIF9NQVAgPSB7XG4gICAgICAgICAgICBiYWNrc3BhY2U6IDgsIHRhYjogOSwgY2xlYXI6IDEyLFxuICAgICAgICAgICAgZW50ZXI6IDEzLCAncmV0dXJuJzogMTMsXG4gICAgICAgICAgICBlc2M6IDI3LCBlc2NhcGU6IDI3LCBzcGFjZTogMzIsXG4gICAgICAgICAgICBsZWZ0OiAzNywgdXA6IDM4LFxuICAgICAgICAgICAgcmlnaHQ6IDM5LCBkb3duOiA0MCxcbiAgICAgICAgICAgIGRlbDogNDYsICdkZWxldGUnOiA0NixcbiAgICAgICAgICAgIGhvbWU6IDM2LCBlbmQ6IDM1LFxuICAgICAgICAgICAgcGFnZXVwOiAzMywgcGFnZWRvd246IDM0LFxuICAgICAgICAgICAgJywnOiAxODgsICcuJzogMTkwLCAnLyc6IDE5MSxcbiAgICAgICAgICAgICdgJzogMTkyLCAnLSc6IDE4OSwgJz0nOiAxODcsXG4gICAgICAgICAgICAnOyc6IDE4NiwgJ1xcJyc6IDIyMixcbiAgICAgICAgICAgICdbJzogMjE5LCAnXSc6IDIyMSwgJ1xcXFwnOiAyMjBcbiAgICAgICAgfSxcbiAgICAgICAgY29kZSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gX01BUFt4XSB8fCB4LnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgfSxcbiAgICAgICAgX2Rvd25LZXlzID0gW107XG5cbiAgICBmb3IgKGsgPSAxOyBrIDwgMjA7IGsrKykgX01BUFsnZicgKyBrXSA9IDExMSArIGs7XG5cbiAgICAvLyBJRSBkb2Vzbid0IHN1cHBvcnQgQXJyYXkjaW5kZXhPZiwgc28gaGF2ZSBhIHNpbXBsZSByZXBsYWNlbWVudFxuICAgIGZ1bmN0aW9uIGluZGV4KGFycmF5LCBpdGVtKSB7XG4gICAgICAgIHZhciBpID0gYXJyYXkubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaS0tKSBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLy8gZm9yIGNvbXBhcmluZyBtb2RzIGJlZm9yZSB1bmFzc2lnbm1lbnRcbiAgICBmdW5jdGlvbiBjb21wYXJlQXJyYXkoYTEsIGEyKSB7XG4gICAgICAgIGlmIChhMS5sZW5ndGggIT0gYTIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYTEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhMVtpXSAhPT0gYTJbaV0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgbW9kaWZpZXJNYXAgPSB7XG4gICAgICAgIDE2OiAnc2hpZnRLZXknLFxuICAgICAgICAxODogJ2FsdEtleScsXG4gICAgICAgIDE3OiAnY3RybEtleScsXG4gICAgICAgIDkxOiAnbWV0YUtleSdcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHVwZGF0ZU1vZGlmaWVyS2V5KGV2ZW50KSB7XG4gICAgICAgIGZvciAoayBpbiBfbW9kcykgX21vZHNba10gPSBldmVudFttb2RpZmllck1hcFtrXV07XG4gICAgfTtcblxuICAgIC8vIGhhbmRsZSBrZXlkb3duIGV2ZW50XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2goZXZlbnQpIHtcbiAgICAgICAgdmFyIGtleSwgaGFuZGxlciwgaywgaSwgbW9kaWZpZXJzTWF0Y2gsIHNjb3BlO1xuICAgICAgICBrZXkgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgICAgIGlmIChpbmRleChfZG93bktleXMsIGtleSkgPT0gLTEpIHtcbiAgICAgICAgICAgIF9kb3duS2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBhIG1vZGlmaWVyIGtleSwgc2V0IHRoZSBrZXkuPG1vZGlmaWVya2V5bmFtZT4gcHJvcGVydHkgdG8gdHJ1ZSBhbmQgcmV0dXJuXG4gICAgICAgIGlmIChrZXkgPT0gOTMgfHwga2V5ID09IDIyNCkga2V5ID0gOTE7IC8vIHJpZ2h0IGNvbW1hbmQgb24gd2Via2l0LCBjb21tYW5kIG9uIEdlY2tvXG4gICAgICAgIGlmIChrZXkgaW4gX21vZHMpIHtcbiAgICAgICAgICAgIF9tb2RzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgLy8gJ2Fzc2lnbktleScgZnJvbSBpbnNpZGUgdGhpcyBjbG9zdXJlIGlzIGV4cG9ydGVkIHRvIHdpbmRvdy5rZXlcbiAgICAgICAgICAgIGZvciAoayBpbiBfTU9ESUZJRVJTKSBpZiAoX01PRElGSUVSU1trXSA9PSBrZXkpIGFzc2lnbktleVtrXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlTW9kaWZpZXJLZXkoZXZlbnQpO1xuXG4gICAgICAgIC8vIHNlZSBpZiB3ZSBuZWVkIHRvIGlnbm9yZSB0aGUga2V5cHJlc3MgKGZpbHRlcigpIGNhbiBjYW4gYmUgb3ZlcnJpZGRlbilcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBpZ25vcmUga2V5IHByZXNzZXMgaWYgYSBzZWxlY3QsIHRleHRhcmVhLCBvciBpbnB1dCBpcyBmb2N1c2VkXG4gICAgICAgIGlmICghYXNzaWduS2V5LmZpbHRlci5jYWxsKHRoaXMsIGV2ZW50KSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIGFib3J0IGlmIG5vIHBvdGVudGlhbGx5IG1hdGNoaW5nIHNob3J0Y3V0cyBmb3VuZFxuICAgICAgICBpZiAoIShrZXkgaW4gX2hhbmRsZXJzKSkgcmV0dXJuO1xuXG4gICAgICAgIHNjb3BlID0gZ2V0U2NvcGUoKTtcblxuICAgICAgICAvLyBmb3IgZWFjaCBwb3RlbnRpYWwgc2hvcnRjdXRcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IF9oYW5kbGVyc1trZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYW5kbGVyID0gX2hhbmRsZXJzW2tleV1baV07XG5cbiAgICAgICAgICAgIC8vIHNlZSBpZiBpdCdzIGluIHRoZSBjdXJyZW50IHNjb3BlXG4gICAgICAgICAgICBpZiAoaGFuZGxlci5zY29wZSA9PSBzY29wZSB8fCBoYW5kbGVyLnNjb3BlID09ICdhbGwnKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgbW9kaWZpZXJzIG1hdGNoIGlmIGFueVxuICAgICAgICAgICAgICAgIG1vZGlmaWVyc01hdGNoID0gaGFuZGxlci5tb2RzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgZm9yIChrIGluIF9tb2RzKVxuICAgICAgICAgICAgICAgICAgICBpZiAoKCFfbW9kc1trXSAmJiBpbmRleChoYW5kbGVyLm1vZHMsICtrKSA+IC0xKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKF9tb2RzW2tdICYmIGluZGV4KGhhbmRsZXIubW9kcywgK2spID09IC0xKSkgbW9kaWZpZXJzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBjYWxsIHRoZSBoYW5kbGVyIGFuZCBzdG9wIHRoZSBldmVudCBpZiBuZWNjZXNzYXJ5XG4gICAgICAgICAgICAgICAgaWYgKChoYW5kbGVyLm1vZHMubGVuZ3RoID09IDAgJiYgIV9tb2RzWzE2XSAmJiAhX21vZHNbMThdICYmICFfbW9kc1sxN10gJiYgIV9tb2RzWzkxXSkgfHwgbW9kaWZpZXJzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXIubWV0aG9kKGV2ZW50LCBoYW5kbGVyKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmNhbmNlbEJ1YmJsZSkgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB1bnNldCBtb2RpZmllciBrZXlzIG9uIGtleXVwXG4gICAgZnVuY3Rpb24gY2xlYXJNb2RpZmllcihldmVudCkge1xuICAgICAgICB2YXIga2V5ID0gZXZlbnQua2V5Q29kZSwgayxcbiAgICAgICAgICAgIGkgPSBpbmRleChfZG93bktleXMsIGtleSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGtleSBmcm9tIF9kb3duS2V5c1xuICAgICAgICBpZiAoaSA+PSAwKSB7XG4gICAgICAgICAgICBfZG93bktleXMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSA5MyB8fCBrZXkgPT0gMjI0KSBrZXkgPSA5MTtcbiAgICAgICAgaWYgKGtleSBpbiBfbW9kcykge1xuICAgICAgICAgICAgX21vZHNba2V5XSA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChrIGluIF9NT0RJRklFUlMpIGlmIChfTU9ESUZJRVJTW2tdID09IGtleSkgYXNzaWduS2V5W2tdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVzZXRNb2RpZmllcnMoKSB7XG4gICAgICAgIGZvciAoayBpbiBfbW9kcykgX21vZHNba10gPSBmYWxzZTtcbiAgICAgICAgZm9yIChrIGluIF9NT0RJRklFUlMpIGFzc2lnbktleVtrXSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICAvLyBwYXJzZSBhbmQgYXNzaWduIHNob3J0Y3V0XG4gICAgZnVuY3Rpb24gYXNzaWduS2V5KGtleSwgc2NvcGUsIG1ldGhvZCkge1xuICAgICAgICB2YXIga2V5cywgbW9kcztcbiAgICAgICAga2V5cyA9IGdldEtleXMoa2V5KTtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtZXRob2QgPSBzY29wZTtcbiAgICAgICAgICAgIHNjb3BlID0gJ2FsbCc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3IgZWFjaCBzaG9ydGN1dFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIHNldCBtb2RpZmllciBrZXlzIGlmIGFueVxuICAgICAgICAgICAgbW9kcyA9IFtdO1xuICAgICAgICAgICAga2V5ID0ga2V5c1tpXS5zcGxpdCgnKycpO1xuICAgICAgICAgICAgaWYgKGtleS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgbW9kcyA9IGdldE1vZHMoa2V5KTtcbiAgICAgICAgICAgICAgICBrZXkgPSBba2V5W2tleS5sZW5ndGggLSAxXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb252ZXJ0IHRvIGtleWNvZGUgYW5kLi4uXG4gICAgICAgICAgICBrZXkgPSBrZXlbMF1cbiAgICAgICAgICAgIGtleSA9IGNvZGUoa2V5KTtcbiAgICAgICAgICAgIC8vIC4uLnN0b3JlIGhhbmRsZXJcbiAgICAgICAgICAgIGlmICghKGtleSBpbiBfaGFuZGxlcnMpKSBfaGFuZGxlcnNba2V5XSA9IFtdO1xuICAgICAgICAgICAgX2hhbmRsZXJzW2tleV0ucHVzaCh7IHNob3J0Y3V0OiBrZXlzW2ldLCBzY29wZTogc2NvcGUsIG1ldGhvZDogbWV0aG9kLCBrZXk6IGtleXNbaV0sIG1vZHM6IG1vZHMgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gdW5iaW5kIGFsbCBoYW5kbGVycyBmb3IgZ2l2ZW4ga2V5IGluIGN1cnJlbnQgc2NvcGVcbiAgICBmdW5jdGlvbiB1bmJpbmRLZXkoa2V5LCBzY29wZSkge1xuICAgICAgICB2YXIgbXVsdGlwbGVLZXlzLCBrZXlzLFxuICAgICAgICAgICAgbW9kcyA9IFtdLFxuICAgICAgICAgICAgaSwgaiwgb2JqO1xuXG4gICAgICAgIG11bHRpcGxlS2V5cyA9IGdldEtleXMoa2V5KTtcblxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgbXVsdGlwbGVLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBrZXlzID0gbXVsdGlwbGVLZXlzW2pdLnNwbGl0KCcrJyk7XG5cbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBtb2RzID0gZ2V0TW9kcyhrZXlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5ID0ga2V5c1trZXlzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAga2V5ID0gY29kZShrZXkpO1xuXG4gICAgICAgICAgICBpZiAoc2NvcGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNjb3BlID0gZ2V0U2NvcGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghX2hhbmRsZXJzW2tleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX2hhbmRsZXJzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvYmogPSBfaGFuZGxlcnNba2V5XVtpXTtcbiAgICAgICAgICAgICAgICAvLyBvbmx5IGNsZWFyIGhhbmRsZXJzIGlmIGNvcnJlY3Qgc2NvcGUgYW5kIG1vZHMgbWF0Y2hcbiAgICAgICAgICAgICAgICBpZiAob2JqLnNjb3BlID09PSBzY29wZSAmJiBjb21wYXJlQXJyYXkob2JqLm1vZHMsIG1vZHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9oYW5kbGVyc1trZXldW2ldID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGUga2V5IHdpdGggY29kZSAna2V5Q29kZScgaXMgY3VycmVudGx5IGRvd25cbiAgICAvLyBDb252ZXJ0cyBzdHJpbmdzIGludG8ga2V5IGNvZGVzLlxuICAgIGZ1bmN0aW9uIGlzUHJlc3NlZChrZXlDb2RlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGtleUNvZGUpID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBrZXlDb2RlID0gY29kZShrZXlDb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXgoX2Rvd25LZXlzLCBrZXlDb2RlKSAhPSAtMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcmVzc2VkS2V5Q29kZXMoKSB7XG4gICAgICAgIHJldHVybiBfZG93bktleXMuc2xpY2UoMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YWdOYW1lID0gKGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50KS50YWdOYW1lO1xuICAgICAgICAvLyBpZ25vcmUga2V5cHJlc3NlZCBpbiBhbnkgZWxlbWVudHMgdGhhdCBzdXBwb3J0IGtleWJvYXJkIGRhdGEgaW5wdXRcbiAgICAgICAgcmV0dXJuICEodGFnTmFtZSA9PSAnSU5QVVQnIHx8IHRhZ05hbWUgPT0gJ1NFTEVDVCcgfHwgdGFnTmFtZSA9PSAnVEVYVEFSRUEnKTtcbiAgICB9XG5cbiAgICAvLyBpbml0aWFsaXplIGtleS48bW9kaWZpZXI+IHRvIGZhbHNlXG4gICAgZm9yIChrIGluIF9NT0RJRklFUlMpIGFzc2lnbktleVtrXSA9IGZhbHNlO1xuXG4gICAgLy8gc2V0IGN1cnJlbnQgc2NvcGUgKGRlZmF1bHQgJ2FsbCcpXG4gICAgZnVuY3Rpb24gc2V0U2NvcGUoc2NvcGUpIHsgX3Njb3BlID0gc2NvcGUgfHwgJ2FsbCcgfTtcbiAgICBmdW5jdGlvbiBnZXRTY29wZSgpIHsgcmV0dXJuIF9zY29wZSB8fCAnYWxsJyB9O1xuXG4gICAgLy8gZGVsZXRlIGFsbCBoYW5kbGVycyBmb3IgYSBnaXZlbiBzY29wZVxuICAgIGZ1bmN0aW9uIGRlbGV0ZVNjb3BlKHNjb3BlKSB7XG4gICAgICAgIHZhciBrZXksIGhhbmRsZXJzLCBpO1xuXG4gICAgICAgIGZvciAoa2V5IGluIF9oYW5kbGVycykge1xuICAgICAgICAgICAgaGFuZGxlcnMgPSBfaGFuZGxlcnNba2V5XTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJzW2ldLnNjb3BlID09PSBzY29wZSkgaGFuZGxlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGVsc2UgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGFic3RyYWN0IGtleSBsb2dpYyBmb3IgYXNzaWduIGFuZCB1bmFzc2lnblxuICAgIGZ1bmN0aW9uIGdldEtleXMoa2V5KSB7XG4gICAgICAgIHZhciBrZXlzO1xuICAgICAgICBrZXkgPSBrZXkucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAga2V5cyA9IGtleS5zcGxpdCgnLCcpO1xuICAgICAgICBpZiAoKGtleXNba2V5cy5sZW5ndGggLSAxXSkgPT0gJycpIHtcbiAgICAgICAgICAgIGtleXNba2V5cy5sZW5ndGggLSAyXSArPSAnLCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfVxuXG4gICAgLy8gYWJzdHJhY3QgbW9kcyBsb2dpYyBmb3IgYXNzaWduIGFuZCB1bmFzc2lnblxuICAgIGZ1bmN0aW9uIGdldE1vZHMoa2V5KSB7XG4gICAgICAgIHZhciBtb2RzID0ga2V5LnNsaWNlKDAsIGtleS5sZW5ndGggLSAxKTtcbiAgICAgICAgZm9yICh2YXIgbWkgPSAwOyBtaSA8IG1vZHMubGVuZ3RoOyBtaSsrKVxuICAgICAgICAgICAgbW9kc1ttaV0gPSBfTU9ESUZJRVJTW21vZHNbbWldXTtcbiAgICAgICAgcmV0dXJuIG1vZHM7XG4gICAgfVxuXG4gICAgLy8gY3Jvc3MtYnJvd3NlciBldmVudHNcbiAgICBmdW5jdGlvbiBhZGRFdmVudChvYmplY3QsIGV2ZW50LCBtZXRob2QpIHtcbiAgICAgICAgaWYgKG9iamVjdC5hZGRFdmVudExpc3RlbmVyKVxuICAgICAgICAgICAgb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG1ldGhvZCwgZmFsc2UpO1xuICAgICAgICBlbHNlIGlmIChvYmplY3QuYXR0YWNoRXZlbnQpXG4gICAgICAgICAgICBvYmplY3QuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBmdW5jdGlvbiAoKSB7IG1ldGhvZCh3aW5kb3cuZXZlbnQpIH0pO1xuICAgIH07XG5cbiAgICAvLyBzZXQgdGhlIGhhbmRsZXJzIGdsb2JhbGx5IG9uIGRvY3VtZW50XG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsICdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7IGRpc3BhdGNoKGV2ZW50KSB9KTsgLy8gUGFzc2luZyBfc2NvcGUgdG8gYSBjYWxsYmFjayB0byBlbnN1cmUgaXQgcmVtYWlucyB0aGUgc2FtZSBieSBleGVjdXRpb24uIEZpeGVzICM0OFxuICAgIGFkZEV2ZW50KGRvY3VtZW50LCAna2V5dXAnLCBjbGVhck1vZGlmaWVyKTtcblxuICAgIC8vIHJlc2V0IG1vZGlmaWVycyB0byBmYWxzZSB3aGVuZXZlciB0aGUgd2luZG93IGlzIChyZSlmb2N1c2VkLlxuICAgIGFkZEV2ZW50KHdpbmRvdywgJ2ZvY3VzJywgcmVzZXRNb2RpZmllcnMpO1xuXG4gICAgLy8gc3RvcmUgcHJldmlvdXNseSBkZWZpbmVkIGtleVxuICAgIHZhciBwcmV2aW91c0tleSA9IHdpbmRvdy5rZXk7XG5cbiAgICAvLyByZXN0b3JlIHByZXZpb3VzbHkgZGVmaW5lZCBrZXkgYW5kIHJldHVybiByZWZlcmVuY2UgdG8gb3VyIGtleSBvYmplY3RcbiAgICBmdW5jdGlvbiBub0NvbmZsaWN0KCkge1xuICAgICAgICB2YXIgayA9IHdpbmRvdy5rZXk7XG4gICAgICAgIHdpbmRvdy5rZXkgPSBwcmV2aW91c0tleTtcbiAgICAgICAgcmV0dXJuIGs7XG4gICAgfVxuXG4gICAgLy8gc2V0IHdpbmRvdy5rZXkgYW5kIHdpbmRvdy5rZXkuc2V0L2dldC9kZWxldGVTY29wZSwgYW5kIHRoZSBkZWZhdWx0IGZpbHRlclxuICAgIHdpbmRvdy5rZXkgPSBhc3NpZ25LZXk7XG4gICAgd2luZG93LmtleS5zZXRTY29wZSA9IHNldFNjb3BlO1xuICAgIHdpbmRvdy5rZXkuZ2V0U2NvcGUgPSBnZXRTY29wZTtcbiAgICB3aW5kb3cua2V5LmRlbGV0ZVNjb3BlID0gZGVsZXRlU2NvcGU7XG4gICAgd2luZG93LmtleS5maWx0ZXIgPSBmaWx0ZXI7XG4gICAgd2luZG93LmtleS5pc1ByZXNzZWQgPSBpc1ByZXNzZWQ7XG4gICAgd2luZG93LmtleS5nZXRQcmVzc2VkS2V5Q29kZXMgPSBnZXRQcmVzc2VkS2V5Q29kZXM7XG4gICAgd2luZG93LmtleS5ub0NvbmZsaWN0ID0gbm9Db25mbGljdDtcbiAgICB3aW5kb3cua2V5LnVuYmluZCA9IHVuYmluZEtleTtcblxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykgbW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25LZXk7XG5cbn0pKHRoaXMpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHNpemUud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgaXNPdmVybGFwcGluZ090aGVyUmVjdChyZWN0Q2xhc3MpIHtcbiAgICAgICAgY29uc3QgbXlCb3VuZHMgPSB0aGlzLmdldEJvdW5kcygpXG4gICAgICAgIGNvbnN0IHJlY3QgPSByZWN0Q2xhc3MuZ2V0Qm91bmRzKClcbiAgICAgICAgaWYgKG15Qm91bmRzLmxlZnQgPiByZWN0LnJpZ2h0IHx8IG15Qm91bmRzLnJpZ2h0IDwgcmVjdC5sZWZ0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG15Qm91bmRzLnRvcCA+IHJlY3QuYm90dG9tIHx8IG15Qm91bmRzLmJvdHRvbSA8IHJlY3QudG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHRcbiAgICAgICAgfTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9