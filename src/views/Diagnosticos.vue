<template>
    <div>
		<h2 class="mb-6">Diagnósticos</h2>

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
				<lista-diagnostico></lista-diagnostico>
			</v-tab-item>

			<!--Cadastro-->
			<v-tab-item>
				<cadastro-diagnostico></cadastro-diagnostico>
			</v-tab-item>

			<!--Edição-->
			<v-tab-item>
				Edição
			</v-tab-item>
		</v-tabs-items>
	</div>
</template>

<script>
import CadastroDiagnostico from '@/components/CadastroDiagnostico';
import ListaDiagnostico from '@/components/ListaDiagnostico';
import services from '@/services';

export default {
	components: {
		CadastroDiagnostico,
		ListaDiagnostico
	},
	data() {
		return {
			tab: 0,
		};
	},

}
</script>

<style>

</style>