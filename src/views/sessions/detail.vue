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

        <a-breadcrumb-item href="">
          <router-link to="/sessions">
            <span>Sessions</span>
          </router-link>
          <a-breadcrumb-separator/>
        </a-breadcrumb-item>

        <a-breadcrumb-item>
          <strong>Sessions Detail</strong>
        </a-breadcrumb-item>

      </a-breadcrumb>
    </div>

    <div class="title-container">
      <span class="title">Session Detail</span>
      <span class="description">Include general descriptive information and tutor performance scores</span>
    </div>

    <div class="session-card">
      <div>
        <h2>ID:{{detailInfo.sessionId}}</h2>
      </div>

      <div class="card-info">
        <div class="card-info-left">
          <span>Tutor: {{detailInfo.tutor}}</span>
          <span>Student: {{detailInfo.student}}</span>
          <span>Subject: {{detailInfo.subject}}</span>
          <span>Date: {{detailInfo.date}}</span>
        </div>
        <div class="card-info-right">
          <strong style="color: #a9a9a9">Risk Areas: &nbsp</strong>
          <a-tag v-for="(item,index) in detailInfo.riskyAreas" :key="index">{{item}}</a-tag>
        </div>
      </div>

      <a-divider></a-divider>

      <div class="audio-player">
        <audio id="audio" src="path_to_your_audio_file.mp3"></audio>
        <a-button id="play-pause-button" shape="circle" icon="caret-right"/>

        <div class="time-info">
          <span id="current-time">00:00</span>
        </div>
        <div class="timeline">
          <input type="range" id="seek-bar" value="0">
        </div>
        <div class="time-info">
          <span id="duration">1:56:30</span>
        </div>
      </div>
    </div>

    <div>

      <div class="tab-container">
        <a-tabs default-active-key="1" @change="renderChart">

          <a-tab-pane key="1" tab="Session General" v-if="detailInfo.sessionGeneral">

            <a-card class="content-card" title="Ai-Generated Summary">
              <span>{{detailInfo.sessionGeneral.aiSummary}}</span>
            </a-card>

            <a-card class="content-card" title="Student's Desired Outcome">
              <span>{{detailInfo.sessionGeneral.desiredOutcome}}</span>
            </a-card>

            <a-card class="content-card" title="Learning Activities">
              <a-tabs type="card">
                <a-tab-pane key="1" tab="Activity 1">
                  {{detailInfo.sessionGeneral.activities[0]}}
                </a-tab-pane>
                <a-tab-pane key="2" tab="Activity 2">
                  {{detailInfo.sessionGeneral.activities[1]}}
                </a-tab-pane>
                <a-tab-pane key="3" tab="Activity 3">
                  {{detailInfo.sessionGeneral.activities[2]}}
                </a-tab-pane>
                <a-tab-pane key="4" tab="Activity 4">
                  {{detailInfo.sessionGeneral.activities[3]}}
                </a-tab-pane>
                <a-tab-pane key="5" tab="Activity 5">
                  {{detailInfo.sessionGeneral.activities[4]}}
                </a-tab-pane>
              </a-tabs>
            </a-card>

            <a-card title="Interaction Trend">
              <div>
                <div id="echartsDom" style="width: 100%;height: 400px"></div>
              </div>

              <div style="margin-top: 50px">
                <ul>
                  <li v-for="(item,index) in detailInfo.sessionGeneral.interactionTrend.analysis" :key="index">
                    <strong>{{item}}</strong>
                  </li>
                </ul>
              </div>
            </a-card>

          </a-tab-pane>


          <a-tab-pane key="2" tab="Tutor Performance" v-if="detailInfo.tutorPerformance">

            <a-card class="content-card" title="Ai-Generated Summary">
              <span>{{detailInfo.tutorPerformance.aiSummary}}</span>
            </a-card>

            <a-card class="content-card" title="Session Timeline">
              <div class="heatmap">
                <div v-for="(category, index) in detailInfo.tutorPerformance.sessionTimeline.categories" :key="index" class="row">
                  <div class="category">{{ category.name }}</div>
