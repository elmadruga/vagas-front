<template>
  <div>
    <vagas-favoritas />
    <TopoPadrao @navegar="componente = $event" />
    <alerta-padrao v-if="exibirAlerta">
        <template v-slot:titulo>
          <h5>Título do alerta</h5>
        </template>

        <template v-slot:descricao>
          <p>Descrição do alerta</p>
        </template>
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
    exibirAlerta: false
  }),

  components: {
    ConteudoPadrao,
    TopoPadrao,
    VagasFavoritas,
    AlertaPadrao
  },
  mounted() {
    this.emitter.on('alerta', () => {
      this.exibirAlerta = true
      setTimeout(() => this.exibirAlerta = false, 4000)
      console.log('Apresentar a mensagem de alerta customizada')
    })
  }
}
</script>

<style>

</style>
