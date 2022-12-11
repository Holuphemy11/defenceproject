<template>
  <div class="wrap">
    <div class="h-screen relative flex justify-center flex-col">
      <img id="plate1" src="https://foodmandu.com/img/tandoori_chicken.png" />
      <img id="plate2" src="https://foodmandu.com/img/flanksteak_cheddar.png" />
      <img id="plate3" src="https://foodmandu.com/img/flanksteak_cheddar.png" />
      <img id="plate4" src="https://foodmandu.com/img/salmon.png" />
      <div class="searchcontainer flex flex-col justify-center items-center gap-5">
        <h1 class="text-4xl text-black text-center font-bold">ChatBot System</h1>
        <h1 class="text-2xl font-semibold text-center text-black h-full">Order food from the Mama Risis Restaurant.</h1>
        <div class="flex justify-center items-center">
         <v-btn variant="outlined">Order Food Via ChatBot</v-btn>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="fresh">
        <h5>FOODMANDU FRESH</h5>
        <br />

        <img src="https://foodmandu.com/Images/Foodmandu-Fresh.jpg" /> <br />
        <br />
        <hr />
      </div>

      <div class="restaurants">
        <h5>FEATURED RESTAURANTS</h5>
      </div>

      <div class="row">
        <div class="foodcontainer">
          <div class="tile tile1">
            <div class="tile1holder"></div>
          </div>
          <p>Fire And Ice Pizzeria</p>
        </div>

        <div class="foodcontainer">
          <div class="tile tile2">
            <div class="tile2holder"></div>
          </div>
          <p>The Workshop Eatery</p>
        </div>

        <div class="foodcontainer">
          <div class="tile tile3">
            <div class="tile3holder"></div>
          </div>
          <p>Cafe Soma</p>
        </div>

        <div class="foodcontainer">
          <div class="tile tile4">
            <div class="tile4holder"></div>
          </div>
          <p>Mittraan Da Dhaba</p>
        </div>
      </div>

      <br /><br />

      <div class="row">
        <div class="foodcontainer">
          <div class="tile tile1">
            <div class="tile1holder"></div>
          </div>
          <p>Fire And Ice Pizzeria</p>
        </div>

        <div class="foodcontainer">
          <div class="tile tile2">
            <div class="tile2holder"></div>
          </div>
          <p>The Workshop Eatery</p>
        </div>

        <div class="foodcontainer">
          <div class="tile tile3">
            <div class="tile3holder"></div>
          </div>
          <p>Cafe Soma</p>
        </div>

        <div class="foodcontainer">
          <div class="tile tile4">
            <div class="tile4holder"></div>
          </div>
          <p>Mittraan Da Dhaba</p>
        </div>
      </div>

      <br /><br /><br />
    </div>

    <div class="request">
      <h1>Order your food via our Ai Chat Bot</h1>

      <button>Need Assistance</button>
    </div>

    <div class="container">
      <hr />
      <div class="copy-content">
        <div class="privacy">
          <span> Adeoye John | Adebayo</span>
        </div>

        <div class="copy">
          <span>&copy; 2022 Computer Science All Rights Reserved. </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

*{
  box-sizing: border-box;
   margin: 0;
}

.searchcontainer h1{
    font-family: 'Roboto', sans-serif;
    color: #4A4A4A;
}

.nav .brandlogo img{
  height: 35px;
}

.nav .btncontainer button{
  border: 1px solid #00A145;
  outline: none;
  background: white;
  font-size: 14px;
  padding: 10px 25px;
  border-radius: 2px;
  color: #00A145;
  cursor: pointer;
}

.nav{
    display: flex;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 15px;
    padding-bottom: 15px;
    vertical-align: middle;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 500;
}

