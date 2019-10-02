import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CartPopup extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<section id="cart-popup">
				<div className="cart-title">
					<div className="title">My Cart</div>
				</div>
				<div className="cart-items">
					<div className="item-container">
						<div className="item">
							<img src="/img/products/KnobCreek.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
				</div>
				<div class="product-total">
					<div class="inside-container">
						<div class="title">Total</div>
						<div class="number">x4</div>
					</div>
				</div>
				<div class="price-total">
					<div class="inside-container">
						<div class="title">Total</div>
						<div class="number">$3,000</div>
					</div>
				</div>
				<div class="checkout">
					<div class="title">Checkout</div>
					<span class="ti-shopping-cart" />
				</div>
			</section>
		);
	}
}

const CartPopupRoot = document.getElementById('CartPopupRoot');

ReactDOM.render(<CartPopup />, CartPopupRoot);
