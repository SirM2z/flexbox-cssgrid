<template>
  <div class="flexbox">
    <el-row>
      <el-col :span="8">
        <h3>父容器</h3>
        <el-form ref="parrentform" :model="parrentform" label-width="100px">
          <el-form-item label="flex-direction">
            <el-select v-model="parrentform.flex_direction" placeholder="flex-direction">
              <el-option label="row" value="row"></el-option>
              <el-option label="row-reverse" value="row-reverse"></el-option>
              <el-option label="column" value="column"></el-option>
              <el-option label="column-reverse" value="column-reverse"></el-option>
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
            <el-select v-model="parrentform.justify_content" placeholder="justify-content">
              <el-option label="flex-start" value="flex-start"></el-option>
              <el-option label="flex-end" value="flex-end"></el-option>
              <el-option label="center" value="center"></el-option>
              <el-option label="space-between" value="space-between"></el-option>
              <el-option label="space-around" value="space-around"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="align-items">
            <el-select v-model="parrentform.align_items" placeholder="align-items">
              <el-option label="flex-start" value="flex-start"></el-option>
              <el-option label="flex-end" value="flex-end"></el-option>
              <el-option label="center" value="center"></el-option>
              <el-option label="baseline" value="baseline"></el-option>
              <el-option label="stretch" value="stretch"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="align-content">
            <el-select v-model="parrentform.align_content" placeholder="align-content">
              <el-option label="flex-start" value="flex-start"></el-option>
              <el-option label="flex-end" value="flex-end"></el-option>
              <el-option label="center" value="center"></el-option>
              <el-option label="space-between" value="space-between"></el-option>
              <el-option label="space-around" value="space-around"></el-option>
              <el-option label="stretch" value="stretch"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <h3>子容器</h3>
        <el-form ref="childform" label-width="50px" class="childform">
          <el-form-item label="数量">
            <el-slider v-model="child_num" :min="parseInt(10)" :format-tooltip="formatTen" :step="10"></el-slider>
          </el-form-item>
          <el-form-item label="宽度">
            <el-slider v-model="child_width" :min="parseInt(10)"></el-slider>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="16">
        <div class="main-content">
          <div class="flex-parrent"
            :style="{
              display: 'flex',
              flexDirection: parrentform.flex_direction,
              flexWrap: parrentform.flex_wrap,
              justifyContent: parrentform.justify_content,
              alignItems: parrentform.align_items,
              alignContent: parrentform.align_content, }">
            <div v-for="(item, index) in child" class="flex-child"
              :style="{
                width: child_width + '%',
                height: item.height + 'px',
                lineHeight: item.height + 'px',
                flexGrow: item.flex_grow / 10,
                flexShrink: item.flex_shrink / 10,
                flexBasis: item.flex_basis == 0 ? 'auto' : item.flex_basis * 10 + 'px',
                alignSelf: item.align_self,
                order: (item.order - 50) / 10}">child {{index}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="clearfix">
      <h3>子容器配置</h3>
      <div v-for="(item, index) in child" class="child-conf">
        <h4>child {{index}}</h4>
        <el-row>
          <el-col :span="9" style="lineHeight:36px;">height</el-col>
          <el-col :span="15"><el-slider v-model="item.height" :min="parseInt(10)" :step="10"></el-slider></el-col>
        </el-row>
        <el-row>
          <el-col :span="9" style="lineHeight:36px;">order</el-col>
          <el-col :span="15"><el-slider v-model="item.order" :format-tooltip="formatOrder" :step="10"></el-slider></el-col>
        </el-row>
        <el-row>
          <el-col :span="9" style="lineHeight:36px;">flex-grow</el-col>
          <el-col :span="15"><el-slider v-model="item.flex_grow" :format-tooltip="formatTen" :step="10"></el-slider></el-col>
        </el-row>
        <el-row>
          <el-col :span="9" style="lineHeight:36px;">flex-shrink</el-col>
          <el-col :span="15"><el-slider v-model="item.flex_shrink" :min="parseInt(10)" :format-tooltip="formatTen" :step="10"></el-slider></el-col>
        </el-row>
        <el-row>
          <el-col :span="9" style="lineHeight:36px;">flex-basis</el-col>
          <el-col :span="15"><el-slider v-model="item.flex_basis" :max="parseInt(50)" :format-tooltip="formatFlexBasis" :step="10"></el-slider></el-col>
        </el-row>
        <el-row>
          <el-col :span="9" style="lineHeight:36px;">align-self</el-col>
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
  </div>
</template>

<script>
export default {
  name: 'flexbox',
  data () {
    return {
      parrentform: {
        flex_direction: 'row',
        flex_wrap: 'nowrap',
        justify_content: 'flex-start',
        align_items: 'stretch',
        align_content: 'stretch'
      },
      child_num: 30,
      child_width: 30,
      child: []
    }
  },
  mounted () {
    for (let i = 0; i < this.child_num / 10; i++) {
      this.child.push({
        height: 60,
        order: 50,
        flex_grow: 0,
        flex_shrink: 1,
        flex_basis: 0,
        align_self: 'auto'
      })
    }
  },
  methods: {
    formatTen (val) {
      return val / 10
    },
    formatOrder (val) {
      let res = (val - 50) / 10
      return res.toString()
    },
    formatFlexBasis (val) {
      if (val === 0) {
        return 'auto'
      }
      return val * 10 + 'px'
    }
  },
  watch: {
    child_num: function (val, oldval) {
      if (val === oldval) return
      this.child = []
      for (let i = 0; i < val / 10; i++) {
        this.child.push({
          height: 60,
          order: 50,
          flex_grow: 0,
          flex_shrink: 1,
          flex_basis: 0,
          align_self: 'auto'
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-content {
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  padding: 20px;
  min-height: 470px;
}
.childform {
  padding-right: 80px;
}
.flex-parrent .flex-child {
  height: 60px;
  text-align: center;
  min-height: 30px;
  color: #fff;
}
.flex-parrent .flex-child:nth-of-type(2n) {
  background: rgba(0,160,233,.7);
}
.flex-parrent .flex-child:nth-of-type(2n+1) {
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
</style>
