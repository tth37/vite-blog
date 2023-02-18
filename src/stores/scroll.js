import { defineStore } from "pinia"


export const useScrollStore = defineStore("scroll", {
    state: () => ({
        position: {},
    }),
    actions: {
        setPosition(position) {
            this.position = position
        }
    }
})