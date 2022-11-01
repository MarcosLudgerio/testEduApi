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
    
    const { name } = await objFacade.getContext(urlContext);
    expect(name).toBe("Mesa de jantar");

    var status = await objFacade.updateContext(urlContext, null, "nome alterado", "alterado.mp3", "videoNovo.mp4", "novaImagem") // PARAMS: urlContextUpdate, name, soundUrl, videoUrl, imageUrl
    expect(status).toBe(204);

    const ContextUpdate = await objFacade.getContext(urlContext);
    expect(ContextUpdate.name).toBe("nome alterado");

    status = await objFacade.deleteContext(urlContext);
    expect(status).toBe(204);
  });
});