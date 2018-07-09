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
    let result = await lodash.map($CONTEXT,{},inputs, double);

    c.expect(result).to.have.same.members([2,4,6,8]);
  });

  m.it('should filter item', async function() {
    let result = await lodash.filter($CONTEXT,{},inputs, isEven);

    c.expect(result).to.have.same.members([2,4]);
  });

  m.it('should get keys', async function() {
    let result = await lodash.keys($CONTEXT,{},{a:1,b:2});

    c.expect(result).to.have.same.members(['a','b']);
  });

  m.it('should get values', async function() {
    let result = await lodash.values($CONTEXT,{},{a:1,b:2});

    c.expect(result).to.have.same.members([1,2]);
  });

})
