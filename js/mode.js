let video = document.getElementById("background-video");
let source = document.getElementsByTagName("source")[0]

let count = 1;

function changeMode(){
    if(count % 2 ==0){
        source.src = "./media/video/itcamp_dark.mp4";
        count += 1;
    }
    else{
        source.src = "./media/video/itcamp_light.mp4";
        count += 1;
    }
    video.load();
}