use anchor_lang::prelude::*;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("5WZhfHHh64Z2GrkVpBh7rGfNy7nkPgsiJaTTr3Qu24eL");

#[program]
mod hello_anchor {
    use super::*;
    pub fn initialize(ctx: Context<CreatePatient>, pid: u8,name:String,dob:String,bloodgroup: String,gender: String,origin: String) -> Result<()> {
        let patient_account = &mut ctx.accounts.patient_account;
        patient_account.pid = pid;
        patient_account.name = name;
        patient_account.authority = ctx.accounts.authority.key();
        patient_account.dob = dob;
        patient_account.bloodgroup = bloodgroup;
        patient_account.gender = gender;
        patient_account.origin = origin;
        
        patient_account.file_count = 0;
        //msg!("Changed data to: {}!", data); // Message will show up in the tx logs
        Ok(())
    }
    
    pub fn add_file(ctx: Context<AddFile>,_pid:u8 ,cid: String) -> Result<()> {
        let file_acc = &mut ctx.accounts.file_account;
        let patient_acc = &mut ctx.accounts.patient_account;

        file_acc.cid = cid;
        file_acc.owner = patient_acc.key();
        patient_acc.file_count = patient_acc.file_count + 1;

        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(pid:u8)]
pub struct CreatePatient<'info> {
    #[account(
        init, 
         seeds = [b"new-patient",authority.key().as_ref(),[pid].as_ref()],
        bump,
        payer = authority,
        space = 16 + 8+32+32+256)]
    pub patient_account: Account<'info, PatientAccount>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(_pid:u8)]
pub struct AddFile<'info> {
    #[account(
        mut, 
        seeds = [b"new-patient", authority.key().as_ref(),[_pid].as_ref()],
        bump,
        has_one=authority ,)
        ]
    pub patient_account: Account<'info, PatientAccount>,

    #[account(
        init,
        payer = authority,
        space = 64,
        seeds = [b"patient-file",patient_account.key().as_ref(),[patient_account.file_count as u8].as_ref() ],
        bump,
    )]
    pub file_account: Account<'info, FileAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
#[derive(Default)]
pub struct FileAccount {
    cid: String,
    owner: Pubkey,
}

#[account]
#[derive(Default)]
pub struct PatientAccount {
    pub pid: u8,
    pub authority: Pubkey,
    pub name: String,
    pub dob: String,
    pub bloodgroup: String,
    pub gender: String,
    pub origin: String,
    
    pub file_count: u8,
}
