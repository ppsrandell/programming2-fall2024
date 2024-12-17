let person = {
    name: "terry",
    age: 23,
    favoriteColor: "green",
    height: "6'8",
    satScore: 400,
    job: "basketball player",
    biggestFear: "inflated basketballs",
    favoriteNumber: 3,
};

console.log(person);
console.log(person["height"]);
console.log(person.biggestFear);
person.age= 25;
console.log(person);

let person2 = {
    name: "katerina",
    age: 18,
    favoriteColor: "black",
    height: "4'11",
    satScore: 1600,
    job: "ceo of united healthcare",
    biggestFear: "being the ceo of united healthcare",
    favoriteNumber: 27,
};

console.log(person2);

console.log("this is " + person.name +". He is " + person.age+ " years old. One day he meets a girl named " + person2.name +". She is " + person2.age + " years old.");
console.log(person.name + " is a " + person.job + " but his biggest fear is " + person.biggestFear + ". " + person2.name + " is the " + person2.job + " but her biggest fear is " + person2.biggestFear + ". They both fear their jobs.");
console.log(person.name + " is " + person.height + ", but " + person2.name + " is " + person2.height + "." + " just like their varying heights, they also have varying sat scores." + person2.name + "'s is a " + person2.satScore + " while " + person.name + "'s is a " + person.satScore + ".");