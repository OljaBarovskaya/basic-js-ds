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
  
    has(data) {
      if(!BSTNode){return false} else 
      return checkIsThere(this.treeRoot, data)   
      function checkIsThere(currentNode, data){
        if (currentNode.data===data){return true}
        if(currentNode.left){if(currentNode.left.data===data){return true}} 
        if(currentNode.right){if(currentNode.right.data===data){return true}}
        if ((currentNode.left)&&(currentNode.right)){return (checkIsThere(currentNode.left, data)||(checkIsThere(currentNode.right, data)))}
        if(currentNode.left){return checkIsThere(currentNode.left, data)}
        if(currentNode.right){return checkIsThere(currentNode.right, data)}
          return false
      }
      }
  
    find(data) {
      if(!BSTNode){return null} else 
      return checkIsThere(this.treeRoot, data)   
      function checkIsThere(currentNode, data){
        if (currentNode.data===data){return currentNode}
        console.log(currentNode, currentNode.left, currentNode.right)
        if(currentNode.left){if(currentNode.left.data===data){return currentNode.left}} 
        if(currentNode.right){if(currentNode.right.data===data){return currentNode.right}}
        if ((currentNode.left)&&(currentNode.right)){return (checkIsThere(currentNode.left, data)||(checkIsThere(currentNode.right, data)))}
        if(currentNode.left){return checkIsThere(currentNode.left, data)}
        if(currentNode.right){return checkIsThere(currentNode.right, data)}
          return null
      }
    }

    min() {
      if(!BSTNode){return null} else 
      return findMin(this.treeRoot)   
      function findMin(currentNode){
        if (currentNode.left){return findMin(currentNode.left)} else{
    return currentNode.data
        }
      }
    }
  
    max() {
      if(!BSTNode){return null} else 
      return findMax(this.treeRoot)   
      function findMax(currentNode){
        if (currentNode.right){return findMax(currentNode.right)} else{
    return currentNode.data
        }
      }
    }

    remove(data) {
      if(this.has(data)){
        let neededToRemoveNode;
        findNode(this.treeRoot, data, BSTNode)
          function findNode(currentNode, data, previousNode){
          if (currentNode.data===data){neededToRemoveNode=previousNode; return}
            if (currentNode.left) {findNode(currentNode.left, data, currentNode)}
           if (currentNode.right) {findNode(currentNode.right, data,currentNode)}
          
            return null}
  
        if (!(neededToRemoveNode.left || neededToRemoveNode.right)) { 
          if (data<neededToRemoveNode.data) {delete neededToRemoveNode.left} else {
            delete neededToRemoveNode.right
          }
        return} 
        if (neededToRemoveNode.left) {
  
          let dataMax=findMax(neededToRemoveNode.left)   
          function findMax(currentNode){
            if (currentNode.right){return findMax(currentNode.right)} else{
        return currentNode.data
            }
          }
          
          let neededToRemoveNode2;
          findNode2(neededToRemoveNode.left, dataMax, neededToRemoveNode)
            function findNode2(currentNode, data, previousNode){
            if (currentNode.data===data){ neededToRemoveNode2=previousNode; return}
              if (currentNode.left) {findNode(currentNode.left, data, currentNode)}
             if (currentNode.right) {findNode(currentNode.right, data,currentNode)}
            
              return null}
  
          delete neededToRemoveNode2.right
          neededToRemoveNode.data=dataMax
        return}
      }
    }
           
          
        
      }

module.exports = {
  BinarySearchTree
};