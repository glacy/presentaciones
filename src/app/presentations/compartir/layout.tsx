import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construir para compartir | Educación abierta",
  description:
    "Introducción a herramientas y conceptos para crear materiales educativos abiertos, reproducibles e inclusivos: Markdown, GitHub, CI/CD y Vercel para docentes.",
  keywords: [
    "educación abierta",
    "recursos educativos abiertos",
    "Creative Commons",
    "Markdown",
    "GitHub",
    "reproducibilidad",
    "accesibilidad",
  ],
  authors: [{ name: "Gerardo Lacy Mora" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Construir para compartir | Educación abierta",
    description:
      "De documentos congelados a bienes comunes educativos: materiales vivos, auditables y accesibles.",
    type: "website",
  },
};

export default function CompartirLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
