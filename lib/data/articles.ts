export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: string;
  tags: string[];
  image: string;
  publishedAt: string;
  readTime: number;
  featured: boolean;
  popular: boolean;
  videoUrl?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "1",
    slug: "celebrity",
    name: "Celebrity",
    description: "All the latest celebrity news, gossip, and exclusive interviews from Hollywood's biggest stars.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&q=80",
  },
  {
    id: "2",
    slug: "movies",
    name: "Movies",
    description: "Movie news, reviews, casting announcements, and behind-the-scenes stories from Hollywood.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80",
  },
  {
    id: "3",
    slug: "tv",
    name: "TV",
    description: "Television news, show recaps, casting updates, and streaming platform exclusives.",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=1200&q=80",
  },
  {
    id: "4",
    slug: "music",
    name: "Music",
    description: "Music industry news, album releases, concert tours, and artist interviews.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80",
  },
  {
    id: "5",
    slug: "fashion",
    name: "Fashion",
    description: "Red carpet fashion, designer news, celebrity style, and fashion week coverage.",
    image: "https://assets.vogue.com/photos/6893c3a1b17040a8b7792ed0/4:3/w_1920,c_limit/COPENHAGEN%20_SS26_STREETSTYLE_Day3_Acielle_11.jpg",
  },
  {
    id: "6",
    slug: "royals",
    name: "Royals",
    description: "Royal family news, palace updates, and coverage of British royalty worldwide.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
  },
];

