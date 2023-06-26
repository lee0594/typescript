/*type Player = { //ts에게 object의 모양을 알려주는(묘사하는) 것
    nickname:string,
    healthBar:number
}*/

/*
type Nickname = string; // 이 부분이 type alias
type Health = number;
type Friends = Array<string>;

type Player = {
    nickname:Nickname,
    healthBar:Health
}

const nico :  Player = {
    nickname:"nico",
    healthBar:10
}

type Food = string;

const kimchi:Food = "delicious";
*/

/*
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10

//team이 일반적인 string이 아니라 특정 string이 되도록 하고 싶음
//위와 같은 식으로 concrete type의 특정 값을 쓸 수도 있음

type Player = {
    nickname:string,
    team:Team,
    health: Health
}

const nico :  Player = {
    nickname:"nico",
    team: "yellow",
    health: 10
}
*/

/*
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10

//interface Hello = string
//이런 건 작동하지 않음

type Player = {
    nickname:string,
    team:Team,
    health: Health
}

interface Person {
    nickname:string,
    team:Team,
    health: Health
}

const nico :  Player = {
    nickname:"nico",
    team: "yellow",
    health: 10
}
*/

/*
//type으로 구현한 경우

type User = {
    name:string
}

type Player = User & { //&: and 의미
}

const nico : Player = {
    name: "nico"
}
*/

/*
//인터페이스로 구현한 경우

interface User {
    readonly name:string
}

interface Player extends User {
}

const nico : Player = {
    name: "nico"
}

//nico.name = "lalala"; //name을 readonly로 설정하면 error가 뜸
*/

//interface: property들을 축적시킬 수 있음
//세 개의 interface를 만든 것

interface User {
    name:string
}

interface User {
    lastName:string
}

interface User {
    health:number
}

const nico: User = { //위 세 개를 다 가지고 있음=>ts가 알아서 하나로 합쳐줌
    name:"nico",
    lastName:"n",
    health:10
}