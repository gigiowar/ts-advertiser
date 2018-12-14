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
