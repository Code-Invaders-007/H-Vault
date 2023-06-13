    import axios from 'axios'

    const url = 'http://127.0.0.1:3000/insert';

    // Define the data for the POST request

    async function ins(){
        const query = {
            path: '/home/hdoop/Desktop/Mini project/localminiproject/H-Vault/fsd.json',
            firstName: 'Abhishek',
            lastName: 'S',
            dob: 0,
            bg: 'o+',
            phone: 999,
            email: '@jga',
            gender: 'male',
            ms: 'no'
            };
            const customConfig = {
                headers: {
                'Content-Type': 'application/json'
                }
            };
        
            // Send the POST request using Axios
            const res = await axios.post('http://127.0.0.1:3000/insert', query, customConfig);
            
            console.log(res)
    }
   ins()
    