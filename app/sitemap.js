export default function sitemap() {
    return [
      {
        url: 'https://localbaazaar.com',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://acme.com/shop-registeration',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    ]
  }