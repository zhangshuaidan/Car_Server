// 图片预加载方法
var arr=["images/car/Rouge Flamme.0000.png",
         "images/car/Rouge Flamme.0001.png",                       
         "images/car/Rouge Flamme.0002.png",
         "images/car/Rouge Flamme.0003.png",
         "images/car/Rouge Flamme.0004.png",
         "images/car/Rouge Flamme.0005.png",
         "images/car/Rouge Flamme.0006.png",
         "images/car/Rouge Flamme.0007.png",
         "images/car/Rouge Flamme.0008.png",
         "images/car/Rouge Flamme.0009.png",
         "images/car/Rouge Flamme.0010.png",
         "images/car/Rouge Flamme.0011.png",
         "images/car/Rouge Flamme.0012.png",
         "images/car/Rouge Flamme.0013.png",
         "images/car/Rouge Flamme.0014.png",
         "images/car/Rouge Flamme.0015.png",
         "images/car/Rouge Flamme.0016.png",
         "images/car/Rouge Flamme.0017.png",
         "images/car/Rouge Flamme.0018.png",
         "images/car/Rouge Flamme.0019.png",
         "images/car/Rouge Flamme.0020.png",
         "images/car/Rouge Flamme.0021.png",
         "images/car/Rouge Flamme.0022.png",
         "images/car/Rouge Flamme.0023.png",
         "images/car/Rouge Flamme.0024.png",
         "images/car/Rouge Flamme.0025.png",
         "images/car/Rouge Flamme.0026.png",
         "images/car/Rouge Flamme.0027.png",
         "images/car/Rouge Flamme.0028.png",
         "images/car/Rouge Flamme.0029.png",
         "images/car/Rouge Flamme.0030.png",
         "images/car/Rouge Flamme.0031.png",
         "images/car/Rouge Flamme.0032.png",
         "images/car/Rouge Flamme.0033.png",
         "images/car/Rouge Flamme.0034.png",
         "images/car/Rouge Flamme.0035.png",
         "images/car/Rouge Flamme.0036.png",
         "images/car/Rouge Flamme.0037.png",
         "images/car/Rouge Flamme.0038.png",
         "images/car/Rouge Flamme.0039.png",
         "images/car/Rouge Flamme.0040.png",
         "images/car/Rouge Flamme.0041.png",
         "images/car/Rouge Flamme.0042.png",
         "images/car/Rouge Flamme.0043.png",
         "images/car/Rouge Flamme.0044.png",
         "images/car/Rouge Flamme.0045.png",
         "images/car/Rouge Flamme.0046.png",
         "images/car/Rouge Flamme.0047.png",
         "images/car/Rouge Flamme.0048.png",
         "images/car/Rouge Flamme.0049.png",
         "images/car/Rouge Flamme.0050.png",
         "images/car/Rouge Flamme.0051.png",
         "images/car/Rouge Flamme.0052.png",
         "images/car/Rouge Flamme.0053.png",
         "images/car/Rouge Flamme.0054.png",
         "images/car/Rouge Flamme.0055.png",
         "images/car/Rouge Flamme.0056.png",
         "images/car/Rouge Flamme.0057.png",
         "images/car/Rouge Flamme.0058.png",
         "images/car/Rouge Flamme.0059.png",
         "images/car/Rouge Flamme.0060.png",
         "images/car/Rouge Flamme.0061.png",
         "images/car/Rouge Flamme.0062.png",
         "images/car/Rouge Flamme.0063.png",
         "images/car/Rouge Flamme.0064.png",
         "images/car/Rouge Flamme.0065.png",
         "images/car/Rouge Flamme.0066.png",
         "images/car/Rouge Flamme.0067.png",
         "images/car/Rouge Flamme.0068.png",
         "images/car/Rouge Flamme.0069.png",
         "images/car/Rouge Flamme.0070.png",
         "images/car/Rouge Flamme.0071.png",
         "images/music.png",
         "images/pic3.png",
         "images/pic2.png",
         "images/pic1.png",
         "images/rotate.png",
         "images/right.png",
         "images/left.png",
         "images/car.png",
         "images/topdir.png",
         "images/twotext.png",
         "images/twocar.png",
         "images/topdir.png",
         "images/twopic1.png",
         "images/twocircle.png",
         "images/rotate1.png",
         "images/hand.png",
         "images/bigcar.png",
         "images/bigcarlight.png",
         "images/topdir.png",
         "images/car/360.png",
         "images/car/jia.png",
         "images/car/jian.png",
         "images/topdir.png",
         "images/threetext.png",
         "images/threetext1.png",
         "images/sun.png",
         "images/hand.png",
         "images/threepic2s.png",
         "images/suna.png",
         "images/sunb.png",
         "images/sunc.png",
         "images/sund.png",
         "images/topdir.png",
         "images/threepic2s.png",
         "images/fourbc.png",
         "images/topdir.png",
         "images/fivencs.png",
         "images/round.png",
         "images/hand.png",
         "images/topdir.png",
         "images/hidden4.png",
         "images/hidden1.png",
         "images/hidden2.png",
         "images/hidden3s.png",
         "images/topdir.png",
         "images/sevenpic1.png",
         "images/sevenpic2.png",
         "images/sevenpic3.png"
         ];

// // 模拟效果
//     var callbacks = [];
//     imgLoader(arr, function (percentage) {
//         callbacks.push((function(percent, i){
//             return function(){
//                 setTimeout(function(){
//                     var percentT = percent * 100;
//                     $('#loader__info').html('Loading ' + (parseInt(percentT)) + '%');
//                     $('#loader__progress')[0].style.width = percentT + '%';
//                     if (percent == 1) {
//                         setTimeout(function(){
//                             $('#loader').remove();
//                             Swipe.init();
//                         }, 600);
//                     }
//                     callbacks[i + 1] && callbacks[i + 1]();
//                 },600);
//             }
//         })(percentage, callbacks.length));

//         if(percentage == 1) {
//             callbacks[0]();
//         }
//     });


// 真实加载动画
imgLoader(arr, function (percentage) {
 var percentT = percentage * 100;
   $('#loader__info').html('Loading ' + (parseInt(percentT)) + '%');
 $('#loader__progress')[0].style.width = percentT + '%';
if (percentage == 1) {
  $('#loader').remove();
    console.log("图片预加载完成");
    $.getScript("js/main-sw.js",function(){
        console.log("js加载成功")
     });
            }
 });


 