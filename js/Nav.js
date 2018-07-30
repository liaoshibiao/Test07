
 $("#nav li").bind("click",function() {
		data_id = $(this).attr("data-id");
				$("#nav li").removeClass('active');
				$("#nav li[data-id = '" + data_id + "']").addClass('active');
					let index = $(this).index() + 1;
					var m = "";
					
					if(index==1){
							firstList_jine()
							firstList_zhanbi()
							m = 1;
							
					}
					else if(index==2){ 
						firstList_jine()
						firstList_zhanbi()
						m = 2;
						
						
					}
					else if(index==3){ 
						firstList_jine()
						firstList_zhanbi()
						m = 3;
						
					}
					else if(index==4){ 
						firstList_jine()
						firstList_zhanbi()
						m = 4;
						
					}
					else if(index==5){ 
					firstList_jine()
					firstList_zhanbi()
						m = 5;
						
					}
					else if(index==6){ 
						firstList_jine()
						firstList_zhanbi()
						m = 6;
						console.log(x)
					}
					
					$("body").find("#L-wid li").remove()
					$("body").find("#M-wid li").remove()
					$("body").find("#R-wid li").remove()
					var par = {
						"areacode1":"",
						"local_send_flag":x,
						"org_brd_id":"",
						"org_level_id":"",
						"userId":"1234536",
						"va_months":m,		
				};
		         	 fengzhuang(par)
				})




kaiguan();
function kaiguan(){
document.getElementById("mySwitch").addEventListener("toggle",function(event){
if(event.detail.isActive){
	x = 0;
	console.log("关闭")
	firstList_jine()
	firstList_zhanbi()
}else{
   x = 1;
   console.log("打开")
}
	$("body").find("#L-wid li").remove()
	$("body").find("#M-wid li").remove()
	$("body").find("#R-wid li").remove()
	var par = {
			"areacode1":"",
			"local_send_flag":x,
			"org_brd_id":"",
			"org_level_id":"",
			"userId":"1234536",
			"va_months":m,		
};

   fengzhuang(par)
})
}