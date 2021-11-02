var MyComponent = React.createClass({
	displayName: 'my component',
	render: function() {
		return (
			<p>此為React的範例程式。</p>
		);
	}
});

ReactDOM.render(
	<MyComponent/>,
	document.getElementById('msg')
);