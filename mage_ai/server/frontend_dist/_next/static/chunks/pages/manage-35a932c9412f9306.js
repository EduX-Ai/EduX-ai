(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8867],{59739:function(e,n,t){"use strict";var r=t(56669);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,o,c){if(c!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},47329:function(e,n,t){e.exports=t(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},94629:function(e,n,t){"use strict";t.d(n,{Z:function(){return R}});var r=t(82394),i=t(21831),o=t(82684),c=t(50724),u=t(82555),s=t(97618),a=t(70613),l=t(68487),d=t(68899),f=t(28598);function p(e,n){var t=e.children,r=e.noPadding;return(0,f.jsx)(d.HS,{noPadding:r,ref:n,children:t})}var h=o.forwardRef(p),m=t(62547),x=t(82571),b=t(35686),O=t(98464),v=t(46684),Z=t(70515),j=t(53808),_=t(19183);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n){var t,r=e.addProjectBreadcrumbToCustomBreadcrumbs,p=e.after,g=e.afterHeader,y=e.afterHidden,R=e.afterWidth,C=e.afterWidthOverride,E=e.appendBreadcrumbs,P=e.before,T=e.beforeWidth,S=e.breadcrumbs,w=e.children,k=e.errors,D=e.headerMenuItems,N=e.headerOffset,I=e.hideAfterCompletely,M=e.mainContainerHeader,L=e.navigationItems,W=e.setAfterHidden,H=e.setErrors,U=e.subheaderChildren,F=e.subheaderNoPadding,B=e.title,K=e.uuid,X=(0,_.i)().width,Y="dashboard_after_width_".concat(K),G="dashboard_before_width_".concat(K),z=(0,o.useRef)(null),q=(0,o.useState)(C?R:(0,j.U2)(Y,R)),Q=q[0],V=q[1],$=(0,o.useState)(!1),J=$[0],ee=$[1],ne=(0,o.useState)(P?Math.max((0,j.U2)(G,T),13*Z.iI):null),te=ne[0],re=ne[1],ie=(0,o.useState)(!1),oe=ie[0],ce=ie[1],ue=(0,o.useState)(null)[1],se=b.ZP.projects.list({},{revalidateOnFocus:!1}).data,ae=null===se||void 0===se?void 0:se.projects,le={label:function(){var e;return null===ae||void 0===ae||null===(e=ae[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},de=[];S&&(r&&de.push(le),de.push.apply(de,(0,i.Z)(S))),(null===S||void 0===S||!S.length||E)&&(null===ae||void 0===ae?void 0:ae.length)>=1&&(null!==S&&void 0!==S&&S.length||de.unshift({bold:!E,label:function(){return B}}),de.unshift(le)),(0,o.useEffect)((function(){null===z||void 0===z||!z.current||J||oe||null===ue||void 0===ue||ue(z.current.getBoundingClientRect().width)}),[J,Q,oe,te,z,ue,X]),(0,o.useEffect)((function(){J||(0,j.t8)(Y,Q)}),[y,J,Q,Y]),(0,o.useEffect)((function(){oe||(0,j.t8)(G,te)}),[oe,te,G]);var fe=(0,O.Z)(R);return(0,o.useEffect)((function(){C&&fe!==R&&V(R)}),[C,R,fe]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:B}),(0,f.jsx)(l.Z,{breadcrumbs:de,menuItems:D,project:null===ae||void 0===ae?void 0:ae[0],version:null===ae||void 0===ae||null===(t=ae[0])||void 0===t?void 0:t.version}),(0,f.jsxs)(d.Nk,{ref:n,children:[0!==(null===L||void 0===L?void 0:L.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(x.Z,{navigationItems:L,showMore:!0})}),(0,f.jsx)(s.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(m.Z,{after:p,afterHeader:g,afterHeightOffset:v.Mz,afterHidden:y,afterMousedownActive:J,afterWidth:Q,before:P,beforeHeightOffset:v.Mz,beforeMousedownActive:oe,beforeWidth:d.k1+(P?te:0),headerOffset:N,hideAfterCompletely:!W||I,leftOffset:P?d.k1:null,mainContainerHeader:M,mainContainerRef:z,setAfterHidden:W,setAfterMousedownActive:ee,setAfterWidth:V,setBeforeMousedownActive:ce,setBeforeWidth:re,children:[U&&(0,f.jsx)(h,{noPadding:F,children:U}),w]})})]}),k&&(0,f.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===H||void 0===H?void 0:H(null)},children:(0,f.jsx)(u.Z,A(A({},k),{},{onClose:function(){return null===H||void 0===H?void 0:H(null)}}))})]})}var R=o.forwardRef(y)},29480:function(e,n,t){"use strict";t.d(n,{$W:function(){return l},cl:function(){return d},cv:function(){return f},dE:function(){return s},zG:function(){return a}});var r=t(38626),i=t(44897),o=t(42631),c=t(70515),u=t(47041),s=r.default.div.withConfig({displayName:"indexstyle__SectionStyle",componentId:"sc-7a1uhf-0"})(["border-radius:","px;padding:","px;",""],o.n_,c.cd*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).popup,";\n  ")})),a=r.default.div.withConfig({displayName:"indexstyle__DocsStyle",componentId:"sc-7a1uhf-1"})(["> div{overflow:initial;}> div img{max-width:80%;background:white;padding:1rem;max-height:20vh;}"]),l=r.default.div.withConfig({displayName:"indexstyle__CodeEditorStyle",componentId:"sc-7a1uhf-2"})(["padding-top:","px;",""],c.cd*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).codeTextarea,";\n  ")})),d=r.default.div.withConfig({displayName:"indexstyle__TableContainerStyle",componentId:"sc-7a1uhf-3"})(["overflow:auto;max-height:90vh;width:100%;"," "," "," "," ",""],u.w5,(function(e){return e.hideHorizontalScrollbar&&"\n    overflow-x: hidden;\n  "}),(function(e){return e.width&&"\n    width: ".concat(e.width,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,";\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")})),f=r.default.div.withConfig({displayName:"indexstyle__HeaderRowStyle",componentId:"sc-7a1uhf-4"})(["padding:","px;"," "," ",""],2*c.iI,(function(e){return"\n    background-color: ".concat((e.theme||i.Z).interactive.defaultBackground,";\n    border-bottom: ").concat(o.YF,"px ").concat(o.M8," ").concat((e.theme||i.Z).borders.medium,";\n  ")}),(function(e){return e.padding&&"\n    padding: ".concat(e.padding,"px;\n  ")}),(function(e){return e.rounded&&"\n    border-top-left-radius: ".concat(o.n_,"px;\n    border-top-right-radius: ").concat(o.n_,"px;\n  ")}))},4611:function(e,n,t){"use strict";t.d(n,{f:function(){return u}});var r=t(38626),i=t(44897),o=t(70515),c=t(42631),u=r.default.div.withConfig({displayName:"Tablestyle__PopupContainerStyle",componentId:"sc-8ammqd-0"})(["position:absolute;max-height:","px;z-index:10;border-radius:","px;padding:","px;"," "," "," ",""],58*o.iI,c.TR,2*o.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||i.Z.shadow).popup,";\n    background-color: ").concat((e.theme.interactive||i.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.leftOffset&&"\n    left: ".concat(e.leftOffset,"px;\n  ")}),(function(e){return e.topOffset&&"\n    top: ".concat(e.topOffset,"px;\n  ")}),(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}))},75083:function(e,n,t){"use strict";t.d(n,{HF:function(){return c},L6:function(){return r}});var r,i=t(82359),o=t(72473);function c(e,n,t){var c=e.owner,u=(e.roles,[{Icon:o.Vz,id:r.WORKSPACES,isSelected:function(){return r.WORKSPACES===t},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}]);return c&&u.push({Icon:o.NO,id:r.USERS,isSelected:function(){return r.USERS===t},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),n==i.k.MAIN&&u.push({Icon:o.Zr,id:r.SETTINGS,isSelected:function(){return r.SETTINGS===t},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}}),u}!function(e){e.WORKSPACES="workspaces",e.USERS="users",e.SETTINGS="settings"}(r||(r={}))},59533:function(e,n,t){"use strict";var r=t(82684),i=t(94629),o=t(35686),c=t(70515),u=t(75083),s=t(50178),a=t(28598);n.Z=function(e){var n=e.before,t=e.breadcrumbs,l=void 0===t?[]:t,d=e.children,f=e.errors,p=e.pageName,h=e.setErrors,m=e.subheaderChildren,x=o.ZP.statuses.list().data,b=(0,r.useMemo)((function(){var e,n;return null===x||void 0===x||null===(e=x.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.project_type}),[x]),O=(0,s.PR)()||{};return(0,a.jsx)(i.Z,{before:n,beforeWidth:n?50*c.iI:0,breadcrumbs:l,errors:f,navigationItems:(0,u.HF)(O,b,p),setErrors:h,subheaderChildren:m,title:"Workspaces",uuid:"workspaces/index",children:d})}},44425:function(e,n,t){"use strict";t.d(n,{$W:function(){return b},DA:function(){return m},HX:function(){return j},J8:function(){return Z},L8:function(){return u},LE:function(){return f},Lk:function(){return A},Lq:function(){return p},M5:function(){return h},Q3:function(){return O},Qj:function(){return _},Ut:function(){return C},V4:function(){return R},VZ:function(){return v},dO:function(){return d},f2:function(){return y},iZ:function(){return g},t6:function(){return s},tf:function(){return l}});var r,i,o,c,u,s,a=t(82394);!function(e){e.CONDITION="condition",e.DBT_SNAPSHOT="snapshot",e.DYNAMIC="dynamic",e.DYNAMIC_CHILD="dynamic_child",e.REDUCE_OUTPUT="reduce_output",e.REPLICA="replica"}(u||(u={})),function(e){e.MARKDOWN="markdown",e.PYTHON="python",e.R="r",e.SQL="sql",e.YAML="yaml"}(s||(s={}));var l,d=(r={},(0,a.Z)(r,s.MARKDOWN,"MD"),(0,a.Z)(r,s.PYTHON,"PY"),(0,a.Z)(r,s.R,"R"),(0,a.Z)(r,s.SQL,"SQL"),(0,a.Z)(r,s.YAML,"YAML"),r),f=(i={},(0,a.Z)(i,s.MARKDOWN,"Markdown"),(0,a.Z)(i,s.PYTHON,"Python"),(0,a.Z)(i,s.R,"R"),(0,a.Z)(i,s.SQL,"SQL"),(0,a.Z)(i,s.YAML,"YAML"),i);!function(e){e.CALLBACK="callback",e.CHART="chart",e.CONDITIONAL="conditional",e.CUSTOM="custom",e.DATA_EXPORTER="data_exporter",e.DATA_LOADER="data_loader",e.DBT="dbt",e.EXTENSION="extension",e.GLOBAL_DATA_PRODUCT="global_data_product",e.SCRATCHPAD="scratchpad",e.SENSOR="sensor",e.MARKDOWN="markdown",e.TRANSFORMER="transformer"}(l||(l={}));var p,h=[l.CALLBACK,l.CONDITIONAL,l.EXTENSION];!function(e){e.BLUE="blue",e.GREY="grey",e.PINK="pink",e.PURPLE="purple",e.TEAL="teal",e.YELLOW="yellow"}(p||(p={}));var m,x,b=[l.CHART,l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN,l.TRANSFORMER],O=[l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN,l.TRANSFORMER],v=[l.DATA_EXPORTER,l.DATA_LOADER],Z=[l.DATA_EXPORTER,l.DATA_LOADER,l.TRANSFORMER],j=[l.DATA_EXPORTER,l.DATA_LOADER,l.DBT,l.TRANSFORMER],_=[l.CHART,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN],g=[l.CALLBACK,l.CHART,l.EXTENSION,l.SCRATCHPAD,l.MARKDOWN],A=[l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SENSOR,l.TRANSFORMER];!function(e){e.EXECUTED="executed",e.FAILED="failed",e.NOT_EXECUTED="not_executed",e.UPDATED="updated"}(m||(m={})),function(e){e.BLOCK_FILE="block_file",e.CUSTOM_BLOCK_TEMPLATE="custom_block_template",e.MAGE_TEMPLATE="mage_template"}(x||(x={}));var y=[l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.TRANSFORMER],R=(o={},(0,a.Z)(o,l.CALLBACK,"Callback"),(0,a.Z)(o,l.CHART,"Chart"),(0,a.Z)(o,l.CONDITIONAL,"Conditional"),(0,a.Z)(o,l.CUSTOM,"Custom"),(0,a.Z)(o,l.DATA_EXPORTER,"Data exporter"),(0,a.Z)(o,l.DATA_LOADER,"Data loader"),(0,a.Z)(o,l.DBT,"DBT"),(0,a.Z)(o,l.EXTENSION,"Extension"),(0,a.Z)(o,l.GLOBAL_DATA_PRODUCT,"Global data product"),(0,a.Z)(o,l.MARKDOWN,"Markdown"),(0,a.Z)(o,l.SCRATCHPAD,"Scratchpad"),(0,a.Z)(o,l.SENSOR,"Sensor"),(0,a.Z)(o,l.TRANSFORMER,"Transformer"),o),C=[l.DATA_LOADER,l.TRANSFORMER,l.DATA_EXPORTER,l.SENSOR];c={},(0,a.Z)(c,l.DATA_EXPORTER,"DE"),(0,a.Z)(c,l.DATA_LOADER,"DL"),(0,a.Z)(c,l.SCRATCHPAD,"SP"),(0,a.Z)(c,l.SENSOR,"SR"),(0,a.Z)(c,l.MARKDOWN,"MD"),(0,a.Z)(c,l.TRANSFORMER,"TF")},11074:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(38626),i=t(44897),o=t(42631),c=r.default.div.withConfig({displayName:"indexstyle__PanelStyle",componentId:"sc-1rfr5wd-0"})(["border-radius:","px;"," ",""],o.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).panel,";\n  ")}),(function(e){return e.fullWidth&&"\n    width: 100%;\n  "})),u=t(28598);var s=function(e){var n=e.children,t=e.fullWidth,r=void 0===t||t;return(0,u.jsx)(c,{fullWidth:r,children:n})}},2182:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ee}});var r,i=t(77837),o=t(75582),c=t(38860),u=t.n(c),s=t(82684),a=t(69864),l=t(71180),d=t(50724),f=t(82394),p=t(32013),h=t(98777),m=t(75810),x=t(15338),b=t(97618),O=t(55485),v=t(85854),Z=t(93369),j=t(11074),_=t(44085),g=t(38276),A=t(30160),y=t(17488),R=t(69650),C=t(35686),E=["ReadWriteOnce","ReadWriteMany","ReadOnlyMany"],P=[{label:"Workspace name",required:!0,uuid:"name"}],T=[{label:"Service account name",placeholder:"default",uuid:"service_account_name"},{label:"Ingress name",labelDescription:"If you want to add the workspace to an existing ingress, enter the name of the ingress here. Otherwise, the workspace can be accessed through the service.",placeholder:"my-ingress",uuid:"ingress_name"}],S=[{label:"Storage class name",labelDescription:"Volume claim parameters",placeholder:"default",uuid:"storage_class_name"},{label:"Storage request size (in GB)",type:"number",uuid:"storage_request_size"}],w=t(44425);!function(e){e.K8S="k8s",e.ECS="ecs",e.CLOUD_RUN="cloud_run",e.EMR="emr"}(r||(r={}));var k=t(79633),D=t(29480),N=t(72619),I=t(81728),M=t(28598);function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach((function(n){(0,f.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var H=function(e){var n=e.clusterType,t=e.onCancel,i=e.onCreate,c=(0,s.useState)(),u=c[0],l=c[1],d=(0,s.useState)(),L=d[0],H=d[1],U=(0,s.useState)(null),F=U[0],B=U[1],K=(0,s.useState)(null),X=K[0],Y=K[1],G=(0,a.Db)(C.ZP.workspaces.useCreate(),{onSuccess:function(e){return(0,N.wD)(e,{callback:function(e){e.error_message?l(e.error_message):i()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;l(r),console.log(t,r)}})}}),z=(0,o.Z)(G,2),q=z[0],Q=z[1].isLoading,V=(0,s.useCallback)((function(e){var n=e.autoComplete,t=e.disabled,r=e.label,i=e.labelDescription,o=e.placeholder,c=e.required,u=e.type,s=e.uuid;return(0,M.jsxs)("div",{children:[(0,M.jsx)(x.Z,{muted:!0}),(0,M.jsx)(g.Z,{ml:3,mr:2,my:1,children:(0,M.jsxs)(O.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,M.jsxs)(b.Z,{flex:2,flexDirection:"column",children:[(0,M.jsx)(A.ZP,{children:r}),i&&(0,M.jsx)(A.ZP,{muted:!0,children:i})]}),(0,M.jsx)(b.Z,{flex:1}),(0,M.jsx)(b.Z,{flex:1,children:(0,M.jsx)(y.Z,{autoComplete:n,disabled:t,onChange:function(e){B((function(n){return W(W({},n),{},(0,f.Z)({},s,e.target.value))}))},placeholder:o,required:c,setContentOnMount:!0,type:u,value:(null===F||void 0===F?void 0:F[s])||""})})]})})]},s)}),[F,B]),$=(0,s.useMemo)((function(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(O.ZP,{children:(0,M.jsx)(g.Z,{ml:2,my:2,children:(0,M.jsx)(A.ZP,{bold:!0,sky:!0,children:"General"})})}),T.map((function(e){return V(e)})),(0,M.jsx)(x.Z,{muted:!0}),(0,M.jsx)(O.ZP,{children:(0,M.jsx)(g.Z,{ml:2,my:2,children:(0,M.jsx)(A.ZP,{bold:!0,sky:!0,children:"Volume claim params"})})}),(0,M.jsx)(x.Z,{muted:!0}),S.map((function(e){return V(e)})),(0,M.jsx)(x.Z,{muted:!0}),(0,M.jsx)(g.Z,{ml:3,mr:2,my:1,children:(0,M.jsxs)(O.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,M.jsx)(b.Z,{flex:3,children:(0,M.jsx)(A.ZP,{children:"Access mode"})}),(0,M.jsx)(b.Z,{flex:1,children:(0,M.jsx)(_.Z,{fullWidth:!0,label:"Access mode",onChange:function(e){e.preventDefault(),B((function(n){return W(W({},n),{},{storage_access_mode:e.target.value})}))},placeholder:"Access mode",value:null===F||void 0===F?void 0:F.storage_access_mode,children:E.map((function(e){return(0,M.jsx)("option",{value:e,children:e},e)}))})})]})}),(0,M.jsx)(x.Z,{muted:!0}),(0,M.jsx)(g.Z,{ml:2,my:2,children:(0,M.jsxs)(O.ZP,{alignItems:"center",children:[(0,M.jsx)(R.Z,{checked:L,compact:!0,onCheck:function(){return H((function(e){return!e}))}}),(0,M.jsx)(g.Z,{ml:1,children:(0,M.jsx)(A.ZP,{bold:!0,sky:!0,children:"Configure container"})})]})}),(0,M.jsx)(x.Z,{muted:!0}),L&&(0,M.jsx)(g.Z,{ml:3,mr:2,my:1,children:(0,M.jsx)(D.$W,{children:(0,M.jsx)(m.Z,{autoHeight:!0,fontSize:12,language:w.t6.YAML,onChange:function(e){B((function(n){return W(W({},n),{},{container_config:e})}))},tabSize:2,value:null===F||void 0===F?void 0:F.container_config,width:"100%"})})})]})}),[V,L,F]),J=(0,s.useMemo)((function(){var e,n;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(O.ZP,{children:(0,M.jsx)(g.Z,{ml:2,my:2,children:(0,M.jsx)(A.ZP,{bold:!0,sky:!0,children:"Termination policy"})})}),(0,M.jsx)(x.Z,{muted:!0}),(0,M.jsx)(g.Z,{ml:3,mr:2,my:1,children:(0,M.jsxs)(O.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,M.jsx)(b.Z,{flex:3,children:(0,M.jsx)(A.ZP,{children:"Enable auto termination"})}),(0,M.jsx)(b.Z,{flex:1,children:(0,M.jsxs)(_.Z,{fullWidth:!0,onChange:function(e){e.preventDefault(),Y((function(n){return W(W({},n),{},{termination_policy:W(W({},null===n||void 0===n?void 0:n.termination_policy),{},{enable_auto_termination:"true"===e.target.value})})}))},value:(null===X||void 0===X||null===(e=X.termination_policy)||void 0===e?void 0:e.enable_auto_termination)||"false",children:[(0,M.jsx)("option",{value:"true",children:"True"},"true"),(0,M.jsx)("option",{value:"false",children:"False"},"false")]})})]})}),(0,M.jsx)(x.Z,{muted:!0}),(0,M.jsx)(g.Z,{ml:3,mr:2,my:1,children:(0,M.jsxs)(O.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,M.jsx)(b.Z,{flex:3,children:(0,M.jsx)(A.ZP,{children:"Max idle time (in seconds)"})}),(0,M.jsx)(b.Z,{flex:1,children:(0,M.jsx)(y.Z,{onChange:function(e){Y((function(n){return W(W({},n),{},{termination_policy:W(W({},null===n||void 0===n?void 0:n.termination_policy),{},{max_idle_seconds:e.target.value})})}))},setContentOnMount:!0,type:"number",value:(null===X||void 0===X||null===(n=X.termination_policy)||void 0===n?void 0:n.max_idle_seconds)||""})})]})})]})}),[X,Y]);return(0,M.jsx)(j.Z,{children:(0,M.jsx)("div",{style:{width:"750px"},children:(0,M.jsxs)(g.Z,{p:2,children:[(0,M.jsx)(v.Z,{level:4,children:"Create workspace"}),(0,M.jsxs)("form",{children:[P.map((function(e){var n=e.autoComplete,t=e.disabled,r=e.label,i=e.required,o=e.type,c=e.uuid;return(0,M.jsx)(g.Z,{mt:2,children:(0,M.jsx)(y.Z,{autoComplete:n,disabled:t,label:r,onChange:function(e){B((function(n){return W(W({},n),{},(0,f.Z)({},c,e.target.value))}))},required:i,setContentOnMount:!0,type:o,value:(null===F||void 0===F?void 0:F[c])||""})},c)})),(0,M.jsx)(g.Z,{mt:2,children:(0,M.jsxs)(p.Z,{noPaddingContent:!0,children:[n===r.K8S&&(0,M.jsx)(h.Z,{title:"Kubernetes",children:$}),(0,M.jsx)(h.Z,{title:"Lifecycle (optional)",children:J})]})})]}),Q&&(0,M.jsx)(g.Z,{mt:1,children:(0,M.jsx)(A.ZP,{small:!0,warning:!0,children:"This may take up to a few minutes... Once the service is created, it may take another 5-10 minutes for the service to be accessible."})}),!Q&&u&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(g.Z,{mt:1,children:(0,M.jsx)(A.ZP,{danger:!0,small:!0,children:"Failed to create instance, see error below."})}),(0,M.jsx)(g.Z,{mt:1,children:(0,M.jsx)(A.ZP,{danger:!0,small:!0,children:u})})]}),(0,M.jsx)(g.Z,{my:2,children:(0,M.jsxs)(O.ZP,{flexDirection:"row-reverse",children:[(0,M.jsx)(Z.ZP,{background:k.a$,bold:!0,inline:!0,loading:Q,onClick:function(){var e=F||{},t=e.name,r=e.container_config;if(t){var i=W({},F);i.name=function(e){return"ecs"===n?(0,I.We)(e,"_"):(0,I.We)(e,"-")}(t),i.container_config=L&&r,q({workspace:W(W({},i),{},{cluster_type:n,lifecycle_config:X})})}else l("Please enter a valid name!")},uuid:"workspaces/create",children:"Create"}),(0,M.jsx)(g.Z,{ml:1}),(0,M.jsx)(Z.ZP,{bold:!0,inline:!0,onClick:t,uuid:"workspaces/cancel",children:"Cancel"})]})})]})})})},U=t(70374),F=t(93808),B=t(75499),K=t(59533),X=t(72473),Y=t(42631),G=t(8059),z=t(4611),q=t(70515),Q=t(75083),V=t(89538);function $(e){var n=e.clusterType,t=e.fetchWorkspaces,r=e.instance,i=e.setErrors,c=(0,s.useRef)(null),u=(0,s.useState)(),f=u[0],p=u[1],h=(0,s.useState)(),m=h[0],x=h[1],b=r.name,v=(r.task_arn,{cluster_type:n}),Z=(0,a.Db)(C.ZP.workspaces.useUpdate(b,v),{onSuccess:function(e){return(0,N.wD)(e,{callback:function(){t(),p(!1)},onErrorCallback:function(e,n){return i({errors:n,response:e})}})}}),j=(0,o.Z)(Z,1)[0],_=(0,a.Db)(C.ZP.workspaces.useDelete(b,v),{onSuccess:function(e){return(0,N.wD)(e,{callback:function(){t(),p(!1)},onErrorCallback:function(e,n){return i({errors:n,response:e})}})}}),y=(0,o.Z)(_,1)[0],R=(0,s.useMemo)((function(){var e=r.status,t=[{label:function(){return(0,M.jsx)(A.ZP,{children:"Delete workspace"})},onClick:function(){return x(!0)},uuid:"delete_workspace"}];return"ecs"===n&&("STOPPED"===e?t.unshift({label:function(){return(0,M.jsx)(A.ZP,{children:"Resume instance"})},onClick:function(){return j({workspace:{action:"resume",cluster_type:n,name:r.name,task_arn:r.task_arn}})},uuid:"resume_instance"}):"RUNNING"===e&&t.unshift({label:function(){return(0,M.jsx)(A.ZP,{children:"Stop instance"})},onClick:function(){return j({workspace:{action:"stop",cluster_type:n,name:r.name,task_arn:r.task_arn}})},uuid:"stop_instance"})),"k8s"===n&&("STOPPED"===e?t.unshift({label:function(){return(0,M.jsx)(A.ZP,{children:"Resume instance"})},onClick:function(){return j({workspace:{action:"resume",cluster_type:n,name:r.name}})},uuid:"resume_instance"}):"RUNNING"===e&&t.unshift({label:function(){return(0,M.jsx)(A.ZP,{children:"Stop instance"})},onClick:function(){return j({workspace:{action:"stop",cluster_type:n,name:r.name}})},uuid:"stop_instance"})),t}),[n,r,j]);return(0,M.jsx)(M.Fragment,{children:["ecs","k8s"].includes(n)&&(0,M.jsxs)("div",{ref:c,style:{position:"relative",zIndex:"1"},children:[(0,M.jsx)(l.Z,{iconOnly:!0,onClick:function(){return p(!f)},children:(0,M.jsx)(X.mH,{size:2*q.iI})}),(0,M.jsx)(d.Z,{disableEscape:!0,onClickOutside:function(){p(!1),x(!1)},open:f,children:m?(0,M.jsxs)(z.f,{leftOffset:30*-q.iI,topOffset:3*-q.iI,width:30*q.iI,children:[(0,M.jsx)(A.ZP,{children:"Are you sure you want to delete"}),(0,M.jsx)(A.ZP,{children:"this instance? You may not be"}),(0,M.jsx)(A.ZP,{children:"able to recover your data."}),(0,M.jsx)(g.Z,{mt:1}),(0,M.jsxs)(O.ZP,{children:[(0,M.jsx)(l.Z,{danger:!0,onClick:y,children:"Confirm"}),(0,M.jsx)(g.Z,{ml:1}),(0,M.jsx)(l.Z,{default:!0,onClick:function(){return x(!1)},children:"Cancel"})]})]}):(0,M.jsx)(U.Z,{items:R,left:25*-q.iI,open:f,parentRef:c,topOffset:3*-q.iI,uuid:"workspaces/more_actions",width:25*q.iI})})]})})}function J(){var e=C.ZP.statuses.list().data,n=(0,s.useState)(null),t=n[0],r=n[1],i=(0,s.useMemo)((function(){var n,t;return(null===e||void 0===e||null===(n=e.statuses)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.instance_type)||"ecs"}),[e]),c=C.ZP.workspaces.list({cluster_type:i},{refreshInterval:1e4,revalidateOnFocus:!0}),u=c.data,a=c.mutate,d=(0,s.useMemo)((function(){var e;return null===u||void 0===u||null===(e=u.workspaces)||void 0===e?void 0:e.filter((function(e){return e.name}))}),[u]),f=(0,V.dd)((function(){return(0,M.jsx)(H,{clusterType:i,onCancel:m,onCreate:function(){a(),m()}})}),{},[i,a],{background:!0,disableClickOutside:!0,disableEscape:!0,uuid:"configure_workspace"}),p=(0,o.Z)(f,2),h=p[0],m=p[1];return(0,M.jsx)(K.Z,{breadcrumbs:[{bold:!0,label:function(){return"Workspaces"}}],errors:t,pageName:Q.L6.WORKSPACES,setErrors:r,subheaderChildren:(0,M.jsx)(Z.ZP,{background:G.eW,beforeElement:(0,M.jsx)(X.mm,{size:2.5*q.iI}),bold:!0,inline:!0,onClick:function(){return h()},uuid:"workspaces/new",children:"Create new workspace"}),children:(0,M.jsx)(B.Z,{columnFlex:[2,4,2,3,1,null],columns:[{uuid:"Status"},{uuid:"Instance Name"},{uuid:"Type"},{uuid:"Public IP address"},{uuid:"Open"},{label:function(){return""},uuid:"Actions"}],rows:null===d||void 0===d?void 0:d.map((function(e){var n=e.instance,t=n.ip,o=n.name,c=n.status,u=n.type,s="http://".concat(t);return"ecs"===i&&(s="http://".concat(t,":6789")),[(0,M.jsx)(l.Z,{borderRadius:Y.D7,danger:"STOPPED"===c,default:"PROVISIONING"===c,notClickable:!0,padding:"6px",primary:"RUNNING"===c,warning:"PENDING"===c,children:(0,I.vg)(c)},"status"),(0,M.jsx)(A.ZP,{children:o},"name"),(0,M.jsx)(A.ZP,{children:(0,I.vg)(u)},"type"),(0,M.jsx)(A.ZP,{children:t},"ip"),(0,M.jsx)(l.Z,{disabled:!t,iconOnly:!0,onClick:function(){return window.open(s)},children:(0,M.jsx)(X.M0,{size:2*q.iI})},"open_button"),(0,M.jsx)($,{clusterType:i,fetchWorkspaces:a,instance:n,setErrors:r},"more_actions")]}))})})}J.getInitialProps=(0,i.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var ee=(0,F.Z)(J)},13157:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage",function(){return t(2182)}])},80022:function(e,n,t){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},15544:function(e,n,t){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},99177:function(e,n,t){"use strict";function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}t.d(n,{Z:function(){return i}})},93189:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(12539),i=t(80022);function o(e,n){if(n&&("object"===r(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}}},function(e){e.O(0,[2678,1154,844,8789,4267,600,8487,8264,7858,5499,5810,9774,2888,179],(function(){return n=13157,e(e.s=n);var n}));var n=e.O();_N_E=n}]);