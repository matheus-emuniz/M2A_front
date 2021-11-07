<template>
  <div>
    <v-form>
      <v-card class="mb-2">

        <v-card-text class="pa-5">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field filled v-model="message3" regular label="Nome do Grupo" clearable></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <div class="d-grid justify-start pa-5">
          <h2>
            Grupo:
          </h2>
          <v-btn class="primary mt-5">
            Relatório
          </v-btn>
        </div>

        <div class="d-flex justify-end pa-5">
          <v-btn class="blue" style="color: white;">
            Buscar
          </v-btn>
          <v-btn color="primary" style="margin-left: 10px">
            Salvar
          </v-btn>
        </div>

      </v-card>
    </v-form>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>