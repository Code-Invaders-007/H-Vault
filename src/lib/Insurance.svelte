<script>
    let patientId = '';
  
    function handleSubmit() {
      // Handle form submission
      console.log('Submitted patient ID:', patientId);
    }
  </script>
  
  <style>
    .form-container {
    display: flex;
		flex-direction: column;
		align-items: center;
		/* margin: auto;
		width: 50%; */
		padding: 10px;
    }
  
    .form-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
    }
  
    .form-field {
      display: flex;
      flex-direction: column;
      margin-bottom: 1.5rem;
    }
  
    .form-label {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  
    .form-input {
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    .form-button {
      padding: 0.75rem 1rem;
      font-size: 1rem;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .form-button:hover {
      background-color: #0056b3;
    }
  </style>
  
  <form on:submit|preventDefault={handleSubmit} class="form-container">
    <h1 class="form-title">VERIFY HEALTH RECORDS</h1>
  
    <div class="form-field">
      <label class="form-label" for="patientId">Patient ID:</label>
      <input class="form-input" type="text" id="patientId" bind:value={patientId} placeholder="Enter patient ID" />
    </div>
  
    <button class="form-button" type="submit">Submit</button>
  </form>
  
  