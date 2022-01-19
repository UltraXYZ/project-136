status = "";
inputObject = document.getElementById("inputObject").innerHTML;

function setup(){
    canvas = createCanvas(380 , 480);
    canvas.center();
    video = createVideo('animals.mp4');
    video.hide();
}

function start(){
 objectDetector = ml5.objectDetector('cocossd', modelLoaded);
 document.getElementById("status").innerHTML = "Status : " + inputObject;   
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw(){
    image(video, 0, 0, 480, 380);
}