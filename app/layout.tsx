import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { baseUrl } from './sitemap';
import MainContentWrapper from './components/MainContentWrapper';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'MindLaunch VP',
    template: '%s | MindLaunch',
  },
  description: 'Venture Partners and Capital',
  openGraph: {
    title: 'MindLaunch',
    description: 'MindLaunch Venture Partners and Capital',
    url: baseUrl,
    siteName: 'MindLaunch',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} text-black bg-white dark:text-white dark:bg-black`}
    >
      <body className="antialiased">
        <MainContentWrapper>
          {children}
          </MainContentWrapper>
      </body>
    </html>
  );
}
