import{S as ve,i as _e,s as Fe,e as Q,t as j,c as w,a as k,h as E,d as Z,b as v,K,g as L,J as V,j as $,n as re,l as ce,p as B,q as le,r as S,L as ne,k as I,m as M,M as ke,N as ue,O as Ne,P as ee,Q as Je,o as te,R as Te,x as Re,y as Ye,z as ye,C as Qe}from"../chunks/index-87fdb8f6.js";function ze(o){let e,n=(o[3]?"\u2588".repeat(o[1].length):o[1])+"",l,i;return{c(){e=Q("span"),l=j(n),this.h()},l(t){e=w(t,"SPAN",{id:!0,class:!0});var c=k(e);l=E(c,n),c.forEach(Z),this.h()},h(){v(e,"id",o[0]),v(e,"class",i=K(o[2]?"highlight":"")+" svelte-s9xmm7")},m(t,c){L(t,e,c),V(e,l)},p(t,[c]){c&10&&n!==(n=(t[3]?"\u2588".repeat(t[1].length):t[1])+"")&&$(l,n),c&1&&v(e,"id",t[0]),c&4&&i!==(i=K(t[2]?"highlight":"")+" svelte-s9xmm7")&&v(e,"class",i)},i:re,o:re,d(t){t&&Z(e)}}}function Se(o,e,n){let{id:l}=e,{value:i=""}=e,{highlight:t=!1}=e,{redacted:c=!1}=e;return o.$$set=s=>{"id"in s&&n(0,l=s.id),"value"in s&&n(1,i=s.value),"highlight"in s&&n(2,t=s.highlight),"redacted"in s&&n(3,c=s.redacted)},[l,i,t,c]}class we extends ve{constructor(e){super(),_e(this,e,Se,ze,Fe,{id:0,value:1,highlight:2,redacted:3})}}var He=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ue={exports:{}};(function(o){(function(e){if(typeof n!="function"){var n=function(d){return d};n.nonNative=!0}const l=n("plaintext"),i=n("html"),t=n("comment"),c=/<(\w*)>/g,s=/<\/?([^\s\/>]+)/;function h(d,p,U){d=d||"",p=p||[],U=U||"";let T=g(p,U);return N(d,T)}function a(d,p){d=d||[],p=p||"";let U=g(d,p);return function(R){return N(R||"",U)}}h.init_streaming_mode=a;function g(d,p){return d=Y(d),{allowable_tags:d,tag_replacement:p,state:l,tag_buffer:"",depth:0,in_quote_char:""}}function N(d,p){if(typeof d!="string")throw new TypeError("'html' parameter must be a string");let U=p.allowable_tags,T=p.tag_replacement,R=p.state,X=p.tag_buffer,A=p.depth,y=p.in_quote_char,H="";for(let x=0,P=d.length;x<P;x++){let r=d[x];if(R===l)switch(r){case"<":R=i,X+=r;break;default:H+=r;break}else if(R===i)switch(r){case"<":if(y)break;A++;break;case">":if(y)break;if(A){A--;break}y="",R=l,X+=">",U.has(b(X))?H+=X:H+=T,X="";break;case'"':case"'":r===y?y="":y=y||r,X+=r;break;case"-":X==="<!-"&&(R=t),X+=r;break;case" ":case`
`:if(X==="<"){R=l,H+="< ",X="";break}X+=r;break;default:X+=r;break}else if(R===t)switch(r){case">":X.slice(-2)=="--"&&(R=l),X="";break;default:X+=r;break}}return p.state=R,p.tag_buffer=X,p.depth=A,p.in_quote_char=y,H}function Y(d){let p=new Set;if(typeof d=="string"){let U;for(;U=c.exec(d);)p.add(U[1])}else!n.nonNative&&typeof d[n.iterator]=="function"?p=new Set(d):typeof d.forEach=="function"&&d.forEach(p.add,p);return p}function b(d){let p=s.exec(d);return p?p[1].toLowerCase():null}o.exports?o.exports=h:e.striptags=h})(He)})(Ue);var je=Ue.exports;function fe(o,e,n){const l=o.slice();return l[24]=e[n],l[26]=n,l}function de(o,e,n){const l=o.slice();return l[27]=e[n],l}function me(o,e,n){const l=o.slice();return l[30]=e[n],l}function be(o,e,n){const l=o.slice();return l[30]=e[n],l}function pe(o){let e,n;return{c(){e=Q("p"),n=j("loading..."),this.h()},l(l){e=w(l,"P",{class:!0});var i=k(e);n=E(i,"loading..."),i.forEach(Z),this.h()},h(){v(e,"class","svelte-121opmo")},m(l,i){L(l,e,i),V(e,n)},d(l){l&&Z(e)}}}function We(o){let e,n,l=Object.keys(o[0]).length+"",i,t;return{c(){e=Q("p"),n=j("Solved in "),i=j(l),t=j(" guesses!"),this.h()},l(c){e=w(c,"P",{class:!0});var s=k(e);n=E(s,"Solved in "),i=E(s,l),t=E(s," guesses!"),s.forEach(Z),this.h()},h(){v(e,"class","svelte-121opmo")},m(c,s){L(c,e,s),V(e,n),V(e,i),V(e,t)},p(c,s){s[0]&1&&l!==(l=Object.keys(c[0]).length+"")&&$(i,l)},d(c){c&&Z(e)}}}function Ee(o){let e,n,l,i=o[27].tokens,t=[];for(let s=0;s<i.length;s+=1)t[s]=Ve(me(o,i,s));const c=s=>B(t[s],1,1,()=>{t[s]=null});return{c(){e=Q("p");for(let s=0;s<t.length;s+=1)t[s].c();n=I(),this.h()},l(s){e=w(s,"P",{class:!0});var h=k(e);for(let a=0;a<t.length;a+=1)t[a].l(h);n=M(h),h.forEach(Z),this.h()},h(){v(e,"class","svelte-121opmo")},m(s,h){L(s,e,h);for(let a=0;a<t.length;a+=1)t[a].m(e,null);V(e,n),l=!0},p(s,h){if(h[0]&4){i=s[27].tokens;let a;for(a=0;a<i.length;a+=1){const g=me(s,i,a);t[a]?(t[a].p(g,h),S(t[a],1)):(t[a]=Ve(g),t[a].c(),S(t[a],1),t[a].m(e,n))}for(te(),a=i.length;a<t.length;a+=1)c(a);le()}},i(s){if(!l){for(let h=0;h<i.length;h+=1)S(t[h]);l=!0}},o(s){t=t.filter(Boolean);for(let h=0;h<t.length;h+=1)B(t[h]);l=!1},d(s){s&&Z(e),ee(t,s)}}}function Ae(o){let e,n,l,i=o[27].tokens,t=[];for(let s=0;s<i.length;s+=1)t[s]=Xe(be(o,i,s));const c=s=>B(t[s],1,1,()=>{t[s]=null});return{c(){e=Q("h2");for(let s=0;s<t.length;s+=1)t[s].c();n=I(),this.h()},l(s){e=w(s,"H2",{class:!0});var h=k(e);for(let a=0;a<t.length;a+=1)t[a].l(h);n=M(h),h.forEach(Z),this.h()},h(){v(e,"class","svelte-121opmo")},m(s,h){L(s,e,h);for(let a=0;a<t.length;a+=1)t[a].m(e,null);V(e,n),l=!0},p(s,h){if(h[0]&4){i=s[27].tokens;let a;for(a=0;a<i.length;a+=1){const g=be(s,i,a);t[a]?(t[a].p(g,h),S(t[a],1)):(t[a]=Xe(g),t[a].c(),S(t[a],1),t[a].m(e,n))}for(te(),a=i.length;a<t.length;a+=1)c(a);le()}},i(s){if(!l){for(let h=0;h<i.length;h+=1)S(t[h]);l=!0}},o(s){t=t.filter(Boolean);for(let h=0;h<t.length;h+=1)B(t[h]);l=!1},d(s){s&&Z(e),ee(t,s)}}}function Ve(o){let e,n;return e=new we({props:{id:o[30].id,value:o[30].value,redacted:o[30].redacted,highlight:o[30].highlight||!1}}),{c(){Re(e.$$.fragment)},l(l){Ye(e.$$.fragment,l)},m(l,i){ye(e,l,i),n=!0},p(l,i){const t={};i[0]&4&&(t.id=l[30].id),i[0]&4&&(t.value=l[30].value),i[0]&4&&(t.redacted=l[30].redacted),i[0]&4&&(t.highlight=l[30].highlight||!1),e.$set(t)},i(l){n||(S(e.$$.fragment,l),n=!0)},o(l){B(e.$$.fragment,l),n=!1},d(l){Qe(e,l)}}}function Xe(o){let e,n;return e=new we({props:{id:o[30].id,value:o[30].value,redacted:o[30].redacted,highlight:o[30].highlight||!1}}),{c(){Re(e.$$.fragment)},l(l){Ye(e.$$.fragment,l)},m(l,i){ye(e,l,i),n=!0},p(l,i){const t={};i[0]&4&&(t.id=l[30].id),i[0]&4&&(t.value=l[30].value),i[0]&4&&(t.redacted=l[30].redacted),i[0]&4&&(t.highlight=l[30].highlight||!1),e.$set(t)},i(l){n||(S(e.$$.fragment,l),n=!0)},o(l){B(e.$$.fragment,l),n=!1},d(l){Qe(e,l)}}}function ge(o){let e,n,l,i;const t=[Ae,Ee],c=[];function s(h,a){return h[27].headline?0:1}return e=s(o),n=c[e]=t[e](o),{c(){n.c(),l=ce()},l(h){n.l(h),l=ce()},m(h,a){c[e].m(h,a),L(h,l,a),i=!0},p(h,a){let g=e;e=s(h),e===g?c[e].p(h,a):(te(),B(c[g],1,1,()=>{c[g]=null}),le(),n=c[e],n?n.p(h,a):(n=c[e]=t[e](h),n.c()),S(n,1),n.m(l.parentNode,l))},i(h){i||(S(n),i=!0)},o(h){B(n),i=!1},d(h){c[e].d(h),h&&Z(l)}}}function Ge(o){let e,n,l=o[24]+"",i,t,c=o[0][o[24]]+"",s,h,a,g,N;return{c(){e=Q("span"),n=Q("b"),i=j(l),t=j("("),s=j(c),h=j(")"),this.h()},l(Y){e=w(Y,"SPAN",{class:!0});var b=k(e);n=w(b,"B",{});var d=k(n);i=E(d,l),d.forEach(Z),t=E(b,"("),s=E(b,c),h=E(b,")"),b.forEach(Z),this.h()},h(){v(e,"class",a=K(o[4]==o[24]?"highlight word":"word")+" svelte-121opmo")},m(Y,b){L(Y,e,b),V(e,n),V(n,i),V(e,t),V(e,s),V(e,h),g||(N=ne(e,"click",function(){Te(o[6](o[24]))&&o[6](o[24]).apply(this,arguments)}),g=!0)},p(Y,b){o=Y,b[0]&1&&l!==(l=o[24]+"")&&$(i,l),b[0]&1&&c!==(c=o[0][o[24]]+"")&&$(s,c),b[0]&17&&a!==(a=K(o[4]==o[24]?"highlight word":"word")+" svelte-121opmo")&&v(e,"class",a)},d(Y){Y&&Z(e),g=!1,N()}}}function Be(o){let e,n,l,i,t,c,s,h,a,g,N,Y,b,d,p,U,T,R,X,A,y,H,x,P,r=o[5]&&pe(),m=o[1]&&We(o),G=o[2],W=[];for(let u=0;u<G.length;u+=1)W[u]=ge(de(o,G,u));const J=u=>B(W[u],1,1,()=>{W[u]=null});let z=Object.keys(o[0]).reverse(),F=[];for(let u=0;u<z.length;u+=1)F[u]=Ge(fe(o,z,u));return{c(){e=Q("div"),n=Q("nav"),l=Q("h1"),i=j("Redactle"),t=I(),c=Q("p"),s=j(`A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.`),h=I(),a=Q("div"),r&&r.c(),g=I(),m&&m.c(),N=I();for(let u=0;u<W.length;u+=1)W[u].c();Y=I(),b=Q("div"),d=Q("h3"),p=j("Guesses"),U=I(),T=Q("div"),R=Q("form"),X=Q("input"),A=I(),y=Q("guess-list");for(let u=0;u<F.length;u+=1)F[u].c();this.h()},l(u){e=w(u,"DIV",{id:!0,class:!0});var _=k(e);n=w(_,"NAV",{class:!0});var f=k(n);l=w(f,"H1",{class:!0});var C=k(l);i=E(C,"Redactle"),C.forEach(Z),t=M(f),c=w(f,"P",{class:!0});var se=k(c);s=E(se,`A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.`),se.forEach(Z),f.forEach(Z),h=M(_),a=w(_,"DIV",{id:!0,class:!0});var D=k(a);r&&r.l(D),g=M(D),m&&m.l(D),N=M(D);for(let O=0;O<W.length;O+=1)W[O].l(D);D.forEach(Z),Y=M(_),b=w(_,"DIV",{id:!0,class:!0});var q=k(b);d=w(q,"H3",{class:!0});var ae=k(d);p=E(ae,"Guesses"),ae.forEach(Z),U=M(q),T=w(q,"DIV",{id:!0});var oe=k(T);R=w(oe,"FORM",{});var ie=k(R);X=w(ie,"INPUT",{id:!0,placeholder:!0,class:!0}),ie.forEach(Z),oe.forEach(Z),A=M(q),y=w(q,"GUESS-LIST",{class:!0});var he=k(y);for(let O=0;O<F.length;O+=1)F[O].l(he);he.forEach(Z),q.forEach(Z),_.forEach(Z),this.h()},h(){v(l,"class","svelte-121opmo"),v(c,"class","info svelte-121opmo"),v(n,"class","svelte-121opmo"),v(a,"id","article"),v(a,"class","svelte-121opmo"),v(d,"class","svelte-121opmo"),v(X,"id","input-guess"),v(X,"placeholder","guess a word..."),v(X,"class","svelte-121opmo"),v(T,"id","guess-form"),ke(y,"class","svelte-121opmo"),v(b,"id","guesses"),v(b,"class","svelte-121opmo"),v(e,"id","main"),v(e,"class","svelte-121opmo")},m(u,_){L(u,e,_),V(e,n),V(n,l),V(l,i),V(n,t),V(n,c),V(c,s),V(e,h),V(e,a),r&&r.m(a,null),V(a,g),m&&m.m(a,null),V(a,N);for(let f=0;f<W.length;f+=1)W[f].m(a,null);V(e,Y),V(e,b),V(b,d),V(d,p),V(b,U),V(b,T),V(T,R),V(R,X),ue(X,o[3]),V(b,A),V(b,y);for(let f=0;f<F.length;f+=1)F[f].m(y,null);H=!0,x||(P=[ne(X,"input",o[8]),ne(R,"submit",Ne(o[7]))],x=!0)},p(u,_){if(u[5]?r||(r=pe(),r.c(),r.m(a,g)):r&&(r.d(1),r=null),u[1]?m?m.p(u,_):(m=We(u),m.c(),m.m(a,N)):m&&(m.d(1),m=null),_[0]&4){G=u[2];let f;for(f=0;f<G.length;f+=1){const C=de(u,G,f);W[f]?(W[f].p(C,_),S(W[f],1)):(W[f]=ge(C),W[f].c(),S(W[f],1),W[f].m(a,null))}for(te(),f=G.length;f<W.length;f+=1)J(f);le()}if(_[0]&8&&X.value!==u[3]&&ue(X,u[3]),_[0]&81){z=Object.keys(u[0]).reverse();let f;for(f=0;f<z.length;f+=1){const C=fe(u,z,f);F[f]?F[f].p(C,_):(F[f]=Ge(C),F[f].c(),F[f].m(y,null))}for(;f<F.length;f+=1)F[f].d(1);F.length=z.length}},i(u){if(!H){for(let _=0;_<G.length;_+=1)S(W[_]);H=!0}},o(u){W=W.filter(Boolean);for(let _=0;_<W.length;_+=1)B(W[_]);H=!1},d(u){u&&Z(e),r&&r.d(),m&&m.d(),ee(W,u),ee(F,u),x=!1,Je(P)}}}let xe=/(([^\u0000-\u007F]|\w)+)((\W)*)/ig;function Ze(o,e){return`${Ie(o).replaceAll("=","a")}${e}`}function Ie(o){let e=encodeURIComponent(o).replace(/%([a-f0-9]{2})/gi,(n,l)=>String.fromCharCode(parseInt(l,16)));return btoa(e)}function Me(o){let e=atob(o).replace(/[\x80-\uffff]/g,n=>`%${n.charCodeAt(0).toString(16).padStart(2,"0")}`);return decodeURIComponent(e)}function Ce(o,e,n){let l=[],i={},t=!1;const c=["i","me","my","myself","we","our","ours","ourselves","you","you're","you've","you'll","you'd","your","yours","yourself","yourselves","he","him","his","himself","she","she's","her","hers","herself","it","it's","its","itself","they","them","their","theirs","themselves","what","which","who","whom","this","that","that'll","these","those","am","is","are","was","were","be","been","being","have","has","had","having","do","does","did","doing","a","an","the","and","but","if","or","because","as","until","while","of","at","by","for","with","about","against","between","into","through","during","before","after","above","below","to","from","up","down","in","out","on","off","over","under","again","further","then","once","here","there","when","where","why","how","all","any","both","each","few","more","most","other","some","such","no","nor","not","only","own","same","so","than","too","very","s","t","can","will","just","don","don't","should","should've","now","d","ll","m","o","re","ve","y","ain","aren","aren't","couldn","couldn't","didn","didn't","doesn","doesn't","hadn","hadn't","hasn","hasn't","haven","haven't","isn","isn't","ma","mightn","mightn't","mustn","mustn't","needn","needn't","shan","shan't","shouldn","shouldn't","wasn","wasn't","weren","weren't","won","won't","wouldn","wouldn't"];let s={};c.filter(r=>r.length<8).forEach(r=>s[r]=1);const h=["UmljaGFyZF9JX29mX0VuZ2xhbmQ=","RWFzdF9DaGluYV9TZWE=","UGl6emE=","UG9pc29u","UHVtcF9vcmdhbg==","QXByaWNvdA==","VGl0aGU=","VmlkZW9fYXJ0","U3VwZXJjb25kdWN0aXZpdHk=","WmlvbmlzbQ==","UGln","U3VsZnVyaWNfYWNpZA==","RGltZW5zaW9u","UHJvdG9u","Q291bmNpbF9vZl9FdXJvcGU=","Um9zZXR0YV9TdG9uZQ==","QXBvbGxvXzEx","R29kYXZhcmlfUml2ZXI=","R2VvcmdlX0MuX01hcnNoYWxs","Q29uZ3Jlc3Nfb2ZfQmVybGlu","V2FzaGluZ3Rvbl9JcnZpbmc=","TWV0YWxsdXJneQ==","VGhvbWFzX0hlbnJ5X0h1eGxleQ==","SG9yaXpvbg==","TWVsdGluZw==","SmVsbHlmaXNo","U2VhdHRsZQ==","Sm9obl90aGVfQmFwdGlzdA==","SG9ybW9uZQ==","RHJhZ29u","U2F3","SGFydWtpX011cmFrYW1p","QWJpb2dlbmVzaXM=","RXhwbG9yYXRpb24=","RGVyaXZhdGl2ZQ==","SXZhbl9QYXZsb3Y=","UGVudGVjb3N0","TnVtZXJpY2FsX2RpZ2l0","VmlkZW9fY2FtZXJh","SW50ZXJuYXRpb25hbF9yZWxhdGlvbnM=","TG91aXNfUGhpbGlwcGVfSQ==","RGVyX1NwaWVnZWw=","V2F0Y2g=","RXRoaW9waWFuX0NpdmlsX1dhcg==","TW91bnRfTG9nYW4=","VmlraW5nX0FnZQ==","QnJvd25pYW5fbW90aW9u","TW9kZXJuX3BlbnRhdGhsb24=","RWlmZmVsX1Rvd2Vy","Um9tYW50aWNpc20=","UHRvbGVteQ==","RWFyd2ln","QXp0ZWNz","Q3J5c3RhbF9zdHJ1Y3R1cmU=","U3Jpbml2YXNhX1JhbWFudWphbg==","QnVz","U3VyYXQ=","RWxpemFiZXRoX0NhZHlfU3RhbnRvbg==","VHJhbnNpdGlvbl9tZXRhbA==","U3RyaW5nX2luc3RydW1lbnQ=","QmVuZWx1eA==","UHJpc20=","QW5reWxvc2F1cnVz","UG9wZQ==","Q2VjaWxfUmhvZGVz","UHN5Y2hvYW5hbHlzaXM=","U2FuZ3JpYQ==","Q29nbml0aXZlX3BzeWNob2xvZ3k=","VmlvbGE=","RnJlbmNoX0ZpcnN0X1JlcHVibGlj","VGlncmlz","T1BFQw==","RnJpZWRyaWNoX05pZXR6c2NoZQ==","SmV0X1Byb3B1bHNpb25fTGFib3JhdG9yeQ==","RG9waW5nX2luX3Nwb3J0","V2FsdF9XaGl0bWFu","UGhpbG9zb3BoaWNhbF9sb2dpYw==","SGlzdG9yeV9vZl90aGVfRWFydGg=","R2Fz","R2VuZXRpY2FsbHlfbW9kaWZpZWRfb3JnYW5pc20=","RnJ1Y3Rvc2U=","QXN0ZXJvaWRfYmVsdA==","R2VyaWF0cmljcw==","Tm9ydGhfUG9sZQ==","Uml2ZXJfZGVsdGE=","V2lsbGlhbV9TaGFrZXNwZWFyZQ==","VGhhaWxhbmQ=","Q29tbW9uX2NvbGQ=","VXJzYV9NYWpvcg==","Q2hyaXN0aWFuX0NodXJjaA==","QXJlYQ==","QW1hdGV1cl90aGVhdHJl","R2xlbm5fTWlsbGVy","QWxpX0toYW1lbmVp","Q2lubmFtb24=","VGhlX0JhaGFtYXM=","S2F6YWtoX2xhbmd1YWdl","VGFpZ2E=","TXVsdGlwbGljYXRpb24=","RnJlZV9Tb2Z0d2FyZV9Gb3VuZGF0aW9u","SGFtbWVy","RGlja19Gb3NidXJ5","QXV0aG9yaXR5","QXN0ZXJpeA==","V2F2ZWd1aWRl","QW5nbGU=","TnVjbGVhcl9jaGVtaXN0cnk=","UXVlZW4=","TWlsaXRhcnlfc2NpZW5jZQ==","RWxvbl9NdXNr","TW91bnRfT2x5bXB1cw==","UGF1bF9LbGVl","RWR3YXJkX1RlbGxlcg==","Q2xhbXBfKHRvb2wp","U2hhcms=","UGhpbGFkZWxwaGlh","VHJvcGljYWxfZm9yZXN0","U2VzYW1lX1N0cmVldA==","QWxiZXJ0X0VpbnN0ZWlu","UG9uY2VfZGVfTGVvbg==","VHJhaW4=","UGVkcm9fSUlfb2ZfQnJhemls","UG90YXNzaXVtX2h5ZHJveGlkZQ==","Q2hpY2tlbg==","TG93ZXJfUGFsZW9saXRoaWM=","QWNyb3BvbGlzX29mX0F0aGVucw==","SW9uX3RocnVzdGVy","TWFhc2FpX3Blb3BsZQ==","SV9Mb3ZlX0x1Y3k=","Q29sb25lbA==","Q2FyZWVy","V3Jlc3RsaW5n","R2VuZXJhbF9wcmFjdGl0aW9uZXI=","TW91bnRhaW4=","SHlkcm9nZW5fYm9uZA==","UEhQ","SVVQQUNfbm9tZW5jbGF0dXJlX29mX29yZ2FuaWNfY2hlbWlzdHJ5","TmV3X1plYWxhbmQ=","U2lraGlzbQ==","U2tp","U29waG9jbGVz","Q2FwYWNpdG9y","SGlzdG9yeV9vZl9tdXNpYw==","UGFybWVuaWRlcw==","Rm9yZWlnbl9wb2xpY3k=","UGVudGhvdXNlX2FwYXJ0bWVudA==","TGFicmFkb3JfU2Vh","V29yZF9wcm9jZXNzb3I=","SnVkaWNpYXJ5","TXVhbW1hcl9HYWRkYWZp","TWlzc2lzc2lwcGlfUml2ZXI=","TWFybG9uX0JyYW5kbw==","Q29tYmluZV9oYXJ2ZXN0ZXI=","Q2hhbWJlcl9tdXNpYw==","TGFrZV9CYWlrYWw=","Q29uc3RhbnRpbmVfdGhlX0dyZWF0","SGlzdG9yeV9vZl9JcmVsYW5k","RW1iZXp6bGVtZW50","Q2F1c2FsaXR5","UGVhY2g=","QmVlY2g=","SmFkZV9FbXBlcm9y","VHJhaW5fc3RhdGlvbg==","U3VsZWltYW5fdGhlX01hZ25pZmljZW50","S2FidWtp","Um9ja3lfTW91bnRhaW5z","TWFnbmV0aXNt","Rmxvb2Q=","S29uc3RhbnRpbl9TdGFuaXNsYXZza2k=","TWFydGluX0x1dGhlcg==","UmFpbmVyX1dlcm5lcl9GYXNzYmluZGVy","U2hpdGFv","RWRzZ2VyX1cuX0RpamtzdHJh","TnVjbGVhcl9wb3dlcg==","Q29uY2VwdHVhbF9hcnQ=","RW5naW5l","RXBpZ3JhcGh5","TWluaW1hbGlzbQ==","TGVucw==","Q2hhcmlvdA==","UnVt","U3BhbmlzaF9sYW5ndWFnZQ==","Rm9yd2FyZF9lcnJvcl9jb3JyZWN0aW9u","VGhlX0dvZGZhdGhlcg==","S2l3aWZydWl0","Q2VsbF93YWxs","SHlwZXJ0ZXh0X1RyYW5zZmVyX1Byb3RvY29s","QmhhZ2F2YWRfR2l0YQ==","U2Fsdmlh","Tm9ucHJvZml0X29yZ2FuaXphdGlvbg==","S2F6aW1pcl9NYWxldmljaA==","RHJhY29fKGNvbnN0ZWxsYXRpb24p","VmVkYW50YQ==","Q29yc2ljYQ==","QXJhbWFpY19sYW5ndWFnZQ==","RWFzeV9saXN0ZW5pbmc=","QW5hbHl0aWNfZ2VvbWV0cnk=","Q2FsaXBoYXRl","VGFpd2FuX1N0cmFpdA==","Q2xhc3NpZmljYXRpb25fb2ZfZmluaXRlX3NpbXBsZV9ncm91cHM=","Q2Vhc2VmaXJl","SHlkcm9lbGVjdHJpY2l0eQ==","TG9jaF9OZXNzX01vbnN0ZXI=","TW9iaWxlX3Bob25l","U29jaW9sb2d5","TnVtYmVy","UmVkb3g=","UGVhdA==","Q2FyZ28=","SGVybWFubl9NYWllcg==","VGVtcGVyYXRlX2NsaW1hdGU=","SGF1bWVh","TW9zcXVl","Q2l2aWxfZGlzb2JlZGllbmNl","UmVzcGlyYXRvcnlfc3lzdGVt","TWlkZGxlX0FnZXM=","RGVubmlzX1JpdGNoaWU=","SmF6eg==","TW9jaGVfY3VsdHVyZQ==","U3RpZmZuZXNz","QXJyb3c=","R2x1Y29zZQ==","TGlicmFyeV9vZl9BbGV4YW5kcmlh","U2FoYXJh","Q2V0YWNlYQ==","Q2hpbmE=","VG9ycXVl","U2tvcGpl","QmFtYm9v","U2lsa19Sb2Fk","RXhwb25lbnRpYWxfZnVuY3Rpb24=","U3RhY2tfKGdlb2xvZ3kp","U3RyYWl0X29mX0hvcm11eg==","QmlsbHlfV2lsZGVy","VGluYW1vdQ==","U2NyYW1ibGVfZm9yX0FmcmljYQ==","UGxheV8oYWN0aXZpdHkp","TWloYWlfRW1pbmVzY3U=","U3RldmVfV296bmlhaw==","SHlwb3hpYV8obWVkaWNhbCk=","QWZyaWNhbl9idWZmYWxv","T3Jl","RG9taW5vZXM=","VW5pdmVyc2l0eV9vZl9Db3BlbmhhZ2Vu","Q2VudGlwZWRl","Q2hhcm9u","TWVyeWxfU3RyZWVw","QnJh","U29tYWxpYQ==","U3Vic3RhbmNlX2RlcGVuZGVuY2U=","UHVyaXRhbg==","TWVjY2E=","SHVuZ2Vy","RWd5cHRpYW5faGllcm9nbHlwaHM=","U2tpbl9jYW5jZXI=","RXRobmljX2NvbmZsaWN0","UGVyaXNjb3Bl","WWFr","R3VpdGFy","QmFsa2FuX1dhcnM=","VmVsb2NpdHk=","T3BlcmF0aW9uYWxfYW1wbGlmaWVy","SmFjb2I=","SGFsb2dlbg==","RmF1c3Q=","TGludXNfVG9ydmFsZHM=","QW50b25fQnJ1Y2tuZXI=","VHJpYW5ndWx1bV9HYWxheHk=","WW91dGg=","RHV0eQ==","RmF0","Q29tcGFzcw==","U3VzdGFpbmFibGVfZGV2ZWxvcG1lbnQ=","QW5nbGVyZmlzaA==","Qm95","R3VucG93ZGVy","SW5mb3JtYXRpb24=","SmFwYW4=","UGVyaW9kXzJfZWxlbWVudA==","Q2FyYm9uX21vbm94aWRl","SW5kdXN0cmlhbF9hZ3JpY3VsdHVyZQ==","QmFuaw==","Tm9ydGhfWWVtZW5fQ2l2aWxfV2Fy","UGlnbWVudA==","WW9zZW1pdGVfTmF0aW9uYWxfUGFyaw==","S2FtY2hhdGthX1Blbmluc3VsYQ==","RmlkZWxfQ2FzdHJv","SXJpc2hfU2Vh","SHVtYW5fcmlnaHRz","QXRvbQ==","VG95","U3ByaW5nXyhzZWFzb24p","Uml2ZXI=","UGFzdGE=","U3BhbmlzaF9jb25xdWVzdF9vZl90aGVfSW5jYV9FbXBpcmU=","UGV0ZXJfR2FicmllbA==","QXJhbF9TZWE="];let a=[],g="",N="",Y=0,b={},d=!0;p();function p(){const r=Math.floor(Math.random()*h.length);let m=Me(h[r]);fetch(`https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${m}`).then(G=>G.json()).then(G=>{let W=0;G.lead.displaytitle;let J=G.lead.sections[0].text,z=U(J);W+=z.length,l.push({text:z,headline:G.lead.displaytitle});let F=0;for(;W<15e3&&F<G.remaining.sections.length;)J=G.remaining.sections[F].text,z=U(J),W+=z.length,l.push({text:z,headline:G.remaining.sections[F].line}),F++;T()})}function U(r){let m=r.replace(/<style.*>.*<\/style>/ig,"");return m=je(m),m=m.replace(/&nbsp;/g," ").replace(/&(?:amp);/g,"&").replace(/&(?:lt);/g,"<").replace(/&(?:gt);/g,">").replace(/&(?:quot);/g,'"').replace(/&(?:#39);/g,"'"),m=m.replace(/\[\d+\]/ig,""),m}function T(){console.log("rendering..."),n(2,a=[]),b={};for(const r in l)X(l[r].headline,!0),r==0&&n(1,t=R()),X(l[r].text,!1);n(5,d=!1)}function R(){let r=!0;for(const m in a[0].tokens)a[0].tokens[m].redacted&&(r=!1);return r}function X(r,m){let G=[...r.matchAll(xe)],W=A(G);a.push({headline:m,tokens:W})}function A(r){let m=[];for(const G in r){let W=r[G][1];if(W){let J=W.toLowerCase();b[J]=J in b?b[J]+1:1;let z={value:W,wordLower:J,id:Ze(J,b[J]-1),redacted:!t&&J.length>2&&!s.hasOwnProperty(J)&&!i.hasOwnProperty(J),highlight:J==N};m.push(z)}r[G][3]&&m.push({value:r[G][3]})}return m}function y(r){Y=N==r?Y+1:0,r in b&&b[r]>0&&(Y=Y%b[r]),n(4,N=r);const m=Ze(N,Y);let G=document.getElementById(m);console.log(`scroll to ${m}`),G&&G.scrollIntoView(),T()}function H(){let r=g.toLowerCase();if(!x(r)){console.log("invalid guess"),n(3,g="");return}r=="togglecheats"&&n(1,t=!t),n(0,i[r]=b[r]||0,i),y(r),n(3,g=""),T()}function x(r){return!(r in s||/^\w+$/.test(r)==!1)}function P(){g=this.value,n(3,g)}return[i,t,a,g,N,d,y,H,P]}class Oe extends ve{constructor(e){super(),_e(this,e,Ce,Be,Fe,{},null,[-1,-1])}}export{Oe as default};
