<template>
  <div class="main-container">
    <div class="card">
      <div class="layout-left">
        <div class="title">
          <div>Tutor</div>
          <div>Track</div>
        </div>
        <div class="navigator">

          <div class="nav-item" @click="clickNavItem('home')">
            <a-icon class="nav-item-icon" type="home" :class="{'nav-item-active':isActiveRoute('home')}"/>
            <span :class="{'nav-item-active':isActiveRoute('home')}">Home</span>
          </div>

          <div class="nav-item" @click="clickNavItem('sessions')">
            <a-icon class="nav-item-icon" type="database" :class="{'nav-item-active':isActiveRoute('sessions')}"/>
            <span :class="{'nav-item-active':isActiveRoute('sessions')}">Sessions</span>
          </div>

          <div class="nav-item" @click="clickNavItem('tutors')">
            <a-icon class="nav-item-icon" type="user" :class="{'nav-item-active':isActiveRoute('tutors')}"/>
            <span :class="{'nav-item-active':isActiveRoute('tutors')}">Tutors</span>
          </div>

        </div>
      </div>
      <div class="layout-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      activeRoute: '',
      rootRouteName:['home','sessions','tutors']
    }
  },
  methods: {
    isActiveRoute(routeName) {
      return this.activeRoute === routeName;
    },
    clickNavItem(routeName) {
      this.activeRoute = routeName;
      this.$router.push('/' + routeName);
    },
    setActiveRoute() {
      let routePathArr = this.$route.path.split('/');
      let routeNameArr = this.rootRouteName;

      routePathArr.forEach(item=>{
        if(routeNameArr.includes(item)){
          this.activeRoute = item;
        }
      })
    }
  },
  created(){
    this.setActiveRoute();
  },
  watch: {
    '$route': {
      handler: function (to, from) {
        let routePathArr = to.path.split('/');
        let routeNameArr = this.rootRouteName;
        routePathArr.forEach(item=>{
          if(routeNameArr.includes(item)){
            this.activeRoute = item;
          }
        })
      },
      deep: true
    }
  }
}
</script>

<style scoped>
  .main-container{
    padding: 0 10px 0 10px;
    background-color: black;
  }
  .card{
    min-height: 100vh;
    border-radius: 20px;
    background-color: #fafafa;
    height: 100%;
    display: flex;
  }
  .layout-left{
    /*flex: 1;*/
    /*min-width: 260px;*/
    min-width: 16%;
    border-right: 1px solid #d7d9e0;
    text-align: center;
  }
  .layout-right{
    flex: 5;
    /*max-width: 1200px;*/
    max-width: 80%;
  }

  .title{
     margin-top: 50px;
     font-size: 36px;
     font-weight: bold;
     color: #212123;
  }
  .title div:nth-child(2){
    margin-left: 40px;
    line-height: 26px;
  }

  .navigator{
    margin-top: 80px;
    padding-left: 60px;
  }

  .nav-item{
    margin-top: 36px;
    font-size: 20px;
    font-weight: bold;
    color: #9e9ea2;
    text-align: left;
  }

  .nav-item-icon{
    margin-right: 10px;
    font-weight: bold;
    color: #9e9ea2;
  }

  .nav-item:hover{
    cursor: pointer;
    color: #212123;
  }

  .nav-item:hover .nav-item-icon{
    cursor: pointer;
    color: #212123;
  }

  .nav-item-active{
    cursor: pointer;
    color: #212123;
  }



</style>