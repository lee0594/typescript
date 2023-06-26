/*
type PlayerA = {
    name: string
}

type PlayerAA = PlayerA & {
    lastName:string
}

//type PlayerAA = {
//    health:number
//}

const playerA1: PlayerA = { // 이 부분의 코드만 보면 PlayerA가 type인지 interface인지 구분할 수 없음
    name:"nico"
}

const playerA2: PlayerAA = {
    name:"nico",
    lastName:"xxx"
}

interface PlayerB {
    name:string
}

interface PlayerBB extends PlayerB {
    lastName:string
}

interface PlayerBB {
    health:number
}

const playerB1: PlayerB = {
    name:"nico"
}

const playerB2: PlayerBB = {
    name:"nico",
    lastName:"xxx",
    health:1
}
*/

type PlayerA = {
    firstName: string
}

interface PlayerB {
    firstName: string
}

//둘 다 클래스가 상속(implement)해서 쓸 수 있음
//:즉 둘 다 추상 클래스를 대체해서 쓸 수 있음

class User1 implements PlayerA {
    constructor(
        public firstName:string
    ) {}
}

class User2 implements PlayerB {
    constructor(
        public firstName:string
    ) {}
}