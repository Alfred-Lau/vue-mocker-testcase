<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ content }}</p>
    {{ showmeme }}
    <custome-input v-model="showmeme"></custome-input>

    <!-- 可写：注意下面两者的 区别 -->
    <input type="text" name="" id="" v-model="msg" />
    <input
      type="text"
      name=""
      id=""
      :value="msg"
      @input="
        (e) => {
          this.msg = e.target.value;
        }
      "
    />

    <div class="nexttick">
      <button @click="addItems">click me</button>
      <ul ref="ul">
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import CustomeInput from './advanced/custome-input';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    CustomeInput,
  },
  data() {
    return {
      items: [1, 2, 3],
      showmeme: '',
      content: 'default',
    };
  },
  methods: {
    addItems() {
      this.items.push(+new Date());
      this.items.push(+new Date());
      this.items.push(+new Date());

      this.$nextTick(() => {
        console.log(this.$refs.ul.childNodes.length);
      });
    },
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
