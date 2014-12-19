//Show tutorial completion projects
function showTutorials()
{
	document.getElementById("projContent").innerHTML = 
	'\
	<div>\
		<br>\
		<a href="https://github.com/StevenPG/Widget-Tutorial" target="_blank"> - My First Widget (Clock)</a>\
		<hr>\
		<img src="Myfirstwidget.png" alt="screenshot of widget" style="width:38%;height:320px;">\
		<br><br><br>\
	</div>\
	\
	<div style="width:50%;float:left;">\
		<br>\
		<a href="https://github.com/StevenPG/My-First-App-Continued" target="_blank"> - Android Flashlight Application</a>\
		<hr>\
		<img src="flashlight.png" alt="Screenshot of application" style="width:76%;height:320px;">\
		<br><br><br>\
	</div>\
	\
	<div style="width:50%;float:right;">\
		<br>\
		<a href="https://github.com/StevenPG/My-First-App" target="_blank"> - My-First-App (via developer.android.com)</a>\
		<hr>\
		<img src="myfirstapp.png" alt="Screenshot of application" style="width:76%;height:320px;">\
		<br><br><br>\
	</div>\
	\
	<p>&nbsp;</p>\
	';
}

//Show independent projects
function showMainProjects()
{
	document.getElementById("projContent").innerHTML = 
	'\
	\
	<br>\
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
