import { create, globSource } from 'ipfs-http-client';
import fetch from 'node-fetch';
import {insert , update} from './db.js'
import mongoose from 'mongoose';
import fs from "fs"
import express from 'express'
const uri = "mongodb://localhost:27017/";
const dbName = "patient";
var app = express()

const client = create();
console.log(client.getEndpointConfig());

mongoose.connect(uri+dbName, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });


const Path="/home/hdoop/Desktop/Mini project/v2/H-Vault/IPFS/sample.txt";

export async function insertIPFS(path,firstName,lastName,DOB,bloodGroup,phoneNumber,email,gender,martialStatus){
 
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
      const d = 3232;
      // const patient = insert(d,firstName,lastName,DOB,bloodGroup,phoneNumber,email,gender,martialStatus,String(file.cid),"fsdfsd");
      const patient = insert(d,'abhi','s','0000','o+','0000' ,'jdjd','male','martialStatus',String(file.cid),"fsdfsd");
     
    }





























// update(patient,String(file.cid),hash)
// update(patient,"newCID2","newHash2")


//  async function getData(hash){
//      const gatewayURL = 'https:ipfs.io/ipfs/';
//      const downloadPath = './download_content';

//      try{
//          const response = await fetch(gatewayURL + hash);
//          if(!response.ok){
//              throw new Error('Failed to fetch IPFS content');
//          }
    
//          const fileStream = fs.createWriteStream(downloadPath);
//          response.body.pipe(fileStream);

//          fileStream.on('finish',()=> {
//              console.log('content with CID ${hash} has been downloaded succesfully');
//          });

//          fileStream.on('error',(err) => {
//              console.log('Error occured while downloading content',err)
//          })

//      } catch (err) {
//          console.log('Error occurred while fetching IPFS content',err);
//      }

//  }
//  getData('QmUzNwDVtHSyyBVTW9oetTkzSre3e1vm55zUSWa3EWiP5G')

//  const fetch = require('node-fetch');
//  const fs = require('fs');


/**
import path from 'path';

import { fileURLToPath } from 'url';

async function downloadContentByCID(cid) {
    const gatewayURL = 'https:ipfs.io/ipfs/';
    const moduleURL = import.meta.url;
    const modulePath = fileURLToPath(moduleURL);
    const downloadDirectory = path.join(path.dirname(modulePath), 'downloaded_content');
    const fileName = `${cid}.txt`;
    const downloadPath = path.join(downloadDirectory, fileName);

   const downloadPath = path.join(downloadDirectory, fileName);
  try {

    if (!fs.existsSync(downloadDirectory)) {
        fs.mkdirSync(downloadDirectory, { recursive: true });
      }

    const response = await fetch(gatewayURL + cid);
    if (!response.ok) {
      throw new Error('Failed to fetch IPFS content');
    }

    const fileStream = fs.createWriteStream(downloadPath);
    response.body.pipe(fileStream);

    fileStream.on('finish', () => {
      console.log(`Content with CID ${cid} has been downloaded successfully.`);
    });

    fileStream.on('error', (error) => {
      console.error('Error occurred while downloading content:', error);
    });
  } catch (error) {
    console.error('Error occurred while fetching IPFS content:', error);
  }
}

 Example usage: Pass the CID as a parameter to download the content
const cid = 'QmUzNwDVtHSyyBVTW9oetTkzSre3e1vm55zUSWa3EWiP5G';
downloadContentByCID(cid);
*/