<template>
  <div id="home-page">
    <h1>
      🏠 Home sweet home
    </h1>
    <p>
    <NameTag :name="name"></NameTag>
    <!-- <NameTag name="Inhwa"></NameTag>
    <NameTag name="Jiyul"></NameTag> -->
    <SlotItem :name="name">
      <template #info>
        <a href="https://bokjiho.medium.com/">🛠 My Tech Blog</a>
      </template>
      <template #body>
        <div>Profession: Web FE Developer</div>
        <div>MBTI: ISFJ / ISTJ</div>
      </template>
      <!-- <template v-slot:default>
        <div>default</div>
      </template> -->
    </SlotItem>
    </p>
  </div>
</template>

<script>
import NameTag from '../components/NameTag.vue'
import SlotItem from '../components/SlotItem.vue'

export default {
  name: 'home-page',
  components: {
    NameTag,
    SlotItem,
  },
  data() {
    return {
      name: 'Jiho Bok',

    }
  }
}
</script>