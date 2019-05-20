import React, { Component } from 'react'
import { listIntents } from '../providers/Intents';
import { listEntities } from '../providers/EntitiesService';
import { Redirect } from "react-router-dom";


export default class Assistant extends Component {

  constructor(props) {
    super(props)

    let params = new URLSearchParams(window.location.search);

    this.state = {
      workspace_id: params.get('id'),
      auth: false,
      intents: [],
      entities: []
    }
  }


  componentDidMount() {
    this.getListIntents()
  }

  getListIntents() {
    if (this.state.workspace_id !== undefined && this.state.workspace_id !== '') {
      listIntents(this.state.workspace_id).then(response => {
        this.setState({ intents: response.intents })
        this.getListEntities()
      })
    } else {
      this.setState({ auth: true })
    }
  }

  getListEntities() {
    listEntities(this.state.workspace_id).then(response => {
      console.log(response)
      this.setState({ entities: response.entities })
    })
  }



  render() {
    return (
      !this.state.auth ?
        <div class="container">
          <div class="row">
            <div class="col s6">
              <p class="flow-text blue-text">Intenções</p>
              <a class="waves-effect waves-light btn"><i class="material-icons left">add_circle_outline</i> Criar Intenção</a>
              <ul class="collection">
                {this.state.intents.map(element => {
                  return (
                    <li class="collection-item avatar">
                      <i class="material-icons circle blue">folder</i>
                      <span class="title">{element.intent}</span>
                      <p class="grey-text">{element.description}}</p>

                    </li>
                  )
                })}

              </ul>
            </div>
            <div class="col s6">
              <p class="flow-text blue-text">Entidades</p>
              <a class="waves-effect waves-light btn"><i class="material-icons left">add_circle_outline</i> Criar Entidade</a>

              <div class="collection">
                {this.state.entities.map(element => {
                  return (
                    <a href="#!" class="collection-item blue-text">@{element.entity}</a>
                  )
                })}

              </div>
            </div>
          </div>

        </div>
        :
        <Redirect push={true} to="/" />
    )
  }
}
