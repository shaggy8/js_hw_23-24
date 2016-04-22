({
    appDir: "../",
    baseUrl: "js",
    dir: "build",
    modules: [
        {
            name: "main"
        }
    ]
})

({
    baseUrl: ".",
    name: "main",
    out: "main-built.js",
    paths: {
        jquery: "empty:"
    }
})