var breedImage = $("#breed-image");
var dropdown= $("#dog-breeds");
var allowSumbit = true;
var breed;

$.get("https://dog.ceo/api/breeds/list/all", function(data,status){
	let dogBreeds=data.message;
	for(let breed in dogBreeds){
		dropdown.append('<option value="' + breed + '">' + breed + '</option>');
	}
});

dropdown.change(function () {
    allowSubmit = true;
});


// When form button will be clicked 
$("form button").click(function(e){
	e.preventDefault();

	if(allowSumbit){
		// get the value of 
		breed = dropdown.val();
		displayDog(breed);
		allowSumbit = false;
	}

});	

// when next will be clicked
$("#next a").click(function(e){
	e.preventDefault();
	if(breed!==undefined){
		displayDog(breed);
	}
});
function displayDog(breed){
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

    $("#breed-image img").remove();//remove previous image

    $.get(url, function(data, status){
    	let imageUrl = data.message;
    	// add new image from url
        breedImage.append('<img src="' + imageUrl + '" alt="' + breed + '">');
    });
}