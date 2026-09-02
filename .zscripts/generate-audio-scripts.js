#!/usr/bin/env node

/**
 * Script para generar audios de prueba para presentaciones
 * Usando audio sintético básico del navegador
 */

const fs = require('fs');
const path = require('path');

const slideAudioContent = {
  physics: [
    { index: 1, text: "Bienvenidos a esta presentación sobre Vectores y Operaciones Vectoriales. En esta sesión exploraremos los fundamentos matemáticos que describen el mundo físico." },
    { index: 2, text: "Comencemos con las cantidades físicas y sus unidades. Todo lo que medimos en física necesita una unidad de medida adecuada para tener significado." },
    { index: 3, text: "El mundo físico se divide en dos tipos de cantidades: los escalares, que tienen solo magnitud, y los vectores, que tienen magnitud y dirección." },
    { index: 4, text: "Para trabajar con vectores necesitamos sistemas de coordenadas. Estos nos permiten describir la posición y el movimiento en el espacio." },
    { index: 5, text: "Las operaciones básicas con vectores incluyen suma y resta. Estas operaciones siguen reglas geométricas que estudiaremos en detalle." },
    { index: 6, text: "Los puntos cardinales nos ayudan a navegar y describir direcciones en el plano horizontal. Nortes, Sur, Este y Oeste son fundamentales." },
    { index: 7, text: "El producto escalar es una operación matemática importante. Nos ayuda a calcular trabajo, proyecciones y ángulos entre vectores." },
    { index: 8, text: "El producto vectorial es distinto del producto escalar. Nos da un vector perpendicular a los dos vectores originales y es útil para torque." },
    { index: 9, text: "Resumamos lo aprendido: hemos visto tipos de vectores, sistemas de coordenadas y operaciones básicas como suma, resta y productos." },
    { index: 10, text: "Los vectores son una herramienta poderosa en física. Nos permiten describir fuerzas, velocidades, aceleraciones y muchos otros fenómenos físicos." }
  ],
  proyecto: [
    { index: 1, id: "cover", text: "La Bitácora del Trabajo Individual y en Equipo. Una guía para conquistar el trabajo colaborativo sin morir en el intento." },
    { index: 2, id: "context", text: "¿Para qué sirve la bitácora? Es más que un documento: es el mapa que guía tu equipo hacia el éxito y la eficiencia." },
    { index: 3, id: "villain", text: "El villano de esta historia es el caos organizacional. Sin una bitácora adecuada, los proyectos se convierten en pesadillas." },
    { index: 4, id: "structure", text: "La bitácora es un sistema articulado de componentes que trabajan juntos para mantener el orden y la claridad en el equipo." },
    { index: 5, id: "diagnosis", text: "Tabla uno: Mirarse al espejo sin filtro. El diagnóstico personal es el primer paso para entender tu rol en el equipo." },
    { index: 6, id: "treaty", text: "Tablas dos y tres: Armando el rompecabezas. Aquí definimos roles, responsabilidades y expectativas para cada miembro." },
    { index: 7, id: "timeline", text: "Tabla cuatro: El cronograma no es un deseo, es un contrato. Los tiempos deben ser realistas y respetarse." },
    { index: 8, id: "storm", text: "Tabla cinco es crítica: La realidad siempre gana a la teoría. Aquí registramos problemas reales y sus soluciones." },
    { index: 9, id: "mirror", text: "Tabla seis: La evaluación que no es por cumplir. Un espejo final para reflexionar sobre el trabajo realizado." },
    { index: 10, id: "thread", text: "La trazabilidad es el secreto de los cien puntos. Todo queda documentado para justificar tu trabajo y resultados." },
    { index: 11, id: "epilogue", text: "La bitácora no es puro papeleo. Es tu herramienta más valiosa para el éxito profesional y académico en equipo." }
  ]
};

// Crear archivos de texto con guiones
const outputDir = path.join(__dirname, 'public', 'audio');

Object.keys(slideAudioContent).forEach(presentation => {
  const presentationDir = path.join(outputDir, presentation);
  if (!fs.existsSync(presentationDir)) {
    fs.mkdirSync(presentationDir, { recursive: true });
  }

  slideAudioContent[presentation].forEach(slide => {
    const filename = slide.id 
      ? `${slide.id}.txt`
      : `slide-${String(slide.index).padStart(2, '0')}.txt`;
    const filepath = path.join(presentationDir, filename);
    
    const content = `# Audio para slide ${slide.index}${slide.id ? ` (${slide.id})` : ''}\n\n` +
      `Texto: ${slide.text}\n\n` +
      `Instrucciones para generar audio:\n` +
      `- Usar TTS (Text-to-Speech) o grabación profesional\n` +
      `- Formato: MP3, bitrate 128kbps\n` +
      `- Duración estimada: ${Math.ceil(slide.text.length / 15)} segundos\n` +
      `- Tono: profesional, educativo, moderado\n\n` +
      `Nombre de archivo de audio: ${filename.replace('.txt', '.mp3')}\n`;
    
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Creado: ${filepath}`);
  });
});

// Crear archivo de instrucciones general
const generalInstructions = `# Guiones de Audio para Presentaciones

## Estructura
- \`audio/physics/\` - Audios para presentación de física
- \`audio/proyecto/\` - Audios para presentación de proyecto

## Convención de Nombres
- Física: \`slide-01.mp3\`, \`slide-02.mp3\`, etc.
- Proyecto: \`cover.mp3\`, \`context.mp3\`, etc. (según ID)

## Generación de Audios

### Opción 1: TTS (Text-to-Speech)
Usa servicios como:
- ElevenLabs (alta calidad)
- Google Cloud TTS
- Amazon Polly
- Azure Speech Services

### Opción 2: Grabación Profesional
Contratar narrador profesional para mejor calidad

### Opción 3: Generación Local
Usar herramientas como:
- macOS: \`say\` comando
- Python: \`gTTS\`, \`pyttsx3\`
- Online: various TTS websites

## Calidad Recomendada
- Formato: MP3
- Bitrate: 128-192 kbps
- Frecuencia: 44.1 kHz
- Duración: Aproximadamente 3-7 segundos por palabra

## Metadatos
Cada audio debe incluir información de:
- Índice de slide
- Duración exacta (para sincronización)
- Idioma
- Calidad de audio

## Próximos Pasos
1. Generar audios según guiones
2. Actualizar duraciones en metadata de slides
3. Probar reproducción en diferentes navegadores
4. Ajustar sincronización si es necesario
`;

fs.writeFileSync(path.join(outputDir, 'README.md'), generalInstructions, 'utf8');
console.log('\n✅ Estructura de archivos de audio creada con éxito');
console.log('📁 Ubicación: public/audio/');
console.log('📋 Guiones generados para ' + (slideAudioContent.physics.length + slideAudioContent.proyecto.length) + ' slides');