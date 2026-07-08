const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()

const requestLogger = (req, res, next) => {
    const start = Date.now()
    res.on("finish", () => {
        const responseTime = Date.now() - start
        const timeStamp = new Date().toISOString()
        console.log(`${timeStamp} ${req.method} ${req.originalUrl} - ${responseTime}ms`)
    })

    next()
    
}

app.use(requestLogger)


app.get('/', (req, res) => {
    res.status(200).json({message: 'welcome to home route'})
})

app.get('/user', (req, res) => {
    res.status(200).json({
        message: 'user retrived successfully', user: [
            {
                id: 1,
                name: 'samuel'
            },
              {
                id: 2,
                name: 'didier'
            },
                {
                id: 3,
                name: 'hassan'
            },
                
    ]})
})


app.listen(process.env.PORT2, () => {
    console.log(process.env.Message, process.env.PORT2)
})

