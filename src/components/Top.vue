<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeInDown"
    leave-active-class="animated flipOutY"
    mode="out-in"
  >
    <div v-show="show" @click="totop" class="top-box">
      <i class="el-icon-caret-top"></i>
    </div>
  </transition>
</template>
<script>
export default {
  data: function() {
    return {
      show: false
    };
  },
  mounted() {
    var sHeight = screen.height;
    var that = this;
    window.onscroll = function() {
      if (document.body.scrollTop > sHeight) {
        that.show = true;
      } else {
        that.show = false;
      }
    };
  },
  methods: {
    totop: function() {
      document.body.scrollTop = 0;
    }
  }
};
</script>

<style scoped>
.top-box {
  background-color: rgb(88, 183, 255);
  position: fixed;
  right: 100px;
  bottom: 150px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  opacity: 0.4;
  border-radius: 25px;
  transition: 0.3s;
  z-index: 10;
  text-align: center;
}
.top-box > i {
  color: #fff;
  font-size: 22px;
  line-height: 50px;
}
.top-box:hover {
  opacity: 1;
}
</style>
