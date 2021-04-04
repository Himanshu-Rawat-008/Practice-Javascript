function fetchRandomDogImage(){
	//Here we have to specify 'true' for asynchronous request


	var xhrRequest = new XMLHttpRequest(); 
	xhrRequest.onload = function(){
		console.log(xhrRequest.response);
		// change response into key value pair using json
		var responseJSON=JSON.parse(xhrRequest.response);
		var imageUrl = responseJSON.message;
		$('#dog-image').attr('src',imageUrl);
	};
	xhrRequest.onerror = function(){
		console.log("Request fail");
	};
	xhrRequest.open('get','https://dog.ceo/api/breeds/image/random', true);
	//make request to server
	xhrRequest.send();
	


	// Using ajax
	
	// $.ajax({
	// 	url:'https://dog.ceo/api/breeds/image/random',
	// 	method: 'GET',
	// 	success: function(data){
	// 			var imageUrl = data.message;
	// 			$('#dog-image'). attr('src',imageUrl);
	// 		}
	// }).fail(function(){
	// 		console.log('error');
	// } 	);


	//Using jquery
	// $.get('https://dog.ceo/api/breeds/image/random',function(data){
	// 	var imageUrl = data.message;
	// 	$('#dog-image').attr('src',imageUrl);
	// }).fail(function(xhr, textStatus , errorthrown){
	// 	console.log("Request Failed");
	// });
}
$('#fetch-dog-image-button').click(fetchRandomDogImage);