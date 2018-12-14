import {Advertiser} from '../src/advertiser';

// const video = document.getElementById("video");
const video: HTMLMediaElement = document.getElementById("video");
let advertiser = new Advertiser(); 

window.addEventListener("scroll", () => {

    if (advertiser.isScrolledIntoView(video)) {
        video.play();
    }
    else {
        video.pause();
    }
});

video.addEventListener('loadeddata', () => {
    video.ontimeupdate = () => {advertiser.initTimeEvents(video)};
});    