// flatfeeds.ts

import { Feed } from "https://deno.land/x/flatfeeds@v0.1.1/mod.ts";

// Fonte para YouTube
const youtubeFeed = new Feed({
  title: "ANAC - Canal Oficial",
  link: "https://youtube.com/@oficialanac",
  description: "Vídeos da ANAC no YouTube",
  language: "pt-br",
  generator: "FlatFeeds"
});

// Fonte para LinkedIn
const linkedinFeed = new Feed({
  title: "ANAC - LinkedIn",
  link: "https://www.linkedin.com/company/oficial-anac/",
  description: "Publicações da ANAC no LinkedIn",
  language: "pt-br",
  generator: "FlatFeeds"
});

// Fonte para Instagram
const instagramFeed = new Feed({
  title: "ANAC - Instagram",
  link: "https://www.instagram.com/oficialanacbr/",
  description: "Postagens da ANAC no Instagram",
  language: "pt-br",
  generator: "FlatFeeds"
});

// Função para gerenciar e gerar o feed para cada fonte
async function generateFeeds() {
  await youtubeFeed.addItem({
    title: "Novo Vídeo - ANAC",
    link: "https://youtube.com/watch?v=example",
    description: "Descrição do vídeo da ANAC.",
    date: new Date(),
  });

  await linkedinFeed.addItem({
    title: "Publicação Recenta - ANAC",
    link: "https://www.linkedin.com/pulse/example",
    description: "Descrição da publicação no LinkedIn.",
    date: new Date(),
  });

  await instagramFeed.addItem({
    title: "Postagem no Instagram - ANAC",
    link: "https://www.instagram.com/p/example/",
    description: "Descrição da postagem no Instagram.",
    date: new Date(),
  });

  // Geração dos feeds no formato RSS
  await youtubeFeed.saveToFile("./output/youtube-feed.xml");
  await linkedinFeed.saveToFile("./output/linkedin-feed.xml");
  await instagramFeed.saveToFile("./output/instagram-feed.xml");
}

// Gerar os feeds
generateFeeds().catch(console.error);
