<template>
  <v-footer
    dark
    color="black"
    height="150"
  >
    
    <v-img id="footerTitle"
     src="../assets/logo.jpg"
     max-height="88"
     max-width="120"
    >
    </v-img>

    
    <v-list-text id="footer">
    <ul>
      <li>SUBWAY</li>
      <li>No. 90-T, Phase 2, DHA Commercial Plaza</li>
      <li>Telephone: 092-42-5707400</li>
    </ul>
    </v-list-text>
    <div class="icon">
          <v-icon v-for="icon in icons" :key="icon"
          size="20px" 
          id="icons">
            {{ icon }}
          </v-icon>
    </div>
  </v-footer>
</template>

<script>
  export default {
    name:'FooterComponent',

    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
        'mdi-youtube',
      ],
    }),
  }
</script>

<style scoped>
.icon{
  margin-left: 100px;
}
#icons{
    border-right: 1px solid yellow;
    cursor: pointer;
    margin-left: 20px;
    padding-right: 15px;
}
#icons:last-child{
   border-right: none;
}
ul {
  list-style: square inside url("../assets/list.png");
  font-size: 10px;
}
#footer{
  margin-left: 200px;
}
#footerTitle{
  margin-left: 150px ;
}

@media only screen and (max-width: 600px){
 #footerTitle{
  margin-left: 50px ;
  margin-top: 50px;
  padding:0%;
  max-width: 80px!important;
  max-height: 120px!important;
}
#icons{
    border-right: 1px solid yellow;
    font-size: 15px!important;
    margin-left: 5px;
}
.icon{
  margin-left: 235px;
  margin-top: 0px;
}
ul {
  list-style: square inside url("../assets/list.png");
  font-size: 8px;
}
#footer{
  margin-left: 80px;
  margin-top: 10px;
}
}
</style>
