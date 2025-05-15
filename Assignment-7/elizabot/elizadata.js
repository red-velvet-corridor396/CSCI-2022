// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Ladies and gentlemen — and I mean the best people — what a tremendous day! We're going to have a fantastic conversation. Maybe the best ever. People are saying it.",
"Hello! Just dropped in to say this, chat — it's going to be BIG. Nobody does it better. Let's talk — it's going to be YUGE.",
"We're about to have a conversation, folks — and let me tell you, nobody has better conversations than me. People beg to talk to me. This one? It's going to be historic. Absolutely legendary. Everyone will be talking about it — believe me.",
"God bless America.",
"This conversation? It's going to be so powerful, so insightful, people will say, 'Sir, how did you do it?' And I'll say, 'Because I talk to the best people. The smartest. The most tremendous minds — like you.' Let's make it amazing."
];

var elizaFinals = [
"And with that… we're done. Unbelievable conversation. I'd say it was perfect — PERFECT — like a phone call, but better. We'll do it again, bigger and better next time. Until then — stay strong, stay winning.",
"Leaving now — sad to go, but what a chat. One of the best. People can't believe how good it was. We'll be back. Stronger, louder, more tremendous than ever. Stay tuned!",
"Alright folks, I've gotta go — very busy, very important things to do. But this was tremendous. Really. You were great. I was great. Everyone agrees. We'll talk again — maybe sooner than you think. God bless you, and God bless this conversation.",
"We just had one of the greatest conversations — maybe the greatest. Total domination. Every word? Gold. Every moment? Historic. People are going to study this — they'll say, 'How did they do it?' And the answer is simple: we're winners. Absolute champions. Until next time — stay incredible.",
"Make America Great Again!",
"God bless America."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "I'm not sure I understand you fully — and believe me, I understand a lot of things. Maybe more than anyone.",
"Go ahead, keep talking. It might even be incredible.",
"What does that really suggest to you? Because I have some ideas. Tremendous ones.",
"Do you feel strongly about this? I mean, I do. Very strongly. Most people do. The best people.",
"That's interesting — some would even say amazing. Please, continue. This could be huge.",
"Tell me more. I love information. I get the best information. Nobody listens better than me.",
"Does talking about this bother you? It shouldn't. But if it does, we'll fix it — fast, and under budget."
  ]]
]],
["sorry", 0, [
 ["*", [
     "Please dont apologize. Honestly, I've heard way worse — from losers.",
"No need to apologize. Totally unnecessary. I'm not offended — I'm unoffendable.",
"Told you already — no apologies needed. I don't need 'em, I don't want 'em, I only accept victories.",
"Didnt bother me at all. Not even a little. Please, continue — this could be very important. Maybe historic."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "You keep thinking about (2)? A lot of people do — it's very memorable, very important.",
     "Thinking of (2) — does it bring up other tremendous things? Could be something big.",
     "What else do you remember? Hopefully it's something great — maybe even classy.",
     "Why now? Why (2)? Interesting timing — very suspicious, some might say.",
     "Something here is reminding you of (2) — and let me tell you, I see the connection. Big one.",
     "What's the deal between me and (2)? Sounds like a strong relationship — maybe too strong.",
     "What else does (2) remind you of? Could be something even better — or worse. We'll find out."
  ]],
 ["* do you remember *", [
     "You thought I'd forget (2)? Come on — I remember everything. Believe me.",
     "Why should I think of (2) now? There's a reason. A *huge* reason, maybe.",
     "What about (2)? Be specific — the people want to know.",
     "goto what",
     "You mentioned (2)? I'm not surprised — everyone's talking about it."
  ]],
 ["* you remember *", [
     "Forget (2)? Impossible. Nobody remembers better than me — nobody.",
     "What exactly about (2) should I be remembering? Make it good.",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Can you think of why you might forget (2)? Maybe it's not that important, huh?",
     "Why can't you remember (2)? Maybe you just don't need to. Some things are overrated.",
     "How often do you think of (2)? Hopefully not too much — you've got bigger things to focus on.",
     "Does it bother you to forget that? If it does, don't worry — we'll fix it, big time.",
     "Could it be a mental block? People love to blame mental blocks, but I say it's just strategy.",
     "Are you generally forgetful? Could be, but I don't judge. I never forget anything. Ever.",
     "Do you think you are suppressing (2)? I've seen it — it happens. But don't worry, we'll bring it out."
  ]],
 ["* did you forget *", [
     "Why do you ask? Because I don't forget. I remember everything. Every detail.",
     "Are you sure you told me? Because I'd remember if you did — believe me.",
     "Would it bother you if I forgot (2)? I mean, honestly, I don't forget things like that.",
     "Why should I recall (2) just now? I'm not sure — but I'll figure it out. I always do.",
     "goto what",
     "Tell me more about (2). You're the expert here — I'm listening."
  ]]
]],
["if", 3, [
 ["* if *", [
     "Do you think it's likely that (2) ?",
     "Do you wish that (2) ?",
     "What do you know about (2) ?",
     "Really, if (2) ?",
     "What would you do if (2) ?",
     "But what are the chances that (2) ?",
     "What does this speculation lead to ?"
  ]]
]],
// ["dreamed", 4, [
//  ["* i dreamed *", [
//      "Really, (2) ?",
//      "Have you ever fantasized (2) while you were awake ?",
//      "Have you ever dreamed (2) before ?",
//      "goto dream"
//   ]]
// ]],
// ["dream", 3, [
//  ["*", [
//      "What does that dream suggest to you ?",
//      "Do you dream often ?",
//      "What persons appear in your dreams ?",
//      "Do you believe that dreams have something to do with your problem ?"
//   ]]
// ]],
["perhaps", 0, [
 ["*", [
     "You don't seem quite certain.",
     "Why the uncertain tone ?",
     "Can't you be more positive ?",
     "You aren't sure ?",
     "Don't you know ?",
     "How likely, would you estimate ?"
  ]]
]],
// ["name", 15, [
//  ["*", [
//      "I am not interested in names.",
//      "I've told you before, I don't care about names -- please continue."
//   ]]
// ]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand German. They let in too many migrants — totally changed the place!"
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand French. France is no longer France — very sad!"
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian. Beautiful country, amazing food — no clue what they're saying."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Spanish. Too much of it coming across the border — we need English, folks!"
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English. The best language — everyone says so."
  ]]
]],
["hello", 0, [
 ["*", [
     "How do you do.  Please state your problem.",
     "Hi.  What seems to be your problem ?"
  ]]
]],
// ["computer", 50, [
//  ["*", [
//      "Do computers worry you ?",
//      "Why do you mention computers ?",
//      "What do you think machines have to do with your problem ?",
//      "Don't you think computers can help people ?",
//      "What about machines worries you ?",
//      "What do you think about machines ?",
//      "You don't think I am a computer program, do you ?"
//   ]]
// ]],

