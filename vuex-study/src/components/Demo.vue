<template>
  <div>
    <p>{{ originalPrice }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  ...mapGetters(["originalPrice", "doublePrice", "triplePrice"]),
};
</script>

<style></style>
