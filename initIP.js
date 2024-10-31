const fs = require('fs')
const ip=process.argv[2]
const newip=process.argv[3]
let files=['static/fontawesome.css']
for(let i=0;i<files.length;i++) {
    fs.readFile(files[i], 'UTF-8', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            let loc = data.indexOf(ip)
            while (loc != -1) {
                data = data.replace(ip, newip)
                loc = data.indexOf(ip)
                console.log(loc)
            }
            console.log(data)
            fs.writeFile(files[i], data, () => {
            })
        }
    })
}