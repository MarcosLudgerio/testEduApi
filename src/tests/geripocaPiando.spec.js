const Facade =  require('../facade/Facade');

const objFacade = new Facade();

var urlContext = "";
var urlChallenge = "";
var urlUser = "";
describe('users', () => {
    beforeEach(async () => {
        await objFacade.loadUsers();
    });

    it('testing users features', async () => { 
      let allUsersBefore = await objFacade.getAllUsers();
      let totalUsers = allUsersBefore.length;

      urlUser = await objFacade.saveUser(null, "User test", "user@test.com", "test12345"); // PARAMS: id, name, email, password

      allUsers = await objFacade.getAllUsers();

      expect(allUsers.length).toBe(totalUsers + 1);

      const { id, name, email } = objFacade.getUser(urlUser);

      expect(name).toBe("User test");
      expect(email).toBe("user@test.com");

      var status = await objFacade.updateUser(urlUser, id, "user alterado", "email@user.com", "54321test") // PARAMS: urlUser, id, name, password, email

      expect(status).toBe(204);

      const UserUpdate = objFacade.getUser(urlUser);

      expect(UserUpdate.id).toBe(id);
      expect(UserUpdate.name).toBe("user alterado");
      expect(UserUpdate.email).toBe("email@user.com");
      expect(UserUpdate.password).toBe("54321test");

      status = await objFacade.deleteUser(urlUser);
      expect(status).toBe(204);
    });
});

describe('contexts', () => {  
     beforeEach( async () => {
        await objFacade.loadContexts();
    });

    it('testing contexts features', async () => { 
      let allContextsBefore = await objFacade.getAllContexts();
      let totalContexts = allContextsBefore.length;
      
      urlContext = await objFacade.saveContext(null, "Mesa de jantar", "sound.mp3", "video.mp4", "imagem.jpg"); // PARAMS: id, name, soundUrl, videoUrl, imageUrl
      
      allContexts = await objFacade.getAllContexts();

      expect(allContexts.length).toBe(totalContexts + 1);
      
      const { name, soundUrl, imageUrl, videoUrl } = objFacade.getContext(urlContext);

      expect(name).toBe("Mesa de jantar");
      expect(soundUrl).toBe("sound.mp3");
      expect(imageUrl).toBe("video.mp4");
      expect(videoUrl).toBe("imagem.jpg");

      var status = await objFacade.updateContext(urlContext, null, "nome alterado", "alterado.mp3", "videoNovo.mp4", "novaImagem") // PARAMS: urlContextUpdate, name, soundUrl, videoUrl, imageUrl

      expect(status).toBe(204);

      const ContextUpdate = objFacade.getContext(urlContext);
      expect(ContextUpdate.name).toBe("nome alterado");
      expect(ContextUpdate.soundUrl).toBe("alterado.mp3");
      expect(ContextUpdate.imageUrl).toBe("videoNovo.mp4");
      expect(ContextUpdate.videoUrl).toBe("novaImagem.jpg");

      status = await objFacade.deleteContext(urlContext);
      expect(status).toBe(204);
    });
});

describe('challenges', () => {  
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