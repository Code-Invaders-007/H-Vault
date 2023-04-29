import { create, globSource } from 'ipfs-http-client';
import fs from "fs"
const client = create();
console.log(client.getEndpointConfig());

//read the file from the path given
const f = fs.readFileSync("ori income certificate-converted.pdf")

// ipfs api to add the file into the ipfs 
const file = await client.add(
    {
       content:f
    });


//will print the cid, path and size of the file just uploaded to ipfs
console.log(file)
