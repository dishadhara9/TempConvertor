const calculateTemp = ()=>{
    const numberTemp = document.getElementById('temp').value;
   // console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    //console.log(valueTemp);

    const celTOfah = (cel)=>{
        let Fahrenhite = Math.round((cel *9/5)+32);
        return Fahrenhite;
    }
    const fahTOcel = (fahr)=>{
        let celcius = Math.round((fahr - 32) * 5/9);
        return celcius;
    }

     

    let result;

    if(valueTemp == 'cel'){
        result = celTOfah(numberTemp);
        document.getElementById('resultcontainer').innerHTML =`${result}°Fahrenheit`
    }else{
        result = fahTOcel(numberTemp);
        document.getElementById('resultcontainer').innerHTML =`${result}°Celsius`
    }

       
}