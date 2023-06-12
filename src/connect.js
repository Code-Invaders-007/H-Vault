import { Connection, SystemProgram, PublicKey } from "@solana/web3.js";
// import { Buffer } from "buffer";
import * as buffer from 'buffer';
import { sendAndConfirmTransaction } from "@solana/web3.js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom"
// import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";

import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
// import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";





// const idl8={"version":"0.1.0","name":"hello_anchor","instructions":[{"name":"initialize","accounts":[{"name":"patientAccount","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"name","type":"string"},{"name":"pid","type":"u8"},{"name":"gender","type":"string"}]},{"name":"addFile","accounts":[{"name":"patientAccount","isMut":true,"isSigner":false},{"name":"fileAccount","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"cid","type":"string"}]}],"accounts":[{"name":"FileAccount","type":{"kind":"struct","fields":[{"name":"cid","type":"string"},{"name":"owner","type":"publicKey"}]}},{"name":"PatientAccount","type":{"kind":"struct","fields":[{"name":"pid","type":"u8"},{"name":"authority","type":"publicKey"},{"name":"name","type":"string"},{"name":"gender","type":"string"},{"name":"fileCount","type":"u16"}]}}]}

const idl11={"version":"0.1.0","name":"hello_anchor","instructions":[{"name":"initialize","accounts":[{"name":"patientAccount","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"pid","type":"u8"},{"name":"name","type":"string"},{"name":"dob","type":"string"},{"name":"bloodgroup","type":"string"},{"name":"gender","type":"string"},{"name":"origin","type":"string"}]},{"name":"addFile","accounts":[{"name":"patientAccount","isMut":true,"isSigner":false},{"name":"fileAccount","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"pid","type":"u8"},{"name":"cid","type":"string"}]}],"accounts":[{"name":"FileAccount","type":{"kind":"struct","fields":[{"name":"cid","type":"string"},{"name":"owner","type":"publicKey"}]}},{"name":"PatientAccount","type":{"kind":"struct","fields":[{"name":"pid","type":"u8"},{"name":"authority","type":"publicKey"},{"name":"name","type":"string"},{"name":"dob","type":"string"},{"name":"bloodgroup","type":"string"},{"name":"gender","type":"string"},{"name":"origin","type":"string"},{"name":"fileCount","type":"u8"}]}}]}

console.log("This is loading as page loads")
// const getProvider = () => {
//     if ('phantom' in window) {
//         const provider = window.phantom?.solana;
//         window.Buffer = buffer.Buffer;

//         if (provider?.isPhantom) {
//             return provider;
//         }
//     }


//     window.open('https://phantom.app/', '_blank');
// };

export const getAccount = async function () {
    console.log('clicked')
 
    

    try {
        const walletAdapter = new PhantomWalletAdapter();
        await walletAdapter.connect()
        window.Buffer = buffer.Buffer;
        console.log("wallet pubkey", walletAdapter.publicKey.toString())

        //to be changed when new program is deployed
        const programkey = new PublicKey("5WZhfHHh64Z2GrkVpBh7rGfNy7nkPgsiJaTTr3Qu24eL")
        const conn = new Connection("https://api.devnet.solana.com")

      const provider = new anchor.AnchorProvider(conn, walletAdapter, anchor.AnchorProvider.defaultOptions());
       
       //to be changed when new program is built
       //should be avilable globally
        const  program = new anchor.Program(idl11, programkey, provider)
        console.log("program id", program.programId.toString())

    } catch (err) {
        console.log(err)
        alert(err);
    
    }
}




       export const createPatient = async function () {
        const walletAdapter = new PhantomWalletAdapter();
        await walletAdapter.connect()
        window.Buffer = buffer.Buffer;
        console.log("wallet pubkey", walletAdapter.publicKey.toString())

        //to be changed when new program is deployed
        const programkey = new PublicKey("5WZhfHHh64Z2GrkVpBh7rGfNy7nkPgsiJaTTr3Qu24eL")
        const conn = new Connection("https://api.devnet.solana.com")

      const provider = new anchor.AnchorProvider(conn, walletAdapter, anchor.AnchorProvider.defaultOptions());
       
       //to be changed when new program is built
       //should be avilable globally
        const program = new anchor.Program(idl11, programkey, provider)
        console.log("program id", program.programId.toString())
       
        const publicKeyBuffer = walletAdapter.publicKey.toBuffer();       
            
        //functio to create patient account
        //generate user pubkey
        const [userPda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("new-patient"), publicKeyBuffer,Uint8Array.from([7])], program.programId)
       
        const patientcreated = await program.methods
            .initialize( 7,"patientname1","27/06/2002","A+ve","female","tumkur")    //arguments to be passed for patient account
            .accounts({
                patientAccount: userPda,
                authority: walletAdapter.publicKey,
                systemProgram: SystemProgram.programId,
            })
            .rpc()
            console.log(patientcreated)
        }





       export const AddFile = async function () {
        const walletAdapter = new PhantomWalletAdapter();
        await walletAdapter.connect()
        window.Buffer = buffer.Buffer;
        console.log("wallet pubkey", walletAdapter.publicKey.toString())

        //to be changed when new program is deployed
        const programkey = new PublicKey("5WZhfHHh64Z2GrkVpBh7rGfNy7nkPgsiJaTTr3Qu24eL")
        const conn = new Connection("https://api.devnet.solana.com")

      const provider = new anchor.AnchorProvider(conn, walletAdapter, anchor.AnchorProvider.defaultOptions());
       
       //to be changed when new program is built
       //should be avilable globally
         const program = new anchor.Program(idl11, programkey, provider)
        console.log("program id", program.programId.toString())
       
        const publicKeyBuffer = walletAdapter.publicKey.toBuffer();       
            
        //functio to create patient account
        //generate user pubkey
        const [userPda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("new-patient"), publicKeyBuffer,Uint8Array.from([6])], program.programId)
        const [filePda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("patient-file"),userPda.toBuffer(),Uint8Array.from([0]) ], program.programId)
        const filecreated= await program.methods
              .addFile(4,"cid1")  //arguementsto smartcontract method for adding file
              .accounts({
                patientAccount: userPda,
                fileAccount: filePda,
                authority: walletAdapter.publicKey,
                systemProgram: SystemProgram.programId,
              }).rpc()

        console.log(filecreated)
       
        }


            
        
        

        

        






  

