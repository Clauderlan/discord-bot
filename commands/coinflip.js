module.exports = {
    name: 'coinflip',
    description: 'Cara ou Coroa.',
    execute(message, args){
        num = Math.random() * 100;
        if (num < 50){
            message.reply('DEU CARA !');
        }
        else if (num > 50){
            message.reply('DEU COROA !');
        }
    }
}