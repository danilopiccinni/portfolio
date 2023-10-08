<script>
export default {
    name: 'Carousel3d',
    data () {
        return {

        }
    }
}
</script>

<template>
    <div>
        <div id="container">
            <div id="stage">
                <div id="shape" class="cube backfaces">
                    <div class="plane one">
                        <img src="../../public/img/icons8-css-480.png" alt="">
                    </div>
                    <div class="plane two">
                        <img src="../../public/img/icons8-html-5-480.png" alt="">
                    </div>
                    <div class="plane three">
                        <img src="../../public/img/icons8-js-480.png" alt="">
                    </div>
                    <div class="plane four">
                        <img src="../../public/img/icons8-laravel-48.png" alt="">
                    </div>
                    <div class="plane five">
                        <img src="../../public/img/icons8-php-480.png" alt="">
                    </div>
                    <div class="plane six">
                        <img src="../../public/img/icons8-vue-js-480.png" alt="">
                    </div>
                    <div class="plane seven">
                        <img src="../../public/img/icons8-sass-480.png" alt="">
                    </div>
                    <div class="plane eight">
                        <img src="../../public/img/icons8-mysql-480.png" alt="">
                    </div>
                    <div class="plane nine">
                        <img src="../../public/img/kisspng-github-social-media-computer-icons-logo-android-5b348490ab20f1.548940641530168464701.png" alt="">
                    </div>
                </div>
                <div class="plane ten">
                    <img src="../../public/img/icons8-visual-studio-code-2019-480.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

#container {

    height: 200px;
    background-color: transparent;

    -moz-border-radius: 12px;
    -webkit-border-radius: 12px;
    border-radius: 12px;
    -webkit-perspective: 800;
    -webkit-perspective-origin: 50% 225px;

    transform: translateY(-50%);

    #stage {
        -webkit-transition: -webkit-transform 2s;
        -webkit-transform-style: preserve-3d;



        #shape {
            position: relative;

            margin: 0 auto;
            height: 80px;
            width: 80px;
            -webkit-transform-style: preserve-3d;

            -webkit-animation: spin 15s infinite linear;

            rotate: 2 1 0 -30deg;
        }
    }
}

#shape.backfaces .plane {
    -webkit-backface-visibility: visible;
}

.cube>.one {
    -webkit-transform: translateZ(230px);
}

.cube>.two {
    -webkit-transform: rotateY(40deg) translateZ(230px);
}
.cube>.three {
    -webkit-transform: rotateY(80deg) translateZ(230px);
}
.cube>.four {
    -webkit-transform: rotateY(120deg) translateZ(230px);
}

.cube>.five {
    -webkit-transform: rotateY(160deg) translateZ(230px);
}

.cube>.six {
    -webkit-transform: rotateY(200deg) translateZ(230px);
}

.cube>.seven {
    -webkit-transform: rotateY(240deg) translateZ(230px);
}

.cube>.eight {
    -webkit-transform: rotateY(280deg) translateZ(230px);
}

.cube>.nine {
    -webkit-transform: rotateY(320deg) translateZ(230px);
}

.ten {
    transform: translateY(-100%);
}

.plane {
    position: absolute;
    height: 80px;
    width: 80px;
    // border: 1px solid #fff;
    text-align: center;
    font-family: Times,serif;
    font-size: 124pt;
    color: #000;
    // background-color: rgba(255,255,255,.6);
    -moz-border-radius: 12px;
    -webkit-border-radius: 12px;
    border-radius: 12px;
    -webkit-box-sizing: border-box;
    -webkit-transition: -webkit-transform 2s , opacity 2s;
    -webkit-backface-visibility: hidden;



    img {
        width: 100%;
    }
}

@media only screen and (max-width: 992px) {

    .cube>.one {
        -webkit-transform: translateZ(170px);
    }

    .cube>.two {
        -webkit-transform: rotateY(40deg) translateZ(170px);
    }
    .cube>.three {
        -webkit-transform: rotateY(80deg) translateZ(170px);
    }
    .cube>.four {
        -webkit-transform: rotateY(120deg) translateZ(170px);
    }

    .cube>.five {
        -webkit-transform: rotateY(160deg) translateZ(170px);
    }

    .cube>.six {
        -webkit-transform: rotateY(200deg) translateZ(170px);
    }

    .cube>.seven {
        -webkit-transform: rotateY(240deg) translateZ(170px);
    }

    .cube>.eight {
        -webkit-transform: rotateY(280deg) translateZ(170px);
    }

    .cube>.nine {
        -webkit-transform: rotateY(320deg) translateZ(170px);
    }
}


@keyframes spin {
    0% {
        -webkit-transform: rotateY(0);
    }
    
    100% {
        -webkit-transform: rotateY(-360deg);
    }

}
</style>