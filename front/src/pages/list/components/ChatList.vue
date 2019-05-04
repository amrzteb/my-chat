<template>
  <div class="chat-list">
    <ul>
      <li class="item" v-for="item of chat" :key="item.id">
        <img class="item-img" :src="item.avatr" alt="" >
        <div class="item-info">
          <p class="item-nickname">{{item.name}}</p>
          <p class="item-last-message">{{item.last_word}}</p>
        </div>
        <div class="time">
          5min
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChatList',
  data () {
    return {
      chat: [
        {
          id: '001',
          name: 'Sherry',
          avatr: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1122649470,955539824&fm=27&gp=0.jpg',
          last_word: 'Hello!'
        },
        {
          id: '002',
          name: 'Sansa',
          avatr: 'http://img1.imgtn.bdimg.com/it/u=2344553074,1103420817&fm=26&gp=0.jpg',
          last_word: 'Hi!'
        },
        {
          id: '003',
          name: 'Sandy',
          avatr: 'http://img3.imgtn.bdimg.com/it/u=3169991040,3877131727&fm=15&gp=0.jpg',
          last_word: 'Sorry!'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.chat-list
    .item
      overflow: hidden
      display: flex
      height 1.8rem
      border-bottom 1px solid #ccc
      .item-img
        width 1rem
        height 1rem
        padding-top .4 rem
        padding-bottom  .4 rem
        padding-left .25 rem
        padding-right .25 rem
      .item-info
        flex: 1
        padding: .4rem .1rem .4rem .1rem
        min-width: 0
        .item-nickname
          line-height: .55rem
          font-size: .32rem
        .item-last-message
          line-height: .3rem
          color: #808080
      .time
        width .8rem
        line-height 1.8rem
        text-align center
        color #808080
</style>
