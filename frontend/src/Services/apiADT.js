import axios from "axios";

 export async function fetchDeliveryData(year){
    try {
        const { data } = await axios.get(
          `https://kpi-system-n6rb.onrender.com/api/delivery-time?year=${year}`
        );
        
        return data
    }
    catch(error){
        console.error('There was an error fetching data',error)
    }
}