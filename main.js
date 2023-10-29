function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(500, 500);
    canvas.position(600, 70)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialised!")
}

function draw() {
    background("#0D98BA")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}