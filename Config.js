// 'TEST' or 'PRODUCTION'
let config = 'TEST'

//Default for web
let platform = { credentials: 'include'}

export function getServerURL() {

    if(config == "LOCAL"){
        return "http://localhost/Tremory"
    }

   return config=='TEST' ? 'https://www.tremory.com' : 'https://tremory.com'
}

export function setHeader(platform) {

	if(platform.OS === 'ios'){
		platform = { credentials: 'include', headers: { "User-Agent": "ios" }}
	}
	else {
		platform = { credentials: 'include', headers: { "User-Agent": "android" }}
	}

}

export function getHeader() {

	return platform
}

export function isProduction(){
    return (config == 'PRODUCTION')
}

export function getStripeKey(){
    return config == 'PRODUCTION' ? 'pk_live_2IB6LwzQvWq4XYH7KF1P3z4H' : 'pk_test_R2NtRUxWFG1Ua0WLVWFZKw5M'
}

export function setConfig(configVar){
    config = configVar;
}