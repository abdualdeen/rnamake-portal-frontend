(function(t){function e(e){for(var n,c,i=e[0],s=e[1],l=e[2],p=0,d=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var s=r[i];0!==o[s]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={"project-list":0},a=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/static/django_airavata_workspace/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;a.push([0,"chunk-vendors","chunk-common"]),r()})({0:function(t,e,r){t.exports=r("aa38")},aa38:function(t,e,r){"use strict";r.r(e);var n=r("d4e1"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[t._m(0),r("div",{staticClass:"col",attrs:{id:"col-new-project"}},[r("project-button-new",{on:{"new-project":t.onNewProject}})],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("project-list",{attrs:{projects:t.projects}}),r("pager",{attrs:{paginator:t.projectsPaginator},on:{next:t.nextProjects,previous:t.previousProjects}})],1)])])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("h1",{staticClass:"h4 mb-4"},[t._v("Browse Projects")])])}],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-new-project",modifiers:{"modal-new-project":!0}}],attrs:{variant:"primary"}},[t._t("default",[t._v(" New Project "),r("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])],2),r("b-modal",{ref:"modalNewProject",attrs:{id:"modal-new-project",title:"Create New Project","ok-disabled":t.okDisabled},on:{ok:t.onCreateProject,cancel:t.onCancelNewProject}},[r("project-editor",{ref:"projectEditor",on:{save:t.onCreateProject,valid:function(e){t.valid=!0},invalid:function(e){t.valid=!1}},model:{value:t.newProject,callback:function(e){t.newProject=e},expression:"newProject"}},[r("div",{attrs:{slot:"title"},slot:"title"})])],1)],1)},i=[],s=r("ac24"),l=r("552b"),u={name:"project-button-new",data:function(){return{valid:!1,newProject:new s["b"].Project}},components:{ProjectEditor:l["a"]},methods:{onCreateProject:function(t){var e=this;t.preventDefault(),s["c"].ProjectService.create({data:this.newProject}).then((function(t){e.$refs.modalNewProject.hide(),e.$emit("new-project",t),e.newProject=new s["b"].Project,e.$refs.projectEditor.reset()}))},onCancelNewProject:function(){this.newProject=new s["b"].Project,this.$refs.projectEditor.reset()}},computed:{okDisabled:function(){return!this.valid}}},p=u,d=r("2877"),j=Object(d["a"])(p,c,i,!1,null,null,null),f=j.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"table table-hover"},[t._m(0),r("tbody",t._l(t.projects,(function(t){return r("project-list-item",{key:t.projectID,attrs:{project:t}})})),1)])},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Name")]),r("th",[t._v("Owner")]),r("th",[t._v("Creation Time")]),r("th",[t._v("Actions")])])])}],m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v(t._s(t.project.name))]),r("td",[t._v(t._s(t.project.owner))]),r("td",{attrs:{title:t.project.creationTime}},[t._v(t._s(t.creationTime))]),r("td",[t.project.userHasWriteAccess?r("a",{attrs:{href:t.editLink}},[t._v("Edit "),r("i",{staticClass:"fa fa-edit",attrs:{"aria-hidden":"true"}})]):t._e()])])},P=[],b=r("ec54"),w=r("c1df"),_=r.n(w),g={name:"project-list-item",props:["project"],computed:{creationTime:function(){var t=new Date(this.project.creationTime);return _()(t).fromNow()},editLink:function(){return b["a"].editProject(this.project)}}},y=g,C=Object(d["a"])(y,m,P,!1,null,null,null),O=C.exports,x={name:"project-list",props:["projects"],data:function(){return{}},components:{ProjectListItem:O}},D=x,k=Object(d["a"])(D,v,h,!1,null,null,null),$=k.exports,N={props:["initialProjectsData"],name:"project-list-container",data:function(){return{projectsPaginator:null}},components:{"project-list":$,"project-button-new":f,pager:n["a"].Pager},methods:{nextProjects:function(){this.projectsPaginator.next()},previousProjects:function(){this.projectsPaginator.previous()},onNewProject:function(){var t=this;s["c"].ProjectService.list().then((function(e){return t.projectsPaginator=e}))}},computed:{projects:function(){return this.projectsPaginator?this.projectsPaginator.results:null}},beforeMount:function(){var t=this;s["c"].ProjectService.list({initialData:this.initialProjectsData}).then((function(e){return t.projectsPaginator=e}))}},E=N,S=(r("dec8"),Object(d["a"])(E,o,a,!1,null,null,null)),M=S.exports;Object(n["b"])((function(t){new t({render:function(t){return t(n["a"].MainLayout,[t(M,{props:{initialProjectsData:this.projectsData}})])},data:function(){return{projectsData:null}},beforeMount:function(){this.$el.dataset.projectsData&&(this.projectsData=JSON.parse(this.$el.dataset.projectsData))}}).$mount("#project-list")}))},cd89:function(t,e,r){},dec8:function(t,e,r){"use strict";var n=r("cd89"),o=r.n(n);o.a}});
//# sourceMappingURL=project-list.be6da1f2.js.map