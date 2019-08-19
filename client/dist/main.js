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

    function Court(dimensions) {
        _classCallCheck(this, Court);

        var _this = _possibleConstructorReturn(this, (Court.__proto__ || Object.getPrototypeOf(Court)).call(this, { width: dimensions.width, height: CONSTANTS.COURT_WIDTH }));

        _this.position = {
            x: 0,
            y: dimensions.height * CONSTANTS.COURT_FLOOR
        };
        _this.color = "green";
        _this.courtImage = new Image();
        _this.courtImage.src = "src/assets/bballcourtsmall.png";
        return _this;
    }

    _createClass(Court, [{
        key: "animate",
        value: function animate(ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
            ctx.drawImage(this.courtImage, this.position.x - this.courtImage.width / 12, this.position.y - this.courtImage.height / 2, this.width + this.courtImage.width / 6, this.courtImage.height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9jb3VydC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9ob29wLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvbWVudV9zY3JlZW5zL2NoYXJhY3Rlcl9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9tZW51X3NjcmVlbnMvbWFpbl9tZW51LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvb25saW5lX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllcjIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMva2V5bWFzdGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvcmVjdC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIk5CQUphbUdhbWUiLCJDT05TVEFOVFMiLCJSQURJVVMiLCJHUkFWSVRZIiwiQk9VTkNFX1JFVEVOVElPTiIsIkRSSUJCTEVfU1BFRUQiLCJCYWxsIiwiZGltZW5zaW9ucyIsImNvdXJ0IiwibGVmdEhvb3AiLCJyaWdodEhvb3AiLCJnYW1lSWQiLCJiYWxsIiwicG9zaXRpb24iLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwidmVsb2NpdHkiLCJjb2xvciIsInBvc3Nlc3Npb24iLCJub1RvdWNoIiwicG93ZXIiLCJjdHgiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwicmFkaXVzIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsInBsYXllciIsInNvY2tldCIsImVtaXQiLCJmcm9tU29ja2V0IiwiaWQiLCJzaG9vdGluZ1BsYXllciIsImZhY2luZ1JpZ2h0Iiwic2hvb3RpbmdUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbGVhc2VCYWxsIiwic2NvcmVQb3NpdGlvbiIsInNjb3JlSGl0Ym94IiwiaHlwb3QiLCJudW1iZXJPZkZyYW1lcyIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsImRpZmYiLCJhZGp1c3RlZFgiLCJyZW1vdmVQb3NzZXNzaW9uIiwiZmFsbCIsIm1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbiIsImNoZWNrQm91bmRzIiwianVtcGluZyIsIkNpcmNsZSIsIkNPVVJUX0ZMT09SIiwiQ09VUlRfV0lEVEgiLCJDb3VydCIsImNvdXJ0SW1hZ2UiLCJJbWFnZSIsInNyYyIsImZpbGxSZWN0IiwiZHJhd0ltYWdlIiwiUmVjdCIsImdldENvbnRleHQiLCJtYWluTWVudSIsIk1haW5NZW51Iiwic3RhcnRHYW1lIiwiYmluZCIsInN0YXJ0T25saW5lR2FtZSIsInBsYXlpbmdHYW1lIiwicmVuZGVyTWVudSIsInNldHVwS2V5SGFuZGxlcnMiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsZWZ0U3ByaXRlIiwicmlnaHRTcHJpdGUiLCJyZXN0YXJ0IiwibXlTaWRlIiwib25saW5lR2FtZUlkIiwicnVuT25saW5lR2FtZSIsIkhvb3AiLCJzY29yZWJvYXJkIiwiU2NvcmVib2FyZCIsIlBsYXllciIsInBsYXllcjIiLCJQbGF5ZXIyIiwiYW5pbWF0ZSIsImdhbWVPdmVyIiwiZGlzcGxheVdpbm5lciIsIm15UGxheWVyIiwiT25saW5lUGxheWVyIiwib3RoZXJQbGF5ZXIiLCJvbiIsImRhdGEiLCJzaG93TWVudSIsInJ1bk9ubGluZSIsIm90aGVyUGxheWVyRmFjaW5nIiwib3RoZXJQbGF5ZXJKdW1waW5nIiwidGltZUxlZnQiLCJ0ZXh0Iiwic2NvcmUiLCJsb2MiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZVRleHQiLCJIT09QX1lfTVVMVElQTElFUiIsIkhPT1BfSEVJR0hUIiwiSE9PUF9XSURUSCIsIkhPT1BfWF9ESVNUQU5DRSIsIkJBQ0tCT0FSRF9XSURUSCIsIkJBQ0tCT0FSRF9IRUlHSFQiLCJob29wU2lkZSIsImJhY2tib2FyZCIsIkJhY2tib2FyZCIsIlNjb3JlSGl0Ym94IiwianVzdFNjb3JlZCIsImNoZWNrQmFsbENvbGxpc2lvbiIsImlzT3ZlcmxhcHBpbmdSZWN0IiwiaG9vcCIsIkNoYXJhY3RlclNlbGVjdCIsInNlbGVjdGVkQ2hhcmFjdGVycyIsImxlZnRTZWxlY3RlZCIsInJpZ2h0U2VsZWN0ZWQiLCJjaGFyYWN0ZXJzIiwibmFtZSIsImxlZnRDaGFyIiwicmlnaHRDaGFyIiwibGVmdFJlYWR5IiwicmlnaHRSZWFkeSIsImxlZnRQbGF5ZXJJZCIsInJpZ2h0UGxheWVySWQiLCJpc1BsYXlpbmdMZWZ0IiwiaXNQbGF5aW5nUmlnaHQiLCJrZXkiLCJ1bmJpbmQiLCJsZWZ0U2lkZUNoYXIiLCJvbmxpbmVNb2RlIiwicmlnaHRTaWRlQ2hhciIsImxlbmd0aCIsInNlbGVjdGVkT3B0aW9uIiwib3B0aW9ucyIsImNoYXJhY3RlclNlbGVjdCIsInNlbGVjdGluZ0NoYXJhY3RlcnMiLCJsZWZ0U3JjIiwicmlnaHRTcmMiLCJmb3JFYWNoIiwib3B0aW9uIiwiaSIsIm1lYXN1cmVUZXh0IiwiYWJzIiwiUExBWUVSX1dJRFRIIiwiUExBWUVSX0hFSUdIVCIsIk1PVkVTUEVFRCIsIkpVTVBfSEVJR0hUIiwic3ByaXRlU3JjIiwic3RhcnRTaWRlIiwiYWN0aXZlIiwic3ByaXRlIiwiaXNQcmVzc2VkIiwicHJlZm9ybUFjdGlvbiIsImNoZWNrQmFsbCIsImhhbmRsZUdyYXZpdHkiLCJzaG9vdCIsImNsYWltUG9zc2Vzc2lvbiIsImNvdW50RG93biIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJlY3QiLCJkaXN0WCIsImRpc3RZIiwiZHgiLCJkeSIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImdsb2JhbCIsImsiLCJfaGFuZGxlcnMiLCJfbW9kcyIsIl9zY29wZSIsIl9NT0RJRklFUlMiLCJzaGlmdCIsImFsdCIsImN0cmwiLCJjb250cm9sIiwiY29tbWFuZCIsIl9NQVAiLCJiYWNrc3BhY2UiLCJ0YWIiLCJjbGVhciIsImVudGVyIiwiZXNjIiwiZXNjYXBlIiwic3BhY2UiLCJ1cCIsImRvd24iLCJkZWwiLCJob21lIiwiZW5kIiwicGFnZXVwIiwicGFnZWRvd24iLCJjb2RlIiwidG9VcHBlckNhc2UiLCJjaGFyQ29kZUF0IiwiX2Rvd25LZXlzIiwiaW5kZXgiLCJhcnJheSIsIml0ZW0iLCJjb21wYXJlQXJyYXkiLCJhMSIsImEyIiwibW9kaWZpZXJNYXAiLCJ1cGRhdGVNb2RpZmllcktleSIsImV2ZW50IiwiZGlzcGF0Y2giLCJoYW5kbGVyIiwibW9kaWZpZXJzTWF0Y2giLCJzY29wZSIsImtleUNvZGUiLCJwdXNoIiwiYXNzaWduS2V5IiwiZmlsdGVyIiwiY2FsbCIsImdldFNjb3BlIiwibW9kcyIsIm1ldGhvZCIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJjYW5jZWxCdWJibGUiLCJjbGVhck1vZGlmaWVyIiwic3BsaWNlIiwicmVzZXRNb2RpZmllcnMiLCJrZXlzIiwiZ2V0S2V5cyIsInVuZGVmaW5lZCIsInNwbGl0IiwiZ2V0TW9kcyIsInNob3J0Y3V0IiwidW5iaW5kS2V5IiwibXVsdGlwbGVLZXlzIiwiaiIsIm9iaiIsImdldFByZXNzZWRLZXlDb2RlcyIsInNsaWNlIiwidGFnTmFtZSIsInRhcmdldCIsInNyY0VsZW1lbnQiLCJzZXRTY29wZSIsImRlbGV0ZVNjb3BlIiwiaGFuZGxlcnMiLCJyZXBsYWNlIiwibWkiLCJhZGRFdmVudCIsIm9iamVjdCIsImF0dGFjaEV2ZW50Iiwid2luZG93IiwicHJldmlvdXNLZXkiLCJub0NvbmZsaWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsInNpemUiLCJyZWN0Q2xhc3MiLCJteUJvdW5kcyIsImdldEJvdW5kcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7QUFFQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsUUFBTUMsU0FBU0YsU0FBU0csY0FBVCxDQUF3QixjQUF4QixDQUFmO0FBQ0EsUUFBSUMsY0FBSixDQUFlRixNQUFmO0FBQ0gsQ0FIRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNRyxZQUFZO0FB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eEssUUFBTCxDQUFjRyxDQUhoQjtBQUlIc0ssd0JBQVEsS0FBS3pLLFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixLQUFLQztBQUo1QixhQUFQO0FBTUg7Ozs7OztrQkF6QmdCaUQsSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jbGllbnQvc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IE5CQUphbUdhbWUgZnJvbSAnLi9qcy9nYW1lLmpzJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYmEtamFtLWdhbWUnKTtcbiAgICBuZXcgTkJBSmFtR2FtZShjYW52YXMpO1xufSk7IiwiaW1wb3J0IENpcmNsZSBmcm9tIFwiLi91dGlscy9jaXJjbGVcIjtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIFJBRElVUzogMTUsXG4gICAgR1JBVklUWTogMC41LFxuICAgIEJPVU5DRV9SRVRFTlRJT046IDAuNixcbiAgICBEUklCQkxFX1NQRUVEOiAzLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIGV4dGVuZHMgQ2lyY2xlIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBjb3VydCwgbGVmdEhvb3AsIHJpZ2h0SG9vcCwgZ2FtZUlkKSB7XG4gICAgICAgIHN1cGVyKENPTlNUQU5UUy5SQURJVVMpXG4gICAgICAgIHRoaXMuY291cnQgPSBjb3VydFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBsZWZ0SG9vcFxuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IHJpZ2h0SG9vcFxuICAgICAgICB0aGlzLmxlZnRIb29wLmJhbGwgPSB0aGlzXG4gICAgICAgIHRoaXMucmlnaHRIb29wLmJhbGwgPSB0aGlzXG5cbiAgICAgICAgdGhpcy5nYW1lSWQgPSBnYW1lSWRcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jb3VydC53aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMlxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImhvdHBpbmtcIlxuICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgIHRoaXMubm9Ub3VjaCA9IHt9XG4gICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCwgXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnksIFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsIFxuICAgICAgICAgICAgMCwgXG4gICAgICAgICAgICBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIFxuICAgIGNsYWltUG9zc2Vzc2lvbihwbGF5ZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vVG91Y2hbcGxheWVyLmNvbG9yXSkge1xuICAgICAgICAgICAgdGhpcy5wb3NzZXNzaW9uID0gcGxheWVyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcImNoYW5nZU9mUG9zc2VzaW9uXCIsIHtcbiAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkLFxuICAgICAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc2hvb3QgKCkge1xuICAgICAgICAvLyBCRVRBIFNIT09USU5HXG5cbiAgICAgICAgLy8gdGhpcy5wb3dlciArPSAxXG4gICAgICAgIC8vIGNvbnN0IHNob290aW5nUGxheWVyID0gdGhpcy5wb3NzZXNzaW9uXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID9cbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54ICsgc2hvb3RpbmdQbGF5ZXIud2lkdGggKyB0aGlzLnJhZGl1cykgOlxuICAgICAgICAvLyAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cylcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ID0gc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueVxuXG4gICAgICAgIC8vIGlmICh0aGlzLnNob290aW5nSW50ZXJ2YWwgJiYgdGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgIC8vICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG9vdGluZ0ludGVydmFsKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmICh0aGlzLnBvd2VyIDwgNjApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuc2hvb3RpbmdJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gNiA6IC02XG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gdGhpcy5wb3dlclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcbiAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWUgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gZmFsc2VcbiAgICAgICAgLy8gICAgICAgICB9LCA1MDApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgICAgIC8vICAgICB9LCAyMCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBBSU1CT1QgU0hPT1RJTkdcblxuICAgICAgICAvLyBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICAvLyBjb25zdCBzY29yZVBvc2l0aW9uID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgPyAoXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgeDogdGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueCArICh0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC53aWR0aCAvIDIpLFxuICAgICAgICAvLyAgICAgICAgIHk6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnlcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gKSA6IChcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICB4OiB0aGlzLmxlZnRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgLy8gICAgICAgICB5OiB0aGlzLmxlZnRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnlcbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyApXG5cbiAgICAgICAgLy8gY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSA1MFxuXG4gICAgICAgIC8vIGNvbnN0IHZlbG9jaXR5WCA9IChzY29yZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICAgICAgLy8gY29uc3QgdmVsb2NpdHlZID0gKCAoLXNjb3JlUG9zaXRpb24ueSArIHRoaXMucG9zaXRpb24ueSkgLSAwLjUgKiAtQ09OU1RBTlRTLkdSQVZJVFkgKiAobnVtYmVyT2ZGcmFtZXMgKiBudW1iZXJPZkZyYW1lcykgKSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAvLyAgICAgeDogdmVsb2NpdHlYLFxuICAgICAgICAvLyAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gdHJ1ZSAgICAgICAgXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IGZhbHNlXG4gICAgICAgIC8vIH0sIDUwMCk7XG5cbiAgICAgICAgLy8gdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuXG4gICAgICAgIC8vIFBPV0VSQkFTRUQgQUlNRUQgU0hPT1RJTkdcblxuXG4gICAgICAgIHRoaXMucG93ZXIgKz0gMVxuXG4gICAgICAgIGNvbnN0IHNob290aW5nUGxheWVyID0gdGhpcy5wb3NzZXNzaW9uXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID9cbiAgICAgICAgICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54ICsgc2hvb3RpbmdQbGF5ZXIud2lkdGggKyB0aGlzLnJhZGl1cykgOlxuICAgICAgICAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cylcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueVxuXG4gICAgICAgIGlmICh0aGlzLnNob290aW5nVGltZW91dCAmJiB0aGlzLnBvd2VyIDwgNjApIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNob290aW5nVGltZW91dClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgICAgICB0aGlzLnNob290aW5nVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVsZWFzZUJhbGwoKVxuICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZWxlYXNlQmFsbCAoKSB7XG4gICAgICAgIGNvbnN0IHNob290aW5nUGxheWVyID0gdGhpcy5wb3NzZXNzaW9uXG5cbiAgICAgICAgY29uc3Qgc2NvcmVQb3NpdGlvbiA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgICAgICB9XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgICAgICB9XG4gICAgICAgIClcblxuICAgICAgICAvLyBMQVlVUFxuICAgICAgICBpZiAoMTUwID4gTWF0aC5oeXBvdCh0aGlzLnBvc2l0aW9uLnggLSBzY29yZVBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSAtIHNjb3JlUG9zaXRpb24ueSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlck9mRnJhbWVzID0gMzBcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WCA9IChzY29yZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WSA9ICgoLXNjb3JlUG9zaXRpb24ueSArIHRoaXMucG9zaXRpb24ueSkgLSAwLjUgKiAtQ09OU1RBTlRTLkdSQVZJVFkgKiAobnVtYmVyT2ZGcmFtZXMgKiBudW1iZXJPZkZyYW1lcykpIC8gbnVtYmVyT2ZGcmFtZXNcblxuICAgICAgICAgICAgY29uc3QgZGlmZiA9ICh0aGlzLnBvd2VyIC0gMzApIC8gMjBcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkWCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCArIGRpZmZcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYIC0gZGlmZlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgICAgICB4OiBhZGp1c3RlZFgsXG4gICAgICAgICAgICAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTSE9UXG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IDUwXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WCA9IChzY29yZVBvc2l0aW9uLnggLSB0aGlzLnBvc2l0aW9uLngpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5WSA9ICgoLXNjb3JlUG9zaXRpb24ueSArIHRoaXMucG9zaXRpb24ueSkgLSAwLjUgKiAtQ09OU1RBTlRTLkdSQVZJVFkgKiAobnVtYmVyT2ZGcmFtZXMgKiBudW1iZXJPZkZyYW1lcykpIC8gbnVtYmVyT2ZGcmFtZXNcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAodGhpcy5wb3dlciAtIDMwKSAvIDZcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdGVkWCA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCArIGRpZmZcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlYIC0gZGlmZlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgICAgICB4OiBhZGp1c3RlZFgsXG4gICAgICAgICAgICAgICAgeTogdmVsb2NpdHlZXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gdHJ1ZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSBmYWxzZVxuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIHRoaXMucG93ZXIgPSAwXG4gICAgICAgIHRoaXMucmVtb3ZlUG9zc2Vzc2lvbigpXG5cbiAgICB9XG5cbiAgICByZW1vdmVQb3NzZXNzaW9uKCkge1xuICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgIHNvY2tldC5lbWl0KFwicmVtb3ZlQmFsbFBvc3Nlc3Npb25cIiwge1xuICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZCxcbiAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiB0aGlzLnZlbG9jaXR5LFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb25cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5wb3NzZXNzaW9uKSB7XG4gICAgICAgICAgICB0aGlzLmZhbGwoKVxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbigpIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG4gICAgbW92ZVdpdGhQbGF5ZXJQb3NzZXNzaW9uKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnBvc3Nlc3Npb24uZmFjaW5nUmlnaHQgP1xuICAgICAgICAgICAgKHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi54ICsgdGhpcy5wb3NzZXNzaW9uLndpZHRoKSA6ICh0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueClcblxuICAgICAgICBpZiAodGhpcy5wb3NzZXNzaW9uLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIC8vIEhPTEQgQkFMTFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLnkgKyB0aGlzLnBvc3Nlc3Npb24uaGVpZ2h0IC8gMlxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEUklCQkxJTkdcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPCB0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueSArIHRoaXMucG9zc2Vzc2lvbi5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLUNPTlNUQU5UUy5EUklCQkxFX1NQRUVEXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+IHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi55ICsgdGhpcy5wb3NzZXNzaW9uLmhlaWdodCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkRSSUJCTEVfU1BFRURcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5LnlcbiAgICAgICAgfVxuICAgICAgICAvLyBzb2NrZXQuZW1pdChcInVwZGF0ZUJhbGxXaXRoUG9zXCIsIHtcbiAgICAgICAgLy8gICAgIGdhbWVJZDogdGhpcy5nYW1lSWQsXG4gICAgICAgIC8vICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgIC8vICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICAvLyAgICAgb3RoZXJQbGF5ZXJGYWNpbmc6IHRoaXMucG9zc2Vzc2lvbi5mYWNpbmdSaWdodFxuICAgICAgICAvLyB9KVxuICAgIH1cblxuXG4gICAgZmFsbCAoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgICAgIC8vIEdSQVZJVFlcbiAgICAgICAgLy8gaWYgdGhlIHBvcyBpcyBncmVhdGVyIHRoYW4gdGhlIGZsb29yXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnJhZGl1cyA8IHRoaXMuY291cnQucG9zaXRpb24ueSkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IENPTlNUQU5UUy5HUkFWSVRZO1xuICAgICAgICAgICAgLy8gZWxzZSBzZXQgdGhlIHJldmVyc2UgdmVsb2NpdHlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZlbG9jaXR5LnkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy52ZWxvY2l0eS55ICogQ09OU1RBTlRTLkJPVU5DRV9SRVRFTlRJT05cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2hlY2tCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY291cnQud2lkdGggLSB0aGlzLnJhZGl1c1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDBcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5LnhcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCBSZWN0IGZyb20gXCIuL3V0aWxzL3JlY3RcIjtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIENPVVJUX0ZMT09SOiAwLjg1LFxuICAgIENPVVJUX1dJRFRIOiA1XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VydCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogZGltZW5zaW9ucy53aWR0aCwgaGVpZ2h0OiBDT05TVEFOVFMuQ09VUlRfV0lEVEggfSlcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAqIENPTlNUQU5UUy5DT1VSVF9GTE9PUlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImdyZWVuXCJcbiAgICAgICAgdGhpcy5jb3VydEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuY291cnRJbWFnZS5zcmMgPSBcInNyYy9hc3NldHMvYmJhbGxjb3VydHNtYWxsLnBuZ1wiXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuY291cnRJbWFnZSxcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIHRoaXMuY291cnRJbWFnZS53aWR0aCAvIDEyLCBcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuY291cnRJbWFnZS5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgdGhpcy53aWR0aCArIHRoaXMuY291cnRJbWFnZS53aWR0aCAvIDYsXG4gICAgICAgICAgICB0aGlzLmNvdXJ0SW1hZ2UuaGVpZ2h0KTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJ1xuaW1wb3J0IENvdXJ0IGZyb20gJy4vY291cnQnO1xuaW1wb3J0IEhvb3AgZnJvbSAnLi9ob29wJztcbmltcG9ydCBCYWxsIGZyb20gJy4vYmFsbCc7XG5pbXBvcnQgU2NvcmVib2FyZCBmcm9tICcuL3Njb3JlYm9hcmQnO1xuaW1wb3J0IFBsYXllcjIgZnJvbSAnLi9wbGF5ZXIyJztcbmltcG9ydCBNYWluTWVudSBmcm9tICcuL21lbnVfc2NyZWVucy9tYWluX21lbnUnO1xuaW1wb3J0IE9ubGluZVBsYXllciBmcm9tICcuL29ubGluZV9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOQkFKYW1HYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHsgICAgICAgIFxuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgICAgIHRoaXMubWFpbk1lbnUgPSBuZXcgTWFpbk1lbnUodGhpcy5kaW1lbnNpb25zLCB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpLCB0aGlzLnN0YXJ0T25saW5lR2FtZS5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVuZGVyTWVudSgpXG4gICAgfVxuXG4gICAgc2hvd01lbnUoKSB7XG4gICAgICAgIHRoaXMubWFpbk1lbnUuc2V0dXBLZXlIYW5kbGVycygpXG4gICAgICAgIHRoaXMucmVuZGVyTWVudSh0aGlzLmN0eClcbiAgICB9XG5cbiAgICByZW5kZXJNZW51ICgpIHtcbiAgICAgICAgdGhpcy5tYWluTWVudS5yZW5kZXIodGhpcy5jdHgpXG4gICAgICAgIGlmICghdGhpcy5wbGF5aW5nR2FtZSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyTWVudS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBzdGFydEdhbWUgKGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlKSB7XG4gICAgICAgIHRoaXMucGxheWluZ0dhbWUgPSB0cnVlXG4gICAgICAgIHRoaXMucmVzdGFydChsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSlcbiAgICB9XG5cbiAgICBzdGFydE9ubGluZUdhbWUobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUsIG15U2lkZSwgZ2FtZUlkKSB7XG4gICAgICAgIHRoaXMucGxheWluZ0dhbWUgPSB0cnVlXG4gICAgICAgIHRoaXMub25saW5lR2FtZUlkID0gZ2FtZUlkXG4gICAgICAgIHRoaXMucnVuT25saW5lR2FtZShsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSwgbXlTaWRlKVxuICAgIH1cblxuICAgIHJlc3RhcnQobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUpIHtcbiAgICAgICAgLy8gU1RBUlQgQU5JTUFUSU9OIFNZQ0xFXG4gICAgICAgIHRoaXMuY291cnQgPSBuZXcgQ291cnQodGhpcy5kaW1lbnNpb25zKTtcbiAgICAgICAgdGhpcy5sZWZ0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJMRUZUXCIpO1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJSSUdIVFwiKTtcbiAgICAgICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5kaW1lbnNpb25zLCB0aGlzLmNvdXJ0LCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcClcblxuICAgICAgICB0aGlzLnNjb3JlYm9hcmQgPSBuZXcgU2NvcmVib2FyZCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMubGVmdEhvb3AsIHRoaXMucmlnaHRIb29wKVxuXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIHJpZ2h0U3ByaXRlKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcjIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCBsZWZ0U3ByaXRlKTtcblxuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG4gICAgXG4gICAgYW5pbWF0ZSgpIHsgICAgICAgIFxuICAgICAgICAvLyBDUkVBVEVTIEJBQ0tHUk9VTkRcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY291cnQuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgLy8gQU5JTUFURSBPQkpFQ1RTXG4gICAgICAgIHRoaXMucGxheWVyLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMucGxheWVyMi5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmJhbGwuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5sZWZ0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLnJpZ2h0SG9vcC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zY29yZWJvYXJkLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5nYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlXaW5uZXIoKVxuICAgICAgICB9XG4gICAgICAgIC8vIFJFUVVFU1QgTkVYVCBGUkFNRVxuICAgICAgICBpZiAodGhpcy5wbGF5aW5nR2FtZSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBydW5PbmxpbmVHYW1lKGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlLCBteVNpZGUpIHtcbiAgICAgICAgdGhpcy5jb3VydCA9IG5ldyBDb3VydCh0aGlzLmRpbWVuc2lvbnMpO1xuICAgICAgICB0aGlzLmxlZnRIb29wID0gbmV3IEhvb3AodGhpcy5kaW1lbnNpb25zLCBcIkxFRlRcIik7XG4gICAgICAgIHRoaXMucmlnaHRIb29wID0gbmV3IEhvb3AodGhpcy5kaW1lbnNpb25zLCBcIlJJR0hUXCIpO1xuICAgICAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuY291cnQsIHRoaXMubGVmdEhvb3AsIHRoaXMucmlnaHRIb29wLCB0aGlzLm9ubGluZUdhbWVJZClcblxuICAgICAgICB0aGlzLnNjb3JlYm9hcmQgPSBuZXcgU2NvcmVib2FyZCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMubGVmdEhvb3AsIHRoaXMucmlnaHRIb29wKVxuXG4gICAgICAgIGlmIChteVNpZGUgPT09IFwiTEVGVFwiKSB7XG4gICAgICAgICAgICB0aGlzLm15UGxheWVyID0gbmV3IE9ubGluZVBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIGxlZnRTcHJpdGUsIFwiTEVGVFwiLCB0cnVlKVxuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllciA9IG5ldyBPbmxpbmVQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCByaWdodFNwcml0ZSwgXCJSSUdIVFwiLCBmYWxzZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIgPSBuZXcgT25saW5lUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgbGVmdFNwcml0ZSwgXCJMRUZUXCIsIGZhbHNlKVxuICAgICAgICAgICAgdGhpcy5teVBsYXllciA9IG5ldyBPbmxpbmVQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCByaWdodFNwcml0ZSwgXCJSSUdIVFwiLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlT3RoZXJQb3NcIiwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIucG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgeDogZGF0YVtcInhcIl0sXG4gICAgICAgICAgICAgICAgeTogZGF0YVtcInlcIl0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyLmZhY2luZ1JpZ2h0ICA9IGRhdGFbXCJvdGhlclBsYXllckZhY2luZ1wiXVxuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllci5qdW1waW5nID0gZGF0YVtcIm90aGVyUGxheWVySnVtcGluZ1wiXVxuICAgICAgICB9KSBcbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlQmFsbFBvc3Nlc2lvblwiLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmFsbC5wb3NzZXNzaW9uID0gdGhpcy5vdGhlclBsYXllclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJyZWdpc3RlcmVkUG9zc2VzaW9uQ2hhbmdlXCIsIHtcbiAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMub25saW5lR2FtZUlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVOb0JhbGxQb3NzZXNpb25cIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJhbGwucG9zc2Vzc2lvbiA9IG51bGxcbiAgICAgICAgICAgIHRoaXMuYmFsbC5wb3NpdGlvbiA9IGRhdGFbXCJwb3NpdGlvblwiXVxuICAgICAgICAgICAgdGhpcy5iYWxsLnZlbG9jaXR5ID0gZGF0YVtcInZlbG9jaXR5XCJdXG4gICAgICAgIH0pXG4gICAgICAgIC8vIHNvY2tldC5vbihcInVwZGF0ZUJhbGxQb3NcIiwgZGF0YSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmJhbGwucG9zaXRpb24gPSBkYXRhW1wicG9zaXRpb25cIl1cbiAgICAgICAgLy8gICAgIHRoaXMuYmFsbC52ZWxvY2l0eSA9IGRhdGFbXCJ2ZWxvY2l0eVwiXVxuICAgICAgICAvLyAgICAgdGhpcy5vdGhlclBsYXllci5mYWNpbmdSaWdodCA9IGRhdGFbXCJvdGhlclBsYXllckZhY2luZ1wiXVxuICAgICAgICAvLyB9KVxuICAgICAgICBzb2NrZXQub24oXCJlbmRHYW1lRnJvbURpc2Nvbm5lY3RcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLm9ubGluZUdhbWVJZCA9IG51bGxcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lbnUoKVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ydW5PbmxpbmUoKTtcbiAgICB9XG5cbiAgICBydW5PbmxpbmUgKCkge1xuICAgICAgICAvLyBDUkVBVEVTIEJBQ0tHUk9VTkRcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLmNvdXJ0LmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIC8vIEFOSU1BVEUgT0JKRUNUU1xuICAgICAgICB0aGlzLm90aGVyUGxheWVyLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMubXlQbGF5ZXIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYmFsbC5hbmltYXRlKHRoaXMuY3R4KVxuXG4gICAgICAgIHRoaXMubGVmdEhvb3AuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5yaWdodEhvb3AuYW5pbWF0ZSh0aGlzLmN0eClcblxuICAgICAgICB0aGlzLnNjb3JlYm9hcmQuYW5pbWF0ZSh0aGlzLmN0eClcblxuICAgICAgICBpZiAodGhpcy5nYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlXaW5uZXIoKVxuICAgICAgICB9XG5cblxuICAgICAgICBzb2NrZXQuZW1pdChcInVwZGF0ZU15UG9zXCIsIHtcbiAgICAgICAgICAgIGdhbWVJZDogdGhpcy5vbmxpbmVHYW1lSWQsXG4gICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgICAgICB4OiB0aGlzLm15UGxheWVyLnBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiB0aGlzLm15UGxheWVyLnBvc2l0aW9uLnksXG4gICAgICAgICAgICBvdGhlclBsYXllckZhY2luZzogdGhpcy5teVBsYXllci5mYWNpbmdSaWdodCxcbiAgICAgICAgICAgIG90aGVyUGxheWVySnVtcGluZzogdGhpcy5teVBsYXllci5qdW1waW5nXG4gICAgICAgIH0pXG4gICAgICAgIHNvY2tldC5lbWl0KFwidXBkYXRlQmFsbFBvc1wiLCB7XG4gICAgICAgICAgICBnYW1lSWQ6IHRoaXMub25saW5lR2FtZUlkLFxuICAgICAgICAgICAgZnJvbVNvY2tldDogc29ja2V0LmlkLFxuICAgICAgICAgICAgeDogdGhpcy5iYWxsLnBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiB0aGlzLmJhbGwucG9zaXRpb24ueVxuICAgICAgICB9KVxuICAgICAgICAvLyBSRVFVRVNUIE5FWFQgRlJBTUVcbiAgICAgICAgaWYgKHRoaXMucGxheWluZ0dhbWUpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJ1bk9ubGluZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cblxuXG4gICAgZ2FtZU92ZXIgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29yZWJvYXJkLnRpbWVMZWZ0ID09PSAwXG4gICAgfVxuXG4gICAgZGlzcGxheVdpbm5lciAoKSB7XG4gICAgICAgIGxldCB0ZXh0O1xuICAgICAgICBpZiAodGhpcy5yaWdodEhvb3Auc2NvcmUgPiB0aGlzLmxlZnRIb29wLnNjb3JlKSB7XG4gICAgICAgICAgICB0ZXh0ID0gXCJQbGF5ZXIgMSB3aW5zXCJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlZnRIb29wLnNjb3JlID4gdGhpcy5yaWdodEhvb3Auc2NvcmUpIHtcbiAgICAgICAgICAgIHRleHQgPSBcIlBsYXllciAyIHdpbnNcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGV4dCA9IFwiVGllIEdhbWVcIlxuICAgICAgICB9XG4gICAgICAgIGxldCBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyIH1cbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYCR7dGV4dH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlVGV4dChgJHt0ZXh0fWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gZmFsc2VcbiAgICAgICAgdGhpcy5vbmxpbmVHYW1lSWQgPSBudWxsXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVudSgpXG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxufSIsImltcG9ydCBSZWN0IGZyb20gJy4vdXRpbHMvcmVjdCdcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEhPT1BfWV9NVUxUSVBMSUVSOiAwLjMsXG4gICAgSE9PUF9IRUlHSFQ6IDQwLFxuICAgIEhPT1BfV0lEVEg6IDUwLFxuICAgIEhPT1BfWF9ESVNUQU5DRTogNTAsXG4gICAgQkFDS0JPQVJEX1dJRFRIOiAxNSxcbiAgICBCQUNLQk9BUkRfSEVJR0hUOiA1MCxcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb29wIGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgaG9vcFNpZGUsIGJhbGwpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLkhPT1BfV0lEVEgsIGhlaWdodDogQ09OU1RBTlRTLkhPT1BfSEVJR0hUIH0pXG4gICAgICAgIHRoaXMuYmFsbCA9IGJhbGxcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICBjb25zdCB4ID0gaG9vcFNpZGUgPT09IFwiTEVGVFwiID8gKFxuICAgICAgICAgICAgICAgIDAgKyBDT05TVEFOVFMuSE9PUF9YX0RJU1RBTkNFXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMud2lkdGggLSBDT05TVEFOVFMuSE9PUF9YX0RJU1RBTkNFIC0gdGhpcy53aWR0aFxuICAgICAgICAgICAgKVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCwgXG4gICAgICAgICAgICB5OiBkaW1lbnNpb25zLmhlaWdodCAqIENPTlNUQU5UUy5IT09QX1lfTVVMVElQTElFUlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFja2JvYXJkID0gbmV3IEJhY2tib2FyZCh0aGlzLCBob29wU2lkZSlcbiAgICAgICAgdGhpcy5zY29yZUhpdGJveCA9IG5ldyBTY29yZUhpdGJveCh0aGlzLCBob29wU2lkZSlcbiAgICAgICAgdGhpcy5jb2xvciA9IFwicHVycGxlXCJcbiAgICAgICAgdGhpcy5zY29yZSA9IDBcbiAgICAgICAgdGhpcy5qdXN0U2NvcmVkID0gZmFsc2VcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmNoZWNrQmFsbENvbGxpc2lvbigpXG4gICAgICAgIHRoaXMuYmFja2JvYXJkLmFuaW1hdGUoY3R4KVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuc2NvcmVIaXRib3guYW5pbWF0ZShjdHgpXG4gICAgICAgIGlmICh0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcy5zY29yZUhpdGJveCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5qdXN0U2NvcmVkKSB0aGlzLnNjb3JlICs9IDJcbiAgICAgICAgICAgIHRoaXMuanVzdFNjb3JlZCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcImdyZWVuXCJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuanVzdFNjb3JlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9IFwicHVycGxlXCJcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0JhbGxDb2xsaXNpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMpIHx8IHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzLmJhY2tib2FyZCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJhbGwucG9zaXRpb24ueSAtIHRoaXMuYmFsbC5yYWRpdXMgPiB0aGlzLnBvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYWxsLnZlbG9jaXR5LnkgPiAwKSB0aGlzLmJhbGwudmVsb2NpdHkueSA9IC10aGlzLmJhbGwudmVsb2NpdHkueVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYWxsLnBvc2l0aW9uLnkgKyB0aGlzLmJhbGwucmFkaXVzIDwgdGhpcy5iYWNrYm9hcmQucG9zaXRpb24ueSAmJiB0aGlzLmJhbGwudmVsb2NpdHkueSA8IDApICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsbC52ZWxvY2l0eS55ID0gLXRoaXMuYmFsbC52ZWxvY2l0eS55XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYmFsbC52ZWxvY2l0eS54ID0gLXRoaXMuYmFsbC52ZWxvY2l0eS54XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY2xhc3MgU2NvcmVIaXRib3ggZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihob29wLCBob29wU2lkZSkge1xuICAgICAgICBzdXBlcih7IHdpZHRoOiBDT05TVEFOVFMuSE9PUF9XSURUSCAtIDMwLCBoZWlnaHQ6IENPTlNUQU5UUy5IT09QX0hFSUdIVCAqIDAuMDUgfSlcbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCArIDE1XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICBob29wLnBvc2l0aW9uLnggKyBob29wLndpZHRoIC0gdGhpcy53aWR0aCAtIDE1XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiBob29wLnBvc2l0aW9uLnlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJ3aGl0ZVwiXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn1cblxuY2xhc3MgQmFja2JvYXJkIGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoaG9vcCwgaG9vcFNpZGUpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLkJBQ0tCT0FSRF9XSURUSCwgaGVpZ2h0OiBDT05TVEFOVFMuQkFDS0JPQVJEX0hFSUdIVCB9KVxuICAgICAgICBjb25zdCB4ID0gaG9vcFNpZGUgPT09IFwiTEVGVFwiID8gKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54IFxuICAgICAgICApIDogKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54ICsgaG9vcC53aWR0aCAtIHRoaXMud2lkdGhcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IGhvb3AucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwiYXF1YVwiXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn0iLCJpbXBvcnQga2V5IGZyb20gJy4uL3V0aWxzL2tleW1hc3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlclNlbGVjdCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgc2VsZWN0ZWRDaGFyYWN0ZXJzKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoYXJhY3RlcnMgPSBzZWxlY3RlZENoYXJhY3RlcnNcbiAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAwXG4gICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9IDFcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiBcIlJvZG1hblwiLCBzcmM6IFwic3JjL2Fzc2V0cy9yb2RtYW5TbWFsbC5wbmdcIn0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiRHJha2VcIiwgc3JjOiBcInNyYy9hc3NldHMvZHJha2VTbWFsbC5wbmdcIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkxlYnJvblwiLCBzcmM6IFwic3JjL2Fzc2V0cy9sZWJyb25TbWFsbC5wbmdcIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIlBlYWNoXCIsIHNyYzogXCJzcmMvYXNzZXRzL3BlYWNoU21hbGwucG5nXCJ9XG4gICAgICAgIF1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubGVmdENoYXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5yaWdodENoYXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5sZWZ0Q2hhci5zcmMgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdLnNyY1xuICAgICAgICB0aGlzLnJpZ2h0Q2hhci5zcmMgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmNcblxuICAgICAgICB0aGlzLmxlZnRSZWFkeSA9IGZhbHNlXG4gICAgICAgIHRoaXMucmlnaHRSZWFkeSA9IGZhbHNlXG5cbiAgICAgICAgc29ja2V0Lm9uKFwibWF0Y2hGb3VuZFwiLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMubGVmdFBsYXllcklkID0gZGF0YVtcImxlZnRQbGF5ZXJJZFwiXVxuICAgICAgICAgICAgdGhpcy5yaWdodFBsYXllcklkID0gZGF0YVtcInJpZ2h0UGxheWVySWRcIl1cbiAgICAgICAgICAgIGlmIChzb2NrZXQuaWQgPT09IHRoaXMubGVmdFBsYXllcklkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdMZWZ0ID0gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxheWluZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAwXG4gICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAxXG4gICAgICAgICAgICB0aGlzLmdhbWVJZCA9IGRhdGFbXCJnYW1lSWRcIl1cbiAgICAgICAgfSlcblxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVkU2VsZWN0ZWRDaGFyc1wiLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gZGF0YVtcImxlZnRTZWxlY3RlZFwiXVxuICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gZGF0YVtcInJpZ2h0U2VsZWN0ZWRcIl1cbiAgICAgICAgfSlcblxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVkTGVmdFJlYWR5XCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGVmdFJlYWR5ID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVkUmlnaHRSZWFkeVwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0UmVhZHkgPSB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgc29ja2V0Lm9uKFwic3RhcnRHYW1lXCIsICgpID0+IHtcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ2Rvd24nKVxuICAgICAgICAgICAga2V5LnVuYmluZCgndXAnKVxuICAgICAgICAgICAga2V5LnVuYmluZCgndycpXG4gICAgICAgICAgICBrZXkudW5iaW5kKCdzJylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ2VudGVyJylcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzKHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjLCB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmMsIHRoaXMuZ2FtZUlkKVxuICAgICAgICAgICAgdGhpcy5sZWZ0UGxheWVySWQgPSBudWxsXG4gICAgICAgICAgICB0aGlzLnJpZ2h0UGxheWVySWQgPSBudWxsXG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZ0xlZnQgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9IDBcbiAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9IDFcbiAgICAgICAgICAgIHRoaXMubGVmdFJlYWR5ID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMucmlnaHRSZWFkeSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmdhbWVJZCA9IG51bGxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoY3R4KSB7XG5cbiAgICAgICAgdGhpcy5sZWZ0Q2hhci5zcmMgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdLnNyY1xuICAgICAgICB0aGlzLnJpZ2h0Q2hhci5zcmMgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmNcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJwdXJwbGVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG5cbiAgICAgICAgLy8gTEVGVCBTSURFXG4gICAgICAgIGNvbnN0IGxlZnRTaWRlQ2hhciA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF1cbiAgICAgICAgbGV0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gNCwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDJ9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5cbiAgICAgICAgaWYgKHRoaXMub25saW5lTW9kZSkgY3R4LmZpbGxUZXh0KFwiT25saW5lIE1vZGVcIiwgbG9jLngsIGxvYy55IC0gMTAwKVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCAxMnB0IHNlcmlmXCI7XG4gICAgICAgIGlmICh0aGlzLmxlZnRSZWFkeSkgY3R4LmZpbGxUZXh0KFwiUmVhZHlcIiwgbG9jLngsIGxvYy55IC0gNzApXG4gICAgICAgIGlmICh0aGlzLmxlZnRQbGF5ZXJJZCAmJiB0aGlzLnJpZ2h0UGxheWVySWQpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChgJHt0aGlzLmxlZnRQbGF5ZXJJZH1gLCBsb2MueCwgbG9jLnkgLSA1MClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9ubGluZU1vZGUpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChgJHtzb2NrZXQuaWR9YCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH1cblxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dChgJHtsZWZ0U2lkZUNoYXIubmFtZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHtsZWZ0U2lkZUNoYXIubmFtZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMubGVmdENoYXIsXG4gICAgICAgICAgICBsb2MueCAtIHRoaXMubGVmdENoYXIud2lkdGggLyAyLFxuICAgICAgICAgICAgbG9jLnkpXG5cbiAgICAgICAgLy8gUklHSFQgU0lERVxuICAgICAgICBjb25zdCByaWdodFNpZGVDaGFyID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF1cbiAgICAgICAgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggKiAzIC8gNCwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgfVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuXG4gICAgICAgIGlmICh0aGlzLm9ubGluZU1vZGUpIGN0eC5maWxsVGV4dChcIk9ubGluZSBNb2RlXCIsIGxvYy54LCBsb2MueSAtIDEwMClcbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgMTJwdCBzZXJpZlwiO1xuICAgICAgICBpZiAodGhpcy5yaWdodFJlYWR5KSBjdHguZmlsbFRleHQoXCJSZWFkeVwiLCBsb2MueCwgbG9jLnkgLSA3MClcbiAgICAgICAgaWYgKHRoaXMubGVmdFBsYXllcklkICYmIHRoaXMucmlnaHRQbGF5ZXJJZCkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke3RoaXMucmlnaHRQbGF5ZXJJZH1gLCBsb2MueCwgbG9jLnkgLSA1MClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9ubGluZU1vZGUpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChgV2FpdGluZyBmb3IgUGxheWVyYCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuXG4gICAgICAgIGN0eC5maWxsVGV4dChgJHtyaWdodFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYCR7cmlnaHRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5yaWdodENoYXIsXG4gICAgICAgICAgICBsb2MueCAtIHRoaXMucmlnaHRDaGFyLndpZHRoIC8gMixcbiAgICAgICAgICAgIGxvYy55KVxuIFxuICAgIH1cblxuICAgIHNldHVwS2V5SGFuZGxlcnMoKSB7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMub25saW5lTW9kZSkge1xuICAgICAgICAgICAgICAgIGtleSgnZG93bicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gKHRoaXMucmlnaHRTZWxlY3RlZCArIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCd1cCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gKHRoaXMucmlnaHRTZWxlY3RlZCAtIDEpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0U2VsZWN0ZWQgPT09IC0xKSB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCd3JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9ICh0aGlzLmxlZnRTZWxlY3RlZCArIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdzJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9ICh0aGlzLmxlZnRTZWxlY3RlZCAtIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZWZ0U2VsZWN0ZWQgPT09IC0xKSB0aGlzLmxlZnRTZWxlY3RlZCA9IHRoaXMuY2hhcmFjdGVycy5sZW5ndGggLSAxXG4gICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ2VudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdkb3duJylcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgndXAnKVxuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCd3JylcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgncycpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2VudGVyJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoYXJhY3RlcnModGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXS5zcmMsIHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdLnNyYylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGtleSgndXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZ2FtZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmdMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnY2hhckNoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0U2VsZWN0ZWQ6IHRoaXMucmlnaHRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFNlbGVjdGVkOiB0aGlzLmxlZnRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQbGF5aW5nUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAodGhpcy5yaWdodFNlbGVjdGVkIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yaWdodFNlbGVjdGVkID09PSAtMSkgdGhpcy5yaWdodFNlbGVjdGVkID0gdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnY2hhckNoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0U2VsZWN0ZWQ6IHRoaXMucmlnaHRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFNlbGVjdGVkOiB0aGlzLmxlZnRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgnZG93bicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmdMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgLSAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZWZ0U2VsZWN0ZWQgPT09IC0xKSB0aGlzLmxlZnRTZWxlY3RlZCA9IHRoaXMuY2hhcmFjdGVycy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGxheWluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gKHRoaXMucmlnaHRTZWxlY3RlZCArIDEpICUgdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5nYW1lSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUGxheWluZ0xlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnbGVmdFJlYWR5Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1BsYXlpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdyaWdodFJlYWR5Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgIH1cblxuXG5cblxufSIsImltcG9ydCBrZXkgZnJvbSAnLi4vdXRpbHMva2V5bWFzdGVyJztcbmltcG9ydCBDaGFyYWN0ZXJTZWxlY3QgZnJvbSAnLi9jaGFyYWN0ZXJfc2VsZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUge1xuICAgIGNvbnN0cnVjdG9yIChkaW1lbnNpb25zLCBzdGFydEdhbWUsIHN0YXJ0T25saW5lR2FtZSkge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lID0gc3RhcnRHYW1lXG4gICAgICAgIHRoaXMuc3RhcnRPbmxpbmVHYW1lID0gc3RhcnRPbmxpbmVHYW1lXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSAwXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFtcIlN0YXJ0IEdhbWVcIiwgXCJPbmxpbmVcIl1cbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3QgPSBuZXcgQ2hhcmFjdGVyU2VsZWN0KHRoaXMuZGltZW5zaW9ucywgdGhpcy5zZWxlY3RlZENoYXJhY3RlcnMuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzID0gZmFsc2VcbiAgICAgICAgdGhpcy5zZXR1cEtleUhhbmRsZXJzKClcbiAgICB9XG5cbiAgICBzZWxlY3RlZENoYXJhY3RlcnMgKGxlZnRTcmMsIHJpZ2h0U3JjLCBnYW1lSWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzID0gZmFsc2VcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyU2VsZWN0Lm9ubGluZU1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0Lm9ubGluZU1vZGUgPSBmYWxzZVxuICAgICAgICAgICAgY29uc3QgbXlTaWRlID0gdGhpcy5jaGFyYWN0ZXJTZWxlY3QuaXNQbGF5aW5nTGVmdCA/IFwiTEVGVFwiIDogXCJSSUdIVFwiXG4gICAgICAgICAgICB0aGlzLnN0YXJ0T25saW5lR2FtZShsZWZ0U3JjLCByaWdodFNyYywgbXlTaWRlLCBnYW1lSWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZShsZWZ0U3JjLCByaWdodFNyYylcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIHJlbmRlciAoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInB1cnBsZVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgXG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gKCh0aGlzLm9wdGlvbnMubGVuZ3RoICsgMSkgLSBpKSB9XG4gICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IGN0eC5tZWFzdXJlVGV4dChgJHtvcHRpb259YCkud2lkdGhcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uID09PSBpKSBjdHguZmlsbFJlY3QoKGxvYy54IC0gd2lkdGggLyAyKSAtIDUsIGxvYy55IC0gNDAsIHdpZHRoICsgMTAsIDUwKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7b3B0aW9ufWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VUZXh0KGAke29wdGlvbn1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0LnJlbmRlcihjdHgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXR1cEtleUhhbmRsZXJzKCkge1xuICAgICAgICBrZXkoJ2Rvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gKHRoaXMuc2VsZWN0ZWRPcHRpb24gKyAxKSAlIHRoaXMub3B0aW9ucy5sZW5ndGhcbiAgICAgICAgfSlcbiAgICAgICAga2V5KCd1cCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSBNYXRoLmFicygodGhpcy5zZWxlY3RlZE9wdGlvbiAtIDEpICUgdGhpcy5vcHRpb25zLmxlbmd0aClcbiAgICAgICAgfSlcbiAgICAgICAga2V5KCdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgndXAnKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2VudGVyJylcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Qub25saW5lTW9kZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Quc2V0dXBLZXlIYW5kbGVycygpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdkb3duJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCd1cCcpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZW50ZXInKVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5vbmxpbmVNb2RlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdwbGF5ZXJBZGRlZFRvUXVldWUnLCBzb2NrZXQuaWQpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Quc2V0dXBLZXlIYW5kbGVycygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgXG5cblxuXG59IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgR1JBVklUWTogMC41LFxuICAgIFBMQVlFUl9XSURUSDogNDAsXG4gICAgUExBWUVSX0hFSUdIVDogNzAsXG4gICAgTU9WRVNQRUVEOiA1LFxuICAgIC8vIFdJVEhfQkFMTF9NT1ZFU1BFRUQ6IDMuNSxcbiAgICBKVU1QX0hFSUdIVDogMTQsXG4gICAgLy8gT05fRklSRV9KVU1QX0hFSUdIVDogMTZcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ubGluZVBsYXllciBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY291cnQsIGJhbGwsIHNwcml0ZVNyYywgc3RhcnRTaWRlLCBhY3RpdmUpIHtcbiAgICAgICAgc3VwZXIoY291cnQsIGJhbGwsIHNwcml0ZVNyYylcbiAgICAgICAgXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBzdGFydFNpZGUgPT09IFwiTEVGVFwiID8gKHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9KSA6ICh7XG4gICAgICAgICAgICB4OiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHk6IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkgdGhpcy5jb2xvciA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZVxuICAgIH1cblxuXG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZSgpXG4gICAgICAgIH1cblxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuc3ByaXRlLFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gNSxcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuc3ByaXRlLmhlaWdodCAvIDMpXG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3JpZ2h0JykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnbGVmdCcpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSlVNUElOR1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgndXAnKSAmJiAhdGhpcy5qdW1waW5nKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSBDT05TVEFOVFMuSlVNUF9IRUlHSFQ7XG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnc3BhY2UnKSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmb3JtQWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrQmFsbCgpXG5cbiAgICAgICAgdGhpcy5oYW5kbGVHcmF2aXR5KClcblxuICAgICAgICB0aGlzLmNoZWNrQm91bmRzKClcbiAgICB9XG5cbn1cblxuIiwiaW1wb3J0IFJlY3QgZnJvbSAnLi91dGlscy9yZWN0JztcbmltcG9ydCBrZXkgZnJvbSAnLi91dGlscy9rZXltYXN0ZXInO1xuXG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBHUkFWSVRZOiAwLjUsXG4gICAgUExBWUVSX1dJRFRIOiA0MCxcbiAgICBQTEFZRVJfSEVJR0hUOiA3MCxcbiAgICBNT1ZFU1BFRUQ6IDUsXG4gICAgLy8gV0lUSF9CQUxMX01PVkVTUEVFRDogMy41LFxuICAgIEpVTVBfSEVJR0hUOiAxNCxcbiAgICAvLyBPTl9GSVJFX0pVTVBfSEVJR0hUOiAxNlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoY291cnQsIGJhbGwsIHNwcml0ZVNyYykge1xuICAgICAgICBzdXBlcih7IHdpZHRoOiBDT05TVEFOVFMuUExBWUVSX1dJRFRILCBoZWlnaHQ6IENPTlNUQU5UUy5QTEFZRVJfSEVJR0hUIH0pXG4gICAgICAgIHRoaXMuY291cnQgPSBjb3VydFxuICAgICAgICB0aGlzLmJhbGwgPSBiYWxsXG5cbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY291cnQud2lkdGggLSB0aGlzLndpZHRoLFxuICAgICAgICAgICAgeTogdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLmRlbm5pc1JvZG1hbkhlYWQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgLy8gdGhpcy5kZW5uaXNSb2RtYW5IZWFkLnNyYyA9ICdzcmMvYXNzZXRzL2Rlbm5pc1JvZG1hbkhlYWQucG5nJ1xuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnNwcml0ZS5zcmMgPSBzcHJpdGVTcmNcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLm1vdmUoKTtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UodGhpcy5kZW5uaXNSb2RtYW5IZWFkLCBcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLndpZHRoICsgKHRoaXMuZGVubmlzUm9kbWFuSGVhZC53aWR0aCAvIDIpLCBcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCArICh0aGlzLmRlbm5pc1JvZG1hbkhlYWQuaGVpZ2h0IC8gMykpXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gNSxcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuc3ByaXRlLmhlaWdodCAvIDMpXG4gICAgfVxuXG4gICAgbW92ZSAoKSB7XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdyaWdodCcpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ2xlZnQnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpVTVBJTkdcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3VwJykgJiYgIXRoaXMuanVtcGluZykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkpVTVBfSEVJR0hUO1xuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJy8nKSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmb3JtQWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrQmFsbCgpIFxuXG4gICAgICAgIHRoaXMuaGFuZGxlR3Jhdml0eSgpXG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG4gICAgcHJlZm9ybUFjdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFsbC5wb3NzZXNzaW9uID09PSB0aGlzKSB7XG4gICAgICAgICAgICAvLyBIb2xkIHRvIHNob290LiBcbiAgICAgICAgICAgIHRoaXMuYmFsbC5zaG9vdCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0JhbGwoKSB7XG4gICAgICAgIGlmICghdGhpcy5iYWxsLnBvc3Nlc3Npb24gJiYgdGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMpKSB7XG4gICAgICAgICAgICB0aGlzLmJhbGwuY2xhaW1Qb3NzZXNzaW9uKHRoaXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVHcmF2aXR5KCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy52ZWxvY2l0eS55O1xuICAgICAgICAvLyBHUkFWSVRZXG4gICAgICAgIC8vIGlmIHRoZSBwb3MgaXMgZ3JlYXRlciB0aGFuIHRoZSBmbG9vclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgPCB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSAtPSBDT05TVEFOVFMuR1JBVklUWTtcbiAgICAgICAgICAgIC8vIGVsc2Ugc2V0IHRoZSBwb3MgdG8gdGhlIGZsb29yXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAwXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ID4gdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY291cnQud2lkdGggLSB0aGlzLndpZHRoXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gMFxuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgR1JBVklUWTogMC41LFxuICAgIFBMQVlFUl9XSURUSDogNDAsXG4gICAgUExBWUVSX0hFSUdIVDogNzAsXG4gICAgTU9WRVNQRUVEOiA1LFxuICAgIC8vIFdJVEhfQkFMTF9NT1ZFU1BFRUQ6IDMuNSxcbiAgICBKVU1QX0hFSUdIVDogMTQsXG4gICAgLy8gT05fRklSRV9KVU1QX0hFSUdIVDogMTZcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllcjIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpIHtcbiAgICAgICAgc3VwZXIoY291cnQsIGJhbGwsIHNwcml0ZVNyYylcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgnZCcpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ2EnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpVTVBJTkdcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3cnKSAmJiAhdGhpcy5qdW1waW5nKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSBDT05TVEFOVFMuSlVNUF9IRUlHSFQ7XG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgncScpKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZvcm1BY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tCYWxsKClcblxuICAgICAgICB0aGlzLmhhbmRsZUdyYXZpdHkoKVxuXG4gICAgICAgIHRoaXMuY2hlY2tCb3VuZHMoKVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIGxlZnRIb29wLCByaWdodEhvb3ApIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLmxlZnRIb29wID0gbGVmdEhvb3BcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSByaWdodEhvb3BcbiAgICAgICAgdGhpcy50aW1lTGVmdCA9IDYwXG4gICAgICAgIHRoaXMuY291bnREb3duID0gc2V0SW50ZXJ2YWwoKCkgPT4geyBcbiAgICAgICAgICAgIHRoaXMudGltZUxlZnQtLVxuICAgICAgICAgICAgaWYgKHRoaXMudGltZUxlZnQgPT09IDApIGNsZWFySW50ZXJ2YWwodGhpcy5jb3VudERvd24pXG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGFuaW1hdGUgKGN0eCkge1xuICAgICAgICBsZXQgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMTAgfVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiOyBcbiAgICAgICAgY3R4LmZpbGxUZXh0KGBQbGF5ZXIgMTogJHt0aGlzLnJpZ2h0SG9vcC5zY29yZX0gUGxheWVyIDI6ICR7dGhpcy5sZWZ0SG9vcC5zY29yZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguc3Ryb2tlVGV4dChgUGxheWVyIDE6ICR7dGhpcy5yaWdodEhvb3Auc2NvcmV9IFBsYXllciAyOiAke3RoaXMubGVmdEhvb3Auc2NvcmV9YCwgbG9jLngsIGxvYy55KTtcblxuICAgICAgICBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyA1IH1cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dChgJHt0aGlzLnRpbWVMZWZ0fWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGAke3RoaXMudGltZUxlZnR9YCwgbG9jLngsIGxvYy55KTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIHtcbiAgICBjb25zdHJ1Y3RvcihyYWRpdXMpIHtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgfVxuXG4gICAgaXNPdmVybGFwcGluZ1JlY3QocmVjdCkge1xuICAgICAgICBjb25zdCBkaXN0WCA9IE1hdGguYWJzKHRoaXMucG9zaXRpb24ueCAtIHJlY3QucG9zaXRpb24ueCAtIHJlY3Qud2lkdGggLyAyKTtcbiAgICAgICAgY29uc3QgZGlzdFkgPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnkgLSByZWN0LnBvc2l0aW9uLnkgLSByZWN0LmhlaWdodCAvIDIpO1xuICAgICAgICBpZiAoZGlzdFggPiAocmVjdC53aWR0aCAvIDIgKyB0aGlzLnJhZGl1cykpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIGlmIChkaXN0WSA+IChyZWN0LmhlaWdodCAvIDIgKyB0aGlzLnJhZGl1cykpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICAgICAgaWYgKGRpc3RYIDw9IChyZWN0LndpZHRoIC8gMikpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgaWYgKGRpc3RZIDw9IChyZWN0LmhlaWdodCAvIDIpKSB7IHJldHVybiB0cnVlOyB9XG5cbiAgICAgICAgY29uc3QgZHggPSBkaXN0WCAtIHJlY3Qud2lkdGggLyAyO1xuICAgICAgICBjb25zdCBkeSA9IGRpc3RZIC0gcmVjdC5oZWlnaHQgLyAyO1xuICAgICAgICByZXR1cm4gKGR4ICogZHggKyBkeSAqIGR5IDw9ICh0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzKSk7XG4gICAgfVxuXG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHRcbiAgICAgICAgfTtcbiAgICB9XG5cbn0iLCIvLyAgICAga2V5bWFzdGVyLmpzXG4vLyAgICAgKGMpIDIwMTEtMjAxMyBUaG9tYXMgRnVjaHNcbi8vICAgICBrZXltYXN0ZXIuanMgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbjsgKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICB2YXIgayxcbiAgICAgICAgX2hhbmRsZXJzID0ge30sXG4gICAgICAgIF9tb2RzID0geyAxNjogZmFsc2UsIDE4OiBmYWxzZSwgMTc6IGZhbHNlLCA5MTogZmFsc2UgfSxcbiAgICAgICAgX3Njb3BlID0gJ2FsbCcsXG4gICAgICAgIC8vIG1vZGlmaWVyIGtleXNcbiAgICAgICAgX01PRElGSUVSUyA9IHtcbiAgICAgICAgICAgICfih6cnOiAxNiwgc2hpZnQ6IDE2LFxuICAgICAgICAgICAgJ+KMpSc6IDE4LCBhbHQ6IDE4LCBvcHRpb246IDE4LFxuICAgICAgICAgICAgJ+KMgyc6IDE3LCBjdHJsOiAxNywgY29udHJvbDogMTcsXG4gICAgICAgICAgICAn4oyYJzogOTEsIGNvbW1hbmQ6IDkxXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNwZWNpYWwga2V5c1xuICAgICAgICBfTUFQID0ge1xuICAgICAgICAgICAgYmFja3NwYWNlOiA4LCB0YWI6IDksIGNsZWFyOiAxMixcbiAgICAgICAgICAgIGVudGVyOiAxMywgJ3JldHVybic6IDEzLFxuICAgICAgICAgICAgZXNjOiAyNywgZXNjYXBlOiAyNywgc3BhY2U6IDMyLFxuICAgICAgICAgICAgbGVmdDogMzcsIHVwOiAzOCxcbiAgICAgICAgICAgIHJpZ2h0OiAzOSwgZG93bjogNDAsXG4gICAgICAgICAgICBkZWw6IDQ2LCAnZGVsZXRlJzogNDYsXG4gICAgICAgICAgICBob21lOiAzNiwgZW5kOiAzNSxcbiAgICAgICAgICAgIHBhZ2V1cDogMzMsIHBhZ2Vkb3duOiAzNCxcbiAgICAgICAgICAgICcsJzogMTg4LCAnLic6IDE5MCwgJy8nOiAxOTEsXG4gICAgICAgICAgICAnYCc6IDE5MiwgJy0nOiAxODksICc9JzogMTg3LFxuICAgICAgICAgICAgJzsnOiAxODYsICdcXCcnOiAyMjIsXG4gICAgICAgICAgICAnWyc6IDIxOSwgJ10nOiAyMjEsICdcXFxcJzogMjIwXG4gICAgICAgIH0sXG4gICAgICAgIGNvZGUgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIF9NQVBbeF0gfHwgeC50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIH0sXG4gICAgICAgIF9kb3duS2V5cyA9IFtdO1xuXG4gICAgZm9yIChrID0gMTsgayA8IDIwOyBrKyspIF9NQVBbJ2YnICsga10gPSAxMTEgKyBrO1xuXG4gICAgLy8gSUUgZG9lc24ndCBzdXBwb3J0IEFycmF5I2luZGV4T2YsIHNvIGhhdmUgYSBzaW1wbGUgcmVwbGFjZW1lbnRcbiAgICBmdW5jdGlvbiBpbmRleChhcnJheSwgaXRlbSkge1xuICAgICAgICB2YXIgaSA9IGFycmF5Lmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSkgaWYgKGFycmF5W2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIC8vIGZvciBjb21wYXJpbmcgbW9kcyBiZWZvcmUgdW5hc3NpZ25tZW50XG4gICAgZnVuY3Rpb24gY29tcGFyZUFycmF5KGExLCBhMikge1xuICAgICAgICBpZiAoYTEubGVuZ3RoICE9IGEyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGExLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYTFbaV0gIT09IGEyW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIG1vZGlmaWVyTWFwID0ge1xuICAgICAgICAxNjogJ3NoaWZ0S2V5JyxcbiAgICAgICAgMTg6ICdhbHRLZXknLFxuICAgICAgICAxNzogJ2N0cmxLZXknLFxuICAgICAgICA5MTogJ21ldGFLZXknXG4gICAgfTtcbiAgICBmdW5jdGlvbiB1cGRhdGVNb2RpZmllcktleShldmVudCkge1xuICAgICAgICBmb3IgKGsgaW4gX21vZHMpIF9tb2RzW2tdID0gZXZlbnRbbW9kaWZpZXJNYXBba11dO1xuICAgIH07XG5cbiAgICAvLyBoYW5kbGUga2V5ZG93biBldmVudFxuICAgIGZ1bmN0aW9uIGRpc3BhdGNoKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXksIGhhbmRsZXIsIGssIGksIG1vZGlmaWVyc01hdGNoLCBzY29wZTtcbiAgICAgICAga2V5ID0gZXZlbnQua2V5Q29kZTtcblxuICAgICAgICBpZiAoaW5kZXgoX2Rvd25LZXlzLCBrZXkpID09IC0xKSB7XG4gICAgICAgICAgICBfZG93bktleXMucHVzaChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgYSBtb2RpZmllciBrZXksIHNldCB0aGUga2V5Ljxtb2RpZmllcmtleW5hbWU+IHByb3BlcnR5IHRvIHRydWUgYW5kIHJldHVyblxuICAgICAgICBpZiAoa2V5ID09IDkzIHx8IGtleSA9PSAyMjQpIGtleSA9IDkxOyAvLyByaWdodCBjb21tYW5kIG9uIHdlYmtpdCwgY29tbWFuZCBvbiBHZWNrb1xuICAgICAgICBpZiAoa2V5IGluIF9tb2RzKSB7XG4gICAgICAgICAgICBfbW9kc1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICdhc3NpZ25LZXknIGZyb20gaW5zaWRlIHRoaXMgY2xvc3VyZSBpcyBleHBvcnRlZCB0byB3aW5kb3cua2V5XG4gICAgICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgaWYgKF9NT0RJRklFUlNba10gPT0ga2V5KSBhc3NpZ25LZXlba10gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZU1vZGlmaWVyS2V5KGV2ZW50KTtcblxuICAgICAgICAvLyBzZWUgaWYgd2UgbmVlZCB0byBpZ25vcmUgdGhlIGtleXByZXNzIChmaWx0ZXIoKSBjYW4gY2FuIGJlIG92ZXJyaWRkZW4pXG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgaWdub3JlIGtleSBwcmVzc2VzIGlmIGEgc2VsZWN0LCB0ZXh0YXJlYSwgb3IgaW5wdXQgaXMgZm9jdXNlZFxuICAgICAgICBpZiAoIWFzc2lnbktleS5maWx0ZXIuY2FsbCh0aGlzLCBldmVudCkpIHJldHVybjtcblxuICAgICAgICAvLyBhYm9ydCBpZiBubyBwb3RlbnRpYWxseSBtYXRjaGluZyBzaG9ydGN1dHMgZm91bmRcbiAgICAgICAgaWYgKCEoa2V5IGluIF9oYW5kbGVycykpIHJldHVybjtcblxuICAgICAgICBzY29wZSA9IGdldFNjb3BlKCk7XG5cbiAgICAgICAgLy8gZm9yIGVhY2ggcG90ZW50aWFsIHNob3J0Y3V0XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBfaGFuZGxlcnNba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFuZGxlciA9IF9oYW5kbGVyc1trZXldW2ldO1xuXG4gICAgICAgICAgICAvLyBzZWUgaWYgaXQncyBpbiB0aGUgY3VycmVudCBzY29wZVxuICAgICAgICAgICAgaWYgKGhhbmRsZXIuc2NvcGUgPT0gc2NvcGUgfHwgaGFuZGxlci5zY29wZSA9PSAnYWxsJykge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIG1vZGlmaWVycyBtYXRjaCBpZiBhbnlcbiAgICAgICAgICAgICAgICBtb2RpZmllcnNNYXRjaCA9IGhhbmRsZXIubW9kcy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgIGZvciAoayBpbiBfbW9kcylcbiAgICAgICAgICAgICAgICAgICAgaWYgKCghX21vZHNba10gJiYgaW5kZXgoaGFuZGxlci5tb2RzLCAraykgPiAtMSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChfbW9kc1trXSAmJiBpbmRleChoYW5kbGVyLm1vZHMsICtrKSA9PSAtMSkpIG1vZGlmaWVyc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gY2FsbCB0aGUgaGFuZGxlciBhbmQgc3RvcCB0aGUgZXZlbnQgaWYgbmVjY2Vzc2FyeVxuICAgICAgICAgICAgICAgIGlmICgoaGFuZGxlci5tb2RzLmxlbmd0aCA9PSAwICYmICFfbW9kc1sxNl0gJiYgIV9tb2RzWzE4XSAmJiAhX21vZHNbMTddICYmICFfbW9kc1s5MV0pIHx8IG1vZGlmaWVyc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyLm1ldGhvZChldmVudCwgaGFuZGxlcikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5jYW5jZWxCdWJibGUpIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gdW5zZXQgbW9kaWZpZXIga2V5cyBvbiBrZXl1cFxuICAgIGZ1bmN0aW9uIGNsZWFyTW9kaWZpZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIGtleSA9IGV2ZW50LmtleUNvZGUsIGssXG4gICAgICAgICAgICBpID0gaW5kZXgoX2Rvd25LZXlzLCBrZXkpO1xuXG4gICAgICAgIC8vIHJlbW92ZSBrZXkgZnJvbSBfZG93bktleXNcbiAgICAgICAgaWYgKGkgPj0gMCkge1xuICAgICAgICAgICAgX2Rvd25LZXlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gOTMgfHwga2V5ID09IDIyNCkga2V5ID0gOTE7XG4gICAgICAgIGlmIChrZXkgaW4gX21vZHMpIHtcbiAgICAgICAgICAgIF9tb2RzW2tleV0gPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAoayBpbiBfTU9ESUZJRVJTKSBpZiAoX01PRElGSUVSU1trXSA9PSBrZXkpIGFzc2lnbktleVtrXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlc2V0TW9kaWZpZXJzKCkge1xuICAgICAgICBmb3IgKGsgaW4gX21vZHMpIF9tb2RzW2tdID0gZmFsc2U7XG4gICAgICAgIGZvciAoayBpbiBfTU9ESUZJRVJTKSBhc3NpZ25LZXlba10gPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgLy8gcGFyc2UgYW5kIGFzc2lnbiBzaG9ydGN1dFxuICAgIGZ1bmN0aW9uIGFzc2lnbktleShrZXksIHNjb3BlLCBtZXRob2QpIHtcbiAgICAgICAgdmFyIGtleXMsIG1vZHM7XG4gICAgICAgIGtleXMgPSBnZXRLZXlzKGtleSk7XG4gICAgICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbWV0aG9kID0gc2NvcGU7XG4gICAgICAgICAgICBzY29wZSA9ICdhbGwnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yIGVhY2ggc2hvcnRjdXRcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBzZXQgbW9kaWZpZXIga2V5cyBpZiBhbnlcbiAgICAgICAgICAgIG1vZHMgPSBbXTtcbiAgICAgICAgICAgIGtleSA9IGtleXNbaV0uc3BsaXQoJysnKTtcbiAgICAgICAgICAgIGlmIChrZXkubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIG1vZHMgPSBnZXRNb2RzKGtleSk7XG4gICAgICAgICAgICAgICAga2V5ID0gW2tleVtrZXkubGVuZ3RoIC0gMV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udmVydCB0byBrZXljb2RlIGFuZC4uLlxuICAgICAgICAgICAga2V5ID0ga2V5WzBdXG4gICAgICAgICAgICBrZXkgPSBjb2RlKGtleSk7XG4gICAgICAgICAgICAvLyAuLi5zdG9yZSBoYW5kbGVyXG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gX2hhbmRsZXJzKSkgX2hhbmRsZXJzW2tleV0gPSBbXTtcbiAgICAgICAgICAgIF9oYW5kbGVyc1trZXldLnB1c2goeyBzaG9ydGN1dDoga2V5c1tpXSwgc2NvcGU6IHNjb3BlLCBtZXRob2Q6IG1ldGhvZCwga2V5OiBrZXlzW2ldLCBtb2RzOiBtb2RzIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHVuYmluZCBhbGwgaGFuZGxlcnMgZm9yIGdpdmVuIGtleSBpbiBjdXJyZW50IHNjb3BlXG4gICAgZnVuY3Rpb24gdW5iaW5kS2V5KGtleSwgc2NvcGUpIHtcbiAgICAgICAgdmFyIG11bHRpcGxlS2V5cywga2V5cyxcbiAgICAgICAgICAgIG1vZHMgPSBbXSxcbiAgICAgICAgICAgIGksIGosIG9iajtcblxuICAgICAgICBtdWx0aXBsZUtleXMgPSBnZXRLZXlzKGtleSk7XG5cbiAgICAgICAgZm9yIChqID0gMDsgaiA8IG11bHRpcGxlS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAga2V5cyA9IG11bHRpcGxlS2V5c1tqXS5zcGxpdCgnKycpO1xuXG4gICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgbW9kcyA9IGdldE1vZHMoa2V5cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGtleSA9IGtleXNba2V5cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGtleSA9IGNvZGUoa2V5KTtcblxuICAgICAgICAgICAgaWYgKHNjb3BlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IGdldFNjb3BlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIV9oYW5kbGVyc1trZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IF9oYW5kbGVyc1trZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb2JqID0gX2hhbmRsZXJzW2tleV1baV07XG4gICAgICAgICAgICAgICAgLy8gb25seSBjbGVhciBoYW5kbGVycyBpZiBjb3JyZWN0IHNjb3BlIGFuZCBtb2RzIG1hdGNoXG4gICAgICAgICAgICAgICAgaWYgKG9iai5zY29wZSA9PT0gc2NvcGUgJiYgY29tcGFyZUFycmF5KG9iai5tb2RzLCBtb2RzKSkge1xuICAgICAgICAgICAgICAgICAgICBfaGFuZGxlcnNba2V5XVtpXSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIGtleSB3aXRoIGNvZGUgJ2tleUNvZGUnIGlzIGN1cnJlbnRseSBkb3duXG4gICAgLy8gQ29udmVydHMgc3RyaW5ncyBpbnRvIGtleSBjb2Rlcy5cbiAgICBmdW5jdGlvbiBpc1ByZXNzZWQoa2V5Q29kZSkge1xuICAgICAgICBpZiAodHlwZW9mIChrZXlDb2RlKSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAga2V5Q29kZSA9IGNvZGUoa2V5Q29kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4KF9kb3duS2V5cywga2V5Q29kZSkgIT0gLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJlc3NlZEtleUNvZGVzKCkge1xuICAgICAgICByZXR1cm4gX2Rvd25LZXlzLnNsaWNlKDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbHRlcihldmVudCkge1xuICAgICAgICB2YXIgdGFnTmFtZSA9IChldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCkudGFnTmFtZTtcbiAgICAgICAgLy8gaWdub3JlIGtleXByZXNzZWQgaW4gYW55IGVsZW1lbnRzIHRoYXQgc3VwcG9ydCBrZXlib2FyZCBkYXRhIGlucHV0XG4gICAgICAgIHJldHVybiAhKHRhZ05hbWUgPT0gJ0lOUFVUJyB8fCB0YWdOYW1lID09ICdTRUxFQ1QnIHx8IHRhZ05hbWUgPT0gJ1RFWFRBUkVBJyk7XG4gICAgfVxuXG4gICAgLy8gaW5pdGlhbGl6ZSBrZXkuPG1vZGlmaWVyPiB0byBmYWxzZVxuICAgIGZvciAoayBpbiBfTU9ESUZJRVJTKSBhc3NpZ25LZXlba10gPSBmYWxzZTtcblxuICAgIC8vIHNldCBjdXJyZW50IHNjb3BlIChkZWZhdWx0ICdhbGwnKVxuICAgIGZ1bmN0aW9uIHNldFNjb3BlKHNjb3BlKSB7IF9zY29wZSA9IHNjb3BlIHx8ICdhbGwnIH07XG4gICAgZnVuY3Rpb24gZ2V0U2NvcGUoKSB7IHJldHVybiBfc2NvcGUgfHwgJ2FsbCcgfTtcblxuICAgIC8vIGRlbGV0ZSBhbGwgaGFuZGxlcnMgZm9yIGEgZ2l2ZW4gc2NvcGVcbiAgICBmdW5jdGlvbiBkZWxldGVTY29wZShzY29wZSkge1xuICAgICAgICB2YXIga2V5LCBoYW5kbGVycywgaTtcblxuICAgICAgICBmb3IgKGtleSBpbiBfaGFuZGxlcnMpIHtcbiAgICAgICAgICAgIGhhbmRsZXJzID0gX2hhbmRsZXJzW2tleV07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOykge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyc1tpXS5zY29wZSA9PT0gc2NvcGUpIGhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBlbHNlIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBhYnN0cmFjdCBrZXkgbG9naWMgZm9yIGFzc2lnbiBhbmQgdW5hc3NpZ25cbiAgICBmdW5jdGlvbiBnZXRLZXlzKGtleSkge1xuICAgICAgICB2YXIga2V5cztcbiAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIGtleXMgPSBrZXkuc3BsaXQoJywnKTtcbiAgICAgICAgaWYgKChrZXlzW2tleXMubGVuZ3RoIC0gMV0pID09ICcnKSB7XG4gICAgICAgICAgICBrZXlzW2tleXMubGVuZ3RoIC0gMl0gKz0gJywnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH1cblxuICAgIC8vIGFic3RyYWN0IG1vZHMgbG9naWMgZm9yIGFzc2lnbiBhbmQgdW5hc3NpZ25cbiAgICBmdW5jdGlvbiBnZXRNb2RzKGtleSkge1xuICAgICAgICB2YXIgbW9kcyA9IGtleS5zbGljZSgwLCBrZXkubGVuZ3RoIC0gMSk7XG4gICAgICAgIGZvciAodmFyIG1pID0gMDsgbWkgPCBtb2RzLmxlbmd0aDsgbWkrKylcbiAgICAgICAgICAgIG1vZHNbbWldID0gX01PRElGSUVSU1ttb2RzW21pXV07XG4gICAgICAgIHJldHVybiBtb2RzO1xuICAgIH1cblxuICAgIC8vIGNyb3NzLWJyb3dzZXIgZXZlbnRzXG4gICAgZnVuY3Rpb24gYWRkRXZlbnQob2JqZWN0LCBldmVudCwgbWV0aG9kKSB7XG4gICAgICAgIGlmIChvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgIG9iamVjdC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBtZXRob2QsIGZhbHNlKTtcbiAgICAgICAgZWxzZSBpZiAob2JqZWN0LmF0dGFjaEV2ZW50KVxuICAgICAgICAgICAgb2JqZWN0LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgZnVuY3Rpb24gKCkgeyBtZXRob2Qod2luZG93LmV2ZW50KSB9KTtcbiAgICB9O1xuXG4gICAgLy8gc2V0IHRoZSBoYW5kbGVycyBnbG9iYWxseSBvbiBkb2N1bWVudFxuICAgIGFkZEV2ZW50KGRvY3VtZW50LCAna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkgeyBkaXNwYXRjaChldmVudCkgfSk7IC8vIFBhc3NpbmcgX3Njb3BlIHRvIGEgY2FsbGJhY2sgdG8gZW5zdXJlIGl0IHJlbWFpbnMgdGhlIHNhbWUgYnkgZXhlY3V0aW9uLiBGaXhlcyAjNDhcbiAgICBhZGRFdmVudChkb2N1bWVudCwgJ2tleXVwJywgY2xlYXJNb2RpZmllcik7XG5cbiAgICAvLyByZXNldCBtb2RpZmllcnMgdG8gZmFsc2Ugd2hlbmV2ZXIgdGhlIHdpbmRvdyBpcyAocmUpZm9jdXNlZC5cbiAgICBhZGRFdmVudCh3aW5kb3csICdmb2N1cycsIHJlc2V0TW9kaWZpZXJzKTtcblxuICAgIC8vIHN0b3JlIHByZXZpb3VzbHkgZGVmaW5lZCBrZXlcbiAgICB2YXIgcHJldmlvdXNLZXkgPSB3aW5kb3cua2V5O1xuXG4gICAgLy8gcmVzdG9yZSBwcmV2aW91c2x5IGRlZmluZWQga2V5IGFuZCByZXR1cm4gcmVmZXJlbmNlIHRvIG91ciBrZXkgb2JqZWN0XG4gICAgZnVuY3Rpb24gbm9Db25mbGljdCgpIHtcbiAgICAgICAgdmFyIGsgPSB3aW5kb3cua2V5O1xuICAgICAgICB3aW5kb3cua2V5ID0gcHJldmlvdXNLZXk7XG4gICAgICAgIHJldHVybiBrO1xuICAgIH1cblxuICAgIC8vIHNldCB3aW5kb3cua2V5IGFuZCB3aW5kb3cua2V5LnNldC9nZXQvZGVsZXRlU2NvcGUsIGFuZCB0aGUgZGVmYXVsdCBmaWx0ZXJcbiAgICB3aW5kb3cua2V5ID0gYXNzaWduS2V5O1xuICAgIHdpbmRvdy5rZXkuc2V0U2NvcGUgPSBzZXRTY29wZTtcbiAgICB3aW5kb3cua2V5LmdldFNjb3BlID0gZ2V0U2NvcGU7XG4gICAgd2luZG93LmtleS5kZWxldGVTY29wZSA9IGRlbGV0ZVNjb3BlO1xuICAgIHdpbmRvdy5rZXkuZmlsdGVyID0gZmlsdGVyO1xuICAgIHdpbmRvdy5rZXkuaXNQcmVzc2VkID0gaXNQcmVzc2VkO1xuICAgIHdpbmRvdy5rZXkuZ2V0UHJlc3NlZEtleUNvZGVzID0gZ2V0UHJlc3NlZEtleUNvZGVzO1xuICAgIHdpbmRvdy5rZXkubm9Db25mbGljdCA9IG5vQ29uZmxpY3Q7XG4gICAgd2luZG93LmtleS51bmJpbmQgPSB1bmJpbmRLZXk7XG5cbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIG1vZHVsZS5leHBvcnRzID0gYXNzaWduS2V5O1xuXG59KSh0aGlzKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBzaXplLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuICAgIH1cblxuICAgIGlzT3ZlcmxhcHBpbmdPdGhlclJlY3QocmVjdENsYXNzKSB7XG4gICAgICAgIGNvbnN0IG15Qm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKVxuICAgICAgICBjb25zdCByZWN0ID0gcmVjdENsYXNzLmdldEJvdW5kcygpXG4gICAgICAgIGlmIChteUJvdW5kcy5sZWZ0ID4gcmVjdC5yaWdodCB8fCBteUJvdW5kcy5yaWdodCA8IHJlY3QubGVmdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChteUJvdW5kcy50b3AgPiByZWN0LmJvdHRvbSB8fCBteUJvdW5kcy5ib3R0b20gPCByZWN0LnRvcCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==