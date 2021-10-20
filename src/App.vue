<template>
	<v-app>
		<v-main>
			<router-view/>
		</v-main>

		<v-footer dark color="accent1" class="justify-center">
			<span>M2A CONSULTORIA © TODOS OS DIREITOS RESERVADOS.</span>
		</v-footer>

		<v-snackbar v-model="$store.state.errorToast.show" color="error" right :timeout="3000">
			{{ $store.state.errorToast.text }}
		</v-snackbar>
		<v-snackbar v-model="$store.state.infoToast.show" color="info" right :timeout="3000">
			{{ $store.state.infoToast.text }}
		</v-snackbar>
	</v-app>
</template>

<script>

export default {
	name: 'App',

	data: () => ({
		//
	}),
};
</script>
