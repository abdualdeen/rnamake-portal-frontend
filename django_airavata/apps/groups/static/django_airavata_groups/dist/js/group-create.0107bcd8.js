(function(e){function t(t){for(var r,a,i=t[0],c=t[1],p=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(f.length)f.shift()();return u.push.apply(u,p||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={"group-create":0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/static/django_airavata_groups/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var s=c;u.push([1,"chunk-vendors","chunk-common"]),n()})({1:function(e,t,n){e.exports=n("1cca")},"1cca":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("d4e1"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("group-editor",{attrs:{group:e.newGroup},on:{saved:e.handleSaved}})},u=[],a=n("1711"),i=n("ac24"),c={name:"group-create-container",props:{next:{type:String,required:!0}},data:function(){return{newGroup:this.createNewGroup()}},components:{GroupEditor:a["a"]},methods:{handleSaved:function(){window.location.assign(this.next)},createNewGroup:function(){var e=new i["b"].Group,t=i["d"].Session.airavataInternalUserId;return e.members.push(t),e.ownerId=t,e}},computed:{},beforeMount:function(){}},p=c,s=n("2877"),l=Object(s["a"])(p,o,u,!1,null,null,null),f=l.exports;Object(r["b"])((function(e){new e({render:function(e){return e(r["a"].MainLayout,[e(f,{props:{next:this.next}})])},data:function(){return{next:"/groups/"}},beforeMount:function(){this.$el.dataset.next&&(this.next=this.$el.dataset.next)}}).$mount("#group-create")}))}});
//# sourceMappingURL=group-create.0107bcd8.js.map