import{S as t,i as e,s as o,e as a,k as n,c as s,a as l,n as d,d as r,b as i,H as c,f as u,I as h,V as f,W as m,X as p,Y as v,Z as g,_ as x,$ as b,R as y,t as w,U as E,g as j,a0 as T,w as _,x as q,u as k,a1 as M,a2 as O,r as U,a3 as I,J as N}from"../../chunks/vendor-a4e104ac.js";function R(t,{pending:e,error:o,result:a}){let n;async function s(s){const l=n={};s.preventDefault();const d=new FormData(t);e&&e(d,t);try{const e=await fetch(t.action,{method:t.method,headers:{accept:"application/json"},body:d});if(l!==n)return;e.ok?a(e,t):o?o(e,null,t):console.error(await e.text())}catch(r){if(!o)throw r;o(null,r,t)}}return t.addEventListener("submit",s),{destroy(){t.removeEventListener("submit",s)}}}function D(t,e,o){const a=t.slice();return a[7]=e[o],a[8]=e,a[9]=o,a}function F(t,e){let o,w,E,j,T,_,q,k,U,I,D,F,P,B,V,$,H,L,S,A,C,J,W,X,Y,Z,z,G,K=N;function Q(...t){return e[3](e[7],e[8],e[9],...t)}function tt(){return e[4](e[7],e[8],e[9])}function et(){return e[5](e[7])}return{key:t,first:null,c(){o=a("div"),w=a("form"),E=a("input"),T=n(),_=a("button"),I=n(),D=a("form"),F=a("input"),B=n(),V=a("button"),H=n(),L=a("form"),S=a("button"),W=n(),this.h()},l(t){o=s(t,"DIV",{class:!0});var e=l(o);w=s(e,"FORM",{action:!0,method:!0});var a=l(w);E=s(a,"INPUT",{type:!0,name:!0,class:!0}),T=d(a),_=s(a,"BUTTON",{class:!0,"aria-label":!0}),l(_).forEach(r),a.forEach(r),I=d(e),D=s(e,"FORM",{class:!0,action:!0,method:!0});var n=l(D);F=s(n,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),B=d(n),V=s(n,"BUTTON",{class:!0,"aria-label":!0}),l(V).forEach(r),n.forEach(r),H=d(e),L=s(e,"FORM",{action:!0,method:!0});var i=l(L);S=s(i,"BUTTON",{class:!0,"aria-label":!0}),l(S).forEach(r),i.forEach(r),W=d(e),e.forEach(r),this.h()},h(){i(E,"type","hidden"),i(E,"name","done"),E.value=j=e[7].done?"":"true",i(E,"class","svelte-dmxqmd"),i(_,"class","toggle svelte-dmxqmd"),i(_,"aria-label",q="Mark todo as "+(e[7].done?"not done":"done")),i(w,"action",k="/todos/"+e[7].uid+".json?_method=patch"),i(w,"method","post"),i(F,"aria-label","Edit todo"),i(F,"type","text"),i(F,"name","text"),F.value=P=e[7].text,i(F,"class","svelte-dmxqmd"),i(V,"class","save svelte-dmxqmd"),i(V,"aria-label","Save todo"),i(D,"class","text svelte-dmxqmd"),i(D,"action",$="/todos/"+e[7].uid+".json?_method=patch"),i(D,"method","post"),i(S,"class","delete svelte-dmxqmd"),i(S,"aria-label","Delete todo"),S.disabled=A=e[7].pending_delete,i(L,"action",C="/todos/"+e[7].uid+".json?_method=delete"),i(L,"method","post"),i(o,"class","todo svelte-dmxqmd"),c(o,"done",e[7].done),this.first=o},m(t,a){u(t,o,a),h(o,w),h(w,E),h(w,T),h(w,_),h(o,I),h(o,D),h(D,F),h(D,B),h(D,V),h(o,H),h(o,L),h(L,S),h(o,W),Z=!0,z||(G=[f(U=R.call(null,w,{pending:Q,result:e[1]})),f(R.call(null,D,{result:e[1]})),f(J=R.call(null,L,{pending:tt,result:et}))],z=!0)},p(t,a){e=t,(!Z||1&a&&j!==(j=e[7].done?"":"true"))&&(E.value=j),(!Z||1&a&&q!==(q="Mark todo as "+(e[7].done?"not done":"done")))&&i(_,"aria-label",q),(!Z||1&a&&k!==(k="/todos/"+e[7].uid+".json?_method=patch"))&&i(w,"action",k),U&&m(U.update)&&1&a&&U.update.call(null,{pending:Q,result:e[1]}),(!Z||1&a&&P!==(P=e[7].text)&&F.value!==P)&&(F.value=P),(!Z||1&a&&$!==($="/todos/"+e[7].uid+".json?_method=patch"))&&i(D,"action",$),(!Z||1&a&&A!==(A=e[7].pending_delete))&&(S.disabled=A),(!Z||1&a&&C!==(C="/todos/"+e[7].uid+".json?_method=delete"))&&i(L,"action",C),J&&m(J.update)&&1&a&&J.update.call(null,{pending:tt,result:et}),1&a&&c(o,"done",e[7].done)},r(){Y=o.getBoundingClientRect()},f(){p(o),K(),v(o,Y)},a(){K(),K=g(o,Y,M,{duration:200})},i(t){Z||(t&&x((()=>{X||(X=b(o,O,{start:.7},!0)),X.run(1)})),Z=!0)},o(t){t&&(X||(X=b(o,O,{start:.7},!1)),X.run(0)),Z=!1},d(t){t&&r(o),t&&X&&X.end(),z=!1,y(G)}}}function P(t){let e,o,c,p,v,g,x,b,y,M,O,N,P=[],B=new Map,V=t[0];const $=t=>t[7].uid;for(let a=0;a<V.length;a+=1){let e=D(t,V,a),o=$(e);B.set(o,P[a]=F(o,e))}return{c(){e=n(),o=a("div"),c=a("h1"),p=w("Todos"),v=n(),g=a("form"),x=a("input"),y=n();for(let t=0;t<P.length;t+=1)P[t].c();this.h()},l(t){E('[data-svelte="svelte-181o7gf"]',document.head).forEach(r),e=d(t),o=s(t,"DIV",{class:!0});var a=l(o);c=s(a,"H1",{});var n=l(c);p=j(n,"Todos"),n.forEach(r),v=d(a),g=s(a,"FORM",{class:!0,action:!0,method:!0});var i=l(g);x=s(i,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),i.forEach(r),y=d(a);for(let e=0;e<P.length;e+=1)P[e].l(a);a.forEach(r),this.h()},h(){document.title="Todos",i(x,"name","text"),i(x,"aria-label","Add todo"),i(x,"placeholder","+ tap to add a todo"),i(x,"class","svelte-dmxqmd"),i(g,"class","new svelte-dmxqmd"),i(g,"action","/todos.json"),i(g,"method","post"),i(o,"class","todos svelte-dmxqmd")},m(a,n){u(a,e,n),u(a,o,n),h(o,c),h(c,p),h(o,v),h(o,g),h(g,x),h(o,y);for(let t=0;t<P.length;t+=1)P[t].m(o,null);M=!0,O||(N=f(b=R.call(null,g,{result:t[2]})),O=!0)},p(t,[e]){if(b&&m(b.update)&&1&e&&b.update.call(null,{result:t[2]}),3&e){V=t[0],U();for(let t=0;t<P.length;t+=1)P[t].r();P=T(P,e,$,1,t,V,B,o,I,F,null,D);for(let t=0;t<P.length;t+=1)P[t].a();_()}},i(t){if(!M){for(let t=0;t<V.length;t+=1)q(P[t]);M=!0}},o(t){for(let e=0;e<P.length;e+=1)k(P[e]);M=!1},d(t){t&&r(e),t&&r(o);for(let e=0;e<P.length;e+=1)P[e].d();O=!1,N()}}}var B=function(t,e,o,a){return new(o||(o=Promise))((function(n,s){function l(t){try{r(a.next(t))}catch(e){s(e)}}function d(t){try{r(a.throw(t))}catch(e){s(e)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(l,d)}r((a=a.apply(t,e||[])).next())}))};const V=({fetch:t})=>B(void 0,void 0,void 0,(function*(){const e=yield t("/todos.json");if(e.ok){return{props:{todos:yield e.json()}}}const{message:o}=yield e.json();return{error:new Error(o)}}));function $(t,e,o){var a=this&&this.__awaiter||function(t,e,o,a){return new(o||(o=Promise))((function(n,s){function l(t){try{r(a.next(t))}catch(e){s(e)}}function d(t){try{r(a.throw(t))}catch(e){s(e)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(l,d)}r((a=a.apply(t,e||[])).next())}))};let{todos:n}=e;return t.$$set=t=>{"todos"in t&&o(0,n=t.todos)},[n,function(t){return a(this,void 0,void 0,(function*(){const e=yield t.json();o(0,n=n.map((t=>t.uid===e.uid?e:t)))}))},async(t,e)=>{const a=await t.json();o(0,n=[...n,a]),e.reset()},(t,e,a,s)=>{o(0,e[a].done=!!s.get("done"),n)},(t,e,a)=>o(0,e[a].pending_delete=!0,n),t=>{o(0,n=n.filter((e=>e.uid!==t.uid)))}]}class H extends t{constructor(t){super(),e(this,t,$,P,o,{todos:0})}}export{H as default,V as load};