//let tasks = ["hw", "go to store", "eat dinner"];
////grab first items
//alert(tasks[0]);
//
//// change first item
//tasks[0]="make dinner";
//alert(tasks);
//
//// add item to the end
//tasks.push("shower");
//alert(tasks);
//
//// remove the item at the end
//tasks.pop();
//alert(tasks);
//
//tasks.splice(2,0,"cartwheel");
//alert(tasks);

//let groceries =["milk", "bananas", "pastry", "eggs"];
//groceries.splice(1,1,"ice cream");
//
//groceries.splice(0,1);
//alert(groceries);

let daily = ["perfume", "bed", "pencil"];
console.log(daily);
daily.push("toothbrush", "computer");
console.log(daily);
daily.pop();
console.log(daily);
daily.splice(2,1,"marker");
console.log(daily);
daily.splice(3,1);
console.log(daily);

let nums = [2,0,2];
console.log(nums);
nums.splice(3,1,6);
console.log(nums);
nums.splice(1,1,2);
console.log(nums);