var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
      return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
      return arr[arr.length-1];

  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, value) {
    for(var i=0; i<arr.length; i++){
      if(arr[i]===value){
        return i;
      }
    }
    return -1;
  },

  // returns the index of the first matching element from left to right
  lastIndexOf: function (arr, value) {
    for (var i=(arr.length-1); i>=0; i--){
      if(arr[i]===value){
        return i;
      }
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop();
    return arr;
  },

  // returns an array with all falsey values removed
  compact: function(arr) {
    let newArr = [];
    for (var i=0; i<arr.length; i++)
      if(arr[i]){
        newArr.push(arr[i]);
      }
    return newArr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    let newArr = [];
    for(i=start; i<end; i++){
      newArr.push(arr[i]);
    }
    return newArr;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    if(n===undefined){
      n = 1;
    }
    let newArr = [];
    for(i=n; i<arr.length; i++){
      newArr.push(arr[i]);
    }
    return newArr;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    if(n===undefined){
      n = 1;
    }
    let newArr = [];
    for(i=0; i<(arr.length - n); i++){
      newArr.push(arr[i]);
    }
    return newArr;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    if(n===undefined){
      n = 1;
    }
    if(n < arr.length){
      let newArr = [];
      for(i=0; i<n; i++){
        newArr.push(arr[i]);
      }
      return newArr;
    }else{
      return arr;
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    if(n===undefined){
      n = 1;
    }
    let newArr = [];
    for(i=(arr.length - n); i<arr.length; i++){
      newArr.push(arr[i]);
    }
    return newArr;
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, value, start, end) {
    if(start===undefined || end===undefined){
      start = 0;
      end = arr.length;
    }
    for(i=start; i<end; i++){
      arr[i] = value;
    }
    return arr;
  },

  // removes all given values from an array
  pull: function (arr, value) {
    for(j=0; j<value.length; j++){
      for (var i=(arr.length -1); i>=0; i--){
        if(arr[i]===value[j]){
          arr.splice(i, 1);
        }
      }
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, indices) {
    for(i=indices.length-1; i>=0; i--){
      arr.splice(indices[i],1);
    }
    return arr;
  },

  // creates an array excluding all the specified values
  without: function(arr, values) {
    for(i=arr.length-1; i>=0; i--){
      for(j=values.length-1; j>=0; j--){
        if(arr[i]===values[j]){
          arr.splice(i,1);
        }
      }
    }
    return arr;
  },

  // returns an array with specified values excluded
  difference: function(arr1, arr2) {
    for(i=arr1.length-1; i>=0; i--){
      for(j=arr2.length-1; j>=0; j--){
        if(arr1[i]===arr2[j]){
          arr1.splice(i,1);
        }
      }
    }
    return arr1;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/

  // creates an array of grouped elements
  zip: function (arr1, arr2) {
    newArr = [];
    for(i=0; i<arr1.length; i++){
      tempArr = [];
      tempArr.push(arr1[i]);
      tempArr.push(arr2[i]);
      newArr.push(tempArr);
    }
    return newArr;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr1) {
    console.log(arr1);


  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {

  }
};