CFG_CPPV={};
CFG_CPPV.bUpp={};
CFG_CPPV.bUpp.uppDM="start";
$(document).ready(function(){ 
   console.log("jQuery loaded.");  
	$(window).scroll(function(){
		if($(this).scrollTop()>500){
      	$("#rgArrow").attr("data-mode","bottom");
   	}
      else{
      	$("#rgArrow").attr("data-mode",CFG_CPPV.bUpp.uppDM);
      }		
		
	});

	$("#rgArrow").click(function(){	
         if($("#rgArrow").attr("data-mode")!="bottom"){
         	 $("body,html").animate({scrollTop:CFG_CPPV.bUpp.scrollTop},800);
         	 return false;
         }	
	
			$("body,html").animate({scrollTop:0},800);		
			CFG_CPPV.bUpp.uppDM="ret";
			
			CFG_CPPV.bUpp.scrollTop=$("html").scrollTop(); 
			return false;
	});
 
 
}); 