<template>
  <div>
    <span>{{ msg }}</span>
    <!-- <div style="margin-top:20px">
         <button v-on:click="vueRequset('get','/13')">vue get</button>
    </div> -->
    <div style="margin-top: 100px">
      <button v-on:click="httpRequset('get', '/demo01')">获取员工信息</button>
      <div class="container">
        <h2>表格</h2>
        <p>
          创建响应式表格
          (将在小于768px的小型设备下水平滚动)。另外：添加交替单元格的背景色：
        </p>
        <div class="table-responsive">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>id</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>工号</th>
                <th>住址</th>
                <th>备注</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in demo01Data" v-bind:key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.age }}</td>
                <td>{{ item.number }}</td>
                <td>{{ item.adress }}</td>
                <td>{{ item.remark }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demo03',
  data: function () {
    return {
      msg: 'demo03',
      demo01Data: []
    };
  },
  methods: {
    httpRequset: function (type, url, data) {
      var that = this;
      // 1、 创建xhr对象
      var xhr = new XMLHttpRequest();
      //  注册回调函数

      xhr.onreadystatechange = callback;
      //  配置请求信息
      var xhrUrl = 'http://localhost:3000';
      xhrUrl = url ? xhrUrl + url : xhrUrl;
      switch (type) {
        case 'get':
          xhr.open('get', xhrUrl, false);
          break;
        case 'post':
          xhr.open('post', xhrUrl, true);
          xhr.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded'
          );
          break;
        default:
          xhr.open(type, xhrUrl, true);
      }

      // 4、 发送http请求
      xhr.send({ type: type, msg: '来自' + type + '的请求', data: data });
      // 5、 创建回调函数
      function callback() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var responseText = xhr.responseText;
            that.demo01Data = JSON.parse(responseText);
            if (url === '/demo01') {
              console.log(that.demo01Data);
            }
          }
        }
      }
    },
    vueRequset: function () {
      this.$http.get('http://localhost:3000').then(
        (response) => {
          console.log(response.data);
          // get body data
          // this.someData = response.body;
        },
        (response) => {
          console.log('error');
        }
      );
    }
  },
  beforeCreate: function () {
    this.evt = new Event('EVENT_ID');
    // 将list作为事件对象的属性
    this.evt.msg = this.msg;
    // 抛发事件
    document.dispatchEvent(this.evt); // 事件发布
    document.addEventListener('EVENT_ID', (param) => {
      console.log(param);
    }); // 接收事件触发
  },
  created: function () {
    // 将list作为事件对象的属性
    this.evt.msg = this.msg;
    // 抛发事件
    document.dispatchEvent(this.evt); // 事件发布
  },
  beforeMount: function () {},
  mounted: function () {},
  beforeUpdate: function () {},
  updated: function () {},
  beforeDestroy: function () {},
  destroyed: function () {}
};
</script>
