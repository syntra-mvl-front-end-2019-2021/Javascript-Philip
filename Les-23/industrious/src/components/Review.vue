<template>
  <section>
    <div class="content">
      <blockquote>
        <p>
          {{ text }}
        </p>
      </blockquote>
      <div class="author">
        <div class="image">
          <img :src="imageSrc" alt="" />
        </div>
        <p class="credit">
          - <strong>{{ name }}</strong> <span>CEO - ABC Inc.</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Review",
  props: {
    text: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      return require("@/assets/images/" + this.src);
    },
  },
};
</script>

<style>
</style>