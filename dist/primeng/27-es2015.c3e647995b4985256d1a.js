(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{Idk3:function(l,n,u){"use strict";u.d(n,"a",function(){return i}),u.d(n,"b",function(){return e});class i{constructor(l){this.el=l}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.el.nativeElement)}}class e{}},NMZH:function(l,n,u){"use strict";u.r(n);var i=u("8Y7J");class e{}var t=u("pMnS"),o=u("Idk3"),s=u("SVse"),c=u("mWoB"),a=u("s7LF"),b=u("aIB/");class r{constructor(l){this.iconService=l}getIcons(){this.iconService.getIcons().subscribe(l=>{this.icons=l,this.filteredIcons=l})}getIcon(l){this.selectedIcon=this.iconService.getIcon(l)}onFilter(l){this.searchText=l.target.value,this.icons||(this.filteredIcons=[]),this.searchText||(this.filteredIcons=this.icons),this.searchText=this.searchText,this.filteredIcons=this.icons.filter(l=>l.icon.tags[0].includes(this.searchText))}unselectIcon(){this.selectedIcon=null}ngOnInit(){this.getIcons()}}var p=i.mb({encapsulation:0,styles:[".icons-list[_ngcontent-%COMP%] {\n            text-align: center;\n        }\n\n        .icons-list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n            font-size: 2em;\n        }\n\n        .icons-list[_ngcontent-%COMP%]   .ui-md-2[_ngcontent-%COMP%] {\n            padding-bottom: 2em;\n        }"],data:{}});function d(l){return i.Hb(0,[(l()(),i.ob(0,0,null,null,3,"div",[["class","ui-g-12 ui-md-2"]],null,null,null,null,null)),(l()(),i.ob(1,0,null,null,0,"i",[],[[8,"className",0]],null,null,null,null)),(l()(),i.ob(2,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),i.Fb(3,null,["pi-",""]))],null,function(l,n){l(n,1,0,i.qb(1,"pi pi-",n.context.$implicit.properties.name,"")),l(n,3,0,n.context.$implicit.properties.name)})}function h(l){return i.Hb(0,[(l()(),i.ob(0,0,null,null,11,"div",[["class","content-section introduction"]],null,null,null,null,null)),(l()(),i.ob(1,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),i.ob(2,0,null,null,1,"span",[["class","feature-title"]],null,null,null,null,null)),(l()(),i.Fb(-1,null,["Icons"])),(l()(),i.ob(4,0,null,null,7,"span",[],null,null,null,null,null)),(l()(),i.Fb(-1,null,["PrimeNG components internally use "])),(l()(),i.ob(6,0,null,null,1,"a",[["href","https://github.com/primefaces/primeicons"]],null,null,null,null,null)),(l()(),i.Fb(-1,null,["PrimeIcons"])),(l()(),i.Fb(-1,null,[" library, the official icons suite from "])),(l()(),i.ob(9,0,null,null,1,"a",[["href","https://www.primetek.com.tr"]],null,null,null,null,null)),(l()(),i.Fb(-1,null,["PrimeTek"])),(l()(),i.Fb(-1,null,["."])),(l()(),i.ob(12,0,null,null,73,"div",[["class","content-section documentation icons-documentation"]],null,null,null,null,null)),(l()(),i.ob(13,0,null,null,1,"h3",[["style","margin-top:0px"]],null,null,null,null,null)),(l()(),i.Fb(-1,null,["Download"])),(l()(),i.ob(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.Fb(-1,null,["PrimeIcons is available at npm, run the following command to download it to your project."])),(l()(),i.ob(17,0,null,null,4,"pre",[],null,null,null,null,null)),(l()(),i.ob(18,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),i.nb(19,4210688,null,0,o.a,[i.k],null,null),(l()(),i.Fb(-1,null,["\nnpm install primeicons --save\n"])),(l()(),i.Fb(-1,null,["\n"])),(l()(),i.ob(22,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),i.Fb(-1,null,["Getting Started"])),(l()(),i.ob(24,0,null,null,12,"p",[],null,null,null,null,null)),(l()(),i.Fb(-1,null,["PrimeIcons use the "])),(l()(),i.ob(26,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),i.Fb(-1,null,["pi pi-{icon}"])),(l()(),i.Fb(-1,null,[" syntax such as "])),(l()(),i.ob(29,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),i.Fb(-1,null,["pi pi-check"])),(l()(),i.Fb(-1,null,[". A standalone icon can be displayed using an element such as "])),(l()(),i.ob(32,0,null,null,1,"i",[],null,null,null,null,null)),(l()(),i.Fb(-1,null,["i"])),(l()(),i.Fb(-1,null,[" or "])),(l()(),i.ob(35,0,null,null,1,"i",[],null,null,null,null,null)),(l()(),i.Fb(-1,null,["span"])),(l()(),i.ob(37,0,null,null,4,"pre",[],null,null,null,null,null)),(l()(),i.ob(38,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),i.nb(39,4210688,null,0,o.a,[i.k],null,null),(l()(),i.Fb(-1,null,['\n<i class="pi pi-check"></i>\n<i class="pi pi-times"></i>\n'])),(l()(),i.Fb(-1,null,["\n"])),(l()(),i.ob(42,0,null,null,0,"i",[["class","pi pi-check"]],null,null,null,null,null)),(l()(),i.ob(43,0,null,null,0,"i",[["class","pi pi-times"]],null,null,null,null,null)),(l()(),i.ob(44,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),i.Fb(-1,null,["Size"])),(l()(),i.ob(46,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.Fb(-1,null,["Size of the icons can easily be changed using font-size property."])),(l()(),i.ob(48,0,null,null,4,"pre",[],null,null,null,null,null)),(l()(),i.ob(49,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),i.nb(50,4210688,null,0,o.a,[i.k],null,null),(l()(),i.Fb(-1,null,['\n<i class="pi pi-check"></i>\n'])),(l()(),i.Fb(-1,null,["\n"])),(l()(),i.ob(53,0,null,null,0,"i",[["class","pi pi-check"]],null,null,null,null,null)),(l()(),i.ob(54,0,null,null,4,"pre",[],null,null,null,null,null)),(l()(),i.ob(55,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),i.nb(56,4210688,null,0,o.a,[i.k],null,null),(l()(),i.Fb(-1,null,['\n<i class="pi pi-check" style="font-size: 3em"></i>\n'])),(l()(),i.Fb(-1,null,["\n"])),(l()(),i.ob(59,0,null,null,0,"i",[["class","pi pi-check"],["style","font-size: 3em"]],null,null,null,null,null)),(l()(),i.ob(60,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),i.Fb(-1,null,["Spinning Animation"])),(l()(),i.ob(62,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.Fb(-1,null,["Special pi-spin class applies infinite rotate to an icon."])),(l()(),i.ob(64,0,null,null,4,"pre",[],null,null,null,null,null)),(l()(),i.ob(65,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),i.nb(66,4210688,null,0,o.a,[i.k],null,null),(l()(),i.Fb(-1,null,['\n<i class="pi pi-spin pi-spinner" style="font-size: 3em"></i>\n'])),(l()(),i.Fb(-1,null,["\n"])),(l()(),i.ob(69,0,null,null,0,"i",[["class","pi pi-spin pi-spinner"],["style","font-size: 3em"]],null,null,null,null,null)),(l()(),i.ob(70,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),i.Fb(-1,null,["List of Icons"])),(l()(),i.ob(72,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),i.Fb(-1,null,["Here is the current list of PrimeIcons, more icons will be added periodically. You may also "])),(l()(),i.ob(74,0,null,null,1,"a",[["href","https://github.com/primefaces/primeicons/issues"]],null,null,null,null,null)),(l()(),i.Fb(-1,null,["request new icons"])),(l()(),i.Fb(-1,null,[" at the issue tracker."])),(l()(),i.ob(77,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),i.ob(78,0,null,null,4,"input",[["class","icon-filter"],["pInputText",""],["placeholder","Search an icon"]],[[2,"ui-inputtext",null],[2,"ui-corner-all",null],[2,"ui-state-default",null],[2,"ui-widget",null],[2,"ui-state-filled",null]],[[null,"input"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==i.yb(l,82).onInput(u)&&e),"input"===n&&(e=!1!==t.onFilter(u)&&e),e},null,null)),i.Cb(512,null,s.y,s.z,[i.k,i.r,i.B]),i.nb(80,278528,null,0,s.m,[s.y],{ngStyle:[0,"ngStyle"]},null),i.Bb(81,{width:0,padding:1,margin:2}),i.nb(82,278528,null,0,c.a,[i.k,[2,a.o]],null,null),(l()(),i.ob(83,0,null,null,2,"div",[["class","ui-g icons-list"]],null,null,null,null,null)),(l()(),i.db(16777216,null,null,1,null,d)),i.nb(85,278528,null,0,s.i,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component,i=l(n,81,0,"100%","1em","16px 0 26px 0");l(n,80,0,i),l(n,82,0),l(n,85,0,u.filteredIcons)},function(l,n){l(n,78,0,!0,!0,!0,!0,i.yb(n,82).filled)})}function m(l){return i.Hb(0,[(l()(),i.ob(0,0,null,null,1,"ng-component",[],null,null,null,h,p)),i.nb(1,114688,null,0,r,[b.a],null,null)],function(l,n){l(n,1,0)},null)}var g=i.kb("ng-component",r,m,{},{},[]),f=u("iInd");class F{}u.d(n,"IconsModuleNgFactory",function(){return w});var w=i.lb(e,[],function(l){return i.vb([i.wb(512,i.j,i.Y,[[8,[t.a,g]],[3,i.j],i.v]),i.wb(4608,s.l,s.k,[i.s,[2,s.B]]),i.wb(1073742336,s.b,s.b,[]),i.wb(1073742336,c.b,c.b,[]),i.wb(1073742336,o.b,o.b,[]),i.wb(1073742336,f.o,f.o,[[2,f.t],[2,f.k]]),i.wb(1073742336,F,F,[]),i.wb(1073742336,e,e,[]),i.wb(1024,f.i,function(){return[[{path:"",component:r}]]},[])])})}}]);