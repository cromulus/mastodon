(window.webpackJsonp=window.webpackJsonp||[]).push([[452],{1267:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n(2),s=n.n(o),c=n(1),a=n(7),d=n(21),l=n(43),m=n(84),r=n(10),u=n(272),h=n(1116),p=n(5),b=n(150),y=n(274),g=n(22),M=n(164),j=n(268),O=n(1118),I=n(51),f=n(1117);class v extends c.PureComponent{render(){const{settings:e,onChange:t}=this.props;return Object(i.a)("div",{},void 0,Object(i.a)("div",{className:"column-settings__row"},void 0,Object(i.a)(f.a,{settings:e,settingPath:["other","onlyMedia"],onChange:t,label:Object(i.a)(d.a,{id:"community.column_settings.media_only",defaultMessage:"Media only"})})))}}var C=Object(l.c)(v);var x=Object(r.connect)(((e,t)=>{let{columnId:n}=t;const i=n,o=e.getIn(["settings","columns"]),s=o.findIndex((e=>e.get("uuid")===i));return{settings:i&&s>=0?o.get(s).get("params"):e.getIn(["settings","community"])}}),((e,t)=>{let{columnId:n}=t;return{onChange(t,i){e(n?Object(b.f)(n,t,i):Object(I.c)(["community",...t],i))}}}))(C),_=n(4);const w=Object(a.d)({title:{id:"column.community",defaultMessage:"Local timeline"}});class P extends c.PureComponent{constructor(){super(...arguments),this.handlePin=()=>{const{columnId:e,dispatch:t,onlyMedia:n}=this.props;t(e?Object(b.h)(e):Object(b.e)("COMMUNITY",{other:{onlyMedia:n}}))},this.handleMove=e=>{const{columnId:t,dispatch:n}=this.props;n(Object(b.g)(t,e))},this.handleHeaderClick=()=>{this.column.scrollTop()},this.setRef=e=>{this.column=e},this.handleLoadMore=e=>{const{dispatch:t,onlyMedia:n}=this.props;t(Object(g.s)({maxId:e,onlyMedia:n}))}}componentDidMount(){const{dispatch:e,onlyMedia:t}=this.props,{signedIn:n}=this.context.identity;e(Object(g.s)({onlyMedia:t})),n&&(this.disconnect=e(Object(y.a)({onlyMedia:t})))}componentDidUpdate(e){const{signedIn:t}=this.context.identity;if(e.onlyMedia!==this.props.onlyMedia){const{dispatch:e,onlyMedia:n}=this.props;this.disconnect&&this.disconnect(),e(Object(g.s)({onlyMedia:n})),t&&(this.disconnect=e(Object(y.a)({onlyMedia:n})))}}componentWillUnmount(){this.disconnect&&(this.disconnect(),this.disconnect=null)}render(){const{intl:e,hasUnread:t,columnId:n,multiColumn:o,onlyMedia:s}=this.props,c=!!n;return Object(_.jsxs)(M.a,{bindToDocument:!o,ref:this.setRef,label:e.formatMessage(w.title),children:[Object(i.a)(j.a,{icon:"users",iconComponent:u.a,active:t,title:e.formatMessage(w.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:c,multiColumn:o},void 0,Object(i.a)(x,{columnId:n})),Object(i.a)(O.a,{prepend:Object(i.a)(h.a,{id:"community_timeline"},void 0,Object(i.a)(d.a,{id:"dismissable_banner.community_timeline",defaultMessage:"These are the most recent public posts from people whose accounts are hosted by {domain}.",values:{domain:p.i}})),trackScroll:!c,scrollKey:`community_timeline-${n}`,timelineId:"community"+(s?":media":""),onLoadMore:this.handleLoadMore,emptyMessage:Object(i.a)(d.a,{id:"empty_column.community",defaultMessage:"The local timeline is empty. Write something publicly to get the ball rolling!"}),bindToDocument:!o}),Object(i.a)(m.a,{},void 0,Object(i.a)("title",{},void 0,e.formatMessage(w.title)),Object(i.a)("meta",{name:"robots",content:"noindex"}))]})}}P.contextTypes={identity:s.a.object},P.defaultProps={onlyMedia:!1};t.default=Object(r.connect)(((e,t)=>{let{columnId:n}=t;const i=n,o=e.getIn(["settings","columns"]),s=o.findIndex((e=>e.get("uuid")===i)),c=n&&s>=0?o.get(s).getIn(["params","other","onlyMedia"]):e.getIn(["settings","community","other","onlyMedia"]),a=e.getIn(["timelines","community"+(c?":media":"")]);return{hasUnread:!!a&&a.get("unread")>0,onlyMedia:c}}))(Object(l.c)(P))}}]);
//# sourceMappingURL=community_timeline-67125589a7969125013f.chunk.js.map