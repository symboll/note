/**
  extensions is an array and each item has such format:
  {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
  lastName, ext can be empty, extType can only has "DigitalUser", "VirtualUser","FaxUser","Dept","AO".
**/

/**
  Question 1: sort extensions by "firstName" , "lastName" , "ext" ASC
**/
function sortExtensionsByName(extensions) {

}


/**
  Question 2: sort extensions by extType follow these orders ASC
  DigitalUser < VitrualUser < FaxUser < AO < Dept.
**/
function sortExtensionsByExtType(extensions) {

}

/**
  saleItems is an Array has each item has such format:
  {
  month: n, //[1-12],
  date: n, //[1-31],
  transationId: "xxx",
  salePrice: number
  }
**/

/**
  Question 3: write a function to calculate and return a list of total sales amount (sum) for each quarter, expected result like:
  [
  {quater: 1, amount: xxx, transactionNums: n},
  {....}
  ]
**/

function sumByQuarter(saleItems) {

}


/**
  Question 4: write a function to calculate and return a list of max sales amount (max) for each quarter, expected result like:
  [
  {quater: 1, amount: xxx, transactionNums: n},
  {....}
  ]
**/

function maxByQuarter(saleItems) {

}

/**
  Question 5: please create a tool to generate Sequence
  Expected to be used like:
  var sequence1 = new Sequence();
  sequence1.next() --> return 1;
  sequence1.next() --> return 2;
  
  in another module:
  var sequence2 = new Sequence();
  sequence2.next() --> 3;
  sequence2.next() --> 4;
**/





/**
    Question 6:
    allKeys: is an array of all available value as int type like [100,3,5,7,9], random order;
    usedKeys: is an array of all used keys like [3, 5, 7], random order;
    We want to get all the unused keys in the same order with allKeys, in this example it would be: [100, 9]
**/

function diff(allKeys, usedKeys) {
  //TODO
}