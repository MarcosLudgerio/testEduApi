const axios = require('axios');
const BASE_URL = "http://educapi.heroku.com";

const Challenge = require('../models/Challange');
const Context = require('../models/Context');
const User = require('../models/User');

class Facade{
    constructor(){
        this.challenges = [];
        this.contexts = [];
        this.users = [];
    }

    async loadChallenges(){
        const responseChallenge = await axios.get(`${BASE_URL}/challenges`);
        this.challenges = responseChallenge.data;
    }
    
    async loadContexts(){
        const responseContext = await axios.get(`${BASE_URL}/contexts`);
        this.contexts = responseContext.data;
    }

    async loadUsers(){
        const responseUsers = await axios.get(`${BASE_URL}/users`);
        this.users = responseUsers.data;
    }

    viewData(){
        console.log(this.challenges);
        console.log(this.contexts);
        console.log(this.users);
    }


    // CONTEXTS FUNCTIONS
    async saveContext(id, name, soundUrl, videoUrl, imageUrl){
        const objContext = new Context(id, name, soundUrl, videoUrl, imageUrl);
        const response = await axios.post(`${BASE_URL}/contexts`, objContext);
        const urlContext = response.headers.location;
        return urlContext;
    }
    getAllContexts(){
        return this.contexts;
    }
    async getContext(urlContext){
        const response = await axios.get(urlContext);
        const context = response.data;
        return context;
    }
    async updateContext(urlContextUpdate, name, soundUrl, videoUrl, imageUrl){
        const objContext = new Context(name, soundUrl, videoUrl, imageUrl);
        const response = await axios.put(urlContextUpdate, objContext);
        const status = response.status;
        return status;

    }
    async deleteContext(urlContext){
        const response = await axios.delete(urlContext);
        const retorna = response.status;
        return retorna;
    }
    

    // CHALLENGES FUNCTIONS
    async saveChallenge(id, word, soundUrl, videoUrl, imageUrl){
        let creator = new User(2, "Marcos Ludgério", "marcos@test.com", "marcos1234");
        let contexts = [];
        const objChallenge = new Challenge(id, word, creator, soundUrl, videoUrl, imageUrl, contexts);
        console.log(objChallenge)
        const response = await axios.post(`${BASE_URL}/challenges`,  objChallenge);
        this.challenges.push(objChallenge);
        const urlChallenge = response.headers.location;
        return urlChallenge;
    }
    
    getAllChallenges(){
        return this.challenges;
    }
    
    async getChallenge(urlChallenge){
        const response = await axios.get(urlChallenge);
        const context = response.data;
        return context;
    }

    async updateChallenge(urlChallenge, id, word, soundUrl, videoUrl, imageUrl){
        let creator = new User(2, "Marcos Ludgério", "marcos@test.com", "marcos1234");
        let contexts = [];

        const objChallenge = new Challenge(id, word, creator, soundUrl, videoUrl, imageUrl, contexts);
        const response = await axios.put(urlChallenge, objChallenge);
        const status = response.status;
        return status;
    }

    async deleteChallenge(urlChallenge){
        const response = await axios.delete(urlChallenge);
        const retorna = response.status;
        return retorna;
    }


    // USERS FUNCTIONS
    async saveUser(id, name, email, password){
        const objUser = new User(id, name, email, password);
        const response = await axios.post(`${BASE_URL}/users`, objUser);
        const urlUser = response.headers.location;
        return urlUser;
    }

    getAllUsers(){
        return this.users;
    }

    async getUser(urlUser){
        const response = await axios.get(urlUser);
        const user = response.data;
        return user;
    }
    
    async updateUser(urlUser, id, name, password, email){
        const objUser = new User(id, name, email, password);
        const response = await axios.post(urlUser, objUser);
        const status = response.status;
        return status;
    }
    async deleteUser(urlUser){
        const response = await axios.delete(urlUser);
        const retorna = response.status;
        return retorna;
    }
}

module.exports = Facade;