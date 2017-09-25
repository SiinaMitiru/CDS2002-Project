function mOverG() {
	document.getElementById("opacityG").style.opacity=0.7;
};
function mOutG() {
	document.getElementById("opacityG").style.opacity=1;
};
function mOverA() {
	document.getElementById("opacityA").style.opacity=0.7;
};
function mOutA() {
	document.getElementById("opacityA").style.opacity=1;
};
function mOverR() {
	document.getElementById("opacityR").style.opacity=0.7;
};
function mOutR() {
	document.getElementById("opacityR").style.opacity=1;
};
function mOverN() {
	document.getElementById("opacityN").style.opacity=0.7;
};
function mOutN() {
	document.getElementById("opacityN").style.opacity=1;
};
function mOverD() {
	document.getElementById("opacityD").style.opacity=0.7;
};
function mOutD() {
	document.getElementById("opacityD").style.opacity=1;
};
function mOverP() {
	document.getElementById("opacityP").style.opacity=0.7;
};
function mOutP() {
	document.getElementById("opacityP").style.opacity=1;
};
function mOverE() {
	document.getElementById("opacityE").style.opacity=0.7;
};
function mOutE() {
	document.getElementById("opacityE").style.opacity=1;
};
function mOverT() {
	document.getElementById("opacityT").style.opacity=0.7;
};
function mOutT() {
	document.getElementById("opacityT").style.opacity=1;
};
function mOverS() {
	document.getElementById("opacityS").style.opacity=0.7;
};
function mOutS() {
	document.getElementById("opacityS").style.opacity=1;
};
function mOverCall(ele) {
	ele.style.opacity=0.7;
}
function mOutCall(ele) {
	ele.style.opacity=1;
}
function mClick(text){
	var origin=document.getElementById("outPut").innerHTML;
	var value=origin+text.innerHTML;
	document.getElementById("outPut").innerHTML=value;
}
function cancel() {
	document.getElementById("outPut").innerHTML=null;
	document.getElementById("time").innerHTML=null;
}
function call(){
	var value=document.getElementById("outPut").innerHTML
	if (value=="GRANDPARENTS") {
		document.getElementById("outPut").innerHTML="CONNECTED";
		document.getElementById("time").innerHTML=Date()
	} 
	else {
		alert("Wrong Number!");
		document.getElementById("outPut").innerHTML=null;
		document.getElementById("time").innerHTML=null;
	}
}





