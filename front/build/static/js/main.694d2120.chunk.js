(window.webpackJsonpfront=window.webpackJsonpfront||[]).push([[0],{11:function(e,t,n){},15:function(e,t,n){e.exports=n(29)},29:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),r=n(13),o=n.n(r),s=n(8),c=n.n(s),u=n(10),l=n(3),p=n(4),h=n(7),f=n(5),d=n(9),m=n(6),v=n(14),b=n.n(v),j=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){if(e.data!==this.props.data){var t=b()(this.divNavio,600);t.data(this.props.data),t.addAllAttribs()}}},{key:"render",value:function(){var e=this;return this.props.visualizar?i.a.createElement("div",{ref:function(t){return e.divNavio=t}}):null}}]),t}(a.Component),g=(n(11),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return"No se ha ingresado la url!"===this.props.info?i.a.createElement("p",null,this.props.info):"Su informaci\xf3n se est\xe1 cargando. Por favor espere."===this.props.info?i.a.createElement("div",null,i.a.createElement("p",null,this.props.info," "),i.a.createElement("div",{className:"ruedita"})):"Hubo un error"===this.props.info?i.a.createElement("p",null,this.props.info):null}}]),t}(a.Component)),E=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return"Su informaci\xf3n se est\xe1 cargando. Por favor espere."===this.props.info?i.a.createElement("div",null,i.a.createElement("p",null,"Numero de p\xe1ginas obtenidas: ",this.props.num)):null}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={data:[],infoData:"No se ha ingresado la url!",historico:[],viz:!1,numPagina:0},n.value="",n.url="",n.numPagina=0,n.onClick.bind(Object(d.a)(n)),n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/obtenerHistorico",{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}).then((function(t){t.json().then((function(t){e.setState({historico:t})}))}))}},{key:"onChange",value:function(e){this.value=e.target.value}},{key:"onClickDelete",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/borrarHistorico",{method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e.next=4,fetch("/obtenerHistorico",{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,e.next=10,this.setState({historico:n});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onClick",value:function(e){var t=this;return Object(u.a)(c.a.mark((function n(){var a,i,r,o,s,u,l,p,h;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""===e&&(e=t.value),0!==e.length){n.next=5;break}alert("Debe ingresar una URL"),n.next=43;break;case 5:return t.setState({infoData:"Su informaci\xf3n se est\xe1 cargando. Por favor espere.",viz:!1,numPagina:0}),n.prev=6,a=100,i=0,t.url=e+"?$limit="+a+"&$offset="+i,r=[],n.next=13,fetch(t.url,{method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"application/json"}});case 13:return o=n.sent,n.next=16,o.json();case 16:s=n.sent,r.push(s),u=s.length;case 19:if(0===u){n.next=31;break}return n.next=22,new Promise((function(e,n){setTimeout(t.auxiliar2(t.url,e),300)}));case 22:l=n.sent,u=l.length,r.push(l),i+=a,t.url=e+"?$limit="+a+"&$offset="+i,p=t.state.numPagina+1,t.setState({numPagina:p}),n.next=19;break;case 31:return h=r.flat(),n.next=34,fetch("/enviarHistorico",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e,fecha:new Date})});case 34:return n.next=36,t.setState({data:h,infoData:"OK",viz:!0});case 36:fetch("/obtenerHistorico",{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}).then((function(e){e.json().then((function(e){t.setState({historico:e})}))})),n.next=43;break;case 39:n.prev=39,n.t0=n.catch(6),console.log(n.t0),t.setState({infoData:"Hubo un error"});case 43:case"end":return n.stop()}}),n,null,[[6,39]])})))}},{key:"auxiliar2",value:function(e,t){return Object(u.a)(c.a.mark((function n(){var a,i;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e,{method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return a=n.sent,n.next=5,a.json();case 5:i=n.sent,t(i);case 7:case"end":return n.stop()}}),n)})))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("h2",null,"App de visualizaci\xf3n de datos de Socrata con Navio"),i.a.createElement("p",null,"Seleccione una busqueda hist\xf3rica en el hist\xf3rico de peticiones o ingrese la URL en el campo y oprima el bot\xf3n Enviar URL"),i.a.createElement("div",{className:"bannerHistorial"},i.a.createElement("h3",null,"Hist\xf3rico de peticiones"),i.a.createElement("button",{onClick:this.onClickDelete.bind(this)}," Eliminar hist\xf3rico disponible")),i.a.createElement("div",{className:"historial"},this.state.historico.map((function(t){return i.a.createElement("button",{onClick:e.onClick(t.url)},"Fecha: ",t.fecha," url: ",t.url)}))),i.a.createElement("input",{type:"text",onChange:this.onChange.bind(this)}),i.a.createElement("button",{onClick:this.onClick("")},"Enviar URL"),i.a.createElement(g,{info:this.state.infoData}),i.a.createElement(E,{info:this.state.infoData,num:this.state.numPagina}),i.a.createElement(j,{visualizar:this.state.viz,data:this.state.data,ref:function(t){return e.aquiNavio=t}}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.694d2120.chunk.js.map