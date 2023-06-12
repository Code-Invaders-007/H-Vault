<style>
  /* CSS styles go here */
  body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f9f9f9;
  }

  .container {
    max-width: 400px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
  }

  .form-field {
    margin-bottom: 10px;
    text-align: left;
  }

  .form-label {
    font-weight: bold;
  }

  .form-data {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
  }

  .submit-button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .submit-button:hover {
    background-color: #45a049;
  }
</style>

<script>
  let patientName = '';
  let dob = '';

  function handleSubmit() {
    // Handle form submission
    console.log('Submitted data:', { patientName, dob });
  }
</script>

<div class="container">
  <div class="form-field">
    <label class="form-label">Patient FName:</label>
    <div class="form-data">xyz</div>
  </div>

  <div class="form-field">
    <label class="form-label">LName:</label>
    <div class="form-data">[LName]</div>
  </div>

  <div class="form-field">
    <label class="form-label">Date Of Birth:</label>
    <div class="form-data">11/11/1111</div>
  </div>

  <div class="form-field">
    <label class="form-label">Blood Group:</label>
    <div class="form-data">[Blood Group]</div>
  </div>

  <div class="form-field">
    <label class="form-label">Email Address:</label>
    <div class="form-data">hghfdh@gmail.colum</div>
  </div>

  <div class="form-field">
    <label class="form-label">Gender:</label>
    <div class="form-data">M</div>
  </div>

  <div class="form-field">
    <label class="form-label">Phone No:</label>
    <div class="form-data">111333311</div>
  </div>

  <div class="form-field">
    <label class="form-label">Marital Status:</label>
    <div class="form-data">Unmarried</div>
  </div>

  <div class="form-field">
    <label class="form-label">Origin:</label>
    <div class="form-data">xxxxx</div>
  </div>
</div>



