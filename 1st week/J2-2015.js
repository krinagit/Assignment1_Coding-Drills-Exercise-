
// 
// 	var stmt = document.getElementById('sentence').value;
// 	console.log(stmt);
     
//     var happy = ":-)" ;
//     var sad = ":-(" ;
// 	//alert ("hello");
// 	if(stmt == happy && stmt == (happy > sad)){
// 		document.getElementById("feeling").innerHTML="happy";
// 	}else if (stmt == sad && stmt == (sad > happy)){
// 		document.getElementById("feeling").innerHTML="sad";
// 	}else if ( stmt == (happy && sad)){
//         document.getElementById("feeling").innerHTML="unsure";
//     }else if( (stmt =! (happy && sad)) || (stmt == "" )){
//         document.getElementById("feeling").innerHTML="none";
//     }
// }

function processForm(){
const userInput = document.getElementById('userInput').value;
     
	const happy = ":-)" ;
	const sad = ":-(" ;
		
	// split
	const happyTimes = userInput.split(happy).length - 1;
	const sadTimes = userInput.split(sad).length - 1;

	if(happyTimes===0&&sadTimes===0){
		document.getElementById("feeling").innerHTML="none";
	}else if(happyTimes===sadTimes){
		document.getElementById("feeling").innerHTML="unsure";
	}else if(happyTimes>sadTimes){
		document.getElementById("feeling").innerHTML="happy";
	}else if(happyTimes<sadTimes){
		document.getElementById("feeling").innerHTML="sad";
	}
}
