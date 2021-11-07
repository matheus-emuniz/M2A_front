<template>
    <div>
        <v-form>
            <v-card class="mb-2">

                <v-card-text class="pa-5">
                    <v-row>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select :items="perfis" filled label="Perfil" />
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select :items="ufs" filled label="Estado/UF" />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field filled label="Nome do Usuário" />
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field filled label="E-mail do Usuário" />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field filled label="Telefone" />
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field filled label="Celular" />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field filled v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'"
                                name="input-10-1" label="Senha" hint="No mínimo 6 caracteres." counter
                                @click:append="show1 = !show1"></v-text-field>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field filled v-model="passwordConfirm"
                                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]"
                                :type="show2 ? 'text' : 'password'" name="input-10-1" label="Confirmação de Senha"
                                hint="No mínimo 6 caracteres." counter @click:append="show2 = !show2"></v-text-field>
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
        </v-form>
    </div>
</template>

<script>
    export default {
        data: () => ({
            perfis: ['Administrador', 'Cliente',
                'Cliente Master', 'Consultor', 'Consultor Master'
            ],
            ufs: [
                "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO",
                "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI",
                "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
            ],
            show1: false,
            show2: false,
            password: '',
            rules: {
                required: value => !!value || 'Obrigatório.',
                min: v => v.length >= 6 || 'Mínimo 6 caracteres.'
            },
        }),
    }
</script>

<style scoped>
</style>