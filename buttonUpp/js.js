$(document).ready(function(){ 
   console.log("jQuery loaded.");  
	$(window).scroll(function(){
		if($(this).scrollTop()>500){
			$("#rgArrow").attr("data-mode","ret");}
		else{
		   if($("#rgArrow").attr("data-mode")!="ret"){         		
			$("#rgArrow").attr("data-mode","start");}
			
		}
		});
	$("#rgArrow").click(function(){	
			$("#rgArrow").attr("data-mode","ret");
			$("body,html").animate({scrollTop:0},800);
			
			
			return false;
			
			
	});
 
 
}); 