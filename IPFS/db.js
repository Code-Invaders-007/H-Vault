import mongoose from 'mongoose';
const uri = "mongodb://localhost:27017/";
const dbName = "patient";
//connect to db
mongoose.connect(uri+dbName, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
// we're connected!
console.log("connected");

//PatientSchema


 



// update(patient,"newCID",'QmUzNwDVtHSyyBVTW9oetTkzSre3e1vm55zUSWa3EWiP5G')
// update(patient,"newCID2","newHash2")
// patient.save();


});


const patientSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true },
    name : {
      type : String,
      required :[true , "please check your data no name"]  // validation of name
    },
    lastname:{
      type: String,
      required: [true , "please check your data no name"]
    },
    DOB:{
      type: Number,
    },
    bloodGroup:{
      type: String
    },
    phone_number:{
      type: Number
    },
    email:{
      type: String
    },
    Gender:{
      type: String
    },
    
    cidhash : {
      file :{
          type: mongoose.Schema.Types.Mixed
      }
    }
  });

      
const Patient = mongoose.model('pid',patientSchema);


export function  insert(i,n,l,dob,bg,pn,em,g,ms,ci,ha){

const patient = new Patient({
    _id: i,
    name : n,
    lastname:l,
    DOB:dob,
    bloodGroup:bg,
    phone_number:pn,
    email:em,
    Gender:g,
    martialStatus: ms,
    cidhash : {
      file: {
        cid:ci,
        hash:ha
      }
    }
})

console.log("inserted")
patient.save()
return patient
}

export function update(patient,cidd,hash){
  const newData = {
    [cidd]: {
    cid:cidd,
    hash:hash
    }
    
  }
  const field = 'cidhash.file'
  patient.cidhash.file= {...patient.get(field), ...newData};
  Patient.updateOne({ _id: patient._id }, { $set: { cidhash: patient.cidhash } })
  
}
// const patient = insert("342","chetan","managavi","0000","O+","9999","@fans","dontknow","polygamy","fdsf","fsdfs")
// const patient = insert(,n = "maruto",l = "managavi",dob = "0000",bg="O+",pn = "9999",em ="@fans",g = "dontknow",ms = "polygamy",ci = "dfs", ha = "good one");
// const patient = insert(3000,"marutho","uzumaki","000","0+","9999","@family","female","no","afdsfs","fsdfsf");