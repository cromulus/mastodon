(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{1148:function(e,t,a){"use strict";a.r(t);var o=a(0),i=a(1),n=a(7),s=a(21),u=a(43),c=a(10),l=a(278),d=a.n(l),m=a(9),r=a(20),b=a(58),h=a(26);const f=Object(n.d)({minutes:{id:"intervals.full.minutes",defaultMessage:"{number, plural, one {# minute} other {# minutes}}"},hours:{id:"intervals.full.hours",defaultMessage:"{number, plural, one {# hour} other {# hours}}"},days:{id:"intervals.full.days",defaultMessage:"{number, plural, one {# day} other {# days}}"},indefinite:{id:"mute_modal.indefinite",defaultMessage:"Indefinite"}});class g extends i.PureComponent{constructor(){super(...arguments),this.handleClick=()=>{this.props.onClose(),this.props.onConfirm(this.props.account,this.props.notifications,this.props.muteDuration)},this.handleCancel=()=>{this.props.onClose()},this.toggleNotifications=()=>{this.props.onToggleNotifications()},this.changeMuteDuration=e=>{this.props.onChangeMuteDuration(e)}}render(){const{account:e,notifications:t,muteDuration:a,intl:i}=this.props;return Object(o.a)("div",{className:"modal-root__modal mute-modal"},void 0,Object(o.a)("div",{className:"mute-modal__container"},void 0,Object(o.a)("p",{},void 0,Object(o.a)(s.a,{id:"confirmations.mute.message",defaultMessage:"Are you sure you want to mute {name}?",values:{name:Object(o.a)("strong",{},void 0,"@",e.get("acct"))}})),Object(o.a)("p",{className:"mute-modal__explanation"},void 0,Object(o.a)(s.a,{id:"confirmations.mute.explanation",defaultMessage:"This will hide posts from them and posts mentioning them, but it will still allow them to see your posts and follow you."})),Object(o.a)("div",{className:"setting-toggle"},void 0,Object(o.a)(d.a,{id:"mute-modal__hide-notifications-checkbox",checked:t,onChange:this.toggleNotifications}),Object(o.a)("label",{className:"setting-toggle__label",htmlFor:"mute-modal__hide-notifications-checkbox"},void 0,Object(o.a)(s.a,{id:"mute_modal.hide_notifications",defaultMessage:"Hide notifications from this user?"}))),Object(o.a)("div",{},void 0,Object(o.a)("span",{},void 0,Object(o.a)(s.a,{id:"mute_modal.duration",defaultMessage:"Duration"}),": "),Object(o.a)("select",{value:a,onChange:this.changeMuteDuration},void 0,Object(o.a)("option",{value:0},void 0,i.formatMessage(f.indefinite)),Object(o.a)("option",{value:300},void 0,i.formatMessage(f.minutes,{number:5})),Object(o.a)("option",{value:1800},void 0,i.formatMessage(f.minutes,{number:30})),Object(o.a)("option",{value:3600},void 0,i.formatMessage(f.hours,{number:1})),Object(o.a)("option",{value:21600},void 0,i.formatMessage(f.hours,{number:6})),Object(o.a)("option",{value:86400},void 0,i.formatMessage(f.days,{number:1})),Object(o.a)("option",{value:259200},void 0,i.formatMessage(f.days,{number:3})),Object(o.a)("option",{value:604800},void 0,i.formatMessage(f.days,{number:7}))))),Object(o.a)("div",{className:"mute-modal__action-bar"},void 0,Object(o.a)(h.a,{onClick:this.handleCancel,className:"mute-modal__cancel-button"},void 0,Object(o.a)(s.a,{id:"confirmation_modal.cancel",defaultMessage:"Cancel"})),Object(o.a)(h.a,{onClick:this.handleClick,autoFocus:!0},void 0,Object(o.a)(s.a,{id:"confirmations.mute.confirm",defaultMessage:"Mute"}))))}}t.default=Object(c.connect)((e=>({account:e.getIn(["mutes","new","account"]),notifications:e.getIn(["mutes","new","notifications"]),muteDuration:e.getIn(["mutes","new","duration"])})),(e=>({onConfirm(t,a,o){e(Object(m.V)(t.get("id"),a,o))},onClose(){e(Object(r.a)({modalType:void 0,ignoreFocus:!1}))},onToggleNotifications(){e(Object(b.n)())},onChangeMuteDuration(t){e(Object(b.j)(t.target.value))}})))(Object(u.c)(g))}}]);
//# sourceMappingURL=mute_modal-f80692b3c9178a97357f.chunk.js.map