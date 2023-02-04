<template>
  <div>
    <vagas-favoritas />
    <TopoPadrao @navegar="componente = $event" />
    <alerta-padrao v-if="exibirAlerta" :tipo="alerta.tipo">
      <template v-slot:titulo>
        <h5>{{ alerta.titulo }}</h5>
      </template>
      <p>{{ alerta.descricao }}</p>
    </alerta-padrao>
    <ConteudoPadrao v-if="visibilidade" :conteudo="componente "></ConteudoPadrao>
  </div>
</template>

<script>
import AlertaPadrao from '@/components/common/AlertaPadrao.vue'
import ConteudoPadrao from '@/components/layouts/ConteudoPadrao.vue'
import VagasFavoritas from '@/components/common/VagasFavoritas.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  data: () => ({
    visibilidade: true,
    componente: 'HomePadrao',
    exibirAlerta: false,
    alerta: {titulo: '', descricao: '', tipo: ''}
  }),

  components: {
    ConteudoPadrao,
    TopoPadrao,
    VagasFavoritas,
    AlertaPadrao
  },
  mounted() {
    this.emitter.on('alerta', (a) => {
      this.alerta = a
      this.exibirAlerta = true
      setTimeout(() => this.exibirAlerta = false, 4000)
    })
  }
}
</script>

<style>

</style>
