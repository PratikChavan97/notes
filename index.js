'use strict';
 let textarea = document.querySelector("textarea").innerText;
 let p = document.querySelector(".count");
 
 if(textarea.length <= 240){
		p.innerText = "You have " + (240 - textarea.length) + " characters left.";
 } else {
	 p.innerText = "240 characters are entered.";
	 p.style.color = "red";
	 textarea.slice(0,240);
 }


