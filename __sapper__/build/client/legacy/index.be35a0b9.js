import"./typeof.15db5c64.js";import"./slicedToArray.a2759e85.js";import"./_commonjsHelpers.7baa5521.js";import"./asyncToGenerator.66a36f43.js";import{_ as a,a as s,b as r,c as e,i as t,s as o,d as n,S as l,n as c,x as i,e as g,f,g as h,h as p,j as v,l as u,A as d,B as m,u as $,v as E,r as b,V as y,t as q,w,o as k,q as A,m as M,p as z,y as I,z as S,F as _,G,k as x}from"./index.a0792a5e.js";import"./index.510d187e.js";import{S as j,H as P,B as C}from"./index.bc539772.js";import"./Repl.2f644460.js";import"./examples.7e162774.js";import"./InputOutputToggle.1722f5cc.js";import{R as T}from"./ReplWidget.ab2d4239.js";function D(a){return{c:c,l:c,m:c,p:c,i:c,o:c,d:c}}var O=function(c){function i(a){var l;return s(this,i),l=r(this,e(i).call(this)),t(n(l),a,null,D,o,[]),l}return a(i,l),i}(),H=function(a){return{intersecting:a.intersecting}},N=function(a){return{intersecting:a.intersecting}};function V(a){var s,r,e=a.$$slots.default,t=i(e,a,N);return{c:function(){s=g("div"),t&&t.c(),this.h()},l:function(a){s=f(a,"DIV",{class:!0},!1);var r=h(s);t&&t.l(r),r.forEach(p),this.h()},h:function(){v(s,"class","svelte-12fpxpc")},m:function(e,o){u(e,s,o),t&&t.m(s,null),a.div_binding(s),r=!0},p:function(a,s){t&&t.p&&(a.$$scope||a.intersecting)&&t.p(d(e,s,a,H),m(e,s,N))},i:function(a){r||($(t,a),r=!0)},o:function(a){E(t,a),r=!1},d:function(r){r&&p(s),t&&t.d(r),a.div_binding(null)}}}function J(a,s,r){var e,t=s.once,o=void 0!==t&&t,n=s.top,l=void 0===n?0:n,c=s.bottom,i=void 0===c?0:c,g=s.left,f=void 0===g?0:g,h=s.right,p=void 0===h?0:h,v=!1;b(function(){if("undefined"!=typeof IntersectionObserver){var a="".concat(i,"px ").concat(f,"px ").concat(l,"px ").concat(p,"px"),s=new IntersectionObserver(function(a){r("intersecting",v=a[0].isIntersecting),v&&o&&s.unobserve(e)},{rootMargin:a});return s.observe(e),function(){return s.unobserve(e)}}function t(){var a=e.getBoundingClientRect();r("intersecting",v=a.bottom+i>0&&a.right+p>0&&a.top-l<window.innerHeight&&a.left-f<window.innerWidth),v&&o&&window.removeEventListener("scroll",t)}return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}});var u=s.$$slots,d=void 0===u?{}:u,m=s.$$scope;return a.$set=function(a){"once"in a&&r("once",o=a.once),"top"in a&&r("top",l=a.top),"bottom"in a&&r("bottom",i=a.bottom),"left"in a&&r("left",f=a.left),"right"in a&&r("right",p=a.right),"$$scope"in a&&r("$$scope",m=a.$$scope)},{once:o,top:l,bottom:i,left:f,right:p,intersecting:v,container:e,div_binding:function(a){y[a?"unshift":"push"](function(){r("container",e=a)})},$$slots:d,$$scope:m}}var R=function(c){function i(a){var l;return s(this,i),l=r(this,e(i).call(this)),t(n(l),a,J,V,o,["once","top","bottom","left","right"]),l}return a(i,l),i}();function L(a){var s,r=new T({props:{example:a.id}});return{c:function(){r.$$.fragment.c()},l:function(a){r.$$.fragment.l(a)},m:function(a,e){q(r,a,e),s=!0},p:function(a,s){var e={};a.id&&(e.example=s.id),r.$set(e)},i:function(a){s||($(r.$$.fragment,a),s=!0)},o:function(a){E(r.$$.fragment,a),s=!1},d:function(a){w(r,a)}}}function B(a){var s,r,e=a.intersecting&&L(a);return{c:function(){e&&e.c(),s=z()},l:function(a){e&&e.l(a),s=z()},m:function(a,t){e&&e.m(a,t),u(a,s,t),r=!0},p:function(a,r){r.intersecting?e?(e.p(a,r),$(e,1)):((e=L(r)).c(),$(e,1),e.m(s.parentNode,s)):e&&(I(),E(e,1,1,function(){e=null}),S())},i:function(a){r||($(e),r=!0)},o:function(a){E(e),r=!1},d:function(a){e&&e.d(a),a&&p(s)}}}function F(a){var s,r,e,t,o=a.$$slots.default,n=i(o,a,null),l=new R({props:{once:!0,top:400,$$slots:{default:[B,function(a){return{intersecting:a.intersecting}}]},$$scope:{ctx:a}}});return{c:function(){s=g("div"),n&&n.c(),r=k(),e=g("div"),l.$$.fragment.c(),this.h()},l:function(a){s=f(a,"DIV",{class:!0},!1);var t=h(s);n&&n.l(t),r=A(t),e=f(t,"DIV",{class:!0},!1);var o=h(e);l.$$.fragment.l(o),o.forEach(p),t.forEach(p),this.h()},h:function(){v(e,"class","repl-container svelte-12hbupv"),v(s,"class","example svelte-12hbupv")},m:function(a,o){u(a,s,o),n&&n.m(s,null),M(s,r),M(s,e),q(l,e,null),t=!0},p:function(a,s){n&&n.p&&a.$$scope&&n.p(d(o,s,a,null),m(o,s,null));var r={};(a.$$scope||a.id)&&(r.$$scope={changed:a,ctx:s}),l.$set(r)},i:function(a){t||($(n,a),$(l.$$.fragment,a),t=!0)},o:function(a){E(n,a),E(l.$$.fragment,a),t=!1},d:function(a){a&&p(s),n&&n.d(a),w(l)}}}function U(a){var s,r=new j({props:{$$slots:{default:[F]},$$scope:{ctx:a}}});return{c:function(){r.$$.fragment.c()},l:function(a){r.$$.fragment.l(a)},m:function(a,e){q(r,a,e),s=!0},p:function(a,s){var e={};(a.$$scope||a.id)&&(e.$$scope={changed:a,ctx:s}),r.$set(e)},i:function(a){s||($(r.$$.fragment,a),s=!0)},o:function(a){E(r.$$.fragment,a),s=!1},d:function(a){w(r,a)}}}function W(a,s,r){var e=s.id,t=s.$$slots,o=void 0===t?{}:t,n=s.$$scope;return a.$set=function(a){"id"in a&&r("id",e=a.id),"$$scope"in a&&r("$$scope",n=a.$$scope)},{id:e,$$slots:o,$$scope:n}}var Z=function(c){function i(a){var l;return s(this,i),l=r(this,e(i).call(this)),t(n(l),a,W,U,o,["id"]),l}return a(i,l),i}();function Q(a){var s,r,e,t,o,n,l,i,d,m,$,E,b,y,q,w,z,I,S,j,P,C,T,D,O,H,N,V,J,R,L,B,F,U,W,Z,Q,Y,K,X,aa,sa,ra,ea,ta,oa,na,la,ca,ia,ga,fa,ha,pa,va,ua,da,ma,$a,Ea,ba,ya,qa,wa,ka,Aa,Ma,za,Ia,Sa,_a,Ga,xa,ja,Pa,Ca,Ta,Da,Oa,Ha,Na,Va,Ja,Ra,La,Ba,Fa,Ua,Wa,Za,Qa,Ya,Ka,Xa,as,ss,rs,es,ts,os,ns,ls,cs,is,gs,fs,hs,ps,vs,us,ds,ms,$s,Es,bs,ys,qs,ws,ks,As,Ms,zs,Is,Ss,_s,Gs,xs,js,Ps,Cs,Ts,Ds,Os,Hs,Ns,Vs,Js,Rs,Ls,Bs,Fs,Us,Ws,Zs,Qs,Ys,Ks,Xs,ar,sr,rr,er,tr,or,nr,lr,cr,ir;return{c:function(){s=g("div"),r=g("a"),e=g("img"),t=k(),o=g("a"),n=g("img"),l=k(),i=g("a"),d=g("img"),m=k(),$=g("a"),E=g("img"),b=k(),y=g("a"),q=g("img"),w=k(),z=g("a"),I=g("img"),S=k(),j=g("a"),P=g("img"),C=k(),T=g("a"),D=g("img"),O=k(),H=g("a"),N=g("img"),V=k(),J=g("a"),R=g("img"),L=k(),B=g("a"),F=g("picture"),U=g("source"),W=g("img"),Z=k(),Q=g("a"),Y=g("img"),K=k(),X=g("a"),aa=g("img"),sa=k(),ra=g("a"),ea=g("img"),ta=k(),oa=g("a"),na=g("img"),la=k(),ca=g("a"),ia=g("img"),ga=k(),fa=g("a"),ha=g("img"),pa=k(),va=g("a"),ua=g("img"),da=k(),ma=g("a"),$a=g("img"),Ea=k(),ba=g("a"),ya=g("img"),qa=k(),wa=g("a"),ka=g("img"),Aa=k(),Ma=g("a"),za=g("img"),Ia=k(),Sa=g("a"),_a=g("img"),Ga=k(),xa=g("a"),ja=g("img"),Pa=k(),Ca=g("a"),Ta=g("img"),Da=k(),Oa=g("a"),Ha=g("img"),Na=k(),Va=g("a"),Ja=g("img"),Ra=k(),La=g("a"),Ba=g("img"),Fa=k(),Ua=g("a"),Wa=g("img"),Za=k(),Qa=g("a"),Ya=g("img"),Ka=k(),Xa=g("a"),as=g("img"),ss=k(),rs=g("a"),es=g("img"),ts=k(),os=g("a"),ns=g("img"),ls=k(),cs=g("a"),is=g("img"),gs=k(),fs=g("a"),hs=g("img"),ps=k(),vs=g("a"),us=g("img"),ds=k(),ms=g("a"),$s=g("img"),Es=k(),bs=g("a"),ys=g("img"),qs=k(),ws=g("a"),ks=g("img"),As=k(),Ms=g("a"),zs=g("img"),Is=k(),Ss=g("a"),_s=g("img"),Gs=k(),xs=g("a"),js=g("img"),Ps=k(),Cs=g("a"),Ts=g("img"),Ds=k(),Os=g("a"),Hs=g("img"),Ns=g("span"),Vs=_("Strix Cloud"),Js=k(),Rs=g("a"),Ls=g("img"),Bs=k(),Fs=g("a"),Us=g("img"),Ws=k(),Zs=g("a"),Qs=g("img"),Ys=k(),Ks=g("a"),Xs=g("img"),ar=k(),sr=g("a"),rr=g("img"),er=k(),tr=g("a"),or=g("img"),nr=k(),lr=g("a"),cr=g("span"),ir=_("+ your company?"),this.h()},l:function(a){s=f(a,"DIV",{class:!0},!1);var c=h(s);r=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var g=h(r);e=f(g,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(e).forEach(p),g.forEach(p),t=A(c),o=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var v=h(o);n=f(v,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(n).forEach(p),v.forEach(p),l=A(c),i=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var u=h(i);d=f(u,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(d).forEach(p),u.forEach(p),m=A(c),$=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var k=h($);E=f(k,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(E).forEach(p),k.forEach(p),b=A(c),y=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var M=h(y);q=f(M,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(q).forEach(p),M.forEach(p),w=A(c),z=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var _=h(z);I=f(_,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(I).forEach(p),_.forEach(p),S=A(c),j=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var x=h(j);P=f(x,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(P).forEach(p),x.forEach(p),C=A(c),T=f(c,"A",{target:!0,rel:!0,href:!0,style:!0,class:!0},!1);var gr=h(T);D=f(gr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(D).forEach(p),gr.forEach(p),O=A(c),H=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var fr=h(H);N=f(fr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(N).forEach(p),fr.forEach(p),V=A(c),J=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var hr=h(J);R=f(hr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(R).forEach(p),hr.forEach(p),L=A(c),B=f(c,"A",{target:!0,rel:!0,href:!0,style:!0,class:!0},!1);var pr=h(B);F=f(pr,"PICTURE",{class:!0},!1);var vr=h(F);U=f(vr,"SOURCE",{type:!0,srcset:!0},!1),h(U).forEach(p),W=f(vr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(W).forEach(p),vr.forEach(p),pr.forEach(p),Z=A(c),Q=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var ur=h(Q);Y=f(ur,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(Y).forEach(p),ur.forEach(p),K=A(c),X=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var dr=h(X);aa=f(dr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(aa).forEach(p),dr.forEach(p),sa=A(c),ra=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var mr=h(ra);ea=f(mr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(ea).forEach(p),mr.forEach(p),ta=A(c),oa=f(c,"A",{target:!0,rel:!0,href:!0,style:!0,class:!0},!1);var $r=h(oa);na=f($r,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(na).forEach(p),$r.forEach(p),la=A(c),ca=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Er=h(ca);ia=f(Er,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(ia).forEach(p),Er.forEach(p),ga=A(c),fa=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var br=h(fa);ha=f(br,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(ha).forEach(p),br.forEach(p),pa=A(c),va=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var yr=h(va);ua=f(yr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(ua).forEach(p),yr.forEach(p),da=A(c),ma=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var qr=h(ma);$a=f(qr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h($a).forEach(p),qr.forEach(p),Ea=A(c),ba=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var wr=h(ba);ya=f(wr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(ya).forEach(p),wr.forEach(p),qa=A(c),wa=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var kr=h(wa);ka=f(kr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(ka).forEach(p),kr.forEach(p),Aa=A(c),Ma=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Ar=h(Ma);za=f(Ar,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(za).forEach(p),Ar.forEach(p),Ia=A(c),Sa=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Mr=h(Sa);_a=f(Mr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(_a).forEach(p),Mr.forEach(p),Ga=A(c),xa=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var zr=h(xa);ja=f(zr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(ja).forEach(p),zr.forEach(p),Pa=A(c),Ca=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Ir=h(Ca);Ta=f(Ir,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(Ta).forEach(p),Ir.forEach(p),Da=A(c),Oa=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Sr=h(Oa);Ha=f(Sr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(Ha).forEach(p),Sr.forEach(p),Na=A(c),Va=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var _r=h(Va);Ja=f(_r,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(Ja).forEach(p),_r.forEach(p),Ra=A(c),La=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Gr=h(La);Ba=f(Gr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(Ba).forEach(p),Gr.forEach(p),Fa=A(c),Ua=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var xr=h(Ua);Wa=f(xr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(Wa).forEach(p),xr.forEach(p),Za=A(c),Qa=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var jr=h(Qa);Ya=f(jr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(Ya).forEach(p),jr.forEach(p),Ka=A(c),Xa=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Pr=h(Xa);as=f(Pr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(as).forEach(p),Pr.forEach(p),ss=A(c),rs=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Cr=h(rs);es=f(Cr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(es).forEach(p),Cr.forEach(p),ts=A(c),os=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Tr=h(os);ns=f(Tr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(ns).forEach(p),Tr.forEach(p),ls=A(c),cs=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Dr=h(cs);is=f(Dr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(is).forEach(p),Dr.forEach(p),gs=A(c),fs=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Or=h(fs);hs=f(Or,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(hs).forEach(p),Or.forEach(p),ps=A(c),vs=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Hr=h(vs);us=f(Hr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(us).forEach(p),Hr.forEach(p),ds=A(c),ms=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Nr=h(ms);$s=f(Nr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h($s).forEach(p),Nr.forEach(p),Es=A(c),bs=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Vr=h(bs);ys=f(Vr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(ys).forEach(p),Vr.forEach(p),qs=A(c),ws=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Jr=h(ws);ks=f(Jr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(ks).forEach(p),Jr.forEach(p),As=A(c),Ms=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Rr=h(Ms);zs=f(Rr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(zs).forEach(p),Rr.forEach(p),Is=A(c),Ss=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Lr=h(Ss);_s=f(Lr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(_s).forEach(p),Lr.forEach(p),Gs=A(c),xs=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Br=h(xs);js=f(Br,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(js).forEach(p),Br.forEach(p),Ps=A(c),Cs=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Fr=h(Cs);Ts=f(Fr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(Ts).forEach(p),Fr.forEach(p),Ds=A(c),Os=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Ur=h(Os);Hs=f(Ur,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(Hs).forEach(p),Ns=f(Ur,"SPAN",{},!1);var Wr=h(Ns);Vs=G(Wr,"Strix Cloud"),Wr.forEach(p),Ur.forEach(p),Js=A(c),Rs=f(c,"A",{target:!0,rel:!0,href:!0,style:!0,class:!0},!1);var Zr=h(Rs);Ls=f(Zr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(Ls).forEach(p),Zr.forEach(p),Bs=A(c),Fs=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Qr=h(Fs);Us=f(Qr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(Us).forEach(p),Qr.forEach(p),Ws=A(c),Zs=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Yr=h(Zs);Qs=f(Yr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(Qs).forEach(p),Yr.forEach(p),Ys=A(c),Ks=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Kr=h(Ks);Xs=f(Kr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(Xs).forEach(p),Kr.forEach(p),ar=A(c),sr=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var Xr=h(sr);rr=f(Xr,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(rr).forEach(p),Xr.forEach(p),er=A(c),tr=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var ae=h(tr);or=f(ae,"IMG",{src:!0,alt:!0,loading:!0,class:!0},!1),h(or).forEach(p),ae.forEach(p),nr=A(c),lr=f(c,"A",{target:!0,rel:!0,href:!0,class:!0},!1);var se=h(lr);cr=f(se,"SPAN",{},!1);var re=h(cr);ir=G(re,"+ your company?"),re.forEach(p),se.forEach(p),c.forEach(p),this.h()},h:function(){v(e,"src","organisations/1password.png"),v(e,"alt","1Password logo"),v(e,"loading","lazy"),v(e,"class","svelte-1rp6isq"),v(r,"target","_blank"),v(r,"rel","noopener"),v(r,"href","https://1password.com"),v(r,"class","svelte-1rp6isq"),v(n,"src","organisations/ablab.svg"),v(n,"alt","ABLab logo"),v(n,"loading","lazy"),v(n,"class","svelte-1rp6isq"),v(o,"target","_blank"),v(o,"rel","noopener"),v(o,"href","https://ablab.de"),v(o,"class","svelte-1rp6isq"),v(d,"src","organisations/absoluteweb.svg"),v(d,"alt","Absolute Web logo"),v(d,"loading","lazy"),v(d,"class","svelte-1rp6isq"),v(i,"target","_blank"),v(i,"rel","noopener"),v(i,"href","https://absoluteweb.com"),v(i,"class","svelte-1rp6isq"),v(E,"src","organisations/bekchy.png"),v(E,"alt","Bekchy logo"),v(E,"loading","lazy"),v(E,"class","svelte-1rp6isq"),v($,"target","_blank"),v($,"rel","noopener"),v($,"href","https://bekchy.com"),v($,"class","svelte-1rp6isq"),v(q,"src","organisations/beyonk.svg"),v(q,"alt","Beyonk logo"),v(q,"loading","lazy"),v(q,"class","svelte-1rp6isq"),v(y,"target","_blank"),v(y,"rel","noopener"),v(y,"href","https://beyonk.com"),v(y,"class","svelte-1rp6isq"),v(I,"src","organisations/buydotstar.svg"),v(I,"alt","buy.* logo"),v(I,"loading","lazy"),v(I,"class","svelte-1rp6isq"),v(z,"target","_blank"),v(z,"rel","noopener"),v(z,"href","https://buydotstar.com"),v(z,"class","svelte-1rp6isq"),v(P,"src","organisations/cashfree.svg"),v(P,"alt","Cashfree logo"),v(P,"loading","lazy"),v(P,"class","svelte-1rp6isq"),v(j,"target","_blank"),v(j,"rel","noopener"),v(j,"href","https://cashfree.com/"),v(j,"class","svelte-1rp6isq"),v(D,"src","organisations/chess.svg"),v(D,"alt","Chess.com logo"),v(D,"loading","lazy"),v(D,"class","svelte-1rp6isq"),v(T,"target","_blank"),v(T,"rel","noopener"),v(T,"href","https://chess.com"),x(T,"background-color","rgb(49,46,43)"),v(T,"class","svelte-1rp6isq"),v(N,"src","organisations/comigo.svg"),v(N,"alt","Comigo logo"),v(N,"loading","lazy"),v(N,"class","svelte-1rp6isq"),v(H,"target","_blank"),v(H,"rel","noopener"),v(H,"href","https://comigosaude.com.br"),v(H,"class","svelte-1rp6isq"),v(R,"src","organisations/datawrapper.svg"),v(R,"alt","Datawrapper logo"),v(R,"loading","lazy"),v(R,"class","svelte-1rp6isq"),v(J,"target","_blank"),v(J,"rel","noopener"),v(J,"href","https://datawrapper.de"),v(J,"class","svelte-1rp6isq"),v(U,"type","image/webp"),v(U,"srcset","organisations/dbnomics.webp"),v(W,"src","organisations/dbnomics.jpg"),v(W,"alt","DBNomics logo"),v(W,"loading","lazy"),v(W,"class","svelte-1rp6isq"),v(F,"class","svelte-1rp6isq"),v(B,"target","_blank"),v(B,"rel","noopener"),v(B,"href","https://db.nomics.world"),x(B,"background-color","rgb(15,39,47)"),v(B,"class","svelte-1rp6isq"),v(Y,"src","organisations/deck.svg"),v(Y,"alt","Deck logo"),v(Y,"loading","lazy"),v(Y,"class","svelte-1rp6isq"),v(Q,"target","_blank"),v(Q,"rel","noopener"),v(Q,"href","https://deck.nl"),v(Q,"class","svelte-1rp6isq"),v(aa,"src","organisations/dextra.png"),v(aa,"alt","Dextra logo"),v(aa,"loading","lazy"),v(aa,"class","svelte-1rp6isq"),v(X,"target","_blank"),v(X,"rel","noopener"),v(X,"href","https://dextra.com.br/pt/"),v(X,"class","svelte-1rp6isq"),v(ea,"src","organisations/entriwise.png"),v(ea,"alt","Entriwise logo"),v(ea,"loading","lazy"),v(ea,"class","svelte-1rp6isq"),v(ra,"target","_blank"),v(ra,"rel","noopener"),v(ra,"href","https://www.entriwise.com/"),v(ra,"class","svelte-1rp6isq"),v(na,"src","organisations/entur.svg"),v(na,"alt","Entur logo"),v(na,"loading","lazy"),v(na,"class","svelte-1rp6isq"),v(oa,"target","_blank"),v(oa,"rel","noopener"),v(oa,"href","https://www.entur.org/about-entur/"),x(oa,"background-color","rgb(25, 25, 84)"),v(oa,"class","svelte-1rp6isq"),v(ia,"src","organisations/farmbox.svg"),v(ia,"alt","Farmbox logo"),v(ia,"loading","lazy"),v(ia,"class","svelte-1rp6isq"),v(ca,"target","_blank"),v(ca,"rel","noopener"),v(ca,"href","https://farmbox.ae/"),v(ca,"class","svelte-1rp6isq"),v(ha,"src","organisations/from-now-on.png"),v(ha,"alt","From-Now-On logo"),v(ha,"loading","lazy"),v(ha,"class","svelte-1rp6isq"),v(fa,"target","_blank"),v(fa,"rel","noopener"),v(fa,"href","https://from-now-on.com"),v(fa,"class","svelte-1rp6isq"),v(ua,"src","organisations/fusioncharts.svg"),v(ua,"alt","FusionCharts logo"),v(ua,"loading","lazy"),v(ua,"class","svelte-1rp6isq"),v(va,"target","_blank"),v(va,"rel","noopener"),v(va,"href","https://fusioncharts.com"),v(va,"class","svelte-1rp6isq"),v($a,"src","organisations/godaddy.svg"),v($a,"alt","GoDaddy logo"),v($a,"loading","lazy"),v($a,"class","svelte-1rp6isq"),v(ma,"target","_blank"),v(ma,"rel","noopener"),v(ma,"href","https://godaddy.com"),v(ma,"class","svelte-1rp6isq"),v(ya,"src","organisations/grainger.svg"),v(ya,"alt","Grainger logo"),v(ya,"loading","lazy"),v(ya,"class","svelte-1rp6isq"),v(ba,"target","_blank"),v(ba,"rel","noopener"),v(ba,"href","https://www.grainger.com"),v(ba,"class","svelte-1rp6isq"),v(ka,"src","organisations/healthtree.png"),v(ka,"alt","HealthTree logo"),v(ka,"loading","lazy"),v(ka,"class","svelte-1rp6isq"),v(wa,"target","_blank"),v(wa,"rel","noopener"),v(wa,"href","http://healthtree.org/"),v(wa,"class","svelte-1rp6isq"),v(za,"src","organisations/iota.svg"),v(za,"alt","IOTA logo"),v(za,"loading","lazy"),v(za,"class","svelte-1rp6isq"),v(Ma,"target","_blank"),v(Ma,"rel","noopener"),v(Ma,"href","https://iota.org"),v(Ma,"class","svelte-1rp6isq"),v(_a,"src","organisations/itslearning.svg"),v(_a,"alt","itslearning logo"),v(_a,"loading","lazy"),v(_a,"class","svelte-1rp6isq"),v(Sa,"target","_blank"),v(Sa,"rel","noopener"),v(Sa,"href","https://itslearning.com"),v(Sa,"class","svelte-1rp6isq"),v(ja,"src","organisations/jacoux.png"),v(ja,"alt","Jacoux logo"),v(ja,"loading","lazy"),v(ja,"class","svelte-1rp6isq"),v(xa,"target","_blank"),v(xa,"rel","noopener"),v(xa,"href","https://jacoux.com"),v(xa,"class","svelte-1rp6isq"),v(Ta,"src","organisations/jingmnt.png"),v(Ta,"alt","Jingmnt logo"),v(Ta,"loading","lazy"),v(Ta,"class","svelte-1rp6isq"),v(Ca,"target","_blank"),v(Ca,"rel","noopener"),v(Ca,"href","https://jingmnt.co.za"),v(Ca,"class","svelte-1rp6isq"),v(Ha,"src","organisations/mentorcv.png"),v(Ha,"alt","Mentor CV logo"),v(Ha,"loading","lazy"),v(Ha,"class","svelte-1rp6isq"),v(Oa,"target","_blank"),v(Oa,"rel","noopener"),v(Oa,"href","https://www.mentorcv.com"),v(Oa,"class","svelte-1rp6isq"),v(Ja,"src","organisations/metrovias.svg"),v(Ja,"alt","Metrovias logo"),v(Ja,"loading","lazy"),v(Ja,"class","svelte-1rp6isq"),v(Va,"target","_blank"),v(Va,"rel","noopener"),v(Va,"href","https://www.metrovias.com.ar/"),v(Va,"class","svelte-1rp6isq"),v(Ba,"src","organisations/mustlab.png"),v(Ba,"alt","Mustlab logo"),v(Ba,"loading","lazy"),v(Ba,"class","svelte-1rp6isq"),v(La,"target","_blank"),v(La,"rel","noopener"),v(La,"href","http://mustlab.ru"),v(La,"class","svelte-1rp6isq"),v(Wa,"src","organisations/nesta.svg"),v(Wa,"alt","Nesta logo"),v(Wa,"loading","lazy"),v(Wa,"class","svelte-1rp6isq"),v(Ua,"target","_blank"),v(Ua,"rel","noopener"),v(Ua,"href","https://www.nesta.org.uk"),v(Ua,"class","svelte-1rp6isq"),v(Ya,"src","organisations/nonkosi.svg"),v(Ya,"alt","Nonkosi Telecoms logo"),v(Ya,"loading","lazy"),v(Ya,"class","svelte-1rp6isq"),v(Qa,"target","_blank"),v(Qa,"rel","noopener"),v(Qa,"href","https://www.nonkositelecoms.com"),v(Qa,"class","svelte-1rp6isq"),v(as,"src","organisations/nzz.svg"),v(as,"alt","Neue Zürcher Zeitung logo"),v(as,"loading","lazy"),v(as,"class","svelte-1rp6isq"),v(Xa,"target","_blank"),v(Xa,"rel","noopener"),v(Xa,"href","https://www.nzz.ch"),v(Xa,"class","svelte-1rp6isq"),v(es,"src","organisations/nyt.svg"),v(es,"alt","The New York Times logo"),v(es,"loading","lazy"),v(es,"class","svelte-1rp6isq"),v(rs,"target","_blank"),v(rs,"rel","noopener"),v(rs,"href","https://nytimes.com"),v(rs,"class","svelte-1rp6isq"),v(ns,"src","organisations/oberonspace.svg"),v(ns,"alt","OberonSPACE logo"),v(ns,"loading","lazy"),v(ns,"class","svelte-1rp6isq"),v(os,"target","_blank"),v(os,"rel","noopener"),v(os,"href","https://oberonspace.xyz"),v(os,"class","svelte-1rp6isq"),v(is,"src","organisations/ofof.png"),v(is,"alt","Ofof logo"),v(is,"loading","lazy"),v(is,"class","svelte-1rp6isq"),v(cs,"target","_blank"),v(cs,"rel","noopener"),v(cs,"href","https://ofof.nl"),v(cs,"class","svelte-1rp6isq"),v(hs,"src","organisations/open-state-foundation.svg"),v(hs,"alt","Open State Foundation logo"),v(hs,"loading","lazy"),v(hs,"class","svelte-1rp6isq"),v(fs,"target","_blank"),v(fs,"rel","noopener"),v(fs,"href","https://openstate.eu"),v(fs,"class","svelte-1rp6isq"),v(us,"src","organisations/panascais.svg"),v(us,"alt","Panascais logo"),v(us,"loading","lazy"),v(us,"class","svelte-1rp6isq"),v(vs,"target","_blank"),v(vs,"rel","noopener"),v(vs,"href","https://panascais.net"),v(vs,"class","svelte-1rp6isq"),v($s,"src","organisations/pankod.svg"),v($s,"alt","Pankod logo"),v($s,"loading","lazy"),v($s,"class","svelte-1rp6isq"),v(ms,"target","_blank"),v(ms,"rel","noopener"),v(ms,"href","https://pankod.com"),v(ms,"class","svelte-1rp6isq"),v(ys,"src","organisations/paperform.svg"),v(ys,"alt","Paperform logo"),v(ys,"loading","lazy"),v(ys,"class","svelte-1rp6isq"),v(bs,"target","_blank"),v(bs,"rel","noopener"),v(bs,"href","https://paperform.co"),v(bs,"class","svelte-1rp6isq"),v(ks,"src","organisations/razorpay.svg"),v(ks,"alt","Razorpay logo"),v(ks,"loading","lazy"),v(ks,"class","svelte-1rp6isq"),v(ws,"target","_blank"),v(ws,"rel","noopener"),v(ws,"href","https://razorpay.com"),v(ws,"class","svelte-1rp6isq"),v(zs,"src","organisations/socialist-party.svg"),v(zs,"alt","Socialist Party logo"),v(zs,"loading","lazy"),v(zs,"class","svelte-1rp6isq"),v(Ms,"target","_blank"),v(Ms,"rel","noopener"),v(Ms,"href","https://sp.nl"),v(Ms,"class","svelte-1rp6isq"),v(_s,"src","organisations/softmus.png"),v(_s,"alt","Softmus Tecnologia logo"),v(_s,"loading","lazy"),v(_s,"class","svelte-1rp6isq"),v(Ss,"target","_blank"),v(Ss,"rel","noopener"),v(Ss,"href","https://www.softmus.com.br/"),v(Ss,"class","svelte-1rp6isq"),v(js,"src","organisations/sqltribe.svg"),v(js,"alt","SQL Tribe logo"),v(js,"loading","lazy"),v(js,"class","svelte-1rp6isq"),v(xs,"target","_blank"),v(xs,"rel","noopener"),v(xs,"href","https://sqltribe.com"),v(xs,"class","svelte-1rp6isq"),v(Ts,"src","organisations/stone.svg"),v(Ts,"alt","Stone Payments logo"),v(Ts,"loading","lazy"),v(Ts,"class","svelte-1rp6isq"),v(Cs,"target","_blank"),v(Cs,"rel","noopener"),v(Cs,"href","https://www.stone.co"),v(Cs,"class","svelte-1rp6isq"),v(Hs,"src","organisations/strixcloud.svg"),v(Hs,"alt","Strix Cloud logo"),v(Hs,"loading","lazy"),v(Hs,"class","svelte-1rp6isq"),v(Os,"target","_blank"),v(Os,"rel","noopener"),v(Os,"href","https://www.strixengine.com"),v(Os,"class","svelte-1rp6isq"),v(Ls,"src","organisations/sucuri.png"),v(Ls,"alt","Sucuri logo"),v(Ls,"loading","lazy"),v(Ls,"class","svelte-1rp6isq"),v(Rs,"target","_blank"),v(Rs,"rel","noopener"),v(Rs,"href","https://sucuri.net"),x(Rs,"background-color","rgb(93, 93, 93)"),v(Rs,"class","svelte-1rp6isq"),v(Us,"src","organisations/tsh.svg"),v(Us,"alt","The Software House logo"),v(Us,"loading","lazy"),v(Us,"class","svelte-1rp6isq"),v(Fs,"target","_blank"),v(Fs,"rel","noopener"),v(Fs,"href","https://tsh.io"),v(Fs,"class","svelte-1rp6isq"),v(Qs,"src","organisations/thunderdome.svg"),v(Qs,"alt","Thunderdome logo"),v(Qs,"loading","lazy"),v(Qs,"class","svelte-1rp6isq"),v(Zs,"target","_blank"),v(Zs,"rel","noopener"),v(Zs,"href","https://thunderdome.dev"),v(Zs,"class","svelte-1rp6isq"),v(Xs,"src","organisations/tokopedia.svg"),v(Xs,"alt","Tokopedia logo"),v(Xs,"loading","lazy"),v(Xs,"class","svelte-1rp6isq"),v(Ks,"target","_blank"),v(Ks,"rel","noopener"),v(Ks,"href","https://m.tokopedia.com"),v(Ks,"class","svelte-1rp6isq"),v(rr,"src","organisations/webdesq.svg"),v(rr,"alt","Webdesq logo"),v(rr,"loading","lazy"),v(rr,"class","svelte-1rp6isq"),v(sr,"target","_blank"),v(sr,"rel","noopener"),v(sr,"href","https://webdesq.net"),v(sr,"class","svelte-1rp6isq"),v(or,"src","organisations/zevvle.svg"),v(or,"alt","Zevvle logo"),v(or,"loading","lazy"),v(or,"class","svelte-1rp6isq"),v(tr,"target","_blank"),v(tr,"rel","noopener"),v(tr,"href","https://zevvle.com/"),v(tr,"class","svelte-1rp6isq"),v(lr,"target","_blank"),v(lr,"rel","noopener"),v(lr,"href","https://github.com/sveltejs/community/blob/master/whos-using-svelte/WhosUsingSvelte.svelte"),v(lr,"class","add-yourself svelte-1rp6isq"),v(s,"class","logos svelte-1rp6isq")},m:function(a,c){u(a,s,c),M(s,r),M(r,e),M(s,t),M(s,o),M(o,n),M(s,l),M(s,i),M(i,d),M(s,m),M(s,$),M($,E),M(s,b),M(s,y),M(y,q),M(s,w),M(s,z),M(z,I),M(s,S),M(s,j),M(j,P),M(s,C),M(s,T),M(T,D),M(s,O),M(s,H),M(H,N),M(s,V),M(s,J),M(J,R),M(s,L),M(s,B),M(B,F),M(F,U),M(F,W),M(s,Z),M(s,Q),M(Q,Y),M(s,K),M(s,X),M(X,aa),M(s,sa),M(s,ra),M(ra,ea),M(s,ta),M(s,oa),M(oa,na),M(s,la),M(s,ca),M(ca,ia),M(s,ga),M(s,fa),M(fa,ha),M(s,pa),M(s,va),M(va,ua),M(s,da),M(s,ma),M(ma,$a),M(s,Ea),M(s,ba),M(ba,ya),M(s,qa),M(s,wa),M(wa,ka),M(s,Aa),M(s,Ma),M(Ma,za),M(s,Ia),M(s,Sa),M(Sa,_a),M(s,Ga),M(s,xa),M(xa,ja),M(s,Pa),M(s,Ca),M(Ca,Ta),M(s,Da),M(s,Oa),M(Oa,Ha),M(s,Na),M(s,Va),M(Va,Ja),M(s,Ra),M(s,La),M(La,Ba),M(s,Fa),M(s,Ua),M(Ua,Wa),M(s,Za),M(s,Qa),M(Qa,Ya),M(s,Ka),M(s,Xa),M(Xa,as),M(s,ss),M(s,rs),M(rs,es),M(s,ts),M(s,os),M(os,ns),M(s,ls),M(s,cs),M(cs,is),M(s,gs),M(s,fs),M(fs,hs),M(s,ps),M(s,vs),M(vs,us),M(s,ds),M(s,ms),M(ms,$s),M(s,Es),M(s,bs),M(bs,ys),M(s,qs),M(s,ws),M(ws,ks),M(s,As),M(s,Ms),M(Ms,zs),M(s,Is),M(s,Ss),M(Ss,_s),M(s,Gs),M(s,xs),M(xs,js),M(s,Ps),M(s,Cs),M(Cs,Ts),M(s,Ds),M(s,Os),M(Os,Hs),M(Os,Ns),M(Ns,Vs),M(s,Js),M(s,Rs),M(Rs,Ls),M(s,Bs),M(s,Fs),M(Fs,Us),M(s,Ws),M(s,Zs),M(Zs,Qs),M(s,Ys),M(s,Ks),M(Ks,Xs),M(s,ar),M(s,sr),M(sr,rr),M(s,er),M(s,tr),M(tr,or),M(s,nr),M(s,lr),M(lr,cr),M(cr,ir)},p:c,i:c,o:c,d:function(a){a&&p(s)}}}var Y=function(c){function i(a){var l;return s(this,i),l=r(this,e(i).call(this)),t(n(l),a,null,Q,o,[]),l}return a(i,l),i}();function K(a){var s,r,e,t,o,n,l,c,i;return{c:function(){s=g("a"),r=g("h2"),e=_("书写更精简"),t=k(),o=g("p"),n=_("使用你所熟悉的语言（HTML，CSS和JavaScript）构建高度灵活的组件"),l=k(),c=g("span"),i=_("了解更多"),this.h()},l:function(a){s=f(a,"A",{href:!0,slot:!0},!1);var g=h(s);r=f(g,"H2",{},!1);var v=h(r);e=G(v,"书写更精简"),v.forEach(p),t=A(g),o=f(g,"P",{},!1);var u=h(o);n=G(u,"使用你所熟悉的语言（HTML，CSS和JavaScript）构建高度灵活的组件"),u.forEach(p),l=A(g),c=f(g,"SPAN",{class:!0},!1);var d=h(c);i=G(d,"了解更多"),d.forEach(p),g.forEach(p),this.h()},h:function(){v(c,"class","learn-more"),v(s,"href","blog/write-less-code"),v(s,"slot","one")},m:function(a,g){u(a,s,g),M(s,r),M(r,e),M(s,t),M(s,o),M(o,n),M(s,l),M(s,c),M(c,i)},d:function(a){a&&p(s)}}}function X(a){var s,r,e,t,o,n,l,c,i;return{c:function(){s=g("a"),r=g("h2"),e=_("没有 virtual DOM"),t=k(),o=g("p"),n=_("Svelte 不仅将你的代码体积编译为更小原始 JS 、并且让你的 App 启动迅速且保持快速。"),l=k(),c=g("span"),i=_("了解更多"),this.h()},l:function(a){s=f(a,"A",{href:!0,slot:!0},!1);var g=h(s);r=f(g,"H2",{},!1);var v=h(r);e=G(v,"没有 virtual DOM"),v.forEach(p),t=A(g),o=f(g,"P",{},!1);var u=h(o);n=G(u,"Svelte 不仅将你的代码体积编译为更小原始 JS 、并且让你的 App 启动迅速且保持快速。"),u.forEach(p),l=A(g),c=f(g,"SPAN",{class:!0},!1);var d=h(c);i=G(d,"了解更多"),d.forEach(p),g.forEach(p),this.h()},h:function(){v(c,"class","learn-more"),v(s,"href","blog/virtual-dom-is-pure-overhead"),v(s,"slot","two")},m:function(a,g){u(a,s,g),M(s,r),M(r,e),M(s,t),M(s,o),M(o,n),M(s,l),M(s,c),M(c,i)},d:function(a){a&&p(s)}}}function aa(a){var s,r,e,t,o,n,l,c,i;return{c:function(){s=g("a"),r=g("h2"),e=_("真正的实时反应"),t=k(),o=g("p"),n=_("Svelte 为 JavaScript 自身赋予反应性，从而抛弃大量的状态管理库。"),l=k(),c=g("span"),i=_("了解更多"),this.h()},l:function(a){s=f(a,"A",{href:!0,slot:!0},!1);var g=h(s);r=f(g,"H2",{},!1);var v=h(r);e=G(v,"真正的实时反应"),v.forEach(p),t=A(g),o=f(g,"P",{},!1);var u=h(o);n=G(u,"Svelte 为 JavaScript 自身赋予反应性，从而抛弃大量的状态管理库。"),u.forEach(p),l=A(g),c=f(g,"SPAN",{class:!0},!1);var d=h(c);i=G(d,"了解更多"),d.forEach(p),g.forEach(p),this.h()},h:function(){v(c,"class","learn-more"),v(s,"href","blog/svelte-3-rethinking-reactivity"),v(s,"slot","three")},m:function(a,g){u(a,s,g),M(s,r),M(r,e),M(s,t),M(s,o),M(o,n),M(s,l),M(s,c),M(c,i)},d:function(a){a&&p(s)}}}function sa(a){var s,r,e,t,o,n,l,c,i,d,m,$,E,b,y,q,w;return{c:function(){s=g("div"),r=g("p"),e=_("Svelte 是一种构建用户界面的选择。传统的框架（诸如 React 和 Vue）在 "),t=g("em"),o=_("浏览器中"),n=_("完成大部分工作，而  Svelte 则将这步骤放在 "),l=g("em"),c=_("编译阶段"),i=_(" 且这是在你构建程序时发生的。"),d=k(),m=g("p"),$=_("Svelte 不使用virtual DOM 技术，但会在你编写代码时，通过实时编译的方式更新DOM代码，进而做到“边编译，边运行”。"),E=k(),b=g("p"),y=g("a"),q=_("阅读更多"),w=_("介绍性博客和文章"),this.h()},l:function(a){s=f(a,"DIV",{class:!0,slot:!0},!1);var g=h(s);r=f(g,"P",{},!1);var v=h(r);e=G(v,"Svelte 是一种构建用户界面的选择。传统的框架（诸如 React 和 Vue）在 "),t=f(v,"EM",{},!1);var u=h(t);o=G(u,"浏览器中"),u.forEach(p),n=G(v,"完成大部分工作，而  Svelte 则将这步骤放在 "),l=f(v,"EM",{},!1);var k=h(l);c=G(k,"编译阶段"),k.forEach(p),i=G(v," 且这是在你构建程序时发生的。"),v.forEach(p),d=A(g),m=f(g,"P",{},!1);var M=h(m);$=G(M,"Svelte 不使用virtual DOM 技术，但会在你编写代码时，通过实时编译的方式更新DOM代码，进而做到“边编译，边运行”。"),M.forEach(p),E=A(g),b=f(g,"P",{},!1);var z=h(b);y=f(z,"A",{href:!0},!1);var I=h(y);q=G(I,"阅读更多"),I.forEach(p),w=G(z,"介绍性博客和文章"),z.forEach(p),g.forEach(p),this.h()},h:function(){v(y,"href","blog/svelte-3-rethinking-reactivity"),v(s,"class","description"),v(s,"slot","what")},m:function(a,g){u(a,s,g),M(s,r),M(r,e),M(r,t),M(t,o),M(r,n),M(r,l),M(l,c),M(r,i),M(s,d),M(s,m),M(m,$),M(s,E),M(s,b),M(b,y),M(y,q),M(b,w)},d:function(a){a&&p(s)}}}function ra(a){var s,r,e,t,o,n,l,c,i,d,m,$,E,b,y,q,w,z,I,S;return{c:function(){s=g("div"),r=g("pre"),e=_("npx degit "),t=g("a"),o=_("sveltejs/template"),n=_(" my-svelte-project\r\n"),l=g("span"),c=_("# 或下载并解压 "),i=g("a"),d=_("此.zip文件"),m=_("\r\ncd my-svelte-project\r\n\r\nnpm install\r\nnpm run dev"),$=k(),E=g("p"),b=_("更多信息请参考 "),y=g("a"),q=_("快速指南"),w=k(),z=g("p"),I=g("a"),S=_(">学习 Svelte"),this.h()},l:function(a){s=f(a,"DIV",{style:!0,slot:!0},!1);var g=h(s);r=f(g,"PRE",{class:!0,style:!0},!1);var v=h(r);e=G(v,"npx degit "),t=f(v,"A",{href:!0,style:!0},!1);var u=h(t);o=G(u,"sveltejs/template"),u.forEach(p),n=G(v," my-svelte-project\r\n"),l=f(v,"SPAN",{class:!0},!1);var k=h(l);c=G(k,"# 或下载并解压 "),i=f(k,"A",{href:!0},!1);var M=h(i);d=G(M,"此.zip文件"),M.forEach(p),k.forEach(p),m=G(v,"\r\ncd my-svelte-project\r\n\r\nnpm install\r\nnpm run dev"),v.forEach(p),$=A(g),E=f(g,"P",{style:!0},!1);var _=h(E);b=G(_,"更多信息请参考 "),y=f(_,"A",{href:!0},!1);var x=h(y);q=G(x,"快速指南"),x.forEach(p),_.forEach(p),w=A(g),z=f(g,"P",{class:!0},!1);var j=h(z);I=f(j,"A",{rel:!0,href:!0},!1);var P=h(I);S=G(P,">学习 Svelte"),P.forEach(p),j.forEach(p),g.forEach(p),this.h()},h:function(){v(t,"href","https://github.com/sveltejs/template"),x(t,"user-select","initial"),v(i,"href","https://github.com/sveltejs/template/archive/master.zip"),v(l,"class","token comment"),v(r,"class","language-bash"),x(r,"margin","0 0 1em 0"),x(r,"min-width","0"),x(r,"min-height","0"),v(y,"href","blog/the-easiest-way-to-get-started"),x(E,"flex","1"),v(I,"rel","prefetch"),v(I,"href","tutorial"),v(z,"class","cta"),x(s,"grid-area","start"),x(s,"display","flex"),x(s,"flex-direction","column"),x(s,"min-width","0"),v(s,"slot","how")},m:function(a,g){u(a,s,g),M(s,r),M(r,e),M(r,t),M(t,o),M(r,n),M(r,l),M(l,c),M(l,i),M(i,d),M(r,m),M(s,$),M(s,E),M(E,b),M(E,y),M(y,q),M(s,w),M(s,z),M(z,I),M(I,S)},d:function(a){a&&p(s)}}}function ea(a){var s,r,e,t;return{c:function(){s=k(),r=k(),e=k(),t=k()},l:function(a){s=A(a),r=A(a),e=A(a),t=A(a)},m:function(a,o){u(a,s,o),u(a,r,o),u(a,e,o),u(a,t,o)},p:c,d:function(a){a&&(p(s),p(r),p(e),p(t))}}}function ta(a){var s,r;return{c:function(){s=g("p"),r=_("Svelte 组件建立在 HTML 内，试试添加数据。")},l:function(a){s=f(a,"P",{},!1);var e=h(s);r=G(e,"Svelte 组件建立在 HTML 内，试试添加数据。"),e.forEach(p)},m:function(a,e){u(a,s,e),M(s,r)},d:function(a){a&&p(s)}}}function oa(a){var s,r,e,t,o;return{c:function(){s=g("p"),r=_("默认情况下，CSS是局部样式不会与其他样式冲突，或者你可以"),e=g("a"),t=_("使用第三方 CSS-in-JS 库"),o=_("."),this.h()},l:function(a){s=f(a,"P",{},!1);var n=h(s);r=G(n,"默认情况下，CSS是局部样式不会与其他样式冲突，或者你可以"),e=f(n,"A",{href:!0},!1);var l=h(e);t=G(l,"使用第三方 CSS-in-JS 库"),l.forEach(p),o=G(n,"."),n.forEach(p),this.h()},h:function(){v(e,"href","/blog/svelte-css-in-js")},m:function(a,n){u(a,s,n),M(s,r),M(s,e),M(e,t),M(s,o)},d:function(a){a&&p(s)}}}function na(a){var s,r;return{c:function(){s=g("p"),r=_("通过给局部变量赋值就能触发高效、细粒度的更新，剩余的事情交给编译器去处理。")},l:function(a){s=f(a,"P",{},!1);var e=h(s);r=G(e,"通过给局部变量赋值就能触发高效、细粒度的更新，剩余的事情交给编译器去处理。"),e.forEach(p)},m:function(a,e){u(a,s,e),M(s,r)},d:function(a){a&&p(s)}}}function la(a){var s,r;return{c:function(){s=g("p"),r=_("使用内置于框架中的强大、高性能的模板语法来构建漂亮的UI。")},l:function(a){s=f(a,"P",{},!1);var e=h(s);r=G(e,"使用内置于框架中的强大、高性能的模板语法来构建漂亮的UI。"),e.forEach(p)},m:function(a,e){u(a,s,e),M(s,r)},d:function(a){a&&p(s)}}}function ca(a){var s,r,e,t,o=new Y({});return{c:function(){s=g("h3"),r=_("谁在使用 Svelte ？"),e=k(),o.$$.fragment.c()},l:function(a){s=f(a,"H3",{},!1);var t=h(s);r=G(t,"谁在使用 Svelte ？"),t.forEach(p),e=A(a),o.$$.fragment.l(a)},m:function(a,n){u(a,s,n),M(s,r),u(a,e,n),q(o,a,n),t=!0},i:function(a){t||($(o.$$.fragment,a),t=!0)},o:function(a){E(o.$$.fragment,a),t=!1},d:function(a){a&&(p(s),p(e)),w(o,a)}}}function ia(a){var s,r,e,t,o,n,l,c,i,d=new O({});return{c:function(){s=g("h3"),r=_("贡献者"),e=k(),t=g("p"),o=_("Svelte 是免费的开源软件，通过数百名志愿者的工作得以实现。"),n=g("a"),l=_("加入我们！"),c=k(),d.$$.fragment.c(),this.h()},l:function(a){s=f(a,"H3",{},!1);var i=h(s);r=G(i,"贡献者"),i.forEach(p),e=A(a),t=f(a,"P",{},!1);var g=h(t);o=G(g,"Svelte 是免费的开源软件，通过数百名志愿者的工作得以实现。"),n=f(g,"A",{href:!0},!1);var v=h(n);l=G(v,"加入我们！"),v.forEach(p),g.forEach(p),c=A(a),d.$$.fragment.l(a),this.h()},h:function(){v(n,"href","https://github.com/sveltejs/svelte")},m:function(a,g){u(a,s,g),M(s,r),u(a,e,g),u(a,t,g),M(t,o),M(t,n),M(n,l),u(a,c,g),q(d,a,g),i=!0},i:function(a){i||($(d.$$.fragment,a),i=!0)},o:function(a){E(d.$$.fragment,a),i=!1},d:function(a){a&&(p(s),p(e),p(t),p(c)),w(d,a)}}}function ga(a){var s,r,e,t,o,n,l,c,i,d,m,b,y,z=new P({props:{title:"Svelte",tagline:"Cybernetically enhanced web apps",outline:"svelte-logo-outline.svg",logotype:"svelte-logotype.svg"}}),I=new C({props:{$$slots:{default:[ea],how:[ra],what:[sa],three:[aa],two:[X],one:[K]},$$scope:{ctx:a}}}),S=new Z({props:{id:"hello-world",$$slots:{default:[ta]},$$scope:{ctx:a}}}),_=new Z({props:{id:"nested-components",$$slots:{default:[oa]},$$scope:{ctx:a}}}),G=new Z({props:{id:"reactive-assignments",$$slots:{default:[na]},$$scope:{ctx:a}}}),x=new Z({props:{id:"svg-transitions",$$slots:{default:[la]},$$scope:{ctx:a}}}),T=new j({props:{$$slots:{default:[ca]},$$scope:{ctx:a}}}),D=new j({props:{$$slots:{default:[ia]},$$scope:{ctx:a}}});return{c:function(){s=g("meta"),r=g("meta"),e=g("meta"),t=k(),z.$$.fragment.c(),o=k(),I.$$.fragment.c(),n=k(),l=g("div"),S.$$.fragment.c(),c=k(),_.$$.fragment.c(),i=k(),G.$$.fragment.c(),d=k(),x.$$.fragment.c(),m=k(),T.$$.fragment.c(),b=k(),D.$$.fragment.c(),this.h()},l:function(a){s=f(a,"META",{name:!0,content:!0},!1),h(s).forEach(p),r=f(a,"META",{name:!0,content:!0},!1),h(r).forEach(p),e=f(a,"META",{name:!0,content:!0},!1),h(e).forEach(p),t=A(a),z.$$.fragment.l(a),o=A(a),I.$$.fragment.l(a),n=A(a),l=f(a,"DIV",{class:!0},!1);var g=h(l);S.$$.fragment.l(g),c=A(g),_.$$.fragment.l(g),i=A(g),G.$$.fragment.l(g),d=A(g),x.$$.fragment.l(g),g.forEach(p),m=A(a),T.$$.fragment.l(a),b=A(a),D.$$.fragment.l(a),this.h()},h:function(){document.title="Svelte • Cybernetically enhanced web apps.",v(s,"name","twitter:title"),v(s,"content","Svelte"),v(r,"name","twitter:description"),v(r,"content","Cybernetically enhanced web apps"),v(e,"name","Description"),v(e,"content","Cybernetically enhanced web apps"),v(l,"class","examples svelte-p6rra3")},m:function(a,g){M(document.head,s),M(document.head,r),M(document.head,e),u(a,t,g),q(z,a,g),u(a,o,g),q(I,a,g),u(a,n,g),u(a,l,g),q(S,l,null),M(l,c),q(_,l,null),M(l,i),q(G,l,null),M(l,d),q(x,l,null),u(a,m,g),q(T,a,g),u(a,b,g),q(D,a,g),y=!0},p:function(a,s){var r={};a.$$scope&&(r.$$scope={changed:a,ctx:s}),I.$set(r);var e={};a.$$scope&&(e.$$scope={changed:a,ctx:s}),S.$set(e);var t={};a.$$scope&&(t.$$scope={changed:a,ctx:s}),_.$set(t);var o={};a.$$scope&&(o.$$scope={changed:a,ctx:s}),G.$set(o);var n={};a.$$scope&&(n.$$scope={changed:a,ctx:s}),x.$set(n);var l={};a.$$scope&&(l.$$scope={changed:a,ctx:s}),T.$set(l);var c={};a.$$scope&&(c.$$scope={changed:a,ctx:s}),D.$set(c)},i:function(a){y||($(z.$$.fragment,a),$(I.$$.fragment,a),$(S.$$.fragment,a),$(_.$$.fragment,a),$(G.$$.fragment,a),$(x.$$.fragment,a),$(T.$$.fragment,a),$(D.$$.fragment,a),y=!0)},o:function(a){E(z.$$.fragment,a),E(I.$$.fragment,a),E(S.$$.fragment,a),E(_.$$.fragment,a),E(G.$$.fragment,a),E(x.$$.fragment,a),E(T.$$.fragment,a),E(D.$$.fragment,a),y=!1},d:function(a){p(s),p(r),p(e),a&&p(t),w(z,a),a&&p(o),w(I,a),a&&(p(n),p(l)),w(S),w(_),w(G),w(x),a&&p(m),w(T,a),a&&p(b),w(D,a)}}}var fa=function(c){function i(a){var l;return s(this,i),l=r(this,e(i).call(this)),t(n(l),a,null,ga,o,[]),l}return a(i,l),i}();export default fa;