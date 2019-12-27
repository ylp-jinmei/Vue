import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({

    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/app',
            hidden: true
        },
        {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/index',
            name: 'index',
            component: () =>
                import ('../pages/index'),
            hidden: true
        }
    ]
})