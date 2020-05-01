<template>
  <div class="container">
    <input
      type="text"
      :value="text1"
      @input="$emit('change1', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'custome-input',
  model: {
    prop: 'text1',
    event: 'change1',
  },
  props: {
    text1: {
      type: String,
      default() {
        return '';
      },
    },
  },
};
</script>

<style></style>
