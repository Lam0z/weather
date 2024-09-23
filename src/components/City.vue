<script setup>
import { useRoute } from "vue-router";
import { useStore } from "@/stores/store";
import { ref, watch } from "vue";
// import { WEATHER_ICONS } from "@/constants/constants";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const route = useRoute();
const store = useStore();

const key = ref(route.path.split("/").pop());
store.getCityWeatherData(key.value);
const swiperModules = [Navigation, A11y];
const swiperBreakpoints = {
    320: {
        slidesPerView: 3,
        spaceBetween: 0,
    },
    576: {
        slidesPerView: 4,
        spaceBetween: 10,
    },
    992: {
        slidesPerView: 6,
        spaceBetween: 10,
    },
};
</script>
<template>
    <section class="city" v-if="store.currConditions.length && !store.loader">
        <div class="city__current-weather">
            <div class="city__name">
                {{ store.city.EnglishName }}
            </div>
            <div class="city__main-info">
                <div class="city__temperature">
                    +{{ store.currConditions[0].Temperature.Metric.Value }}°
                </div>
                <img
                    :src="[
                        store.currConditions[0].WeatherIcon > 9
                            ? `https://developer.accuweather.com/sites/default/files/${store.currConditions[0].WeatherIcon}-s.png`
                            : `https://developer.accuweather.com/sites/default/files/0${store.currConditions[0].WeatherIcon}-s.png`,
                    ]"
                    class="city__weatcher-icon"
                    alt=""
                />
                <div class="city__feel">
                    <div>
                        <span> {{ store.currConditions[0].WeatherText }}</span>
                    </div>
                    <div>
                        Real feel temperature
                        <span>
                            {{
                                store.currConditions[0].RealFeelTemperature
                                    .Metric.Value
                            }}°
                        </span>
                    </div>
                </div>
            </div>
            <div class="city__weather-description">
                <div>
                    <font-awesome-icon :icon="['fas', 'wind']" />
                    {{ store.currConditions[0].Wind.Speed.Metric.Value }}
                    {{ store.currConditions[0].Wind.Speed.Metric.Unit }}
                </div>
                <div>
                    <font-awesome-icon :icon="['fas', 'droplet']" />
                    {{ store.currConditions[0].RelativeHumidity }} %
                </div>
                <div>
                    <font-awesome-icon :icon="['fas', 'hurricane']" />
                    {{ store.currConditions[0].Pressure.Metric.Value }}
                    {{ store.currConditions[0].Pressure.Metric.Unit }}
                </div>
            </div>
        </div>
        <div class="city__h12 city__wrapper">
            <div class="city__header">
                <h2>Hourly forecast</h2>
            </div>
            <div class="city__h12-list">
                <swiper
                    :modules="swiperModules"
                    :slides-per-view="2"
                    :space-between="50"
                    :breakpoints="swiperBreakpoints"
                    navigation
                >
                    <swiper-slide
                        class="city__h12-item"
                        v-for="(hour, idx) in store.hour12Forecasts"
                        :key="idx"
                    >
                        <div class="city__h12-time">
                            {{ hour.DateTime.split("T")[1].split(":")[0] }}
                        </div>
                        <img
                            :src="[
                                hour.WeatherIcon > 9
                                    ? `https://developer.accuweather.com/sites/default/files/${hour.WeatherIcon}-s.png`
                                    : `https://developer.accuweather.com/sites/default/files/0${hour.WeatherIcon}-s.png`,
                            ]"
                            class="city__weatcher-icon"
                            alt=""
                        />
                        <div class="city__h12-temp">
                            {{ hour.Temperature.Value }}°
                        </div>
                        <div class="city__h12-humidity">
                            {{ hour.PrecipitationProbability }}%
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <div class="city__day city__wrapper">
            <h2 class="city__header">5 days forecast</h2>
            <div class="city__day-weather">
                <div class="city__day-item">
                    <div class="city__day-date day">
                        <span>TODAY</span>
                        <span>
                            {{
                                store.dayForecasts.DailyForecasts[0].Date.split(
                                    "T"
                                )[0].slice(5)
                            }}</span
                        >
                    </div>
                    <img
                        :src="[
                            store.dayForecasts.DailyForecasts[0]?.Day.Icon > 9
                                ? `https://developer.accuweather.com/sites/default/files/${store.dayForecasts.DailyForecasts[0].Day.Icon}-s.png`
                                : `https://developer.accuweather.com/sites/default/files/0${store.dayForecasts.DailyForecasts[0].Day.Icon}-s.png`,
                        ]"
                        alt=""
                        class="city__day-icon"
                    />
                    <div class="city__day-temperature day">
                        <span
                            >{{
                                store.dayForecasts.DailyForecasts[0].Temperature
                                    .Maximum.Value
                            }}°</span
                        >
                        <span>
                            {{
                                store.dayForecasts.DailyForecasts[0].Temperature
                                    .Minimum.Value
                            }}°</span
                        >
                    </div>
                    <div class="city__day-conditions day">
                        <span>{{
                            store.dayForecasts.DailyForecasts[0].Day.IconPhrase
                        }}</span>
                        <span>
                            <img
                                :src="[
                                    store.dayForecasts.DailyForecasts[0].Night
                                        .Icon > 9
                                        ? `https://developer.accuweather.com/sites/default/files/${store.dayForecasts.DailyForecasts[0].Night.Icon}-s.png`
                                        : `https://developer.accuweather.com/sites/default/files/0${store.dayForecasts.DailyForecasts[0].Night.Icon}-s.png`,
                                ]"
                                alt=""
                                class="city__day-icon"
                            />
                            {{
                                store.dayForecasts.DailyForecasts[0].Night
                                    .IconPhrase
                            }}</span
                        >
                    </div>
                    <div class="city__day-precip day">
                        {{
                            store.dayForecasts.DailyForecasts[0].Day
                                .PrecipitationProbability
                        }}%
                    </div>
                </div>
                <div
                    class="city__day-item"
                    v-for="day in store.day5Forecasts.DailyForecasts"
                >
                    <div class="city__day-date day">
                        <span></span>
                        <span> {{ day.Date.split("T")[0].slice(5) }}</span>
                    </div>
                    <img
                        :src="[
                            day.Day.Icon > 9
                                ? `https://developer.accuweather.com/sites/default/files/${day.Day.Icon}-s.png`
                                : `https://developer.accuweather.com/sites/default/files/0${day.Day.Icon}-s.png`,
                        ]"
                        alt=""
                        class="city__day-icon"
                    />
                    <div class="city__day-temperature day">
                        <span>{{ day.Temperature.Maximum.Value }}°</span>
                        <span> {{ day.Temperature.Minimum.Value }}°</span>
                    </div>
                    <div class="city__day-conditions day">
                        <span>{{ day.Day.IconPhrase }}</span>
                        <span>
                            <img
                                :src="[
                                    day.Night.Icon > 10
                                        ? `https://developer.accuweather.com/sites/default/files/${day.Night.Icon}-s.png`
                                        : `https://developer.accuweather.com/sites/default/files/0${day.Night.Icon}-s.png`,
                                ]"
                                alt=""
                                class="city__day-icon"
                            />{{ day.Night.IconPhrase }}</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="error" v-else>
        <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.city {
    &__wrapper {
        // padding: 1rem;
        margin-bottom: 1rem;
        background: white;
        border-radius: 0.5rem;
        &:last-child {
            margin-bottom: 0;
        }
    }
    &__header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--color);
        margin-bottom: 1rem;
        padding: 1rem;
    }
    &__current-weather {
        margin-bottom: 1rem;
        color: white;
        padding: 1rem;
        background: url(../assets//img/bg.jpg) no-repeat center/cover;
    }
    &__main-info {
        display: flex;
        column-gap: 1rem;
        margin: 1rem 0;
    }
    &__name {
        font-size: 3rem;
    }

    &__temperature {
        font-size: 2rem;
        font-weight: bold;
    }

    &__weatcher-icon {
        width: 70px;
        height: 48px;
    }

    &__feel {
    }

    &__weather-description {
        display: flex;
        column-gap: 0.5rem;
    }
    // h12
    // h12
    // h12
    &__h12 {
        padding-bottom: 1rem;
    }

    &__h12-list {
        // display: flex;
        // flex-wrap: wrap;
    }

    &__h12-item {
        flex-grow: 1;
        display: grid;
        justify-items: center;
    }

    &__h12-time {
    }

    &__weatcher-icon {
        // object-fit: ;
    }

    &__h12-temp {
        font-weight: bold;
        font-size: 2rem;
    }

    &__day {
    }

    &__day-weather {
    }

    &__day-item {
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
        align-items: center;
        justify-items: center;
        border-bottom: 1px solid var(--color);
        @media (min-width: 768px) {
            grid-template-columns: 100px 90px 1fr 2fr 30px;
        }
    }
    .day {
        display: grid;
        row-gap: 0.1rem;
        span:first-child {
            font-weight: bold;
        }
    }
    &__day-date {
        text-align: center;
        grid-column: span 3;
        @media (min-width: 768px) {
            grid-column: span 1;
        }
    }

    &__day-icon {
    }

    & &__day-temperature {
        // display: flex;

        span {
            // margin-right: 0.5rem;
            &:last-child {
                // align-self: end;
            }
            &:first-child {
                font-size: 1.5rem;
            }
        }
    }

    &__day-conditions {
        justify-self: center;
        grid-column: span 3;
        @media (min-width: 768px) {
            justify-self: start;
            grid-column: span 1;
            padding-left: 40%;
        }
        img {
            max-width: 22px;
            margin-right: 0.5rem;
        }
    }

    &__day-precip {
    }
}
</style>
