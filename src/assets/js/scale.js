
;(function(window) {

	'use strict';

	function lineEq(y2, y1, x2, x1, currentVal) {
		// y = mx + b
		var m = (y2 - y1) / (x2 - x1),
			b = y1 - m * x1;

		return m * currentVal + b;
	}

	function Scale(el) {
		this.el = el;
		this._init();
	}

	Scale.prototype.effects = {
		'spring' : {
			in: {
				duration: 1000,
				delay: function(el, index) { return 75+index*40; },
				easing: 'easeOutElastic',
				elasticity: 650,
				opacity: {
					value: 1,
					easing: 'easeOutExpo',
				},
				translateY: ['50%','0%']
			},
			out: {
				duration: 400,
				delay: function(el, index) { return index*40; },
				easing: 'easeOutExpo',
				opacity: 0,
				translateY: '-100%'
			}
		}
	};

	Scale.prototype._init = function() {
		this.el.classList.add('letter-effect');
		// Split word(s) into letters/spans.
		charming(this.el, {classPrefix: 'letter'});
		this.letters = [].slice.call(this.el.querySelectorAll('span'));
		this.lettersTotal = this.letters.length;
	};

	Scale.prototype._stop = function() {
		anime.remove(this.letters);
		this.letters.forEach(function(letter) { letter.style.WebkitTransform = letter.style.transform = ''; });
	};

	Scale.prototype.show = function(effect, callback) {
		this._stop();
		arguments.length ? this._animate('in', effect, callback) : this.letters.forEach(function(letter) { letter.style.opacity = 1; });
	};

	Scale.prototype.hide = function(effect, callback) {
		this._stop();
		arguments.length ? this._animate('out', effect, callback) : this.letters.forEach(function(letter) { letter.style.opacity = 0; });
	};

	Scale.prototype._animate = function(direction, effect, callback) {
		var effecSettings = typeof effect === 'string' ? this.effects[effect] : effect;

		if( effecSettings.perspective != undefined ) {
			this.el.style.WebkitPerspective = this.el.style.perspective = effecSettings.perspective + 'px';
		}
		if( effecSettings.origin != undefined ) {
			this.letters.forEach(function(letter) {
				letter.style.WebkitTransformOrigin = letter.style.transformOrigin = effecSettings.origin;
			});
		}

		// Custom effect
		var iscustom = this._checkCustomFx(direction, effect, callback);

		var animOpts = effecSettings[direction],
			target = this.letters;

		target.forEach(function(t,p) {
			if( t.innerHTML === ' ' ) {
				target.splice(p, 1);
			}
		});

		animOpts.targets = target;

		if( !iscustom ) {
			animOpts.complete = callback;
		}

		anime(animOpts);
	};

	Scale.prototype._checkCustomFx = function(direction, effect, callback) {
		var custom = typeof effect === 'string' && effect === 'spring' && direction === 'out';

	};

	window.Scale = Scale;

})(window);
