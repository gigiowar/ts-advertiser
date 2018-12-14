import {Advertiser} from '../src/advertiser';

const video: HTMLMediaElement = document.getElementById('video');
let advertiser = new Advertiser(); 
let videoStarted = 0;

window.addEventListener('scroll', () => {

    if (advertiser.isScrolledIntoView(video)) {
        video.play();
    }
    else {
        video.pause();
    }
});

video.addEventListener('loadeddata', () => {
    let arrTime = [];
    video.ontimeupdate = () => {advertiser.initTimeEvents(video, arrTime)};
});   

video.addEventListener('playing', () => {
    videoStarted ++;
    advertiser.startVideo(videoStarted);
});   