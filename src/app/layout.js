import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/Footer/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative overflow-x-hidden `}>
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
