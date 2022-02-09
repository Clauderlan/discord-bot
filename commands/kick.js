module.exports = {
    name: "kick",
    description: "Esse comando kick alguém.",
    execute(message, args){
        const member = message.mentions.users.first();
        if (member){
            const memberTag = message.guild.members.cache.get(member.id);
            memberTag.kick();
        }
        else {
            message.reply('Esse membro não foi encontrado, F.')
        }
    }
}