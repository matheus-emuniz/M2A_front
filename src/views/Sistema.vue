<template>
	<v-container>
		<div class="d-flex justify-space-between align-center">
			<img class="my-6" src="@/assets/m2a-logo.png" width="200" alt="logo m2a">
			<v-menu transition="slide-y-transition" bottom offset-y v-if="$store.state.user">
				<template v-slot:activator="{on, attrs}">
					<v-btn text v-bind="attrs"
								 v-on="on">
						{{nomeUsuario}}
						<v-icon right>
							mdi-chevron-down
						</v-icon>
					</v-btn>
				</template>

				<v-list nav>
					<v-list-item to="/dados">
						<v-list-item-content>
							Dados
						</v-list-item-content>
					</v-list-item>
					<v-list-item @click="logout">
						<v-list-item-content>
							Sair
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-menu>
		</div>

		<v-card color="#c4c4c4" class="mb-12">
			<v-toolbar color="primary" dark >
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
import Services from '@/services';

export default {
	name: "Sistema",
	data() {
		return {
			menuItems: [
				{
					label: 'Empresas',
					to: '/empresas',
				},
				{
					label: 'Questionário',
					to: '/questionario'
				},
				{
					label: 'Diagnósticos',
					to: '/diagnosticos'
				},
				// {
				// 	label: 'Grupos',
				// 	to: '/grupos',
				// },
				// {
				// 	label: 'Usuários',
				// 	to: '/usuarios',
				// },
				// {
				// 	label: 'Respostas automáticas',
				// 	to: '/respostas',
				// },
				{
					label: 'Dados',
					to: '/dados',
				},
			],
		};
	},

	computed: {
		nomeUsuario() {
			return this.$store.state.user.nome;
		}
	},

	mounted() {
		this.getUser();
	},

	methods: {
		async getUser() {
			const {data} = await Services.getUser();
			this.$store.commit('setUser', data);
		},

		logout() {
			localStorage.removeItem('token');
			this.$store.commit('setUser', null);

			this.$router.push('/');
		}
	}
};
</script>

<style scoped>

</style>
