import { useState } from 'react';
import './infoBlock.css';

function InfoBlock(props) {
	const currency = [
		{ label: '人民币', value: 'CNY' },
		{ label: '美元', value: 'USD' },
		{ label: '卢布', value: 'RUB' }
	];

	const [info, setInfo] = useState({
		mission: '',
		price: '',
		currency: 'CNY'
	});
	const isNum = new RegExp('^(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*))$');

	function addMission() {
		console.log(isNum.test(info.price));

		if (!isNum.test(info.price)) {
			alert('价格输入有误，请重新输入！！！');
			return;
		}

		props.addMission(info);

		setInfo({
			mission: '',
			price: '',
			currency: 'CNY'
		});
	}

	return (
		<div className="info__block">
			<h4>任务信息</h4>
			<p>
				任务：
				<input
					className="info__block__mission"
					value={info.mission}
					onChange={(e) => {
						setInfo({ ...info, mission: e.target.value });
					}}
				></input>
			</p>
			<p>
				价格：
				<input
					className="info__block__price"
					value={info.price}
					onChange={(e) => {
						setInfo({ ...info, price: e.target.value });
					}}
				></input>
			</p>
			<p>
				货币：
				<select
					className="info__block__currency"
					value={info.currency}
					onChange={(e) => {
						setInfo({ ...info, currency: e.target.value });
					}}
				>
					{currency.map((i) => (
						<option key={i.value} value={i.value}>
							{i.label}
						</option>
					))}
				</select>
			</p>

			{/* <p>{props.forex[info.currency] && `1CNY = ${props.forex[info.currency].value.toFixed(2)} ${info.currency}`}</p> */}
			<p>
				汇率：
				{props.forex[info.currency] &&
					`1${info.currency} ≈ ${(1 / Number(props.forex[info.currency].value)).toFixed(5)} CNY`}
			</p>
			<button onClick={addMission}>添加</button>
		</div>
	);
}

export default InfoBlock;
