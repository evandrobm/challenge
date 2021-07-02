# JS Challenge
1. Having a list of n digits (where: 0 <= digit <= 9), where n is less than or equal to 100, arrange it to move all 0's to the right in O(n) time. 
Display this list in the console. <br>
```[4, 8, 0, 9, 2, 0, 5, 8, 0, 4, 8] -> [4, 8, 9, 2, 5, 8, 4, 8, 0, 0, 0]```


2. Next, the previous list without zeros will represent a fictitious integer (48925848). Add 1 unit to it, leaving the final total as an array. 
Display this list in the console. <br>
```[4, 8, 9, 2, 5, 8, 4, 8, 0, 0, 0] -> [4, 8, 9, 2, 5, 8, 4, 9]```


3. Next, multiply each digit that is not a zero and in an even index, by -1. 
Display this list in the console.<br>
```[4, 8, 9, 2, 5, 8, 4, 9] -> [-4, 8, -9, 2, -5, 8, -4, 9]```


A valid subarray is any continuous list of elements belonging to the parent array. <br>
The following are valid subarrays of ```[-4, 8, -9, 2, -5, 8, -4, 9]```
```
    [-4, 8, -9]

    [-9, 2]

    [-4, 8, -9, 2, -5, 8, -4, 9]

    [8]
```

4. Finally, detect the subarray, whose sum of digits is the maximum and return this sum.
Display this sum in the console. <br>
```[-4, 8, -9, 2, -5, 8, -4, 9] -> 13 ``` <br>
```[8, -4, 9]``` is our maximum subarray and its sum is ```13```.