<!--                  <div v-for="(block, idx) in blocks" :key="idx" :class="getClass(category.values[idx])"></div>-->

                    <a-tooltip placement="top" v-for="(block, idx) in blocks" :key="idx" overlayClassName="draw_atooltip">
                      <template slot="title" v-if="category.values[idx]" >
                        <div>Score: {{category.score}}</div>
                        <div>Percentile: {{category.percentile}}%</div>
                      </template>
                      <div :class="getClass(category.values[idx])"></div>
                    </a-tooltip>
                </div>

                <div class="timeline-footer">
                  <div class="time-legend">Time(min):</div>
                  <div class="time">
                    <div v-for="time in detailInfo.tutorPerformance.sessionTimeline.time" :key="time">{{ time }}</div>
                  </div>
                </div>

                <div class="legend">
                  <div>Normal</div>
                  <div v-for="(item, idx) in 4" :key="idx" :class="`level-${idx}`" style="width: 20px;height: 20px;margin:0 4px 0 4px;border-radius: 4px"></div>
                  <div>Abnormal</div>
                </div>
              </div>
            </a-card>

            <div class="rating-container">
              <a-tabs default-active-key="1" tab-position="left" @change="renderChart">
                <a-tab-pane key="1" tab="Instructional Delivery">
                  <div class="rating-head">
                    <div>
                      <span class="rating-text">Rating: </span>
                      <strong class="rating-value">{{detailInfo.tutorPerformance.rating.instructionalDelivery.rating}}</strong>
                    </div>

                    <div class="rating-process-container">
                      <div class="rating-process-title">Ranking compared to all sessions</div>
                      <div class="rating-process">
                        <a-progress :percent="detailInfo.tutorPerformance.rating.instructionalDelivery.allSessionRanking" strokeColor="#91d5ff"/>
                      </div>
                    </div>

                    <div class="rating-process-container">
                      <div class="rating-process-title">Ranking compared to this tutor's all other sessions</div>
                      <a-progress :percent="detailInfo.tutorPerformance.rating.instructionalDelivery.tutorSessionRanking" strokeColor="#91d5ff"/>
                    </div>
                  </div>
                  <a-divider></a-divider>

                  <div class="rating-body">

                    <div>
                      <div>
                        <a-progress :width="200" strokeColor="#91d5ff" type="circle" :percent="detailInfo.tutorPerformance.rating.instructionalDelivery.correctExplanation">
                          <template #format="percent">
                            <p>
                              <strong>Explanation</strong>
                            </p>
                            <p>
                              <strong>Correctness</strong>
                            </p>
                            <div>{{ percent }} %</div>
                          </template>
                        </a-progress>
                      </div>
                      <div>
                        <div class="legend-container">
                          <div class="dot dot-light-blue"></div>
                          <span class="legend-text">Correct Explanation</span>
                          <span class="legend-value">{{detailInfo.tutorPerformance.rating.instructionalDelivery.correctExplanation}}%</span>
                        </div>
                        <div class="legend-container">
                          <div class="dot dot-light-grey"></div>
                          <span class="legend-text">Incorrect Explanation</span>
                          <span class="legend-value">{{detailInfo.tutorPerformance.rating.instructionalDelivery.incorrectExplanation}}%</span>
                        </div>
                      </div>
                    </div>


                    <div>
                      <div>
                        <a-progress :width="200" strokeColor="#91d5ff" type="circle" :percent="detailInfo.tutorPerformance.rating.instructionalDelivery.alignedExplanation">
                          <template #format="percent">
                            <p>
                              <strong>Explanation</strong>
                            </p>
                            <p>
                              <strong>Alignment</strong>
                            </p>
                            <div>{{ percent }} %</div>
                          </template>
                        </a-progress>
                      </div>
                      <div>
                        <div class="legend-container">
                          <div class="dot dot-light-blue"></div>
                          <span class="legend-text">Aligned Explanation</span>
                          <span class="legend-value">{{detailInfo.tutorPerformance.rating.instructionalDelivery.alignedExplanation}}%</span>
                        </div>
                        <div class="legend-container">
                          <div class="dot dot-light-grey"></div>
                          <span class="legend-text">Unaligned Explanation</span>
                          <span class="legend-value">{{detailInfo.tutorPerformance.rating.instructionalDelivery.unalignedExplanation}}%</span>
                        </div>
                      </div>
                    </div>


                    <div>
                      <div>
                        <a-progress :width="200" strokeColor="#91d5ff" type="circle" :percent="detailInfo.tutorPerformance.rating.instructionalDelivery.effectiveQuestions">
                          <template #format="percent">
                            <p>
                              <strong>Effective</strong>
                            </p>
                            <p>
                              <strong>Questions</strong>
                            </p>
                            <div>{{ percent }} %</div>
                          </template>
                        </a-progress>
                      </div>
                      <div>
                        <div class="legend-container">
                          <div class="dot dot-light-blue"></div>
                          <span class="legend-text">Effective Questions</span>
                          <span class="legend-value">{{detailInfo.tutorPerformance.rating.instructionalDelivery.effectiveQuestions}}%</span>
                        </div>
                        <div class="legend-container">
                          <div class="dot dot-light-grey"></div>
                          <span class="legend-text">Ineffective Questions</span>
                          <span class="legend-value">{{detailInfo.tutorPerformance.rating.instructionalDelivery.ineffectiveQuestions}}%</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </a-tab-pane>


                <a-tab-pane key="2" tab="Tech & Tool Usage">
                  <div class="rating-head">
                    <div>
                      <span class="rating-text">Rating: </span>
                      <strong class="rating-value">{{detailInfo.tutorPerformance.rating.techToolUsage.rating}}</strong>
                    </div>

                    <div class="rating-process-container">
                      <div class="rating-process-title">Ranking compared to all sessions</div>
                      <div class="rating-process">
                        <a-progress :percent="detailInfo.tutorPerformance.rating.techToolUsage.allSessionRanking" strokeColor="#91d5ff"/>
                      </div>
                    </div>

                    <div class="rating-process-container">
                      <div class="rating-process-title">Ranking compared to this tutor's all other sessions</div>
                      <a-progress :percent="detailInfo.tutorPerformance.rating.techToolUsage.tutorSessionRanking" strokeColor="#91d5ff"/>
                    </div>
                  </div>
                </a-tab-pane>



                <a-tab-pane key="3" tab="Feedback Quality">
                  <div class="rating-head">
                    <div>
                      <span class="rating-text">Rating: </span>
                      <strong class="rating-value">{{detailInfo.tutorPerformance.rating.feedbackQuality.rating}}</strong>
                    </div>

                    <div class="rating-process-container">
                      <div class="rating-process-title">Ranking compared to all sessions</div>
                      <div class="rating-process">
                        <a-progress :percent="detailInfo.tutorPerformance.rating.feedbackQuality.allSessionRanking" strokeColor="#91d5ff"/>
                      </div>
                    </div>

                    <div class="rating-process-container">
                      <div class="rating-process-title">Ranking compared to this tutor's all other sessions</div>
                      <a-progress :percent="detailInfo.tutorPerformance.rating.feedbackQuality.tutorSessionRanking" strokeColor="#91d5ff"/>
                    </div>
                  </div>
                  <a-divider></a-divider>

                  <div class="rating-body">

                    <div>
                      <div>
                        <circle-process :percent1="detailInfo.tutorPerformance.rating.feedbackQuality.negativeFeedback" percent1Color="#f5f5f5" :percent2="detailInfo.tutorPerformance.rating.feedbackQuality.neutralFeedback" percent2Color="#91d5ff" percent3Color="#40a9ff" :percent3="detailInfo.tutorPerformance.rating.feedbackQuality.positiveFeedback" :size="206">
                          <div style="margin-bottom: 12px">
                            <div style="font-size: 8px;font-weight: bold">Tone of <br/>Feedback</div>
                          </div>
                        </circle-process>
                      </div>
                      <div style="text-align: center">
                        <div class="legend-container">
                          <div class="dot dot-deep-blue"></div>
                          <span class="legend-text">Positive</span>
                          <span class="legend-value">{{detailInfo.tutorPerformance.rating.feedbackQuality.positiveFeedback}}%</span>
                        </div>
                        <div class="legend-container">
                          <div class="dot dot-light-blue"></div>
                          <span class="legend-text">Neutral</span>
                          <span class="legend-value">{{detailInfo.tutorPerformance.rating.feedbackQuality.neutralFeedback}}%</span>
                        </div>
                        <div class="legend-container">
                          <div class="dot dot-light-grey"></div>
                          <span class="legend-text">Negative</span>
                          <span class="legend-value">{{detailInfo.tutorPerformance.rating.feedbackQuality.negativeFeedback}}%</span>
                        </div>
                      </div>
                    </div>


                    <div>
                      <div>
                        <a-progress :width="200" strokeColor="#91d5ff" type="circle" :percent="detailInfo.tutorPerformance.rating.feedbackQuality.effectivePositive">
                          <template #format="percent">
                            <p>
                              <strong>Effective Positive</strong>
                            </p>
                            <p>
                              <strong>Feedback</strong>
                            </p>
                            <div>{{ percent }} %</div>
                          </template>
                        </a-progress>
                      </div>
                      <div>
                        <div class="legend-container">
                          <div class="dot dot-light-blue"></div>
                          <span class="legend-text">Effective Positive</span>
                          <span class="legend-value">{{detailInfo.tutorPerformance.rating.feedbackQuality.effectivePositive}}%</span>
                        </div>
                        <div class="legend-container">
                          <div class="dot dot-light-grey"></div>
                          <span class="legend-text">Ineffective Positive</span>
                          <span class="legend-value">{{detailInfo.tutorPerformance.rating.feedbackQuality.ineffectivePositive}}%</span>
                        </div>
                      </div>
                    </div>


                    <div>
                      <div>
                        <a-progress :width="200" strokeColor="#91d5ff" type="circle" :percent="detailInfo.tutorPerformance.rating.feedbackQuality.effectiveNegative">
                          <template #format="percent">
                            <p>
                              <strong>Effective Negative</strong>
                            </p>
                            <p>
                              <strong>Feedback</strong>
                            </p>
                            <div>{{ percent }} %</div>
                          </template>
                        </a-progress>
                      </div>
                      <div>
                        <div class="legend-container">
                          <div class="dot dot-light-blue"></div>
                          <span class="legend-text">Effective Negative</span>
                          <span class="legend-value">{{detailInfo.tutorPerformance.rating.feedbackQuality.effectiveNegative}}%</span>
                        </div>
                        <div class="legend-container">
                          <div class="dot dot-light-grey"></div>
                          <span class="legend-text">Ineffective Negative</span>
                          <span class="legend-value">{{detailInfo.tutorPerformance.rating.feedbackQuality.ineffectiveNegative}}%</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </a-tab-pane>


                <a-tab-pane key="4" tab="Social-Emotional Teaching">
                  <div class="rating-head">
                    <div>
                      <span class="rating-text">Rating: </span>
                      <strong class="rating-value">{{detailInfo.tutorPerformance.rating.socialEmotionalTeaching.rating}}</strong>
                    </div>

                    <div class="rating-process-container">
                      <div class="rating-process-title">Ranking compared to all sessions</div>
                      <div class="rating-process">
                        <a-progress :percent="detailInfo.tutorPerformance.rating.socialEmotionalTeaching.allSessionRanking" strokeColor="#91d5ff"/>
                      </div>
                    </div>

                    <div class="rating-process-container">
                      <div class="rating-process-title">Ranking compared to this tutor's all other sessions</div>
                      <a-progress :percent="detailInfo.tutorPerformance.rating.socialEmotionalTeaching.tutorSessionRanking" strokeColor="#91d5ff"/>
                    </div>
                  </div>
                  <a-divider></a-divider>

                  <div style="margin-top: 50px;">
                    <div id="echartsDom2" style="width: 100%;height: 400px"></div>
                    <div>
                      <strong>Exaples of extreme conditions:</strong>
                      <ul>
                        <li v-for="(item,index) in detailInfo.tutorPerformance.rating.socialEmotionalTeaching.analysis" :key="index">
                          <strong>{{item}}</strong>
                        </li>
                      </ul>
                    </div>

                  </div>
                </a-tab-pane>


              </a-tabs>
            </div>

          </a-tab-pane>

        </a-tabs>
      </div>

    </div>

  </div>
