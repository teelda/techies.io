alert('hello world');
document.write ('hello world');


var jx = document.createElement('div');
jx.className = 'xj';
jx.innerHTML = 'javascript is bea';
var cx = document.getElementById('jxb');
cx.appendChild(jx);

var a, b, c;
		var OutputText;
		// var prompt(Output_text)

		function validate(argument) {
			// get the input
			a = document.forms["input_form"] ["aterm"] .value;
			b = document.forms["input_form"] ["bterm"] .value;
			c = document.forms["input_form"] ["cterm"] .value;
			// validate a, b, and c
			if(a == 0) {
				OutputText = "<em>a</em> cannot equal zero!";
			} else if (isNaN(a)) {
				OutputText = "<em>a</em> must be a number!";
			} else if (isNaN(b)) {
				OutputText = "<em>b</em> must be a number!";
			} else if (isNaN(c)) {
				OutputText = "<em>c</em> must be a number!";
			} else {

			// calculate the result using x = (-b +- sqrt(b^2 - 4ac)) / 2a
			var x1 = (-b - Math.sqrt (Math.pow(b, 2) - 4 * a * c)) / (2 * a);
			var x2 = (-b + Math.sqrt (Math.pow(b, 2) - 4 * a * c)) / (2 * a);
			OutputText=  'x equal'+" " + x1 +" "+ "or"+" " + x2 ;
			}


			// output the results or errors
			//document.getElementById('Output_text').innerHTML = OutputText;

			// alert("prompt:" )
			alert(Output_Text);

		}


var images = [
"assets/images/Welcome Scan.jpg",
"assets/images/theme6ed.png",
"assets/images/theme11ed.jpg"
];
	var num = 0;
function next() {
	var slider =
	document.getElementById("slider");
	num++;
	if(num >= images.length){
		num=0;
	}
	slider.src = images[num];
}
function prev() {
	var slider = 
	document.getElementById("slider");
	num--;
	if(num > 0){
		num = images.length-1;
	}
	slider.src = images[num];
}







// $('#myCarousel').on('slide.bs.carousel', function () {
//   	$('.carousel').carousel({
//   		interval: 2000
// 	})
// })

// Jquery(document).ready(function(){
// 	"use strict";
// 	$('slider-carousel').carousel({
// 		responsive:true,
// 		width:100%,
// 		circular:true,
// 		scroll:{
// 			items:1,
// 			duration:500,
// 			pulseOnHover:true
// 		},
// 		auto:true,
// 		items:
// 		{
// 			visible:{
// 				min:1,
// 				max:1,
// 			},
// 			height:"variable"
// 		},
// 		pagination:{
// 			container:"sliderpager",
// 			pageAnchorBuider:false,
// 		}

// 	})
// });


// * html, body
// {
// 	margin:0;
// 	padding:0;
// }
// header{
// 		background-color: deepskyblue;
// 		height: 90px;
// 		line-height: 90px;
// }
// ul{
// 	list-style: none;
// }
// ul, li{
// 	display: inline-block;
// }
// header, li{
	
// }
// .logo, img{
// 	padding-left: 2em;
// 	margin-top: 13px;
// 	float:left;
// }
// header nav ul li a{
// 	padding-left: 5.5em;
// 	font-weight: bold;
// 	color:white;
// 	transition:all 0.5s ease-in;
// }
// header nav ul li a:hover{
// 	text-decoration: none;
// 	color: red;
// }

// .slider img{
// 	width: 100%;
// 	height: 30em;
// }