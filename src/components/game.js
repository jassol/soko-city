import 'phaser'
import phaserConfig from '../config/phaserConfig'
import { firebaseConfig } from '../config/firebaseConfig'
import MainScene from '../scenes/MainScene'
import WorldScene from '../scenes/WorldScene'
import React from 'react'

class phaserGame extends Phaser.Game {
  constructor() {
    super(phaserConfig, firebaseConfig)

    //Add all the scenes
    this.scene.add('WorldScene', WorldScene)
    this.scene.add('MainScene', MainScene)

    //Start the game with the main scene
    this.scene.start('MainScene')
  }
}

export default class Game extends React.Component {
  componentDidMount() {
    new phaserGame
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return <div id="phaser-game" />
  }
}