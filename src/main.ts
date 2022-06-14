import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css'

router.beforeEach((to,from,next)=>{
    if (to.meta.title){
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.title = to.meta.title
    }
    next()
})
createApp(App).use(router).mount('#app')
