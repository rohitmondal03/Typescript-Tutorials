interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { }
    getSepia(): void {
        throw new Error("Method not implemented.");
    }
    getReelsTime(): number {
        throw new Error("Method not implemented.");
    }
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ) { }
    getSepia(): void {
        throw new Error("Method not implemented.");
    }
    getReelsTime(): number {
        throw new Error("Method not implemented.");
    }

    createStory(): void {
        console.log("Story is created !!");
    }
}