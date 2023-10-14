<script>
  export default {
    data() {
      return {

      };
    },
  };
</script>

<template>
    <div>
      <div class="container">
        <div class="cards mb-5 pb-5 d-flex justify-content-around gap-5 flex-wrap">
          <div class="card col-12 col-md-4" @mousemove="handleMouseMove" @mouseleave="resetTransform">
              <div class="card-content">
                <img src="/img/1.jpeg" alt="">
                  <!-- <h2 class="card-title">Card Title</h2>
                  <p class="card-description">This is a futuristic 3D card.</p> -->
              </div>
          </div>
          <div class="card col-12 col-md-4" @mousemove="handleMouseMove" @mouseleave="resetTransform">
              <div class="card-content">
                  <!-- <h2 class="card-title">Card Title</h2>
                  <p class="card-description">This is a futuristic 3D card.</p> -->
              </div>
          </div>
          <div class="card col-12 col-md-4" @mousemove="handleMouseMove" @mouseleave="resetTransform">
              <div class="card-content">
                  <!-- <h2 class="card-title">Card Title</h2>
                  <p class="card-description">This is a futuristic 3D card.</p> -->
              </div>
          </div>
  
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>

  .card {
    max-width: 300px;
    height: 400px;
    // border-radius: 15px;
    background-color: #eeeeee;
    // border: 8px ridge #0E54FF;
    border: 150px ridge #1a3b96;

    -webkit-box-shadow: 0px 0px 17px 25px #1a3b96;
    -moz-box-shadow: 0px 0px 17px 25px #1a3b96;
    -o-box-shadow: 0px 0px 17px 25px #1a3b96;
    box-shadow: 0px 0px 17px 25px #1a3b96;



    transition: 0.5s;
    
    &:hover {
    // border: 150px ridge #0E54FF;
    border: 8px ridge #ffffff;

    -webkit-box-shadow: 0px 0px 17px 25px #ffffff;
    -moz-box-shadow: 0px 0px 17px 25px #ffffff;
    -o-box-shadow: 0px 0px 17px 25px #ffffff;
    box-shadow: 0px 0px 17px 25px #fdfdfd;

    }

    .card-content {
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

  }

</style>