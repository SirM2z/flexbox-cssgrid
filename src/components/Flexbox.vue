<template>
  <div class="flexbox">
    <el-row>
      <el-col :span="8">
        <h3>父容器</h3>
        <el-form
          ref="parrentform"
          :model="parrentform"
          label-width="100px"
          class="parrentform"
        >
          <el-form-item label="height">
            <el-slider
              v-model="parrentform.height"
              :format-tooltip="formaParrenttHeight"
              :step="10"
            ></el-slider>
          </el-form-item>
          <el-form-item label="flex-direction">
            <el-select
              v-model="parrentform.flex_direction"
              placeholder="flex-direction"
            >
              <el-option label="row" value="row"></el-option>
              <el-option label="row-reverse" value="row-reverse"></el-option>
              <el-option label="column" value="column"></el-option>
              <el-option
                label="column-reverse"
                value="column-reverse"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="flex-wrap">
            <el-select v-model="parrentform.flex_wrap" placeholder="flex-wrap">
              <el-option label="nowrap" value="nowrap"></el-option>
              <el-option label="wrap" value="wrap"></el-option>
              <el-option label="wrap-reverse" value="wrap-reverse"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="justify-content">
            <el-select
              v-model="parrentform.justify_content"
              placeholder="justify-content"
            >
              <el-option label="flex-start" value="flex-start"></el-option>
              <el-option label="flex-end" value="flex-end"></el-option>
              <el-option label="center" value="center"></el-option>
              <el-option
                label="space-between"
                value="space-between"
              ></el-option>
              <el-option label="space-around" value="space-around"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="align-items">
            <el-select
              v-model="parrentform.align_items"
              placeholder="align-items"
            >
              <el-option label="flex-start" value="flex-start"></el-option>
              <el-option label="flex-end" value="flex-end"></el-option>
              <el-option label="center" value="center"></el-option>
              <el-option label="baseline" value="baseline"></el-option>
              <el-option label="stretch" value="stretch"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="align-content">
            <el-select
              v-model="parrentform.align_content"
              placeholder="align-content"
            >
              <el-option label="flex-start" value="flex-start"></el-option>
              <el-option label="flex-end" value="flex-end"></el-option>
              <el-option label="center" value="center"></el-option>
              <el-option
                label="space-between"
                value="space-between"
              ></el-option>
              <el-option label="space-around" value="space-around"></el-option>
              <el-option label="stretch" value="stretch"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <h3>子元素</h3>
        <el-form ref="childform" label-width="50px" class="childform">
          <el-form-item label="数量">
            <el-slider
              v-model="child_num"
              :min="parseInt(10)"
              :format-tooltip="formatTen"
              :step="10"
            ></el-slider>
          </el-form-item>
          <el-form-item label="宽度">
            <el-slider v-model="child_width" :min="parseInt(10)"></el-slider>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="16">
        <div class="main-content">
          <div
            class="flex-parrent"
            :style="{
              display: 'flex',
              height:
                parrentform.height == 0
                  ? 'auto'
                  : parrentform.height * 5 + 'px',
              flexDirection: parrentform.flex_direction,
              flexWrap: parrentform.flex_wrap,
              justifyContent: parrentform.justify_content,
              alignItems: parrentform.align_items,
              alignContent: parrentform.align_content
            }"
          >
            <div
              v-for="(item, index) in child"
              :key="item.key"
              class="flex-child"
              :style="{
                width: child_width + '%',
                height: item.height == 0 ? 'auto' : item.height + 'px',
                flexGrow: item.flex_grow / 10,
                flexShrink: item.flex_shrink / 10,
                flexBasis:
                  item.flex_basis == 0 ? 'auto' : item.flex_basis * 10 + 'px',
                alignSelf: item.align_self,
                order: (item.order - 50) / 10
              }"
            >
              child {{ index }}
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="clearfix">
      <h3>子元素配置</h3>
      <div v-for="(item, index) in child" :key="item.key" class="child-conf">
        <h4>child {{ index }}</h4>
        <el-row>
          <el-col :span="9" class="label">height</el-col>
          <el-col :span="15"
            ><el-slider
              v-model="item.height"
              :format-tooltip="formatHeight"
              :step="10"
            ></el-slider
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="9" class="label">order</el-col>
          <el-col :span="15"
            ><el-slider
              v-model="item.order"
              :format-tooltip="formatOrder"
              :step="10"
            ></el-slider
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="9" class="label">flex-grow</el-col>
          <el-col :span="15"
            ><el-slider
              v-model="item.flex_grow"
              :format-tooltip="formatTen"
              :step="10"
            ></el-slider
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="9" class="label">flex-shrink</el-col>
          <el-col :span="15"
            ><el-slider
              v-model="item.flex_shrink"
              :min="parseInt(10)"
              :format-tooltip="formatTen"
              :step="10"
            ></el-slider
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="9" class="label">flex-basis</el-col>
          <el-col :span="15"
            ><el-slider
              v-model="item.flex_basis"
              :max="parseInt(50)"
              :format-tooltip="formatFlexBasis"
              :step="10"
            ></el-slider
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="9" class="label">align-self</el-col>
          <el-col :span="15">
            <el-select v-model="item.align_self" placeholder="align-self">
              <el-option label="auto" value="auto"></el-option>
              <el-option label="flex-start" value="flex-start"></el-option>
              <el-option label="flex-end" value="flex-end"></el-option>
              <el-option label="center" value="center"></el-option>
              <el-option label="baseline" value="baseline"></el-option>
              <el-option label="stretch" value="stretch"></el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
    </el-row>
    <div class="des">
      <h3>属性描述</h3>
      <p class="cankao">
        参考
        <a href="http://css.doyoe.com/properties/flex/index.htm" target="_blank"
          >css 手册</a
        >
      </p>
      <p class="cankao">
        目录&nbsp;
        <a href="#flex-direction">flex-direction</a>&nbsp;&nbsp;
        <a href="#flex-wrap">flex-wrap</a>&nbsp;&nbsp;
        <a href="#justify-content">justify-content</a>&nbsp;&nbsp;
        <a href="#align-items">align-items</a>&nbsp;&nbsp;
        <a href="#align-content">align-content</a>&nbsp;&nbsp;
        <a href="#order">order</a>&nbsp;&nbsp;
        <a href="#flex-grow">flex-grow</a>&nbsp;&nbsp;
        <a href="#flex-shrink">flex-shrink</a>&nbsp;&nbsp;
        <a href="#flex-basis">flex-basis</a>&nbsp;&nbsp;
        <a href="#align-self">align-self</a>&nbsp;&nbsp;
      </p>
      <p class="cankao">
        flex: 0 ( flex-grow ) 1 ( flex-shrink ) auto ( flex-basis ); 默认值-(
        属性 )
      </p>
      <p class="cankao">
        flex-basis 控制着元素在沿着主轴上 grow 和 shrik 之前最终能够变化多大
      </p>
      <p class="cankao">
        flex-grow 决定了他将与兄弟元素成比例的增长多少， flex-shrink
        决定了缩小多少
      </p>
      <div class="item" id="flex-direction">
        <div>
          <span class="label">flex-direction :</span
          ><span>设置或检索伸缩盒对象的子元素在父容器中的位置</span>
          <span class="label sub">默认值 :</span><span>row</span>
          <span class="label sub">适用于 :</span><span>flex 容器</span>
        </div>
        <el-table
          class="table"
          :data="flexGrowTableData"
          border
          style="width: 100%"
        >
          <el-table-column prop="attributes" label="属性" width="150">
          </el-table-column>
          <el-table-column prop="des" label="描述"> </el-table-column>
        </el-table>
        <el-row style="marginTop:25px;">
          <el-col :span="10" :offset="1">
            <el-card :body-style="{ padding: '0px' }">
              <img src="~@/assets/images/flex4.gif" class="image" />
            </el-card>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-card :body-style="{ padding: '0px' }">
              <img src="~@/assets/images/flex5.gif" class="image" />
            </el-card>
          </el-col>
        </el-row>
        <el-row style="margin:25px auto 0;width:1000px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~@/assets/images/flex10.gif" class="image" />
          </el-card>
        </el-row>
      </div>
      <div class="item" id="flex-wrap">
        <div>
          <span class="label">flex-wrap :</span
          ><span>设置或检索伸缩盒对象的子元素超出父容器时是否换行</span>
          <span class="label sub">默认值 :</span><span>nowrap</span>
          <span class="label sub">适用于 :</span><span>flex 容器</span>
        </div>
        <el-table
          class="table"
          :data="flexWrapTableData"
          border
          style="width: 100%"
        >
          <el-table-column prop="attributes" label="属性" width="150">
          </el-table-column>
          <el-table-column prop="des" label="描述"> </el-table-column>
        </el-table>
        <el-row style="margin:25px auto 0;width:815px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~@/assets/images/flex13.png" class="image" />
          </el-card>
        </el-row>
      </div>
      <div class="item" id="justify-content">
        <div>
          <span class="label">justify-content :</span
          ><span>设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式</span>
          <span class="label sub">默认值 :</span><span>flex-start</span>
          <span class="label sub">适用于 :</span><span>flex 容器</span>
        </div>
        <el-table
          class="table"
          :data="justifyContentTableData"
          border
          style="width: 100%"
        >
          <el-table-column prop="attributes" label="属性" width="150">
          </el-table-column>
          <el-table-column prop="des" label="描述"> </el-table-column>
        </el-table>
        <el-row style="margin:25px auto 0;width:1000px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~@/assets/images/flex6.gif" class="image" />
          </el-card>
        </el-row>
      </div>
      <div class="item" id="align-items">
        <div>
          <span class="label">align-items :</span
          ><span>设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式</span>
          <span class="label sub">默认值 :</span><span>stretch</span>
          <span class="label sub">适用于 :</span><span>flex 容器</span>
        </div>
        <el-table
          class="table"
          :data="alignItemsTableData"
          border
          style="width: 100%"
        >
          <el-table-column prop="attributes" label="属性" width="150">
          </el-table-column>
          <el-table-column prop="des" label="描述"> </el-table-column>
        </el-table>
        <el-row style="marginTop:25px;">
          <el-col :span="10" :offset="1">
            <el-card :body-style="{ padding: '0px' }">
              <img src="~@/assets/images/flex8.gif" class="image" />
              <p class="img-des">
                align-items: stretch 时每个 子元素 的 height 必须为 auto 否则
                height 属性会覆盖 stretch 的效果
              </p>
            </el-card>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-card :body-style="{ padding: '0px' }">
              <img src="~@/assets/images/flex9.png" class="image" />
              <p class="img-des">
                如果 div 内没有内容，或者子标签内没有内容，将按照每个 div
                的底部对齐
              </p>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="margin:25px auto 0;width:940px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~@/assets/images/flex11.png" class="image" />
          </el-card>
        </el-row>
      </div>
      <div class="item" id="align-content">
        <div>
          <span class="label">align-content :</span
          ><span>设置或检索弹性盒堆叠伸缩行的对齐方式</span>
          <span class="label sub">默认值 :</span><span>stretch</span>
          <span class="label sub">适用于 :</span
          ><span>多行的弹性盒模型容器</span>
        </div>
        <el-table
          class="table"
          :data="alignContentTableData"
          border
          style="width: 100%"
        >
          <el-table-column prop="attributes" label="属性" width="150">
          </el-table-column>
          <el-table-column prop="des" label="描述"> </el-table-column>
        </el-table>
        <el-row style="margin:25px auto 0;width:1055px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~@/assets/images/flex12.png" class="image" />
            <p class="img-des">
              flex-wrap 需设为 wrap, 且数量超出一行,
              父容器的高度相对于子容器有多余，才能看到效果
            </p>
          </el-card>
        </el-row>
      </div>
      <div class="item" id="order">
        <div>
          <span class="label">order :</span
          ><span>设置或检索伸缩盒对象的子元素出現的順序</span>
          <span class="label sub">默认值 :</span><span>0</span>
          <span class="label sub">适用于 :</span
          ><span>flex子项和flex容器中的绝对定位子元素</span>
        </div>
        <el-row style="margin:25px auto 0;width:545px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~@/assets/images/flex14.png" class="image" />
            <p class="img-des">
              用整数值来定义排列顺序，数值小的排在前面。可以为负值
            </p>
          </el-card>
        </el-row>
      </div>
      <div class="item" id="flex-grow">
        <div>
          <span class="label">flex-grow :</span
          ><span>设置或检索弹性盒的扩展比率</span>
          <span class="label sub">默认值 :</span><span>0</span>
          <span class="label sub">适用于 :</span><span>flex子项</span>
        </div>
        <div class="flex-grow-code">
          <pre class="clearfix">
            <code class="html" ref="flex-grow-code-html">
              {{flex_grow_code_html}}
            </code>
            <code class="css" ref="flex-grow-code-css">
              {{flex_grow_code_css}}
            </code>
          </pre>
          <p class="note">
            flex-grow的默认值为0，如果没有显示定义该属性，是不会拥有分配剩余空间权利的。<br />
            本例中b,c两项都显式的定义了flex-grow，flex容器的剩余空间分成了4份，其中b占1份，c占3分，即1:3<br />
            flex容器的剩余空间长度为：600-200-50-50=300px，所以最终a,b,c的长度分别为：<br />
            a: 50+(300/4)=200px<br />
            b: 50+(300/4*1)=125px<br />
            c: 50+(300/4*3)=275px
          </p>
        </div>
        <el-row style="margin:25px auto 0;width:616px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~@/assets/images/flex15.gif" class="image" />
          </el-card>
        </el-row>
        <el-row style="margin:25px auto 0;width:1000px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~@/assets/images/flex16.gif" class="image" />
          </el-card>
        </el-row>
      </div>
      <div class="item" id="flex-shrink">
        <div>
          <span class="label">flex-shrink :</span
          ><span>设置或检索弹性盒的收缩比率（与flex-grow相反）</span>
          <span class="label sub">默认值 :</span><span>1</span>
          <span class="label sub">适用于 :</span><span>flex子项</span>
        </div>
        <div class="flex-grow-code">
          <pre class="clearfix">
            <code class="html" ref="flex-shrink-code-html">
              {{flex_shrink_code_html}}
            </code>
            <code class="css" ref="flex-shrink-code-css">
              {{flex_shrink_code_css}}
            </code>
          </pre>
          <p class="note">
            flex-shrink的默认值为1，如果没有显示定义该属性，将会自动按照默认值1在所有因子相加之后计算比率来进行空间收缩。<br />
            本例中c显式的定义了flex-shrink，a,b没有显式定义，但将根据默认值1来计算，可以看到总共将剩余空间分成了5份，其中a占1份，b占1份，c占3分，即1:1:3<br />
            我们可以看到父容器定义为400px，子项被定义为200px，相加之后即为600px，超出父容器200px。那么这么超出的200px需要被a,b,c消化<br />
            通过收缩因子，所以加权综合可得200*1+200*1+200*3=1000px；<br />
            于是我们可以计算a,b,c将被移除的溢出量是多少：<br />
            a被移除溢出量：(200*1/1000)*200，即约等于40px<br />
            b被移除溢出量：(200*1/1000)*200，即约等于40px<br />
            c被移除溢出量：(200*3/1000)*200，即约等于120px<br />
            最后a,b,c的实际宽度分别为：200-40=160px, 200-40=160px, 200-120=80px
          </p>
        </div>
        <el-row style="margin:25px auto 0;width:423px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~@/assets/images/flex17.gif" class="image" />
          </el-card>
        </el-row>
        <el-row style="margin:25px auto 0;width:1000px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~@/assets/images/flex18.gif" class="image" />
          </el-card>
        </el-row>
        <el-row style="margin:25px auto 0;width:1000px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~@/assets/images/flex19.gif" class="image" />
          </el-card>
        </el-row>
      </div>
      <div class="item" id="flex-basis">
        <div>
          <span class="label">flex-basis :</span
          ><span>设置或检索弹性盒伸缩基准值</span>
          <span class="label sub">默认值 :</span><span>auto</span>
          <span class="label sub">适用于 :</span><span>flex子项</span>
        </div>
        <el-row style="margin:25px auto 0;width:629px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~@/assets/images/flex22.png" class="image" />
            <p class="img-des">
              flex-basis 控制元素的默认尺寸，然后再由其他 Flexbox
              属性控制，可以覆盖 width 属性
            </p>
          </el-card>
        </el-row>
        <el-row style="margin:25px auto 0;width:1000px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~@/assets/images/flex20.gif" class="image" />
            <p class="img-des">flex-basis 可以和 width 属性互换</p>
          </el-card>
        </el-row>
        <el-row style="margin:25px auto 0;width:1000px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~@/assets/images/flex21.gif" class="image" />
            <p class="img-des">
              flex-basis 是通过主轴 (main axis) 来影响元素尺寸的
            </p>
          </el-card>
        </el-row>
      </div>
      <div class="item" id="align-self">
        <div>
          <span class="label">align-self :</span
          ><span>设置或检索弹性盒子元素自身在侧轴（纵轴）方向上的对齐方式</span>
          <span class="label sub">默认值 :</span><span>auto</span>
          <span class="label sub">适用于 :</span><span>flex子项</span>
        </div>
        <el-table
          class="table"
          :data="alignSelfTableData"
          border
          style="width: 100%"
        >
          <el-table-column prop="attributes" label="属性" width="150">
          </el-table-column>
          <el-table-column prop="des" label="描述"> </el-table-column>
        </el-table>
        <el-row style="margin:25px auto 0;width:420px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~@/assets/images/flex23.png" class="image" />
            <el-table
              class="table"
              :data="alignSelfImgDesTableData"
              style="width: 100%"
            >
              <el-table-column prop="attributes" label="元素" width="80">
              </el-table-column>
              <el-table-column prop="des" label="css"> </el-table-column>
            </el-table>
          </el-card>
        </el-row>
        <el-row style="margin:25px auto 0;width:1000px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="~@/assets/images/flex24.gif" class="image" />
          </el-card>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "flexbox",
  data() {
    return {
      parrentform: {
        height: 0,
        flex_direction: "row",
        flex_wrap: "nowrap",
        justify_content: "flex-start",
        align_items: "stretch",
        align_content: "stretch"
      },
      child_num: 30,
      child_width: 30,
      child: [],
      flexGrowTableData: [
        {
          attributes: "row",
          des:
            "主轴与行内轴方向作为默认的书写模式。即横向从左到右排列（左对齐）"
        },
        {
          attributes: "row-reverse",
          des: "对齐方式与row相反"
        },
        {
          attributes: "column",
          des: "主轴与块轴方向作为默认的书写模式。即纵向从上往下排列（顶对齐）"
        },
        {
          attributes: "column-reverse",
          des: "对齐方式与column相反"
        }
      ],
      flexWrapTableData: [
        {
          attributes: "nowrap",
          des: "flex容器为单行。该情况下flex子项可能会溢出容器"
        },
        {
          attributes: "wrap",
          des:
            "flex容器为多行。该情况下flex子项溢出的部分会被放置到新行，子项内部会发生断行"
        },
        {
          attributes: "wrap-reverse",
          des: "反转 wrap 排列"
        }
      ],
      justifyContentTableData: [
        {
          attributes: "flex-start",
          des:
            "弹性盒子元素将向行起始位置对齐。该行的第一个子元素的主起始位置的边界将与该行的主起始位置的边界对齐，同时所有后续的伸缩盒项目与其前一个项目对齐"
        },
        {
          attributes: "flex-end",
          des:
            "弹性盒子元素将向行结束位置对齐。该行的第一个子元素的主结束位置的边界将与该行的主结束位置的边界对齐，同时所有后续的伸缩盒项目与其前一个项目对齐"
        },
        {
          attributes: "center",
          des:
            "弹性盒子元素将向行中间位置对齐。该行的子元素将相互对齐并在行中居中对齐，同时第一个元素与行的主起始位置的边距等同与最后一个元素与行的主结束位置的边距（如果剩余空间是负数，则保持两端相等长度的溢出）"
        },
        {
          attributes: "space-between",
          des:
            '弹性盒子元素会平均地分布在行里。如果最左边的剩余空间是负数，或该行只有一个子元素，则该值等效于"flex-start"。在其它情况下，第一个元素的边界与行的主起始位置的边界对齐，同时最后一个元素的边界与行的主结束位置的边距对齐，而剩余的伸缩盒项目则平均分布，并确保两两之间的空白空间相等'
        },
        {
          attributes: "space-around",
          des:
            '弹性盒子元素会平均地分布在行里，两端保留子元素与子元素之间间距大小的一半。如果最左边的剩余空间是负数，或该行只有一个伸缩盒项目，则该值等效于"center"。在其它情况下，伸缩盒项目则平均分布，并确保两两之间的空白空间相等，同时第一个元素前的空间以及最后一个元素后的空间为其他空白空间的一半'
        }
      ],
      alignItemsTableData: [
        {
          attributes: "flex-start",
          des:
            "弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界"
        },
        {
          attributes: "flex-end",
          des:
            "弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界"
        },
        {
          attributes: "center",
          des:
            "弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）"
        },
        {
          attributes: "baseline",
          des:
            '如弹性盒子元素的行内轴与侧轴为同一条，则该值与"flex-start"等效。其它情况下，该值将参与基线对齐'
        },
        {
          attributes: "stretch",
          des:
            '如果指定侧轴大小的属性值为"auto"，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照"min/max-width/height"属性的限制'
        }
      ],
      alignContentTableData: [
        {
          attributes: "flex-start",
          des:
            "各行向弹性盒容器的起始位置堆叠。弹性盒容器中第一行的侧轴起始边界紧靠住该弹性盒容器的侧轴起始边界，之后的每一行都紧靠住前面一行"
        },
        {
          attributes: "flex-end",
          des:
            "各行向弹性盒容器的结束位置堆叠。弹性盒容器中最后一行的侧轴起结束界紧靠住该弹性盒容器的侧轴结束边界，之后的每一行都紧靠住前面一行"
        },
        {
          attributes: "center",
          des:
            "各行向弹性盒容器的中间位置堆叠。各行两两紧靠住同时在弹性盒容器中居中对齐，保持弹性盒容器的侧轴起始内容边界和第一行之间的距离与该容器的侧轴结束内容边界与第最后一行之间的距离相等。（如果剩下的空间是负数，则各行会向两个方向溢出的相等距离。）"
        },
        {
          attributes: "space-between",
          des:
            '各行在弹性盒容器中平均分布。如果剩余的空间是负数或弹性盒容器中只有一行，该值等效于"flex-start"。在其它情况下，第一行的侧轴起始边界紧靠住弹性盒容器的侧轴起始内容边界，最后一行的侧轴结束边界紧靠住弹性盒容器的侧轴结束内容边界，剩余的行则按一定方式在弹性盒窗口中排列，以保持两两之间的空间相等'
        },
        {
          attributes: "space-around",
          des:
            '各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。如果剩余的空间是负数或弹性盒容器中只有一行，该值等效于"center"。在其它情况下，各行会按一定方式在弹性盒容器中排列，以保持两两之间的空间相等，同时第一行前面及最后一行后面的空间是其他空间的一半'
        },
        {
          attributes: "stretch",
          des:
            '各行将会伸展以占用剩余的空间。如果剩余的空间是负数，该值等效于"flex-start"。在其它情况下，剩余空间被所有行平分，以扩大它们的侧轴尺寸'
        }
      ],
      alignSelfTableData: [
        {
          attributes: "auto",
          des:
            '如果"align-self"的值为"auto"，则其计算值为元素的父元素的"align-items"值，如果其没有父元素，则计算值为"stretch"'
        },
        {
          attributes: "flex-start",
          des:
            "弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界"
        },
        {
          attributes: "flex-end",
          des:
            "弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界"
        },
        {
          attributes: "center",
          des:
            "弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）"
        },
        {
          attributes: "baseline",
          des:
            '如弹性盒子元素的行内轴与侧轴为同一条，则该值与"flex-start"等效。其它情况下，该值将参与基线对齐'
        },
        {
          attributes: "stretch",
          des:
            '如果指定侧轴大小的属性值为"auto"，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照"min/max-width/height"属性的限制'
        }
      ],
      alignSelfImgDesTableData: [
        {
          attributes: "a",
          des: "align-self: flex-end"
        },
        {
          attributes: "b",
          des: "align-self: center"
        },
        {
          attributes: "c",
          des: "align-self: flex-start"
        },
        {
          attributes: "d",
          des: "align-self: baseline; padding: 20px 10px"
        },
        {
          attributes: "e",
          des: "align-self: baseline"
        },
        {
          attributes: "f",
          des: "align-self: stretch"
        },
        {
          attributes: "g",
          des: "align-self: auto"
        }
      ],
      flex_grow_code_html: `
<ul class="flex">
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>`,
      flex_grow_code_css: `
.flex{display:flex;width:600px;margin:0;padding:0;list-style:none;}
.flex li {text-align:center;height:100px;}
.flex li:nth-child(1){width:200px;background-color:green;}
.flex li:nth-child(2){flex-grow:1;width:50px;background-color:yellow;}
.flex li:nth-child(3){flex-grow:3;width:50px;background-color:red;}`,
      flex_shrink_code_html: `
<ul class="flex">
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>`,
      flex_shrink_code_css: `
.flex{display:-webkit-flex;display:flex;width:400px;margin:0;padding:0;list-style:none;}
.flex li{width:200px;}
.flex li:nth-child(1){background:#888;}
.flex li:nth-child(2){background:#ccc;}
.flex li:nth-child(3){-webkit-flex-shrink:3;flex-shrink:3;background:#aaa;}`
    };
  },
  mounted() {
    for (let i = 0; i < this.child_num / 10; i++) {
      this.child.push({
        key: new Date().getTime() + Math.random(),
        height: 50,
        order: 50,
        flex_grow: 0,
        flex_shrink: 1,
        flex_basis: 0,
        align_self: "auto"
      });
    }
    this.hljs.highlightBlock(this.$refs["flex-grow-code-html"]);
    this.hljs.highlightBlock(this.$refs["flex-grow-code-css"]);
    this.hljs.highlightBlock(this.$refs["flex-shrink-code-html"]);
    this.hljs.highlightBlock(this.$refs["flex-shrink-code-css"]);
  },
  methods: {
    formatTen(val) {
      return val / 10;
    },
    formatOrder(val) {
      let res = (val - 50) / 10;
      return res.toString();
    },
    formatHeight(val) {
      if (val === 0) {
        return "auto";
      }
      return val + "px";
    },
    formaParrenttHeight(val) {
      if (val === 0) {
        return "auto";
      }
      return val * 5 + "px";
    },
    formatFlexBasis(val) {
      if (val === 0) {
        return "auto";
      }
      return val * 10 + "px";
    }
  },
  watch: {
    child_num: function(val, oldval) {
      if (val === oldval) return;
      if (val > oldval) {
        for (let i = 0; i < (val - oldval) / 10; i++) {
          this.child.push({
            key: new Date().getTime() + Math.random(),
            height: 50,
            order: 50,
            flex_grow: 0,
            flex_shrink: 1,
            flex_basis: 0,
            align_self: "auto"
          });
        }
      } else {
        for (let i = 0; i < (oldval - val) / 10; i++) {
          this.child.pop();
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-content {
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  padding: 20px;
  min-height: 500px;
}
.childform,
.parrentform {
  padding-right: 80px;
}
.flex-parrent {
  background-color: #e9e9e9;
}
.flex-parrent .flex-child {
  text-align: center;
  color: #fff;
}
.flex-parrent .flex-child:nth-of-type(2n) {
  background: rgba(0, 160, 233, 0.7);
}
.flex-parrent .flex-child:nth-of-type(2n + 1) {
  background: #00a0e9;
}
.child-conf {
  float: left;
  padding: 10px;
  width: 220px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  margin-right: 5px;
  margin-bottom: 5px;
  transition: all ease 1s;
}
.child-conf .label {
  height: 36px;
  line-height: 36px;
  color: #48576a;
}
.des .item {
  padding: 30px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
}
.des .cankao {
  margin-bottom: 20px;
}
.des .item:not(:last-of-type) {
  margin-bottom: 30px;
}
.des .item > div > span {
  padding: 10px 0;
  color: #48576a;
}
.des .item > div > span.label {
  padding-right: 10px;
  font-weight: bold;
}
.des .label.sub {
  padding-left: 20px;
}
.table {
  margin-top: 25px;
}
img.image {
  width: 100%;
}
.img-des {
  padding: 14px;
  line-height: 35px;
}
.flex-grow-code {
  width: 80%;
  margin: 20px auto;
}
.flex-grow-code > .note {
  margin: 10px 0 0;
  line-height: 35px;
}
.flex-grow-code > pre {
  display: flex;
  align-items: stretch;
}
.flex-grow-code > pre > code {
  width: 65%;
  margin-right: 2%;
}
.flex-grow-code > pre > code:first-of-type {
  width: 30%;
}
</style>
