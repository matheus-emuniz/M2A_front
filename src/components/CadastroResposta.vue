<template>
    <div>
        <v-form>
            <v-card class="mb-2">

                <v-card-text class="pa-5">
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field filled label="Resposta" clearable></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-text-field filled label="Valor" clearable></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="2">
                            <v-btn class="ma-1" fab dark small color="green">
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field v-model="resposta4" filled label="Resposta" clearable></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-text-field v-model="valor4" filled label="Valor" clearable></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="2">
                            <v-btn class="ma-1" fab dark small color="error">
                                <v-icon dark>
                                    mdi-minus
                                </v-icon>
                            </v-btn>
                            <v-btn class="ma-1" fab dark small color="green">
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field v-model="resposta3" filled label="Resposta" clearable></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-text-field v-model="valor3" filled label="Valor" clearable></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="2">
                            <v-btn class="ma-1" fab dark small color="error">
                                <v-icon dark>
                                    mdi-minus
                                </v-icon>
                            </v-btn>
                            <v-btn class="ma-1" fab dark small color="green">
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field v-model="resposta2" filled label="Resposta" clearable></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-text-field v-model="valor2" filled label="Valor" clearable></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="2">
                            <v-btn class="ma-1" fab dark small color="error">
                                <v-icon dark>
                                    mdi-minus
                                </v-icon>
                            </v-btn>
                            <v-btn class="ma-1" fab dark small color="green">
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field v-model="resposta1" filled label="Resposta" clearable></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-text-field v-model="valor1" filled label="Valor" clearable></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="2">
                            <v-btn class="ma-1" fab dark small color="error">
                                <v-icon dark>
                                    mdi-minus
                                </v-icon>
                            </v-btn>
                            <v-btn class="ma-1" fab dark small color="green">
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <!-- BUTTONS -->
                    <v-row>
                        <v-col cols="12" sm="6">
                            <div class="d-flex justify-start pa-5">
                                <v-btn color="primary">
                                    Ver Respostas
                                </v-btn>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="d-flex justify-end pa-5">
                                <v-btn class="mr-4">
                                    Voltar
                                </v-btn>
                                <v-btn color="primary">
                                    Salvar
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>

            </v-card>
        </v-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                resposta4: 'A - Não é feito nenhuma separação/segmentação/agrupamento de clientes',
                valor4: 4,
                resposta3: 'B - A separação/segmentação/agrupamento é feito de forma intuitiva sem definição clara dos tipos de clientes',
                valor3: 3,
                resposta2: 'C - A separação/segmentação/agrupamento é feito de forma planejada utilizando dados dos clientes',
                valor2: 2,
                resposta1: 'D - A separação/segmentação/agrupamento é feito de forma planejada e as informações são utilizadas para melhor atender os clientes atuais e captar novos',
                valor1: 1,
            }
        },
    }
</script>

<style scoped>
</style>