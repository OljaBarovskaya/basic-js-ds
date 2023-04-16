const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class ListNode {
  constructor(x,y) {
    this.value = x;
    this.next = y;
  }
}

function removeKFromList(l, k) {
 
  let currentValue=l.value;
  let currentNext=l.next;
  let arr=[l.value]
  
  while(!(currentNext===null)){
    currentValue=currentNext.value; 
    currentNext=currentNext.next;
    arr.push(currentValue)
  }
    
  while (arr.includes(k)){
      let elementNumber = arr.indexOf(k);
      arr.splice(elementNumber,1);
    }  
  
  arr.reverse()
  
  l.value=arr[0];
  l.next=null;
  
  for(let i=1; i<arr.length; i++){
    l=new ListNode (arr[i], l);
  }
  
  
  console.log(l)
  
    return l;
  }

module.exports = {
  removeKFromList
};
