import './done-block.css';
import InfoItem from '../info-item';
import { useEffect, useState } from 'react';

function DoneBlock(props) {
	const { tableData, title, changeMissionStatus, forex } = props;
	const [total, setTotal] = useState({
		mission: 'Total',
		price: '',
		currency: ''
	});

	useEffect(() => {
		let sum = 0;
		tableData.forEach((item) => {
			switch (item.currency) {
				case 'CNY':
					sum += Number(item.price);
					break;
				case 'USD':
					sum += Number(item.price) / forex['USD'].value;
					break;
				case 'RUB':
					sum += Number(item.price) / forex['RUB'].value;
					break;
				default:
					break;
			}
		});

		setTotal({
			mission: 'Total',
			price: sum,
			currency: 'CNY'
		});
	}, [tableData, forex]);

	return (
		<div className="done__block">
			<h4>{title}</h4>
			<table className="done__block__table">
				<thead>
					<tr>
						<th>#{/* <input type="checkbox"></input> */}</th>
						<th>任务名</th>
						<th>人民币</th>
						<th>卢布</th>
						<th>美元</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map((info, idx) => (
						<InfoItem info={info} key={idx} changeMissionStatus={changeMissionStatus} forex={forex} />
					))}

					<tr>
						<td colSpan="5">
							<hr />
						</td>
					</tr>

					<InfoItem info={total} forex={forex} />
				</tbody>
			</table>
		</div>
	);
}

export default DoneBlock;
