# **Missing Numbers**

This repository contains a JavaScript function that finds the two missing numbers in a given array of integers. The array is supposed to contain numbers from `1` to `n` (inclusive), but two numbers are missing. The function identifies and returns these missing numbers in a sorted array.

---

## **Description**

The `missingNumbers` function takes an array of integers as input and returns an array containing the two missing numbers. The input array is expected to have numbers in the range `1` to `n`, where `n` is the length of the input array plus two (because two numbers are missing).

The function efficiently finds the missing numbers by using a hash map to track the numbers that exist in the input array and then iterates through the range `1` to `n` to identify the missing values.

---

## **Function Signature**

```javascript
function missingNumbers(nums) -> Array
```

### **Parameters**
| Name    | Type     | Description                         |
|---------|----------|-------------------------------------|
| `nums`  | `Array`  | An array of integers in the range `1` to `n`, but with two numbers missing. |

### **Returns**
| Type     | Description                              |
|----------|------------------------------------------|
| `Array`  | An array containing the two missing numbers in ascending order. |

---

## **Time and Space Complexity**
| Complexity     | Description               |
|----------------|---------------------------|
| Time           | **O(n)**                  |
| Space          | **O(n)**                  |

- **Time Complexity**: The function iterates through the input array once to build the hash map, and then through the range `1` to `n` once to find the missing numbers.
- **Space Complexity**: The hash map (`numsObj`) requires `O(n)` space to store the numbers from the input array.

---

## **Algorithm Explanation**

1. Initialize an empty hash map (`numsObj`) to track the presence of numbers in the input array.
2. Iterate through the input array and set each number as a key in the hash map.
3. Calculate the total number of numbers (`n`) in the complete sequence, which should be the length of the input array plus two (since two numbers are missing).
4. Iterate through the range `1` to `n` and check if each number exists in the hash map.
   - If a number is missing from the hash map, add it to the `result` array.
5. Return the `result` array, which contains the two missing numbers.

---

## **Examples**

### **Example 1**
```javascript
missingNumbers([1, 2, 4, 6]); 
// Output: [3, 5]
// Explanation: The complete sequence is [1, 2, 3, 4, 5, 6]. The missing numbers are 3 and 5.
```

### **Example 2**
```javascript
missingNumbers([2, 3, 5, 6, 7, 8]); 
// Output: [1, 4]
// Explanation: The complete sequence is [1, 2, 3, 4, 5, 6, 7, 8]. The missing numbers are 1 and 4.
```

---

## **Edge Cases**
- **Empty array**: Returns `[1, 2]` as both numbers are missing.
- **Array with consecutive numbers and two gaps**: Correctly identifies the two missing numbers.
- **Array containing all numbers except two**: Returns the two missing numbers in ascending order.

---

## **Usage**

To use the `missingNumbers` function, import it or include it in your JavaScript code:

```javascript
const nums = [1, 2, 4, 6];
console.log(missingNumbers(nums)); // Output: [3, 5]
```

---

## **Edge Case Handling**
| Edge Case           | Result     | Explanation                                 |
|---------------------|------------|---------------------------------------------|
| Empty array         | `[1, 2]`   | Both numbers are missing.                   |
| Array with one gap  | `[n, n+1]` | Returns the two missing numbers.            |
| Large arrays        | Correct    | Handles large arrays efficiently.           |

---

## **Tests**

You can test the function with various inputs to ensure it works correctly:

```javascript
console.log(missingNumbers([1, 2, 4, 6])); 
// Output: [3, 5]

console.log(missingNumbers([2, 3, 5, 6, 7, 8])); 
// Output: [1, 4]

console.log(missingNumbers([])); 
// Output: [1, 2]
```

---

## **License**
This project is open-source and available under the **MIT License**. Feel free to use, modify, and distribute the code. 
