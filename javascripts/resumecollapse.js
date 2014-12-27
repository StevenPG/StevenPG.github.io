function collapseById(myid)
{
	myobject = document.getElementById(myid);
	if(myobject.style.display === "block"){
		myobject.style.display = "none";
		return;
	}
	if(myobject.style.display === "none"){
		myobject.style.display = "block";
		return;
	}
}