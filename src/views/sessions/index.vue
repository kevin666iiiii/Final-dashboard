<template>
  <div class="container">
    <div>
      <a-breadcrumb separator="" >

        <a-breadcrumb-item href="">
          <a-icon type="arrow-left" @click="$router.back()"/>
          <a-breadcrumb-separator>&nbsp</a-breadcrumb-separator>
        </a-breadcrumb-item>

        <a-breadcrumb-item>
          <router-link to="/home">
            <span>Home</span>
          </router-link>
          <a-breadcrumb-separator />
        </a-breadcrumb-item>

        <a-breadcrumb-item>
          <strong>Sessions</strong>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>

    <div class="condition-container">

      <div>
        <span class="title">Sessions</span>
        <span class="description">Customized filter to find the risky sessions</span>
      </div>

      <div>
        <div>
          <a-input-search placeholder="Search sessions by tutor" size="large" v-model="queryParam.tutor" @search="handleSearch" allowClear>
            <a-button slot="enterButton">
              <a-icon type="search"></a-icon>
            </a-button>
          </a-input-search>
        </div>

        <div class="filter-container">
          <div>
            <a-button class="btn-filter" type="primary" icon="filter" size="large" @click="showFilterModal">
              Filter
            </a-button>
          </div>
          <div class="condition-item">

            <a-tag v-if="dataFilter.instructionalDelivery" class="tag" closable @close="onDataFilterItemRemove('instructionalDelivery')" size="large">
              Instructional Delivery: {{dataFilter.instructionalDelivery.join('-')}}
            </a-tag>

            <a-tag v-if="dataFilter.technicalIssues" class="tag" closable @close="onDataFilterItemRemove('technicalIssues')" size="large">
              Technical Issues: {{dataFilter.technicalIssues.join('-')}}
            </a-tag>

            <a-tag v-if="dataFilter.feedbackQuality" class="tag" closable @close="onDataFilterItemRemove('feedbackQuality')" size="large">
              Feedback Quality: {{dataFilter.feedbackQuality.join('-')}}
            </a-tag>

            <a-tag v-if="dataFilter.socioEmotionalTeaching" class="tag" closable @close="onDataFilterItemRemove('socioEmotionalTeaching')" size="large">
              Socio-Emotional Teaching: {{dataFilter.socioEmotionalTeaching.join('-')}}
            </a-tag>

            <a-tag v-if="dataFilter.silentSession" class="tag" closable @close="onDataFilterItemRemove('silentSession')" size="large">
              Silent Session
            </a-tag>

            <a-tag v-if="dataFilter.studentInactiveSession" class="tag" closable @close="onDataFilterItemRemove('studentInactiveSession')" size="large">
              Student Inactive Session
            </a-tag>

            <a-tag v-if="dataFilter.timeRange" class="tag" closable @close="onDataFilterItemRemove('timeRange')" size="large">
              Short Session
            </a-tag>

          </div>
        </div>

      </div>

    </div>

    <div class="table-container">
      <a-table :rowKey="(record, index) => { return index }" :columns="tableColumns" :data-source="tableData" :pagination="false" :scroll="{ y: 350 }">


        <template slot="tutor" slot-scope="text,record">
          <router-link :to="'/tutors/tutorDetail?id='+record.tutorId" class="tutor-link">
            <span>{{text}}</span>
          </router-link>
        </template>

        <span slot="riskyAreasTh">
          <a-tooltip>
            <template slot="title">
              Tooltip will show when mouse enter.
            </template>
            <span>RiskyAreas</span>
          </a-tooltip>
        </span>

        <template slot="riskyAreas" slot-scope="text,record">
          <div v-if="record.riskyAreas != null && record.riskyAreas.length > 0">
            <a-tag style="margin: 4px 2px 4px 2px" v-for="(item,index) in record.riskyAreas" :key="index">
              {{item}}
            </a-tag>
          </div>

          <div v-else>
              -
          </div>
        </template>

        <a slot="action" slot-scope="text,record">
          <a-button type="default" size="small" @click="toDetail(record)">View</a-button>
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

    <filter-modal ref="filterModal" @ok="onDataFilterChange"></filter-modal>

  </div>
</template>

<script>

import filterModal from "@/views/sessions/filterModal";
import Home from "@/views/home";
import { readJSON } from '@/utils/commonUtil'

