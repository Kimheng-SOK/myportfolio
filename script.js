class Counter{
    number = 0;
    constructor(){
        this.number = 0;
    }

    increment(){
        this.number++;
        console.log(this.number);
    }

    decrement(){
        this.number--;
        console.log(this.number);
    }

    reset(){
        this.number = 0;
        console.log(this.number);
    }

    getNumber(){
        return this.number;
        console.log(this.number);
    }
}