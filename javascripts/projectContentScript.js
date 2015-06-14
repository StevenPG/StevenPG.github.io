// <a href="#" onclick="showMainProjects();"> Independent Projects</a>

// Show books
function showBooks(){
	document.getElementById("books").innerHTML = '\
	<a href="#" onclick="hideBooks();"> Owned Books</a>\
	<table style="width:95%">\
		<tr>\
			<th>Title (Edition & year)</td>\
			<th>Author(s)</td>\
		</tr>\
		<tr>\
			<td>Java After Hours: 10 Projects You Wont Do at Work (2005)</td>\
			<td>Steven Holzner<td>\
			</tr>\
		<tr>\
			<td>Android Programming: The Big Nerd Ranch Guide (2013 PDF)</td>\
			<td>Bill Phillips & Brian Hardy</td>\
		</tr>\
		<tr>\
			<td>Introduction to Java programming Comprehensive (9th edition 2013 PDF)</td>\
			<td>Y. Daniel Yang</td>\
		</tr>\
		<tr>\
			<td>The Elements of Java Style (2007)</td>\
			<td>Al Vermuelen, Scott W. Ambler & Others</td>\
		</tr>\
		<tr>\
			<td>Data Abstraction & Problem Solving with C++ (6th edition 2013)</td>\
			<td>Frank M. Carrano & Timonthy Henry</td>\
		</tr>\
		<tr>\
			<td>C++ Primer (3rd edition 1998)</td>\
			<td>Stanley B. Lippman & Josee Lajoie</td>\
		</tr>\
		<tr>\
			<td>Data Structures and Problem Solving Using C++ (2000)</td>\
			<td>Mark Allen Weiss</td>\
		</tr>\
		<tr>\
			<td>UNIX for Programmers and Users (2003)</td>\
			<td>Graham Glass & King Ables</td>\
		</tr>\
		<tr>\
			<td>Python Essential Reference (2009 PDF)</td>\
			<td>D. Beazley</td>\
		</tr>\
		<tr>\
			<td>An Introduction to Programming Using Visual Basic (2010)</td>\
			<td>David I. Schneider</td>\
		</tr>\
		<tr>\
			<td>PHP for the Web (4th edition 2011)</td>\
			<td>Larry Ullman</td>\
		</tr>\
		<tr>\
			<td>Operating System Concepts Essentials (2014)</td>\
			<td>Wiley Custom Learning Solutions</td>\
		</tr>\
		<tr>\
			<td>Programming Language Pragmatics (3rd edition 2009)</td>\
			<td>Micheal L. Scott</td>\
		</tr>\
		<tr>\
			<th>Outdated/Legacy Texts</th>\
			<th></th>\
		</tr>\
		<tr>\
			<td>DOS FOR DUMMIES (1st and 2nd Edition 1991)</td>\
			<td>Dan Gookin </td>\
		</tr>\
		<tr>\
			<td>Guide to Popular Operating Systems (1986)</td>\
			<td>Gerry Kane</td>\
		</tr>\
		<tr>\
			<td>The handbook of computers and computing (1985)</td>\
			<td>Arthur H. Seidman & Ivan Flores</td>\
		</tr>\
		<tr>\
			<td>Elements of Computer Mathematics (1985)</td>\
			<td>Sanda Talbot, Harold Baker, and Lawrence Gilligan</td>\
		</tr>\
		<tr>\
			<td>The Complete MICROCOMPUTER HANDBOOK With Tested Basic Programs (1984)</td>\
			<td>Robert C. Genn, Jr. & E.L. Genn </td>\
		</tr>\
		<tr>\
			<td>DATA FILE PROGRAMMING IN BASIC (A SELF TEACHING GUIDE, 1981)</td>\
			<td>LeROY FINKEL & JERALD R. BROWN</td>\
		</tr>\
		<tr>\
			<td>Intel Memory Handbook (1978)</td>\
			<td>Radio Shack</td>\
		</tr>\
		<tr>\
			<td>Microcomputer Primer (1976)</td>\
			<td>Radio Shack</td>\
		</tr>\
		<tr>\
			<td>Intel 8080 Users Manual (1975)</td>\
			<td>Intel Systems</td>\
		</tr>\
		<tr>\
			<td>Computer Dictionary and Handbook (1972)</td>\
			<td>Charles J. Sippl & Charles P. Sippl</td>\
		</tr>\
		<tr>\
			<td>digital logic handbook (1972)</td>\
			<td>Digital Equiptment Corp</td>\
		</tr>\
		<tr>\
			<td>basic basic (1970)</td>\
			<td>James S. Coan</td>\
		</tr>\
	</table>\
	';
}

// Hide books
function hideBooks(){
	document.getElementById("books").innerHTML = '\
	<a href="#" onclick="showBooks();"> Owned Books</a>\
	';
}