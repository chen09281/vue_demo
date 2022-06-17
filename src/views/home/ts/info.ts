/*
export const clickoutside = {
    bind(el:any,binding:any,vnode:any){
        function doc(e:any){
            // 判断点击的是否位元素本身
            if (el.contains(e.target)){
                return false
            }
            // 判断指令中是否绑定了函数
            if (binding.expression){
                // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
                binding.value(e)
            }
        }
        el.__vueClickOutside__ = documentHandler
        document.addEventListener("click",documentHandler)
    },
    update(){},
    unbind(el)
}*/