export const articles: Article[] = [
  {
    id: "1",
    slug: "love-island-victoria-removed-cast",
    title: "'Love Island' Season 8 Contestant Vasana Montgomery Removed from Cast After N-Word Video Surfaces",
    excerpt: "The reality competition show has dropped the contestant just days before the season premiere following resurfaced footage.",
    content: `Love Island has dropped Season 8 contestant Vasana Montgomery from the cast just days before the season premiere after a video containing her using a racial slur resurfaced online.

The reality competition show confirmed the news in a statement: "Vasana Montgomery will not appear in Love Island Season 8. We take these matters extremely seriously and the decision to remove her from the cast was immediate."

The video, which reportedly circulated on social media before being widely shared, shows Montgomery using offensive language. The timing of the resurfacing — just days before the show was set to begin filming — has raised questions about who might have been behind the leak.

## The Show's Response

Love Island has faced previous controversies regarding cast members' past behavior, and the show has implemented more rigorous background checks in recent years. Montgomery's removal represents the latest example of how quickly past actions can derail opportunities in the reality TV world.

Season 8 of Love Island is set to premiere next week with a new cast of contestants looking for love in the iconic villa.`,
    author: {
      name: "Megan Grant",
      avatar: "https://images.unsplash.com/photo-1494790308377-be9c29b29330?w=200&q=80",
      role: "Reality TV Reporter",
    },
    category: "TV",
    tags: ["love island", "reality tv", "casting controversy", "reality stars"],
    image: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=1200&q=80",
    publishedAt: "2026-05-30",
    readTime: 4,
    featured: true,
    popular: true,
  },
  {
    id: "2",
    slug: "dua-lipa-wedding-callum-turner",
    title: "Dua Lipa Marries Callum Turner During Intimate Town Hall Wedding in London",
    excerpt: "The pop star and actor exchanged vows in a surprise ceremony attended by just 50 guests at a historic London venue.",
    content: `Dua Lipa and Callum Turner have quietly gotten married, Page Six can confirm — with the couple opting for an intimate town hall ceremony in London that shocked even their closest friends.

The surprise wedding took place at a historic registry office in central London, with sources telling Page Six that only about 50 guests were present. The ceremony was so private that even some family members reportedly only learned about it the night before.

## The Surprise

The couple, who have been dating for approximately two years, had not announced their engagement publicly. Sources say the decision to marry quietly was intentional — they wanted a ceremony focused on their love rather than spectacle.

"Dua and Callum wanted something small and meaningful," one source said. "They didn't want the pressure of a big celebrity wedding."

## The Guest List

Among the attendees were reportedly close friends and immediate family only. Notable absences included any members of the music or film industries, despite Lipa's massive celebrity connections.

Lipa was represented by her longtime lawyer, while Turner, best known for his roles in "Baby Money" and "The Inbetweeners," had his family in attendance.`,
    author: {
      name: "Sophie Edwards",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      role: "Celebrity Reporter",
    },
    category: "Celebrity",
    tags: ["dua lipa", "callum turner", "wedding", "celebrity", "london"],
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-06-01%2FMiniMax-M2.7%2F2034695257328718600%2F82b0cf33906276ce5c5a6445924d7f06072560754b7cfc638f4970f3aac153bd..png?Expires=1780338412&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=dMSfnR7P6uZVrGCJg6J1BkOyF00%3D",
    publishedAt: "2026-05-30",
    readTime: 5,
    featured: false,
    popular: true,
  },
  {
    id: "3",
    slug: "andrew-mccarthy-liza-minnelli",
    title: "Andrew McCarthy Shuts Down Claim He Made Out with Liza Minnelli in the '80s",
    excerpt: "The 'Weekend at Bernie's' star is setting the record straight after a resurfaced rumor claimed a romantic encounter with the legendary entertainer.",
    content: `Andrew McCarthy is denying a resurfaced claim that he made out with Liza Minnelli in the 1980s, calling the rumor "completely false."

The story apparently originated from a memoir by someone claiming to have been present during an alleged encounter between McCarthy and Minnelli. The claim quickly spread on social media, prompting McCarthy to respond directly.

"This is 100% false," McCarthy wrote on social media. "I have the utmost respect for Liza Minnelli, but this never happened. I'm not sure where this is coming from, but it's definitely not from me."

## The Context

McCarthy was a rising star in Hollywood during the 1980s, starring in films like "Pretty in Pink" and "St. Elmo's Fire." Minnelli was already an established legend, known for her Oscar-winning performance in "Cabaret."

The rumor appears to have first surfaced years ago but periodically resurfaces online, often gaining traction during periods of renewed interest in 1980s Hollywood culture.

McCarthy's representatives confirmed to Page Six that the actor has never met Minnelli in any capacity that would make the rumor plausible.`,
    author: {
      name: "Jason Lewis",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "Hollywood Reporter",
    },
    category: "Celebrity",
    tags: ["andrew mccarthy", "liza minnelli", "hollywood", "rumors", "denial"],
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-06-01%2FMiniMax-M2.7%2F2034695257328718600%2F458b78de09cef0f946f41a70545a1dd51f925a247bddec1531bfd9dc3e830c81..png?Expires=1780338324&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=LAW7kNMNNwH24OHA9bNaJiVBA7E%3D",
    publishedAt: "2026-05-29",
    readTime: 4,
    featured: false,
    popular: true,
  },
  {
    id: "4",
    slug: "alaskan-bush-people-matt-brown-dead",
    title: "'Alaskan Bush People' Star Matt Brown Dead at 43 After Sibling Helped Pull Body from River, Brother Says",
    excerpt: "The reality TV star was found in a river near his Alaska home in an apparent drowning, his brother confirmed.",
    content: `Matt Brown, best known for his appearances on the reality series "Alaskan Bush People," has died at age 43, his brother William Brown confirmed in a heart-wrenching social media post.

According to William, Matt was discovered in a river near their family property in Alaska. William described how he and another family member pulled his brother's body from the water.

"I tried everything I could to save him," William wrote. "The water was too cold, too fast. By the time we got to him, it was too late."

## The Investigation

Authorities are treating the incident as an apparent drowning. Sources close to the family say Matt had been dealing with personal struggles in recent months, though no details have been confirmed.

"Alaskan Bush People" chronicled the Brown family's life in the Alaskan wilderness. Matt was a recurring cast member who appeared in multiple seasons of the show.

## Family's Grief

The Brown family has asked for privacy during this difficult time. A statement from their representatives said the family is "devastated" and requested that fans respect their need for space.

Matt is survived by his mother, father, and multiple siblings, all of whom were featured on the show.`,
    author: {
      name: "Megan Grant",
      avatar: "https://images.unsplash.com/photo-1494790308377-be9c29b29330?w=200&q=80",
      role: "Reality TV Reporter",
    },
    category: "TV",
    tags: ["alaskan bush people", "reality tv", "death", "tragedy", "alaska"],
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-06-01%2FMiniMax-M2.7%2F2034695257328718600%2F5a506cee7004cf9d161e6ceb9d3ee77847d553d953106a0cbf3532bd715256cc..png?Expires=1780338555&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=QWAUMCU8Wvv1zGWN%2BObEvgtREzM%3D",
    publishedAt: "2026-05-29",
    readTime: 5,
    featured: false,
    popular: true,
  },
  {
    id: "5",
    slug: "jay-z-disses-kanye-nicki-minaj-drake",
    title: "Jay-Z Disse Kanye West, Nicki Minaj, Drake and More in Scathing Freestyle",
    excerpt: "The rap legend used a surprise new track to settle old scores with nearly every major hip-hop artist of the past two decades.",
    content: `Jay-Z has released a surprise new track that quickly became the talk of the music world — and not for musical reasons. The freestyle, dropped without warning on streaming platforms, takes aim at a virtual who's who of hip-hop.

The targets include Kanye West, Nicki Minaj, Drake, and numerous others, with Jay-Z using the platform to settle old scores and air grievances that apparently date back years.

## The Lyrics

Without repeating the explicit lyrics, the track implies that several artists owe their careers to relationships with Jay-Z or his Roc Nation empire. It also accuses Kanye West of betraying their long friendship and questions whether certain artists have "earned" their success.

The track immediately went viral, with fans analyzing every line to determine exactly who Jay-Z is referring to and what specific incidents sparked the disses.

## Industry Response

As of publication, none of the artists named in the track have responded publicly. However, sources close to several of them tell Page Six that the response has been "mixed" — some are reportedly dismissive, while others are said to be "hurt" by Jay-Z's words.

The track was reportedly recorded just days before its release, suggesting it was a deliberate move rather than a stream-of-consciousness session.`,
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "Music Reporter",
    },
    category: "Music",
    tags: ["jay-z", "kanye west", "nicki minaj", "drake", "hip hop", "rap"],
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-06-01%2FMiniMax-M2.7%2F2034695257328718600%2Fbcb9e4f6e091f6f9b85cb04dfdfeec60b9e181d94bedef88a560881adb3a65fa..png?Expires=1780338621&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=RUJlxxhZwWHSUBVWuUXcRijeWto%3D",
    publishedAt: "2026-05-28",
    readTime: 6,
    featured: false,
    popular: true,
  },
  {
    id: "6",
    slug: "jason-biggs-ex-jenny-mollen-felt-brushed-to-the-side-in-marriage",
    title: "Jason Biggs' Ex Jenny Mollen Says She Felt 'Brushed to the Side' in Their Marriage",
    excerpt: "The actress opens up about her 14-year marriage to the 'American Pie' star, revealing the exact moment she knew they were headed for divorce.",
    content: `Jenny Mollen is getting candid about her marriage to Jason Biggs — and the moment she realized they were headed for the end.

In a new interview with a major publication, the actress and author revealed that she felt "brushed to the side" throughout much of her 14-year marriage to the "American Pie" star.

"I loved him, but I also felt like I was just there," Mollen said. "Like I was his girlfriend, not his partner. There was this constant feeling of being secondary to everything else in his life."

## The Breaking Point

Mollen, 43, says the moment that crystallized her feelings came during a particularly busy press tour for "American Pie" reunion events.

"I was standing next to him at this premiere, and someone asked him a question about his co-stars. He answered, and I was just... there. Like a prop," she recalled. "That's when I realized I had lost myself."

The couple, who married in 2009 and share two children, announced their separation in late 2023. They had been together for nearly two decades.

## The Therapy Realization

Mollen says she first started speaking about these feelings during couples therapy, which eventually led to individual therapy for both of them.

"I think we both realized we had grown into people who wanted different things," she said. "It wasn't dramatic. There wasn't one big moment. It was just... quiet understanding that we weren't serving each other anymore."

## Moving Forward

Despite the challenges, Mollen says she's in a better place now. "I'm learning who I am outside of being someone's wife or someone's mom. I'm finding my voice again."

Mollen has written two books since the separation — one memoir about her experience and another focused on personal growth. She's also developing a television project based on her experiences.

"Divorce doesn't mean failure," she added. "Sometimes it means finally choosing yourself."`,
    author: {
      name: "Emily Gronant",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      role: "Relationships Reporter",
    },
    category: "Celebrity",
    tags: ["jason biggs", "jenny mollen", "marriage", "divorce", "relationships", "american pie"],
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
    publishedAt: "2026-05-30",
    readTime: 6,
    featured: false,
    popular: true,
  },
  {
    id: "7",
    slug: "christine-taylor-ben-stiller-marriage",
    title: "Christine Taylor Reveals What Saved Her Marriage to Ben Stiller 4 Years After Rekindling Their Romance",
    excerpt: "The actress credits a specific therapy technique for helping her and Stiller reconnect after their near-separation.",
    content: `Christine Taylor is sharing what she says saved her marriage to Ben Stiller — and it might not be what you'd expect.

The actress, who nearly separated from Stiller in 2022 before they ultimately rekindled their romance, says it was learning to "fight better" that changed everything.

"We went to this therapist who taught us that arguments aren't about winning — they're about understanding," Taylor explained in a new interview. "It sounds simple, but it completely changed how we communicate."

## The Turning Point

Taylor says there was a specific moment when things shifted. "Ben said something in a session that I'd never heard him say before. He admitted he had been absent, not just physically but emotionally. That honesty? That's what saved us."

The couple, who met on the set of "Zoolander" in 2000 and married in 2000, had been together for over two decades when they faced their biggest challenge.

## What's Next

Taylor says she and Stiller are "closer than ever" and credits their open communication with helping them navigate the challenges of Hollywood marriages. "We fight about stupid stuff now instead of important stuff. That's progress."`,
    author: {
      name: "Sophie Edwards",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      role: "Celebrity Reporter",
    },
    category: "Celebrity",
    tags: ["christine taylor", "ben stiller", "marriage", "therapy", "relationships"],
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&q=80",
    publishedAt: "2026-05-26",
    readTime: 5,
    featured: false,
    popular: true,
  },
  {
    id: "8",
    slug: "jessica-alba-cash-warren-graduation",
    title: "Jessica Alba and Ex-Husband Cash Warren Awkwardly Keep Their Distance at Daughter's Graduation",
    excerpt: "The former couple made headlines for their frosty interaction at their daughter's high school graduation ceremony.",
    content: `Jessica Alba and her ex-husband Cash Warren were spotted at their daughter's high school graduation over the weekend — and the way they interacted with each other became the story.

Sources who attended the ceremony tell Page Six that Alba and Warren "barely acknowledged each other" despite being seated in the same general area for family. At one point, Warren reportedly moved seats to create more distance between himself and Alba.

## The Backstory

Alba and Warren announced their separation in early 2024 after 20 years of marriage. They have two children together, both of whom were reportedly present at the graduation.

Despite the awkwardness, sources say both parents were clearly focused on celebrating their daughter's achievement. "They both showed up for her, which is what matters," one source said.

## The Speculation

The cold interaction has sparked speculation about what might have caused the frostiness. Representatives for both Alba and Warren declined to comment, but sources close to the family say there's no drama — just the awkwardness of separating parents at a major family event.

"Co-parenting isn't always easy, especially when you're in the public eye," one source noted.`,
    author: {
      name: "Megan Grant",
      avatar: "https://images.unsplash.com/photo-1494790308377-be9c29b29330?w=200&q=80",
      role: "Celebrity Reporter",
    },
    category: "Celebrity",
    tags: ["jessica alba", "cash warren", "celebrity divorce", "graduation", "co-parenting"],
    image: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=1200&q=80",
    publishedAt: "2026-05-25",
    readTime: 4,
    featured: false,
    popular: true,
  },
  {
    id: "9",
    slug: "mandy-moore-underage-drinking",
    title: "Mandy Moore Names Former Child Star Who Got Her Into 'Underage Drinking'",
    excerpt: "The 'This Is Us' actress reveals which young co-star introduced her to alcohol at a surprisingly early age.",
    content: `Mandy Moore is looking back at her early Hollywood days with some candid confessions — including which child star introduced her to drinking while she was still underage.

In a new interview, Moore revealed that she was only 15 when a fellow child actor first got her to try alcohol. "I can't say who, because I protect my friends," Moore said with a laugh. "But let's just say we were both too young and both definitely should not have been doing what we were doing."

## The Context

Moore was a teen pop star in the late 1990s when she began working with other young actors in the entertainment industry. She says the culture was very different then.

"There was no supervision like there is now," she explained. "We were all living these parallel lives. We'd go to parties and nobody was checking IDs or making sure we got home safe."

## Looking Back

Moore says she's since made peace with her past, but she's glad the industry has changed. "I want to be honest about what it was like, but I also want to acknowledge that kids today have more protections. That's a good thing."

Moore is currently promoting the final season of her hit show "This Is Us," which she says helped her grow as an actress and as a person.`,
    author: {
      name: "Emily Gronant",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      role: "TV Reporter",
    },
    category: "TV",
    tags: ["mandy moore", "child star", "underage drinking", "confessions", "this is us"],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80",
    publishedAt: "2026-05-24",
    readTime: 4,
    featured: false,
    popular: false,
  },
  {
    id: "10",
    slug: "pete-davidson-kim-kardashian-ex",
    title: "Pete Davidson Praises Kim Kardashian in Rare Comments About His Ex",
    excerpt: "The comedian breaks his silence about his past relationship with the reality star in a new interview.",
    content: `Pete Davidson is speaking out about his past relationship with Kim Kardashian — and he has nothing but positive things to say.

In his first major interview discussing the relationship in years, Davidson addressed why the two connected and what he learned from their time together. "Kim is one of the most kind, generous, funny people I've ever met," he said. "People think there must be some drama, but honestly? We just weren't right for each other in the long run."

## The Relationship

Davidson and Kardashian dated for approximately two years in 2021-2022. Their relationship was one of the most publicized in recent celebrity history, in part because of the age difference and the cultural significance of their respective brands.

Davidson says he doesn't regret the relationship but acknowledges it came with challenges. "When you're Pete Davidson and you're dating Kim Kardashian, everyone's got an opinion. That was hard."

## Moving On

Since the breakup, Davidson has focused on his comedy and his work in recovery. He says he's in a better place now than he's ever been.

"I'm happy. Genuinely happy," he said. "And I think that's what matters. Kim's doing her thing, I'm doing mine, and there's no bad blood."`,
    author: {
      name: "Jason Lewis",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "Comedy Reporter",
    },
    category: "Celebrity",
    tags: ["pete davidson", "kim kardashian", "relationship", "interview", "ex"],
    image: "https://pagesix.com/wp-content/uploads/sites/3/2026/05/miami-fl-brooks-nader-sizzles-129119640.jpg?resize=1024,746&quality=75&strip=all",
    publishedAt: "2026-05-23",
    readTime: 5,
    featured: false,
    popular: true,
  },
  {
    id: "11",
    slug: "brooks-nader-swim-week-wardrobe",
    title: "Brooks Nader Suffers Wardrobe Malfunction in the Ocean During Miami Swim Week",
    excerpt: "The model and social media star experienced an embarrassing moment during a beach presentation — but handled it with grace.",
    content: `Brooks Nader was participating in a Miami Swim Week event over the weekend when she experienced what every model's nightmare: a wardrobe malfunction in front of the cameras.

During what was supposed to be a simple walk along the ocean for a beach photoshoot, Nader's swimsuit apparently shifted unexpectedly in the waves. "I knew immediately," she said in a video posted to her social media. "I just started laughing."

## The Response

Rather than hiding or being embarrassed, Nader addressed the situation head-on in her video. "This is Swim Week. It happens," she said with a shrug. "The show must go on, right?"

Her response earned praise from fans and fellow models alike, with many commenting that her grace under pressure was admirable. "She's a professional," one commenter wrote. "This is exactly how you handle it."

## The Industry

Wardrobe malfunctions are an occupational hazard for models at swim and fashion weeks. Nader, who has walked in Miami Swim Week multiple times, says she's experienced similar situations before. "You just have to roll with it. Everyone's been there."

The incident has since gone viral, with Nader's handling of it being praised as textbook crisis management.`,
    author: {
      name: "Emily Gronant",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      role: "Fashion Reporter",
    },
    category: "Fashion",
    tags: ["brooks nader", "miami swim week", "wardrobe malfunction", "model", "fashion"],
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-06-01%2FMiniMax-M2.7%2F2034695257328718600%2Ff38a01f7fd0102d1ffec338737b056a459b71c397e00492f3857128b2cbdf032..png?Expires=1780340814&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=rO5n%2FnnfSqRYl2izJDP1%2FX%2B23i0%3D",
    publishedAt: "2026-05-22",
    readTime: 4,
    featured: false,
    popular: true,
  },
  {
    id: "12",
    slug: "princess-diana-sarah-ferguson-feud",
    title: "Why Princess Diana and Sarah Ferguson Had Falling Out Amid Prince Harry and Meghan Markle's Frogmore Reversal",
    excerpt: "The real story behind the decades-long rift between the two royal women — and what it means for the family today.",
    content: `As Prince Harry and Meghan Markle's legal battle over their Frogmore Cottage residence continues to play out publicly, Page Six is looking back at the complicated relationship between the two women at the center of the royal drama: Princess Diana and Sarah Ferguson.

The two women, who were once close friends and confidantes during their time as wives to Prince Charles and Prince Andrew respectively, had a very public falling out in the 1990s that has never fully healed.

## The Falling Out

The exact cause of their rift has been debated for decades, but sources close to both women say it centered on different expectations of royal life. Diana was reportedly frustrated by what she saw as Sarah's indiscretions bringing shame to the family, while Sarah felt Diana was hypocritical given her own struggles.

" They'd been close, but there was real resentment by the end," one source told Page Six. "Diana felt Sarah didn't take the role seriously enough. Sarah felt Diana didn't understand what it was like to be on the outside looking in."

## The Legacy

Despite their differences, both women remained connected to the same family dynamics that continue to play out today. Harry and William, Diana's sons, reportedly had very different reactions to their mother's conflicts with Sarah.

The Frogmore situation represents an interesting parallel — Meghan Markle and Sarah Ferguson both found themselves at odds with royal expectations, though decades apart.`,
    author: {
      name: "Sophie Edwards",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      role: "Royal Correspondent",
    },
    category: "Royals",
    tags: ["princess diana", "sarah ferguson", "royal family", "prince harry", "meghan markle"],
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=1200&q=80",
    publishedAt: "2026-05-21",
    readTime: 6,
    featured: false,
    popular: true,
  },
  {
    id: "13",
    slug: "jennifer-lopez-green-versace-dress",
    title: "Jennifer Lopez Promises to Rewear Her Green Versace Dress in 20 Years — 'and It's Gonna Look Good'",
    excerpt: "The superstar is doubling down on her commitment to sustainable fashion by promising to repeat iconic looks.",
    content: `Jennifer Lopez is making a fashion statement that's also an environmental one: she says she plans to rewear her iconic green Versace dress when she's older — and she wants everyone to know sustainable fashion can still be glamorous.

"I keep telling people: I'm gonna wear this dress again in 20 years, and it's gonna look good," Lopez said in a new interview. "Why should I let it sit in a closet when I can wear it again and make a point about not buying new things all the time?"

## The Iconic Dress

Lopez's jungle-print Versace dress from the 2000 Grammy Awards became one of the most iconic red carpet looks in fashion history. It was so significant that it reportedly inspired Google to develop improved image search capabilities.

Lopez says she's had the dress preserved and maintained over the years, and she views it as an investment in sustainable fashion. "Fashion should be fun, not wasteful."

## The Movement

Lopez is joining a growing number of celebrities who are committing to rewearing looks for environmental reasons. She says she hopes her example inspires others to think differently about their wardrobes.

"Why buy new when you can make old things feel new again?" she asked.`,
    author: {
      name: "Emily Gronant",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      role: "Fashion Editor",
    },
    category: "Fashion",
    tags: ["jennifer lopez", "versace", "sustainable fashion", "red carpet", "iconic looks"],
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-06-01%2FMiniMax-M2.7%2F2034695257328718600%2Fa79d0d4fe7df854d1a9c23f824c5f9abfc2cccccceaeaba2ae68d25f3f4af8d3..png?Expires=1780340657&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=eiftakm0Rfa6qOLSnQ1r7BOVSFE%3D",
    publishedAt: "2026-05-20",
    readTime: 4,
    featured: false,
    popular: true,
  },
  {
    id: "14",
    slug: "alix-earle-kendall-jenner-perfume",
    title: "Alix Earle and Kendall Jenner Have This 'Delicious' Perfume in Common",
    excerpt: "The TikTok star and the model are reportedly fans of the same signature scent — and it's surprisingly affordable.",
    content: `Beauty enthusiasts have discovered that Alix Earle and Kendall Jenner share a secret weapon: the same signature perfume, which Earle recently described as "delicious" on her social media.

The scent in question? A relatively affordable option from a mid-tier brand that neither celebrity has officially endorsed. But that hasn't stopped it from selling out in stores.

## The Discovery

Earle mentioned the perfume in a TikTok video where she shared her current favorite products. Within hours, fans had identified the scent and discovered that Jenner had also been photographed with the same bottle.

"She actually wears this?" Earle responded in a follow-up video. "I feel like we have the same taste."

## The Product

The perfume, which retails for around $85, has since become harder to find at department stores. Representatives for the brand tell Page Six they're working to restock locations that have sold out.

The lesson? Sometimes the best beauty finds come from celebrity spotting, not celebrity endorsements.`,
    author: {
      name: "Emily Gronant",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      role: "Beauty Editor",
    },
    category: "Fashion",
    tags: ["alix earle", "kendall jenner", "perfume", "beauty", "tiktok"],
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-06-01%2FMiniMax-M2.7%2F2034695257328718600%2Ff8c4339e0c50797267cba1479420cc3dfa9535b93e9aec456ee39a94cf38d65d..png?Expires=1780340717&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=1PYif14fzrQmYBTVAzOsbUePMI8%3D",
    publishedAt: "2026-05-19",
    readTime: 3,
    featured: false,
    popular: false,
  },
  {
    id: "15",
    slug: "nordstrom-sale-jewelry",
    title: "Nordstrom's Half-Yearly Sale Has Star-Worthy Jewelry Up to 50% Off",
    excerpt: "The department store's biggest sale of the year features statement pieces that celebrities have been spotted wearing.",
    content: `Nordstrom's highly anticipated Half-Yearly Sale is here, and it's loaded with celebrity-approved jewelry at up to 50% off.

From statement earrings to layered necklaces, the sale features pieces that have been spotted on celebrities at events, premieres, and in their everyday lives. Page Six has curated the best of the bunch.

## The Highlights

One of the most popular items is a gold layered necklace set that was recently seen on a major pop star at a recent award show. The set, which originally retailed for $250, is now available for $125.

Other standout pieces include diamond drop earrings that have been featured in multiple celebrity "get the look" articles, and a tennis bracelet that reportedly sold out within hours of being added to the sale.

## The Strategy

Department store sales have become increasingly important as luxury jewelry brands compete with direct-to-consumer brands. Nordstrom's sale offers an opportunity to get designer-quality pieces at more accessible price points.

The sale runs through the weekend, with select items already selling out at some locations.`,
    author: {
      name: "Emily Gronant",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      role: "Shopping Editor",
    },
    category: "Fashion",
    tags: ["nordstrom", "jewelry", "sale", "shopping", "celebrity style"],
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80",
    publishedAt: "2026-05-18",
    readTime: 3,
    featured: false,
    popular: false,
  },
  {
    id: "16",
    slug: "charlotte-tilbury-mistake-proof",
    title: "Charlotte Tilbury's New 'Mistake-Proof' Product Is a First for the Brand",
    excerpt: "The makeup mogul launches her most innovative product yet — designed to make professional-quality application accessible to everyone.",
    content: `Charlotte Tilbury is launching a new product that the brand is calling "mistake-proof" — and it's a first for the legendary makeup artist turned entrepreneur.

The product, which Tilbury describes as a "foolproof" formula designed for at-home use, promises professional-quality results without the skill typically required. It's the first time the brand has marketed something specifically for beginners.

## The Innovation

"What I've learned over 30 years is that most women don't want to be makeup artists," Tilbury said in a statement. "They want to look amazing without having to practice for hours. This product is for them."

The formula uses a proprietary blend of ingredients designed to self-correct during application, meaning small mistakes blend away automatically. It's being described as "the training wheels of makeup."

## The Launch

The product launches next week at Charlotte Tilbury counters and online. Pre-orders have already begun, and the brand says initial inventory is limited.

Beauty analysts are watching the launch closely. If successful, it could signal a major shift in how high-end makeup brands approach product development.`,
    author: {
      name: "Emily Gronant",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      role: "Beauty Editor",
    },
    category: "Fashion",
    tags: ["charlotte tilbury", "makeup", "beauty", "launch", "innovation"],
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-06-01%2FMiniMax-M2.7%2F2034695257328718600%2F22e99e52554b90416c4461dd8432f0bc1bf99fc80eb242d0c68a378716257231..png?Expires=1780340876&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=lXFW8BBxuCIz7O7B1jlPhdD4Spk%3D",
    publishedAt: "2026-05-17",
    readTime: 4,
    featured: false,
    popular: false,
  },
  {
    id: "17",
    slug: "marc-anthony-emme-graduation",
    title: "Marc Anthony Skips Emme's Graduation as Jennifer Lopez — and Ben Affleck's Son — Show Up in Support",
    excerpt: "The singer's ex-wife and her current husband's son attended the graduation ceremony in a show of unified family support.",
    content: `Marc Anthony was notably absent from his daughter Emme's high school graduation over the weekend, but sources tell Page Six his absence was not without reason — and that Jennifer Lopez and Ben Affleck's son were there in his place.

Emme, whose twin brother Max was also graduating, was supported at the ceremony by her mother and Affleck's son Sam, who has developed a close relationship with Lopez and her children from her previous marriage to Marc Anthony.

## The Family Dynamics

Sources say Marc Anthony had a prior professional commitment that he couldn't reschedule. "He was devastated to miss it," one source said. "But he made sure the kids knew he was thinking of them."

Lopez and Affleck's son Sam has reportedly become close friends with Emme and Max over the years, despite the age difference. His presence at the graduation was described as "touching" by attendees.

## Emme's Achievement

This graduation marks a significant milestone for Emme, who has largely stayed out of the public eye despite her famous parents. Sources say she's planning to attend college in the fall, though she hasn't announced where.

Lopez reportedly cried during the ceremony, with sources saying she was "bursting with pride" watching her children cross the stage.`,
    author: {
      name: "Megan Grant",
      avatar: "https://images.unsplash.com/photo-1494790308377-be9c29b29330?w=200&q=80",
      role: "Celebrity Reporter",
    },
    category: "Celebrity",
    tags: ["marc anthony", "jennifer lopez", "ben affleck", "graduation", "family"],
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-06-01%2FMiniMax-M2.7%2F2034695257328718600%2F78bd70520241fd302cb06aa63ccd166fb57092fdaf956c6f1f1994543a0d9e68..png?Expires=1780341050&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=7ri5%2F2jqlJl5ZXdOTsuw4uGvUp4%3D",
    publishedAt: "2026-05-16",
    readTime: 5,
    featured: false,
    popular: true,
  },
  {
    id: "18",
    slug: "rupaul-drag-race-all-stars-11",
    title: "Werk Room Weekly: 'RuPaul's Drag Race' All Stars 11 Bracket 2 on Charli xcx, Weight Loss, More",
    excerpt: "The Werk Room Weekly column breaks down the biggest moments from the latest 'All Stars' episodes.",
    content: `The latest bracket of RuPaul's Drag Race All Stars 11 has delivered some of the most dramatic moments in the show's history, and the Werk Room Weekly column is breaking it all down.

This week's focus: the Charli xcx challenge, which had queens creating looks inspired by the pop star's aesthetic, and the emotional conversations about weight loss that dominated the werk room.

## The Charli xcx Challenge

Charli xcx, who has emerged as a surprise ally to the drag community, served as this week's musical inspiration. Queens were tasked with creating high-fashion looks that captured her edgy yet playful vibe.

The challenge winner has become a hotly debated topic in fan circles, with opinions split between those who prioritize construction and those who value conceptual creativity.

## The Weight Loss Conversation

More significant than the challenge itself was the werk room conversation that followed, where several queens opened up about their experiences with weight loss medications and the pressure to maintain a certain image in the drag community.

The conversation, which was largely praised by fans, highlighted ongoing issues around body image and expectations in competitive performance spaces.

## Looking Ahead

With the competition heating up, All Stars 11 is positioning itself as one of the most emotionally honest seasons in franchise history.`,
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "TV Reporter",
    },
    category: "TV",
    tags: ["rupaul's drag race", "all stars", "charli xcx", "drag race", "reality tv"],
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
    publishedAt: "2026-05-15",
    readTime: 5,
    featured: false,
    popular: false,
  },
  {
    id: "19",
    slug: "baby-reindeer-hbo-half-man",
    title: "How Will HBO's 'Half Man' End? All About the Finale of 'Baby Reindeer' Star Richard Gadd's New Show",
    excerpt: "The creator and star of 'Baby Reindeer' previews his new series and shares what fans can expect from the finale.",
    content: `Richard Gadd, whose limited series "Baby Reindeer" became one of HBO's most-talked-about shows, is back with a new series "Half Man" — and he's already thinking about the finale.

In an interview with Page Six, Gadd previewed what fans can expect from the show's conclusion and reflected on the unexpected success of "Baby Reindeer."

## The New Show

"Half Man" follows a man grappling with the aftermath of a traumatic experience, exploring themes of identity, masculinity, and recovery. Gadd says the project was in development before "Baby Reindeer" became a phenomenon.

"'Baby Reindeer' changed what was possible," he said. "But 'Half Man' is the story I needed to tell first. It's more personal in some ways."

## The Finale

Without giving too much away, Gadd says the finale will leave room for interpretation. "I want viewers to sit with what they've watched. The ending isn't neat, but it's honest."

He also addressed the "Baby Reindeer" phenomenon, saying he's grateful for the response but wary of being defined by a single project. "That show changed my life. But I'm just getting started."`,
    author: {
      name: "Sophie Edwards",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      role: "TV Reporter",
    },
    category: "TV",
    tags: ["baby reindeer", "hbo", "richard gadd", "half man", "television"],
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe89?w=1200&q=80",
    publishedAt: "2026-05-14",
    readTime: 5,
    featured: false,
    popular: false,
  },
  {
    id: "20",
    slug: "wellness-brand-going-small",
    title: "Why One Hollywood-Loved Wellness Brand Is Betting Big on Going Small",
    excerpt: "After years of expansion, one of celebrity wellness' biggest brands is pivoting to a more intimate approach.",
    content: `One of the most recognizable names in celebrity wellness is making a surprising move: after years of expansion, they're scaling back — and bet everything on going small.

The brand, which has become synonymous with the Hollywood wellness set, has built a devoted following through its accessible products and celebrity endorsements. But now the founders are saying goodbye to mass market retail.

## The Strategy

"We're not trying to be everything to everyone anymore," the founder said in a statement. "We've realized that our best moments came from personal connection, not mass distribution."

The new approach focuses on direct-to-consumer sales, smaller product lines, and events that bring the community together. It's a radical pivot from the brand's previous strategy of aggressive expansion.

## The Backlash

Not everyone is happy about the change. Longtime customers have expressed frustration that their favorite products will be harder to find. "I depended on this brand," one reviewer wrote. "Now I have to scramble to get what I need."

But the founders say the change is necessary for their mental health as much as the business. "We were burning out. This allows us to do what we love without the pressure of being everywhere."`,
    author: {
      name: "Emily Gronant",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      role: "Wellness Editor",
    },
    category: "Celebrity",
    tags: ["wellness", "celebrity", "branding", "business", "hollywood"],
    image: "https://images.unsplash.com/photo-1544367567-0f1c5a0c6e15?w=1200&q=80",
    publishedAt: "2026-05-13",
    readTime: 4,
    featured: false,
    popular: false,
  },
  {
    id: "21",
    slug: "kim-kardashian-met-gala-2026",
    title: "Kim Kardashian's Met Gala 2026 Dress Is Already Becoming Legendary — First Look",
    excerpt: "The SKIMS founder debuted a custom creation by an unexpected designer that broke the internet within minutes of her arrival.",
    content: `Kim Kardashian arrived at the 2026 Met Gala Monday night wearing a look that even her most devoted fans didn't see coming: a custom Balenciaga piece that some are already calling the most iconic Met Gala moment since Rihanna's 2015 Guo Pei moment.

The sculptural gown, which took over 2,000 hours to create, featured a dramatic train that stretched over 15 feet and was constructed from a proprietary material that appears solid but moves like liquid. The bodice was hand-embellished with over 50,000 Swarovski crystals.

## The Designer Collaboration

In a surprise twist, Kardashian worked directly with Demna on the piece, a collaboration that sources say came together just six weeks ago when the original designer backed out due to scheduling conflicts. "Kim called Demna personally and explained the situation," a source told Page Six. "He dropped everything."

The result is a gown that perfectly marries Balenciaga's signature sculptural aesthetic with Kardashian's own body-conscious style. The color — described by the house as "luminous graphite" — shifts under different lighting conditions, appearing almost black in some photos and a shimmering silver in others.

## Social Media Explosion

As expected, Kardashian's arrival broke the internet. Within 20 minutes of her arrival, the hashtag #KimMetGala2026 was trending globally with over 3 million mentions. Her official photo, posted to Instagram with the simple caption "Monday night," garnered 8 million likes in the first hour.`,
    author: {
      name: "Emily Gronant",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      role: "Fashion Editor",
    },
    category: "Fashion",
    tags: ["kim kardashian", "met gala", "balenciaga", "fashion", "celebrity"],
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-06-01%2FMiniMax-M2.7%2F2034695257328718600%2Ffee653c827606fd83d1d5621aa27dd529aca7bf382be258df520d614d4942de2..png?Expires=1780340959&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=OMRPAP4M45e6JXKlXzc7AVNIHWo%3D",
    publishedAt: "2026-05-12",
    readTime: 6,
    featured: false,
    popular: true,
  },
  {
    id: "22",
    slug: "taylor-swift-eras-tour-film",
    title: "Taylor Swift's 'Eras Tour' Film Is Coming to Streaming — Here's When",
    excerpt: "The concert film that broke box office records is finally making its streaming debut, but there's a catch.",
    content: `Taylor Swift's record-breaking "Eras Tour" concert film is coming to streaming — but fans will have to wait a little longer than expected.

The film, which grossed over $250 million worldwide and became the highest-grossing concert film in history, was originally expected to hit streaming platforms within months of its theatrical release. But sources tell Page Six the release has been delayed due to negotiations.

## The Holdup

Apparently, Swift is being extremely selective about where the film will be available. Multiple streaming platforms have bid for the rights, but none have met her expectations for exclusivity and compensation.

"She's not in a rush," one source said. "The film made a fortune in theaters. She can afford to wait for the right deal."

## The Platform

While nothing is confirmed, industry insiders say the leading candidate is Amazon Prime Video, which has been aggressively pursuing exclusive content deals. However, Netflix and Apple TV+ are also reportedly in the running.

The announcement is expected within the next few weeks, with a potential release date before the end of the summer.`,
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "Music Reporter",
    },
    category: "Music",
    tags: ["taylor swift", "eras tour", "concert film", "streaming", "music"],
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1200&q=80",
    publishedAt: "2026-05-11",
    readTime: 4,
    featured: false,
    popular: true,
  },
  {
    id: "23",
    slug: "beyonce-renaissance-movie-deal",
    title: "Beyoncé's 'Renaissance' Movie Deal Inches Forward — Cannes Announcement Expected",
    excerpt: "The singer's concert documentary is reportedly close to a deal that would mark a historic moment for the festival.",
    content: `Beyoncé's concert documentary "Renaissance: The Film" is inching closer to a deal that could see it open the Cannes Film Festival, multiple sources tell Page Six.

The film, which captures performances from Beyoncé's record-breaking Renaissance World Tour, has been in negotiations for months. But sources say a deal is close, with an announcement expected at Cannes next week.

## The Details

The reported deal would mark the first time a concert documentary has opened Cannes in the festival's 78-year history. The selection committee has reportedly been working to overcome traditional resistance to non-narrative films.

"Beyoncé is arguably the most important artist of her generation," one festival insider said. "It would be a statement to celebrate that at Cannes."

## The Film

The documentary features performances from over 20 shows on the Renaissance tour, which grossed over $580 million and became the highest-grossing tour by a female artist in history. But sources say it's more than a concert film — it includes intimate behind-the-scenes footage and candid moments with Beyoncé's family.

A formal announcement is expected within the next 10 days.`,
    author: {
      name: "Sophie Edwards",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      role: "Film Reporter",
    },
    category: "Movies",
    tags: ["beyonce", "renaissance", "cannes", "concert film", "music"],
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80",
    publishedAt: "2026-05-10",
    readTime: 5,
    featured: false,
    popular: true,
  },
  {
    id: "24",
    slug: "drake-toronto-mansion-loss",
    title: "Drake's Toronto Mansion Finally Sells — See How Much He Lost",
    excerpt: "The 'God's Plan' rapper listed the 20,000-square-foot estate in 2023 for $31 million. The final sale price will make you cringe.",
    content: `Drake's massive Toronto mansion has finally sold, multiple sources confirm to Page Six — and the loss the rapper took will make you wince.

The 20,000-square-foot estate in the affluent Bridle Path neighborhood listed in 2023 for $31 million. But after multiple price reductions and nearly three years on the market, it sold for just $18.5 million — a loss of over $12 million for the Canadian rapper.

## Why It Took So Long

The estate, which features 12 bedrooms, a recording studio, a basketball court, and a rumored panic room, was considered overpriced from the start. Real estate sources told Page Six that Drake's initial asking price was "optimistic at best" for a property that required significant updates.

"The house is impressive, but it's very specific," one Toronto realtor said. "It's designed for someone who wants to throw parties and record music. That limits the buyer pool significantly."

## The Haunted Reputation

The property gained additional notoriety when Drake began hosting elaborate haunted house events during Halloween. The events became so popular that neighbors complained and the city eventually mandated limits on guest numbers.

Drake has since relocated to a smaller property in the same neighborhood, sources say. He was not available for comment.`,
    author: {
      name: "Jason Lewis",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "Real Estate Reporter",
    },
    category: "Celebrity",
    tags: ["drake", "real estate", "toronto", "celebrity homes", "mansion"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    publishedAt: "2026-05-09",
    readTime: 5,
    featured: false,
    popular: true,
  },
  {
    id: "25",
    slug: "jurassic-world-rebirth-premiere",
    title: "Jurassic World Rebirth: Cast Debuts Stunning New Trailer at CinemaCon",
    excerpt: "The next chapter in the Jurassic franchise reveals a terrifying new dinosaur and a mysterious plot.",
    content: `Universal Pictures unveiled the first footage from "Jurassic World Rebirth" at CinemaCon this week, and the reaction from theater owners was immediate: audiences are ready for dinosaurs again.

The trailer, shown exclusively to exhibitors, features a glimpse of the franchise's most ambitious dinosaur yet — a massive aquatic creature that studio sources say will "redefine what we thought possible" in the series.

## The Cast

The film stars a mix of franchise veterans and fresh faces, including Emma Watts, who plays a lead character described as "the most capable dinosaur wrangler we've ever seen."

## What's Next

Universal has slated "Jurassic World Rebirth" for a summer 2026 release, positioning it as a major tentpole for the season. Full trailer drops in August.`,
    author: {
      name: "Marcus Webb",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "Film Reporter",
    },
    category: "Movies",
    tags: ["jurassic world", "jurassic park", "dinosaurs", "universal", "premiere"],
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-06-01%2FMiniMax-M2.7%2F2034695257328718600%2Fcc01eec0a2d2d605f9bac21d1c0377c6fb854ece44076f7089cd4f5c55f5da53..png?Expires=1780339101&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=6Jh%2F7wO%2F1IPNJghPKPyIYDSBglQ%3D",
    publishedAt: "2026-05-30",
    readTime: 4,
    featured: false,
    popular: true,
  },
  {
    id: "26",
    slug: "mission-impossible-fractured-division",
    title: "Mission: Impossible – Fractured Division: Tom Cruise Returns for Most Dangerous Stunt Yet",
    excerpt: "The actor performed a daredevil cliff jump in the Austrian Alps without a body double.",
    content: `Tom Cruise has done it again — this time literally scaling a mountain for "Mission: Impossible – Fractured Division."

The actor performed a dangerous cliff-jumping sequence in the Austrian Alps, sources on set tell Page Six. The stunt required weeks of training and multiple takes to perfect.

## The Sequence

The scene involves Cruise's Ethan Hunt character making a harrowing escape across a mountain face, with the actor performing most of the work himself. Paramount has released photos of the production, showing Cruise harnessed against a green screen backdrop.

## The Franchise

"Fractured Division" marks Cruise's eighth turn as Hunt, continuing a franchise that has become synonymous with practical action spectacle. The film is expected to rival "Dead Reckoning" in scale and ambition.`,
    author: {
      name: "Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1494790308377-be9c29b29330?w=200&q=80",
      role: "Action Film Reporter",
    },
    category: "Movies",
    tags: ["tom cruise", "mission impossible", "action", "stunt", "paramount"],
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-06-01%2FMiniMax-M2.7%2F2034695257328718600%2F35c5a6736e0943f994fd9b5c67de36293e78a861a5f17b7cfa1d8b8d556380e3..png?Expires=1780339103&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=9nDIdg%2F3muihZMYO0rWBscNBQag%3D",
    publishedAt: "2026-05-29",
    readTime: 5,
    featured: false,
    popular: true,
  },
  {
    id: "27",
    slug: "avatar-3-fire-within",
    title: "Avatar 3: Fire Within — First Look Reveals Stunning Na'vi Warriors",
    excerpt: "James Cameron's third Avatar film introduces new clans and a darker conflict.",
    content: `20th Century Studios has revealed the first official look at "Avatar: Fire Within," showing Na'vi warriors in stunning new bioluminescent environments.

The images, released simultaneously across global social media, reveal characters from the third film's new locations — including the volcanic region of the Eastern Sea and the underground caverns of the Deep Republic.

## What We Know

Director James Cameron has described "Fire Within" as "the most ambitious film I've ever made," pushing both narrative and technical boundaries established by its predecessors. The film will explore the Na'vi's conflict with human forces in a more personal way.

## The Timeline

"Avatar: Fire Within" is scheduled for release in December 2026, with Cameron currently in post-production. The director has hinted that the third film will leave audiences "completely devastated" in the best way.`,
    author: {
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      role: "Sci-Fi Film Reporter",
    },
    category: "Movies",
    tags: ["avatar", "james cameron", "na'vi", "sci-fi", "disney"],
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-06-01%2FMiniMax-M2.7%2F2034695257328718600%2F8635fd5b4291c29e856871e3932c13e11d26190430d8e07a71c27236aae84c81..png?Expires=1780339105&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=wmYlgJ9kbAW2I5Pmtj2gHjouXBY%3D",
    publishedAt: "2026-05-28",
    readTime: 4,
    featured: false,
    popular: false,
  },
  {
    id: "28",
    slug: "may-december-movie",
    title: "May December: Natalie Portman and Julianne Moore Star in Must-Watch Drama",
    excerpt: "Twenty years after their notorious tabloid romance gripped the nation, a married couple faces an actress researching their past.",
    content: `Natalie Portman and Julianne Moore deliver powerhouse performances in "May December," a haunting exploration of obsession, representation, and the blurred lines between victim and perpetrator.

The film, directed by Todd Haynes, follows a married couple whose tabloid romance made headlines two decades ago. When an actress arrives to research them for a film, the cracks in their carefully constructed narrative begin to show.

## The Performances

Moore plays the mother whose relationship with a much older man became tabloid fodder, while Portman portrays the actress grappling with the moral implications of her craft. The chemistry between the two leads elevates every scene.

## The Director's Vision

Haynes, known for his exploration of forbidden desire and complex female characters, brings his signature subtlety to this study of projection and performance.`,
    author: {
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      role: "Film Critic",
    },
    category: "Movies",
    tags: ["may december", "natalie portman", "julianne moore", "todd haynes", "drama"],
    image: "https://m.media-amazon.com/images/M/MV5BMjA0ODViOWUtYzFjYy00ZDZlLWFlMmMtMjU2NzFmNWNlZmFhXkEyXkFqcGc@._V1_.jpg",
    publishedAt: "2026-05-27",
    readTime: 5,
    featured: false,
    popular: true,
  },
  {
    id: "29",
    slug: "eileen-movie",
    title: "Eileen: Thomasin McKenzie Stars in Chilling Psychological Thriller",
    excerpt: "A young woman at a boys' corrections facility becomes dangerously obsessed with a new psychologist.",
    content: `Thomasin McKenzie delivers a career-defining performance in "Eileen," a slow-burn psychological thriller that builds to a devastating conclusion.

Based on the novel by Ottessa Moshfegh, the film follows a young woman working at a boys' corrections facility whose life takes a sinister turn when a charismatic new psychologist arrives.

## The Atmosphere

Director William Oldroyd creates an atmosphere of creeping dread, using long takes and muted colors to build unease. The remote, snow-covered setting becomes almost a character itself.

## The Twist

Without spoiling the film's final act, suffice to say that "Eileen" subverts expectations in ways that will leave audiences debating long after the credits roll.`,
    author: {
      name: "Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1494790308377-be9c29b29330?w=200&q=80",
      role: "Thriller Specialist",
    },
    category: "Movies",
    tags: ["eileen", "thomasin mckenzie", "psychological thriller", "william oldroyd"],
    image: "https://m.media-amazon.com/images/M/MV5BNGNjMzc3ZWMtODc0MS00MWU3LTkxMDMtMjQ4MjhkZmRmNzMwXkEyXkFqcGc@._V1_.jpg",
    publishedAt: "2026-05-26",
    readTime: 4,
    featured: false,
    popular: true,
  },
  {
    id: "30",
    slug: "chicken-run-dawn-nugget",
    title: "Chicken Run: Dawn of the Nugget Returns with Thandiwe Newton Voice Cast",
    excerpt: "Ginger and the flock face their greatest threat yet in this highly anticipated sequel.",
    content: `The beloved claymation chickens are back in "Chicken Run: Dawn of the Nugget," a sequel that proves Aardman's signature style remains unmatched in animation.

Twenty-four years after the original, Ginger leads a peaceful existence on an island sanctuary — but the mainland faces a new threat that forces her and the team to break back in.

## The Voice Cast

Thandiwe Newton voices the lead role of Ginger, with Zachary Levi and Bella Ramsey joining the ensemble cast. The animation has evolved significantly while maintaining the charm that made the original a classic.

## The Production

Directors Sam Fell and Jeff Newitt spent years perfecting the claymation technique, pushing the boundaries of what stop-motion can achieve while honoring the original's spirit.`,
    author: {
      name: "Marcus Webb",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "Animation Reporter",
    },
    category: "Movies",
    tags: ["chicken run", "aardman", "animation", "bella ramsey", "thandiwe newton"],
    image: "https://m.media-amazon.com/images/M/MV5BOTMwN2Y0MDYtYzhhZS00YzI5LWE5N2UtOThlZWQxODc4YjkxXkEyXkFqcGc@._V1_.jpg",
    publishedAt: "2026-05-25",
    readTime: 4,
    featured: false,
    popular: true,
  },
  {
    id: "31",
    slug: "maestro-bradley-cooper",
    title: "Maestro: Bradley Cooper's Bold Directorial Debut About Leonard Bernstein",
    excerpt: "A love story chronicling the lifelong relationship between conductor-composer Leonard Bernstein and actress Felicia Montealegre.",
    content: `Bradley Cooper delivers a transformative performance as Leonard Bernstein in "Maestro," a daring exploration of art, ambition, and identity.

Cooper not only stars but directs this ambitious biopic, tracing Bernstein's career and his complex relationship with wife Felicia Montealegre, played by Carey Mulligan.

## The Performance

Cooper disappears into the role, capturing Bernstein's magnetic energy and the personal demons that drove him. The prosthetic nose has drawn attention, but the performance transcends such gimmicks.

## The cinematography

Filmed in striking black and white for most of its runtime, the film uses visual contrast to explore the tension between Bernstein's public brilliance and private struggles.`,
    author: {
      name: "Sophie Edwards",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      role: "Film Reporter",
    },
    category: "Movies",
    tags: ["maestro", "bradley cooper", "leonard bernstein", "carey mulligan", "biopic"],
    image: "https://m.media-amazon.com/images/M/MV5BY2M1MWUyYzctMzk1Zi00M2RkLTkwY2YtMzE4MDhiZGQwZmU5XkEyXkFqcGc@._V1_.jpg",
    publishedAt: "2026-05-24",
    readTime: 5,
    featured: false,
    popular: true,
  },
  {
    id: "32",
    slug: "spider-man-across-spider-verse",
    title: "Spider-Man: Across the Spider-Verse Tops Charts with Jaw-Dropping Animation",
    excerpt: "Miles Morales travels across the multiverse, meeting Spider-People from different dimensions.",
    content: `The sequel to the groundbreaking "Into the Spider-Verse" has arrived, and "Across the Spider-Verse" pushes animation to new heights.

Miles Morales returns with a stunning visual upgrade, traveling across the multiverse to meet Spider-People from different dimensions — each with their own unique art style.

## The Animation Leap

If the first film was revolutionary, this follow-up is evolutionary on a different level. The film switches between art styles fluidly, making every frame a masterpiece.

## The Cast

Shameik Moore returns as Miles, with Hailee Steinfeld as Gwen Stacy and Brian Tyree Henry as Miles' father. The ensemble brings emotional weight to the multiversal chaos.`,
    author: {
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      role: "Superhero Film Reporter",
    },
    category: "Movies",
    tags: ["spider-man", "animation", "miles morales", "across the spider-verse", "sony"],
    image: "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_.jpg",
    publishedAt: "2026-05-23",
    readTime: 5,
    featured: false,
    popular: true,
  },
  {
    id: "33",
    slug: "totem-movie-2023",
    title: "Tótem: Lila Avilés Directs Award-Winning Mexican Drama",
    excerpt: "Seven-year-old Sol discovers her world is about to change dramatically during a family gathering.",
    content: `Mexican director Lila Avilés delivers a masterclass in restrained storytelling with "Tótem," a film that finds profound meaning in the smallest moments.

The film follows seven-year-old Sol as she navigates a family gathering that will fundamentally alter her understanding of the world around her.

## The Setting

Set primarily within a sun-drenched house in Mexico, the film uses natural light and intimate spaces to create an almost documentary quality. Sol's perspective becomes our window into adult complexities she can only partially comprehend.

## Awards Recognition

"Tótem" won the World Cinema Grand Jury Prize at Sundance and has been Mexico's submission for Best International Feature at the Oscars.`,
    author: {
      name: "Megan Grant",
      avatar: "https://images.unsplash.com/photo-1494790308377-be9c29b29330?w=200&q=80",
      role: "International Film Reporter",
    },
    category: "Movies",
    tags: ["totem", "mexico", "lila aviles", "sundance", "international"],
    image: "https://m.media-amazon.com/images/M/MV5BY2IwNzA2NDktYjM2Ni00MTIyLWFhM2ItYjk5NzI1YjI5MTExXkEyXkFqcGc@._V1_.jpg",
    publishedAt: "2026-05-22",
    readTime: 4,
    featured: false,
    popular: false,
  },
  {
    id: "34",
    slug: "loop-track-movie",
    title: "Loop Track: New Zealand Survival Thriller Takes Audiences on a Harrowing Journey",
    excerpt: "A man seeking solitude in the New Zealand bush finds himself fighting for survival when a four-day journey turns deadly.",
    content: `New Zealand filmmaker Thomas Sainsbury delivers a masterclass in minimalist survival horror with "Loop Track," a film that proves tension can be built with almost nothing.

The film follows Ian, played by Sainsbury himself, who retreats to the New Zealand bush seeking escape from humanity — only to find that nature has other plans.

## The Setting

Shot in the actual New Zealand wilderness, the film uses its remote location to create genuine unease. There are no sets, no CGI — just the terrifying reality of being alone in hostile territory.

## The Performance

Sainsbury carries the film almost entirely on his own, conveying desperation and deterioration through subtle physical performance. The camera never leaves his side, creating an intimate观众 experience.`,
    author: {
      name: "Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1494790308377-be9c29b29330?w=200&q=80",
      role: "Horror Specialist",
    },
    category: "Movies",
    tags: ["loop track", "new zealand", "survival", "horror", "indie"],
    image: "https://m.media-amazon.com/images/M/MV5BMDkzYzk0NjQtYzY4MC00Y2JmLWIzMGUtOTczYmFiOThkZjE3XkEyXkFqcGc@._V1_.jpg",
    publishedAt: "2026-05-21",
    readTime: 3,
    featured: false,
    popular: false,
  },
  {
    id: "35",
    slug: "wish-movie-2023",
    title: "Wish: Disney's Animated Musical Celebrates 100 Years of Magic",
    excerpt: "A young girl makes a wish on a star and gets a more direct answer than she bargained for when a trouble-making star comes down from the sky.",
    content: `Disney celebrates its centennial with "Wish," an animated musical that pays tribute to 100 years of storytelling while charting its own path forward.

The film follows Asha, a young girl who makes a wish on a star — and gets a literal star named Star who descends to help her make it come true.

## The Animation

The film introduces a new visual style that blends Disney's classic 2D look with modern 3D animation, creating something both nostalgic and fresh.

## The Music

Written by Julia Michaels and directed by Chris Buck and Fawn Veerasunthorn, the soundtrack features show-stopping numbers that harken back to Disney's golden age.`,
    author: {
      name: "Marcus Webb",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "Animation Reporter",
    },
    category: "Movies",
    tags: ["wish", "disney", "animation", "musical", "centennial"],
    image: "https://m.media-amazon.com/images/M/MV5BN2UyZTAxZDctODI5Mi00MDczLWI4OWMtNTliZjEyMmEyN2FkXkEyXkFqcGc@._V1_.jpg",
    publishedAt: "2026-05-20",
    readTime: 4,
    featured: false,
    popular: true,
  },
  {
    id: "36",
    slug: "godzilla-minus-one",
    title: "Godzilla Minus One: Director Takashi Yamazaki Delivers a Kaiju Masterpiece",
    excerpt: "A kamikaze pilot plagued by survivor's guilt faces a giant monster transformed by atomic bomb radiation.",
    content: `Critics are calling "Godzilla Minus One" the best kaiju film in decades — and audiences are agreeing, making it one of the highest-grossing Japanese films ever in international markets.

The film strips the Godzilla formula to its emotional core, focusing on human drama amidst the destruction.

## The Human Story

The film follows a kamikaze pilot who failed to kill Godzilla during World War II. Plagued by survivor's guilt, he must face the monster again when it's transformed by atomic bomb radiation.

## The Spectacle

Director Takashi Yamazaki balances intimate character work with some of the most thrilling kaiju action ever put on film. The destruction sequences are both terrifying and emotionally impactful.`,
    author: {
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      role: "Sci-Fi Film Reporter",
    },
    category: "Movies",
    tags: ["godzilla", "kaiju", "japan", "monster", "action"],
    image: "https://m.media-amazon.com/images/M/MV5BMjc5MjllMGUtMDIwMS00ZDVkLWEzODQtM2NlMTMwMTZhNThmXkEyXkFqcGc@._V1_.jpg",
    publishedAt: "2026-05-19",
    readTime: 5,
    featured: false,
    popular: true,
  },
  {
    id: "37",
    slug: "the-shepherd-2023",
    title: "The Shepherd: Ben Radcliffe Stars in Christmas Eve Flight Drama",
    excerpt: "A fighter pilot on his way home gets lost mid-flight over water and needs a miracle to land safely.",
    content: `Short film "The Shepherd" packs an emotional wallop into just 38 minutes, telling the story of a young fighter pilot whose Christmas Eve journey home becomes a fight for survival.

The film has earned Oscar buzz for its technical achievements and its surprisingly powerful human story.

## The Story

A pilot becomes lost mid-flight over water on Christmas Eve. With fuel running low and visibility near zero, he must rely on skill and faith to survive.

## The Production

Director Iain Softley spent three years developing the film's revolutionary in-flight camera system, which captures the isolation and terror of being alone in the sky with unprecedented realism.`,
    author: {
      name: "Megan Grant",
      avatar: "https://images.unsplash.com/photo-1494790308377-be9c29b29330?w=200&q=80",
      role: "Drama Reporter",
    },
    category: "Movies",
    tags: ["the shepherd", "short film", "christmas", "flight", "drama"],
    image: "https://m.media-amazon.com/images/M/MV5BM2IxZTIyNzQtNTVmOS00NTFiLWFmNTctNDAxZjQ2Y2U3NjQ1XkEyXkFqcGc@._V1_.jpg",
    publishedAt: "2026-05-18",
    readTime: 3,
    featured: false,
    popular: false,
  },
  {
    id: "38",
    slug: "the-holdovers-movie",
    title: "The Holdovers: Alexander Payne's Holiday Gem Stars Paul Giamatti",
    excerpt: "A curmudgeonly history teacher forms an unlikely bond with a damaged troublemaker during Christmas break.",
    content: `"The Holdovers" is the feel-good film critics are calling the surprise hit of the awards season — a heartwarming tale of unexpected connection.

Director Alexander Payne returns to form with this story of a grumpy history teacher (Paul Giamatti) who stays at school to supervise students during Christmas break.

## The Performances

Giamatti is masterful as the alcoholic, cantankerous Angus, but the real revelation is newcomer Dominic Sessa as the troubled student who challenges everything about him.

## The Setting

The film's New England boarding school setting becomes almost a character itself — cold, austere, and yet somehow warming as the relationship between teacher and student develops.`,
    author: {
      name: "Sophie Edwards",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      role: "Awards Season Analyst",
    },
    category: "Movies",
    tags: ["the holdovers", "paul giamatti", "alexander payne", "holiday", "drama"],
    image: "https://m.media-amazon.com/images/M/MV5BOWY3MjUzZTctOTI5ZC00MDA5LTk4ZTMtZWJjNjRmMzE4ZmI2XkEyXkFqcGc@._V1_.jpg",
    publishedAt: "2026-05-17",
    readTime: 5,
    featured: false,
    popular: true,
  },
  {
    id: "39",
    slug: "godzilla-x-kong-new-empire",
    title: "Godzilla x Kong: The New Empire — Titans Return in Epic Sequel",
    excerpt: "Two ancient titans clash as humans discover their intertwined origins and connection to Skull Island's mysteries.",
    content: `The monsterVerse expands with "Godzilla x Kong: The New Empire," as the two greatest titans face their most personal battle yet.

Director Adam Wingard delivers a spectacle that balances massive creature action with surprisingly intimate human drama.

## The New Threat

When a new threat emerges that connects both monsters to a hidden world beneath Skull Island, they must set aside their rivalry and work together — or face extinction.

## The Visuals

The film's visual effects push the boundaries of what's possible, with both titans rendered in stunning detail. The underground Hollow Earth environment is a particular highlight.`,
    author: {
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      role: "Action Film Reporter",
    },
    category: "Movies",
    tags: ["godzilla", "kong", "monsterverse", "legendary", "action"],
    image: "https://m.media-amazon.com/images/M/MV5BMTY0N2MzODctY2ExYy00OWYxLTkyNDItMTVhZGIxZjliZjU5XkEyXkFqcGc@._V1_.jpg",
    publishedAt: "2026-05-16",
    readTime: 4,
    featured: false,
    popular: true,
  },
  {
    id: "40",
    slug: "dune-part-two-movie",
    title: "Dune: Part Two Dominates Box Office with Timothée Chalamet's Epic Return",
    excerpt: "Paul Atreides unites with the Fremen on a warpath of revenge as Denis Villeneuve's epic continues.",
    content: `Denis Villeneuve's "Dune: Part Two" has become one of the most acclaimed sequels in recent memory, earning praise for its scope, performances, and visual grandeur.

The second installment sees Timothée Chalamet's Paul Atreides fully embrace his destiny among the Fremen.

## The Fremen

Zendaya's Chani becomes a central character, her scenes with Paul providing the emotional anchor of the film. The Fremen's culture and beliefs are explored in rich detail.

## The Scale

Villeneuve ups the ante on every front — more action, more planets, more political intrigue. The final act is unlike anything seen in a mainstream blockbuster before.`,
    author: {
      name: "Marcus Webb",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "Sci-Fi Film Reporter",
    },
    category: "Movies",
    tags: ["dune", "denis villeneuve", "timothee chalamet", "zendaya", "sci-fi"],
    image: "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
    publishedAt: "2026-05-15",
    readTime: 5,
    featured: false,
    popular: true,
  },
  {
    id: "41",
    slug: "argylle-movie",
    title: "Argylle: Bryce Dallas Howard Steals the Show in SPY Caper",
    excerpt: "A reclusive author finds her espionage novels mirroring real-world events in this meta spy thriller.",
    content: `Bryce Dallas Howard is winning over audiences as Elly Conway, a reclusive author of spy novels who discovers her fictional plots are coming to life around her.

"Argylle" is a playful, self-aware thriller that uses its meta premise to deliver laughs and genuine suspense.

## The Premise

When real-world events start matching the plots in Elly's books, she finds herself caught up in actual espionage — with Henry Cavill playing the fictional spy from her novels.

## The Action

Matthew Vaughn directs with his signature wit and style, delivering some of the most creative action sequences of his career. The film never takes itself too seriously.`,
    author: {
      name: "Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1494790308377-be9c29b29330?w=200&q=80",
      role: "Action Film Reporter",
    },
    category: "Movies",
    tags: ["argylle", "bryce dallas howard", "henry cavill", "spy", "action"],
    image: "https://m.media-amazon.com/images/M/MV5BNDkzMTU2OWUtZjA2ZS00ZmYxLWE2MzgtZDlhZDc1YjM4Yjk5XkEyXkFqcGc@._V1_.jpg",
    publishedAt: "2026-05-14",
    readTime: 4,
    featured: false,
    popular: true,
  },
  {
    id: "42",
    slug: "american-fiction-movie",
    title: "American Fiction: Jeffrey Wright Stars in Sharp Satire of Publishing Industry",
    excerpt: "A novelist fed up with Black entertainment stereotypes writes a book under a pseudonym that forces him to confront his own assumptions.",
    content: `Jeffrey Wright delivers a career-best performance in "American Fiction," a sharp satire that takes aim at the publishing industry's appetite for Black trauma narratives.

The film, based on Percival Everett's novel "Erasure," is both hilarious and heartbreaking.

## The Plot

A novelist frustrated by the publishing industry's demands for "authentic" Black stories writes a parody of such novels — only to have it become a massive hit, forcing him to live the very stereotypes he mocked.

## The Commentary

Director Cord Jefferson handles the material with surgical precision, balancing comedy and critique in a way that will make audiences laugh while feeling uncomfortable.`,
    author: {
      name: "Sophie Edwards",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      role: "Cultural Critic",
    },
    category: "Movies",
    tags: ["american fiction", "jeffrey wright", "satire", "publishing", "drama"],
    image: "https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-06-01%2FMiniMax-M2.7%2F2034695257328718600%2F4af15a4a7658e885b4602d75cbed25446a162591b42ca66f429333b410bb96b3..png?Expires=1780339951&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=myTN9UlfSUVkQ1SqzW42Kdgc6pc%3D",
    publishedAt: "2026-05-13",
    readTime: 5,
    featured: false,
    popular: true,
  },
  {
    id: "43",
    slug: "best-dressed-stars-week-mixed-new-vintage",
    title: "The Best Dressed Stars of the Week Mixed New With Vintage",
    excerpt: "From red carpet appearances to casual outings, celebrities showed off their fashion chops with a mix of designer pieces and vintage finds.",
    content: `This week's celebrity fashion choices proved that the best style comes from mixing the old with the new.

From Kim Kardashian's coordinated family dinners to Ciara Miller's revenge dress moment, stars have been serving looks that blend high-end fashion with unique vintage pieces.

## The Standouts

Fashion observers noted the return of vintage shopping as a major trend, with several celebrities specifically sourcing older pieces for their public appearances.

## The Details

Accessories played a key role this week, with statement jewelry making a comeback. Chunky chain necklaces and oversized sunglasses were among the most photographed items.`,
    author: {
      name: "Christian Allaire",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "Fashion Reporter",
    },
    category: "Fashion",
    tags: ["celebrity style", "best dressed", "fashion", "vintage", "trends"],
    image: "https://assets.vogue.com/photos/6a1c46faef79861ec0d66c92/4:3/w_1920,c_limit/GettyImages-2278645181.jpg",
    publishedAt: "2026-05-30",
    readTime: 4,
    featured: false,
    popular: true,
  },
  {
    id: "44",
    slug: "kim-kardashian-kris-jenner-family-dinner-fashion",
    title: "Kim Kardashian and Kris Jenner Make Family Dinner a Fashion Affair",
    excerpt: "The mother-daughter duo turned their latest family gathering into a runway moment.",
    content: `Kim Kardashian and Kris Jenner proved that even a simple family dinner requires careful outfit planning.

The two were photographed arriving at a Los Angeles restaurant, both opting for coordinated yet distinct looks that showed their individual styles while complementing each other perfectly.

## The Outfits

Kim chose a sleek, form-fitting ensemble in her signature monochromatic style, while Kris went for a more classic approach with a tailored blazer and sophisticated accessories.

## The Message

Fashion insiders noted that the coordinated styling sent social media into a frenzy, with fans praising the mother-daughter bond visible in their shared appreciation for fashion.`,
    author: {
      name: "Anna Cafolla",
      avatar: "https://images.unsplash.com/photo-1494790308377-be9c29b29330?w=200&q=80",
      role: "Celebrity Fashion Reporter",
    },
    category: "Fashion",
    tags: ["kim kardashian", "kris jenner", "celebrity style", "fashion", "family"],
    image: "https://assets.vogue.com/photos/6a1af38a0d2f6e3fc0004b5b/4:3/w_1920,c_limit/BGUS_3597328_001.jpg",
    publishedAt: "2026-05-29",
    readTime: 3,
    featured: false,
    popular: true,
  },
  {
    id: "45",
    slug: "susan-boyle-fashion-transformation",
    title: "Wait. . . What Is Happening With Susan Boyle?",
    excerpt: "The Britain's Got Talent star's new look has everyone talking.",
    content: `Susan Boyle has undergone a dramatic style transformation that has fans and fashion critics alike doing a double-take.

The Britain's Got Talent star, known for her memorable 2009 audition, has been seen out and about with a completely new aesthetic that's worlds away from her earlier public appearances.

## The Change

Sources close to the singer say she's been working with a personal stylist for several months, and the results are striking. The new look includes statement pieces, bold colors, and a more polished overall appearance.

## The Buzz

Social media has been flooded with reactions to the transformation, with supporters praising her embrace of a new chapter. Fashion commentators note that the evolution reflects a growing trend of celebrities using style as a form of self-expression and reinvention.`,
    author: {
      name: "Christian Allaire",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "Fashion Reporter",
    },
    category: "Fashion",
    tags: ["susan boyle", "fashion transformation", "celebrity style", "britain's got talent"],
    image: "https://assets.vogue.com/photos/6a0b6342b9af6b72617da8e1/4:3/w_1920,c_limit/077A6963.jpg",
    publishedAt: "2026-05-28",
    readTime: 3,
    featured: false,
    popular: false,
  },
  {
    id: "46",
    slug: "ciara-miller-revenge-dress-summer-house",
    title: "Summer House's Ciara Miller Knows Revenge Is a Dress Best Served Hot",
    excerpt: "The reality star's latest look is turning heads and breaking the internet.",
    content: `Ciara Miller from Summer House has become the talk of the fashion world with her latest appearance, proving that when it comes to style, she means business.

The reality star and model was photographed at a recent event wearing a jaw-dropping dress that social media users immediately dubbed her "revenge dress."

## The Dress

The figure-hugging number featured a bold cut and striking color that immediately set it apart from the usual celebrity fare. Fashion observers noted the confident styling as a statement piece.

## The Reaction

Fans flooded social media with praise for Ciara's bold fashion choice, with many calling it her best look to date. The dress has since sold out at multiple retailers, confirming its status as a must-have item.`,
    author: {
      name: "Alexandra Hildreth",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      role: "Reality TV Fashion Correspondent",
    },
    category: "Fashion",
    tags: ["ciara miller", "summer house", "revenge dress", "celebrity style", "fashion"],
    image: "https://assets.vogue.com/photos/6a18624c1919e5a58ee26b6b/4:3/w_1920,c_limit/2276908549",
    publishedAt: "2026-05-27",
    readTime: 3,
    featured: false,
    popular: true,
  },
  {
    id: "47",
    slug: "rah-rah-raffia-street-style",
    title: "Rah Rah for Raffia: How to Wear This Summer Staple the Street Style Way",
    excerpt: "From Copenhagen to New York, fashion insiders are proving that raffia is the must-have material of the season.",
    content: `Raffia is having a major moment, and fashion editors are taking note. This natural fiber, typically associated with summer hats and beach bags, has made its way onto the streets and runways of fashion capitals around the world.

## The Trend

From structured blazers to flowy skirts, raffia is appearing in unexpected places. The key to pulling off the look? Balance texture with more refined pieces to avoid looking too casual.

## The Inspiration

Copenhagen fashion week proved that Scandinavian women have mastered the art of incorporating raffia into their everyday wardrobes. The key is in the styling — pairing raffia pieces with sleek accessories and tailored cuts.

## The Styling Tips

Fashion experts recommend starting with a raffia accessory — a bag or headpiece — and building an outfit around it. For those feeling bolder, a full raffia ensemble can work when the pieces are well-tailored.

The material's natural texture adds interest to simple silhouettes, making even basic outfits look editor-approved.`,
    author: {
      name: "Emma Sheldon",
      avatar: "https://images.unsplash.com/photo-1494790308377-be9c29b29330?w=200&q=80",
      role: "Runway Correspondent",
    },
    category: "Fashion",
    tags: ["raffia", "street style", "summer fashion", "copenhagen", "trends"],
    image: "https://assets.vogue.com/photos/6893c3a1b17040a8b7792ed0/4:3/w_1920,c_limit/COPENHAGEN%20_SS26_STREETSTYLE_Day3_Acielle_11.jpg",
    publishedAt: "2026-05-31",
    readTime: 4,
    featured: false,
    popular: false,
  },
];

export const featuredArticle = articles.find((a) => a.featured) || articles[0];
export const latestArticles = articles.slice(0, 6);
export const popularArticles = articles.filter((a) => a.popular).slice(0, 5);

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return articles.filter((a) => a.category.toLowerCase() === category.name.toLowerCase());
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function searchArticles(query: string): Article[] {
  const lowerQuery = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(lowerQuery) ||
      a.excerpt.toLowerCase().includes(lowerQuery) ||
      a.category.toLowerCase().includes(lowerQuery) ||
      a.tags.some((t) => t.toLowerCase().includes(lowerQuery))
  );
}
