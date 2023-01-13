const route = (event) => {
    event = event || window.event

    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handleLocation()
};

const routes = {
    404 : "/pages/404.html",
    "/home" : "/pages/home.html",
    "/the-universe" : "/pages/the-universe.html",
    "/exploration" : "pages/exploration.html",
};

const handleLocation = async () => {
    const { pathname } = window.location
    const route = routes[pathname] || routes[404]
    const html = await fetch(route).then((data) => data.text())

    document.querySelector('#app').innerHTML = html
}

window.onpopstate = handleLocation

window.route = route

handleLocation()