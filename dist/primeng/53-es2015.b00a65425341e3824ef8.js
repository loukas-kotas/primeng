(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{JyT9:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var t=u("pMnS"),i=u("9cbe"),r=u("s7LF");Object(e.R)(()=>a);class a{constructor(l,n,u){this.el=l,this.renderer=n,this.cd=u,this.format="hex",this.autoZIndex=!0,this.baseZIndex=0,this.showTransitionOptions="225ms ease-out",this.hideTransitionOptions="195ms ease-in",this.onChange=new e.m,this.defaultColor="ff0000",this.onModelChange=(()=>{}),this.onModelTouched=(()=>{})}set colorSelector(l){this.colorSelectorViewChild=l}set colorHandle(l){this.colorHandleViewChild=l}set hue(l){this.hueViewChild=l}set hueHandle(l){this.hueHandleViewChild=l}onHueMousedown(l){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.hueDragging=!0,this.pickHue(l))}pickHue(l){let n=this.hueViewChild.nativeElement.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0);this.value=this.validateHSB({h:Math.floor(360*(150-Math.max(0,Math.min(150,l.pageY-n)))/150),s:this.value.s,b:this.value.b}),this.updateColorSelector(),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:l,value:this.getValueToUpdate()})}onColorMousedown(l){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.colorDragging=!0,this.pickColor(l))}pickColor(l){let n=this.colorSelectorViewChild.nativeElement.getBoundingClientRect(),u=n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),e=n.left+document.body.scrollLeft,o=Math.floor(100*Math.max(0,Math.min(150,l.pageX-e))/150),t=Math.floor(100*(150-Math.max(0,Math.min(150,l.pageY-u)))/150);this.value=this.validateHSB({h:this.value.h,s:o,b:t}),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:l,value:this.getValueToUpdate()})}getValueToUpdate(){let l;switch(this.format){case"hex":l="#"+this.HSBtoHEX(this.value);break;case"rgb":l=this.HSBtoRGB(this.value);break;case"hsb":l=this.value}return l}updateModel(){this.onModelChange(this.getValueToUpdate())}writeValue(l){if(l)switch(this.format){case"hex":this.value=this.HEXtoHSB(l);break;case"rgb":this.value=this.RGBtoHSB(l);break;case"hsb":this.value=l}else this.value=this.HEXtoHSB(this.defaultColor);this.updateColorSelector(),this.updateUI()}updateColorSelector(){if(this.colorSelectorViewChild){const l={s:100,b:100};l.h=this.value.h,this.colorSelectorViewChild.nativeElement.style.backgroundColor="#"+this.HSBtoHEX(l)}}updateUI(){this.colorHandleViewChild&&this.hueHandleViewChild.nativeElement&&(this.colorHandleViewChild.nativeElement.style.left=Math.floor(150*this.value.s/100)+"px",this.colorHandleViewChild.nativeElement.style.top=Math.floor(150*(100-this.value.b)/100)+"px",this.hueHandleViewChild.nativeElement.style.top=Math.floor(150-150*this.value.h/360)+"px"),this.inputBgColor="#"+this.HSBtoHEX(this.value)}onInputFocus(){this.onModelTouched()}show(){this.overlayVisible=!0}onOverlayAnimationStart(l){switch(l.toState){case"visible":this.inline||(this.overlay=l.element,this.appendOverlay(),this.autoZIndex&&(this.overlay.style.zIndex=String(this.baseZIndex+ ++i.a.zindex)),this.alignOverlay(),this.bindDocumentClickListener(),this.updateColorSelector(),this.updateUI());break;case"void":this.onOverlayHide()}}appendOverlay(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.overlay):i.a.appendChild(this.overlay,this.appendTo))}restoreOverlayAppend(){this.overlay&&this.appendTo&&this.el.nativeElement.appendChild(this.overlay)}alignOverlay(){this.appendTo?i.a.absolutePosition(this.overlay,this.inputViewChild.nativeElement):i.a.relativePosition(this.overlay,this.inputViewChild.nativeElement)}hide(){this.overlayVisible=!1}onInputClick(){this.selfClick=!0,this.togglePanel()}togglePanel(){this.overlayVisible?this.hide():this.show()}onInputKeydown(l){switch(l.which){case 32:this.togglePanel(),l.preventDefault();break;case 27:case 9:this.hide()}}onPanelClick(){this.selfClick=!0}registerOnChange(l){this.onModelChange=l}registerOnTouched(l){this.onModelTouched=l}setDisabledState(l){this.disabled=l}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen("document","click",()=>{this.selfClick||(this.overlayVisible=!1,this.unbindDocumentClickListener()),this.selfClick=!1,this.cd.markForCheck()}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentMousemoveListener(){this.documentMousemoveListener||(this.documentMousemoveListener=this.renderer.listen("document","mousemove",l=>{this.colorDragging&&this.pickColor(l),this.hueDragging&&this.pickHue(l)}))}unbindDocumentMousemoveListener(){this.documentMousemoveListener&&(this.documentMousemoveListener(),this.documentMousemoveListener=null)}bindDocumentMouseupListener(){this.documentMouseupListener||(this.documentMouseupListener=this.renderer.listen("document","mouseup",()=>{this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()}))}unbindDocumentMouseupListener(){this.documentMouseupListener&&(this.documentMouseupListener(),this.documentMouseupListener=null)}validateHSB(l){return{h:Math.min(360,Math.max(0,l.h)),s:Math.min(100,Math.max(0,l.s)),b:Math.min(100,Math.max(0,l.b))}}validateRGB(l){return{r:Math.min(255,Math.max(0,l.r)),g:Math.min(255,Math.max(0,l.g)),b:Math.min(255,Math.max(0,l.b))}}validateHEX(l){var n=6-l.length;if(n>0){for(var u=[],e=0;e<n;e++)u.push("0");u.push(l),l=u.join("")}return l}HEXtoRGB(l){let n=parseInt(l.indexOf("#")>-1?l.substring(1):l,16);return{r:n>>16,g:(65280&n)>>8,b:255&n}}HEXtoHSB(l){return this.RGBtoHSB(this.HEXtoRGB(l))}RGBtoHSB(l){var n={h:0,s:0,b:0},u=Math.min(l.r,l.g,l.b),e=Math.max(l.r,l.g,l.b),o=e-u;return n.b=e,n.s=0!=e?255*o/e:0,n.h=0!=n.s?l.r==e?(l.g-l.b)/o:l.g==e?2+(l.b-l.r)/o:4+(l.r-l.g)/o:-1,n.h*=60,n.h<0&&(n.h+=360),n.s*=100/255,n.b*=100/255,n}HSBtoRGB(l){var n={r:null,g:null,b:null},u=Math.round(l.h),e=Math.round(255*l.s/100),o=Math.round(255*l.b/100);if(0==e)n={r:o,g:o,b:o};else{var t=o,i=(255-e)*o/255,r=u%60*(t-i)/60;360==u&&(u=0),u<60?(n.r=t,n.b=i,n.g=i+r):u<120?(n.g=t,n.b=i,n.r=t-r):u<180?(n.g=t,n.r=i,n.b=i+r):u<240?(n.b=t,n.r=i,n.g=t-r):u<300?(n.b=t,n.g=i,n.r=i+r):u<360?(n.r=t,n.g=i,n.b=t-r):(n.r=0,n.g=0,n.b=0)}return{r:Math.round(n.r),g:Math.round(n.g),b:Math.round(n.b)}}RGBtoHEX(l){var n=[l.r.toString(16),l.g.toString(16),l.b.toString(16)];for(var u in n)1==n[u].length&&(n[u]="0"+n[u]);return n.join("")}HSBtoHEX(l){return this.RGBtoHEX(this.HSBtoRGB(l))}onOverlayHide(){this.unbindDocumentClickListener(),this.overlay=null}ngOnDestroy(){this.restoreOverlayAppend(),this.onOverlayHide()}}class s{}var b=u("SVse"),c=e.mb({encapsulation:2,styles:[],data:{animation:[{type:7,name:"overlayAnimation",definitions:[{type:0,name:"void",styles:{type:6,styles:{transform:"translateY(5%)",opacity:0},offset:null},options:void 0},{type:0,name:"visible",styles:{type:6,styles:{transform:"translateY(0)",opacity:1},offset:null},options:void 0},{type:1,expr:"void => visible",animation:{type:4,styles:null,timings:"{{showTransitionParams}}"},options:null},{type:1,expr:"visible => void",animation:{type:4,styles:null,timings:"{{hideTransitionParams}}"},options:null}],options:{}}]}});function d(l){return e.Hb(0,[(l()(),e.ob(0,0,[[1,0],["input",1]],null,3,"input",[["class","ui-colorpicker-preview ui-inputtext ui-state-default ui-corner-all"],["readonly","readonly"],["type","text"]],[[1,"id",0],[1,"tabindex",0],[8,"disabled",0],[4,"backgroundColor",null]],[[null,"focus"],[null,"click"],[null,"keydown"]],function(l,n,u){var e=!0,o=l.component;return"focus"===n&&(e=!1!==o.onInputFocus()&&e),"click"===n&&(e=!1!==o.onInputClick()&&e),"keydown"===n&&(e=!1!==o.onInputKeydown(u)&&e),e},null,null)),e.Cb(512,null,b.w,b.x,[e.q,e.r,e.k,e.B]),e.nb(2,278528,null,0,b.h,[b.w],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Bb(3,{"ui-state-disabled":0})],function(l,n){var u=l(n,3,0,n.component.disabled);l(n,2,0,"ui-colorpicker-preview ui-inputtext ui-state-default ui-corner-all",u)},function(l,n){var u=n.component;l(n,0,0,u.inputId,u.tabindex,u.disabled,u.inputBgColor)})}function h(l){return e.Hb(0,[(l()(),e.ob(0,0,null,null,11,"div",[],[[24,"@overlayAnimation",0],[24,"@.disabled",0]],[[null,"click"],[null,"@overlayAnimation.start"]],function(l,n,u){var e=!0,o=l.component;return"click"===n&&(e=!1!==o.onPanelClick()&&e),"@overlayAnimation.start"===n&&(e=!1!==o.onOverlayAnimationStart(u)&&e),e},null,null)),e.Cb(512,null,b.w,b.x,[e.q,e.r,e.k,e.B]),e.nb(2,278528,null,0,b.h,[b.w],{ngClass:[0,"ngClass"]},null),e.Bb(3,{"ui-colorpicker-panel ui-corner-all":0,"ui-colorpicker-overlay-panel ui-shadow":1,"ui-state-disabled":2}),e.Bb(4,{showTransitionParams:0,hideTransitionParams:1}),e.Bb(5,{value:0,params:1}),(l()(),e.ob(6,0,null,null,5,"div",[["class","ui-colorpicker-content"]],null,null,null,null,null)),(l()(),e.ob(7,0,[[2,0],["colorSelector",1]],null,2,"div",[["class","ui-colorpicker-color-selector"]],null,[[null,"mousedown"]],function(l,n,u){var e=!0;return"mousedown"===n&&(e=!1!==l.component.onColorMousedown(u)&&e),e},null,null)),(l()(),e.ob(8,0,null,null,1,"div",[["class","ui-colorpicker-color"]],null,null,null,null,null)),(l()(),e.ob(9,0,[[3,0],["colorHandle",1]],null,0,"div",[["class","ui-colorpicker-color-handle"]],null,null,null,null,null)),(l()(),e.ob(10,0,[[4,0],["hue",1]],null,1,"div",[["class","ui-colorpicker-hue"]],null,[[null,"mousedown"]],function(l,n,u){var e=!0;return"mousedown"===n&&(e=!1!==l.component.onHueMousedown(u)&&e),e},null,null)),(l()(),e.ob(11,0,[[5,0],["hueHandle",1]],null,0,"div",[["class","ui-colorpicker-hue-handle"]],null,null,null,null,null))],function(l,n){var u=n.component,e=l(n,3,0,!0,!u.inline,u.disabled);l(n,2,0,e)},function(l,n){var u=n.component,e=l(n,5,0,"visible",l(n,4,0,u.showTransitionOptions,u.hideTransitionOptions));l(n,0,0,e,!0===u.inline)})}function p(l){return e.Hb(0,[e.Db(671088640,1,{inputViewChild:0}),e.Db(671088640,2,{colorSelector:0}),e.Db(671088640,3,{colorHandle:0}),e.Db(671088640,4,{hue:0}),e.Db(671088640,5,{hueHandle:0}),(l()(),e.ob(5,0,null,null,9,"div",[],null,null,null,null,null)),e.Cb(512,null,b.w,b.x,[e.q,e.r,e.k,e.B]),e.nb(7,278528,null,0,b.h,[b.w],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Bb(8,{"ui-colorpicker ui-widget":0,"ui-colorpicker-overlay":1,"ui-colorpicker-dragging":2}),e.Cb(512,null,b.y,b.z,[e.k,e.r,e.B]),e.nb(10,278528,null,0,b.m,[b.y],{ngStyle:[0,"ngStyle"]},null),(l()(),e.db(16777216,null,null,1,null,d)),e.nb(12,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.db(16777216,null,null,1,null,h)),e.nb(14,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component,e=u.styleClass,o=l(n,8,0,!0,!u.inline,u.colorDragging||u.hueDragging);l(n,7,0,e,o),l(n,10,0,u.style),l(n,12,0,!u.inline),l(n,14,0,u.inline||u.overlayVisible)},null)}var g=u("Ucaa"),m=u("+jnZ"),v=u("Idk3"),k=u("iInd");class y{constructor(){this.color2="#1976D2"}}var F=e.mb({encapsulation:2,styles:[],data:{}});function C(l){return e.Hb(0,[(l()(),e.ob(0,0,null,null,5,"div",[["class","content-section introduction"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,1,"span",[["class","feature-title"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ColorPicker"])),(l()(),e.ob(4,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ColorPicker is an input component to select a color."])),(l()(),e.ob(6,0,null,null,27,"div",[["class","content-section implementation"]],null,null,null,null,null)),(l()(),e.ob(7,0,null,null,1,"h3",[["class","first"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Inline"])),(l()(),e.ob(9,0,null,null,5,"p-colorPicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.color1=u)&&e),e},p,c)),e.nb(10,180224,null,0,a,[e.k,e.B,e.h],{inline:[0,"inline"]},null),e.Cb(1024,null,r.j,function(l){return[l]},[a]),e.nb(12,671744,null,0,r.o,[[8,null],[8,null],[8,null],[6,r.j]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,r.k,null,[r.o]),e.nb(14,16384,null,0,r.l,[[4,r.k]],null,null),(l()(),e.ob(15,0,null,null,3,"p",[["style","margin-top:.5em"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Selected Color: "])),(l()(),e.ob(17,0,null,null,0,"span",[["style","display:inline-block;width:32px;height:32px;vertical-align:middle"]],[[4,"backgroundColor",null]],null,null,null,null)),(l()(),e.Fb(18,null,[" "," "])),(l()(),e.ob(19,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Overlay"])),(l()(),e.ob(21,0,null,null,5,"p-colorPicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.color2=u)&&e),e},p,c)),e.nb(22,180224,null,0,a,[e.k,e.B,e.h],null,null),e.Cb(1024,null,r.j,function(l){return[l]},[a]),e.nb(24,671744,null,0,r.o,[[8,null],[8,null],[8,null],[6,r.j]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,r.k,null,[r.o]),e.nb(26,16384,null,0,r.l,[[4,r.k]],null,null),(l()(),e.ob(27,0,null,null,6,"p",[["style","margin-top:.5em"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Selected Color: "])),(l()(),e.ob(29,0,null,null,4,"span",[],null,null,null,null,null)),e.Cb(512,null,b.y,b.z,[e.k,e.r,e.B]),e.nb(31,278528,null,0,b.m,[b.y],{ngStyle:[0,"ngStyle"]},null),e.Bb(32,{color:0}),(l()(),e.Fb(33,null,["",""])),(l()(),e.ob(34,0,null,null,302,"div",[["class","content-section documentation"]],null,null,null,null,null)),(l()(),e.ob(35,0,null,null,301,"p-tabView",[["effect","fade"]],null,null,null,g.d,g.b)),e.nb(36,1097728,null,1,m.b,[e.k],null,null),e.Db(603979776,1,{tabPanels:1}),(l()(),e.ob(38,16777216,null,0,281,"p-tabPanel",[["header","Documentation"]],null,null,null,g.c,g.a)),e.nb(39,1228800,[[1,4]],1,m.a,[e.M],{header:[0,"header"]},null),e.Db(603979776,2,{templates:1}),(l()(),e.ob(41,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Import"])),(l()(),e.ob(43,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(44,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(45,4210688,null,0,v.a,[e.k],null,null),(l()(),e.Fb(-1,null,["\nimport {ColorPickerModule} from 'primeng/colorpicker';\n"])),(l()(),e.Fb(-1,null,["\n"])),(l()(),e.ob(48,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Getting Started"])),(l()(),e.ob(50,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ColorPicker uses ngModel directive to bind a value."])),(l()(),e.ob(52,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(53,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(54,4210688,null,0,v.a,[e.k],null,null),(l()(),e.Fb(-1,null,['\n<p-colorPicker [(ngModel)]="color"></p-colorPicker>\n'])),(l()(),e.Fb(-1,null,["\n"])),(l()(),e.ob(57,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(58,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(59,4210688,null,0,v.a,[e.k],null,null),(l()(),e.Fb(-1,null,["\nexport class MyComponent {\n\n    color: string;\n\n}\n"])),(l()(),e.Fb(-1,null,["\n"])),(l()(),e.ob(62,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Formats"])),(l()(),e.ob(64,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,['Default color format to use in value binding is "hex" and other possible values are "rgb" and "hsb". Example below has 3 colorpickers having default values with different formats.'])),(l()(),e.ob(66,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(67,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(68,4210688,null,0,v.a,[e.k],null,null),(l()(),e.Fb(-1,null,['\n<p-colorPicker [(ngModel)]="color1"></p-colorPicker>\n<p-colorPicker [(ngModel)]="color2" format="rgb"></p-colorPicker>\n<p-colorPicker [(ngModel)]="color3" format="hsb"></p-colorPicker>\n'])),(l()(),e.Fb(-1,null,["\n"])),(l()(),e.ob(71,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(72,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(73,4210688,null,0,v.a,[e.k],null,null),(l()(),e.Fb(-1,null,["\nexport class MyComponent {\n\n    color1: string;\n    \n    color2: any = {\n        r: 100, g: 130, b: 150\n    };\n    \n    color3: any = {\n        h: 100, s: 50, b: 50\n    };\n\n}\n"])),(l()(),e.Fb(-1,null,["\n"])),(l()(),e.ob(76,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Overlay and Inline"])),(l()(),e.ob(78,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,['ColorPicker can be displayed as inline or as an overlay (default) using the "inline" property.'])),(l()(),e.ob(80,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(81,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(82,4210688,null,0,v.a,[e.k],null,null),(l()(),e.Fb(-1,null,['\n<p-colorPicker [(ngModel)]="color1" ></p-colorPicker>\n<p-colorPicker [(ngModel)]="color2" [inline]="true"></p-colorPicker>\n'])),(l()(),e.Fb(-1,null,["\n"])),(l()(),e.ob(85,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Model Driven Forms"])),(l()(),e.ob(87,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Colorpicker can be used in a model driven form as well."])),(l()(),e.ob(89,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(90,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(91,4210688,null,0,v.a,[e.k],null,null),(l()(),e.Fb(-1,null,['\n<p-colorPicker formControlName="color"></p-colorPicker>\n'])),(l()(),e.Fb(-1,null,["\n"])),(l()(),e.ob(94,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Animation Configuration"])),(l()(),e.ob(96,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Transition of the open and hide animations can be customized using the showTransitionOptions and hideTransitionOptions properties, example below disables the animations altogether."])),(l()(),e.ob(98,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(99,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(100,4210688,null,0,v.a,[e.k],null,null),(l()(),e.Fb(-1,null,['\n<p-colorPicker [showTransitionOptions]="\'0ms\'" [hideTransitionOptions]="\'0ms\'" formControlName="color"></p-colorPicker>\n'])),(l()(),e.Fb(-1,null,["\n"])),(l()(),e.ob(103,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Properties"])),(l()(),e.ob(105,0,null,0,120,"div",[["class","doc-tablewrapper"]],null,null,null,null,null)),(l()(),e.ob(106,0,null,null,119,"table",[["class","doc-table"]],null,null,null,null,null)),(l()(),e.ob(107,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),e.ob(108,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(109,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Name"])),(l()(),e.ob(111,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Type"])),(l()(),e.ob(113,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Default"])),(l()(),e.ob(115,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Description"])),(l()(),e.ob(117,0,null,null,108,"tbody",[],null,null,null,null,null)),(l()(),e.ob(118,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(119,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["style"])),(l()(),e.ob(121,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["string"])),(l()(),e.ob(123,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["null"])),(l()(),e.ob(125,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Inline style of the component."])),(l()(),e.ob(127,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(128,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["styleClass"])),(l()(),e.ob(130,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["string"])),(l()(),e.ob(132,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["null"])),(l()(),e.ob(134,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Style class of the component."])),(l()(),e.ob(136,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(137,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["inline"])),(l()(),e.ob(139,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["boolean"])),(l()(),e.ob(141,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["false"])),(l()(),e.ob(143,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Whether to display as an overlay or not."])),(l()(),e.ob(145,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(146,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["format"])),(l()(),e.ob(148,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["string"])),(l()(),e.ob(150,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["hex"])),(l()(),e.ob(152,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,['Format to use in value binding, supported formats are "hex", "rgb" and "hsb".'])),(l()(),e.ob(154,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(155,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["appendTo"])),(l()(),e.ob(157,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["any"])),(l()(),e.ob(159,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["null"])),(l()(),e.ob(161,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,['Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element.'])),(l()(),e.ob(163,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(164,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["tabindex"])),(l()(),e.ob(166,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["number"])),(l()(),e.ob(168,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["null"])),(l()(),e.ob(170,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Index of the element in tabbing order."])),(l()(),e.ob(172,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(173,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["disabled"])),(l()(),e.ob(175,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["boolean"])),(l()(),e.ob(177,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["false"])),(l()(),e.ob(179,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["When present, it specifies that the component should be disabled."])),(l()(),e.ob(181,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(182,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["inputId"])),(l()(),e.ob(184,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["string"])),(l()(),e.ob(186,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["null"])),(l()(),e.ob(188,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Identifier of the focus input to match a label defined for the dropdown."])),(l()(),e.ob(190,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(191,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["baseZIndex"])),(l()(),e.ob(193,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["number"])),(l()(),e.ob(195,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["0"])),(l()(),e.ob(197,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Base zIndex value to use in layering."])),(l()(),e.ob(199,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(200,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["autoZIndex"])),(l()(),e.ob(202,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["boolean"])),(l()(),e.ob(204,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["true"])),(l()(),e.ob(206,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Whether to automatically manage layering."])),(l()(),e.ob(208,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(209,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["showTransitionOptions"])),(l()(),e.ob(211,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["string"])),(l()(),e.ob(213,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["225ms ease-out"])),(l()(),e.ob(215,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Transition options of the show animation."])),(l()(),e.ob(217,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(218,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["hideTransitionOptions"])),(l()(),e.ob(220,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["string"])),(l()(),e.ob(222,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["195ms ease-in"])),(l()(),e.ob(224,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Transition options of the hide animation."])),(l()(),e.ob(226,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Events"])),(l()(),e.ob(228,0,null,0,19,"div",[["class","doc-tablewrapper"]],null,null,null,null,null)),(l()(),e.ob(229,0,null,null,18,"table",[["class","doc-table"]],null,null,null,null,null)),(l()(),e.ob(230,0,null,null,7,"thead",[],null,null,null,null,null)),(l()(),e.ob(231,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.ob(232,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Name"])),(l()(),e.ob(234,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Parameters"])),(l()(),e.ob(236,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Description"])),(l()(),e.ob(238,0,null,null,9,"tbody",[],null,null,null,null,null)),(l()(),e.ob(239,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(240,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["onChange"])),(l()(),e.ob(242,0,null,null,3,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["event.originalEvent: Browser event"])),(l()(),e.ob(244,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,[" event.value: Selected color "])),(l()(),e.ob(246,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Callback to invoke when a color is selected."])),(l()(),e.ob(248,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Styling"])),(l()(),e.ob(250,0,null,0,6,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Following is the list of structural style classes, for theming classes visit "])),(l()(),e.ob(252,0,null,null,3,"a",[["href","#"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.yb(l,253).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),e.nb(253,671744,null,0,k.n,[k.k,k.a,b.g],{routerLink:[0,"routerLink"]},null),e.zb(254,1),(l()(),e.Fb(-1,null,["theming page"])),(l()(),e.Fb(-1,null,["."])),(l()(),e.ob(257,0,null,0,58,"div",[["class","doc-tablewrapper"]],null,null,null,null,null)),(l()(),e.ob(258,0,null,null,57,"table",[["class","doc-table"]],null,null,null,null,null)),(l()(),e.ob(259,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e.ob(260,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(261,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Name"])),(l()(),e.ob(263,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Element"])),(l()(),e.ob(265,0,null,null,50,"tbody",[],null,null,null,null,null)),(l()(),e.ob(266,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(267,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ui-colorpicker"])),(l()(),e.ob(269,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Container element."])),(l()(),e.ob(271,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(272,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ui-colorpicker-overlay"])),(l()(),e.ob(274,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Container element in overlay mode."])),(l()(),e.ob(276,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(277,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ui-colorpicker-preview "])),(l()(),e.ob(279,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Preview input in overlay mode."])),(l()(),e.ob(281,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(282,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ui-colorpicker-panel"])),(l()(),e.ob(284,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Panel element of the colorpicker."])),(l()(),e.ob(286,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(287,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ui-colorpicker-content"])),(l()(),e.ob(289,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Wrapper that contains color and hue sections."])),(l()(),e.ob(291,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(292,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ui-colorpicker-color-selector"])),(l()(),e.ob(294,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Color selector container."])),(l()(),e.ob(296,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(297,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ui-colorpicker-color"])),(l()(),e.ob(299,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Color element."])),(l()(),e.ob(301,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(302,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ui-colorpicker-color-handle"])),(l()(),e.ob(304,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Handle of the color element."])),(l()(),e.ob(306,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(307,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ui-colorpicker-hue"])),(l()(),e.ob(309,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Hue slider."])),(l()(),e.ob(311,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(312,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ui-colorpicker-hue-handle"])),(l()(),e.ob(314,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Handle of the hue slider."])),(l()(),e.ob(316,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Dependencies"])),(l()(),e.ob(318,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["None."])),(l()(),e.ob(320,16777216,null,0,16,"p-tabPanel",[["header","Source"]],null,null,null,g.c,g.a)),e.nb(321,1228800,[[1,4]],1,m.a,[e.M],{header:[0,"header"]},null),e.Db(603979776,3,{templates:1}),(l()(),e.ob(323,0,null,0,3,"a",[["class","btn-viewsource"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/colorpicker"],["target","_blank"]],null,null,null,null,null)),(l()(),e.ob(324,0,null,null,0,"i",[["class","fa fa-github"]],null,null,null,null,null)),(l()(),e.ob(325,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["View on GitHub"])),(l()(),e.ob(327,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(328,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(329,4210688,null,0,v.a,[e.k],null,null),(l()(),e.Fb(-1,null,['\n<h3 class="first">Inline</h3>\n<p-colorPicker [(ngModel)]="color1" [inline]="true"></p-colorPicker>\n\n<p style="margin-top:.5em">Selected Color: <span style="display:inline-block;width:32px;height:32px;vertical-align:middle" [style.backgroundColor]="color1"></span> {{color1}} </p>    \n\n<h3>Overlay</h3>\n<p-colorPicker [(ngModel)]="color2"></p-colorPicker>\n\n<p style="margin-top:.5em">Selected Color: <span [ngStyle]="{\'color\':color2}">{{color2}}</span></p> \n'])),(l()(),e.Fb(-1,null,["\n"])),(l()(),e.ob(332,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(333,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(334,4210688,null,0,v.a,[e.k],null,null),(l()(),e.Fb(-1,null,["\nexport class ColorPickerDemo {\n\n    color1: string;\n    \n    color2: string = '#1976D2';\n}\n"])),(l()(),e.Fb(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,10,0,!0),l(n,12,0,u.color1),l(n,24,0,u.color2);var e=l(n,32,0,u.color2);l(n,31,0,e),l(n,39,0,"Documentation");var o=l(n,254,0,"/theming");l(n,253,0,o),l(n,321,0,"Source")},function(l,n){var u=n.component;l(n,9,0,e.yb(n,14).ngClassUntouched,e.yb(n,14).ngClassTouched,e.yb(n,14).ngClassPristine,e.yb(n,14).ngClassDirty,e.yb(n,14).ngClassValid,e.yb(n,14).ngClassInvalid,e.yb(n,14).ngClassPending),l(n,17,0,u.color1),l(n,18,0,u.color1),l(n,21,0,e.yb(n,26).ngClassUntouched,e.yb(n,26).ngClassTouched,e.yb(n,26).ngClassPristine,e.yb(n,26).ngClassDirty,e.yb(n,26).ngClassValid,e.yb(n,26).ngClassInvalid,e.yb(n,26).ngClassPending),l(n,33,0,u.color2),l(n,252,0,e.yb(n,253).target,e.yb(n,253).href)})}function f(l){return e.Hb(0,[(l()(),e.ob(0,0,null,null,1,"ng-component",[],null,null,null,C,F)),e.nb(1,49152,null,0,y,[],null,null)],null,null)}var w=e.kb("ng-component",y,f,{},{},[]);class M{}var H=u("hgQ6"),B=u("4t6f");u.d(n,"ColorPickerDemoModuleNgFactory",function(){return S});var S=e.lb(o,[],function(l){return e.vb([e.wb(512,e.j,e.Y,[[8,[t.a,w]],[3,e.j],e.v]),e.wb(4608,b.l,b.k,[e.s,[2,b.B]]),e.wb(4608,r.t,r.t,[]),e.wb(1073742336,b.b,b.b,[]),e.wb(1073742336,r.s,r.s,[]),e.wb(1073742336,r.h,r.h,[]),e.wb(1073742336,k.o,k.o,[[2,k.t],[2,k.k]]),e.wb(1073742336,M,M,[]),e.wb(1073742336,s,s,[]),e.wb(1073742336,H.h,H.h,[]),e.wb(1073742336,B.b,B.b,[]),e.wb(1073742336,m.c,m.c,[]),e.wb(1073742336,v.b,v.b,[]),e.wb(1073742336,o,o,[]),e.wb(1024,k.i,function(){return[[{path:"",component:y}]]},[])])})}}]);