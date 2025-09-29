import axios from "axios"
export async function fetchShipments(year,month){
    if(!year || !month){
        throw new Error(`Invalid parameters: year=${year}, month=${month}`);
    }
    const { data } = await axios.get(
      `https://kpi-system-n6rb.onrender.com/api/shipments?year=${year}&month=${month}`
    );

    return data

}