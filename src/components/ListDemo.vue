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
                        <div class="text-2xl font-bold">{{card.title}}</div>
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

	export default {
		data() {
			return {
				dataviewValue: null,
				layout: 'grid',
				sortKey: null,
				sortOrder: null,
				sortField: null,
        cards: [
          {
            id: 1,
            title: 'andijon',
          },
          {
            id: 2,
            title: 'namangan',
          },
          {
            id: 3,
            title: 'fargona',
          },
          {
            id: 4,
            title: 'samarkand',
          },
          {
            id: 5,
            title: 'toshkent',
          },
          {
            id: 6,
            title: 'buxoro',
          },
          {
            id: 7,
            title: 'xiva',
          },
          {
            id: 8,
            title: 'jizzax',
          },
          {
            id: 9,
            title: 'sirdaryo',
          },
          {
            id: 10,
            title: 'surxandaryo',
          },
          {
            id: 11,
            title: 'xorezm',
          },
          {
            id: 12,
            title: 'qashqadaryo',
          },
        ]
			}
		},
	}
</script>

<style scoped lang="scss">
@import '../assets/demo/badges.scss';

</style>
