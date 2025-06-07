const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmxz1um/",
            name: "ssmxz1um",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmxz1um/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的食堂线上预约点餐系统"
        } 
    }
}
export default base
