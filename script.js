var options = ["ENEMY SPAM", 
              "SOUND EFFECTS EVERYWHERE", 
              "BRING YOSHI TO GOAL", 
              "TECH LEVEL", 
              "PICK A DOOR / PIPE", 
              "1-1 REMAKE", 
              "COLLECT ALL COINS", 
              "MUSIC LEVEL", 
              "SOFTLOCK WITH NO WAY OF DYING", 
              "INFINITE FIRE FLOWER BOSS FIGHT", 
              "NO CHECKPOINTS (WITHOUT CLEAR CONDITION)", 
              "ENEMY SPAM (WITH A STAR)", 
              "GOOD LEVEL", 
              "BUILDER / SUPERBALL LEVEL", 
              "THEMED AFTER ANOTHER GAME", 
              "KAIZO BLOCKS", 
              "LEVEL CAN BE CHEESED", 
              "AUTO MARIO LEVEL", 
              "'FIRST LEVEL' IN TITLE", 
              "MEOWSER OR BOOM-BOOM", 
              "TITLE LEVEL", 
              "TERRIBLY NAMED LEVEL", 
              "KILLS MARIO AT THE START", 
			  "ON / OFF BLOCKS",
			  "#DGR LEVEL"];
var usedOptions = new Array(options.length);
			  
function newCard() {
	for(var i=0; i < 24; i++) {
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	var currSquare = "square"+thisSquare;
	var newOption;

	do {
		newOption = getNewOption();
	}
	while (usedOptions[newOption]);
	
    usedOptions[newOption] = true;
    document.getElementById(currSquare).style.backgroundColor = 'rgb(254, 222, 93)';
	document.getElementById(currSquare).innerHTML = newOption;
}

function getNewOption() {
	return options[Math.floor(Math.random() * options.length)];
}

function anotherCard() {
	usedOptions = new Array(options.length);
	newCard();
}