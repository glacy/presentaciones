import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "El Mapa del Tesoro | Bitácora de Trabajo en Equipo",
  description:
    "Presentación interactiva para aprender a completar correctamente la bitácora de trabajo en equipo en Física General I. Storytelling visual de principio a fin.",
  keywords: [
    "bitácora",
    "trabajo en equipo",
    "Física General I",
    "proyecto grupal",
    "rubrica",
    "trazabilidad",
  ],
  authors: [{ name: "Cátedra de Física General I" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "El Mapa del Tesoro | Bitácora de Trabajo en Equipo",
    description:
      "Cómo conquistar el trabajo en equipo sin morir en el intento.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body
        className={`${poppins.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
