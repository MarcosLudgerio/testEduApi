const Facade =  require('../../facade/Facade');

const objFacade = new Facade();

var urlUser = "";

describe('User', () => {
    beforeEach(async () => {
        await objFacade.loadUsers();
    });

  it('testing users features', async () => { 
    let allUsersBefore = await objFacade.getAllUsers();
    let totalUsers = allUsersBefore.length;
    
    urlUser = await objFacade.saveUser(null, "User test", "user@test.com", "test12345"); // PARAMS: id, name, email, password
    
    allUsers = await objFacade.getAllUsers();

    expect(allUsers.length).toBe(totalUsers + 1);
    
    const { id, name, email } = objFacade.getUser(urlUser);

    expect(name).toBe("User test");
    expect(email).toBe("user@test.com");

    var status = await objFacade.updateUser(urlUser, id, "user alterado", "email@user.com", "54321test") // PARAMS: urlUser, id, name, password, email

    expect(status).toBe(204);

    const UserUpdate = objFacade.getUser(urlUser);
    expect(UserUpdate.id).toBe(id);
    expect(UserUpdate.name).toBe("user alterado");
    expect(UserUpdate.email).toBe("email@user.com");
    expect(UserUpdate.password).toBe("54321test");

    status = await objFacade.deleteUser(urlUser);
    expect(status).toBe(204);
  });
});