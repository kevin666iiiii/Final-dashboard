<template>
  <div class="content-container">

    <div class="content-top">
      <h1 class="title">Welcome, Administrator!</h1>
      <a-button type="default"><a-icon type="upload"/>Click to Upload</a-button>
    </div>

    <div class="card">
        <div class="title-container">
          <div class="card-title">Session Filter</div>
          <div class="card-sub-title">See the latest problematic sessions</div>
        </div>
        <div>
          <a-button class="btn btn-sp" type="primary" size="large" @click="jumpPage('sessions')">Diagnose Sessions<a-icon type="right" /> </a-button>
        </div>
    </div>

    <div class="card">
      <div class="title-container">
        <div class="card-title">Tutor Performance Tracking</div>
        <div class="card-sub-title">Long-term tutor performance tracking</div>
      </div>
      <div>
        <a-button class="btn btn-detail" type="default" size="large" @click="jumpPage('tutors')"> View Details<a-icon type="right" /> </a-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      key: 'value'
    }
  },
  methods: {
    jumpPage(routeName) {
      //this.$router.push(`/${routeName}?nav=${routeName}`);
      this.$router.push(`/${routeName}`);
    }
  },
}
</script>

<style scoped>
  .content-container{
      padding: 80px;
  }

  .content-top{
    display: flex;
    justify-content: space-between;
    line-height: 8px;
  }


  .title{
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 100px;
  }
  .card{
    display: flex;
    justify-content: space-between;
    padding: 30px;
    background-color: white;
    border-radius: 14px;
    margin-top: 30px;
    border: 1px solid #e3e3e3;
  }

  .card-title{
    font-size: 20px;
    color: #1e1e1e;
    font-weight: bold;
  }

  .card-sub-title{
      color: #b3b3b3;
  }

  .btn{
    width: 250px;
    margin-top: 2px;
    font-weight: bold;
  }

  .btn-sp{
    /*background-color: #4d6dd1;*/
  }

  .btn-detail:hover{
    /*border-color: #ccc;*/
    /*color: #1e1e1e;*/
  }

  .btn-sp:hover{
    /*background-color:#1e1e1e;*/

  }

</style>