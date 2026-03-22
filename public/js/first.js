document.addEventListener("DOMContentLoaded", () => {
    AOS.init()
    async function redirectToIndex() {
        await new Promise(resolve => setTimeout(resolve, 3200))
        window.location.href = "indexSite.html"

    }
    redirectToIndex()

})