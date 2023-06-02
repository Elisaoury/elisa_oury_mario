import {zone_1} from "./assets/zone_1.js";


var config = 
{
    type: Phaser.AUTO,
        scale:{
            width: 2400, 
            height: 1000,

    },
    

    physics: {
        default: 'arcade',
        arcade: 
        {
            gravity: { y:700},
            debug: true
        }
    },
    
    scene:[zone_1]


};

new Phaser.Game(config);




                    


          