export default {
  name: "sessions",
  components:{Home, filterModal},
  data() {
    return {
      pageNo:1,
      pageSize: 15,
      totalRecords: 0,
      queryParam:{
        tutor:''
      },
      dataFilter:{
        // instructionalDelivery: [0,5],
        // technicalIssues: [0,5],
        // feedbackQuality:[0,5],
        // socioEmotionalTeaching:[0,5],
        // silentSession:true,
        // studentInactiveSession:true,
        // timeRange: [0,30]
      },
      tableData: [],
      tableColumns:[
        {
          title: 'Session ID',
          dataIndex: 'sessionId',
          width: '15%',
          ellipsis: true,
          align:'center'
        },
        {
          title: 'Tutor',
          dataIndex: 'tutor',
          align:'center',
          scopedSlots: { customRender: 'tutor' },
        },
        {
          title: 'Subject',
          dataIndex: 'subject',
          ellipsis: true,
          align:'center'
        },
        {
          title: 'Date',
          dataIndex: 'date',
          align:'center'
        },
        {
          title: 'Duration（min）',
          dataIndex: 'duration',
          align:'center',
        },
        {
          //title: 'Risky Areas',
          width: '35%',
          align:'center',
          slots: { title: 'riskyAreasTh' },
          scopedSlots: { customRender: 'riskyAreas' },
        },
        {
          title: '',
          dataIndex: '',
          align:'right',
          scopedSlots: { customRender: 'action' },
        },
      ],
    };
  },
  mounted(){
    this.getTableData();
  },
  methods: {
    getTableData(){
      readJSON(`./json/sessionList.json`).then(resp=>{
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
      let dataFilter = this.dataFilter;

      let finalFilterData = [];

      for (let i = 0; i <filterData.length; i++) {

        let item = filterData[i];

        if (dataFilter.instructionalDelivery){
          let itemData = item.instructionalDelivery;
          let min = dataFilter.instructionalDelivery[0];
          let max = dataFilter.instructionalDelivery[1];
          let isEligible =  itemData >= min && itemData <= max;
          if (!isEligible) continue;
        }

        if (dataFilter.technicalIssues){
          let itemData = item.technicalIssues;
          let min = dataFilter.technicalIssues[0];
          let max = dataFilter.technicalIssues[1];
          let isEligible =  itemData >= min && itemData <= max;
          if (!isEligible) continue;
        }

        if (dataFilter.feedbackQuality){
          let itemData = item.feedbackQuality;
          let min = dataFilter.feedbackQuality[0];
          let max = dataFilter.feedbackQuality[1];
          let isEligible =  itemData >= min && itemData <= max;
          if (!isEligible) continue;
        }

        if (dataFilter.socioEmotionalTeaching){
          let itemData = item.socioEmotionalTeaching;
          let min = dataFilter.socioEmotionalTeaching[0];
          let max = dataFilter.socioEmotionalTeaching[1];
          let isEligible =  itemData >= min && itemData <= max;
          if (!isEligible) continue;
        }

        if (dataFilter.silentSession){
          let itemData = item.silentSessionPercent;
          let isEligible = itemData >= 30;
          if (!isEligible) continue;
        }

        if (dataFilter.studentInactiveSession){
          let itemData = item.inactiveSessionPercent;
          let isEligible = itemData >= 30;
          if (!isEligible) continue;
        }

        if (dataFilter.timeRange){
          let itemData = item.duration;
          let min = dataFilter.timeRange[0];
          let max = dataFilter.timeRange[1];
          let isEligible =  itemData >= min && itemData <= max;
          if (!isEligible) continue;
        }

        finalFilterData.push(item);
      }

      return finalFilterData;
    },

    handleSearch(){
      this.pageNo = 1;
      this.getTableData();
    },
    showFilterModal(){
      this.$refs.filterModal.init({});
    },
    onDataFilterItemRemove(itemName) {
        this.dataFilter[itemName] = null;
        this.pageNo = 1;
        this.getTableData();
    },
    onDataFilterChange(obj) {
      this.dataFilter = obj;
      this.pageNo = 1;
      this.getTableData();
    },
    toDetail(row){
      this.$router.push({
        path: '/sessions/sessionsDetail',
        query: {
          sessionId: row.sessionId
        }
      })
    }
  },
}
</script>

<style scoped>
.container{
  padding: 50px;
}
.title{
  font-weight: bold;
  font-size: 20px;
  margin-right: 14px;
}

.condition-container{
  margin-top: 30px;
  margin-bottom: 10px;
}

.filter-container{
  display: flex;
  margin-top: 20px;
}

.btn-filter{
  margin-right: 8px;
}

.tag{
  padding: 10px 4px 10px 4px;
  font-size: 12px;
  color: #878787;
  font-weight: bold;
  margin-right: 4px;
  margin-bottom: 10px;
}

.condition-container > div{
  margin-top: 20px;
}

.description{
  color: #898989;
  font-size: 16px;
}

.table-container{
  height: 420px;
}

.footer-container{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.footer-btn{
  margin-right: 20px;
}


.tutor-link{
  color: black;
  text-decoration: underline;
}
</style>