import { Afacad as AfacadFont } from "next/font/google";
import "./globals.css";

const Afacad = AfacadFont({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Azeem Khan | Full Stack Developer",
  description:
    "Portfolio of Azeem Khan, a full stack developer building dynamic, responsive and user-centered web apps with React, Next.js, Node.js, Java and Spring Boot.",
  icons: {
    icon: "../../Assets/Logo.PNG"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Afacad.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
