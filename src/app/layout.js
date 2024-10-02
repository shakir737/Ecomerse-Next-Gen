import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/provider";
import Providers from "@/provider/Providers";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </html>
    </Providers>
  );
}
