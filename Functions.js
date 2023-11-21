function moveJS(){
	let i = 0;
	if (i == 0){
		i = 1;
		let elem = document.getElementById("myJSBar");
		let width = 10;
		let id = setInterval(frame, 10)
		function frame(){
			if (width >= 70){
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
 
	}
	
}
 
function moveCSS(){
	let i = 0;
	if (i == 0){
		i = 1;
		let elem = document.getElementById("myCSSBar");
		let width = 10;
		let id = setInterval(frame, 10)
		function frame(){
			if (width >= 15){
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
 
	}
	
}
 
function moveHTML(){
	let i = 0;
	if (i == 0){
		i = 1;
		let elem = document.getElementById("myHTMLBar");
		let width = 10;
		let id = setInterval(frame, 10)
		function frame(){
			if (width >= 45){
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
 
	}
	
}
 
function moveAll(){
	moveJS()
	moveCSS()
	moveHTML()
}