<template>
  <div class="custom-progress-circle">
    <svg :width="size" :height="size" viewBox="0 0 100 100" class="progress-svg">
      <!-- 背景圆 -->
      <circle
          class="progress-bg"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          :stroke-width="strokeWidth"
          stroke-linecap="round"
      />
      <!-- 分段圆 -->
      <circle
          class="progress-segment segment-1"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          :stroke-width="strokeWidth"
          :stroke="percent1Color"
          :stroke-dasharray="segment1 + ' 282'"
          :stroke-dashoffset="0"
          stroke-linecap="round"
      />
      <circle
          class="progress-segment segment-2"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          :stroke-width="strokeWidth"
          :stroke="percent2Color"
          :stroke-dasharray="segment2 + ' 282'"
          :stroke-dashoffset="dashOffset2"
          stroke-linecap="round"
      />
      <circle
          class="progress-segment segment-3"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          :stroke-width="strokeWidth"
          :stroke="percent3Color"
          :stroke-dasharray="segment3 + ' 282'"
          :stroke-dashoffset="dashOffset3"
          stroke-linecap="round"
      />
      <!-- 文字内容 -->
      <foreignObject x="0" y="0" width="100" height="100">
        <div class="progress-text">
          <slot></slot>
        </div>
      </foreignObject>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CustomProgressCircle',
  props: {
    percent1: {
      type: Number,
      required: true
    },
    percent1Color: {
      type: String,
      default: '#ff4d4f'
    },
    percent2: {
      type: Number,
      required: true
    },
    percent2Color: {
      type: String,
      default: '#faad14'
    },
    percent3: {
      type: Number,
      required: true
    },
    percent3Color: {
      type: String,
      default: '#52c41a'
    },
    size: {
      type: Number,
      default: 120
    },
    strokeWidth: {
      type: Number,
      default: 6
    }
  },
  computed: {
    segment1() {
      return (282 * this.percent1) / 100;
    },
    segment2() {
      return (282 * this.percent2) / 100;
    },
    segment3() {
      return (282 * this.percent3) / 100;
    },
    dashOffset2() {
      return -this.segment1;
    },
    dashOffset3() {
      return -(this.segment1 + this.segment2);
    }
  }
};
</script>

<style scoped>
.custom-progress-circle {
  display: inline-block;
  position: relative;
}
.progress-svg {
  transform: rotate(-90deg);
}
.progress-bg {
  stroke: #f0f0f0;
}
.progress-segment {
  transition: stroke-dasharray 0.6s ease 0s, stroke-dashoffset 0.6s ease 0s;
}
.progress-text {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: rotate(90deg);
}
</style>
