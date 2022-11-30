import { registerApplication, start } from "single-spa"

registerApplication({
  name: "@zuri/zuri-plugin-task-manager",
  app: () => System.import("@zuri/zuri-plugin-task-manager"),
  activeWhen: ["/"]
})

start({
  urlRerouteOnly: true
})
