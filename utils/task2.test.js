import { triangle } from "./task2";

describe ('triangle function test', () =>{
    it ('triangle function test, rectangular',() =>{
        expect(triangle(6,8,10)).toBe('Это прямоугольный треугольник!')
        expect(triangle(5,12,13)).toBe('Это прямоугольный треугольник!')
    }),
    it ('triangle function test, not rectangular',() =>{
        expect(triangle(6,3,10)).toBe('Это не прямоугольный треугольник!')
    })

})