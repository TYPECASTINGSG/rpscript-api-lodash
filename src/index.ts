import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';
import _ from 'lodash';

/** Module for Lodash
 * @namespace Lodash 
 * 
 * @see {@link https://lodash.com/docs}
*/
@RpsModule("lodash")
export default class RpsLodash {

  //Array

  /**
 * @function chunk
 * @memberof Lodash
 * 
 * @param {Array} array
 * @param {number} size 
 * @returns {Array} 
 * 
 * @see {@link https://lodash.com/docs#chunk}
*/
  @rpsAction({verbName:'chunk'})
  chunk (ctx:RpsContext,opts:{}, array:any[], size:number=1) : Promise<any[]> {
    return Promise.resolve(_.chunk(array,size));
  }

  /**
 * @function compact
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array} 
 * 
 * @see {@link https://lodash.com/docs#compact}
*/
  @rpsAction({verbName:'compact'})
  compact (ctx:RpsContext,opts:{}, array:any[]) : Promise<any[]> {
    return Promise.resolve(_.compact(array));
  }

/**
 * @function concat
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {List} values
 * 
 * @see {@link https://lodash.com/docs#concat}
*/
  @rpsAction({verbName:'concat'})
  concat (ctx:RpsContext,opts:{}, array:any[], ...values:any[]) : Promise<any[]> {
    let val = [array].concat(values);
    return Promise.resolve(_.concat.apply(this,val));
  }

/**
 * @function difference
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array} values
 * 
 * @see {@link https://lodash.com/docs#difference}
*/
  @rpsAction({verbName:'difference'})
  difference (ctx:RpsContext,opts:{}, array:any[], values:any[]) : Promise<any[]> {
    return Promise.resolve(_.difference(array,values));
  }

  /**
 * @function drop
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {number} size
 * 
 * @see {@link https://lodash.com/docs#drop}
*/
  @rpsAction({verbName:'drop'})
  drop (ctx:RpsContext,opts:{}, array:any[], size:number = 1) : Promise<any[]> {
    return Promise.resolve(_.drop(array,size));
  }

  /**
 * @function drop-right
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {number} size
 * 
 * @see {@link https://lodash.com/docs#dropRight}
*/
  @rpsAction({verbName:'drop-right'})
  dropRight (ctx:RpsContext,opts:{}, array:any[], size:number = 1) : Promise<any[]> {
    return Promise.resolve(_.dropRight(array,size));
  }

  /**
 * @function fill
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array} values
 * 
 * @see {@link https://lodash.com/docs#fill}
*/
  @rpsAction({verbName:'fill'})
  fill (ctx:RpsContext,opts:{}, array:any[], value:any) : Promise<any[]> {
    return Promise.resolve(_.fill(array,value));
  }

/**
 * @function find-index
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array} values
 * 
 * @see {@link https://lodash.com/docs#findIndex}
*/
  @rpsAction({verbName:'find-index'})
  findIndex (ctx:RpsContext,opts:{}, array:any[], predicate:any, fromIndex:number=0) : Promise<number> {
    return Promise.resolve(_.findIndex(array,predicate,fromIndex));
  }

/**
 * @function find-last-index
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array} values
 * 
 * @see {@link https://lodash.com/docs#findLastIndex}
*/
  @rpsAction({verbName:'find-last-index'})
  findLastIndex (ctx:RpsContext,opts:{}, array:any[], predicate:any, fromIndex:number=0) : Promise<number> {
    return Promise.resolve(_.findLastIndex(array,predicate,fromIndex));
  }

/**
 * @function flatten
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#flatten}
*/
  @rpsAction({verbName:'flatten'})
  flatten (ctx:RpsContext,opts:{}, array:any[]) : Promise<any[]> {
    return Promise.resolve(_.flatten(array));
  }

/**
 * @function flatten-deep
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#flattenDeep}
*/
  @rpsAction({verbName:'flatten-deep'})
  flattenDeep (ctx:RpsContext,opts:{}, array:any[]) : Promise<any[]> {
    return Promise.resolve(_.flattenDeep(array));
  }

/**
 * @function from-pairs
 * @memberof Lodash
 * 
 * @param {Array} pairs
 * @returns {Object}
 * 
 * @see {@link https://lodash.com/docs#fromPairs}
*/
@rpsAction({verbName:'from-pairs'})
fromPairs (ctx:RpsContext,opts:{}, pairs:any[]) : Promise<Object> {
  return Promise.resolve(_.fromPairs(pairs));
}

/**
 * @function head
 * @memberof Lodash
 * 
 * @param {Array}
 * @returns {Object}
 * 
 * @see {@link https://lodash.com/docs#head}
*/
@rpsAction({verbName:'head'})
head (ctx:RpsContext,opts:{}, array:any[]) : Promise<any> {
  return Promise.resolve(_.head(array));
}

/**
 * @function index-of
 * @memberof Lodash
 * 
 * @param {Array} array
 * @param {*} value
 * @param {number} fromIndex optional. 
 * @returns {number}
 * 
 * @see {@link https://lodash.com/docs#indexOf}
*/
  @rpsAction({verbName:'index-of'})
  indexOf (ctx:RpsContext,opts:{}, array:any[], value:any, fromIndex:number=1) : Promise<number> {
    return Promise.resolve(_.indexOf(array,value,fromIndex));
  }

