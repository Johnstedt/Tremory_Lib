// 'TEST' or 'PRODUCTION'
const config = 'TEST' 

export function getServerURL() {
   return config=='TEST' ? 'https://www.tremory.com' : 'https://tremory.com'
}

export function isProduction(){
    return (config == 'PRODUCTION')
}

export function getStripeKey(){
    return config == 'TEST' ? 'pk_test_R2NtRUxWFG1Ua0WLVWFZKw5M' : 'pk_live_2IB6LwzQvWq4XYH7KF1P3z4H'
}