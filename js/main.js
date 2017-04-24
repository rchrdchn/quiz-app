var allQuestions = [
	{
		question: "Who are they?",
		imageQuestion: "images/golden-state-question.png",
		imageAnswer: "images/barcelona.jpg",
		answer: ["Golden State Warriors", "Golden State", "Warriors"]
	},
	{
		question: "Who are they? 2",
		imageQuestion: "images/golden-state-question.png",
		imageAnswer: "images/barcelona.jpg",
		answer: ["Golden State Warriors", "Golden State", "Warriors"]
	},
	{
		question: "Who are they? 3",
		imageQuestion: "images/golden-state-question.png",
		imageAnswer: "images/barcelona.jpg",
		answer: ["Golden State Warriors", "Golden State", "Warriors"]
	},
	{
		question: "Who are they? 4",
		imageQuestion: "images/golden-state-question.png",
		imageAnswer: "images/barcelona.jpg",
		answer: ["Golden State Warriors", "Golden State", "Warriors"]
	},
	{
		question: "Who are they? 5",
		imageQuestion: "images/barcelona.jpg",
		imageAnswer: "images/barcelona.jpg",
		answer: ["Golden State Warriors", "Golden State", "Warriors"]
	},
	{
		question: "Who are they? 6",
		imageQuestion: "images/golden-state-question.png",
		imageAnswer: "images/barcelona.jpg",
		answer: ["Golden State Warriors", "Golden State", "Warriors"]
	}
]

var div = document.createElement("div");
var title = document.createElement("h1");
var titleText = document.createTextNode("Quiz App");
div.appendChild(title);

var question,
	image,
	input,
	questionText,
	littleDiv,
	body;

for (i = 0; i < allQuestions.length; i++) {
	question = document.createElement("h2");
	image = document.createElement("img");
	input = document.createElement("input");
	questionText = document.createTextNode("Who are they?");
	littleDiv = document.createElement("div");
	body = document.getElementById("body");
	
	image.src = allQuestions[i].imageQuestion;
	image.className = "img-responsive";
	image.className = "image";
	littleDiv.className = "col-md-4";
	question.className = "text-center";
	question.id = "question" + i;
	input.className = "form-control";
	input.id = "answer" + i;

	question.appendChild(questionText);
	littleDiv.appendChild(question);
	littleDiv.appendChild(image);
	littleDiv.appendChild(input);
	div.appendChild(littleDiv);
	body.appendChild(div);
}

function quizNow() {
	for (j = 0; j < allQuestions.length; j++) {
		console.log(allQuestions.imageAnswer)
		
			
		// if (allQuestions.question[j] == allQuestions.question[j] &&
		// 	allQuestions.answer[j] == allQuestions.answer[j]) {
		// 	console.log("right!");
		// } else {

		// }
	} 

}

















