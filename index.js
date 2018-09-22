var dictionary = ['poop', 'diddy', 'scoop', 'whoop', 'di', 'whoopitty'];

function doTheKanyeThing(){
	var lyrics = '';
	for(var x = 0; x < 12; x++){
		var line = '';
		for(var z = 0; z < 4; z++){
			line = line + ' ' + dictionary[Math.floor(Math.random() * dictionary.length)];
		}
		lyrics = lyrics + line + '\r\n';
	}
	console.log(lyrics);
}

doTheKanyeThing();
