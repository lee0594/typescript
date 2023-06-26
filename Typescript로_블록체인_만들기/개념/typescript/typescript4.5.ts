interface SStorage<T> {
    [key:string] : T
} //[key:string]처럼 쓰면 key가 제한되지 않은 오브젝트를 정의하게 해줌
//이게 얼마나 많은진 모르지만 무슨 타입인지는 알고 있음

class LocalStorage<T> {
    private storage: SStorage<T> = {}
    set(key:string, value:T){
        if(this.storage[key] !== undefined){
            return console.log(`Error: ${key}가 이미 존재합니다.`)
            }
        this.storage[key] = value;
    }
    remove(key:string){
        delete this.storage[key];
    }
    get(key:string):T {
        return this.storage[key];
    }
    clear(){
        this.storage = {}
    }
}

const stringsStorage = new LocalStorage<string>();

stringsStorage.get("ket");
stringsStorage.set("hello","how are you");

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get("xxx");
booleansStorage.set("hello",true);

//다형성이 구현되었음