<template>
    <div>
        <button @click="conteudo = 'home-padrao'">Home</button>
        <button @click="conteudo = 'publicar-vaga'">Publicar Vaga</button>
        <!--<home-padrao></home-padrao>-->
        <!--<publicar-vaga></publicar-vaga>-->
       <keep-alive>
            <component :is="conteudo" />
        </keep-alive>
       
    </div>
</template>

<script>
import HomePadrao from '@/components/views/HomePadrao.vue'
import PublicarVaga from '@/components/views/PublicarVaga.vue'
export default {
    name: 'ConteudoPadrao',
    components: {
        HomePadrao,
        PublicarVaga
    },
    data: () => ({
        conteudo: 'home-padrao'
    })
}
</script>

<style></style>