import { ResponsivePie } from "@nivo/pie";
import { useEffect, useState } from "react";
import axios from "axios";

const PieChartAllIncome = () => {
  const [bankData, setBankData] = useState([]);

  // API Get
  useEffect(() => {
    axios.get("/api/bankdata-api/").then((response) => {
      setBankData(response.data);
    });
  }, []);

  const incomeBell = bankData.filter(function (transaction) {
    return transaction.sub_category === "Ryan Bell Media";
  });
  const incomeKKBrad = bankData.filter(function (transaction) {
    return transaction.sub_category === "KK - Brad & Lindsay";
  });
  const incomeKKJenn = bankData.filter(function (transaction) {
    return transaction.sub_category === "KK - Jenn & Matt";
  });
  const incomeKKErinne = bankData.filter(function (transaction) {
    return transaction.sub_category === "KK - Erinne";
  });
  const incomePP = bankData.filter(function (transaction) {
    return (
      transaction.category === "Income" &&
      transaction.sub_category === "Pebbles & Pine"
    );
  });
  const incomeGov = bankData.filter(function (transaction) {
    return transaction.sub_category === "Government";
  });
  const incomeRyFree = bankData.filter(function (transaction) {
    return transaction.sub_category === "Ryan Freelance";
  });

  console.log(incomeBell);

  const incomeBellTotal = incomeBell
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toFixed(2);

  const incomePPTotal = incomePP
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toFixed(2);

  const incomeKKTotal = [...incomeKKBrad, ...incomeKKJenn, ...incomeKKErinne]
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toFixed(2);

  const incomeGovTotal = incomeGov
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toFixed(2);

  const incomeRyFreeTotal = incomeRyFree
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toFixed(2);

  console.log(incomePPTotal);

  const data = [
    {
      id: "Bell Media",
      label: "Bell Media",
      value: incomeBellTotal,
      color: "var(--clr-bell)",
    },
    {
      id: "Pebbles & Pine",
      label: "Pebbles & Pine",
      value: incomePPTotal,
      color: "var(--clr-pp)",
    },
    {
      id: "Kidlet Kare",
      label: "Kidlet Kare",
      value: incomeKKTotal,
      color: "var(--clr-kk)",
    },
    {
      id: "Government",
      label: "Government",
      value: incomeGovTotal,
      color: "var(--clr-gov)",
    },
    {
      id: "Ryan Freelance",
      label: "Ryan Freelance",
      value: incomeRyFreeTotal,
      color: "var(--clr-free)",
    },
  ];

  return (
    <div className="chart-container">
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={[
          "var(--clr-bell)",
          "var(--clr-pp)",
          "var(--clr-kk)",
          "var(--clr-gov)",
          "var(--clr-free)",
        ]}
        borderWidth={1}
        // borderColor={{
        //     from: 'color',
        //     modifiers: [
        //         [
        //             'darker',
        //             0.2
        //         ]
        //     ]
        // }}
        arcLinkLabelsSkipAngle={10}
        // arcLinkLabelsTextColor={colors.grey[100]}
        arcLinkLabelsThickness={2}
        // arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [
            // [
            //     'darker',
            //     2
            // ]
          ],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 20,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default PieChartAllIncome;
