//Show tutorial completion projects
function showTutorials()
{
	document.getElementById("projContent").innerHTML = 
	'\
	\
	<hr>\
	<a href="https://github.com/StevenPG/Android-Flashlight-Application" target="_blank"> - Android Flashlight Application</a>\
	<hr>\
	<p> Image placeholder text</p>\
	<br><br><br>\
	\
	';
}

//Show independent projects
function showMainProjects()
{
	document.getElementById("projContent").innerHTML = 
	'\
	\
	<hr>\
	<a href="https://github.com/StevenPG/ProjectEuler" target="_blank"> - Project Euler Problem listing on GitHub</a><br>\
	<hr>\
	<img src="ProjectEulerGithubScreenShot.png" alt="Screenshot from GitHub" style="width:99%;height:130px;">\
	<br><br><br>\
	\
	<a href="https://github.com/StevenPG/SimpleCalculator" target="_blank"> - First Github Project "Simple Calculator"</a><br>\
	<hr>\
	<img src="SimpleCalculatorScreenshot.png" alt="Image of Calculator" style="width:65%;height:200px;">\
	<br><br><br>\
	\
	';
}
