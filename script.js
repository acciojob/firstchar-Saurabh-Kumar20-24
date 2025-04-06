function firstChar(text) {
  // your code here
	text.trim();
	if(text.length) return 0;
	else return text[0];
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
