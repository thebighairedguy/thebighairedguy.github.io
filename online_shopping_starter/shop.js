var products;

let x = 1;

const items_all = document.getElementById("items-all");
const all_button = document.getElementById("all_button");
const mode_switch_button = document.getElementById("mode-switch");
const css_file = document.getElementById("css-file");
const load_screen = document.getElementById("load-screen");

let curr = "";
let conversion_rate = 0;

all_button.click();

const alpha_2_currency = [
  {
    alpha_2: "TW",
    currency: "TWD",
  },
  {
    alpha_2: "AF",
    currency: "AFN",
  },
  {
    alpha_2: "AL",
    currency: "ALL",
  },
  {
    alpha_2: "DZ",
    currency: "DZD",
  },
  {
    alpha_2: "AS",
    currency: "USD",
  },
  {
    alpha_2: "AD",
    currency: "EUR",
  },
  {
    alpha_2: "AO",
    currency: "AOA",
  },
  {
    alpha_2: "AI",
    currency: "XCD",
  },
  {
    alpha_2: "AQ",
    currency: "USD",
  },
  {
    alpha_2: "AG",
    currency: "XCD",
  },
  {
    alpha_2: "AR",
    currency: "ARS",
  },
  {
    alpha_2: "AM",
    currency: "AMD",
  },
  {
    alpha_2: "AW",
    currency: "AWG",
  },
  {
    alpha_2: "AU",
    currency: "AUD",
  },
  {
    alpha_2: "AT",
    currency: "EUR",
  },
  {
    alpha_2: "AZ",
    currency: "AZN",
  },
  {
    alpha_2: "BS",
    currency: "BSD",
  },
  {
    alpha_2: "BH",
    currency: "BHD",
  },
  {
    alpha_2: "BD",
    currency: "BDT",
  },
  {
    alpha_2: "BB",
    currency: "BBD",
  },
  {
    alpha_2: "BY",
    currency: "BYN",
  },
  {
    alpha_2: "BE",
    currency: "EUR",
  },
  {
    alpha_2: "BZ",
    currency: "BZD",
  },
  {
    alpha_2: "BJ",
    currency: "XOF",
  },
  {
    alpha_2: "BM",
    currency: "BMD",
  },
  {
    alpha_2: "BT",
    currency: "INR",
  },
  {
    alpha_2: "BO",
    currency: "BOB",
  },
  {
    alpha_2: "BQ",
    currency: "USD",
  },
  {
    alpha_2: "BA",
    currency: "BAM",
  },
  {
    alpha_2: "BW",
    currency: "BWP",
  },
  {
    alpha_2: "BV",
    currency: "NOK",
  },
  {
    alpha_2: "BR",
    currency: "BRL",
  },
  {
    alpha_2: "IO",
    currency: "USD",
  },
  {
    alpha_2: "VG",
    currency: "USD",
  },
  {
    alpha_2: "BN",
    currency: "BND",
  },
  {
    alpha_2: "BG",
    currency: "BGN",
  },
  {
    alpha_2: "BF",
    currency: "XOF",
  },
  {
    alpha_2: "BI",
    currency: "BIF",
  },
  {
    alpha_2: "CV",
    currency: "CVE",
  },
  {
    alpha_2: "KH",
    currency: "KHR",
  },
  {
    alpha_2: "CM",
    currency: "XAF",
  },
  {
    alpha_2: "CA",
    currency: "CAD",
  },
  {
    alpha_2: "KY",
    currency: "KYD",
  },
  {
    alpha_2: "CF",
    currency: "XAF",
  },
  {
    alpha_2: "TD",
    currency: "XAF",
  },
  {
    alpha_2: "CL",
    currency: "CLP",
  },
  {
    alpha_2: "CN",
    currency: "CNY",
  },
  {
    alpha_2: "HK",
    currency: "HKD",
  },
  {
    alpha_2: "MO",
    currency: "MOP",
  },
  {
    alpha_2: "CX",
    currency: "AUD",
  },
  {
    alpha_2: "CC",
    currency: "AUD",
  },
  {
    alpha_2: "CO",
    currency: "COP",
  },
  {
    alpha_2: "KM",
    currency: "KMF",
  },
  {
    alpha_2: "CG",
    currency: "XAF",
  },
  {
    alpha_2: "CK",
    currency: "NZD",
  },
  {
    alpha_2: "CR",
    currency: "CRC",
  },
  {
    alpha_2: "HR",
    currency: "HRK",
  },
  {
    alpha_2: "CU",
    currency: "CUP",
  },
  {
    alpha_2: "CW",
    currency: "ANG",
  },
  {
    alpha_2: "CY",
    currency: "EUR",
  },
  {
    alpha_2: "CZ",
    currency: "CZK",
  },
  {
    alpha_2: "CI",
    currency: "XOF",
  },
  {
    alpha_2: "KP",
    currency: "KPW",
  },
  {
    alpha_2: "CD",
    currency: "CDF",
  },
  {
    alpha_2: "DK",
    currency: "DKK",
  },
  {
    alpha_2: "DJ",
    currency: "DJF",
  },
  {
    alpha_2: "DM",
    currency: "XCD",
  },
  {
    alpha_2: "DO",
    currency: "DOP",
  },
  {
    alpha_2: "EC",
    currency: "USD",
  },
  {
    alpha_2: "EG",
    currency: "EGP",
  },
  {
    alpha_2: "SV",
    currency: "USD",
  },
  {
    alpha_2: "GQ",
    currency: "XAF",
  },
  {
    alpha_2: "ER",
    currency: "ERN",
  },
  {
    alpha_2: "EE",
    currency: "EUR",
  },
  {
    alpha_2: "SZ",
    currency: "SZL",
  },
  {
    alpha_2: "ET",
    currency: "ETB",
  },
  {
    alpha_2: "FK",
    currency: "USD",
  },
  {
    alpha_2: "FO",
    currency: "DKK",
  },
  {
    alpha_2: "FJ",
    currency: "FJD",
  },
  {
    alpha_2: "FI",
    currency: "EUR",
  },
  {
    alpha_2: "FR",
    currency: "EUR",
  },
  {
    alpha_2: "GF",
    currency: "EUR",
  },
  {
    alpha_2: "PF",
    currency: "XPF",
  },
  {
    alpha_2: "TF",
    currency: "EUR",
  },
  {
    alpha_2: "GA",
    currency: "XAF",
  },
  {
    alpha_2: "GM",
    currency: "GMD",
  },
  {
    alpha_2: "GE",
    currency: "GEL",
  },
  {
    alpha_2: "DE",
    currency: "EUR",
  },
  {
    alpha_2: "GH",
    currency: "GHS",
  },
  {
    alpha_2: "GI",
    currency: "GIP",
  },
  {
    alpha_2: "GR",
    currency: "EUR",
  },
  {
    alpha_2: "GL",
    currency: "DKK",
  },
  {
    alpha_2: "GD",
    currency: "XCD",
  },
  {
    alpha_2: "GP",
    currency: "EUR",
  },
  {
    alpha_2: "GU",
    currency: "USD",
  },
  {
    alpha_2: "GT",
    currency: "GTQ",
  },
  {
    alpha_2: "GG",
    currency: "GBP",
  },
  {
    alpha_2: "GN",
    currency: "GNF",
  },
  {
    alpha_2: "GW",
    currency: "XOF",
  },
  {
    alpha_2: "GY",
    currency: "GYD",
  },
  {
    alpha_2: "HT",
    currency: "USD",
  },
  {
    alpha_2: "HM",
    currency: "AUD",
  },
  {
    alpha_2: "VA",
    currency: "EUR",
  },
  {
    alpha_2: "HN",
    currency: "HNL",
  },
  {
    alpha_2: "HU",
    currency: "HUF",
  },
  {
    alpha_2: "IS",
    currency: "ISK",
  },
  {
    alpha_2: "IN",
    currency: "INR",
  },
  {
    alpha_2: "ID",
    currency: "IDR",
  },
  {
    alpha_2: "IR",
    currency: "IRR",
  },
  {
    alpha_2: "IQ",
    currency: "IQD",
  },
  {
    alpha_2: "IE",
    currency: "EUR",
  },
  {
    alpha_2: "IM",
    currency: "GBP",
  },
  {
    alpha_2: "IL",
    currency: "ILS",
  },
  {
    alpha_2: "IT",
    currency: "EUR",
  },
  {
    alpha_2: "JM",
    currency: "JMD",
  },
  {
    alpha_2: "JP",
    currency: "JPY",
  },
  {
    alpha_2: "JE",
    currency: "GBP",
  },
  {
    alpha_2: "JO",
    currency: "JOD",
  },
  {
    alpha_2: "KZ",
    currency: "KZT",
  },
  {
    alpha_2: "KE",
    currency: "KES",
  },
  {
    alpha_2: "KI",
    currency: "AUD",
  },
  {
    alpha_2: "KW",
    currency: "KWD",
  },
  {
    alpha_2: "KG",
    currency: "KGS",
  },
  {
    alpha_2: "LA",
    currency: "LAK",
  },
  {
    alpha_2: "LV",
    currency: "EUR",
  },
  {
    alpha_2: "LB",
    currency: "LBP",
  },
  {
    alpha_2: "LS",
    currency: "LSL",
  },
  {
    alpha_2: "LR",
    currency: "LRD",
  },
  {
    alpha_2: "LY",
    currency: "LYD",
  },
  {
    alpha_2: "LI",
    currency: "CHF",
  },
  {
    alpha_2: "LT",
    currency: "EUR",
  },
  {
    alpha_2: "LU",
    currency: "EUR",
  },
  {
    alpha_2: "MG",
    currency: "MGA",
  },
  {
    alpha_2: "MW",
    currency: "MWK",
  },
  {
    alpha_2: "MY",
    currency: "MYR",
  },
  {
    alpha_2: "MV",
    currency: "MVR",
  },
  {
    alpha_2: "ML",
    currency: "XOF",
  },
  {
    alpha_2: "MT",
    currency: "EUR",
  },
  {
    alpha_2: "MH",
    currency: "USD",
  },
  {
    alpha_2: "MQ",
    currency: "EUR",
  },
  {
    alpha_2: "MR",
    currency: "MRU",
  },
  {
    alpha_2: "MU",
    currency: "MUR",
  },
  {
    alpha_2: "YT",
    currency: "EUR",
  },
  {
    alpha_2: "MX",
    currency: "MXN",
  },
  {
    alpha_2: "FM",
    currency: "USD",
  },
  {
    alpha_2: "MC",
    currency: "EUR",
  },
  {
    alpha_2: "MN",
    currency: "MNT",
  },
  {
    alpha_2: "ME",
    currency: "EUR",
  },
  {
    alpha_2: "MS",
    currency: "XCD",
  },
  {
    alpha_2: "MA",
    currency: "MAD",
  },
  {
    alpha_2: "MZ",
    currency: "MZN",
  },
  {
    alpha_2: "MM",
    currency: "MMK",
  },
  {
    alpha_2: "NA",
    currency: "NAD",
  },
  {
    alpha_2: "NR",
    currency: "AUD",
  },
  {
    alpha_2: "NP",
    currency: "NPR",
  },
  {
    alpha_2: "NL",
    currency: "EUR",
  },
  {
    alpha_2: "NC",
    currency: "XPF",
  },
  {
    alpha_2: "NZ",
    currency: "NZD",
  },
  {
    alpha_2: "NI",
    currency: "NIO",
  },
  {
    alpha_2: "NE",
    currency: "XOF",
  },
  {
    alpha_2: "NG",
    currency: "NGN",
  },
  {
    alpha_2: "NU",
    currency: "NZD",
  },
  {
    alpha_2: "NF",
    currency: "AUD",
  },
  {
    alpha_2: "MP",
    currency: "USD",
  },
  {
    alpha_2: "NO",
    currency: "NOK",
  },
  {
    alpha_2: "OM",
    currency: "OMR",
  },
  {
    alpha_2: "PK",
    currency: "PKR",
  },
  {
    alpha_2: "PW",
    currency: "USD",
  },
  {
    alpha_2: "PA",
    currency: "PAB",
  },
  {
    alpha_2: "PG",
    currency: "PGK",
  },
  {
    alpha_2: "PY",
    currency: "PYG",
  },
  {
    alpha_2: "PE",
    currency: "PEN",
  },
  {
    alpha_2: "PH",
    currency: "PHP",
  },
  {
    alpha_2: "PN",
    currency: "NZD",
  },
  {
    alpha_2: "PL",
    currency: "PLN",
  },
  {
    alpha_2: "PT",
    currency: "EUR",
  },
  {
    alpha_2: "PR",
    currency: "USD",
  },
  {
    alpha_2: "QA",
    currency: "QAR",
  },
  {
    alpha_2: "KR",
    currency: "KRW",
  },
  {
    alpha_2: "MD",
    currency: "MDL",
  },
  {
    alpha_2: "RO",
    currency: "RON",
  },
  {
    alpha_2: "RU",
    currency: "RUB",
  },
  {
    alpha_2: "RW",
    currency: "RWF",
  },
  {
    alpha_2: "RE",
    currency: "EUR",
  },
  {
    alpha_2: "BL",
    currency: "EUR",
  },
  {
    alpha_2: "SH",
    currency: "SHP",
  },
  {
    alpha_2: "KN",
    currency: "XCD",
  },
  {
    alpha_2: "LC",
    currency: "XCD",
  },
  {
    alpha_2: "MF",
    currency: "EUR",
  },
  {
    alpha_2: "PM",
    currency: "EUR",
  },
  {
    alpha_2: "VC",
    currency: "XCD",
  },
  {
    alpha_2: "WS",
    currency: "WST",
  },
  {
    alpha_2: "SM",
    currency: "EUR",
  },
  {
    alpha_2: "ST",
    currency: "STN",
  },
  {
    alpha_2: "SA",
    currency: "SAR",
  },
  {
    alpha_2: "SN",
    currency: "XOF",
  },
  {
    alpha_2: "RS",
    currency: "RSD",
  },
  {
    alpha_2: "SC",
    currency: "SCR",
  },
  {
    alpha_2: "SL",
    currency: "SLL",
  },
  {
    alpha_2: "SG",
    currency: "SGD",
  },
  {
    alpha_2: "SX",
    currency: "ANG",
  },
  {
    alpha_2: "SK",
    currency: "EUR",
  },
  {
    alpha_2: "SI",
    currency: "EUR",
  },
  {
    alpha_2: "SB",
    currency: "SBD",
  },
  {
    alpha_2: "SO",
    currency: "SOS",
  },
  {
    alpha_2: "ZA",
    currency: "ZAR",
  },
  {
    alpha_2: "GS",
    currency: "USD",
  },
  {
    alpha_2: "SS",
    currency: "SSP",
  },
  {
    alpha_2: "ES",
    currency: "EUR",
  },
  {
    alpha_2: "LK",
    currency: "LKR",
  },
  {
    alpha_2: "PS",
    currency: "USD",
  },
  {
    alpha_2: "SD",
    currency: "SDG",
  },
  {
    alpha_2: "SR",
    currency: "SRD",
  },
  {
    alpha_2: "SJ",
    currency: "NOK",
  },
  {
    alpha_2: "SE",
    currency: "SEK",
  },
  {
    alpha_2: "CH",
    currency: "CHF",
  },
  {
    alpha_2: "SY",
    currency: "SYP",
  },
  {
    alpha_2: "TJ",
    currency: "TJS",
  },
  {
    alpha_2: "TH",
    currency: "THB",
  },
  {
    alpha_2: "MK",
    currency: "MKD",
  },
  {
    alpha_2: "TL",
    currency: "USD",
  },
  {
    alpha_2: "TG",
    currency: "XOF",
  },
  {
    alpha_2: "TK",
    currency: "NZD",
  },
  {
    alpha_2: "TO",
    currency: "TOP",
  },
  {
    alpha_2: "TT",
    currency: "TTD",
  },
  {
    alpha_2: "TN",
    currency: "TND",
  },
  {
    alpha_2: "TR",
    currency: "TRY",
  },
  {
    alpha_2: "TM",
    currency: "TMT",
  },
  {
    alpha_2: "TC",
    currency: "USD",
  },
  {
    alpha_2: "TV",
    currency: "AUD",
  },
  {
    alpha_2: "UG",
    currency: "UGX",
  },
  {
    alpha_2: "UA",
    currency: "UAH",
  },
  {
    alpha_2: "AE",
    currency: "AED",
  },
  {
    alpha_2: "GB",
    currency: "GBP",
  },
  {
    alpha_2: "TZ",
    currency: "TZS",
  },
  {
    alpha_2: "UM",
    currency: "USD",
  },
  {
    alpha_2: "VI",
    currency: "USD",
  },
  {
    alpha_2: "US",
    currency: "USD",
  },
  {
    alpha_2: "UY",
    currency: "UYU",
  },
  {
    alpha_2: "UZ",
    currency: "UZS",
  },
  {
    alpha_2: "VU",
    currency: "VUV",
  },
  {
    alpha_2: "VE",
    currency: "VES",
  },
  {
    alpha_2: "VN",
    currency: "VND",
  },
  {
    alpha_2: "WF",
    currency: "XPF",
  },
  {
    alpha_2: "EH",
    currency: "MAD",
  },
  {
    alpha_2: "YE",
    currency: "YER",
  },
  {
    alpha_2: "ZM",
    currency: "ZMW",
  },
  {
    alpha_2: "ZW",
    currency: "ZWL",
  },
  {
    alpha_2: "AX",
    currency: "EUR",
  },
];

