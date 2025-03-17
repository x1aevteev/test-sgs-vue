import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { app } from './app'
import router from './app/providers/RouterProvider/router'

import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi'
    },
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
