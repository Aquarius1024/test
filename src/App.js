import './App.css';
import InfoBlock from './components/info-block/';
import UndoBlock from './components/undo-block';
import DoneBlock from './components/done-block';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// 这里通过fetch获得
const forex = {
	USD: {
		value: 0.1520248078866076, // 人民币 => USD
		previous: 0.15222544878563884,
		date: '2020-11-25T11:30:00+03:00'
	},
	RUB: {
		value: 11.5257, // 人民币 => RUB
		previous: 11.5326,
		date: '2020-11-25T11:30:00+03:00'
	}
};

function App() {
	const [infoArr, setInfoArr] = useState([]);
	const addMission = (info) => {
		const newArr = [...infoArr, { ...info, done: false, id: uuidv4() }];
		setInfoArr(newArr);
	};

	const changeMissionStatus = (e) => {
		for (let i = 0; i < infoArr.length; i++) {
			if (infoArr[i].id === e.id) {
				infoArr[i].done = !infoArr[i].done;
				break;
			}
		}
		setInfoArr([...infoArr]);
	};

	return (
		<div className="App">
			<InfoBlock addMission={addMission} forex={forex} />
			<UndoBlock
				title="未完成列表"
				changeMissionStatus={changeMissionStatus}
				tableData={infoArr.filter((i) => !i.done)}
				forex={forex}
			/>
			<div>
				<DoneBlock
					title="已完成列表"
					changeMissionStatus={changeMissionStatus}
					tableData={infoArr.filter((i) => i.done)}
					forex={forex}
				/>
			</div>
		</div>
	);
}

export default App;
