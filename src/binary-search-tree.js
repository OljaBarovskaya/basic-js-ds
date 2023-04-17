const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BSTNode { 

  constructor(data) {  
    this.data=data
    this.left=null
    this.right =null
  }
}  


class BinarySearchTree {
constructor(){
this.treeRoot=null;
this.rootNode=null;
}
  root() {
    return this.treeRoot
  }

  add(data) {
this.treeRoot = addNewData(this.treeRoot, data)
function addNewData(currentNode, data){
  console.log(currentNode)
  if(currentNode===null){return new BSTNode(data)} else {
    if(currentNode.value===data){return currentNode} else {
      if (currentNode.value>data){currentNode.left=addNewData(currentNode.left,data)} else
      currentNode.right=addNewData(currentNode.right,data)
      
    }
    
  }
  return currentNode
}
    }
  

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};