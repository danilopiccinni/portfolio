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
        background-color: #b1b1b1;


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
