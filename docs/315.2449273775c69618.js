"use strict";(self.webpackChunkformApp=self.webpackChunkformApp||[]).push([[315],{4315:(K,h,i)=>{i.r(h),i.d(h,{AuthModule:()=>X});var d=i(6814),p=i(1643),l=i(95),f=i(5592),y=i(7394);class T extends y.w0{constructor(n,t){super()}schedule(n,t=0){return this}}const c={setInterval(s,n,...t){const{delegate:r}=c;return r?.setInterval?r.setInterval(s,n,...t):setInterval(s,n,...t)},clearInterval(s){const{delegate:n}=c;return(n?.clearInterval||clearInterval)(s)},delegate:void 0};var F=i(9039);const g={now:()=>(g.delegate||Date).now(),delegate:void 0};class u{constructor(n,t=u.now){this.schedulerActionCtor=n,this.now=t}schedule(n,t=0,r){return new this.schedulerActionCtor(this,n).schedule(r,t)}}u.now=g.now;const v=new class q extends u{constructor(n,t=u.now){super(n,t),this.actions=[],this._active=!1}flush(n){const{actions:t}=this;if(this._active)return void t.push(n);let r;this._active=!0;do{if(r=n.execute(n.state,n.delay))break}while(n=t.shift());if(this._active=!1,r){for(;n=t.shift();)n.unsubscribe();throw r}}}(class U extends T{constructor(n,t){super(n,t),this.scheduler=n,this.work=t,this.pending=!1}schedule(n,t=0){var r;if(this.closed)return this;this.state=n;const o=this.id,a=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(a,o,t)),this.pending=!0,this.delay=t,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(a,this.id,t),this}requestAsyncId(n,t,r=0){return c.setInterval(n.flush.bind(n,this),r)}recycleAsyncId(n,t,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return t;null!=t&&c.clearInterval(t)}execute(n,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(n,t);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,t){let o,r=!1;try{this.work(n)}catch(a){r=!0,o=a||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:n,scheduler:t}=this,{actions:r}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,F.P)(r,this),null!=n&&(this.id=this.recycleAsyncId(t,n,null)),this.delay=null,super.unsubscribe()}}}),w=v;var I=i(5211),Z=i(8180),C=i(9360),x=i(8251),b=i(2420),S=i(975),N=i(1631),V=i(4829);function A(s,n){return n?t=>(0,I.z)(n.pipe((0,Z.q)(1),function P(){return(0,C.e)((s,n)=>{s.subscribe((0,x.x)(n,b.Z))})}()),t.pipe(A(s))):(0,N.z)((t,r)=>(0,V.Xf)(s(t,r)).pipe((0,Z.q)(1),(0,S.h)(t)))}var j=i(671);var e=i(4946);let J=(()=>{class s{validate(t){const r=t.value;return new f.y(a=>{console.log({email:r}),"miguel.porras@google.com"===r&&(a.next({emailTaken:!0}),a.complete()),a.next(null),a.complete()}).pipe(function z(s,n=v){const t=function L(s=0,n,t=w){let r=-1;return null!=n&&((0,j.K)(n)?t=n:r=n),new f.y(o=>{let a=function E(s){return s instanceof Date&&!isNaN(s)}(s)?+s-t.now():s;a<0&&(a=0);let m=0;return t.schedule(function(){o.closed||(o.next(m++),0<=r?this.schedule(void 0,r):o.complete())},a)})}(s,n);return A(()=>t)}(1e3))}static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),R=(()=>{class s{constructor(){this.firstNameAndLastnamePattern="([a-zA-Z]+) ([a-zA-Z]+)",this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.cantBeStrider=t=>"strider"===t.value.trim().toLowerCase()?{noStrider:!0}:null}isValidField(t,r){return t.controls[r].errors&&t.controls[r].touched}isFieldOneEqualToFieldTwo(t,r){return o=>{const a=o.get(t)?.value,m=o.get(r)?.value;return a!==m?(o.get(r)?.setErrors({notEqual:!0}),{notEqual:!0}):(o.get(r)?.setErrors(null),null)}}static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();function O(s,n){1&s&&(e.TgZ(0,"span",13),e._uU(1," Debe de ser en formato de nombre y apellido "),e.qZA())}function Y(s,n){1&s&&(e.TgZ(0,"span",13),e._uU(1," mensaje de error del email "),e.qZA())}function B(s,n){1&s&&(e.TgZ(0,"span",13),e._uU(1," El username no puede ser Strider "),e.qZA())}function Q(s,n){1&s&&(e.TgZ(0,"span",13),e._uU(1," La contrase\xf1a debe de ser mayor de 6 caracteres. "),e.qZA())}function k(s,n){1&s&&(e.TgZ(0,"span",13),e._uU(1," Las contrase\xf1as deben de ser iguales "),e.qZA())}const M=[{path:"",children:[{path:"sign-up",component:(()=>{class s{constructor(t,r){this.fb=t,this.validatorService=r,this.myForm=this.fb.group({name:["",[l.kI.required,l.kI.pattern(this.validatorService.firstNameAndLastnamePattern)]],email:["",[l.kI.required,l.kI.pattern(this.validatorService.emailPattern)],[new J]],username:["",[l.kI.required,this.validatorService.cantBeStrider]],password:["",[l.kI.required,l.kI.minLength(6)]],password2:["",[l.kI.required]]},{validators:[this.validatorService.isFieldOneEqualToFieldTwo("password","password2")]})}isValidField(t){return this.validatorService.isValidField(this.myForm,t)}onSubmit(){this.myForm.markAllAsTouched()}static#e=this.\u0275fac=function(r){return new(r||s)(e.Y36(l.qu),e.Y36(R))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["ng-component"]],decls:76,vars:27,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","name","placeholder","Nombre del usuario",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","email","formControlName","email","placeholder","Email del usuario",1,"form-control"],["type","text","formControlName","username","placeholder","Nombre c\xf3digo del usuario",1,"form-control"],["type","password","formControlName","password","placeholder","Password de su cuenta",1,"form-control"],["type","password","formControlName","password2","placeholder","Confirmar la contrase\xf1a",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(r,o){1&r&&(e.TgZ(0,"h2"),e._uU(1,"Validaciones Reactivas"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"form",2),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(6,"div",3)(7,"label",4),e._uU(8,"Nombre"),e.qZA(),e.TgZ(9,"div",5),e._UZ(10,"input",6),e.YNc(11,O,2,0,"span",7),e.qZA()(),e.TgZ(12,"div",3)(13,"label",4),e._uU(14,"Email"),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"input",8),e.YNc(17,Y,2,0,"span",7),e.qZA()(),e.TgZ(18,"div",3)(19,"label",4),e._uU(20,"Username"),e.qZA(),e.TgZ(21,"div",5),e._UZ(22,"input",9),e.YNc(23,B,2,0,"span",7),e.qZA()(),e.TgZ(24,"div",3)(25,"label",4),e._uU(26,"Password"),e.qZA(),e.TgZ(27,"div",5),e._UZ(28,"input",10),e.YNc(29,Q,2,0,"span",7),e.qZA()(),e.TgZ(30,"div",3)(31,"label",4),e._uU(32,"Confirmar"),e.qZA(),e.TgZ(33,"div",5),e._UZ(34,"input",11),e.YNc(35,k,2,0,"span",7),e.qZA()(),e.TgZ(36,"div",0)(37,"div",1)(38,"button",12),e._uU(39," Crear "),e.qZA()()()()()(),e.TgZ(40,"h2"),e._uU(41),e.qZA(),e.TgZ(42,"h2"),e._uU(43),e.qZA(),e.TgZ(44,"h2"),e._uU(45),e.qZA(),e.TgZ(46,"h2"),e._uU(47,"Form errors"),e.qZA(),e.TgZ(48,"pre"),e._uU(49),e.ALo(50,"json"),e.qZA(),e.TgZ(51,"h5"),e._uU(52,"Nombre"),e.qZA(),e.TgZ(53,"pre"),e._uU(54),e.ALo(55,"json"),e.qZA(),e.TgZ(56,"h5"),e._uU(57,"Email"),e.qZA(),e.TgZ(58,"pre"),e._uU(59),e.ALo(60,"json"),e.qZA(),e.TgZ(61,"h5"),e._uU(62,"Username"),e.qZA(),e.TgZ(63,"pre"),e._uU(64),e.ALo(65,"json"),e.qZA(),e.TgZ(66,"h5"),e._uU(67,"Password"),e.qZA(),e.TgZ(68,"pre"),e._uU(69),e.ALo(70,"json"),e.qZA(),e.TgZ(71,"h5"),e._uU(72,"Confirmar"),e.qZA(),e.TgZ(73,"pre"),e._uU(74),e.ALo(75,"json"),e.qZA()),2&r&&(e.xp6(5),e.Q6J("formGroup",o.myForm),e.xp6(6),e.Q6J("ngIf",o.isValidField("name")),e.xp6(6),e.Q6J("ngIf",o.isValidField("email")),e.xp6(6),e.Q6J("ngIf",o.isValidField("username")),e.xp6(6),e.Q6J("ngIf",o.isValidField("password")),e.xp6(6),e.Q6J("ngIf",o.isValidField("password2")),e.xp6(6),e.hij("Form Valid: ",o.myForm.valid," "),e.xp6(2),e.hij("Form Status: ",o.myForm.status," "),e.xp6(2),e.hij("Form Pending: ",o.myForm.pending," "),e.xp6(4),e.Oqu(e.lcZ(50,15,o.myForm.errors)),e.xp6(5),e.Oqu(e.lcZ(55,17,o.myForm.controls.name.errors)),e.xp6(5),e.Oqu(e.lcZ(60,19,o.myForm.controls.email.errors)),e.xp6(5),e.Oqu(e.lcZ(65,21,o.myForm.controls.username.errors)),e.xp6(5),e.Oqu(e.lcZ(70,23,o.myForm.value.password)),e.xp6(5),e.Oqu(e.lcZ(75,25,o.myForm.controls.password2.errors)))},dependencies:[d.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,d.Ts],encapsulation:2})}return s})()},{path:"**",redirectTo:"sign-up"}]}];let D=(()=>{class s{static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275mod=e.oAB({type:s});static#r=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(M),p.Bz]})}return s})(),X=(()=>{class s{static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275mod=e.oAB({type:s});static#r=this.\u0275inj=e.cJS({imports:[d.ez,D,l.UX]})}return s})()}}]);