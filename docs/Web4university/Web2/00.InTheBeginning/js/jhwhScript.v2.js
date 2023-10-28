let word = {};

const twoPI = 2 * Math.PI
//var globalVariable = "globalVariable";


word.j = 0.01;
word.h = -Math.PI;

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
