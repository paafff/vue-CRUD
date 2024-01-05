<template>
  <div class="flex flex-wrap w-full gap-5 justify-center items-center">
    <v-card
      v-for="product in dataProducts"
      :key="product.id"
      class=""
      width="350px"
    >
      <v-img
        class="align-end text-white"
        height="200"
        :src="product.imageURL"
        cover
      >
        <!-- <v-card-title></v-card-title> -->
      </v-img>

      <v-card-subtitle class="pt-4 font-bold text-white text-4xl">
        {{ product.uuid }}
      </v-card-subtitle>

      <v-card-text>
        <div>{{ product.name }}</div>
        <div>{{ product.price }}</div>
      </v-card-text>

      <v-card-actions class="flex flex-row justify-between">
        <v-btn color="green">
          <UpdateProductForm
            :productSelectedUUID="product.uuid"
            :productSelectedName="product.name"
            :getProducts="getProducts"
          />
        </v-btn>

        <v-btn color="red">
          <DeleteProduct
            :productSelectedUUID="product.uuid"
            :productSelectedName="product.name"
            :getProducts="getProducts"
          />
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { defineComponent, PropType } from 'vue';
import axios from 'axios';
import DeleteProduct from './../components/DeleteProduct.vue';
import UpdateProductForm from './../components/UpdateProductForm.vue';

export default defineComponent({
  props: {
    dataProducts: {
      type: Array as PropType<any[]>,
      required: true,
    },
    getProducts: {
      type: Function,
      required: true,
    },
  },

  data() {
    return {
      dialog: false,
    };
  },

  components: { DeleteProduct, UpdateProductForm },
});
</script>
