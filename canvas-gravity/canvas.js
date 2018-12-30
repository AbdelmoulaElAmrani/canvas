
var canvas = document.querySelector('canvas');
console.log(canvas);

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;

var c  = canvas.getContext('2d');

var mousemovement = {
    x : undefined ,
    y:undefined
};
var maxR = 60 ;

var colorArray = [
    '#590210',
    '#250205',
    '#BA0737',
    '#F33733',
    '#F5A9A7'
    ];

var gravity = 0.3 ;
var friction = 0.9 ;

window.addEventListener("mousemove" ,function (ev) {

    mousemovement.x = ev.x;
    mousemovement.y = ev.y;
});

window.addEventListener('resize', function (ev) {

    canvas.width = window.innerWidth ;
    canvas.height = window.innerHeight ;

});
window.addEventListener('click',function (ev) {
    gravityCanvas();
});


function gravityCanvas() {

function Circle(x , y ,dy , radius) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
    this.color =  colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        c.beginPath();
        c.arc( this.x , this.y , this.radius ,0 , Math.PI * 2 , false);

        c.fillStyle = this.color;
        c.fill();
    };

    this.update = function () {

        //gravity
        if (this.y + this.radius > innerHeight){
            this.dy = -this.dy * friction;
        }else {
            this.dy += gravity;
        }
        this.y += this.dy;

        //interactivity

        if (
            mousemovement.x - this.x < 50 && mousemovement.x - this.x > -50 &&
            mousemovement.y - this.y < 50 && mousemovement.y - this.y > -50
            )
        {
            if ( this.radius < maxR ){
            this.radius += 2 ;
            }

        }else if (this.radius > 20) {
            this.radius -= 1;
        }


        this.draw();
    }
}

var circleArray = [];
for (var i =0 ; i < 700 ; i++) {
    var radius = Math.random() * 20;

    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;

    var dy = (Math.random() - 0.5) * 2;



    circleArray.push(new Circle(x, y, dy, radius));

}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0 , 0 , innerWidth, innerHeight );


    for (var i = 0 ; i < circleArray.length ; i++){
        circleArray[i].update()
    }


}

animate();
}
gravityCanvas();




