<template>
  <div class="content">
    <div v-for="(item, index) in list" :key="index" :class="setClass(item.name)">
      <img class="avatar" :src="item.avatar" alt="">
      <p class="chat-content">
        {{item.content}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatContent',
  props: {
    message: String
  },
  data () {
    return {
      list: [
        {
          name: 'Sherry',
          avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1122649470,955539824&fm=27&gp=0.jpg',
          content: 'Hello!'
        },
        {
          name: 'Sansa',
          avatar: 'http://img1.imgtn.bdimg.com/it/u=2344553074,1103420817&fm=26&gp=0.jpg',
          content: 'Hi!'
        }
      ]
    }
  },
  methods: {
    setClass (name) {
      if (name === 'Sherry') {
        return 'row left-msg'
      }
      return 'row right-msg'
    }
  },
  watch: {
    message () {
      this.list.push({
        name: 'Sansa',
        avatar: 'http://img1.imgtn.bdimg.com/it/u=2344553074,1103420817&fm=26&gp=0.jpg',
        content: this.message
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    .row
      margin-top .5rem
      margin-left .2rem
      margin-right .2rem
      overflow hidden
      .avatar
        width .8rem
        height .8rem
        float left
      .chat-content
        float left;
        margin-left .3rem
        line-height .4rem
        background #dbdbdb
        padding .2rem;
        position relative
        box-sizing: border-box;
        max-width 4.6rem;
        white-space:normal;
        word-break:break-all;
        word-wrap:break-word;
      .chat-content:before
        width: 0;
        height: 0;
        position: absolute;
        right: -0.22rem;
        top: 0.15rem;
        content: "";
        border: 6px solid transparent;
        border-left-color: #43A1F1;
    .left-msg
      overflow hidden
      .chat-content:before
        width: 0;
        height: 0;
        position: absolute;
        left: -0.25rem;
        top: 0.15rem;
        content: "";
        border: 6px solid transparent;
        border-right-color: #dbdbdb;
    .right-msg
      margin-left .2rem
      overflow hidden
      .avatar
        float right
      .chat-content
        float right;
        margin-right  .3rem
        background #43A1F1
        color #fff
</style>
