<script>
import { store } from '../store'

  export default {
    name : 'Banner',

    data() {
      return {
        store
      }
    },

  }
</script>

<template>
        <div class="banner  my-5 d-none d-md-block">
            <div class="__container">
                <div class="row ps-5 ps-sm-0">
                    <div class="cont-sx col-8">
                        <strong v-if="store.language == 'italian'" :class="store.checked ? 'text-light' : 'text-dark'">
                            100% AL
                            <br>
                            CASO TUO
                        </strong>
                        <strong v-if="store.language == 'german'" :class="store.checked ? 'text-light' : 'text-dark'">
                            100% RICHTIG
                            <br>
                            FÜR DICH
                        </strong>
                        <strong v-if="store.language == 'english'" :class="store.checked ? 'text-light' : 'text-dark'">
                            100% RIGHT
                            <br>
                            FOR YOU
                        </strong>
                    </div>
                    <div class="cont-dx col-4 d-none d-lg-block pt-3">
                        <span v-if="store.language == 'italian'">Se stai cercando un giovane talento nel mondo del design e dello sviluppo che porta freschezza, creatività e una passione per l'apprendimento costante al tuo progetto, sei nel posto giusto</span>
                        <span v-if="store.language == 'german'">Wenn du nach einem jungen Talent in der Welt des Designs und der Entwicklung suchst, das Frische, Kreativität und eine Leidenschaft für kontinuierliches Lernen in dein Projekt bringt, bist du hier genau richtig</span>
                        <span v-if="store.language == 'english'">If you are looking for a young talent in the world of design and development who brings freshness, creativity, and a passion for continuous learning to your project, you are in the right place.</span>
                    </div>
                </div>
                
            </div>

        </div>
</template>

<style scoped lang="scss">
      .banner {
        background: linear-gradient(16deg, rgba(2,0,36,1) 0%, rgba(48,9,121,1) 35%, rgba(0,212,255,1) 100%);


        .__container {

            padding: 0 5%;


            .row {
                display: flex;
                justify-content: space-between;
        
                .cont-sx {
                    translate: 0px 7px;
        
                    strong {
                        line-height: 0.50;
                        font-size: 100px;
                        font-size: 200px;
                        // margin: -7px 0 -4px 0;
                    }
                }
                .cont-dx{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
        
                    color: white;
        
                    *{
                        text-align: end;
                    }
                }
            }
        }

    }

</style>  
