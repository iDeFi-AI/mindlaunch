
export const baseUrl = 'https://mindlaunch.ai';

export default async function sitemap() {


  let routes = ['', '/portfolio', '/hire'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
