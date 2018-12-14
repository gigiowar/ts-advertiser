(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Advertiser = /** @class */ (function () {
    function Advertiser() {
        this.timePlayed = 0;
    }
    Advertiser.prototype.isScrolledIntoView = function (video) {
        if (video) {
            var elementTop = video.getBoundingClientRect().top, elementBottom = video.getBoundingClientRect().bottom;
            var elementHeight = video.getBoundingClientRect().height, elementHalfHeight = elementHeight / 2, elementBottomBound = -Math.abs(elementHalfHeight);
            return elementTop >= elementBottomBound && elementBottom <= window.innerHeight + elementHalfHeight;
        }
        else {
            return false;
        }
    };
    Advertiser.prototype.initTimeEvents = function (video, arrTime) {
        if (video) {
            var currentTime = video.currentTime;
            var duration = video.duration;
            var percentage_watched = (currentTime / duration) * 100;
            this.timePlayed = currentTime;
            //I'm not sure about this goal
            //when the ad is in the viewport of the browser for at least 50% and 2 continuous seconds in total.
            if ((this.timePlayed.toFixed() > 2) && (arrTime.indexOf('watched_2_sec') == -1)) {
                console.log('watched for 2sec');
                arrTime.push('watched_2_sec');
            }
            if ((parseInt(percentage_watched.toFixed()) == 25) && (arrTime.indexOf('watched_25') == -1)) {
                console.log('watched 25%');
                arrTime.push('watched_25');
                return true;
            }
            else if ((parseInt(percentage_watched.toFixed()) == 50) && (arrTime.indexOf('watched_50') == -1)) {
                console.log('watched 50%');
                arrTime.push('watched_50');
                return true;
            }
            else if ((parseInt(percentage_watched.toFixed()) == 75) && (arrTime.indexOf('watched_75') == -1)) {
                console.log('watched 75%');
                arrTime.push('watched_75');
                return true;
            }
            else if ((parseInt(percentage_watched.toFixed()) == 100) && (arrTime.indexOf('watched_100') == -1)) {
                console.log('watched 100%');
                arrTime.push('watched_100');
                return true;
            }
        }
        else {
            return false;
        }
    };
    Advertiser.prototype.startVideo = function (videoStarted) {
        if (videoStarted === 1) {
            console.log('video started');
            return true;
        }
    };
    return Advertiser;
}());
exports.Advertiser = Advertiser;

},{}],2:[function(require,module,exports){
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

},{"../src/advertiser":1}]},{},[2]);
