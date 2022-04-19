const Employee = require('./Employee');

class Developer extends Employee {
    constructor(name, id, email, github){
        super (name, id, email, github);

        this.github=github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Developer"
    }
};

module.exports = Developer;