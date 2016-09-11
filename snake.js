$(function(){
  $(".welcome").on("click",function(){
    $(".bg").addClass("animate")
  })
  $(".go-circle").on("click",function(){
    $(".bg").removeClass("animate");
    $(".bg").addClass("hidden");
    
  })
  //创建小div
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j <20 ; j++) {
      $("<div>")
      .addClass("block")
      .attr("id",i + "-" + j)
      .appendTo(".changjing")
    };
  };
   var she=[
    {x:0,y:0},{x:0,y:1},{x:0,y:2}
    ];
    var dict={
      "0-0":true,"0-1":true,"0-2":true
    }
   for (var i = 0; i < she.length; i++) {
      $("#" + she[i].x + "-" +she[i].y).addClass("she")
    }; 
  function fangshiwu(){
    do{
    var a=Math.floor(Math.random()*20);
    var b=Math.floor(Math.random()*20);
  }
    while(dict[a+"-"+b]){
    $("#" + a +"-" + b).addClass("shiwu");
    return {x:a,y:b}
  }
    
  }
  var shiwu=fangshiwu();
  $(".start").on("click",function(){
   t=setInterval(move,200);
  })
  $(".stop").on("click",function(){
    clearInterval(t);
  })
   $(".again").on("click",function(){
    location.reload();
   /* $(".she").removeClass("she");
    $(".shiwu").removeClass("shiwu")
    she=[
    {x:0,y:0},{x:0,y:1},{x:0,y:2}
    ];
    dict={
      "0-0":true,"0-1":true,"0-2":true
    }
    for (var i = 0; i < she.length; i++) {
      $("#" + she[i].x + "-" +she[i].y).addClass("she")
    }; 
    fangshiwu();
    $(".jinggao").css("display","none");
    setInterval(move,200); */
  })
  var fangxiang="you";
  $(document).on("keydown",function(e){
   e.preventDefault();
   var biao={
    "zuo":37,"you":39,"shang":38,"xia":40
   }
   if(Math.abs(e.keyCode-biao[fangxiang])===2){
    return;
   }
   if(e.keyCode===37){
    fangxiang="zuo";
   }
   if(e.keyCode===38){
    fangxiang="shang";
   }
   if(e.keyCode===39){
    fangxiang="you";
   }
   if(e.keyCode===40){
    fangxiang="xia";
   }
  })
  function move(){
    var jiutou=she[she.length-1];
  
    
   if(fangxiang==='you'){
      var xintou = {x:jiutou.x,y:jiutou.y+1};
     
    }
    if(fangxiang==='zuo'){
      var xintou = {x:jiutou.x,y:jiutou.y-1};
    }
    if(fangxiang==='xia'){
      var xintou = {x:jiutou.x+1,y:jiutou.y};
    }
    if(fangxiang==='shang'){
      var xintou = {x:jiutou.x-1,y:jiutou.y};
    }
    
    $("#" + xintou.x +"-" +xintou.y).addClass("she");
    she.push(xintou);
    if(xintou.x<0 ||xintou.x>19||xintou.y<0||xintou.y>19||dict[xintou.x+"-"+xintou.y]){
      $(".jinggao").css("display","block");
      clearInterval(t);
      return;
    }
    dict[xintou.x+"-"+xintou.y]=true;
    if(xintou.x===shiwu.x && xintou.y===shiwu.y){
      $("#"+shiwu.x+"-"+shiwu.y).removeClass("shiwu");
      shiwu=fangshiwu();
    }else{
    var weiba=she.shift();
    $("#" + weiba.x + "-" + weiba.y).removeClass("she");
    delete dict[weiba.x +"-"+ weiba.y];
    }
    
  }

})