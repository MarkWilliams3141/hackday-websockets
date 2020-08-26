<template>
  <div class="demo container">
    <h1>Real-time chat application demo</h1>

    <form v-on:submit.prevent="joinChat()" v-if="!chatJoined">
      <label>
        Enter username:
        <input ref="username" v-model="username" />
      </label>
      <button>Join Chat</button>
    </form>

    <div v-if="chatJoined">
      <div>
        Your username is: <strong>{{ username }}</strong>
      </div>

      <div class="messageBoxContainer">
        <div v-for="(message, index) of lastMessages" v-bind:key="index">
          {{ message.username }} | {{ message.message }}
        </div>
      </div>
      <form v-on:submit.prevent="sendMessage()">
        <label>
          <input ref="messageBox" v-model="message" />
        </label>
        <button>Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data: function() {
    return {
      connection: null,
      message: "",
      username: "",
      messages: [],
      chatJoined: false
    };
  },
  computed: {
    lastMessages: function() {
      return this.messages.slice(-10);
    },
    hasUsername: function() {
      return this.username !== "";
    }
  },
  methods: {
    clearAndFocus() {
      this.message = "";
      this.$refs.messageBox.focus();
    },
    joinChat() {
      if (this.hasUsername) {
        this.chatJoined = true;
      }
    },
    sendMessage: function() {
      console.log("Sending message ", this.message);
      const message = {
        action: "sendmessage",
        message: this.message,
        username: this.username
      };
      this.connection.send(JSON.stringify(message));

      //  clear and focus input element
      this.clearAndFocus();
    }
  },
  created: function() {
    console.log("Starting connection to Chat Server");
    this.connection = new WebSocket(
      "wss://g5zam4op2f.execute-api.eu-west-1.amazonaws.com/prod"
    );

    this.connection.onmessage = event => {
      this.messages.push(JSON.parse(event.data));
    };
  }
};
</script>

<style>
.messageBoxContainer {
  background: palegoldenrod;
  line-height: 20px;
  padding: 15px;
  min-height: 200px;
}
</style>
