<script>
    import { store } from '../store.js';
    export default {
        name: 'MonitorDisplay',

        data() {
            return {
                store,
                project : {},

                // monitor-display small (false)
                sizeDisplay : false,
            }
        },

        methods : {
            changeSizeDisplay() {
                if (this.sizeDisplay) {
                    this.sizeDisplay = false
                } else {
                    // monitor-display large (true)
                    this.sizeDisplay = true
                    window.scrollTo(0, 0);
                }
            }
        },  

        mounted() {
            this.project = this.store.selectedProject
        }

    }
</script>

<template>

        <div class="out d-flex flex-column align-items-center">
            <div  :class="sizeDisplay ? '' : 'small-display'" class="cont-iframe rounded">
                
                <iframe class="rounded" :src="project.link" frameborder="0"></iframe>
                
                <div v-if="project.link == ''" class="message p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
                    <span v-if="store.language == 'italian'">Ci dispiace, ma questo progetto è attualmente in fase di manutenzione</span>
                    <span v-if="store.language == 'german'">Es tut uns leid, aber dieses Projekt befindet sich derzeit in Wartung</span>
                    <span v-if="store.language == 'english'">We're sorry, but this project is currently undergoing maintenance</span>
                </div>
                
                <button :class="sizeDisplay ? 'btn-success' : 'btn-danger'" class="btn button" @click="changeSizeDisplay()"><i class="fa-solid fa-power-off"></i></button>
                <div class="hint-on mt-5 text-center">
                    <span v-if="store.language == 'italian'">Clicca sul pulsante d'accensione <i class="fa-solid fa-power-off px-1"></i><br>e scopri se il progetto è gia online!!</span>
                    <span v-if="store.language == 'german'">Klicke auf den Einschaltknopf <i class="fa-solid fa-power-off px-1"></i><br>und finde heraus, ob das Projekt bereits online ist!</span>
                    <span v-if="store.language == 'english'">Click the power button <i class="fa-solid fa-power-off px-1"></i><br>and find out if the project is already online!</span>
                </div>
            </div>



        </div>

</template>

<style scoped lang="scss">

.cont-iframe {
   width: 92vw;
   height: 80vh;
   margin-top: 90px;
   border: 1px solid black;
   background-color: white;
   position: relative;
   transition: all 1s;
   
   box-shadow: -10px -5px 5px 0px rgba(130, 130, 130, 0.71);
   -webkit-box-shadow: -10px -5px 5px 0px rgba(130, 130, 130, 0.71);
   -moz-box-shadow: -10px -5px 5px 0px rgba(130, 130, 130, 0.71);
   
    &::after {
        content: '';
        width: 5px;
        height: 30px;
        background-color: #d4d4d4;
        position: absolute;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 100%);
        border-right: 10px ridge #d4d4d4;
        transition: all 1s;

        z-index: -1;

        box-shadow: -10px -5px 5px 0px rgba(130, 130, 130, 0.71);
        -webkit-box-shadow: -10px -5px 5px 0px rgba(130, 130, 130, 0.71);
        -moz-box-shadow: -10px -5px 5px 0px rgba(130, 130, 130, 0.71);
    }

    &::before {
        content: '';
        width: 20vw;
        height: 20px;
        background-color: #d4d4d4;
        position: absolute;
        bottom: -31px;
        left: 50%;
        transform: translate(-50%, 100%);
        border: 5px ridge #d4d4d4;
        border-radius: 11px 12px 0px 0px;
        -webkit-border-radius: 11px 12px 0px 0px;
        -moz-border-radius: 11px 12px 0px 0px;
        transition: all 1s;

        z-index: -1;

        box-shadow: -10px -3px 5px 0px rgba(130, 130, 130, 0.71);
        -webkit-box-shadow: -10px -3px 5px 0px rgba(130, 130, 130, 0.71);
        -moz-box-shadow: -10px -3px 5px 0px rgba(130, 130, 130, 0.71);
    }
        
    iframe {
        width: 100%;
        height: 100%;
        border: 13px ridge #d4d4d4;
        transition: all 4s;
    }

    .message {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: jumper 10s linear;
        transition-delay: 2s;
    }

    .hint-on {

        opacity: 0;

        transition: 0.5s;
    }
}

.cont-iframe.small-display {
    width: 300px;
    height: 200px;
    border: 10px ridge #d4d4d4;
    background-image: url('/img/matrix-gif.gif');
    background-size: cover;
    background-repeat: no-repeat;

    & .hint-on {
        opacity: 1;

        transition: 4s;
    }
    .button {
        bottom: -40px;
    }
    
    & .message {
        opacity: 0;
        transition: 0.2s;
    }


    &::after {
        content: '';
        width: 5px;
        height: 30px;
        background-color: #d4d4d4;
        position: absolute;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 100%);
        border-right: 10px ridge #d4d4d4;
        transition: all 1s;
    }

    &::before {
        content: '';
        width: 80px;
        height: 10px;
        background-color: #d4d4d4;
        position: absolute;
        bottom: -31px;
        left: 50%;
        transform: translate(-50%, 100%);
        border: 5px ridge #d4d4d4;
        border-radius: 11px 12px 0px 0px;
        -webkit-border-radius: 11px 12px 0px 0px;
        -moz-border-radius: 11px 12px 0px 0px;
        transition: all 1s;
    }

    iframe {
        opacity: 0;
        transition: 1.3s;
    }
}

.out {
    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
    
        position: absolute;
        bottom: -30px;
        right: 5%;
        transform: translate(-50%, -50%);

        box-shadow: -5px -5px 5px 0px rgba(130, 130, 130, 0.71);
        -webkit-box-shadow: -5px -5px 5px 0px rgba(130, 130, 130, 0.71);
        -moz-box-shadow: -5px -5px 5px 0px rgba(130, 130, 130, 0.71);

        transition: all 1s;
    }
}
</style>