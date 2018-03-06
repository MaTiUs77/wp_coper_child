jQuery(document).ready(function() 
{
	console.log('Night Mode Is: ' + scripts_var.nightmode)
	jQuery(".nightmode_btn").click(function() 
	{

		if (jQuery("body").hasClass("night"))
		{
			// Destroy Night Mode Cookie
			setCookie('nightmode', 'off', 7);
		} else {
			// Set Night Mode Cookie
			setCookie('nightmode', 'on', 7);
		}

		jQuery("body").toggleClass("night");
		console.log('Changing night mode to: ' + getCookie('nightmode'));
	});
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}