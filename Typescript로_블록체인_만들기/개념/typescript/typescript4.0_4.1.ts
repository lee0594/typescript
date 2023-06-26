/*
class Player{ //player에는 몇몇 property들이 있음
    constructor(
        private firstName:string,
        private lastName:string,
        public nickname:string
    ) {}
}

const nico = new Player("nico","las","니꼬");
*/

//nico.firstName
//:private이므로 이 코드는 작동 x

//nico.nickname
//:public이므로 이 코드는 작동 0

abstract class User{
    constructor(
        private firstName:string,
        private lastName:string,
        public nickname:string,
        protected firstname:string
    ) {}
    getFullName(){
        console.log(this.firstName);
        return `${this.firstName} ${this.lastName}`
    }
    abstract getFirstName():void
}

class Player extends User { //User 상속
    getFirstName(): void {
        //console.log(this.firstName); //private property이므로 사용 불가
        console.log(this.firstname); //protected property이므로 사용 가능
    }
}

const nico = new Player("nico","las","니꼬","nico");

nico.getFullName();
//만약 User에서 private getFullName(){}이라 선언했다면 위 코드는 작동x


//const nico = new User("nico","las","니꼬","nico");
//:추상 클래스는 인스턴스를 만들 수 없으므로 이 코드는 작동하지 않음

//nico.firstname
//: protected 이므로 사용 불가: 클래스 밖에서는 접근할 수 없음