"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[553],{46978:function(e,n,t){t.d(n,{Cl:function(){return u},Nk:function(){return c},ZG:function(){return l}});var o=t(38626),r=t(44897),i=t(70515),l=1.5*i.iI,u=1*l+i.iI/2,c=o.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-uvd91-0"})([".row:hover{","}"],(function(e){return"\n      background-color: ".concat((e.theme.interactive||r.Z.interactive).hoverBackground,";\n    ")}))},10553:function(e,n,t){t.d(n,{Z:function(){return pe}});var o=t(82394),r=t(75582),i=t(26304),l=t(82684),u=t(38626),c=t(69864),a=t(44425),s=t(70374),d=t(39867),f=t(89706),p=t(97618),v=t(30160),h=t(72473),m=t(46978),b=t(70515),g=t(85385),j=t(53808),y=t(55283),C=t(53005),k=t(86735),x=t(81728),w=t(28598);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Z="default_repo";var F=function e(n){var t=n.allowEmptyFolders,o=n.allowSelectingFolders,r=n.containerRef,i=n.disableContextMenu,u=n.file,c=n.isFileDisabled,s=n.level,O=n.onClickFile,F=n.onClickFolder,P=n.onSelectBlockFile,E=n.onlyShowChildren,_=n.openFile,I=n.openPipeline,S=n.openSidekickView,R=n.pipelineBlockUuids,T=n.renderAfterContent,N=n.selectFile,M=n.setContextItem,L=n.setCoordinates,A=n.setDraggingFile,U=n.setSelectedFile,B=n.theme,z=n.timeout,q=n.uncollapsed,W=n.useRootFolder,Y=u.children,$=u.disabled,G=u.name,H=u.parent;G||t||(u.name=Z);var Q,X=W?(0,C.a9)(u):(0,C.jN)(u),V=(null===H||void 0===H?void 0:H.name)===f.oy,J=(0,l.useMemo)((function(){return Y?(0,k.YC)(Y,(function(e){return e.children?0:1})):Y}),[Y]),K=c?c(X,J):$,ee=c?c(X,J):$,ne="".concat(s,"/").concat(G),te=!!(Array.isArray(J)&&(null===J||void 0===J?void 0:J.length)>0)&&(0,j.U2)(ne,s>1),oe=(0,l.useState)("undefined"===typeof q?te:!q),re=oe[0],ie=oe[1],le=h.iU;1===s&&G===f.oy?le=h.B_:G===f.PF?le=h.er:J?le=h.gt:!G&&t&&(le=h.mH),J&&a.$W.includes((0,x.C5)(G))&&(0,x.C5)(G)!==a.tf.CHART&&(Q=(0,y.qn)((0,x.C5)(G),{theme:B}).accent);var ue=(0,l.useMemo)((function(){return null===J||void 0===J?void 0:J.map((function(n){return(0,w.jsx)(e,{allowEmptyFolders:t,allowSelectingFolders:o,containerRef:r,disableContextMenu:i,file:D(D({},n),{},{parent:u}),isFileDisabled:c,level:E?s:s+1,onClickFile:O,onClickFolder:F,onSelectBlockFile:P,openFile:_,openPipeline:I,openSidekickView:S,pipelineBlockUuids:R,renderAfterContent:T,selectFile:N,setContextItem:M,setCoordinates:L,setDraggingFile:A,setSelectedFile:U,theme:B,timeout:z,uncollapsed:q,useRootFolder:W},"".concat(ne,"/").concat((null===n||void 0===n?void 0:n.name)||Z))}))}),[t,o,J,r,i,u,c,s,O,F,P,E,_,I,S,R,T,N,M,L,A,U,B,z,q,W,ne]),ce=(0,l.useMemo)((function(){var e=[];return(0,k.w6)(s).forEach((function(n,t){var o,r=m.Cl-1;e.push((0,w.jsx)("div",{style:{borderLeft:"1px solid ".concat(null===B||void 0===B||null===(o=B.content)||void 0===o?void 0:o.disabled),height:22,marginLeft:r/2-2,paddingLeft:r/2+2}},"line-".concat(ne,"-").concat(t)))})),e}),[s,B,ne]);return(0,w.jsxs)(w.Fragment,{children:[!E&&(0,w.jsxs)("div",{className:"row",onClick:function(e){if(e.preventDefault(),!ee){if((null===H||void 0===H?void 0:H.name)===f.PF){null===S||void 0===S||S(g.cH.CHARTS);var n=(0,C.lr)(u);n&&(null===P||void 0===P||P(n.uuid,n.type,(0,C.jN)(u)))}var t=(0,C.V3)(u);if(J)o?N(X):ie((function(e){return(0,j.t8)(ne,!e),!e})),null===F||void 0===F||F(X);else if(O)O(X);else if(t)null===P||void 0===P||P(t.uuid,t.type,(0,C.jN)(u));else if(G.match(f.xF))null===_||void 0===_||_(X);else{var r=(0,C.lr)(u);r&&(null===P||void 0===P||P(r.uuid,r.type,(0,C.jN)(u)))}}},onContextMenu:function(e){var n;clearTimeout(z.current),null!==r&&void 0!==r&&null!==(n=r.current)&&void 0!==n&&n.contains(e.target)&&!i&&(e.preventDefault(),L({x:e.pageX,y:e.pageY}),A(null),U(u))},onMouseDown:function(e){var n,t=u?(0,C.lr)(u,null,!0):null;null===r||void 0===r||null===(n=r.current)||void 0===n||!n.contains(e.target)||!t||(null===J||void 0===J?void 0:J.length)>=1||i||ee||V||(e.preventDefault(),clearTimeout(z.current),z.current=setTimeout((function(){L({x:e.pageX,y:e.pageY}),A(u),U(null)}),300))},style:{alignItems:"center",cursor:"default",display:"flex",minWidth:s*m.Cl+u.name.length*b.Fo+2*b.iI,paddingRight:b.iI/4},children:[(0,w.jsxs)(p.Z,{alignItems:"center",flex:1,children:[ce,J&&!re&&(0,w.jsx)(h._M,{muted:!0,size:m.ZG}),J&&re&&(0,w.jsx)(h._Q,{muted:!0,size:m.ZG}),!J&&(0,w.jsx)("div",{style:{width:m.ZG}}),(0,w.jsxs)("div",{style:{marginLeft:b.iI/2,marginRight:b.iI/2},children:[!Q&&(0,w.jsx)(le,{disabled:K,size:m.ZG}),Q&&(0,w.jsx)(d.Z,{color:Q,size:m.ZG,square:!0})]}),(0,w.jsx)(v.ZP,{color:Q,default:!Q&&!ee,disabled:ee,monospace:!0,small:!0,children:G})]}),T&&T(u)]}),(0,w.jsx)("div",{style:{display:re?"none":"block"},children:ue})]})},P=t(71180),E=t(55485),_=t(93369),I=t(65956),S=t(38276),R=t(17488),T=t(35686),N=t(42122),M=t(72619);var L=function(e){var n=e.fetchFileTree,t=e.file,o=e.moveFile,i=e.onCancel,u=e.onCreateFile,a=e.selectedFolder,s=e.setErrors,d=(0,l.useRef)(null),f=(0,N.Qr)(t)?null:t,p=(0,l.useState)(f?(0,C.jN)(f,null,!0):""),v=p[0],h=p[1],m=(0,l.useState)(f?null===f||void 0===f?void 0:f.name:""),b=m[0],g=m[1];(0,l.useEffect)((function(){var e;null===d||void 0===d||null===(e=d.current)||void 0===e||e.focus()}),[]),(0,l.useEffect)((function(){a&&h((0,C.jN)(a))}),[a]);var j=(0,c.Db)(T.ZP.files.useCreate(),{onSuccess:function(e){return(0,M.wD)(e,{callback:function(e){var t=e.file;null===n||void 0===n||n(),i(),null===u||void 0===u||u(t)},onErrorCallback:function(e,n){return s({errors:n,response:e})}})}}),y=(0,r.Z)(j,1)[0],k=(0,c.Db)(T.ZP.files.useUpdate(f&&encodeURIComponent((0,C.jN)(f))),{onSuccess:function(e){return(0,M.wD)(e,{callback:function(){null===n||void 0===n||n(),i()},onErrorCallback:function(e,n){return s({errors:n,response:e})}})}}),x=(0,r.Z)(k,1)[0];return(0,w.jsxs)(I.Z,{footer:(0,w.jsxs)(E.ZP,{children:[(0,w.jsxs)(_.ZP,{bold:!0,disabled:!b,inline:!0,onClick:function(){return f?x({file:{dir_path:v,name:b},file_json_only:!0}):y({file:{dir_path:v,name:b,overwrite:!1},file_json_only:!0})},primary:!0,tabIndex:0,uuid:"NewFile/create_file",children:[f?o?"Move":"Rename":"Create"," file"]}),(0,w.jsx)(S.Z,{ml:1,children:(0,w.jsx)(P.Z,{onClick:function(){return i()},tabIndex:0,children:"Cancel"})})]}),headerTitle:f?o?"Move file":"Rename file":"New file",children:[(0,w.jsx)(R.Z,{disabled:!!f&&!o,label:"Directory",monospace:!0,onChange:function(e){return h(e.target.value)},setContentOnMount:!0,value:v}),(0,w.jsx)(S.Z,{mt:2,children:(0,w.jsx)(R.Z,{disabled:!!o,label:"Filename",monospace:!0,onChange:function(e){return g(e.target.value)},ref:d,required:!0,value:b})})]})};var A=function(e){var n=e.fetchFileTree,t=e.file,o=e.moveFile,i=e.onCancel,u=e.onCreateFile,a=e.selectedFolder,s=e.setErrors,d=(0,l.useRef)(null),f=(0,N.Qr)(t)?null:t,p=(0,l.useState)(f?(0,C.jN)(f,null,!0):""),v=p[0],h=p[1],m=(0,l.useState)(f?null===f||void 0===f?void 0:f.name:""),b=m[0],g=m[1];(0,l.useEffect)((function(){var e;null===d||void 0===d||null===(e=d.current)||void 0===e||e.focus()}),[]),(0,l.useEffect)((function(){a&&h((0,C.jN)(a,null,!0))}),[a]);var j=(0,c.Db)(T.ZP.folders.useCreate(),{onSuccess:function(e){return(0,M.wD)(e,{callback:function(e){var t=e.file;null===n||void 0===n||n(),i(),null===u||void 0===u||u(t)},onErrorCallback:function(e,n){return s({errors:n,response:e})}})}}),y=(0,r.Z)(j,1)[0],k=(0,c.Db)(T.ZP.folders.useUpdate(f&&encodeURIComponent((0,C.jN)(f))),{onSuccess:function(e){return(0,M.wD)(e,{callback:function(){null===n||void 0===n||n(),i()},onErrorCallback:function(e,n){return s({errors:n,response:e})}})}}),x=(0,r.Z)(k,1)[0];return(0,w.jsxs)(I.Z,{footer:(0,w.jsxs)(E.ZP,{children:[(0,w.jsxs)(_.ZP,{bold:!0,disabled:!b,inline:!0,onClick:function(){return f?x({folder:{name:b,path:v}}):y({folder:{name:b,overwrite:!1,path:v}})},primary:!0,tabIndex:0,uuid:"NewFolder/create_folder",children:[f?o?"Move":"Rename":"Create"," folder"]}),(0,w.jsx)(S.Z,{ml:1,children:(0,w.jsx)(P.Z,{onClick:function(){return i()},tabIndex:0,children:"Cancel"})})]}),headerTitle:f?o?"Move folder":"Rename folder":"New folder",children:[(0,w.jsx)(R.Z,{disabled:!!f&&!o,label:"Directory",monospace:!0,onChange:function(e){return h(e.target.value)},setContentOnMount:!0,value:v}),(0,w.jsx)(S.Z,{mt:2,children:(0,w.jsx)(R.Z,{disabled:!!o,label:"Folder name",monospace:!0,onChange:function(e){return g(e.target.value)},ref:d,required:!0,value:b})})]})},U=t(57653),B=t(89515),z=t(17717),q=t(77011);function W(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?W(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var $=u.default.div.withConfig({displayName:"MultiFileInput__DropzoneStyle",componentId:"sc-1l6yd2y-0"})(["&:hover{cursor:pointer;}"]);var G=function(e){var n=e.children,t=e.inputOnChange,o=e.inputProps,r=e.onDragActiveChange,i=e.setFiles,u=(0,l.useCallback)((function(e){i(e)}),[i]),c=(0,q.uI)({onDrop:u}),a=c.getInputProps,s=c.getRootProps,d=c.isDragActive,f=a(),p=f.accept,v=f.autoComplete,h=f.multiple,m=f.onChange,b=f.onClick,g=f.ref,j=f.style,y=f.tabIndex,C=f.type,k=Y(Y({},o),{},{accept:p,autoComplete:v,multiple:h,onChange:function(e){null===t||void 0===t||t(e),null===o||void 0===o||o.onChange(e),m(e)},onClick:b,ref:g,style:j,tabIndex:y,type:C});return(0,l.useEffect)((function(){null===r||void 0===r||r(d)}),[d,r]),(0,w.jsxs)($,Y(Y({},s()),{},{children:[(0,w.jsx)("input",Y(Y({},k),{},{directory:"",webkitdirectory:""})),n]}))};function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var X=function(e){var n=e.children,t=e.directoryPath,i=e.onDragActiveChange,u=e.setFileUploadProgress,a=e.setUploadedFiles,s=(0,c.Db)(T.ZP.files.useCreate({onUploadProgress:function(e,n){var t,r=n.body,i=[null===r||void 0===r?void 0:r.dir_path,null===r||void 0===r||null===(t=r.file)||void 0===t?void 0:t.name].filter((function(e){return(null===e||void 0===e?void 0:e.length)>=1})).join(z.sep);null===u||void 0===u||u((function(n){return Q(Q({},n),{},(0,o.Z)({},i,e.loaded/e.total))}))}})),d=(0,r.Z)(s,1)[0],f=(0,l.useCallback)((function(e){e.forEach((function(e){var n=e.name,r=e.path,i=[t],l=r.split(z.sep).filter((function(e){return e&&e!==n})).join(z.sep);l&&i.push(l);var c=[],s=i.join(z.sep);(null===s||void 0===s?void 0:s.length)>=1&&i.push(s),c.push(n);var f=c.join(z.sep);d({dir_path:s,file:e,overwrite:!1}).then((function(e){var n=e.data,t=n.error,r=n.file;a((function(e){return Q(Q({},e),{},(0,o.Z)({},f,r||t))}))})),u((function(e){return Q(Q({},e),{},(0,o.Z)({},f,0))}))}))}),[d,t,u,a]);return(0,w.jsx)(G,{onDragActiveChange:i,setFiles:f,children:n})},V=t(35185),J=t(75499),K=t(44897),ee=t(42631),ne=(b.iI,u.default.div.withConfig({displayName:"indexstyle__DropZoneStyle",componentId:"sc-1g3zz7z-0"})(["border-radius:","px;padding:","px;max-width:","px;min-width:","px;",""],ee.n_,8*b.iI,100*b.iI,55*b.iI,(function(e){return"\n    border: 1px dashed ".concat((e.theme.borders||K.Z.borders).contrast,";\n  ")}))),te=u.default.div.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1g3zz7z-1"})(["max-width:","px;min-width:","px;"],100*b.iI,55*b.iI);var oe=function(e){var n=e.fetchFileTree,t=e.onCancel,o=e.selectedFolder,i=(0,l.useState)(!1),u=i[0],c=i[1],a=(0,l.useState)({}),s=a[0],d=a[1],f=(0,l.useState)({}),p=f[0],h=f[1],m=!(0,N.Qr)(s),b=(0,l.useMemo)((function(){var e=[];return(0,k.YC)(Object.entries(s),(function(e){var n=(0,r.Z)(e,2),t=n[0];n[1];return t})).forEach((function(n){var t=(0,r.Z)(n,2),o=t[0],i=t[1],l=p[o],u=null===l||void 0===l?void 0:l.message;e.push([(0,w.jsxs)("div",{children:[(0,w.jsx)(v.ZP,{overflowWrap:!0,preWrap:!0,children:o}),u&&(0,w.jsx)(S.Z,{mt:1,children:(0,w.jsx)(v.ZP,{danger:!0,small:!0,children:u})})]},"name-".concat(o)),(0,w.jsx)(V.Z,{danger:!!u,progress:100*i},"progress-".concat(o))])})),(0,w.jsx)(J.Z,{columnFlex:[1,4],columns:[{uuid:"Filename"},{uuid:"Upload progress"}],rows:e,uuid:"block-runs"})}),[s,p]);return(0,w.jsxs)(I.Z,{footer:(0,w.jsxs)(E.ZP,{fullWidth:!0,children:[(0,w.jsx)(P.Z,{onClick:function(){return t()},children:"Close"}),m&&(0,w.jsx)(S.Z,{ml:1,children:(0,w.jsx)(P.Z,{onClick:function(){d({}),h({})},children:"Clear files and retry"})})]}),headerTitle:"Upload files",children:[m&&(0,w.jsx)(te,{children:b}),!m&&(0,w.jsx)(X,{directoryPath:o?(0,C.jN)(o):"",onDragActiveChange:c,setFileUploadProgress:d,setUploadedFiles:function(e){h(e),null===n||void 0===n||n()},children:(0,w.jsx)(ne,{children:(0,w.jsxs)(v.ZP,{center:!0,children:[u&&"Drop to upload",!u&&"Click or drop files and folders to upload"]})})})]})},re=t(31353),ie=t(68669),le=t(89538),ue=["addNewBlock","blocks","deleteWidget","fetchAutocompleteItems","fetchFileTree","fetchPipeline","files","onCreateFile","pipeline","setErrors","setSelectedBlock","widgets"];function ce(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function ae(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ce(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ce(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var se,de=20*b.iI;function fe(e,n){var t=e.addNewBlock,o=e.blocks,d=void 0===o?[]:o,p=e.deleteWidget,h=e.fetchAutocompleteItems,g=e.fetchFileTree,j=e.fetchPipeline,y=e.files,x=e.onCreateFile,O=e.pipeline,D=e.setErrors,Z=e.setSelectedBlock,P=e.widgets,E=void 0===P?[]:P,_=(0,i.Z)(e,ue),I=(0,l.useRef)(null),S=(0,l.useContext)(u.ThemeContext),R=(0,l.useState)(null),N=R[0],z=R[1],q=(0,l.useState)(null),W=q[0],Y=q[1],$=(0,l.useState)(null),G=$[0],H=$[1],Q=T.ZP.statuses.list().data,X=(0,l.useMemo)((function(){var e,n;return null===Q||void 0===Q||null===(e=Q.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.repo_path}),[Q]),V=(0,c.Db)((function(e){return T.ZP.files.useDelete(e)()}),{onSuccess:function(e){return(0,M.wD)(e,{callback:function(){null===g||void 0===g||g()},onErrorCallback:function(e,n){return D({errors:n,response:e})}})}}),J=(0,r.Z)(V,1)[0],K=(0,c.Db)((function(e){return T.ZP.folders.useDelete(e)()}),{onSuccess:function(e){return(0,M.wD)(e,{callback:function(){null===g||void 0===g||g()},onErrorCallback:function(e,n){return D({errors:n,response:e})}})}}),ee=(0,r.Z)(K,1)[0],ne=(0,le.dd)((function(e){var n=e.block;return(0,w.jsx)(B.Z,{centerOnScreen:!0,danger:!0,onCancel:se,onClick:function(){return pe({block:n,force:!0}).then((function(){return se()}))},subtitle:"Deleting this block file is dangerous. This block may have dependencies in active pipelines. Press confirm to delete this block anyway and remove it as a dependency from downstream blocks.",title:"Delete ".concat(n.uuid," anyway?"),width:34*b.iI})})),te=(0,r.Z)(ne,2),ce=te[0],se=te[1],fe=(0,c.Db)((function(e){var n=e.block,t=n.language,o=n.type,r=n.uuid,i=e.force,l=void 0!==i&&i,u="".concat(o,"/").concat(r);return t&&f.JD[t]&&(u="".concat(u,".").concat(f.JD[t].toLowerCase())),T.ZP.blocks.useDelete(encodeURIComponent(u),{force:l})()}),{onSuccess:function(e){return(0,M.wD)(e,{callback:function(){h(),j(),g()},onErrorCallback:function(e){var n=e.error,t=n.exception;n.message.includes("raise HasDownstreamDependencies")&&ce({block:ye,exception:t})}})}}),pe=(0,r.Z)(fe,1)[0],ve=(0,k.sE)(null===O||void 0===O?void 0:O.blocks,(function(e){var n=e.type;return a.tf.DATA_EXPORTER===n})),he=(0,c.Db)(T.ZP.blocks.pipelines.useUpdate(null===O||void 0===O?void 0:O.uuid,null===ve||void 0===ve?void 0:ve.uuid),{onSuccess:function(e){return(0,M.wD)(e,{callback:function(){null===j||void 0===j||j()},onErrorCallback:function(e,n){return D({errors:n,response:e})}})}}),me=(0,r.Z)(he,1)[0],be=(0,l.useCallback)((function(){return H(null)}),[H]);(0,l.useEffect)((function(){var e,o,r,i=function(e){if(clearTimeout(I.current),Y(null),W&&O&&t){var o,r,i=(null===n||void 0===n||null===(o=n.current)||void 0===o||null===(r=o.getBoundingClientRect)||void 0===r?void 0:r.call(o))||{},l=i.width,u=i.x;if(e.pageX>u+l){var c=(null===O||void 0===O?void 0:O.type)===U.qL.INTEGRATION,a=(0,ie.TU)(ae(ae({},W),{},{path:(0,C.jN)(W)}),X,O);null===t||void 0===t||t(ae(ae({},a),{},{require_unique_name:!1}),(function(e){c&&ve&&me({block:ae(ae({},ve),{},{upstream_blocks:[e.uuid]})}),null===Z||void 0===Z||Z(e)}))}}},l=function(e){W&&z({x:e.pageX,y:e.pageY})};return null===(e=document)||void 0===e||e.addEventListener("click",be),null===(o=document)||void 0===o||o.addEventListener("mousemove",l),null===(r=document)||void 0===r||r.addEventListener("mouseup",i),function(){var e,n,t;null===(e=document)||void 0===e||e.removeEventListener("click",be),null===(n=document)||void 0===n||n.removeEventListener("mousemove",l),null===(t=document)||void 0===t||t.removeEventListener("mouseup",i)}}),[t,ve,W,be,O,n,X,Z,I,me]);var ge=(0,l.useMemo)((function(){return d.concat(E).map((function(e){return e.uuid}))}),[d,E]),je=(0,l.useMemo)((function(){return null===y||void 0===y?void 0:y.map((function(e){return(0,l.createElement)(F,ae(ae({},_),{},{containerRef:n,file:e,key:e.name,level:0,pipelineBlockUuids:ge,setCoordinates:z,setDraggingFile:Y,setSelectedFile:H,theme:S,timeout:I}))}))}),[y,ge,_,n,S,I]),ye=(0,l.useMemo)((function(){return G&&(0,C.lr)(G)}),[G]),Ce=(0,l.useMemo)((function(){return W&&(0,C.lr)(W)}),[W]),ke=(0,l.useMemo)((function(){return G&&"undefined"!==typeof(null===G||void 0===G?void 0:G.children)&&G}),[G]),xe=(0,le.dd)((function(){return(0,w.jsx)(oe,{fetchFileTree:g,onCancel:De,selectedFolder:ke})}),{},[g,ke],{background:!0,uuid:"upload_files"}),we=(0,r.Z)(xe,2),Oe=we[0],De=we[1],Ze=(0,le.dd)((function(e){return(0,w.jsx)(L,{fetchFileTree:g,file:null===e||void 0===e?void 0:e.file,moveFile:null===e||void 0===e?void 0:e.moveFile,onCancel:Ee,onCreateFile:x,selectedFolder:ke,setErrors:D})}),{},[g,x,ke,D],{background:!0,disableClickOutside:!0,uuid:"new_file"}),Fe=(0,r.Z)(Ze,2),Pe=Fe[0],Ee=Fe[1],_e=(0,le.dd)((function(e){return(0,w.jsx)(A,{fetchFileTree:g,file:null===e||void 0===e?void 0:e.file,moveFile:null===e||void 0===e?void 0:e.moveFile,onCancel:Re,selectedFolder:ke,setErrors:D})}),{},[g,ke,D],{background:!0,disableClickOutside:!0,uuid:"new_folder"}),Ie=(0,r.Z)(_e,2),Se=Ie[0],Re=Ie[1],Te=(0,l.useMemo)((function(){var e;if(!ye&&!G&&!ke)return(0,w.jsx)("div",{});var t=(null===n||void 0===n||null===(e=n.current)||void 0===e?void 0:e.getBoundingClientRect())||{},o=t.x,r=t.width,i=N||{},l=i.x,u=void 0===l?0:l,c=i.y,d=void 0===c?0:c,f=u;u+de>=o+r&&(f=o+r-(de+b.iI)),f<0&&(f=0);var v=[];return ke?v.push.apply(v,[{label:function(){return"New folder"},onClick:function(){Se()},uuid:"new_folder"},{label:function(){return"Rename folder"},onClick:function(){Se({file:ke})},uuid:"rename_folder"},{label:function(){return"Move folder"},onClick:function(){Se({file:ke,moveFile:!0})},uuid:"Move_folder"},{label:function(){return"Delete folder"},onClick:function(){var e=(0,C.jN)(ke);window.confirm("Are you sure you want to delete folder ".concat(e," and all its subfolders and files?"))&&ee(encodeURIComponent(e))},uuid:"Delete_folder"},{label:function(){return"New file"},onClick:function(){Pe({file:{}})},uuid:"new_file"},{label:function(){return"Upload files"},onClick:function(){Oe()},uuid:"upload_files"}]):G&&(v.push.apply(v,[{label:function(){return"Rename file"},onClick:function(){Pe({file:G})},uuid:"rename_file"},{label:function(){return"Move file"},onClick:function(){Pe({file:G,moveFile:!0})},uuid:"move_file"}]),ye?v.push({label:function(){return"Delete block file"},onClick:function(){ye.type===a.tf.CHART?window.confirm("Are you sure you want to delete widget ".concat(ye.uuid,"?"))&&p(ye):window.confirm("Are you sure you want to delete block ".concat(ye.uuid,"?"))&&pe({block:ye})},uuid:"delete_block_file"}):v.push({label:function(){return"Delete file"},onClick:function(){var e=(0,C.jN)(G);window.confirm("Are you sure you want to delete file ".concat(e,"?"))&&J(encodeURIComponent(e))},uuid:"delete_file"})),(0,w.jsx)("div",{style:{left:f,position:"fixed",top:d+b.iI/2,zIndex:re.bf+100},children:(0,w.jsx)(s.Z,{items:v,open:!0,parentRef:void 0,uuid:"FileBrowser/ContextMenu",width:de})})}),[N,pe,J,ee,p,n,Oe,Pe,Se,ye,G,ke]);return(0,w.jsxs)(m.Nk,{ref:n,children:[je,(ye||G||ke)&&Te,Ce&&(0,w.jsx)("div",{style:{left:(null===N||void 0===N?void 0:N.x)-b.iI,position:"fixed",top:(null===N||void 0===N?void 0:N.y)-b.iI,zIndex:re.bf+100},children:(0,w.jsx)(v.ZP,{cursor:"grabbing",monospace:!0,children:null===Ce||void 0===Ce?void 0:Ce.uuid})})]})}!function(e){e.BLOCK_FILE="block_file",e.DISABLED="disabled",e.FILE="file",e.FOLDER="folder",e.PIPELINE="pipeline"}(se||(se={}));var pe=l.forwardRef(fe)},53005:function(e,n,t){t.d(n,{IO:function(){return f},V3:function(){return d},a9:function(){return u},jN:function(){return a},lr:function(){return s},u$:function(){return p}});var o=t(17717),r=t(44425),i=t(89706),l=t(81728);function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n||(t?null:null===e||void 0===e?void 0:e.name);if(null!==e&&void 0!==e&&e.parent){var i=[e.parent.name];return(null===r||void 0===r?void 0:r.length)>=1&&i.push(r),u(e.parent,i.join(o.sep))}return r}function c(e){return null===e||void 0===e?void 0:e.split(o.sep).slice(1).join(o.sep)}function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=u(e,n,t);return c(o)}function s(e){var n,t,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=u(e,c).split(o.sep);if(!s)return null;if(1===s.length)(s=null===e||void 0===e||null===(t=e.path)||void 0===t?void 0:t.split(o.sep))&&(n=s[0]===r.tf.CUSTOM?s[0]:(0,l.C5)(s[0]||""));else if(s[1]===r.tf.CUSTOM)n=s[1];else{var d=s[1];n=r.tf.DBT===d?d:(0,l.C5)(d||"")}if(!s||r.tf.DBT===n)return null;var f="";f=s.length>=3?s.slice(2,s.length).join(o.sep):s[s.length-1];var p=["\\.".concat(i.Lu.PY),"\\.".concat(i.Lu.R),"\\.".concat(i.Lu.SQL),"\\.".concat(i.Lu.YAML),"\\.".concat(i.Lu.YML)].join("|"),v=new RegExp("".concat(p,"$")),h=a?r.Q3:r.$W;if(h.concat(r.tf.DBT).includes(n)&&f.match(v)){var m=f.lastIndexOf("."),b=f.slice(m+1);return{language:i.nB[b],type:n,uuid:f.slice(0,m)}}}function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=u(e,n).split(o.sep);if(t[1]){var c=(0,l.C5)(t[n?0:1]);t[1]===r.tf.DBT&&(c=r.tf.DBT);var a=t[t.length-1],s=new RegExp(".".concat(i.Lu.YAML,"$")),d=new RegExp(".".concat(i.Lu.R,"$")),f=new RegExp(".".concat(i.Lu.SQL,"$")),p=new RegExp(".".concat(i.Lu.MD,"$"));if(a.match(s)&&r.VZ.includes(c))return{type:c,uuid:a.replace(s,"")};if(a.match(d)&&r.J8.includes(c))return{type:c,uuid:a.replace(d,"")};if(a.match(f)&&r.HX.includes(c)){var v=a.replace(/[.]/g,"_"),h=c===r.tf.DBT?t.slice(2,-1).join("_").concat("_".concat(v)):a.replace(f,"");return{type:c,uuid:h}}return a.match(p)&&c===r.tf.MARKDOWN?{type:c,uuid:a.replace(p,"")}:void 0}}function f(e,n){var t=e.split("."),r=t[t.length-1];i.n6.includes(r)&&t.pop();var l=t.join("").split(o.sep),u=l.slice(1,l.length).join("");return n.find((function(e){return e.uuid===u}))}function p(e){var n=e||{},t=n.language,o=n.name,u=n.type;if(o&&t&&u){var c=u===r.tf.CUSTOM?u:"".concat(u,"s"),a=i.JD[t],s=(0,l.kE)(o);return"".concat(c,"/").concat(s,".").concat(a)}}},68669:function(e,n,t){t.d(n,{TU:function(){return f},ck:function(){return s},lU:function(){return d}});var o=t(21831),r=t(17717),i=t(44425),l=t(57653),u=t(89706),c=t(86735),a=t(81728),s=function(e){var n=e[0];return n===i.tf.DBT||n===i.tf.CUSTOM?n:e[0].slice(0,-1)};function d(){return new RegExp(Object.keys(u.nB).map((function(e){return".(".concat(e,")$")})).join("|"))}function f(e,n,t){var f,p,v=null===e||void 0===e||null===(f=e.path.match(d())[0])||void 0===f?void 0:f.split(".")[1],h=t.type===l.qL.INTEGRATION,m=(0,c.sE)(null===t||void 0===t?void 0:t.blocks,(function(e){var n=e.type;return i.tf.DATA_EXPORTER===n})),b=e.path.replace(n,"").split(r.sep),g=e.path.split(r.sep)[0]===i.tf.DBT,j=(p=b)[0]===i.tf.DBT?p.slice(1).join(r.sep):function(e){return e.at(-1)}(p).split(".")[0];if(b.length>=3&&!g){var y=b.slice(1,b.length-1).join(r.sep);j="".concat(y,"/").concat(j)}var C=s(e.path.split(r.sep)),k={configuration:{file_path:g?j:null},language:u.nB[v],name:(0,a.wE)(j),type:C};if(C===i.tf.CUSTOM&&(k.color=i.Lq.TEAL),h){var x=(0,c.sE)(t.blocks,(function(e){var n=e.type;return i.tf.DATA_LOADER===n})),w=(0,c.sE)(t.blocks,(function(e){var n=e.type;return i.tf.TRANSFORMER===n})),O=[];w?O.push(w.uuid):null!==m&&void 0!==m&&m.upstream_blocks?O.push.apply(O,(0,o.Z)(m.upstream_blocks)):x&&O.push(x.uuid),k.upstream_blocks=O}return k}}}]);