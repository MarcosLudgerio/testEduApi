const request = require('supertest');

const BASE_URL = "http://educapi.herokuapp.com/";

describe('contexts', () => {
  it('testing recovers all contexts', async () => { 
    const response = await request(BASE_URL).get("contexts");
    expect(response.status).toBe(200);
  });
  
  it('testing recover context by id', async () => { 
    const response = await request(BASE_URL).get("contexts/26");
    const {id, name} = response.body;
    expect(id).toBe(26);
    expect(name).toBe("contexto alterado");
  });
  
  it('testing if recover status 404 if context not exist in database', async () => { 
    const response = await request(BASE_URL).get("contexts/1");
    const context = response.body;
    expect(context.status).toBe(404);
  });

  it('testing sucessfully register context', async () => { 
    const response = await request(BASE_URL).post("contexts").send({
        name:"CONSTRUÇÃO",
        imageUrl: "https://google.com/images/pedreiro.png",
        soundUrl: "https://4shared.com/sounds/cimentoDeChinela.mp3",
        videoUrl: "https://youtube.com/VID/danca_das_cadeiras.mp4"
    });
    expect(response.status).toBe(201);
  });

  it('testing sucessfully updates context', async () => { 
    const response = await request(BASE_URL).put("contexts/26").send({
        name: "COMUNIDADE",
        imageUrl: "https:///www.google.com/images/23f1g23beda3478fa1.jpg",
        soundUrl: "https:///www.palcomp3.com/music/natiruts/andei_so.mp3",
        videoUrl: "https:///www.youtube.com/vid02dc21/"
    });
    expect(response.status).toBe(204);

    const responseAtual = await request(BASE_URL).get("contexts/26");
    const {name, imageUrl, soundUrl, videoUrl} = responseAtual.body;

    expect(name).toBe("COMUNIDADE");
    expect(imageUrl).toBe("https:///www.google.com/images/23f1g23beda3478fa1.jpg");
    expect(soundUrl).toBe("https:///www.palcomp3.com/music/natiruts/andei_so.mp3");
    expect(videoUrl).toBe("https:///www.youtube.com/vid02dc21/");


  });

  // it('testing sucessfully delete context', async () => { 
  //   const response = await request(BASE_URL).delete("contexts/47");
  //   expect(response.status).toBe(204);
  // });
  
});