<script>
import emailjs from 'emailjs-com';
import {ref} from 'vue';
import { store } from '../store'

    export default {
        name: 'Contact',

        setup() {
            const form = ref(null);
            const inputFieldReset = ref(null);

            const sendMail = () => {
                emailjs.sendForm('Contact-Portfolio', 'e-mail-di-contatto', form.value, 'h2vNzYANbMDbOOC1n')
                .then(() => {
                    alert('inviato')

                }, (error) => {
                    alert('non inviato')
                }); 
            }

            return {
                form,
                inputFieldReset,
                sendMail
            }
        },

        data() {
            return {
                store,
            }
        },


    }
</script>

<template>
    <div class="container-fluid" :class="store.checked ? 'bg-light text-dark' : 'bg-dark text-light'">
        <!--Section: Contact v.2-->
        <section class="mb-4" >
        <!--Section heading-->
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
            <div class="form-container">
     
                <form class="form col-12 container" ref="form" @submit.prevent="sendMail">
                    <div class="form-group ">
                        <input class="col-12" name="from_name" placeholder="il tuo nome" type="text" :value="inputFieldReset" required> 
                    </div>
                    <div class="form-group">
                        <input class="col-12" name="email" placeholder="la tua mail" type="email" :value="inputFieldReset" required>
                    </div>
                    <div class="form-group">
                        <input class="col-12" name="subject" placeholder="oggetto" type="text" :value="inputFieldReset" required>
                    </div>
                    <div class="form-group">
                        <textarea class="text-area col-12" name="message" placeholder="messaggio" type="text" :value="inputFieldReset" required></textarea>
                    </div>
                    <div class="form-group">
                        <button class="submit" type="submit" name="send">Invia</button>
                    </div>
                </form>
            </div>
        
        </section>

    </div>
</template>

<style scoped lang="scss">

    .container-fluid {
        padding-top: 100px;
        padding-bottom: 5px;
    }

    p {
        font-size: 30px;
        padding: 10px;
        font-weight: bold;
        }

        .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 50px auto;
        border-radius: 10px;
        padding: 10px;
        background-color: #797979; 

        }

        .form-group {
        padding: 15px;
        }

        .form-group input {
        padding: 10px 10px 10px 10px;
        border: none;
        border-radius: 10px;

        outline: none;
        }

        .text-area {
        height: 150px;

        border: none;
        border-radius: 10px;
        padding: 10px;
        outline: none;
        }

        .form-group .submit {
        border: none;
        border-radius:5px;
        height: 40px;
        width: 70px ;
        }

</style>