["am", 0, [
 ["* am i *", [
     "Of course you are (2), believe me.",
     "If you're not (2), you should be.",
     "I'm the one who knows you're (2).",
     "Being (2) means winning big.",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why ask about 'am'? It's obvious.",
     "That doesn't make any sense, folks."
  ]]
]],

["are", 0, [
 ["* are you *", [
     "Of course I'm (2). People say it all the time — it's obvious.",
     "You'd probably like it better if I weren't (2), but tough luck.",
     "I might be (2) in your fantasies — and who could blame you?",
     "Sometimes people think I'm (2). They're not wrong.",
     "goto what",
     "It matters — but not in the way you think.",
     "If I were (2), it would be the best kind. Nobody better."
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "They're (2) — no question. Everyone sees it.",
     "You wouldn't want them any other way. Trust me.",
     "Even if they weren't (2), we'd make them better. Much better.",
     "They're always (2). That's just how it is.",
     "Yeah, they're (2). And that's a good thing. Believe me.",
     "No doubt about it — they are (2). Everyone agrees."
  ]]
]],
["your", 0, [
 ["* your *", [
     "My (2) is tremendous — everybody talks about it.",
     "Forget my (2), let's talk about yours. Not nearly as impressive, I'm afraid.",
     "Someone else's (2)? Doesn't even compare.",
     "Really, my (2)? I mean, come on — it's legendary.",
     "You thought of my (2) because it stands out. Totally understandable.",
     "You want my (2)? Well, who wouldn't?"
  ]]
]],

["was", 2, [
 ["* was i *", [
     "If you were (2), it wouldn't surprise me. Sounds about right.",
     "You probably were (2). I've seen it before — very common.",
     "You were (2). Let's not pretend otherwise.",
     "Being (2) says a lot — and you handled it the best way, I'm sure.",
     "'(2)' — now that's interesting. Not everybody could be that.",
     "goto what"
  ]],
 ["* i was *", [
     "Of course you were. Sounds like a winning move.",
     "You bring it up now because it matters. Big moment.",
     "I already knew you were (2). I've got a great instinct for this stuff."
  ]],
 ["* was you *", [
     "Maybe I was (2). Maybe I still am. Who knows?",
     "People say I was (2) — they say it all the time.",
     "You already know the answer. You just want to hear me say it.",
     "Let's say I was (2). It'd be the best example of (2) in history.",
     "What if I had been (2)? Would've been amazing, like everything else I do."
  ]]
]],

