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
    console.log(animals[i]);
	let animals_uCase = animals[i].toUpperCase();
	console.log(animals_uCase);
}
animals.pop();
animals.pop();

let scores = [30, 40, 50, 55, 60, 70, 80, 90, 95, 100];

for (let i = 0; i < scores.length; i++){
	let newScore = [scores[i]+5];
	if (score [i] < 50){
		score.splice(i, 1, "retake this one");
	}
}
console.log(newScore[i]);
