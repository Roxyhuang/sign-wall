<template>
    <div class="bg" id="register" >
        <img src="../../public/assets/img/bg2@2x.png" style="width: 100%;margin-top: 36px"/>
        <div class="container" v-if="!isLoading">
            <img class="user" :src="headImgUrl" alt="">
            <div class="wxname">{{wxName}}</div>
            <div class="formItem">
                <img src="../../public/assets/img/icon_name@2x.png" class="icon">
                <input class="name" v-model="name" placeholder="请输入您的大名" maxlength="5" />
            </div>
            <div class="formItem" @click="toggleActionSheet" style="margin-top: 10px">
                <img src="../../public/assets/img/icon_dept.@2x.png" class="icon">
                    <div class="dept" v-if="organizationText !== '请选择所在部门'">{{organizationText}}</div>
                    <div class="deptHolder" v-else>{{organizationText}}</div>

                <img class="arrow" src="../../public/assets/img/arrow@2x.png" />
            </div>

            <button class="confirm" @click="submitSign"></button>

        </div>
        <transition name="fade">
            <div class="modal" v-show="showModal" @click="toggleModal">
                <img src="../../public/assets/img/close@2x.png" class="close" />
                <img src="../../public/assets/img/success.png" class="success">
            </div>
        </transition>
        <actionsheet :actions="actions" v-model="actionShow"></actionsheet>

    </div>
</template>

<script>
  import axios from 'axios';
  import { Toast, MessageBox, Indicator,Picker, Actionsheet } from 'mint-ui';
  import getQueryString from '../utils/utils';
  import bg from '../../public/assets/img/bg1@2x.png'
  import defalut from '../../public/assets/img/weixin.png'
  import '../stlye/register.less';

  export default {
    components: {
      'mtPicker': Picker,
      Actionsheet,
    },
    data() {
      return {
        isLoading: false,
        code: '',
        state: '',
        accessToken: '',
        openId: '',
        organizationText: '请选择所在部门',
        organization: null,
        name: '',
        headImgUrl: defalut,
        wxName: '默认',
        show: false,
        actionShow: false,
        showModal: false,
        actions: [{name:'支付产品中心',method: () => this.selectActionSheet('支付产品中心','支付产品中心')}, {name: '技术研发中心', method:
            () => this.selectActionSheet('技术研发中心', '技术研发中心')},
          {name: '金融商城中心', method: () => this.selectActionSheet('金融商城中心', '金融商城中心')}],
        userInfo: {}
    };
    },
    created: function () {

      this.isLoading = true;
      Indicator.open({
        text: '加载中',
        spinnerType: 'fading-circle'
      });

      this.code = getQueryString('code');
      this.state = getQueryString('state');

      const url = 'https://ebd.99bill.com/mkt-express/wx/oauthInfo';
      const headers = {
        'Content-Type': 'application/json',
      };

      const data = {
        bindSource: 'H5test',
        code: '071dEWfF1Pkyz00FuziF1NvBfF1dEWfg',
      };

      const _self = this;

      axios({method: 'post', url: url ,headers: headers, data: data}).then((res)=> {
        console.log(res);
        const data = res.data;
        if(data.errCode === '00') {
          _self.openId = data.openid;
          _self.name = data.name;
          _self.headImgUrl = data.headimgurl;
          _self.wxName = data.nickname;
          _self.userInfo = data;
          _self.isLoading = false;
          Indicator.close();
        } else {
          Toast(`请求错误:${res.errMsg}`);
        }
      }).catch(function(error) {
        Toast(`请求失败:${error}`);
      });
    },
    methods: {
      toggleActionSheet() {
        this.actionShow = !this.actionShow
      },

      selectActionSheet(value,text) {
        this.organization = value;
        this.organizationText = text;
      },

      toggleModal() {
        this.showModal = !this.showModal;
      },

      submitSign() {
        if (!this.name) {
          Toast('请输入姓名...');
          return;
        }

        if (!this.organization) {
          Toast('请选择部门...');
          return;
        }
        MessageBox.confirm('信息都确认清楚了吗？').then(action => {
            if(action === 'confirm') {
              const url = 'https://ebd.99bill.com/mkt-express/mkt/signWall/save';
              const data = {headImgUrl: this.headImgUrl, name: this.name, openId: this.openId, organization:
              this.organization,signWallCode: this.state || 'test_wall_2', wxName: this.wxName};
              const headers = {
                'Content-Type': 'application/json',
              };
              let _self =this;
              axios({url:url, method: 'post', data: data,headers: headers}).then(
                function(res) {
                  const data = res.data;
                  if(data.errCode === '00') {
                    _self.showModal = true;
                    console.log('添加成功');
                  } else {
                    Toast(`请求错误:${res.errMsg}`);
                  }
                }
              ).catch(function (error) {
                Toast(`请求失败:${error}`);
              });
            } else {

            }

        });

      }
    }

  }
</script>