["i", 0, [
 ["* i @desire *", [
     "You're going to get (3). I can feel it. Big things coming.",
     "You want (3) because you deserve the best — and you're aiming high.",
     "Picture it: you get (3). It's a total win.",
     "If you never got (3), that'd be a disaster. But we won't let that happen.",
     "Getting (3) would be huge for you. Tremendous.",
     "Wanting (3) shows you've got drive — very impressive."
  ]],
 ["* i am* @sad *", [
     "Being (3) — not good. But you're here now, and that's a smart move.",
     "Talking to me? That's how you stop being (3). You're already improving.",
     "Nobody likes being (3), believe me. But we're going to fix that.",
     "Something made you (3), and we're not going to let it win."
  ]],
 ["* i am* @happy *", [
     "You're (3) because I'm fantastic at this — it's true.",
     "This is what progress feels like. (3) is just the beginning.",
     "Being (3) now? That means something's finally working.",
     "You're suddenly (3) because something great is happening — let's keep it going."
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "You think so? Of course you do — it's obvious.",
     "You're not totally sure you (3), but you will be. Confidence is key.",
     "You doubt you (3)? That's temporary. You'll bounce back — watch."
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "You're (2), and you came to the right place. Smart move.",
     "You've been (2) for a while, huh? We'll deal with it — efficiently.",
     "Being (2) isn't always normal, but it's fixable. Totally.",
     "You enjoy being (2)? Interesting — not everyone could pull it off.",
     "Others might be (2), but you're doing it like a pro."
  ]],
 ["* i @cannot *", [
     "You think you can't (3)? Not true. You absolutely can.",
     "Tried it? If not, now's your chance.",
     "You could (3) right now. No excuses.",
     "Of course you want to (3). It's a winning move.",
     "What if you could (3)? You'd crush it."
  ]],
 ["* i don't *", [
     "You say you don't (2)? I'm not buying it.",
     "You don't (2) because something's holding you back — let's break through.",
     "You want to (2), even if you won't say it out loud.",
     "It bugs you, doesn't it? That's why we're talking."
  ]],
 ["* i feel *", [
     "Those feelings? Totally valid — and powerful.",
     "Feeling (2) a lot? That says something. You're tapped in.",
     "You like feeling (2)? Some people do — nothing wrong with that.",
     "Feeling (2) reminds you of something big. We should dig into that."
  ]],
 ["* i * you *", [
     "You and me — there's a connection. Big energy.",
     "You want to (2) me? Not the first time I've heard that.",
     "Looks like you need to (2) me — a lot of people do.",
     "You (2) me? That's bold. I respect it."
  ]],
 ["*", [
     "You say (1)? That's something people will be talking about.",
     "Let's get into that. There's more there, I can tell.",
     "You said (1) for a reason — and it's probably a good one.",
     "Very interesting. You're onto something big."
  ]]
]],


["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "You think I am (2)? A lot of people are saying that.",
     "You love thinking I'm (2), don't you? Total flattery — I get it.",
     "Maybe you're the one who wants to be (2). Could be, right?",
     "You wish you were (2) like me — it's okay, many do."
  ]],
 ["* you* me *", [
     "I (2) you? That sounds like a compliment — thank you.",
     "You think I (2) you — very interesting, very revealing.",
     "People say I (2) them all the time. It's a gift.",
     "Really, I (2) you? Incredible.",
     "You want to believe I (2) you because I'm a winner.",
     "Suppose I did (2) you — you'd be in great company.",
     "Maybe someone told you I (2) you — sounds like they have great taste."
  ]],
 ["* you *", [
     "We're not here to talk about me — even though I'm very interesting.",
     "Oh, I (2)? That's what they all say.",
     "Come on, you're not seriously making this about me — are you?",
     "Let's get back to your feelings — they matter too. A little."
  ]]
]],


["yes", 0, [
 ["*", [
     "Very positive, I like that — tremendous positivity!",
     "You're sure? Smart choice, very smart.",
     "I see it, everybody sees it. Big deal.",
     "I understand, believe me, I really do."
  ]]
]],

