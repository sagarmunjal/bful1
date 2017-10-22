var landscapeImg_arr = [

	"https://farm5.staticflickr.com/4511/37527765181_249a8b5458_h.jpg",
	"https://farm5.staticflickr.com/4510/36858385233_af35436524_k.jpg",
	"https://farm5.staticflickr.com/4470/23675625508_ce91340be0_k.jpg",
	"https://farm5.staticflickr.com/4452/37527741741_64b07be93e_k.jpg",
	"https://farm5.staticflickr.com/4444/37527753591_cc84ee0766_k.jpg",
	"https://farm5.staticflickr.com/4501/36817920804_08824155b4_k.jpg",
	"https://farm5.staticflickr.com/4503/37496714502_6bfe8e8333_k.jpg",
	"https://farm5.staticflickr.com/4482/36817914034_de8cb5ecad_k.jpg",
	"https://farm5.staticflickr.com/4488/37496709842_fe4e0cd42f_k.jpg",
	"https://farm5.staticflickr.com/4466/36858386013_fc15550d86_k.jpg",
	"https://farm5.staticflickr.com/4468/37527744951_3094c0a87a_k.jpg",
	"https://farm5.staticflickr.com/4513/37479920156_c50e072239_k.jpg"
]

//set random background image

function setRnBg(){
	var rndNum = Math.floor(Math.random()*landscapeImg_arr.length);
	document.getElementById('bg').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url( " + landscapeImg_arr[rndNum] + ")"
}

window.onload = function(){
    setRnBg();
};



// array of landscape images

/* var landscapeImg_arr = [

	"https://farm5.staticflickr.com/4511/37527765181_249a8b5458_h.jpg",
	"https://farm5.staticflickr.com/4510/36858385233_af35436524_k.jpg",
	"https://farm5.staticflickr.com/4470/23675625508_ce91340be0_k.jpg",
	"https://farm5.staticflickr.com/4452/37527741741_64b07be93e_k.jpg",
	"https://farm5.staticflickr.com/4444/37527753591_cc84ee0766_k.jpg",
	"https://farm5.staticflickr.com/4501/36817920804_08824155b4_k.jpg",
	"https://farm5.staticflickr.com/4503/37496714502_6bfe8e8333_k.jpg",
	"https://farm5.staticflickr.com/4482/36817914034_de8cb5ecad_k.jpg",
	"https://farm5.staticflickr.com/4488/37496709842_fe4e0cd42f_k.jpg",
	"https://farm5.staticflickr.com/4466/36858386013_fc15550d86_k.jpg",
	"https://farm5.staticflickr.com/4468/37527744951_3094c0a87a_k.jpg",
	"https://farm5.staticflickr.com/4513/37479920156_c50e072239_k.jpg"
]
*/