</template>

<script>

import * as echarts from 'echarts';
import { readJSON } from '@/utils/commonUtil'
import circleProcess from '@/components/circle-process'

export default {
  name: "sessionDetail",
  components: {
    circleProcess
  },
  data() {
    return {
      sessionId: null,
      detailInfo:{},
      myChart: null,
      myChart2: null,
      categories: [
        { name: 'Instruction Delivery', values: [0, 2, 1, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 2, 1, 0, 0, 3, 0] },
        { name: 'Tech & Tool Usage', values: [0, 0, 0, 0, 1, 0, 0, 2, 0, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 3, 0] },
        { name: 'Feedback Quality', values: [0, 1, 0, 0, 2, 0, 0, 2, 0, 0, 0, 1, 0, 3, 0, 0, 2, 0, 0, 2, 0] },
        { name: 'Social-Emotional Teaching', values: [0, 2, 0, 0, 1, 0, 0, 2, 0, 0, 1, 0, 0, 3, 0, 0, 2, 0, 0, 2, 0] }
      ],
      blocks: Array.from({ length: 21 }, (_, i) => i),
      times: Array.from({ length: 21 }, (_, i) => (i * 2).toString().padStart(2, '0'))
    }
  },

  methods: {
    loadData() {
      //let jsonPath = '/json/sessiondetail/sd.json';
      let jsonPath = `/json/sessiondetail/sd_${this.sessionId}.json`;
      readJSON(jsonPath).then(resp=>{
        this.detailInfo = resp.data;
        this.renderChart();
      })
    },
    initChart(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.myChart;
      let myChart2 = this.myChart;

      let echartsDom = document.getElementById('echartsDom');
      let echartsDom2 = document.getElementById('echartsDom2');

      if (echartsDom && !myChart){
        myChart = echarts.init(echartsDom);
      }
      if (echartsDom2 && !myChart2){
        myChart2 = echarts.init(echartsDom2);
      }

      if (myChart){
        // 绘制图表
        let legendData = ['Student', 'Tutor'];
        var option1 = {
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
              fontWeight: 'bold',
              fontSize: 16,
            },
            type: 'category',
            boundaryGap: false,
            data: this.detailInfo.sessionGeneral.interactionTrend.time
          },
          yAxis: {
            name: 'Number of Utterances',
            nameLocation: 'middle',
            nameTextStyle: {
              fontWeight: 'bold',
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
              data: this.detailInfo.sessionGeneral.interactionTrend.studentUtterances
            },
            {
              name: legendData[1],
              type: 'line',
              stack: 'Total',
              data: this.detailInfo.sessionGeneral.interactionTrend.tutorUtterances
            }
          ]
        };
        myChart.setOption(option1);
      }

      if (myChart2){
        // 绘制图表
        //let legendData = ['instructionalDelivery', 'techToolUsage','feedbackQuality','socialEmotionalTeaching'];
        let legendData = ['Student', 'Tutor'];
        var option2 = {
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
              fontWeight: 'bold',
              fontSize: 16,
            },
            type: 'category',
            boundaryGap: false,
            data: this.detailInfo.tutorPerformance.rating.socialEmotionalTeaching.time
          },
          yAxis: {
            name: 'Sum of sentiment',
            nameLocation: 'middle',
            nameTextStyle: {
              fontWeight: 'bold',
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
              data: this.detailInfo.tutorPerformance.rating.socialEmotionalTeaching.studentUtterances
            },
            {
              name: legendData[1],
              type: 'line',
              stack: 'Total',
              data: this.detailInfo.tutorPerformance.rating.socialEmotionalTeaching.tutorUtterances
            }
          ]
        };

        myChart2.setOption(option2);

      }

      // if (myChart2){
      //   // 绘制图表
      //   //option.legend = ['Instructional Delivery', 'Tech & Tool Usage','Feedback Quality','Social-Emotional Teaching'];
      //   option.legend = ['instructionalDelivery', 'techToolUsage','feedbackQuality','socialEmotionalTeaching'];
      //   //option.xAxis.data = this.detailInfo.tutorPerformance.rating.socialEmotionalTeaching.time;
      //   //option.series[0].data = this.detailInfo.sessionGeneral.interactionTrend.studentUtterances;
      //   //option.series[1].data = this.detailInfo.sessionGeneral.interactionTrend.tutorUtterances;
      //   option.series=[
      //     {
      //       name: 'instructionalDelivery',
      //       type: 'line',
      //       stack: 'Total',
      //       data: this.detailInfo.tutorPerformance.rating.socialEmotionalTeaching.instructionalDelivery
      //     },
      //     {
      //       name: 'techToolUsage',
      //       type: 'line',
      //       stack: 'Total',
      //       data: this.detailInfo.tutorPerformance.rating.socialEmotionalTeaching.techToolUsage
      //     },
      //     {
      //       name: 'feedbackQuality',
      //       type: 'line',
      //       stack: 'Total',
      //       data: this.detailInfo.tutorPerformance.rating.socialEmotionalTeaching.feedbackQuality
      //     },
      //     {
      //       name: 'socialEmotionalTeaching',
      //       type: 'line',
      //       stack: 'Total',
      //       data: this.detailInfo.tutorPerformance.rating.socialEmotionalTeaching.socialEmotionalTeaching
      //     }
      //   ]
      //   myChart2.setOption(option);
      // }


    },
    renderChart() {
      this.$nextTick(()=>{
        this.initChart();
      })
    },
    getClass(value) {
      return ['block', `level-${value}`];
    }

  },
  mounted() {
    //this.renderChart();
    this.sessionId = this.$route.query.sessionId;
    this.loadData();
  }
}
</script>

