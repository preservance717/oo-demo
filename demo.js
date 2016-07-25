'use strict';

class Animal {
    constructor() {
        this.type = 'animal';
    }

    says(say) {
        console.log(this.type + ' says ' + say);
    }
}

let animal = new Animal();
animal.says('Hello');

class Bird extends Animal {
    constructor() {
        super();
        this.type = 'bird';
    }
}

let bird = new Bird();
bird.says('hello');