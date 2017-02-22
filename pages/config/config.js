Page({
  data: {
    stages:[
    //   stageLilun:
      {
            stageName: '立论阶段',
            isOpen: true,
            timeLimit: 100,
            alarmBefore: 15
          },
    //   stageBolilun: 
      {
          stageName: "驳立论阶段",
          isOpen: true,
          timeLimit: 90,
          alarmBefor: 15
      },
    //   stageZhibian: 
      {
          stageName: "质辩阶段",
          isOpen: true,
          timeLimit: 90,
          alarmBefor: 15 
      },
    //   stageZiyou: 
      {
          stageName: "自由辩论阶段",
          isOpen: true,
          timeLimit: 90,
          alarmBefor: 15 
      },
    //   stageZongjie: 
      {
          stageName: "总结陈词阶段",
          isOpen: true,
          timeLimit: 90,
          alarmBefor: 15 
      }
    ]
  },

  switchStage: function(event){
    var id = parseInt(event.target.id);
    this.data.stages[id].isOpen = event.detail.value;
    console.log("切换" + this.data.stages[id].stageName +", 目前状态：", this.data.stages[id].isOpen);
  },

  changeStageTimeLimit: function(event){
      var id = parseInt(event.target.id);
      this.data.stages[id].timeLimit = event.detail.value;
      console.log("修改" + this.data.stages[id].stageName +"用时为" + this.data.stages[id].timeLimit);
  },

  changeStageAlarm: function(event){
    var id = parseInt(event.target.id);
    this.data.stages[id].alarmBefore = parseInt(event.detail.value);
    console.log("修改" + this.data.stages[id].stageName +"的声音提醒开启时间为" + this.data.stages[id].alarmBefore)
  }
})