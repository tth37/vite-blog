import { useScrollStore } from "../stores/scroll"

const scrollStore = useScrollStore()

export function scroll() {
    setTimeout(() => {
        document.documentElement.scrollTo( {
            duration: 300,
            ...scrollStore.position,
        })
    })
    
}