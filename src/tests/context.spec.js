const request = require('supertest');

const BASE_URL = "http://educapi.herokuapp.com/";

describe('contexts', () => {
  it('testing recovers all contexts', async () => { 
    const response = await request(BASE_URL).get("contexts");
    expect(response.status).toBe(200);
  });
  
  it('testing recover context by id', async () => { 
    const response = await request(BASE_URL).get("contexts/22");
    const {id, name} = response.body;
    expect(id).toBe(22);
    expect(name).toBe("planetas");
  });
  
  it('testing if recover status 404 if context not exist in database', async () => { 
    const response = await request(BASE_URL).get("contexts/1");
    const context = response.body;
    expect(context.status).toBe(404);
  });

  it('testing sucessfully register context', async () => { 
    const response = await request(BASE_URL).post("contexts").send({
        name:"parque de diversões",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg_Sy9i5dqOVGZcUpP078oQsWydrMrjfh_G4W2jQRlsr0DTHLG&usqp=CAU",
        soundUrl: "",
        videoUrl: ""
    });
    expect(response.status).toBe(201);
  });

  it('testing sucessfully updates context', async () => { 
    const response = await request(BASE_URL).put("contexts/141").send({
        name: "Construção",
        imageUrl: "https://www.cimentoitambe.com.br/wp-content/uploads/2020/01/construc%CC%A7a%CC%83ocivil_2020.jpg",
        soundUrl: "sem audio",
        videoUrl: "sem video",
    });
    expect(response.status).toBe(204);

    const responseAtual = await request(BASE_URL).get("contexts/141");
    const {name, imageUrl, soundUrl, videoUrl} = responseAtual.body;

    expect(name).toBe("Construção");
    expect(imageUrl).toBe("https://www.cimentoitambe.com.br/wp-content/uploads/2020/01/construc%CC%A7a%CC%83ocivil_2020.jpg");
    expect(soundUrl).toBe("sem audio");
    expect(videoUrl).toBe("sem video");


  });

  it('testing sucessfully delete context', async () => { 
    const response = await request(BASE_URL).delete("contexts/151");
    expect(response.status).toBe(204);
  });
  
});