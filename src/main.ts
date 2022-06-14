import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css'
import qs from 'qs'

router.beforeEach((to,from,next)=>{
    if (to.meta.title){
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.title = to.meta.title
    }
    next()
})
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
createApp(App).use(router).use(qs).mount('#app')
