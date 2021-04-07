
var pageno;
function displayImage(data){
	let jsonData= JSON.parse(JSON.stringify(data));
	let i;
	for(i=0;i<jsonData.photos.length;i++)
	{
		console.log(jsonData.photos[i].img_src);
		$('<img>',{
			src: jsonData.photos[i].img_src,
			width:'100%',
			height:'100%',
		}).appendTo("#row");		
	}
}
$("#next-page").click(function(e)
{
	$('img').remove();
	e.preventDefault();
	pageno++;
	$.ajax({
	url:"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
	method: 'GET',
	success: displayImage,
	data:{
		sol: $("#sol").val(),
		page: pageno,
		api_key:"OkA1OkUUzl7XluQPbq23DD3aleTX0D3mzAJjlAFt",
		}
	});
})
$("#prev-page").click(function(e){
	$('img').remove();
	e.preventDefault();
	pageno--;
	$.ajax({
	url:"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
	method: 'GET',
	success: displayImage,
	data:{
		sol: $("#sol").val(),
		page: pageno,
		api_key:"OkA1OkUUzl7XluQPbq23DD3aleTX0D3mzAJjlAFt",
		}
	});
})
$('#submit').click(function(e){
	$('img').remove();
	pageno=1;
	console.log($("#sol").val());
	e.preventDefault();
	$.ajax({
	url:"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
	method: 'GET',
	success: displayImage,
	data:{
		sol: $("#sol").val(),
		page: pageno,
		api_key:"OkA1OkUUzl7XluQPbq23DD3aleTX0D3mzAJjlAFt",
		}
	});
})

