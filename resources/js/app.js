const process = require('process')
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'


InertiaProgress.init()


createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    title: title => title ? `${title} - Inertia` : 'Inertia',
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})