// --------Program--------- // 

function algo( arr, n)
{
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
         
                let u = arr[i] * arr[i],
                v = arr[j] *arr[j],
                w = arr[k] * arr[k];
 
                if (u == v + w || v == u + w ||
                    w == u + v)
                    return true;
            }
        }
    }
 

    return false;
}
    
let arr = [ 5, 1, 12, 6, 13 ];
let arr1 = arr.length;
if (algorythm(arr, arr1) == true)
    console.log("Yes");
else
    console.log ("No");




// -------algorithumrithm------//

// Step :1  We use Three loops 
// to take set of three different elements from the arr

// 1. we run three loops. so for every value of a, we take 
// all the values of b except itself.
// For every values of b we take all the values of a.

// 2. u,v,w are elements from the arr.

// Step :2 We run the pythagorus theoram i.e u*u + v*v = w*w,
// for all sets of (a,b,c).

// step :3 
// 1. if the value of a,b,c satisfy pythagorus theoram then 
// it print "yes".

// 2. if the value of u(3),v(4),w(5) don't satisfy pythagorus theoram then 
// it print "no".

//This is the solution of complexity O(n^3)
//because i use Three Loops where n is  
// MAX_limit integer