  /**
 * @function initial
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#initial}
*/
  @rpsAction({verbName:'initial'})
  initial (ctx:RpsContext,opts:{}, array:any[]) : Promise<any[]> {
    return Promise.resolve(_.initial(array));
  }

/**
 * @function intersection
 * @memberof Lodash
 * 
 * @param {Array} arrays
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#intersection}
*/
@rpsAction({verbName:'intersection'})
intersection (ctx:RpsContext,opts:{}, arrays:any[]) : Promise<any[]> {
  return Promise.resolve(_.intersection(arrays));
}

/**
 * @function join
 * @memberof Lodash
 * 
 * @param {Array} array
 * @param {Array} separator
 * @returns {string}
 * 
 * @see {@link https://lodash.com/docs#intersection}
*/
@rpsAction({verbName:'join'})
join (ctx:RpsContext,opts:{}, array:any[],separator:string=',') : Promise<string> {
  return Promise.resolve(_.join(array,separator));
}

/**
 * @function last
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#last}
*/
@rpsAction({verbName:'last'})
last (ctx:RpsContext,opts:{}, array:any[]) : Promise<any> {
  return Promise.resolve(_.last(array));
}

/**
 * @function last-index-of
 * @memberof Lodash
 * 
 * @param {Array} array
 * @param {*} value
 * @param {number} fromIndex
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#lastIndexOf}
*/
@rpsAction({verbName:'last-index-of'})
lastIndexOf (ctx:RpsContext,opts:{}, array:any[],value:any,fromIndex?:number) : Promise<any> {
  return Promise.resolve(_.lastIndexOf(array,value,fromIndex));
}

/**
 * @function nth
 * @memberof Lodash
 * 
 * @param {Array} array
 * @param {*} n
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#nth}
*/
@rpsAction({verbName:'nth'})
nth (ctx:RpsContext,opts:{}, array:any[],n:number=0) : Promise<any> {
  return Promise.resolve(_.nth(array,n));
}

/**
 * @function pull
 * @memberof Lodash
 * 
 * @param {Array} array
 * @param {*} values
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#pull}
*/
@rpsAction({verbName:'pull'})
pull (ctx:RpsContext,opts:{}, array:any[],...values:any[]) : Promise<any> {
  let v = [array].concat(values);
  return Promise.resolve(_.pull.apply(this,v));
}
/**
 * @function pull-all
 * @memberof Lodash
 * 
 * @param {Array} array
 * @param {*} values
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#pullAll}
*/
@rpsAction({verbName:'pull-all'})
pullAll (ctx:RpsContext,opts:{}, array:any[],values:any[]) : Promise<any> {
  return Promise.resolve(_.pullAll(array,values));
}

/**
 * @function pull-all-by
 * @memberof Lodash
 * 
 * @param {Array} array
 * @param {*} values
 * @param {*} function
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#pullAllBy}
*/
@rpsAction({verbName:'pull-all-by'})
pullAllBy (ctx:RpsContext,opts:{}, array:any[],values:any[],fn:any) : Promise<any> {
  return Promise.resolve(_.pullAllBy(array,values,fn));
}

/**
 * @function remove
 * @memberof Lodash
 * 
 * @param {Array} array
 * @param {*} predicate
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#remove}
*/
@rpsAction({verbName:'remove'})
remove (ctx:RpsContext,opts:{}, array:any[],predicate:any) : Promise<any[]> {
  return Promise.resolve(_.remove(array,predicate));
}

/**
 * @function reverse
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#reverse}
*/
@rpsAction({verbName:'reverse'})
reverse (ctx:RpsContext,opts:{}, array:any[]) : Promise<any[]> {
  return Promise.resolve(_.reverse(array));
}

/**
 * @function slice
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#slice}
*/
@rpsAction({verbName:'slice'})
slice (ctx:RpsContext,opts:{}, array:any[],start:number=0,end?:number) : Promise<any[]> {
  return Promise.resolve(_.slice(array,start,end));
}

/**
 * @function sorted-index
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#sortedIndex}
*/
@rpsAction({verbName:'sorted-index'})
sortedIndex (ctx:RpsContext,opts:{}, array:any[],value:number) : Promise<number> {
  return Promise.resolve(_.sortedIndex(array,value));
}

/**
 * @function sorted-uniq
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#sortedUniq}
*/
@rpsAction({verbName:'sorted-uniq'})
sortedUniq (ctx:RpsContext,opts:{}, array:any[]) : Promise<any[]> {
  return Promise.resolve(_.sortedUniq(array));
}

/**
 * @function tail
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#tail}
*/
@rpsAction({verbName:'tail'})
tail (ctx:RpsContext,opts:{}, array:any[]) : Promise<any> {
  return Promise.resolve(_.tail(array));
}

/**
 * @function take
 * @memberof Lodash
 * 
 * @param {Array} array
 * @param {number} n
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#take}
*/
@rpsAction({verbName:'take'})
take (ctx:RpsContext,opts:{}, array:any[],n:number=1) : Promise<any> {
  return Promise.resolve(_.take(array,n));
}

/**
 * @function take-right
 * @memberof Lodash
 * 
 * @param {Array} array
 * @param {number} n
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#takeRight}
*/
@rpsAction({verbName:'take-right'})
takeRight (ctx:RpsContext,opts:{}, array:any[],n:number=1) : Promise<any> {
  return Promise.resolve(_.takeRight(array,n));
}

/**
 * @function union
 * @memberof Lodash
 * 
 * @param {Array} arrays
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#union}
*/
@rpsAction({verbName:'union'})
union (ctx:RpsContext,opts:{}, ...arrays:any[]) : Promise<any[]> {
  return Promise.resolve(_.union.apply(this,arrays));
}

/**
 * @function uniq
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#uniq}
*/
  @rpsAction({verbName:'uniq'})
  uniq (ctx:RpsContext,opts:{}, array:any[]) : Promise<any[]> {
    return Promise.resolve(_.uniq(array));
  }

/**
 * @function unzip
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#unzip}
*/
@rpsAction({verbName:'unzip'})
unzip (ctx:RpsContext,opts:{}, ...array:any[]) : Promise<any[]> {
  return Promise.resolve(_.unzip.apply(this,array));
}

/**
 * @function without
 * @memberof Lodash
 * 
 * @param {Array} array
 * @param {List} values
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#without}
*/
@rpsAction({verbName:'without'})
without (ctx:RpsContext,opts:{}, array:any[],...values:any[]) : Promise<any[]> {
  let v = [array].concat(values);
  return Promise.resolve(_.without.apply(this,v));
}

/**
 * @function xor
 * @memberof Lodash
 * 
 * @param {Array} arrays
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#xor}
*/
@rpsAction({verbName:'xor'})
xor (ctx:RpsContext,opts:{}, ...array:any[]) : Promise<any[]> {
  return Promise.resolve(_.xor.apply(this,array));
}

/**
 * @function zip
 * @memberof Lodash
 * 
 * @param {Array} array
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#zip}
*/
@rpsAction({verbName:'zip'})
zip (ctx:RpsContext,opts:{}, ...array:any[]) : Promise<any[]> {
  return Promise.resolve(_.zip.apply(this,array));
}

/**
 * @function zip-object
 * @memberof Lodash
 * 
 * @param {Array} properties
 * @param {Array} values
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#zipObject}
*/
@rpsAction({verbName:'zip-object'})
zipObject (ctx:RpsContext,opts:{}, properties:any[],values:any[]) : Promise<Object> {
  return Promise.resolve(_.zipObject(properties,values));
}

/**
 * @function zip-object-deep
 * @memberof Lodash
 * 
 * @param {Array} properties
 * @param {Array} values
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#zipObjectDeep}
*/
@rpsAction({verbName:'zip-object-deep'})
zipObjectDeep (ctx:RpsContext,opts:{}, properties:any[],values:any[]) : Promise<Object> {
  return Promise.resolve(_.zipObject(properties,values));
}
/**
 * @function zip-with
 * @memberof Lodash
 * 
 * @param {Array} properties
 * @param {Array} values
 * @returns {Array}
 * 
 * @see {@link https://lodash.com/docs#zipWith}
*/
@rpsAction({verbName:'zip-with'})
zipWith (ctx:RpsContext,opts:{}, identity:Function, ...arrays:any[]) : Promise<any[]> {
  let v = arrays.concat(identity);
  return Promise.resolve(_.zipWith.apply(this,v));
}

