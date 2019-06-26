# fragrant-fe

## Project setup

``` bash
npm install
```

### Compiles and hot-reloads for development
``` bash
npm run dev
```

### Compiles and minifies for production
``` bash
# 线上生产环境
npm run build

# 集成测试环境
npm run build --test
```

### Run your tests
``` bash
npm run test
```

### Lints and fixes files
``` bash
npm run lint
```

### lint config
eslint 使用了 prettier 的配置
vscode 对.vue文件的支持用Vetur插件
按照prettier插件
在Vetur插件里将格式化相关的最好都设置成prettier

### [sentry](https://docs.sentry.io/platforms/javascript/vue/)

#### npm install

``` js
import Vue from 'vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
  dsn: 'https://b7939d216d394d4f932cdfc0529cea47@sentry.io/1453850',
  integrations: [
    new Integrations.Vue({
      Vue,
      attachProps: true,
    }),
  ],
});
```

#### cdn install
``` html
<!-- Note that we now also provide a es6 build only -->
<!-- <script src="https://browser.sentry-cdn.com/5.1.2/bundle.es6.min.js" crossorigin="anonymous"></script> -->
<script src="https://browser.sentry-cdn.com/5.1.2/bundle.min.js" crossorigin="anonymous"></script>

<!-- If you include the integration it will be available under Sentry.Integrations.Vue -->
<script src="https://browser.sentry-cdn.com/5.1.2/vue.min.js" crossorigin="anonymous"></script>

<script>
  Sentry.init({
    dsn: 'https://b7939d216d394d4f932cdfc0529cea47@sentry.io/1453850',
    integrations: [
      new Sentry.Integrations.Vue({
        Vue,
        attachProps: true,
      }),
    ],
  });
</script>
```

### Reference

+ [Vue-cli](https://cli.vuejs.org/config/).
+ [Vue i18n](https://kazupon.github.io/vue-i18n/zh/introduction.html)
