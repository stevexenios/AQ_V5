// User Information
const nameInput = document.querySelector('#name');
const addressInput = document.querySelector('#address');
const cityInput = document.querySelector('#city');
const countryInput = document.querySelector('#country');
const zipInput = document.querySelector('#zip');
const phoneInput = document.querySelector('#phone');

// Air Quality information
const temperatureInput = document.querySelector('#temperature');
const humidityInput = document.querySelector('#humidity');
const pm25Input = document.querySelector('#pm25');
const pm10Input = document.querySelector('#pm10');
const nitrogenInput = document.querySelector('#no2');
const ozoneInput = document.querySelector('#o3');

// Buttons
const submit1Input = document.querySelector('#submit1');
const submit2Input = document.querySelector('#submit2');
const submit3Input = document.querySelector('#submit3');
const clear1Input = document.querySelector('#clear1');
const clear2Input = document.querySelector('#clear2');
const clear3Input = document.querySelector('#clear3');

// AQ-DATA
const userList = document.querySelector('#aq-list');
const airQualityList = document.querySelector('#aq-list');

// ALERT CONTROLLER
const alertCtrl = document.querySelector('ion-alert-conroller');

clear1Input.addEventListener(
    'click', ()=>{
        nameInput.value ='';
        addressInput.value ='';
        cityInput.value ='';
        countryInput.value ='';
        zipInput.value ='';
        phoneInput.value ='';
    }
);

clear2Input.addEventListener(
    'click', () =>{
        temperatureInput.value = '';
        humidityInput.value = '';
        pm25Input.value = '';
        pm10Input.value = '';
        nitrogenInput.value = '';
        ozoneInput.value = '';
    }
);

submit2Input.addEventListener(
    'click', ()=>{
        var list2 = [];
        const enteredTemperature = temperatureInput.value;
        const enteredHumidity = humidityInput.value;
        const enteredPm25 = pm25Input.value;
        const enteredPm10 = pm10Input.value;
        const enteredNitrogen = nitrogenInput.value;
        const enteredOzone = ozoneInput.value;
        list2.push(enteredTemperature);
        list2.push(enteredHumidity);
        list2.push(enteredPm25);
        list2.push(enteredPm10);
        list2.push(enteredNitrogen);
        list2.push(enteredOzone);
        list2.forEach(element => {
            if(element== null || element.trim().length <= 0 || (element !== NaN && element <= 0)){
                console.log("Entered Valid Data: " + element);
                alertCtrl.create({
                    message: 'Please Enter Valid Values!', 
                    header: 'Invalid Inputs',
                    buttons: 'Ok'
                }).then(alertElement=>{
                    alertElement.present();
                });
                return;
            }
        });
        const newItem2 = document.createElement('ion-item');
        newItem2.textContent = 'Temperature: ' + enteredTemperature +'degrees C, ' 
        + 'Humidity: ' + enteredHumidity + ', ' 
        + 'PM2.5: ' + enteredPm25 + ', '
        + 'PM10: ' + enteredPm10 + ', ' 
        + 'Nitrogen Dioxide: ' + enteredNitrogen + ', ' 
        + 'Ozone Level (O3): ' + enteredOzone;
        airQualityList.appendChild(newItem2);
});

submit1Input.addEventListener(
    'click', ()=>{
        var list1 = [];
        const enteredName = nameInput.value;
        const enteredAddress = addressInput.value;
        const enteredCity = cityInput.value;
        const enteredCountry = countryInput.value;
        const enteredZip = zipInput.value;
        const enteredPhone = phoneInput.value;
        list1.push(enteredName);
        list1.push(enteredAddress);
        list1.push(enteredCity);
        list1.push(enteredCountry);
        list1.push(enteredZip);
        list1.push(enteredPhone);
        list1.forEach(element => {
            if(element === null || element.trim().length <= 0 || (element !== NaN && element <= 0)){
                console.log("Entered Valid Data: " + element);
                alertCtrl.create({
                    message: 'Please Enter Valid Values!', 
                    header: 'Invalid Inputs',
                    buttons: 'Ok'
                }).then(alertElement=>{
                    alertElement.presentAlert();
                });
                return;
            }
        });
        const newItem1 = document.createElement('ion-item');
        newItem1.textContent = 'Name: ' + enteredName + ', Address: ' + enteredAddress + ', City: ' + enteredCity + ', Country: ' + enteredCountry + ', Zip Code: ' + enteredZip + ', Cell Phone: ' + enteredPhone;
        userList.appendChild(newItem1);
    }
);

function checkValidData(list){
    list.forEach(element => {
        if(element.trim().length <= 0 || (element !== NaN && element <= 0)){
            console.log("Entered Invalid Data!");
        } else{
            console.log("Entered Valid Data: " + element);
            alertCtrl.create({
                message: 'Please Enter Valid Values!', 
                header: 'Invalid Inputs',
                buttons: 'Ok'
            }).then(alertElement=>{
                alertElement.presentAlert();
            });
            return;
        }
    });
}