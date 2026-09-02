#!/bin/bash
echo "Configurando deploy para Vercel..."

if ! command -v vercel &> /dev/null; then
    echo "Instalando Vercel CLI..."
    bun install -g vercel
fi

echo "Verificando estado de Git..."
git status

echo ""
echo "Para desplegar en Vercel:"
echo "1. Asegúrate de tener los cambios commiteados en GitHub"
echo "2. Ve a vercel.com/new e importa tu repositorio: https://github.com/glacy/presentaciones"
echo "3. Vercel detectará automáticamente que es Next.js"
echo "4. Configura las variables de entorno si las necesitas"
echo "5. Deploy automático!"
echo ""
echo "Comandos útiles:"
echo "  vercel --prod    # Deploy a producción"
echo "  vercel           # Deploy a preview"