<script>
import { store } from '../store';
    export default {
        data() {
            return {
                store,
            }
        }
    }
</script>

<template>
    <div :style="{'--theme-gradient': store.selectedColor}">

        <footer class="text-center text-lg-start">

        <!-- Section: Social media -->
        <section class="social text-light d-flex flex-column align-items-center justify-content-center justify-content-lg-between gap-2 p-4 border-bottom">


            <div class="d-flex justify-content-center align-items-center d-none d-lg-block">
                <span v-if="store.language == 'italian'">Resta in contatto tramite i social network:</span>
                <span v-if="store.language == 'german'">Bleib über soziale Netzwerke in Verbindung:</span>
                <span v-if="store.language == 'english'">Get connected with us on social networks:</span>
            </div>



            <div class="d-flex justify-content-center align-items-center gap-3">
                <a href="" class=" text-reset">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="" class=" text-reset">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="" class=" text-reset">
                    <i class="fab fa-google"></i>
                </a>
                <a href="" class=" text-reset">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="" class=" text-reset">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="" class=" text-reset">
                    <i class="fab fa-github"></i>
                </a>
            </div>
 
        </section>
        <!-- Section: Social media -->

        <!-- Section: Links  -->
        <section class="">
            <div class="container text-center text-md-start mt-5">

                <div class="row mt-3">

                    <div class="col-md-5 col-lg-4  mx-auto mb-4">

                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i>Danilo Piccinni
                        </h6>

                        <p v-if="store.language == 'italian'">
                            Junior Full Stack Web Developer con la passione per l'apprendimento e l'ambizione di crescere nel campo della tecnologia
                        </p>
                        <p v-if="store.language == 'german'">
                            Junior Full Stack Webentwickler mit Leidenschaft fürs Lernen und dem Ehrgeiz, im Bereich der Technologie zu wachsen
                        </p>
                        <p v-if="store.language == 'english'">
                            Junior Full Stack Web Developer with a passion for learning and the ambition to grow in the field of technology
                        </p>
                    </div>



                    <div class="col-md-5 col-lg-4  mx-auto my-auto mb-4">
  
                        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                        <p v-if="store.language == 'italian'"><i class="fas fa-home me-3"></i> Lucerna, Lucerna 6014, CH</p>
                        <p v-if="store.language == 'german'"><i class="fas fa-home me-3"></i> Luzern, Luzern 6014, CH</p>
                        <p v-if="store.language == 'english'"><i class="fas fa-home me-3"></i> Lucerne, Lucerne 6014, CH</p>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                            danilopwebdev@gmail.com
                        </p>
                        <p><i class="fas fa-phone me-3"></i> +41 76 204 85 51</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Copyright -->
        <div class="copyright text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">

            <span v-if="store.language == 'italian'">© 2023 - Il mio Junior-Portfolio</span>
            <span v-if="store.language == 'german'">© 2023 - Meine Junior-Portfolio</span>
            <span v-if="store.language == 'english'">© 2023 - My Junior-Portfolio</span>
        </div>
        <!-- Copyright -->
        </footer>
    </div>
</template>

<style scoped lang="scss">

    .copyright {
        background: linear-gradient(16deg, #020024 0%, #300979 35%, var(--theme-gradient) 100%);
        color: white;
    }

    .social {
        background: linear-gradient(16deg, #020024 0%, #300979 35%, var(--theme-gradient) 100%);
    }
</style>