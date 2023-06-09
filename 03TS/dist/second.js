"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        throw new Error("Method not implemented.");
    }
    getReelsTime() {
        throw new Error("Method not implemented.");
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    getSepia() {
        throw new Error("Method not implemented.");
    }
    getReelsTime() {
        throw new Error("Method not implemented.");
    }
    createStory() {
        console.log("Story is created !!");
    }
}
