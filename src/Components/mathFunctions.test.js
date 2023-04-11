import {addTwoNumbers,subtractTwoNumbers,multiplyTwoNumbers,divideTwoNumbers} from "./mathFunctions";

describe("Math Functions", () => {
  
  //Add Tests
    describe("add", () => {
    it("should add two numbers 1 + 1", () => {
      expect(addTwoNumbers(1, 1)).toBe(2);
    });
    it("should say invalid argument", () => {
        expect(()=> addTwoNumbers(4,"hello")).toThrow("Invalid")
    })
  });

  //Subtract Tests
  describe("subtract", () => {
    it("should subtract two numbers 3-1", () =>{
        expect(subtractTwoNumbers(3,1)).toBe(2)
    });
    it("should say invalid argument", () => {
        expect(() => subtractTwoNumbers(4,"hello")).toThrow("Invalid")
    })
  });

  //Mulitpy Tests
  describe('multiply', () => {
    it('should multiply two numbers 2*2', () => {
        expect(multiplyTwoNumbers(2,2)).toBe(4)
    });
    it('should say invalid argurment', () => {
        expect(() => multiplyTwoNumbers(2,'hello')).toThrow('Invalid')
    })
  });

  //Divide Tests
  describe('divide', () => {
    it('should divide two numbers 6/2', () => {
        expect(divideTwoNumbers(6,2)).toBe(3)
    });
    it('should say invalid argurment', () => {
        expect(() => divideTwoNumbers(6,'hello')).toThrow('Invalid')
    })
  });

});
