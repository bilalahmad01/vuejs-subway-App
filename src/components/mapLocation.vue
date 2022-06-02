<template>
  <div>
    <span class="location" v-bind="address"><span id="delivery"> DELIVERING TO :</span> {{ address }}</span>
    <v-dialog 
    v-model="dialog" 
    persistent 
    max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-icon id="mapMarker"
          v-bind="attrs"
          v-on="on"
          
        >
          mdi-map-marker
        </v-icon>
      </template>
      <v-card height="450">
        <v-card-title class="modalHead">
         <span id="title"> Choose Your Location</span>
          <v-icon id="closeBtn"
            size="40"
            color="gray"
            @click="dialog = false"
            
          >
            mdi-close-circle-outline
          </v-icon>
        </v-card-title>
        <div style="margin-left: 40px">
          <v-radio-group v-model="row" row>
            <v-radio label="Current Location" value="radio-1"></v-radio>
            <v-radio label="Select your Store" value="radio-2"></v-radio>
          </v-radio-group>
        </div>
        <v-text class="locGet" v-bind="location">{{ location }}<v-icon class="search">mdi-magnify</v-icon></v-text>
        <iframe id="frame" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13611.33625791392!2d74.25314605000001!3d31.473750499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1646998417637!5m2!1sen!2s" width="600" height="215" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
          color="orange" 
          @click="dialog = false"
          dark
          style="text-transform: capitalize;"
          > 
          Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "mapLocation",
  data() {
    return {
      address: "Johar Town, Block R",
      location: "Thokar Niaz Baig, Lahore",
      dialog: false,
      column: null,
      row: null,
    };
  },
};
</script>

<style scoped>
.location {
  font-size: 12px;
  color: white;
  margin-left: 70px;
  margin-top: 15px;
}
.modalHead {
  color: white;
  background-color: orange;
}
.locGet {
  border: 1px solid grey;
  display: block;
  margin: 0 20px;
  padding: 8px;
  position: relative;
}
#frame{
  padding: 0 20px;
}
#mapMarker{
  color: white;
  cursor: pointer; 
  font-size: 22px;
}
#closeBtn{
 margin-left: 310px;
}
.search{
  left:300px;
  position:absolute;
}
@media only screen and (max-width: 1200px){
.location {
  font-size: 8px;
  color: white;
  margin-left: 40px;
  margin-top: 0px;
}

}
@media only screen and (max-width: 600px){
.location {
  font-size: 7px;
  color: white;
  margin-left: 15px;
  margin-top: 0px;
}
.modalHead{
  height: 50px;
  position: relative;
}
#title{
  font-size: 15px;
  position: absolute;
  left: 5;
}
#closeBtn{
  position: absolute;
  right: 5px;
  font-size: 30px!important;
}
.locGet {
  margin: 0 20px;
  height: 40px;

}
#frame{
 height: 235px;
 width: 452px;
}
.search{
  left:180px
}
}

</style>
