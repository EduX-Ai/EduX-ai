(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{55006:function(n,i,t){"use strict";t.r(i);var u=t(82684),e=t(34376),a=t(35686);i.default=function(){var n,i=(0,e.useRouter)(),t=i.asPath,o=t.split("?")[0],s=a.ZP.statuses.list().data,l=(0,u.useMemo)((function(){var n;return null===s||void 0===s||null===(n=s.statuses)||void 0===n?void 0:n[0]}),[s]),r=a.ZP.pipeline_runs.list({_limit:0}).data,v=0===(0,u.useMemo)((function(){var n;return(null===r||void 0===r||null===(n=r.metadata)||void 0===n?void 0:n.count)||0}),[null===r||void 0===r||null===(n=r.metadata)||void 0===n?void 0:n.count])?"/pipelines":"/overview";(0,u.useEffect)((function(){if(l){var n=null===l||void 0===l?void 0:l.is_instance_manager,u=t;"/"===o&&(u=n?"/manage":v),r&&i.replace(u)}}),[o,t,r,l,v,i])}},48312:function(n,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(55006)}])}},function(n){n.O(0,[9774,2888,179],(function(){return i=48312,n(n.s=i);var i}));var i=n.O();_N_E=i}]);