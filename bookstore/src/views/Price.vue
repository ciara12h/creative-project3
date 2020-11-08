<template>
    <div>
        <h2>Select a price range to browse</h2>
        <div style="background-color: aliceblue;" class="pure-menu pure-menu-horizontal">
            <ul class="pure-menu-list">
                <li class="pure-menu-item"><a @click="select('lowest')" href="#" class="pure-menu-link">Less than $5</a></li>
                <li class="pure-menu-item"><a @click="select('low')" href="#" class="pure-menu-link">$5-$10</a></li>
                <li class="pure-menu-item"><a @click="select('medium')" href="#" class="pure-menu-link">$10-$15</a></li>
                <li class="pure-menu-item"><a @click="select('high')" href="#" class="pure-menu-link">$15+</a></li>
            </ul>
        </div>
        <ProductList :products="products" />
    </div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'price',
  components: {
    ProductList
  },
  data() {
    return {
      range: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.range === this.range);
    }
  },
  methods: {
    select(range) {
      this.range = range;
    }
  }
}
</script>