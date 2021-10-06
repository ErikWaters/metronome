import { tempoToBeatInMS } from './tempoToBeatInMS'

test('tempoToBeatInMs calculates 60 bpm as 1000 ms per beat', () => {
  expect(tempoToBeatInMS(60)).toBe(1000)
})

test('tempoToBeatInMs calculates 120 bpm as 500 ms per beat', () => {
  expect(tempoToBeatInMS(120)).toBe(500)
})

test('tempoToBeatInMs calculates 30 bpm as 2000 ms per beat', () => {
  expect(tempoToBeatInMS(30)).toBe(2000)
})
