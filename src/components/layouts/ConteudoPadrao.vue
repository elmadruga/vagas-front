<template>
    <div>
       
        <home-padrao></home-padrao>
        <publicar-vaga></publicar-vaga>
    </div>
</template>

<script>
import HomePadrao from '../views/HomePadrao.vue'
import PublicarVaga from '../views/PublicarVaga.vue'
export default {
    name: 'ConteudoPadrao',
    components: {
        HomePadrao,
        PublicarVaga
    }
}
</script>

<style></style>