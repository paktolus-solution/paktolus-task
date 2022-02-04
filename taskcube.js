function algorythm( arr, n)
{
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
         
                let u = arr[i] *arr[i] *arr[i],
                v = arr[j] *arr[j] *arr[j],
                w = arr[k] * arr[k] * arr[k];
 
                if (u == v + w || v == u + w ||
                    w == u + v)
                    return true;
            }
        }
    }
 

    return false;
}
 
// It's time complexity will be O(n^3) where O is the size of array.
// if value exists then only. 

    
let arr = [ 5, 1, 12, 6, 13 ];
let arr1 = arr.length;
if (algorythm(arr, arr1) == true)
    console.log("Yes");
else
    console.log ("No");
