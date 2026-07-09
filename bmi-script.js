const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');
    
    if(height===''||height<=0||isNaN(height))
        result.innerHTML="Please Enter a valid Height"
    else if(weight===''||weight<=0||isNaN(weight))
        result.innerHTML="Please Enter a valid Weight"
    else 
    {
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        let bmiText='';
        if(bmi<18.6)
            bmiText="UnderWeight"
        else if(bmi<24.9)
            bmiText="Normal"
        else
            bmiText="OverWeight"
        result.innerHTML=`<span>Result: <b>${bmi}</b> (${bmiText})</span>`
    }
})
