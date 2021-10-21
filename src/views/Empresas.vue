<template>
	<div>
		<h2 class="mb-6">Empresas</h2>

		<v-card class="mb-6">
			<v-tabs v-model="tab">
				<v-tab>Lista</v-tab>
				<v-tab>Cadastro</v-tab>
				<v-tab disabled>Edição</v-tab>
			</v-tabs>
		</v-card>

		<v-tabs-items v-model="tab" class="pa-5 secondary">
			<!--Lista-->
			<v-tab-item>
				<lista-empresa></lista-empresa>
			</v-tab-item>

			<!--Cadastro-->
			<v-tab-item>
				<cadastro-empresa @sucesso-cadastro="sucessoCadastro"></cadastro-empresa>
			</v-tab-item>

			<!--Edição-->
			<v-tab-item>
				Edição
			</v-tab-item>
		</v-tabs-items>
	</div>
</template>

<script>
import CadastroEmpresa from '@/components/CadastroEmpresa';
import ListaEmpresa from '@/components/ListaEmpresa';

export default {
	name: "Empresas",
	components: {
		ListaEmpresa,
		CadastroEmpresa,
	},
	data() {
		return {
			tab: 0,
		};
	},
	async mounted() {
		this.getEmpresas();
	},
	methods: {
		async getEmpresas() {
			const { data } = await this.$axios.get('/empresas/');
			this.$store.commit('setEmpresas', data);
		},
		async sucessoCadastro() {
			this.tab = 0;
			await this.getEmpresas();
		}
	}
};
</script>

<style scoped>

</style>
