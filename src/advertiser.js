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
        if (video) {
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
        }
        else {
            return false;
        }
    };
    return Advertiser;
}());
exports.Advertiser = Advertiser;
