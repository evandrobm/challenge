# JS Challenge
Having a list of n digits (0 <= digit <= 9), where n less than or equal to 100, arrange it to move all 0 to right in O(n) time. Display this list in the console.
Example: [4, 8, 0, 9, 2, 0, 5, 8, 0, 4, 8] -> [4, 8, 9, 2, 5, 8, 4, 8, 0, 0, 0]


Next, the previous list without zeros ([4, 8, 9, 2, 5, 8, 4, 8]) will represent a fictitious integer (48925848). Add 1 unit to it, leaving the final list as 
[4, 8, 9, 2, 5, 8, 4, 9]. Display this list in the console.


Next, multiply each digit in an odd position that is also not a zero, by -1. Finally, detect the sub-array, whose sum of digits is the maximum and return this sum. Example: [4, 8, 9, 2, 5, 8, 4, 9] -> [-4, 8, -9, 2, -5, 8, -4, 9] -> 13. Display this sum in the console.
