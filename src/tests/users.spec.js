const request = require('supertest');

const BASE_URL = "http://educapi.herokuapp.com/";

describe('users', () => {
  it('testing recovers all users', async () => { 
    const response = await request(BASE_URL).get("users");
    expect(response.status).toBe(200);
  });
  
  it('testing recover user by id', async () => { 
    const response = await request(BASE_URL).get("users/5");
    const {id, name, email, password} = response.body;
    expect(id).toBe(5);
    expect(name).toBe("novo nome");
    expect(email).toBe("novoemail@email.com");
    expect(password).toBe("novasenha");
  });
  
  it('testing if recover status 404 if user not exist in database', async () => { 
    const response = await request(BASE_URL).get("users/200");
    const user = response.body;
    expect(user.status).toBe(404);
  });

  it('testing sucessfully register users', async () => { 
    const response = await request(BASE_URL).post("users").send({
        name:"Marcos Ludgério",
        email:"teste@teste.com",
        password:"passwordtest",
        challenges: [
          {
            id: 42,
            word: "Tijolo",
            soundUrl: null,
            videoUrl: "https://www.jln.com.br/wp-content/uploads/2018/07/Tijolo-Com-8-Furos-19-X-19-X-09-img1.jpg",
            imageUrl: "https://www.jln.com.br/wp-content/uploads/2018/07/Tijolo-Com-8-Furos-19-X-19-X-09-img1.jpg"
          },
          {
            id: 43,
            word: "Martelo",
            soundUrl: null,
            videoUrl: "https://www.ultramaquinas.com.br/files/_fotos/pequena/4370fp1.jpg",
            imageUrl: "https://www.ultramaquinas.com.br/files/_fotos/pequena/4370fp1.jpg"
          },
          {
            id: 44,
            word: "Telha",
            soundUrl: null,
            videoUrl: "https://www.breithaupt.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/471.jpg",
            imageUrl: "https://www.breithaupt.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/4/7/471.jpg"
          },
          {
            id: 45,
            word: "Escada",
            soundUrl: null,
            videoUrl: "https://lojamor.vteximg.com.br/arquivos/ids/169558-400-400/005102-Escada-Alum-4-Deg.jpg?v=636924842796300000",
            imageUrl: "https://lojamor.vteximg.com.br/arquivos/ids/169558-400-400/005102-Escada-Alum-4-Deg.jpg?v=636924842796300000"
          }
        ]
    });
    expect(response.status).toBe(201);
  });

  it('testing sucessfully updates user', async () => { 
    await request(BASE_URL).put("users/5").send({
        name:"novo nome",
        email:"novoemail@email.com",
        password:"novasenha",
        challenges: []
    });

    const responseUpdated = await request(BASE_URL).get("users/5");
    const {id, name, email, password} = responseUpdated.body;
    
    expect(id).toBe(5);
    expect(name).toBe("novo nome");
    expect(email).toBe("novoemail@email.com");
    expect(password).toBe("novasenha");
  });

  // it('testing sucessfully delete user', async () => { 
  //   const response = await request(BASE_URL).delete("users/89");
  //   expect(response.status).toBe(204);
  // });
  
});