<template>
    <div>

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
    props: {
        conteudo: {
            type: String,
            required: true
        }
    },
    components: {
        HomePadrao,
        PublicarVaga
    }
}
</script>

<style></style>