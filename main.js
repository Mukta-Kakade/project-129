left_wristX = 0;
left_wristY = 0;

right_wristX = 0;
right_wristY = 0;

left_score = 0;


status_song = 0;

song = "";
song2 = "" ;

function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model is loaded");
}

function draw() {
    image(video, 0, 0, 600, 500);

    stroke("#d10819");
    fill("#d10819");
    
    if(left_score > 0.2){
        circle(left_wristX, left_wristY, 25);
        
        song_song2.stop()

    }

    if(status_song = false) {
        song.song1.isPlaying();

        document.getElementById("song_name").innerHTML = "Song 1"; 
    }
} 

function gotPoses() {
    if(results.length > 0)
    {
        console.log(results);

        left_wristX = results[0].pose.leftWrist.x;
        left_wristY = results[0].pose.leftWrist.y;
        right_wristX = results[0].pose.rightWrist.x;
        right_wristY = results[0].pose.rightWrist.y;

        score_left = results[0].pose.keypoints[9].score;
        score_right = results[0].pose.keypoints[10].score;

    }  

    
}