(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{Kosr:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),o=u("pMnS"),i=u("9cbe"),r=u("K9Ia"),s=function(){function l(){this.commandSource=new r.a,this.responseSource=new r.a,this.commandHandler=this.commandSource.asObservable(),this.responseHandler=this.responseSource.asObservable()}return l.prototype.sendCommand=function(l){l&&this.commandSource.next(l)},l.prototype.sendResponse=function(l){l&&this.responseSource.next(l)},l}(),a=function(){function l(l,n){var u=this;this.el=l,this.terminalService=n,this.commands=[],this.subscription=n.responseHandler.subscribe(function(l){u.commands[u.commands.length-1].response=l,u.commandProcessed=!0})}return l.prototype.ngAfterViewInit=function(){this.container=i.a.find(this.el.nativeElement,".ui-terminal")[0]},l.prototype.ngAfterViewChecked=function(){this.commandProcessed&&(this.container.scrollTop=this.container.scrollHeight,this.commandProcessed=!1)},Object.defineProperty(l.prototype,"response",{set:function(l){l&&(this.commands[this.commands.length-1].response=l,this.commandProcessed=!0)},enumerable:!0,configurable:!0}),l.prototype.handleCommand=function(l){13==l.keyCode&&(this.commands.push({text:this.command}),this.terminalService.sendCommand(this.command),this.command="")},l.prototype.focus=function(l){l.focus()},l.prototype.ngOnDestroy=function(){this.subscription&&this.subscription.unsubscribe()},l}(),b=function(){return function(){}}(),c=u("Ip0R"),m=u("gIcY"),p=e.ob({encapsulation:2,styles:[],data:{}});function d(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.welcomeMessage)})}function h(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Hb(2,null,["",""])),(l()(),e.qb(3,0,null,null,1,"span",[["class","ui-terminal-command"]],null,null,null,null,null)),(l()(),e.Hb(4,null,["",""])),(l()(),e.qb(5,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(6,null,["",""]))],null,function(l,n){l(n,2,0,n.component.prompt),l(n,4,0,n.context.$implicit.text),l(n,6,0,n.context.$implicit.response)})}function g(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,18,"div",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.focus(e.Ab(l,13))&&t),t},null,null)),e.Eb(512,null,c.w,c.x,[e.s,e.t,e.k,e.D]),e.pb(2,278528,null,0,c.h,[c.w],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Eb(512,null,c.y,c.z,[e.k,e.t,e.D]),e.pb(4,278528,null,0,c.m,[c.y],{ngStyle:[0,"ngStyle"]},null),(l()(),e.fb(16777216,null,null,1,null,d)),e.pb(6,16384,null,0,c.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(7,0,null,null,2,"div",[["class","ui-terminal-content"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,h)),e.pb(9,278528,null,0,c.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(10,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),e.qb(11,0,null,null,1,"span",[["class","ui-terminal-content-prompt"]],null,null,null,null,null)),(l()(),e.Hb(12,null,["",""])),(l()(),e.qb(13,0,[["in",1]],null,5,"input",[["autocomplete","off"],["autofocus",""],["class","ui-terminal-input"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keydown"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e.Ab(l,14)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,14).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,14)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,14)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.command=u)&&t),"keydown"===n&&(t=!1!==o.handleCommand(u)&&t),t},null,null)),e.pb(14,16384,null,0,m.c,[e.D,e.k,[2,m.a]],null,null),e.Eb(1024,null,m.j,function(l){return[l]},[m.c]),e.pb(16,671744,null,0,m.o,[[8,null],[8,null],[8,null],[6,m.j]],{model:[0,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,m.k,null,[m.o]),e.pb(18,16384,null,0,m.l,[[4,m.k]],null,null)],function(l,n){var u=n.component;l(n,2,0,u.styleClass,"ui-terminal ui-widget ui-widget-content ui-corner-all"),l(n,4,0,u.style),l(n,6,0,u.welcomeMessage),l(n,9,0,u.commands),l(n,16,0,u.command)},function(l,n){l(n,12,0,n.component.prompt),l(n,13,0,e.Ab(n,18).ngClassUntouched,e.Ab(n,18).ngClassTouched,e.Ab(n,18).ngClassPristine,e.Ab(n,18).ngClassDirty,e.Ab(n,18).ngClassValid,e.Ab(n,18).ngClassInvalid,e.Ab(n,18).ngClassPending)})}var q=u("Ucaa"),f=u("+jnZ"),H=u("Idk3"),y=u("ZYCi"),v=function(){function l(l){var n=this;this.terminalService=l,this.subscription=this.terminalService.commandHandler.subscribe(function(l){var u="date"===l?(new Date).toDateString():"Unknown command: "+l;n.terminalService.sendResponse(u)})}return l.prototype.ngOnDestroy=function(){this.subscription&&this.subscription.unsubscribe()},l}(),S=e.ob({encapsulation:2,styles:[],data:{}});function w(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,5,"div",[["class","content-section introduction"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"span",[["class","feature-title"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Terminal"])),(l()(),e.qb(4,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,['Terminal is a text based user interface. Enter "date" to display the current date.'])),(l()(),e.qb(6,0,null,null,2,"div",[["class","content-section implementation"]],null,null,null,null,null)),(l()(),e.qb(7,0,null,null,1,"p-terminal",[["prompt","primeng $"],["welcomeMessage","Welcome to PrimeNG"]],null,null,null,g,p)),e.pb(8,12763136,null,0,a,[e.k,s],{welcomeMessage:[0,"welcomeMessage"],prompt:[1,"prompt"]},null),(l()(),e.qb(9,0,null,null,132,"div",[["class","content-section documentation"]],null,null,null,null,null)),(l()(),e.qb(10,0,null,null,131,"p-tabView",[["effect","fade"]],null,null,null,q.d,q.b)),e.pb(11,1097728,null,1,f.b,[e.k],null,null),e.Fb(603979776,1,{tabPanels:1}),(l()(),e.qb(13,16777216,null,0,111,"p-tabPanel",[["header","Documentation"]],null,null,null,q.c,q.a)),e.pb(14,1228800,[[1,4]],1,f.a,[e.O],{header:[0,"header"]},null),e.Fb(603979776,2,{templates:1}),(l()(),e.qb(16,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Import"])),(l()(),e.qb(18,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.qb(19,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.pb(20,4210688,null,0,H.a,[e.k],null,null),(l()(),e.Hb(-1,null,["\nimport {TerminalModule} from 'primeng/terminal';\n"])),(l()(),e.Hb(-1,null,["\n"])),(l()(),e.qb(23,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Getting Started"])),(l()(),e.qb(25,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Commands are processed using observables via the TerminalService. Import this service into your component and subscribe to commandHandler to process commands by sending replies with sendResponse function."])),(l()(),e.qb(27,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.qb(28,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.pb(29,4210688,null,0,H.a,[e.k],null,null),(l()(),e.Hb(-1,null,["\nimport {Component} from '@angular/core';\nimport {TerminalService} from 'primeng/components/terminal/terminalservice';\n\n@Component({\n    template: '<p-terminal welcomeMessage=\"Welcome to PrimeNG\" prompt=\"primeng $\"></p-terminal>',\n    providers: [TerminalService]\n})\nexport class TerminalDemo {\n    \n    constructor(private terminalService: TerminalService) {\n        this.terminalService.commandHandler.subscribe(command => {\n            let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;\n            this.terminalService.sendResponse(response);\n        });\n    }\n}\n"])),(l()(),e.Hb(-1,null,["\n"])),(l()(),e.qb(32,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Properties"])),(l()(),e.qb(34,0,null,0,48,"div",[["class","doc-tablewrapper"]],null,null,null,null,null)),(l()(),e.qb(35,0,null,null,47,"table",[["class","doc-table"]],null,null,null,null,null)),(l()(),e.qb(36,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),e.qb(37,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.qb(38,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Name"])),(l()(),e.qb(40,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Type"])),(l()(),e.qb(42,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Default"])),(l()(),e.qb(44,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Description"])),(l()(),e.qb(46,0,null,null,36,"tbody",[],null,null,null,null,null)),(l()(),e.qb(47,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.qb(48,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["welcomeMessage"])),(l()(),e.qb(50,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["string"])),(l()(),e.qb(52,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["null"])),(l()(),e.qb(54,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Initial text to display on terminal."])),(l()(),e.qb(56,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.qb(57,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["prompt"])),(l()(),e.qb(59,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["string"])),(l()(),e.qb(61,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["null"])),(l()(),e.qb(63,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Prompt text for each command."])),(l()(),e.qb(65,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.qb(66,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["style"])),(l()(),e.qb(68,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["string"])),(l()(),e.qb(70,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["null"])),(l()(),e.qb(72,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Inline style of the component."])),(l()(),e.qb(74,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.qb(75,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["styleClass"])),(l()(),e.qb(77,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["string"])),(l()(),e.qb(79,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["null"])),(l()(),e.qb(81,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Style class of the component."])),(l()(),e.qb(83,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Styling"])),(l()(),e.qb(85,0,null,0,6,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Following is the list of structural style classes, for theming classes visit "])),(l()(),e.qb(87,0,null,null,3,"a",[["href","#"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ab(l,88).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e.pb(88,671744,null,0,y.n,[y.k,y.a,c.g],{routerLink:[0,"routerLink"]},null),e.Bb(89,1),(l()(),e.Hb(-1,null,["theming page"])),(l()(),e.Hb(-1,null,["."])),(l()(),e.qb(92,0,null,0,28,"div",[["class","doc-tablewrapper"]],null,null,null,null,null)),(l()(),e.qb(93,0,null,null,27,"table",[["class","doc-table"]],null,null,null,null,null)),(l()(),e.qb(94,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e.qb(95,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(96,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Name"])),(l()(),e.qb(98,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Element"])),(l()(),e.qb(100,0,null,null,20,"tbody",[],null,null,null,null,null)),(l()(),e.qb(101,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(102,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["ui-terminal"])),(l()(),e.qb(104,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Container element."])),(l()(),e.qb(106,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(107,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["ui-terminal-content"])),(l()(),e.qb(109,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Content of terminal."])),(l()(),e.qb(111,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(112,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["ui-terminal-content-prompt"])),(l()(),e.qb(114,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Prompt text."])),(l()(),e.qb(116,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(117,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["ui-terminal-input"])),(l()(),e.qb(119,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Input element to enter commands."])),(l()(),e.qb(121,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Dependencies"])),(l()(),e.qb(123,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["None."])),(l()(),e.qb(125,16777216,null,0,16,"p-tabPanel",[["header","Source"]],null,null,null,q.c,q.a)),e.pb(126,1228800,[[1,4]],1,f.a,[e.O],{header:[0,"header"]},null),e.Fb(603979776,3,{templates:1}),(l()(),e.qb(128,0,null,0,3,"a",[["class","btn-viewsource"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/terminal"],["target","_blank"]],null,null,null,null,null)),(l()(),e.qb(129,0,null,null,0,"i",[["class","fa fa-github"]],null,null,null,null,null)),(l()(),e.qb(130,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["View on GitHub"])),(l()(),e.qb(132,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.qb(133,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.pb(134,4210688,null,0,H.a,[e.k],null,null),(l()(),e.Hb(-1,null,['\n<p-terminal welcomeMessage="Welcome to PrimeNG" prompt="primeng $"></p-terminal>\n'])),(l()(),e.Hb(-1,null,["\n"])),(l()(),e.qb(137,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.qb(138,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.pb(139,4210688,null,0,H.a,[e.k],null,null),(l()(),e.Hb(-1,null,["\nimport {Component} from '@angular/core';\nimport {TerminalService} from 'primeng/components/terminal/terminalservice';\nimport {Subscription} from 'rxjs/Subscription';\n\n@Component({\n    templateUrl: './terminaldemo.html',\n    providers: [TerminalService]\n})\nexport class TerminalDemo {\n\n    subscription: Subscription;\n    \n    constructor(private terminalService: TerminalService) {\n        this.terminalService.commandHandler.subscribe(command => {\n            let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;\n            this.terminalService.sendResponse(response);\n        });\n    }\n    \n    ngOnDestroy() {\n        if(this.subscription) {\n            this.subscription.unsubscribe();\n        }\n    }\n}\n"])),(l()(),e.Hb(-1,null,["\n"]))],function(l,n){l(n,8,0,"Welcome to PrimeNG","primeng $"),l(n,14,0,"Documentation");var u=l(n,89,0,"/theming");l(n,88,0,u),l(n,126,0,"Source")},function(l,n){l(n,87,0,e.Ab(n,88).target,e.Ab(n,88).href)})}function k(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,2,"ng-component",[],null,null,null,w,S)),e.Eb(512,null,s,s,[]),e.pb(2,180224,null,0,v,[s],null,null)],null,null)}var C=e.mb("ng-component",v,k,{},{},[]),D=function(){return function(){}}(),x=u("hgQ6"),A=u("4t6f");u.d(n,"TerminalDemoModuleNgFactory",function(){return P});var P=e.nb(t,[],function(l){return e.xb([e.yb(512,e.j,e.ab,[[8,[o.a,C]],[3,e.j],e.x]),e.yb(4608,c.l,c.k,[e.u,[2,c.B]]),e.yb(4608,m.t,m.t,[]),e.yb(1073742336,c.b,c.b,[]),e.yb(1073742336,y.o,y.o,[[2,y.t],[2,y.k]]),e.yb(1073742336,D,D,[]),e.yb(1073742336,m.s,m.s,[]),e.yb(1073742336,m.h,m.h,[]),e.yb(1073742336,b,b,[]),e.yb(1073742336,x.h,x.h,[]),e.yb(1073742336,A.b,A.b,[]),e.yb(1073742336,f.c,f.c,[]),e.yb(1073742336,H.b,H.b,[]),e.yb(1073742336,t,t,[]),e.yb(1024,y.i,function(){return[[{path:"",component:v}]]},[])])})}}]);