const dotenv = require("dotenv");
dotenv.config();
const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const file_input = path.join(__dirname, "./data/input.txt");
const file_output = path.join(__dirname, "./data/output.txt");

const readData = async () => {
  try {
    const data = await fs.readFile(file_input, "utf8");
    return data;
  } catch (error) {
    console.log("data failed to read");
  }
};

const writeToFile = async (text) => {
  try {
    await fs.writeFile(file_output, text, "utf8");
    return;
  } catch (error) {
    console.log("now data failed to be written");
  }
};

const server = http.createServer(async (req, res) => {
  if (req.url === "/user" && req.method == "GET") {
    const data = await readData();
    res.writeHead(200, { "content-type": "text/plain" });
    return res.end(data);
  }

  if (req.url === "/user" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", async () => {
      await writeToFile(body);
      res.writeHead(201, { "content-type": "text/plain" });
      res.end(body);
    });
  }
});

const dotenv = require('dotenv')
dotenv.config()
const http = require('http')
const fs= require('fs/promises')
const path = require('path')
const input_file = path.join(__dirname, './data/input.txt')
const output_file = path.join(__dirname, './data/output.txt')


const readFile = async () => {
    try {
        const data = await fs.readFile(input_file, 'utf8')
        return data
        
    } catch (error) {
        console.log('failed to read data')
    }
}

const writeToFile = async (text) => {
    try {
        await fs.writeFile(output_file, text, 'utf8')
        return
        
    } catch (error) {
        console.log('data failed to write')
        
    }
}


const server = http.createServer(async (req, res) => {
    try {
        
        if (req.url = '/user' && req.method == 'GET') {
        const data = await readFile()
        res.writeHead(200, { 'content-type': 'text/plain' })
        return res.end(data)
            
            
        }
    } catch (error) {
        console.log('server error')
    }


    if (req.url = '/user' && req.method == "POST") {
        let body = ''
        req.on('data', (chunk) => {
            body+=chunk
        })

        req.on('end', async() => {
            await writeToFile(body)
              res.writeHead(201, { "content-type": "text/plain" });
            res.end(body)
        })
  }
}) 



    





server.listen(process.env.PORT1, () => {
  console.log(process.env.Message, process.env.PORT1);
});
