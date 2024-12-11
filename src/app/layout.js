import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/provider";
import Providers from "@/provider/Providers";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <div>
            <Header />
          </div>
          <ReduxProvider>
            <Toaster />
            {children}
          </ReduxProvider>
        </body>
      </html>
    </Providers>
  );
}
