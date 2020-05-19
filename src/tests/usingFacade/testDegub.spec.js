const Facade =  require('../../facade/Facade');

const objFacade = new Facade();

var urlchallenge = "";

describe('challenge', () => {
    beforeEach(async () => {
        await objFacade.loadChallenges();
    });
    it('testing challenges features', () => { 
        urlChallenge = objFacade.getAllChallenges();
        console.log(urlchallenge);
  });
});