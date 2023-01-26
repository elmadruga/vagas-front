<template>
  <div>
    <h1>Componente App</h1>
    <button @click="desmontarComponente">Desmontar o componente conteudo</button>
    <TopoPadrao />
    <ConteudoPadrao v-if="visibilidade"></ConteudoPadrao>
  </div>
</template>

<script>
import ConteudoPadrao from '@/components/layouts/ConteudoPadrao.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  data: () => ({
    visibilidade: true
  }),
methods: {
  desmontarComponente() {
    this.visibilidade = false
  }
},
  components: {
    ConteudoPadrao,
    TopoPadrao
  }
}
</script>

<style>

</style>
