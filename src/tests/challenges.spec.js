const request = require('supertest');

const BASE_URL = "http://educapi.herokuapp.com/";

describe('challenge', () => {
  it('testing the connection', async () => { 
  const response = await request(BASE_URL).get("");
   expect(response.status).toBe(200);
  });

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
    const response = await request(BASE_URL).put("challenges/51").send({
      word:"PORTA",
      soundUrl:"teste2",
      videoUrl:"teste2",
      imageUrl:"teste3"
    });
    expect(response.status).toBe(204);

    const responseChallenge = await request(BASE_URL).get("challenges/51");
    const challengeAtualizado = responseChallenge.body;

    expect(challengeAtualizado.word).toBe("PORTA");
    
  });

  // it('testing sucessfully delete challenge', async () => { 
  //   const response = await request(BASE_URL).delete("challenges/47");
  //   expect(response.status).toBe(204);
  // });
  
});