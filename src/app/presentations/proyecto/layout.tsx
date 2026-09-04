import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bitácora de Trabajo en Equipo | Física General I",
  description:
    "Presentación interactiva para aprender a completar correctamente la bitácora de trabajo en equipo en Física General I.",
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
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Bitácora de Trabajo en Equipo | Física General I",
    description:
      "Una guía para organizar, documentar y evaluar el trabajo en equipo durante el proyecto de Física General I.",
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