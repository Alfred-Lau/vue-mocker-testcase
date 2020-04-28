<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      content: 'default',
    };
  },
  mounted() {
    this.$http.get('/api/blog/detail', { project: 100 }).then((data) => {
      /* f proxy */
      this.content = data.data.data.content || 'changed';
    });
    // this.$mocker.get('/api/test', { project: 100 }).then((data) => {
    //   console.log(data.data);
    // });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
