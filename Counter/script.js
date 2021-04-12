var countInterval;


function startCounter() {

    var number = parseInt(document.getElementById("number").value);

    if (isNaN(number)) {
        alert("Please enter a number");
        clearInterval(countInterval);   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
        return;
    }
    if (number < 1 || number > 99999) {
        alert("Range out of bounds");
        clearInterval(countInterval);
        return;
    }

    var current = document.querySelectorAll(".counter .current");
    var next = document.querySelectorAll(".counter .next");
    var count = 0;

    // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
    resetNumbers(current, next,4);
    
    // Clears the previous interval that was running
    clearInterval(countInterval);

    countInterval = setInterval(function () {
        if (count === number) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        increaseCount(current, next,4);
        count++;
    }, 1000);

}



function resetNumbers(currentNo, nextNo, end) {
	for(var i=0;i<end;i++)
	{
		currentNo[i].innerText=0;
		nextNo[i].innerText=1;
	}
}



function increaseCount(currentNo, nextNo,index) {

    nextNo[index].classList.add("animate");
    if(currentNo[index].innerText==9)
    {
    	increaseCount(currentNo,nextNo,index-1);
    }
    setTimeout(function () {
        currentNo[index].innerText = nextNo[index].innerText;
        nextNo[index].classList.remove("animate");
        nextNo[index].innerText = parseInt(nextNo[index].innerText) + 1;
        if(nextNo[index].innerText > 9) {
            nextNo[index].innerText = 0;
        }
    }, 500);

}
