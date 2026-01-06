import proxy from "../proxies/media"

const media = {
    discord: {
        id: "914240860101681163",
        tag: "fahri.dev.",
    },
    stackOverflow: {
        id: "19758208",
        name: "fahri",
    },
    github: "softerboy",
    figma: "fahri_dev",
    replit: "FahriDev",
    codewars: "FahriUmarov",
    devTo: "fahriumarov",
    cssBattle: "fahri_dev",
    codepen: "fahri_dev",
    dribble: "Fahri_dev",
    email: "fn.umarov@gmail.com",
    telegram: {
        nickname: "in_code"
    }
}

export default new Proxy(media, proxy);
