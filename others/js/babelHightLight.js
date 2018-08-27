// import highlight from "@babel/highlight";
const {default: highlight} = require("@babel/highlight");

const code = `
  class Foo {
    constructor() {
      super()
      this.a = 123
    }

    show () {
      console.log(this.a)
    }
  }

  const a = 123

  for(var i = 0; i < 10; i ++) {
    console.log(123)
  }
`;

const result = highlight(code, { forceColor: true });

console.log(result);