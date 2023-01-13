// 食物类
export default class Food {
  // 食物的属性
  // 定义一个属性表示食物所对应的元素（div）
  element: HTMLElement

  constructor() {
    // 获取页面的food元素，并赋给element
    // 在后面加一个 ! 表示这个不会为null
    this.element = document.querySelector('#food')!
  }

  // 获取食物X轴坐标的方法
  get X(): number {
    return this.element.offsetLeft
  }

  // 获取Y轴坐标的方法
  get Y(): number {
    return this.element.offsetTop
  }

  change(snake: HTMLCollection) {
    //得到随机位置
    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10
    //遍历蛇身
    for (let i = 0; i < snake.length; i++) {
      let bd = snake[i] as HTMLElement
      if (left === bd.offsetLeft && top === bd.offsetTop) {
        //进入判断说明食物在蛇肚子里面,重新调用方法
        this.change(snake)
        //结束本次,不执行下面代码
        return
      }
    }
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}
