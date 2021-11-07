<template>
	<v-container>
		<img class="my-6" src="@/assets/m2a-logo.png" width="200" alt="logo m2a">

		<v-card color="#c4c4c4" class="mb-12">
			<v-toolbar color="primary" dark>
				<v-tabs fixed-tabs>
					<v-tab v-for="item in menuItems" :key="item.label" :to="item.to">
						{{ item.label }}
					</v-tab>
				</v-tabs>
			</v-toolbar>
		</v-card>

		<v-card color="#c4c4c4" class="px-8 py-5" style="color: #004976;">
			<router-view/>
		</v-card>

	</v-container>
</template>

<script>
export default {
	name: "Sistema",
	data() {
		return {
			menuItems: [
				{
					label: 'Diagnósticos',
					to: '/diagnosticos'
				},
				{
					label: 'Empresas',
					to: '/empresas',
				},
				{
					label: 'Grupos',
					to: '/grupos',
				},
				{
					label: 'Usuários',
					to: '/usuarios',
				},
				{
					label: 'Respostas automáticas',
					to: '/respostas',
				},
				{
					label: 'Dados',
					to: '/dados',
				},
			],
		};
	},
};
</script>

<style scoped>

</style>
