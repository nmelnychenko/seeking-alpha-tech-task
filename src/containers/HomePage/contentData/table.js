export const tableContent = {
  headings: [
    {
      title: "Symbol",
      sortable: true,
      id: "symbol"
    },
    {
      title: "Price",
      sortable: true,
      id: "price"
    },
    {
      title: "Change",
      sortable: true,
      id: "change"
    },
    {
      title: "Change %",
      sortable: true,
      id: "relativeChange"
    },
    {
      title: "Alerts",
      sortable: false,
      id: "alerts"
    },
    {
      title: "Volume",
      sortable: true,
      id: "volume"
    },
    {
      title: "Avg. Vol",
      sortable: true,
      id: "avgVolume"
    },
    {
      title: "Prev Close",
      sortable: true,
      id: "prevClose"
    },
    {
      title: "Open",
      sortable: true,
      id: "open"
    },
    {
      title: "High",
      sortable: true,
      id: "high"
    },
    {
      title: "Low",
      sortable: true,
      id: "low"
    },
    {
      title: "52 Wk Range",
      sortable: false,
      id: "wkRange",
      mod: "wide"
    },
    {
      title: "Quant",
      sortable: true,
      mod: "rating",
      id: "quant"
    },
    {
      title: "SA Authors",
      sortable: true,
      mod: "rating",
      id: "saAuthors"
    },
    {
      title: "Sell Side",
      sortable: true,
      mod: "rating",
      id: "sellSide"
    }
  ],
  rows: [
    {
      rowId: "0",
      cells: {
        symbol: {
          type: "text",
          content: "AFK"
        },
        price: {
          type: "number",
          content: 19.51
        },
        change: {
          type: "relativeNumber",
          content: -0.14
        },
        relativeChange: {
          type: "relativePercents",
          content: -0.71
        },
        alerts: {
          type: "checkbox",
          content: {
            name: "afk-alert-status",
            label: "Afk alerts enable",
            mods: ["text-center"],
            isLabelHidden: true
          }
        },
        volume: {
          type: "number",
          content: 1911
        },
        avgVolume: {
          type: "number",
          content: 11420
        },
        prevClose: {
          type: "number",
          content: 19.65
        },
        open: {
          type: "number",
          content: 19.65
        },
        high: {
          type: "number",
          content: 19.65
        },
        low: {
          type: "number",
          content: 19.65
        },
        wkRange: {
          type: "range",
          mod: "wide",
          content: {
            min: 19.65,
            max: 19.69,
            defaultValue: 19.66,
            label: "AFK 52 Wk Range",
            isLabelHidden: true
          }
        },
        quant: {
          type: "badge",
          mod: "rating",
          content: 4.32
        },
        saAuthors: {
          type: "badge",
          mod: "rating",
          content: 4.32
        },
        sellSide: {
          type: "badge",
          mod: "rating",
          content: null
        },
      }
    },
    {
      rowId: "1",
      cells: {
        symbol: {
          type: "text",
          content: "BRK.A"
        },
        price: {
          type: "number",
          content: 335200
        },
        change: {
          type: "relativeNumber",
          content: 1584.00
        },
        relativeChange: {
          type: "relativePercents",
          content: 0.47
        },
        alerts: {
          type: "checkbox",
          content: {
            name: "brk-alert-status",
            label: "BRK alerts enable",
            mods: ["text-center"],
            isLabelHidden: true
          }
        },
        volume: {
          type: "number",
          content: 333620
        },
        avgVolume: {
          type: "number",
          content: 333620
        },
        prevClose: {
          type: "number",
          content: 333620
        },
        open: {
          type: "number",
          content: 333620
        },
        high: {
          type: "number",
          content: 333620
        },
        low: {
          type: "number",
          content: 333620
        },
        wkRange: {
          type: "range",
          mod: "wide",
          content: {
            min: 335080,
            max: 336390,
            defaultValue: 335800,
            label: "BRK 52 Wk Range",
            isLabelHidden: true
          }
        },
        quant: {
          type: "badge",
          mod: "rating",
          content: 3.00
        },
        saAuthors: {
          type: "badge",
          mod: "rating",
          content: 4.32
        },
        sellSide: {
          type: "badge",
          mod: "rating",
          content: 4.56
        },
      }
    },
    {
      rowId: "2",
      cells: {
        symbol: {
          type: "text",
          content: "CGW"
        },
        price: {
          type: "number",
          content: 41.99
        },
        change: {
          type: "relativeNumber",
          content: 0.04
        },
        relativeChange: {
          type: "relativePercents",
          content: 0.10
        },
        alerts: {
          type: "checkbox",
          content: {
            name: "cgw-alert-status",
            label: "CGW alerts enable",
            mods: ["text-center"],
            isLabelHidden: true
          }
        },
        volume: {
          type: "number",
          content: 1000
        },
        avgVolume: {
          type: "number",
          content: null
        },
        prevClose: {
          type: "number",
          content: null
        },
        open: {
          type: "number",
          content: null
        },
        high: {
          type: "number",
          content: null
        },
        low: {
          type: "number",
          content: null
        },
        wkRange: {
          type: "range",
          mod: "wide",
          content: {
            min: 42.00,
            max: 42.05,
            defaultValue: 42.015,
            label: "CGW 52 Wk Range",
            isLabelHidden: true
          }
        },
        quant: {
          type: "badge",
          mod: "rating",
          content: null
        },
        saAuthors: {
          type: "badge",
          mod: "rating",
          content: null
        },
        sellSide: {
          type: "badge",
          mod: "rating",
          content: null
        },
      }
    },
    {
      rowId: "3",
      cells: {
        symbol: {
          type: "text",
          content: "FIX"
        },
        price: {
          type: "number",
          content: 48.60
        },
        change: {
          type: "relativeNumber",
          content: -0.16
        },
        relativeChange: {
          type: "relativePercents",
          content: -100.33
        },
        alerts: {
          type: "checkbox",
          content: {
            name: "fix-alert-status",
            label: "FIX alerts enable",
            mods: ["text-center"],
            isLabelHidden: true
          }
        },
        volume: {
          type: "number",
          content: 48.76
        },
        avgVolume: {
          type: "number",
          content: 48.76
        },
        prevClose: {
          type: "number",
          content: 48.76
        },
        open: {
          type: "number",
          content: 48.76
        },
        high: {
          type: "number",
          content: 48.76
        },
        low: {
          type: "number",
          content: 48.76
        },
        wkRange: {
          type: "range",
          mod: "wide",
          content: {
            min: 48.91,
            max: 48.98,
            defaultValue: 48.96,
            label: "FIX 52 Wk Range",
            isLabelHidden: true
          }
        },
        quant: {
          type: "badge",
          mod: "rating",
          content: 3.00
        },
        saAuthors: {
          type: "badge",
          mod: "rating",
          content: 2.34
        },
        sellSide: {
          type: "badge",
          mod: "rating",
          content: 1.67
        }
      }
    }
  ]
};