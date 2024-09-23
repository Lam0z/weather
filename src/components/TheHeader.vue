<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "@/stores/store";
const store = useStore();
const route = useRoute();
const path = ref(route.path);

if (path.value != "/") {
    const cityId = path.value.split("/").pop();
}
const city = ref("");
</script>

<template>
    <section class="header">
        <nav class="navbar bg-black navbar-expand-md" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"
                    ><img src="../assets/img/logo-small.png" alt=""
                /></a>
                <button
                    class="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/"
                                >Home</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                :to="
                                    store.city.Key
                                        ? `/city/${store.city.Key}`
                                        : ''
                                "
                                >{{
                                    store.city.LocalizedName
                                        ? store.city.LocalizedName
                                        : "City Page"
                                }}</router-link
                            >
                        </li>
                    </ul>
                    <form
                        v-if="path == '/'"
                        class="d-flex"
                        role="search"
                        @submit.prevent.enter="store.getCityes(city)"
                    >
                        <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search City"
                            aria-label="Search"
                            v-model="city"
                        />
                        <button class="btn btn-primary" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </section>
</template>

<style lang="scss" scoped>
.navbar-brand {
    img {
        max-width: 100px;
    }
}
</style>
