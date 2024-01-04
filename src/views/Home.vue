<template>
  <div class="min-h-screen w-full flex flex-col justify-evenly">
    <div class="">
      <!-- <v-btn color="primary" @click="dialog = true">Open Dialog</v-btn> -->
      <CreateProductForm :dialog="dialog" @closeDialog="dialog = false" :getProducts="getProducts" />
    </div>
    <div>
      <ListProduct :dataProducts="dataProducts"  :getProducts="getProducts"/>
    </div>
  </div>
</template>

<script lang="ts">
import ListProduct from './../components/ListProduct.vue';
import CreateProductForm from './../components/CreateProductForm.vue';
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    CreateProductForm,
    ListProduct,
  },

  data() {
    return {
      dialog: false,
      dataProducts: [], // Inisialisasi sebagai array kosong
    };
  },

  async created() {
    await this.getProducts();
  },

  methods: {
    async getProducts(this: { dataProducts: [] }) {
      try {
        const response = await axios.get(`http://localhost:5000/products`);
        this.dataProducts = response.data;

        console.log(
          '🚀 ~ file: Home.vue:19 ~ dataProducts:',
          this.dataProducts
        );
      } catch (error: any) {
        if (error.response) {
          alert(error.response.data.msg);
        } else {
          console.log(error);
        }
      }
    },
  },
});
</script>
