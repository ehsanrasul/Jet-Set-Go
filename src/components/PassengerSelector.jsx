/* eslint-disable react/prop-types */
import { Menu, MenuItems, MenuButton } from "@headlessui/react";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/20/solid";

const PassengerSelector = ({
	adults,
	setAdults,
	childs,
	setChildren,
	infantsInSeat,
	setInfantsInSeat,
	infantsOnLap,
	setInfantsOnLap,
}) => {
	const increment = (setter, count) => setter(count + 1);
	const decrement = (setter, count) => count > 0 && setter(count - 1);

	return (
		<Menu as="div" className="relative inline-block text-left">
			<MenuButton className="px-4 py-1.5 text-gray-700 flex justify-center items-center bg-gray-100 rounded shadow-md hover:bg-gray-100 focus:outline-none">
				<UserIcon className="w-4 h-4 mr-2 fill-gray-700" />
				<span>{adults + childs + infantsInSeat + infantsOnLap}</span>{" "}
				<ChevronDownIcon className="w-4 h-4 ml-2 fill-gray-700" />
			</MenuButton>

			<MenuItems className="absolute mt-2 bg-white border border-gray-200 rounded-md w-64 z-10">
				<div className="p-4">
					{/* Adults */}
					<div className="flex justify-between items-center mb-2">
						<span>Adults</span>
						<div className="flex items-center space-x-2">
							<button
								onClick={() => decrement(setAdults, adults)}
								className="px-2 py-1 text-blue-600 border rounded">
								-
							</button>
							<span>{adults}</span>
							<button
								onClick={() => increment(setAdults, adults)}
								className="px-2 py-1 text-blue-600 border rounded">
								+
							</button>
						</div>
					</div>

					{/* Children */}
					<div className="flex justify-between items-center mb-2">
						<span>
							Children{" "}
							<span className="text-sm text-gray-500">(Aged 2-11)</span>
						</span>
						<div className="flex items-center space-x-2">
							<button
								onClick={() => decrement(setChildren, childs)}
								className="px-2 py-1 text-blue-600 border rounded">
								-
							</button>
							<span>{childs}</span>
							<button
								onClick={() => increment(setChildren, childs)}
								className="px-2 py-1 text-blue-600 border rounded">
								+
							</button>
						</div>
					</div>

					{/* Infants in Seat */}
					<div className="flex justify-between items-center mb-2">
						<span>
							Infants <span className="text-sm text-gray-500">(In seat)</span>
						</span>
						<div className="flex items-center space-x-2">
							<button
								onClick={() => decrement(setInfantsInSeat, infantsInSeat)}
								className="px-2 py-1 text-blue-600 border rounded">
								-
							</button>
							<span>{infantsInSeat}</span>
							<button
								onClick={() => increment(setInfantsInSeat, infantsInSeat)}
								className="px-2 py-1 text-blue-600 border rounded">
								+
							</button>
						</div>
					</div>

					{/* Infants on Lap */}
					<div className="flex justify-between items-center mb-2">
						<span>
							Infants <span className="text-sm text-gray-500">(On lap)</span>
						</span>
						<div className="flex items-center space-x-2">
							<button
								onClick={() => decrement(setInfantsOnLap, infantsOnLap)}
								className="px-2 py-1 text-blue-600 border rounded">
								-
							</button>
							<span>{infantsOnLap}</span>
							<button
								onClick={() => increment(setInfantsOnLap, infantsOnLap)}
								className="px-2 py-1 text-blue-600 border rounded">
								+
							</button>
						</div>
					</div>
				</div>

				<div className="flex justify-between p-4 border-t border-gray-200">
					<button
						className="text-blue-600 hover:underline"
						onClick={() => {
							setAdults(1);
							setChildren(0);
							setInfantsInSeat(0);
							setInfantsOnLap(0);
						}}>
						Cancel
					</button>
					<button
						onClick={() =>
							console.log(
								`Adults: ${adults}, Children: ${childs}, Infants in Seat: ${infantsInSeat}, Infants on Lap: ${infantsOnLap}`
							)
						}
						className="text-blue-600 hover:underline">
						Done
					</button>
				</div>
			</MenuItems>
		</Menu>
	);
};

export default PassengerSelector;
