module.exports = {
    name: 'sortear',
    description: 'Sorteia valores.',
    execute(message, args){
        function randint(arr){
            for (let i = arr.length - 1; i > 0; i--) {
                // Escolhendo elemento aleatório
            const j = Math.floor(Math.random() * (i + 1));
            // Reposicionando elemento
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        // Retornando array com aleatoriedade
        return arr;
        }

        args = randint(args);
        message.channel.send('Sorteio finalizado :');
        for(var x = 0; x < args.length; x++){
            message.channel.send(`**${x + 1}º Sorteado** - ${args[x]}`);
        }
        
        
    }
}