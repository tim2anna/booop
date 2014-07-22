angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Invest', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var invests = [
    { 
      id: 0, 
      name: '车辆抵押债权转让SK20140714001',
      amount: 100000,
      year_rate: '15%',
      period: '1月',
      progress: '15%',
      labels: ['本息担保', '质押'],
      image: 'ion-model-s',  // 类型
      status: 'ion-ios7-time-outline assertive' // 状态，进行中
    },
    { 
      id: 1, 
      name: '个人借款XY2014070101',
      amount: 100000,
      year_rate: '15.5%',
      period: '1月',
      progress: '15%',
      labels: ['本息担保', '质押'],
      image: 'ion-person',
      status: 'ion-ios7-time-outline assertive' // 状态，进行中
    },
    { 
      id: 2, 
      name: '商铺抵押HF2014061901（第一期）',
      amount: 100000,
      year_rate: '15%',
      period: '2月',
      progress: '15%',
      labels: ['本息担保'],
      image: 'ion-ios7-home-outline',
      status: 'ion-ios7-checkmark-empty balanced' // 状态，已完成
    },
    { 
      id: 3, 
      name: '车辆抵押债权转让SK2014062101',
      amount: 100000,
      year_rate: '15%',
      period: '1月',
      progress: '15%',
      labels: ['本息担保', '质押'],
      image: 'ion-model-s',
      status: 'ion-ios7-checkmark-empty balanced' // 状态，已完成
    },
    { 
      id: 4, 
      name: '车辆抵押债权转让SK2014062101',
      amount: 100000,
      year_rate: '15%',
      period: '1月',
      progress: '15%',
      labels: ['本息担保', '质押'],
      image: 'ion-model-s',
      status: 'ion-ios7-checkmark-empty balanced' // 状态，已完成
    },
    { 
      id: 5, 
      name: '车辆抵押债权转让SK2014062101',
      amount: 100000,
      year_rate: '15%',
      period: '1月',
      progress: '15%',
      labels: ['本息担保', '质押'],
      image: 'ion-model-s',
      status: 'ion-ios7-checkmark-empty balanced' // 状态，已完成
    },
    { 
      id: 6, 
      name: '车辆抵押债权转让SK2014062101',
      amount: 100000,
      year_rate: '15%',
      period: '1月',
      progress: '15%',
      labels: ['本息担保', '质押'],
      image: 'ion-model-s',
      status: 'ion-ios7-checkmark-empty balanced' // 状态，已完成
    },
    { 
      id: 7, 
      name: '车辆抵押债权转让SK2014062101',
      amount: 100000,
      year_rate: '15%',
      period: '1月',
      progress: '15%',
      labels: ['本息担保', '质押'],
      image: 'ion-model-s',
      status: 'ion-ios7-checkmark-empty balanced' // 状态，已完成
    }
  ];

  return {
    all: function(page, size) {
      if(page == undefined) page = 0;
      if(size == undefined) size = 4;
      return invests.slice(page*size, (page+1)*size);
    },
    get: function(id) {
      // Simple index lookup
      return invests[id];
    }
  }
})


.factory('Baike', function() {

  var baikes = [{
      id: 0, 
      name: '盛开服务介绍', 
      note: '盛开100元起投',
      parts: [{
        title: '',
        content: '盛开投资门槛100元起投，即可起投。年化收益率范围 : 8%~18%',
        images: ['img/baike_1.jpg']
      },{
        title: '债权方（出让方）',
        content: '借款给债务方以获得债务方车辆的抵押权，且委托车行进行估值和管理，在盛开网发布债权转让信息并在债务方逾期还款时，从受让方（盛开注册用户）回购债权（含期内全部本息）。盛开网上债权转让完毕后跟受让方及车行形成一个三方电子合同。',
        images: []
      },{
        title: '盛开',
        content: '提供债权方发布信息的平台，初步把控债权方及车行提供得资料，详细展示车行信息，在还款到期日前及时告知债务方还款通知',
        images: []
      },{
        title: '车行',
        content: '盛开合作企业，受债权方委托管理车辆，出具车辆估值报告，提供详细信息给盛开。在债务方逾期还款时，承诺按估值价购买抵押车辆。盛开网上债权转让完毕后跟出让方及受让方形成一个三方电子合同。',
        images: []
      },{
        title: '债务方',
        content: '抵押车辆的车主，同意债权方在盛开网进行债权转让。需在债务到期时及时还款，否则自动触发与债权方的预签买卖合同。',
        images: []
      },{
        title: '受让方（盛开投资用户）',
        content: '根据盛开提供资料，自主决定是否购买债权。盛开网上债权转让完毕后跟出让方及车行形成一个三方电子合同。在债务方逾期还款时，车行承诺购买抵押车辆，并优先作为债权方回购债权的资金',
        images: []
      }]
  }, {
      id: 1, 
      name: '车辆抵押债权转让', 
      note: '车可以贷款哦',
      parts: [{
        title: '',
        content: '盛开网业务类型之一，借贷双方都获得钱，车行兜底可能低价获得车，盛开网用户获得利息，皆大欢喜，欲知详情，请看漫画',
        images: ['img/baike_2.jpg']
      }]
  }];

  return {
    all: function() {
      return baikes;
    },
    get: function(id) {
      return baikes[id];
    }
  }
});
