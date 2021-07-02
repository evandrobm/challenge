# JS Challenge
Having a list of n digits (where: 0 <= digit <= 9), where n is less than or equal to 100, arrange it to move all 0's to the right in O(n) time. 
Display this list in the console.
Example: [4, 8, 0, 9, 2, 0, 5, 8, 0, 4, 8] -> [4, 8, 9, 2, 5, 8, 4, 8, 0, 0, 0]
<br><br>


Next, the previous list without zeros will represent a fictitious integer (48925848). Add 1 unit to it, leaving the final total as an array. 
Display this list in the console.
Example: [4, 8, 9, 2, 5, 8, 4, 8, 0, 0, 0] -> [4, 8, 9, 2, 5, 8, 4, 9]
<br><br>


Next, multiply each digit that is not a zero and in an even index, by -1. 
Example: [4, 8, 9, 2, 5, 8, 4, 9] -> [-4, 8, -9, 2, -5, 8, -4, 9]
<br><br>


A valid subarray is any continuous list of elements belonging to the parent array.

The following are valid subarrays of [-4, 8, -9, 2, -5, 8, -4, 9]:

[-4, 8, -9]

[-9, 2]

[-4, 8, -9, 2, -5, 8, -4, 9]

[8]
<br><br>

Finally, detect the subarray, whose sum of digits is the maximum and return this sum. 
Display this sum in the console. 

[-4, 8, -9, 2, -5, 8, -4, 9] -> 13. 

[8, -4, 9] is our maximum subarray and its sum is 13.
