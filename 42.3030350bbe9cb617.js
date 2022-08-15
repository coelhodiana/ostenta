"use strict";(self.webpackChunkboilerplate_angular=self.webpackChunkboilerplate_angular||[]).push([[42],{7042:(q,l,r)=>{r.r(l),r.d(l,{DashboardModule:()=>b});var s=r(9808),u=r(520),p=r(8661),d=r(1196),c=r(1135),t=r(1223),h=r(2630);function T(i,a){1&i&&t._UZ(0,"i",18)}function Z(i,a){1&i&&t._UZ(0,"i",19)}function g(i,a){if(1&i&&(t.TgZ(0,"div",12),t.TgZ(1,"div"),t.TgZ(2,"p",13),t._uU(3),t.qZA(),t.TgZ(4,"p",14),t.TgZ(5,"small"),t._uU(6),t.ALo(7,"date"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",15),t.YNc(9,T,1,0,"i",16),t.YNc(10,Z,1,0,"i",17),t.TgZ(11,"p"),t._uU(12),t.ALo(13,"currency"),t.qZA(),t.qZA(),t.qZA()),2&i){const n=a.$implicit;t.MGl("routerLink","/transacoes/editar/",n.id,""),t.xp6(3),t.hij(" ",n.description," "),t.xp6(3),t.Oqu(t.lcZ(7,6,n.date)),t.xp6(3),t.Q6J("ngIf","entrada"===n.type),t.xp6(1),t.Q6J("ngIf","sa\xedda"===n.type),t.xp6(2),t.Oqu(t.lcZ(13,8,n.amount))}}function m(i,a){1&i&&(t.TgZ(0,"div",20),t.TgZ(1,"p"),t._uU(2,"Registre transa\xe7\xf5es para come\xe7ar!"),t.qZA(),t.TgZ(3,"button",21),t._UZ(4,"i",22),t._uU(5," nova transa\xe7\xe3o "),t.qZA(),t.qZA())}let v=(()=>{class i{constructor(){this.transactionsList=new c.X([]),this.renderedTransactionsList=new c.X([]),this.activeType="todas"}ngOnInit(){this.getTransactions()}getTransactions(){this.transactions.subscribe({next:n=>{this.renderedTransactionsList.next(n),this.transactionsList.next(n)}})}filterTransactionByType(n){return this.transactionsList.value.filter(e=>e.type===n)}filterTransactionsList(n){if(this.renderedTransactionsList.next(this.transactionsList.value),this.activeType="todas","todas"!==n){this.activeType=n;let e=this.filterTransactionByType(n);this.renderedTransactionsList.next(e)}}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-transactions"]],inputs:{transactions:"transactions"},decls:27,vars:15,consts:[[1,"card"],[1,"card-body"],[1,"header","d-flex","justify-content-between","align-items-center","mb-3"],[1,"card-title","m-0"],[1,"filters"],[1,"dropdown"],["type","button","id","dropdownMenuButton1","data-toggle","dropdown","aria-expanded","false","title","filtro",1,"btn","btn-light","dropdown-toggle"],[1,"bi","bi-filter"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],[1,"dropdown-item",3,"click"],["class","transaction-item",3,"routerLink",4,"ngFor","ngForOf"],["class","text-center mb-5 pb-5 mt-5 pt-5",4,"ngIf"],[1,"transaction-item",3,"routerLink"],[1,"transaction-item__description"],[1,"transaction-item__date"],[1,"transaction-item__value"],["class","bi bi-plus",4,"ngIf"],["class","bi bi-dash",4,"ngIf"],[1,"bi","bi-plus"],[1,"bi","bi-dash"],[1,"text-center","mb-5","pb-5","mt-5","pt-5"],["routerLink","/transacoes","title","Registrar nova transa\xe7\xe3o",1,"btn","btn-primary"],[1,"bi","bi-plus-lg"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h5",3),t._uU(4,"Transa\xe7\xf5es"),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"button",6),t._UZ(8,"i",7),t._uU(9),t.qZA(),t.TgZ(10,"ul",8),t.TgZ(11,"li"),t.TgZ(12,"a",9),t.NdJ("click",function(){return e.filterTransactionsList("todas")}),t._uU(13,"todas"),t.qZA(),t.qZA(),t.TgZ(14,"li"),t.TgZ(15,"a",9),t.NdJ("click",function(){return e.filterTransactionsList("entrada")}),t._uU(16,"entradas"),t.qZA(),t.qZA(),t.TgZ(17,"li"),t.TgZ(18,"a",9),t.NdJ("click",function(){return e.filterTransactionsList("sa\xedda")}),t._uU(19,"sa\xeddas"),t.qZA(),t.qZA(),t.TgZ(20,"li"),t.TgZ(21,"a",9),t.NdJ("click",function(){return e.filterTransactionsList("investido")}),t._uU(22,"investido"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(23,g,14,10,"div",10),t.ALo(24,"async"),t.YNc(25,m,6,0,"div",11),t.ALo(26,"async"),t.qZA(),t.qZA()),2&n){let o;t.xp6(9),t.hij(" ",e.activeType," "),t.xp6(3),t.ekj("active","todas"===e.activeType),t.xp6(3),t.ekj("active","entrada"===e.activeType),t.xp6(3),t.ekj("active","sa\xedda"===e.activeType),t.xp6(3),t.ekj("active","investido"===e.activeType),t.xp6(2),t.Q6J("ngForOf",t.lcZ(24,11,e.renderedTransactionsList)),t.xp6(2),t.Q6J("ngIf",0===(null==(o=t.lcZ(26,13,e.renderedTransactionsList))?null:o.length))}},directives:[s.sg,d.rH,s.O5],pipes:[s.Ov,s.uU,s.H9],styles:[".transaction-item[_ngcontent-%COMP%]{padding:1rem;border-bottom:1px solid #f1f1f1;display:flex;justify-content:space-between;gap:1rem;cursor:pointer}.transaction-item__description[_ngcontent-%COMP%]{margin-bottom:0}.transaction-item__date[_ngcontent-%COMP%]{color:#79757f;font-size:1rem;margin-bottom:0}.transaction-item__value[_ngcontent-%COMP%]{display:flex;gap:.3rem}.transaction-item[_ngcontent-%COMP%]:hover{background-color:var(--background-color)}"]}),i})();const _=d.Bz.forChild([{path:"",component:(()=>{class i{constructor(n,e){this.transactions=n,this.datePipe=e,this.selectedMonth=new Date,this.transactionsList=new c.X([]),this.transactionsListShow=new c.X([]),this.balance=0,this.income=0,this.total=0,this.expense=0,this.investment=0}ngOnInit(){this.getTransactionsList()}getTransactionsList(){this.transactions.listTransactions().subscribe({next:n=>{this.transactionsList.next(n.reverse());const e=this.filterTransactionsByMonth(n);this.transactionsListShow.next(e),this.calculateTotals()}})}filterTransactionByType(n){return this.transactionsListShow.value.filter(e=>e.type===n)}filterTransactionsByMonth(n){return n.filter(e=>this.datePipe.transform(e.date,"yyyy-MM")===this.datePipe.transform(this.selectedMonth,"yyyy-MM"))}calculateTotalOfType(n){return this.filterTransactionByType(n).reduce((y,A)=>y+A.amount,0)}calculateTotals(){this.income=this.calculateTotalOfType("entrada"),this.expense=this.calculateTotalOfType("sa\xedda"),this.investment=this.calculateTotalOfType("investido"),this.getBalance()}getBalance(){this.balance=this.income-(this.expense+this.investment)}selectCurrentMonth(){this.selectedMonth=new Date;const n=this.filterTransactionsByMonth(this.transactionsList.value);this.transactionsListShow.next(n),this.calculateTotals()}selectMonth(n){"next"===n?this.selectedMonth=new Date(this.selectedMonth.setMonth(this.selectedMonth.getMonth()+1)):"prev"===n&&(this.selectedMonth=new Date(this.selectedMonth.setMonth(this.selectedMonth.getMonth()-1)));const e=this.filterTransactionsByMonth(this.transactionsList.value);this.transactionsListShow.next(e),this.calculateTotals()}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(h.v),t.Y36(s.uU))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-dashboard"]],decls:53,vars:19,consts:[[1,"container","mt-5","pt-5"],[1,"header"],[1,"d-flex","align-items-center"],[1,"dropdown","mr-2"],["role","button","data-toggle","dropdown","aria-expanded","false",1,"btn","btn-light","dropdown-toggle"],[1,"dropdown-menu"],[1,"dropdown-item",3,"click"],[1,"m-0","p-0"],[1,"header__buttons"],["type","button","title","editar transa\xe7\xe3o",1,"btn","btn-light",3,"click"],[1,"bi","bi-chevron-left"],[1,"bi","bi-chevron-right"],[1,"row","numbers"],[1,"col-md-3","col-sm-6","mb-4"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"row","reports"],[1,"col"],[3,"transactions"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"a",4),t.TgZ(5,"div",5),t.TgZ(6,"a",6),t.NdJ("click",function(){return e.selectCurrentMonth()}),t._uU(7,"selecionar m\xeas atual"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"h1",7),t._uU(9),t.ALo(10,"uppercase"),t.ALo(11,"date"),t.qZA(),t.qZA(),t.TgZ(12,"div",8),t.TgZ(13,"button",9),t.NdJ("click",function(){return e.selectMonth("prev")}),t._UZ(14,"i",10),t.qZA(),t.TgZ(15,"button",9),t.NdJ("click",function(){return e.selectMonth("next")}),t._UZ(16,"i",11),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",12),t.TgZ(18,"div",13),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"h5",16),t._uU(22,"Saldo"),t.qZA(),t.TgZ(23,"p"),t._uU(24),t.ALo(25,"currency"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",13),t.TgZ(27,"div",14),t.TgZ(28,"div",15),t.TgZ(29,"h5",16),t._uU(30,"Entradas"),t.qZA(),t.TgZ(31,"p"),t._uU(32),t.ALo(33,"currency"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"div",13),t.TgZ(35,"div",14),t.TgZ(36,"div",15),t.TgZ(37,"h5",16),t._uU(38,"Sa\xeddas"),t.qZA(),t.TgZ(39,"p"),t._uU(40),t.ALo(41,"currency"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(42,"div",13),t.TgZ(43,"div",14),t.TgZ(44,"div",15),t.TgZ(45,"h5",16),t._uU(46,"Investido"),t.qZA(),t.TgZ(47,"p"),t._uU(48),t.ALo(49,"currency"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(50,"div",17),t.TgZ(51,"div",18),t._UZ(52,"app-transactions",19),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(9),t.Oqu(t.lcZ(10,6,t.xi3(11,8,e.selectedMonth,"MMM yyyy"))),t.xp6(15),t.Oqu(t.lcZ(25,11,e.balance)),t.xp6(8),t.Oqu(t.lcZ(33,13,e.income)),t.xp6(8),t.Oqu(t.lcZ(41,15,e.expense)),t.xp6(8),t.Oqu(t.lcZ(49,17,e.investment)),t.xp6(4),t.Q6J("transactions",e.transactionsListShow))},directives:[v],pipes:[s.gd,s.uU,s.H9],styles:["@media only screen and (max-width: 500px){.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem}}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:2rem}.header__buttons[_ngcontent-%COMP%]{display:flex;gap:1rem}.numbers[_ngcontent-%COMP%], .reports[_ngcontent-%COMP%]{margin-bottom:2rem}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]}),i})()}]);let b=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[s.uU],imports:[[s.ez,_,u.JF,p.m]]}),i})()}}]);