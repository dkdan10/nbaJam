!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=3)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=r(i(1)),s=r(i(2));function r(t){return t&&t.__esModule?t:{default:t}}var a={GRAVITY:.5,PLAYER_WIDTH:40,PLAYER_HEIGHT:70,MOVESPEED:5,JUMP_HEIGHT:14},l=function(t){function e(t,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{width:a.PLAYER_WIDTH,height:a.PLAYER_HEIGHT}));return o.court=t,o.ball=i,o.velocity={x:0,y:0},o.position={x:o.court.width-o.width,y:o.court.position.y-o.height},o.color="red",o.jumping=!1,o.facingRight=!0,o.sprite=new Image,o.sprite.src=n,o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default),n(e,[{key:"animate",value:function(t){this.move(),t.drawImage(this.sprite,this.position.x-5,this.position.y-this.sprite.height/3)}},{key:"move",value:function(){s.default.isPressed("right")&&(this.position.x+=a.MOVESPEED,this.facingRight=!0),s.default.isPressed("left")&&(this.position.x-=a.MOVESPEED,this.facingRight=!1),s.default.isPressed("up")&&!this.jumping&&(this.velocity.y=a.JUMP_HEIGHT,this.jumping=!0),s.default.isPressed("/")&&this.preformAction(),this.checkBall(),this.handleGravity(),this.checkBounds()}},{key:"preformAction",value:function(){this.ball.possession===this&&this.ball.shoot()}},{key:"checkBall",value:function(){!this.ball.possession&&this.ball.isOverlappingRect(this)&&this.ball.claimPossession(this)}},{key:"handleGravity",value:function(){this.position.y-=this.velocity.y,this.position.y+this.height<this.court.position.y?this.velocity.y-=a.GRAVITY:(this.velocity.y=0,this.position.y=this.court.position.y-this.height,this.jumping=!1)}},{key:"checkBounds",value:function(){this.position.x>this.court.width-this.width?this.position.x=this.court.width-this.width:this.position.x<0&&(this.position.x=0)}}]),e}();e.default=l},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=e.width,this.height=e.height}return n(t,[{key:"isOverlappingOtherRect",value:function(t){var e=this.getBounds(),i=t.getBounds();return!(e.left>i.right||e.right<i.left)&&!(e.top>i.bottom||e.bottom<i.top)}},{key:"getBounds",value:function(){return{left:this.position.x,right:this.position.x+this.width,top:this.position.y,bottom:this.position.y+this.height}}}]),t}();e.default=o},function(t,e,i){"use strict";!function(e){var i,n={},o={16:!1,18:!1,17:!1,91:!1},s="all",r={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},a={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},l=function(t){return a[t]||t.toUpperCase().charCodeAt(0)},h=[];for(i=1;i<20;i++)a["f"+i]=111+i;function c(t,e){for(var i=t.length;i--;)if(t[i]===e)return i;return-1}function u(t,e){if(t.length!=e.length)return!1;for(var i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}var f={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};function d(t){for(i in o)o[i]=t[f[i]]}function p(t,e,i){var o,s;o=g(t),void 0===i&&(i=e,e="all");for(var r=0;r<o.length;r++)s=[],(t=o[r].split("+")).length>1&&(s=m(t),t=[t[t.length-1]]),t=t[0],(t=l(t))in n||(n[t]=[]),n[t].push({shortcut:o[r],scope:e,method:i,key:o[r],mods:s})}for(i in r)p[i]=!1;function y(){return s||"all"}function g(t){var e;return""==(e=(t=t.replace(/\s/g,"")).split(","))[e.length-1]&&(e[e.length-2]+=","),e}function m(t){for(var e=t.slice(0,t.length-1),i=0;i<e.length;i++)e[i]=r[e[i]];return e}function b(t,e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent&&t.attachEvent("on"+e,function(){i(window.event)})}b(document,"keydown",function(t){!function(t){var e,i,s,a,l,u;if(e=t.keyCode,-1==c(h,e)&&h.push(e),93!=e&&224!=e||(e=91),e in o)for(s in o[e]=!0,r)r[s]==e&&(p[s]=!0);else if(d(t),p.filter.call(this,t)&&e in n)for(u=y(),a=0;a<n[e].length;a++)if((i=n[e][a]).scope==u||"all"==i.scope){for(s in l=i.mods.length>0,o)(!o[s]&&c(i.mods,+s)>-1||o[s]&&-1==c(i.mods,+s))&&(l=!1);(0!=i.mods.length||o[16]||o[18]||o[17]||o[91])&&!l||!1===i.method(t,i)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}(t)}),b(document,"keyup",function(t){var e,i=t.keyCode,n=c(h,i);if(n>=0&&h.splice(n,1),93!=i&&224!=i||(i=91),i in o)for(e in o[i]=!1,r)r[e]==i&&(p[e]=!1)}),b(window,"focus",function(){for(i in o)o[i]=!1;for(i in r)p[i]=!1});var v=window.key;window.key=p,window.key.setScope=function(t){s=t||"all"},window.key.getScope=y,window.key.deleteScope=function(t){var e,i,o;for(e in n)for(i=n[e],o=0;o<i.length;)i[o].scope===t?i.splice(o,1):o++},window.key.filter=function(t){var e=(t.target||t.srcElement).tagName;return!("INPUT"==e||"SELECT"==e||"TEXTAREA"==e)},window.key.isPressed=function(t){return"string"==typeof t&&(t=l(t)),-1!=c(h,t)},window.key.getPressedKeyCodes=function(){return h.slice(0)},window.key.noConflict=function(){var t=window.key;return window.key=v,t},window.key.unbind=function(t,e){var i,o,s,r,a,h=[];for(i=g(t),r=0;r<i.length;r++){if((o=i[r].split("+")).length>1&&(h=m(o)),t=o[o.length-1],t=l(t),void 0===e&&(e=y()),!n[t])return;for(s=0;s<n[t].length;s++)(a=n[t][s]).scope===e&&u(a.mods,h)&&(n[t][s]={})}},t.exports=p}()},function(t,e,i){"use strict";var n,o=i(4),s=(n=o)&&n.__esModule?n:{default:n};document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("nba-jam-game"),e=document.getElementById("nba-jam-background");window.addEventListener("keydown",function(t){[32,37,38,39,40].indexOf(t.keyCode)>-1&&t.preventDefault()},!1),new s.default(t,e)})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=f(i(0)),s=f(i(5)),r=f(i(6)),a=f(i(7)),l=f(i(9)),h=f(i(10)),c=f(i(11)),u=f(i(13));function f(t){return t&&t.__esModule?t:{default:t}}var d=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e.getContext("2d"),this.backgroundCanvas=i,this.dimensions={width:e.width,height:e.height},this.mainMenu=new c.default(this.dimensions,this.startGame.bind(this),this.startOnlineGame.bind(this)),this.playingGame=!1,this.renderMenu()}return n(t,[{key:"showMenu",value:function(){this.mainMenu.setupKeyHandlers(),this.renderMenu(this.ctx)}},{key:"renderMenu",value:function(){this.mainMenu.render(this.ctx),this.playingGame||requestAnimationFrame(this.renderMenu.bind(this))}},{key:"startGame",value:function(t,e){this.playingGame=!0,this.restart(t,e)}},{key:"startOnlineGame",value:function(t,e,i,n){this.playingGame=!0,this.onlineGameId=n,this.runOnlineGame(t,e,i)}},{key:"restart",value:function(t,e){this.court=new s.default(this.dimensions,this.backgroundCanvas),this.leftHoop=new r.default(this.dimensions,"LEFT"),this.rightHoop=new r.default(this.dimensions,"RIGHT"),this.ball=new a.default(this.dimensions,this.court,this.leftHoop,this.rightHoop),this.scoreboard=new l.default(this.dimensions,this.leftHoop,this.rightHoop),this.player=new o.default(this.court,this.ball,e),this.player2=new h.default(this.court,this.ball,t),this.animate()}},{key:"animate",value:function(){this.ctx.clearRect(0,0,this.dimensions.width,this.dimensions.height),this.court.animate(this.ctx),this.scoreboard.animate(this.ctx),this.player.animate(this.ctx),this.player2.animate(this.ctx),this.ball.animate(this.ctx),this.leftHoop.animate(this.ctx),this.rightHoop.animate(this.ctx),this.gameOver()&&this.displayWinner(),this.playingGame&&requestAnimationFrame(this.animate.bind(this))}},{key:"runOnlineGame",value:function(t,e,i){var n=this;this.court=new s.default(this.dimensions,this.backgroundCanvas),this.leftHoop=new r.default(this.dimensions,"LEFT"),this.rightHoop=new r.default(this.dimensions,"RIGHT"),this.ball=new a.default(this.dimensions,this.court,this.leftHoop,this.rightHoop,this.onlineGameId),this.scoreboard=new l.default(this.dimensions,this.leftHoop,this.rightHoop),"LEFT"===i?(this.myPlayer=new u.default(this.court,this.ball,t,"LEFT",!0),this.otherPlayer=new u.default(this.court,this.ball,e,"RIGHT",!1)):(this.otherPlayer=new u.default(this.court,this.ball,t,"LEFT",!1),this.myPlayer=new u.default(this.court,this.ball,e,"RIGHT",!0)),socket.on("updateOtherPos",function(t){n.otherPlayer.position={x:t.x,y:t.y},n.otherPlayer.facingRight=t.otherPlayerFacing,n.otherPlayer.jumping=t.otherPlayerJumping}),socket.on("updateBallPossesion",function(t){n.ball.possession=n.otherPlayer,socket.emit("registeredPossesionChange",{gameId:n.onlineGameId})}),socket.on("updateNoBallPossesion",function(t){n.ball.possession=null,n.ball.position=t.position,n.ball.velocity=t.velocity}),socket.on("endGameFromDisconnect",function(){n.playingGame=!1,n.onlineGameId=null,setTimeout(function(){n.showMenu()},1e3)}),this.runOnline()}},{key:"runOnline",value:function(){this.ctx.clearRect(0,0,this.dimensions.width,this.dimensions.height),this.court.animate(this.ctx),this.otherPlayer.animate(this.ctx),this.myPlayer.animate(this.ctx),this.ball.animate(this.ctx),this.leftHoop.animate(this.ctx),this.rightHoop.animate(this.ctx),this.scoreboard.animate(this.ctx),this.gameOver()&&this.displayWinner(),socket.emit("updateMyPos",{gameId:this.onlineGameId,fromSocket:socket.id,x:this.myPlayer.position.x,y:this.myPlayer.position.y,otherPlayerFacing:this.myPlayer.facingRight,otherPlayerJumping:this.myPlayer.jumping}),socket.emit("updateBallPos",{gameId:this.onlineGameId,fromSocket:socket.id,x:this.ball.position.x,y:this.ball.position.y}),this.playingGame&&requestAnimationFrame(this.runOnline.bind(this))}},{key:"gameOver",value:function(){return 0===this.scoreboard.timeLeft}},{key:"displayWinner",value:function(){var t=this,e=void 0;e=this.rightHoop.score>this.leftHoop.score?"Player 1 wins":this.leftHoop.score>this.rightHoop.score?"Player 2 wins":"Tie Game";var i={x:this.dimensions.width/2,y:this.dimensions.height/2};this.ctx.font="bold 40pt serif",this.ctx.fillStyle="white",this.ctx.textAlign="center",this.ctx.fillText(""+e,i.x,i.y),this.ctx.strokeStyle="black",this.ctx.lineWidth=2,this.ctx.strokeText(""+e,i.x,i.y),this.playingGame=!1,this.onlineGameId=null,setTimeout(function(){t.showMenu()},2e3)}}]),t}();e.default=d},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(1),r=(n=s)&&n.__esModule?n:{default:n};var a={COURT_FLOOR:.85,COURT_WIDTH:5,HOOP_Y_MULTIPLIER:.3,HOOP_HEIGHT:40,HOOP_WIDTH:50,HOOP_X_DISTANCE:50,BACKBOARD_WIDTH:15,BACKBOARD_HEIGHT:50},l=function(t){function e(t,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{width:t.width,height:a.COURT_WIDTH}));return n.dimensions=t,n.position={x:0,y:t.height*a.COURT_FLOOR},n.hoopLeftPosition={x:0+a.HOOP_X_DISTANCE-6,y:t.height*a.HOOP_Y_MULTIPLIER},n.hoopRightPosition={x:t.width-a.HOOP_X_DISTANCE-a.HOOP_WIDTH-a.BACKBOARD_WIDTH,y:t.height*a.HOOP_Y_MULTIPLIER},n.leftHoopImage=new Image,n.rightHoopImage=new Image,n.leftHoopImage.src="src/assets/cartoonHoopLeft.png",n.rightHoopImage.src="src/assets/cartoonHoopRight.png",n.color="green",n.courtImage=new Image,n.courtImage.src="src/assets/bballcourtsmall.png",n.setupBackgroundCourt(i),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default),o(e,[{key:"setupBackgroundCourt",value:function(t){var e=this,i=t.getContext("2d");i.fillStyle="orange",i.fillRect(0,0,this.dimensions.width,this.dimensions.height),this.courtImage.onload=function(){i.drawImage(e.courtImage,e.position.x-e.courtImage.width/12,e.position.y-e.courtImage.height/2,e.width+e.courtImage.width/6,e.courtImage.height)},this.leftHoopImage.onload=function(){i.drawImage(e.leftHoopImage,e.hoopLeftPosition.x,e.hoopLeftPosition.y-(a.HOOP_HEIGHT+5),a.HOOP_WIDTH+a.BACKBOARD_WIDTH+10,a.HOOP_HEIGHT+a.BACKBOARD_HEIGHT)},this.rightHoopImage.onload=function(){i.drawImage(e.rightHoopImage,e.hoopRightPosition.x,e.hoopRightPosition.y-(a.HOOP_HEIGHT+5),a.HOOP_WIDTH+a.BACKBOARD_WIDTH+10,a.HOOP_HEIGHT+a.BACKBOARD_HEIGHT)}}},{key:"animate",value:function(t){}}]),e}();e.default=l},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(1),r=(n=s)&&n.__esModule?n:{default:n};function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c={HOOP_Y_MULTIPLIER:.3,HOOP_HEIGHT:40,HOOP_WIDTH:50,HOOP_X_DISTANCE:50,BACKBOARD_WIDTH:15,BACKBOARD_HEIGHT:50},u=function(t){function e(t,i,n){a(this,e);var o=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{width:c.HOOP_WIDTH,height:c.HOOP_HEIGHT}));o.ball=n,o.dimensions=t;var s="LEFT"===i?0+c.HOOP_X_DISTANCE:t.width-c.HOOP_X_DISTANCE-o.width;return o.position={x:s,y:t.height*c.HOOP_Y_MULTIPLIER},o.backboard=new d(o,i),o.scoreHitbox=new f(o,i),o.color="purple",o.score=0,o.justScored=!1,o}return h(e,r.default),o(e,[{key:"animate",value:function(t){var e=this;this.checkBallCollision(),this.ball.isOverlappingRect(this.scoreHitbox)&&(this.justScored||(this.score+=2),this.justScored=!0,this.color="green",setTimeout(function(){e.justScored=!1,e.color="purple"},1e3))}},{key:"checkBallCollision",value:function(){(this.ball.isOverlappingRect(this)||this.ball.isOverlappingRect(this.backboard))&&(this.ball.position.y-this.ball.radius>this.position.y?this.ball.velocity.y>0&&(this.ball.velocity.y=-this.ball.velocity.y):(this.ball.position.y+this.ball.radius<this.backboard.position.y&&this.ball.velocity.y<0&&(this.ball.velocity.y=-this.ball.velocity.y),this.ball.velocity.x=-this.ball.velocity.x))}}]),e}();e.default=u;var f=function(t){function e(t,i){a(this,e);var n=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{width:c.HOOP_WIDTH-30,height:.05*c.HOOP_HEIGHT})),o="LEFT"===i?t.position.x+15:t.position.x+t.width-n.width-15;return n.position={x:o,y:t.position.y},n.color="white",n}return h(e,r.default),o(e,[{key:"animate",value:function(t){t.fillStyle=this.color,t.fillRect(this.position.x,this.position.y,this.width,this.height)}}]),e}(),d=function(t){function e(t,i){a(this,e);var n=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{width:c.BACKBOARD_WIDTH,height:c.BACKBOARD_HEIGHT})),o="LEFT"===i?t.position.x:t.position.x+t.width-n.width;return n.position={x:o,y:t.position.y-n.height},n.color="aqua",n}return h(e,r.default),o(e,[{key:"animate",value:function(t){t.fillStyle=this.color,t.fillRect(this.position.x,this.position.y,this.width,this.height)}}]),e}()},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(8),r=(n=s)&&n.__esModule?n:{default:n};var a={RADIUS:15,GRAVITY:.5,BOUNCE_RETENTION:.6,DRIBBLE_SPEED:3},l=function(t){function e(t,i,n,o,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,a.RADIUS));return r.court=i,r.dimensions=t,r.leftHoop=n,r.rightHoop=o,r.leftHoop.ball=r,r.rightHoop.ball=r,r.gameId=s,r.position={x:r.court.width/2,y:r.dimensions.height/2},r.velocity={x:0,y:0},r.color="hotpink",r.possession=null,r.noTouch={},r.power=0,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default),o(e,[{key:"animate",value:function(t){this.move(),t.beginPath(),t.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI),t.fillStyle=this.color,t.fill(),t.closePath()}},{key:"claimPossession",value:function(t){this.noTouch[t.color]||(this.possession=t,socket.emit("changeOfPossesion",{gameId:this.gameId,fromSocket:socket.id}))}},{key:"shoot",value:function(){var t=this;this.power+=1;var e=this.possession;this.position.x=e.facingRight?e.position.x+e.width+this.radius:e.position.x-this.radius,this.position.y=e.position.y,this.shootingTimeout&&this.power<60&&clearTimeout(this.shootingTimeout),this.power<60&&(this.shootingTimeout=setTimeout(function(){t.releaseBall()},20))}},{key:"releaseBall",value:function(){var t=this,e=this.possession,i=e.facingRight?{x:this.rightHoop.scoreHitbox.position.x+this.rightHoop.scoreHitbox.width/2,y:this.rightHoop.scoreHitbox.position.y}:{x:this.leftHoop.scoreHitbox.position.x+this.rightHoop.scoreHitbox.width/2,y:this.leftHoop.scoreHitbox.position.y};if(150>Math.hypot(this.position.x-i.x,this.position.y-i.y)){var n=(i.x-this.position.x)/30,o=(-i.y+this.position.y-.5*-a.GRAVITY*900)/30,s=(this.power-30)/20,r=e.facingRight?n+s:n-s;this.velocity={x:r,y:o}}else{var l=(i.x-this.position.x)/50,h=(-i.y+this.position.y-.5*-a.GRAVITY*2500)/50,c=(this.power-30)/6,u=e.facingRight?l+c:l-c;this.velocity={x:u,y:h}}this.noTouch[e.color]=!0,setTimeout(function(){t.noTouch[e.color]=!1},500),this.power=0,this.removePossession()}},{key:"removePossession",value:function(){this.possession=null,socket.emit("removeBallPossession",{gameId:this.gameId,fromSocket:socket.id,velocity:this.velocity,position:this.position})}},{key:"move",value:function(){this.possession?this.moveWithPlayerPossession():this.fall(),this.checkBounds()}},{key:"moveWithPlayerPossession",value:function(){this.position.x=this.possession.facingRight?this.possession.position.x+this.possession.width:this.possession.position.x,this.possession.jumping?this.position.y=this.possession.position.y+this.possession.height/2:(this.position.y<this.possession.position.y+this.possession.height/2?this.velocity.y=-a.DRIBBLE_SPEED:this.position.y>this.possession.position.y+this.possession.height-this.radius&&(this.velocity.y=a.DRIBBLE_SPEED),this.position.y-=this.velocity.y)}},{key:"fall",value:function(){this.position.y-=this.velocity.y,this.position.x+=this.velocity.x,this.position.y+this.radius<this.court.position.y?this.velocity.y-=a.GRAVITY:this.velocity.y<0&&(this.velocity.y=-this.velocity.y*a.BOUNCE_RETENTION)}},{key:"checkBounds",value:function(){this.position.x>this.court.width-this.radius?(this.position.x=this.court.width-this.radius,this.velocity.x=-this.velocity.x):this.position.x<0&&(this.position.x=0,this.velocity.x=-this.velocity.x)}}]),e}();e.default=l},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.radius=e}return n(t,[{key:"isOverlappingRect",value:function(t){var e=Math.abs(this.position.x-t.position.x-t.width/2),i=Math.abs(this.position.y-t.position.y-t.height/2);if(e>t.width/2+this.radius)return!1;if(i>t.height/2+this.radius)return!1;if(e<=t.width/2)return!0;if(i<=t.height/2)return!0;var n=e-t.width/2,o=i-t.height/2;return n*n+o*o<=this.radius*this.radius}},{key:"getBounds",value:function(){return{left:this.position.x,right:this.position.x+this.width,top:this.position.y,bottom:this.position.y+this.height}}}]),t}();e.default=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var o=function(){function t(e,i,n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dimensions=e,this.leftHoop=i,this.rightHoop=n,this.timeLeft=60,this.countDown=setInterval(function(){o.timeLeft--,0===o.timeLeft&&clearInterval(o.countDown)},1e3)}return n(t,[{key:"animate",value:function(t){var e={x:this.dimensions.width/4,y:this.dimensions.height/30};t.fillStyle="#1c2c55",t.fillRect(e.x-10,e.y,this.dimensions.width/2+20,this.dimensions.height/5),t.strokeStyle="black",t.lineWidth=1,t.strokeRect(e.x-10,e.y,this.dimensions.width/2+20,this.dimensions.height/5);var i={x:this.dimensions.width/3,y:this.dimensions.height/10};t.font="bold 22pt 'Scoreboard'",t.fillStyle="white",t.textAlign="center",t.fillText("Player 1",i.x,i.y);var n={x:this.dimensions.width/3,y:this.dimensions.height/5};t.font="bold 40pt 'Scoreboard'",t.fillStyle="red",t.textAlign="center",t.fillText(""+this.rightHoop.score,n.x,n.y);var o={x:this.dimensions.width/2,y:this.dimensions.height/5};t.font="bold 64pt 'Scoreboard'",t.fillStyle="white",t.textAlign="center",t.fillText(""+this.timeLeft,o.x,o.y),t.strokeStyle="black",t.lineWidth=.01,t.strokeText(""+this.timeLeft,o.x,o.y);var s={x:2*this.dimensions.width/3,y:this.dimensions.height/10};t.font="bold 22pt 'Scoreboard'",t.fillStyle="white",t.textAlign="center",t.fillText("Player 2",s.x,s.y);var r={x:2*this.dimensions.width/3,y:this.dimensions.height/5};t.font="bold 40pt 'Scoreboard'",t.fillStyle="red",t.textAlign="center",t.fillText(""+this.leftHoop.score,r.x,r.y)}}]),t}();e.default=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),r=(n=s)&&n.__esModule?n:{default:n};var a=5,l=14,h=function(t){function e(t,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,n));return o.position={x:0,y:o.court.position.y-o.height},o.color="black",o.jumping=!1,o.facingRight=!1,o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default),o(e,[{key:"move",value:function(){key.isPressed("d")&&(this.position.x+=a,this.facingRight=!0),key.isPressed("a")&&(this.position.x-=a,this.facingRight=!1),key.isPressed("w")&&!this.jumping&&(this.velocity.y=l,this.jumping=!0),key.isPressed("q")&&this.preformAction(),this.checkBall(),this.handleGravity(),this.checkBounds()}}]),e}();e.default=h},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=r(i(2)),s=r(i(12));function r(t){return t&&t.__esModule?t:{default:t}}var a=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dimensions=e,this.startGame=i,this.startOnlineGame=n,this.selectedOption=0,this.options=["Start Game","Online"],this.characterSelect=new s.default(this.dimensions,this.selectedCharacters.bind(this)),this.selectingCharacters=!1,this.setupKeyHandlers()}return n(t,[{key:"selectedCharacters",value:function(t,e,i){if(this.selectingCharacters=!1,this.characterSelect.onlineMode){this.characterSelect.onlineMode=!1;var n=this.characterSelect.isPlayingLeft?"LEFT":"RIGHT";this.startOnlineGame(t,e,n,i)}else this.startGame(t,e)}},{key:"render",value:function(t){var e=this;t.fillStyle="purple",t.fillRect(0,0,this.dimensions.width,this.dimensions.height),this.selectingCharacters?this.selectingCharacters&&this.characterSelect.render(t):this.options.forEach(function(i,n){var o={x:e.dimensions.width/2,y:e.dimensions.height/(e.options.length+1-n)};t.font="bold 40pt serif",t.textAlign="center",t.fillStyle="white";var s=t.measureText(""+i).width;e.selectedOption===n&&t.fillRect(o.x-s/2-5,o.y-40,s+10,50),t.fillText(""+i,o.x,o.y),t.strokeStyle="black",t.lineWidth=2,t.strokeText(""+i,o.x,o.y)})}},{key:"setupKeyHandlers",value:function(){var t=this;(0,o.default)("down",function(){t.selectedOption=(t.selectedOption+1)%t.options.length}),(0,o.default)("up",function(){t.selectedOption=Math.abs((t.selectedOption-1)%t.options.length)}),(0,o.default)("enter",function(){0!==t.selectedOption||t.selectingCharacters?1!==t.selectedOption||t.selectingCharacters||(o.default.unbind("down"),o.default.unbind("up"),o.default.unbind("enter"),t.selectingCharacters=!0,t.characterSelect.onlineMode=!0,socket.emit("playerAddedToQueue",socket.id),t.characterSelect.setupKeyHandlers()):(o.default.unbind("down"),o.default.unbind("up"),o.default.unbind("enter"),t.selectingCharacters=!0,t.characterSelect.onlineMode=!1,t.characterSelect.setupKeyHandlers())})}}]),t}();e.default=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(2),r=(n=s)&&n.__esModule?n:{default:n};var a=function(){function t(e,i){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dimensions=e,this.selectedCharacters=i,this.leftSelected=0,this.rightSelected=1,this.characters=[{name:"Rodman",src:"src/assets/rodmanSmall.png"},{name:"Drake",src:"src/assets/drakeSmall.png"},{name:"Lebron",src:"src/assets/lebronSmall.png"},{name:"Peach",src:"src/assets/peachSmall.png"}],this.leftChar=new Image,this.rightChar=new Image,this.leftChar.src=this.characters[this.leftSelected].src,this.rightChar.src=this.characters[this.rightSelected].src,this.leftReady=!1,this.rightReady=!1,socket.on("matchFound",function(t){n.leftPlayerId=t.leftPlayerId,n.rightPlayerId=t.rightPlayerId,socket.id===n.leftPlayerId?n.isPlayingLeft=!0:n.isPlayingRight=!0,n.leftSelected=0,n.rightSelected=1,n.gameId=t.gameId}),socket.on("updatedSelectedChars",function(t){n.leftSelected=t.leftSelected,n.rightSelected=t.rightSelected}),socket.on("updatedLeftReady",function(){n.leftReady=!0}),socket.on("updatedRightReady",function(){n.rightReady=!0}),socket.on("startGame",function(){r.default.unbind("down"),r.default.unbind("up"),r.default.unbind("w"),r.default.unbind("s"),r.default.unbind("enter"),n.selectedCharacters(n.characters[n.leftSelected].src,n.characters[n.rightSelected].src,n.gameId),n.leftPlayerId=null,n.rightPlayerId=null,n.isPlayingLeft=!1,n.isPlayingRight=!1,n.onlineMode=!1,n.leftSelected=0,n.rightSelected=1,n.leftReady=!1,n.rightReady=!1,n.gameId=null})}return o(t,[{key:"render",value:function(t){this.leftChar.src=this.characters[this.leftSelected].src,this.rightChar.src=this.characters[this.rightSelected].src,t.fillStyle="purple",t.fillRect(0,0,this.dimensions.width,this.dimensions.height);var e=this.characters[this.leftSelected],i={x:this.dimensions.width/4,y:this.dimensions.height/2};t.font="bold 40pt serif",t.textAlign="center",t.fillStyle="white",this.onlineMode&&t.fillText("Online Mode",i.x,i.y-100),t.font="bold 12pt serif",this.leftReady&&t.fillText("Ready",i.x,i.y-70),this.leftPlayerId&&this.rightPlayerId?t.fillText(""+this.leftPlayerId,i.x,i.y-50):this.onlineMode&&t.fillText(""+socket.id,i.x,i.y-50),t.font="bold 40pt serif",t.fillText(""+e.name,i.x,i.y),t.strokeStyle="black",t.lineWidth=2,t.strokeText(""+e.name,i.x,i.y),t.drawImage(this.leftChar,i.x-this.leftChar.width/2,i.y);var n=this.characters[this.rightSelected];i={x:3*this.dimensions.width/4,y:this.dimensions.height/2},t.font="bold 40pt serif",t.textAlign="center",t.fillStyle="white",this.onlineMode&&t.fillText("Online Mode",i.x,i.y-100),t.font="bold 12pt serif",this.rightReady&&t.fillText("Ready",i.x,i.y-70),this.leftPlayerId&&this.rightPlayerId?t.fillText(""+this.rightPlayerId,i.x,i.y-50):this.onlineMode&&t.fillText("Waiting for Player",i.x,i.y-50),t.font="bold 40pt serif",t.fillText(""+n.name,i.x,i.y),t.strokeStyle="black",t.lineWidth=2,t.strokeText(""+n.name,i.x,i.y),t.drawImage(this.rightChar,i.x-this.rightChar.width/2,i.y)}},{key:"setupKeyHandlers",value:function(){var t=this;setTimeout(function(){t.onlineMode?t.onlineMode&&((0,r.default)("up",function(){t.gameId&&t.onlineMode&&(t.isPlayingLeft?(t.leftSelected=(t.leftSelected+1)%t.characters.length,socket.emit("charChanged",{rightSelected:t.rightSelected,leftSelected:t.leftSelected,gameId:t.gameId})):t.isPlayingRight&&(t.rightSelected=t.rightSelected-1,-1===t.rightSelected&&(t.rightSelected=t.characters.length-1),socket.emit("charChanged",{rightSelected:t.rightSelected,leftSelected:t.leftSelected,gameId:t.gameId})))}),(0,r.default)("down",function(){t.gameId&&t.onlineMode&&(t.isPlayingLeft?(t.leftSelected=(t.leftSelected-1)%t.characters.length,-1===t.leftSelected&&(t.leftSelected=t.characters.length-1),socket.emit("charChanged",{rightSelected:t.rightSelected,leftSelected:t.leftSelected,gameId:t.gameId})):t.isPlayingRight&&(t.rightSelected=(t.rightSelected+1)%t.characters.length,socket.emit("charChanged",{rightSelected:t.rightSelected,leftSelected:t.leftSelected,gameId:t.gameId})))}),(0,r.default)("enter",function(){t.gameId&&t.onlineMode&&(t.isPlayingLeft?socket.emit("leftReady",{gameId:t.gameId}):t.isPlayingRight&&socket.emit("rightReady",{gameId:t.gameId}))})):((0,r.default)("down",function(){t.rightSelected=(t.rightSelected+1)%t.characters.length}),(0,r.default)("up",function(){t.rightSelected=t.rightSelected-1,-1===t.rightSelected&&(t.rightSelected=t.characters.length-1)}),(0,r.default)("w",function(){t.leftSelected=(t.leftSelected+1)%t.characters.length}),(0,r.default)("s",function(){t.leftSelected=(t.leftSelected-1)%t.characters.length,-1===t.leftSelected&&(t.leftSelected=t.characters.length-1)}),(0,r.default)("enter",function(){r.default.unbind("down"),r.default.unbind("up"),r.default.unbind("w"),r.default.unbind("s"),r.default.unbind("enter"),t.selectedCharacters(t.characters[t.leftSelected].src,t.characters[t.rightSelected].src)}))},100)}}]),t}();e.default=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),r=(n=s)&&n.__esModule?n:{default:n};var a=5,l=14,h=function(t){function e(t,i,n,o,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,n));return r.position="LEFT"===o?{x:0,y:r.court.position.y-r.height}:{x:r.court.width-r.width,y:r.court.position.y-r.height},r.active||(r.color="black"),r.active=s,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default),o(e,[{key:"animate",value:function(t){this.active&&this.move(),t.drawImage(this.sprite,this.position.x-5,this.position.y-this.sprite.height/3)}},{key:"move",value:function(){key.isPressed("right")&&(this.position.x+=a,this.facingRight=!0),key.isPressed("left")&&(this.position.x-=a,this.facingRight=!1),key.isPressed("up")&&!this.jumping&&(this.velocity.y=l,this.jumping=!0),key.isPressed("space")&&this.preformAction(),this.checkBall(),this.handleGravity(),this.checkBounds()}}]),e}();e.default=h}]);
//# sourceMappingURL=main.js.map