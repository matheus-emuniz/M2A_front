<template>
    <div>
		<h2 class="mb-6">Dados do Usuário</h2>

		<v-card class="mb-6">
			<v-tabs v-model="tab">
				<v-tab>Edição</v-tab>
			</v-tabs>
		</v-card>

		<v-tabs-items v-model="tab" class="pa-5 secondary">
			<!--Edição-->
			<v-tab-item>
				<edicao-dado></edicao-dado>
			</v-tab-item>
		</v-tabs-items>
	</div>
</template>

<script>
import EdicaoDado from '@/components/EdicaoDado';
import services from '@/services';

export default {
	components: {
		EdicaoDado
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
