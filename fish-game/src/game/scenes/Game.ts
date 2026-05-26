import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.setPath('assets');
        
        // Ocean assets
        this.load.image('ocean', 'ocean.png');
        this.load.image('fish', 'fish.png');
    }

    create ()
    {
        // Ocean background
        this.add.image(512, 384, 'ocean');

        // Fish in the middle
        const fish = this.add.image(512, 350, 'fish').setDepth(100);

        // Ocean title text
        this.add.text(512, 100, 'Deep Ocean Adventure', {
            fontFamily: 'Arial Black',
            fontSize: 48,
            color: '#7fe7ff',
            stroke: '#003344',
            strokeThickness: 10,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);

        // Ocean message
        this.add.text(512, 520,
            'Swim through the sea!\nWatch out for sharks\nand explore coral reefs!',
        {
            fontFamily: 'Arial Black',
            fontSize: 32,
            color: '#ffffff',
            stroke: '#001a33',
            strokeThickness: 6,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);

        // Fish movement animation
        this.tweens.add({
            targets: fish,
            x: 700,
            duration: 2000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        // Floating bubbles
        for (let i = 0; i < 20; i++)
        {
            const bubble = this.add.circle(
                Phaser.Math.Between(0, 1024),
                Phaser.Math.Between(0, 768),
                Phaser.Math.Between(5, 15),
                0xffffff,
                0.5
            );

            this.tweens.add({
                targets: bubble,
                y: -50,
                duration: Phaser.Math.Between(3000, 7000),
                repeat: -1,
                delay: Phaser.Math.Between(0, 3000)
            });
        }
    }
}