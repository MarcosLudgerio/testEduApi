class Context{
    constructor(id, name, soundUrl, videoUrl, imageUrl){
        this.id = id;
        this.name = name;
        this.soundUrl = soundUrl;
        this.videoUrl = videoUrl;
        this.imageUrl = imageUrl;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
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
    
    getChallenges(){
        return this.challenges;
    }

    setChallenges(challenges){
        this.challenges = challenges;
    }

}

module.exports = Context;