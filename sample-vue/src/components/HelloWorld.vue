<template>
  <div class="hello">
    <h2>native</h2>
    <button @click="handleClick">native button</button>
    <h2>vuetify</h2>
    <v-btn @click="handleClick">
      v-button
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    handleClick() {
      alert('Button was clicked!');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
