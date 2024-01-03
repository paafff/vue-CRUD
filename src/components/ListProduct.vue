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

      <v-card-subtitle class="pt-4"> {{ product.name }} </v-card-subtitle>

      <v-card-text>
        <div>{{ product.price }}</div>
      </v-card-text>

      <v-card-actions class="flex flex-row justify-between">
        <v-btn color="green"> Update </v-btn>

        <v-btn color="red"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { defineComponent, PropType } from 'vue';
import axios from 'axios';

export default defineComponent({
  props: {
    dataProducts: {
      type: Array as PropType<any[]>,
      required: true,
    },
  },

  
});
</script>
