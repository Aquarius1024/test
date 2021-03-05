import './info-item.css';

function InfoItem(props) {
	const { changeMissionStatus, info, forex } = props;

	let CNY = 0;
	let RUB = 0;
	let USD = 0;

	switch (info.currency) {
		case 'CNY':
			CNY = Number(info.price).toFixed(5);
			RUB = (Number(info.price) * forex['RUB'].value).toFixed(5);
			USD = (Number(info.price) * forex['USD'].value).toFixed(5);
			break;
		case 'USD':
			CNY = (Number(info.price) / forex['USD'].value).toFixed(5);
			RUB = ((Number(info.price) / forex['USD'].value) * forex['RUB'].value).toFixed(5);
			USD = Number(info.price).toFixed(5);
			break;
		case 'RUB':
			CNY = (Number(info.price) / forex['RUB'].value).toFixed(5);
			RUB = Number(info.price).toFixed(5);
			USD = ((Number(info.price) / forex['RUB'].value) * forex['USD'].value).toFixed(5);
			break;
		default:
			break;
	}

	return (
		<tr>
			<td>
				<input
					style={{ display: info.id ? 'inline-block' : 'none' }}
					type="checkbox"
					checked={info.done}
					onChange={() => {
						changeMissionStatus(info);
					}}
				></input>
			</td>
			<td className={info.done ? 'done' : ''}>{info.mission}</td>
			<td>{CNY}</td>
			<td>{RUB}</td>
			<td>{USD}</td>
		</tr>
	);
}

export default InfoItem;
