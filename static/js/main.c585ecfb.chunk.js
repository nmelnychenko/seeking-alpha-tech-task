(this["webpackJsonpseaking-alpha-tech-task"]=this["webpackJsonpseaking-alpha-tech-task"]||[]).push([[0],[,,,function(e,t,n){e.exports={"table-wrapper":"Table_table-wrapper__2GGtX",table:"Table_table__Z7VjQ",table__row:"Table_table__row__1C218","table__headings-row":"Table_table__headings-row__2uxsY",table__cell:"Table_table__cell__21HZK",table__heading:"Table_table__heading__3EAka","table__heading-action":"Table_table__heading-action__2d_RC","table__cell--rating":"Table_table__cell--rating__25mK7","table__heading--rating":"Table_table__heading--rating__3lluh","table__cell--wide":"Table_table__cell--wide__2DcKW","table__heading--wide":"Table_table__heading--wide__2B6E1"}},,function(e,t,n){e.exports={"tabs-wrapper":"Tabs_tabs-wrapper__3_Zl1","tabs-controls-list":"Tabs_tabs-controls-list__ztdyv","tabs-controls-list__item":"Tabs_tabs-controls-list__item__3ld7-","tabs-controls-list__item--active":"Tabs_tabs-controls-list__item--active__1QY8N","tabs-control":"Tabs_tabs-control__1Exp4"}},function(e,t,n){e.exports={"range-slider":"RangeSlider_range-slider__3_cdT","range-slider__limit-value":"RangeSlider_range-slider__limit-value__VLqY6","range-slider__limit-value--left":"RangeSlider_range-slider__limit-value--left__2CNN3","range-slider__limit-value--right":"RangeSlider_range-slider__limit-value--right__2-Cq7","range-slider__input":"RangeSlider_range-slider__input__3ZhBS"}},function(e,t,n){e.exports={"home-page":"HomePage_home-page__3wKNg","portfolio-top-panel":"HomePage_portfolio-top-panel__1-pqj","portfolio-table-wrapper":"HomePage_portfolio-table-wrapper__2TrgJ","portfolio-dropdown":"HomePage_portfolio-dropdown__2dwij","portfolio-dropdown__action":"HomePage_portfolio-dropdown__action__24gyI","portfolio-dropdown__action--is-active":"HomePage_portfolio-dropdown__action--is-active__1RNKM","portfolio-dropdown__action-icon":"HomePage_portfolio-dropdown__action-icon__1WHqE"}},function(e,t,n){e.exports={button:"Button_button__3GgJ3","button--primary":"Button_button--primary__1XpDF","button--secondary":"Button_button--secondary__3Iuof","button--hidden-body":"Button_button--hidden-body__2IEBc",button__body:"Button_button__body__29rIf",button__inner:"Button_button__inner__1mawx",button__icon:"Button_button__icon__3DEtN","button--text-only-desktop":"Button_button--text-only-desktop__1PGF5"}},,,function(e,t,n){e.exports={"actions-group":"ActionsGroup_actions-group__1cHxs","actions-group__item":"ActionsGroup_actions-group__item__3JnEh","actions-group__item--with-divider":"ActionsGroup_actions-group__item--with-divider__16VJE","actions-group__item--only-desktop":"ActionsGroup_actions-group__item--only-desktop__2JfR4"}},function(e,t,n){e.exports={"form-checkbox":"Checkbox_form-checkbox__2nBG_","form-checkbox__label":"Checkbox_form-checkbox__label__3v7_J","form-checkbox__shape":"Checkbox_form-checkbox__shape__3p4ne","form-checkbox__input":"Checkbox_form-checkbox__input__3hi9Z"}},,,,,function(e,t,n){e.exports={badge:"Badge_badge__39akj","badge--highest":"Badge_badge--highest__1igTe","badge--good":"Badge_badge--good__1jaKo","badge--medium":"Badge_badge--medium__1DwZG","badge--low":"Badge_badge--low__gMip2","badge--lowest":"Badge_badge--lowest__1tSCe"}},function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(19),l=n.n(a),i=(n(18),n(4)),c=n(2),s=n.n(c),d=n(15),b=n(8),u=n.n(b),_=n(0),m=function(e){var t=e.IconLeft,n=e.mods,r=void 0===n?[]:n,o=e.children,a=e.onClick,l=r.length?r.map((function(e){return u.a["button--".concat(e)]})):null;return Object(_.jsx)("button",{className:s.a.apply(void 0,[u.a.button].concat(Object(d.a)(l))),onClick:a,children:Object(_.jsxs)("span",{className:u.a.button__inner,children:[t&&Object(_.jsx)("span",{className:u.a.button__icon,children:Object(_.jsx)(t,{})}),Object(_.jsx)("span",{className:u.a.button__body,children:o})]})})},p=n(11),g=n.n(p),h=function(e){var t=e.actionsGroup;return Object(_.jsx)("ul",{className:g.a["actions-group"],children:t.map((function(e){var t=e.actionId,n=e.dividerAfter,r=e.mobileHidden,o=e.ItemChildren;return Object(_.jsx)("li",{className:s()(g.a["actions-group__item"],n&&g.a["actions-group__item--with-divider"],r&&g.a["actions-group__item--only-desktop"]),children:Object(_.jsx)(o,{})},t)}))})},f=n(5),j=n.n(f),v=function(e){var t=e.controlLabel,n=e.isActive,r=e.onActionClick;return Object(_.jsx)("li",{className:s()(j.a["tabs-controls-list__item"],n&&j.a["tabs-controls-list__item--active"]),children:Object(_.jsx)("button",{className:j.a["tabs-control"],onClick:r,children:t})})},y=function(e){var t=e.items,n=e.panels,o=Object(r.useState)(0),a=Object(i.a)(o,2),l=a[0],c=a[1],d=function(){return n.find((function(e,t){return l===t}))};return Object(_.jsxs)("div",{className:j.a["tabs-wrapper"],children:[Object(_.jsx)("ul",{className:s()(j.a["tabs-controls-list"],"row"),children:t.map((function(e,t){return Object(_.jsx)(v,{controlLabel:e,isActive:l===t,onActionClick:function(){return function(e){return c(e)}(t)}},t)}))}),Object(_.jsx)("div",{className:s()(j.a["tabs-content"],"row"),children:Object(_.jsx)(d,{})})]})},x={key:"symbol",direction:"ascending"},O=n(14),w=n(10),k=n(12),C=n.n(k),H=function(e){var t=e.name,n=e.label,r=e.isChecked,o=void 0!==r&&r,a=e.isDisabled,l=void 0!==a&&a,i=e.isLabelHidden,c=void 0!==i&&i,d=e.onCheckboxChange,b=e.mods,u=void 0===b?null:b;return Object(_.jsx)("div",{className:s()(C.a["form-checkbox"],u),children:Object(_.jsxs)("label",{className:C.a["form-checkbox__label"],children:[Object(_.jsx)("input",{type:"checkbox",name:t,checked:o,disabled:l,onChange:d,className:s()(C.a["form-checkbox__input"],"visually-hidden")}),Object(_.jsx)("span",{className:C.a["form-checkbox__shape"]}),Object(_.jsx)("span",{className:s()(c&&"visually-hidden"),children:n})]})})},L=function(e){return null===e?"-":Number(e)>9999?"".concat((e/1e3).toFixed(2),"K"):e},N=n(6),I=n.n(N),V=function(e){var t=e.min,n=e.max,o=e.defaultValue,a=e.label,l=e.isLabelHidden,c=e.stepsCount,d=e.onChangeCallback,b=void 0===d?function(){}:d,u=Object(r.useState)(o||t),m=Object(i.a)(u,2),p=m[0],g=m[1];return Object(_.jsxs)("div",{className:I.a["range-slider"],children:[Object(_.jsx)("div",{className:s()(I.a["range-slider__limit-value"],I.a["range-slider__limit-value--left"]),children:L(t)}),Object(_.jsxs)("label",{className:I.a["range-slider__label"],children:[Object(_.jsx)("input",{className:I.a["range-slider__input"],type:"range",min:t,max:n,value:p,step:(n-t)/c,onChange:function(e){var t=e.target.value;b(t),g(t)}}),Object(_.jsx)("span",{className:s()(l&&"visually-hidden"),children:a})]}),Object(_.jsx)("div",{className:s()(I.a["range-slider__limit-value"],I.a["range-slider__limit-value--right"]),children:L(n)})]})},P=n(17),E=n.n(P),S=function(e){var t=e.content,n=e.mod,r=e.className,o=void 0===r?"":r;return Object(_.jsx)("span",{className:s()(E.a.badge,n&&E.a["badge--".concat(n)],o),children:t})},B={"afk-alert-status":!0},A=Object(r.createContext)(B),R=function(e){var t=e.children,n=Object(r.useState)(Object(w.a)({},B)),o=Object(i.a)(n,2),a=o[0],l=o[1];return Object(_.jsx)(A.Provider,{value:{checkedItems:a,setCheckedItems:l},children:t})},Z={highest:{min:4.5,max:5.01},good:{min:4,max:4.5},medium:{min:3,max:4},low:{min:2,max:3},lowest:{min:0,max:2}},M=n(3),T=n.n(M),G=function(e){e.rowId;var t=e.cells,n=Object(r.useContext)(A),o=n.checkedItems,a=n.setCheckedItems,l=function(e){var t=e.target;a(Object(w.a)(Object(w.a)({},o),{},Object(O.a)({},t.name,t.checked)))},i=function(e){return console.log(e)};Object(r.useEffect)((function(){console.log("checkedItems: ",o)}),[o]);var c=function(e){return 0!==e?e>0?"text-success":"text-error":null};return Object(_.jsx)("tr",{className:T.a.table__row,children:Object.keys(t).map((function(e){var n=t[e],r=n.type,a=n.content,d=n.mod;return Object(_.jsx)("td",{className:s()(T.a.table__cell,d&&T.a["table__cell--".concat(d)]),children:function(){switch(r){case"text":return a;case"number":return L(a);case"relativeNumber":return Object(_.jsx)("span",{className:c(a),children:L(a)});case"relativePercents":return Object(_.jsx)("span",{className:c(a),children:"".concat(a,"%")});case"checkbox":var e=a.name,t=a.label,n=a.mods,s=a.isDisabled,d=a.isLabelHidden;return Object(_.jsx)(H,{name:e,label:t,isChecked:o[e],onCheckboxChange:l,mods:n,isDisabled:s,isLabelHidden:d});case"range":var b=a.min,u=void 0===b?0:b,m=a.max,p=void 0===m?1:m,g=a.stepsCount,h=void 0===g?100:g,f=a.defaultValue,j=void 0===f?0:f,v=a.label,y=void 0===v?"":v,x=a.isLabelHidden,O=void 0!==x&&x;return Object(_.jsx)(V,{min:u,max:p,defaultValue:j,label:y,isLabelHidden:O,stepsCount:h,onChangeCallback:i});case"badge":var w=Object.entries(Z).find((function(e){return a>=e[1].min&&a<e[1].max})),k=w&&w[0];return Object(_.jsx)(S,{mod:a&&k,content:null!==a?a.toFixed(2):"NR"});default:return a}}()},e)}))})},F=function(e){var t=e.headings,n=void 0===t?[]:t,o=e.rows,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(r.useState)(t),o=Object(i.a)(n,2),a=o[0],l=o[1];return{items:Object(r.useMemo)((function(){var t=Object(d.a)(e);return null!==a&&t.sort((function(e,t){return e.cells[a.key].content<t.cells[a.key].content?"ascending"===a.direction?-1:1:e.cells[a.key].content>t.cells[a.key].content?"ascending"===a.direction?1:-1:0})),t}),[e,a]),requestSort:function(e){var t="ascending";a&&a.key===e&&"ascending"===a.direction&&(t="descending"),l({key:e,direction:t})}}}(void 0===o?[]:o,x),l=a.items,c=a.requestSort;return Object(_.jsx)("div",{className:T.a["table-wrapper"],children:Object(_.jsxs)("table",{className:T.a.table,children:[n.length&&Object(_.jsx)("thead",{children:Object(_.jsx)("tr",{className:T.a["table__headings-row"],children:n.map((function(e){var t=e.title,n=e.sortable,r=e.id,o=e.mod;return Object(_.jsx)("th",{className:s()(T.a.table__heading,T.a["table__heading--".concat(o)]),children:n?Object(_.jsx)("button",{className:T.a["table__heading-action"],onClick:function(){return c(r)},children:t}):t},r)}))})}),Object(_.jsx)("tbody",{children:l.map((function(e){var t=e.rowId,n=e.cells;return Object(_.jsx)(G,{rowId:t,cells:n},t)}))})]})})},K={headings:[{title:"Symbol",sortable:!0,id:"symbol"},{title:"Price",sortable:!0,id:"price"},{title:"Change",sortable:!0,id:"change"},{title:"Change %",sortable:!0,id:"relativeChange"},{title:"Alerts",sortable:!1,id:"alerts"},{title:"Volume",sortable:!0,id:"volume"},{title:"Avg. Vol",sortable:!0,id:"avgVolume"},{title:"Prev Close",sortable:!0,id:"prevClose"},{title:"Open",sortable:!0,id:"open"},{title:"High",sortable:!0,id:"high"},{title:"Low",sortable:!0,id:"low"},{title:"52 Wk Range",sortable:!1,id:"wkRange",mod:"wide"},{title:"Quant",sortable:!0,mod:"rating",id:"quant"},{title:"SA Authors",sortable:!0,mod:"rating",id:"saAuthors"},{title:"Sell Side",sortable:!0,mod:"rating",id:"sellSide"}],rows:[{rowId:"0",cells:{symbol:{type:"text",content:"AFK"},price:{type:"number",content:19.51},change:{type:"relativeNumber",content:-.14},relativeChange:{type:"relativePercents",content:-.71},alerts:{type:"checkbox",content:{name:"afk-alert-status",label:"Afk alerts enable",mods:["text-center"],isLabelHidden:!0}},volume:{type:"number",content:1911},avgVolume:{type:"number",content:11420},prevClose:{type:"number",content:19.65},open:{type:"number",content:19.65},high:{type:"number",content:19.65},low:{type:"number",content:19.65},wkRange:{type:"range",mod:"wide",content:{min:19.65,max:19.69,defaultValue:19.66,label:"AFK 52 Wk Range",isLabelHidden:!0}},quant:{type:"badge",mod:"rating",content:4.32},saAuthors:{type:"badge",mod:"rating",content:4.32},sellSide:{type:"badge",mod:"rating",content:null}}},{rowId:"1",cells:{symbol:{type:"text",content:"BRK.A"},price:{type:"number",content:335200},change:{type:"relativeNumber",content:1584},relativeChange:{type:"relativePercents",content:.47},alerts:{type:"checkbox",content:{name:"brk-alert-status",label:"BRK alerts enable",mods:["text-center"],isLabelHidden:!0}},volume:{type:"number",content:333620},avgVolume:{type:"number",content:333620},prevClose:{type:"number",content:333620},open:{type:"number",content:333620},high:{type:"number",content:333620},low:{type:"number",content:333620},wkRange:{type:"range",mod:"wide",content:{min:335080,max:336390,defaultValue:335800,label:"BRK 52 Wk Range",isLabelHidden:!0}},quant:{type:"badge",mod:"rating",content:3},saAuthors:{type:"badge",mod:"rating",content:4.32},sellSide:{type:"badge",mod:"rating",content:4.56}}},{rowId:"2",cells:{symbol:{type:"text",content:"CGW"},price:{type:"number",content:41.99},change:{type:"relativeNumber",content:.04},relativeChange:{type:"relativePercents",content:.1},alerts:{type:"checkbox",content:{name:"cgw-alert-status",label:"CGW alerts enable",mods:["text-center"],isLabelHidden:!0}},volume:{type:"number",content:1e3},avgVolume:{type:"number",content:null},prevClose:{type:"number",content:null},open:{type:"number",content:null},high:{type:"number",content:null},low:{type:"number",content:null},wkRange:{type:"range",mod:"wide",content:{min:42,max:42.05,defaultValue:42.015,label:"CGW 52 Wk Range",isLabelHidden:!0}},quant:{type:"badge",mod:"rating",content:null},saAuthors:{type:"badge",mod:"rating",content:null},sellSide:{type:"badge",mod:"rating",content:null}}},{rowId:"3",cells:{symbol:{type:"text",content:"FIX"},price:{type:"number",content:48.6},change:{type:"relativeNumber",content:-.16},relativeChange:{type:"relativePercents",content:-100.33},alerts:{type:"checkbox",content:{name:"fix-alert-status",label:"FIX alerts enable",mods:["text-center"],isLabelHidden:!0}},volume:{type:"number",content:48.76},avgVolume:{type:"number",content:48.76},prevClose:{type:"number",content:48.76},open:{type:"number",content:48.76},high:{type:"number",content:48.76},low:{type:"number",content:48.76},wkRange:{type:"range",mod:"wide",content:{min:48.91,max:48.98,defaultValue:48.96,label:"FIX 52 Wk Range",isLabelHidden:!0}},quant:{type:"badge",mod:"rating",content:3},saAuthors:{type:"badge",mod:"rating",content:2.34},sellSide:{type:"badge",mod:"rating",content:1.67}}}]},q=["Summary","Holdings"];function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var J=r.createElement("path",{d:"M11.6593 2.142L7.94972 0L2.59473 9.27459L2.33984 14L6.30431 11.417L11.6593 2.142ZM10.4891 2.45535L10.0608 3.19694L7.83443 1.91182L8.26308 1.16982L10.4891 2.45535ZM8.1482 3.08247L4.07873 10.1315L3.33673 9.70282L7.40578 2.65424L8.1482 3.08247ZM3.29267 12.3496L3.38614 10.7211L4.65643 11.4545L3.29267 12.3496ZM5.56273 10.9888L4.82073 10.5601L8.88978 3.51112L9.6322 3.93935L5.56273 10.9888Z",fill:"currentColor"});function X(e,t){var n=e.title,o=e.titleId,a=W(e,["title","titleId"]);return r.createElement("svg",D({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},a),n?r.createElement("title",{id:o},n):null,J)}var Q=r.forwardRef(X);n.p;function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var U=r.createElement("path",{d:"M6.49693 6.01597L9.75683 0H6.96709L5 4.68703L3.03235 0H0.24261L3.50307 6.01597L0 12H3.05689L5 7.38902L6.94311 12H10L6.49693 6.01597Z",fill:"currentColor"});function $(e,t){var n=e.title,o=e.titleId,a=z(e,["title","titleId"]);return r.createElement("svg",Y({width:10,height:12,viewBox:"0 0 10 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},a),n?r.createElement("title",{id:o},n):null,U)}var ee=r.forwardRef($);n.p;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var re=r.createElement("path",{d:"M11.1998 0H2.7998V2.8H11.1998V0Z",fill:"currentColor"}),oe=r.createElement("path",{d:"M0 3.5V9.80058H2.8V12.6H11.2V9.80058H14V3.5H0ZM9.8 11.2H4.2V7.7H9.8V11.2ZM12.2797 6.27142H10.8797V4.87142H12.2797V6.27142Z",fill:"currentColor"});function ae(e,t){var n=e.title,o=e.titleId,a=ne(e,["title","titleId"]);return r.createElement("svg",te({width:14,height:13,viewBox:"0 0 14 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},a),n?r.createElement("title",{id:o},n):null,re,oe)}var le=r.forwardRef(ae);n.p;function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var se=r.createElement("path",{d:"M1.16667 0V1.16667H0V14H1.16667H12.8333C13.4773 14 14 13.4773 14 12.8333V0H1.16667ZM12.8333 11.6667H2.33333V1.16667H12.8333V11.6667Z",fill:"currentColor"}),de=r.createElement("path",{d:"M11.6667 2.33337H3.5V3.50004H11.6667V2.33337Z",fill:"currentColor"}),be=r.createElement("path",{d:"M11.6667 9.33337H3.5V10.5H11.6667V9.33337Z",fill:"currentColor"}),ue=r.createElement("path",{d:"M7 4.66663H3.5V5.83329H7V4.66663Z",fill:"currentColor"}),_e=r.createElement("path",{d:"M7 7H3.5V8.16667H7V7Z",fill:"currentColor"}),me=r.createElement("path",{d:"M11.6665 4.66663H8.1665V8.16663H11.6665V4.66663Z",fill:"currentColor"});function pe(e,t){var n=e.title,o=e.titleId,a=ce(e,["title","titleId"]);return r.createElement("svg",ie({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},a),n?r.createElement("title",{id:o},n):null,se,de,be,ue,_e,me)}var ge=r.forwardRef(pe);n.p;function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var je=r.createElement("path",{d:"M11.6079 0L6.50066 5.10728L1.39469 0L0 1.39337L6.50066 7.89272L13 1.39337L11.6079 0Z",fill:"currentColor"});function ve(e,t){var n=e.title,o=e.titleId,a=fe(e,["title","titleId"]);return r.createElement("svg",he({width:13,height:8,viewBox:"0 0 13 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},a),n?r.createElement("title",{id:o},n):null,je)}var ye=r.forwardRef(ve),xe=(n.p,n(7)),Oe=n.n(xe),we=[{actionId:"add-symbol",ItemChildren:function(){return Object(_.jsx)(m,{mods:["primary"],onClick:function(){return console.log("Add symbol clicked")},children:"+ Add Symbol"})}},{actionId:"edit-portfolio",dividerAfter:!0,ItemChildren:function(){return Object(_.jsx)(m,{mods:["secondary","text-only-desktop"],IconLeft:function(){return Object(_.jsx)(Q,{})},onClick:function(){return console.log("Edit portfolio clicked")},children:"Edit Portfolio"})}},{actionId:"download-excel",mobileHidden:!0,ItemChildren:function(){return Object(_.jsx)(m,{mods:["secondary","hidden-body"],IconLeft:function(){return Object(_.jsx)(ee,{})},onClick:function(){return console.log("Download excel clicked")},children:Object(_.jsx)("span",{className:"visually-hidden",children:"Download excel table"})})}},{actionId:"print-portfolio",dividerAfter:!0,mobileHidden:!0,ItemChildren:function(){return Object(_.jsx)(m,{mods:["secondary","hidden-body"],IconLeft:function(){return Object(_.jsx)(le,{})},onClick:function(){return console.log("Print portfolio clicked")},children:Object(_.jsx)("span",{className:"visually-hidden",children:"Print Portfolio"})})}},{actionId:"view-headlines",ItemChildren:function(){return Object(_.jsx)(m,{mods:["secondary","text-only-desktop"],IconLeft:function(){return Object(_.jsx)(ge,{})},onClick:function(){return console.log("View headlines clicked")},children:"View Headlines"})}}],ke=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1];Object(r.useEffect)((function(){console.log("dropdown state is: ",n)}),[n]);var a=function(){return Object(_.jsx)("div",{className:Oe.a["portfolio-table-wrapper"],children:Object(_.jsx)(F,{headings:K.headings,rows:K.rows})})},l=function(){return Object(_.jsx)("div",{children:Object(_.jsx)("h3",{children:"Hello, Tab Holdings"})})};return Object(_.jsx)("div",{className:Oe.a["home-page"],children:Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)("h2",{className:"visually-hidden",children:"Portfolio Page"}),Object(_.jsx)("div",{className:"row",children:Object(_.jsxs)("div",{className:s()(Oe.a["portfolio-top-panel"]),children:[Object(_.jsx)("div",{className:Oe.a["portfolio-dropdown"],children:Object(_.jsxs)("button",{className:s()(Oe.a["portfolio-dropdown__action"],n&&Oe.a["portfolio-dropdown__action--is-active"]),onClick:function(){o(!n)},children:["Portfolio 1 - Dividends & Income",Object(_.jsx)("span",{className:Oe.a["portfolio-dropdown__action-icon"],children:Object(_.jsx)(ye,{})})]})}),Object(_.jsx)(h,{actionsGroup:we})]})}),Object(_.jsx)("div",{className:"row",children:Object(_.jsx)(y,{items:q,panels:[Object(_.jsx)(a,{}),Object(_.jsx)(l,{})]})})]})})};var Ce=function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(R,{children:Object(_.jsx)(ke,{})})})},He=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),r(e),o(e),a(e),l(e)}))};l.a.render(Object(_.jsx)(o.a.StrictMode,{children:Object(_.jsx)(Ce,{})}),document.getElementById("root")),He()}],[[25,1,2]]]);
//# sourceMappingURL=main.c585ecfb.chunk.js.map