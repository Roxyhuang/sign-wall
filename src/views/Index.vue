<template>
    <div id="index">
        <div class="test">Index</div>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'index',
    data() {
      return {
        count: 0,
        list: {

        }
      };
    },

    created: () => {
        console.log(this.methods);
    },
    methods: {
      getMemberList: () => {
        console.log(axios);
      },
    }

  }
</script>
