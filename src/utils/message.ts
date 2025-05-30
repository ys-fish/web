import { reactive} from 'vue'

export const messageInfo = reactive<{msg:string,type:string,flag:boolean}>({
    msg:"",
    type:"",
    flag:false
})
export const cmessage = (opt:{msg:string,type:string})=>{
    messageInfo.msg = opt.msg
    messageInfo.type = opt.type
    messageInfo.flag = true
}