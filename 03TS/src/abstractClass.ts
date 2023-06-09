abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) { }

    abstract getSepia(): void

    getReelsTime(): number {
        // some complex calculation
        return 8;
    }
}


class Instagrams extends TakePhoto {
    constructor (
        public cameraMode: string, 
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia");
        
    }
}

const hitesh = new Instagram("test", "test", 3);