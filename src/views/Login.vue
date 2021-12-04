<template>
	<v-container>
		<div class="d-flex flex-column align-center justify-center">
			<img class="my-6 mb-16" src="@/assets/m2a-logo.png" width="200" alt="logo m2a">
			<v-card class="pa-4" width="500px">
				<v-form @submit.prevent="login">
					<v-text-field label="E-mail" type="email" v-model:autofocus="email" :error="!!errors.username"
												:error-messages="errors.username"/>
					<v-text-field label="Senha" type="password" v-model="password" :error="!!errors.password"
												:error-messages="errors.password"/>

					<v-btn class="mt-4" color="primary" type="submit" :loading="loginLoading" width="100%">
						Entrar
					</v-btn>
				</v-form>
			</v-card>
		</div>
	</v-container>
</template>

<script>
import axios from 'axios';
import Services from '@/services';

export default {
	name: "Login",
	data() {
		return {
			email: '',
			password: '',
			loginLoading: false,
			errors: {},
		};
	},
	methods: {
		async login() {
			this.loginLoading = true;
			try {
				const {data: {token}} = await Services.login({
					username: this.email,
					password: this.password
				});
				localStorage.setItem('token', token);
				await this.$store.dispatch('getUser');
				await this.$router.push('/empresas');
			} catch (e) {
				console.log(e);
				this.errors = e.response.data;
				this.loginLoading = false;
			}
			this.loginLoading = false;
		}
	}
};
</script>

<style scoped>

</style>
