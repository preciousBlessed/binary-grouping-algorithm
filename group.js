const prompt = require("prompt-sync")({ sigint: true });

const baseList = [];
numberAround = Number(
  prompt("How many of you are around in the house? (Enter the number here!)  ")
);
start = 1;
while (start <= numberAround) {
  baseList.push(start);
  start++;
}
// console.log(baseList);
let stillChecking = true;
const summaryObject = {};

while (stillChecking) {
  let Slide = prompt("Do you want to see your group? (y or n) ");
  if (Slide.toLocaleLowerCase() == "y") {
    let myName = prompt("What is your name? (regularly called) ");
    let baseItem = baseList[Math.floor(Math.random() * baseList.length)];
    let myGroup = 1 + (baseItem % 2);
    // console.log(baseItem); //Remove comment to see the random element selected from baseList.
    if (!summaryObject[myName]) {
      summaryObject[
        myName.split("")[0].toUpperCase() + myName.slice(1).toLocaleLowerCase()
      ] = myGroup; //Add Name Group Pairs to summary object
    }
    console.log(
      `Mr ${
        myName.split("")[0].toUpperCase() + myName.slice(1).toLocaleLowerCase()
      }, you are in Group ${myGroup}.`
    );
    baseList.splice(baseList.indexOf(baseItem), 1); //To remove the random element
    // console.log(baseList); //Remove comment to see the reduced list.
    if (baseList.length == 0) {
      stillChecking = false;
      console.log(
        "Thanks y'all, please connect with your group members and be sure to provide water for the house duly and promptly!"
      );
      console.log("Here is the summary of the grouping.");
      console.log(summaryObject); //Try to sort the list.
      //   .sort((a, b) => a - b)
    }
  } else {
    stillChecking = false;
    console.log("Thanks for Playing my Game!");
  }
}
