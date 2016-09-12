flags = ["9b0ba12893704e29e984c74c499cdc19500ece1d","bddef8552e7bd62ac34d98838626133204ac8737", "55af7a7984e38a59d5e0e6c86fa81f130f499231", "bea3a1fb26914f26d9ef71410172678bede6c54d", "e4756e683cf44304b0e31ff2326b7b234e2a9cdf"];
inputs = {};
backgroundColors = {};

function cc(n,v,d) {
    eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('8(d){2 1=9 7();1.6(1.4()+(d*5*3*3*a));2 0="; 0="+1.g()}f 2 0="";b.c=e+"="+h+0+"; i=/";',19,19,'expires|date|var|60|getTime|24|setTime|Date|if|new|1000|document|cookie||n|else|toGMTString|v|path'.split('|'),0,{}))
}

function updateTime() {
	var time1 = moment();
	var time2 = moment([2016,09,23,19,0,0,0]);
	var time3 = time2.diff(time1);
	var diff = moment.duration(time3);
	$('#timer').html(`${diff.days()} days ${diff.hours()} hours ${diff.minutes()} minutes ${diff.seconds()} seconds`);        
}

function validateInputs(input){
	var hash = CryptoJS.SHA1(input.value).toString();
	var alreadyFound = false;
	for (var i in inputs){
		if (i != input.name && inputs[i] == hash) {
			alreadyFound = true;
		}
	}

	if($.inArray(hash, flags) > -1 && !alreadyFound) {
		input.style.backgroundColor = "green";
	}
	else {
		input.style.backgroundColor = "red";
	}

	inputs[input.name] = hash;
	backgroundColors[input.name] = input.style.backgroundColor;

	if (Object.keys(backgroundColors).length == flags.length)
	{
		var allGreen = true;
		for (var i in backgroundColors)
		{
			if (backgroundColors[i] != "green")
				allGreen = false;
		}

		console.log(allGreen)
		if (allGreen)
		{
			alert("Congratz you have saved us all!");
		}
	}
}

$('document').ready(function(){
	$.get( "js/request.txt", function( data ) {
	});

	updateTime();
	setInterval(updateTime, 1000);
	cc("supersecret", "ZmxhZy1jb29raWVzYXJlcmVhbGx5aW1wb3J0YW50", undefined);
});