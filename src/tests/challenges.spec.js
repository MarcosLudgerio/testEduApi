const request = require('supertest');

const BASE_URL = "http://educapi.herokuapp.com/";

describe('challenge', () => {
  it('testing recovers all challenges', async () => { 
    const response = await request(BASE_URL).get("challenges");
    expect(response.status).toBe(200);
  });
  
  it('testing if you recover a challenge by id', async () => { 
    const response = await request(BASE_URL).get("challenges/37");
    const {id, word} = response.body;
    expect(id).toBe(37);
    expect(word).toBe("Tenis");
  });
  
  it('testing if it recovers a challlenge that does not exist in database', async () => { 
    const response = await request(BASE_URL).get("challenges/1");
    const challenge = response.body;
    expect(challenge.status).toBe(404);
  });

  it('testing sucessfully register challenge', async () => { 
    const response = await request(BASE_URL).post("challenges").send({
        word:"BOLAS",
        soundUrl: "https://www.palcomp3.com/musicalega.mp3",
        videoUrl: "https://www.youtube.com/sVx219203.mp4",
        imageUrl: "https://www.google.com/images/bola_furada.png"
    });
    expect(response.status).toBe(201);
  });

  it('testing sucessfully updates challenge', async () => { 
    const response = await request(BASE_URL).put("challenges/23").send({
      word:"Porta",
      soundUrl:"https://cec-a.akamaihd.net/img-prod/images/standard/porta-pivotante-em-madeira-macica-quartier-eucalipto-210x100cm-natural-cruzeiro-1309907-foto-20180405173925121_225172_A.png",
      videoUrl:"teste2",
      imageUrl:"https://cec-a.akamaihd.net/img-prod/images/standard/porta-pivotante-em-madeira-macica-quartier-eucalipto-210x100cm-natural-cruzeiro-1309907-foto-20180405173925121_225172_A.png"
    });
    expect(response.status).toBe(204);

    const responseChallenge = await request(BASE_URL).get("challenges/23");
    const {word} = responseChallenge.body;

    expect(word).toBe("Porta");
    
  });

  // it('testing sucessfully delete challenge', async () => { 
  //   const response = await request(BASE_URL).delete("challenges/47");
  //   expect(response.status).toBe(204);
  // });
  
});