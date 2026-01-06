import websites from "../consts/websites"


export default {
    get(target, name) {
        if (name === "emailRaw") 
            return target.email
        
        if (name === "discord") return `https://${websites.discord}${target.discord.id}`
        if (name === "discordTag") return target.discord.tag

        if (name === 'telegram') return `${websites.telegram}${target.telegram.nickname}`
        if (name === 'telegramTag') return 'Telegram'

        return `${name === "email" ? "" : "https://"}${websites[name] ?? ""}${target[name]}`
    }
}
