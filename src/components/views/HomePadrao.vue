<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <pesquisar-vaga></pesquisar-vaga>
            </div>
        </div>
        
        <lista-vagas>
            
           <!--
            <template v-slot:titulo="slotProps">
                {{ slotProps.dadosTitulo.titulo }}
                <hr>
            </template>

            <template v-slot:default="slotProps">
                {{ slotProps.vagas }}
                <hr>
            </template>

            <template v-slot:rodape="slotProps">
                {{ slotProps.dadosRodape.titulo }}
            </template>
            --> 
        
        </lista-vagas>
        
        <div class="row mt-5">
            <div class="col-4">
                <indicador-vagas titulo="Vagas abertas" indicador="100" bg="bg-dark"
                    color="text-white"></indicador-vagas>
            </div>

            <div class="col-4">
                <indicador-vagas titulo="Profissionais cadastrados" indicador="225" bg="bg-dark"
                    color="text-white"></indicador-vagas>
            </div>

            <div class="col-4">
                <indicador-vagas titulo="Visitantes online" :indicador="usuariosOnline" bg="bg-light"
                    color="text-dark"></indicador-vagas>
            </div>
        </div>
    </div>
</template>

<script>
import IndicadorVagas from '@/components/common/IndicadorVagas.vue'
import ListaVagas from '@/components/common/ListaVagas.vue'
import PesquisarVaga from '@/components/common/PesquisarVaga.vue'


export default {
    name: 'HomePadrao',
    
    deactivated() {

    },
    beforeUnmount() {

    },
    unmounted() {

    },
    components: {
        PesquisarVaga,
        IndicadorVagas,
        ListaVagas
    },
    data: () => ({
        usuariosOnline: 0,
    }),
    methods: {
        getUsuariosOnline() {
            this.usuariosOnline = Math.floor(Math.random() * 101) //gera valores aleatórios entre o e 100
        }
    },
    created() {
        setInterval(this.getUsuariosOnline, 1000) //a cada 1 segundo
    }
    
}
</script>

<style>

</style>