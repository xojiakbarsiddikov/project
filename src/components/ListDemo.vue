<template>
	<div class="grid">
		<div class="col-12" style="width: 414px;">
			<div class="card">
						<div class="col-12 md:col-4">
                <div class="card-product">
                  <div class="grid">
                    <router-link class="href" v-for="card in cards" :key="card.id" :to="'/city/' + card.title">
                      <div class="text-center">
                        <img src="../assets/images/hilton.jpg" class="w-9 shadow-2 my-3 mx-0">
                        <div class="text-2xl font-bold">{{ card.title }}</div>
                      </div>
                    </router-link>
                  </div>
                </div>
						</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
	export default {
		data() {
			return {
				dataviewValue: null,
				layout: 'grid',
				sortKey: null,
				sortOrder: null,
				sortField: null,
        cards: []
			}
		},
    mounted() {
      axios
          .get('http://localhost:3000/prodcut')
          .then(response => (this.cards = response.data))
          .catch((err) => {
            console.log(err)
          })
    }
  }
</script>

<style scoped lang="scss">
@import '../assets/demo/badges.scss';

</style>
