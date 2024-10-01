import { Inter } from "next/font/google";
import "../globals.css";
import ReduxProvider from "@/redux/provider";
import Providers from "@/provider/Providers";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </html>
    </Providers>
  );
}
