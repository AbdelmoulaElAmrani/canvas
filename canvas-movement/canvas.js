
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
    '#393E46',
    '#00ADB5',
    '#FFF4E0',
    '#F8B500',
    '#FC3C3C'
    ];

window.addEventListener("mousemove" ,function (ev) {

    mousemovement.x = ev.x;
    mousemovement.y = ev.y;
});

window.addEventListener('resize', function (ev) {

    canvas.width = window.innerWidth ;
    canvas.height = window.innerHeight ;

});



function Circle(x , y , dx ,dy , radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
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
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx ;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy ;
        }
        this.x += this.dx;
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

    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;



    circleArray.push(new Circle(x, y, dx, dy, radius));

}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0 , 0 , innerWidth, innerHeight );


    for (var i = 0 ; i < circleArray.length ; i++){
        circleArray[i].update()
    }


}

animate();







