var submit = document.getElementById("submit");	
var link = document.getElementById("link");

submit.addEventListener("click",function() {

	var url=link.value;
	console.log(url);
	var urls=url.split(",");
	
	for (var i in urls) {  
   
	 	if(urls[i].includes("https://")||urls[i].includes("http://"))
	 	{
	 		window.open(urls[i],'_blank');  
	    }  
	   else
	 	{
	 		window.open("http://"+urls[i],'_blank');  
	    }  
	}



});



