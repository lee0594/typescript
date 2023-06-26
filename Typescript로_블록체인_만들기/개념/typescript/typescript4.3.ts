/*
abstract class User {
    constructor(
        protected firstName:string,
        protected lastName:string
    ) {}
    abstract sayHi(name:string):string
    abstract fullName():string
}
//아직까지 아무것도 구현하지 않았고 다른 클래스가 따라야 할 설계도만 제시했음

class Player extends User {
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name: string) {
        return `Hello ${name} . My name is ${this.fullName()}`;
    }
}
*/

interface User {
    firstName:string,
    lastName:string,
    sayHi(name:string):string,
    fullName():string
}

interface Human {
    health:number
}

class Player implements User, Human {
    constructor(
        public firstName:string,
        public lastName:string,
        public health:number
    ){}
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name: string) {
        return `Hello ${name} . My name is ${this.fullName()}`;
    }
}

/*
function makeUser(user: User){ //인터페이스를 argument에 설정하는 경우
    return "hi"
}

makeUser({
    firstName:"nico",
    lastName:"las",
    fullName: ()=>"xx",
    sayHi: (name) => "string"
})
*/

function makeUser(user: User): User { //인터페이스를 리턴하는 경우
    return {
        firstName:"nico",
        lastName:"las",
        fullName: ()=>"xx",
        sayHi: (name) => "string"
    }
}