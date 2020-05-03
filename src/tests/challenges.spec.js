const request = require('supertest');

const BASE_URL = "http://educapi.herokuapp.com/";

describe('challenge', () => {
  it('testing connection', async () => { 
  const response = await request(BASE_URL).get("");
   expect(response.status).toBe(200);
  });

  it('test getAllChallenges if equals a size 32', async () => { 
    const response = await request(BASE_URL).get("challenges");
    const challenges = response.body;
    expect(challenges).toBeDefined();
  });
  
  it('test getOneChallenge by id', async () => { 
    const response = await request(BASE_URL).get("challenges/32");
    const challenge = response.body;
    expect(challenge).toBeDefined();
  });
  
  it('test getOneChallenge by id return status 404 if id is null or notExist', async () => { 
    const response = await request(BASE_URL).get("challenges/1");
    const challenge = response.body;
    expect(challenge.status).toBe(404);
  });

  it('test if post challenge is sucess', async () => { 
    const response = await request(BASE_URL).post("challenges").send({
        word:"teste",
        soundUrl:null,
        videoUrl: null,
        imageUrl:null
    });
    expect(response.status).toBe(201);
  });

  it('test if put challenge is sucess', async () => { 
    const response = await request(BASE_URL).put("challenges/50").send({
        word: "alterado a partir do teste",
        soundUrl: "https:///www.palcomp3.com/music/natiruts/andei_so.mp3",
        videoUrl: "https:///www.youtube.com/vid02dc21/",
        imageUrl: "https:///www.google.com/images/23f1g23beda3478fa.jpg"
    });
    expect(response.status).toBe(204);
  });

  // it('test if deleting challenge with sucess', async () => { 
  //   const response = await request(BASE_URL).delete("challenges/47");
  //   expect(response.status).toBe(204);
  // });
  
});