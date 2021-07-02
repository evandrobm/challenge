# JS Challenge
Having a list of n digits (where: 0 <= digit <= 9), where n is less than or equal to 100, arrange it to move all 0's to the right in O(n) time. 
Display this list in the console.
Example: [4, 8, 0, 9, 2, 0, 5, 8, 0, 4, 8] -> [4, 8, 9, 2, 5, 8, 4, 8, 0, 0, 0]


Next, the previous list without zeros will represent a fictitious integer (48925848). Add 1 unit to it, leaving the final total as an array. 
Display this list in the console.
Example: [4, 8, 9, 2, 5, 8, 4, 8, 0, 0, 0] -> [4, 8, 9, 2, 5, 8, 4, 9]


Next, multiply each digit in an even index that is not a zero, by -1. Finally, detect the sub-array, whose sum of digits is the maximum and return this sum. 
Display this sum in the console.
Example: [4, 8, 9, 2, 5, 8, 4, 9] -> [-4, 8, -9, 2, -5, 8, -4, 9] -> 13. 
