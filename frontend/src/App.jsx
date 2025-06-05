import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

function App() {
	function OperatingHoursTable() {
		const [hours, setHours] = useState([]);
		useEffect(() => {
		fetch('https://prontocafegelato.com/api/hours')
			.then(res => res.json())
			.then(data => setHours(data))
			.catch(err => console.error('Failed to fetch hours:', err));
		}, []);

		return (
			<>
			<table className="text-lg sm:text-xl md:text-4xl font-serif text-gray-500 m-5">
				<tbody>
					{hours.map((row, index) => (
						<tr key={index}>
							<td className="text-left py-2 pr-3 md:pr-30">{row.day.toProperCase()}</td>
							<td className="text-right py-2">{row.time}</td>
						</tr>
					))}
				</tbody>
			</table>
			</>
		);
	}

	function FlavoursTable() {
		const [flavours, setFlavours] = useState([]);
		useEffect(() => {
		fetch('https://prontocafegelato.com/api/flavours')
			.then(res => res.json())
			.then(data => setFlavours(data))
			.catch(err => console.error('Failed to fetch flavours:', err));
		}, []);

		const midpoint = Math.ceil(flavours.length / 2);
		const col1 = flavours.slice(0, midpoint);
		const col2 = flavours.slice(midpoint)

		return (
			<>
			<table className="text-xl sm:text-2xl lg:text-4xl font-serif text-gray-700 mt-2 mb-3">
				<tbody>
					{Array.from({length: midpoint}).map((_, index) => (
						<tr key={index}>
							<td className="text-left py-1 pr-5 md:pr-20">{col1[index] && (col1[index]?.vegan ? `${col1[index]?.name.toProperCase()} (V)` : col1[index]?.name.toProperCase())}</td>
							<td className="text-left py-1">{col2[index] && (col2[index]?.vegan ? `${col2[index]?.name.toProperCase()} (V)` : col2[index]?.name.toProperCase())}</td>
						</tr>
					))}
				</tbody>
			</table>
			</>
		);
	}

	function SizesTable() {
		const [sizes, setSizes] = useState([]);
		useEffect(() => {
		fetch('https://prontocafegelato.com/api/sizes')
			.then(res => res.json())
			.then(data => {
			  const sorted = [...data].sort((a, b) => a.price - b.price);
			  setSizes(sorted);
			})
			.catch(err => console.error('Failed to fetch sizes:', err));
		}, []);

		return (
			<>
			<table className="width-full text-xl md:text-4xl font-serif text-gray-500 m-5">
				<tbody>
					{sizes.map((row, index) => (
						<tr key={index}>
							<td className="text-left py-2 pr-20 md:pr-50">{row.name.toProperCase()}</td>
							<td className="text-right py-2">{isNaN(row.price) ? ``:`$`}{row.price}</td>
						</tr>
					))}
				</tbody>
			</table>
			</>
		);
	}

  return (
    <>
    	<div>
		{/* Mobile Hero */}
		<div className="block sm:hidden w-full min-h-screen flex justify-center items-center bg-cover bg-top bg-no-repeat" style={{ backgroundImage: "url('/gelato-mobile.jpg')" }}>
		  <div className="backdrop-blur-lg bg-[#e4d5b7]/40 rounded-3xl shadow-xl/20 items-center text-center m-10">
			<h1 className="text-5xl font-bold text-white font-serif p-5">PRONTO CAFE</h1>
		  </div>
		</div>

		{/* Desktop/Tablet Hero */}
		<div className="hidden sm:flex w-full min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/gelato.jpg')" }}>
		  <div className="backdrop-blur-lg bg-[#e4d5b7]/40 rounded-3xl shadow-xl/20 items-center text-center m-10">
			<h1 className="text-7xl lg:text-8xl font-bold text-white font-serif p-5">PRONTO CAFE</h1>
		  </div>
		</div>

		  {/* Hours of operation */}
		  <div className="w-full p-8 pb-12 flex flex-col bg-white items-center text-center">
			<h1 className="text-4xl md:text-6xl font-bold text-gray-600 p-5 md:p-10 font-serif">
				HOURS OF OPERATION
			</h1>

			<div>
				<OperatingHoursTable/>
			</div>
		  </div>

		  {/* Flavours */}
		  <div className="w-full p-8 pb-12 flex flex-col bg-[#f4f1de] items-center text-center">
			<h1 className="text-4xl md:text-6xl font-bold text-gray-700 p-5 md:p-10 md:pb-5 font-serif">
				Flavours
			</h1>
			<p className="font-serif text-md sm:text-lg lg:text-xl md:pb-5">
				Please be advised that all our flavours contain traces of&nbsp;
				<span className="font-bold font-serif">peanuts, tree nuts, and gluten. </span>
				Thank you for your cooperation.
			</p>
			<div>
 				<FlavoursTable/>
 				<p className="text-lg sm:text-xl lg:text-3xl font-serif text-gray-700">V = Vegan</p>
			</div>
		  </div>

		  {/* Gelato Sizes */}
		  <div className="w-full p-8 pb-12 flex flex-col bg-white items-center text-center">
			<h1 className="text-4xl md:text-6xl font-bold text-gray-600 p-5 md:p-10 font-serif">
				Sizes
			</h1>

			<div>
				<SizesTable/>
			</div>
		  </div>

		  {/* Contact Info */}
		  <div className="w-full flex flex-col items-center bg-gray-200 p-10">
		  	<h2 className="text-5xl font-serif pb-3">Contact Us</h2>
		  	<table className="text-xl md:text-3xl text-gray-800 font-serif m-2 md:m-5">
		  		<tbody>
		  			<tr>
		  				<td className="text-left pr-4 pb-3"><i className="fa fa-phone"/></td>
		  				<td className="text-left pb-3">(905) 832-5216</td>
		  			</tr>
		  			<tr>
		  				<td className="text-left pb-3"><i className="fa fa-instagram"/></td>
		  				<td className="text-left pb-3">@_prontocafe</td>
		  			</tr>
		  			<tr>
		  				<td className="text-left pb-3"><i className="fa fa-envelope-o"/></td>
		  				<td className="text-left pb-3">orders@prontocafegelato.com</td>
		  			</tr>
		  			<tr>
		  				<td className="text-left pb-3"><i className="fa fa-map-marker"/></td>
		  				<td className="text-left pb-3">9222 Keele Street, Vaughan, ON L4k 5A3</td>
		  			</tr>
		  		</tbody>
		  	</table>
		  </div>

		  {/* Footer */}
		  <div className="w-full flex flex-col items-center bg-gray-400 p-1 md:p-5">
			<p className="font-sans text-white ">&copy; Pronto Cafe 2025</p>
		  </div>
		</div>
    </>
  )
}

export default App
