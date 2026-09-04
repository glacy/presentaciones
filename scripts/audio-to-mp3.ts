/// <reference types="bun-types" />
/**
 * Convierte las narraciones WAV de public/audio/ a MP3 (128 kbps mono)
 * para producción. Idempotente: solo reconvierte si el MP3 no existe o
 * es más antiguo que su WAV. Usa --force para reconvertir todo.
 *
 * Uso: bun run audio:mp3 [--force]
 */
import { readdir, stat } from "node:fs/promises";
import { join, relative } from "node:path";
import { $ } from "bun";

const AUDIO_DIR = join(import.meta.dir, "..", "public", "audio");
const force = process.argv.includes("--force");

async function collectWavs(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectWavs(path)));
    } else if (entry.name.endsWith(".wav")) {
      files.push(path);
    }
  }
  return files;
}

const wavs = await collectWavs(AUDIO_DIR);
if (wavs.length === 0) {
  console.log(`No se encontraron archivos .wav en ${relative(process.cwd(), AUDIO_DIR)}`);
  process.exit(0);
}

let converted = 0;
let skipped = 0;
let failed = 0;

for (const wav of wavs) {
  const mp3 = wav.replace(/\.wav$/, ".mp3");

  if (!force) {
    const [wavStat, mp3Stat] = await Promise.all([
      stat(wav),
      stat(mp3).catch(() => null),
    ]);
    if (mp3Stat && mp3Stat.mtimeMs >= wavStat.mtimeMs) {
      skipped++;
      continue;
    }
  }

  const proc = await $`ffmpeg -y -i ${wav} -codec:a libmp3lame -b:a 128k -ac 1 ${mp3}`
    .quiet()
    .nothrow();

  if (proc.exitCode === 0) {
    converted++;
    console.log(`✓ ${relative(process.cwd(), mp3)}`);
  } else {
    failed++;
    console.error(`✗ Error convirtiendo ${relative(process.cwd(), wav)}`);
  }
}

console.log(`\n${converted} convertidos, ${skipped} ya al día, ${failed} con error`);
if (failed > 0) process.exit(1);
