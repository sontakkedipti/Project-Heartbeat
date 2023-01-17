function dataImport() {

	// NEW CODE BY VICTOR
	d3.json("/api/hddict").then(function (data) {
		console.log("/api/hddict")
		console.log(data);

		var data = [
			{
				labels: ['People with Heart Disease', 'People w/o Heart Disease'],
				values: [data[0]['Has Heart Disease'], data[0]['Does not have Heart Disease']],
				type: 'pie',
				marker: {
					'colors': [
						'red','silver',
					]
				}
			}
		];
		var layout = {
			title: 'Percentage of Heart Disease in the population'
		  };
		Plotly.newPlot('hd Chart', data, layout);
	})

	d3.json("/api/age_dict").then(function (data) {
		console.log("/api/age_dict")
		console.log(data);

		var trace1 = {
				x: ['18-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80+'],
				y: [data[0]['Twenties True'], data[0]['Thirties True'], data[0]['Forties True'], data[0]['Fifties True'], data[0]['Sixties True'], data[0]['Seventies True'], data[0]['Eighties Plus True']],
				name: "Has Heart Disease",
				marker: {
					color: [
						'red', 'red', 'red', 'red', 'red', 'red', 'red'
					]
				},
				type: 'bar'
			};

		var trace2 = {
			x: ['18-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80+'],
			y: [data[0]['Twenties False'], data[0]['Thirties False'], data[0]['Forties False'], data[0]['Fifties False'], data[0]['Sixties False'], data[0]['Seventies False'], data[0]['Eighties Plus False']],
			name: "Does not have Heart Disease",
			marker: {
				color: [
					'silver', 'silver', 'silver', 'silver', 'silver', 'silver', 'silver'
				]
			},
			type: 'bar',
		};
		
		var data = [trace1, trace2];
		var layout = {
			title: 'Heart Disease by Age group',
		  };
		Plotly.newPlot('age_dict', data, layout);
	})
}

