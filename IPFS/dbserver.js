import express from 'express'
import { create, globSource } from 'ipfs-http-client';
import {insert,updateOne} from './db.js'
import mongoose from 'mongoose';
import fs from "fs"
import CircularJSON from 'circular-json'
import { stringify } from 'querystring';
const app = express()

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

async function insertIPFS(path){
 
    //  read the file from the path given
     const f = fs.readFileSync(path);
    
    // ipfs api to add the file into the ipfs 
     const file = await client.add(
         {
            content:f
         });
    
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
    
    const cid = await insertIPFS(path,firstName,lastName,DOB,bloodGroup,phoneNumber,email,gender,martialStatus)
    const pid = await insert(301,firstName,lastName,DOB,bloodGroup,phoneNumber,email,gender,martialStatus,cid,"fsdfsd");
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