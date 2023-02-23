import { createApp } from "vue";

import "./index.scss";

import App from "./App.vue";
import User from "./User.vue";
import Log from "./Log.vue";
import Role from "./Role.vue";

createApp(App).mount("#app");

createApp(User).mount("#user");

createApp(Log).mount("#log");

createApp(Role).mount("#role");


