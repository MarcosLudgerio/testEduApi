const request = require('supertest');

const BASE_URL = "http://educapi.herokuapp.com/";

describe('challenge', () => {
  it('testing the connection', async () => { 
  const response = await request(BASE_URL).get("");
   expect(response.status).toBe(200);
  });

  it('testing recovers all challenges', async () => { 
    const response = await request(BASE_URL).get("challenges");
    const challenges = response.body;
    expect(challenges).toBeDefined();
  });
  
  it('testing if you recover a challenge by id', async () => { 
    const response = await request(BASE_URL).get("challenges/51");
    const {id, word} = response.body;
    expect(id).toBe(51);
    expect(word).toBe("challenge teste");
  });
  
  it('testing if it recovers a challlenge that does not exist in database', async () => { 
    const response = await request(BASE_URL).get("challenges/1");
    const challenge = response.body;
    expect(challenge.status).toBe(404);
  });

  it('testing sucessfully register challenge', async () => { 
    const response = await request(BASE_URL).post("challenges").send({
        word:"teste",
        soundUrl:null,
        videoUrl: null,
        imageUrl:null
    });
    expect(response.status).toBe(201);
  });

  it('testing sucessfully updates challenge', async () => { 
    const response = await request(BASE_URL).put("challenges/51").send({
      word:"challenge teste",
      soundUrl:"sound test",
      videoUrl:"video test",
      imageUrl:"image test"
    });
    expect(response.status).toBe(204);
  });

  // it('testing sucessfully delete challenge', async () => { 
  //   const response = await request(BASE_URL).delete("challenges/47");
  //   expect(response.status).toBe(204);
  // });
  
});