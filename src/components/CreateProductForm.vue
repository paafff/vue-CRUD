<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Create Data Prduct</span>
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
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="createProduct">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    dialog: false,
    productName: '', // Variabel untuk menyimpan nama produk
    productPrice: '', // Variabel untuk menyimpan harga produk
    selectedFile: null, // Variabel untuk menyimpan berkas yang dipilih
  }),

  methods: {
    async createProduct() {
      try {
        const formProduct = new FormData();

        formProduct.append('name', this.productName);
        formProduct.append('price', String(this.productPrice));

        if (this.selectedFile !== null) {
          formProduct.append('imageProduct', this.selectedFile[0]);
        } else {
          throw new Error('Image is required');
        }

        console.log(
          '🚀 ~ file: CreateProductForm.vue:71 ~ createProduct ~ this.selectedFile:',
          this.selectedFile[0]
        );

        await axios.post('http://localhost:5000/products', formProduct, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        alert('product created successfully');

        this.dialog = false;
      } catch (error) {
        if (error.response) {
          alert(error.response.data.msg);
        } else {
          console.log(error);
        }
      }
    },
  },
};

// const createProduct = async () => {
//   await axios.post
// };
</script>
