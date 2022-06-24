import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const ChartCard = ({ data }) => {
	const options = {
		series: data.map((asset) => asset.balance),
		chart: {
			width: 450,
			type: "donut",
		},
		plotOptions: {
			pie: {
				startAngle: -90,
				endAngle: 270,
			},
		},
		dataLabels: {
			enabled: false,
		},
		fill: {
			type: "gradient",
		},
		legend: {
			formatter: (seriesName, opts) =>
				opts.w.globals.labels.length > 0 &&
				opts.w.globals.labels[opts.seriesIndex] +
					" - " +
					opts.w.globals.series[opts.seriesIndex],
		},
		xaxis: {
			categories: data.map((asset) => asset.asset),
		},
		tooltip: {
			enabled: data.length > 0 ? true : false,
			y: {
				formatter: function (val, opts) {
					return opts.globals.labels[opts.dataPointIndex];
				},
				title: {
					formatter: function () {
						return null;
					},
				},
			},
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 350,
					},
					legend: {
						position: "bottom",
					},
				},
			},
			{
				breakpoint: 380,
				options: {
					chart: {
						width: 250,
					},
					legend: {
						position: "bottom",
					},
				},
			},
		],
	};

	useEffect(() => {
		const chart = new ApexCharts(document.getElementById("chart"), options);
		chart.render();
		return () => {
			chart.destroy();
		};
	}, []);

	return (
		<div className="card">
			<div className="card-body">
				<h3 className="card-title text-end mb-8">Wallet</h3>
				<div id="chart" className="chart-card"></div>
			</div>
		</div>
	);
};

export default ChartCard;
