// 'TEST' or 'PRODUCTION'
const config = 'PRODUCTION' 

export function getServerURL() {
   return config=='TEST' ? 'https://www.tremory.com' : 'https://tremory.com'
}

export function isProduction(){
    return (config == 'PRODUCTION')
}
