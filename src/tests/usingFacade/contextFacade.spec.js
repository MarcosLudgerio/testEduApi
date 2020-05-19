const Facade =  require('../../facade/Facade');

const objFacade = new Facade();

var urlContext = "";

describe('Context', () => {
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