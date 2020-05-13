const request = require('supertest');

const BASE_URL = "http://educapi.herokuapp.com/";

describe('users', () => {
  it('testing connection', async () => { 
  const response = await request(BASE_URL).get("");
   expect(response.status).toBe(200);
  });

  it('testing users features', async () => { 
    let response = await request(BASE_URL).get("users");
    const  totalUsers = response.body.length;
    expect(response.body.length).toBe(totalUsers);
    await request(BASE_URL).post("users").send({
        name:"Marcos",
        email:"marcos@gmail.com",
        password:"123456789",
    });
    response = await request(BASE_URL).get("users");
    expect(response.body.length).toBe(totalUsers + 1);
    await request(BASE_URL).post("users").send({
        name:"Raimundo",
        email:"raimundo@gmail.com",
        password:"passwordtest",
    });
    response = await request(BASE_URL).get("users");
    expect(response.body.length).toBe(totalUsers + 2);
    const userId = 1;
    await request(BASE_URL).put(`users/${userId}`).send({
        name:"Raimundo Marcos",
        email:"teste2@teste2.com",
        password:"passwordte",
    });
    response = await request(BASE_URL).get(`users/${userId}`);
    expect(response.body.id).toBe(userId);
    expect(response.body.name).toBe("Raimundo Marcos");
    response = await request(BASE_URL).get(`users`);
    expect(response.body.length).toBe(totalUsers + 2);
  });
});

describe('contexts', () => {  
    it('testing contexts features', async () => { 
      let response = await request(BASE_URL).get("contexts");
      const totalContexts = response.body.length;
      expect(response.body.length).toBe(totalContexts);
      await request(BASE_URL).post("contexts").send({
        name: "ESCOLA",
        imageUrl: "https:///www.google.com/images/23f1g23beda3478fa1.jpg",
        soundUrl: "https:///www.palcomp3.com/music/natiruts/andei_so.mp3",
        videoUrl: "https:///www.youtube.com/vid02dc21/"
    });
      response = await request(BASE_URL).get("contexts");
      expect(response.body.length).toBe(totalContexts + 1);
      await request(BASE_URL).post("contexts").send({
        name: "PARQUE",
        imageUrl: "https:///www.google.com/images/parqueDeDiversao.jpg",
        soundUrl: "https:///www.palcomp3.com/music/natiruts/so_hoje.mp3",
        videoUrl: "https:///www.youtube.com/vid02dc21.mp4"
    });
      response = await request(BASE_URL).get("contexts");
      expect(response.body.length).toBe(totalContexts + 2);

      response = await request(BASE_URL).get(`contexts/154`);
      const contextActual = response.body;
      await request(BASE_URL).put(`contexts/${contextActual.id}`).send({
        name: "CIRCO",
        imageUrl: "https:///www.google.com/images/beto_carreiro.jpg",
        soundUrl: "https:///www.palcomp3.com/music/natiruts/madagascar.mp3",
        videoUrl: "https:///www.youtube.com/video/palhaco_assassino.mp4"
    });
    response = await request(BASE_URL).get(`contexts/${contextActual.id}`);
    const novoContext = response.body;  
    expect(novoContext.id).toBe(contextActual.id);
    expect(novoContext.name).toBe("CIRCO");
    });
});

describe('challenges', () => {  
    it('testing challenges features', async () => { 
      let response = await request(BASE_URL).get("challenges");
      const totalChallenges = response.body.length;
      expect(response.body.length).toBe(totalChallenges);
      await request(BASE_URL).post("challenges").send({
        word:"COLHER",
        soundUrl:null,
        videoUrl: null,
        imageUrl:null
    });
      response = await request(BASE_URL).get("challenges");
      expect(response.body.length).toBe(totalChallenges + 1);
      
      response = await request(BASE_URL).get(`challenges/192`);
      const challengeAtual = response.body;

      await request(BASE_URL).put(`challenges/${challengeAtual.id}`).send({
        word: "FUTEBOL",
        soundUrl: "https:///www.palcomp3.com/music/skank/partida-de-futebol.mp3",
        videoUrl: "https:///www.youtube.com/fantastico/bola_murcha_2002.3gp",
        imageUrl: "https:///www.google.com/images/gramado_verde_maracana.jpg"
    });
    response = await request(BASE_URL).get(`challenges/${challengeAtual.id}`);
    const novoChallenge = response.body;
    expect(challengeAtual.id).toBe(novoChallenge.id);
    expect(novoChallenge.word).toBe("FUTEBOL");
    });
});