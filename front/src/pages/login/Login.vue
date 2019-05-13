<template>
    <div class="login">
      <div class="title">
        登录
      </div>
      <div class="logo">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1122649470,955539824&fm=27&gp=0.jpg" alt="avatr">
      </div>
      <div class="inputBox">
        <div class="userNameInput icon-input">
          <i class="iconfont">&#xe70f;</i><input type="text" name="username" placeholder="Enter your username">
        </div>
        <div class="passwordInput icon-input">
          <i class="iconfont">&#xe637;</i><input type="password" name="password" placeholder="Enter your password">
        </div>
      </div>
      <div  class="button">
        登录
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="stylus" scoped>
.login
  padding .5rem
  .title
    text-align center
    line-height 1rem
    font-size .4rem
    font-weight bold
  .logo
    height 2rem
    width 2rem
    border-radius 2rem
    overflow hidden
    margin .3rem auto
    img
      width 100%
  .inputBox
    padding .5rem 0px;
    div
      line-height 1rem
      margin-top .2rem
      font-size .3rem
      i
        padding 0 .2rem
        line-height 1rem
        font-size .4rem
        color #A5A5A5
      input
        flex 1
    .icon-input
      display flex
      border 1px solid #eee
      overflow hidden
  .button
    line-height .85rem
    background #eee
    text-align center
</style>
