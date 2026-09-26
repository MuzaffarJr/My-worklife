import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {title:"Muzaffar Normurodov — Developer & Product Designer",description:"Portfolio of Muzaffar Normurodov — software developer, product designer and creative web designer."};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}