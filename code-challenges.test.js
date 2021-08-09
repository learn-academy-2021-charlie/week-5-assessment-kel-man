// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe('codifier', () => {
  it('removes certain vowels and replaces them with the appropriate numbers', () => {
    expect(codifier(secretCodeWord1)).toEqual('L4ck4d41s1c4l')
    expect(codifier(secretCodeWord2)).toEqual('G0bbl3dyg00k')
    expect(codifier(secretCodeWord3)).toEqual('3cc3ntr1c')
  })
})


// b) Create the function that makes the test pass.

/* There are a few ways of implementing this. The most basic(fundamental oriented) one would be to split our input into an array of letters,
 * create an array holding our three target vowels, and nest a for loop such that while iterating over the letters of the input, we are also
 * iterating over our target array and checking with conditionals to modify the appropriate letters with their corresponding numbers. However,
 * this is nonperformant. An alternate approach would be to create a recursive function that uses String.prototype.replace() to replace the letters
 * one at a time, and ending when the output of str.replace is equal to the input of the function on that current function call. However, we would have
 * to do this four times as there are four values we need to search for and str.replace only accepts one at a time. The best solution that occurs to me
 * is to create an object that holds four key value pairs. The keys will be our target vowels, while the values will be their replacement numbers.
 * Then, using the boolean operator "in", we can iterate over an array of our input letters and check if a corresponding key exists in our object.
 * If it does, then we replace that index with the value of that key value pair. This way we are only looping through a single array once, and our
 * function should be O(n)
 * */

const codifier = word => {
  letters = word.split('')
  target = {a: 4, e: 3, i: 1, o: 0}
  letters.forEach((value, index) => {
    if(value.toLowerCase() in target) letters[index] = target[value.toLowerCase()].toString() // Had to look this syntax up, it's cool that we can use syntax similar to Ruby
  })                                                                                          // to access the key as a variable rather than accessing it directly with object.key
  return letters.join('')
}

// Had to add the .toLowerCase(). I had assumed we didn't need that as the prompt explicitly states the lowercase vowels are to be replaced, however the
// expected test results assume differently

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Apricot", "Peach"]

describe('containsA', () => {
  it("returns all the entries that contain the string 'a'", () => {
    expect(containsA(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
    expect(containsA(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
  })
})

// b) Create the function that makes the test pass.

/* We will need an array to store the values that meet the requirements.
 * Iterating over the input, we call .toLowerCase() on the current element and check if it .includes('a').
 * If it does, we add it to our storage array
 * Return storage */

const containsA = words => {
  let storage = []
  words.forEach((element) => {
    element.toLowerCase().includes('a') && storage.push(element)
  })
  return storage
}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var fiveOfAKind = [1, 1, 1, 1, 1]

describe('fullHouse', () => {
  it('returns true if the hand is a full house, false if not', () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    expect(fullHouse(fiveOfAKind)).toEqual(false)
  })
})


// b) Create the function that makes the test pass.

/* Objects are useful again here. Object has a built in method called Object.keys() that returns an array of all the keys within an object.
 * We can loop through our hand and, for each value, add a key to a storage object that equals that value or, if it already exists, increment it by one
 * At the end of this loop, we check if Object.keys(storage).length is greater than 2. If it is, return false. If not, check that neither of the values
 * of those key:object pairs is greater than 3. If not, return false.
 * Finally, return true
*/

const fullHouse = hand => {
  let storage = {}
  for(let card of hand){
    card.toString() in storage ? storage[card.toString()] += 1 : storage[card.toString()] = 1
  }
  if(Object.keys(storage).length > 2 || Object.keys(storage).length < 2){
    return false
  }else {
    for(let [key, value] of Object.entries(storage)){ // Could also just use for(let value in object) but I feel this is equally good
      if(value > 3) return false
    }
  }
  return true
}
