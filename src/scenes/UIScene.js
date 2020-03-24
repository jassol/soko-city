import InventoryItem from '../entity/InventoryItem'

export default class UIScene extends Phaser.Scene {

  constructor (){
    super('UIScene');

    this.populateInventoryBar = this.populateInventoryBar.bind(this)

  }

  preload() {
    this.load.spritesheet('cookie', 'assets/sprites/foodSprites.png', {
      frameWidth: 16,
      frameHeight: 16
    })

    this.load.spritesheet('avocado', 'assets/sprites/foodSprites.png', {
      frameWidth: 16,
      frameHeight: 16
    })

    this.load.image('graySquare', 'assets/sprites/graySquare.png')
  }

  create () {

    let currentGame = this.scene.get('WorldScene')

    this.inventoryBar = this.physics.add.group({ classType: InventoryItem })

    this.populateInventoryBar('cookie','avocado')

    currentGame.events.on('itemAdded', function(item){
      this.inventoryBar.children.entries.forEach(el=>{
        if (item.texture.key === el.texture.key) {
          el.clearTint()
        }
      })
    }, this)

  }


  populateInventoryBar(...items) {
    let currentX = 48
    items.forEach(item=>{
      this.inventoryBar.create(currentX, 675,'graySquare').setScale(3)
      this.inventoryBar.create(currentX, 675, item).setTint(0x696969).setScale(3)
      currentX += 48
    })
  }

}
