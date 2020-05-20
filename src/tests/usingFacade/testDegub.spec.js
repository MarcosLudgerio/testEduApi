const Facade =  require('../../facade/Facade');

const objFacade = new Facade();

var urlChallenge = "";




describe('challenge', () => {
    it('testing challenges features' ,async () => { 
        urlChallenge = await objFacade.saveChallenge(null, "Mesa de jantar",{} ,"sound.mp3", "video.mp4", "imagem.jpg", []);
        console.log(urlChallenge)
  });
});