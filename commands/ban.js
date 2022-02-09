module.exports = {
    name: "ban",
    description: "Commando que exala toxic.",
    execute(message, args){
        const member = message.mentions.users.first();
        if (member){
            const memberTag = message.guild.members.cache.get(member.id);
            memberTag.ban();
        }
        else {
            message.reply('Esse membro não foi encontrado, F.')
        }
    }
}