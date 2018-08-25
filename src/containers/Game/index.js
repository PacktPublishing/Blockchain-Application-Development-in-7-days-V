import React, { Component }             from 'react'
import PropTypes                        from 'prop-types'
import { connect }                      from 'react-redux'
import { bindActionCreators }           from 'redux'

import { Card, CardHeader }             from 'material-ui/Card'
import {List, ListItem}                 from 'material-ui/List'
import {RadioButton, RadioButtonGroup}  from 'material-ui/RadioButton'
import RaisedButton                     from 'material-ui/RaisedButton'
import TextField                        from 'material-ui/TextField'

import * as gameActionCreators          from 'core/actions/actions-game'

const style = {
    padding: 20,
    margin: 20
}

const displayNumber = {
    fontSize: '50 px',
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
}

const elementStyle = {
    margin: 10,
    padding: 10
}

export class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerNumber: '',
            highLow: 'lower',
            wager: '',
            history: []
        }
    }

    componentDidMount() {
        this.setState({
            playerNumber: this.generatePlayerNumber()
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps)
        if (prevProps.game.timestamp !== this.props.game.timestamp) {
            console.log('State: ', this.state.history)
            const newHistory = this.state.history
            newHistory.push({
                timestamp: this.props.game.timestamp,
                wager: this.props.game.wager,
                playerNumber: this.props.game.playerNumber,
                guess: this.props.game.guess
            })
            this.setState({
                history: newHistory
            })
        }
    }

    render() {
        return (
            <div>
                <Card style={style}>
                    <CardHeader
                        title="Player's Number"
                        subtitle="Will the mystery number be higher or lower than this number?"
                    />
                    <h1 style={displayNumber}>{this.state.playerNumber}</h1>
                </Card>
                <Card style={style}>
                    <CardHeader
                        title="Betting Window"
                    />
                    <RadioButtonGroup
                        name="highLow"
                        defaultSelected={this.state.highLow}
                        onChange={this.handleChange('highLow')}
                    >
                        <RadioButton
                            value="higher"
                            label="Higher"
                            style={elementStyle}

                        />
                        <RadioButton
                            value="lower"
                            label="Lower"
                            style={elementStyle}
                        />
                    </RadioButtonGroup>
                    <TextField
                        hintText="Enter wager"
                        style={elementStyle}
                        type="number"
                        id="wager"
                        value={this.state.wager}
                        onChange={this.handleChange('wager')}
                    />
                    <RaisedButton
                        label="Let's Play!"
                        secondary={true}
                        fullWidth={true}
                        onClick={this.playGame}
                        style={elementStyle}
                    />
                </Card>
                <Card style={style}>
                    <CardHeader
                        title="History"
                    />
                    <List>
                        {this.state.history.map((round) =>
                            <ListItem key={round.timestamp}
                                primaryText="Result"
                                secondaryText={`Wager: ${round.wager}\tYour Number:${round.playerNumber}\tGuess:${round.guess}}`}
                            />
                        )}
                    </List>
                </Card>
            </div>
        )
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    playGame = () => {
        console.log(`Player is betting ${this.state.wager} that ${this.state.playerNumber} is ${this.state.highLow} than the mystery number!`)
        const { actions } = this.props
        actions.game.playRound(
            this.state.wager,
            this.state.playerNumber,
            this.state.highLow
        )
        this.setState({
            playerNumber: this.generatePlayerNumber()
        })
    }

    generatePlayerNumber() {
        return Math.floor(Math.random() * 10)
    }
}

Game.propTypes = {
    actions: PropTypes.object,
    game: PropTypes.object
}

function mapStateToProps(state) {
    return {
        game: state.game
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            game: bindActionCreators(gameActionCreators, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
