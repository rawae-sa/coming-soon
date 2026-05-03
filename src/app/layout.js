import { Geist, Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

import { IBM_Plex_Sans_Arabic } from "next/font/google";

const ibmPlex = IBM_Plex_Sans_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["arabic"],
  display: "swap",
});

export const metadata = {
  title: "RAWA'E | Coming Soon",
  description: "Coming Soon.",
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full antialiased">
      <body className={`${ibmPlex.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
