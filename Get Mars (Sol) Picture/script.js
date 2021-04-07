
// var solno = $("#sol").val();
// var pageno=$("#pageno").val();

function displayImage(data){
	let jsonData= JSON.parse(JSON.stringify(data));
	// console.log(photos);
	// console.log(jsonData.photos);
	let i;
	for(i=0;i<jsonData.photos.length;i++)
	{
		console.log(jsonData.photos[i].img_src);
		// let imageUrl = jsonData.photos[i].img_src;
		$("#row").append('<div class="course-'+i+' col-md-4	 style:"margin:20%;""></div>');
		// $('.course-'+i).append('<img src="'+imgUrl+'">');
		$('<img>',{
			src: jsonData.photos[i].img_src,
			width:'100%',
			height:'100%',
			// max-width:'200px',
			// max-height:'200px',
		}).appendTo(".course-"+i);		
	}

	 // $(document.createElement('img')).attr('src', data.url).appendTo('#image-container');

	 // Alternative
	 // $('#image-container').append();

}

$('#submit').click(function(){
	console.log($("#sol").val());
	console.log($("#pageno").val());
	$.ajax({
	url:"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
	method: 'GET',
	success: displayImage,
	data:{
		sol:$("#sol").val(),
		page: $("#pageno").val(),
		api_key:"OkA1OkUUzl7XluQPbq23DD3aleTX0D3mzAJjlAFt",
	}
});
})

