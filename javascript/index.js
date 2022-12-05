//////////////////////////////////////////////////////////////
function onCreate() {
    ShowToast();
}
//▬▬▬▬▬▬▬▬▬▬
// TOAST
//▬▬▬▬▬▬▬▬▬▬
function ShowToast() {
    var x = document.getElementById("Toast");
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3900);
}
//▬▬▬▬▬▬▬▬▬▬
// FPS WEBS
//▬▬▬▬▬▬▬▬▬▬
var fps = document.getElementById("fps");

var startTime = Date.now();

var frame = 0;

function tick() {

    var time = Date.now();

    frame++;

    if (time - startTime > 1000) {

        fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);

        startTime = time;

        frame = 0;

    }
    window.requestAnimationFrame(tick);

}

tick();

//▬▬▬▬▬▬▬▬▬▬
// LINK
//▬▬▬▬▬▬▬▬▬▬

function TikTok() {
    setTimeout(function() {
            window.open('https://www.tiktok.com/@nghiepcoder16', 'ultimate')
        },
        100);
}

function Facebook() {
    setTimeout(function() {
            window.open('https://www.facebook.com/NghiepMeow.Developer', 'ultimate')
        },
        100);
}

function Github() {
    setTimeout(function() {
            window.open('https://github.com/NghiepCoder16', 'ultimate')
        },
        100);
}

function Telegram() {
    setTimeout(function() {
            window.open('https://t.me/NghiepMeow', 'ultimate')
        },
        100);
}

function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
//▬▬▬▬▬▬▬▬▬▬
// HOA ANH DAO
//▬▬▬▬▬▬▬▬▬▬

/*
var stop, staticx;
var img = new Image();
img.src = "https://i.imgur.com/R9XUjfF.png";

			function Sakura(x, y, s, r, fn) {
				this.x = x;
				this.y = y;
				this.s = s;
				this.r = r;
				this.fn = fn;
			}

			Sakura.prototype.draw = function(cxt) {
				cxt.save();
				var xc = 40 * this.s / 4;
				cxt.translate(this.x, this.y);
				cxt.rotate(this.r);
				cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
				cxt.restore();
			}

			Sakura.prototype.update = function() {
				this.x = this.fn.x(this.x, this.y);
				this.y = this.fn.y(this.y, this.y);
				this.r = this.fn.r(this.r);
				if(this.x > window.innerWidth ||
					this.x < 0 ||
					this.y > window.innerHeight ||
					this.y < 0
				) {
					this.r = getRandom('fnr');
					if(Math.random() > 0.4) {
						this.x = getRandom('x');
						this.y = 0;
						this.s = getRandom('s');
						this.r = getRandom('r');
					} else {
						this.x = window.innerWidth;
						this.y = getRandom('y');
						this.s = getRandom('s');
						this.r = getRandom('r');
					}
				}
			}

			SakuraList = function() {
				this.list = [];
			}
			SakuraList.prototype.push = function(sakura) {
				this.list.push(sakura);
			}
			SakuraList.prototype.update = function() {
				for(var i = 0, len = this.list.length; i < len; i++) {
					this.list[i].update();
				}
			}
			SakuraList.prototype.draw = function(cxt) {
				for(var i = 0, len = this.list.length; i < len; i++) {
					this.list[i].draw(cxt);
				}
			}
			SakuraList.prototype.get = function(i) {
				return this.list[i];
			}
			SakuraList.prototype.size = function() {
				return this.list.length;
			}

			function getRandom(option) {
				var ret, random;
				switch(option) {
					case 'x':
						ret = Math.random() * window.innerWidth;
						break;
					case 'y':
						ret = Math.random() * window.innerHeight;
						break;
					case 's':
						ret = Math.random();
						break;
					case 'r':
						ret = Math.random() * 5;
						break;
					case 'fnx':
						random = -0.5 + Math.random() * 1;
						ret = function(x, y) {
							return x + 0.5 * random - 1;
						};
						break;
					case 'fny':
						random = 0.5 + Math.random() * 0.5
						ret = function(x, y) {
							return y + random;
						};
						break;
					case 'fnr':
						random = Math.random() * 0.01;
						ret = function(r) {
							return r + random;
						};
						break;
				}
				return ret;
			}

			function startSakura() {

				requestAnimationFrame = window.requestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					window.oRequestAnimationFrame;
				var canvas = document.createElement('canvas'),
					cxt;
				staticx = true;
				canvas.height = window.innerHeight;
				canvas.width = window.innerWidth;
				canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
				canvas.setAttribute('id', 'canvas_sakura');
				document.getElementsByTagName('body')[0].appendChild(canvas);
				cxt = canvas.getContext('2d');
				var sakuraList = new SakuraList();
				for(var i = 0; i < 50; i++) {
					var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
					randomX = getRandom('x');
					randomY = getRandom('y');
					randomR = getRandom('r');
					randomS = getRandom('s');
					randomFnx = getRandom('fnx');
					randomFny = getRandom('fny');
					randomFnR = getRandom('fnr');
					sakura = new Sakura(randomX, randomY, randomS, randomR, {
						x: randomFnx,
						y: randomFny,
						r: randomFnR
					});
					sakura.draw(cxt);
					sakuraList.push(sakura);
				}
				stop = requestAnimationFrame(function() {
					cxt.clearRect(0, 0, canvas.width, canvas.height);
					sakuraList.update();
					sakuraList.draw(cxt);
					stop = requestAnimationFrame(arguments.callee);
				})
			}

			window.onresize = function() {
				var canvasSnow = document.getElementById('canvas_snow');
				canvasSnow.width = window.innerWidth;
				canvasSnow.height = window.innerHeight;
			}

			img.onload = function() {
				startSakura();
			}

			function stopp() {
				if(staticx) {
					var child = document.getElementById("canvas_sakura");
					child.parentNode.removeChild(child);
					window.cancelAnimationFrame(stop);
					staticx = false;
				} else {
					startSakura();
				}
			}
		
		
*/
//////////////////////////////////////////////////////////////