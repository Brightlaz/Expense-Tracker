import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Expentra",
  description:
    "Track every expense, take charge of your finances, and watch your savings grow with expentra.",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#F6F3F3",
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#F6F3F3]`}>{children}</body>
    </html>
  );
}
