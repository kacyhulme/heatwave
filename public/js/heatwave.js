var getName = function() {
	var x = document.getElementById("daysofweek").value;
	if (x == "monday") {
		console.log("yo sup");
	}
	else {
		console.log("yo nooo");
	}

	var y = document.getElementById("hourofday").value;
	console.log(y);	
}

document.getElementById("submit").addEventListener("click", getName);

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
 