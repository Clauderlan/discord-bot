module.exports = {
    name: "ping",
    description: "Esse comando informa o ping.",
    execute(message, args){
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! Essa mensagem tem uma latencia de : ${timeTaken}ms.`);
    }
}