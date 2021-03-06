
const { Rule, GalaxyValidator } = require('./../../dist');

const axios = require('axios');

class UidValidator extends GalaxyValidator{
    constructor(){
        super();
        this.uid = new Rule([
            {required:true},
            {type:'isInt', message:'请输入最小为90的数字', options:{min:90}},
            {type:'isLength', message:'至少2个字符，最多10个字符', options:{min:2,max:10}},
        ]);
    }
    
    async validateUid(vals){
        // 验证异步错误，往往是请求数据库验证数据或其他服务验证
        const res = await axios.get('http://www.baidu.com');
        if(!res){
            throw new Error('ERROR...')
        }
        return {
            key:'pageInfo',
            val:res.data
        }
    }
}

module.exports = {
    UidValidator
}