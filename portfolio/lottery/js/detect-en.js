var language = window.navigator.userLanguage || window.navigator.language;
console.log(language);
var blocks = ['title','subtitle','price','next_winner','th1','th2','th3','footer'];

function en_btns() {
	document.getElementById("btn1_en").style.display = "inline-block";
	document.getElementById("btn2_en").style.display = "inline-block";
	document.getElementById("btn1_ru").style.display = "none";
	document.getElementById("btn2_ru").style.display = "none";
}

if( /en/.test(language) ){
	for (var i in blocks) {
		document.getElementById(blocks[i]+"_ru").style.display = "none";
		document.getElementById(blocks[i]+"_en").style.display = "block";

		en_btns();
	}
}else if( /uk/.test(language) || /ua/.test(language) || /ru/.test(language) || /be/.test(language)){
	for (var i in blocks) {
		document.getElementById(blocks[i]+"_ru").style.display = "block";
		document.getElementById(blocks[i]+"_en").style.display = "none";

		document.getElementById("btn1_ru").style.display = "inline-block";
		document.getElementById("btn2_ru").style.display = "inline-block";
		document.getElementById("btn1_en").style.display = "none";
		document.getElementById("btn2_en").style.display = "none";
	}
}else{
	for (var i in blocks) {
		document.getElementById(blocks[i]+"_ru").style.display = "none";
		document.getElementById(blocks[i]+"_en").style.display = "block";

		en_btns();
	}
}