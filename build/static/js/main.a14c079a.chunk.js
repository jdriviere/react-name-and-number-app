(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),c=a.n(r),m=a(1),l=a(2),o=a(4),i=a(3),u=a(5),d=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(o.a)(this,Object(i.a)(t).call(this))).setNameHandler=function(){e.setState({name:"John Doe"})},e.removeNameHandler=function(){""!==e.state.name&&e.setState({name:""})},e.updateNameHandler=function(t){e.setState({name:t.target.value})},e.state={name:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,""===this.state.name?s.a.createElement("h3",{className:"make-text-bold make-text-danger"}," No name is recorded... "):s.a.createElement("h3",{className:"make-text-bold make-text-success"}," Your name is ",this.state.name,"! "),s.a.createElement("input",{className:"input",type:"text",value:this.state.name,placeholder:"Type a name and see the change...",onChange:this.updateNameHandler}),s.a.createElement("div",{className:"buttons make-centered make-margin-15-top"},s.a.createElement("button",{className:"button make-success",onClick:this.setNameHandler},"Call Me Doe..."),s.a.createElement("button",{className:"button make-danger",onClick:this.removeNameHandler},"Remove Name")))}}]),t}(n.Component),h=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(o.a)(this,Object(i.a)(t).call(this))).addNumberHandler=function(){e.setState({age:e.state.age+1})},e.subtractNumberHandler=function(){e.setState({age:e.state.age-1})},e.state={age:0},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,this.state.age<=-1?s.a.createElement("h1",{className:"make-text-danger"},this.state.age):0===this.state.age?s.a.createElement("h1",null,this.state.age):s.a.createElement("h1",{className:"make-text-success"},this.state.age),s.a.createElement("div",{className:"buttons make-centered"},s.a.createElement("button",{className:"button make-small make-info",onClick:this.subtractNumberHandler},"-"),s.a.createElement("button",{className:"button make-small make-info",onClick:this.addNumberHandler},"+")))}}]),t}(n.Component),b={margin:"50px auto",maxWidth:"600px"},k=function(e){function t(){return Object(m.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{style:b,className:"box make-text-centered"},s.a.createElement(d,null),s.a.createElement(h,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.a14c079a.chunk.js.map