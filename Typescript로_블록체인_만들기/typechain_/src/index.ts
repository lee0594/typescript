import crypto from "crypto";

interface BlockShape{
    hash: string;
    prevHash: string;
    height: number;
    data: string
}

class Block implements BlockShape{
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ) { //hash 변수 초기화
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash:string, height:number, data:string){
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

class Blockchain {
    private blocks: Block[];
    constructor(){
        this.blocks = [];
    }
    private getPrevHash(){
        if (this.blocks.length === 0) //첫번째 해쉬가 없는 경우
            return ""
        else //마지막 block의 해쉬값 return
            return this.blocks[this.blocks.length-1].hash;
    }
    public addBlock(data:string){
        const newBlock = new Block(this.getPrevHash(), this.blocks.length+1, data);
        this.blocks.push(newBlock);
    }
    /*public getBlocks() { //block에 접근할 수 있는 함수
        //return this.blocks;
        return [...this.blocks];
    }*/
    public getBlocks() : readonly Block[] {
        return this.blocks;
    }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");
blockchain.addBlock("Fourth one");

//blockchain.getBlocks().push(new Block("xxxx", 1111, "HACKEDDDDD"));
// 블록체인의 state와 연결되어있지 않은 별개의 배열에 push했으므로 해킹되지 않음

console.log(blockchain.getBlocks());