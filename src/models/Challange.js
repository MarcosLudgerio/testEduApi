class Challenge{
    constructor(id, word, creator, soundUrl, videoUrl, imageUrl, contexts){
        this.id = id;
        this.word = word;
        this.creator = creator;
        this.contexts = contexts;
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

    getCreator(){
        return this.creator;
    }

    setCreator(creator){
        this.creator = creator;
    }
    getContexts(){
        return this.contexts;
    }

    setContexts(contexts){
        this.contexts = contexts;
    }

}

module.exports = Challenge;