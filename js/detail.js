var student=[
  {},
  {},
  {xingming:'冯光雁',daxue:'武汉科技大学',zhuanye:'安全工程'},
  {xingming:'邓子秋',daxue:'广西大学',zhuanye:'农学'}
];

function daxue(xuehao) {
  $(".xingming_1").empty();
  $(".xuexiao_1").empty();
  $(".zhuanye_1").empty();
  $(".xingming_1").append(student[xuehao].xingming);
  $(".xuexiao_1").append(student[xuehao].daxue);
  $(".zhuanye_1").append(student[xuehao].zhuanye);
}

// function yichu() {
//
// }
function yichu() {
  alert("你离开了");
}
