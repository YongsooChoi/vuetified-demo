(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],u=0,m=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/vuetified-demo/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0dc6":function(t,e,a){"use strict";a("3303")},3303:function(t,e,a){},4891:function(t,e,a){"use strict";a("70c1")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("navigation-drawer",{attrs:{profile:t.profile,menus:t.menus}}),a("v-main",{staticStyle:{margin:"100px"}},[a("router-view")],1),a("v-footer",{attrs:{app:""}},[t._v("last rendered: "+t._s(t.getCurrentTime))]),a("system-bar",{attrs:{showSystemBar:t.showSystemBar},on:{closeSystemBar:function(){return t.showSystemBar=!1}}})],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{app:"",dark:"",permanent:"","mini-variant":"","expand-on-hover":"",stateless:"","disable-resize-watcher":""}},[a("v-list",[a("v-list-item",{staticClass:"px-2"},[a("v-badge",{attrs:{bordered:"",bottom:"",color:"light-green accent-8",dot:"","offset-x":"22","offset-y":"20"}},[a("v-list-item-avatar",[a("v-img",{attrs:{src:"https://lh3.google.com/u/1/ogw/ADGmqu_eRWSc24afhgLWGhWki3ZB0oPIZypP1Oi0DFs1=s64-c-mo"}})],1)],1)],1),a("v-list-item",{attrs:{link:"",to:"/profile"}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.profile.name)+" ")]),a("v-list-item-subtitle",[t._v(t._s(t.profile.email))])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{nav:"",dense:""}},t._l(t.menus,(function(e){return a("v-list-item",{key:e.id,attrs:{to:e.path}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-folder")])],1),a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)},o=[],l={props:["profile","menus"]},c=l,d=a("2877"),u=a("6544"),m=a.n(u),p=a("4ca6"),v=a("ce7e"),f=a("132d"),h=a("adda"),b=a("8860"),g=a("da13"),_=a("8270"),x=a("5d23"),y=a("34c3"),k=a("f774"),V=Object(d["a"])(c,n,o,!1,null,"d481e3c0",null),C=V.exports;m()(V,{VBadge:p["a"],VDivider:v["a"],VIcon:f["a"],VImg:h["a"],VList:b["a"],VListItem:g["a"],VListItemAvatar:_["a"],VListItemContent:x["a"],VListItemIcon:y["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VNavigationDrawer:k["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showSystemBar?a("v-system-bar",{attrs:{app:"",window:""}},[a("v-icon",[t._v("mdi-message")]),a("span",[t._v("2 unread messages")]),a("v-spacer"),a("v-icon",{on:{click:t.onClose}},[t._v("mdi-close")])],1):t._e()},T=[],S={props:["showSystemBar"],methods:{onClose:function(){this.$emit("closeSystemBar")}}},j=S,P=a("2fa4"),O=a("afd9"),$=Object(d["a"])(j,w,T,!1,null,"0b46a1f0",null),E=$.exports;m()($,{VIcon:f["a"],VSpacer:P["a"],VSystemBar:O["a"]});var A="initStore",D="FETCH_POSTS",I={name:"App",components:{NavigationDrawer:C,SystemBar:E},data:function(){return{profile:{name:"최용수",name_eng:"Yongsoo Choi",email:"yongsoochoi@hnine.com"},menus:[{id:0,title:"Main",path:"/"},{id:3,title:"Board",path:"/board"},{id:4,title:"Demo",path:"/demo"}],showSystemBar:!0}},computed:{getCurrentTime:function(){return new Date(Date.now())}},created:function(){console.log(this.$route),this.$store.dispatch(D)}},B=I,L=a("7496"),M=a("553a"),q=a("f6c4"),F=Object(d["a"])(B,i,r,!1,null,null,null),R=F.exports;m()(F,{VApp:L["a"],VFooter:M["a"],VMain:q["a"]});var N=a("8c4f"),W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",{staticClass:"text-center"},[s("v-col",{attrs:{cols:"12"}},[s("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),s("v-col",{staticClass:"mb-4"},[s("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),s("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),s("br"),t._v("please join our online "),s("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),s("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),s("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return s("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),s("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),s("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return s("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),s("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[s("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),s("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return s("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},U=[],H={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},z=H,G=a("62ad"),J=a("a523"),Z=a("0fd9"),Q=Object(d["a"])(z,W,U,!1,null,null,null),Y=Q.exports;m()(Q,{VCol:G["a"],VContainer:J["a"],VImg:h["a"],VRow:Z["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-parallax",{attrs:{dark:"",height:"600",src:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v(" Parallax Profile ")]),a("h4",{staticClass:"subheading"},[t._v(" Build your application today! ")])])],1)],1)},X=[],tt={data:function(){return{}},methods:{},computed:{},created:function(){}},et=tt,at=a("8b9c"),st=Object(d["a"])(et,K,X,!1,null,"1b60fe3d",null),it=st.exports;m()(st,{VCol:G["a"],VParallax:at["a"],VRow:Z["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("My Board")]),a("br"),a("v-divider"),a("br"),a("div",{staticClass:"btn-bar"},[a("v-btn",{attrs:{depressed:"",outlined:"",link:"",to:"/board/create"}},[t._v(" 게시글 작성 ")])],1),a("br"),a("v-simple-table",{attrs:{"fixed-header":"",headers:t.headers,search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-text-field",{staticClass:"mx-4",attrs:{label:"Search","append-icon":"mdi-magnify","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]},proxy:!0},{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(" Id ")]),a("th",{staticClass:"text-left"},[t._v(" Title ")]),a("th",{staticClass:"text-left"},[t._v(" 작성자 ")]),a("th",{staticClass:"text-left"},[t._v(" 작성일 ")])])]),a("tbody",t._l(t.posts,(function(e){return a("tr",{key:e.id,on:{click:function(a){return t.moveToDetail(e.id)}}},[a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.userId))]),a("td",[t._v(t._s(e.createdDate?t.createdDate:""))])])})),0)]},proxy:!0}])}),a("br"),a("pagination",{attrs:{page:t.page,pageTotal:t.pageTotal},on:{changePage:t.changePage}})],1)},nt=[],ot=(a("fb6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{length:t.pageTotal},on:{input:t.changePage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)}),lt=[],ct=(a("a9e3"),{props:{page:{type:Number,default:1},pageTotal:{type:Number,default:1}},data:function(){return{currentPage:this.page}},methods:{changePage:function(t){this.$emit("changePage",t)}}}),dt=ct,ut=a("891e"),mt=Object(d["a"])(dt,ot,lt,!1,null,"d0441378",null),pt=mt.exports;m()(mt,{VPagination:ut["a"]});var vt={components:{pagination:pt},data:function(){return{search:"",id:"",page:1,postPerPage:10}},props:[],methods:{moveToDetail:function(t){this.$router.push({name:"boardDetail",params:{id:t}})},changePage:function(t){this.page=t}},computed:{headers:function(){var t=this;return[{text:"ID",align:"start",sortable:!1,value:"id",filter:function(e){return!t.id||e<parseInt(t.id)}},{text:"제목",value:"title"},{text:"작성자 번호"},{text:"작성일"}]},posts:function(){return this.$store.getters.posts.slice(this.postPerPage*(this.page-1),this.postPerPage*this.page)},pageTotal:function(){return this.$store.getters.posts.length/this.postPerPage===0?1:Math.ceil(this.$store.getters.posts.length/this.postPerPage)}},created:function(){}},ft=vt,ht=(a("0dc6"),a("8336")),bt=a("1f4f"),gt=a("8654"),_t=Object(d["a"])(ft,rt,nt,!1,null,"d3366e6c",null),xt=_t.exports;m()(_t,{VBtn:ht["a"],VDivider:v["a"],VSimpleTable:bt["a"],VTextField:gt["a"]});var yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v(t._s(t.detail&&t.detail.title))]),a("span",[t._v("ID "+t._s(t.id&&t.id))]),a("br"),a("span",[t._v("E-mail "+t._s(t.detail.email))]),a("br"),a("div",{staticClass:"btn-bar"},[a("v-btn",{staticStyle:{margin:"10px"},attrs:{depressed:"",outlined:""},on:{click:t.moveToEditPage}},[t._v(" 수정 ")]),a("v-btn",{attrs:{depressed:"",outlined:""},on:{click:t.deletePost}},[t._v(" 삭제 ")])],1),a("br"),a("v-divider"),a("br"),a("div",[a("h2",[t._v("내용")]),a("br"),t._v(" "+t._s(t.detail&&t.detail.body)+" ")])],1)},kt=[],Vt=(a("4de4"),"SET_STORE"),Ct="SET_POSTS",wt="CREATE_POST",Tt="DELETE_POST",St="UPDATE_POST",jt={data:function(){return{}},computed:{id:function(){return this.$route.params.id},posts:function(){return this.$store.getters.posts},detail:function(){var t=this;return this.posts.filter((function(e){return e.id==parseInt(t.id)}))[0]},deleted:function(){return this.detail.deleted}},methods:{deletePost:function(){this.$store.commit(Tt,{id:parseInt(this.id)}),this.$router.push("/board")},moveToEditPage:function(){this.$router.push("/board/".concat(this.id,"/edit"))}},created:function(){this.detail&&this.deleted&&this.$router.push("/board")}},Pt=jt,Ot=(a("4891"),Object(d["a"])(Pt,yt,kt,!1,null,"b718eb2a",null)),$t=Ot.exports;m()(Ot,{VBtn:ht["a"],VDivider:v["a"]});var Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" 게시물 작성 "),a("v-text-field",{attrs:{required:"",rules:t.rules.title,counter:"25",hint:"Title is required",label:"Title"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),a("v-text-field",{attrs:{autocomplete:"email",label:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("v-textarea",{attrs:{required:"",rules:t.rules.contents,counter:"","auto-grow":"",clearable:"","clear-icon":"mdi-close-circle",label:"Contents",placeholder:"300자 이내로 작성"},model:{value:t.form.contents,callback:function(e){t.$set(t.form,"contents",e)},expression:"form.contents"}}),a("div",[a("div",{staticStyle:{float:"right"}},[a("v-btn",{staticStyle:{margin:"10px"},attrs:{depressed:"",outlined:"",link:"",to:"/board"}},[t._v(" 이전으로 ")]),a("v-btn",{attrs:{depressed:"",outlined:""},on:{click:t.save}},[t._v(" 작성 완료 ")])],1)]),a("div",[a("v-checkbox",{attrs:{color:"green"},scopedSlots:t._u([{key:"label",fn:function(){return[a("div",{on:{click:function(t){t.stopPropagation()}}},[t._v(" Do you accept the "),a("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.terms=!0}}},[t._v("terms")]),t._v(" and "),a("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.conditions=!0}}},[t._v("conditions?")])])]},proxy:!0}]),model:{value:t.form.terms,callback:function(e){t.$set(t.form,"terms",e)},expression:"form.terms"}}),a("v-dialog",{attrs:{width:"70%"},model:{value:t.terms,callback:function(e){t.terms=e},expression:"terms"}},[a("v-card",[a("v-card-title",{staticClass:"title"},[t._v(" Terms ")]),t._l(5,(function(e){return a("v-card-text",{key:e},[t._v(" "+t._s(t.content)+" ")])})),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"purple"},on:{click:function(e){t.terms=!1}}},[t._v(" Ok ")])],1)],2)],1),a("v-dialog",{attrs:{width:"70%"},model:{value:t.conditions,callback:function(e){t.conditions=e},expression:"conditions"}},[a("v-card",[a("v-card-title",{staticClass:"title"},[t._v(" Conditions ")]),t._l(5,(function(e){return a("v-card-text",{key:e},[t._v(" "+t._s(t.content)+" ")])})),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"purple"},on:{click:function(e){t.conditions=!1}}},[t._v(" Ok ")])],1)],2)],1)],1)],1)},At=[],Dt=(a("dca8"),{data:function(){var t=Object.freeze({title:"",contents:"",email:"",terms:!1});return{form:Object.assign({},t),rules:{title:[function(t){return t.length<=50||"Max 50 characters"}],contents:[function(t){return t.length<=300||"Max 300 characters"}]},content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",conditions:!1,terms:!1}},methods:{save:function(){var t=this;this.$store.commit(wt,this.form),setTimeout((function(){t.$router.push("/board/".concat(t.$store.getters.id-1))}),1e3)}}}),It=Dt,Bt=a("b0af"),Lt=a("99d9"),Mt=a("ac7c"),qt=a("169a"),Ft=a("a844"),Rt=Object(d["a"])(It,Et,At,!1,null,"027efb60",null),Nt=Rt.exports;m()(Rt,{VBtn:ht["a"],VCard:Bt["a"],VCardActions:Lt["a"],VCardText:Lt["b"],VCardTitle:Lt["c"],VCheckbox:Mt["a"],VDialog:qt["a"],VSpacer:P["a"],VTextField:gt["a"],VTextarea:Ft["a"]});var Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" 게시물 수정 "),a("v-text-field",{attrs:{required:"",rules:t.rules.title,counter:"100",hint:"Title is required",label:"Title"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),a("v-text-field",{attrs:{autocomplete:"email",label:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("v-textarea",{attrs:{required:"",rules:t.rules.body,counter:"","auto-grow":"",clearable:"","clear-icon":"mdi-close-circle",label:"Body",placeholder:"300자 이내로 작성"},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}}),a("v-checkbox",{attrs:{color:"green"},scopedSlots:t._u([{key:"label",fn:function(){return[a("div",{on:{click:function(t){t.stopPropagation()}}},[t._v(" Do you accept the "),a("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.terms=!0}}},[t._v("terms")]),t._v(" and "),a("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.conditions=!0}}},[t._v("conditions?")])])]},proxy:!0}]),model:{value:t.form.terms,callback:function(e){t.$set(t.form,"terms",e)},expression:"form.terms"}}),a("div",{staticStyle:{float:"right"}},[a("v-btn",{attrs:{depressed:"",outlined:""},on:{click:t.edit}},[t._v(" 작성 완료 ")])],1),a("div",[a("v-dialog",{attrs:{width:"70%"},model:{value:t.terms,callback:function(e){t.terms=e},expression:"terms"}},[a("v-card",[a("v-card-title",{staticClass:"title"},[t._v(" Terms ")]),t._l(5,(function(e){return a("v-card-text",{key:e},[t._v(" "+t._s(t.content)+" ")])})),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"purple"},on:{click:function(e){t.terms=!1}}},[t._v(" Ok ")])],1)],2)],1),a("v-dialog",{attrs:{width:"70%"},model:{value:t.conditions,callback:function(e){t.conditions=e},expression:"conditions"}},[a("v-card",[a("v-card-title",{staticClass:"title"},[t._v(" Conditions ")]),t._l(5,(function(e){return a("v-card-text",{key:e},[t._v(" "+t._s(t.content)+" ")])})),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"purple"},on:{click:function(e){t.conditions=!1}}},[t._v(" Ok ")])],1)],2)],1)],1)],1)},Ut=[],Ht=a("5530"),zt={data:function(){return{form:{title:"",body:"",email:"",terms:!1},rules:{title:[function(t){return t.length<=100||"Max 100 characters"}],body:[function(t){return t.length<=300||"Max 300 characters"}]},content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",conditions:!1,terms:!1}},computed:{id:function(){return this.$route.params.id},posts:function(){return this.$store.getters.posts},detail:function(){var t=this;return this.posts.filter((function(e){return e.id==parseInt(t.id)}))[0]}},methods:{edit:function(){this.$store.commit(St,{id:parseInt(this.id),post:this.form}),this.$router.push("/board")}},created:function(){this.form=Object(Ht["a"])(Object(Ht["a"])({},this.form),{},{title:this.detail.title,body:this.detail.body,email:this.detail.email,terms:this.detail.terms})}},Gt=zt,Jt=Object(d["a"])(Gt,Wt,Ut,!1,null,"1ee11b97",null),Zt=Jt.exports;m()(Jt,{VBtn:ht["a"],VCard:Bt["a"],VCardActions:Lt["a"],VCardText:Lt["b"],VCardTitle:Lt["c"],VCheckbox:Mt["a"],VDialog:qt["a"],VSpacer:P["a"],VTextField:gt["a"],VTextarea:Ft["a"]});var Qt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("My Post")])])}],Kt={},Xt=Kt,te=Object(d["a"])(Xt,Qt,Yt,!1,null,"1549e649",null),ee=te.exports,ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Components Demonstration")]),a("div",[a("h2",[t._v("timeline")]),a("v-timeline",{attrs:{"align-top":"",dense:""}},t._l(t.schedules,(function(t){return a("TimelineItem",{key:t.id,attrs:{schedule:t}})})),1),a("br"),a("v-divider"),a("br"),a("h2",[t._v("일정 추가 color-picker, time-picker, v-text-field")]),a("v-form",[a("div",[a("label",{attrs:{for:"color-picker"}},[t._v("색상을 선택해주세요")]),a("v-color-picker",{attrs:{"hide-canvas":"","hide-inputs":"",id:"color-picker"},model:{value:t.schedulesToAdd.color,callback:function(e){t.$set(t.schedulesToAdd,"color",e)},expression:"schedulesToAdd.color"}})],1),a("br"),a("div",[a("label",{attrs:{for:"time-picker"}},[t._v("시작 시간을 선택해주세요")]),a("v-row",{attrs:{id:"time-picker",justify:"space-around",align:"center"}},[a("v-col",{staticStyle:{width:"350px",flex:"0 1 auto"}},[a("h3",[t._v("시작:")]),a("v-time-picker",{attrs:{landscape:"",scrollable:"","ampm-in-title":"",max:t.schedulesToAdd.timeEnd},model:{value:t.schedulesToAdd.timeStart,callback:function(e){t.$set(t.schedulesToAdd,"timeStart",e)},expression:"schedulesToAdd.timeStart"}})],1),a("v-col",{staticStyle:{width:"350px",flex:"0 1 auto"}},[a("h3",[t._v("종료:")]),a("v-time-picker",{attrs:{landscape:"",scrollable:"","ampm-in-title":"",min:t.schedulesToAdd.timeStart},model:{value:t.schedulesToAdd.timeEnd,callback:function(e){t.$set(t.schedulesToAdd,"timeEnd",e)},expression:"schedulesToAdd.timeEnd"}})],1)],1)],1),a("br"),a("div",[a("v-text-field",{attrs:{type:"text",placeholder:"어떤 일정인가요?"},model:{value:t.schedulesToAdd.title,callback:function(e){t.$set(t.schedulesToAdd,"title",e)},expression:"schedulesToAdd.title"}},[a("v-icon",{attrs:{slot:"append",color:"red"},on:{click:t.addSchedules},slot:"append"},[t._v(" mdi-plus ")])],1)],1)])],1),a("br"),a("v-divider"),a("br"),a("h2",[t._v("expansion-paner(유사하게 사용할 수 있는 treeview 컴포넌트도 존재)")]),a("br"),a("expansion-panel",{attrs:{lists:t.posts}}),a("br"),a("v-divider"),a("br"),a("h2",[t._v("dashboard-card")]),a("br"),a("dashboard-card"),a("br"),a("snack-bar",{attrs:{snackbarAttr:t.snackbar},on:{closeSnackBar:function(){return t.snackbar.visible=!1}}})],1)},se=[],ie=(a("99af"),a("2909")),re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-timeline-item",{attrs:{color:t.schedule.options.color,small:t.schedule.options.small}},[a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("strong",[t._v(t._s(t.schedule.time))])]),a("v-col",[a("strong",[t._v(t._s(t.schedule.title))]),a("div",{staticClass:"caption mb-2"},[t._v(t._s(t.schedule.caption))])]),t.schedule.participants.length?a("v-col",{attrs:{cols:"6"}},t._l(t.schedule.participants,(function(e){return a("v-avatar",{key:e},[a("v-img",{attrs:{src:t.profileURL(e)}})],1)})),1):t._e()],1)],1)],1)},ne=[],oe={props:["schedule"],methods:{profileURL:function(t){var e="https://randomuser.me/api/portraits/men/".concat(t,".jpg");return console.log(e),e}},computed:{}},le=oe,ce=a("8212"),de=a("1e06"),ue=Object(d["a"])(le,re,ne,!1,null,"3d68ac48",null),me=ue.exports;m()(ue,{VAvatar:ce["a"],VCol:G["a"],VImg:h["a"],VRow:Z["a"],VTimelineItem:de["a"]});var pe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-expansion-panels",{attrs:{focusable:""}},t._l(t.lists,(function(e){return a("v-expansion-panel",{key:e.id},[a("v-expansion-panel-header",[t._v(t._s(e.title))]),a("v-expansion-panel-content",[t._v(" "+t._s(e.body)+" ")])],1)})),1)},ve=[],fe={props:["lists"],computed:{}},he=fe,be=a("cd55"),ge=a("49e2"),_e=a("c865"),xe=a("0393"),ye=Object(d["a"])(he,pe,ve,!1,null,"4a90fc5f",null),ke=ye.exports;m()(ye,{VExpansionPanel:be["a"],VExpansionPanelContent:ge["a"],VExpansionPanelHeader:_e["a"],VExpansionPanels:xe["a"]});var Ve=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",{attrs:{timeout:t.snackbarAttr.timeout},model:{value:t.snackbarAttr.visible,callback:function(e){t.$set(t.snackbarAttr,"visible",e)},expression:"snackbarAttr.visible"}},[t._v(" "+t._s(t.snackbarAttr.text)+" ")])},Ce=[],we=void 0,Te={props:["snackbarAttr"],methods:{onClose:function(){we.$emit(close)}}},Se=Te,je=a("2db4"),Pe=Object(d["a"])(Se,Ve,Ce,!1,null,"14323376",null),Oe=Pe.exports;m()(Pe,{VSnackbar:je["a"]});var $e=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mt-4 mx-auto",attrs:{"max-width":"400"}},[a("v-sheet",{staticClass:"v-sheet--offset mx-auto",attrs:{color:"cyan",elevation:"12","max-width":"calc(100% - 32px)"}},[a("v-sparkline",{attrs:{labels:t.labels,value:t.value,color:"white","line-width":"2",padding:"16"}})],1),a("v-card-text",{staticClass:"pt-0"},[a("div",{staticClass:"title font-weight-light mb-2"},[t._v(" User Registrations ")]),a("div",{staticClass:"subheading font-weight-light grey--text"},[t._v(" Last Campaign Performance ")]),a("v-divider",{staticClass:"my-2"}),a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-clock ")]),a("span",{staticClass:"caption grey--text font-weight-light"},[t._v("last registration 26 minutes ago")])],1)],1)},Ee=[],Ae={data:function(){return{labels:["2020/6","2020/7","2020/8","2020/9","2020/10","2020/11","2020/12","2021/1"],value:[200,675,410,390,310,460,250,240]}}},De=Ae,Ie=(a("799c"),a("8dd9")),Be=a("7f2e"),Le=Object(d["a"])(De,$e,Ee,!1,null,"e73cec2c",null),Me=Le.exports;m()(Le,{VCard:Bt["a"],VCardText:Lt["b"],VDivider:v["a"],VIcon:f["a"],VSheet:Ie["a"],VSparkline:Be["a"]});var qe={components:{TimelineItem:me,ExpansionPanel:ke,SnackBar:Oe,DashboardCard:Me},data:function(){return{schedules:[{id:0,time:"12:30pm - 1:30pm",title:"점심 시간",caption:"",participants:[],options:{color:"teal lighten-3",small:!0}},{id:1,time:"4pm - 4:30pm",title:"데일리미팅",caption:"Online Meeting",participants:[1,2,9,4],options:{color:"pink",small:!1}}],schedulesToAdd:{color:"",timeStart:"",timeEnd:"",title:""},snackbar:{visible:!1,text:"일정을 등록했습니다",timeout:1200}}},methods:{addSchedules:function(){var t={id:Date.now(),time:"".concat(this.schedulesToAdd.timeStart," - ").concat(this.schedulesToAdd.timeEnd),title:this.schedulesToAdd.title,caption:"",participants:[],options:{color:this.schedulesToAdd.color,small:!0}};this.schedules=[].concat(Object(ie["a"])(this.schedules),[t]),this.snackbar.visible=!0}},computed:{posts:function(){return this.$store.getters.posts.slice(0,7)}}},Fe=qe,Re=a("03a4"),Ne=a("4bd4"),We=a("c964"),Ue=a("8414"),He=Object(d["a"])(Fe,ae,se,!1,null,"7e47926d",null),ze=He.exports;m()(He,{VCol:G["a"],VColorPicker:Re["a"],VDivider:v["a"],VForm:Ne["a"],VIcon:f["a"],VRow:Z["a"],VTextField:gt["a"],VTimePicker:We["a"],VTimeline:Ue["a"]}),s["a"].use(N["a"]);var Ge,Je=new N["a"]({mode:"history",base:"/vuetified-demo/",routes:[{path:"/",name:"main",component:Y},{path:"/profile",name:"profile",component:it},{path:"/post",name:"post",component:ee},{path:"/board",name:"board",component:xt},{path:"/board/create",name:"boardCreate",component:Nt},{path:"/board/:id",name:"boardDetail",component:$t},{path:"/board/:id/edit",name:"boardEdit",component:Zt},{path:"/demo",name:"demo",component:ze}]}),Ze=a("2f62"),Qe=a("ade3"),Ye=a("bc3a"),Ke=a.n(Ye),Xe={users:[]},ta=Object(Qe["a"])({},Vt,(function(t,e){t.users=e})),ea=Object(Qe["a"])({},A,(function(t){var e=t.commit;Ke.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){e(Vt,t.data)}))})),aa={users:function(t){return t.users}},sa={state:Xe,getters:aa,actions:ea,mutations:ta},ia=(a("d81d"),{id:1e3,posts:[]}),ra=(Ge={},Object(Qe["a"])(Ge,Ct,(function(t,e){t.posts=e})),Object(Qe["a"])(Ge,wt,(function(t,e){t.posts.push({id:t.id,title:e.title,body:e.contents,email:e.email,terms:e.terms,deleted:!1}),t.id+=1})),Object(Qe["a"])(Ge,Tt,(function(t,e){t.posts=t.posts.map((function(t){return t.id===e.id&&(t.deleted=!0),t}))})),Object(Qe["a"])(Ge,St,(function(t,e){t.posts=t.posts.map((function(t){return t.id===e.id&&(t=Object(Ht["a"])(Object(Ht["a"])({},t),e.post)),t}))})),Ge),na=Object(Qe["a"])({},D,(function(t){var e=t.commit;Ke.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){e(Ct,t.data.map((function(t){return Object(Ht["a"])(Object(Ht["a"])({},t),{},{deleted:!1})})))}))})),oa={id:function(t){return t.id},posts:function(t){return t.posts.filter((function(t){return 0==t.deleted})).reverse()}},la={state:ia,getters:oa,actions:na,mutations:ra};s["a"].use(Ze["a"]);var ca=new Ze["a"].Store({modules:{users:sa,posts:la}}),da=a("f309");s["a"].use(da["a"]);var ua=new da["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:ua,router:Je,store:ca,render:function(t){return t(R)}}).$mount("#app")},"70c1":function(t,e,a){},"799c":function(t,e,a){"use strict";a("79d8")},"79d8":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.65f72500.js.map