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
.w-9 {
  width: 63% !important;
  height: 75px;
}
.text-center {
  text-align: center!important;
  width: 173px;
}
.text-2xl {
  font-size: 1rem !important;
}
.href[data-v-c90de95e] {
  text-decoration: none;
  color: #1f1e1e;
}
.shadow-2 {
  box-shadow: 0px 4px 10px rgb(0 0 0 / 3%), 0px 0px 2px rgb(0 0 0 / 6%), 0px 2px 6px rgb(0 0 0 / 12%) !important;
}
.layout-main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  padding: 5rem 2rem 2rem 0rem;
}
.href[data-v-c90de95e] {
  text-decoration: none;
  color: #1f1e1e;
}
.col-12 {
  width: 356px!important;
  height: 622px;
  padding: 15px 0;
}

.grid {
  display: grid!important;
  grid-template-columns: 1fr 1fr!important;
  margin-right: -2rem!important;
  margin-top: -0.5rem!important;
}

@media(max-width: 2000px) {
  .grid {
    display: none;
  }
}

@media(max-width: 500px) {
  .layout-wrapper {
    padding-left: 2.5rem;
  }
  .grid {
    display: grid;
  }
}

@media(max-width: 414px) {
  .layout-wrapper .layout-main-container {
    margin-left: -9px;
    padding-left: 0rem;
  }
}

</style>
