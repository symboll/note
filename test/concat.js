var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

// 将第二个数组融合进第一个数组
// 相当于 vegetables.push('celery', 'beetroot');
// Array.prototype.push.apply(vegetables, moreVegs);
vegetables.push(...moreVegs)

console.log(vegetables); 