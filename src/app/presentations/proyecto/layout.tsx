import type { Metadata } from "next";

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

export default function ProyectoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}