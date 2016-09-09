function cc(n,v,d) {
    if (d) {
        var date = new Date();
        date.setTime(date.getTime()+(d*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = n+"="+v+expires+"; path=/";
}


$('document').ready(function(){
	$.get( "request.txt", function( data ) {
	});

	cc("supersecret", "test", undefined);
});