  // ******** COLLECTION *******

  @rpsAction({verbName:'map'})
  map (ctx:RpsContext,opts:{}, functor:any[], fn:Function) : Promise<any[]> {
    return Promise.resolve( Promise.all(_.map(functor,fn)) );
  }
  
  @rpsAction({verbName:'filter'})
  filter (ctx:RpsContext,opts:{}, functor:any[], fn:any) : Promise<any[]> {
    return Promise.resolve( _.filter(functor,fn));
  }

  @rpsAction({verbName:'find'})
  find (ctx:RpsContext,opts:{}, functor:any[], fn:any) : Promise<any> {
    return Promise.resolve(_.find(functor,fn));
  }

  @rpsAction({verbName:'keys'})
  keys (ctx:RpsContext,opts:{}, functor:Object, fn:any) : Promise<any[]> {
    return Promise.resolve(_.keys(functor));
  }
  @rpsAction({verbName:'values'})
  values (ctx:RpsContext,opts:{}, functor:Object, fn:any) : Promise<any[]> {
    return Promise.resolve(_.values(functor));
  }
  @rpsAction({verbName:'pick'})
  pick (ctx:RpsContext,opts:{}, functor:Object, fn:any) : Promise<Object> {
    return Promise.resolve(_.pick(functor,fn));
  }

  
  @rpsAction({verbName:'for-each'})
  async forEach (ctx:RpsContext, opts:{}, functor:any[], fn:Function) : Promise<void> {
    for(var i =0;i<functor.length;i++){
      let item = functor[i];
      await fn(item);
    }
  }

  @rpsAction({verbName:'date-now'})
  now (ctx:RpsContext,opts:{}) : Promise<Date> {
    return Promise.resolve(new Date(_.now()));
  }


  @rpsAction({verbName:'lodash-function'})
  getLodashFunction(ctx:RpsContext,opts:{},fnName:string) : Promise<Function> {
    return Promise.resolve(_[fnName]);
  }

  @rpsAction({verbName:'lodash'})
  lodashOpt(ctx:RpsContext,opts:{},fnName:string,...values:any[]) : Promise<any> {
    let fn = _[fnName];
    return Promise.resolve(fn.apply(this,values));
  }
}

