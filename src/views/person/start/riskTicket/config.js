import {locationList,yesOrNot,riskTypeOptions,appearanceOptions,lineOptions} from '@/utils/config'
//故障工单
export const troubleTicket =(that)=> {
  return [
    {
      label: '故障发现人',
      prop: 'discovererUser',
      el: 'input',
      placeholder: '',
      clearable: true,
      required:true,
      span: 8
    },
    {
      label: '发现人电话',
      prop: 'number',
      el: 'input',
      placeholder: '',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '故障报告人',
      prop: 'reporterUser',
      el: 'input',
      placeholder: '',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '报告人部门',
      prop: 'titleLike',
      el: 'input',
      placeholder: '',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '线路',
      prop: 'lineId',
      el: 'select',
      options:lineOptions,
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '车/站/段/所',
      prop: 'station',
      el: 'select',
      options:locationList,
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '归口调度',
      prop: 'scheduling',
      el: 'select',
      options:[
        {
          label:'一号',
          value:0
        }
      ],
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '影响类型',
      prop: 'impactType',
      el: 'select',
      options:appearanceOptions,
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '是否停用',
      prop: 'isDisable',
      el: 'select',
      options:yesOrNot,
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '故障分类',
      prop: 'faultType',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      options: riskTypeOptions,
      span: 8,
    },
    {
      label: '故障现象',
      prop: 'faultReason',
      el: 'input',
      type:'textarea',
      placeholder: '',
      clearable: true,
      required:true,
      span: 16,
    },
    {
      label: '备注',
      prop: 'remark',
      el: 'input',
      placeholder: '',
      clearable: true,
      span: 8,
    },
    {
      label: '故障提报时间',
      prop: 'reportTime',
      el: 'input',
      placeholder: '自动生成',
      disabled:true,
      clearable: true,
      span: 8,
    },
    {
      label:'上传图片',
      prop: 'picture',
      span: 6,
    },
    {
      prop: 'btns',
      span: 8,
    }
  ]
}
//故障工单-校验规则
export const troubleRules =(that)=>{
  return {
    titleLike: [{ required: true, message: "请输入" }],
  }
}
