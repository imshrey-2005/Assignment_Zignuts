function sumofstring(str){
    const num=str.split(',');
    console.log(num)
    for (let i=0;i<num.length;i++){
        num[i]=Number(num[i]);
    }
    console.log(num)
    let sum=0;
    for (x in num){
        sum+=num[x];
    }
    console.log("Sum is:", sum);
}
sumofstring("1.5, 2.3,3.1, 4, 5.5, 6, 7, 8, 9, 10.9")