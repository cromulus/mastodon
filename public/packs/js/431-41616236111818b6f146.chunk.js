(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{881:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return v}));var s=t(0),n=t(1),i=t(7),l=t(11),c=t.n(l),r=t(260),o=t(6),d=t(65),p=t(4);class v extends n.PureComponent{constructor(){super(...arguments),this.state={loading:!0,data:null}}componentDidMount(){const{measure:a,start_at:e,end_at:t,params:s}=this.props;Object(o.a)().post("/api/v1/admin/measures",{keys:[a],start_at:e,end_at:t,[a]:s}).then((a=>{this.setState({loading:!1,data:a.data})})).catch((a=>{console.error(a)}))}render(){const{label:a,href:e,target:t}=this.props,{loading:n,data:l}=this.state;let o;if(n)o=Object(p.jsxs)(p.Fragment,{children:[Object(s.a)("span",{className:"sparkline__value__total"},void 0,Object(s.a)(d.a,{width:43})),Object(s.a)("span",{className:"sparkline__value__change"},void 0,Object(s.a)(d.a,{width:43}))]});else{const a=l[0],e=a.previous_total&&((a,e)=>{let t;return t=0!==e?0!==a?(e-a)/a:1:0===e&&0===a?0:-1,t})(1*a.previous_total,1*a.total);o=Object(p.jsxs)(p.Fragment,{children:[Object(s.a)("span",{className:"sparkline__value__total"},void 0,a.human_value||Object(s.a)(i.c,{value:a.total})),a.previous_total&&Object(s.a)("span",{className:c()("sparkline__value__change",{positive:e>0,negative:e<0})},void 0,e>0&&"+",Object(s.a)(i.c,{value:e,style:"percent"}))]})}const v=Object(p.jsxs)(p.Fragment,{children:[Object(s.a)("div",{className:"sparkline__value"},void 0,o),Object(s.a)("div",{className:"sparkline__label"},void 0,a),Object(s.a)("div",{className:"sparkline__graph"},void 0,!n&&Object(s.a)(r.Sparklines,{width:259,height:55,data:l[0].data.map((a=>1*a.value))},void 0,Object(s.a)(r.SparklinesCurve,{})))]});return e?Object(s.a)("a",{href:e,className:"sparkline",target:t},void 0,v):Object(s.a)("div",{className:"sparkline"},void 0,v)}}}}]);
//# sourceMappingURL=431-41616236111818b6f146.chunk.js.map