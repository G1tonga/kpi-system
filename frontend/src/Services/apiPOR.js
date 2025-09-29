import axios from "axios";

export async function fetchPOR(year,mode){
     try {
          
        const { data } = await axios.get(
          `https://kpi-system-n6rb.onrender.com/api/perfect-order?year=${year}&mode=${mode}`
        );
        return data
    }
    catch(error){
        console.error('There was an error fetching por data',error)
        
    }

}