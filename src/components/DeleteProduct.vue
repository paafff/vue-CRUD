<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Delete Product </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Are you sure you wish to delete this product ?
        </v-card-title>
        <v-card-text>
          <p>Product UUID : {{ productSelectedUUID }}</p>
          <p>Product Name : {{ productSelectedName }}</p>
        </v-card-text>

        <!-- <v-card-text>Product Name : {{ productSelectedName }}</v-card-text> -->
        <v-card-actions class="gap-5 justify-end">
          <!-- <v-spacer></v-spacer> -->
          <v-btn color="green-darken-1" variant="text" @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="green-darken-1" variant="text" @click="deleteProduct">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    productSelectedUUID: {
      type: String,
      required: true,
    },
    productSelectedName: {
      type: String,
      required: true,
    },

    getProducts: {
      type: Function,
      required: true,
    },
  },
  methods: {
    async deleteProduct(this: { dialog: false; getProducts: Function }) {
      try {
        axios.delete(
          `http://localhost:5000/products/${this.productSelectedUUID}`
        );
        alert('product deleted successfully');

        this.dialog = false;
        this.getProducts();
      } catch (error: any) {
        if (error.response) {
          alert(error.response.data.msg);
        } else {
          console.log(error);
        }
      }
    },
  },
};
</script>
