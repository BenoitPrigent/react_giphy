
class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      counter: 0
    };
  }

  handleClick = () => {
    // Todo: change the state!
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render() { // TO BUILD and return HTML for
    return (
      <div className={this.state.clicked ? 'clicked' : null}
      onClick={this.handleClick}>
        Hello {this.props.name} {this.state.counter}
      </div>
      );
  };
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Benoit" surname="Gentil "/>, root);
}
