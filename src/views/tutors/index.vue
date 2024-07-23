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
          <strong>Tutors</strong>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>

    <div class="condition-container">

      <div>
        <span class="title">Tutors</span>
        <span class="description">Customized filter to find the risky sessions</span>
      </div>

      <div>
        <a-input-search placeholder="Search data by tutor" v-model="queryParam.tutor" size="large" @search="handleSearch" allowClear>
          <a-button slot="enterButton">
            <a-icon type="search"></a-icon>
          </a-button>
        </a-input-search>
      </div>

    </div>

    <div class="table-container">
      <a-table :rowKey="(record, index) => { return index }" :columns="tableColumns" :data-source="tableData"
               :pagination="false" :scroll="{ y: 350 }">
        <a slot="action" slot-scope="text,record">
          <a-button type="default" size="small" @click="toDetail(record)">View Details</a-button>
        </a>
      </a-table>
    </div>

    <div class="footer-container">
      <div>
        <a-button class="footer-btn" type="default">Export</a-button>
        <a-button class="footer-btn" type="default">Upload</a-button>
      </div>
      <div>
        <a-pagination v-model="pageNo" :page-size="pageSize" :total="totalRecords" @change="getTableData" show-less-items />
      </div>
    </div>

  </div>
</template>

<script>

import {readJSON} from "@/utils/commonUtil";

export default {
  name: "tutors",
  data() {
    return {
      pageNo:1,
      pageSize: 15,
      totalRecords: 0,
      queryParam:{
        tutor:''
      },
      tableData: [],
      tableColumns: [
        {
          title: 'Tutor',
          dataIndex: 'tutor',
        },
        {
          title: 'Subjects',
          dataIndex: 'subjects',
          ellipsis: true,
          customRender:function (text,record) {
            return text.join(', ')
          }
        },
        {
          title: '',
          dataIndex: '',
          align: 'right',
          scopedSlots: {customRender: 'action'},
        },
      ],
    };
  },
  mounted(){
    this.getTableData();
  },
  methods: {
    getTableData(){
      readJSON(`./json/tutorList.json`).then(resp=>{
        this.tableData = [];

        //获取表格数据
        let tableData = resp.data;

        //根据搜索和过滤条件筛选数据
        tableData = this.filterData(tableData);

        //获取符合条件的数据总数
        this.totalRecords = tableData.length;

        //分页
        tableData = tableData.slice((this.pageNo-1)*this.pageSize,this.pageNo*this.pageSize);

        //赋值
        this.tableData = tableData;

      })
    },
    filterData(tableData){
      let tutorName = this.queryParam.tutor;
      let filterData = tableData;
      if(tutorName){
        filterData = filterData.filter(item=>item.tutor.toLowerCase().includes(tutorName.toLowerCase()));
      }
      return filterData;
    },
    handleSearch(){
      this.pageNo = 1;
      this.getTableData();
    },
    toDetail(row) {
      this.$router.push({
        path: '/tutors/tutorDetail',
        query: {
          tutorId: row.tutorId
        }
      })
    },

  }
}
</script>

<style scoped>
.container {
  padding: 50px;
}

.title {
  font-weight: bold;
  font-size: 20px;
  margin-right: 14px;
}

.condition-container {
  margin-top: 30px;
  margin-bottom: 20px;
}

.condition-container > div {
  margin-top: 20px;
}

.description {
  color: #898989;
  font-size: 16px;
}

.table-container {
  height: 400px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.footer-btn {
  margin-right: 20px;
}

</style>