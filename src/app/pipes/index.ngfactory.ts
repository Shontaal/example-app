/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './index';
import * as import2 from '@angular/core/src/di/injector';
class PipesModuleInjector extends import0.NgModuleInjector<import1.PipesModule> {
  _PipesModule_0:import1.PipesModule;
  constructor(parent:import2.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  createInternal():import1.PipesModule {
    this._PipesModule_0 = new import1.PipesModule();
    return this._PipesModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.PipesModule)) { return this._PipesModule_0; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const PipesModuleNgFactory:import0.NgModuleFactory<import1.PipesModule> = new import0.NgModuleFactory(PipesModuleInjector,import1.PipesModule);