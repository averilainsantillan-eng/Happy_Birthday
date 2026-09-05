

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

// Window resize is handled smoothly by responsive scale transform


(function($) {
	// Text typing speed: adjust the default value (in milliseconds) below.
	// Smaller number = faster typing (e.g., 40ms), larger number = slower typing (e.g., 100ms).
	var DEFAULT_TYPE_SPEED = 75;

	$.fn.typewriter = function(speed, callback) {
		if (typeof speed === 'function') {
			callback = speed;
			speed = DEFAULT_TYPE_SPEED;
		} else if (typeof speed !== 'number') {
			speed = DEFAULT_TYPE_SPEED;
		}

		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
					if (typeof callback === 'function') {
						callback();
					}
				}
			}, speed);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "Days <span class=\"digit\">" + days + "</span> Hours <span class=\"digit\">" + hours + "</span> Minutes <span class=\"digit\">" + minutes; 
	$("#clock").html(result);

	var text = "THE WORLD JUST GOT LUCKIER SINCE ";
	$("#message-box").html(text);

}
