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
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid text-center">
                <a class="navbar-brand" href="#">LOGO DP</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse z-3 text-center" id="navbarNav">
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


                <div class="container d-flex justify-content-center align-items-center">
                    <div class="one-quarter" id="switch">
                        <input v-model="store.checked" type="checkbox" class="checkbox" id="chk" />
                        <label class="label" for="chk">
                            <i class="fas fa-moon"></i>
                            <i class="fas fa-sun"></i>
                            <div class="ball"></div>
                        </label>
                    </div>
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
    .checkbox {
	opacity: 0;
	position: absolute;
}

.label {
	background-color: #111;
	border-radius: 50px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px;
	position: relative;
	height: 26px;
	width: 50px;
	transform: scale(1.5);
}

.label .ball {
	background-color: #fff;
	border-radius: 50%;
	position: absolute;
	top: 2px;
	left: 2px;
	height: 22px;
	width: 22px;
	transform: translateX(0px);
	transition: transform 0.2s linear;
}

.checkbox:checked + .label .ball {
	transform: translateX(24px);
}


.fa-moon {
	color: #f1c40f;
}

.fa-sun {
	color: #f39c12;
}
</style>