<template>
    <div class="header">
      <div class="header-left iconfont">&#xeaf1;</div>
      <div class="header-title">消息</div>
      <div class="header-right iconfont">&#xe600;</div>
    </div>
</template>

<script>
export default {
  name: 'ListHeader'
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
