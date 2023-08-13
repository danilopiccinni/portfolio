<script>
    export default {
        name: 'Header',

        data() {
            return {

            }
        },
    }
</script>

<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">LOGO DP</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link" href="#">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'projects' }" class="nav-link" href="#">
                            Projects
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'contact' }" class="nav-link" href="#">
                            Contact
                        </router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li> -->
                </ul>
                </div>
            </div>
            </nav>
    </div>
</template>

<style scoped lang="scss">

</style>