function snake(){
  this.width=10;
  this.height=10;
  this.direction='right';

  this.body=[
    {x:2,y:0, ele: null},
    {x:1,y:0, ele: null},
    {x:0,y:0, ele: null}
  ]


  /**
   * 获取 蛇头
   * @returns {{x, y, ele}|*}
   */
  this.getHead = function(){
    return this.body[0]
  };

  /**
   * 获取蛇尾
   * @returns {{x, y, ele}|*}
   */
  this.getTail = function(){
    return this.body[this.body.length-1]
  }

  this.display=function(){
    for (var i=0;i<this.body.length;i++){
      if (this.body[i].x!=null){
        var s=document.createElement('div');
        this.body[i].flag=s;
        s.style.width=this.width+'px';
        s.style.height=this.height+'px';
        s.style.position='absolute';
        s.style.top=this.body[i].y*this.height+'px';
        s.style.left=this.body[i].x*this.width+'px';
        s.style.background='rgb(123,123,123)';
        this.body[i]['ele'] = s;
        box.appendChild(s);
      }
    }
  };
  this.run=function () {
    for(var i=this.body.length-1;i>0;i--){
      this.body[i].x=this.body[i-1].x;
      this.body[i].y=this.body[i-1].y;
    }

    console.log(this.body)

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





  };

  this.add = function(){

    var snakeTail = this.getTail()
    var tail_2 = this.body[this.body.length-2]



    var posInfo = {

    }


    var s=document.createElement('div');
    this.body[i].flag=s;
    s.style.width=this.width+'px';
    s.style.height=this.height+'px';
    s.style.position='absolute';
    s.style.top=this.body[i].y*this.height+'px';
    s.style.left=this.body[i].x*this.width+'px';
    s.style.background='rgb(123,123,123)';
    this.body[i]['ele'] = s;
    box.appendChild(s);
  }

  this.move = function(){
    this.body.map(item=>{
      item.ele.style.left=item.x*this.height+'px';
      item.ele.style.top=item.y*this.height+'px';
    })

    var snakeHead = this.getHead();
    if(snakeHead.x == food.x && snakeHead.y == food.y){
      this.eat(food);
    }

  }

  this.eat = function(f){
    f.random()
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
    this.x=Math.floor(Math.random()*40);
    this.y=Math.floor((Math.random()*40));
    f.style.top=this.y*this.height+'px';
    f.style.left=this.x*this.width+'px';
    box.appendChild(f);
  }

  this.random = function(){
    this.x=Math.floor(Math.random()*40);
    this.y=Math.floor((Math.random()*40));
    f.style.top=this.y*this.height+'px';
    f.style.left=this.x*this.width+'px';
  }
}
var snake=new snake();
var food=new food();
snake.display();
food.display();
document.body.onkeydown=function (e) {
  var ev=e||window.event;
  // console.log(ev)
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
  timer=setInterval(snake.run.bind(snake),500);
}
