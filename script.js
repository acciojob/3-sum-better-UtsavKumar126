function threeSum(arr, target) {
// write your code here
	let sum=0;
	let dif=0;
	arr.sort();
	for(let i=0;i<arr.length;i++){
		let j=i+1;
		let k=arr.length-1;

		while(j<k){
			if(arr[i]+arr[j]+arr[k]<target){
				if(dif<Math.abs(arr[i]+arr[j]+arr[k]-target)){
					sum=arr[i]+arr[j]+arr[k];
				}
				j++;
			}
			else{
				if(dif<Math.abs(arr[i]+arr[j]+arr[k]-target)){
					sum=arr[i]+arr[j]+arr[k];
				}
				k--;
			}
		}
	}
		return sum;
	}

module.exports = threeSum;
