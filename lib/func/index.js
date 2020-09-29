/***
 * 方法队列
 * 1. 添加队列，队列中添加是否重试，重试次数参数，如果失败根据重试次数添加到队列尾部重新上传
 * 2. 终止功能，外部事件可以关闭当前所有方法
 */
class FuncQueue{
  /**
   * 根据添加的方法执行，并返回当前的key
   * @param {function} func 
   */
  add(func = () => {}) {
    return "cur_key";
  }

  /**
   * 执行队列中方法
   */
  execute() {}

  /**
   * 根据key中断当前方法
   * @param {string} key 
   */
  end(key) {
    return true;
  }

  endAll() {

  }
}

export default FuncQueue;