console.log("hello world");

function handleCat (event) {
	event.addEventListener();
	alert("You have a great brain");
}


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("the form has been submitted successfully");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