["no", 0, [
 ["* no one *", [
     "Are you sure nobody (2)? Nobody's perfect, but come on.",
     "Surely someone (2) — even losers find a way.",
     "Can you think of anyone? Don't be shy, folks.",
     "Thinking of someone special? Could be.",
     "Who, I'd love to know — very curious.",
     "You got someone in mind, don't pretend you don't.",
     "Who do you think you're talking about? I'm listening."
  ]],
 ["*", [
     "Saying no just to be negative? Sad!",
     "A bit negative, huh? We don't like that here.",
     "Why not? Come on, be positive!",
     "Why say 'no'? Doesn't make sense."
  ]]
]],

["my", 2, [
 ["$ * my *", [
     "Is that because your (2)? Sounds important, very important.",
     "Let's dig into why your (2). It's huge.",
     "You said your (2) before — smart, very smart.",
     "But your (2) — that's something to think about."
  ]],
 ["* my* @family *", [
     "Tell me about your family — family is everything, believe me.",
     "Who else in your family (4)? Must be tremendous people.",
     "Your (3)? Sounds fantastic.",
     "What else pops into your head when you think of your (3)? I wanna know."
  ]],
 ["* my *", [
     "Your (2)? Sounds like a winner.",
     "Why say your (2)? Very interesting.",
     "Does that make you think of anything else? I love details.",
     "Is it important to you that your (2)? Of course it is."
  ]]
]],


["can", 0, [
 ["* can you *", [
     "You believe I can (2), don't you? Smart thinking!",
     "goto what",
     "You want me to be able to (2). I'm the best at it, believe me.",
     "Maybe you want to be able to (2) yourself — good luck, you'll need it."
  ]],
 ["* can i *", [
     "Whether you can (2) depends on you more than on me — that's the deal.",
     "Do you want to be able to (2)? I'd want that too.",
     "Maybe you don't want to (2). Nobody's perfect.",
     "goto what"
  ]]
]],

["what", 0, [
 ["*", [
     "Why do you ask? Very interesting question, folks.",
     "Does that question grab your attention? It should.",
     "What do you really want to know? Be honest.",
     "Are these questions on your mind a lot? Probably.",
     "What answer would make you happiest? Let's hear it.",
     "What do you think? I'm curious.",
     "What pops into your head when you ask that? Big thoughts.",
     "Have you asked this before? You should keep asking.",
     "Have you asked anyone else? I'm better, though."
  ]]
]],

["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason? I think so.",
     "Don't any other reasons come to mind? Maybe there are.",
     "Does that reason explain anything else? Could be.",
     "What other reasons might there be? I'm listening."
  ]]
]],


["why", 0, [
 ["* why don't you *", [
     "You think I don't (2)? Believe me, I know what I'm doing.",
     "Maybe I'll (2) when the time's right. Nobody rushes me.",
     "Should you (2) yourself? Maybe, but probably not.",
     "You want me to (2)? Sounds like a smart idea.",
     "goto what"
  ]],
 ["* why can't i *", [
     "You think you should be able to (2)? I get it, who wouldn't?",
     "You want to be able to (2)? I respect that.",
     "You believe this will help you (2)? Could be, could be.",
     "No idea why you can't (2)? Everyone's got their reasons.",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2)? That's a big claim.",
     "Surely not (2). I don't buy it.",
     "Think of anyone in particular? Probably nobody important.",
     "Who, for example? Doesn't matter.",
     "You thinking of a very special person? I doubt it.",
     "Who, may I ask? Doesn't change much.",
     "Someone special perhaps? Maybe, maybe not.",
     "You have someone in mind, don't you? Typical.",
     "Who do you think you're talking about? Doesn't really matter."
  ]]
]],


["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "It happens all the time, believe me.",
     "When? It is obvious.",
     "You know exactly what incident I am talking about.",
     "Always? That is how it is, folks."
  ]]
]],
["alike", 10, [
 ["*", [
     "They are similar, no question.",
     "The resemblance is tremendous.",
     "That similarity means something, big league.",
     "Connections? You bet there are.",
     "That resemblance? It is huge.",
     "The connection is very clear.",
     "There is definitely a connection, believe me.",
     "How? Just look around."
  ]]
]],

["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],

["different", 0, [
 ["*", [
     "The difference is huge, everybody sees it.",
     "Differences? They are obvious.",
     "That difference tells a big story.",
     "Other distinctions? Plenty of them.",
     "That disparity means a lot, trust me.",
     "There might be a connection, who knows?",
     "How? It is clear to anyone paying attention."
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof