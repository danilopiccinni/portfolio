<script>
import 'animate.css';
  export default {
    name : 'SectionFullScreen',

    data() {
      return {
        animationOn: false,
      }
    },

  }
</script>

<template>

    <div class="section-full-screen py-5" @mouseover="animationOn=true" @mouseleave="animationOn=false">

        <div class="d-flex justify-content-center flex-column flex-sm-row">
            <div class="col-4 column-1 column d-none d-lg-block">
                <img src="https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ" class="img-fluid" alt="...">
            </div>
            <div class="column-2  col-12  col-sm-4 text-end">
                <div>
                    <h3>Titolo delle liste</h3>
                </div>
                <div class="cont-list">
                    <ul>

                        <li :class="animationOn==true ? 'animate__animated animate__fadeInDownBig': ''">
                            <span>UN TITOLO IN GRASSETTO </span>
                            <span>un po di testo per prendere misure</span> 
                        </li>
                        <li :class="animationOn==true ? 'animate__animated animate__fadeInDown': '' ">
                            <span>UN TITOLO IN GRASSETTO </span>
                            <span>un po di testo per prendere misure</span> 
                        </li>
                        <li :class="animationOn==true ? 'animate__animated animate__fadeInLeft': '' ">
                            <span>UN TITOLO IN GRASSETTO </span>
                            <span>un po di testo per prendere misure</span> 
                        </li>
                        <li :class="animationOn==true ? 'animate__animated animate__fadeInUp': '' ">
                            <span>UN TITOLO IN GRASSETTO </span>
                            <span>un po di testo per prendere misure</span> 
                        </li>

                    </ul>
                </div>
            </div>
            <div class="column-3 col-12 col-sm-4 column">
                <div>
                    <h3>Perche scegliermi</h3>
                </div>
                <div class="cont-list" >
                    <ul  :class="animationOn==true ? 'animate__animated animate__fadeInRight ' : ''"  >
                        <li :class="animationOn==true ? 'animate__animated animate__fadeInLeft ' : ''" class="animate__animated animate__fadeInLeft">
                            <strong>1</strong>
                            <span>UN TITOLO IN GRASSETTO </span>
                            <span> elit. Odit, ea. Quidem voluptatem nesciunt porro molestias illum, accusamus quibusdam minus eos beatae architecto in doloremque dolorem fuga distinctio quisquam adipisci reprehenderit.</span> 
                        </li>
                        <li class="animate__animated animate__fadeInLeft">
                            <strong>2</strong>
                            <span>UN TITOLO IN GRASSETTO </span>
                            <span> elit. Odit, ea. Quidem voluptatem nesciunt porro molestias illum, accusamus quibusdam minus eos beatae architecto in doloremque dolorem fuga distinctio quisquam adipisci reprehenderit.</span> 
                        </li>
                        <li class="animate__animated animate__fadeInLeft">
                            <strong>3</strong>
                            <span>UN TITOLO IN GRASSETTO </span>
                            <span>. Odit, ea. Quidem voluptatem nesciunt porro molestias illum, accusamus quibusdam minus eos beatae architecto in doloremque dolorem fuga distinctio quisquam adipisci reprehenderit.</span> 
                        </li>
                        <li class="animate__animated animate__fadeInLeft">
                            <strong>4</strong>
                            <span>UN TITOLO IN GRASSETTO </span>
                            <span> elit. Odit, ea. Quidem voluptatem nesciunt porro molestias illum, accusamus quibusdam minus eos beatae architecto in doloremque dolorem fuga distinctio quisquam adipisci reprehenderit.</span> 
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    </div>
    
</template>

<style scoped lang="scss">
        .section-full-screen {
            background-color: #b1b1b1;
        // background-color: #f6f6f6;

        .column-1{
            overflow: hidden;
            img {
                height: 100%;
                object-fit: cover;
    
            }
        }

        .column-2 {
            border-right: 1px solid black;

            h3{
                padding-top: 15px;
                padding-right: 15px;
                margin-bottom: 50px;
            }

            .cont-list {
                height: 80%;
                ul {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 50px;

                    padding-right: 15px;
                    padding-bottom: 5px;
        
                    li {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        list-style-type: none;
                        overflow: hidden;
                        position: relative;

                        padding: 50px 10px;

                        &:hover {
                            cursor: pointer;
                        }



                        span{
                            z-index: 1;
                        }

                        &::after{
                            content: '';
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 100%;
                            right: 0;
                            background-color: #f56f61;
                        
                            z-index: 0;
                            transition: 1s;
                        }
                        &:hover::after{
                        left: 0%;
                        }

                    }
                }

            }
        }

        .column-3{
            border-left: 1px solid black;

            h3{
                padding-top: 15px;
                padding-left: 15px;
                margin-bottom: 50px;
            }

            .cont-list {
                height: 80%;
                ul {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 50px;

                    padding-left: 15px;
                    padding-right: 0;
                    
                    li {
                        display: flex;
                        flex-direction: column;
                        list-style-type: none;
                    }
                }
            }
        }
    }

</style>  
