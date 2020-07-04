export { default as Logo } from '../../components/Logo.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as LoginForm } from '../../components/loginForm.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/VuetifyLogo'}" */).then(c => c.default || c)
export const LazyLoginForm = import('../../components/loginForm.vue' /* webpackChunkName: "components/loginForm'}" */).then(c => c.default || c)
