import{S as c,i as e,s,e as a,B as t,j as h,c as n,a as d,C as i,d as l,l as p,f as r,b as k,L as u,N as o,g as v,h as f,n as g}from"./index.502c1ca4.js";function m(c){var e,s,m,x,E,N,_,b,y;return{c(){e=a("label"),s=a("span"),m=t("input"),x=h(),E=a("input"),N=h(),_=a("span"),b=t("output"),this.h()},l(c){e=n(c,"LABEL",{class:!0},!1);var a=d(e);s=n(a,"SPAN",{style:!0,class:!0},!1);var t=d(s);m=i(t,"input"),t.forEach(l),x=p(a),E=n(a,"INPUT",{type:!0,class:!0},!1),d(E).forEach(l),N=p(a),_=n(a,"SPAN",{class:!0},!1);var h=d(_);b=i(h,"output"),h.forEach(l),a.forEach(l),this.h()},h(){r(s,"text-align","right"),k(s,"class","svelte-cpvm30"),u(s,"active",!c.checked),k(E,"type","checkbox"),k(E,"class","svelte-cpvm30"),k(_,"class","svelte-cpvm30"),u(_,"active",c.checked),k(e,"class","input-output-toggle svelte-cpvm30"),y=o(E,"change",c.input_change_handler)},m(a,t){v(a,e,t),f(e,s),f(s,m),f(e,x),f(e,E),E.checked=c.checked,f(e,N),f(e,_),f(_,b)},p(c,e){c.checked&&u(s,"active",!e.checked),c.checked&&(E.checked=e.checked),c.checked&&u(_,"active",e.checked)},i:g,o:g,d(c){c&&l(e),y()}}}function x(c,e,s){let{checked:a}=e;return c.$set=c=>{"checked"in c&&s("checked",a=c.checked)},{checked:a,input_change_handler:function(){a=this.checked,s("checked",a)}}}class E extends c{constructor(c){super(),e(this,c,x,m,s,["checked"])}}export{E as I};