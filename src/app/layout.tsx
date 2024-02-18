import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./common/Header";
import Footer from "./common/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to A Journey of Self Discovery",
  description: "Having a proven ability to empathize with individuals whilst retaining an objective and realistic approach to their treatment and therapy. Comfortable working and communicating with people from all backgrounds and having experience of trauma, abuse, addiction, depression, marital difficulties and child-parent conflicts and mostly helping clients having Anxiety and Obsessive Compulsive Disorder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ErrorBoundary>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
      </ErrorBoundary>
    </html>
  );
}
