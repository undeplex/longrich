// next-seo.config.js
export default {
    title: "My E-commerce Site",
    description: "Shop the best products at unbeatable prices.",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.longrich.vercel.app/",
      site_name: "My E-commerce Site",
      images: [
        {
          url: "https://www.longrich.vercel.app/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "My E-commerce Site OG Image",
        },
      ],
    },
    twitter: {
      handle: "@longrichstore",
      site: "@longrichstore",
      cardType: "summary_large_image",
    },
  };
  