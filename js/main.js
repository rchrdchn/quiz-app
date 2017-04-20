var allQuestions = [
	{
		question: "",
		imageQuestion: "images/golden-state-question.png",
		imageAnswer: "images/golden-state-answer.png",
		answer: ["Golden State Warriors", "Golden State", "Warriors"]
	},
	{
		question: "",
		imageQuestion: "images/golden-state-question.png",
		imageAnswer: "images/golden-state-answer.png",
		answer: ["Golden State Warriors", "Golden State", "Warriors"]
	},
	{
		question: "",
		imageQuestion: "images/golden-state-question.png",
		imageAnswer: "images/golden-state-answer.png",
		answer: ["Golden State Warriors", "Golden State", "Warriors"]
	},
	{
		question: "",
		imageQuestion: "images/golden-state-question.png",
		imageAnswer: "images/golden-state-answer.png",
		answer: ["Golden State Warriors", "Golden State", "Warriors"]
	},
	{
		question: "",
		imageQuestion: "images/golden-state-question.png",
		imageAnswer: "images/golden-state-answer.png",
		answer: ["Golden State Warriors", "Golden State", "Warriors"]
	},
	{
		question: "",
		imageQuestion: "images/golden-state-question.png",
		imageAnswer: "images/golden-state-answer.png",
		answer: ["Golden State Warriors", "Golden State", "Warriors"]
	}
]

var div = document.createElement("div");

for (i = 0; i < allQuestions.length; i++) {
	var question = document.createElement("h2");
	var image = document.createElement("img");
	var input = document.createElement("input");
	var questionText = document.createTextNode("_____");
	image.src = allQuestions[i].imageQuestion;
	var littleDiv = document.createElement("div");
	var body = document.getElementById("body");

	image.className = "img-responsive";
	image.className = "image";
	littleDiv.className = "col-md-4";
	question.className = "text-center";
	input.className = "form-control";

	question.appendChild(questionText);

	littleDiv.appendChild(question);
	littleDiv.appendChild(image);
	littleDiv.appendChild(input);

	div.appendChild(littleDiv);

	body.appendChild(div);
}






















