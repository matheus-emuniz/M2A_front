<template>
    <div>
        <v-form>
            <v-card class="mb-2">
                <!-- SEARCH -->
                <v-card-text class="pa-5">
                    <v-row>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field filled label="Nome Fantasia" v-model="filters.fantasia" />
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field filled label="CNPJ" :items="cnpjs" v-model="filters.fk_cnpj"
                                v-mask="'##.###.###/####-##'" />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex" cols="12" sm="4">
                            <v-select filled label="Estado/UF" :items="ufs" v-model="filters.fk_uf" />
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="4">
                            <v-text-field filled label="Cidade" :items="citys" v-model="filters.fk_city" />
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="4">
                            <v-text-field filled label="Bairro" :items="bairros" v-model="filters.fk_bairros" />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex" cols="12" sm="4">
                            <v-text-field filled label="Nome do Projeto" :items="ndp" v-model="filters.fk_ndp" />
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="4">
                            <v-text-field filled label="Gestor do Projeto" :items="gdp" v-model="filters.fk_gdp" />
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="4">
                            <v-select filled label="Consultor" :items="cnslt" v-model="filters.fk_cnslt" />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex" cols="12" sm="4">
                            <v-select filled label="Segmento" :items="sgmnt" v-model="filters.fk_sgmnt" />
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="4">
                            <v-select filled label="Master" :items="masters" v-model="filters.fk_master" />
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="4">
                            <v-select filled label="Arrecadação" :items="rcdc" v-model="filters.fk_rcdc" />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex" cols="12" sm="4">
                            <v-select filled label="Setor" :items="setores" v-model="filters.fk_setores" />
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="4">
                            <v-select filled label="Situação" :items="situacao" v-model="filters.fk_situacao" />
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="4">
                            <v-select filled label="Tipo de Empresa" :items="tde" v-model="filters.fk_tipo" />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex" cols="12" sm="4">
                            <v-select filled label="Fase do Projeto" :items="fdp" v-model="filters.fk_fdp" />
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="4">
                            <v-select filled label="Ano do Projeto" :items="adp" v-model="filters.fk_adp" />
                        </v-col>
                    </v-row>
                </v-card-text>
                <!-- BUTTONS -->
                <div class="pa-5">
                    <v-row class="d-flex justify-end pa-5" style="width: 100%;">
                        <v-col cols="12" sm="2">
                            <v-btn color="secondary" @click="resetFilters" class="mr-10" style="width: 100%;">
                                Limpar
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="2">
                            <v-btn color="primary" @click="getDiagnosticos" :loading="loading" style="width: 100%;">
                                Buscar
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
            </v-card>
            <v-card class="mb-2">
                <!-- TABLE -->
                <v-data-table :headers="headers" :items="diagnosticos" :loading="loading">
                    <template v-slot:item.actions="{ item }">
                        <v-btn color="primary" class="mr-3" icon @click="editarDiagnostico(item)">
                            <v-icon>
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                        <v-btn color="error" icon @click="selecionarDiagnostico(item)">
                            <v-icon>
                                mdi-delete
                            </v-icon>
                        </v-btn>
                    </template>

                    <template v-slot:no-data>
                        <div class="d-flex flex-column justify-center pa-10">
                            <h3 class="mb-3">Nenhum usuário encontrado.</h3>

                            <v-btn>Cadastrar Usuário</v-btn>
                        </div>
                    </template>
                </v-data-table>
                <modal-confirmar-delete v-if="abrirDeletar" :nome="diagnosticoselecionado.name"
                    @deletar="deletarDiagnostico" @close="closeDeletar" />
            </v-card>
        </v-form>
    </div>
</template>

