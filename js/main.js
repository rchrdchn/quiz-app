var allQuestions = [
	{
		question: "Who are they?",
		imageBlur: "images/heat-blur.jpeg",
		imageShow: "images/heat.gif",
		answer: "heat"
	},
	{
		question: "Who are they?",
		imageBlur: "images/warriors-blur.jpeg",
		imageShow: "images/warriors.png",
		answer: "warriors"
	},
	{
		question: "Who are they?",
		imageBlur: "images/thunder-blur.jpeg",
		imageShow: "images/thunder.png",
		answer: "thunder"
	},
	{
		question: "Who are they?",
		imageBlur: "images/mavericks-blur.jpeg",
		imageShow: "images/mavericks.png",
		answer: "mavericks"
	},
	{
		question: "Who are they?",
		imageBlur: "images/knicks-blur.jpeg",
		imageShow: "images/knicks.gif",
		answer: "knicks"
	},
	{
		question: "Who are they?",
		imageBlur: "images/celtics-blur.jpeg",
		imageShow: "images/celtics.png",
		answer: "celtics"
	}
]

var div = document.createElement("div");
var title = document.createElement("h1");
var titleText = document.createTextNode("Quiz App");
title.appendChild(titleText);
div.appendChild(title);

var question,
	image,
	input,
	imageTitle,
	littleDiv,
	body,
	answer,
	response;

for (i = 0; i < allQuestions.length; i++) {
	question = document.createElement("h2");
	image = document.createElement("img");
	input = document.createElement("input");
	imageTitle = document.createTextNode(allQuestions[i].question);
	littleDiv = document.createElement("div");
	body = document.getElementById("body");
	
	image.src = allQuestions[i].imageBlur;
	image.className = "img-responsive image";
	image.id = "image" + i;
	littleDiv.className = "col-md-4";
	question.className = "text-center";
	question.id = "question" + i;
	input.className = "form-control";
	input.id = "answer" + i;

	question.appendChild(imageTitle);
	littleDiv.appendChild(question);
	littleDiv.appendChild(image);
	littleDiv.appendChild(input);
	div.appendChild(littleDiv);
	body.appendChild(div);
}

// function for when person clicks button
function quizNow() {
	// var correct = 0;
	// var incorrect = 0;
	// var correct = document.createElement("p");
	// var incorrect = document.createElement("p");
	// correct = document.createTextNode("Correct: ");
	// incorrect = document.createTextNode("incorrect: ");

	// for loop will iterate over variable allQuestions
	for (j = 0; j < allQuestions.length; j++) {
		// answer is set to be answer inside variable allQuestions
		answer = allQuestions[j].answer;
		// console.log(answer);
		//  response will get value person inputs in the input form
		response = document.getElementById("answer" + j).value;
		// console.log(response);
		changeImage = document.getElementById("image" + j);
		changeTitle = document.getElementById("question" + j);

		// if response matches answer
		if (response == answer) {
			// image will show correct team logo
			changeImage.src = allQuestions[j].imageShow;
			// title above image will change to correct answer
			changeTitle.innerHTML = allQuestions[j].answer.toUpperCase();
			// adds 1 point to "correct" per each correct answer
		} else {
		// 	// title above image will 
			changeTitle.innerHTML = "Try again";
		// 	// adds 1 point to "incorrect" per each incorrect answer
		}
	} 
};

















