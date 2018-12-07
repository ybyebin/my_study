let LXN_API = '//www.lanxiniu.com/'
let OPEN_API = '//openapi.lanxiniu.com/'

let BDAK = 'yqnitg5uvNmj1DkrhStCdM98hFYYbUVc'
let BDTJ = 'fe0d69aaee7a479e8a9dfd052deb5fcf' //百度统计
export default ({
  servicePhone: '4006785966',
  gdak: '55dc7aee49490e61ea53a33f64333cdb',
  bdak: BDAK,
  //  获取图片验证码
  getVerifyCode: LXN_API + 'Public/verify',
  // 获取短信验证码
  getwapDynamicCode: LXN_API + 'Phone/getwapDynamicCode',
  // 登录
  asyncDynamicLogin: LXN_API + 'Login/AsyncDynamicLogin',
  // 百度ip定位    
  ipLocaltion: '//api.map.baidu.com/location/ip?ak=' + BDAK,
  // 请求当前城市的车型列表 
  getCityData: LXN_API + 'Setting/getCityData',
  // 计算订单价格
  calPrice: LXN_API + 'Order/evaluatePrice',
  // 提交订单
  orderUpdate: LXN_API + 'Order/update',
  // 获取订单详情
  orderDetail: LXN_API + 'Order/detail',
  // 支付宝支付
  //   alipay: '//www.lanxiniu.com/Pay/aliH5',
  // 微信支付
  //   weixinpay: '//www.lanxiniu.com/Pay/wxH5',
  // 高德搜索提示
  gaoDeInputtips: '//restapi.amap.com/v3/assistant/inputtips',
  // 高德线路规划(计算坐标点之间的距离)
  gaoDeDriving: '//restapi.amap.com/v3/direction/driving',
  // 转换 高德坐标---->百度坐标
  baiDuGeoconv: '//api.map.baidu.com/geoconv/v1/',
  // 获取订单列表
  orderList: LXN_API + 'Order/list',
  // 取消订单(获取消息提示)
  OrderCancelWin: LXN_API + 'Order/cancelWin',
  // 确认删除订单
  orderCancel: LXN_API + 'Order/cancel',
  // 订单详情
  orderDetail: LXN_API + 'Order/detail',
  // 订单评价----获取订单司机详情
  orderDriver: LXN_API + 'Order/driver',
  // 订单评价 提交
  orderComment: LXN_API + 'Order/comment',
  // 费用明细
  orderBillInfo: LXN_API + 'Order/billInfo',

  // 获取全部城市
  getInnerCitys: LXN_API + 'Setting/getInnerCitys',

  // 评价列表
  getGoodComments:'//openapi.lanxiniu.com'+'/Order/getGoodComments',
   // 确认支付订单(用于触发推送订单)
   directPay: OPEN_API + 'Baidu/directPay'




})
