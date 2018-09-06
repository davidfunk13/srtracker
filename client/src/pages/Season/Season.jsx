import React, { Component } from "react";
import ReactModal from "react-modal";
import { Link } from 'react-router-dom'
import AddGameForm from '../../components/AddGameForm/AddGameForm'

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "60%",
    border: "1px solid black"
  }
};

class Season extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  componentWillMount() {
    ReactModal.setAppElement("body");
  }
  closeModalandResetForm = () => {
    this.props.formActions.gameFormActions.resetGameForm()
    this.props.modalActions.closeModal()
  }
  render() {
    return (
      <div className="container">
        <ReactModal isOpen={this.props.showModal} style={modalStyles}>
          <AddGameForm {...this.props} />
          <button className="btn btn--close-modal" onClick={() => this.closeModalandResetForm()}>close modal</button>
        </ReactModal>
        <div className='row'>
          <div className='col-12'>
            <h1>Active Season</h1>
            <div className='section text-center margin-bottom-small'>
              {this.props.currentSeason ?
                <div>
                  <p>Battletag: {this.props.currentSeason.Battletag} </p>
                  <p>Starting SR: {this.props.currentSeason.StartingSR} </p>
                  <p>Current SR: {this.props.currentSeason.CurrentSR}</p>
                  <p>Heros Focused: {this.props.currentSeason.HerosFocused.join(', ')} </p>
                </div>
                :
                <div>
                  <p>Battletag: Loading... </p>
                  <p>Starting SR: Loading... </p>
                  <p>Heros Focused: Loading... </p>
                </div>
              }
            </div>
          </div>
        </div>
        <Link className='btn btn-primary btn-block margin-bottom-small' role='button' to='/season' onClick={() => { this.props.modalActions.openModal() }}>Add a game to this Season!</Link>
        {this.props.currentSeason.Games.length ?
          <div className='row'>
            <div className='col-12'>
              <h1>Games</h1>
              <table className='table section'>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Map</th>
                    <th scope="col">Hero</th>
                    <th scope="col">Outcome</th>
                    <th scope="col">SR After</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.currentSeason.Games.map((game, i) => {
                    return <tr key={game._id}>
                      <td>{i+1}</td>
                      <td>{game.matchMap}</td>
                      <td>{game.heroSelected}</td>
                      <td>{game.winLoss}</td>
                      <td>{game.postMatchSR}</td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
          :
          <div className='row'>
            <div className='col-12'>
              <h1>Games</h1>
              <table className='table section'>
                <thead>
                  <th>Map</th>
                  <th>Heros</th>
                  <th>Outcome</th>
                  <th>SR</th>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
          </div>
        }

        <Link className='btn btn-primary btn-block' to='/account'>GO BACK</Link>
      </div>
    );
  }
}

export default Season;
