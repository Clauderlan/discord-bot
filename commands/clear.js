module.exports = {
    name: 'clear',
    description: 'Limpa o chat !',
    async execute(message, args){
        if (!args[0]) return message.reply('Algo está errado no seu comando.');
        if (args[0] > 100) return message.reply('Só posso limpar até 100 msg.');
        if (args[0] < 0) return message.reply('Cara, só posso limpar números positivos né ...');

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
}