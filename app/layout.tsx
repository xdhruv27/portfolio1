
import { PropsWithChildren } from "react";
import "./globals.css";

import { Inter } from "next/font/google";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Kethan Gowda N",
  openGraph: {
    title: "Kethan Gowda N - Fullstack AI Developer",
    description: "Welcome to the portfolio of Kethan Gowda N. Explore my work as a Fullstack AI Developer.",
    images: {
      url: "https://kethan3.vercel.app/kethanpfp2.jpg", 
      width: 1200,
      height: 628,
    },
  },
};


const RootLayout = ( props : PropsWithChildren) =>{


  return (
    <html  suppressHydrationWarning >
      <body className={inter.className}> 
          
    
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
        <div>
           <NavigationBar/>
           </div>
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout;