<template>
  <div class="container">
    <div>
      <a-breadcrumb separator="">

        <a-breadcrumb-item href="">
          <a-icon type="arrow-left" @click="$router.back()"/>
          <a-breadcrumb-separator>&nbsp</a-breadcrumb-separator>
        </a-breadcrumb-item>

        <a-breadcrumb-item href="">
          <router-link to="/home">
            <span>Home</span>
          </router-link>
          <a-breadcrumb-separator/>
        </a-breadcrumb-item>

        <a-breadcrumb-item>
          <router-link to="/tutors">
            <span>Tutors</span>
          </router-link>
          <a-breadcrumb-separator/>
        </a-breadcrumb-item>

        <a-breadcrumb-item>
          <strong>Tutor Tracking</strong>
        </a-breadcrumb-item>

      </a-breadcrumb>
    </div>

    <div class="title-container">
      <span class="title">Tutor Tracking</span>
      <span class="description">Include general descriptive information and tutor performance scores</span>
    </div>

    <div class="tutor-info-card">

      <div class="info-card-avatar">
<!--        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />-->
<!--        <a-avatar :size="89" icon="user" />-->
        <a-avatar v-if="detailInfo.gender === 1" :size="89" src="/imgs/teacher-male.png" />
        <a-avatar v-if="detailInfo.gender === 2" :size="89" src="/imgs/teacher-female.png" />
      </div>

      <div class="info-card-person">

        <div class="card-person-name">
            <h2 v-if="detailInfo.tutor" >{{detailInfo.tutor}}</h2>
        </div>
        <div class="card-person-desc">
            <span>Tutoring Experience: {{detailInfo.tutoringExperience}} years</span>
            <span v-if="detailInfo.subjects">Subject: {{detailInfo.subjects.join(', ')}}</span>
        </div>

      </div>
      <div class="info-card-teach">
        <div>
          <div class="teach-item">Sessions</div>
          <strong class="teach-item-value">{{detailInfo.sessions}}</strong>
        </div>

        <div>
          <div class="teach-item">Students</div>
          <strong class="teach-item-value">{{detailInfo.students}}</strong>
        </div>

      </div>
    </div>

    <div class="data-container">

      <div class="history-card">
        <h2>Tracking History</h2>
        <a-divider />

        <div>
          <strong>Student Name:</strong>
          <a-select default-value="Lucy" style="width: 120px;margin-left: 20px">
            <a-select-option value="lucy">
              Lucy
            </a-select-option>
          </a-select>
        </div>

        <div class="timeline">
          <a-timeline style="max-height: 400px; overflow-y: auto">

            <a-timeline-item v-for="(item,index) in detailInfo.trackingHistory" :key="index">
              <div>
                <router-link class="timeline-item-title" :to="'/sessions/sessionsDetail?sessionId='+item.sessionId">{{item.subject}}</router-link>
              </div>
              <div>{{item.date}}</div>
            </a-timeline-item>



          </a-timeline>
        </div>
      </div>
      <div class="trend-card">
        <h2>Score Trend</h2>
        <a-divider />
        <div style="padding: 30px">
          <div id="echartsDom" style="width: 100%; height: 400px;"></div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>

import * as echarts from 'echarts';
import {readJSON} from "@/utils/commonUtil";

export default {
  name: "tutorsDetail",
  data() {
    return {
      tutorId:null,
      detailInfo:{},
    };
  },
  mounted() {
    this.tutorId = this.$route.query.tutorId;
    this.loadData();
  },
  methods: {
    loadData() {
      //let jsonPath = '/json/tutordetail/td.json';
      let jsonPath = `./json/tutordetail/td_${this.tutorId}.json`;
      readJSON(jsonPath).then(resp=>{
        this.detailInfo = resp.data;
        this.initChart();
      })
    },
    initChart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echartsDom'));
      let legendData = ['Instructional Delivery', 'Tech & Tool Usage','Feedback Quality','Social-Emotional Teaching'];
      var option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: legendData
        },
        xAxis: {
          name: 'Time（Minutes）',
          nameLocation: 'middle',
          nameGap: 40,
          nameTextStyle: {
            fontWeight:'bold',
            fontSize: 16,
          },
          type: 'category',
          boundaryGap: false,
          data: this.detailInfo.scoreTrend.time
        },
        yAxis: {
          name: 'Number of Utterances',
          nameLocation: 'middle',
          nameTextStyle: {
            fontWeight:'bold',
            fontSize: 16,
          },
          nameGap: 50,
          type: 'value'
        },
        series: [
          {
            name: legendData[0],
            type: 'line',
            stack: 'Total',
            data: this.detailInfo.scoreTrend.instructionalDelivery
          },
          {
            name: legendData[1],
            type: 'line',
            stack: 'Total',
            data: this.detailInfo.scoreTrend.techToolUsage
          },
          {
            name: legendData[2],
            type: 'line',
            stack: 'Total',
            data: this.detailInfo.scoreTrend.feedbackQuality
          },
          {
            name: legendData[3],
            type: 'line',
            stack: 'Total',
            data: this.detailInfo.scoreTrend.socialEmotionalTeaching
          }
        ]
      };
      // 绘制图表
      myChart.setOption(option);
    }
  },
}
</script>

<style scoped>

.container {
  padding: 50px;
}

.title-container {
  margin-top: 30px;
  margin-bottom: 20px;
}

.title {
  font-weight: bold;
  font-size: 20px;
  margin-right: 14px;
}

.description {
  color: #898989;
  font-size: 16px;
}

.data-container{
  display: flex;
}

.tutor-info-card{
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 30px;
  margin-bottom: 20px;
}

.info-card-avatar{
  flex: 1;
  /*background-color: rebeccapurple;*/
  width: 100%;
  text-align: center;
}

.info-card-person{
  flex: 6;
  /*background-color: #00a65a;*/
  text-align: left;
  width: 100%;
}

.card-person-name{
  padding: 6px 0 6px 0;
}

.card-person-desc >span{
  color: #8c8c8c;
  margin-right: 30px;
}

.info-card-teach{
  display: flex;
  flex: 2;
  /*background-color: #123456;*/
  width: 100%;
  text-align: center;
  padding: 8px;
}

.info-card-teach >div{
  margin-right: 30px;
}

.teach-item{
  color: #8c8c8c;
  font-size: 18px;
}

.teach-item-value{
  font-size: 22px;
}

.history-card{
  flex: 2;
  background-color: white;
  margin-right: 20px;
  padding: 20px;
  min-width: 300px;
}

.history-card >div{
  margin-bottom: 20px;
}

.timeline{
  border:  1px solid #e8e8e8;
  padding: 30px;
}

.timeline-item-title {
  color: #212123;
  text-decoration: underline;
  font-weight: 500;
}

.trend-card{
  flex: 8;
  background-color: white;
  padding: 20px;
  /*width: 600px;*/
}

</style>