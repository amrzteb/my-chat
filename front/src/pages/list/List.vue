<template>
  <div>
    <list-header></list-header>
    <list-chat-list></list-chat-list>
  </div>

</template>

<script>
import ListHeader from './components/Header'
import ListChatList from './components/ChatList'
export default {
  name: 'List',
  components: {ListChatList, ListHeader}
}
</script>

<style lang="stylus" scoped>

</style>
