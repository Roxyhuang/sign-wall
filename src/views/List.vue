<template>
    <div id="container">
    </div>
</template>

<script>
  import axios from 'axios';

  import getQueryString from '../utils/utils';
  import '../stlye/list.less';

  export default {
    components: {

    },
    data() {
      return {
        count: 0,
        list: {},
        code: '',
        state: '',
        show: false,
        table: [
          "Lv", "Livermorium", "(293)", 16, 7,
          "Ts", "Tennessine", "(294)", 17, 7,
          "Og", "Oganesson", "(294)", 18, 7,
          "aaaa", "Oganesson", "(294)", 10,11
        ]
      };
    },
    created: function () {

    },
    methods: {
      getMemberList() {

      },
    }

  }
</script>
