(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{1139:function(e,t,o){"use strict";o.r(t);var a=o(0),s=o(46),c=o.n(s),n=o(2),d=o.n(n),i=o(21),r=o(16),u=o.n(r),l=o(18),p=o(10),b=o(1122),m=o(109),h=o(170),g=o(38),O=o(9),j=o(273),I=o(165),f=o(269),w=o(270),y=o(1123),M=o(1121),_=o(1115);const L=e=>{let{url:t}=e;return Object(a.a)(b.a,{url:t,resource:Object(a.a)(i.a,{id:"timeline_hint.resources.followers",defaultMessage:"Followers"})})};class k extends l.a{constructor(){super(...arguments),this.handleLoadMore=c()((()=>{this.props.dispatch(Object(O.M)(this.props.accountId))}),300,{leading:!0})}_load(){const{accountId:e,isAccount:t,dispatch:o}=this.props;t||o(Object(O.O)(e)),o(Object(O.Q)(e))}componentDidMount(){const{params:{acct:e},accountId:t,dispatch:o}=this.props;t?this._load():o(Object(O.U)(e))}componentDidUpdate(e){const{params:{acct:t},accountId:o,dispatch:a}=this.props;e.accountId!==o&&o?this._load():e.params.acct!==t&&a(Object(O.U)(t))}render(){const{accountId:e,accountIds:t,hasMore:o,blockedBy:s,isAccount:c,multiColumn:n,isLoading:d,suspended:r,hidden:u,remote:l,remoteUrl:p}=this.props;if(!c)return Object(a.a)(m.a,{multiColumn:n,errorType:"routing"});if(!t)return Object(a.a)(_.a,{},void 0,Object(a.a)(I.a,{}));let b;const h=s||r||u;b=r?Object(a.a)(i.a,{id:"empty_column.account_suspended",defaultMessage:"Account suspended"}):u?Object(a.a)(y.a,{accountId:e}):s?Object(a.a)(i.a,{id:"empty_column.account_unavailable",defaultMessage:"Profile unavailable"}):l&&t.isEmpty()?Object(a.a)(L,{url:p}):Object(a.a)(i.a,{id:"account.followers.empty",defaultMessage:"No one follows this user yet."});const g=l?Object(a.a)(L,{url:p}):null;return Object(a.a)(_.a,{},void 0,Object(a.a)(j.a,{multiColumn:n}),Object(a.a)(f.a,{scrollKey:"followers",hasMore:!h&&o,isLoading:d,onLoadMore:this.handleLoadMore,prepend:Object(a.a)(M.a,{accountId:this.props.accountId,hideTabs:!0}),alwaysPrepend:!0,append:g,emptyMessage:b,bindToDocument:!n},void 0,h?[]:t.map((e=>Object(a.a)(w.a,{id:e,withNote:!1},e)))))}}k.propTypes={params:d.a.shape({acct:d.a.string,id:d.a.string}).isRequired,accountId:d.a.string,dispatch:d.a.func.isRequired,accountIds:u.a.list,hasMore:d.a.bool,isLoading:d.a.bool,blockedBy:d.a.bool,isAccount:d.a.bool,suspended:d.a.bool,hidden:d.a.bool,remote:d.a.bool,remoteUrl:d.a.string,multiColumn:d.a.bool},t.default=Object(p.connect)(((e,t)=>{let{params:{acct:o,id:a}}=t;const s=a||e.getIn(["accounts_map",Object(h.b)(o)]);return s?{accountId:s,remote:!(e.getIn(["accounts",s,"acct"])===e.getIn(["accounts",s,"username"])),remoteUrl:e.getIn(["accounts",s,"url"]),isAccount:!!e.getIn(["accounts",s]),accountIds:e.getIn(["user_lists","followers",s,"items"]),hasMore:!!e.getIn(["user_lists","followers",s,"next"]),isLoading:e.getIn(["user_lists","followers",s,"isLoading"],!0),suspended:e.getIn(["accounts",s,"suspended"],!1),hidden:Object(g.b)(e,s),blockedBy:e.getIn(["relationships",s,"blocked_by"],!1)}:{isLoading:!0}}))(k)}}]);
//# sourceMappingURL=followers-411595cd75cf19e66333.chunk.js.map