function dataImport() {
	d3.json("/api/mvf").then(function (data) {
		console.log(data);

		// bb.defaults({
		// 	data: {
		// 		type:"pie",
		// 		color: function(color, d) {
		// 			return ["red", "silver"][d.index]
		// 		}
		// 	}
		// })

		var chart = bb.generate({
			data: {
				columns: [
					["Males with Heart Disease", data[0]['male']],
					["Males w/o Heart Disease", 1 - data[0]['male']]
				],
				type: "pie", // for ESM specify as: pie()
				colors: {
					"Males with Heart Disease": "red",
					"Males w/o Heart Disease": "silver"
				}	  
			},
			bindto: "#m Chart"
		})

		var chart = bb.generate({
			data: {
				columns: [
					["Females with Heart Disease", data[0]['female']],
					["Females w/o Heart Disease", 1 - data[0]['female']]
				],
				type: "pie", // for ESM specify as: pie()
				colors: {
					"Females with Heart Disease": "red",
					"Females w/o Heart Disease": "silver"
				}			  
			},
			bindto: "#f Chart"
		})
	})


	d3.json("/api/comorb").then(function (data) {
		console.log("/api/comorb");
		console.log(data);
		var data = [
			{
				x: ['Zero Conditions', 'One Condition', 'Two Conditions', 'Three Conditions', 'Four Conditions'],
				y: [data[0]['A0'], data[0]['A1'], data[0]['A2'], data[0]['A3'], data[0]['A4']],
				type: 'bar',
				marker: {
					color: [
						'red', 'red', 'red', 'red', 'red'
					]
				},
			}
		];
		var layout = {
			title: 'Risk of Heart Disease with multiple conditions',
		  };
		Plotly.newPlot('myDiv', data, layout);
	})

	d3.json("/api/lifestyle").then(function (data) {
			var all = {
				x: [0, 1, 2, 3, 4],
				y: [data[0]['A0'], data[0]['A1'], data[0]['A2'], data[0]['A3'], data[0]['A4']],
				mode: 'markers',
				type: 'scatter',
				name: 'ALL'
			};

			var female = {
				x: [0, 1, 2, 3, 4],
				y: [data[0]['F0'], data[0]['F1'], data[0]['F2'], data[0]['F3'], data[0]['F4']],
				mode: 'lines+markers',
				type: 'scatter',
				name: 'Female'
			};

			var male = {
				x: [0, 1, 2, 3, 4],
				y: [data[0]['M0'], data[0]['M1'], data[0]['M2'], data[0]['M3'], data[0]['M4']],
				mode: 'lines+markers',
				type: 'scatter',
				name: 'Male'
			};

			var data = [all, female, male];
			var layout = {
				title: 'Risk of Heart Disease based on lifestyle',
			  };
			Plotly.newPlot('plot', data, layout);
	})
}

// // Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);


// // This function is called when a dropdown menu item is selected
function updatePlotly() {
	d3.json("/api/comorb").then(function (data) {

		console.log("Update Plots", data);
		// Use D3 to select the dropdown menu
		let dropdownMenu = d3.select("#selDataset");
		// Assign the value of the dropdown menu option to a variable
		let dataset = dropdownMenu.property("value");

		// Initialize x and y arrays
		let x = [];
		let y = [];

		if (dataset === 'MaleandFemale') {

			x = ['Zero', 'One', 'Two', 'Three', 'Four'];
			y = [data[0]['A0'], data[0]['A1'], data[0]['A2'], data[0]['A3'], data[0]['A4']];
		}
		else if (dataset === 'Female') {
			x = ['Zero', 'One', 'Two', 'Three', 'Four'];
			y = [data[0]['F0'], data[0]['F1'], data[0]['F2'], data[0]['F3'], data[0]['F4']];
		}
		else if (dataset === 'Male') {
			x = ['Zero', 'One', 'Two', 'Three', 'Four'];
			y = [data[0]['M0'], data[0]['M1'], data[0]['M2'], data[0]['M3'], data[0]['M4']];
		}
		// Note the extra brackets around 'x' and 'y'
		Plotly.restyle("myDiv", "x", [x]);
		Plotly.restyle("myDiv", "y", [y]);
	})
}


function updateCharts(value) {
	console.log(value)
}	

dataImport()
