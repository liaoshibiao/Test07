     var abc = "http://tel.runsa.cn:8177/bi_yhj/REALLY/bi/report/params/queryOrgLevel/query";
     	var params = {
		"userId": '15975531236',
		"va_months": 5,
		"local_send_flag":0,
		"areacode1": "",
		"org_level_id":"",
		"org_brd_id": ""
	};
	var cx_e=[];
	var mydata=[];
	$.ajax({
		type: 'POST',
		url: abc,
		dataType: 'json',
		data: params,
		success: function(obj) {
			for(var i=0;i<obj.data.list.length;i++){
				mydata[i]=obj.data.list[i].org_level_id;
			}
			// mydata=obj.data;
			var list = obj.data.list;
            
			for (var i = 0; i < list.length; i++) {
				cx_e = cx_e.concat(list[i].org_level_nm)
			}	
			unique_jb(cx_e)
		
			//店铺级别
			var dian=cx_e.length;
             $("#store div").bind("click",function(){
			let index = $(this).index();
            if(index!=0){
				if($("#store .pinpai").eq(index).hasClass('mypinpai')){
				    $("#store .pinpai").eq(index).removeClass('mypinpai');
			     }
				 else{
					 	$("#store .pinpai").eq(index).addClass('mypinpai');
				 }
					
			}
			else{
				if($("#store .pinpai").eq(0).hasClass('mypinpai')){
				    $("#store .pinpai").removeClass('mypinpai');
			     }
				 else{
					$("#store .pinpai").addClass('mypinpai');
				 }
				
			}
			    var istrue=false;
				var isfalse=false;
				var j=1;
				for(j=1;j<dian;j++){
					if(!($("#store .pinpai").eq(j).hasClass('mypinpai'))){
						istrue=true;
					}
				
				}
				if(istrue==false&&j==dian){
					$("#store .pinpai").eq(0).addClass('mypinpai');
					}
            
             if(index!=0){
             	if($("#store .pinpai").eq(index).hasClass('mypinpai')&&$("#store .pinpai").eq(0).hasClass('mypinpai')){
             		$("#store .pinpai").eq(0).addClass('mypinpai')
             	}else{		
             		$("#store .pinpai").eq(0).removeClass('mypinpai');
             	}
			 }
			 var tovalue=[];//将亮的值保存
			 var j=0;
			 



			 //获取名称对应名称

			 for(var i=1;i<$("#store .pinpai").length;i++){
				 if($("#store .pinpai").eq(i).hasClass('mypinpai')){
					//  tovalue[j]=$("#store .pinpai").eq(i).text();
					tovalue[j]=mydata[i-1];
					 j++;
				 }
			 }
			 console.log(tovalue)
        })
             
			 //里面属性三角形
			 
		
			
		}
	})
	function unique_jb(arr) {
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
	      $("#store div").bind("click",function(){
	      	   if(index==0){
	      	   	 
	      	   }
	      })
	     $('html #store').append('<div class="pinpai"><span>全选</span></div>')
        	for (var i = 0; i < ss.length; i++) {
		$('html #store').append('<div class="pinpai"><span>' + ss[i] + '<p class="qu_yu"></p></span></div>')//门店的代号
	}
	    return res
	    
	}