(this["webpackJsonpvoice-images"]=this["webpackJsonpvoice-images"]||[]).push([[0],{30:function(e,a,t){e.exports=t(59)},35:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(27),s=t.n(r),o=(t(35),t(13)),i=t(9),l=t(7);function u(e){var a=e.commands,t=e.setCommands,n=function(){return t(!a)};return a?c.a.createElement("li",{className:"commands"},c.a.createElement("span",{onClick:function(){return n()},style:{position:"relative"},className:"commands"},"Available voice commands"),c.a.createElement("ul",null,c.a.createElement("li",null,"Search *tag images (ex: search dogs images)"),c.a.createElement("li",null,"Next page"),c.a.createElement("li",null,"Previous page"),c.a.createElement("li",null,"Go back"),c.a.createElement("li",null,"Stop listen"))):c.a.createElement("li",{onClick:function(){return n()},style:{cursor:"pointer"}},"Available voice commands")}function m(e){var a=e.logo,t=(e.isListening,e.setIsListening,Object(n.useState)(!1)),r=Object(o.a)(t,2),s=r[0],l=r[1];return c.a.createElement("div",{className:"menu"},c.a.createElement("div",{className:"logo"},c.a.createElement(i.b,{to:"/voice-image/"},a)),c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement(u,{commands:s,setCommands:l}))))}var p=t(6),d=t.n(p),g=t(10),h=t(11),f=t.n(h);function v(e){var a=e.addImages,t=e.url,n=e.setUrl,r=Object(l.f)(),s=Object(l.g)(),o=s.tag,i=s.page;i=1;var u=window.annyang,m={Authorization:"Client-ID mh2cguZ3xIMtgldAof0OJKVIkTs8XiipaW8jO_Z1CuE"},p={"search *tag images":function(e){return h.apply(this,arguments)},"next page":function(){return v.apply(this,arguments)},"previous page":function(){return E.apply(this,arguments)}};function h(){return(h=Object(g.a)(d.a.mark((function e(c){var s,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="".concat(t).concat(c,"&page=").concat(i),e.next=3,f()(s,{headers:m});case 3:l=e.sent,o=c,n(s),a(l.data.results),r.push("/voice-image/photos/".concat(o,"/").concat(i));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(g.a)(d.a.mark((function e(){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i++,n="".concat(t).concat(o,"&page=").concat(i),e.next=4,f()(n,{headers:m});case 4:c=e.sent,a(c.data.results),r.push("/voice-image/photos/".concat(o,"/").concat(i));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(g.a)(d.a.mark((function e(){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i--,n="".concat(t).concat(o,"&page=").concat(i),e.next=4,f()(n,{headers:m});case 4:c=e.sent,a(c.data.results),r.push("/voice-image/photos/".concat(o,"/").concat(i));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.createElement("div",{className:"search-container"},c.a.createElement("h1",null,"Search Images by voice commands"),c.a.createElement("button",{className:"search",onClick:function(){return u.addCommands(p),void u.start()}},' Press and say "Search kitties images" '))}function E(e){e.description;var a=e.altDescription,t=e.urls,n=e.likes;return c.a.createElement("div",{className:"flip-card"},c.a.createElement("div",{className:"flip-card-inner"},c.a.createElement("div",{className:"front"},c.a.createElement("img",{src:t.small,alt:a})),c.a.createElement("div",{className:"back"},c.a.createElement("h1",null,"Likes"),c.a.createElement("p",null,n),c.a.createElement("a",{href:t.raw,target:"_blank",rel:"noopener noreferrer"},"Full image"))))}function b(e){var a=e.images,t=e.url,r=e.setImages,s=Object(l.g)(),o=s.tag,i=s.page,u=Object(l.f)(),m={Authorization:"Client-ID mh2cguZ3xIMtgldAof0OJKVIkTs8XiipaW8jO_Z1CuE"},p={"go back":function(){u.push("/voice-image/")}};return window.annyang.addCommands(p),Object(n.useEffect)((function(){function e(){return(e=Object(g.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("".concat(t).concat(o,"&page=").concat(i),{headers:m});case 2:a=e.sent,r(a.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}0===a.length&&function(){e.apply(this,arguments)}()}),[t,o,i,m,a,r]),c.a.createElement("div",{className:"css-grid"},0===a.length?c.a.createElement("h1",null,"No results"):a.map((function(e){return c.a.createElement(E,{description:e.description,altDescription:e.alt_description,urls:e.urls,likes:e.likes,key:e.id})})))}var k=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)("https://api.unsplash.com/search/photos/?query="),u=Object(o.a)(s,2),p=u[0],d=u[1],g=window.annyang;return g.addCommands({"stop listen":function(){g.abort()}}),c.a.createElement(i.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(m,{logo:"VoiceImage"}),c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/voice-image/photos/:tag/:page",children:c.a.createElement(b,{images:t,url:p,setImages:r})}),c.a.createElement(l.a,{path:"/voice-image/",children:c.a.createElement(v,{addImages:r,url:p,setUrl:d})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.53be6716.chunk.js.map