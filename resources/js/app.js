const process = require('process')
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from './Layouts/AppLayout.vue'

InertiaProgress.init()


createInertiaApp({
    // resolve: name => require(`./Pages/${name}`),
    resolve: name => {
        const page = require(`./Pages/${name}`).default
        page.layout = page.layout || Layout
        return page
    },
    title: title => title ? `${title} - Inertia` : 'Inertia',
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})