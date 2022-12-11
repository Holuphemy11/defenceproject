<template>
  <div class="">
    <headerVue></headerVue>
    <mainpageVue></mainpageVue>
    <div class="float flex justify-center items-center">
      <v-btn @click="OpenChat" v-if="!open" icon size="large"
        ><v-icon>mdi-message</v-icon></v-btn
      >
      <div
        v-if="!open"
        class="notf flex flex-col justify-center items-center rounded border-black border-2 border-solid"
      >
        <span class="text-sm text-black">Need Assitance ?</span>
        <span class="text-xs text-black">Chat with food bot</span>
      </div>
    </div>
    <v-dialog v-model="chat" class="" max-width="490">
      <div class="dialogg bg-white px-5 py-6">
        <div class="container-sm around message-wrap">
          <div class="message" v-for="(i, index) in chats" :key="index">
            <div
              class="flex pa-4"
              :class="i.userId == 'user' ? 'flex-row-reverse' : ''"
            >
              <div
                class="px-8 py-2 cover rounded flex flex-col"
                :class="i.userId == 'user' ? 'bg-green-800' : 'bg-gray-700'"
              >
                <p class="ma-0 pa-0 text-white">{{ i.message }}</p>
                <div
                  class="flex flex-col justify-start items-start"
                  v-if="i.options"
                >
                  <v-btn
                    @click="UserMessage(opt)"
                    size="small"
                    variant="outlined"
                    class="ma-0 pa-0 mb-1 px-2 text-white"
                    v-for="(opt, index) in i.options"
                    :key="index"
                    >{{ opt }}</v-btn
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="orderBox"
            class="orderbox flex flex-col justify-center items-center"
          >
            <p class="ma-0 pa-0 font-bold">Tracking Order For {{ currentOrder.trans }}</p>
            <p class="ma-0 pa-0 font-bold">
              Order Status For: {{ currentOrder.Food  }} <span v-if="!justFood">and</span> {{currentOrder.Drink}}
            </p>
            <p class="ma-0 pa-0 text-primary text-base">
              Status: {{ orderStatus }}
            </p>
            <p class="ma-0 pa-0 px-4 text-red-500 text-center" v-if="orderStatus == 'Delivered'">
              Hurray Your Order for {{ currentOrder.Food  }} <span v-if="!justFood">and</span> {{currentOrder.Drink}} with Transaction Ref of {{ currentOrder.trans }} has being succesfully deliverd to you 
            </p>
          </div>
        </div>
        <div class="bottom fixed bottom-0 left-0 w-full">
          <div class="w-full">
            <v-form class="w-full flex justify-between">
              <input
                v-model="dform.message"
                class="px-3 input w-100 text-input"
                placeholder="Send a message"
                required
              />
              <v-btn
                color="blue"
                class="btnss rounded-none"
                @click="SendMessage"
                ><v-icon color="white">mdi-send</v-icon></v-btn
              >
            </v-form>
          </div>
        </div>
      </div>
    </v-dialog>
    <v-dialog v-model="paymentModal" persistent max-width="400">
      <div class="pa-5 bg-white flex gap-1 justify-start items-center flex-col">
        <p class="ma-0 pa-0 text-lg font-bold">
          Checkout The Order <v-icon>mdi-cart</v-icon>
        </p>
        <v-divider class="w-full h-10 bg-black"></v-divider>
        <p class="ma-0 pa-0">Transaction Ref: {{ currentOrder.trans}}</p>
        <p class="ma-0 pa-0">Food Name: {{ currentOrder.Food }} Price: ₦5000</p>
        <p class="ma-0 pa-0" v-if="!justFood">
          Drink Name: {{ currentOrder.Drink }} Price: ₦4000
        </p>

        <div 
          v-if="isOptionSelected"
          @click="ChoosePayment('card')"
          class="pa-3 w-full gap-2 cursor-pointer flex justify-center items-center border-2 border-solid hover:bg-black hover:border-white hover:text-white border-black mb-2"
        >
          <v-icon>mdi-cards</v-icon>Pay with card
        </div>
        <div
          v-if="isOptionSelected"
          @click="ChoosePayment('account')"
          class="pa-3 w-full cursor-pointer gap2 flex justify-center items-center border-2 border-black hover:bg-black hover:border-white hover:text-white border-solid"
        >
          <v-icon>mdi-bank</v-icon>Pay with Account
        </div>
        
        <v-form ref="form" class="flex w-full flex-col items-center justify-center">
          <v-text-field
            v-if="
              optionSelectedType == 'card' || optionSelectedType == 'account'
            "
            :rules="inputRules"
            v-model="email"
            dense
            class="ma-0 pa-0 w-full"
            label="Email"
            variant="solo"
          ></v-text-field>
          <v-text-field
            v-if="
              optionSelectedType == 'card' || optionSelectedType == 'account'
            "
            v-model="location"
            :rules="inputRules"
            variant="solo"
            label="Location"
            class="w-full"
          ></v-text-field>
          <v-text-field
            v-if="optionSelectedType == 'card'"
            v-model="card_detail"
            variant="solo"
            :rules="inputRules"
            label="Card Details"
            class="w-full"
          >
          </v-text-field>
          <v-text-field
            v-if="optionSelectedType == 'account'"
            v-model="card_detail"
            variant="solo"
            label="Account Id"
            :rules="inputRules"
            class="w-full"
          >
          </v-text-field>
          <v-text-field
            v-if="optionSelectedType == 'account'"
            v-model="csc"
            variant="solo"
            label="Account Pin"
            :rules="inputRules"
            class="w-full"
          >
          </v-text-field>
          <div
            v-if="optionSelectedType == 'card'"
            class="grid gap-2 w-full grid-cols-2 place-items-center"
          >
            <v-text-field
              v-model="expiry"
              variant="solo"
              class="w-full"
              label="Expiry Date YYMM"
              :rules="inputRules"
            ></v-text-field>
            <v-text-field
              v-model="csc"
              variant="solo"
              class="w-full"
              :rules="inputRules"
              label="CVV"
            ></v-text-field>
          </div>
          <v-btn
            v-if="
              optionSelectedType == 'card' || optionSelectedType == 'account'
            "
            @click="PayNow()"
            :disabled="valid"
            :loading="loading"
            color="blue"
            size="small"
            >Pay Now</v-btn
          >
          <div class="flex mt-2 justify-center items-center gap-1 w-full">
            <v-btn
              @click="ChangePaymet()"
              v-if="
                optionSelectedType == 'card' || optionSelectedType == 'account'
              "
              color="green"
              size="small"
              >Change Payment</v-btn
            >
            <v-btn @click="CancelOrder" color="red" size="small"
              >Cancel Order</v-btn
            >
          </div>
        </v-form>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import headerVue from "@/components/header.vue";
