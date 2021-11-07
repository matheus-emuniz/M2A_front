<template>
    <div>
        <v-form>
            <v-card class="mb-2">

                <v-card-text class="pa-5">
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field v-model="message3" filled label="Nome do Grupo" clearable></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>

                <div class="d-flex justify-start pa-5">
                    <div>
                        <v-checkbox v-model="checkbox1" :label="`Empresa 1`">
                        </v-checkbox>
                        <v-checkbox v-model="checkbox2" :label="`Empresa 2`">
                        </v-checkbox>
                        <v-checkbox v-model="checkbox3" :label="`Empresa 3`">
                        </v-checkbox>
                        <v-checkbox v-model="checkbox4" :label="`Empresa 4`">
                        </v-checkbox>
                    </div>
                    <div class="pl-15">
                        <v-checkbox v-model="checkbox5" :label="`Empresa 5`">
                        </v-checkbox>
                        <v-checkbox v-model="checkbox6" :label="`Empresa 6`">
                        </v-checkbox>
                        <v-checkbox v-model="checkbox7" :label="`Empresa 7`">
                        </v-checkbox>
                        <v-checkbox v-model="checkbox8" :label="`Empresa 8`">
                        </v-checkbox>
                    </div>
                    <div class="pl-15">
                        <v-checkbox v-model="checkbox9" :label="`Empresa 9`">
                        </v-checkbox>
                        <v-checkbox v-model="checkbox10" :label="`Empresa 10`">
                        </v-checkbox>
                        <v-checkbox v-model="checkbox11" :label="`Empresa 11`">
                        </v-checkbox>
                        <v-checkbox v-model="checkbox12" :label="`Empresa 12`">
                        </v-checkbox>
                    </div>
                    <div class="pl-15">
                        <v-checkbox v-model="checkbox13" :label="`Empresa 13`">
                        </v-checkbox>
                        <v-checkbox v-model="checkbox14" :label="`Empresa 14`">
                        </v-checkbox>
                        <v-checkbox v-model="checkbox15" :label="`Empresa 15`">
                        </v-checkbox>
                        <v-checkbox v-model="checkbox16" :label="`Empresa 16`">
                        </v-checkbox>
                    </div>
                </div>

                <div class="d-flex justify-end pa-5">
                    <v-btn class="mr-4">
                        Voltar
                    </v-btn>
                    <v-btn color="primary">
                        Salvar
                    </v-btn>
                </div>

            </v-card>
        </v-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkbox: false,
            }
        },
    }
</script>

<style scoped>
</style>