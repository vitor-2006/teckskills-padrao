import { minus } from "./minus"

describe('minus function', () => {
    it('should subtract two numbers correctly', () => {
        const result = minus(2, 3)
        expect(result).toBe(-1)
    })
})