<script>
    import ModalConfirmarDelete from '@/components/ModalConfirmarDelete';
    import services from '@/services';
    export default {
        name: "ListaDiagnostico",
        data() {
            return {
                headers: [{
                        text: 'Empresa',
                        value: 'fantasia',
                    },
                    {
                        text: 'Tipo',
                        value: 'fk_tipo',
                    },
                    {
                        text: 'Consultor',
                        value: 'fk_cnslt',
                    },
                    {
                        text: 'Cliente',
                        value: 'fk_clnt',
                    },
                    {
                        text: 'Simples',
                        value: 'fk_smpl',
                    },
                    {
                        text: 'Completo',
                        value: 'fk_cmplt',
                    },
                    {
                        text: 'Gráficos',
                        value: 'fk_grfcs',
                    },
                    {
                        text: 'Ações',
                        value: 'actions'
                    }
                ],
                filters: {
                    fantasia: '',
                    fk_cnpj: '',
                    fk_uf: null,
                    fk_city: '',
                    fk_bairros: '',
                    fk_ndp: '',
                    fk_gdp: '',
                    fk_cnslt: null,
                    fk_sgmnt: null,
                    fk_master: null,
                    fk_rcdc: null,
                    fk_setores: null,
                    fk_situacao: null,
                    fk_sefk_tipotores: null,
                    fk_fdp: null,
                    fk_adp: null,
                },
                ufs: [
                    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO",
                    "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI",
                    "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
                ],
                cnslt: ["Santana"],
                sgmnt: ["Adestramento", "Agricultura e Pesca", "Agroenergia", "Agronegócios",
                    "Alimentação", "Aluguel de espaço físico", "Apicultura", "Artesanato", "Biotecnologia",
                    "Borracharia", "Café", "Carne", "Comércio Varejista", "Construção Civil",
                    "Consultoria Comercial", "Consultoria Empresarial", "Cosméticos", "Couro e Calçados",
                    "Cultura e Entretenimento", "Derivados de Cana", "Economia Criativa", "Estética",
                    "Fabr. de Prod. de Padaria e Confeitaria", "Floricultura", "Fruticultura", "Horticultura",
                    "Leite e Derivados", "Madeira e Móveis", "Mandiocultura", "Material de Construção", "MEI",
                    "Metal Mecânica", "Moda", "Não Informado", "Ovinocaprinocultura", "Pet Shop", "Petróleo e Gás",
                    "Pizzaria", "Química e Plásticos", "Rochas Ornamentais", "Salão de Beleza", "Serviços",
                    "Serviços Financeiros", "serviços médicos", "Sindicato", "Tecnologia da Informação",
                    "Têxtil e Confecções", "Turismo"
                ],
                masters: ["3W Consultoria Empresarial", "Caixa Crescer",
                    "Mauricio master", "ESPAÇO", "Sebrae Catalão", "Sebrae-GO/Valparaíso",
                    "SMPE-DF", "SINDIATACADISTA", "Boa Vista"
                ],
                rcdc: ["MEI - até R$81 mil", "0 até R$360 mil", "R$360 até R$3.600 mil",
                    "R$3.600 mil até R$5 milhões", "Acima de R$5 milhões"
                ],
                setores: ["Agronegócio", "Análise Clínica", "Comércio", "Indústria", "Micro e Pequenas Empresas",
                    "Serviços", "Serviços de Tecnologia da Informação", "Serviços de Turismo",
                    "Serviços Financeiros", "Outro"
                ],
                situacao: [
                    "Aberto",
                    "Aguardando Aprovação",
                    "Enviado",
                    "Concluído"
                ],
                tde: ["Associação/Cooperativa", "Cliente", "Filial", "Fornecedor", "Franquia", "Matriz", "Outros"],
                fdp: ['T0', 'T1', 'T2', 'T3', 'T4', 'T5'],
                adp: ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011'],
                pesquisaLoading: false,
            };
        },

        async mounted() {
            await this.getDiagnosticoFKS();
        },

        computed: {
            diagnosticos() {
                return this.$store.state.diagnosticos;
            },
            loading() {
                return this.pesquisaLoading;
            }
        },

        methods: {
            resetFilters() {
                this.filters = {
                    fantasia: '',
                    fk_cnpj: '',
                    fk_uf: null,
                    fk_city: '',
                    fk_bairros: '',
                    fk_ndp: '',
                    fk_gdp: '',
                    fk_cnslt: null,
                    fk_sgmnt: null,
                    fk_master: null,
                    fk_rcdc: null,
                    fk_setores: null,
                    fk_situacao: null,
                    fk_sefk_tipotores: null,
                    fk_fdp: null,
                    fk_adp: null,
                };
                this.getDiagnosticos();
            },

            async getDiagnosticos() {
                try {
                    this.pesquisaLoading = true;
                    const {
                        data
                    } = await services.getDiagnosticos(this.filters);
                    this.$store.commit('setDiagnosticos', data);
                    this.pesquisaLoading = false;
                } catch (e) {
                    console.log(e);
                    this.pesquisaLoading = false;
                }
            },

            async getDiagnosticoFKS() {
                const {
                    data
                } = await services.getDiagnosticoFKS();

                this.ufs = this.getFormatted(data.ufs, 'sg_uf');
                this.perfis = this.getFormatted(data.perfis, 'ds_perfil');
                this.emails = this.getFormatted(data.emails, 'ds_email');
            },

            getFormatted(arr, value) {
                return arr.map(item => ({
                    text: item[value],
                    value: item.id
                }));
            },
            async deletarDiagnostico(nome) {
                try {
                    const id = this.diagnosticos.find(diagnostico => diagnostico.fantasia === nome).id;
                    await this.$axios.delete(`/diagnosticos/${id}`);
                    this.closeDeletar();
                } catch (e) {
                    this.$store.commit('showToast');
                    console.log(e);
                }
            },

            editarDiagnostico(diagnostico) {
                this.diagnosticoselecionado = diagnostico;
            },

            closeDeletar() {
                this.diagnosticoselecionado = {};
                this.abrirDeletar = false;
            },

            selecionarDiagnostico(diagnostico) {
                this.diagnosticoselecionado = diagnostico;
                this.abrirDeletar = true;
            }
        }
    }
</script>

<style>
</style>