(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{1269:function(e,t,o){"use strict";o.r(t);var a=o(0),s=o(46),c=o.n(s),n=o(2),i=o.n(n),l=o(7),u=o(21),d=o(43),r=o(84),b=o(16),m=o.n(b),h=o(18),j=o(10),p=o(9),_=o(1119),O=o(269),g=o(5),f=o(1115),v=o(38),w=o(19),q=o(103),M=o(35),y=o(39),z=o(53),k=o(24);const L=Object(l.d)({authorize:{id:"follow_request.authorize",defaultMessage:"Authorize"},reject:{id:"follow_request.reject",defaultMessage:"Reject"}});class R extends h.a{render(){const{intl:e,account:t,onAuthorize:o,onReject:s}=this.props,c={__html:t.get("note_emojified")};return Object(a.a)("div",{className:"account-authorize__wrapper"},void 0,Object(a.a)("div",{className:"account-authorize"},void 0,Object(a.a)(w.a,{to:`/@${t.get("acct")}`,className:"detailed-status__display-name"},void 0,Object(a.a)("div",{className:"account-authorize__avatar"},void 0,Object(a.a)(y.a,{account:t,size:48})),Object(a.a)(z.a,{account:t})),Object(a.a)("div",{className:"account__header__content translate",dangerouslySetInnerHTML:c})),Object(a.a)("div",{className:"account--panel"},void 0,Object(a.a)("div",{className:"account--panel__button"},void 0,Object(a.a)(k.a,{title:e.formatMessage(L.authorize),icon:"check",iconComponent:q.a,onClick:o})),Object(a.a)("div",{className:"account--panel__button"},void 0,Object(a.a)(k.a,{title:e.formatMessage(L.reject),icon:"times",iconComponent:M.a,onClick:s}))))}}R.propTypes={account:m.a.map.isRequired,onAuthorize:i.a.func.isRequired,onReject:i.a.func.isRequired,intl:i.a.object.isRequired};var N=Object(d.c)(R);var I=Object(j.connect)((()=>{const e=Object(v.e)();return(t,o)=>({account:e(t,o.id)})}),((e,t)=>{let{id:o}=t;return{onAuthorize(){e(Object(p.J)(o))},onReject(){e(Object(p.X)(o))}}}))(N);const x=Object(l.d)({heading:{id:"column.follow_requests",defaultMessage:"Follow requests"}});class C extends h.a{constructor(){super(...arguments),this.handleLoadMore=c()((()=>{this.props.dispatch(Object(p.L)())}),300,{leading:!0})}UNSAFE_componentWillMount(){this.props.dispatch(Object(p.P)())}render(){const{intl:e,accountIds:t,hasMore:o,multiColumn:s,locked:c,domain:n,isLoading:i}=this.props,l=Object(a.a)(u.a,{id:"empty_column.follow_requests",defaultMessage:"You don't have any follow requests yet. When you receive one, it will show up here."}),d=!c&&t.size>0&&Object(a.a)("div",{className:"follow_requests-unlocked_explanation"},void 0,Object(a.a)(u.a,{id:"follow_requests.unlocked_explanation",defaultMessage:"Even though your account is not locked, the {domain} staff thought you might want to review follow requests from these accounts manually.",values:{domain:n}}));return Object(a.a)(f.a,{bindToDocument:!s,icon:"user-plus",heading:e.formatMessage(x.heading)},void 0,Object(a.a)(_.a,{}),Object(a.a)(O.a,{scrollKey:"follow_requests",onLoadMore:this.handleLoadMore,hasMore:o,isLoading:i,showLoading:i&&0===t.size,emptyMessage:l,bindToDocument:!s,prepend:d},void 0,t.map((e=>Object(a.a)(I,{id:e},e)))),Object(a.a)(r.a,{},void 0,Object(a.a)("meta",{name:"robots",content:"noindex"})))}}C.propTypes={params:i.a.object.isRequired,dispatch:i.a.func.isRequired,hasMore:i.a.bool,isLoading:i.a.bool,accountIds:m.a.list,locked:i.a.bool,domain:i.a.string,intl:i.a.object.isRequired,multiColumn:i.a.bool};t.default=Object(j.connect)((e=>({accountIds:e.getIn(["user_lists","follow_requests","items"]),isLoading:e.getIn(["user_lists","follow_requests","isLoading"],!0),hasMore:!!e.getIn(["user_lists","follow_requests","next"]),locked:!!e.getIn(["accounts",g.o,"locked"]),domain:e.getIn(["meta","domain"])})))(Object(d.c)(C))}}]);
//# sourceMappingURL=follow_requests-fc613f0f8084ab814054.chunk.js.map