async function converter() {
  var ipInfo = await fetch(
    `https://ipinfo.io/json?token=254f0bb00c85e3`
  );
  ipInfo = await ipInfo.json();

  for (let i = 0; i < alpha_2_currency.length; i++) {
    if (alpha_2_currency[i].alpha_2 == ipInfo.country) {
      curr = alpha_2_currency[i].currency;
      break;
    }
  }

  var exchange = await fetch(
    `https://v6.exchangerate-api.com/v6/0f39542675981af68d05454a/latest/USD`
  );
  exchange = await exchange.json();

  conversion_rate = exchange.conversion_rates[curr];
  console.log(conversion_rate);
}

converter();

function localised_pricing() {
  $(".item-price").each(function () {
    let local_price = this.innerHTML * conversion_rate;
    this.innerHTML = `${curr}   ${local_price.toFixed(2)}`;
  });
}

function writeItems(products) {
  let randomNum = Math.floor(Math.random() * products.length);
  items_all.innerHTML = `<!--Item # Full Div--><div class="item-card"><img src="${products[randomNum].image}" class="item-image" /><h4 class="item-title">${products[randomNum].title}</h4><div class="item-price-category"><span class="item-category">${products[randomNum].category}</span><span class="item-price">${products[randomNum].price}</span></div><p class="item-description">${products[randomNum].description}</p></div>`;

  randomNum = Math.floor(Math.random() * products.length);
  items_all.innerHTML += `<!--Item # Full Div--><div class="item-card"><img src="${products[randomNum].image}" class="item-image" /><h4 class="item-title">${products[randomNum].title}</h4><div class="item-price-category"><span class="item-category">${products[randomNum].category}</span><span class="item-price">${products[randomNum].price}</span></div><p class="item-description">${products[randomNum].description}</p></div>`;

  localised_pricing();
}

