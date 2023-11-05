let word = {};

// check with profiler if this makes a diffrence
// add lesson how to profile with DevTools
const twoPI = 2 * Math.PI
const week = 7;
let day = 0;


// DONT global variables
//var globalVariable = "globalVariable";

// DONT just modify objects arbitarrily
word.j = 0.1;
word.h = -Math.PI;
// DONT misspelled creates new element
// word.i = 0.01;

// DONT use hard code HTML-tag IDs
jotaView.value = word.j;


word.speak = function breath() {
  // DONT calculate 2 * Math.PI each time
  while (word.h < Math.PI) {
  // DONT use global reference twoPI
  //while (word.h < twoPI) {

    word.h += word.j;
    word.w = Math.sin(word.h);
    
    //debugger;
    console.log("h:", this.h);
    

    // DONT use hard coded HTML ids
    heightView.value = word.h;
    widthView.value = word.w;
  }
  word.h = -Math.PI;
};
word.speak();

word.live = function eternity() {
  while (day++ < week) {
    console.groupCollapsed("day:", day);
    //debugger;

    this.speak();
    console.groupEnd();
  }
};
word.live();