// Call charts for radio button
d3.selectAll("input[name='stack']").on("change", function(){
    console.log(this.value)
	globalVariable = this.value;
	switch(this.value){
		case "Diabetes":
			d3.json("/api/d_dict").then(function (data) {
				console.log("d_dict")
				console.log(data);

				var data = [
					{
						labels: ['Heart Disease', 'No Heart Disease'],
						values: [data[0]['Has Diabetes and HD'], data[0]['Has Diabetes but not HD']],
						type: 'pie',
						domain: {column: 0},
						marker: {
							'colors': [
								'red','silver',
							]
						}
					},{
						labels: ['Heart Disease', 'No Heart Disease'],
						values: [data[0]['Does not have Diabetes but has HD'], data[0]['Does not have Diabetes or HD']],
						type: 'pie',
						domain: {column: 1},
						marker: {
							'colors': [
								'red','silver',
							]
						}
					}
				];
				var layout = {
					annotations: [
					  {
						font: {
						  size: 20
						},
						showarrow: false,
						text: 'Heart Disease among people with Diabetes',
						x: 0.06,
						y: 1.1
					  },
					  {
						font: {
						  size: 20
						},
						showarrow: false,
						text: 'Heart Disease among people without Diabetes',
						x: .94,
						y: 1.1
					  }
					],
					height: 700,
					width: 1500,
					showlegend: false,
					grid: {rows: 1, columns: 2}
				  };
				Plotly.newPlot('d_dict', data, layout);
			})			
			var x1 = document.getElementById("sc_dict");
			x1.style.display = "none";
			var x2 = document.getElementById("nc_dict");
			x2.style.display = "none";
			var x3 = document.getElementById("d_dict");
			x3.style.display = "block";
			var x4 = document.getElementById("nd_dict");
			x4.style.display = "block";
			var x5 = document.getElementById("a_dict");
			x5.style.display = "none";
			var x6 = document.getElementById("na_dict");
			x6.style.display = "none";
			var x7 = document.getElementById("kd_dict");
			x7.style.display = "none";
			var x8 = document.getElementById("nkd_dict");
			x8.style.display = "none";
			break;


		case "Skin Cancer":	
			d3.json("/api/sc_dict").then(function (data) {
				console.log("sc_dict")
				console.log(data);
				
				var data = [
					{
						labels: ['Heart Disease', 'No Heart Disease'],
						values: [data[0]['Has Skin Cancer and HD'], data[0]['Has Skin Cancer but not HD']],
						type: 'pie',
						domain: {column: 0},
						marker: {
							'colors': [
								'red','silver',
							]
						}
					},{
						labels: ['Heart Disease', 'No Heart Disease'],
						values: [data[0]['Does not have Skin Cancer but has HD'], data[0]['Does not have Skin Cancer or HD']],
						type: 'pie',
						domain: {column: 1},
						marker: {
							'colors': [
								'red','silver',
							]
						}
					}
				];
				var layout = {
					annotations: [
					  {
						font: {
						  size: 20
						},
						showarrow: false,
						text: 'Heart Disease among people with Skin Cancer',
						x: 0.08,
						y: 1.1
					  },
					  {
						font: {
						  size: 20
						},
						showarrow: false,
						text: 'Heart Disease among people without Skin Cancer',
						x: .95,
						y: 1.1
					  }
					],
					height: 700,
					width: 1500,
					showlegend: false,
					grid: {rows: 1, columns: 2}
				  };
				Plotly.newPlot('sc_dict', data, layout);
			})
			var x1 = document.getElementById("sc_dict");
			x1.style.display = "block";
			var x2 = document.getElementById("nc_dict");
			x2.style.display = "block";
			var x3 = document.getElementById("d_dict");
			x3.style.display = "none";
			var x4 = document.getElementById("nd_dict");
			x4.style.display = "none";
			var x5 = document.getElementById("a_dict");
			x5.style.display = "none";
			var x6 = document.getElementById("na_dict");
			x6.style.display = "none";
			var x7 = document.getElementById("kd_dict");
			x7.style.display = "none";
			var x8 = document.getElementById("nkd_dict");
			x8.style.display = "none";

			break;


		case "Asthma":
			d3.json("/api/a_dict").then(function (data) {
				console.log("a_dict")
				console.log(data);
				
				var data = [
					{
						labels: ['Heart Disease', 'No Heart Disease'],
						values: [data[0]['Has Asthma and HD'], data[0]['Has Asthma but not HD']],
						type: 'pie',
						domain: {column: 0},
						marker: {
							'colors': [
								'red','silver',
							]
						}
					},{
						labels: ['Heart Disease', 'No Heart Disease'],
						values: [data[0]['Does not have Asthma but has HD'], data[0]['Does not have Asthma or HD']],
						type: 'pie',
						domain: {column: 1},
						marker: {
							'colors': [
								'red','silver',
							]
						}
					}
				];
				var layout = {
					annotations: [
					  {
						font: {
						  size: 20
						},
						showarrow: false,
						text: 'Heart Disease among people with Asthma',
						x: 0.08,
						y: 1.1
					  },
					  {
						font: {
						  size: 20
						},
						showarrow: false,
						text: 'Heart Disease among people without Asthma',
						x: .93,
						y: 1.1
					  }
					],
					height: 700,
					width: 1500,
					showlegend: false,
					grid: {rows: 1, columns: 2}
				  };
				Plotly.newPlot('a_dict', data, layout);
			})			
			var x1 = document.getElementById("sc_dict");
			x1.style.display = "none";
			var x2 = document.getElementById("nc_dict");
			x2.style.display = "none";
			var x3 = document.getElementById("d_dict");
			x3.style.display = "none";
			var x4 = document.getElementById("nd_dict");
			x4.style.display = "none";
			var x5 = document.getElementById("a_dict");
			x5.style.display = "block";
			var x6 = document.getElementById("na_dict");
			x6.style.display = "block";
			var x7 = document.getElementById("kd_dict");
			x7.style.display = "none";
			var x8 = document.getElementById("nkd_dict");
			x8.style.display = "none";
			break;


		case "Kidney Disease":
			d3.json("/api/kd_dict").then(function (data) {
				console.log("kd_dict")
				console.log(data);
				
				var data = [
					{
						labels: ['Heart Disease', 'No Heart Disease'],
						values: [data[0]['Has Kidney Disease and HD'], data[0]['Has Kidney Disease but not HD']],
						type: 'pie',
						domain: {column: 0},
						marker: {
							'colors': [
								'red','silver',
							]
						}
					},{
						labels: ['Heart Disease', 'No Heart Disease'],
						values: [data[0]['Does not have Kidney Disease but has HD'], data[0]['Does not have Kidney Disease or HD']],
						type: 'pie',
						domain: {column: 1},
						marker: {
							'colors': [
								'red','silver',
							]
						}
					}
				];
				var layout = {
					annotations: [
					  {
						font: {
						  size: 20
						},
						showarrow: false,
						text: 'Heart Disease among people with Kidney Disease',
						x: 0.06,
						y: 1.1
					  },
					  {
						font: {
						  size: 20
						},
						showarrow: false,
						text: 'Heart Disease among people without Kidney Disease',
						x: .95,
						y: 1.1
					  }
					],
					height: 700,
					width: 1500,
					showlegend: false,
					grid: {rows: 1, columns: 2}
				};
				Plotly.newPlot('kd_dict', data, layout);
			})
			
			var x1 = document.getElementById("sc_dict");
			x1.style.display = "none";
			var x2 = document.getElementById("nc_dict");
			x2.style.display = "none";
			var x3 = document.getElementById("d_dict");
			x3.style.display = "none";
			var x4 = document.getElementById("nd_dict");
			x4.style.display = "none";
			var x5 = document.getElementById("a_dict");
			x5.style.display = "none";
			var x6 = document.getElementById("na_dict");
			x6.style.display = "none";
			var x7 = document.getElementById("kd_dict");
			x7.style.display = "block";
			var x8 = document.getElementById("nkd_dict");
			x8.style.display = "block";
			break;	
			
			
		default:
			
			var x1 = document.getElementById("sc_dict");
			x1.style.display = "none";
			var x2 = document.getElementById("nc_dict");
			x2.style.display = "none";
			var x3 = document.getElementById("d_dict");
			x3.style.display = "none";
			var x4 = document.getElementById("nd_dict");
			x4.style.display = "none";
			var x5 = document.getElementById("a_dict");
			x5.style.display = "none";
			var x6 = document.getElementById("na_dict");
			x6.style.display = "none";
			var x7 = document.getElementById("kd_dict");
			x7.style.display = "none";
			var x8 = document.getElementById("nkd_dict");
			x8.style.display = "none";
			break;
	}
});

function updateCharts(value) {
	console.log(value)
}	

dataImport()