.jumbotorn{
  height: 700px;
  margin: 0;
  background-image: url('https://foodmandu.com/img/top_seamless_background.jpg');
  background-size:L cover;
  background-position:center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.searchgroup{
  display: flex;
  z-index: 100;
}

.searchgroup input{
  flex: 3;
  outline: none;
  border: none;
  padding: 13px;
}
.searchgroup button{
  flex: 1;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  background: #00A145;
  padding: 13px;
  font-size: 15px;
}
::placeholder{
    font-size: 15px;
}
.fresh{
  margin-top: 50px;
}
.fresh img{
   width: 100%;
}

h5{
      font-family:  sans-serif;
      font-weight: 700;
      color: #4A4A4A;
}

.restaurants{
  margin-top: 50px;
}

.container{
    width: 75%;
    margin: auto;
}

.tile{
    width: 220px;
    height: 150px;
    overflow: hidden;

  
}
.row{
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
}

.tile1holder{
    width: 100%;
    height: 100%;
    background-image: url('https://foodmandu.com//Images/Vendor/269/Logo/Web_040620061639.happy_lunch.Fire_and_Ice_Pizzeria.jpg');
  background-size: cover;
   background-position:center;
   transition: all 0.6s;
 
}



.tile2holder{
    width: 100%;
    height: 100%;
    background-image: url('https://foodmandu.com//Images/Vendor/326/Logo/Web_050520060610.OpenRestuarent.workshop_eatery.jpg');
  background-size: cover;
   background-position:center;
   transition: all 0.6s;
}



.tile3holder{
    width: 100%;
    height: 100%;
    background-image: url('https://foodmandu.com//Images/Vendor/967/Logo/WhatsApp_Image_2020-07-14_at_12_140720085156.59.36_PM.jpeg');
  background-size: cover;
   background-position:center;
   transition: all 0.6s;
}


.tile4holder{
    width: 100%;
    height: 100%;
    background-image: url('https://foodmandu.com//Images/Vendor/332/Logo/mitrandadhaba-web-listing_081117111411.jpg');
  background-size: cover;
   background-position:center;
   transition: all 0.6s;
}


.tile1holder:hover{
   transform: scale(1.1);
   cursor: pointer;

}

.tile2holder:hover{
   transform: scale(1.1);
   cursor: pointer;

}

.tile3holder:hover{
   transform: scale(1.1);
   cursor: pointer;

}

.tile4holder:hover{
   transform: scale(1.1);
   cursor: pointer;

}

.foodcontainer p{
      font-family: 'Roboto', sans-serif;
      color: #4A4A4A;
      font-size: 1.25em;
      margin-top: 15px;
      font-weight: bold;
}

.foodcontainer p:hover{
  color:  #00A145;
  cursor: pointer;
}

.about{
  height: 300px;
  background: linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://foodmandu.com/img/alice-banner.png');
  background-position: center;
  background-size: cover;
  margin-top: 50px;

}

.about .content {
  color: white;
   font-family: 'Roboto', sans-serif;
}
.about p{
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  margin-top: 20px;
}
.content{
  text-align: center;
  width: 60%;
  margin: auto;
  margin-top: 10px;
}
.content button{
    border: none;
    outline: none;
    background: white;
    padding: 10px 24px;
    border-radius: 2px;
    font-weight: 400;
    color: #4A4A4A;
    cursor: pointer;
  
}
.content button:hover{
  color: #00A145;
}

.app{
  display: flex;
}

.text{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.photo{
  flex: 1;
}
.photo img{
      width: 60%;
}

.text h1{
    font-size: 2.4em;
    color: #9F1D22;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
}
.text p{
      font-size: 1em;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      float: left;
      margin-top: 10px;
}
.itunes img{
  width: 120px;
}
.play img{
  width: 140px;
}
.play-container{
  display: flex;
 }

.request{
  text-align: center;
   padding-top: 4%;
   padding-bottom: 4%;
   background:  #E7E7E7;
}
.request h1{
       font-weight: 800;
        color: #4A4A4A;
       font-family: 'Roboto', sans-serif;
}
.request button{
  outline: none;
  border: none;
  background: #00A145;
  color: white;
  padding: 10px 30px;
  margin-top: 30px;
  font-size: 16px;
}
.footer{
  display: flex;
}
.footer div{
  flex: 1;
}
.footer ul li{
  list-style: none;
  padding: 6px;
}
#img1{
  width: 87px;
}

#img2{
  width: 100px;
}

.footer {
  padding: 20px;
  font-family: 'Roboto', sans-serif;

}
.footer .title{
  font-weight: 800;
  font-size: 13px;
  
}

.footer ul li .fa{
  cursor: pointer;
  padding: 2px;
  font-size: 30px;
  color: #9B9B9B;
}
.footer ul li{
  font-weight: 500;
}
li.v{
  font-size: 13px;
}
.copy-content{
  padding-top: 10px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: #4A4A4A;
}

#plate1{
   position: absolute;
   top: 100px;
   left:100px;
   width: 200px;
   z-index: 1;
   transition: all 0.5s;
}

#plate2{
   position: absolute;
   top: 100px;
   right:100px;
   width: 300px;
   z-index: 5;
   transition: all 0.5s;
}


#plate3{
   position: absolute;
   bottom: 40px;
   left: 200px;
   width: 300px;
   z-index: 5;
   transition: all 0.5s;
}

#plate4{
   position: absolute;
   bottom: 40px;
   right: 200px;
   width: 350px;
   z-index: index 5;
   transition: all 0.5s;
}
.searchcontainer{
 z-index: 200;
}

</style>
