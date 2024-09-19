class Question {
    // YOUR CODE HERE:
    //
    // 1. constructor (text, choices, answer, difficulty)

    // 2. shuffleChoices()
    constructor (text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;
    }

    shuffleChoices () {
        const newChoices = [];
        let randomNumber = 0;
        while (this.choices.length > 0){
            randomNumber = Math.floor(Math.random() * this.choices.length);
            newChoices.push(this.choices[randomNumber]);
            this.choices.splice(randomNumber, 1);
        }
        this.choices = newChoices;
    }

    print(){
        console.log(this.choices);
    }
}