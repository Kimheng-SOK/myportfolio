class Color{
    colorType = '';
    records = [];

    constructor(){
        // this.colorType
        this.records = [];
        this.defaultColor = "#2336FB"; // Default color
        this.colors = ["#2336FB", "#497068", "#599F96", "#1544C7", "#3542AF", "#15FCA9", "#10EF55", "#722031"];
    }

    generate(){
        const color = this.colors[this.getRandomNumber()];
        this.records.push(color);
        console.log("Generated color: " + color);
        return color;
    }

    getRandomNumber(){
        const randomIndex = Math.floor(Math.random() * this.colors.length);
        console.log("Random number generated:", randomIndex);
        return randomIndex;
    }

    getRecords(){
        return this.records;
    }

    reset(){
        this.records = [];
        console.log("Record cleared: " + this.records);
    }
}

const color = new Color();

function updateDisplay(newColor){
    document.getElementById("display_text").innerText = newColor;
    document.getElementById("display_text").style.color = newColor;
    document.getElementById("bgColor").style.backgroundColor = newColor;
}

document.getElementById("btn2").addEventListener("click", function(){
    color.reset();
    updateDisplay(color.defaultColor);
});

document.getElementById("btn1").addEventListener("click", function(){
    console.log(color.getRecords());
    const newColor = color.generate();
    updateDisplay(newColor);
});

updateDisplay(color.defaultColor);