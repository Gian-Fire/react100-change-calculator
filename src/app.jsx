import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      changeDue: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  handleChange(e) {
    if ( e.target.name === 'amountDue') {
    this.setState({ amountDue: e.target.value });
    } else if (e.target.name === 'amountReceived') {
    this.setState({ amountReceived: e.target.value });
    }
  }

  calculate(amountDue, amountReceived) {
    var amountDue = this.state.amountDue
    var amountReceived = this.state.amountReceived
    var changeDue = amountReceived - amountDue;

    
      this.setState({
        changeDue: changeDue
      })
      
    if ( changeDue >= 20) {
      var twentiesAmount = changeDue / 20;
      this.setState({
        twenties: (Math.floor(twentiesAmount))
    })
    changeDue %= 20;
    } else {
      this.setState({
        twenties: 0
      })
    }
    if ( changeDue >= 10) {
      var tensAmount = changeDue / 10;
      this.setState({
        tens: (Math.floor(tensAmount))
    })
    changeDue %= 10;
    } else {
      this.setState({
        tens: 0
      })
    }
    if ( changeDue >= 5) {
      var fivesAmount = changeDue / 5;
      this.setState({
        fives: (Math.floor(fivesAmount))
    })
    changeDue %= 5;
    } else {
      this.setState({
        fives: 0
      })
    }
    if ( changeDue >= 1) {
      var onesAmount = changeDue / 1;
      this.setState({
        ones: (Math.floor(onesAmount))
    })
    changeDue %= 1;
    } else {
      this.setState({
        ones: 0
      })
    }
    if ( changeDue >= .25) {
      var quartersAmount = changeDue / .25;
      this.setState({
        quarters: (Math.floor(quartersAmount))
    })
    changeDue %= .25;
    } else {
      this.setState({
        quarters: 0
      })
    }
    if ( changeDue >= .10) {
      var dimesAmount = changeDue / .10;
      this.setState({
        dimes: (Math.floor(dimesAmount))
    })
    changeDue %= .10;
    } else {
      this.setState({
        dimes: 0
      })
    }
    if ( changeDue >= .05) {
      var nickelsAmount = changeDue / .05;
      this.setState({
        nickels: (Math.floor(nickelsAmount))
    })
    changeDue %= .05;
    } else {
      this.setState({
        nickels: 0
      })
    }
    if ( changeDue >= .01) {
      var penniesAmount = changeDue / .01;
      this.setState({
        pennies: (Math.round(penniesAmount))
    })
    changeDue %= .01;
    } else {
      this.setState({
        pennies: 0
      })
    }

  }

  render() {

    var banner = 'Please enter the correct amount due and amount received.';
    if (this.state.changeDue > 0) {
      banner = `The total change due is $${this.state.changeDue}`
    } else {
      banner = 'Please enter the correct amount due and amount received.'
    }


    return (
      <div className = 'container' >
        <header> 
          <h1> Change Calculator </h1>
        </header>

        <tagline> Calculates all the change. </tagline>

        <div className = 'row'>
          <div className = 'col-md-4'>
            <div className = 'card'>
              <div className = 'card-body'>
                <h5 className = 'card-title'>
                  Enter Information
                </h5>

                <div className = 'form-group' >
                  <label htmlFor = 'amountDue' > 
                    How much is due? 
                  </label>
                  <input
                    className = 'form-control'
                    name = 'amountDue'
                    type = 'number'
                    value = {this.state.value}
                    onChange = { this.handleChange }
                  />
                </div>
          
                <div className = 'form-group' >
                  <label htmlFor = 'amountReceived' > 
                    How much was received? 
                  </label>
                  <input
                    className = 'form-control'
                    name = 'amountReceived'
                    type = 'number'
                    value = {this.state.value}
                    onChange = { this.handleChange }
                  />
                </div>
                
                  <button
                    className = 'btn btn-primary btn-block'
                    name = 'button'
                    type = 'button'
                    onClick = { this.calculate }
                  >
                    Calculate!
                  </button>

              </div>
            </div>
          </div>

          <div className = 'col-md-8'>
            <div className = 'card' style = {{ padding: '10px' }} >
              
              <div
              className = { 
                'alert alert-' + (this.state.changeDue > 0 ? 'success' : 'danger') 
              }
              name = 'changeDue'
              >
              {banner} </div>
              <div className = 'row' style = {{ paddingBottom: '10px' }}>
                <div className = 'col-md-3' >
                  <div className = 'card' >
                    <div className = 'card-body'>
                      <h5 className = 'card-title text-center' > 
                        Twenties </h5>
                      <p 
                      className = 'test-center change' 
                      name = 'twenties'
                      > 
                        { this.state.twenties } 
                      </p>
                    </div>
                  </div>
                </div>

                <div className = 'col-md-3' >
                  <div className = 'card' >
                    <div className = 'card-body'>
                      <h5 className = 'card-title text-center' >
                        Tens </h5>
                      <p 
                      className = 'test-center change' 
                      name = 'tens'
                      > 
                        { this.state.tens } 
                      </p>
                    </div>
                  </div>
                </div>

                <div className = 'col-md-3' >
                  <div className = 'card' >
                    <div className = 'card-body'>
                      <h5 className = 'card-title text-center' > 
                      Fives </h5>
                      <p 
                      className = 'test-center change' 
                      name = 'fives'
                      > 
                      { this.state.fives } 
                      </p>
                    </div>
                  </div>
                </div>

                <div className = 'col-md-3' >
                  <div className = 'card' >
                    <div className = 'card-body'>
                      <h5 className = 'card-title text-center' > 
                      Ones </h5>
                      <p 
                      className = 'test-center change' 
                      name = 'ones'
                      >
                      { this.state.ones }
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className = 'row'>
                <div className = 'col-md-3' >
                  <div className = 'card' >
                    <div className = 'card-body'>
                      <h5 className = 'card-title text-center' > 
                      Quarters </h5>
                      <p 
                      className = 'test-center change' 
                      name = 'quaters'
                      > 
                      { this.state.quarters } 
                      </p>
                    </div>
                  </div>
                </div>

                <div className = 'col-md-3' >
                  <div className = 'card' >
                    <div className = 'card-body'>
                      <h5 className = 'card-title text-center' > 
                      Dimes </h5>
                      <p 
                      className = 'test-center change' 
                      name = 'dimes'
                      > 
                      { this.state.dimes } 
                      </p>
                    </div>
                  </div>
                </div>

                <div className = 'col-md-3' >
                  <div className = 'card' >
                    <div className = 'card-body'>
                      <h5 className = 'card-title text-center' > 
                      Nickels </h5>
                      <p 
                      className = 'test-center change' 
                      name = 'nickels'
                      > 
                      { this.state.nickels } 
                      </p>
                    </div>
                  </div>
                </div>

                <div className = 'col-md-3' >
                  <div className = 'card' >
                    <div className = 'card-body'>
                      <h5 className = 'card-title text-center' > 
                      Pennies </h5>
                      <p 
                      className = 'test-center change' 
                      name = 'pennies'
                      > 
                      { this.state.pennies } 
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    );
  }
}


export default App;