<style scoped>

.container {
  padding: 50px;
  /*max-width: 60%;*/
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

.session-card {
  padding: 50px;
  background-color: white;
}

.card-info {
  display: flex;
  justify-content: space-between;
}

.card-info-left > span {
  margin-right: 20px;
}


.audio-player {
  display: flex;
  align-items: center;
}

#play-pause-button {
  margin-top: 4px;
  margin-right: 10px;
  padding-bottom: 4px;
}

.timeline {
  margin: 0 10px;
  width: 100%;
}

#seek-bar {
  width: 100%;
  appearance: none;
  height: 5px;
  background: #91d5ff;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}

#seek-bar::-webkit-slider-thumb {
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  border: 3px solid #91d5ff;
}

#seek-bar::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #91d5ff;
  cursor: pointer;
}

.time-info {
  font-size: 14px;
  padding-top: 6px;
}

.tab-container {
  margin-top: 30px;
}

.content-card {
  margin-bottom: 20px;
  /*width: 500px;*/
  /*width: 100%;*/
  background-color: white;
}

.content-card-title{
  font-weight: bold;
}

.rating-container{
  width: 100%;
  background-color: white;
  padding: 20px 0 20px 0;
}

.rating-head {
  display: flex;
  justify-content: space-around;
}


.rating-text {
  font-weight: bold;
  font-size: 18px;
}

