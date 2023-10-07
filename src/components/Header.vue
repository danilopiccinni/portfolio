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
    <div class="container h-100">
        <div class="h-100 d-flex justify-content-between align-items-center">
            <div class="d-flex col-1">
                <a class="navbar-brand" href="#">DP</a>
            </div>

            <div class="h-100">
                <ul class="h-100 navbar-nav d-flex flex-row align-items-end gap-3">
                    <li class="nav-item h-100 align-self-end">
                        <router-link :to="{ name: 'home' }" class="nav-link text-center" >
                            <i class="fa-solid fa-house-chimney"></i>
                            <span class="d-none d-md-block">Home</span>
                        </router-link>
                    </li>
                    <li class="nav-item h-100 align-self-end">
                        <router-link :to="{ name: 'projects' }" class="nav-link text-center" >
                            <i class="fa-solid fa-diagram-project"></i>
                            <span class="d-none d-md-block">Projects</span>
                        </router-link>
                    </li>
                    <li class="nav-item h-100 align-self-end">
                        <router-link :to="{ name: 'contact' }" class="nav-link text-center" >
                            <i class="fa-regular fa-comments"></i>
                            <span class="d-none d-md-block">Contact</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            
            <div class="d-flex gap-2 col-1">
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
                <div class="container d-flex justify-content-end align-items-center">
                    <div class="one-quarter" id="switch">
                        <input v-model="store.checked" type="checkbox" class="checkbox" id="chk" />
                        <label class="label" for="chk">
                            <i class="fas fa-moon"></i>
                            <i class="fas fa-sun"></i>
                            <div class="ball"></div>
                        </label>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">

    i {
        font-size: 50px;
    }


    .checkbox {
        opacity: 0;
        position: absolute;
    }

    .label {
        background-color: rgb(255, 255, 255);
        border-radius: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        position: relative;
        height: 18px;
        width: 35px;
        transform: scale(1.5);

        transition: 1s;
    }

    .label .ball {
        background-color: #f39c12;
        border-radius: 50%;
        position: absolute;
        top: 0px;
        left: 0px;
        height: 18px;
        width: 18px;
        transform: translateX(0px);
        transition: transform 0.2s linear;
    }

    .checkbox:checked + .label .ball {
        transform: translateX(18px);
        background-color: #1d12f3;

    }

        .checkbox:checked + .label {

        background-color: #050505;

    }


    .fa-moon {
        font-size: 0.7em;
        color: #f1c40f;
    }

    .fa-sun {
        font-size: 0.7em;
        color: #f39c12;
    }
</style>