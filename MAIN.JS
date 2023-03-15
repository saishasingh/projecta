audio ="";
music = "";
leftwristy = 0;
leftwristx = 0;
rightwristy = 0;
rightwristx = 0;


function preload(){
    audio = loadSound("acoustic-vibe-124586.mp3");
    console.log("YAY")
    music = loadSound("timeless-love-songs-139541.mp3");
    console.log("hurray")
    
}


function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("model");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

}};

function draw(){
    image(video,0,0,600,530);
}

