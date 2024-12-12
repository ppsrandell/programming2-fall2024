//let fastFood = ["burger", "fries", "milkshake", "nuggets"];
//
//for(let i = 0; i < fastFood.length; i++){
//    console.log(fastFood[i]);
//}

//let numbers = [45,23,78];
//let doubled = [];
//for (let i = 0; i<numbers.length; i++){
//    console.log(numbers[i]*2);
//}

//for (let i = 0; i<100;i++){
//    console.log("paige");
//}


let animals = ["dog", "frog", "hog", "warthog", "groundhog"];
for (let i = 0; i < animals.length; i++){
    //animals.push().toUpperCase();
    console.log(animals[i]);
}
animals.pop();
animals.pop();
console.log(animals);

let scores = [30, 40, 50, 55, 60, 70, 80, 90, 95, 100];
let newScore = [scores+5];
for (let i = 0; i < scores.length; i++){
	console.log(newScore[i]);
}