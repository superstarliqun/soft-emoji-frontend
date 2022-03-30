<template>
  <div class="content">
        <el-descriptions class="margin-top" :column="3" border>
            <template slot="extra"></template>
            <el-descriptions-item>
                <template slot="label"><i class="el-icon-user"></i>姓名</template>向明月
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label"><i class="el-icon-mobile-phone"></i>手机号</template>176****1490
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label"><i class="el-icon-location-outline"></i>居住地</template>北京市昌平区
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label"><i class="el-icon-tickets"></i>职位</template><el-tag size="small">Java工程师</el-tag></el-descriptions-item>
            <el-descriptions-item>
                <template slot="label"><i class="el-icon-office-building"></i>联系地址</template>北京市海淀区中关村
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label"><i class="el-icon-view"></i>显示信息</template><el-button size="mini" type="primary" plain>联系人详细信息显示</el-button>
            </el-descriptions-item>
        </el-descriptions>
        <div class="technology">
            <el-divider></el-divider>
            <p>技术领域：<br/>
                熟练掌握：SSM、SSH、SpringBoot等项目框架<br/>
                基础掌握：RabbitMQ<br/>
                基础掌握：SpringCloud微服务架构<br/>
                熟练掌握：关系型数据库 mysql、oracle非关系型数据库 redis<br/>
                基础掌握：Linux环境部署平台，同时可以在项目中进行搭载docker或nginx等<br/>
                基础了解：Vue的基本语法，可以进行基础开发，包括路由、Axios、公共组件等，UI组件包括ElementUI和MintUI<br/>
                熟练掌握：版本控制工具git以及svn
            </p>
            <el-divider></el-divider>
            <p>工作经验：<br/>
                2019.10-至今/成都中慧科技有限公司/java开发工程师
                <br/>
                工作描述：完成项目需求，根据公司基础框架，完成项目工作，其中有智慧旅游管理系统和AOIT系统平台的后台部分代码，完成代码编写以及部分管理端的页面工作，根据原型进行项目功能设计与开发。
                <br/>
                <br/>
                2018.06-2019.9/中软国际科技教育股份有限公司/java开发工程师
                <br/>
                工作描述：根据客户需求和模型，利用SSH框架，实现中国图学学会的投稿系统的需求分析，数据库原型设计，代码后台编写，和处理后期出现的BUG，利用SpringBoot框架实现公安一所研究院的人脸识别系统门户网站，接口调用，需求分析并协助系统进行维护。
            </p>
            <el-divider></el-divider>
            <p>项目经验：<br/>
                2021.5-2022.1<br/>
                项目名称：智慧园区系统平台<br/>
                框架构架：springboot+ruoyi框架+Vue+elementUI<br/>
                开发环境：jDK1.8、IDEA、Windows10<br/>
                项目描述：智慧园区运维管理系统是面向园区运营和物业管理的一套综合性管理系统，主要功能包括园区的日常招商管理、合同管理、工单流转、物业维修巡检、设备维保和园区能耗监控等功能。系统分成PC端和移动端两
                部分，pc端的用户主要是园区的运营人员，移动端用户主要是园区的物业人园<br/>
                项目职责：<br/>
                ☞根据项目圆形设计：物业管理、巡检管理、维保管理、能源管理等功能模块，完成物业的小区基础数据楼宇，房屋的基础配置录入管理，巡检各个巡检点，包括巡检路线配置以及巡检计划生成，维保各个水电表的定期维修管理，完成能源水电气表的记录按照楼宇统计，并生成图标展示，如有异常会推送记录信息
            </p>
            <p>
                <br/>
                <br/>
                2021.5-2022.1<br/>
                项目名称：智慧园区系统平台<br/>
                框架构架：springboot+ruoyi框架+Vue+elementUI<br/>
                开发环境：jDK1.8、IDEA、Windows10<br/>
                项目描述：智慧园区运维管理系统是面向园区运营和物业管理的一套综合性管理系统，主要功能包括园区的日常招商管理、合同管理、工单流转、物业维修巡检、设备维保和园区能耗监控等功能。系统分成PC端和移动端两
                部分，pc端的用户主要是园区的运营人员，移动端用户主要是园区的物业人园<br/>
                项目职责：<br/>
                ☞根据项目圆形设计：物业管理、巡检管理、维保管理、能源管理等功能模块，完成物业的小区基础数据楼宇，房屋的基础配置录入管理，巡检各个巡检点，包括巡检路线配置以及巡检计划生成，维保各个水电表的定期维修管理，完成能源水电气表的记录按照楼宇统计，并生成图标展示，如有异常会推送记录信息
            </p>
            <el-divider></el-divider>
            <p>自我评价：<br/>
                对技术有激情，有较强的独立和主动的学习能力，良好的团队沟通能力和团队协作能力，对待事物认真，执着，喜爱篮球运动健身等。
            </p>
            <el-divider></el-divider>
            <p>敬语：感谢您百忙之中垂阅我的个人简历！</p>
        </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.technology{
    height: 500px;
    /* background-color: rgb(124, 111, 111); */
    margin-top: 2em;
}
p{
 font-size: 18px;
 color: rgb(87, 87, 87);
}
</style>
