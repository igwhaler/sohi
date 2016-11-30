$(function(){
	$(".nav_list_content").parent().each(function(i){
		$(this).find(".nav_list_content").css("top",i*(-31)-1+"px");
		$(this).find(".nav_list_content").hide();
		$(this).mouseover(function(){
			$(this).find(".nav_list_content").show();
		});
		$(this).mouseout(function(){
			$(this).find(".nav_list_content").hide();
		});
	});
});

$(function(){
	var timer1=null,num1=0;

	function doTimer1(){
		$("#banner>li").eq(num1).animate({opacity:0},300);
		$("#banner>li").eq(num1).next().animate({opacity:1},300);
		$("#banner>li").eq(num1).next().css("z-index",4);
		$("#banner>li").eq(num1).css("z-index",2);
		num1++;
		if (num1==6) {
			num1=0;
			$("#banner>li").eq(num1).animate({opacity:1},300);
			$("#banner>li").eq(num1).css("z-index",4);
		};
		$("#banner_ix>li").eq(num1).addClass('banner_ix_active');
		$("#banner_ix>li").eq(num1).siblings().removeClass('banner_ix_active');
	};/*轮播切换*/
	function doTimer1_1(){
		$("#banner>li").eq(num1).css("z-index",4);
		$("#banner>li").eq(num1).siblings().css("z-index",2);
		$("#banner_ix>li").eq(num1).addClass('banner_ix_active');
		$("#banner_ix>li").eq(num1).siblings().removeClass('banner_ix_active');
	};
	

	function doCar(){
		timer1=setInterval(function(){
			doTimer1();
		},3000);
	};
	doCar();
	$(".banner_wrap").on({
		"mouseover":function(){
			clearInterval(timer1);
			$(".banner_wrap>a").show();
			//alert(num1);
		},
		"mouseout" :function(){
			clearInterval(timer1);
			$(".banner_wrap>a").hide();
			doCar();
		}
	});
	$("#banner_pre").click(function(){
		num1--;
		if (num1<0) {
			num1=5;
			$("#banner>li").eq(0).animate({opacity:0},300);
		};
		$("#banner>li").eq(num1).animate({opacity:1},300);
		$("#banner>li").eq(num1).next().animate({opacity:0},300);
		doTimer1_1();
	});
	$("#banner_next").click(function(){
		num1++;
		if (num1>5) {
			num1=0;
			$("#banner>li").eq(5).animate({opacity:0},300);
		};
		$("#banner>li").eq(num1).animate({opacity:1},300);
		$("#banner>li").eq(num1).prev().animate({opacity:0},300);
		doTimer1_1();
	});
	$("#banner_ix>li").mouseover(function(){
		num1=$(this).index();
		if (num1<0) {
			num1=0;
		};
		$(this).addClass('banner_ix_active');
		$(this).siblings().removeClass('banner_ix_active');
		$("#banner>li").eq(num1).animate({opacity:1},300);
		$("#banner>li").eq(num1).siblings().animate({opacity:0},300);
		$("#banner>li").eq(num1).css("z-index",4);
		$("#banner>li").eq(num1).siblings().css("z-index",2);
	});
});

$(function(){
	$("#life_sc_top>li").mouseenter(function(){
		//$("#life_up").animate({"top":"70px"},100).delay(100).animate({"top":0},50);
	});
});

$(function(){
	var num=0;
	$("#adl_pre").click(function() {
		if (num==4) {
			num=0;
		};
		num++;
		$("#ad_list1").animate({"left":-(num+1)*1000+"px"},200,function(){
			if (num==4) {
				$("#ad_list1").css("left","-1000px");
				num=0;
			};
		});	
	});
	$("#adl_next").click(function() {
		if (num==0||num==4) {
			$("#ad_list1").css("left","-5000px");
			num=4;
		};
		num--;
		$("#ad_list1").animate({"left":-(num+1)*1000+"px"},200,function(){
			if (num==0) {
				$("#ad_list1").css("left","-1000px");
				num=4;
			};
		});	
	});
});

$(function(){
	$(".f_title_list>li").each(function(){
		$(this).css("width",$(this).find("a").outerWidth()-1+"px");
		

	});
	$(".f_title_list>li>a").mouseover(function(){
		$(this).addClass('title_a_active');
		$(this).parent().siblings().find("a").removeClass('title_a_active');
		$(this).parents(".f").find(".f_ct_right").children("div").eq($(this).parent().index()).show();
		$(this).parents(".f").find(".f_ct_right").children("div").eq($(this).parent().index()).siblings().hide()
	});
});

$(function(){
	var num2=0;
	setInterval(doUp,2000);
	function doUp(){
		$(".hot_list").animate({"top":-num2*120+"px"},300,function(){
			num2++;
			if (num2==5) {
				$(this).css("top","0px")
				num2=0;
			};
		});
	};
		
});