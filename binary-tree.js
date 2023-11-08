"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {
    const queue = [this];
    let depth = 1;

    while (queue.length > 0) {

      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        let current = queue.shift();

        if (!current.left || !current.right) {
          return depth;
        }
        queue.push(current.left);
        queue.push(current.right);
      }
      depth++;
    }
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {
    const queue = [this];
    let depth = 1;
    let highestDepth = 0;

    while (queue.length > 0) {

      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        let current = queue.shift();

        if (!current.left && !current.right) {
          if (depth > highestDepth){
            highestDepth = depth;
          }
        }
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
      depth++;
    }
    return highestDepth;

  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
   minDepth() {
    const queue = [this];
    let depth = 1;

    while (queue.length > 0) {

      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        let current = queue.shift();

        if (!current.left && !current.right) {
          return depth;

        }
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
      depth++;
    }

  }

  /** nextLarger(lowerBound): return the smallest value from the invoking node
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    const queue = [this];
    let nextLowest = null;

    while (queue.length){
      let current = queue.shift();

      if(current.val > lowerBound){
        if(current.val < nextLowest || nextLowest === null){
          nextLowest = current.val;
        }
      }
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return nextLowest;
  }

  /** nextLarger(lowerBound): return the smallest value from the invoking node
   * that is larger than lowerBound. Return null if no such value exists. */

  areCousins(node1, node2) {
    const queue = [this];

    while (queue.length > 0) {
        let node1Index = null;
        let node2Index = null;
      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        let current = queue.shift();
        if (current === node1) node1Index === i;
        if (current === node2) node2Index === i;

        queue.push(current.left);
        queue.push(current.right);
        }
        if (node1Index && node2Index){
          if (Math.abs(node1Index - node2Index) === 1){
            if((node1Index % 2 === 0 && node2Index === node1Index +1) ||
            (node2Index % 2 === 0 && node1Index === node2Index +1)){
              return true
            }
          }
        }
      }
      return false;
    }


}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    if (!this.root) return 0;
    return this.root.minDepthToIncompleteNode();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    if (!this.root) return 0;
    return this.root.maxDepth();
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {
    if (!this.root) return 0;
    return this.root.minDepth();
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    return this.root.nextLarger(lowerBound);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (!this.root) return null;
    return this.root.areCousins(node1, node2);
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
