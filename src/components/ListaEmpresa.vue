<template>
	<section>
		<v-card class="mb-2">

			<v-card-text class="pa-5">
				<v-row>
					<v-col>
						<v-text-field filled append-icon="mdi-magnify" label="Pesquisar" v-model="filters.search" />
					</v-col>

					<v-col>
						<v-select filled label="UF" :items="ufs" v-model="filters.fk_uf" />
					</v-col>

					<v-col>
						<v-select filled label="Empresa Vinculada" :items="empresas_vinculadas" v-model="filters.fk_master" />
					</v-col>

					<v-col>
						<v-select filled label="Arrecadação" :items="valores_arrecadacoes"
							v-model="filters.fk_valor_arrecadacao" />
					</v-col>

					<v-col>
						<v-select filled label="Setor" :items="setores" v-model="filters.fk_setor" />
					</v-col>
				</v-row>

				<!-- BUTTONS ALTERNATIVE
				<v-row class="pa-5" style="justify-content: space-evenly">
					<v-btn color="secondary" @click="resetFilters" style="width: 15%">Limpar</v-btn>
					<v-btn color="primary" @click="getEmpresas" style="width: 25%" :loading="loading">Pesquisar</v-btn>
				</v-row> -->

				<!-- BUTTONS -->
				<div class="pa-5">
					<v-row class="d-flex justify-end pa-5" style="width: 100%;">
						<v-col cols="12" sm="2">
							<v-btn color="secondary" @click="resetFilters" style="width: 100%">Limpar</v-btn>
						</v-col>
						<v-col cols="12" sm="2">
							<v-btn color="primary" @click="getEmpresas" style="width: 100%" :loading="loading">Pesquisar
							</v-btn>
						</v-col>
					</v-row>
				</div>
			</v-card-text>
		</v-card>
		<v-data-table :headers="headers" :items="empresas" :loading="loading">
			<template v-slot:item.actions="{ item }">
				<v-btn color="primary" class="mr-3" icon @click="editarEmpresa(item)">
					<v-icon>
						mdi-pencil
					</v-icon>
				</v-btn>
				<v-btn color="error" icon @click="selecionarEmpresa(item)">
					<v-icon>
						mdi-delete
					</v-icon>
				</v-btn>
			</template>

			<template v-slot:no-data>
				<div class="d-flex flex-column justify-center pa-10">
					<h3 class="mb-3">Nenhuma empresa encontrada.</h3>

					<v-btn>Cadastrar Empresa</v-btn>
				</div>
			</template>
		</v-data-table>

		<modal-confirmar-delete v-if="abrirDeletar" :nome="empresaSelecionada.fantasia" @deletar="deletarEmpresa"
			@close="closeDeletar" />
	</section>
</template>

<script>
	import ModalConfirmarDelete from '@/components/ModalConfirmarDelete';
	import services from '@/services';

	export default {
		name: "ListaEmpresa",
		components: {
			ModalConfirmarDelete
		},
		data() {
			return {
				empresaSelecionada: {},
				abrirDeletar: false,
				headers: [{
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
					},
					{
						text: 'Ações',
						value: 'actions'
					}
				],
				filters: {
					search: '',
					fk_uf: null,
					fk_master: null,
					fk_valor_arrecadacao: null,
					fk_setor: null,
				},
				ufs: [],
				setores: [],
				valores_arrecadacoes: [],
				empresas_vinculadas: [],
				pesquisaLoading: false,
			};
		},

		async mounted() {
			await this.getEmpresaFKS();
		},

		computed: {
			empresas() {
				return this.$store.state.empresas;
			},
			loading() {
				return this.pesquisaLoading;
			}
		},

		methods: {
			resetFilters() {
				this.filters = {
					fk_uf: null,
					fk_master: null,
					fk_valor_arrecadacao: null,
					fk_setor: null,
				};
				this.getEmpresas();
			},

			async getEmpresas() {
				try {
					this.pesquisaLoading = true;
					const {
						data
					} = await services.getEmpresas(this.filters);
					this.$store.commit('setEmpresas', data);
					this.pesquisaLoading = false;
				} catch (e) {
					console.log(e);
					this.pesquisaLoading = false;
				}
			},

			async getEmpresaFKS() {
				const {
					data
				} = await services.getEmpresaFKS();

				this.ufs = this.getFormatted(data.ufs, 'sg_uf');
				this.setores = this.getFormatted(data.setores, 'ds_setor');
				this.valores_arrecadacoes = this.getFormatted(data.valores_arrecadacoes, 'ds_valor_arrecadacao');
				this.empresas_vinculadas = this.getFormatted(data.empresas_vinculadas, 'fantasia');
				console.log(this.empresas_vinculadas);
			},

			getFormatted(arr, value) {
				return arr.map(item => ({
					text: item[value],
					value: item.id
				}));
			},

			async deletarEmpresa(nome) {
				try {
					const id = this.empresas.find(empresa => empresa.fantasia === nome).id;
					await this.$axios.delete(`/empresas/${id}`);
					this.closeDeletar();
				} catch (e) {
					this.$store.commit('showToast');
					console.log(e);
				}
			},

			editarEmpresa(empresa) {
				this.empresaSelecionada = empresa;
			},

			closeDeletar() {
				this.empresaSelecionada = {};
				this.abrirDeletar = false;
			},

			selecionarEmpresa(empresa) {
				this.empresaSelecionada = empresa;
				this.abrirDeletar = true;
			}
		}
	};
</script>

<style scoped>

</style>
