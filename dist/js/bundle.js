(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Advertiser = /** @class */ (function () {
    function Advertiser() {
        this.type = '';
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
    Advertiser.prototype.initTimeEvents = function (video) {
        var watched_25 = false;
        var watched_50 = false;
        var watched_75 = false;
        var watched_100 = false;
        var currentTime = video.currentTime;
        var duration = video.duration;
        var percentage_watched = (currentTime / duration) * 100;
        if ((parseInt(percentage_watched.toFixed()) == 25) && (watched_25 == false)) {
            console.log("watched 25%");
            watched_25 = true;
            return true;
        }
        else if ((parseInt(percentage_watched.toFixed()) == 50) && (watched_50 == false)) {
            console.log("watched 50%");
            watched_50 = true;
            return true;
        }
        else if ((parseInt(percentage_watched.toFixed()) == 75) && (watched_75 == false)) {
            console.log("watched 75%");
            watched_75 = true;
            return true;
        }
        else if ((parseInt(percentage_watched.toFixed()) == 100) && (watched_100 == false)) {
            console.log("watched 100%");
            watched_100 = true;
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

},{"../src/advertiser":1}]},{},[2]);
