<template>
  <div class="chat">
    <chat-header></chat-header>
    <chat-content :message="message"></chat-content>
    <chat-input @sendMessage="handleSend"></chat-input>
  </div>
</template>

<script>
import ChatHeader from './components/Header'
import ChatContent from './components/Content'
import ChatInput from './components/Input'
export default {
  name: 'Chat',
  components: {ChatInput, ChatContent, ChatHeader},
  data () {
    return {
      message: ''
    }
  },
  methods: {
    handleSend (msg) {
      this.message = msg
    }
  }
}
</script>

<style lang="stylus" scoped>
.chat
  height 100%
</style>
