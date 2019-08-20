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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9jb3VydC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9ob29wLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvbWVudV9zY3JlZW5zL2NoYXJhY3Rlcl9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9tZW51X3NjcmVlbnMvbWFpbl9tZW51LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvb25saW5lX3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2pzL3BsYXllcjIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9qcy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMva2V5bWFzdGVyLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvanMvdXRpbHMvcmVjdC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIk5CQUphbUdhbWUiLCJDT05TVEFOVFMiLCJSQURJVVMiLCJHUkFWSVRZIiwiQk9VTkNFX1JFVEVOVElPTiIsIkRSSUJCTEVfU1BFRUQiLCJCYWxsIiwiZGltZW5zaW9ucyIsImNvdXJ0IiwibGVmdEhvb3AiLCJyaWdodEhvb3AiLCJnYW1lSWQiLCJiYWxsIiwicG9zaXRpb24iLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwidmVsb2NpdHkiLCJjb2xvciIsInBvc3Nlc3Npb24iLCJub1RvdWNoIiwicG93ZXIiLCJjdHgiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwicmFkaXVzIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsInBsYXllciIsInNvY2tldCIsImVtaXQiLCJmcm9tU29ja2V0IiwiaWQiLCJzaG9vdGluZ1BsYXllciIsImZhY2luZ1JpZ2h0Iiwic2hvb3RpbmdUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbGVhc2VCYWxsIiwic2NvcmVQb3NpdGlvbiIsInNjb3JlSGl0Ym94IiwiaHlwb3QiLCJudW1iZXJPZkZyYW1lcyIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsImRpZmYiLCJhZGp1c3RlZFgiLCJyZW1vdmVQb3NzZXNzaW9uIiwiZmFsbCIsIm1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbiIsImNoZWNrQm91bmRzIiwianVtcGluZyIsIkNpcmNsZSIsIkNPVVJUX0ZMT09SIiwiQ09VUlRfV0lEVEgiLCJDb3VydCIsImNvdXJ0SW1hZ2UiLCJJbWFnZSIsInNyYyIsImZpbGxSZWN0IiwiUmVjdCIsImdldENvbnRleHQiLCJtYWluTWVudSIsIk1haW5NZW51Iiwic3RhcnRHYW1lIiwiYmluZCIsInN0YXJ0T25saW5lR2FtZSIsInBsYXlpbmdHYW1lIiwicmVuZGVyTWVudSIsInNldHVwS2V5SGFuZGxlcnMiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsZWZ0U3ByaXRlIiwicmlnaHRTcHJpdGUiLCJyZXN0YXJ0IiwibXlTaWRlIiwib25saW5lR2FtZUlkIiwicnVuT25saW5lR2FtZSIsIkhvb3AiLCJzY29yZWJvYXJkIiwiU2NvcmVib2FyZCIsIlBsYXllciIsInBsYXllcjIiLCJQbGF5ZXIyIiwiYW5pbWF0ZSIsImdhbWVPdmVyIiwiZGlzcGxheVdpbm5lciIsIm15UGxheWVyIiwiT25saW5lUGxheWVyIiwib3RoZXJQbGF5ZXIiLCJvbiIsImRhdGEiLCJzaG93TWVudSIsInJ1bk9ubGluZSIsIm90aGVyUGxheWVyRmFjaW5nIiwib3RoZXJQbGF5ZXJKdW1waW5nIiwidGltZUxlZnQiLCJ0ZXh0Iiwic2NvcmUiLCJsb2MiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZVRleHQiLCJIT09QX1lfTVVMVElQTElFUiIsIkhPT1BfSEVJR0hUIiwiSE9PUF9XSURUSCIsIkhPT1BfWF9ESVNUQU5DRSIsIkJBQ0tCT0FSRF9XSURUSCIsIkJBQ0tCT0FSRF9IRUlHSFQiLCJob29wU2lkZSIsImJhY2tib2FyZCIsIkJhY2tib2FyZCIsIlNjb3JlSGl0Ym94IiwianVzdFNjb3JlZCIsImNoZWNrQmFsbENvbGxpc2lvbiIsImlzT3ZlcmxhcHBpbmdSZWN0IiwiaG9vcCIsIkNoYXJhY3RlclNlbGVjdCIsInNlbGVjdGVkQ2hhcmFjdGVycyIsImxlZnRTZWxlY3RlZCIsInJpZ2h0U2VsZWN0ZWQiLCJjaGFyYWN0ZXJzIiwibmFtZSIsImxlZnRDaGFyIiwicmlnaHRDaGFyIiwibGVmdFJlYWR5IiwicmlnaHRSZWFkeSIsImxlZnRQbGF5ZXJJZCIsInJpZ2h0UGxheWVySWQiLCJpc1BsYXlpbmdMZWZ0IiwiaXNQbGF5aW5nUmlnaHQiLCJrZXkiLCJ1bmJpbmQiLCJsZWZ0U2lkZUNoYXIiLCJvbmxpbmVNb2RlIiwiZHJhd0ltYWdlIiwicmlnaHRTaWRlQ2hhciIsImxlbmd0aCIsInNlbGVjdGVkT3B0aW9uIiwib3B0aW9ucyIsImNoYXJhY3RlclNlbGVjdCIsInNlbGVjdGluZ0NoYXJhY3RlcnMiLCJsZWZ0U3JjIiwicmlnaHRTcmMiLCJmb3JFYWNoIiwib3B0aW9uIiwiaSIsIm1lYXN1cmVUZXh0IiwiYWJzIiwiUExBWUVSX1dJRFRIIiwiUExBWUVSX0hFSUdIVCIsIk1PVkVTUEVFRCIsIkpVTVBfSEVJR0hUIiwic3ByaXRlU3JjIiwic3RhcnRTaWRlIiwiYWN0aXZlIiwic3ByaXRlIiwiaXNQcmVzc2VkIiwicHJlZm9ybUFjdGlvbiIsImNoZWNrQmFsbCIsImhhbmRsZUdyYXZpdHkiLCJzaG9vdCIsImNsYWltUG9zc2Vzc2lvbiIsImNvdW50RG93biIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJlY3QiLCJkaXN0WCIsImRpc3RZIiwiZHgiLCJkeSIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImdsb2JhbCIsImsiLCJfaGFuZGxlcnMiLCJfbW9kcyIsIl9zY29wZSIsIl9NT0RJRklFUlMiLCJzaGlmdCIsImFsdCIsImN0cmwiLCJjb250cm9sIiwiY29tbWFuZCIsIl9NQVAiLCJiYWNrc3BhY2UiLCJ0YWIiLCJjbGVhciIsImVudGVyIiwiZXNjIiwiZXNjYXBlIiwic3BhY2UiLCJ1cCIsImRvd24iLCJkZWwiLCJob21lIiwiZW5kIiwicGFnZXVwIiwicGFnZWRvd24iLCJjb2RlIiwidG9VcHBlckNhc2UiLCJjaGFyQ29kZUF0IiwiX2Rvd25LZXlzIiwiaW5kZXgiLCJhcnJheSIsIml0ZW0iLCJjb21wYXJlQXJyYXkiLCJhMSIsImEyIiwibW9kaWZpZXJNYXAiLCJ1cGRhdGVNb2RpZmllcktleSIsImV2ZW50IiwiZGlzcGF0Y2giLCJoYW5kbGVyIiwibW9kaWZpZXJzTWF0Y2giLCJzY29wZSIsImtleUNvZGUiLCJwdXNoIiwiYXNzaWduS2V5IiwiZmlsdGVyIiwiY2FsbCIsImdldFNjb3BlIiwibW9kcyIsIm1ldGhvZCIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJjYW5jZWxCdWJibGUiLCJjbGVhck1vZGlmaWVyIiwic3BsaWNlIiwicmVzZXRNb2RpZmllcnMiLCJrZXlzIiwiZ2V0S2V5cyIsInVuZGVmaW5lZCIsInNwbGl0IiwiZ2V0TW9kcyIsInNob3J0Y3V0IiwidW5iaW5kS2V5IiwibXVsdGlwbGVLZXlzIiwiaiIsIm9iaiIsImdldFByZXNzZWRLZXlDb2RlcyIsInNsaWNlIiwidGFnTmFtZSIsInRhcmdldCIsInNyY0VsZW1lbnQiLCJzZXRTY29wZSIsImRlbGV0ZVNjb3BlIiwiaGFuZGxlcnMiLCJyZXBsYWNlIiwibWkiLCJhZGRFdmVudCIsIm9iamVjdCIsImF0dGFjaEV2ZW50Iiwid2luZG93IiwicHJldmlvdXNLZXkiLCJub0NvbmZsaWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsInNpemUiLCJyZWN0Q2xhc3MiLCJteUJvdW5kcyIsImdldEJvdW5kcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7QUFFQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsUUFBTUMsU0FBU0YsU0FBU0csY0FBVCxDQUF3QixjQUF4QixDQUFmO0FBQ0EsUUFBSUMsY0FBSixDQUFlRixNQUFmO0FBQ0gsQ0FIRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNRyxZQUFZO0FB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QXBCOztBQUVBLFFBQUksSUFBSixFQUFtQ29CLE9BQU9DLE9BQVAsR0FBaUJ4QyxTQUFqQjtBQUV0QyxDQW5TQyxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSm1CbkssSTtBQUNqQixrQkFBWTRNLElBQVosRUFBa0I7QUFBQTs7QUFDZCxhQUFLOVAsS0FBTCxHQUFhOFAsS0FBSzlQLEtBQWxCO0FBQ0EsYUFBS0UsTUFBTCxHQUFjNFAsS0FBSzVQLE1BQW5CO0FBQ0g7Ozs7K0NBRXNCNlAsUyxFQUFXO0FBQzlCLGdCQUFNQyxXQUFXLEtBQUtDLFNBQUwsRUFBakI7QUFDQSxnQkFBTWxHLE9BQU9nRyxVQUFVRSxTQUFWLEVBQWI7QUFDQSxnQkFBSUQsU0FBUzVGLElBQVQsR0FBZ0JMLEtBQUtNLEtBQXJCLElBQThCMkYsU0FBUzNGLEtBQVQsR0FBaUJOLEtBQUtLLElBQXhELEVBQThEO0FBQzFELHVCQUFPLEtBQVA7QUFDSDtBQUNELGdCQUFJNEYsU0FBUzFGLEdBQVQsR0FBZVAsS0FBS1EsTUFBcEIsSUFBOEJ5RixTQUFTekYsTUFBVCxHQUFrQlIsS0FBS08sR0FBekQsRUFBOEQ7QUFDMUQsdUJBQU8sS0FBUDtBQUNIO0FBQ0QsbUJBQU8sSUFBUDtBQUNIOzs7b0NBRVc7QUFDUixtQkFBTztBQUNIRixzQkFBTSxLQUFLdEssUUFBTCxDQUFjQyxDQURqQjtBQUVIc0ssdUJBQU8sS0FBS3ZLLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLQyxLQUYzQjtBQUdIc0sscUJBQUssS0FBS3hLLFFBQUwsQ0FBY0csQ0FIaEI7QUFJSHNLLHdCQUFRLEtBQUt6SyxRQUFMLENBQWNHLENBQWQsR0FBa0IsS0FBS0M7QUFKNUIsYUFBUDtBQU1IOzs7Ozs7a0JBekJnQmdELEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vY2xpZW50L3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBOQkFKYW1HYW1lIGZyb20gJy4vanMvZ2FtZS5qcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmJhLWphbS1nYW1lJyk7XG4gICAgbmV3IE5CQUphbUdhbWUoY2FudmFzKTtcbn0pOyIsImltcG9ydCBDaXJjbGUgZnJvbSBcIi4vdXRpbHMvY2lyY2xlXCI7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBSQURJVVM6IDE1LFxuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBCT1VOQ0VfUkVURU5USU9OOiAwLjYsXG4gICAgRFJJQkJMRV9TUEVFRDogMyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCBleHRlbmRzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgY291cnQsIGxlZnRIb29wLCByaWdodEhvb3AsIGdhbWVJZCkge1xuICAgICAgICBzdXBlcihDT05TVEFOVFMuUkFESVVTKVxuICAgICAgICB0aGlzLmNvdXJ0ID0gY291cnRcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLmxlZnRIb29wID0gbGVmdEhvb3BcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSByaWdodEhvb3BcbiAgICAgICAgdGhpcy5sZWZ0SG9vcC5iYWxsID0gdGhpc1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcC5iYWxsID0gdGhpc1xuXG4gICAgICAgIHRoaXMuZ2FtZUlkID0gZ2FtZUlkXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY291cnQud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJob3RwaW5rXCJcbiAgICAgICAgdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuICAgICAgICB0aGlzLm5vVG91Y2ggPSB7fVxuICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLngsIFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55LCBcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLCBcbiAgICAgICAgICAgIDAsIFxuICAgICAgICAgICAgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICBcbiAgICBjbGFpbVBvc3Nlc3Npb24ocGxheWVyKSB7XG4gICAgICAgIGlmICghdGhpcy5ub1RvdWNoW3BsYXllci5jb2xvcl0pIHtcbiAgICAgICAgICAgIHRoaXMucG9zc2Vzc2lvbiA9IHBsYXllclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJjaGFuZ2VPZlBvc3Nlc2lvblwiLCB7XG4gICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZCxcbiAgICAgICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNob290ICgpIHtcbiAgICAgICAgLy8gQkVUQSBTSE9PVElOR1xuXG4gICAgICAgIC8vIHRoaXMucG93ZXIgKz0gMVxuICAgICAgICAvLyBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgLy8gICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICAvLyBpZiAodGhpcy5zaG9vdGluZ0ludGVydmFsICYmIHRoaXMucG93ZXIgPCA2MCkge1xuICAgICAgICAvLyAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2hvb3RpbmdJbnRlcnZhbClcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNob290aW5nSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IDYgOiAtNlxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IHRoaXMucG93ZXJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSB0cnVlICAgICAgICBcbiAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IGZhbHNlXG4gICAgICAgIC8vICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgICAgICAvLyAgICAgfSwgMjApO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gQUlNQk9UIFNIT09USU5HXG5cbiAgICAgICAgLy8gY29uc3Qgc2hvb3RpbmdQbGF5ZXIgPSB0aGlzLnBvc3Nlc3Npb25cbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi54ID0gc2hvb3RpbmdQbGF5ZXIuZmFjaW5nUmlnaHQgP1xuICAgICAgICAvLyAgICAgKHNob290aW5nUGxheWVyLnBvc2l0aW9uLnggKyBzaG9vdGluZ1BsYXllci53aWR0aCArIHRoaXMucmFkaXVzKSA6XG4gICAgICAgIC8vICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzKVxuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnkgPSBzaG9vdGluZ1BsYXllci5wb3NpdGlvbi55XG5cbiAgICAgICAgLy8gY29uc3Qgc2NvcmVQb3NpdGlvbiA9IHNob290aW5nUGxheWVyLmZhY2luZ1JpZ2h0ID8gKFxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIHg6IHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LnBvc2l0aW9uLnggKyAodGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gud2lkdGggLyAyKSxcbiAgICAgICAgLy8gICAgICAgICB5OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICkgOiAoXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgeDogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgIC8vICAgICAgICAgeTogdGhpcy5sZWZ0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi55XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gKVxuXG4gICAgICAgIC8vIGNvbnN0IG51bWJlck9mRnJhbWVzID0gNTBcblxuICAgICAgICAvLyBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgIC8vIGNvbnN0IHZlbG9jaXR5WSA9ICggKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpICkgLyBudW1iZXJPZkZyYW1lc1xuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgLy8gICAgIHg6IHZlbG9jaXR5WCxcbiAgICAgICAgLy8gICAgIHk6IHZlbG9jaXR5WVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWUgICAgICAgIFxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMubm9Ub3VjaFtzaG9vdGluZ1BsYXllci5jb2xvcl0gPSBmYWxzZVxuICAgICAgICAvLyB9LCA1MDApO1xuXG4gICAgICAgIC8vIHRoaXMucG9zc2Vzc2lvbiA9IG51bGxcblxuICAgICAgICAvLyBQT1dFUkJBU0VEIEFJTUVEIFNIT09USU5HXG5cblxuICAgICAgICB0aGlzLnBvd2VyICs9IDFcblxuICAgICAgICBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/XG4gICAgICAgICAgICAoc2hvb3RpbmdQbGF5ZXIucG9zaXRpb24ueCArIHNob290aW5nUGxheWVyLndpZHRoICsgdGhpcy5yYWRpdXMpIDpcbiAgICAgICAgICAgIChzaG9vdGluZ1BsYXllci5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMpXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHNob290aW5nUGxheWVyLnBvc2l0aW9uLnlcblxuICAgICAgICBpZiAodGhpcy5zaG9vdGluZ1RpbWVvdXQgJiYgdGhpcy5wb3dlciA8IDYwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG9vdGluZ1RpbWVvdXQpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG93ZXIgPCA2MCkge1xuICAgICAgICAgICAgdGhpcy5zaG9vdGluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VCYWxsKClcbiAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVsZWFzZUJhbGwgKCkge1xuICAgICAgICBjb25zdCBzaG9vdGluZ1BsYXllciA9IHRoaXMucG9zc2Vzc2lvblxuXG4gICAgICAgIGNvbnN0IHNjb3JlUG9zaXRpb24gPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC5wb3NpdGlvbi54ICsgKHRoaXMucmlnaHRIb29wLnNjb3JlSGl0Ym94LndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5yaWdodEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueVxuICAgICAgICAgICAgfVxuICAgICAgICApIDogKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMubGVmdEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueCArICh0aGlzLnJpZ2h0SG9vcC5zY29yZUhpdGJveC53aWR0aCAvIDIpLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMubGVmdEhvb3Auc2NvcmVIaXRib3gucG9zaXRpb24ueVxuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgLy8gTEFZVVBcbiAgICAgICAgaWYgKDE1MCA+IE1hdGguaHlwb3QodGhpcy5wb3NpdGlvbi54IC0gc2NvcmVQb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgLSBzY29yZVBvc2l0aW9uLnkpKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkZyYW1lcyA9IDMwXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVkgPSAoKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpKSAvIG51bWJlck9mRnJhbWVzXG5cbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAodGhpcy5wb3dlciAtIDMwKSAvIDIwXG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZFggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eVggKyBkaWZmXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCAtIGRpZmZcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICAgICAgeDogYWRqdXN0ZWRYLFxuICAgICAgICAgICAgICAgIHk6IHZlbG9jaXR5WVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU0hPVFxuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZGcmFtZXMgPSA1MFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVggPSAoc2NvcmVQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54KSAvIG51bWJlck9mRnJhbWVzXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eVkgPSAoKC1zY29yZVBvc2l0aW9uLnkgKyB0aGlzLnBvc2l0aW9uLnkpIC0gMC41ICogLUNPTlNUQU5UUy5HUkFWSVRZICogKG51bWJlck9mRnJhbWVzICogbnVtYmVyT2ZGcmFtZXMpKSAvIG51bWJlck9mRnJhbWVzXG4gICAgXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gKHRoaXMucG93ZXIgLSAzMCkgLyA2XG4gICAgICAgICAgICBjb25zdCBhZGp1c3RlZFggPSBzaG9vdGluZ1BsYXllci5mYWNpbmdSaWdodCA/IChcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eVggKyBkaWZmXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5WCAtIGRpZmZcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICAgICAgeDogYWRqdXN0ZWRYLFxuICAgICAgICAgICAgICAgIHk6IHZlbG9jaXR5WVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub1RvdWNoW3Nob290aW5nUGxheWVyLmNvbG9yXSA9IHRydWVcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vVG91Y2hbc2hvb3RpbmdQbGF5ZXIuY29sb3JdID0gZmFsc2VcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICB0aGlzLnBvd2VyID0gMFxuICAgICAgICB0aGlzLnJlbW92ZVBvc3Nlc3Npb24oKVxuXG4gICAgfVxuXG4gICAgcmVtb3ZlUG9zc2Vzc2lvbigpIHtcbiAgICAgICAgdGhpcy5wb3NzZXNzaW9uID0gbnVsbFxuICAgICAgICBzb2NrZXQuZW1pdChcInJlbW92ZUJhbGxQb3NzZXNzaW9uXCIsIHtcbiAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWQsXG4gICAgICAgICAgICBmcm9tU29ja2V0OiBzb2NrZXQuaWQsXG4gICAgICAgICAgICB2ZWxvY2l0eTogdGhpcy52ZWxvY2l0eSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbW92ZSgpIHtcblxuICAgICAgICBpZiAoIXRoaXMucG9zc2Vzc2lvbikge1xuICAgICAgICAgICAgdGhpcy5mYWxsKClcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb3ZlV2l0aFBsYXllclBvc3Nlc3Npb24oKSBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tCb3VuZHMoKVxuICAgIH1cblxuICAgIG1vdmVXaXRoUGxheWVyUG9zc2Vzc2lvbigpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5wb3NzZXNzaW9uLmZhY2luZ1JpZ2h0ID9cbiAgICAgICAgICAgICh0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueCArIHRoaXMucG9zc2Vzc2lvbi53aWR0aCkgOiAodGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLngpXG5cbiAgICAgICAgaWYgKHRoaXMucG9zc2Vzc2lvbi5qdW1waW5nKSB7XG4gICAgICAgICAgICAvLyBIT0xEIEJBTExcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMucG9zc2Vzc2lvbi5wb3NpdGlvbi55ICsgdGhpcy5wb3NzZXNzaW9uLmhlaWdodCAvIDJcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRFJJQkJMSU5HXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55IDwgdGhpcy5wb3NzZXNzaW9uLnBvc2l0aW9uLnkgKyB0aGlzLnBvc3Nlc3Npb24uaGVpZ2h0IC8gMikge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IC1DT05TVEFOVFMuRFJJQkJMRV9TUEVFRFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPiB0aGlzLnBvc3Nlc3Npb24ucG9zaXRpb24ueSArIHRoaXMucG9zc2Vzc2lvbi5oZWlnaHQgLSB0aGlzLnJhZGl1cykge1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5EUklCQkxFX1NQRUVEXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy52ZWxvY2l0eS55XG4gICAgICAgIH1cbiAgICAgICAgLy8gc29ja2V0LmVtaXQoXCJ1cGRhdGVCYWxsV2l0aFBvc1wiLCB7XG4gICAgICAgIC8vICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkLFxuICAgICAgICAvLyAgICAgZnJvbVNvY2tldDogc29ja2V0LmlkLFxuICAgICAgICAvLyAgICAgdmVsb2NpdHk6IHRoaXMudmVsb2NpdHksXG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgICAgLy8gICAgIG90aGVyUGxheWVyRmFjaW5nOiB0aGlzLnBvc3Nlc3Npb24uZmFjaW5nUmlnaHRcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cblxuICAgIGZhbGwgKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy52ZWxvY2l0eS55O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgICAgICAvLyBHUkFWSVRZXG4gICAgICAgIC8vIGlmIHRoZSBwb3MgaXMgZ3JlYXRlciB0aGFuIHRoZSBmbG9vclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5yYWRpdXMgPCB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSAtPSBDT05TVEFOVFMuR1JBVklUWTtcbiAgICAgICAgICAgIC8vIGVsc2Ugc2V0IHRoZSByZXZlcnNlIHZlbG9jaXR5XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52ZWxvY2l0eS55IDwgMCkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueSAqIENPTlNUQU5UUy5CT1VOQ0VfUkVURU5USU9OXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNoZWNrQm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ID4gdGhpcy5jb3VydC53aWR0aCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy5yYWRpdXNcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5LnhcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgUmVjdCBmcm9tIFwiLi91dGlscy9yZWN0XCI7XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBDT1VSVF9GTE9PUjogMC44NSxcbiAgICBDT1VSVF9XSURUSDogNVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291cnQgZXh0ZW5kcyBSZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IGRpbWVuc2lvbnMud2lkdGgsIGhlaWdodDogQ09OU1RBTlRTLkNPVVJUX1dJRFRIIH0pXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogZGltZW5zaW9ucy5oZWlnaHQgKiBDT05TVEFOVFMuQ09VUlRfRkxPT1JcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gXCJncmVlblwiXG4gICAgICAgIHRoaXMuY291cnRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmNvdXJ0SW1hZ2Uuc3JjID0gXCJzcmMvYXNzZXRzL2JiYWxsY291cnRzbWFsbC5wbmdcIlxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAvLyAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmNvdXJ0SW1hZ2UsXG4gICAgLy8gICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmNvdXJ0SW1hZ2Uud2lkdGggLyAxMiwgXG4gICAgLy8gICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmNvdXJ0SW1hZ2UuaGVpZ2h0IC8gMixcbiAgICAvLyAgICAgICAgIHRoaXMud2lkdGggKyB0aGlzLmNvdXJ0SW1hZ2Uud2lkdGggLyA2LFxuICAgIC8vICAgICAgICAgdGhpcy5jb3VydEltYWdlLmhlaWdodCk7XG4gICAgfVxuXG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcidcbmltcG9ydCBDb3VydCBmcm9tICcuL2NvdXJ0JztcbmltcG9ydCBIb29wIGZyb20gJy4vaG9vcCc7XG5pbXBvcnQgQmFsbCBmcm9tICcuL2JhbGwnO1xuaW1wb3J0IFNjb3JlYm9hcmQgZnJvbSAnLi9zY29yZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIyIGZyb20gJy4vcGxheWVyMic7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9tZW51X3NjcmVlbnMvbWFpbl9tZW51JztcbmltcG9ydCBPbmxpbmVQbGF5ZXIgZnJvbSAnLi9vbmxpbmVfcGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTkJBSmFtR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLm1haW5NZW51ID0gbmV3IE1haW5NZW51KHRoaXMuZGltZW5zaW9ucywgdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKSwgdGhpcy5zdGFydE9ubGluZUdhbWUuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlck1lbnUoKVxuICAgIH1cblxuICAgIHNob3dNZW51KCkge1xuICAgICAgICB0aGlzLm1haW5NZW51LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICB0aGlzLnJlbmRlck1lbnUodGhpcy5jdHgpXG4gICAgfVxuXG4gICAgcmVuZGVyTWVudSAoKSB7XG4gICAgICAgIHRoaXMubWFpbk1lbnUucmVuZGVyKHRoaXMuY3R4KVxuICAgICAgICBpZiAoIXRoaXMucGxheWluZ0dhbWUpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlck1lbnUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lIChsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSkge1xuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gdHJ1ZVxuICAgICAgICB0aGlzLnJlc3RhcnQobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUpXG4gICAgfVxuXG4gICAgc3RhcnRPbmxpbmVHYW1lKGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlLCBteVNpZGUsIGdhbWVJZCkge1xuICAgICAgICB0aGlzLnBsYXlpbmdHYW1lID0gdHJ1ZVxuICAgICAgICB0aGlzLm9ubGluZUdhbWVJZCA9IGdhbWVJZFxuICAgICAgICB0aGlzLnJ1bk9ubGluZUdhbWUobGVmdFNwcml0ZSwgcmlnaHRTcHJpdGUsIG15U2lkZSlcbiAgICB9XG5cbiAgICByZXN0YXJ0KGxlZnRTcHJpdGUsIHJpZ2h0U3ByaXRlKSB7XG4gICAgICAgIC8vIFNUQVJUIEFOSU1BVElPTiBTWUNMRVxuICAgICAgICB0aGlzLmNvdXJ0ID0gbmV3IENvdXJ0KHRoaXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMubGVmdEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiTEVGVFwiKTtcbiAgICAgICAgdGhpcy5yaWdodEhvb3AgPSBuZXcgSG9vcCh0aGlzLmRpbWVuc2lvbnMsIFwiUklHSFRcIik7XG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKHRoaXMuZGltZW5zaW9ucywgdGhpcy5jb3VydCwgdGhpcy5sZWZ0SG9vcCwgdGhpcy5yaWdodEhvb3ApXG5cbiAgICAgICAgdGhpcy5zY29yZWJvYXJkID0gbmV3IFNjb3JlYm9hcmQodGhpcy5kaW1lbnNpb25zLCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcClcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCByaWdodFNwcml0ZSk7XG4gICAgICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgbGVmdFNwcml0ZSk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuICAgIFxuICAgIGFuaW1hdGUoKSB7ICAgICAgICBcbiAgICAgICAgLy8gQ1JFQVRFUyBCQUNLR1JPVU5EXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvdXJ0LmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIC8vIEFOSU1BVEUgT0JKRUNUU1xuICAgICAgICB0aGlzLnBsYXllci5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLnBsYXllcjIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5iYWxsLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMubGVmdEhvb3AuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgdGhpcy5yaWdodEhvb3AuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2NvcmVib2FyZC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5V2lubmVyKClcbiAgICAgICAgfVxuICAgICAgICAvLyBSRVFVRVNUIE5FWFQgRlJBTUVcbiAgICAgICAgaWYgKHRoaXMucGxheWluZ0dhbWUpIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcnVuT25saW5lR2FtZShsZWZ0U3ByaXRlLCByaWdodFNwcml0ZSwgbXlTaWRlKSB7XG4gICAgICAgIHRoaXMuY291cnQgPSBuZXcgQ291cnQodGhpcy5kaW1lbnNpb25zKTtcbiAgICAgICAgdGhpcy5sZWZ0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJMRUZUXCIpO1xuICAgICAgICB0aGlzLnJpZ2h0SG9vcCA9IG5ldyBIb29wKHRoaXMuZGltZW5zaW9ucywgXCJSSUdIVFwiKTtcbiAgICAgICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5kaW1lbnNpb25zLCB0aGlzLmNvdXJ0LCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcCwgdGhpcy5vbmxpbmVHYW1lSWQpXG5cbiAgICAgICAgdGhpcy5zY29yZWJvYXJkID0gbmV3IFNjb3JlYm9hcmQodGhpcy5kaW1lbnNpb25zLCB0aGlzLmxlZnRIb29wLCB0aGlzLnJpZ2h0SG9vcClcblxuICAgICAgICBpZiAobXlTaWRlID09PSBcIkxFRlRcIikge1xuICAgICAgICAgICAgdGhpcy5teVBsYXllciA9IG5ldyBPbmxpbmVQbGF5ZXIodGhpcy5jb3VydCwgdGhpcy5iYWxsLCBsZWZ0U3ByaXRlLCBcIkxFRlRcIiwgdHJ1ZSlcbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIgPSBuZXcgT25saW5lUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgcmlnaHRTcHJpdGUsIFwiUklHSFRcIiwgZmFsc2UpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyID0gbmV3IE9ubGluZVBsYXllcih0aGlzLmNvdXJ0LCB0aGlzLmJhbGwsIGxlZnRTcHJpdGUsIFwiTEVGVFwiLCBmYWxzZSlcbiAgICAgICAgICAgIHRoaXMubXlQbGF5ZXIgPSBuZXcgT25saW5lUGxheWVyKHRoaXMuY291cnQsIHRoaXMuYmFsbCwgcmlnaHRTcHJpdGUsIFwiUklHSFRcIiwgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZU90aGVyUG9zXCIsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgIHg6IGRhdGFbXCJ4XCJdLFxuICAgICAgICAgICAgICAgIHk6IGRhdGFbXCJ5XCJdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllci5mYWNpbmdSaWdodCAgPSBkYXRhW1wib3RoZXJQbGF5ZXJGYWNpbmdcIl1cbiAgICAgICAgICAgIHRoaXMub3RoZXJQbGF5ZXIuanVtcGluZyA9IGRhdGFbXCJvdGhlclBsYXllckp1bXBpbmdcIl1cbiAgICAgICAgfSkgXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZUJhbGxQb3NzZXNpb25cIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJhbGwucG9zc2Vzc2lvbiA9IHRoaXMub3RoZXJQbGF5ZXJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwicmVnaXN0ZXJlZFBvc3Nlc2lvbkNoYW5nZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLm9ubGluZUdhbWVJZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlTm9CYWxsUG9zc2VzaW9uXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5iYWxsLnBvc3Nlc3Npb24gPSBudWxsXG4gICAgICAgICAgICB0aGlzLmJhbGwucG9zaXRpb24gPSBkYXRhW1wicG9zaXRpb25cIl1cbiAgICAgICAgICAgIHRoaXMuYmFsbC52ZWxvY2l0eSA9IGRhdGFbXCJ2ZWxvY2l0eVwiXVxuICAgICAgICB9KVxuICAgICAgICAvLyBzb2NrZXQub24oXCJ1cGRhdGVCYWxsUG9zXCIsIGRhdGEgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5iYWxsLnBvc2l0aW9uID0gZGF0YVtcInBvc2l0aW9uXCJdXG4gICAgICAgIC8vICAgICB0aGlzLmJhbGwudmVsb2NpdHkgPSBkYXRhW1widmVsb2NpdHlcIl1cbiAgICAgICAgLy8gICAgIHRoaXMub3RoZXJQbGF5ZXIuZmFjaW5nUmlnaHQgPSBkYXRhW1wib3RoZXJQbGF5ZXJGYWNpbmdcIl1cbiAgICAgICAgLy8gfSlcbiAgICAgICAgc29ja2V0Lm9uKFwiZW5kR2FtZUZyb21EaXNjb25uZWN0XCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWluZ0dhbWUgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5vbmxpbmVHYW1lSWQgPSBudWxsXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNZW51KClcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMucnVuT25saW5lKCk7XG4gICAgfVxuXG4gICAgcnVuT25saW5lICgpIHtcbiAgICAgICAgLy8gQ1JFQVRFUyBCQUNLR1JPVU5EXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5jb3VydC5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICAvLyBBTklNQVRFIE9CSkVDVFNcbiAgICAgICAgdGhpcy5vdGhlclBsYXllci5hbmltYXRlKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLm15UGxheWVyLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIFxuICAgICAgICB0aGlzLmJhbGwuYW5pbWF0ZSh0aGlzLmN0eClcblxuICAgICAgICB0aGlzLmxlZnRIb29wLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIHRoaXMucmlnaHRIb29wLmFuaW1hdGUodGhpcy5jdHgpXG5cbiAgICAgICAgdGhpcy5zY29yZWJvYXJkLmFuaW1hdGUodGhpcy5jdHgpXG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5V2lubmVyKClcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc29ja2V0LmVtaXQoXCJ1cGRhdGVNeVBvc1wiLCB7XG4gICAgICAgICAgICBnYW1lSWQ6IHRoaXMub25saW5lR2FtZUlkLFxuICAgICAgICAgICAgZnJvbVNvY2tldDogc29ja2V0LmlkLFxuICAgICAgICAgICAgeDogdGhpcy5teVBsYXllci5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy5teVBsYXllci5wb3NpdGlvbi55LFxuICAgICAgICAgICAgb3RoZXJQbGF5ZXJGYWNpbmc6IHRoaXMubXlQbGF5ZXIuZmFjaW5nUmlnaHQsXG4gICAgICAgICAgICBvdGhlclBsYXllckp1bXBpbmc6IHRoaXMubXlQbGF5ZXIuanVtcGluZ1xuICAgICAgICB9KVxuICAgICAgICBzb2NrZXQuZW1pdChcInVwZGF0ZUJhbGxQb3NcIiwge1xuICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLm9ubGluZUdhbWVJZCxcbiAgICAgICAgICAgIGZyb21Tb2NrZXQ6IHNvY2tldC5pZCxcbiAgICAgICAgICAgIHg6IHRoaXMuYmFsbC5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy5iYWxsLnBvc2l0aW9uLnlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gUkVRVUVTVCBORVhUIEZSQU1FXG4gICAgICAgIGlmICh0aGlzLnBsYXlpbmdHYW1lKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ydW5PbmxpbmUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG5cblxuICAgIGdhbWVPdmVyICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmVib2FyZC50aW1lTGVmdCA9PT0gMFxuICAgIH1cblxuICAgIGRpc3BsYXlXaW5uZXIgKCkge1xuICAgICAgICBsZXQgdGV4dDtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRIb29wLnNjb3JlID4gdGhpcy5sZWZ0SG9vcC5zY29yZSkge1xuICAgICAgICAgICAgdGV4dCA9IFwiUGxheWVyIDEgd2luc1wiXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0SG9vcC5zY29yZSA+IHRoaXMucmlnaHRIb29wLnNjb3JlKSB7XG4gICAgICAgICAgICB0ZXh0ID0gXCJQbGF5ZXIgMiB3aW5zXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQgPSBcIlRpZSBHYW1lXCJcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiB9XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke3RleHR9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoYCR7dGV4dH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGF5aW5nR2FtZSA9IGZhbHNlXG4gICAgICAgIHRoaXMub25saW5lR2FtZUlkID0gbnVsbFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01lbnUoKVxuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgUmVjdCBmcm9tICcuL3V0aWxzL3JlY3QnXG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBIT09QX1lfTVVMVElQTElFUjogMC4zLFxuICAgIEhPT1BfSEVJR0hUOiA0MCxcbiAgICBIT09QX1dJRFRIOiA1MCxcbiAgICBIT09QX1hfRElTVEFOQ0U6IDUwLFxuICAgIEJBQ0tCT0FSRF9XSURUSDogMTUsXG4gICAgQkFDS0JPQVJEX0hFSUdIVDogNTAsXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9vcCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIGhvb3BTaWRlLCBiYWxsKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5IT09QX1dJRFRILCBoZWlnaHQ6IENPTlNUQU5UUy5IT09QX0hFSUdIVCB9KVxuICAgICAgICB0aGlzLmJhbGwgPSBiYWxsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgICAgICAwICsgQ09OU1RBTlRTLkhPT1BfWF9ESVNUQU5DRVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zLndpZHRoIC0gQ09OU1RBTlRTLkhPT1BfWF9ESVNUQU5DRSAtIHRoaXMud2lkdGhcbiAgICAgICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsIFxuICAgICAgICAgICAgeTogZGltZW5zaW9ucy5oZWlnaHQgKiBDT05TVEFOVFMuSE9PUF9ZX01VTFRJUExJRVJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhY2tib2FyZCA9IG5ldyBCYWNrYm9hcmQodGhpcywgaG9vcFNpZGUpXG4gICAgICAgIHRoaXMuc2NvcmVIaXRib3ggPSBuZXcgU2NvcmVIaXRib3godGhpcywgaG9vcFNpZGUpXG4gICAgICAgIHRoaXMuY29sb3IgPSBcInB1cnBsZVwiXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgICAgIHRoaXMuanVzdFNjb3JlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5jaGVja0JhbGxDb2xsaXNpb24oKVxuICAgICAgICB0aGlzLmJhY2tib2FyZC5hbmltYXRlKGN0eClcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnNjb3JlSGl0Ym94LmFuaW1hdGUoY3R4KVxuICAgICAgICBpZiAodGhpcy5iYWxsLmlzT3ZlcmxhcHBpbmdSZWN0KHRoaXMuc2NvcmVIaXRib3gpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuanVzdFNjb3JlZCkgdGhpcy5zY29yZSArPSAyXG4gICAgICAgICAgICB0aGlzLmp1c3RTY29yZWQgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gXCJncmVlblwiXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1c3RTY29yZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSBcInB1cnBsZVwiXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCYWxsQ29sbGlzaW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzKSB8fCB0aGlzLmJhbGwuaXNPdmVybGFwcGluZ1JlY3QodGhpcy5iYWNrYm9hcmQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5iYWxsLnBvc2l0aW9uLnkgLSB0aGlzLmJhbGwucmFkaXVzID4gdGhpcy5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFsbC52ZWxvY2l0eS55ID4gMCkgdGhpcy5iYWxsLnZlbG9jaXR5LnkgPSAtdGhpcy5iYWxsLnZlbG9jaXR5LnlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFsbC5wb3NpdGlvbi55ICsgdGhpcy5iYWxsLnJhZGl1cyA8IHRoaXMuYmFja2JvYXJkLnBvc2l0aW9uLnkgJiYgdGhpcy5iYWxsLnZlbG9jaXR5LnkgPCAwKSAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkueSA9IC10aGlzLmJhbGwudmVsb2NpdHkueVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJhbGwudmVsb2NpdHkueCA9IC10aGlzLmJhbGwudmVsb2NpdHkueFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNsYXNzIFNjb3JlSGl0Ym94IGV4dGVuZHMgUmVjdCB7XG4gICAgY29uc3RydWN0b3IoaG9vcCwgaG9vcFNpZGUpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLkhPT1BfV0lEVEggLSAzMCwgaGVpZ2h0OiBDT05TVEFOVFMuSE9PUF9IRUlHSFQgKiAwLjA1IH0pXG4gICAgICAgIGNvbnN0IHggPSBob29wU2lkZSA9PT0gXCJMRUZUXCIgPyAoXG4gICAgICAgICAgICBob29wLnBvc2l0aW9uLnggKyAxNVxuICAgICAgICApIDogKFxuICAgICAgICAgICAgaG9vcC5wb3NpdGlvbi54ICsgaG9vcC53aWR0aCAtIHRoaXMud2lkdGggLSAxNVxuICAgICAgICApXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogaG9vcC5wb3NpdGlvbi55XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwid2hpdGVcIlxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59XG5cbmNsYXNzIEJhY2tib2FyZCBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGhvb3AsIGhvb3BTaWRlKSB7XG4gICAgICAgIHN1cGVyKHsgd2lkdGg6IENPTlNUQU5UUy5CQUNLQk9BUkRfV0lEVEgsIGhlaWdodDogQ09OU1RBTlRTLkJBQ0tCT0FSRF9IRUlHSFQgfSlcbiAgICAgICAgY29uc3QgeCA9IGhvb3BTaWRlID09PSBcIkxFRlRcIiA/IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCBcbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGhvb3AucG9zaXRpb24ueCArIGhvb3Aud2lkdGggLSB0aGlzLndpZHRoXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiBob29wLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImFxdWFcIlxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59IiwiaW1wb3J0IGtleSBmcm9tICcuLi91dGlscy9rZXltYXN0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXJTZWxlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMsIHNlbGVjdGVkQ2hhcmFjdGVycykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzID0gc2VsZWN0ZWRDaGFyYWN0ZXJzXG4gICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gMFxuICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAxXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJSb2RtYW5cIiwgc3JjOiBcInNyYy9hc3NldHMvcm9kbWFuU21hbGwucG5nXCJ9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkRyYWtlXCIsIHNyYzogXCJzcmMvYXNzZXRzL2RyYWtlU21hbGwucG5nXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJMZWJyb25cIiwgc3JjOiBcInNyYy9hc3NldHMvbGVicm9uU21hbGwucG5nXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJQZWFjaFwiLCBzcmM6IFwic3JjL2Fzc2V0cy9wZWFjaFNtYWxsLnBuZ1wifVxuICAgICAgICBdXG4gICAgICAgIFxuICAgICAgICB0aGlzLmxlZnRDaGFyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMucmlnaHRDaGFyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMubGVmdENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXS5zcmNcbiAgICAgICAgdGhpcy5yaWdodENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjXG5cbiAgICAgICAgdGhpcy5sZWZ0UmVhZHkgPSBmYWxzZVxuICAgICAgICB0aGlzLnJpZ2h0UmVhZHkgPSBmYWxzZVxuXG4gICAgICAgIHNvY2tldC5vbihcIm1hdGNoRm91bmRcIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRQbGF5ZXJJZCA9IGRhdGFbXCJsZWZ0UGxheWVySWRcIl1cbiAgICAgICAgICAgIHRoaXMucmlnaHRQbGF5ZXJJZCA9IGRhdGFbXCJyaWdodFBsYXllcklkXCJdXG4gICAgICAgICAgICBpZiAoc29ja2V0LmlkID09PSB0aGlzLmxlZnRQbGF5ZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nTGVmdCA9IHRydWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdSaWdodCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gMFxuICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gMVxuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSBkYXRhW1wiZ2FtZUlkXCJdXG4gICAgICAgIH0pXG5cbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZFNlbGVjdGVkQ2hhcnNcIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRTZWxlY3RlZCA9IGRhdGFbXCJsZWZ0U2VsZWN0ZWRcIl1cbiAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9IGRhdGFbXCJyaWdodFNlbGVjdGVkXCJdXG4gICAgICAgIH0pXG5cbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZExlZnRSZWFkeVwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlZnRSZWFkeSA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0Lm9uKFwidXBkYXRlZFJpZ2h0UmVhZHlcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yaWdodFJlYWR5ID0gdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHNvY2tldC5vbihcInN0YXJ0R2FtZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBrZXkudW5iaW5kKCdkb3duJylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgIGtleS51bmJpbmQoJ3cnKVxuICAgICAgICAgICAga2V5LnVuYmluZCgncycpXG4gICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhcmFjdGVycyh0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdLnNyYywgdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjLCB0aGlzLmdhbWVJZClcbiAgICAgICAgICAgIHRoaXMubGVmdFBsYXllcklkID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5yaWdodFBsYXllcklkID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmdMZWZ0ID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nUmlnaHQgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAwXG4gICAgICAgICAgICB0aGlzLnJpZ2h0U2VsZWN0ZWQgPSAxXG4gICAgICAgICAgICB0aGlzLmxlZnRSZWFkeSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLnJpZ2h0UmVhZHkgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSBudWxsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eCkge1xuXG4gICAgICAgIHRoaXMubGVmdENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMubGVmdFNlbGVjdGVkXS5zcmNcbiAgICAgICAgdGhpcy5yaWdodENoYXIuc3JjID0gdGhpcy5jaGFyYWN0ZXJzW3RoaXMucmlnaHRTZWxlY3RlZF0uc3JjXG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicHVycGxlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIExFRlQgU0lERVxuICAgICAgICBjb25zdCBsZWZ0U2lkZUNoYXIgPSB0aGlzLmNoYXJhY3RlcnNbdGhpcy5sZWZ0U2VsZWN0ZWRdXG4gICAgICAgIGxldCBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDQsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyfVxuICAgICAgICBjdHguZm9udCA9IFwiYm9sZCA0MHB0IHNlcmlmXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuXG4gICAgICAgIGlmICh0aGlzLm9ubGluZU1vZGUpIGN0eC5maWxsVGV4dChcIk9ubGluZSBNb2RlXCIsIGxvYy54LCBsb2MueSAtIDEwMClcbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgMTJwdCBzZXJpZlwiO1xuICAgICAgICBpZiAodGhpcy5sZWZ0UmVhZHkpIGN0eC5maWxsVGV4dChcIlJlYWR5XCIsIGxvYy54LCBsb2MueSAtIDcwKVxuICAgICAgICBpZiAodGhpcy5sZWZ0UGxheWVySWQgJiYgdGhpcy5yaWdodFBsYXllcklkKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy5sZWZ0UGxheWVySWR9YCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7c29ja2V0LmlkfWAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCR7bGVmdFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYCR7bGVmdFNpZGVDaGFyLm5hbWV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRDaGFyLFxuICAgICAgICAgICAgbG9jLnggLSB0aGlzLmxlZnRDaGFyLndpZHRoIC8gMixcbiAgICAgICAgICAgIGxvYy55KVxuXG4gICAgICAgIC8vIFJJR0hUIFNJREVcbiAgICAgICAgY29uc3QgcmlnaHRTaWRlQ2hhciA9IHRoaXMuY2hhcmFjdGVyc1t0aGlzLnJpZ2h0U2VsZWN0ZWRdXG4gICAgICAgIGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoICogMyAvIDQsIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyIH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblxuICAgICAgICBpZiAodGhpcy5vbmxpbmVNb2RlKSBjdHguZmlsbFRleHQoXCJPbmxpbmUgTW9kZVwiLCBsb2MueCwgbG9jLnkgLSAxMDApXG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDEycHQgc2VyaWZcIjtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRSZWFkeSkgY3R4LmZpbGxUZXh0KFwiUmVhZHlcIiwgbG9jLngsIGxvYy55IC0gNzApXG4gICAgICAgIGlmICh0aGlzLmxlZnRQbGF5ZXJJZCAmJiB0aGlzLnJpZ2h0UGxheWVySWQpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChgJHt0aGlzLnJpZ2h0UGxheWVySWR9YCwgbG9jLngsIGxvYy55IC0gNTApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYFdhaXRpbmcgZm9yIFBsYXllcmAsIGxvYy54LCBsb2MueSAtIDUwKVxuICAgICAgICB9XG4gICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcblxuICAgICAgICBjdHguZmlsbFRleHQoYCR7cmlnaHRTaWRlQ2hhci5uYW1lfWAsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGAke3JpZ2h0U2lkZUNoYXIubmFtZX1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMucmlnaHRDaGFyLFxuICAgICAgICAgICAgbG9jLnggLSB0aGlzLnJpZ2h0Q2hhci53aWR0aCAvIDIsXG4gICAgICAgICAgICBsb2MueSlcbiBcbiAgICB9XG5cbiAgICBzZXR1cEtleUhhbmRsZXJzKCkge1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm9ubGluZU1vZGUpIHtcbiAgICAgICAgICAgICAgICBrZXkoJ2Rvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgndXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgLSAxKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yaWdodFNlbGVjdGVkID09PSAtMSkgdGhpcy5yaWdodFNlbGVjdGVkID0gdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgndycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgncycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0U2VsZWN0ZWQgPSAodGhpcy5sZWZ0U2VsZWN0ZWQgLSAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdFNlbGVjdGVkID09PSAtMSkgdGhpcy5sZWZ0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAga2V5KCdlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICAgICAga2V5LnVuYmluZCgndycpXG4gICAgICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3MnKVxuICAgICAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzKHRoaXMuY2hhcmFjdGVyc1t0aGlzLmxlZnRTZWxlY3RlZF0uc3JjLCB0aGlzLmNoYXJhY3RlcnNbdGhpcy5yaWdodFNlbGVjdGVkXS5zcmMpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBrZXkoJ3VwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmdhbWVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkICsgMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGxheWluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFNlbGVjdGVkID0gKHRoaXMucmlnaHRTZWxlY3RlZCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmlnaHRTZWxlY3RlZCA9PT0gLTEpIHRoaXMucmlnaHRTZWxlY3RlZCA9IHRoaXMuY2hhcmFjdGVycy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXJDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFNlbGVjdGVkOiB0aGlzLnJpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRTZWxlY3RlZDogdGhpcy5sZWZ0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogdGhpcy5nYW1lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBrZXkoJ2Rvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFNlbGVjdGVkID0gKHRoaXMubGVmdFNlbGVjdGVkIC0gMSkgJSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdFNlbGVjdGVkID09PSAtMSkgdGhpcy5sZWZ0U2VsZWN0ZWQgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGFyQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRTZWxlY3RlZDogdGhpcy5yaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0U2VsZWN0ZWQ6IHRoaXMubGVmdFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IHRoaXMuZ2FtZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1BsYXlpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRTZWxlY3RlZCA9ICh0aGlzLnJpZ2h0U2VsZWN0ZWQgKyAxKSAlIHRoaXMuY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnY2hhckNoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0U2VsZWN0ZWQ6IHRoaXMucmlnaHRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFNlbGVjdGVkOiB0aGlzLmxlZnRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGtleSgnZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZ2FtZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmdMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2xlZnRSZWFkeScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQbGF5aW5nUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgncmlnaHRSZWFkeScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOiB0aGlzLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cblxuXG5cbn0iLCJpbXBvcnQga2V5IGZyb20gJy4uL3V0aWxzL2tleW1hc3Rlcic7XG5pbXBvcnQgQ2hhcmFjdGVyU2VsZWN0IGZyb20gJy4vY2hhcmFjdGVyX3NlbGVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IHtcbiAgICBjb25zdHJ1Y3RvciAoZGltZW5zaW9ucywgc3RhcnRHYW1lLCBzdGFydE9ubGluZUdhbWUpIHtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSA9IHN0YXJ0R2FtZVxuICAgICAgICB0aGlzLnN0YXJ0T25saW5lR2FtZSA9IHN0YXJ0T25saW5lR2FtZVxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gMFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXCJTdGFydCBHYW1lXCIsIFwiT25saW5lXCJdXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0ID0gbmV3IENoYXJhY3RlclNlbGVjdCh0aGlzLmRpbWVuc2lvbnMsIHRoaXMuc2VsZWN0ZWRDaGFyYWN0ZXJzLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2V0dXBLZXlIYW5kbGVycygpXG4gICAgfVxuXG4gICAgc2VsZWN0ZWRDaGFyYWN0ZXJzIChsZWZ0U3JjLCByaWdodFNyYywgZ2FtZUlkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycyA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlclNlbGVjdC5vbmxpbmVNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5vbmxpbmVNb2RlID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnN0IG15U2lkZSA9IHRoaXMuY2hhcmFjdGVyU2VsZWN0LmlzUGxheWluZ0xlZnQgPyBcIkxFRlRcIiA6IFwiUklHSFRcIlxuICAgICAgICAgICAgdGhpcy5zdGFydE9ubGluZUdhbWUobGVmdFNyYywgcmlnaHRTcmMsIG15U2lkZSwgZ2FtZUlkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUobGVmdFNyYywgcmlnaHRTcmMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbiAgICByZW5kZXIgKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJwdXJwbGVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW5nQ2hhcmFjdGVycykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvICgodGhpcy5vcHRpb25zLmxlbmd0aCArIDEpIC0gaSkgfVxuICAgICAgICAgICAgICAgIGN0eC5mb250ID0gXCJib2xkIDQwcHQgc2VyaWZcIjtcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBjdHgubWVhc3VyZVRleHQoYCR7b3B0aW9ufWApLndpZHRoXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PT0gaSkgY3R4LmZpbGxSZWN0KChsb2MueCAtIHdpZHRoIC8gMikgLSA1LCBsb2MueSAtIDQwLCB3aWR0aCArIDEwLCA1MCk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGAke29wdGlvbn1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHtvcHRpb259YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclNlbGVjdC5yZW5kZXIoY3R4KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0dXBLZXlIYW5kbGVycygpIHtcbiAgICAgICAga2V5KCdkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9ICh0aGlzLnNlbGVjdGVkT3B0aW9uICsgMSkgJSB0aGlzLm9wdGlvbnMubGVuZ3RoXG4gICAgICAgIH0pXG4gICAgICAgIGtleSgndXAnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gTWF0aC5hYnMoKHRoaXMuc2VsZWN0ZWRPcHRpb24gLSAxKSAlIHRoaXMub3B0aW9ucy5sZW5ndGgpXG4gICAgICAgIH0pXG4gICAgICAgIGtleSgnZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2Rvd24nKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ3VwJylcbiAgICAgICAgICAgICAgICBrZXkudW5iaW5kKCdlbnRlcicpXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RpbmdDaGFyYWN0ZXJzID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0Lm9ubGluZU1vZGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgnZG93bicpXG4gICAgICAgICAgICAgICAga2V5LnVuYmluZCgndXAnKVxuICAgICAgICAgICAgICAgIGtleS51bmJpbmQoJ2VudGVyJylcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGluZ0NoYXJhY3RlcnMgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJTZWxlY3Qub25saW5lTW9kZSA9IHRydWVcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgncGxheWVyQWRkZWRUb1F1ZXVlJywgc29ja2V0LmlkKVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyU2VsZWN0LnNldHVwS2V5SGFuZGxlcnMoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIFxuXG5cblxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBQTEFZRVJfV0lEVEg6IDQwLFxuICAgIFBMQVlFUl9IRUlHSFQ6IDcwLFxuICAgIE1PVkVTUEVFRDogNSxcbiAgICAvLyBXSVRIX0JBTExfTU9WRVNQRUVEOiAzLjUsXG4gICAgSlVNUF9IRUlHSFQ6IDE0LFxuICAgIC8vIE9OX0ZJUkVfSlVNUF9IRUlHSFQ6IDE2XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbmxpbmVQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMsIHN0YXJ0U2lkZSwgYWN0aXZlKSB7XG4gICAgICAgIHN1cGVyKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpXG4gICAgICAgIFxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gc3RhcnRTaWRlID09PSBcIkxFRlRcIiA/ICh7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfSkgOiAoe1xuICAgICAgICAgICAgeDogdGhpcy5jb3VydC53aWR0aCAtIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHRoaXMuY29sb3IgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmVcbiAgICB9XG5cblxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoKVxuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSxcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIDUsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnNwcml0ZS5oZWlnaHQgLyAzKVxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdyaWdodCcpKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gQ09OU1RBTlRTLk1PVkVTUEVFRDtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nUmlnaHQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ2xlZnQnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpVTVBJTkdcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3VwJykgJiYgIXRoaXMuanVtcGluZykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkpVTVBfSEVJR0hUO1xuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3NwYWNlJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZm9ybUFjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JhbGwoKVxuXG4gICAgICAgIHRoaXMuaGFuZGxlR3Jhdml0eSgpXG5cbiAgICAgICAgdGhpcy5jaGVja0JvdW5kcygpXG4gICAgfVxuXG59XG5cbiIsImltcG9ydCBSZWN0IGZyb20gJy4vdXRpbHMvcmVjdCc7XG5pbXBvcnQga2V5IGZyb20gJy4vdXRpbHMva2V5bWFzdGVyJztcblxuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgR1JBVklUWTogMC41LFxuICAgIFBMQVlFUl9XSURUSDogNDAsXG4gICAgUExBWUVSX0hFSUdIVDogNzAsXG4gICAgTU9WRVNQRUVEOiA1LFxuICAgIC8vIFdJVEhfQkFMTF9NT1ZFU1BFRUQ6IDMuNSxcbiAgICBKVU1QX0hFSUdIVDogMTQsXG4gICAgLy8gT05fRklSRV9KVU1QX0hFSUdIVDogMTZcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFJlY3Qge1xuICAgIGNvbnN0cnVjdG9yKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpIHtcbiAgICAgICAgc3VwZXIoeyB3aWR0aDogQ09OU1RBTlRTLlBMQVlFUl9XSURUSCwgaGVpZ2h0OiBDT05TVEFOVFMuUExBWUVSX0hFSUdIVCB9KVxuICAgICAgICB0aGlzLmNvdXJ0ID0gY291cnRcbiAgICAgICAgdGhpcy5iYWxsID0gYmFsbFxuXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHk6IHRoaXMuY291cnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5kZW5uaXNSb2RtYW5IZWFkID0gbmV3IEltYWdlKCk7XG4gICAgICAgIC8vIHRoaXMuZGVubmlzUm9kbWFuSGVhZC5zcmMgPSAnc3JjL2Fzc2V0cy9kZW5uaXNSb2RtYW5IZWFkLnBuZydcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc3JjID0gc3ByaXRlU3JjXG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBjdHguZHJhd0ltYWdlKHRoaXMuZGVubmlzUm9kbWFuSGVhZCwgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy53aWR0aCArICh0aGlzLmRlbm5pc1JvZG1hbkhlYWQud2lkdGggLyAyKSwgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgKyAodGhpcy5kZW5uaXNSb2RtYW5IZWFkLmhlaWdodCAvIDMpKVxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuc3ByaXRlLFxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtIDUsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnNwcml0ZS5oZWlnaHQgLyAzKVxuICAgIH1cblxuICAgIG1vdmUgKCkge1xuICAgICAgICBpZiAoa2V5LmlzUHJlc3NlZCgncmlnaHQnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdsZWZ0JykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBKVU1QSU5HXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCd1cCcpICYmICF0aGlzLmp1bXBpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IENPTlNUQU5UUy5KVU1QX0hFSUdIVDtcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCcvJykpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZm9ybUFjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGVja0JhbGwoKSBcblxuICAgICAgICB0aGlzLmhhbmRsZUdyYXZpdHkoKVxuXG4gICAgICAgIHRoaXMuY2hlY2tCb3VuZHMoKVxuICAgIH1cblxuICAgIHByZWZvcm1BY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmJhbGwucG9zc2Vzc2lvbiA9PT0gdGhpcykge1xuICAgICAgICAgICAgLy8gSG9sZCB0byBzaG9vdC4gXG4gICAgICAgICAgICB0aGlzLmJhbGwuc2hvb3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tCYWxsKCkge1xuICAgICAgICBpZiAoIXRoaXMuYmFsbC5wb3NzZXNzaW9uICYmIHRoaXMuYmFsbC5pc092ZXJsYXBwaW5nUmVjdCh0aGlzKSkge1xuICAgICAgICAgICAgdGhpcy5iYWxsLmNsYWltUG9zc2Vzc2lvbih0aGlzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlR3Jhdml0eSgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMudmVsb2NpdHkueTtcbiAgICAgICAgLy8gR1JBVklUWVxuICAgICAgICAvLyBpZiB0aGUgcG9zIGlzIGdyZWF0ZXIgdGhhbiB0aGUgZmxvb3JcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0IDwgdGhpcy5jb3VydC5wb3NpdGlvbi55KSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gQ09OU1RBTlRTLkdSQVZJVFk7XG4gICAgICAgICAgICAvLyBlbHNlIHNldCB0aGUgcG9zIHRvIHRoZSBmbG9vclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5jb3VydC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0JvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA+IHRoaXMuY291cnQud2lkdGggLSB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNvdXJ0LndpZHRoIC0gdGhpcy53aWR0aFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDBcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEdSQVZJVFk6IDAuNSxcbiAgICBQTEFZRVJfV0lEVEg6IDQwLFxuICAgIFBMQVlFUl9IRUlHSFQ6IDcwLFxuICAgIE1PVkVTUEVFRDogNSxcbiAgICAvLyBXSVRIX0JBTExfTU9WRVNQRUVEOiAzLjUsXG4gICAgSlVNUF9IRUlHSFQ6IDE0LFxuICAgIC8vIE9OX0ZJUkVfSlVNUF9IRUlHSFQ6IDE2XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb3VydCwgYmFsbCwgc3ByaXRlU3JjKSB7XG4gICAgICAgIHN1cGVyKGNvdXJ0LCBiYWxsLCBzcHJpdGVTcmMpXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiB0aGlzLmNvdXJ0LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ2QnKSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IENPTlNUQU5UUy5NT1ZFU1BFRUQ7XG4gICAgICAgICAgICB0aGlzLmZhY2luZ1JpZ2h0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCdhJykpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSBDT05TVEFOVFMuTU9WRVNQRUVEO1xuICAgICAgICAgICAgdGhpcy5mYWNpbmdSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBKVU1QSU5HXG4gICAgICAgIGlmIChrZXkuaXNQcmVzc2VkKCd3JykgJiYgIXRoaXMuanVtcGluZykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gQ09OU1RBTlRTLkpVTVBfSEVJR0hUO1xuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleS5pc1ByZXNzZWQoJ3EnKSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmb3JtQWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrQmFsbCgpXG5cbiAgICAgICAgdGhpcy5oYW5kbGVHcmF2aXR5KClcblxuICAgICAgICB0aGlzLmNoZWNrQm91bmRzKClcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBsZWZ0SG9vcCwgcmlnaHRIb29wKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5sZWZ0SG9vcCA9IGxlZnRIb29wXG4gICAgICAgIHRoaXMucmlnaHRIb29wID0gcmlnaHRIb29wXG4gICAgICAgIHRoaXMudGltZUxlZnQgPSA2MFxuICAgICAgICB0aGlzLmNvdW50RG93biA9IHNldEludGVydmFsKCgpID0+IHsgXG4gICAgICAgICAgICB0aGlzLnRpbWVMZWZ0LS1cbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVMZWZ0ID09PSAwKSBjbGVhckludGVydmFsKHRoaXMuY291bnREb3duKVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlIChjdHgpIHtcbiAgICAgICAgbGV0IGxvYyA9IHsgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiwgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDEwIH1cbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgNDBwdCBzZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG4gICAgICAgIGN0eC5maWxsVGV4dChgUGxheWVyIDE6ICR7dGhpcy5yaWdodEhvb3Auc2NvcmV9IFBsYXllciAyOiAke3RoaXMubGVmdEhvb3Auc2NvcmV9YCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoYFBsYXllciAxOiAke3RoaXMucmlnaHRIb29wLnNjb3JlfSBQbGF5ZXIgMjogJHt0aGlzLmxlZnRIb29wLnNjb3JlfWAsIGxvYy54LCBsb2MueSk7XG5cbiAgICAgICAgbG9jID0geyB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLCB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gNSB9XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFRleHQoYCR7dGhpcy50aW1lTGVmdH1gLCBsb2MueCwgbG9jLnkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICBjdHguc3Ryb2tlVGV4dChgJHt0aGlzLnRpbWVMZWZ0fWAsIGxvYy54LCBsb2MueSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IocmFkaXVzKSB7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cblxuICAgIGlzT3ZlcmxhcHBpbmdSZWN0KHJlY3QpIHtcbiAgICAgICAgY29uc3QgZGlzdFggPSBNYXRoLmFicyh0aGlzLnBvc2l0aW9uLnggLSByZWN0LnBvc2l0aW9uLnggLSByZWN0LndpZHRoIC8gMik7XG4gICAgICAgIGNvbnN0IGRpc3RZID0gTWF0aC5hYnModGhpcy5wb3NpdGlvbi55IC0gcmVjdC5wb3NpdGlvbi55IC0gcmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgaWYgKGRpc3RYID4gKHJlY3Qud2lkdGggLyAyICsgdGhpcy5yYWRpdXMpKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICBpZiAoZGlzdFkgPiAocmVjdC5oZWlnaHQgLyAyICsgdGhpcy5yYWRpdXMpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICAgIGlmIChkaXN0WCA8PSAocmVjdC53aWR0aCAvIDIpKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIGlmIChkaXN0WSA8PSAocmVjdC5oZWlnaHQgLyAyKSkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgICAgIGNvbnN0IGR4ID0gZGlzdFggLSByZWN0LndpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgZHkgPSBkaXN0WSAtIHJlY3QuaGVpZ2h0IC8gMjtcbiAgICAgICAgcmV0dXJuIChkeCAqIGR4ICsgZHkgKiBkeSA8PSAodGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cykpO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuXG59IiwiLy8gICAgIGtleW1hc3Rlci5qc1xuLy8gICAgIChjKSAyMDExLTIwMTMgVGhvbWFzIEZ1Y2hzXG4vLyAgICAga2V5bWFzdGVyLmpzIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG47IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgdmFyIGssXG4gICAgICAgIF9oYW5kbGVycyA9IHt9LFxuICAgICAgICBfbW9kcyA9IHsgMTY6IGZhbHNlLCAxODogZmFsc2UsIDE3OiBmYWxzZSwgOTE6IGZhbHNlIH0sXG4gICAgICAgIF9zY29wZSA9ICdhbGwnLFxuICAgICAgICAvLyBtb2RpZmllciBrZXlzXG4gICAgICAgIF9NT0RJRklFUlMgPSB7XG4gICAgICAgICAgICAn4oenJzogMTYsIHNoaWZ0OiAxNixcbiAgICAgICAgICAgICfijKUnOiAxOCwgYWx0OiAxOCwgb3B0aW9uOiAxOCxcbiAgICAgICAgICAgICfijIMnOiAxNywgY3RybDogMTcsIGNvbnRyb2w6IDE3LFxuICAgICAgICAgICAgJ+KMmCc6IDkxLCBjb21tYW5kOiA5MVxuICAgICAgICB9LFxuICAgICAgICAvLyBzcGVjaWFsIGtleXNcbiAgICAgICAgX01BUCA9IHtcbiAgICAgICAgICAgIGJhY2tzcGFjZTogOCwgdGFiOiA5LCBjbGVhcjogMTIsXG4gICAgICAgICAgICBlbnRlcjogMTMsICdyZXR1cm4nOiAxMyxcbiAgICAgICAgICAgIGVzYzogMjcsIGVzY2FwZTogMjcsIHNwYWNlOiAzMixcbiAgICAgICAgICAgIGxlZnQ6IDM3LCB1cDogMzgsXG4gICAgICAgICAgICByaWdodDogMzksIGRvd246IDQwLFxuICAgICAgICAgICAgZGVsOiA0NiwgJ2RlbGV0ZSc6IDQ2LFxuICAgICAgICAgICAgaG9tZTogMzYsIGVuZDogMzUsXG4gICAgICAgICAgICBwYWdldXA6IDMzLCBwYWdlZG93bjogMzQsXG4gICAgICAgICAgICAnLCc6IDE4OCwgJy4nOiAxOTAsICcvJzogMTkxLFxuICAgICAgICAgICAgJ2AnOiAxOTIsICctJzogMTg5LCAnPSc6IDE4NyxcbiAgICAgICAgICAgICc7JzogMTg2LCAnXFwnJzogMjIyLFxuICAgICAgICAgICAgJ1snOiAyMTksICddJzogMjIxLCAnXFxcXCc6IDIyMFxuICAgICAgICB9LFxuICAgICAgICBjb2RlID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBfTUFQW3hdIHx8IHgudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApO1xuICAgICAgICB9LFxuICAgICAgICBfZG93bktleXMgPSBbXTtcblxuICAgIGZvciAoayA9IDE7IGsgPCAyMDsgaysrKSBfTUFQWydmJyArIGtdID0gMTExICsgaztcblxuICAgIC8vIElFIGRvZXNuJ3Qgc3VwcG9ydCBBcnJheSNpbmRleE9mLCBzbyBoYXZlIGEgc2ltcGxlIHJlcGxhY2VtZW50XG4gICAgZnVuY3Rpb24gaW5kZXgoYXJyYXksIGl0ZW0pIHtcbiAgICAgICAgdmFyIGkgPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpLS0pIGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvLyBmb3IgY29tcGFyaW5nIG1vZHMgYmVmb3JlIHVuYXNzaWdubWVudFxuICAgIGZ1bmN0aW9uIGNvbXBhcmVBcnJheShhMSwgYTIpIHtcbiAgICAgICAgaWYgKGExLmxlbmd0aCAhPSBhMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGExW2ldICE9PSBhMltpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBtb2RpZmllck1hcCA9IHtcbiAgICAgICAgMTY6ICdzaGlmdEtleScsXG4gICAgICAgIDE4OiAnYWx0S2V5JyxcbiAgICAgICAgMTc6ICdjdHJsS2V5JyxcbiAgICAgICAgOTE6ICdtZXRhS2V5J1xuICAgIH07XG4gICAgZnVuY3Rpb24gdXBkYXRlTW9kaWZpZXJLZXkoZXZlbnQpIHtcbiAgICAgICAgZm9yIChrIGluIF9tb2RzKSBfbW9kc1trXSA9IGV2ZW50W21vZGlmaWVyTWFwW2tdXTtcbiAgICB9O1xuXG4gICAgLy8gaGFuZGxlIGtleWRvd24gZXZlbnRcbiAgICBmdW5jdGlvbiBkaXNwYXRjaChldmVudCkge1xuICAgICAgICB2YXIga2V5LCBoYW5kbGVyLCBrLCBpLCBtb2RpZmllcnNNYXRjaCwgc2NvcGU7XG4gICAgICAgIGtleSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgICAgaWYgKGluZGV4KF9kb3duS2V5cywga2V5KSA9PSAtMSkge1xuICAgICAgICAgICAgX2Rvd25LZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGEgbW9kaWZpZXIga2V5LCBzZXQgdGhlIGtleS48bW9kaWZpZXJrZXluYW1lPiBwcm9wZXJ0eSB0byB0cnVlIGFuZCByZXR1cm5cbiAgICAgICAgaWYgKGtleSA9PSA5MyB8fCBrZXkgPT0gMjI0KSBrZXkgPSA5MTsgLy8gcmlnaHQgY29tbWFuZCBvbiB3ZWJraXQsIGNvbW1hbmQgb24gR2Vja29cbiAgICAgICAgaWYgKGtleSBpbiBfbW9kcykge1xuICAgICAgICAgICAgX21vZHNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAvLyAnYXNzaWduS2V5JyBmcm9tIGluc2lkZSB0aGlzIGNsb3N1cmUgaXMgZXhwb3J0ZWQgdG8gd2luZG93LmtleVxuICAgICAgICAgICAgZm9yIChrIGluIF9NT0RJRklFUlMpIGlmIChfTU9ESUZJRVJTW2tdID09IGtleSkgYXNzaWduS2V5W2tdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVNb2RpZmllcktleShldmVudCk7XG5cbiAgICAgICAgLy8gc2VlIGlmIHdlIG5lZWQgdG8gaWdub3JlIHRoZSBrZXlwcmVzcyAoZmlsdGVyKCkgY2FuIGNhbiBiZSBvdmVycmlkZGVuKVxuICAgICAgICAvLyBieSBkZWZhdWx0IGlnbm9yZSBrZXkgcHJlc3NlcyBpZiBhIHNlbGVjdCwgdGV4dGFyZWEsIG9yIGlucHV0IGlzIGZvY3VzZWRcbiAgICAgICAgaWYgKCFhc3NpZ25LZXkuZmlsdGVyLmNhbGwodGhpcywgZXZlbnQpKSByZXR1cm47XG5cbiAgICAgICAgLy8gYWJvcnQgaWYgbm8gcG90ZW50aWFsbHkgbWF0Y2hpbmcgc2hvcnRjdXRzIGZvdW5kXG4gICAgICAgIGlmICghKGtleSBpbiBfaGFuZGxlcnMpKSByZXR1cm47XG5cbiAgICAgICAgc2NvcGUgPSBnZXRTY29wZSgpO1xuXG4gICAgICAgIC8vIGZvciBlYWNoIHBvdGVudGlhbCBzaG9ydGN1dFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX2hhbmRsZXJzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBfaGFuZGxlcnNba2V5XVtpXTtcblxuICAgICAgICAgICAgLy8gc2VlIGlmIGl0J3MgaW4gdGhlIGN1cnJlbnQgc2NvcGVcbiAgICAgICAgICAgIGlmIChoYW5kbGVyLnNjb3BlID09IHNjb3BlIHx8IGhhbmRsZXIuc2NvcGUgPT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBtb2RpZmllcnMgbWF0Y2ggaWYgYW55XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzTWF0Y2ggPSBoYW5kbGVyLm1vZHMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgaW4gX21vZHMpXG4gICAgICAgICAgICAgICAgICAgIGlmICgoIV9tb2RzW2tdICYmIGluZGV4KGhhbmRsZXIubW9kcywgK2spID4gLTEpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoX21vZHNba10gJiYgaW5kZXgoaGFuZGxlci5tb2RzLCAraykgPT0gLTEpKSBtb2RpZmllcnNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIGNhbGwgdGhlIGhhbmRsZXIgYW5kIHN0b3AgdGhlIGV2ZW50IGlmIG5lY2Nlc3NhcnlcbiAgICAgICAgICAgICAgICBpZiAoKGhhbmRsZXIubW9kcy5sZW5ndGggPT0gMCAmJiAhX21vZHNbMTZdICYmICFfbW9kc1sxOF0gJiYgIV9tb2RzWzE3XSAmJiAhX21vZHNbOTFdKSB8fCBtb2RpZmllcnNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlci5tZXRob2QoZXZlbnQsIGhhbmRsZXIpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY2FuY2VsQnViYmxlKSBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHVuc2V0IG1vZGlmaWVyIGtleXMgb24ga2V5dXBcbiAgICBmdW5jdGlvbiBjbGVhck1vZGlmaWVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXkgPSBldmVudC5rZXlDb2RlLCBrLFxuICAgICAgICAgICAgaSA9IGluZGV4KF9kb3duS2V5cywga2V5KTtcblxuICAgICAgICAvLyByZW1vdmUga2V5IGZyb20gX2Rvd25LZXlzXG4gICAgICAgIGlmIChpID49IDApIHtcbiAgICAgICAgICAgIF9kb3duS2V5cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IDkzIHx8IGtleSA9PSAyMjQpIGtleSA9IDkxO1xuICAgICAgICBpZiAoa2V5IGluIF9tb2RzKSB7XG4gICAgICAgICAgICBfbW9kc1trZXldID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgaWYgKF9NT0RJRklFUlNba10gPT0ga2V5KSBhc3NpZ25LZXlba10gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZXNldE1vZGlmaWVycygpIHtcbiAgICAgICAgZm9yIChrIGluIF9tb2RzKSBfbW9kc1trXSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgYXNzaWduS2V5W2tdID0gZmFsc2U7XG4gICAgfTtcblxuICAgIC8vIHBhcnNlIGFuZCBhc3NpZ24gc2hvcnRjdXRcbiAgICBmdW5jdGlvbiBhc3NpZ25LZXkoa2V5LCBzY29wZSwgbWV0aG9kKSB7XG4gICAgICAgIHZhciBrZXlzLCBtb2RzO1xuICAgICAgICBrZXlzID0gZ2V0S2V5cyhrZXkpO1xuICAgICAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9IHNjb3BlO1xuICAgICAgICAgICAgc2NvcGUgPSAnYWxsJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBlYWNoIHNob3J0Y3V0XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gc2V0IG1vZGlmaWVyIGtleXMgaWYgYW55XG4gICAgICAgICAgICBtb2RzID0gW107XG4gICAgICAgICAgICBrZXkgPSBrZXlzW2ldLnNwbGl0KCcrJyk7XG4gICAgICAgICAgICBpZiAoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBtb2RzID0gZ2V0TW9kcyhrZXkpO1xuICAgICAgICAgICAgICAgIGtleSA9IFtrZXlba2V5Lmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnZlcnQgdG8ga2V5Y29kZSBhbmQuLi5cbiAgICAgICAgICAgIGtleSA9IGtleVswXVxuICAgICAgICAgICAga2V5ID0gY29kZShrZXkpO1xuICAgICAgICAgICAgLy8gLi4uc3RvcmUgaGFuZGxlclxuICAgICAgICAgICAgaWYgKCEoa2V5IGluIF9oYW5kbGVycykpIF9oYW5kbGVyc1trZXldID0gW107XG4gICAgICAgICAgICBfaGFuZGxlcnNba2V5XS5wdXNoKHsgc2hvcnRjdXQ6IGtleXNbaV0sIHNjb3BlOiBzY29wZSwgbWV0aG9kOiBtZXRob2QsIGtleToga2V5c1tpXSwgbW9kczogbW9kcyB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB1bmJpbmQgYWxsIGhhbmRsZXJzIGZvciBnaXZlbiBrZXkgaW4gY3VycmVudCBzY29wZVxuICAgIGZ1bmN0aW9uIHVuYmluZEtleShrZXksIHNjb3BlKSB7XG4gICAgICAgIHZhciBtdWx0aXBsZUtleXMsIGtleXMsXG4gICAgICAgICAgICBtb2RzID0gW10sXG4gICAgICAgICAgICBpLCBqLCBvYmo7XG5cbiAgICAgICAgbXVsdGlwbGVLZXlzID0gZ2V0S2V5cyhrZXkpO1xuXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBtdWx0aXBsZUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGtleXMgPSBtdWx0aXBsZUtleXNbal0uc3BsaXQoJysnKTtcblxuICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIG1vZHMgPSBnZXRNb2RzKGtleXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXkgPSBrZXlzW2tleXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBrZXkgPSBjb2RlKGtleSk7XG5cbiAgICAgICAgICAgIGlmIChzY29wZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBnZXRTY29wZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFfaGFuZGxlcnNba2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBfaGFuZGxlcnNba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG9iaiA9IF9oYW5kbGVyc1trZXldW2ldO1xuICAgICAgICAgICAgICAgIC8vIG9ubHkgY2xlYXIgaGFuZGxlcnMgaWYgY29ycmVjdCBzY29wZSBhbmQgbW9kcyBtYXRjaFxuICAgICAgICAgICAgICAgIGlmIChvYmouc2NvcGUgPT09IHNjb3BlICYmIGNvbXBhcmVBcnJheShvYmoubW9kcywgbW9kcykpIHtcbiAgICAgICAgICAgICAgICAgICAgX2hhbmRsZXJzW2tleV1baV0gPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBrZXkgd2l0aCBjb2RlICdrZXlDb2RlJyBpcyBjdXJyZW50bHkgZG93blxuICAgIC8vIENvbnZlcnRzIHN0cmluZ3MgaW50byBrZXkgY29kZXMuXG4gICAgZnVuY3Rpb24gaXNQcmVzc2VkKGtleUNvZGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoa2V5Q29kZSkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGtleUNvZGUgPSBjb2RlKGtleUNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleChfZG93bktleXMsIGtleUNvZGUpICE9IC0xO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByZXNzZWRLZXlDb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIF9kb3duS2V5cy5zbGljZSgwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSAoZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQpLnRhZ05hbWU7XG4gICAgICAgIC8vIGlnbm9yZSBrZXlwcmVzc2VkIGluIGFueSBlbGVtZW50cyB0aGF0IHN1cHBvcnQga2V5Ym9hcmQgZGF0YSBpbnB1dFxuICAgICAgICByZXR1cm4gISh0YWdOYW1lID09ICdJTlBVVCcgfHwgdGFnTmFtZSA9PSAnU0VMRUNUJyB8fCB0YWdOYW1lID09ICdURVhUQVJFQScpO1xuICAgIH1cblxuICAgIC8vIGluaXRpYWxpemUga2V5Ljxtb2RpZmllcj4gdG8gZmFsc2VcbiAgICBmb3IgKGsgaW4gX01PRElGSUVSUykgYXNzaWduS2V5W2tdID0gZmFsc2U7XG5cbiAgICAvLyBzZXQgY3VycmVudCBzY29wZSAoZGVmYXVsdCAnYWxsJylcbiAgICBmdW5jdGlvbiBzZXRTY29wZShzY29wZSkgeyBfc2NvcGUgPSBzY29wZSB8fCAnYWxsJyB9O1xuICAgIGZ1bmN0aW9uIGdldFNjb3BlKCkgeyByZXR1cm4gX3Njb3BlIHx8ICdhbGwnIH07XG5cbiAgICAvLyBkZWxldGUgYWxsIGhhbmRsZXJzIGZvciBhIGdpdmVuIHNjb3BlXG4gICAgZnVuY3Rpb24gZGVsZXRlU2NvcGUoc2NvcGUpIHtcbiAgICAgICAgdmFyIGtleSwgaGFuZGxlcnMsIGk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gX2hhbmRsZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGVycyA9IF9oYW5kbGVyc1trZXldO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0uc2NvcGUgPT09IHNjb3BlKSBoYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYWJzdHJhY3Qga2V5IGxvZ2ljIGZvciBhc3NpZ24gYW5kIHVuYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0S2V5cyhrZXkpIHtcbiAgICAgICAgdmFyIGtleXM7XG4gICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICBrZXlzID0ga2V5LnNwbGl0KCcsJyk7XG4gICAgICAgIGlmICgoa2V5c1trZXlzLmxlbmd0aCAtIDFdKSA9PSAnJykge1xuICAgICAgICAgICAga2V5c1trZXlzLmxlbmd0aCAtIDJdICs9ICcsJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG5cbiAgICAvLyBhYnN0cmFjdCBtb2RzIGxvZ2ljIGZvciBhc3NpZ24gYW5kIHVuYXNzaWduXG4gICAgZnVuY3Rpb24gZ2V0TW9kcyhrZXkpIHtcbiAgICAgICAgdmFyIG1vZHMgPSBrZXkuc2xpY2UoMCwga2V5Lmxlbmd0aCAtIDEpO1xuICAgICAgICBmb3IgKHZhciBtaSA9IDA7IG1pIDwgbW9kcy5sZW5ndGg7IG1pKyspXG4gICAgICAgICAgICBtb2RzW21pXSA9IF9NT0RJRklFUlNbbW9kc1ttaV1dO1xuICAgICAgICByZXR1cm4gbW9kcztcbiAgICB9XG5cbiAgICAvLyBjcm9zcy1icm93c2VyIGV2ZW50c1xuICAgIGZ1bmN0aW9uIGFkZEV2ZW50KG9iamVjdCwgZXZlbnQsIG1ldGhvZCkge1xuICAgICAgICBpZiAob2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbWV0aG9kLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgaWYgKG9iamVjdC5hdHRhY2hFdmVudClcbiAgICAgICAgICAgIG9iamVjdC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZ1bmN0aW9uICgpIHsgbWV0aG9kKHdpbmRvdy5ldmVudCkgfSk7XG4gICAgfTtcblxuICAgIC8vIHNldCB0aGUgaGFuZGxlcnMgZ2xvYmFsbHkgb24gZG9jdW1lbnRcbiAgICBhZGRFdmVudChkb2N1bWVudCwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHsgZGlzcGF0Y2goZXZlbnQpIH0pOyAvLyBQYXNzaW5nIF9zY29wZSB0byBhIGNhbGxiYWNrIHRvIGVuc3VyZSBpdCByZW1haW5zIHRoZSBzYW1lIGJ5IGV4ZWN1dGlvbi4gRml4ZXMgIzQ4XG4gICAgYWRkRXZlbnQoZG9jdW1lbnQsICdrZXl1cCcsIGNsZWFyTW9kaWZpZXIpO1xuXG4gICAgLy8gcmVzZXQgbW9kaWZpZXJzIHRvIGZhbHNlIHdoZW5ldmVyIHRoZSB3aW5kb3cgaXMgKHJlKWZvY3VzZWQuXG4gICAgYWRkRXZlbnQod2luZG93LCAnZm9jdXMnLCByZXNldE1vZGlmaWVycyk7XG5cbiAgICAvLyBzdG9yZSBwcmV2aW91c2x5IGRlZmluZWQga2V5XG4gICAgdmFyIHByZXZpb3VzS2V5ID0gd2luZG93LmtleTtcblxuICAgIC8vIHJlc3RvcmUgcHJldmlvdXNseSBkZWZpbmVkIGtleSBhbmQgcmV0dXJuIHJlZmVyZW5jZSB0byBvdXIga2V5IG9iamVjdFxuICAgIGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgICAgIHZhciBrID0gd2luZG93LmtleTtcbiAgICAgICAgd2luZG93LmtleSA9IHByZXZpb3VzS2V5O1xuICAgICAgICByZXR1cm4gaztcbiAgICB9XG5cbiAgICAvLyBzZXQgd2luZG93LmtleSBhbmQgd2luZG93LmtleS5zZXQvZ2V0L2RlbGV0ZVNjb3BlLCBhbmQgdGhlIGRlZmF1bHQgZmlsdGVyXG4gICAgd2luZG93LmtleSA9IGFzc2lnbktleTtcbiAgICB3aW5kb3cua2V5LnNldFNjb3BlID0gc2V0U2NvcGU7XG4gICAgd2luZG93LmtleS5nZXRTY29wZSA9IGdldFNjb3BlO1xuICAgIHdpbmRvdy5rZXkuZGVsZXRlU2NvcGUgPSBkZWxldGVTY29wZTtcbiAgICB3aW5kb3cua2V5LmZpbHRlciA9IGZpbHRlcjtcbiAgICB3aW5kb3cua2V5LmlzUHJlc3NlZCA9IGlzUHJlc3NlZDtcbiAgICB3aW5kb3cua2V5LmdldFByZXNzZWRLZXlDb2RlcyA9IGdldFByZXNzZWRLZXlDb2RlcztcbiAgICB3aW5kb3cua2V5Lm5vQ29uZmxpY3QgPSBub0NvbmZsaWN0O1xuICAgIHdpbmRvdy5rZXkudW5iaW5kID0gdW5iaW5kS2V5O1xuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSBtb2R1bGUuZXhwb3J0cyA9IGFzc2lnbktleTtcblxufSkodGhpcyk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICB0aGlzLndpZHRoID0gc2l6ZS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcbiAgICB9XG5cbiAgICBpc092ZXJsYXBwaW5nT3RoZXJSZWN0KHJlY3RDbGFzcykge1xuICAgICAgICBjb25zdCBteUJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKClcbiAgICAgICAgY29uc3QgcmVjdCA9IHJlY3RDbGFzcy5nZXRCb3VuZHMoKVxuICAgICAgICBpZiAobXlCb3VuZHMubGVmdCA+IHJlY3QucmlnaHQgfHwgbXlCb3VuZHMucmlnaHQgPCByZWN0LmxlZnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobXlCb3VuZHMudG9wID4gcmVjdC5ib3R0b20gfHwgbXlCb3VuZHMuYm90dG9tIDwgcmVjdC50b3ApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICByaWdodDogdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=