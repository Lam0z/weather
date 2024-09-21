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

const current = [
    {
        LocalObservationDateTime: "2024-09-21T14:47:00+03:00",
        EpochTime: 1726919220,
        WeatherText: "Sunny",
        WeatherIcon: 1,
        HasPrecipitation: false,
        PrecipitationType: null,
        IsDayTime: true,
        Temperature: {
            Metric: {
                Value: 22.2,
                Unit: "C",
                UnitType: 17,
            },
            Imperial: {
                Value: 72,
                Unit: "F",
                UnitType: 18,
            },
        },
        RealFeelTemperature: {
            Metric: {
                Value: 21.5,
                Unit: "C",
                UnitType: 17,
                Phrase: "Pleasant",
            },
            Imperial: {
                Value: 71,
                Unit: "F",
                UnitType: 18,
                Phrase: "Pleasant",
            },
        },
        RealFeelTemperatureShade: {
            Metric: {
                Value: 20.2,
                Unit: "C",
                UnitType: 17,
                Phrase: "Pleasant",
            },
            Imperial: {
                Value: 68,
                Unit: "F",
                UnitType: 18,
                Phrase: "Pleasant",
            },
        },
        RelativeHumidity: 46,
        IndoorRelativeHumidity: 46,
        DewPoint: {
            Metric: {
                Value: 10,
                Unit: "C",
                UnitType: 17,
            },
            Imperial: {
                Value: 50,
                Unit: "F",
                UnitType: 18,
            },
        },
        Wind: {
            Direction: {
                Degrees: 270,
                Localized: "W",
                English: "W",
            },
            Speed: {
                Metric: {
                    Value: 20.4,
                    Unit: "km/h",
                    UnitType: 7,
                },
                Imperial: {
                    Value: 12.7,
                    Unit: "mi/h",
                    UnitType: 9,
                },
            },
        },
        WindGust: {
            Speed: {
                Metric: {
                    Value: 38.9,
                    Unit: "km/h",
                    UnitType: 7,
                },
                Imperial: {
                    Value: 24.2,
                    Unit: "mi/h",
                    UnitType: 9,
                },
            },
        },
        UVIndex: 2,
        UVIndexText: "Low",
        Visibility: {
            Metric: {
                Value: 16.1,
                Unit: "km",
                UnitType: 6,
            },
            Imperial: {
                Value: 10,
                Unit: "mi",
                UnitType: 2,
            },
        },
        ObstructionsToVisibility: "",
        CloudCover: 0,
        Ceiling: {
            Metric: {
                Value: 12192,
                Unit: "m",
                UnitType: 5,
            },
            Imperial: {
                Value: 40000,
                Unit: "ft",
                UnitType: 0,
            },
        },
        Pressure: {
            Metric: {
                Value: 1017,
                Unit: "mb",
                UnitType: 14,
            },
            Imperial: {
                Value: 30.03,
                Unit: "inHg",
                UnitType: 12,
            },
        },
        PressureTendency: {
            LocalizedText: "Falling",
            Code: "F",
        },
        Past24HourTemperatureDeparture: {
            Metric: {
                Value: 2.2,
                Unit: "C",
                UnitType: 17,
            },
            Imperial: {
                Value: 4,
                Unit: "F",
                UnitType: 18,
            },
        },
        ApparentTemperature: {
            Metric: {
                Value: 22.2,
                Unit: "C",
                UnitType: 17,
            },
            Imperial: {
                Value: 72,
                Unit: "F",
                UnitType: 18,
            },
        },
        WindChillTemperature: {
            Metric: {
                Value: 22.2,
                Unit: "C",
                UnitType: 17,
            },
            Imperial: {
                Value: 72,
                Unit: "F",
                UnitType: 18,
            },
        },
        WetBulbTemperature: {
            Metric: {
                Value: 15,
                Unit: "C",
                UnitType: 17,
            },
            Imperial: {
                Value: 59,
                Unit: "F",
                UnitType: 18,
            },
        },
        WetBulbGlobeTemperature: {
            Metric: {
                Value: 19.1,
                Unit: "C",
                UnitType: 17,
            },
            Imperial: {
                Value: 66,
                Unit: "F",
                UnitType: 18,
            },
        },
        Precip1hr: {
            Metric: {
                Value: 0,
                Unit: "mm",
                UnitType: 3,
            },
            Imperial: {
                Value: 0,
                Unit: "in",
                UnitType: 1,
            },
        },
        PrecipitationSummary: {
            Precipitation: {
                Metric: {
                    Value: 0,
                    Unit: "mm",
                    UnitType: 3,
                },
                Imperial: {
                    Value: 0,
                    Unit: "in",
                    UnitType: 1,
                },
            },
            PastHour: {
                Metric: {
                    Value: 0,
                    Unit: "mm",
                    UnitType: 3,
                },
                Imperial: {
                    Value: 0,
                    Unit: "in",
                    UnitType: 1,
                },
            },
            Past3Hours: {
                Metric: {
                    Value: 0,
                    Unit: "mm",
                    UnitType: 3,
                },
                Imperial: {
                    Value: 0,
                    Unit: "in",
                    UnitType: 1,
                },
            },
            Past6Hours: {
                Metric: {
                    Value: 0,
                    Unit: "mm",
                    UnitType: 3,
                },
                Imperial: {
                    Value: 0,
                    Unit: "in",
                    UnitType: 1,
                },
            },
            Past9Hours: {
                Metric: {
                    Value: 0,
                    Unit: "mm",
                    UnitType: 3,
                },
                Imperial: {
                    Value: 0,
                    Unit: "in",
                    UnitType: 1,
                },
            },
            Past12Hours: {
                Metric: {
                    Value: 0,
                    Unit: "mm",
                    UnitType: 3,
                },
                Imperial: {
                    Value: 0,
                    Unit: "in",
                    UnitType: 1,
                },
            },
            Past18Hours: {
                Metric: {
                    Value: 0,
                    Unit: "mm",
                    UnitType: 3,
                },
                Imperial: {
                    Value: 0,
                    Unit: "in",
                    UnitType: 1,
                },
            },
            Past24Hours: {
                Metric: {
                    Value: 0,
                    Unit: "mm",
                    UnitType: 3,
                },
                Imperial: {
                    Value: 0,
                    Unit: "in",
                    UnitType: 1,
                },
            },
        },
        TemperatureSummary: {
            Past6HourRange: {
                Minimum: {
                    Metric: {
                        Value: 13.9,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Imperial: {
                        Value: 57,
                        Unit: "F",
                        UnitType: 18,
                    },
                },
                Maximum: {
                    Metric: {
                        Value: 22.2,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Imperial: {
                        Value: 72,
                        Unit: "F",
                        UnitType: 18,
                    },
                },
            },
            Past12HourRange: {
                Minimum: {
                    Metric: {
                        Value: 11.1,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Imperial: {
                        Value: 52,
                        Unit: "F",
                        UnitType: 18,
                    },
                },
                Maximum: {
                    Metric: {
                        Value: 22.2,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Imperial: {
                        Value: 72,
                        Unit: "F",
                        UnitType: 18,
                    },
                },
            },
            Past24HourRange: {
                Minimum: {
                    Metric: {
                        Value: 11.1,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Imperial: {
                        Value: 52,
                        Unit: "F",
                        UnitType: 18,
                    },
                },
                Maximum: {
                    Metric: {
                        Value: 22.2,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Imperial: {
                        Value: 72,
                        Unit: "F",
                        UnitType: 18,
                    },
                },
            },
        },
        MobileLink:
            "http://www.accuweather.com/en/ru/ivantyeyevka/289351/current-weather/289351?lang=en-us",
        Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/current-weather/289351?lang=en-us",
    },
];
const days1 = {
    Headline: {
        EffectiveDate: "2024-09-22T07:00:00+03:00",
        EffectiveEpochDate: 1726977600,
        Severity: 7,
        Text: "Not as warm Sunday",
        Category: "cooler",
        EndDate: "2024-09-22T19:00:00+03:00",
        EndEpochDate: 1727020800,
        MobileLink:
            "http://www.accuweather.com/en/ru/ivantyeyevka/289351/daily-weather-forecast/289351?unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/daily-weather-forecast/289351?unit=c&lang=en-us",
    },
    DailyForecasts: [
        {
            Date: "2024-09-21T07:00:00+03:00",
            EpochDate: 1726891200,
            Sun: {
                Rise: "2024-09-21T06:12:00+03:00",
                EpochRise: 1726888320,
                Set: "2024-09-21T18:29:00+03:00",
                EpochSet: 1726932540,
            },
            Moon: {
                Rise: "2024-09-21T19:10:00+03:00",
                EpochRise: 1726935000,
                Set: "2024-09-22T12:53:00+03:00",
                EpochSet: 1726998780,
                Phase: "WaningGibbous",
                Age: 18,
            },
            Temperature: {
                Minimum: {
                    Value: 9.7,
                    Unit: "C",
                    UnitType: 17,
                },
                Maximum: {
                    Value: 22.2,
                    Unit: "C",
                    UnitType: 17,
                },
            },
            RealFeelTemperature: {
                Minimum: {
                    Value: 7.6,
                    Unit: "C",
                    UnitType: 17,
                    Phrase: "Chilly",
                },
                Maximum: {
                    Value: 22,
                    Unit: "C",
                    UnitType: 17,
                    Phrase: "Pleasant",
                },
            },
            RealFeelTemperatureShade: {
                Minimum: {
                    Value: 7.6,
                    Unit: "C",
                    UnitType: 17,
                    Phrase: "Chilly",
                },
                Maximum: {
                    Value: 20.2,
                    Unit: "C",
                    UnitType: 17,
                    Phrase: "Pleasant",
                },
            },
            HoursOfSun: 11.2,
            DegreeDaySummary: {
                Heating: {
                    Value: 2,
                    Unit: "C",
                    UnitType: 17,
                },
                Cooling: {
                    Value: 0,
                    Unit: "C",
                    UnitType: 17,
                },
            },
            AirAndPollen: [
                {
                    Name: "AirQuality",
                    Value: 0,
                    Category: "Good",
                    CategoryValue: 1,
                    Type: "Ozone",
                },
                {
                    Name: "Grass",
                    Value: 0,
                    Category: "Low",
                    CategoryValue: 1,
                },
                {
                    Name: "Mold",
                    Value: 0,
                    Category: "Low",
                    CategoryValue: 1,
                },
                {
                    Name: "Ragweed",
                    Value: 0,
                    Category: "Low",
                    CategoryValue: 1,
                },
                {
                    Name: "Tree",
                    Value: 0,
                    Category: "Low",
                    CategoryValue: 1,
                },
                {
                    Name: "UVIndex",
                    Value: 3,
                    Category: "Moderate",
                    CategoryValue: 2,
                },
            ],
            Day: {
                Icon: 4,
                IconPhrase: "Intermittent clouds",
                HasPrecipitation: false,
                ShortPhrase: "Clouds breaking for sun; mild",
                LongPhrase: "Mild with clouds giving way to some sun",
                PrecipitationProbability: 5,
                ThunderstormProbability: 0,
                RainProbability: 5,
                SnowProbability: 0,
                IceProbability: 0,
                Wind: {
                    Speed: {
                        Value: 18.5,
                        Unit: "km/h",
                        UnitType: 7,
                    },
                    Direction: {
                        Degrees: 292,
                        Localized: "WNW",
                        English: "WNW",
                    },
                },
                WindGust: {
                    Speed: {
                        Value: 38.9,
                        Unit: "km/h",
                        UnitType: 7,
                    },
                    Direction: {
                        Degrees: 279,
                        Localized: "W",
                        English: "W",
                    },
                },
                TotalLiquid: {
                    Value: 0,
                    Unit: "mm",
                    UnitType: 3,
                },
                Rain: {
                    Value: 0,
                    Unit: "mm",
                    UnitType: 3,
                },
                Snow: {
                    Value: 0,
                    Unit: "cm",
                    UnitType: 4,
                },
                Ice: {
                    Value: 0,
                    Unit: "mm",
                    UnitType: 3,
                },
                HoursOfPrecipitation: 0,
                HoursOfRain: 0,
                HoursOfSnow: 0,
                HoursOfIce: 0,
                CloudCover: 9,
                Evapotranspiration: {
                    Value: 2.8,
                    Unit: "mm",
                    UnitType: 3,
                },
                SolarIrradiance: {
                    Value: 4591.4,
                    Unit: "W/m²",
                    UnitType: 33,
                },
                RelativeHumidity: {
                    Minimum: 45,
                    Maximum: 86,
                    Average: 59,
                },
                WetBulbTemperature: {
                    Minimum: {
                        Value: 11.2,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Maximum: {
                        Value: 15,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Average: {
                        Value: 13.9,
                        Unit: "C",
                        UnitType: 17,
                    },
                },
                WetBulbGlobeTemperature: {
                    Minimum: {
                        Value: 12.3,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Maximum: {
                        Value: 18.6,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Average: {
                        Value: 16.5,
                        Unit: "C",
                        UnitType: 17,
                    },
                },
            },
            Night: {
                Icon: 35,
                IconPhrase: "Partly cloudy",
                HasPrecipitation: false,
                ShortPhrase: "Partly cloudy",
                LongPhrase: "Partly cloudy",
                PrecipitationProbability: 8,
                ThunderstormProbability: 0,
                RainProbability: 8,
                SnowProbability: 0,
                IceProbability: 0,
                Wind: {
                    Speed: {
                        Value: 16.7,
                        Unit: "km/h",
                        UnitType: 7,
                    },
                    Direction: {
                        Degrees: 324,
                        Localized: "NW",
                        English: "NW",
                    },
                },
                WindGust: {
                    Speed: {
                        Value: 37,
                        Unit: "km/h",
                        UnitType: 7,
                    },
                    Direction: {
                        Degrees: 276,
                        Localized: "W",
                        English: "W",
                    },
                },
                TotalLiquid: {
                    Value: 0,
                    Unit: "mm",
                    UnitType: 3,
                },
                Rain: {
                    Value: 0,
                    Unit: "mm",
                    UnitType: 3,
                },
                Snow: {
                    Value: 0,
                    Unit: "cm",
                    UnitType: 4,
                },
                Ice: {
                    Value: 0,
                    Unit: "mm",
                    UnitType: 3,
                },
                HoursOfPrecipitation: 0,
                HoursOfRain: 0,
                HoursOfSnow: 0,
                HoursOfIce: 0,
                CloudCover: 33,
                Evapotranspiration: {
                    Value: 0.8,
                    Unit: "mm",
                    UnitType: 3,
                },
                SolarIrradiance: {
                    Value: 0,
                    Unit: "W/m²",
                    UnitType: 33,
                },
                RelativeHumidity: {
                    Minimum: 55,
                    Maximum: 64,
                    Average: 60,
                },
                WetBulbTemperature: {
                    Minimum: {
                        Value: 7.3,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Maximum: {
                        Value: 12.8,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Average: {
                        Value: 10.4,
                        Unit: "C",
                        UnitType: 17,
                    },
                },
                WetBulbGlobeTemperature: {
                    Minimum: {
                        Value: 9.2,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Maximum: {
                        Value: 15.5,
                        Unit: "C",
                        UnitType: 17,
                    },
                    Average: {
                        Value: 12.5,
                        Unit: "C",
                        UnitType: 17,
                    },
                },
            },
            Sources: ["AccuWeather"],
            MobileLink:
                "http://www.accuweather.com/en/ru/ivantyeyevka/289351/daily-weather-forecast/289351?day=1&unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/daily-weather-forecast/289351?day=1&unit=c&lang=en-us",
        },
    ],
};
const days5 = {
    Headline: {
        EffectiveDate: "2024-09-22T07:00:00+03:00",
        EffectiveEpochDate: 1726977600,
        Severity: 7,
        Text: "Not as warm Sunday",
        Category: "cooler",
        EndDate: "2024-09-22T19:00:00+03:00",
        EndEpochDate: 1727020800,
        MobileLink:
            "http://www.accuweather.com/en/ru/ivantyeyevka/289351/daily-weather-forecast/289351?unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/daily-weather-forecast/289351?unit=c&lang=en-us",
    },
    DailyForecasts: [
        {
            Date: "2024-09-21T07:00:00+03:00",
            EpochDate: 1726891200,
            Temperature: {
                Minimum: {
                    Value: 9.7,
                    Unit: "C",
                    UnitType: 17,
                },
                Maximum: {
                    Value: 21.4,
                    Unit: "C",
                    UnitType: 17,
                },
            },
            Day: {
                Icon: 4,
                IconPhrase: "Intermittent clouds",
                HasPrecipitation: false,
            },
            Night: {
                Icon: 35,
                IconPhrase: "Partly cloudy",
                HasPrecipitation: false,
            },
            Sources: ["AccuWeather"],
            MobileLink:
                "http://www.accuweather.com/en/ru/ivantyeyevka/289351/daily-weather-forecast/289351?day=1&unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/daily-weather-forecast/289351?day=1&unit=c&lang=en-us",
        },
        {
            Date: "2024-09-22T07:00:00+03:00",
            EpochDate: 1726977600,
            Temperature: {
                Minimum: {
                    Value: 2.9,
                    Unit: "C",
                    UnitType: 17,
                },
                Maximum: {
                    Value: 14.5,
                    Unit: "C",
                    UnitType: 17,
                },
            },
            Day: {
                Icon: 1,
                IconPhrase: "Sunny",
                HasPrecipitation: false,
            },
            Night: {
                Icon: 33,
                IconPhrase: "Clear",
                HasPrecipitation: false,
            },
            Sources: ["AccuWeather"],
            MobileLink:
                "http://www.accuweather.com/en/ru/ivantyeyevka/289351/daily-weather-forecast/289351?day=2&unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/daily-weather-forecast/289351?day=2&unit=c&lang=en-us",
        },
        {
            Date: "2024-09-23T07:00:00+03:00",
            EpochDate: 1727064000,
            Temperature: {
                Minimum: {
                    Value: 4.6,
                    Unit: "C",
                    UnitType: 17,
                },
                Maximum: {
                    Value: 15.3,
                    Unit: "C",
                    UnitType: 17,
                },
            },
            Day: {
                Icon: 2,
                IconPhrase: "Mostly sunny",
                HasPrecipitation: false,
            },
            Night: {
                Icon: 36,
                IconPhrase: "Intermittent clouds",
                HasPrecipitation: false,
            },
            Sources: ["AccuWeather"],
            MobileLink:
                "http://www.accuweather.com/en/ru/ivantyeyevka/289351/daily-weather-forecast/289351?day=3&unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/daily-weather-forecast/289351?day=3&unit=c&lang=en-us",
        },
        {
            Date: "2024-09-24T07:00:00+03:00",
            EpochDate: 1727150400,
            Temperature: {
                Minimum: {
                    Value: 7.4,
                    Unit: "C",
                    UnitType: 17,
                },
                Maximum: {
                    Value: 19.3,
                    Unit: "C",
                    UnitType: 17,
                },
            },
            Day: {
                Icon: 6,
                IconPhrase: "Mostly cloudy",
                HasPrecipitation: false,
            },
            Night: {
                Icon: 35,
                IconPhrase: "Partly cloudy",
                HasPrecipitation: false,
            },
            Sources: ["AccuWeather"],
            MobileLink:
                "http://www.accuweather.com/en/ru/ivantyeyevka/289351/daily-weather-forecast/289351?day=4&unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/daily-weather-forecast/289351?day=4&unit=c&lang=en-us",
        },
        {
            Date: "2024-09-25T07:00:00+03:00",
            EpochDate: 1727236800,
            Temperature: {
                Minimum: {
                    Value: 10.4,
                    Unit: "C",
                    UnitType: 17,
                },
                Maximum: {
                    Value: 23.3,
                    Unit: "C",
                    UnitType: 17,
                },
            },
            Day: {
                Icon: 3,
                IconPhrase: "Partly sunny",
                HasPrecipitation: false,
            },
            Night: {
                Icon: 33,
                IconPhrase: "Clear",
                HasPrecipitation: false,
            },
            Sources: ["AccuWeather"],
            MobileLink:
                "http://www.accuweather.com/en/ru/ivantyeyevka/289351/daily-weather-forecast/289351?day=5&unit=c&lang=en-us",
            Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/daily-weather-forecast/289351?day=5&unit=c&lang=en-us",
        },
    ],
};
const h12 = [
    {
        DateTime: "2024-09-21T13:00:00+03:00",
        EpochDateTime: 1726912800,
        WeatherIcon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
        IsDaylight: true,
        Temperature: {
            Value: 20.2,
            Unit: "C",
            UnitType: 17,
        },
        PrecipitationProbability: 0,
        MobileLink:
            "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=13&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=13&unit=c&lang=en-us",
    },
    {
        DateTime: "2024-09-21T14:00:00+03:00",
        EpochDateTime: 1726916400,
        WeatherIcon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: false,
        IsDaylight: true,
        Temperature: {
            Value: 20.6,
            Unit: "C",
            UnitType: 17,
        },
        PrecipitationProbability: 0,
        MobileLink:
            "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=14&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=14&unit=c&lang=en-us",
    },
    {
        DateTime: "2024-09-21T15:00:00+03:00",
        EpochDateTime: 1726920000,
        WeatherIcon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: false,
        IsDaylight: true,
        Temperature: {
            Value: 21,
            Unit: "C",
            UnitType: 17,
        },
        PrecipitationProbability: 0,
        MobileLink:
            "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=15&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=15&unit=c&lang=en-us",
    },
    {
        DateTime: "2024-09-21T16:00:00+03:00",
        EpochDateTime: 1726923600,
        WeatherIcon: 2,
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false,
        IsDaylight: true,
        Temperature: {
            Value: 21.4,
            Unit: "C",
            UnitType: 17,
        },
        PrecipitationProbability: 0,
        MobileLink:
            "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=16&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=16&unit=c&lang=en-us",
    },
    {
        DateTime: "2024-09-21T17:00:00+03:00",
        EpochDateTime: 1726927200,
        WeatherIcon: 2,
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false,
        IsDaylight: true,
        Temperature: {
            Value: 20.6,
            Unit: "C",
            UnitType: 17,
        },
        PrecipitationProbability: 0,
        MobileLink:
            "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=17&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=17&unit=c&lang=en-us",
    },
    {
        DateTime: "2024-09-21T18:00:00+03:00",
        EpochDateTime: 1726930800,
        WeatherIcon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
        IsDaylight: true,
        Temperature: {
            Value: 19.2,
            Unit: "C",
            UnitType: 17,
        },
        PrecipitationProbability: 0,
        MobileLink:
            "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=18&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=18&unit=c&lang=en-us",
    },
    {
        DateTime: "2024-09-21T19:00:00+03:00",
        EpochDateTime: 1726934400,
        WeatherIcon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
        IsDaylight: false,
        Temperature: {
            Value: 17.9,
            Unit: "C",
            UnitType: 17,
        },
        PrecipitationProbability: 0,
        MobileLink:
            "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=19&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=19&unit=c&lang=en-us",
    },
    {
        DateTime: "2024-09-21T20:00:00+03:00",
        EpochDateTime: 1726938000,
        WeatherIcon: 36,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
        IsDaylight: false,
        Temperature: {
            Value: 17,
            Unit: "C",
            UnitType: 17,
        },
        PrecipitationProbability: 0,
        MobileLink:
            "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=20&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=20&unit=c&lang=en-us",
    },
    {
        DateTime: "2024-09-21T21:00:00+03:00",
        EpochDateTime: 1726941600,
        WeatherIcon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
        IsDaylight: false,
        Temperature: {
            Value: 16.9,
            Unit: "C",
            UnitType: 17,
        },
        PrecipitationProbability: 0,
        MobileLink:
            "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=21&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=21&unit=c&lang=en-us",
    },
    {
        DateTime: "2024-09-21T22:00:00+03:00",
        EpochDateTime: 1726945200,
        WeatherIcon: 36,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
        IsDaylight: false,
        Temperature: {
            Value: 16.1,
            Unit: "C",
            UnitType: 17,
        },
        PrecipitationProbability: 0,
        MobileLink:
            "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=22&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=22&unit=c&lang=en-us",
    },
    {
        DateTime: "2024-09-21T23:00:00+03:00",
        EpochDateTime: 1726948800,
        WeatherIcon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
        IsDaylight: false,
        Temperature: {
            Value: 15.6,
            Unit: "C",
            UnitType: 17,
        },
        PrecipitationProbability: 0,
        MobileLink:
            "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=23&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=1&hbhhour=23&unit=c&lang=en-us",
    },
    {
        DateTime: "2024-09-22T00:00:00+03:00",
        EpochDateTime: 1726952400,
        WeatherIcon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false,
        IsDaylight: false,
        Temperature: {
            Value: 15.3,
            Unit: "C",
            UnitType: 17,
        },
        PrecipitationProbability: 0,
        MobileLink:
            "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=2&hbhhour=0&unit=c&lang=en-us",
        Link: "http://www.accuweather.com/en/ru/ivantyeyevka/289351/hourly-weather-forecast/289351?day=2&hbhhour=0&unit=c&lang=en-us",
    },
];
</script>
<template>
    <pre> {{ store.hour12Forecasts }}</pre>
    <section class="city" v-if="!store.loader">
        <div class="city__current-weather">
            <div class="city__name">
                {{ "City Name" }}
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
                    wind: {{ store.currConditions[0].Wind.Speed.Metric.Value }}
                    {{ store.currConditions[0].Wind.Speed.Metric.Unit }}
                </div>
                <div>
                    Relative Humidity:
                    {{ store.currConditions[0].RelativeHumidity }} %
                </div>
                <div>
                    pressure:
                    {{ store.currConditions[0].Pressure.Metric.Value }}
                    {{ store.currConditions[0].Pressure.Metric.Unit }}
                </div>
            </div>
        </div>
        <div class="city__h12 city__wrapper">
            <div class="city__header">
                <h2>Hourly forecast</h2>
                <button class="btn btn-primary">Close</button>
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

        <!-- <div class="city__day city__wrapper">
            <h2 class="city__header">5 days forecast</h2>
            <div class="city__day-weather">
                <div class="city__day-item">
                    <div class="city__day-date day">
                        <span>TODAY</span>
                        <span> 21.0</span>
                    </div>
                    <img
                        :src="[
                            store.dayForecasts.DailyForecasts[0].Day.Icon > 9
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
        </div> -->
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
        width: 48px;
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
        grid-template-columns: 100px 60px 1fr 2fr 30px;
        column-gap: 1rem;
        align-items: center;
        justify-items: center;
        border-bottom: 1px solid var(--color);
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
        justify-self: start;
        padding-left: 40%;
        img {
            max-width: 22px;
            margin-right: 0.5rem;
        }
    }

    &__day-precip {
    }
}
</style>
