import Vue from "vue";
import App from "./App.vue";

// pina
import  { store, PiniaVuePlugin} from './store'
Vue.use(store)
Vue.use(PiniaVuePlugin);
import piniaPluginPersist from 'pinia-plugin-persist'
store.use(piniaPluginPersist)

// route
import router from './router'

// element-ui
import ELEMENT from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import "./style/element-variables.scss";

Vue.use(ELEMENT);

// 重置css样式
import 'normalize.css/normalize.css'

// 路径
import "./public-path";

Vue.config.productionTip = false;

let instance = null;

function render(props = {}) {
  const { container } = props;
  // 在 render 中创建 VueRouter，可以保证在卸载微应用时，移除 location 事件监听，防止事件污染
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("VueMicroApp bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("VueMicroApp mount", "micro-vehicle");
  // 首次加载从缓存内初始化线路和领域信息
  // let curMicro = getTokenByKey("micro", "curMicro");
  // 设置通讯
  props.onGlobalStateChange((state, prev) => {
    console.log("————————vehicle接收到主应用消息为：", state, prev);
    // const { micro, line } = state;
    // store.commit("CHANGE_MICRO", micro);
    // store.commit("CHANGE_LINE", line);
  });
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log("VueMicroApp unmount");
  instance.$destroy();
  instance = null;
}
