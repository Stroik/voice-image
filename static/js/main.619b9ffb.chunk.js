(this["webpackJsonpvoice-images"]=this["webpackJsonpvoice-images"]||[]).push([[0],{30:function(e,a,t){e.exports=t(59)},35:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(27),s=t.n(r),i=(t(35),t(13)),l=t(9),o=t(7);function u(e){var a=e.commands,t=e.setCommands,n=function(){return t(!a)};return a?c.a.createElement("li",{className:"commands"},c.a.createElement("span",{onClick:function(){return n()},style:{position:"relative"},className:"commands"},"Available voice commands"),c.a.createElement("ul",null,c.a.createElement("li",null,"Search *tag images (ex: search dogs images)"),c.a.createElement("li",null,"Next page"),c.a.createElement("li",null,"Previous page"),c.a.createElement("li",null,"Go back"),c.a.createElement("li",null,"Stop listen"))):c.a.createElement("li",{onClick:function(){return n()},style:{cursor:"pointer"}},"Available voice commands")}function m(e){var a=e.logo,t=(e.isListening,e.setIsListening,Object(n.useState)(!1)),r=Object(i.a)(t,2),s=r[0],o=r[1];return c.a.createElement("div",{className:"menu"},c.a.createElement("div",{className:"logo"},c.a.createElement(l.b,{to:"/"},a)),c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement(u,{commands:s,setCommands:o}),window.annyang.isListening()?c.a.createElement("li",{className:"listening"},c.a.createElement("span",null,"Listening")," ",c.a.createElement("img",{src:"/listening.gif",width:"24px",height:"24px",alt:"Listening"})):null)))}var p=t(6),d=t.n(p),g=t(10),h=t(11),f=t.n(h);function E(e){var a=e.addImages,t=e.url,n=e.setUrl,r=Object(o.f)(),s=Object(o.g)(),i=s.tag,l=s.page;l=1;var u=window.annyang,m={Authorization:"Client-ID mh2cguZ3xIMtgldAof0OJKVIkTs8XiipaW8jO_Z1CuE"},p={"search *tag images":function(e){return h.apply(this,arguments)},"next page":function(){return E.apply(this,arguments)},"previous page":function(){return v.apply(this,arguments)}};function h(){return(h=Object(g.a)(d.a.mark((function e(c){var s,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="".concat(t).concat(c,"&page=").concat(l),e.next=3,f()(s,{headers:m});case 3:o=e.sent,i=c,n(s),a(o.data.results),r.push("/photos/".concat(i,"/").concat(l));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(g.a)(d.a.mark((function e(){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l++,n="".concat(t).concat(i,"&page=").concat(l),e.next=4,f()(n,{headers:m});case 4:c=e.sent,a(c.data.results),r.push("/photos/".concat(i,"/").concat(l));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(g.a)(d.a.mark((function e(){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l--,n="".concat(t).concat(i,"&page=").concat(l),e.next=4,f()(n,{headers:m});case 4:c=e.sent,a(c.data.results),r.push("/photos/".concat(i,"/").concat(l));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.createElement("div",{className:"search-container"},c.a.createElement("h1",null,"Search Images by voice commands"),c.a.createElement("button",{className:"search",onClick:function(){return u.addCommands(p),void u.start()}},' Press and say "Search kitties images" '))}function v(e){e.description;var a=e.altDescription,t=e.urls,n=e.likes;return c.a.createElement("div",{className:"flip-card"},c.a.createElement("div",{className:"flip-card-inner"},c.a.createElement("div",{className:"front"},c.a.createElement("img",{src:t.small,alt:a})),c.a.createElement("div",{className:"back"},c.a.createElement("h1",null,"Likes"),c.a.createElement("p",null,n),c.a.createElement("a",{href:t.raw,target:"_blank",rel:"noopener noreferrer"},"Full image"))))}function b(e){var a=e.images,t=e.url,r=e.setImages,s=Object(o.g)(),i=s.tag,l=s.page,u=Object(o.f)(),m={Authorization:"Client-ID mh2cguZ3xIMtgldAof0OJKVIkTs8XiipaW8jO_Z1CuE"},p={"go back":function(){u.push("/")}};return window.annyang.addCommands(p),Object(n.useEffect)((function(){function e(){return(e=Object(g.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("".concat(t).concat(i,"&page=").concat(l),{headers:m});case 2:a=e.sent,r(a.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}0===a.length&&function(){e.apply(this,arguments)}()}),[t,i,l,m,a,r]),c.a.createElement("div",{className:"css-grid"},0===a.length?c.a.createElement("h1",null,"No results"):a.map((function(e){return c.a.createElement(v,{description:e.description,altDescription:e.alt_description,urls:e.urls,likes:e.likes,key:e.id})})))}var w=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)("https://api.unsplash.com/search/photos/?query="),u=Object(i.a)(s,2),p=u[0],d=u[1],g=window.annyang;return g.addCommands({"stop listen":function(){g.abort()}}),c.a.createElement(l.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(m,{logo:"VoiceImage"}),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/photos/:tag/:page",children:c.a.createElement(b,{images:t,url:p,setImages:r})}),c.a.createElement(o.a,{path:"/",children:c.a.createElement(E,{addImages:r,url:p,setUrl:d})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.619b9ffb.chunk.js.map