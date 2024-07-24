<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  .draw_atooltip .ant-tooltip-inner {
    color: #fff !important;
    background-color: #1890ff !important;
  }

  .draw_atooltip .ant-tooltip-arrow::before {
    background-color: #1890ff;
  }
</style>
