console.log("hello world");

let cat = document.querySelector('#cat')

const catMessage = () => {
	alert('The cat is cute right')

}

cat.addEventListener('mouseover', catMessage)



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

