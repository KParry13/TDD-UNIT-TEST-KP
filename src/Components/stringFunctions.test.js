import {capitalizeFirstLetter, concatenateTwoWords, returnSecondWord} from './stringFunctions'

describe('string functions', () =>{

    //Capitalization Test
    describe('capitalize', () => {
        it('should capitalize first letter of the sentence hello world', () => {
            expect(capitalizeFirstLetter("hello world")).toBe("Hello world")
        })
    });
        it('should say invalid arguement', () => {
            expect(() => capitalizeFirstLetter("Hello World")).not.toBe("Invalid")
    })

    //Concatenation Test
    describe('concatenate',() => {
        it("should combine two strings together firstWord + secondWord", () => {
            expect(concatenateTwoWords("code", "camp")).toBe("codecamp")
        });
    });
        it('should say invalid arguement', () => {
            expect(() => concatenateTwoWords("campcode")).not.toBe("Invalid")
        })


    //Second Word Test
    describe('second word', () => {
        it('should return the second word in a multi string line', () =>{
            expect(returnSecondWord("Her name is Kayla")).toBe("name")
        });
    });
        it('should say invalid arguement',() => {
            expect(() => returnSecondWord("Kayla")).not.toBe("Invalid")
        })
})