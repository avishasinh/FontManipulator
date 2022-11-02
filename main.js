var noseX = 0
var noseY = 0
var leftWristX = 0
var rightWristX = 0

function preload() {

}

function setup() {
    canvas = createCanvas(400, 400)
    canvas.center()
    video = createCapture(VIDEO)
    model = ml5.poseNet(video, modelLoaded)
    model.on("pose", gotPoses)
}

function draw() {
    background("white")
    textSize(leftWristX - rightWristX)
    text("Avisha", noseX, noseY)
}

function modelLoaded(){
    console.log("Model loaded")
}

function gotPoses(results){
    console.log(results)
    if(results.length > 0){
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        
    }
}