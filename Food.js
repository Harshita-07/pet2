class Food
{
    constructor (x, y, width, height){
        var foodStock
        var lastfed
    this.width = width
    this.height = height
    this.x;
    this.y
    this.image = loadImage("Milk.png")
    }

    getfoodStock(){

    }
    updatwfoodStock(){

    }
    deductfoosStock(){

    }
    display(){
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
}
}