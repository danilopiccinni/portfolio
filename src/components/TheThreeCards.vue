<script>
import { store } from '../store';
  export default {
    data() {
      return {
        store,
      };
    },
  };
</script>

<template>
    <div :style="{'--theme-gradient': store.selectedColor}">
      <div class="container">
        <div class="cards mb-md-5 pb-md-5 d-flex justify-content-around gap-5 flex-wrap">
          <div class="__card col-12 col-md-4" :class="store.checked ? 'dark-shadow' : ''">
            <div class="__content">
              <p class="heading">Card Hover Effect
              </p><p class="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                laboriosam at voluptas minus culpa deserunt delectus sapiente
                inventore pariatur
              </p>
              <button class="__btn">Read more</button>
            </div>
          </div>
          <div class="__card col-12 col-md-4" :class="store.checked ? 'dark-shadow' : ''">
            <div class="__content">
              <p class="heading">Card Hover Effect
              </p><p class="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                laboriosam at voluptas minus culpa deserunt delectus sapiente
                inventore pariatur
              </p>
              <button class="__btn">Read more</button>
            </div>
          </div>
          <div class="__card col-12 col-md-4" :class="store.checked ? 'dark-shadow' : ''">
            <div class="__content">
              <p class="heading">Card Hover Effect
              </p><p class="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                laboriosam at voluptas minus culpa deserunt delectus sapiente
                inventore pariatur
              </p>
              <button class="__btn">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>

.__card.dark-shadow {
  -webkit-box-shadow: 0px 0px 20px 0px #000000;
  -moz-box-shadow: 0px 0px 20px 0px #000000;
  -o-box-shadow: 0px 0px 20px 0px #000000;
  box-shadow: 0px 0px 20px 0px #000000;
}

.__card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;

  -webkit-box-shadow: 0px 0px 20px 0px #ffffff;
  -moz-box-shadow: 0px 0px 20px 0px #ffffff;
  -o-box-shadow: 0px 0px 20px 0px #ffffff;
  box-shadow: 0px 0px 20px 0px #ffffff;

  padding: 32px;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(16deg, #020024 0%, #300979 35%, var(--theme-gradient) 100%);
    z-index: 0;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  }
  
  &:hover::before {
    height: 100%;
  }
  
  &:hover {
    -webkit-box-shadow: 0px 0px 0px 0px #ffffff;
    -moz-box-shadow: 0px 0px 0px 0px #ffffff;
    -o-box-shadow: 0px 0px 0px 0px #ffffff;
    box-shadow: 0px 0px 0px 0px #ffffff;
  }
  
  
  .__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  
    z-index: 5;
    .heading {
      font-weight: 700;
      font-size: 32px;
    }
    .para {
      line-height: 1.5;
    }
    .__btn {
      color: #e8e8e8;
      text-decoration: none;
      padding: 10px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      background: linear-gradient(16deg, #020024 0%, #300979 35%, var(--theme-gradient) 100%);
      border-radius: 5px;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  
      &:hover {
        outline: 2px solid #e8e8e8;
        background: transparent;
        color: #e8e8e8;
      }
  
      &:active {
        box-shadow: none;
      }
    }
  }
}

.__card:hover .__btn {
    color: #212121;
    background: #f8f9fa;
  }

  .__card:hover .__content {
    color: #ffffff;

  }

</style>