const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000

const app = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/html'})
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
    //         if(err){
    //             throw err
    //         } 
    //         res.end(content)
    //     })
    // } else if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
    //         if(err){
    //             throw err
    //         } 
    //         res.end(content)
    //     })
    // }

    let filePath = path.join(__dirname,'public',req.url === '/'? 'index.html':req.url)
    let contentTyp = 'text/html'
    let ext = path.extname(filePath)
    if(!ext){
        filePath += '.html';
    }
    switch(ext){
        case '.css':
            contentTyp='text/css'
            break;
        case '.js':
            contentTyp= 'text/javascript'
            break;
        default:
            contentTyp='text/html'
    }
    fs.readFile(filePath,(err,content)=>{
        if(err){
            fs.readFile(path.join(__dirname,'public','error.html'),(err,data)=>{
                if(err){
                    res.writeHead(500)
                    res.end('Errror!')
                }else{
                    res.writeHead(400,{
                        'Content-Type':contentTyp
                    })
                }
                res.end(data)
            })
        }else{
            res.writeHead(200,{
                'Content-Type':contentTyp
            })
            res.end(content)
        }
    })
    
})

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
})