<template>
  <div>
    <a-modal v-model="modalVisible" title="Tutor Performance" @ok="handleOk" :footer="null" @close="handleClose" :maskClosable="false">

      <div class="form-item">

        <div class="form-item-title">
          <div>
            <a-tooltip overlayClassName="draw_atooltip">
              <template slot="title">
                Assesses how effectively the tutor delivers instructions, including explanations and questions to engage the student.
              </template>
              <strong>
                Instructional Delivery
              </strong>
            </a-tooltip>

          </div>
          <div>
            <span>0-10</span>
          </div>
        </div>
        <div class="icon-wrapper">
          <a-icon :style="{ color: preColor }" type="frown-o" />
          <a-slider range :min="0" :max="10" v-model="formData.instructionalDelivery" />
          <a-icon :style="{ color: nextColor }" type="smile-o" />
        </div>
      </div>

      <div class="form-item">
        <div class="form-item-title">
          <div>
            <a-tooltip overlayClassName="draw_atooltip">
              <template slot="title">
                Measures the duration of technical diffculties experienced by the tutor.
              </template>
              <strong>
                Technical Issues
              </strong>
            </a-tooltip>

          </div>
          <div>
            <span>0-10</span>
          </div>
        </div>
        <div class="icon-wrapper">
          <a-icon :style="{ color: preColor }" type="frown-o" />
          <a-slider range :min="0" :max="10" v-model="formData.technicalIssues" />
          <a-icon :style="{ color: nextColor }" type="smile-o" />
        </div>
      </div>

      <div class="form-item">
        <div class="form-item-title">
          <div>
            <a-tooltip overlayClassName="draw_atooltip">
              <template slot="title">
                Measures the tone and effectiveness of the feedback provided by the tutor, including both postive and negative feedback.
              </template>
              <strong>
                Feedback Quality
              </strong>
            </a-tooltip>
          </div>
          <div>
            <span>0-10</span>
          </div>
        </div>
        <div class="icon-wrapper">
          <a-icon :style="{ color: preColor }" type="frown-o" />
          <a-slider range :min="0" :max="10" v-model="formData.feedbackQuality" />
          <a-icon :style="{ color: nextColor }" type="smile-o" />
        </div>
      </div>

      <div class="form-item">
        <div class="form-item-title">
          <div>
            <a-tooltip overlayClassName="draw_atooltip">
              <template slot="title">
                Assesses how well the tutor supports and engages students emotionally by analyzing the tone and sentiment of interactions.
              </template>
              <strong>
                Socio-Emotional Teaching
              </strong>
            </a-tooltip>
          </div>
          <div>
            <span>0-10</span>
          </div>
        </div>
        <div class="icon-wrapper">
          <a-icon :style="{ color: preColor }" type="frown-o" />
          <a-slider range :min="0" :max="10" v-model="formData.socioEmotionalTeaching" />
          <a-icon :style="{ color: nextColor }" type="smile-o" />
        </div>
      </div>

      <div class="form-item">
          <h3>Interaction</h3>

          <div class="checkbox-item">
            <div>
              <a-checkbox v-model="formData.silentSession"></a-checkbox>
            </div>
            <div>
              <div>
                <span class="checkbox-title">Slient Sessions</span>
              </div>
              <div>
                <span class="checkbox-desc">The top 30th percentile of sessions with long duration of silence</span>
              </div>
            </div>
          </div>

        <div class="checkbox-item">
          <div>
            <a-checkbox v-model="formData.studentInactiveSession"></a-checkbox>
          </div>
          <div>
            <div>
              <span class="checkbox-title">Student Inactive Sessions</span>
            </div>
            <div>
              <span class="checkbox-desc">The top 30th percentile of sessions where students' talking is minimal</span>
            </div>
          </div>
        </div>

        <div class="form-item">
          <h3>Session Duration</h3>
          <div class="form-item-title">
            <div>
              <strong>
                Time Range
              </strong>
            </div>
            <div>
              <span>0 - 90 mins</span>
            </div>
          </div>
          <div>
            <a-slider range :min="0" :max="90"  v-model="formData.timeRange" />
          </div>
        </div>

      </div>

      <div class="footer">
        <a-button key="submit" type="primary" @click="handleOk" size="large">
          Submit
        </a-button>
      </div>

    </a-modal>
  </div>
</template>

<script>
export default {
  name: "filterModel",
  data() {
    return {
      modalVisible:false,
      lastFormData:{
        instructionalDelivery: [0,5],
        technicalIssues: [0,5],
        feedbackQuality:[0,5],
        socioEmotionalTeaching:[0,5],
        silentSession:true,
        studentInactiveSession:true,
        timeRange: [0,30]
      },
      formData:{},
      value: [0,5],
      min: 0,
      max: 20,
    }
  },
  methods: {
    init(obj){
      this.formData = Object.assign({},this.lastFormData);
      this.modalVisible = true;
    },
    handleOk() {
      this.$emit('ok',this.formData);
      this.lastFormData = Object.assign({},this.formData);
      this.modalVisible = false;
    },
    handleClose(){

    },
    handleChange(value) {
      this.value = value;
    },
  },
  computed: {
    preColor() {
      const { max, min, value } = this;
      const mid = ((max - min) / 2).toFixed(5);
      return value >= mid ? '' : 'rgba(0, 0, 0, .45)';
    },
    nextColor() {
      const { max, min, value } = this;
      const mid = ((max - min) / 2).toFixed(5);
      return value >= mid ? 'rgba(0, 0, 0, .45)' : '';
    },
  },

}
</script>

<style scoped>

    .form-item{
      margin-bottom: 26px;
    }

    .form-item-title{
      display: flex;
      justify-content: space-between
    }

    .icon-wrapper {
      position: relative;
      padding: 0px 30px;
    }

    .icon-wrapper .anticon {
      position: absolute;
      top: -2px;
      width: 16px;
      height: 16px;
      line-height: 1;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.25);
    }

    .icon-wrapper .anticon:first-child {
      left: 0;
    }

    .icon-wrapper .anticon:last-child {
      right: 0;
    }

    .checkbox-item{
      display: flex;
      margin-bottom: 16px;
    }

    .checkbox-item >div{
      margin-right: 10px;
    }

    .checkbox-title{
      font-weight: bold;
    }

    .checkbox-desc{
        font-size: 12px;
        color: #8f8f8f;
    }

    .footer{
      text-align: center;
    }
</style>