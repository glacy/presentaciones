import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vectores y Operaciones Vectoriales | Física General I",
  description:
    "Presentación interactiva sobre vectores, sistemas de coordenadas y operaciones vectoriales en Física General I. Aprende suma, resta, producto escalar y vectorial.",
  keywords: [
    "vectores",
    "operaciones vectoriales",
    "física general",
    "producto escalar",
    "producto vectorial",
    "sistemas de coordenadas",
    "matemáticas",
  ],
  authors: [{ name: "Cátedra de Física General I" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Vectores y Operaciones Vectoriales | Física General I",
    description:
      "Vectores, sistemas de coordenadas y operaciones vectoriales",
    type: "website",
  },
};

export default function PhysicsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}