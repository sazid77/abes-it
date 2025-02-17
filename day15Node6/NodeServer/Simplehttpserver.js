const http=require('http');
const PORT=2001;
const Server=http.createServer((req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.write('data is genrated by server')
  res.end("<h1 style=' background-color:lightblue; color:red'>hello world</h1>");

})
Server.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
})

                                            
                                               
                                                 
                                            
                                            
                                                                                
                                                   
                                                     
                                              
                                                        
