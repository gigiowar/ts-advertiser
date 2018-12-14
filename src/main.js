"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var advertiser_1 = require("../src/advertiser");
// const video = document.getElementById("video");
var video = document.getElementById("video");
var advertiser = new advertiser_1.Advertiser();
window.addEventListener("scroll", function () {
    if (advertiser.isScrolledIntoView(video)) {
        video.play();
    }
    else {
        video.pause();
    }
});
video.addEventListener('loadeddata', function () {
    video.ontimeupdate = function () { advertiser.initTimeEvents(video); };
});
