<template>
  <div id="about-page">
    <h1>
      💁🏻‍♀️ About ..
    </h1>
    <div>
      {{ name }}
    </div>
    <div>
      -------------------
    </div>
    <FormField @update-info="updateName" />
  </div>
</template>

<script>
import FormField from '../components/FormField.vue'

export default {
  name: 'about-page',
  props: {
    inputValue: {
      type: String,
      required: false,
    }
  },
  data() {
    return {
      name: 'JIHO',
    }
  },
  components: {
    FormField
  },
  methods: {
    updateName(name) {
      this.name = name;
    }
  }
}
</script>