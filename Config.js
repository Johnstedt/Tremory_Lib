// 'TEST' or 'PRODUCTION'
let config = 'TEST'

export function getServerURL() {

    if(config == "LOCAL"){
        return "http://localhost:82/TremoryBeta"
    }

   return config=='TEST' ? 'https://www.tremory.com' : 'https://tremory.com'
}

export function isProduction(){
    return (config == 'PRODUCTION')
}

export function getStripeKey(){
    return config == 'TEST' ? 'pk_test_R2NtRUxWFG1Ua0WLVWFZKw5M' : 'pk_live_2IB6LwzQvWq4XYH7KF1P3z4H'
}

export function setConfig(configVar){
    config = configVar;
}