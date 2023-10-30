<script>
import Footer from '../components/Footer.vue';
import emailjs from 'emailjs-com';
import {ref} from 'vue';
import { store } from '../store'

    export default {
        name: 'Contact',

        setup() {
            let form = ref(null);
            let inputFieldReset = ref(null);

            const sendMail = () => {
                emailjs.sendForm('Contact-Portfolio', 'e-mail-di-contatto', form.value, 'h2vNzYANbMDbOOC1n')
                .then(() => {

                    // Seleziona il modale per ID
                    const modal = document.querySelector("#sendModal");

                    // Rimuovi l'attributo "aria-hidden" per indicare che il modale è visibile
                    modal.classList.add("show");

                    // Imposta lo stile display su "block"
                    modal.style.display = "block";

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

                showModal : false,

            }
        },

        components : {
            Footer
        },

        methods: {

            closeModal() {
                    // Seleziona il modale per ID
                    const modal = document.querySelector("#sendModal");

                    // Rimuovi l'attributo "aria-hidden" per indicare che il modale è visibile
                    modal.classList.remove("show");

                    // Imposta lo stile display su "block"
                    modal.style.display = "none";

                    location.reload();

            },
        },


    }
</script>

<template>
    <div :style="{'--theme-gradient': store.selectedColor}" :class="store.checked ? 'bg-light text-dark' : 'bg-dark text-light'">
        <!--Section: Contact v.2-->
        <section class="section" >
        <!--Section heading-->
        <div v-if="store.language == 'italian'" class="container text-center">
            <h1 class="h1-responsive font-weight-bold my-4">Contattami</h1>
            <h6>Inviami un messaggio e saró felice di rispondere. Utilizza il modulo sottostante per inviare le tue domande, commenti o richieste.</h6>
        </div>
        <div v-if="store.language == 'german'" class="container text-center">
            <h1 class="h1-responsive font-weight-bold my-4">Kontaktiere mich</h1>
            <h6>Schick mir eine Nachricht, und ich antworte gerne. Verwende das Formular unten, um deine Fragen, Kommentare oder Anfragen zu senden.</h6>
        </div>
        <div v-if="store.language == 'english'" class="container text-center">
            <h1  class="h1-responsive font-weight-bold my-4">Contact me</h1>
            <h6>Send me a message, and I'll be happy to reply. Use the form below to submit your questions, comments, or requests.</h6>
        </div>


        <div class="d-flex cont container rounded  my-5">

            <div class="form-container col-12 col-lg-6">
     
                <form class="form container" ref="form" @submit.prevent="sendMail">
                    <div class="form-group">
                        <input v-if="store.language == 'italian'" class="col-12" name="from_name" placeholder="Il tuo nome" type="text" :value="inputFieldReset" required>
                        <input v-if="store.language == 'german'" class="col-12" name="from_name" placeholder="Dein Name" type="text" :value="inputFieldReset" required>
                        <input v-if="store.language == 'english'" class="col-12" name="from_name" placeholder="Your name" type="text" :value="inputFieldReset" required>
                        <div class="input-hint" v-if="store.language == 'italian'"><em>Inserisci il tuo nome completo.</em></div>
                        <div class="input-hint" v-if="store.language == 'german'"><em>Geben Sie Ihren vollständigen Namen ein.</em></div>
                        <div class="input-hint" v-if="store.language == 'english'"><em>Enter your full name.</em></div>
                    </div>
                    <div class="form-group">
                        <input v-if="store.language == 'italian'" class="col-12" name="email" placeholder="La tua E-Mail" type="email" :value="inputFieldReset" required>
                        <input v-if="store.language == 'german'" class="col-12" name="email" placeholder="Deine E-Mail" type="email" :value="inputFieldReset" required>
                        <input v-if="store.language == 'english'" class="col-12" name="email" placeholder="Your email" type="email" :value="inputFieldReset" required>
                        <div class="input-hint" v-if="store.language == 'italian'"><em>Inserisci un indirizzo e-mail valido.</em> </div>
                        <div class="input-hint" v-if="store.language == 'german'"><em>Geben Sie eine gültige E-Mail-Adresse ein.</em> </div>
                        <div class="input-hint" v-if="store.language == 'english'"><em>Enter a valid email address.</em> </div>
                    </div>
                    <div class="form-group">
                        <input v-if="store.language == 'italian'" class="col-12" name="subject" placeholder="Oggetto" type="text" :value="inputFieldReset" required>
                        <input v-if="store.language == 'german'" class="col-12" name="subject" placeholder="Betreff" type="text" :value="inputFieldReset" required>
                        <input v-if="store.language == 'english'" class="col-12" name="subject" placeholder="Subject" type="text" :value="inputFieldReset" required>
                        <div class="input-hint" v-if="store.language == 'italian'"><em>Indica brevemente l'argomento del tuo messaggio.</em> </div>
                        <div class="input-hint" v-if="store.language == 'german'"><em>Geben Sie kurz das Thema Ihrer Nachricht an.</em> </div>
                        <div class="input-hint" v-if="store.language == 'english'"><em>Briefly describe the subject of your message.</em> </div>

                    </div>
                    <div class="form-group">
                        <textarea v-if="store.language == 'italian'" class="text-area col-12" name="message" placeholder="Messaggio" type="text" :value="inputFieldReset" required></textarea>
                        <textarea v-if="store.language == 'german'" class="text-area col-12" name="message" placeholder="Nachricht" type="text" :value="inputFieldReset" required></textarea>
                        <textarea v-if="store.language == 'english'" class="text-area col-12" name="message" placeholder="Message" type="text" :value="inputFieldReset" required></textarea>
                        <div class="input-hint" v-if="store.language == 'italian'"><em>Scrivi qui il tuo messaggio. Sii chiaro e conciso. Descrivi dettagliatamente la tua richiesta o domanda.</em> </div>
                        <div class="input-hint" v-if="store.language == 'german'"><em>Schreiben Sie hier Ihre Nachricht. Seien Sie klar und präzise. Beschreiben Sie ausführlich Ihre Anfrage oder Frage.</em> </div>
                        <div class="input-hint" v-if="store.language == 'english'"><em>Write your message here. Be clear and concise. Describe your request or question in detail.</em> </div>
                    </div>
                    <div class="form-group">
                        <button v-if="store.language == 'italian'" class="submit btn" type="submit" name="send">Invia</button>
                        <button v-if="store.language == 'german'" class="submit btn" type="submit" name="send">Senden</button>
                        <button v-if="store.language == 'english'" class="submit btn" type="submit" name="send">Send</button>
                    </div>
                </form>

            </div>

            <div class="col-6 d-none d-lg-block">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <img class="logo" src="/img/logo.png" alt="">
                </div>
            </div>
        </div>

            <div class="container pb-5">
                <div v-if="store.language == 'italian'" class=" text-center">
                    <h6>Sarà un piacere per me ascoltarti e fornirti le risposte di cui hai bisogno.</h6>
                    <h6>Non vedo l'ora di sentirti!</h6>
                </div>
                <div v-if="store.language == 'german'" class=" text-center">
                    <h6>Es wird mir eine Freude sein, dir zuzuhören und die Antworten zu geben, die du benötigst.</h6>
                    <h6>Ich freue mich darauf, von dir zu hören!</h6>
                </div>
                <div v-if="store.language == 'english'" class=" text-center">
                    <h6>It will be my pleasure to listen to you and provide the answers you need.</h6>
                    <h6>I look forward to hearing from you!</h6>
                </div>
            </div>
        </section>

        <Footer></Footer>


        <!-- Modal -->
        <div class="modal fade" id="sendModal" tabindex="-1" aria-labelledby="sendModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-5 border-black"  :class="store.checked ? '' : 'bg-dark text-light border-white'">
                    <div class="modal-header">
                        <h1 v-if="store.language == 'italian'" class="modal-title fs-5" id="sendModalLabel">Grazie</h1>
                        <h1 v-if="store.language == 'german'" class="modal-title fs-5" id="sendModalLabel">Danke</h1>
                        <h1 v-if="store.language == 'english'" class="modal-title fs-5" id="sendModalLabel">Thank you</h1>
                        <button @click="closeModal" type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close" ></button>
                    </div>
                    <div class="modal-body">
                        <span v-if="store.language == 'italian'">Il tuo messaggio è stato inviato correttamente, ti contatterò al più presto!!</span>
                        <span v-if="store.language == 'german'">Ihre Nachricht wurde erfolgreich gesendet, ich werde mich bald bei Ihnen melden!!</span>
                        <span v-if="store.language == 'english'">Your message has been sent successfully, I will get back to you soon!!</span>
                    </div>
                    <div class="modal-footer">
                        <button v-if="store.language == 'italian'" @click="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                        <button v-if="store.language == 'german'" @click="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Schließen</button>
                        <button v-if="store.language == 'english'" @click="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">

.input-hint {
    padding-left: 8px;
    padding-top: 2px;
    font-size: 12px;
    color: white;
}

    .logo {
        width: 100%;
        aspect-ratio: 1/1;

    }

    .section {
        padding-top: 100px;
        padding-bottom: 5px;

        position: relative;
    }

    .modale {
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50% -50%);
    }

    p {
        font-size: 30px;
        padding: 10px;
        font-weight: bold;
        }

        .cont {
            background: linear-gradient(16deg, #020024 0%, #300979 35%, var(--theme-gradient) 100%);
        }

        .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
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
        width: auto;
        color: white;

        background: linear-gradient(16deg, rgba(2,0,36,1) 0%, rgba(48,9,121,1) 35%, var(--theme-gradient) 100%);

        &:hover {
            border: 1px solid white;

            border-color: white;
        }
        }

</style>