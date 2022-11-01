class User{
    constructor(id, name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getEmail(){
        return this.email;
    }

    setEmail(email){
        this.email = email;
    }

    getPassword(){
        return this.password;
    }

    setPassword(password){
        this.password = password;
    }

    getChallenges(){
        return this.challenges;
    }

    setChallenges(challenges){
        this.challenges = challenges;
    }

    getContexts(){
        return this.contexts;
    }

    setContexts(contexts){
        this.contexts = contexts;
    }
}

module.exports = User;