import * as c from 'chai';
import * as m from 'mocha';
import RpsLodash from '../src/index';
import {RpsContext} from 'rpscript-interface';

let $CONTEXT;
let inputs, double, isEven;
let lodash;
m.beforeEach(() => {
    $CONTEXT = new RpsContext();
    lodash = new RpsLodash;
    inputs = [1,2,3,4];
    double = x => x*2;
    isEven = n => n % 2 === 0;
});


m.describe('Lodash', () => {
  m.it('should map item', async function() {
    let p = Promise.resolve(2);
    let result = await lodash.map($CONTEXT,{},inputs, async function (input) {
      let output = await p;
      return input * output;
    });

    c.expect(result).to.have.same.members([2,4,6,8]);
  });

  m.it('should filter item', async function() {
    let result = await lodash.filter($CONTEXT,{},inputs, async function(n) {
      let output = await n % 2 === 0;
      return output;
    });

    c.expect(result).to.have.same.members([2,4]);
  });

  m.it('should find value', async function() {
    let result:Object = await lodash.find($CONTEXT,{},[
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ],['active', false]);


    c.expect(result).to.be.deep.equals({'user':'fred','age':40,'active':false});
  });

  m.it('should get keys', async function() {
    let result = await lodash.keys($CONTEXT,{},{a:1,b:2});

    c.expect(result).to.have.same.members(['a','b']);
  });

  m.it('should get values', async function() {
    let result = await lodash.values($CONTEXT,{},{a:1,b:2});

    c.expect(result).to.have.same.members([1,2]);
  });

  m.it('should get lodash function add', async function() {
    let result = await lodash.getLodashFunction($CONTEXT,{},'add');
    c.expect(result(1,2)).to.be.equals(3);

    result = await lodash.getLodashFunction($CONTEXT,{},'add',6,9);
    c.expect(result).to.be.equals(15);
  });

  m.it('should verify string opts', async function() {
    let result = await lodash.upperCase($CONTEXT,{},'hello world');
    c.expect(result).to.be.equals('HELLO WORLD');
  });

})
