<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Update </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5"
            >Update Data Product {{ productSelectedUUID }}</span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="productName"
                  label="Product Name"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="productPrice"
                  label="Product Price"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-file-input
                  accept="image/*"
                  label="File input"
                  v-model="selectedFile"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-container>
          <!-- <small>*indicates required field</small> -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="
              dialog = false;
              productName = '';
              productPrice = '';
              selectedFile = null;
            "
          >
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="updateProduct">
            Update Product
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  data() {
    return {
      dialog: false,
      productName: '', // Variabel untuk menyimpan nama produk
      productPrice: '', // Variabel untuk menyimpan harga produk
      selectedFile: null as File | null,
      // Variabel untuk menyimpan berkas yang dipilih
    };
  },

  props: {
    getProducts: {
      type: Function,
      required: true,
    },

    productSelectedUUID: {
      type: String,
      required: true,
    },
    productSelectedName: {
      type: String,
      required: true,
    },
  },

  methods: {
    async updateProduct(this: {
      dialog: boolean;
      productName: string;
      productPrice: string;
      selectedFile: null;
      getProducts: Function;
      productSelectedUUID: string;
    }) {
      try {
        const formProduct = new FormData();

        formProduct.append('name', this.productName);
        formProduct.append('price', this.productPrice);

        if (this.selectedFile !== null) {
          formProduct.append('imageProduct', this.selectedFile[0]);
        } else {
          this.selectedFile = null;
        }

        await axios.patch(
          `http://localhost:5000/products/${this.productSelectedUUID}`,
          formProduct,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        );

        alert('product updated successfully');
        this.dialog = false;
        this.getProducts();

        this.productName = '';
        this.productPrice = '';
        this.selectedFile = null;
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
