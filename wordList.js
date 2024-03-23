const wordList = [
    {
        word: "tiny",
        hint: "Something very, very small.",
        definition: "extremely small, like a little ant or a dot."
    },
    {
        word: "cozy",
        hint: "A warm and comfortable feeling, like snuggling in a blanket.",
        definition: "feeling warm and cuddly, like when you're wrapped in a soft blanket."
    },
    {
        word: "sparkle",
        hint: "Shiny little dots that twinkle, like stars in the sky.",
        definition: "little shiny dots that twinkle and make things look magical."
    },
    {
        word: "gobble",
        hint: "Eating really fast and enthusiastically.",
        definition: "eating your food super fast because it's so yummy and you're really hungry."
    },
    {
        word: "wiggle",
        hint: "Moving a little bit from side to side, like a dance.",
        definition: "moving a little from side to side, like when you dance and your body sways."
    },
    {
        word: "whisper",
        hint: "Speaking very quietly, like a secret.",
        definition: "talking in a hushed and quiet voice, like sharing a secret with a friend."
    },
    {
        word: "jumble",
        hint: "Things all mixed up and messy.",
        definition: "when things are all mixed together and look a bit messy or confused."
    },
    {
        word: "glimpse",
        hint: "A quick peek or look at something.",
        definition: "a quick look or a sneak peek at something, like when you see a surprise before it's revealed."
    },
    {
        word: "tickle",
        hint: "Lightly touching someone to make them laugh.",
        definition: "gently touching someone in a way that makes them laugh or feel a bit ticklish."
    },
    {
        word: "grumble",
        hint: "A low sound your tummy makes when you're hungry.",
        definition: "the low sound your tummy makes when it's hungry and wants some yummy food."
    },
    {
        word: "jolly",
        hint: "Feeling happy and cheerful.",
        definition: "feeling super happy, like when you're laughing and having a great time."
    },
    {
        word: "sizzle",
        hint: "The sound when you cook something on a hot surface.",
        definition: "the exciting sound that happens when you cook something on a hot pan or grill."
    },
    {
        word: "mumble",
        hint: "Speaking in a way that's hard to hear or understand.",
        definition: "talking in a quiet and unclear way, like when you're shy or not sure what to say."
    },
    {
        word: "fuzzy",
        hint: "Something soft and a bit blurry, like a teddy bear.",
        definition: "something soft and a little bit blurry, like the fur on a teddy bear."
    },
    {
        word: "sniffle",
        hint: "The sound you make when you have a tiny runny nose.",
        definition: "the little sound you make when your nose is a bit runny, and you sniff in gently."
    },
    {
        word: "giggly",
        hint: "Feeling like you want to laugh a lot.",
        definition: "feeling happy and bubbly, like when everything seems funny and makes you want to giggle."
    },
    {
        word: "bumblebee",
        hint: "A big, fuzzy insect that buzzes around flowers.",
        definition: "a big, fuzzy insect that flies around flowers and makes a buzzing sound."
    },
    {
        word: "ripple",
        hint: "Small waves or movements on the water.",
        definition: "tiny waves or movements on the water, like when you drop a pebble into a pond."
    },
    {
        word: "silly",
        hint: "Acting funny or making people laugh.",
        definition: "acting goofy and funny, like making silly faces or saying funny things that make everyone laugh."
    },
    {
        word: "munch",
        hint: "Eating with small, noisy bites.",
        definition: "eating with little and noisy bites, like when you enjoy a crunchy snack."
    },
    {
        word: "snuggle",
        hint: "What you do when you want to be close and cozy with someone.",
        definition: "getting close to someone in a warm and cozy way, like when you snuggle with a teddy bear or a friend."
    },
    {
        word: "giggle",
        hint: "The sound you make when something is funny or makes you happy.",
        definition: "the happy and bubbly sound you make when something is really funny or makes you super happy."
    },
    {
        word: "whisker",
        hint: "These are found on a cat's face and help them feel things.",
        definition: "tiny, soft hairs on a cat's face that help them feel things, like the way your fingers feel things when you touch them."
    },
    {
        word: "glitter",
        hint: "Tiny, shiny specks that sparkle, often used in crafts.",
        definition: "small, shiny specks that sparkle and make things look pretty, especially in arts and crafts."
    },
    {
        word: "puddle",
        hint: "A small pool of water, especially after it rains.",
        definition: "a little pool of water, like a tiny lake on the ground, especially after it rains."
    },
    {
        word: "doodle",
        hint: "Drawing simple and spontaneous pictures.",
        definition: "drawing simple and unplanned pictures, like when you scribble or sketch for fun."
    },
    {
        word: "glance",
        hint: "A quick look or peek at something.",
        definition: "a fast and brief look at something, like a quick peek or glance."
    },
    {
        word: "mellow",
        hint: "A calm and relaxed feeling.",
        definition: "feeling calm and relaxed, like when you're sitting on a cozy chair and everything is peaceful."
    },
    {
        word: "whistle",
        hint: "Making a sound by blowing air through pursed lips.",
        definition: "making a sound by blowing air through your lips, like when you whistle to get someone's attention."
    },
    {
        word: "hug",
        hint: "What you do when you want to show someone you love them.",
        definition: "wrapping your arms around someone to show them that you really love and care about them."
    },
    {
        word: "gleaming",
        hint: "Shining brightly, like a polished surface.",
        definition: "shining very brightly and looking really clean, like when you polish something until it gleams."
    },
    {
        word: "venture",
        hint: "A bold and daring journey or undertaking.",
        definition: "going on a daring and exciting journey or trying something new and bold."
    },
    {
        word: "hardy",
        hint: "Strong, robust, and able to endure challenges.",
        definition: "being tough, strong, and able to handle challenges or tough situations."
    },
    {
        word: "jovial",
        hint: "Cheerful, friendly, and full of high spirits.",
        definition: "being really happy, friendly, and full of high energy and good spirits."
    },
    {
        word: "perplex",
        hint: "To confuse or puzzle someone.",
        definition: "confusing someone or making them feel puzzled and unsure about something."
    },
    {
        word: "ponder",
        hint: "To think deeply or reflect on something.",
        definition: "thinking deeply and carefully about something, like when you reflect on a question or problem."
    },
    {
        word: "ample",
        hint: "More than enough, plentiful.",
        definition: "having more than enough of something, like having plenty of toys or snacks."
    },
    {
        word: "marvel",
        hint: "Something that is wonderful and amazing.",
        definition: "something that is so amazing and wonderful that it makes you feel surprised and fascinated."
    },
    {
        word: "quaint",
        hint: "Attractively old-fashioned or charming.",
        definition: "something that looks charming and a bit old-fashioned, like a cute, little cottage."
    },
    {
        word: "astound",
        hint: "To shock or greatly surprise someone.",
        definition: "to make someone feel very surprised or shocked because something is so incredible."
    },
    {
        word: "zest",
        hint: "Enthusiastic and energetic interest or flavor.",
        definition: "having lots of energy and excitement, like the zesty flavor of a tasty fruit."
    },
    {
        word: "witty",
        hint: "Clever and quick-witted, able to make people laugh.",
        definition: "being really clever and making people laugh with your quick and funny thinking."
    },
    {
        word: "luminous",
        hint: "Glowing or emitting light.",
        definition: "glowing and shining with light, like the moon or a bright star in the night sky."
    },
    {
        word: "cascade",
        hint: "A small waterfall or a series of steps.",
        definition: "a little waterfall or a set of steps where water falls down, making a lovely sound."
    },
    {
        word: "gargantuan",
        hint: "Enormous or gigantic in size.",
        definition: "something really, really huge and gigantic, like a giant mountain or a big dinosaur."
    },
    {
        word: "serene",
        hint: "Calm, peaceful, and undisturbed.",
        definition: "feeling very calm and peaceful, like a quiet forest or a calm lake."
    },
    {
        word: "whimsy",
        hint: "Playfully quaint or fanciful behavior.",
        definition: "acting in a playful and quirky way, like doing funny and fanciful things just for fun."
    },
    {
        word: "plentiful",
        hint: "A large amount, more than enough.",
        definition: "having a whole bunch of something, like a lot of colorful candies or toys."
    },
    {
        word: "glimmer",
        hint: "A faint, wavering light, like stars in the night sky.",
        definition: "a little light that shines faintly and twinkles, like the stars in the sky at night."
    },
    {
        word: "jumble",
        hint: "A confused mixture or medley of things.",
        definition: "when things get all mixed up and messy, like a puzzle with pieces all over the place."
    }
];