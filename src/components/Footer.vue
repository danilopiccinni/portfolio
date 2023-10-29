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



            <div class="d-flex justify-content-center align-items-center gap-5">
                <a class="social-links px-2 text-reset" href="https://www.facebook.com/profile.php?id=61552710159527" target="_blank">
                    <i class="fab fa-facebook-f fs-3"></i>
                </a>
                <!-- <a class="social-links px-2 text-reset" href="">
                    <i class="fab fa-twitter fs-3"></i>
                </a> -->
                <!-- <a class="social-links px-2 text-reset" href="" target="_blank">
                    <i class="fab fa-google fs-3"></i>
                </a> -->
                <a class="social-links px-2 text-reset" href="https://www.instagram.com/danilopwebdev/" target="_blank">
                    <i class="fab fa-instagram fs-3"></i>
                </a>
                <a class="social-links px-2 text-reset" href="https://www.linkedin.com/in/danilo-piccinni-95219427a/" target="_blank">
                    <i class="fab fa-linkedin fs-3"></i>
                </a>
                <a class="social-links px-2 text-reset" href="https://github.com/danilopiccinni" target="_blank" >
                    <i class="fab fa-github fs-3"></i>
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
  
                        <h6 v-if="store.language == 'italian'" class="text-uppercase fw-bold mb-4">Contatto</h6>
                        <h6 v-if="store.language == 'german'" class="text-uppercase fw-bold mb-4">Contakt</h6>
                        <h6 v-if="store.language == 'english'" class="text-uppercase fw-bold mb-4">Contact</h6>
                        
                        <div v-if="store.language == 'italian'" class="mb-3">
                            <a href="https://www.google.com/maps?q=47.05027,8.27817" target="_blank" class="contact-links text-reset text-decoration-none d-flex align-items-center justify-content-center justify-content-md-start justify-content-md-start gap-2">
                                <i class="fas fa-home fs-3 p-1"></i><span> Unterwilrain 50, Lucerna 6014, CH</span>
                            </a>
                        </div>
                        <div v-if="store.language == 'german'" class="mb-3">
                            <a href="https://www.google.com/maps?q=47.05027,8.27817" target="_blank" class="contact-links text-reset text-decoration-none d-flex align-items-center justify-content-center justify-content-md-start justify-content-md-start gap-2">
                                <i class="fas fa-home fs-3  p-1"></i><span> Unterwilrain 50, Luzern 6014, CH</span>
                            </a>
                        </div>
                        <div v-if="store.language == 'english'" class="mb-3">
                            <a href="https://www.google.com/maps?q=47.05027,8.27817" target="_blank" class="contact-links text-reset text-decoration-none d-flex align-items-center justify-content-center justify-content-md-start justify-content-md-start gap-2">
                                <i class="fas fa-home fs-3 p-1"></i><span> Unterwilrain 50, Lucerne 6014, CH</span>
                            </a> 
                        </div>
                        <div class="mb-3">
                            <a href="mailto:danilopwebdev@gmail.com?subject=Web visit message:" target="_blank" class="contact-links text-reset text-decoration-none d-flex align-items-center justify-content-center justify-content-md-start justify-content-md-start gap-2">
                                <i class="fas fa-envelope fs-3 p-1"></i><span> danilopwebdev@gmail.com</span>
                            </a>
                        </div>
                        <div class="mb-3">
                            <a href="+412048551" target="_blank" class="contact-links text-reset text-decoration-none d-flex align-items-center justify-content-center justify-content-md-start justify-content-md-start gap-2">
                                <i class="fas fa-phone fs-3 p-1"></i><span> +41 76 204 85 51</span>
                            </a>
                        </div>
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

    .contact-links {

        &:hover span {
            color: blue;
        }
    }

    .social-links{

        &:hover i {
            color: #f56f61;
        }
    }

    .copyright {
        background: linear-gradient(16deg, #020024 0%, #300979 35%, var(--theme-gradient) 100%);
        color: white;
    }

    .social {
        background: linear-gradient(16deg, #020024 0%, #300979 35%, var(--theme-gradient) 100%);
    }
</style>