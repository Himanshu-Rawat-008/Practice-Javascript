
function displayImage(data){
	console.log(data);
	$('<img>',{
		src: data.url,
		width:'100%',
		height:'100%',
	}).appendTo('#image-container');
}
$.ajax({
	url:"https://api.nasa.gov/planetary/apod?api_key=vaEsaPmOKEQdwiVDjcCpZfJHdbZNqRZFVTV4JNQ2",
	method: 'GET',
	success: displayImage
})