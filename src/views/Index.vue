<template>
    <div>
        <div class="test">{{count}}</div>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        count: 0,
        list: {

        }
      };
    },
    created: function () {
      console.log(this.getMemberList);
    },
    methods: {
      getMemberList () {
        console.log(axios);
      },
    }

  }
</script>
