async function weather(){
    const lat = document.getElementById('latitude').value;
    const long = document.getElementById('long').value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`);
        const data = await response.json();
        console.log(data);
    }catch (error){
        alert(error.message);
    }
}