import { defineStore } from "pinia"
import axios from "axios"

const CONFIG_URL = "/api/config"

export const useConfigStore = defineStore("config", {
    state: () => ({
        postsPerPage: 0,
        totPage: 0,
        tagTotPage: {},
        categoryTotPage: {}
    }),
    actions: {
        async init() {
            const config = await axios.get(CONFIG_URL)
            this.postsPerPage = config.data.postsPerPage
            this.totPage = config.data.totPage
            this.tagTotPage = config.data.tagTotPage
            this.categoryTotPage = config.data.categoryTotPage
        }
    }
})