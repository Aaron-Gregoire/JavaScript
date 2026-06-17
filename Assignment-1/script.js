// word list for each column

//0 who
//1 verb
//2 adjective
//3 animal
//4 location

const wordlists = [
    ["the turkey", "mom", "dad", "the dog", "my teacher", "the elephant", "the cat"],
    ["sat on", "ate", "danced with", "saw", "doesnt like", "kissed"],
    ["funny", "scary", "goofy", "slimy", "barking", "fat"],
    ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"],
    ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]
];

//index for the columns set to 0
let index = [0, 0, 0, 0, 0];

//query selector selects all column buttons
const buttons = document.querySelectorAll(".col button");

//cycle word function

