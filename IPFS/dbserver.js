import express from 'express'
import { create, globSource } from 'ipfs-http-client';
import {insert,updateOne,fetchCids} from './db.js'
import mongoose from 'mongoose';
import fs from "fs"
import CircularJSON from 'circular-json'
import { stringify } from 'querystring';
const app = express()
import axios from 'axios'
const client = create();
console.log(client.getEndpointConfig());
app.use(express.json())
app.listen(3000, ()=>{
    console.log('Listening on Port 3000');
})




const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };




  async function downloadFileFromIPFS(cid, response) {
    
  
    try {
      const chunks = [];
  
      for await (const chunk of client.cat(cid)) {
        chunks.push(chunk);
      }
  
      const fileData = Buffer.concat(chunks);
      const downloadFileName = cid + '.json';
      
      response.set({
        'Content-Disposition': `attachment; filename="${cid}.json"`,
        'Content-Type': 'application/json'
      });
  
      response.send(fileData);
    } catch (error) {
      console.error('Error downloading file:', error);
      response.status(500).send('Error downloading file');
    }
  }



/*******************file upload */
  // app.use(express.json());
  // app.use(express.urlencoded({ extended: true }));
  
  // app.post('/upload', async (req, res) => {
  //   try {
  //     const file = req.files.file;
  //     const content = file.data;
  
  //     // Perform IPFS upload and pinning operations here
  //     // ...
  //     const f= await client.add(
  //       {
  //          content:f
  //       });
  //        await client.pin.add(file.cid);
  //        console.log('pinned successfully')
  //        console.log(String(file.cid));
  //     const cid = f.cid; // Replace with the actual CID of the uploaded file
  
  //     res.json({ cid });
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //     res.status(500).json({ error: 'File upload failed' });
  //   }
  // });
  
  
  
  // const cid = 'QmaV3amj3RMKFwG2o2yv6NbnhYVGTWRvSMZL5wgBR8SVv4';
  // downloadFileFromIPFS(cid);
/****insert to IPFS */



async function insertIPFS(path){
 
    //  read the file from the path given
     const f = fs.readFileSync(path);
    
    // ipfs api to add the file into the ipfs 
     const file = await client.add(
         {
            content:f
         });
          await client.pin.add(file.cid);
          console.log('pinned successfully')
          console.log(String(file.cid));
          const hash = 'randomhashfhowelnfsohewoowhlkf';
          const d = 838;
          return String(file.cid)
          // const patient = insert(d,firstName,lastName,DOB,bloodGroup,phoneNumber,email,gender,martialStatus,String(file.cid),"fsdfsd");
          // return patient._id;
 }
    



app.get('/',(req,res)=>{
    res.send('working');
})

app.get('/getcids',async (req,res)=>{
  const pid = req.query['pid']
  const r = await fetchCids(pid)
  console.log(r)
  res.send(r)
})



app.get('/download', (req, res) => {
  const cid = req.body.cid
  // const cid = 'QmaV3amj3RMKFwG2o2yv6NbnhYVGTWRvSMZL5wgBR8SVv4';
  downloadFileFromIPFS(cid, res);
});

app.post('/insert',async (req,res)=>{
  const query = req.body
    const path=query.path
    const firstName=query.firstName
    const lastName=query.lastName
    const DOB=query.dob
    const bloodGroup=query.bg
    const phoneNumber=query.phone
    const email=query.email
    const gender=query.gender
    const martialStatus=query.ms

    // const queryy = req.query
    // const path=queryy['path']
    // const firstName=queryy['firstName']
    // const lastName=queryy['lastName']
    // const DOB=queryy['dob']
    // const bloodGroup=queryy['bg']
    // const phoneNumber=queryy['phone']
    // const email=queryy['email']
    // const gender=queryy['gender']
    // const martialStatus=queryy['ms']
    const cid = await insertIPFS(path,firstName,lastName,DOB,bloodGroup,phoneNumber,email,gender,martialStatus)
    const pid = await insert(321,firstName,lastName,DOB,bloodGroup,phoneNumber,email,gender,martialStatus,cid,"fsdfsd");
    console.log(cid,pid)

    
    res.send('fds')
    // res.send('fdsfs')
})

app.post('/update',async (req,res)=>{
    const pid = req.query['pid']
    const cid = req.query['cid']
    const hash = req.query['hash']
    await updateOne(pid,cid,hash)
    res.send('done!')
})