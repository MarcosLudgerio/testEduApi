class Challenge{
    constructor(id, word, soundUrl, videoUrl, imageUrl){
        this.id = id;
        this.word = word;
        this.soundUrl = soundUrl;
        this.videoUrl = videoUrl;
        this.imageUrl = imageUrl;
    }

    getId(){
        return this.id;
    }

    getWord(){
        return this.word;
    }

    setWord(word){
        this.word = word;
    }

    getSoundUrl(){
        return this.soundUrl;
    }

    setSoundUrl(soundUrl){
        this.soundUrl = soundUrl;
    }
    
    getImageUrl(){
        return this.imageUrl;
    }

    setImageUrl(imageUrl){
        this.imageUrl = imageUrl;
    }
    
    getVideoUrl(){
        return this.videoUrl;
    }

    setVideoUrl(videoUrl){
        this.videoUrl = videoUrl;
    }

}

module.exports = Challenge;