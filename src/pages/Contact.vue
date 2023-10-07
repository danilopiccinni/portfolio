<script>
import { store } from '../store'

    export default {
        name: 'Contact',

        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="container-fluid" :class="store.checked ? 'bg-light text-dark' : 'bg-dark text-light'">
        <!--Section: Contact v.2-->
        <section class="mb-4" >
        
        <!--Section heading-->
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
        <!--Section description-->
        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.</p>
        
        <div class="row flex-column align-items-center gap-5">
        
            <!--Grid column-->
            <div class="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
        
                    <!--Grid row-->
                    <div class="row">
        
                        <!--Grid column-->
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="name" name="name" class="form-control">
                                <label for="name" class="">Your name</label>
                            </div>
                        </div>
                        <!--Grid column-->
        
                        <!--Grid column-->
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="email" name="email" class="form-control">
                                <label for="email" class="">Your email</label>
                            </div>
                        </div>
                        <!--Grid column-->
        
                    </div>
                    <!--Grid row-->
        
                    <!--Grid row-->
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                                <input type="text" id="subject" name="subject" class="form-control">
                                <label for="subject" class="">Subject</label>
                            </div>
                        </div>
                    </div>
                    <!--Grid row-->
        
                    <!--Grid row-->
                    <div class="row">
        
                        <!--Grid column-->
                        <div class="col-md-12">
        
                            <div class="md-form">
                                <textarea type="text" id="message" name="message" rows="10" class="form-control md-textarea"></textarea>
                                <label for="message">Your message</label>
                            </div>
        
                        </div>
                    </div>
                    <!--Grid row-->
        
                </form>
        
                <div class="text-center text-md-left">
                    <a class="btn btn-secondary" onclick="document.getElementById('contact-form').submit();">Send</a>
                </div>
                <div class="status"></div>
            </div>
            <!--Grid column-->
        
            <!--Grid column-->
            <div class="d-flex flex-column align-items-center justify-content-between">
                <div class="d-flex flex-column align-items-center">
                    <i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Unterwilrain 50, 6014 Luzern, CH</p>
                </div>
                <div class="d-flex flex-column justifiy-content-center align-items-center">
                    <i class="fas fa-phone fa-2x"></i>
                    <p>+41 76 204 85 51</p>
                </div>
                <div class="d-flex flex-column justifiy-content-center align-items-center">
                    <i class="fas fa-envelope fa-2x"></i>
                    <p>danilopwebdev@gmail.com</p>
                </div>

            </div>
        
        </div>
        
        </section>

    </div>
</template>

<style scoped lang="scss">


</style>