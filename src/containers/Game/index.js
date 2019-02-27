import React, { Component }             from 'react'
import PropTypes                        from 'prop-types'
import { connect }                      from 'react-redux'
import { bindActionCreators }           from 'redux'

import { Card, CardHeader }             from 'material-ui/Card'
import {List, ListItem}                 from 'material-ui/List'
import {RadioButton, RadioButtonGroup}  from 'material-ui/RadioButton'
import RaisedButton                     from 'material-ui/RaisedButton'
import Snackbar                         from 'material-ui/Snackbar'
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
            history: [],
            snackbar: false,
            message: '',
        }
    }

    componentDidMount() {
        this.setState({
            playerNumber: this.generatePlayerNumber()
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.game.transactionHash !== this.props.game.transactionHash) {
            if (nextProps.game.success === false) {
                // Error
                console.log(nextProps.game.error)
                this.setState({
                    snackbar: true,
                    message: nextProps.game.error
                })
            } else {
                const newHistory = this.state.history
                newHistory.push({
                    transactionHash: nextProps.game.transactionHash,
                    wager: nextProps.game.wager,
                    playerNumber: nextProps.game.playerNumber,
                    mysteryNumber: nextProps.game.mysteryNumber,
                    guess: nextProps.game.guess,
                    result: nextProps.game.result
                })
                this.setState({
                    history: newHistory,
                    snackbar: true,
                    message: `${nextProps.game.result} ${nextProps.game.wager} ether`
                })
                const { actions } = this.props
                actions.game.getScore()
            }
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
                        subtitle={`Current record ${this.props.game.wins} - ${this.props.game.losses}`}
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
                <Card>
                    <CardHeader
                        title="History"
                    />
                    <List>
                        {this.state.history.map((round) =>
                            <ListItem key={round.transactionHash}
                                primaryText={`Result:\t${round.result}`}
                                secondaryText={`You ${round.result} ${round.wager} by guessing ${round.playerNumber} would be ${round.guess} than ${round.mysteryNumber}!`}
                            />
                        )}
                    </List>
                </Card>
                <Snackbar
                    open={this.state.snackbar}
                    message={this.state.message}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    playGame = () => {
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

    handleRequestClose = () => {
        this.setState({snackbar: false})
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
