(this["webpackJsonpfestival-poster-app"]=this["webpackJsonpfestival-poster-app"]||[]).push([[0],{38:function(t,e,n){t.exports=n.p+"static/media/desert.1f4ebc63.png"},39:function(t,e,n){t.exports=n.p+"static/media/punk.ae35ea3b.png"},40:function(t,e,n){t.exports=n.p+"static/media/metal.78fbcaff.png"},41:function(t,e,n){t.exports=n.p+"static/media/galaxy.5fd0b3a6.png"},47:function(t,e,n){t.exports=n(68)},48:function(t,e,n){},49:function(t,e,n){},54:function(t,e,n){},56:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);n(48),n(49);var a=n(0),r=n.n(a),i=n(25),c=n.n(i),o=(n(54),n(7)),s=n(81),u=n(82),l=n(79),f=n(80),h=n(4),p=n.n(h),d=(n(56),n(12)),m=n(10),v=n(11),b=n(8),g=n(16),y=n(46),w=function(t){var e=t instanceof x?t.type:null;return{message:t.message,name:t.name,stack:t.stack,type:e}},x=function(t){function e(t,n){var a;return Object(b.a)(this,e),(a=Object(d.a)(this,Object(m.a)(e).call(this,t)))._type=null,n&&(a._type=n),a}return Object(v.a)(e,t),Object(g.a)(e,[{key:"toJSON",value:function(){return w(this)}},{key:"type",get:function(){return this._type},set:function(t){this._type=t}}]),e}(Object(y.a)(Error)),E=n(14),k=n(21),O=n(15),j=Object(k.b)({name:"system",initialState:{spotifyAccessToken:"",spotifyAccessTokenExpire:"",error:{isError:!1}},reducers:{accessTokenUpdated:function(t,e){return Object(O.a)(t,(function(t){t.spotifyAccessToken=e.payload.spotifyAccessToken,t.spotifyAccessTokenExpire=e.payload.spotifyAccessTokenExpire,""!==e.payload.spotifyAccessToken&&t.error.isError&&"NoSpotifyAccess"===t.error.error.type&&(t.error={isError:!1})}))},caughtGlobalError:function(t,e){return Object(O.a)(t,(function(t){t.error={isError:!0,error:w(e.payload)}}))},clearGlobalError:function(t){return Object(O.a)(t,(function(t){t.error={isError:!1}}))}}}),A=j.actions,S=A.accessTokenUpdated,C=A.caughtGlobalError,T=(A.clearGlobalError,j.reducer),R=.8*window.innerHeight,N={me:null,artists:[],topArtistsTimeRange:"medium_term",layoutType:"basic",themeType:"desert",width:.65*R,height:R},_=Object(k.b)({name:"poster",initialState:N,reducers:{changeThemeType:function(t,e){return Object(O.a)(t,(function(t){t.themeType=e.payload}))},changeLayoutType:function(t,e){return Object(O.a)(t,(function(t){t.layoutType=e.payload}))},updateArtistList:function(t,e){return Object(O.a)(t,(function(t){t.artists=e.payload}))},updateMeData:function(t,e){return Object(O.a)(t,(function(t){t.me=e.payload}))},topArtistsTimeRangeUpdated:function(t,e){return Object(O.a)(t,(function(t){t.topArtistsTimeRange=e.payload}))}}}),I=_.actions,F=I.changeThemeType,P=I.updateArtistList,M=I.topArtistsTimeRangeUpdated,D=I.changeLayoutType,L=I.updateMeData,U=_.reducer,B=n(9),H=Object(E.combineReducers)({poster:U,system:T}),W=function(t){return Object(B.c)(t)},z=function(t,e,n){var a=t.getContext("2d");if(!a)throw new Error("Could not get canvas context to create HiDPI canvas");var r=function(t){var e=window.devicePixelRatio||1,n=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return Math.ceil(e/n)}(a);return t.width=e*r,t.height=n*r,t.style.width=e+"px",t.style.height=n+"px",a.setTransform(r,0,0,r,0,0),t},G=n(38),K=n.n(G),X=n(39),J=n.n(X),Y=n(40),Z=n.n(Y),V=n(41),$=n.n(V),q=function t(){Object(b.a)(this,t),this.backgroundImage="",this.festivalNameColor="TexasTango",this.festivalNameFont="serif",this.artistFont="WesternBangBang",this.artistColor="white",this.textMargin=0},Q=function(t){function e(){var t,n;Object(b.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).backgroundImage=K.a,n.festivalNameColor="orange",n.festivalNameFont="TexasTango",n.artistFont="WesternBangBang",n.artistColor="orange",n.textMargin=25,n}return Object(v.a)(e,t),e}(q),tt=function(t){function e(){var t,n;Object(b.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).backgroundImage=J.a,n.festivalNameColor="#37C3E1",n.festivalNameFont="TexasTango",n.artistFont="WesternBangBang",n.artistColor="#37C3E1",n}return Object(v.a)(e,t),e}(q),et=function(t){function e(){var t,n;Object(b.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).backgroundImage=Z.a,n.festivalNameColor="#7C7170",n.festivalNameFont="MadridGrunge",n.textMargin=35,n.artistFont="PunkrockerStamp",n.artistColor="#7C7170",n}return Object(v.a)(e,t),e}(q),nt=function(t){function e(){var t,n;Object(b.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).backgroundImage=$.a,n.festivalNameColor="white",n.festivalNameFont="Cocogoose",n.textMargin=50,n.artistFont="Monteral",n.artistColor="white",n}return Object(v.a)(e,t),e}(q),at=function(){function t(e){Object(b.a)(this,t),this._poster=e,this.artistTopRatio=.4,this.artistFontRatio=.03,this.festivalNameFontRatio=.12}return Object(g.a)(t,[{key:"fontString",value:function(t,e){return"".concat(this.fontHeight(t),"px ").concat(e)}},{key:"fontHeight",value:function(t){return Math.floor(t*this.poster.h)}},{key:"cutTrailingChar",value:function(t){return t.slice(0,t.length-1)}},{key:"calculateTextWidth",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e.reduce((function(t,e){return t+e}),""),r=this.ctx.measureText(a),i=2*this.theme.textMargin;return Math.ceil(r.width)+i}},{key:"artistLines",value:function(){var t=[],e=this.poster;this.ctx.font=this.fontString(this.artistFontRatio,this.theme.artistFont);var n="",a=!0,r=!1,i=void 0;try{for(var c,o=this.poster.artistNames[Symbol.iterator]();!(a=(c=o.next()).done);a=!0){var s=c.value;this.calculateTextWidth(n,s)>this.posterWidth?(t.push(this.cutTrailingChar(n)),n=s+e.artistSeperator):n=n+s+e.artistSeperator}}catch(u){r=!0,i=u}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}return""!==n&&t.push(this.cutTrailingChar(n)),t}},{key:"drawArtistBlock",value:function(){var t=this,e=this.poster.canvasCtx,n=this.posterHeight*this.artistTopRatio,a=this.artistLines();e.textBaseline="top",e.textAlign="center",e.fillStyle=this.theme.artistColor;var r=this.fontHeight(this.artistFontRatio);a.forEach((function(e,a){var i=n+(a+1)*r;t.printCenter(e,i)}))}},{key:"printCenter",value:function(t,e){var n=this.ctx;n.textAlign="center",n.fillText(t,this.midX,e,this.maxPosterWidth)}},{key:"printLeft",value:function(t,e){var n=this.ctx;n.textAlign="left",n.fillText(t,this.theme.textMargin,e,this.maxPosterWidth)}},{key:"printRight",value:function(t,e){this.ctx.textAlign="right",this.ctx.fillText(t,this.posterWidth-this.theme.textMargin,e,this.maxPosterWidth)}},{key:"drawFestivalName",value:function(){var t=this.poster.canvasCtx;t.font=this.fontString(this.festivalNameFontRatio,this.theme.festivalNameFont),t.fillStyle=this.theme.festivalNameColor,t.textBaseline="top",t.textAlign="center",t.strokeStyle="black",t.lineWidth=2,this.printCenter(this.poster.festivalName,50)}},{key:"poster",set:function(t){this._poster=t},get:function(){if(!this._poster)throw new Error("Expected poster to be set before drawing");return this._poster}},{key:"ctx",get:function(){return this.poster.canvasCtx}},{key:"theme",get:function(){return this.poster.theme}},{key:"midX",get:function(){return Math.floor(this.posterWidth/2)}},{key:"midY",get:function(){return Math.floor(this.posterHeight/2)}},{key:"posterWidth",get:function(){return this.poster.w}},{key:"maxPosterWidth",get:function(){return this.posterWidth-2*this.theme.textMargin}},{key:"posterHeight",get:function(){return this.poster.h}}]),t}(),rt=function(t){function e(){return Object(b.a)(this,e),Object(d.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(v.a)(e,t),e}(at),it=function(t){function e(){var t,n;Object(b.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).artistTopRatio=.3,n.artistFontRatio=.028,n}return Object(v.a)(e,t),Object(g.a)(e,[{key:"dayFont",value:function(){this.ctx.font=this.fontString(2*this.artistFontRatio,this.theme.artistFont)}},{key:"artistFont",value:function(){this.ctx.font=this.fontString(this.artistFontRatio,this.theme.artistFont)}},{key:"drawArtistBlock",value:function(){var t=this,e=this.artistLines(),n=Math.ceil(e.length/3),a=e.slice(0,n),r=e.slice(n,2*n),i=e.slice(2*n);this.ctx.textBaseline="bottom",this.ctx.fillStyle=this.theme.artistColor;var c=this.posterHeight*this.artistTopRatio,o=this.fontHeight(this.artistFontRatio);this.dayFont(),this.printLeft("FRIDAY",c),this.artistFont(),a.forEach((function(e,n){c+=o,t.printLeft(e,c)})),c+=3*o,this.dayFont(),this.printRight("SATURDAY",c),this.artistFont(),r.forEach((function(e,n){c+=o,t.printRight(e,c)})),c+=3*o,this.ctx.textAlign="left",this.dayFont(),this.printLeft("SUNDAY",c),this.artistFont(),i.forEach((function(e,n){c+=o,t.printLeft(e,c)}))}}]),e}(at),ct=n(30),ot=n.n(ct),st=n(22),ut="https://api.spotify.com",lt="v1",ft=function(){function t(e){Object(b.a)(this,t),this.apiKey=e}return Object(g.a)(t,[{key:"getPlaylistArtists",value:function(t){var e;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.a.awrap(this.getPlaylistTracks(t));case 2:if(!((e=n.sent)instanceof x)){n.next=5;break}return n.abrupt("return",e);case 5:return n.abrupt("return",wt(e));case 6:case"end":return n.stop()}}),null,this)}},{key:"noAuthAPICall",value:function(t){var e,n;return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p.a.awrap(fetch(t));case 3:return e=a.sent,a.next=6,p.a.awrap(mt(e,t));case 6:return n=a.sent,a.abrupt("return",n);case 10:return a.prev=10,a.t0=a.catch(0),a.abrupt("return",a.t0);case 13:case"end":return a.stop()}}),null,null,[[0,10]])}}]),t}(),ht=function(t){function e(){return Object(b.a)(this,e),Object(d.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(v.a)(e,t),Object(g.a)(e,[{key:"getPlaylists",value:function(){return t=this.apiKey,p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gt(t,["me","playlists"]));case 1:case"end":return e.stop()}}));var t}},{key:"getPlaylistTracks",value:function(t){return function(t,e){var n;return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p.a.awrap(gt(t,["playlists",e,"tracks"]));case 2:if(!((n=a.sent)instanceof x)){a.next=5;break}return a.abrupt("return",n);case 5:return a.abrupt("return",n.map((function(t){return t.track})));case 6:case"end":return a.stop()}}))}(this.apiKey,t)}},{key:"me",value:function(){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",yt(this.apiKey));case 1:case"end":return t.stop()}}),null,this)}},{key:"topArtists",value:function(){var t,e,n,a,r,i,c,o,s=arguments;return p.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:{},e=t.limit,n=void 0===e?"50":e,a=t.offset,r=void 0===a?"0":a,i=t.time_range,c=void 0===i?"medium_term":i,u.next=3,p.a.awrap(gt(this.apiKey,["me","top","artists"],{limit:n,offset:r,time_range:c}));case 3:return o=u.sent,u.abrupt("return",o);case 5:case"end":return u.stop()}}),null,this)}}]),e}(ft),pt=function(t){function e(){return Object(b.a)(this,e),Object(d.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(v.a)(e,t),Object(g.a)(e,[{key:"getPlaylists",value:function(){var t;return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return t=dt("users",this.apiKey,"playlists"),e.next=3,p.a.awrap(this.noAuthAPICall(t));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),null,this)}},{key:"getPlaylistTracks",value:function(t){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=dt("playlists",this.apiKey,"tracks"),t.next=3,p.a.awrap(this.noAuthAPICall(e));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),null,this)}},{key:"me",value:function(){var t;return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return t=dt("users",this.apiKey),e.next=3,p.a.awrap(this.noAuthAPICall(t));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),null,this)}}]),e}(ft);function dt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=[lt].concat(e).join("/");return new URL(a,ut).href}function mt(t,e){var n;return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.ok){a.next=4;break}if(401!==t.status){a.next=3;break}return a.abrupt("return",new x("Fetch for URL ".concat(e," returned not ok status.  Status: ").concat(t.status),"NoSpotifyAccess"));case 3:return a.abrupt("return",new x("Fetch for URL ".concat(e," returned not ok status.  Status: ").concat(t.status),"NoSpotifyAccess"));case 4:if(200===t.status){a.next=6;break}return a.abrupt("return",new x("Fetch for URL ".concat(e," returned a status of ").concat(t.status),"NoSpotifyAccess"));case 6:return a.prev=6,a.next=9,p.a.awrap(t.json());case 9:return n=a.sent,a.abrupt("return",n);case 13:return a.prev=13,a.t0=a.catch(6),a.abrupt("return",a.t0);case 16:case"end":return a.stop()}}),null,null,[[6,13]])}function vt(t,e){var n,a;return p.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n={Authorization:"Bearer ".concat(t)},r.prev=1,r.next=4,p.a.awrap(fetch(e,{headers:n}));case 4:return a=r.sent,r.abrupt("return",mt(a,e));case 8:return r.prev=8,r.t0=r.catch(1),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),null,null,[[1,8]])}function bt(t){if(!t)return"";var e=new URLSearchParams;for(var n in t)e.append(n,t[n]);return e.toString()}function gt(t,e,n){var a,r,i;return p.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return a=bt(n),r=dt.apply(void 0,Object(st.a)(e).concat(["?".concat(a)])),c.next=4,p.a.awrap(vt(t,r));case 4:if(!((i=c.sent)instanceof x)){c.next=7;break}return c.abrupt("return",i);case 7:if(i.hasOwnProperty("items")){c.next=9;break}throw new x("Returned paging object does not contain items field.  Url: ".concat(r));case 9:return c.abrupt("return",i.items);case 10:case"end":return c.stop()}}))}function yt(t){var e,n;return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=dt("me"),a.next=3,p.a.awrap(vt(t,e));case 3:return n=a.sent,a.abrupt("return",n);case 5:case"end":return a.stop()}}))}function wt(t){var e=new Set;return t.forEach((function(t){e.add(t.artists[0].name)})),Object(st.a)(e)}function xt(){var t=function(){var t=Object(a.useState)([0,0]),e=Object(o.a)(t,2),n=e[0],r=e[1];return Object(a.useLayoutEffect)((function(){function t(){r([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),n}(),e=Object(o.a)(t,2),n=e[0],r=e[1],i=Object(a.useState)(void 0),c=Object(o.a)(i,2),s=c[0],u=c[1],l=Object(a.useRef)(null),f=l.current;return Object(a.useEffect)((function(){var t=null===f||void 0===f?void 0:f.getBoundingClientRect();u(t)}),[f,n,r]),[s,l]}var Et=function(){return Math.floor(Date.now()/1e3)},kt=function(){var t=W((function(t){return t.system.spotifyAccessToken})),e=W((function(t){return t.system.spotifyAccessTokenExpire}));if(""===t&&""===e)return{status:"NONE"};if(""===t||""===e)throw new Error("Spotify access token/expire in invalid state");return parseInt(e,10)<Et()?{status:"EXPIRED"}:{status:"VALID",accessToken:t}},Ot=n(24),jt=n(28),At=n(70),St=n(71),Ct=n(72),Tt=n(84),Rt=n(73),Nt=n(69),_t=function(t){var e=t.children,n=Object(jt.a)(t,["children"]),a=n.color?n.color:"primary",i=n.size?n.size:"sm";return r.a.createElement(Nt.a,Object.assign({color:a,size:i,onClick:function(t){var e;t.stopPropagation(),null===(e=n.onClick)||void 0===e||e.call(n,t)}},n),e)};n(65);function It(t,e,n){t.preventDefault(),n(e)}var Ft=function(t){var e=t.rowNumber,n=t.disableActions,i=t.item,c=t.isEditing,s=t.setIsEditing,u=t.renderData,l=Object(jt.a)(t,["rowNumber","disableActions","item","isEditing","setIsEditing","renderData"]),f=Object(a.useState)(i.data),h=Object(o.a)(f,2),p=h[0],d=h[1],m=l.handleRemove,v=l.handleEdit,b=l.handleSelectionChange,g=l.canEditGlobal&&i.canEdit&&v,y=!(!l.canRemove||!m),w=!(!l.canSelect||void 0===b),x=!!i.isSelected;return c?r.a.createElement(At.a,null,r.a.createElement(St.a,null,r.a.createElement(Ct.a,{value:p,style:{display:"inline"},onChange:function(t){d(t.target.value)}}),r.a.createElement(Tt.a,{addonType:"append"},r.a.createElement(_t,{onClick:function(t){if(!v)throw Error("Expected handleEdit to exist by this point");It(t,Lt(i,{data:p}),v),d(""),s(!1)}},"Save")),r.a.createElement(Tt.a,{addonType:"append"},r.a.createElement(_t,{color:"danger",onClick:function(t){d(""),s(!1)}},"X")))):function(){var t=w&&x;return r.a.createElement(At.a,{key:i.id,action:w,active:t,className:"noselect d-flex justify-content-between align-items-center py-1",onClick:function(t){var e;return null===(e=l.handleSelectionChange)||void 0===e?void 0:e.call(l,i)}},"number"===typeof e&&"".concat(e+1,". "),u(i.data),r.a.createElement(Rt.a,null,g&&v&&r.a.createElement(_t,{disabled:n,onClick:function(t){return s(!0)}},"Edit"),y&&m&&r.a.createElement(_t,{disabled:n,onClick:function(t){It(t,i,m)}},"Remove")),t?"\u2705":"\u274c")}()},Pt=n(74),Mt=-1,Dt=function(){return++Mt};function Lt(t,e){return Object(Ot.a)({id:Dt()},t,{},e)}function Ut(t,e,n){return{handleRemove:function(n){var a;t((function(t){return t.filter((function(t){return t.id!==n.id}))})),null===e||void 0===e||null===(a=e.handleRemove)||void 0===a||a.call(e,n)},handleAddRow:function(a){var r,i,c=(null===n||void 0===n?void 0:null===(r=n.addRow)||void 0===r?void 0:r.call(n,a))||a;t((function(t){return[].concat(Object(st.a)(t),[c])})),null===e||void 0===e||null===(i=e.handleAddRow)||void 0===i||i.call(e,c)},handleEdit:function(n){var a;t((function(t){var e=Object(st.a)(t),a=e.find((function(t){return t.id===n.id}));if(!a)throw new Error("Could not find edited item: ".concat(JSON.stringify(n)));return a.data=n.data,e})),null===e||void 0===e||null===(a=e.handleEdit)||void 0===a||a.call(e,n)},handleSelectionChange:function(n){t((function(t){return Object(O.a)(t,(function(t){var a,r=t.findIndex((function(t){return t.id===n.id}));t[r].isSelected=!n.isSelected,null===e||void 0===e||null===(a=e.handleSelectionChange)||void 0===a||a.call(e,t[r])}))}))},handleSelectAll:function(){t((function(t){var e=t.map((function(t){return Object(Ot.a)({},t,{isSelected:!0})})),a=null===n||void 0===n?void 0:n.selectAll;return a&&(e=a(e)),e}))},handleClear:function(){t((function(t){var e=t.map((function(t){return Object(Ot.a)({},t,{isSelected:!1})})),a=null===n||void 0===n?void 0:n.clear;return a&&(e=a(e)),e}))}}}var Bt,Ht=function(t){var e=Object(a.useState)(!1),n=Object(o.a)(e,2),i=n[0],c=n[1],s=Object(a.useState)(""),u=Object(o.a)(s,2),l=u[0],f=u[1],h=Object(a.useState)(!1),p=Object(o.a)(h,2),d=p[0],m=p[1],v=t.items,b=t.canSelect&&t.handleSelectAll,g=t.canSelect&&t.handleClear,y=function(){var e=t.handleAddRow,n=t.canAddRow;return e&&n?i?r.a.createElement("div",null,r.a.createElement(At.a,null,r.a.createElement(St.a,null,r.a.createElement(Ct.a,{value:l,onChange:function(t){return f(t.target.value)}}),r.a.createElement(Rt.a,null,r.a.createElement(_t,{onClick:function(){var t=Lt({data:l,userAdded:!0,isSelected:!1},{});c(!1),e(t),f("")}},"Save"),r.a.createElement(_t,{color:"danger",onClick:function(){c(!1),f("")}},"X"))))):r.a.createElement(At.a,null,r.a.createElement(_t,{block:!0,disabled:d,onClick:function(){return c(!0)}},"Add Row")):null},w=function(){return r.a.createElement("div",{className:"list__header",style:{display:"flex",justifyContent:"space-between"}},t.name?r.a.createElement("h3",null,t.name):null,function(){var e=null,n=null;return b&&(e=r.a.createElement(_t,{color:"success",onClick:function(e){var n;null===(n=t.handleSelectAll)||void 0===n||n.call(t)}},"Select All")),g&&(n=r.a.createElement(_t,{color:"warning",onClick:function(e){var n;null===(n=t.handleClear)||void 0===n||n.call(t)}},"Unselect All")),r.a.createElement("div",{className:"list__actions"},r.a.createElement(Rt.a,null,e,n))}())};return r.a.createElement("div",{className:"list"},function(){var e=v.map((function(e,n){var a=t.rowNumbers?n:void 0;return r.a.createElement(Ft,Object.assign({key:e.id,item:e,setIsEditing:m,isEditing:d,disableActions:i,rowNumber:a},t))}));return r.a.createElement("div",{className:"list"},w(),r.a.createElement(Pt.a,null,e,y()))}())},Wt=function(){var t=Object(B.b)();return Object(a.useCallback)((function(e,n){n&&(e.type=n),t(C(e))}),[t])},zt=function(){return Object(a.useCallback)((function(t){console.log(t)}),[])},Gt=function(){var t=kt(),e=Wt(),n="";"NONE"===t.status||"EXPIRED"===t.status?e(new x("Spotify Access token status not valid.  status: ".concat(t.status)),"NoSpotifyAccess"):n=t.accessToken;return Object(a.useMemo)((function(){return""===n?null:function(t){var e=t.authToken,n=t.userId;return e&&""!==e?new ht(e):n&&""!==n?new pt(n):null}({authToken:n})}),[n])},Kt=0,Xt="My Festival",Jt=function(t){function e(){return Object(b.a)(this,e),Object(d.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(v.a)(e,t),e}(function(){function t(e,n,a){Object(b.a)(this,t),this.ps=e,this.theme=n,this.layout=a,this.canvas=void 0,this.canvasCtx=void 0,this._w=0,this._h=0,this.img=void 0,this.festivalNameText=Xt,this.festivalNameCase="upper",this.artistCase="upper"}return Object(g.a)(t,[{key:"setPosterSize",value:function(t,e){this._w=Math.floor(t),this._h=Math.floor(e)}},{key:"load",value:function(t,e){var n,a,r;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new ot.a(this.theme.artistFont),a=new ot.a(this.theme.festivalNameFont),r=[n.load(),a.load()],e&&r.push(this.loadImage()),t.next=6,p.a.awrap(this.loadImage());case 6:return t.prev=6,t.next=9,p.a.awrap(Promise.all(r));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(6),console.error(t.t0);case 14:case"end":return t.stop()}}),null,this,[[6,11]])}},{key:"draw",value:function(e){var n,a=arguments;return p.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=!(a.length>1&&void 0!==a[1])||a[1],z(e,this.w,this.h),r.next=4,p.a.awrap(this.load(e,n));case 4:if(this.canvasCtx=t.getContext(e),this.layout.poster=this,!n){r.next=9;break}return r.next=9,p.a.awrap(this.drawBackground(e));case 9:this.layout.drawFestivalName(),this.layout.drawArtistBlock();case 11:case"end":return r.stop()}}),null,this)}},{key:"drawMultiCanvas",value:function(t,e){return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(z(t,this.w,this.h),!e){n.next=4;break}return n.next=4,p.a.awrap(this.drawBackground(e));case 4:return n.next=6,p.a.awrap(this.draw(t,!1));case 6:return n.abrupt("return");case 7:case"end":return n.stop()}}),null,this)}},{key:"loadImage",value:function(t,e){var n=this;return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return this.img=new Image(t,e),a.abrupt("return",new Promise((function(t){n.img.onload=function(){t()},n.img.src=n.theme.backgroundImage})));case 2:case"end":return a.stop()}}),null,this)}},{key:"drawBackground",value:function(e){var n,a;return p.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return z(e,this.w,this.h),r.next=3,p.a.awrap(this.loadImage());case 3:n=this.img.naturalWidth,a=this.img.naturalHeight,t.getContext(e).drawImage(this.img,0,0,n,a,0,0,this.w,this.h);case 7:case"end":return r.stop()}}),null,this)}},{key:"w",get:function(){return this._w}},{key:"h",get:function(){return this._h}},{key:"artistSeperator",get:function(){return String.fromCharCode(8226)}},{key:"festivalName",get:function(){return"upper"===this.festivalNameCase?this.festivalNameText.toUpperCase():this.festivalNameText}},{key:"display_name",set:function(t){t?this.festivalNameText="".concat(t," FEST"):this.festivalNameText=Xt}},{key:"artistNames",get:function(){var t=this;return this.ps.artists.filter((function(t){return t.isSelected})).map((function(e){var n=e.data.name;return"upper"===t.artistCase&&(n=n.toUpperCase()),n}))}}],[{key:"getContext",value:function(t){var e=t.getContext("2d");if(!e)throw new x("Expected canvas context");return e}}]),t}()),Yt=function(){var t=function(){var t=W((function(t){return t.poster.me})),e=Gt(),n=Object(B.b)(),r=zt(),i=Wt();return Object(a.useEffect)((function(){e&&function(){var t;p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}throw new Error("Expected api");case 2:return r("Using spotify api to fetch me data"),a.prev=3,a.next=6,p.a.awrap(e.me());case 6:t=a.sent,a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(3),i(a.t0),a.abrupt("return");case 13:if(t){a.next=15;break}throw new Error("Expected me data");case 15:if(!(t instanceof Error)){a.next=17;break}throw new Error("Expected error to be caught");case 17:n(L(t));case 18:case"end":return a.stop()}}),null,null,[[3,9]])}()}),[e,n,i,r]),t}(),e=function(){var t=W((function(t){return t.poster.themeType}));return Object(a.useMemo)((function(){switch(t){case"punk":return new tt;case"rock":return new et;case"desert":return new Q;case"galaxy":return new nt;default:throw new x("Invalid theme ".concat(t))}}),[t])}(),n=function(){var t=W((function(t){return t.poster.layoutType}));return Object(a.useMemo)((function(){switch(t){case"basic":return new rt;case"weekend":return new it;default:throw new x("Invalid theme ".concat(t))}}),[t])}(),r=W((function(t){return t.poster}));return Object(a.useMemo)((function(){var a=new Jt(r,e,n);return a.display_name=null===t||void 0===t?void 0:t.display_name,a}),[n,t,r,e])},Zt=n(75),Vt=[4,5],$t=function(t){return t*(Vt[1]/Vt[0])},qt=function(t){var e=t.parentDomRect,n=Yt(),i=Object(a.useState)(""),c=Object(o.a)(i,2),s=c[0],u=c[1],l=Object(a.useState)(0),f=Object(o.a)(l,2),h=f[0],d=f[1],m=Object(a.useState)(0),v=Object(o.a)(m,2),b=v[0],g=v[1],y=Object(a.useState)(!1),w=Object(o.a)(y,2),x=w[0],E=w[1],k=Object(a.useRef)(null),O=Object(a.useRef)(null),j=function(t){if(!t)return{w:0,h:0};for(var e,n=t.width,a=$t(n);a>=(e=t.top,document.documentElement.clientHeight-e);)a=$t(n-=5);return{w:n=Math.floor(n),h:a=Math.floor(a)}}(e),A=j.w,S=j.h,C=n.theme.backgroundImage;n.setPosterSize(A,S);var T=Object(a.useCallback)((function(){return C!==s||h!==A||b!==S}),[C,S,A,s,b,h]),R=Object(a.useCallback)((function(){return 0!==A&&0!==S}),[S,A]);Object(a.useEffect)((function(){R()&&function(){var t,e,a;p.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=k.current){r.next=3;break}throw new Error("Unable to retreive poster canvas element");case 3:if(e=O.current){r.next=6;break}throw new Error("Unable to retreive poster background canvas element");case 6:return a=T(),console.log(a),a&&E(!0),r.next=11,p.a.awrap(n.drawMultiCanvas(t,a?e:void 0));case 11:E(!1),u(n.theme.backgroundImage),d(n.w),g(n.h);case 15:case"end":return r.stop()}}))}()}),[R,T,n]);return r.a.createElement(r.a.Fragment,null,x&&r.a.createElement(Zt.a,{style:{width:"3rem",height:"3rem",zIndex:99}}),r.a.createElement("canvas",{id:"poster-bg",ref:O,style:{position:"absolute"}},"Poster BackGround"),r.a.createElement("canvas",{ref:k,id:"poster-canvas",style:{position:"absolute"}},"Festival Poster Viewer"))},Qt=n(78),te=n(76),ee=n(77),ne=function(t,e,n){var r=Object(a.useState)(e),i=Object(o.a)(r,2),c=i[0],s=i[1];return[c,{options:t,selected:c,handleChange:function(t){s(t),n&&n(t)}}]},ae=function(t){var e=t.options,n=t.handleChange,a=t.selected,i=t.labelText,c=e.map((function(t){return r.a.createElement("option",{key:t.value,value:t.value},t.text)}));return r.a.createElement(te.a,null,i&&r.a.createElement(ee.a,null,i),r.a.createElement(Ct.a,{type:"select",value:a,onChange:function(t){n&&n(t.target.value)}},c))},re=[{text:"Desert",value:"desert"},{text:"Punk",value:"punk"},{text:"Rock",value:"rock"},{text:"Galaxy",value:"galaxy"}],ie=[{text:"Basic",value:"basic"},{text:"Weekend",value:"weekend"}],ce=function(){var t=Object(B.b)(),e=W((function(t){return t.poster.themeType})),n=W((function(t){return t.poster.layoutType})),i=ne(re,e,(function(e){t(F(e))})),c=Object(o.a)(i,2)[1],s=ne(ie,n,(function(e){t(D(e))})),u=Object(o.a)(s,2)[1],h=function(){var t=Yt();return Object(a.useCallback)((function(){var e,n,a;return p.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=document.createElement("canvas"),t.setPosterSize(1600,2e3),r.next=4,p.a.awrap(t.draw(e));case 4:n=e.toDataURL("png",1),null===(a=window.open("_blank"))||void 0===a||a.document.write("<img src=".concat(n,"></img>"));case 7:case"end":return r.stop()}}))}),[t])}();return r.a.createElement("div",{className:"options mb-2"},r.a.createElement(Qt.a,null,r.a.createElement(l.a,{form:!0},r.a.createElement(f.a,{md:6,xs:6},r.a.createElement(ae,Object.assign({labelText:"Theme"},c))),r.a.createElement(f.a,{md:6,xs:6},r.a.createElement(ae,Object.assign({labelText:"Text Layout"},u))),r.a.createElement(f.a,{md:6,xs:6}))),r.a.createElement(_t,{color:"warning",onClick:function(){return h()}},"Create Image"))},oe=(n(66),[{text:"Last 6 Months",value:"medium_term"},{text:"All Time",value:"long_term"},{text:"1 Month",value:"short_term"}]),se=function(){var t=function(){var t=W((function(t){return t.poster.topArtistsTimeRange})),e=W((function(t){return t.poster.artists})),n=Gt(),r=Object(B.b)(),i=zt(),c=Wt();return Object(a.useEffect)((function(){n&&function(){var e,a;p.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(null===n||void 0===n?void 0:n.topArtists){o.next=2;break}throw new Error("Expected topArtists method to exist on spotify api object");case 2:if(!(++Kt>5)){o.next=5;break}throw new Error("Max Count Reached");case 5:return i("Using api to retreive top Artists for range "+t),o.prev=6,o.next=9,p.a.awrap(n.topArtists({time_range:t}));case 9:e=o.sent,o.next=15;break;case 12:o.prev=12,o.t0=o.catch(6),c(o.t0,"NoSpotifyAccess");case 15:if(o.prev=15,e){o.next=18;break}throw new x("Expected top artists data");case 18:if(!(e instanceof Error)){o.next=21;break}return c(e),o.abrupt("return");case 21:return a=e.map((function(t){return Lt({isSelected:!0,data:t,canEdit:!1,userAdded:!1})})),r(P(a)),o.finish(15);case 24:case"end":return o.stop()}}),null,null,[[6,12,15,24]])}()}),[r,i,c,n,t]),{topArtists:e,setTopArtistsTimeRange:function(t){r(M(t))}}}().setTopArtistsTimeRange,e=W((function(t){return t.poster.topArtistsTimeRange})),n=ne(oe,e,(function(e){return t(e)})),i=Object(o.a)(n,2)[1],c=function(t,e,n){var r=Object(B.c)(t),i=Object(B.b)(),c=Object(a.useCallback)((function(t){i(e(t))}),[i,e]),o=Object(Ot.a)({},Ut((function(t){var n=t(r);i(e(n))})),{renderData:n});return{items:r,setItems:c,listProps:o}}((function(t){return t.poster.artists}),P,(function(t){var e=t.images[t.images.length-1].url;return r.a.createElement("span",null,r.a.createElement("img",{className:"",alt:t.name+" photo",src:e,style:{height:"50px",width:"50px",marginRight:"5px"}}),t.name)})),s=c.items,u=c.listProps;return r.a.createElement("div",null,r.a.createElement("h3",{style:{display:"inline-block"}},"Top Artists"),r.a.createElement(ae,i),r.a.createElement(Ht,Object.assign({items:s},u,{canSelect:!0})))},ue=window.location.href,le="https://accounts.spotify.com/authorize",fe="access_token",he="token_type",pe="expires_in",de={client_id:"f775b626d4784dfba4491742d5453d55",response_type:"token",redirect_uri:ue,scope:"user-top-read"};function me(){for(var t=[],e=0,n=Object.entries(de);e<n.length;e++){var a=n[e],r=Object(o.a)(a,2),i=r[0],c=r[1];t.push("".concat(i,"=").concat(c))}var s=t.join("&");return"".concat(le,"?").concat(s)}function ve(){if(Bt)return{status:"AUTHORIZED",data:Bt};var t={},e=window.location.href.split("#");if(2!==e.length)return{status:"NOT_AUTHORIZED"};var n=e[1].split("&"),a=!0,r=!1,i=void 0;try{for(var c,s=n[Symbol.iterator]();!(a=(c=s.next()).done);a=!0){var u=c.value.split("="),l=Object(o.a)(u,2),f=l[0],h=l[1];t[f]=h}}catch(d){r=!0,i=d}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}if(t.hasOwnProperty("error"))return{status:"ACCESS_DENIED"};var p="";return t.hasOwnProperty(fe)||(p="Hash fragment does not contain field: ".concat(fe)),t.hasOwnProperty(pe)||(p="Hash fragment does not contain field: ".concat(pe)),t.hasOwnProperty(he)||(p="Hash fragment does not contain field: ".concat(he)),""!==p?{status:"ERROR",error:p}:{status:"AUTHORIZED",data:t}}var be=function(){return r.a.createElement("div",{className:"h-100 d-flex justify-content-center align-items-center"},r.a.createElement("a",{className:"btn btn-success",role:"button",href:me()},"Authorize Spotify"))},ge=function(t){var e=t.active,n=t.toggle,a=e?300:0,i="VALID"!==kt().status;return r.a.createElement("div",{className:"sidenav ",style:{width:a}},r.a.createElement("a",{href:"#",className:"closebtn",onClick:n},"\xd7"),i&&r.a.createElement(be,null),!i&&r.a.createElement(se,null))},ye=function(){var t=Object(a.useState)(!1),e=Object(o.a)(t,2),n=e[0],i=e[1],c=function(){return i(!n)},h=xt(),p=Object(o.a)(h,2),d=p[0],m=p[1];return r.a.createElement("div",{className:"home h-100"},r.a.createElement(s.a,{className:"navbar navbar-expand-sm navbar-light bg-light py-0",style:{marginBottom:"10px"}},r.a.createElement(_t,{className:"mr-2",onClick:function(){return c()}},"Artists"),r.a.createElement("div",{className:"navbar-brand"},"Poster App"),null),r.a.createElement(ge,{active:n,toggle:c}),r.a.createElement(ce,null),r.a.createElement("div",{ref:m,className:"h-100"},r.a.createElement(u.a,{className:"h-100"},r.a.createElement(l.a,{className:"h-100"},r.a.createElement(f.a,{className:"d-flex justify-content-center h-100"},r.a.createElement(qt,{parentDomRect:d}))))))},we=n(83),xe=function(){return r.a.createElement(we.b,{to:"/"})},Ee=function(){var t=Object(B.b)(),e=ve();if("AUTHORIZED"!==e.status)return console.log("Non Authorized status: ".concat(e.status)),console.log(e.error),xe();if(!e.data)throw new Error("Received authorized status without data");var n=e.data,a=n.access_token,r=n.expires_in;return t(S({spotifyAccessToken:a,spotifyAccessTokenExpire:r})),xe()},ke=function(){var t=Object(B.b)(),e=ve();if("AUTHORIZED"!==e.status);else{if(!e.data)throw new Error("Received authorized status without data");var n=e.data,a=n.access_token,i=n.expires_in,c=parseInt(i,10);if(isNaN(c))throw new Error("Spotify did not return a valid number ".concat(i));var o=Et()+c;window.location.hash="",t(S({spotifyAccessToken:a,spotifyAccessTokenExpire:o.toString()}))}return r.a.createElement("div",{className:"App"},r.a.createElement(we.d,null,r.a.createElement(we.c,{exact:!0,path:"/authenticate"},r.a.createElement(Ee,null)),r.a.createElement(we.c,{exact:!0,path:"/"},r.a.createElement(ye,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe="version",je=window.localStorage.getItem(Oe);je?parseInt(je,10)<3&&(window.localStorage.clear(),window.localStorage.setItem(Oe,3..toString())):(window.localStorage.clear(),window.localStorage.setItem(Oe,3..toString()));var Ae=window.localStorage.getItem("__REDUX_LOCAL_STORAGE_KEY"),Se=Ae?JSON.parse(Ae):void 0,Ce=[function(t){return function(e){return function(n){var a=e(n),r=t.getState(),i=JSON.stringify(r);return window.localStorage.setItem("__REDUX_LOCAL_STORAGE_KEY",i),a}}}],Te=Object(k.a)({reducer:H,preloadedState:Se,middleware:Ce}),Re=function(t){var e=t.children,n=W((function(t){return t.system.error})),i=Object(a.useState)(!1),c=Object(o.a)(i,2),s=c[0],u=c[1];if(!n.isError||!n.error)return s&&u(!s),r.a.createElement(r.a.Fragment,null,e);var l=n.error;if(console.log("isError: ".concat(n.isError,", error: ").concat(!!l,", errorData.error: ").concat(!!n.error)),l)switch(l.type){case"NoSpotifyAccess":s||u(!0),null;break;default:r.a.createElement("h3",null,"Error"),console.error(l)}return r.a.createElement(r.a.Fragment,null,e)};c.a.render(r.a.createElement(B.a,{store:Te},r.a.createElement(Re,null,r.a.createElement(we.a,null,r.a.createElement(ke,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.29dfc877.chunk.js.map