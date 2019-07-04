isPlaying = false;
function login()
{
	arrFields = document.getElementsByClassName("inputField");
	if(arrFields[0].value == "beeboobeeboo" && arrFields[1].value == "tastaslovesyou")
	{
		window.location.href = "webPages/letter.html";
	}
	else
	{
		alert("INCORRECT USERNAME AND/OR PASSWORD");
	}
}
function playAudio(filePath)
{
	if(isPlaying)
		return;
	var audio = new Audio(filePath + ".aac");
	audio.play();
	isPlaying = true;
	audio.onended = function() {isPlaying = false;}
}