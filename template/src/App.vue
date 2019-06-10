<template>
  <div id="app">
    <!-- 页面主要区域开始 -->
    <div class="app-main">
      <transition
        name="router-fade"
      >
        <router-view></router-view>
      </transition>
    </div>
    <!-- 页面主要区域结束 -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'app',
  components: {},
  data() {
    return {
      error: false,
      errMsg: '',
      errCode: ''
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    ...mapGetters({
      hasInit: 'initGetter'
    })
  },
  methods: {
    ...mapActions(['acInit']),
    init() {
    }
  }
}
</script>

<style lang='scss' rel="stylesheet/scss">
  @import "./assets/scss/reset.scss";
  @import "./assets/scss/media.scss";
  @import "./assets/scss/common";
  @import "./assets/scss/animate";

  html {
    width: 100%;
    height: 100%;
    font-family: -apple-system-font, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
    overflow-x: hidden;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    min-height: 100%;
  }

  #app,
  .app-main {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #fff;
  }
</style>
