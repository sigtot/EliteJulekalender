var innerWrapper = document.getElementById("innerInnerWrapper");

var d = new Date();
var n = d.getDate();

window.onload = function(){
	// Kjører når dokumentet er lastet
	console.log("God jul, din pikk"); // Skriv til konsollen
	for(var i = 1; i <= 24; i++){
		var luke = document.createElement("div");
		luke.id = "luke" + i;
		var lukeText = document.createTextNode(i);
		luke.appendChild(lukeText);
		var cls = "luke";
		if (n >= i && n <= 27) cls += " openable";
		luke.className = cls;
		luke.setAttribute("onclick","openLuke(this)")
		innerWrapper.appendChild(luke);
	}
}

function openLuke(self){
	today = self.id.substr(4);
	console.log(n);
	console.log(today);
	if (today <= n && n <= 27){
		self.style.backgroundImage = "url(img/" + today + ".jpg)";
		self.setAttribute("onclick","expand(this)");
	}
}

function expand(self){
	today = self.id.substr(4);
	open(window.location.href + "img/" + today + ".jpg");
}