<template>
    <div>
        <h2> Select a Series to Browse</h2>
        <div style="background-color: aliceblue;" class="pure-menu pure-menu-horizontal">
            <ul class="pure-menu-list">
                <li class="pure-menu-item"><a @click="select('Harry Potter')" href="#" class="pure-menu-link">Harry Potter</a></li>
                <li class="pure-menu-item"><a @click="select('Rangers Apprentice')" href="#" class="pure-menu-link">Ranger's Apprentice</a></li>
                <li class="pure-menu-item"><a @click="select('Throne of Glass')" href="#" class="pure-menu-link">Throne of Glass</a></li>
                <li class="pure-menu-item"><a @click="select('Percy Jackson')" href="#" class="pure-menu-link">Percy Jackson</a></li>
            </ul>
        </div>
        <ProductList :products="products" />
    </div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Browse',
  components: {
    ProductList
  },
  data() {
    return {
      series: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.series === this.series);
    }
  },
  methods: {
    select(series) {
      this.series = series;
    }
  }
}
</script>