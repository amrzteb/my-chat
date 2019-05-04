<template>
  <div class="chat-input">
    <div class="add iconfont ">
      &#xe600;
    </div>
    <div class="input-box">
      <input type="text" v-model="inputValue">
    </div>
    <div class="send iconfont" @click="sendMessage">
      &#xe602;
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatInput',
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    sendMessage () {
      if (this.inputValue === '') {
        return false
      }
      this.$emit('sendMessage', this.inputValue)
      this.inputValue = ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .chat-input
    display flex
    line-height .96rem
    border-top: 1px solid #ccc
    margin-top .2rem
    position fixed
    left 0
    right 0
    bottom 0
    .send
      float right
      width 1rem
      text-align center
      font-size .4rem
    .input-box
      flex 1
      input
        border-bottom 1px solid #ccc
        width 100%
    .add
      float left
      width 1rem
      text-align center
      font-size .4rem
</style>
