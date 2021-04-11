var box = document.getElementById('box');
var Height= window.innerHeight-100;
var Width = window.innerWidth-200;
console.log(Height);
console.log(Width);

box.addEventListener("mouseover",function () {
	let randomX = Math.floor((Math.random() * Width) + 1);
	let randomY = Math.floor((Math.random() * Height) + 1);
	box.style.left=randomX+"px";
	box.style.top=randomY+"px";
})
function initialBox(){
	let randomX = Math.floor((Math.random() * Width) + 1);
	let randomY = Math.floor((Math.random() * Height) + 1);
	box.style.left=randomX+"px";
	box.style.top=randomY+"px";	
}
initialBox();