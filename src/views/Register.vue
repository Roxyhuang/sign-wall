<template>
    <div class="bg" id="register">
        <div class="container" >
            <img class="user" src="../../public/assets/img/test.jpeg" alt="微信头像">
            <input class="name" value="微信用户"/>
            <mt-picker :slots="slots" @change="onValuesChange" class="team"></mt-picker>
            <mt-button class="confirm" size="large" @click="submitSign">确认签到</mt-button>
        </div>

    </div>
</template>

<script>
  import axios from 'axios';
  import { Cell, Checklist,Field, Button, MessageBox, Indicator,Picker } from 'mint-ui';
  import getQueryString from '../utils/utils';
  import '../stlye/register.less';

  export default {
    components: {
      Cell,
      Field,
      'mtButton': Button,
      'mtCell': Cell,
      'mtPicker': Picker,
    },
    data() {
      return {
        count: 0,
        list: {},
        code: '',
        state: '',
        show: false,
        slots: [
          {
            flex: 1,
            values: ['支付产品', '金融','产品'],
            className: 'slot1',
            textAlign: 'center'
          }
        ]
      };
    },
    created: function () {
//      Indicator.open({
//        text: '加载中',
//        spinnerType: 'fading-circle'
//      });
      this.code = getQueryString('code');
      this.state = getQueryString('state');
    },
    methods: {
      onValuesChange() {

      },

      submitSign() {
        MessageBox.confirm('信息都确认清楚了吗').then(action => {
            console.log(213);
        });
        const url = '';
        const params = '';
        axios().then().catch();
      }
    }

  }
</script>
