const lang = {

    local: 'pt-br',

    on: 'On',
    off: 'Off',
    /* Errors */
    error: {
        noPermission: (emote, user) => `${emote} Desculpe, ${user}.\nVocê não tem permissão para executar este comando.`,
        noArgs: (command) => `Este comando requer argumento(s)\nSe necessário digite \`!ajuda ${command} \` Para mais informações sobre este comando`,
        devOnly: 'Este comando só está disponível pro cara que troca o meu óleo :(',
        cantEmbed: 'Eu preciso de permissão para enviar embeds :(',
        cooldown: (user) => `Ei! ${user}! Este comando tem um tempo entre cada utilização...\n~~Não posso super aquecer, sou muito jovem~~`,
        notChannel: 'Preciso que você esteja em um canal de voz...',
        cantJoinChannel: 'Não consigo me juntar ao seu canal :(',
        notInSameChannel: 'Você não está no mesmo canal que eu...',
        missingPermissionConnect: 'Me faltam permissões para entrar aí!',
        missingPermissionSpeak: 'Preciso de permissão pra falar'
    },
    welcome: {
        welcomeText: "Bem vindo ao grupo de sistemas, por favor registre-se nas materias que você esta matriculado(a) no canal registro, sempre que precisar consulte as regras"
    },

    /* Commands */
    command: {
        aliases: 'Sinônimos',
        cooldown: 'Cooldown',
        permission: 'Permissão',
        developer: 'Programador',
        anyone: 'Qualquer um',

        help: {
            /* specific */
            title: '🧭 Ajuda',
            requestUser: (user) => `Requisitado por ${user}`,

            /* general */
            name: 'help',
            aliases: ['ajuda', 'socorro'],
            description: 'Exibe os cards de ajuda\nExibe card específico se um argumento for providenciado\nUtilize os controles abaixo para navegar.',
            usage: '`comando`'
        },

        ping: {
            name: 'ping',
            aliases: [''],
            description: 'Sabe ping pong? então, não é isso...Mas é isso também',
            usage: 'ping',
        },

        uptime: {
            name: 'uptime',
            aliases: ['vivo'],
            description: 'Mostra por quanto tempo o bot está online sem parar. \n ~~também conhecido como escravidão~~'
        },

        clear: {
            /* specific */
            exceeded: (author, amount, limit) => `${author} \`${amount} + Comando\`  Excede o limite por uso de: \`${limit}\` mensagens ao mesmo tempo.`,
            tooFew: (emote, amount) => `${emote} Só ${amount}? Apague você mesmo.`,
            tooOld: (emote) => `${emote} Não é possível apagar mensagens muito antigas`,
            tooOldContinue: (emote) => `${emote} Burocracia é foda ~~Estou apagando o que dá~~`,
            progress: (emote, amount) => `${emote} Apagando um total de \`${amount}\` mensagem(s)`,
            done: (emote, amount) => `${emote} ${amount} mensagens foram apagadas`,

            /* general */
            name: 'clear',
            aliases: ['limpar', 'apagar', 'purge'],
            description: 'Limpa x mensagens do canal de texto onde for executado\nNão é possível apagar mensagens mais velhas que 14 dias.\nLimite de 99 mensagens',
            usage: '`quantidade`\nex: `!limpar 50`'
        },



        setAvatar: {
            loading: (emote) => `${emote} Alterando avatar`,
            limitRate: 'Você está mudando avatar muito rápido.',
            done: (emote) => `${emote} Avatar alterado :)`,

            name: 'setavatar',
            description: 'Substitui o ~~meu~~ avatar do bot.',
            aliases: ['botavatar', 'definiravatar'],
            usage: '[Anexe a imagem junto ao comando]',
        },

        setName: {
            loading: (emote) => `${emote} Alterando nome de usuário`,
            limitRate: 'Você está mudando o nome de usuário muitas vezes.',
            done: (emote) => `${emote} Nome de usuário alterado :)`,

            name: 'setname',
            description: 'Muda o nome do bot',
            aliases: ['setusername', 'changename', 'trocarnome'],
            usage: '',
        },

        /* God please help me, these are the fucking music related translations... */
        loop: {
            name: "Loop",
            description: "Alterna a repetição da música",
            aliases: ['l', 'loop', 'repeticao', 'repetição', 'repetir'],
            cooldown: 3
        },

        lyrics: {

            name: "Lyrics",
            description: 'Encontra e exibe a letra da música em reprodução',
            aliases: ['ly', 'lyrics', 'letra'],

            errorNotQueue: 'Nenhuma música na playlist.',
            lyricsNotFound: 'Letra não encontrada',
            title: title => `Vagalume.com do Zé: ${title}`

        },

        move: {
            name: "Move",
            description: "Move uma música entre as posicões da playlist",
            aliases: ['move', 'mvc', 'mover', 'mova'],
            cooldown: 3,

            errorNotQueue: 'Nenhuma música na playlist.',
            result: (author, title, index) => `${author.username} Moveu \`${title}\` para a posição ${index}`,

        },

        nowPlaying: {
            name: 'Now Playing',
            aliases: ['np', 'nowplaying', 'tocando'],
            usage: '',
            description: 'Exibe informações sobre a música em progresso',

            title: 'Tocando agora',
            timeRemaning: time => `Tempo restante: ${time}`
        },

        play: {
            name: 'play',
            aliases: ['p', 'play', 'tocar'],
            description: 'Reproduz uma ou mais músicas no seu canal de voz\nVocê pode adicionar várias músicas a fila.',
            usage: '`nome` ou `link` | Você precisa estar em um canal de voz.',

            queueError: 'Oops, um erro aconteceu enquanto eu tentava adicionar a música na fila...',
            errorNotChannel: 'Você precisar estar em um canal de voz.',
            startedPlaying: (title, url) => `Tocando agora: \`${title}\`\nFonte: ${url}`,
            stopSong: user => `${user.username} Parou a música`,
            mutedSong: user => `${user.username} Mutou o música`,
            unmutedSong: user => `${user.username} Desmutou o música`,
            decreasedVolume: (user, volume) => `${user.username} Diminuiu o volume para ${volume}`,
            increasedVolume: (user, volume) => `${user.username} Aumentou o volume para ${volume}`,
            loopSong: (user, loop) => `${user.username} Alterou o loop para: ${loop}`,
            queueEnded: `A playlist chegou ao fim.`,
            leaveChannel: 'Olha, vou meter o pé.',
            skipSong: user => `${user.username} Pulou a música.`,
            pauseSong: user => `${user.username} Pausou a música.`,
            resumeSong: user => `${user.username} Resumiu a música.`,
            queueAdded: (title, user) => `${user.username} Adicionou \`${title}\` a playlist.`
        },

        pause: {
            name: "Pause",
            description: "Pausa a música em andamento",
            aliases: ['ps', 'pause', 'pausa', 'pausar'],
            usage: '',

            errorNotQueue: 'Não tem nenhuma música na fila pra que eu possa pausar.',
            pause: user => `${user.username} Pausou a música.`
        },

        skip: {
            name: "Skip",
            description: "Pula a música atual.",
            aliases: ['skip', 'pular', 'sk'],
            usage: '',

            result: user => `${user.username} Pulou a música`,
            errorNotQueue: 'Nenhuma música na playlist'
        },

        skipto: {
            name: "Skip to",
            description: "Pula para uma música específica na playlist\nUtilize a posição na playlist como argumento",
            aliases: ['st', 'skipto', 'pularpara'],
            usage: '\`posição\`',

            errorNotQueue: 'Nenhuma música na playlist',
            errorNotValid: lenght => `Você utilizou uma posição inválida.\nTotal de músicas na playlist: ${lenght}`,
            result: (user, index) => `${user} Pulou para a música na posição ${index}`,
            errorNotChannel: 'Você precisar estar em um canal de voz.'
        },

        stop: {
            name: "Stop",
            description: "Para a reprodução de músicas\nEste comando também limpa a playlist",
            aliases: ['stop', 's', 'parar', 'pare'],
            usage: '',


            errorNotQueue: 'Não tem nenhuma música na playlist',
            result: user => `${user.username} Parou a reproducão.`
        },

        shuffle: {
            name: "Shuffle",
            description: "Alterna o modo embaralhamento de músicas\nQuando ativado, o bot tocará em ordem aleatória a partir da playlist",
            aliases: ['sh', 'shuffle', 'aleatorio', 'random'],
            usage: '',

            result: user => `${user.username} Ativou o modo aleatório`
        },

        remove: {
            name: 'Remove',
            description: "Remove uma música da playlist",
            aliases: ['rm', 'remove', 'remover', 'remova'],
            usage: '`posição na playlist`',


            errorNotQueue: 'Nenhuma música na playlist'
        },

        resume: {
            errorNotQueue: 'Nenhuma música na playlist',
            resultNotPlaying: user => `${user.username} Resumiu a música`,
            errorPlaying: 'não foi possível resumir a reprodução :(',
            errorNotChannel: 'Você precisar estar em um canal de voz.',


            name: 'Resume',
            description: 'Resume músicas que foram pausadas usando o comando de pausa',
            aliases: ['r', 'resume', 'resumir', 'resuma'],
            usage: ''
        },

        queue: {

        },

        volume: {

            errorNotQueue: 'Nenhuma música na playlist',
            currentVolume: current => `Volume atual: ${current}`,
            errorNotNumber: 'O argumento precisa ser um número entre 0 e 100.',
            errorNotValid: 'Argumento inválido',
            result: vol => `Volume alterado para ${vol}`
        }

    },

    /* Contexts */
    none: 'Nenhum'

};

module.exports = {
    lang,
};