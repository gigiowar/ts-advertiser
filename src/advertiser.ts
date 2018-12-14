export class Advertiser {
    type: string

    constructor() {
        this.type = ''
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }    

    isScrolledIntoView( video ) {

        if(!this.isEmpty(video)) {
            const elementTop    = video.getBoundingClientRect().top,
                elementBottom = video.getBoundingClientRect().bottom;

            const elementHeight = video.getBoundingClientRect().height,
                elementHalfHeight = elementHeight / 2,
                elementBottomBound = -Math.abs(elementHalfHeight);


            return elementTop >= elementBottomBound && elementBottom <= window.innerHeight + elementHalfHeight;            
        } else {
            return false;
        }


    }

    initTimeEvents( video ) {

        if(!this.isEmpty(video)) {

            let watched_25 = false;
            let watched_50 = false;
            let watched_75 = false;
            let watched_100 = false;

            let currentTime = video.currentTime;
            let duration = video.duration;

            let percentage_watched = (currentTime / duration) * 100;

            if ((parseInt(percentage_watched.toFixed()) == 25) && (watched_25 == false)) {
                console.log("watched 25%");
                watched_25 = true;
                return true;
            } else if ((parseInt(percentage_watched.toFixed()) == 50) && (watched_50 == false)) {
                console.log("watched 50%");
                watched_50 = true;
                return true;
            } else if ((parseInt(percentage_watched.toFixed()) == 75) && (watched_75 == false)) {
                console.log("watched 75%");
                watched_75 = true;
                return true;
            } else if ((parseInt(percentage_watched.toFixed()) == 100) && (watched_100 == false)) {
                console.log("watched 100%");
                watched_100 = true;
                return true;
            } 

        } else {
            return false;
        }    
    }

 

}