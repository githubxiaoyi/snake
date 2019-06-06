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
      var i=this.body.length-1;

      var xx=this.body[i].x*this.width+'10px';
      var yy=this.body[i].y*this.height+'px';
      this.body.push({x:xx,y:yy});//x为3 y为0才吃
      //box.removeChild(this.body);
     // this.display();
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
