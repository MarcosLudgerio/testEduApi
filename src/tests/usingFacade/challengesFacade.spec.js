const Facade =  require('../../facade/Facade');

const objFacade = new Facade();

var urlchallenge = "";

describe('challenge', () => {
  beforeEach(async () => {
    await objFacade.loadChallenges();
  });
  it('testing challenges features', async () => { 
    let allChallengesBefore = await objFacade.getAllChallenges();
    let totalChallenges = allChallengesBefore.length;
    
    urlChallenge = await objFacade.saveChallenge(null, "Mesa de jantar", "sound.mp3", "video.mp4", "imagem.jpg"); // PARAMS: name, soundUrl, videoUrl, imageUrl
    
    allChallenges = await objFacade.getAllChallenges();

    expect(allChallenges.length).toBe(totalChallenges + 1);
    
    const { name, soundUrl, imageUrl, videoUrl } = objFacade.getChallenge(urlchallenge);

    expect(name).toBe("Mesa de jantar");
    expect(soundUrl).toBe("sound.mp3");
    expect(imageUrl).toBe("video.mp4");
    expect(videoUrl).toBe("imagem.jpg");

    var status = await objFacade.updateChallenge(urlchallenge, null, "nome alterado", "alterado.mp3", "videoNovo.mp4", "novaImagem") // urlChallenge, id, word, soundUrl, videoUrl, imageUrl

    expect(status).toBe(204);

    const challengeUpdate = objFacade.getChallenge(urlchallenge);
    expect(challengeUpdate.name).toBe("nome alterado");
    expect(challengeUpdate.soundUrl).toBe("alterado.mp3");
    expect(challengeUpdate.imageUrl).toBe("videoNovo.mp4");
    expect(challengeUpdate.videoUrl).toBe("novaImagem.jpg");

    status = await objFacade.deleteChallenge(urlchallenge);
    expect(status).toBe(204);
  });
});