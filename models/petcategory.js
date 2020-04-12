class Pets {
    constructor(breed, age, location) {
        this.breed = breed;
        this.age = age;
        this.location = location;
    }

    describePet() {
        let decription = this.age + " year old " + this.breed + " from " + this.location;
        return decription;
    }
}
module.exports = Pets;