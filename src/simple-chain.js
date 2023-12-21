const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: '',
    separator: '~~',

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    let str;
    if (!arguments.length) {
      str = '';
    } else {
      str = String(value);
      if (!this.chain.length) {
        this.chain += `( ${str} )`;
      } else {
        this.chain += `${this.separator}( ${str} )`;
      }
    }
    return this;
  },
  
  removeLink(position) {
    let arr = this.chain.split(`${this.separator}`);
    console.log(arr)
    if (typeof position !== 'number' || position <= 0 || position > arr.length || !Number.isInteger(position)) {
      this.chain = '';
      console.log('test')
      throw new Error("You can't remove incorrect link!");
    } else {
      let index = position - 1;
      arr.splice(index, 1);
      this.chain = arr.join(`${this.separator}`);
      
    }
    return this;
  },

  reverseChain() {
    let arr = this.chain.split(`${this.separator}`).reverse()
    this.chain = arr.join(`${this.separator}`);
    return this;
  },

  finishChain() {
    let result = this.chain;
    this.chain = '';
    return result;
  }
};

module.exports = {
  chainMaker
};
