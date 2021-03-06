import React, {Component} from 'react';

class ProductCategoryRow extends React.Component {
    render() {
        return <tr>
            <td colSpan="2">{this.props.category}</td>
        </tr>
    }
}

class ProductRow extends React.Component {
    render() {
        var name = this.props.product.stocked ? this.props.product.name :
            <span style={{color: 'red'}}>{this.props.product.name}</span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component {

    render() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function (product) {
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }
            rows.push(<ProductRow product={product} key={product.name}/>);
            lastCategory = product.category;
        })
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );


    }

}


class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    handleInStockInputChange(e) {
        this.props.onInStockInput(e.target.checked);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextInputChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockInputChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
            filterRows: this.props.products
        };
        this.filterRows = [];
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleInStockInput = this.handleInStockInput.bind(this);
    }

    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        });

        /**
         * 过滤逻辑
         * @type {Array}
         */
        var filterRows = [];
        var $this = this;
        this.props.products.forEach(function (e) {
            if (e.name == filterText) {
                filterRows.push(e);
            }
            if (filterText == '') {
                filterRows = PRODUCTS;
            }
            $this.setState({
                filterRows: filterRows
            });
        });

    }


    handleInStockInput(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextInput={this.handleFilterTextInput}
                    onInStockInput={this.handleInStockInput}
                />
                <ProductTable
                    products={this.state.filterRows}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

class Product extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <FilterableProductTable products={PRODUCTS}/>
        );

    }


}


export  default  Product;