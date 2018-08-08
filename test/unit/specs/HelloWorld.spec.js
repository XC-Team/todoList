// 引用vue和需要测试的组件
import Vue from 'vue'
import HelloWorld from '@/views/HelloWorld'
// 创建测试套件 一个测试组件写一个测试套件
describe('HelloWorld.vue', () => {
  // 测试用例
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    // 判断页面中是否有msg
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
