/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './book-authors';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../pipes/add-commas';
var renderType_BookAuthorsComponent_Host:import0.RenderComponentType = (null as any);
class _View_BookAuthorsComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _BookAuthorsComponent_0_4:import3.BookAuthorsComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BookAuthorsComponent_Host0,renderType_BookAuthorsComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('bc-book-authors',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_BookAuthorsComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._BookAuthorsComponent_0_4 = new import3.BookAuthorsComponent();
    this._appEl_0.initComponent(this._BookAuthorsComponent_0_4,([] as any[]),compView_0);
    compView_0.create(this._BookAuthorsComponent_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.BookAuthorsComponent) && (0 === requestNodeIndex))) { return this._BookAuthorsComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_BookAuthorsComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_BookAuthorsComponent_Host === (null as any))) { (renderType_BookAuthorsComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_BookAuthorsComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const BookAuthorsComponentNgFactory:import9.ComponentFactory<import3.BookAuthorsComponent> = new import9.ComponentFactory<import3.BookAuthorsComponent>('bc-book-authors',viewFactory_BookAuthorsComponent_Host0,import3.BookAuthorsComponent);
const styles_BookAuthorsComponent:any[] = ['h5[_ngcontent-%COMP%] {\n      margin-bottom: 5px;\n    }'];
var renderType_BookAuthorsComponent:import0.RenderComponentType = (null as any);
class _View_BookAuthorsComponent0 extends import1.AppView<import3.BookAuthorsComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _pipe_bcAddCommas_0:import10.AddCommasPipe;
  _pipe_bcAddCommas_0_0:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BookAuthorsComponent0,renderType_BookAuthorsComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'h5',(null as any));
    this.renderer.setElementAttribute(this._el_1,'md-subheader','');
    this._text_2 = this.renderer.createText(this._el_1,'Written By:',(null as any));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_4 = this.renderer.createElement(parentRenderNode,'span',(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'',(null as any));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._pipe_bcAddCommas_0 = new import10.AddCommasPipe();
    this._pipe_bcAddCommas_0_0 = import4.pureProxy1(this._pipe_bcAddCommas_0.transform.bind(this._pipe_bcAddCommas_0));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import7.ValueUnwrapper();
    this.detectContentChildrenChanges(throwOnChange);
    valUnwrapper.reset();
    const currVal_0:any = import4.interpolate(1,'\n      ',valUnwrapper.unwrap(import4.castByValue(this._pipe_bcAddCommas_0_0,this._pipe_bcAddCommas_0.transform)(this.context.authors)),'\n    ');
    if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange,this._expr_0,currVal_0))) {
      this.renderer.setText(this._text_5,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_BookAuthorsComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.BookAuthorsComponent> {
  if ((renderType_BookAuthorsComponent === (null as any))) { (renderType_BookAuthorsComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.Emulated,styles_BookAuthorsComponent,{})); }
  return new _View_BookAuthorsComponent0(viewUtils,parentInjector,declarationEl);
}