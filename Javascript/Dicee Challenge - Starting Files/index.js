function randomNumber1 (){

	return Math.floor(Math.random()*6)+1
}

document.querySelector("img").setAttributes("src", "dice"+randomNumber1()+".png");