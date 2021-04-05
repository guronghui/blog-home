<style scoped>
.login-bg {
  height: 100vh;
  width: 100%;

  background-image: url('../../assets/image/login-bg.jpg');
  background-size: 100% 100%;
}
.login_box {
  width: 370px;
  position: absolute;
  right: 5%;
  top: 15%;
}
.login-header {
  font-size: 18px;
  font-weight: bold;
}
</style>
<template>
  <div class="login-bg">
    <div class="login_box">
      <el-container>
        <el-header>
          <span class="login-header">{{ header }}</span>
        </el-header>
        <el-main>
          <el-input v-model="username" placeholder="请输入用户名">
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
          <el-input v-model="passward" placeholder="请输入和密码">
            <i slot="prefix" class="el-input__icon el-icon-key"></i>
          </el-input>
          <el-button style="width: 100%" type="primary" @click="login()" round>
            <span>登录</span>
          </el-button>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import { Button, Input } from 'element-ui';
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
Vue.use(Input);
Vue.use(Button);
export default {
  name: 'login',
  data: function () {
    return {
      header: '欢迎登录个人博客计划',
      username: '',
      passward: ''
    };
  },
  methods: {
    vueRequset: function () {},
    login: function () {
      let that = this;
      this.axios
        .post('/login', { username: this.username, passward: this.passward })
        .then((data) => {
          that.$router.push({ name: 'home' });
        });
    },
    ...mapActions({})
  },
  computed: {
    not_show() {
      return !this.$store.state.login.show;
    },
    ...mapState({
      show: (state) => state.login.show
    }),
    ...mapGetters({
      axios: 'axios'
    })
  },
  beforeCreate: function () {},
  created: function () {
    this.$store.commit('switch_dialog');
    this.$store.dispatch('action_dialog');
    console.log(this.$store.getters.not_show, this.show, this.not_show);
  },
  beforeMount: function () {},
  mounted: function () {},
  beforeUpdate: function () {},
  updated: function () {},
  beforeDestroy: function () {},
  destroyed: function () {}
};
</script>
