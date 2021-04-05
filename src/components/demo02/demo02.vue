<template>
  <div>
    <span>{{ msg }}</span>
    <div
      style="width: 12px; height: 12px; border: 1px solid red"
      id="aaa"
    ></div>
    <div class="container">
      <div class="jumbotron">
        <h1>我的第一个 Bootstrap 页面</h1>
        <p>重置窗口大小，查看响应式效果！</p>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <h3>Column 1</h3>
          <p>学的不仅是技术，更是梦想！</p>
          <p>再牛逼的梦想,也抵不住你傻逼似的坚持！</p>
        </div>
        <div class="col-sm-4">
          <h3>Column 2</h3>
          <p>学的不仅是技术，更是梦想！</p>
          <p>再牛逼的梦想,也抵不住你傻逼似的坚持！</p>
        </div>
        <div class="col-sm-4">
          <h3>Column 3</h3>
          <p>学的不仅是技术，更是梦想！</p>
          <p>再牛逼的梦想,也抵不住你傻逼似的坚持！</p>
        </div>
      </div>

      <h2>图像</h2>
      <p>创建响应式图片(将扩展到父元素)。 另外：图片以椭圆型展示：</p>
      <img
        src="../../assets/image/cinqueterre.jpg"
        class="img-responsive img-circle"
        alt="Cinque Terre"
        width="304"
        height="236"
      />

      <h2>图标</h2>
      <p>插入图标:</p>
      <p>云图标: <span class="glyphicon glyphicon-cloud"></span></p>
      <p>信件图标: <span class="glyphicon glyphicon-envelope"></span></p>
      <p>搜索图标: <span class="glyphicon glyphicon-search"></span></p>
      <p>打印图标: <span class="glyphicon glyphicon-print"></span></p>
      <p>下载图标：<span class="glyphicon glyphicon-download"></span></p>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'demo02',
  data() {
    return {
      msg: 'demo02'
    };
  },
  methods: {},
  beforeCreate: function () {},
  created: function () {},
  beforeMount: function () {},
  mounted: function () {
    const element = document.getElementById('aaa');
    function moveRight(ele, moveLength, duration) {
      // clearInterval(ele.timer);
      // ele.timer = setInterval(()=>{
      //   ele.style.marginleft = ele.style.marginleft+1;
      // },duration/moveLength)

      let start = null;
      let step = (time) => {
        if (!start) {
          start = time;
        }
        const elapsed = time - start;
        if (elapsed < duration) {
          ele.style.transform =
            'translateX(' + (elapsed / duration) * moveLength + 'px)';
          // ele.style.marginLeft = (elapsed/duration)*moveLength+'px'
          window.requestAnimationFrame(step);
        } else {
          //  ele.style.marginLeft = moveLength+'px'
          ele.style.transform = 'translateX(' + moveLength + 'px)';
        }
      };
      window.requestAnimationFrame(step);
    }
    moveRight(element, 250, 1000);
  },
  beforeUpdate: function () {},
  updated: function () {},
  beforeDestroy: function () {},
  destroyed: function () {}
};
</script>
