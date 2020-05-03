const request = require('supertest');

const BASE_URL = "http://educapi.herokuapp.com/";

describe('users', () => {
  it('testing connection', async () => { 
  const response = await request(BASE_URL).get("");
   expect(response.status).toBe(200);
  });

  it('testing recovers all users', async () => { 
    const response = await request(BASE_URL).get("users");
    const challenges = response.body;
    expect(challenges).toBeDefined();
  });
  
  it('testing recover user by id', async () => { 
    const response = await request(BASE_URL).get("users/5");
    const challenge = response.body;
    expect(challenge).toBeDefined();
  });
  
  it('testing if recover status 404 if user not exist in database', async () => { 
    const response = await request(BASE_URL).get("users/100");
    const user = response.body;
    console.log(response.body)
    expect(user.status).toBe(404);
  });

  it('testing sucessfully register users', async () => { 
    const response = await request(BASE_URL).post("users").send({
        name:"Contexto teste",
        email:"teste@teste.com",
        password:"passwordtest",
        challenges: []
    });
    expect(response.status).toBe(201);
  });

  it('testing sucessfully updates user', async () => { 
    const response = await request(BASE_URL).put("users/5").send({
        name:"Contexto atualizado no teste",
        email:"novoemail@email.com",
        password:"novasenha",
        challenges: []
    });
    expect(response.status).toBe(204);
  });

  // it('testing sucessfully delete user', async () => { 
  //   const response = await request(BASE_URL).delete("users/89");
  //   expect(response.status).toBe(204);
  // });
  
});