async function allCategory(button) {
  load_screen.style.display = "flex";

  products = await fetch("https://fakestoreapi.com/products");
  products = await products.json();

  writeItems(products);

  load_screen.style.display = "none";
}

async function electronicsCategory(button) {
  load_screen.style.display = "flex";

  products = await fetch(
    `https://fakestoreapi.com/products/category/${button.value}`
  );
  products = await products.json();

  writeItems(products);

  load_screen.style.display = "none";
}

async function jeweleryCategory(button) {
  load_screen.style.display = "flex";

  products = await fetch(
    `https://fakestoreapi.com/products/category/${button.value}`
  );
  products = await products.json();

  writeItems(products);

  load_screen.style.display = "none";
}

async function menCategory(button) {
  load_screen.style.display = "flex";

  products = await fetch(
    `https://fakestoreapi.com/products/category/${button.value}`
  );
  products = await products.json();

  writeItems(products);

  load_screen.style.display = "none";
}

async function womenCategory(button) {
  load_screen.style.display = "flex";

  products = await fetch(
    `https://fakestoreapi.com/products/category/${button.value}`
  );
  products = await products.json();

  writeItems(products);

  load_screen.style.display = "none";
}

function mode_switcher(button) {
  if (x % 2 != 0) {
    button.setAttribute("class", `fa-solid fa-sun`);
    css_file.setAttribute("href", `shop-dark.css`);
    x++;
  } else if (x % 2 == 0) {
    button.setAttribute("class", `fa-solid fa-moon`);
    css_file.setAttribute("href", `shop-light.css`);
    x++;
  }
}
