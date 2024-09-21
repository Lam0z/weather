import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

import {
    API,
    API_SEARCH,
    API_KEY,
    DETAILS,
    METRIC,
    API_CURRENT_CON,
    API_FORECAST5,
    API_FORECAST1,
    API_HOUR_FORECAST,
} from "@/constants/constants";

export const useStore = defineStore("store", () => {
    const loader = ref(true);
    const cityes = ref(JSON.parse(localStorage.getItem("cityes")) || []);
    const currConditions = ref([]);
    const dayForecasts = ref({});
    const day5Forecasts = ref({});
    const hour12Forecasts = ref([]);

    const getCurrentCity = (city) => (currentCity.value = city);

    const getCurrentConditions = async (key) => {
        const r = await fetch(
            `${API_CURRENT_CON}${key}?${API_KEY}&${DETAILS}&${METRIC}`
        );
        const data = await r.json();
        currConditions.value = data;
        console.log("current - " + currConditions.value);
    };
    const getDayForecasts = async (key) => {
        const r = await fetch(
            `${API_FORECAST1}${key}?${API_KEY}&${DETAILS}&${METRIC}`
        );
        const data = await r.json();
        dayForecasts.value = data;
        console.log("dayForecasts - " + day5Forecasts.value);
    };
    const getDay5Forecasts = async (key) => {
        const r = await fetch(
            `${API_HOUR_FORECAST}${key}?${API_KEY}&${DETAILS}&${METRIC}`
        );
        const data = await r.json();
        day5Forecasts.value = data;
        console.log("day5Forecasts - " + day5Forecasts.value);
    };
    const getHour12Forecasts = async (key) => {
        const r = await fetch(
            `${API_HOUR_FORECAST}${key}?${API_KEY}&${DETAILS}&${METRIC}`
        );
        const data = await r.json();
        hour12Forecasts.value = data;
        console.log("hour12Forecasts - " + hour12Forecasts.value);
    };
    const getCityes = async (q) => {
        const r = await fetch(`${API_SEARCH}${q}`);
        const data = await r.json();
        cityes.value = data;
        console.log("cityes - " + cityes.value);
    };
    const getCityWeatherData = async (key) => {
        loader.value = true;
        await getCurrentConditions(key);
        // await getDayForecasts(key);
        await getDay5Forecasts(key);
        await getHour12Forecasts(key);
        loader.value = false;
    };

    return { cityes, currConditions, loader, getCityes, getCityWeatherData };
});
