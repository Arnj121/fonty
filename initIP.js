const fs = require('fs')
const dns = require('node:dns')
const os = require('node:os')
require('dotenv').config()
const ip2=process.argv[2]
const newip=process.argv[3]
let files=['static/fontawesome.css','.env']
for(let i=0;i<files.length;i++) {
    fs.readFile(files[i], 'UTF-8', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            let loc = data.indexOf(ip2)
            while (loc != -1) {
                data = data.replace(ip2, newip)
                loc = data.indexOf(ip2)
                console.log(loc)
            }
            console.log(data)
            fs.writeFile(files[i], data, () => {
            })
        }
    })
}
