let word = {};

// check with profiler if this makes a diffrence
// add lesson how to profile with DevTools
const twoPI = 2 * Math.PI

// DONT global variables
//var globalVariable = "globalVariable";

// DONT just modify objects arbitarrily
word.j = 0.01;
word.h = -Math.PI;
// DONT misspelled creates new element
// word.i = 0.01;

// DONT use hard code HTML-tag IDs
jotaView.value = word.j;


word.speak = function breath() {
  // DONT calculate 2 * Math.PI each time
  while (word.j < 2 * Math.PI) {
  // DONT use global reference twoPI
  //while (word.h < twoPI) {

    word.h += word.j;
    word.w = Math.sin(word.h);
    //console.log("j:", this.j);
    
    // DONT use hard coded HTML ids
    heightView.value = word.h;
    widthView.value = word.w;
  }
  this.h = Math.PI;
};
word.speak();

word.live = function eternity() {
  while (this.h > 0) {
    this.speak();
  }
};
word.live();
