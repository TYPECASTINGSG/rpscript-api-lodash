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


  @rpsAction({verbName:'flatten-deep'})
  flattenDeep (ctx:RpsContext,opts:{}, functor:any[]) : Promise<any[]> {
    return Promise.resolve(_.flattenDeep(functor));
  }

  @rpsAction({verbName:'flatten'})
  flatten (ctx:RpsContext,opts:{}, functor:any[]) : Promise<any[]> {
    return Promise.resolve(_.flatten(functor));
  }

  @rpsAction({verbName:'index-of'})
  indexOf (ctx:RpsContext,opts:{}, functor:any[], value:any, fromIndex?:number) : Promise<number> {
    return Promise.resolve(_.indexOf(functor,value,fromIndex));
  }

  @rpsAction({verbName:'initial'})
  initial (ctx:RpsContext,opts:{}, functor:any[]) : Promise<any[]> {
    return Promise.resolve(_.initial(functor));
  }

  @rpsAction({verbName:'last'})
  last (ctx:RpsContext,opts:{}, functor:any[]) : Promise<any> {
    return Promise.resolve(_.last(functor));
  }

  @rpsAction({verbName:'uniq'})
  uniq (ctx:RpsContext,opts:{}, functor:any[]) : Promise<any[]> {
    return Promise.resolve(_.uniq(functor));
  }


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

  
  @rpsAction({verbName:'forEach'})
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
}

