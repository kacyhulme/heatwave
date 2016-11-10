
var drawHeat = function(array) {
	//console.log(array)
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");

	var gradient =  ctx.createLinearGradient(0,0,0,300);
	gradient.addColorStop(.1,"blue");
	gradient.addColorStop(.2,"yellow");
	gradient.addColorStop(.3,"red");
	gradient.addColorStop(.4,"blue");

	ctx.fillStyle = gradient;
	ctx.fillRect(0,0,600,200);
}();

var displaySelectionValue = function() {
		var x = document.getElementById("daysofweek").value;
		var displayday = document.getElementById("display-day");
		displayday.innerHTML = x;
		console.log(displayday);
		var y = document.getElementById("hourofday").value;
		var displayhour = document.getElementById("display-hour");
		displayhour.innerHTML = y;	
		console.log(displayhour);
}

var getDay = function() {
  
  displaySelectionValue();

  var getx = function() {
    var x = document.getElementById("daysofweek").value;
		return x;
	}
	switch (getx()) {
		case "monday":
			daygradient = ".1";
			break;
		case "tuesday":
			daygradient = ".15";
			break;
		case "wednesday":
			daygradient = ".2";
			break;
		case "thursday":
			daygradient = ".25";
			break;
		case "friday":
			daygradient = ".3";
			break;
		case "saturday":
			daygradient = ".35";
			break;
		case "sunday":
			daygradient = ".375";
	}	
	return daygradient
}

var getHour = function() {
	var gety = function() {
		var y = document.getElementById("hourofday").value;
		return y;
	}
	switch (gety()) {
		case "8am-12pm":
			hourgradient = ".1";
			break;
		case "12pm-4pm":
			hourgradient = ".15";
			break;
		case "4pm-8pm":
			hourgradient = ".2";
			break;
		case "8pm-12am":
			hourgradient = ".25";
			break;
		case "12am-4am":
			hourgradient = ".3";
			break;
		case "4am-8am":
			hourgradient = ".35";
	}
	return hourgradient
}


var getName = function() {

	var reDrawHeat = function(array) {
		daygrade = array[0];
		hourgrade = array[1]
		daygrade1 = daygrade / 2;
		hourgrade1 = hourgrade / 2;

		var c = document.getElementById("canvas");
		var ctx = c.getContext("2d");

		var gradient =  ctx.createLinearGradient(0,0,0,300);
			gradient.addColorStop(daygrade,"blue");
			gradient.addColorStop(hourgrade,"yellow");
			gradient.addColorStop(daygrade1,"red");
			gradient.addColorStop(hourgrade1,"blue");

		ctx.fillStyle = gradient;
		ctx.fillRect(0,0,600,200);
	};

	setTimeout(function(){ 
		g = getHour(); 
	}, 300);
	setTimeout(function(){ 
		d = getDay(); 
	}, 800);
	setTimeout(function(){ 
		// console.log([g,d])
		// return [g,d];
		reDrawHeat([g,d]);
	}, 1300);
}

document.getElementById("submit").addEventListener("click", getName);
