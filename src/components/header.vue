<template>
  <v-app-bar app color="green darken-3" light height="75px">
    <v-img id="logo"
      src="../assets/logo.jpg"
      max-height="88"
      max-width="120"
    >
    </v-img>
    <div><mapLocation /></div>
    <v-spacer></v-spacer>
    <v-list id="links" class="d-flex align-center green darken-3">
      <v-list-item id="li" v-for="item in menus" :key="item">
        <v-list-item-title class="list">{{ item.title }}</v-list-item-title>
        <div class="dropdown-content">
          <a href="#">Foot Long</a>
          <a href="#">6 INCH</a>
          <a href="#">Salad</a>
          <a href="#">Platter</a>
          <a href="#">Deals</a>
          <a href="#">Combo</a>
          <a href="#">Add On</a>
          <a href="#">Drinks</a>
          <a href="#">Misc</a>
          <a href="#">Toasties</a>
        </div>
      </v-list-item>
      <v-badge right>
        <span slot="badge">{{this.delivery}}</span>
        <v-icon style="color: white; margin: 0 0 2px 8px; cursor: pointer"
          >mdi-moped</v-icon
        >
      </v-badge>
    </v-list>
  </v-app-bar>
</template>

<script>
import mapLocation from "./mapLocation.vue";

export default {
  name: "HeaderComponent",
   props :{                                   
          delivery:Object,
         
      },
  components: {
    mapLocation,
  },
  data: () => ({
    menus: [
      { title: "Home" },
      { title: "Categories" },
      { title: "Menu" },
      { title: "News" },
      { title: "About" },
    ],
  }),
};
</script>

<style scoped>
.list {
  font-size: 11px;
  color: white;
  cursor: pointer;
  position: relative;
  padding: 5px;
  display: inline-block;
}
#links {
  margin-right: 200px;
  position: relative;
}

.list:after {
  bottom: 0;
  content: "";
  height: 2px;
  left: 50%;
  position: absolute;
  background: yellow;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.list:hover:after {
  width: 100%;
  left: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 62px;
  left: -15px;
  background-color: #004d40;
  min-width: 85px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: white;
  padding: 8px 5px;
  text-decoration: none;
  display: block;
  text-align: center;
  font-family: sans-serif;
  font-size: 12px;
  position: relative;
}

.dropdown-content a:after {
  bottom: 0;
  content: "";
  height: 2px;
  left: 50%;
  position: absolute;
  background: yellow;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.dropdown-content a:hover:after {
  width: 100%;
  left: 0;
}

#li:hover .dropdown-content {
  display: block;
}

.v-list-item {
  min-height: 60;
  padding: 0;
  margin-left: 15px;
}
#logo{
  margin-left: 150px;
}

#logo:hover {
    margin-bottom: 5px;
}

@media only screen and (max-width: 1200px){
.list {
  font-size: 8px;
  padding: 0px;
}
#links {
  margin-right: 5px;
  margin-top: 5px;
}
#logo{
  margin-left: 10px;
}
.dropdown-content {
  top: 59px;
  min-width: 50px;
}
.dropdown-content a {
  padding: 6px 2px;
  font-size: 8px;
}
}

@media only screen and (max-width: 600px){
.list {
  font-size: 7px;
  padding: 0px;
}
#links {
  margin-right: 0;
  margin-top: 5px;
}
#logo{
  margin-left: 0;
  max-width: 80px!important;
  max-height: 30px!important;;
}
.dropdown-content {
  top: 59px;
  min-width: 40px;
}
.dropdown-content a {
  padding: 4px 2px;
  font-size: 5px;
}
}
</style>