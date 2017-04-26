// variable with an array of objects that contain all questions, answers, and images blur and show
var allQuestions = [
	{
		question: "Who are they?", // question will show at h2 on top of image
		imageBlur: "images/heat-blur.jpeg", // image will be blur at the beginning
		imageShow: "images/heat.gif", // image will show if answer is correct
		hint: "Hint: Tim Hardway and Alonzo Mourning used to play here",
		answer: "heat" // answer should match response to trigger action
	},
	{
		question: "Who are they?",
		imageBlur: "images/warriors-blur.jpeg",
		imageShow: "images/warriors.png",
		hint: "Hint: This team has the best winning season of all NBA times",
		answer: "warriors"
	},
	{
		question: "Who are they?",
		imageBlur: "images/thunder-blur.jpeg",
		imageShow: "images/thunder.png",
		hint: "Hint: Formerly known as Seattle Supersonics",
		answer: "thunder"
	},
	{
		question: "Who are they?",
		imageBlur: "images/mavericks-blur.jpeg",
		imageShow: "images/mavericks.png",
		hint: "Hint: Its owner is member of TV Show Shark Tank's cast",
		answer: "mavericks"
	},
	{
		question: "Who are they?",
		imageBlur: "images/knicks-blur.jpeg",
		imageShow: "images/knicks.gif",
		hint: "Hint: It's one of only two teams of the original NBA still located in its original city",
		answer: "knicks"
	},
	{
		question: "Who are they?",
		imageBlur: "images/celtics-blur.jpeg",
		imageShow: "images/celtics.png",
		hint: "Hint: One of its most famous players' surname is Bird",
		answer: "celtics"
	}
]

// create top div element that will encasule h1 and h3 text
var div = document.createElement("div");
var title = document.createElement("h1");
var subtitle = document.createElement("h3");
var subtitleText = document.createTextNode("Basketball expert? Test your knowledge now!");
var titleText = document.createTextNode("QUIZ APPLICATION");

subtitle.appendChild(subtitleText);
title.appendChild(titleText);

div.appendChild(title);
div.appendChild(subtitle);

// creating variables in the global scope so for loop and function can call them
// and doesn't take up storage
var question,
	image,
	hint,
	input,
	imageTitle,
	littleDiv,
	body,
	answer,
	response;

// for loop will iterate through allQuestions variable and get questions, answers and images to show
for (i = 0; i < allQuestions.length; i++) {
	question = document.createElement("h2");
	image = document.createElement("img");
	hint = document.createElement("p");
	hintText = document.createTextNode(allQuestions[i].hint);
	input = document.createElement("input");
	imageTitle = document.createTextNode(allQuestions[i].question);
	littleDiv = document.createElement("div");
	body = document.getElementById("body");
	
	image.src = allQuestions[i].imageBlur;
	image.className = "img-responsive image";
	image.id = "image" + i;
	hintText.className = "hint-text";
	littleDiv.className = "col-md-4";
	question.className = "text-center";
	question.id = "question" + i;
	input.className = "form-control";
	input.id = "answer" + i;

	question.appendChild(imageTitle);
	littleDiv.appendChild(question);
	littleDiv.appendChild(image);
	littleDiv.appendChild(input);
	littleDiv.appendChild(hintText);
	div.appendChild(littleDiv);
	body.appendChild(div);
}

// function for when person clicks button
function quizNow() {

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
			changeTitle.className = "green-text";
			changeTitle.innerHTML = allQuestions[j].answer.toUpperCase();
			// adds 1 point to "correct" per each correct answer
		} else {
		// 	// title above image will 
			changeTitle.className = "red-text";
			changeTitle.innerHTML = "Try again";
			
		// 	// adds 1 point to "incorrect" per each incorrect answer
		}
	} 
};

















