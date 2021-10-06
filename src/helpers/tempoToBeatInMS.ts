import { pipe } from './pipe'

const BPMtoBPS = (bpm: number): number => bpm / 60

const beatDurationInSeconds = (bps: number): number => 1 / bps

const secondsToMS = (seconds: number): number => seconds * 1000

export const tempoToBeatInMS = (bpm: number): number =>
  pipe(BPMtoBPS, beatDurationInSeconds, secondsToMS)(bpm)
