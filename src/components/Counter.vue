<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p data-test-id="counter">{{ counter }}</p>

  <div class="buttons-container">
    <button @click="add">+1</button>
    <button data-test-id="decrease" @click="decrement">-1</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      default: 100,
      // required: true,
      validator(value) { },
    },
  },
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquaredValue() {
      return Math.pow(this.counter, 2);
    },
    add() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  computed: {
    squareCounter() {
      console.log("computed");
      return Math.pow(this.counter, 2);
    },
    addComputed() {
      return this.counter + 1;
    },
    decrementComputed() {
      return this.counter - 1;
    },
    customTitle() {
      return this.title ? this.title : "Counter";
    },
  },
};
</script>

<style>
button {
  background-color: #64db87;
  border-radius: 5px;
  border: 1px solid white;
  cursor: pointer;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
  color: white;
  margin: 0 5px;
}

button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>
