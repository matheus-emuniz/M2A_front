<template>
	<v-data-table
	:headers="headers"
	:items="empresas">
	</v-data-table>
</template>

<script>
export default {
	name: "ListaEmpresa",
	computed: {
		empresas() {
			return this.$store.state.empresas;
		}
	},
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
		}
	},
};
</script>

<style scoped>

</style>