import mainpageVue from "@/components/mainpage.vue";
import { ChatBot } from "@/AICHATBOT/dialogflow";
export default defineComponent({
  name: "HomeView",
  components: {
    headerVue,
    mainpageVue,
  },
  computed: {
    valid() {
      if(this.$refs.form.validate()){
        return false
      }
      return true
    },
  },
  data: () => ({
    type: "default",
    paymentModal: false,
    inputRules: [
    (v) => (v && v.length >= 1) || 'Field is required'
  ],
    chat: false,
    open: false,
    transRef: "MTR" + Math.floor(Math.random() * 907947904292),
    loading: false,
    orderStatus: "",
    currentFood: "",
    currentDrink: "",
    isOptionSelected: true,
    optionSelectedType: "",
    currentOrder: {},
    justFood: false,
    orderBox: false,
    orderInfo: [
      "Preparing the order",
      "Packaging the order",
      "Shiping the order",
      "Delivered",
    ],
    email: "",
    location: "",
    card_detail: "",
    expiry: "",
    csc: "",
    dform: {},
    interval: 0,
    chats: [],
  }),
  methods: {
    prepareOrder() {
     
      let i = 0;
      this.orderStatus = "Pending";
      setInterval(() => {
        if (i == this.orderInfo.length) {
          setTimeout(()=>{
            this.currentFood = ""
            this.currentDrink = {}
          }, 5000)
         
          clearInterval(this.interval);
        } else {
          this.orderStatus = this.orderInfo[i];
          i += 1;
        }
      }, 8000);
    },
    async TryIt(message) {
      try {
        let res = await ChatBot(message);
        let data = await res.json();
        if (data.queryResult.parameters.greetings == "greetings") {
          let messages = data.queryResult.fulfillmentMessages[0].payload.message;
          let options = data.queryResult.fulfillmentMessages[0].payload.options;
          let randomnum = Math.floor(Math.random()* messages.length)
          let selectedMessage = messages[randomnum]
          let finalResponse = {message: selectedMessage, options: options}
          this.ChatBotMessage(finalResponse);
          return
        }
        let finalResponse = data.queryResult.fulfillmentMessages[0].payload;
        if (data.queryResult.parameters.isDrink == "isDrink") {
          if (this.currentFood == "") {
            this.ChatBotMessage({
              message: "You have not selected any food",
              userId: "",
            });
            this.TryIt("Order Food");
            return;
          }
        }
        if (data.queryResult.parameters.noDrink == "noDrink") {
          if (this.currentFood == "") {
            this.ChatBotMessage({
              message: "You have not selected any food",
              userId: "",
            });
            this.TryIt("Order Food");
            return;
          }else{
            this.justFood = true
            this.ChatBotMessage(finalResponse);
            this.TryIt('Proceeding to payment')
            return
          }
        }
        if (data.queryResult.parameters.selectedFood == "selectedFood") {
          this.ChatBotMessage(finalResponse);
          this.transRef = "MTR" + Math.floor(Math.random() * 907947904292);
          this.currentFood = data.queryResult.intent.displayName;
          this.currentOrder.trans = this.transRef
          this.currentOrder.Food = this.currentFood
          return;
        }
        if (data.queryResult.parameters.selectedDrink == "selectedDrink") {
          this.ChatBotMessage(finalResponse);
          this.currentDrink = data.queryResult.intent.displayName;
          this.currentOrder = {
            Food: this.currentFood,
            Drink: this.currentDrink,
            trans: this.transRef,
          };
          return;
        }
        if (data.queryResult.parameters.isPayment == "isPayment") {
          this.ChatBotMessage(finalResponse);
          setTimeout(() => {
            this.chat = false;
            this.paymentModal = true;
          }, 2000);
          return;
        }
        if (data.queryResult.parameters.isTrack == "isTrack") {
          this.ChatBotMessage(finalResponse)
          if (!this.currentOrder.trans) {
            this.ChatBotMessage({
              message: "You have no Order",
              userId: "",
            });
            return;
          }else{
            this.orderBox = true
            this.prepareOrder()
            return;
          }
          
          
        }
        if (data.queryResult.parameters.isCancel == "isCancel") {
          if (this.currentOrder.Food && this.currentOrder.Drink) {
            this.ChatBotMessage(finalResponse);
            this.paymentModal = false;
            (this.currentFood = ""),
              (this.currentDrink = ""),
              (this.currentOrder = {});
            this.chats = [];
            this.chat = true;
            this.ChatBotMessage({message: "We have clear all you current order"});
            return
          }else{
            this.ChatBotMessage({message: "You have no current order."});
            return
          }
        }
        this.ChatBotMessage(finalResponse);
      } catch (err) {
        this.ChatBotMessage({
              message: "Your bot is inactive, regenerate to start up",
              userId: "",
            });
      }
    },
    OpenChat() {
      this.chat = true;
      this.TryIt("Hello");
    },
    SendMessage() {
      if (!this.dform.message == "") {
        this.orderBox = false;
        this.UserMessage(this.dform.message);
      }
    },
    UserMessage(message) {
      this.dform.message = message;
      this.dform.userId = "user";
      this.chats.push(this.dform);
      this.TryIt(this.dform.message);
      this.dform = {};
    },
    ChatBotMessage(message) {
      this.dform = message;
      this.dform.userId = "";
      this.chats.push(this.dform);
      this.dform = {};
    },
    ChoosePayment(type) {
      this.isOptionSelected = false;
      this.optionSelectedType = type;
    },
    ChangePaymet() {
      this.isOptionSelected = true;
      this.optionSelectedType = "";
    },
    CancelOrder() {
      this.paymentModal = false;
      (this.currentFood = ""),
        (this.currentDrink = ""),
        (this.currentOrder = {});

      this.chats = [];
      this.chat = true;
      this.ChatBotMessage({ message: "Order Sucessfully Canceled" });
      this.ChatBotMessage({
        message: "Is there any thing i can help you with.",
      });
    },
    PayNow(){
      if(this.$refs.form.validate()){
        this.loading = true
        setTimeout(()=>{
          this.loading= false
          this.paymentModal = false
          this.chats = []
          this.chat = true
          this.ChatBotMessage({message:'Processing Payment.....'})
          
        },3000)
        setTimeout(()=>{
          this.ChatBotMessage({message:'Payment Succesfull. You can track your order by typing Track Order',options: ['Track order']})
          
        }, 6000)
      }
    }
  },
});
</script>
<style scoped>
.dialogg {
  height: 70vh !important;
  position: relative;
}
.warp {
  overflow: hidden !important;
}
.float {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.cover {
  border-top-left-radius: 0px !important;
}
.float .notf {
  position: absolute;
  top: 9%;
  left: -280%;
  height: 90%;
  transform: translate(200, -10%);
  width: 150px;
}
.message-wrap {
  height: 95%;
  overflow: hidden;
  overflow-y: scroll;
}
.message-wrap::-webkit-scrollbar {
  width: 8px;

  background: white;
}
.message-wrap::-webkit-scrollbar-thumb {
  background: green;
}
.my-float {
  margin-top: 16px;
}

.text-input {
  background: rgba(46, 42, 42, 0.623);
  color: white;
}
.text-input::placeholder {
  color: white;
  outline: none;
}

.btnss {
  border: 0 !important;
}
</style>
