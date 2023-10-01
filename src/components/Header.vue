<script>

import { store } from '../store.js';
    export default {
        name: 'Header',

        data() {
            return {
                store,
            }
        },

        methods :  {

            pageControl() {
                if (this.$route.name == 'projects') {
                    return true
                } else {
                    return false
                }
            },

            nextVisual() {
                if(this.store.visual == 2) {
                    this.store.visual = 1
                } else {
                    this.store.visual += 1
                }
            },

            changeVisual1() {
                console.log('ciao')
                this.store.visual = 1
            },

            changeVisual2() {
                this.store.visual = 2
            },
            console() {
                this.console.log('ciao')
            }
        },
    }


</script>

<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
            <div class="container-fluid text-center">
                <a class="navbar-brand" href="#">LOGO DP</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse z-3 bg-dark text-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link :to="{ name: 'home' }" class="nav-link" >
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'projects' }" class="nav-link" >
                                Projects
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'contact' }" class="nav-link" >
                                Contact
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div v-if="pageControl()" class="btn-group dropstart border">
                    <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-theme="dark" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <button v-on:click="nextVisual" class="btn btn-sm btn-secondary" type="button">
                        Vista
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" v-on:click="changeVisual1">Singolo full screen</a></li>
                        <li><a class="dropdown-item" v-on:click="changeVisual2">Griglia</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped lang="scss">

</style>