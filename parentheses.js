/**
 * Problem statement
 Given a strings containing just characters "(", ")", "{", "}", "[" , "]"
 Determine if the input string is valid.
 An input string is valid if =>
    * Open brackets must be closed by the same type of brackets.
    * Open brackets must be closed in the correct order.
    * Every close bracket has a corresponding open bracket of the same type.
    
    * Input Output
    "() {} []" -> true;
    "({[]})" -> true;
    "(]"  -> false
    "(()" -> false
 
 */
import Stack from "./stack.js";

const bracketChecker = (str) => {
    const stack = new Stack();

    const bracketMap = {
        ")": "(",
        "}": "{",
        "]": "[",
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // console.log(char);

        if (char === "(" || char === "{" || char === "[") {
            stack.push(char)
        }
        else if (char === ")" || char === "}" || char === "]") {
            if (stack.isEmpty()) {
                return ({ message: "Stack is empty", status: false })
            }
            const expectedBracket = bracketMap[char];
            const gottenBracket = stack.pop();

            console.log(`Expected Bracket: ${bracketMap[char]}`, `Got this ${gottenBracket}`);

            if (gottenBracket !== expectedBracket) {
                return ({ message: "Invalid parentheses", status: false })
            }
        }
    }
    return { message: "Valid parentheses.", status: stack.isEmpty() }
}
console.log(bracketChecker("({[([{}])]})"));
console.log(bracketChecker("({[([{[}])]})"));