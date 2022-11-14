import PropTypes from "prop-types";

const ShopItemFunc = (props) => {

	const { item } = props;

	return (
		<div className="main-content">
			<h2>{item.brand}</h2>
			<h1>{item.title}</h1>
			<h3>{item.description}</h3>
			<div className="description">
				{item.descriptionFull}
			</div>
			<div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
			<div className="divider"></div>
			<div className="purchase-info">
				<div className="price">{item.currency}{item.price}</div>
				<button>Добавить в корзину</button>
			</div>
		</div>
	)
}

ShopItemFunc.propTypes = {
	brand: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	descriptionFull: PropTypes.string,
	price: PropTypes.number.isRequired,
	currency: PropTypes.string.isRequired
}

ShopItemFunc.defaultProps = {
	brand: 'Lorem',
	title: 'New goods',
	description: 'The product description is being edited',
	descriptionFull: ''
}

export default ShopItemFunc;