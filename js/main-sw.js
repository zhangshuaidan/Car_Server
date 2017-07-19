//封装添加动画的方法
  $.fn.extend({
 	ani:function(x,t,d){
 		$(this).addClass("ani");
 		$(this).attr("swiper-animate-effect",x);
 		$(this).attr("swiper-animate-duration",t);
 		$(this).attr("swiper-animate-delay",d)
 	}
 });
 
 //slide-2 加入 动画
$(".s2-top").ani("bounceInDown","1s","0s");
$(".s2-bot").ani("bounceInRight","1s","0.5s");

//Slide3 动画jq
//点击前脸 实现背景切换效果
$(".s3-list li ").eq(0).toggle(function(){
	$(".s3-car").css({
		left:"0.275rem",
		top:"0.8rem"
	})
},function(){
	$(".s3-car").css({
		left:"-1.325rem",
		top:"1.7rem"
	})
});

//点击大灯添加亮灯效果
$(".s3-list li ").eq(1).click(function(event){
	$(".carlight").toggle();
});
//点击轮毂 实现不同的切换
$(".s3-list li ").eq(2).toggle(function(){
	$(".s3-car").css({
		left:"-1.97rem",
		top:"0.5rem"
	})},function(){
	$(".s3-car").css({
		left:"-1.325rem",
		top:"1.7rem"
	})	
	}
);


//slide 5 加入动画
$(".s5-hea-text").ani("bounceInRight","1s","0s");
$(".hea-text-2").ani("bounceInRight","1s","1s");
$(".main-1").ani("bounceInRight","1s","0s");
$(".main-2").ani("bounceInLeft","1s","0s");

//点击控制系统添加相关动画
$(".s5-hea-text").click(function(){
	$(".s5-hea-text").css("display","none");
	$(".hea-text-2").css("display","none");
	$("#s5-hand").hide();
	$(".main-1").css("display","block");
	//通过添加计时器显示第一层动画
	setTimeout(function(){
		$(".main-1").hide();
		$(".main-2").css("display","block");
	},2500);
	//添加计时器显示第二层动画
	setTimeout(function(){
		$(".main-2").hide();
		$(".s5-hea-text").css("display","block");
		$(".hea-text-2").css("display","block");
	},3500)
});

//slide 6 加入动画
$(".s6-main-txt").click(function(){
	$(".s6-cle").hide();
	$(this).hide();
	$(".black").hide();
})

//slide 7 点击事件消失
$(".s7-hand").click(function(){
	$(this).hide();
});

//slide 8 动画效果
$(".s8-1-i").ani("bounceOutLeft","1s","0.5s");
$(".s8-top").ani("bounceInLeft","1s","1s");
$(".s8-mid").ani("bounceInRight","1s","1s");
$(".s8-bot").ani("bounceInLeft","1s","2s");
//slide 9 动画效果
$(".s9-top").ani("zoomInRight","0.5s","0s");
$(".s9-mid").ani("zoomIn","0.5s","1s");
$(".s9-bot").ani("zoomInLeft","0.5s","0.5s");
//引入 swiper 插件
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',


	//引入swiper动画
 onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    if(swiper.activeIndex==3){
    	var startX,endX,a=0,b=0,n=0;
    	$(document).on("touchstart",function(e){
    		startX=e.originalEvent.touches[0].pageX;
    	});
    	$(document).on("touchmove",function(e){
    		e.preventDefault();
    		endX=e.originalEvent.touches[0].pageX;
    		a=parseInt((endX-startX)/10);
    		if(a>b){
    			n--;
    			if(n<0){
    				n=71;
    			}
    		}else if(a==b){
    			n=n;
    		}else{
    			n++;
    			if(n>71){
    				n=0;
    			}
    		}
    		$("#box img").eq(n).show().siblings().hide();
    		b=a;
    	});
    	//为360 看车 设置 计时器 使其自动旋转
    	var flag=true;
    	var time=null;
    	$("#360roa").click(function(){
    		if(flag){
    		clearInterval(time);
    		var n=0;
    		time=setInterval(move,50)
    		function move(){
    			n++;
    			if(n>71){
    				n=0;
    			}
    			$("#box img").eq(n).show().siblings().hide();
    		}
    		flag=false;
    		}else{
    				clearInterval(time);
    				flag=true;
    		}
    	});
    	var i=1;
    	$("#add").click(function(){
    	
    		i+=0.5;
    		if(i>=2){
    			i=2;
    		}
    		$("#box").css({
    			transform:"scale("+i+")",
    		})
    	});
    	$("#reduce").click(function(){
    	
    		i-=0.5;
    		if(i<=0.5){
    			i=0.5;
    		}
    		$("#box").css({
    			transform:"scale("+i+")",
    		})
    	});
    
    }
  } 
  });
  