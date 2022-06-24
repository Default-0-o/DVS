import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ChartCard = ({ data }) => {
	console.log(data.map((asset) => parseFloat(asset.balance)));
	console.log(data.map((asset) => asset.asset));

	const [tokenSeries, setTokenSeries] = useState([]);
	const [series, setSeries] = useState([]);

	const options = {
		chart: {
			id: "don",
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
			horizontalAlign: "left",
		},
		xaxis: {
			categories: tokenSeries,
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
		setSeries(data && data.map((asset) => parseFloat(asset.balance)));
		setTokenSeries(data && data.map((asset) => asset.asset));
	}, [data]);

	let chart = (
		<Chart
			series={series.length > 0 ? series : [0.00000000001]}
			options={options}
			type="donut"
			width="100%"
			height="100%"
		/>
	);

	useEffect(() => {
		chart = (
			<Chart
				series={series.length > 0 ? series : [0.00000000001]}
				options={options}
				type="donut"
				width="100%"
				height="100%"
			/>
		);
	}, [series, options]);

	return (
		<div className="card">
			<div className="card-body">
				<h3 className="card-title text-end mb-8 ">Wallet</h3>
				<div className="chart-card">{chart}</div>
			</div>
		</div>
	);
};

export default ChartCard;
