const Facade =  require('../../facade/Facade');

const objFacade = new Facade();

var urlChallenge = "";

describe('challenge', () => {
  beforeEach(async () => {
    await objFacade.loadChallenges();
  });
  it('testing challenges features', async () => { 
    let allChallengesBefore = await objFacade.getAllChallenges();
    let totalChallenges = allChallengesBefore.length;

    urlChallenge = await objFacade.saveChallenge(null, "Mesa de jantar", "sound.mp3", "video.mp4", "imagem.jpg"); // PARAMS: word, soundUrl, videoUrl, imageUrl
    
    allChallenges = await objFacade.getAllChallenges();
    expect(allChallenges.length).toBe(totalChallenges + 1);

    const { word } = await objFacade.getChallenge(urlChallenge);
    expect(word).toBe("Mesa de jantar");

    var status = await objFacade.updateChallenge(urlChallenge, null, "nome alterado", "alterado.mp3", "videoNovo.mp4", "novaImagem") // urlChallenge, id, word, soundUrl, videoUrl, imageUrl
    expect(status).toBe(204);


    const challengeUpdated = await objFacade.getChallenge(urlChallenge);
    expect(challengeUpdated.word).toBe("nome alterado");

    status = await objFacade.deleteChallenge(urlChallenge);
    expect(status).toBe(204);
  });
});