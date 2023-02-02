import { createApp } from 'vue'
import App from './App.vue'

//aqui é feita a importação do mitt
import mitt from 'mitt'

//aqui é criada a instância do pacote mitt
const emitter = mitt()

//iniciar a instância do Vue com base no componente
//createApp(App).mount('#app')
const app = createApp(App)

//configuar a instância do pacote mitt como sendo uma propriedade global
//essa propriedade estará disponível para todas as instâncias do componente dentro do app
app.config.globalProperties.emitter = emitter

//associar a instância do Vue com o elemento HTML de id app
app.mount('#app')
