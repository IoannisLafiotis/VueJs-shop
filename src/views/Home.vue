<template>
  <div class="home container">
    <Navbar />
    <Hero />
    <Product-list></Product-list> -->

    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img src="/img/svg/product.svg" alt="" width="400" />
        </div>
        <div class="col-md-6">
          <h3>Learn More About us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam
            reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum,
            voluptas exercitationem ratione consectetur et!
          </p>
          <button class="btn custom-btn btn-outline-primary mr-4">
            Browse Products
          </button>
        </div>
      </div>
    </div>
    <Login></Login>
    <!-- Modal -->
    <mini-cart></mini-cart>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/Login.vue";
import Products from "@/views/Products";
import ProductList from "../sections/ProductList";
import Hero from "@/components/Hero.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Login,
    ProductList,
    Hero,
  },
};
</script>
