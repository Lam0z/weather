<script setup>
import { useRoute } from "vue-router";
import { useStore } from "@/stores/store";
import { ref, watch } from "vue";
const route = useRoute();
const store = useStore();
</script>
<template>
    <section class="cities">
        <div class="cities__list" v-if="store.cityes.length">
            <div
                class="cities__item"
                v-for="city in store.cityes"
                :key="city.Key"
            >
                <div class="cities__item-name">
                    {{ city.Country.ID }} {{ city.EnglishName }}
                </div>
                <div class="cities__item-geolocation">
                    {{ city.GeoPosition.Latitude }}
                    {{ city.GeoPosition.Longitude }}
                </div>
                <RouterLink class="btn btn-primary" :to="`/city/${city.Key}`"
                    >More</RouterLink
                >
            </div>
        </div>
        <div class="error" v-else>cities not found</div>
        <!-- <pre>{{ cities[0] }}</pre> -->
    </section>
</template>

<style lang="scss" scoped>
.cities {
    &__list {
    }

    &__item {
        padding: 2rem;
        position: relative;
        background: url(../assets/img/bg.jpg) no-repeat center/cover;
    }

    &__item-name {
        font-weight: bold;
    }

    &__item-geolocation {
    }
    btn {
        position: absolute;
        right: 1rem;
        top: 1rem;
    }
}
</style>
