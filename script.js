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

const counter = new Counter();

function updateDisplay(){
    document.getElementById("display").innerHTML = counter.getNumber();
}

document.getElementById("btn1").addEventListener("click", function(){
    counter.decrement();
    updateDisplay();
});

document.getElementById("btn2").addEventListener("click", function(){
    counter.reset();
    updateDisplay();
});

document.getElementById("btn3").addEventListener("click", function(){
    counter.increment();
    updateDisplay();
});

updateDisplay();