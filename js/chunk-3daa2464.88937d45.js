(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3daa2464"],{"0877":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flexbox"},[s("el-row",[s("el-col",{attrs:{span:8}},[s("h3",[t._v("父容器")]),s("el-form",{ref:"parrentform",staticClass:"parrentform",attrs:{model:t.parrentform,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"height"}},[s("el-slider",{attrs:{"format-tooltip":t.formaParrenttHeight,step:10},model:{value:t.parrentform.height,callback:function(e){t.$set(t.parrentform,"height",e)},expression:"parrentform.height"}})],1),s("el-form-item",{attrs:{label:"flex-direction"}},[s("el-select",{attrs:{placeholder:"flex-direction"},model:{value:t.parrentform.flex_direction,callback:function(e){t.$set(t.parrentform,"flex_direction",e)},expression:"parrentform.flex_direction"}},[s("el-option",{attrs:{label:"row",value:"row"}}),s("el-option",{attrs:{label:"row-reverse",value:"row-reverse"}}),s("el-option",{attrs:{label:"column",value:"column"}}),s("el-option",{attrs:{label:"column-reverse",value:"column-reverse"}})],1)],1),s("el-form-item",{attrs:{label:"flex-wrap"}},[s("el-select",{attrs:{placeholder:"flex-wrap"},model:{value:t.parrentform.flex_wrap,callback:function(e){t.$set(t.parrentform,"flex_wrap",e)},expression:"parrentform.flex_wrap"}},[s("el-option",{attrs:{label:"nowrap",value:"nowrap"}}),s("el-option",{attrs:{label:"wrap",value:"wrap"}}),s("el-option",{attrs:{label:"wrap-reverse",value:"wrap-reverse"}})],1)],1),s("el-form-item",{attrs:{label:"justify-content"}},[s("el-select",{attrs:{placeholder:"justify-content"},model:{value:t.parrentform.justify_content,callback:function(e){t.$set(t.parrentform,"justify_content",e)},expression:"parrentform.justify_content"}},[s("el-option",{attrs:{label:"flex-start",value:"flex-start"}}),s("el-option",{attrs:{label:"flex-end",value:"flex-end"}}),s("el-option",{attrs:{label:"center",value:"center"}}),s("el-option",{attrs:{label:"space-between",value:"space-between"}}),s("el-option",{attrs:{label:"space-around",value:"space-around"}})],1)],1),s("el-form-item",{attrs:{label:"align-items"}},[s("el-select",{attrs:{placeholder:"align-items"},model:{value:t.parrentform.align_items,callback:function(e){t.$set(t.parrentform,"align_items",e)},expression:"parrentform.align_items"}},[s("el-option",{attrs:{label:"flex-start",value:"flex-start"}}),s("el-option",{attrs:{label:"flex-end",value:"flex-end"}}),s("el-option",{attrs:{label:"center",value:"center"}}),s("el-option",{attrs:{label:"baseline",value:"baseline"}}),s("el-option",{attrs:{label:"stretch",value:"stretch"}})],1)],1),s("el-form-item",{attrs:{label:"align-content"}},[s("el-select",{attrs:{placeholder:"align-content"},model:{value:t.parrentform.align_content,callback:function(e){t.$set(t.parrentform,"align_content",e)},expression:"parrentform.align_content"}},[s("el-option",{attrs:{label:"flex-start",value:"flex-start"}}),s("el-option",{attrs:{label:"flex-end",value:"flex-end"}}),s("el-option",{attrs:{label:"center",value:"center"}}),s("el-option",{attrs:{label:"space-between",value:"space-between"}}),s("el-option",{attrs:{label:"space-around",value:"space-around"}}),s("el-option",{attrs:{label:"stretch",value:"stretch"}})],1)],1)],1),s("h3",[t._v("子元素")]),s("el-form",{ref:"childform",staticClass:"childform",attrs:{"label-width":"50px"}},[s("el-form-item",{attrs:{label:"数量"}},[s("el-slider",{attrs:{min:parseInt(10),"format-tooltip":t.formatTen,step:10},model:{value:t.child_num,callback:function(e){t.child_num=e},expression:"child_num"}})],1),s("el-form-item",{attrs:{label:"宽度"}},[s("el-slider",{attrs:{min:parseInt(10)},model:{value:t.child_width,callback:function(e){t.child_width=e},expression:"child_width"}})],1)],1)],1),s("el-col",{attrs:{span:16}},[s("div",{staticClass:"main-content"},[s("div",{staticClass:"flex-parrent",style:{display:"flex",height:0==t.parrentform.height?"auto":5*t.parrentform.height+"px",flexDirection:t.parrentform.flex_direction,flexWrap:t.parrentform.flex_wrap,justifyContent:t.parrentform.justify_content,alignItems:t.parrentform.align_items,alignContent:t.parrentform.align_content}},t._l(t.child,function(e,a){return s("div",{key:e.key,staticClass:"flex-child",style:{width:t.child_width+"%",height:0==e.height?"auto":e.height+"px",flexGrow:e.flex_grow/10,flexShrink:e.flex_shrink/10,flexBasis:0==e.flex_basis?"auto":10*e.flex_basis+"px",alignSelf:e.align_self,order:(e.order-50)/10}},[t._v("\n            child "+t._s(a)+"\n          ")])}),0)])])],1),s("el-row",{staticClass:"clearfix"},[s("h3",[t._v("子元素配置")]),t._l(t.child,function(e,a){return s("div",{key:e.key,staticClass:"child-conf"},[s("h4",[t._v("child "+t._s(a))]),s("el-row",[s("el-col",{staticClass:"label",attrs:{span:9}},[t._v("height")]),s("el-col",{attrs:{span:15}},[s("el-slider",{attrs:{"format-tooltip":t.formatHeight,step:10},model:{value:e.height,callback:function(a){t.$set(e,"height",a)},expression:"item.height"}})],1)],1),s("el-row",[s("el-col",{staticClass:"label",attrs:{span:9}},[t._v("order")]),s("el-col",{attrs:{span:15}},[s("el-slider",{attrs:{"format-tooltip":t.formatOrder,step:10},model:{value:e.order,callback:function(a){t.$set(e,"order",a)},expression:"item.order"}})],1)],1),s("el-row",[s("el-col",{staticClass:"label",attrs:{span:9}},[t._v("flex-grow")]),s("el-col",{attrs:{span:15}},[s("el-slider",{attrs:{"format-tooltip":t.formatTen,step:10},model:{value:e.flex_grow,callback:function(a){t.$set(e,"flex_grow",a)},expression:"item.flex_grow"}})],1)],1),s("el-row",[s("el-col",{staticClass:"label",attrs:{span:9}},[t._v("flex-shrink")]),s("el-col",{attrs:{span:15}},[s("el-slider",{attrs:{min:parseInt(10),"format-tooltip":t.formatTen,step:10},model:{value:e.flex_shrink,callback:function(a){t.$set(e,"flex_shrink",a)},expression:"item.flex_shrink"}})],1)],1),s("el-row",[s("el-col",{staticClass:"label",attrs:{span:9}},[t._v("flex-basis")]),s("el-col",{attrs:{span:15}},[s("el-slider",{attrs:{max:parseInt(50),"format-tooltip":t.formatFlexBasis,step:10},model:{value:e.flex_basis,callback:function(a){t.$set(e,"flex_basis",a)},expression:"item.flex_basis"}})],1)],1),s("el-row",[s("el-col",{staticClass:"label",attrs:{span:9}},[t._v("align-self")]),s("el-col",{attrs:{span:15}},[s("el-select",{attrs:{placeholder:"align-self"},model:{value:e.align_self,callback:function(a){t.$set(e,"align_self",a)},expression:"item.align_self"}},[s("el-option",{attrs:{label:"auto",value:"auto"}}),s("el-option",{attrs:{label:"flex-start",value:"flex-start"}}),s("el-option",{attrs:{label:"flex-end",value:"flex-end"}}),s("el-option",{attrs:{label:"center",value:"center"}}),s("el-option",{attrs:{label:"baseline",value:"baseline"}}),s("el-option",{attrs:{label:"stretch",value:"stretch"}})],1)],1)],1)],1)})],2),s("div",{staticClass:"des"},[s("h3",[t._v("属性描述")]),t._m(0),t._m(1),s("p",{staticClass:"cankao"},[t._v("\n      flex: 0 ( flex-grow ) 1 ( flex-shrink ) auto ( flex-basis ); 默认值-(\n      属性 )\n    ")]),s("p",{staticClass:"cankao"},[t._v("\n      flex-basis 控制着元素在沿着主轴上 grow 和 shrik 之前最终能够变化多大\n    ")]),s("p",{staticClass:"cankao"},[t._v("\n      flex-grow 决定了他将与兄弟元素成比例的增长多少， flex-shrink\n      决定了缩小多少\n    ")]),s("div",{staticClass:"item",attrs:{id:"flex-direction"}},[t._m(2),s("el-table",{staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.flexGrowTableData,border:""}},[s("el-table-column",{attrs:{prop:"attributes",label:"属性",width:"150"}}),s("el-table-column",{attrs:{prop:"des",label:"描述"}})],1),s("el-row",{staticStyle:{marginTop:"25px"}},[s("el-col",{attrs:{span:10,offset:1}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("0a01")}})])],1),s("el-col",{attrs:{span:10,offset:1}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("8917")}})])],1)],1),s("el-row",{staticStyle:{margin:"25px auto 0",width:"1000px"}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("fdfd")}})])],1)],1),s("div",{staticClass:"item",attrs:{id:"flex-wrap"}},[t._m(3),s("el-table",{staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.flexWrapTableData,border:""}},[s("el-table-column",{attrs:{prop:"attributes",label:"属性",width:"150"}}),s("el-table-column",{attrs:{prop:"des",label:"描述"}})],1),s("el-row",{staticStyle:{margin:"25px auto 0",width:"815px"}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("425d")}})])],1)],1),s("div",{staticClass:"item",attrs:{id:"justify-content"}},[t._m(4),s("el-table",{staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.justifyContentTableData,border:""}},[s("el-table-column",{attrs:{prop:"attributes",label:"属性",width:"150"}}),s("el-table-column",{attrs:{prop:"des",label:"描述"}})],1),s("el-row",{staticStyle:{margin:"25px auto 0",width:"1000px"}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("97e4")}})])],1)],1),s("div",{staticClass:"item",attrs:{id:"align-items"}},[t._m(5),s("el-table",{staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.alignItemsTableData,border:""}},[s("el-table-column",{attrs:{prop:"attributes",label:"属性",width:"150"}}),s("el-table-column",{attrs:{prop:"des",label:"描述"}})],1),s("el-row",{staticStyle:{marginTop:"25px"}},[s("el-col",{attrs:{span:10,offset:1}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("4812")}}),s("p",{staticClass:"img-des"},[t._v("\n              align-items: stretch 时每个 子元素 的 height 必须为 auto 否则\n              height 属性会覆盖 stretch 的效果\n            ")])])],1),s("el-col",{attrs:{span:10,offset:1}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("58f0")}}),s("p",{staticClass:"img-des"},[t._v("\n              如果 div 内没有内容，或者子标签内没有内容，将按照每个 div\n              的底部对齐\n            ")])])],1)],1),s("el-row",{staticStyle:{margin:"25px auto 0",width:"940px"}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("292a")}})])],1)],1),s("div",{staticClass:"item",attrs:{id:"align-content"}},[t._m(6),s("el-table",{staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.alignContentTableData,border:""}},[s("el-table-column",{attrs:{prop:"attributes",label:"属性",width:"150"}}),s("el-table-column",{attrs:{prop:"des",label:"描述"}})],1),s("el-row",{staticStyle:{margin:"25px auto 0",width:"1055px"}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("8b0b")}}),s("p",{staticClass:"img-des"},[t._v("\n            flex-wrap 需设为 wrap, 且数量超出一行,\n            父容器的高度相对于子容器有多余，才能看到效果\n          ")])])],1)],1),s("div",{staticClass:"item",attrs:{id:"order"}},[t._m(7),s("el-row",{staticStyle:{margin:"25px auto 0",width:"545px"}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("65ba")}}),s("p",{staticClass:"img-des"},[t._v("\n            用整数值来定义排列顺序，数值小的排在前面。可以为负值\n          ")])])],1)],1),s("div",{staticClass:"item",attrs:{id:"flex-grow"}},[t._m(8),s("div",{staticClass:"flex-grow-code"},[s("pre",{staticClass:"clearfix"},[t._v("          "),s("code",{ref:"flex-grow-code-html",staticClass:"html"},[t._v("\n            "+t._s(t.flex_grow_code_html)+"\n          ")]),t._v("\n          "),s("code",{ref:"flex-grow-code-css",staticClass:"css"},[t._v("\n            "+t._s(t.flex_grow_code_css)+"\n          ")]),t._v("\n        ")]),t._m(9)]),s("el-row",{staticStyle:{margin:"25px auto 0",width:"616px"}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("401f")}})])],1),s("el-row",{staticStyle:{margin:"25px auto 0",width:"1000px"}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("9e0f")}})])],1)],1),s("div",{staticClass:"item",attrs:{id:"flex-shrink"}},[t._m(10),s("div",{staticClass:"flex-grow-code"},[s("pre",{staticClass:"clearfix"},[t._v("          "),s("code",{ref:"flex-shrink-code-html",staticClass:"html"},[t._v("\n            "+t._s(t.flex_shrink_code_html)+"\n          ")]),t._v("\n          "),s("code",{ref:"flex-shrink-code-css",staticClass:"css"},[t._v("\n            "+t._s(t.flex_shrink_code_css)+"\n          ")]),t._v("\n        ")]),t._m(11)]),s("el-row",{staticStyle:{margin:"25px auto 0",width:"423px"}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("7af0")}})])],1),s("el-row",{staticStyle:{margin:"25px auto 0",width:"1000px"}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("2334")}})])],1),s("el-row",{staticStyle:{margin:"25px auto 0",width:"1000px"}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("9465")}})])],1)],1),s("div",{staticClass:"item",attrs:{id:"flex-basis"}},[t._m(12),s("el-row",{staticStyle:{margin:"25px auto 0",width:"629px"}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("5949")}}),s("p",{staticClass:"img-des"},[t._v("\n            flex-basis 控制元素的默认尺寸，然后再由其他 Flexbox\n            属性控制，可以覆盖 width 属性\n          ")])])],1),s("el-row",{staticStyle:{margin:"25px auto 0",width:"1000px"}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("0c9b")}}),s("p",{staticClass:"img-des"},[t._v("flex-basis 可以和 width 属性互换")])])],1),s("el-row",{staticStyle:{margin:"25px auto 0",width:"1000px"}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("dcdd")}}),s("p",{staticClass:"img-des"},[t._v("\n            flex-basis 是通过主轴 (main axis) 来影响元素尺寸的\n          ")])])],1)],1),s("div",{staticClass:"item",attrs:{id:"align-self"}},[t._m(13),s("el-table",{staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.alignSelfTableData,border:""}},[s("el-table-column",{attrs:{prop:"attributes",label:"属性",width:"150"}}),s("el-table-column",{attrs:{prop:"des",label:"描述"}})],1),s("el-row",{staticStyle:{margin:"25px auto 0",width:"420px"}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("9c4d")}}),s("el-table",{staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.alignSelfImgDesTableData}},[s("el-table-column",{attrs:{prop:"attributes",label:"元素",width:"80"}}),s("el-table-column",{attrs:{prop:"des",label:"css"}})],1)],1)],1),s("el-row",{staticStyle:{margin:"25px auto 0",width:"1000px"}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a("c38e")}})])],1)],1)])],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"cankao"},[t._v("\n      参考\n      "),a("a",{attrs:{href:"http://css.doyoe.com/properties/flex/index.htm",target:"_blank"}},[t._v("css 手册")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"cankao"},[t._v("\n      目录 \n      "),a("a",{attrs:{href:"#flex-direction"}},[t._v("flex-direction")]),t._v("  \n      "),a("a",{attrs:{href:"#flex-wrap"}},[t._v("flex-wrap")]),t._v("  \n      "),a("a",{attrs:{href:"#justify-content"}},[t._v("justify-content")]),t._v("  \n      "),a("a",{attrs:{href:"#align-items"}},[t._v("align-items")]),t._v("  \n      "),a("a",{attrs:{href:"#align-content"}},[t._v("align-content")]),t._v("  \n      "),a("a",{attrs:{href:"#order"}},[t._v("order")]),t._v("  \n      "),a("a",{attrs:{href:"#flex-grow"}},[t._v("flex-grow")]),t._v("  \n      "),a("a",{attrs:{href:"#flex-shrink"}},[t._v("flex-shrink")]),t._v("  \n      "),a("a",{attrs:{href:"#flex-basis"}},[t._v("flex-basis")]),t._v("  \n      "),a("a",{attrs:{href:"#align-self"}},[t._v("align-self")]),t._v("  \n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"label"},[t._v("flex-direction :")]),a("span",[t._v("设置或检索伸缩盒对象的子元素在父容器中的位置")]),a("span",{staticClass:"label sub"},[t._v("默认值 :")]),a("span",[t._v("row")]),a("span",{staticClass:"label sub"},[t._v("适用于 :")]),a("span",[t._v("flex 容器")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"label"},[t._v("flex-wrap :")]),a("span",[t._v("设置或检索伸缩盒对象的子元素超出父容器时是否换行")]),a("span",{staticClass:"label sub"},[t._v("默认值 :")]),a("span",[t._v("nowrap")]),a("span",{staticClass:"label sub"},[t._v("适用于 :")]),a("span",[t._v("flex 容器")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"label"},[t._v("justify-content :")]),a("span",[t._v("设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式")]),a("span",{staticClass:"label sub"},[t._v("默认值 :")]),a("span",[t._v("flex-start")]),a("span",{staticClass:"label sub"},[t._v("适用于 :")]),a("span",[t._v("flex 容器")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"label"},[t._v("align-items :")]),a("span",[t._v("设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式")]),a("span",{staticClass:"label sub"},[t._v("默认值 :")]),a("span",[t._v("stretch")]),a("span",{staticClass:"label sub"},[t._v("适用于 :")]),a("span",[t._v("flex 容器")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"label"},[t._v("align-content :")]),a("span",[t._v("设置或检索弹性盒堆叠伸缩行的对齐方式")]),a("span",{staticClass:"label sub"},[t._v("默认值 :")]),a("span",[t._v("stretch")]),a("span",{staticClass:"label sub"},[t._v("适用于 :")]),a("span",[t._v("多行的弹性盒模型容器")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"label"},[t._v("order :")]),a("span",[t._v("设置或检索伸缩盒对象的子元素出現的順序")]),a("span",{staticClass:"label sub"},[t._v("默认值 :")]),a("span",[t._v("0")]),a("span",{staticClass:"label sub"},[t._v("适用于 :")]),a("span",[t._v("flex子项和flex容器中的绝对定位子元素")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"label"},[t._v("flex-grow :")]),a("span",[t._v("设置或检索弹性盒的扩展比率")]),a("span",{staticClass:"label sub"},[t._v("默认值 :")]),a("span",[t._v("0")]),a("span",{staticClass:"label sub"},[t._v("适用于 :")]),a("span",[t._v("flex子项")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"note"},[t._v("\n          flex-grow的默认值为0，如果没有显示定义该属性，是不会拥有分配剩余空间权利的。"),a("br"),t._v("\n          本例中b,c两项都显式的定义了flex-grow，flex容器的剩余空间分成了4份，其中b占1份，c占3分，即1:3"),a("br"),t._v("\n          flex容器的剩余空间长度为：600-200-50-50=300px，所以最终a,b,c的长度分别为："),a("br"),t._v("\n          a: 50+(300/4)=200px"),a("br"),t._v("\n          b: 50+(300/4*1)=125px"),a("br"),t._v("\n          c: 50+(300/4*3)=275px\n        ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"label"},[t._v("flex-shrink :")]),a("span",[t._v("设置或检索弹性盒的收缩比率（与flex-grow相反）")]),a("span",{staticClass:"label sub"},[t._v("默认值 :")]),a("span",[t._v("1")]),a("span",{staticClass:"label sub"},[t._v("适用于 :")]),a("span",[t._v("flex子项")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"note"},[t._v("\n          flex-shrink的默认值为1，如果没有显示定义该属性，将会自动按照默认值1在所有因子相加之后计算比率来进行空间收缩。"),a("br"),t._v("\n          本例中c显式的定义了flex-shrink，a,b没有显式定义，但将根据默认值1来计算，可以看到总共将剩余空间分成了5份，其中a占1份，b占1份，c占3分，即1:1:3"),a("br"),t._v("\n          我们可以看到父容器定义为400px，子项被定义为200px，相加之后即为600px，超出父容器200px。那么这么超出的200px需要被a,b,c消化"),a("br"),t._v("\n          通过收缩因子，所以加权综合可得200*1+200*1+200*3=1000px；"),a("br"),t._v("\n          于是我们可以计算a,b,c将被移除的溢出量是多少："),a("br"),t._v("\n          a被移除溢出量：(200*1/1000)*200，即约等于40px"),a("br"),t._v("\n          b被移除溢出量：(200*1/1000)*200，即约等于40px"),a("br"),t._v("\n          c被移除溢出量：(200*3/1000)*200，即约等于120px"),a("br"),t._v("\n          最后a,b,c的实际宽度分别为：200-40=160px, 200-40=160px, 200-120=80px\n        ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"label"},[t._v("flex-basis :")]),a("span",[t._v("设置或检索弹性盒伸缩基准值")]),a("span",{staticClass:"label sub"},[t._v("默认值 :")]),a("span",[t._v("auto")]),a("span",{staticClass:"label sub"},[t._v("适用于 :")]),a("span",[t._v("flex子项")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"label"},[t._v("align-self :")]),a("span",[t._v("设置或检索弹性盒子元素自身在侧轴（纵轴）方向上的对齐方式")]),a("span",{staticClass:"label sub"},[t._v("默认值 :")]),a("span",[t._v("auto")]),a("span",{staticClass:"label sub"},[t._v("适用于 :")]),a("span",[t._v("flex子项")])])}],r=(a("6b54"),{name:"flexbox",data:function(){return{parrentform:{height:0,flex_direction:"row",flex_wrap:"nowrap",justify_content:"flex-start",align_items:"stretch",align_content:"stretch"},child_num:30,child_width:30,child:[],flexGrowTableData:[{attributes:"row",des:"主轴与行内轴方向作为默认的书写模式。即横向从左到右排列（左对齐）"},{attributes:"row-reverse",des:"对齐方式与row相反"},{attributes:"column",des:"主轴与块轴方向作为默认的书写模式。即纵向从上往下排列（顶对齐）"},{attributes:"column-reverse",des:"对齐方式与column相反"}],flexWrapTableData:[{attributes:"nowrap",des:"flex容器为单行。该情况下flex子项可能会溢出容器"},{attributes:"wrap",des:"flex容器为多行。该情况下flex子项溢出的部分会被放置到新行，子项内部会发生断行"},{attributes:"wrap-reverse",des:"反转 wrap 排列"}],justifyContentTableData:[{attributes:"flex-start",des:"弹性盒子元素将向行起始位置对齐。该行的第一个子元素的主起始位置的边界将与该行的主起始位置的边界对齐，同时所有后续的伸缩盒项目与其前一个项目对齐"},{attributes:"flex-end",des:"弹性盒子元素将向行结束位置对齐。该行的第一个子元素的主结束位置的边界将与该行的主结束位置的边界对齐，同时所有后续的伸缩盒项目与其前一个项目对齐"},{attributes:"center",des:"弹性盒子元素将向行中间位置对齐。该行的子元素将相互对齐并在行中居中对齐，同时第一个元素与行的主起始位置的边距等同与最后一个元素与行的主结束位置的边距（如果剩余空间是负数，则保持两端相等长度的溢出）"},{attributes:"space-between",des:'弹性盒子元素会平均地分布在行里。如果最左边的剩余空间是负数，或该行只有一个子元素，则该值等效于"flex-start"。在其它情况下，第一个元素的边界与行的主起始位置的边界对齐，同时最后一个元素的边界与行的主结束位置的边距对齐，而剩余的伸缩盒项目则平均分布，并确保两两之间的空白空间相等'},{attributes:"space-around",des:'弹性盒子元素会平均地分布在行里，两端保留子元素与子元素之间间距大小的一半。如果最左边的剩余空间是负数，或该行只有一个伸缩盒项目，则该值等效于"center"。在其它情况下，伸缩盒项目则平均分布，并确保两两之间的空白空间相等，同时第一个元素前的空间以及最后一个元素后的空间为其他空白空间的一半'}],alignItemsTableData:[{attributes:"flex-start",des:"弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界"},{attributes:"flex-end",des:"弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界"},{attributes:"center",des:"弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）"},{attributes:"baseline",des:'如弹性盒子元素的行内轴与侧轴为同一条，则该值与"flex-start"等效。其它情况下，该值将参与基线对齐'},{attributes:"stretch",des:'如果指定侧轴大小的属性值为"auto"，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照"min/max-width/height"属性的限制'}],alignContentTableData:[{attributes:"flex-start",des:"各行向弹性盒容器的起始位置堆叠。弹性盒容器中第一行的侧轴起始边界紧靠住该弹性盒容器的侧轴起始边界，之后的每一行都紧靠住前面一行"},{attributes:"flex-end",des:"各行向弹性盒容器的结束位置堆叠。弹性盒容器中最后一行的侧轴起结束界紧靠住该弹性盒容器的侧轴结束边界，之后的每一行都紧靠住前面一行"},{attributes:"center",des:"各行向弹性盒容器的中间位置堆叠。各行两两紧靠住同时在弹性盒容器中居中对齐，保持弹性盒容器的侧轴起始内容边界和第一行之间的距离与该容器的侧轴结束内容边界与第最后一行之间的距离相等。（如果剩下的空间是负数，则各行会向两个方向溢出的相等距离。）"},{attributes:"space-between",des:'各行在弹性盒容器中平均分布。如果剩余的空间是负数或弹性盒容器中只有一行，该值等效于"flex-start"。在其它情况下，第一行的侧轴起始边界紧靠住弹性盒容器的侧轴起始内容边界，最后一行的侧轴结束边界紧靠住弹性盒容器的侧轴结束内容边界，剩余的行则按一定方式在弹性盒窗口中排列，以保持两两之间的空间相等'},{attributes:"space-around",des:'各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。如果剩余的空间是负数或弹性盒容器中只有一行，该值等效于"center"。在其它情况下，各行会按一定方式在弹性盒容器中排列，以保持两两之间的空间相等，同时第一行前面及最后一行后面的空间是其他空间的一半'},{attributes:"stretch",des:'各行将会伸展以占用剩余的空间。如果剩余的空间是负数，该值等效于"flex-start"。在其它情况下，剩余空间被所有行平分，以扩大它们的侧轴尺寸'}],alignSelfTableData:[{attributes:"auto",des:'如果"align-self"的值为"auto"，则其计算值为元素的父元素的"align-items"值，如果其没有父元素，则计算值为"stretch"'},{attributes:"flex-start",des:"弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界"},{attributes:"flex-end",des:"弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界"},{attributes:"center",des:"弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）"},{attributes:"baseline",des:'如弹性盒子元素的行内轴与侧轴为同一条，则该值与"flex-start"等效。其它情况下，该值将参与基线对齐'},{attributes:"stretch",des:'如果指定侧轴大小的属性值为"auto"，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照"min/max-width/height"属性的限制'}],alignSelfImgDesTableData:[{attributes:"a",des:"align-self: flex-end"},{attributes:"b",des:"align-self: center"},{attributes:"c",des:"align-self: flex-start"},{attributes:"d",des:"align-self: baseline; padding: 20px 10px"},{attributes:"e",des:"align-self: baseline"},{attributes:"f",des:"align-self: stretch"},{attributes:"g",des:"align-self: auto"}],flex_grow_code_html:'\n<ul class="flex">\n  <li>a</li>\n  <li>b</li>\n  <li>c</li>\n</ul>',flex_grow_code_css:"\n.flex{display:flex;width:600px;margin:0;padding:0;list-style:none;}\n.flex li {text-align:center;height:100px;}\n.flex li:nth-child(1){width:200px;background-color:green;}\n.flex li:nth-child(2){flex-grow:1;width:50px;background-color:yellow;}\n.flex li:nth-child(3){flex-grow:3;width:50px;background-color:red;}",flex_shrink_code_html:'\n<ul class="flex">\n  <li>a</li>\n  <li>b</li>\n  <li>c</li>\n</ul>',flex_shrink_code_css:"\n.flex{display:-webkit-flex;display:flex;width:400px;margin:0;padding:0;list-style:none;}\n.flex li{width:200px;}\n.flex li:nth-child(1){background:#888;}\n.flex li:nth-child(2){background:#ccc;}\n.flex li:nth-child(3){-webkit-flex-shrink:3;flex-shrink:3;background:#aaa;}"}},mounted:function(){for(var t=0;t<this.child_num/10;t++)this.child.push({key:(new Date).getTime()+Math.random(),height:50,order:50,flex_grow:0,flex_shrink:1,flex_basis:0,align_self:"auto"});this.hljs.highlightBlock(this.$refs["flex-grow-code-html"]),this.hljs.highlightBlock(this.$refs["flex-grow-code-css"]),this.hljs.highlightBlock(this.$refs["flex-shrink-code-html"]),this.hljs.highlightBlock(this.$refs["flex-shrink-code-css"])},methods:{formatTen:function(t){return t/10},formatOrder:function(t){var e=(t-50)/10;return e.toString()},formatHeight:function(t){return 0===t?"auto":t+"px"},formaParrenttHeight:function(t){return 0===t?"auto":5*t+"px"},formatFlexBasis:function(t){return 0===t?"auto":10*t+"px"}},watch:{child_num:function(t,e){if(t!==e)if(t>e)for(var a=0;a<(t-e)/10;a++)this.child.push({key:(new Date).getTime()+Math.random(),height:50,order:50,flex_grow:0,flex_shrink:1,flex_basis:0,align_self:"auto"});else for(var s=0;s<(e-t)/10;s++)this.child.pop()}}}),i=r,n=(a("5857"),a("2877")),o=Object(n["a"])(i,s,l,!1,null,"5b5c04b9",null);e["default"]=o.exports},"0a01":function(t,e,a){t.exports=a.p+"img/flex4.37941b85.gif"},"0bfb":function(t,e,a){"use strict";var s=a("cb7c");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0c9b":function(t,e,a){t.exports=a.p+"img/flex20.3ce5f872.gif"},"0f68":function(t,e,a){},2334:function(t,e,a){t.exports=a.p+"img/flex18.17c9eafd.gif"},"292a":function(t,e,a){t.exports=a.p+"img/flex11.0d379aa5.png"},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"401f":function(t,e,a){t.exports=a.p+"img/flex15.7417d3f4.gif"},"425d":function(t,e,a){t.exports=a.p+"img/flex13.84c49bc9.png"},4812:function(t,e,a){t.exports=a.p+"img/flex8.3efa3ac7.gif"},5857:function(t,e,a){"use strict";var s=a("0f68"),l=a.n(s);l.a},"58f0":function(t,e,a){t.exports=a.p+"img/flex9.fad20684.png"},5949:function(t,e,a){t.exports=a.p+"img/flex22.c80a62ff.png"},"65ba":function(t,e){t.exports="data:image/png;base64,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"},"6b54":function(t,e,a){"use strict";a("3846");var s=a("cb7c"),l=a("0bfb"),r=a("9e1e"),i="toString",n=/./[i],o=function(t){a("2aba")(RegExp.prototype,i,t,!0)};a("79e5")(function(){return"/a/b"!=n.call({source:"a",flags:"b"})})?o(function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?l.call(t):void 0)}):n.name!=i&&o(function(){return n.call(this)})},"7af0":function(t,e,a){t.exports=a.p+"img/flex17.4f3cab76.gif"},8917:function(t,e,a){t.exports=a.p+"img/flex5.3abda8bd.gif"},"8b0b":function(t,e,a){t.exports=a.p+"img/flex12.1f6b3464.png"},9465:function(t,e,a){t.exports=a.p+"img/flex19.993bfd9a.gif"},"97e4":function(t,e,a){t.exports=a.p+"img/flex6.0b94e97c.gif"},"9c4d":function(t,e,a){t.exports=a.p+"img/flex23.7baf4b72.png"},"9e0f":function(t,e,a){t.exports=a.p+"img/flex16.4cc2edd3.gif"},c38e:function(t,e,a){t.exports=a.p+"img/flex24.0ba6e5ac.gif"},dcdd:function(t,e,a){t.exports=a.p+"img/flex21.4975bbed.gif"},fdfd:function(t,e,a){t.exports=a.p+"img/flex10.75833a51.gif"}}]);
//# sourceMappingURL=chunk-3daa2464.88937d45.js.map