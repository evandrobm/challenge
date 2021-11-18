# JS Challenge

## The Solution

For this solution I use the strategy of adding functions on the Array prototype, to keep the execution area of the code more clean, simple and semantic.

Also, in this first implementation, I'm setting the array to execute inside the code, not receiving from any input from the person executing the code.

For Step 1, the algorithm iterate the array only once to keep the O(n) time, splitting non zeros and zeros, and return both concatenated.

For Step 2, the algorithm iterates the array from backwards adding 1 to the number, if the add operation results in a 10, the array element is 0 and we go to the next iteration. If all iterations are executed we add one more digit at the beginning, because `99 + 1 = 100`.

For Step 3, the algorithm iterates from 0, two at a time, multiplying by the value passed as argument, in this case -1, the itens on array.

For Step 4, the algorithm iterates every element in the final array, doing the sum of elements to search the max value at the final iteration. When the current sum is lower than the current item, we set tis item as the current sum only. At every element we try if the current sum is bigger than the actual max value to update it if necessary.

I have some questions that I want to ask that I will list here and reply with the way I follow, if the answer is something different, I can implement in a second version.

```
Can we use array functions like push, filter... or functions like Math.max? In this implementation I use then to be more fast, but they can be changed for manual implementations.

In the Step 2, when we need to add 1 in the number compound by array digits, if the array is empty, the final number is 0 or at the end we should return an empty array (because considering 0, an empty array will return [1] as 0 + 1 = 1)? I returned an empty array in this implementation.
```


## The Challenge

1. Having a list of n digits where 0 <= digit <= 9 and where n is less than or equal to 100, arrange it to move all 0's to the right in O(n) time. 
Display this list in the console. <br>
```[4, 8, 0, 9, 2, 0, 5, 8, 0, 4, 8] -> [4, 8, 9, 2, 5, 8, 4, 8, 0, 0, 0]```


2. Next, the previous list without zeros will represent a fictitious integer (48925848). Add 1 unit to it, leaving the final total as an array. 
Display this list in the console. <br>
```[4, 8, 9, 2, 5, 8, 4, 8, 0, 0, 0] -> [4, 8, 9, 2, 5, 8, 4, 9]```


3. Next, multiply each digit that is not a zero and in an even index, by -1. 
Display this list in the console. <br>
```[4, 8, 9, 2, 5, 8, 4, 9] -> [-4, 8, -9, 2, -5, 8, -4, 9]```


4. Finally, detect the subarray, whose sum of digits is the maximum and return this sum.
Display this sum in the console. <br>
```[-4, 8, -9, 2, -5, 8, -4, 9] -> 13 ``` <br>
```[8, -4, 9]``` is our maximum subarray and its sum is ```13```.




```
A valid subarray is any continuous list of elements belonging to the parent array.
The following are valid subarrays of [-4, 8, -9, 2, -5, 8, -4, 9]

    [-4, 8, -9]

    [-9, 2]

    [-4, 8, -9, 2, -5, 8, -4, 9]

    [8]
```

