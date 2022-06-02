<template>
    <v-container>
      <h1 class="text-center">Todays Delicious Menu</h1>
      <v-row class="mx-16">
        <v-col cols="12" sm="4" v-for="card in cards" :key="card">
<v-card 
    :loading="loading"
    class="mx-auto my-12"
    max-width="230"
    style="border:1px solid orange;"
  >
   
    <v-img
      height="200"
      :src="card.src"
    ></v-img>

    <v-card-text class="text-center text-h6 black--text">{{card.title}}</v-card-text>

<template>
  <div class="text-center">
   
      <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="700"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        rounded
      color="orange"
      dark
      style="text-transform: capitalize;"
        class="my-6"
          
          v-bind="attrs"
          v-on="on"
        >
          Add to Cart
        </v-btn>
      </template>
      <v-card height="600">
        <v-card-title class="text-h6" style="display:inline-block">
          Italian B.M.T 12"
        </v-card-title>
      <v-icon id="closeBtn"
            size="30"
            color="gray"
            @click="dialog = false"
            
            
          >
            mdi-close-circle-outline
          </v-icon>
       <hr>
       <div class="foodMenu">
         <div class="menus">
         <v-text class="text-h6 ml-5">Bread </v-text>
        <v-text style="font-size:12px;">(Choose Item)</v-text>
          <v-text class="text-h6 blue-grey darken-2 text-body-1 white--text pa-1" id="required">Required </v-text>
        <div style="margin-left: 40px">
          <v-radio-group v-model="row" row>
            <v-radio label="Wheat Special" value="radio-1" class="pr-3"></v-radio>
            <v-radio label="Honey Oat" value="radio-2" class="pr-3"></v-radio>
            <v-radio label="Wheat" value="radio-3" class="pr-3"></v-radio>
            <v-radio label="Parmesan Orgeno" value="radio-4" class="pr-3"></v-radio>
          </v-radio-group>
        </div>
        </div>
        <div class="menus">
         <v-text class="text-h6 ml-5">Veggis </v-text>
        <v-text style="font-size:12px;">(Choose Item)</v-text>
        <div style="margin-left: 40px">
             <v-row no-gutters>
            <v-checkbox label="Lettuce" class="pr-16"></v-checkbox>
            <v-checkbox label="Tomato"  class="pr-16"></v-checkbox>
            <v-checkbox label="Pickles" class="pr-16"></v-checkbox>
            <v-checkbox label="Jalapeno" class="pr-16"></v-checkbox>
            </v-row>
            <v-row no-gutters>
            <v-checkbox label="Olives" class="pr-16"></v-checkbox>
            <v-checkbox label="Onion"  class="pl-3"></v-checkbox>
            </v-row>
        </div>
        </div>
  
       </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="mainFix">
          <v-btn id="button"
            dark
            color="orange"
            @click="dialog = false"
            rounded
            class="mt-15"
            style="text-transform: capitalize; "
            v-on:click="deliver()"
          >
            Add {{count}} to Cart
          </v-btn>
          
          <div class="counter">
             <v-icon
            size="20"
            color="gray"
            class="count"
            v-on:click="counterMinus()"
          >
            mdi-minus
          </v-icon>
          Counter
          <v-icon
            size="20"
            color="gray"
            class="count"
            v-on:click="counterPlus()"
          >
            mdi-plus
          </v-icon>
          </div>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

  </div>
</template>
  </v-card>
  
        </v-col>
      </v-row>
      <v-row class="mx-16">
        <v-col cols="12" sm="4" v-for="card in cards" :key="card">
<v-card 
    :loading="loading"
    class="mx-auto my-12"
    max-width="230"
    style="border:1px solid orange;"
  >
   
    <v-img
      height="200"
      :src="card.src"
    ></v-img>

    <v-card-text class="text-center text-h6 black--text">{{card.title}}</v-card-text>

<template>
  <div class="text-center">
   
      <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="700"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        rounded
      color="orange"
      dark
      style="text-transform: capitalize;"
        class="my-6"
          
          v-bind="attrs"
          v-on="on"
        >
          Add to Cart
        </v-btn>
      </template>
      <v-card height="600">
        <v-card-title class="text-h6" style="display:inline-block">
          Italian B.M.T 12"
        </v-card-title>
      <v-icon id="closeBtn"
            size="30"
            color="gray"
            @click="dialog = false"
            
            
          >
            mdi-close-circle-outline
          </v-icon>
       <hr>
       <div class="foodMenu">
         <div class="menus">
         <v-text class="text-h6 ml-5">Bread </v-text>
        <v-text style="font-size:12px;">(Choose Item)</v-text>
          <v-text class="text-h6 blue-grey darken-2 text-body-1 white--text pa-1" id="required">Required </v-text>
        <div style="margin-left: 40px">
          <v-radio-group v-model="row" row>
            <v-radio label="Wheat Special" value="radio-1" class="pr-3"></v-radio>
            <v-radio label="Honey Oat" value="radio-2" class="pr-3"></v-radio>
            <v-radio label="Wheat" value="radio-3" class="pr-3"></v-radio>
            <v-radio label="Parmesan Orgeno" value="radio-4" class="pr-3"></v-radio>
          </v-radio-group>
        </div>
        </div>
        <div class="menus">
         <v-text class="text-h6 ml-5">Veggis </v-text>
        <v-text style="font-size:12px;">(Choose Item)</v-text>
        <div style="margin-left: 40px">
             <v-row no-gutters>
            <v-checkbox label="Lettuce" class="pr-16"></v-checkbox>
            <v-checkbox label="Tomato"  class="pr-16"></v-checkbox>
            <v-checkbox label="Pickles" class="pr-16"></v-checkbox>
            <v-checkbox label="Jalapeno" class="pr-16"></v-checkbox>
            </v-row>
            <v-row no-gutters>
            <v-checkbox label="Olives" class="pr-16"></v-checkbox>
            <v-checkbox label="Onion"  class="pl-3"></v-checkbox>
            </v-row>
        </div>
        </div>
  
       </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="mainFix">
          <v-btn id="button"
            dark
            color="orange"
            @click="dialog = false"
            rounded
            class="mt-15"
            style="text-transform: capitalize; "
            v-on:click="deliver()"
          >
            Add {{count}} to Cart
          </v-btn>
          
          <div class="counter">
             <v-icon
            size="20"
            color="gray"
            class="count"
            v-on:click="counterMinus()"
          >
            mdi-minus
          </v-icon>
          Counter
          <v-icon
            size="20"
            color="gray"
            class="count"
            v-on:click="counterPlus()"
          >
            mdi-plus
          </v-icon>
          </div>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

  </div>
</template>
  </v-card>
  
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
    name:'MenuComponent',
    data() {
        return {
             cards:[
           {
             src: require("../assets/img1.jpg"),
             title:"Italian B.M.T 12",
           },
           {
             src: require("../assets/img2.jpeg"),
             title:"Bar B.Q Chicken 12"
           },
           {
             src: require("../assets/img3.jpg"),
             title:"Veggie Delight 12"
           },
      ],
      dialog: false,
      delivery:0,
      count:0,
        }
    },
    methods: {
         deliver(){
      this.delivery  = this.delivery + 1;
    },
    counterPlus(){
      this.count++;
    },
    counterMinus(){
      this.count--;
      if(this.count==-1)
      {
        this.count=0;
      }
    }
    },
}
</script>
