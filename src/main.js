"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var advertiser_1 = require("../src/advertiser");
var video = document.getElementById('video');
var advertiser = new advertiser_1.Advertiser();
var videoStarted = 0;
window.addEventListener('scroll', function () {
    if (advertiser.isScrolledIntoView(video)) {
        video.play();
    }
    else {
        video.pause();
    }
});
video.addEventListener('loadeddata', function () {
    var arrTime = [];
    video.ontimeupdate = function () { advertiser.initTimeEvents(video, arrTime); };
});
video.addEventListener('playing', function () {
    videoStarted++;
    advertiser.startVideo(videoStarted);
});
