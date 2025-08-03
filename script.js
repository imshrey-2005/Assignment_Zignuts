let form=document.getElementById("myform").addEventListener('submit',(event)=>{
    
    event.preventDefault();
    let value=document.getElementById("inputf").value;
    let reg=/\d/g;
    let sum=0;
    let result=value.match(reg);
    console.log(result)
    for (x in result){
        console.log(x)
        sum += Number(result[x]);
    }
    let element = document.createElement('p');
    element.id='par'
    element.innerHTML="sum is:" + sum;
    document.body.appendChild(element)
})