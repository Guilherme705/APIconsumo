async function weather(){
    const lat = document.getElementById('latitude').value;
    const long = document.getElementById('long').value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`);
        const data = await response.json();
        console.log(data);
        let = data.lenght
        document.getElementById('00').value = 'As 00:00 á temperatura será de ' + data.hourly.temperature_2m[0] + '°C';
        document.getElementById('04').value = 'As 04:00 á temperatura será de ' + data.hourly.temperature_2m[4] + '°C';
        document.getElementById('08').value = 'As 08:00 á temperatura será de ' + data.hourly.temperature_2m[8] + '°C';
        document.getElementById('12').value = 'As 12:00 á temperatura será de ' + data.hourly.temperature_2m[12]+ '°C' ;
        document.getElementById('16').value = 'As 16:00 á temperatura será de ' + data.hourly.temperature_2m[16]+ '°C';
        document.getElementById('20').value = 'As 20:00 á temperatura será de ' + data.hourly.temperature_2m[20]+ '°C';
    }catch (error){
        alert(error.message);
    }
}
