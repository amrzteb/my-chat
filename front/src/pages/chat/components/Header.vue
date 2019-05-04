<template>
  <div class="header">
    <div class="header-left iconfont">&#xe611;</div>
    <div class="header-title">Sherry</div>
    <div class="header-right iconfont">&#xe601;</div>
  </div>
</template>

<script>
export default {
  name: 'ChatHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    display flex
    line-height 1.3rem
    font-size .35rem
    text-align center
    border-bottom 1px #e3e3e3 solid
    .header-title
      flex: 1
      font-size .48rem
    .header-left
      float left
      width .88rem
      text-align center
      font-size .34rem
      color #000000
    .header-right
      float right
      width .88rem
      text-align center
      font-size .34rem
      color #000000
</style>
