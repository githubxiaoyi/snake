function snake(){
  this.width=10;
  this.height=10;
  this.direction='right';

  this.body=[
    {x:2,y:0,ele:null},
    {x:1,y:0,ele:null},
    {x:0,y:0,ele:null}
  ]
  var head=this.body[0];
  this.display=function(){
    for (var i=0;i<this.body.length;i++){
      if (this.body[i].x!=null){
        s=document.createElement('div');
        this.body[i].flag=s;
        s.style.width=this.width+'px';
        s.style.height=this.height+'px';
        s.style.position='absolute';
        s.style.top=this.body[i].y*this.height+'px';
        s.style.left=this.body[i].x*this.width+'px';
        s.style.background='rgb(123,123,123)';
        this.body[i]['ele']=s;
        box.appendChild(s);
        //var ss=this.body[ii]['ele'];
        //this.last={x:xx,y:yy,ele:ss};
      }
    }
  };
  this.run=function () {
    if(this.body[0].x<0||this.body[0].x>499||this.body[0].y<0||this.body[0].y>499){
      clearInterval(timer);
      alert('不能出界 重新开始');
      box.removeChild(this.body.flag);
      box.removeChild(food.flag);
      food.display();
      this.body=[
        {x:2,y:0,ele:null},
        {x:1,y:0,ele:null},
        {x:0,y:0,ele:null}
      ]
      this.direction='right';
      this.display();
    }
    for(var i=this.body.length-1;i>0;i--){
      this.body[i].x=this.body[i-1].x;
      this.body[i].y=this.body[i-1].y;
      }
    switch (this.direction) {
      case"left":
        this.body[0].x-=1;
        break;
      case"right":
        this.body[0].x+=1;
        break;
      case"up":
        this.body[0].y-=1;
        break;
      case"down":
        this.body[0].y+=1;
    }
    this.move();

    }
  this.move=function(){
    for(var i=0;i<this.body.length;i++){
      var team=this.body[i];
      team.ele.style.top=this.height*this.body[i].y+'px';
      team.ele.style.left=this.width*this.body[i].x+'px';
    };
    if (this.body[0].x==food.x&&this.body[0].y==food.y){

      ss=document.createElement('div');
      var last={x:null,y:null,ele:null};
      var length=this.body.length;

      if(this.body[length-1].x==this.body[length-2].x){
        if(this.body[length-1].y<this.body[length-2].y){
          last['x']=this.body[length-1].x;
          last['y']=this.body[length-1].y-1;
        }else if (this.body[length-1].y>this.body[length-2].y) {
          last['x']=this.body[length-1].x;
          last['y']=this.body[length-1].y+1;
        }
        else if(this.body[length-1].y==this.body[length-2].y){
          if (this.body[length-1].x<this.body[length-2].x){
            last['x']=this.body[length-1].x+1;
            last['y']=this.body[length-1].y;
          } else if(this.body[length-1].x>this.body[length-2].x){
            last['x']=this.body[length-1].x-1;
            last['y']=this.body[length-1].y;
          }
        }
      }
      ss.style.position='absolute';
      ss.style.width=this.width+'px';
      ss.style.height=this.height+'px';
      ss.style.top=last.y*this.height+'px';
      ss.style.left=last.x*this.width+'px';
      ss.style.background='rgb(123,123,123)';
      last['ele']=ss;
      this.body.push(last);
      box.appendChild(ss);
      //移除食物、增加食物
      box.removeChild(food.flag);
      food.display();

    }
  }


}

function food(){
  var f;
  this.width=10;
  this.height=10;
  this.display=function () {
    f=document.createElement('div');
    this.flag=f;
    f.style.width=this.width+'px';
    f.style.height=this.height+'px';
    f.style.background='rgb(1,1,1)';
    f.style.position='absolute';
    this.x=Math.floor(Math.random()*10);
    this.y=Math.floor(Math.random()*10);
    f.style.top=this.y*this.height+'px';
    f.style.left=this.x*this.width+'px';
    box.appendChild(f);
  }
}
var snake=new snake();
var food=new food();
snake.display();
food.display();
document.body.onkeydown=function (e) {
  var ev=e||window.event;
  switch (ev.keyCode) {
    case 38:
      if(snake.direction!='down'){
        snake.direction='up';
      }
      break;
    case 40:
      if(snake.direction!='up'){
        snake.direction='down';
    }
      break;
    case 39:
      if (snake.direction!='left'){
        snake.direction='right';
      }
      break;
    case 37:
      if (snake.direction!='right'){
        snake.direction='left';
      }
      break;
  }
};
var timer;
window.onload=function () {
  clearInterval(timer);
  timer=setInterval('snake.run()',500);
}
