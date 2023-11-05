var word = {};

word.j = 0;
word.h = 0.01;

word.speak = function breath() {
  while (word.j < 2 * Math.PI) {
    word.j += word.h;
    word.w = Math.sin(word.j);
    console.log("j:", this.j);
  }
  debugger;
  this.j = 0;
};
word.speak();

word.live = function eternity() {
  while (this.j > 0) {
    this.speak();
  }
};
word.live();
