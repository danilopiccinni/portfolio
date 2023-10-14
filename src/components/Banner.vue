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
                        <strong :class="store.checked ? 'text-light' : 'text-dark'">
                            100% AL
                            <br>
                            CASO TUO
                        </strong>
                    </div>
                    <div class="cont-dx col-4 d-none d-lg-block">
                        <strong>Creo per te il sito che fa al caso tuo</strong>
                        <em>Una collaborazione di idee studiate per te insieme a te</em>
                        <span>vuoi saperne di piu?</span>
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
