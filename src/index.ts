/**
 * @module Lodash
 */
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';
import _ from 'lodash';

@RpsModule("lodash")
export default class RpsLodash {

  @rpsAction({verbName:'chunk'})
  chunk (ctx:RpsContext,opts:{}, functor:any[], fn:number) : Promise<any[]> {
    return Promise.resolve(_.chunk(functor,fn));
  }

  @rpsAction({verbName:'compact'})
  compact (ctx:RpsContext,opts:{}, functor:any[]) : Promise<any[]> {
    return Promise.resolve(_.compact(functor));
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
    return Promise.resolve(_.map(functor,fn));
  }
  
  @rpsAction({verbName:'filter'})
  filter (ctx:RpsContext,opts:{}, functor:any[], fn:any) : Promise<any[]> {
    return Promise.resolve(_.filter(functor,fn));
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

