<template>
	<div v-if="$store.state.user">
		<v-form>
			<v-card class="mb-2">

				<v-card-text class="pa-5">
					<v-row>
						<v-col class="d-flex" cols="12" sm="6">
							<v-select :items="fks.perfis" filled label="Perfil" v-model="perfil"/>
						</v-col>
						<v-col class="d-flex" cols="12" sm="6">
							<v-select :items="fks.ufs" filled label="Estado/UF" v-model="uf"/>
						</v-col>
					</v-row>
					<v-row>
						<v-col class="d-flex" cols="12" sm="6">
							<v-text-field filled label="Nome do Usuário" v-model="nome"/>
						</v-col>
						<v-col class="d-flex" cols="12" sm="6">
							<v-text-field filled label="E-mail do Usuário" v-model="email"/>
						</v-col>
					</v-row>
					<v-row>
						<v-col class="d-flex" cols="12" sm="6">
							<v-text-field filled label="Telefone" v-mask="'(##) ####-####'" v-model="telefone"/>
						</v-col>
						<v-col class="d-flex" cols="12" sm="6">
							<v-text-field filled label="Celular" v-mask="'(##) #####-####'" v-model="celular"/>
						</v-col>
					</v-row>
				</v-card-text>

				<div class="d-flex justify-end pa-5">
					<v-btn class="mr-4">
						Voltar
					</v-btn>
					<v-btn color="primary">
						Salvar
					</v-btn>
				</div>

			</v-card>

			<v-card>

				<v-row>
					<v-col class="d-flex" cols="12" sm="4">
						<v-text-field filled v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
													:rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'"
													name="input-10-1" label="Senha" hint="No mínimo 6 caracteres." counter
													@click:append="show1 = !show1"></v-text-field>
					</v-col>
					<v-col class="d-flex" cols="12" sm="4">
						<v-text-field filled v-model="passwordConfirm"
													:append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
													:rules="[rules.required, rules.min]"
													:type="show2 ? 'text' : 'password'" name="input-10-1" label="Confirmação de Senha"
													hint="No mínimo 6 caracteres." counter
													@click:append="show2 = !show2"></v-text-field>
					</v-col>
					<v-col class="d-flex" cols="12" sm="4">
						<v-select :items="fks.situacoes" filled label="Situação" v-model="situacao"/>
					</v-col>
				</v-row>

			</v-card>
		</v-form>
	</div>
</template>

<script>
import Services from '@/services';
import {getFormatted} from '@/utils';

export default {
	data() {
		return {
			nome: this.$store.state.user.nome,
			email: this.$store.state.user.user.email,
			telefone: this.$store.state.user.telefone,
			celular: ['61987654321'],
			perfil: this.$store.state.user.perfil,
			uf: this.$store.state.user.uf,
			situacao: this.$store.state.user.situacao,
			show1: false,
			show2: false,
			password: '',
			passwordConfirm: '',
			rules: {
				required: value => !!value || 'Obrigatório.',
				min: v => v.length >= 6 || 'Mínimo 6 caracteres.'
			},

			fks: {
				ufs: [],
				perfis: [],
				situacoes: [],
			}
		};
	},

	mounted() {
		this.getUsuarioFks();
	},

	methods: {
		async getUsuarioFks() {
			try {
				const {data} = await Services.getUserFks();
				this.fks.ufs = getFormatted(data.ufs, 'sg_uf');
				this.fks.perfis = getFormatted(data.perfis, 'nm_perfil');
				this.fks.situacoes = getFormatted(data.situacoes, 'nome_situacao');
			} catch (e) {
				console.log(e);
			}
		},

		async updateUsuario() {
			try {
				const {data} = await Services.updateUser(this.$store.state.user.id);
			} catch (e) {
				console.log(e);
			}
		},
	}
};
</script>

<style scoped>
</style>
