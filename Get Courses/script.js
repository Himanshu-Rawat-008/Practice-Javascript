
function displayCourse(data){
	let jsonData = JSON.parse(JSON.stringify(data));
	// console.log(jsonData.data.courses);	
	let courses=jsonData.data.courses;
	let i;
	for(i=0;i<courses.length;i++){
		$("#row").append('<div class="course-'+i+' col-md-4	 style:"margin:20px;""></div>');
		let name= courses[i].name;
		let imgUrl= courses[i].preview_image_url;
		let level = courses[i].level;
		// console.log(name);
		// console.log(imgUrl);
		// console.log(level);
		$('.course-'+i).append('<img src="'+imgUrl+'">');
		$('.course-'+i).append('<p>'+name+'</p>');
		$('.course-'+i).append('<p>'+level+'</p>');	
	}
}
$(".course").click(function(){
	$(".course").remove();
	let url= "https://codingninjas.in/api/v3/courses";
	$.get(url, function(data, status)
	{
		displayCourse(data);
	});
});