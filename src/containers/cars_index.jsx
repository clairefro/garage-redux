import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class CarsIndex extends Component {
  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id} className="card-link">
          <div className="card-product">
            <img src="https://media.istockphoto.com/vectors/-vector-id927145440?k=6&m=927145440&s=612x612&w=0&h=bIEKV8ZAPXjA2ktgseHDgoxxKO6UfdjCWBnCtoodQNs=" alt="car" />
            <div className="card-product-infos">
              <h2>{car.brand}-{car.model}</h2>
              <p>Owner: {car.owner}</p>
            </div>
          </div>
        </Link>
      );
    });
  }

  render() {
    const { garage } = this.props;
    return (
      <div className="flex cars-index-container">
        <div className="left-info-panel">
          <div className="banner">
            <div className="banner-icon">
            </div>
          </div>
          <div className="garage-info">
            <h3>{garage}</h3>
            <p>We repair and refurbish you car with the best service in town.</p>
            <Link to="/cars/new"></Link>
          </div>
        </div>
        <div className="car-list">
          {this.renderCars()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    garage: reduxState.garage,
    cars: reduxState.cars
  };
}

export default connect(mapStateToProps)(CarsIndex);
