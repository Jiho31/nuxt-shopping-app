<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <!-- <button @click="addTodo">Add</button> -->
    <span class="addContainer" @click="addTodo" >
      <i class="fa-solid fa-plus"></i>
    </span>

    <Modal v-if="showModal" @close="showModal=false">
      <h3 slot="header">⚠️ 경고!
        <button class="closeModalBtn" @click="showModal = false">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </h3>

      <div slot="body">
        내용을 입력하세요.
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    }
  },
  components: {
    'Modal': Modal,
  },
  methods: {
    addTodo() {
      // console.log(this.newTodoItem);
      if (this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}

</style>