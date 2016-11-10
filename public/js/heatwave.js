
var getDay = function() {
	var getx = function() {
		var x = document.getElementById("daysofweek").value;
		return x;
	}
	switch ("monday") {
		case "monday":
			daygradient = "5";
			break;
		case "tuesday":
			daygradient = "10";
			break;
		case "wednesday":
			daygradient = "15";
			break;
		case "thursday":
			daygradient = "20";
			break;
		case "friday":
			daygradient = "25";
			break;
		case "saturday":
			daygradient = "30";
			break;
		case "sunday":
			daygradient = "35";
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
		hourgradient = "5";
		break;
		case "12pm-4pm":
		hourgradient = "10";
		break;
		case "4pm-8pm":
		hourgradient = "15";
		break;
		case "8pm-12am":
		hourgradient = "20";
		break;
		case "12am-4am":
		hourgradient = "25";
		break;
		case "4am-8am":
		hourgradient = "30";
	}
	return hourgradient
}


var getName = function() {
	g = getHour();
	d = getDay();
	console.log([g,d])
	return [g,d];
}

document.getElementById("submit").addEventListener("click", getName());

var drawHeat = function() {
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");

	var gradient =  ctx.createLinearGradient(0,0,200,0);
	gradient.addColorStop(0,"blue");
	gradient.addColorStop(.5,"red");
	gradient.addColorStop(1,"yellow");

	ctx.fillStyle = gradient;
	ctx.fillRect(0,0,600,200);
}();



////////
function loadJSON(callback) {   

	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
    	if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);  
}

function init() {
	loadJSON(function(response) {
  // Parse JSON string into object
  var actual_JSON = JSON.parse(response);
  console.log(actual_JSON);
});
}
