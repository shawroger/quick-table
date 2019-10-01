import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import Rexine from 'rexine';
import Crearia from 'crearia';
import 'element-ui/lib/theme-chalk/index.css';

Rexine.use(Crearia);

Rexine.TRIM = false

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(Rexine);

new Vue({

  render: h => h(App),

}).$mount('#app')
