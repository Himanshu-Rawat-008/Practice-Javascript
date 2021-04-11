var ball = document.getElementById('ball');
var coordinates;
var container = document.getElementById('container');
let width = document.body.clientWidth;
let height = document.body.clientHeight;
function moveLeft(){
		coordinates = ball.getBoundingClientRect();
		console.log(coordinates);
		let left=coordinates.left;
		left+=10;
		if(coordinates.left>width-210){
			return;
		}
		ball.style.left=left+'px';
}
function moveDown(){
		coordinates = ball.getBoundingClientRect();
		console.log(coordinates);
		let top=coordinates.top;
		top+=10;
		if(coordinates.top>height+302){
			return;
		}
		ball.style.top=top+'px';
}

function moveUp(){
		coordinates = ball.getBoundingClientRect();
		console.log(coordinates);
		let top=coordinates.top;
		top-=10;
		if(coordinates.top<9){
			return;
		}
		ball.style.top=top+'px';
}

function moveRight(){
		coordinates = ball.getBoundingClientRect();
		console.log(coordinates);
		let left=coordinates.left;
		left-=10;
		if(coordinates.left<9){
			return;
		}
		ball.style.left=left+'px';
}



window.addEventListener('keydown', function(e){
	console.log(e.key);
	let key  = e.key;
	if(key=="W"||key=="w")
		{moveUp();}
	if(key=="A"||key=="a")
		{moveRight();}
	if(key=="S"||key=="s")
		{moveDown();}
	if(key=="D"||key=="d")
		{moveLeft();}
})