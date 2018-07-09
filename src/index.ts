/**
 * @module Lodash
 */
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';
import _ from 'lodash';

@RpsModule("lodash")
export default class RpsLodash {

  @rpsAction({verbName:'map'})
  map (ctx:RpsContext,opts:{}, functor:any[], fn:Function) : Promise<any[]> {
    return Promise.resolve(_.map(functor,fn));
  }
  
  @rpsAction({verbName:'filter'})
  filter (ctx:RpsContext,opts:{}, functor:any[], fn:any) : Promise<any[]> {
    return Promise.resolve(_.filter(functor,fn));
  }

  @rpsAction({verbName:'keys'})
  keys (ctx:RpsContext,opts:{}, functor:Object, fn:any) : Promise<any[]> {
    return Promise.resolve(_.keys(functor));
  }
  @rpsAction({verbName:'values'})
  values (ctx:RpsContext,opts:{}, functor:Object, fn:any) : Promise<any[]> {
    return Promise.resolve(_.values(functor));
  }
  
  @rpsAction({verbName:'forEach'})
  async forEach (ctx:RpsContext, opts:{}, functor:any[], fn:Function) : Promise<void> {
    for(var i =0;i<functor.length;i++){
      let item = functor[i];
      await fn(item);
    }
  }
}

