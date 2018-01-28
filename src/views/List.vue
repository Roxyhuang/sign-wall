<template>
    <div class="bg">
        <div class="container">
            <swiper :options="swiperOption">
                <swiper-slide>
                    <div class="item">
                        <img src="../../public/assets/img/test.jpeg" />
                        <div class="team">支付产品</div>
                        <div class="name">name</div>
                    </div>
                    <div class="item">
                        <img src="../../public/assets/img/test.jpeg" />
                        <div class="name">name</div>
                    </div>
                    <div class="item">
                        <img src="../../public/assets/img/test.jpeg" />
                        <div class="name">name</div>
                    </div>
                    <div class="item">
                        <img src="../../public/assets/img/test.jpeg" />
                        <div class="name">name</div>
                    </div>
                    <div class="item">
                        <img src="../../public/assets/img/test.jpeg" />
                        <div class="name">name</div>
                    </div>
                    <div class="item">
                        <img src="../../public/assets/img/test.jpeg" />
                        <div class="name">name</div>
                    </div>
                </swiper-slide>
                <!-- Optional controls -->
            </swiper>
        </div>

    </div>
</template>

<script>
  import axios from 'axios';
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { ModelObj } from 'vue-3d-model'
  import getQueryString from '../utils/utils';
  import 'swiper/dist/css/swiper.css'
  import '../stlye/list.less';

  export default {
    components: {
      swiper,
      swiperSlide
      ModelObj,
    },
    data() {
      return {
        swiperOption: {
//          slidesPerView: 2,
//          slidesPerColumn: 6,
//          spaceBetween: 10,
          loop: true,
//          autoplay: {
//            delay: 2500,
//            disableOnInteraction: false
//          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
        },
        count: 0,
        list: {},
        code: '',
        state: '',
        show: false,
      };
    },
    created: function () {
      this.code = getQueryString('code');
      this.state = getQueryString('state');
    },
    methods: {
      getMemberList() {
        console.log(this.show);
        this.show = !this.show;
      },
    }

  }
</script>
