import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyList extends Component {
  constructor(props) {
    super(props)

    if (props.isControlled) {

      // setting selectedItems to null, will throw an error in line 74 when isControlled is set to false and no defaultSelectedItems
      // setting it to an empty array is also an option
      this.state = {
        selectedItems: null
      }
    } else {
      this.state = {
        selectedItems: props.defaultSelectedItems
      }
    }
  }

  getSelctedItem = () => {
    if (this.props.isControlled) {
      console.error(`MyList isControlled by another component higher in the components tree.
      You need to get the selected Items from it`);

      return null;
    }

    return this.state.selectedItems;
  }

  handleClick = event => {
    const item = event.target.dataset.id;
    const { onItemClick } = this.props;

    if (!this.props.isControlled) {
      this.setState({
        selectedItems: this.state.selectedItems.concat(item)
      })
    }

    if (onItemClick && typeof onItemClick === 'function') {
      onItemClick(item);
    }
  }

  render() {
    return (
      <ul>
        {this.props.data.map(i => {
          const isSelected = Boolean((this.props.isControlled && this.props.selectedItems.indexOf(i) > -1) ||
            (!this.props.isControlled && this.state.selectedItems.indexOf(i) > -1));

          const style = {
            color: (isSelected ? 'blue' : '')
          }

          return (<li data-id={i} onClick={this.handleClick} style={style} key={i}>{i}</li>)
        })}
      </ul>
    )
  }
}

MyList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultSelctedItems: PropTypes.array,
  isControlled: (props, propName, componentName) => {
    if (props.isControlled) {
      if (!props.selectedItems) {
        return new Error(`You must supply an array of selctedItems when component isControlled`);
      }

      if (props.defaultSelectedItems) {
        return new Error(`You have supplied an array of defaultSelctedItems while MyList isControlled is true.
        while MyList isControlled, the selectedItems array, should reflect, the component state, and should be handled in a higher level`);
      }

      if (!props.onItemClick) {
        return new Error(`MyList cannot be set to isControlled true and not have an 'onItemClick' event handler.
        This event handler, should handle the changes in slectedItems state`);
      }

    } else if (props.selectedItems) {
      return new Error(`SelctedItems cannot be passed to MyList, when isControlled is false.
      Use the defaultSelctedItems property`);
    }
  },
  onItemClick: PropTypes.func,
  selectedItems: PropTypes.array
}

MyList.defaultProps = {
  isControlled: false
}

export default MyList;