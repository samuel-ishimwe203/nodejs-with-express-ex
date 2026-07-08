// const dotenv = require('dotenv')
// dotenv.config()
// const express = require('express')
// const app = express()
// const fs= require('fs/promises')
// const path = require('path')
// const file = path.join(__dirname, './data/auth.json')

// app.use(express.json())


// const getAll = async () => {
//     try {

//         const data = await fs.readFile(file, 'utf8')
//         return JSON.parse(data)
        
//     } catch (error) {
//         console.log('failed to get data')
        
//     }
// }

// const readData = async (data) => {
//     try {

//         await fs.writeFile(file, JSON.stringify(data,null,  2), 'utf8')
//         return
        
//     } catch (error) {
//         console.log('failed to read data ')
//     }
// }



// app.post('/signup', async (req, res) => {

//     try {

//         const { username, password } = req.body
//         if (!username || !password) {
            
//            return  res.status(400).json({ message: 'username and password is required' })
//         }
//         const userData = await getAll()
//         const existUser = userData.find(use => use.username === username)
//         if (existUser){
//             return res.status(409).json({ message: ' user already exists' })
            
//         }
//         userData.push({username, password})

//         await readData(userData)

//         return res.status(200).json({message: 'user successfull login'})
        
//     } catch (error) {

//         res.status(500).json({message:'server errror please'})
        
//     }
    
// })

// app.get('/user', async (req, res) => {
//     try {
        
//         const data = await getAll()
//         return res.status(200).json({message: 'data retrived successfully', data: data})
//     } catch (error) {
//         res.status(500).json({message: 'server error'})
        
//     }
// })




// app.listen(process.env.PORT, () => {
//     console.log(process.env.Message,process.env.PORT)
// })
