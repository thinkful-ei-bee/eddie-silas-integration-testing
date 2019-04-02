const expect = require('chai').expect;
const sort = require('../sort.js');

describe('Sort function ', ()=>{
  it('should have input type of array', ()=>{
    expect([1,2]).to.be.an('array');
  })

  it('should not sort an already sorted array', ()=>{
    expect(sort([1,2,3])).to.deep.equal([1,2,3]);
  })

  it('should sort an unsorted array', ()=>{
    expect(sort([3,2,1])).to.deep.equal([1,2,3]);
  })

  it('should sort strings', ()=>{
    expect(sort(['a','b','c'])).to.deep.equal(['a','b','c']);
  })

  it('should sort an unsorted array of strings', ()=>{
    expect(sort(['x','f','c'])).to.deep.equal(['c','f','x']);
  })

  it('should not sort an array of strings and numbers', ()=>{
    expect(sort(['b',4,10,'t'])).to.deep.equal(['b',4,10,'t']);
  })
})