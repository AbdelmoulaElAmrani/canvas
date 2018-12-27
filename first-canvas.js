
//this is my first canvas

var canvas = document.querySelector('canvas');
console.log(canvas);

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;

var c  = canvas.getContext('2d');


//line

// c.beginPath();
// c.moveTo(50 ,270);
// c.lineTo(270 , 200);
// c.lineTo(200 , 10);
// c.strokeStyle = '#838acc';
// c.stroke();

//circle

function randomCanvas() {

for (var i =0 ; i < 100 ;i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    var raduis = Math.random() *60;
    c.fillStyle = "#703D57"; //red
    c.beginPath();
    c.arc(x,y,raduis,0,Math.PI*2,true);
    c.closePath();
    c.fill();
}
//square

var size = Math.random() * 70 ;

for (var i = 0 ; i < 30 ; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.fillStyle = '#402A2C'
    c.fillRect(x , y ,size ,size);
}
for (var i = 0 ; i < 30 ; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.fillStyle = '#703D57'
    c.fillRect(x , y ,size ,size);

}
for (var i = 0 ; i < 30 ; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight
    c.fillStyle = '#D9B8C4'
    c.fillRect(x , y ,size ,size);

}
for (var i = 0 ; i < 30 ; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight

    c.fillStyle = '#957186'
    c.fillRect(x , y ,size ,size);
}
}

//just to fill the window let's call it 5 times lol
randomCanvas();
randomCanvas();
randomCanvas();
randomCanvas();
randomCanvas();

// interval each second for the new canvas
setInterval(function () {
    randomCanvas();
},1000);
