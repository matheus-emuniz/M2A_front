<template>
	<v-data-table
	:headers="headers"
	:items="empresas">
	</v-data-table>
</template>

<script>
export default {
	name: "ListaEmpresa",
	data() {
		return {
			headers: [
				{
					text: 'Nome',
					value: 'fantasia',
				},
				{
					text: 'Empresa Vinculada',
					value: 'fk_master',
				},
				{
					text: 'Estado/UF',
					value: 'fk_uf',
				}
			],

			empresas: [],
		}
	},
	async mounted() {
		const { data } = await this.$axios.get('/empresas/');
		this.empresas = data;
	}
};
</script>

<style scoped>

</style>
