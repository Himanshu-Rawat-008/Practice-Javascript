
function displayImage(data){
	
	// This method take time 

	// console.log(data);
	// $('<img>',{
	// 	src: data.url,
	// 	width:'100%',
	// 	height:'100%',
	// }).appendTo('#image-container');

	 $(document.createElement('img')).attr('src', data.url).appendTo('#image-container');

	 // Alternative
	 // $('#image-container').append();

}
$.ajax({
	// url:"https://api.nasa.gov/planetary/apod?api_key=vaEsaPmOKEQdwiVDjcCpZfJHdbZNqRZFVTV4JNQ2&date=2020-07-25",
	url:"https://api.nasa.gov/planetary/apod",
	method: 'GET',
	success: displayImage,
	// we can pass key & date as attribute becoz get method
	// can automatically convert it into query parameter
	data:{
		api_key:"vaEsaPmOKEQdwiVDjcCpZfJHdbZNqRZFVTV4JNQ2",
		date:"2020-07-25",
	}
})