.rating-value {
  font-size: 22px;
}

.rating-process-container {

}

.rating-process-title {
  font-weight: bold;
  margin-bottom: 4px;
}


.rating-process {

}

.rating-body {
  display: flex;
  justify-content: space-around;
}


.legend-container{
  margin-top: 10px;
}

.dot {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: inline-block;
}

.dot-light-blue{
  background-color: #91d5ff;
}

.dot-deep-blue{
  background-color: #40a9ff;
}


.dot-light-grey{
  background-color: #f3f3f3;
}

.legend-text{
  font-weight: bold;
  margin: 0 8px 0 8px;
}

.legend-value{
  color: #a7a7a7;
  font-weight: bold;
}

.heatmap {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
}
.row {
  display: flex;
  align-items: center;
}
.category {
  width: 300px;
  margin-right: 10px;
  font-weight: bold;
}
.block {
  width: 60px;
  height: 38px;
  margin: 2px;
  border-radius: 4px;
}
.level-0 {
  background-color: #eceef6;
}
.level-1 {
  background-color: #bae7ff;
}
.level-2 {
  background-color: #69c0ff;
}
.level-3 {
  background-color: #1890ff;
}


.timeline-footer{
  display: flex;
  margin-top: 10px;
}
.time-legend{

}

.time {
  display: flex;
  margin-left: 130px;
  /*text-align: left;*/
}
.time div {
  width: 20px;
  /*background-color: #91d5ff;*/
  margin-right: 22px;
  color: #8c8c8c;
}
.legend {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.legend div:first-child{
  margin-right: 10px;
}

.legend div:last-child{
  margin-left: 10px;
}

.legend .normal {
  background-color: #f0f0f0;
  width: 50px;
  text-align: center;
}
.legend .abnormal {
  background-color: #4682b4;
  width: 70px;
  text-align: center;
}

</style>

<style>
  .draw_atooltip .ant-tooltip-inner {
    color: #fff !important;
    background-color: #1890ff !important;
  }

  .draw_atooltip .ant-tooltip-arrow::before {
    background-color: #1890ff;
  }
</style>