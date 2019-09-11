(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"1BNw":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var t=u("pMnS"),b=u("s2y6"),i=u("txK1"),a=u("q5e5"),s=u("Ucaa"),p=u("+jnZ"),r=u("Idk3"),d=u("iInd"),c=u("SVse");class m{ngOnInit(){this.items=[{label:"File",items:[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Download",icon:"pi pi-fw pi-download"}]},{label:"Edit",items:[{label:"Add User",icon:"pi pi-fw pi-user-plus"},{label:"Remove User",icon:"pi pi-fw pi-user-minus"}]}]}}var F=e.mb({encapsulation:2,styles:[],data:{}});function h(l){return e.Hb(0,[(l()(),e.ob(0,0,null,null,5,"div",[["class","content-section introduction"]],null,null,null,null,null)),(l()(),e.ob(1,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),e.ob(2,0,null,null,1,"span",[["class","feature-title"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Menu"])),(l()(),e.ob(4,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Menu is a navigation/command component that supports dynamic and static positioning."])),(l()(),e.ob(6,0,null,null,10,"div",[["class","content-section implementation"]],null,null,null,null,null)),(l()(),e.ob(7,0,null,null,1,"h3",[["class","first"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Basic"])),(l()(),e.ob(9,0,null,null,1,"p-menu",[],null,null,null,b.b,b.a)),e.nb(10,180224,null,0,i.a,[e.k,e.B],{model:[0,"model"]},null),(l()(),e.ob(11,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Popup"])),(l()(),e.ob(13,0,null,null,1,"p-menu",[],null,null,null,b.b,b.a)),e.nb(14,180224,[["menu",4]],0,i.a,[e.k,e.B],{model:[0,"model"],popup:[1,"popup"]},null),(l()(),e.ob(15,0,null,null,1,"button",[["icon","pi pi-bars"],["label","Show"],["pButton",""],["type","button"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.yb(l,14).toggle(u)&&o),o},null,null)),e.nb(16,4341760,null,0,a.b,[e.k],{label:[0,"label"],icon:[1,"icon"]},null),(l()(),e.ob(17,0,null,null,284,"div",[["class","content-section documentation"]],null,null,null,null,null)),(l()(),e.ob(18,0,null,null,283,"p-tabView",[["effect","fade"]],null,null,null,s.d,s.b)),e.nb(19,1097728,null,1,p.b,[e.k],null,null),e.Db(603979776,1,{tabPanels:1}),(l()(),e.ob(21,16777216,null,0,263,"p-tabPanel",[["header","Documentation"]],null,null,null,s.c,s.a)),e.nb(22,1228800,[[1,4]],1,p.a,[e.M],{header:[0,"header"]},null),e.Db(603979776,2,{templates:1}),(l()(),e.ob(24,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Import"])),(l()(),e.ob(26,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(27,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(28,4210688,null,0,r.a,[e.k],null,null),(l()(),e.Fb(-1,null,["\nimport {MenuModule} from 'primeng/menu';\nimport {MenuItem} from 'primeng/api';\n"])),(l()(),e.Fb(-1,null,["\n"])),(l()(),e.ob(31,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["MenuModel API"])),(l()(),e.ob(33,0,null,0,6,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Menu uses the common menumodel api to define its items, visit "])),(l()(),e.ob(35,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.yb(l,36).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),e.nb(36,671744,null,0,d.n,[d.k,d.a,c.g],{routerLink:[0,"routerLink"]},null),e.zb(37,1),(l()(),e.Fb(-1,null,["MenuModel API"])),(l()(),e.Fb(-1,null,[" for details."])),(l()(),e.ob(40,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Getting Started"])),(l()(),e.ob(42,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Menu requires a collection of menuitems as its model."])),(l()(),e.ob(44,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(45,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(46,4210688,null,0,r.a,[e.k],null,null),(l()(),e.Fb(-1,null,['\n<p-menu [model]="items"></p-menu>\n'])),(l()(),e.Fb(-1,null,["\n"])),(l()(),e.ob(49,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(50,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(51,4210688,null,0,r.a,[e.k],null,null),(l()(),e.Fb(-1,null,["\nexport class MenuDemo {\n    \n    items: MenuItem[];\n\n    ngOnInit() {\n        this.items = [\n            {label: 'New', icon: 'pi pi-fw pi-plus'},\n            {label: 'Open', icon: 'pi pi-fw pi-download'},\n            {label: 'Undo', icon: 'pi pi-fw pi-refresh'}\n        ];\n    }\n}\n"])),(l()(),e.Fb(-1,null,["\n"])),(l()(),e.ob(54,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["SubMenus"])),(l()(),e.ob(56,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Menu supports 1 level of nesting via subitems of an item."])),(l()(),e.ob(58,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(59,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(60,4210688,null,0,r.a,[e.k],null,null),(l()(),e.Fb(-1,null,["\nexport class MenuDemo {\n    \n    items: MenuItem[];\n\n    ngOnInit() {\n        this.items = [{\n            label: 'File',\n            items: [\n                {label: 'New', icon: 'pi pi-fw pi-plus'},\n                {label: 'Download', icon: 'pi pi-fw pi-download'}\n            ]\n        },\n        {\n            label: 'Edit',\n            items: [\n                {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},\n                {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}\n            ]\n        }];\n    }\n}\n"])),(l()(),e.Fb(-1,null,["\n"])),(l()(),e.ob(63,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Popup Mode"])),(l()(),e.ob(65,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Menu is inline by default, popup mode is also supported by enabling popup property and calling toggle method by passing the event from the anchor element."])),(l()(),e.ob(67,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(68,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(69,4210688,null,0,r.a,[e.k],null,null),(l()(),e.Fb(-1,null,['\n<p-menu #menu [popup]="true" [model]="items"></p-menu>\n<button type="button" pButton icon="fa fa-fw fa-list" label="Show" (click)="menu.toggle($event)"></button>\n'])),(l()(),e.Fb(-1,null,["\n"])),(l()(),e.ob(72,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Animation Configuration"])),(l()(),e.ob(74,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Transition of the open and hide animations can be customized using the showTransitionOptions and hideTransitionOptions properties, example below disables the animations altogether."])),(l()(),e.ob(76,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(77,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(78,4210688,null,0,r.a,[e.k],null,null),(l()(),e.Fb(-1,null,['\n<p-menu [showTransitionOptions]="\'0ms\'" [hideTransitionOptions]="\'0ms\'" #menu [popup]="true" [model]="items"></p-menu>\n<button type="button" pButton icon="fa fa-fw fa-list" label="Show" (click)="menu.toggle($event)"></button>\n'])),(l()(),e.Fb(-1,null,["\n"])),(l()(),e.ob(81,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Properties"])),(l()(),e.ob(83,0,null,0,93,"div",[["class","doc-tablewrapper"]],null,null,null,null,null)),(l()(),e.ob(84,0,null,null,92,"table",[["class","doc-table"]],null,null,null,null,null)),(l()(),e.ob(85,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),e.ob(86,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(87,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Name"])),(l()(),e.ob(89,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Type"])),(l()(),e.ob(91,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Default"])),(l()(),e.ob(93,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Description"])),(l()(),e.ob(95,0,null,null,81,"tbody",[],null,null,null,null,null)),(l()(),e.ob(96,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(97,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["model"])),(l()(),e.ob(99,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["array"])),(l()(),e.ob(101,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["null"])),(l()(),e.ob(103,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["An array of menuitems."])),(l()(),e.ob(105,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(106,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["popup"])),(l()(),e.ob(108,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["boolean"])),(l()(),e.ob(110,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["false"])),(l()(),e.ob(112,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Defines if menu would displayed as a popup."])),(l()(),e.ob(114,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(115,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["style"])),(l()(),e.ob(117,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["string"])),(l()(),e.ob(119,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["null"])),(l()(),e.ob(121,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Inline style of the component."])),(l()(),e.ob(123,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(124,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["styleClass"])),(l()(),e.ob(126,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["string"])),(l()(),e.ob(128,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["null"])),(l()(),e.ob(130,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Style class of the component."])),(l()(),e.ob(132,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(133,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["appendTo"])),(l()(),e.ob(135,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["any"])),(l()(),e.ob(137,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["null"])),(l()(),e.ob(139,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,['Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element.'])),(l()(),e.ob(141,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(142,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["baseZIndex"])),(l()(),e.ob(144,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["number"])),(l()(),e.ob(146,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["0"])),(l()(),e.ob(148,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Base zIndex value to use in layering."])),(l()(),e.ob(150,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(151,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["autoZIndex"])),(l()(),e.ob(153,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["boolean"])),(l()(),e.ob(155,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["true"])),(l()(),e.ob(157,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Whether to automatically manage layering."])),(l()(),e.ob(159,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(160,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["showTransitionOptions"])),(l()(),e.ob(162,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["string"])),(l()(),e.ob(164,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["225ms ease-out"])),(l()(),e.ob(166,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Transition options of the show animation."])),(l()(),e.ob(168,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ob(169,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["hideTransitionOptions"])),(l()(),e.ob(171,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["string"])),(l()(),e.ob(173,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["195ms ease-in"])),(l()(),e.ob(175,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Transition options of the hide animation."])),(l()(),e.ob(177,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Events"])),(l()(),e.ob(179,0,null,0,24,"div",[["class","doc-tablewrapper"]],null,null,null,null,null)),(l()(),e.ob(180,0,null,null,23,"table",[["class","doc-table"]],null,null,null,null,null)),(l()(),e.ob(181,0,null,null,7,"thead",[],null,null,null,null,null)),(l()(),e.ob(182,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.ob(183,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Name"])),(l()(),e.ob(185,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Parameters"])),(l()(),e.ob(187,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Description"])),(l()(),e.ob(189,0,null,null,14,"tbody",[],null,null,null,null,null)),(l()(),e.ob(190,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.ob(191,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["onShow"])),(l()(),e.ob(193,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["event: Event object"])),(l()(),e.ob(195,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Callback to invoke when overlay menu is shown."])),(l()(),e.ob(197,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.ob(198,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["onHide"])),(l()(),e.ob(200,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["event: Event object"])),(l()(),e.ob(202,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Callback to invoke when overlay menu is hidden."])),(l()(),e.ob(204,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Methods"])),(l()(),e.ob(206,0,null,0,31,"div",[["class","doc-tablewrapper"]],null,null,null,null,null)),(l()(),e.ob(207,0,null,null,30,"table",[["class","doc-table"]],null,null,null,null,null)),(l()(),e.ob(208,0,null,null,7,"thead",[],null,null,null,null,null)),(l()(),e.ob(209,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.ob(210,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Name"])),(l()(),e.ob(212,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Parameters"])),(l()(),e.ob(214,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Description"])),(l()(),e.ob(216,0,null,null,21,"tbody",[],null,null,null,null,null)),(l()(),e.ob(217,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.ob(218,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["toggle"])),(l()(),e.ob(220,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["event: browser event"])),(l()(),e.ob(222,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Toggles the visibility of the popup menu."])),(l()(),e.ob(224,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.ob(225,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["show"])),(l()(),e.ob(227,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["event: browser event"])),(l()(),e.ob(229,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Displays the popup menu."])),(l()(),e.ob(231,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.ob(232,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["hide"])),(l()(),e.ob(234,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["-"])),(l()(),e.ob(236,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Hides the popup menu."])),(l()(),e.ob(238,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Styling"])),(l()(),e.ob(240,0,null,0,6,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Following is the list of structural style classes, for theming classes visit "])),(l()(),e.ob(242,0,null,null,3,"a",[["href","#"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.yb(l,243).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),e.nb(243,671744,null,0,d.n,[d.k,d.a,c.g],{routerLink:[0,"routerLink"]},null),e.zb(244,1),(l()(),e.Fb(-1,null,["theming page"])),(l()(),e.Fb(-1,null,["."])),(l()(),e.ob(247,0,null,0,33,"div",[["class","doc-tablewrapper"]],null,null,null,null,null)),(l()(),e.ob(248,0,null,null,32,"table",[["class","doc-table"]],null,null,null,null,null)),(l()(),e.ob(249,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e.ob(250,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(251,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Name"])),(l()(),e.ob(253,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Element"])),(l()(),e.ob(255,0,null,null,25,"tbody",[],null,null,null,null,null)),(l()(),e.ob(256,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(257,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ui-menu"])),(l()(),e.ob(259,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Container element."])),(l()(),e.ob(261,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(262,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ui-menu-list"])),(l()(),e.ob(264,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["List element."])),(l()(),e.ob(266,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(267,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ui-menuitem"])),(l()(),e.ob(269,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Menuitem element."])),(l()(),e.ob(271,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(272,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ui-menuitem-text"])),(l()(),e.ob(274,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Label of a menuitem."])),(l()(),e.ob(276,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.ob(277,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["ui-menuitem-icon"])),(l()(),e.ob(279,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Icon of a menuitem."])),(l()(),e.ob(281,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Dependencies"])),(l()(),e.ob(283,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["None."])),(l()(),e.ob(285,16777216,null,0,16,"p-tabPanel",[["header","Source"]],null,null,null,s.c,s.a)),e.nb(286,1228800,[[1,4]],1,p.a,[e.M],{header:[0,"header"]},null),e.Db(603979776,3,{templates:1}),(l()(),e.ob(288,0,null,0,3,"a",[["class","btn-viewsource"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/menu"],["target","_blank"]],null,null,null,null,null)),(l()(),e.ob(289,0,null,null,0,"i",[["class","fa fa-github"]],null,null,null,null,null)),(l()(),e.ob(290,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["View on GitHub"])),(l()(),e.ob(292,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(293,0,null,null,2,"code",[["class","language-markup"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(294,4210688,null,0,r.a,[e.k],null,null),(l()(),e.Fb(-1,null,['\n<h3 class="first">Basic</h3>\n<p-menu [model]="items"></p-menu>\n\n<h3>Popup</h3>\n<p-menu #menu [popup]="true" [model]="items"></p-menu>\n<button type="button" pButton icon="pi pi-bars" label="Show" (click)="menu.toggle($event)"></button>\n'])),(l()(),e.Fb(-1,null,["\n"])),(l()(),e.ob(297,0,null,0,4,"pre",[],null,null,null,null,null)),(l()(),e.ob(298,0,null,null,2,"code",[["class","language-typescript"],["ngNonBindable",""],["pCode",""]],null,null,null,null,null)),e.nb(299,4210688,null,0,r.a,[e.k],null,null),(l()(),e.Fb(-1,null,["\nexport class MenuDemo {\n    \n    items: MenuItem[];\n\n    ngOnInit() {\n        this.items = [{\n            label: 'File',\n            items: [\n                {label: 'New', icon: 'pi pi-fw pi-plus'},\n                {label: 'Download', icon: 'pi pi-fw pi-download'}\n            ]\n        },\n        {\n            label: 'Edit',\n            items: [\n                {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},\n                {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}\n            ]\n        }];\n    }\n}\n"])),(l()(),e.Fb(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,10,0,u.items),l(n,14,0,u.items,!0),l(n,16,0,"Show","pi pi-bars"),l(n,22,0,"Documentation");var e=l(n,37,0,"/menumodel");l(n,36,0,e);var o=l(n,244,0,"/theming");l(n,243,0,o),l(n,286,0,"Source")},function(l,n){l(n,35,0,e.yb(n,36).target,e.yb(n,36).href),l(n,242,0,e.yb(n,243).target,e.yb(n,243).href)})}function g(l){return e.Hb(0,[(l()(),e.ob(0,0,null,null,1,"ng-component",[],null,null,null,h,F)),e.nb(1,114688,null,0,m,[],null,null)],function(l,n){l(n,1,0)},null)}var f=e.kb("ng-component",m,g,{},{},[]);class w{}var v=u("hgQ6"),y=u("4t6f");u.d(n,"MenuDemoModuleNgFactory",function(){return k});var k=e.lb(o,[],function(l){return e.vb([e.wb(512,e.j,e.Y,[[8,[t.a,f]],[3,e.j],e.v]),e.wb(4608,c.l,c.k,[e.s,[2,c.B]]),e.wb(1073742336,c.b,c.b,[]),e.wb(1073742336,d.o,d.o,[[2,d.t],[2,d.k]]),e.wb(1073742336,w,w,[]),e.wb(1073742336,i.c,i.c,[]),e.wb(1073742336,a.c,a.c,[]),e.wb(1073742336,v.h,v.h,[]),e.wb(1073742336,y.b,y.b,[]),e.wb(1073742336,p.c,p.c,[]),e.wb(1073742336,r.b,r.b,[]),e.wb(1073742336,o,o,[]),e.wb(1024,d.i,function(){return[[{path:"",component:m}]]},[])])})}}]);