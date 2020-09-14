/**
 * @description: 剩余时间
 */
export function getTimeArr(now = new Date()) {

  const h = now.getHours()
  const m = now.getMinutes()
  const s = now.getSeconds()
  const arr = [...toArr(h),
  ...toArr(m),
  ...toArr(s)]
  // console.log(arr);
  return arr
}

// 更换数组类型
function toArr(n) {
  return n >= 10 ? ('' + n).split('').map(item => Number(item)) : [0, n]
}
