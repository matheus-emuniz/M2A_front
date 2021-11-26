<template>
    <div>
        <div>
            <h2 class="mb-6">Questionário</h2>
        </div>
        <div>
            <v-card class="mb-12 card-quest">
                <div v-for="(pergunta, index) in questionario.perguntas" :key="index">
                    <v-row align="start" class="row-card">
                        <v-col cols="12">
                            <h3>{{ pergunta.texto_pergunta }}</h3>
                        </v-col>
                        <v-col cols="12">
                            <v-radio-group v-model="respostas_questionario[index]" column>
                                <v-radio v-for="(resposta, index) in pergunta.respostas" :key="index"
                                    :label="resposta.texto_resposta" color="primary" :value="resposta.texto_resposta">
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                </div>
                <hr>
                <div class="d-flex justify-end pa-5">
                    <v-btn color="primary">
                        Enviar
                    </v-btn>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
    import services from '@/services';

    export default {
        data() {
            return {
                questionario: {
                    empresa: 1,
                    perguntas: [{
                        texto_pergunta: 'Pergunta 1',
                        respostas: [{
                               texto_resposta: 'a',
                                fundamento: 'Fundamento'
                            },
                            {
                                texto_resposta: 'b',
                                fundamento: 'Fundamento'
                            },
                            {
                                texto_resposta: 'c',
                                fundamento: 'Fundamento'
                            },
                            {
                                texto_resposta: 'd',
                                fundamento: 'Fundamento'
                            },
                        ]
                    }, {
                        texto_pergunta: 'Pergunta 2',
                        respostas: [{
                                texto_resposta: 'I',
                                fundamento: 'Fundamento'
                            },
                            {
                                texto_resposta: 'II',
                                fundamento: 'Fundamento'
                            },
                            {
                                texto_resposta: 'III',
                                fundamento: 'Fundamento'
                            },
                            {
                                texto_resposta: 'IV',
                                fundamento: 'Fundamento'
                            },
                        ]
                    }, {
                        texto_pergunta: 'Pergunta 3',
                        respostas: [{
                                texto_resposta: 'A',
                                fundamento: 'Fundamento'
                            },
                            {
                                texto_resposta: 'B',
                                fundamento: 'Fundamento'
                            },
                            {
                                texto_resposta: 'C',
                                fundamento: 'Fundamento'
                            },
                            {
                                texto_resposta: 'D',
                                fundamento: 'Fundamento'
                            },
                        ]
                    }, ]
                },

                respostas_questionario: [
                    "",
                    "",
                    ""
                ]
            };
        },

    }
</script>

<style>

.card-quest {
    padding: 35px;
}

.row-card {
    display: block;
}

</style>