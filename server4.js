




const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()

const roger = (req, res, next) => {
    const start = Date.now()
    
    res.on('finish', () => {
        const responseTime = Date.now() - start
        const timeStamp = new Date().toISOString()
        
        console.log(`${timeStamp} ${req.method} ${req.originalUrl}-${responseTime}ms`)
    })
    next()
}

    app.use(roger)
    app.get('/', (req, res) => {
        
            return res.status(200).json({message: 'welcome to the home '})
    })


     app.get('/user', (req, res) => {
        
         return res.status(200).json({
             message: 'retrived ', user: [{
                 id: 1, 
                 name: 'samuel'
             }, {
                 id: 2,
                 name:'mucyo'
             }
             ]
         })
    })
app.listen(process.env.PORT2, () => {
    console.log(process.env.Message, process.env.PORT2)
})

