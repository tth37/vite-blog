import { useScrollStore } from "../stores/scroll"

const scrollStore = useScrollStore()

export function scroll() {
    setTimeout(() => {
        window.scrollTo({
            duration: 300,
            ...scrollStore.position,
        })
    })
    
}