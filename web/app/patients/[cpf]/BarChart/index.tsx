import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { TipoIndice } from "@/types/index.type";
import { useGetPatientData } from "../use-get-patient-data";
import { useGetPatientIndexes } from "./get-patient-indexes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
};

type BarChartProps = {
  cpf: string;
  indexType: TipoIndice;
};

const colors = [
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "teal",
  "blue",
  "purple",
];

const BarChart: React.FC<BarChartProps> = ({
  cpf,
  indexType,
}: BarChartProps): JSX.Element => {
  const chartRef = React.useRef<ChartJS>(null);
  const [chartData, setChartData] = React.useState<ChartData<"bar">>({
    datasets: [],
  });

  const { data: indexesData } = useGetPatientIndexes(cpf, indexType);

  const labels = indexesData?.map((index) => index.data) ?? [];

  React.useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const labels = (indexesData?.map((index) => index.data) ?? []) as string[];
    const preparedData = labels.map((date) =>
      indexesData
        ?.filter((index) => index.data === date)
        .map((index) => index.indice)
    ) as unknown as number[];

    const data = {
      labels,
      datasets: [
        {
          label: "Indices Cardiacos",
          data: preparedData,
          borderColor: indexType === TipoIndice.CARDIACO ? "red" : "blue",
        },
      ],
    };

    setChartData(data);
  }, [indexesData, indexType]);

  return <Chart ref={chartRef} type="line" data={chartData} />;
};

export default BarChart;
