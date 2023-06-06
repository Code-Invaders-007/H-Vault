import { Connection, SystemProgram, PublicKey } from "@solana/web3.js";
// import { Buffer } from "buffer";
import * as buffer from 'buffer';
import { sendAndConfirmTransaction } from "@solana/web3.js";
import {PhantomWalletAdapter} from "@solana/wallet-adapter-phantom"



import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";



const idl = 
{
    "version": "0.1.0",
    "name": "hello_anchor",
    "instructions": [
        {
            "name": "initialize",
            "accounts": [
                {
                    "name": "patientAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "name",
                    "type": "string"
                },
                {
                    "name": "pid",
                    "type": "u32"
                }
            ]
        },
        {
            "name": "addFile",
            "accounts": [
                {
                    "name": "patientAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "fileAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "cid",
                    "type": "string"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "FileAccount",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "cid",
                        "type": "string"
                    },
                    {
                        "name": "owner",
                        "type": "publicKey"
                    }
                ]
            }
        },
        {
            "name": "PatientAccount",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "pid",
                        "type": "u32"
                    },
                    {
                        "name": "authority",
                        "type": "publicKey"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "fileCount",
                        "type": "u16"
                    }
                ]
            }
        }
    ]
}

console.log("This is loading as page loads")
const getProvider = () => {
  if ('phantom' in window) {
    const provider = window.phantom?.solana;
    window.Buffer = buffer.Buffer;

    if (provider?.isPhantom) {
      return provider;
    }
  }


  window.open('https://phantom.app/', '_blank');
};

export const getAccount = async function () {
  console.log('clicked')

//  const provider = getProvider();
  try {
    const walletAdapter = new PhantomWalletAdapter();
    await walletAdapter.connect()
    window.Buffer = buffer.Buffer;
    console.log("wallet pubkey",walletAdapter.publicKey.toString())
    const programkey = new PublicKey("6pK4Wk9BVdsWm86aefUH9TYcG3ATXKkqTVGpKtioxbuo")
    const conn = new Connection("https://api.devnet.solana.com")

    const provider=new anchor.AnchorProvider(conn, walletAdapter, anchor.AnchorProvider.defaultOptions());
    const program = new anchor.Program(idl, programkey, provider)
    // await walletAdapter.connect();
    // console.log("pub",walletAdapter.publicKey)
  //  const resp = await provider.connect();
    // console.log(resp.publicKey.toString());


    // console.log(conn)
    // console.log(idl)



    // //smart contract
    // console.log("Smart Contract ", program)
    console.log("program id", program.programId.toString())
   
    const publicKeyBuffer = walletAdapter.publicKey.toBuffer();


    
    // //for testing purpose .
    // //solana ide waller public key
    const testpublickey = new PublicKey("C73cUPMXP9Z6WCsnhhSwxooNHyraiusJZP7foevEqQv");
    const testpublickeyBuffer = testpublickey.toBuffer();
    // console.log("test public key buffer", testpublickeyBuffer)

    // //get Patient Account address
    const [userPda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("new-patient"), publicKeyBuffer], program.programId)
    console.log("userpda", userPda.toString())

    // const userinfo=await program.account.patientAccount.fetch(userPda)
    // console.log("userinfo", userinfo)

    // const [filePda] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("patient-file"), testpublickeyBuffer], program.programId)
    // //trying to fetch patient account
    // console.log("filepda", filePda.toString())
    // try {
    // const userinfo = await conn.getAccountInfo(userPda)
    //     console.log("userinfo", userinfo)
    //     // alert(userinfo);
        const trans=await program.methods
          .initialize("abcdefghi",2)
          .accounts({
            patientAccount: userPda,
            //fileAccount:filePda,
            authority: walletAdapter.publicKey,
            systemProgram: SystemProgram.programId,
          })
          .rpc()
          console.log(trans)

          

    
        
    // }
    // catch (err) {
    //     console.log(err)
    //   alert(err);
    // }
    





    

  } catch (err) {
    console.log(err)
    alert(err);

  }


}



