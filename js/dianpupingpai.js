     var abc = "http://tel.runsa.cn:8177/bi_yhj/REALLY/bi/report/params/queryOrgBrd/query";
     	var params = {
		"userId": '15975531236',
		"va_months": 5,
		"local_send_flag":0,
		"areacode1": "",
		"org_level_id": "",
		"org_brd_id": "",
	};
    var cx_f=[];
    var cx_n=[];
	$.ajax({
		type: 'POST',
		url: abc,
		dataType: 'json',
		data: params,
		success: function(obj) {
			for(var i=0;i<obj.data.list.length;i++){
				cx_n[i]=obj.data.list[i].org_brd_id;
			}
			console.log(obj)
			var list = obj.data.list;
            
			for (var i = 0; i < list.length; i++) {
				cx_f = cx_f.concat(list[i].org_brd_nm)
				cx_n = cx_n.concat(list[i].org_level_id)
			}	
			unique_pp(cx_f)
		
			//店铺品牌
			var pingpai=cx_f.length;
			
             $("#brand div").bind("click",function(){
			let index = $(this).index();
            if(index!=0){
				if($("#brand .pinpai").eq(index).hasClass('mypinpai')){
				    $("#brand .pinpai").eq(index).removeClass('mypinpai');
			     }
				 else{
					 	$("#brand .pinpai").eq(index).addClass('mypinpai');
				 }
					
			}
			else{
				if($("#brand .pinpai").eq(0).hasClass('mypinpai')){
				    $("#brand .pinpai").removeClass('mypinpai');
			     }
				 else{
					$("#brand .pinpai").addClass('mypinpai');
				 }
				
			}
			    var istrue=false;
				var isfalse=false;
				var j=1;
				for(j=1;j<pingpai;j++){
					if(!($("#brand .pinpai").eq(j).hasClass('mypinpai'))){
						istrue=true;
					}
				
				}
				if(istrue==false&&j==pingpai){
					$("#brand .pinpai").eq(0).addClass('mypinpai');
					}
            
             if(index!=0){
             	if($("#brand .pinpai").eq(index).hasClass('mypinpai')&&$("#brand .pinpai").eq(0).hasClass('mypinpai')){
             		$("#brand .pinpai").eq(0).addClass('mypinpai')
             	}else{		
             		$("#brand .pinpai").eq(0).removeClass('mypinpai');
             	}
             }
             var sea=[];//将亮的值保存
			 var j=0;
			 



			 //获取名称对应名称

			 for(var i=1;i<$("#brand .pinpai").length;i++){
				 if($("#brand .pinpai").eq(i).hasClass('mypinpai')){
					sea[j]=cx_n[i-1];
					 j++;
				 }
			 }
			 console.log(sea)
        })
             
             //里面属性三角形
			  $(".qu_yu").bind('click', function(event) {
						let index = $(this).index();
							 str+=1
							 if(str==1){
							 $(this).css("background","url(./images/sjx_k.png)")	
								str=1
							 }
							 if(str!=1){
							 	$(this).css("background","url(./images/sjx_s.png)")
								str=0
							 }	
							 event.stopPropagation();
				});
		}
	})
	function unique_pp(arr) {
	    if (!Array.isArray(arr)) {
	        return
	    }
	     var res=[];
         var ss=[];
	    for (let i = 0; i < arr.length; i++) {
	        if (res.indexOf(arr[i]) === -1) {
	            res.push(arr[i])
	        }
	    }
	    var ss=res;
	     $('html #brand').append('<div class="pinpai"><span>全选</span></div>')
        	for (var i = 0; i < ss.length; i++) {
		$('html #brand').append('<div class="pinpai"><span>' + ss[i] + '<p class="qu_yu"></p></span></div>')//门店的代号
	}
	    return res
	    
	}