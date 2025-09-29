import axios from "axios";

export async function fetchTransportationCost(year){
    try{
        const { data } = await axios.get(
          `https://kpi-system-n6rb.onrender.com/api/transportation-cost?year=${year}`
        );
        return data
    }
    catch(error){
        console.error('There is an error fetching data',error)
    }

}