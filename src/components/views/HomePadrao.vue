<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <pesquisar-vaga></pesquisar-vaga>
            </div>
        </div>

        <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
            <div class="col">
                <vaga-padrao v-bind="vaga" />
            </div>
        </div>

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
import PesquisarVaga from '@/components/common/PesquisarVaga.vue'
import VagaPadrao from '@/components/common/VagaPadrao.vue'

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
        VagaPadrao
    },
    data: () => ({
        usuariosOnline: 0,
        vagas: []
    }),
    methods: {
        getUsuariosOnline() {
            this.usuariosOnline = Math.floor(Math.random() * 101) //gera valores aleatórios entre o e 100
        }
    },
    created() {
        setInterval(this.getUsuariosOnline, 1000) //a cada 1 segundo
    },
    activated() {
        this.vagas = JSON.parse(localStorage.getItem('vagas'))
    }
}
</script>

<style>

</style>