import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const ChartCard = () => {
	const options = {
		series: [44, 55, 41, 17, 15],
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
			formatter: function (val, opts) {
				return val + " - " + opts.w.globals.series[opts.seriesIndex];
			},
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
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
				<div id="chart"></div>
			</div>
		</div>
	);
};

export default ChartCard;
