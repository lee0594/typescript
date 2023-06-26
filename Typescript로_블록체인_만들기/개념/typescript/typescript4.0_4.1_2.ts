type Words = {
    [key:string]: string //words 타입이 string만을 property로 가지는 오브젝트라는 걸 말해준 것
} //꼭 key라고 안쓰고 x등으로 써도 됨

/*
let dict :Words = {
    "potato": "food",
    "ㅇ":""
}
*/


class Dict{ 
    private words: Words //constructor에서 직접 초기화되지 않는 property
    //constructor가 words를 지정해주기를 원하지 않기 때문
    //:우리는 words를 initializer 없이 선언해주고 constructor에서 수동으로 초기화시켜줄 것
    constructor(){
        this.words = {}
    }
    add(word:Word){ //class를 type처럼 사용 가능
        if (this.words[word.term] === undefined) //주어진 단어가 아직 사전에 존재하지 않을 경우
            this.words[word.term] = word.def;
    }
    //add: 단어를 추가하기 위한 메소드
    def(term:string){ //term을 사용해 word를 찾는 메소드
        //!!!add 함수에서 word 파라미터가 Word 클래스의 인스턴스이기를 원하면 이렇게 class를 type으로 사용 가능!!!
        return this.words[term];
    }
    static hello() {
        return "hello";
    }
}

/*class Word {
    constructor(
        public term:string,
        public def :string
    ) {}
}*/

class Word {
    constructor(
        public readonly term:string,
        public readonly def :string
    ) {}
}

const kimchi = new Word("kimchi","한국의 음식");

//kimchi.def = "xxx";
//현재는 위 코드가 가능하지만 누군가 단어의 내용을 수정하게 하고 싶지 않음(현재는 term과 def가 public이기 때문에 가능)
//property를 readonly로 만들어주면 됨

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");

Dict.hello();