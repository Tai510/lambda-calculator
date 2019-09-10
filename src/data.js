// STEP 1 - Get the modules here exported before building out your components
// Don't worry about bringing all of these into the same file.
// Export them as necessary and import each array into its appropriate
// file. No real tricks here just be aware of what is in each array
// and how you'll access the data.

const numbers1 = ["7", "8", "9"];
const numbers2 = ["4", "5", "6"];
const numbers3 = ["1", "2", "3"];
const numbers4 = ["0", "."]

const operators1 = [
  {
    char: "=",
    value: "="
  }
]

const operators2 = [
  {
    char: "/",
    value: "/"
  },
  {
    char: "x",
    value: "*"
  },
  {
    char: "-",
    value: "-"
  },
  {
    char: "+",
    value: "+"
  }
];



const specials = ["C", "+/-", "%"];

export { numbers1, numbers2, numbers3, numbers4, operators1, operators2, specials };
