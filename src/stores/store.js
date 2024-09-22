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
    API_CITY,
} from "@/constants/constants";

export const useStore = defineStore("store", () => {
    const loader = ref(true);
    const city = ref([]);
    const cityes = ref([]);
    const currConditions = ref([]);
    const dayForecasts = ref({});
    const day5Forecasts = ref([]);
    const hour12Forecasts = ref([]);

    const getCity = async (key) => {
        const r = await fetch(`${API_CITY}${key}?${API_KEY}`);
        const data = await r.json();
        city.value = data;
    };
    const getCurrentConditions = async (key) => {
        const r = await fetch(
            `${API_CURRENT_CON}${key}?${API_KEY}&${DETAILS}&${METRIC}`
        );
        const data = await r.json();
        currConditions.value = data;
    };
    const getDayForecasts = async (key) => {
        const r = await fetch(
            `${API_FORECAST1}${key}?${API_KEY}&${DETAILS}&${METRIC}`
        );
        const data = await r.json();
        dayForecasts.value = data;
    };
    const getDay5Forecasts = async (key) => {
        const r = await fetch(
            `${API_FORECAST5}${key}?${API_KEY}&${DETAILS}&${METRIC}`
        );
        const data = await r.json();
        day5Forecasts.value = data;
    };
    const getHour12Forecasts = async (key) => {
        const r = await fetch(
            `${API_HOUR_FORECAST}${key}?${API_KEY}&${DETAILS}&${METRIC}`
        );
        const data = await r.json();
        hour12Forecasts.value = data;
    };
    const getCityes = async (q) => {
        const r = await fetch(`${API_SEARCH}${q}`);
        const data = await r.json();
        cityes.value = data;
    };
    const getCityWeatherData = async (key) => {
        loader.value = true;
        // await getCity(key);
        // await getCurrentConditions(key);
        // await getDayForecasts(key);
        // await getDay5Forecasts(key);
        // await getHour12Forecasts(key);
        loader.value = false;
    };

    return {
        cityes,
        city,
        currConditions,
        dayForecasts,
        day5Forecasts,
        hour12Forecasts,
        loader,
        getCityes,
        getCity,
        getCityWeatherData,
    };
});
