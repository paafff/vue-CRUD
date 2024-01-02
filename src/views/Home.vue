<template>
  <div>
    <!-- <v-btn color="primary" @click="dialog = true">Open Dialog</v-btn> -->
    <CreateProductForm :dialog="dialog" @closeDialog="dialog = false" />
  </div>
</template>

<script>
import CreateProductForm from './../components/CreateProductForm.vue';

export default {
  components: {
    CreateProductForm,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
