// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
    tailwindcss: {
        exposeConfig: true,
    },
    supabase: {
        redirectOptions: {
            login: "/login",
            callback: "/confirm",
            include: undefined,
            exclude: ["/"],
            cookieRedirect: false,
        },
    },
});
