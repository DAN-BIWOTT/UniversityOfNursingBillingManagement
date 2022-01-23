/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // tasks list for Tasks card in Dashboard view
// #############################

const tasks = [
  {
    checked: true,
    text: '🚀 ~ file: general.js ~ line 27 ~ true',
  },
  {
    checked: false,
    text: "🚀 ~ file: general.js ~ line 31 ~ false",
  },
  {
    checked: true,
    text:
      "🚀 ~ file: general.js ~ line 37 ~ true",
  },
];

// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = ["Table", "Aggregate"];
const tbody = [
  {
    className: "table-success",
    data: ["admin", "client → [ order ]   -   order . client_id  → client . id"],
  },
  {
    className: "",
    data: ["client", "client → [ transaction ]   -   transaction . client_id  → client . id"],
  },
  {
    className: "",
    data: ["file", "order → client   -   order . client_id  → client . id"],
  },
  {
    className: "",
    data: ["product", "order → [ file ]   -   file . order_id  → order . id"],
  },
  {
    className: "",
    data: ["transaction", "order → [ transaction ]   -   transaction . order_id  → order . id"],
  },
  {
    className: "table-info",
    data: ["order", "transaction → client   -   transaction . client_id  → client . id"],
  }
];

// tasks list for Tasks card in Dashboard view
// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { tasks, thead, tbody };
