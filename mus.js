function preload()
{   
    
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = CreateCapture(VIDEO)
    video.size(300,300);
    video.hide();

    poseNet = mi5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log("model loaded");

}
function draw()
{
    image(video, 0, 0, 300, 300)
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
    }

}