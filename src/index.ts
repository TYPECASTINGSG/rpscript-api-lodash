import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';
import _, { TemplateExecutor } from 'lodash';
import async from "async";
import fs from 'fs';
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
    var func = async (val, cb) => cb(null,await fn(val));
  
    return new Promise((resolve,reject)=> {
      async.mapSeries(functor,func, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }
  
  @rpsAction({verbName:'filter'})
  filter (ctx:RpsContext,opts:{}, functor:any[], fn:any) : Promise<any[]> {
    var func = async (val, cb) => cb(null,await fn(val));
  
    return new Promise((resolve,reject)=> {
      async.filterSeries(functor,func, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
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

  // ******** STRING *******
  @rpsAction({verbName:'camel-case'})
  camelCase (ctx:RpsContext,opts:{},text:string) : Promise<string> {
    return Promise.resolve(_.camelCase(text));
  }
  @rpsAction({verbName:'capitalize'})
  capitalize (ctx:RpsContext,opts:{},text:string) : Promise<string> {
    return Promise.resolve(_.capitalize(text));
  }
  @rpsAction({verbName:'deburr'})
  deburr (ctx:RpsContext,opts:{},text:string) : Promise<string> {
    return Promise.resolve(_.deburr(text));
  }
  @rpsAction({verbName:'ends-with'})
  endsWith (ctx:RpsContext,opts:Object, target:string,text:string) : Promise<boolean> {
    let position = opts['position'];
    return Promise.resolve(_.endsWith(text,target,position));
  }
  @rpsAction({verbName:'escape'})
  escape (ctx:RpsContext,opts:{},text:string) : Promise<string> {
    return Promise.resolve(_.escape(text));
  }
  @rpsAction({verbName:'escape-regexp'})
  escapeRegExp (ctx:RpsContext,opts:{},text:string) : Promise<string> {
    return Promise.resolve(_.escapeRegExp(text));
  }
  @rpsAction({verbName:'kebab-case'})
  kebabCase (ctx:RpsContext,opts:{},text:string) : Promise<string> {
    return Promise.resolve(_.kebabCase(text));
  }
  @rpsAction({verbName:'lower-case'})
  lowerCase (ctx:RpsContext,opts:{},text:string) : Promise<string> {
    return Promise.resolve(_.lowerCase(text));
  }
  @rpsAction({verbName:'lower-first'})
  lowerFirst (ctx:RpsContext,opts:{},text:string) : Promise<string> {
    return Promise.resolve(_.lowerFirst(text));
  }
  @rpsAction({verbName:'pad'})
  pad (ctx:RpsContext,opts:Object, length:number,text:string ) : Promise<string> {
    let chars = opts['chars'];
    return Promise.resolve(_.pad(text,length,chars));
  }
  @rpsAction({verbName:'pad-end'})
  padEnd (ctx:RpsContext,opts:Object, length:number,text:string) : Promise<string> {
    let chars = opts['chars'];
    return Promise.resolve(_.padEnd(text,length,chars));
  }
  @rpsAction({verbName:'pad-start'})
  padStart (ctx:RpsContext,opts:Object,length:number,text:string) : Promise<string> {
    let chars = opts['chars'];
    return Promise.resolve(_.padStart(text,length,chars));
  }
  @rpsAction({verbName:'parse-int'})
  parseInt (ctx:RpsContext,opts:Object, text:string) : Promise<number> {
    let radix = opts['radix'];
    return Promise.resolve(_.parseInt(text,radix));
  }
  @rpsAction({verbName:'repeat'})
  repeat (ctx:RpsContext,opts:{},n:number,text:string ) : Promise<string> {
    return Promise.resolve(_.repeat(text,n));
  }
  @rpsAction({verbName:'replace'})
  replace (ctx:RpsContext,opts:{}, pattern:string|RegExp, replacement:string,text:string) : Promise<string> {
    return Promise.resolve(_.replace(text,pattern,replacement));
  }
  @rpsAction({verbName:'snake-case'})
  snakeCase (ctx:RpsContext,opts:{},text:string) : Promise<string> {
    return Promise.resolve(_.snakeCase(text));
  }
  @rpsAction({verbName:'split'})
  split (ctx:RpsContext,opts:{},text:string) : Promise<string[]> {
    return Promise.resolve(_.split(text));
  }
  @rpsAction({verbName:'start-case'})
  startCase (ctx:RpsContext,opts:{},text:string) : Promise<string> {
    return Promise.resolve(_.startCase(text));
  }
  @rpsAction({verbName:'starts-with'})
  startsWith (ctx:RpsContext,opts:Object,target:string,text:string) : Promise<boolean> {
    let position = opts['position'];
    return Promise.resolve(_.startsWith(text,target,position));
  }
  @rpsAction({verbName:'template'})
  template (ctx:RpsContext,opts:Object,text:string) : Promise<TemplateExecutor> {
    return Promise.resolve(_.template(text,opts));
  }
  @rpsAction({verbName:'to-lower'})
  toLower (ctx:RpsContext,opts:Object,text:string) : Promise<string> {
    return Promise.resolve(_.toLower(text));
  }
  @rpsAction({verbName:'to-upper'})
  toUpper (ctx:RpsContext,opts:Object,text:string) : Promise<string> {
    return Promise.resolve(_.toUpper(text));
  }
  @rpsAction({verbName:'trim'})
  trim (ctx:RpsContext,opts:Object,text:string) : Promise<string> {
    let chars:string = opts['chars'];
    return Promise.resolve(_.trim(text,chars));
  }
  @rpsAction({verbName:'trim-end'})
  trimEnd (ctx:RpsContext,opts:Object,text:string) : Promise<string> {
    let chars:string = opts['chars'];
    return Promise.resolve(_.trimEnd(text,chars));
  }
  @rpsAction({verbName:'trim-start'})
  trimStart (ctx:RpsContext,opts:Object,text:string) : Promise<string> {
    let chars:string = opts['chars'];
    return Promise.resolve(_.trimStart(text,chars));
  }
  @rpsAction({verbName:'truncate'})
  truncate (ctx:RpsContext,opts:Object,text:string) : Promise<string> {
    return Promise.resolve(_.truncate(text,opts));
  }
  @rpsAction({verbName:'unescape'})
  unescape (ctx:RpsContext,opts:Object,text:string) : Promise<string> {
    return Promise.resolve(_.unescape(text));
  }
  @rpsAction({verbName:'upper-case'})
  upperCase (ctx:RpsContext,opts:{},text:string) : Promise<string> {
    return Promise.resolve(_.upperCase(text));
  }
  @rpsAction({verbName:'upper-first'})
  upperFirst (ctx:RpsContext,opts:{},text:string) : Promise<string> {
    return Promise.resolve(_.upperFirst(text));
  }
  @rpsAction({verbName:'words'})
  words (ctx:RpsContext,opts:{},pattern:string,text:string) : Promise<string[]> {
    return Promise.resolve(_.words(text,pattern));
  }


  // ******** CUSTOMIZE *******


  @rpsAction({verbName:'lodash'})
  getLodashFunction(ctx:RpsContext,opts:{},fnName:string, ...params:any[]) : Promise<any> {
    if(params.length==0) return Promise.resolve(_[fnName]);
    else return _[fnName].apply(this,params);
  }

}

