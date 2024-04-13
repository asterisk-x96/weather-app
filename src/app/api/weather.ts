import axios from "axios";
import { GlasgowWeather } from "../interfaces/GlasgowWeather";

export const searchCurrentTempGlasgow = async (): Promise<GlasgowWeather> => {
    try {
        const response = (await axios.get("http://dataservice.accuweather.com/currentconditions/v1/328226", {
            params: {
                apikey: process.env.NEXT_PUBLIC_API_KEY,
                details: true
            },
        })).data;
        return response.map((weather: any) => ({
            cityName: "Glasgow",
            temperature: weather.Temperature.Metric.Value
        }));

    } catch (error) {
        console.error("Error fetching current temperature:", error);
        throw error; 
    }


};
