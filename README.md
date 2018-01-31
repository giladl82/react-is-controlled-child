# Controlled / Not controlled, child component

I wanted to create a smart component (child) inside another component (parent)

This child, can be controlled by a parent controller that handles the state management. It could do it by setState or by using any state store manager (it is irrelevant to this project)

## Properties
	

 - **data:** An array of items to render (always set from parent)
 - **defaultSelctedItems:** An array of items to set as selected by default.
 ***This property can only be set, when component is not
controlled***
- **isControlled:** A boolean, indicating if the component
   is controlled by parent or it controls it's own state.
 -  **onItemClick:** An event handler callback set in the parent to call when an item is clicked.
 - **selctedItems:** An array of items to set as selected. 
   ***This property can only be set, when component is controlled***

For a none controlled component, you can ref it in parent component, and then call it's `getSelctedItem`Ex
Exmaple:

    <MyList ref={list => this.list = list} ... />
    onEvent = () => {
    	const childState = this.list.getSelctedItem();
    }

That's it.
I hope it helps you