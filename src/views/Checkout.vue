<template>
  <div class="checkout">
    <Navbar></Navbar>
    <div class="container mt-5 pt-5 ml-2">
      <div class="row">
        <div class="col-md-8">
          <h4 class="py-4">Checkout Page</h4>
          <ul>
            <li v-for="item in this.$store.state.cart" class="media">
              <img
                :src="item.productImage"
                width="80px"
                class="align-self-center mr-3"
                alt=""
              />
              <div class="media-body">
                <h5 class="mt-0">
                  {{ item.productName }}

                  <span
                    class="float-right"
                    @click="$store.commit('removeFromCart', item)"
                    >X</span
                  >
                </h5>
                <p class="mt-0">{{ item.productPrice | currency }}</p>
                <p class="mt-0">Quantity : {{ item.productQuantity }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <p>Total Price : {{ this.$store.getters.totalPrice | currency }}</p>
          <card
            class="stripe-card"
            :class="{ complete }"
            stripe="pk_test_XXXXXXXXXXXXXXXXXXXXXXXX"
            :options="stripeOptions"
            @change="complete = $event.complete"
          />
          <button class="btn btn-primary mt-5" @click="pay">
            Buy the Items
          </button>
          <!-- <button
                  class="pay-with-stripe btn btn-primary mt-4"
                  @click="pay"
                  :disabled="!complete"
                >
                  Pay with credit card
                </button> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, createToken } from "vue-stripe-elements-plus";
import axios from "axios";
export default {
  data() {
    return {
      complete: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
      sessionId: "",
    };
  },
  components: { Card },
  methods: {
    pay() {
      let data = this.$store.state.cart.map((item) => ({
        [item.productId]: item.productQuantity,
      }));
      data = Object.assign({}, ...data);
      stripe
        .redirectToCheckout({
          sessionId: this.sessionId.id,
        })
        .then((result) => {});
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      // createToken().then((data) => console.log(data.token));
    },
  },
  created() {
    axios
      .post("")
      .then((response) => {
        this.sessionId = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;
  height: 40px;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}
.StripeElement--invalid {
  border-color: #fa755a;
}
.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>
