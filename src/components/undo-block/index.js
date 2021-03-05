import './undo-block.css';
import InfoItem from '../info-item';

function UndoBlock(props) {
	const { tableData, title, changeMissionStatus, forex } = props;

	return (
		<div className="undo__block">
			<h4>{title}</h4>
			<table className="undo__block__table">
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
				</tbody>
			</table>
		</div>
	);
}

export default UndoBlock;
