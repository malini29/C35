class Food{
constructor{
foodStock= new Food();
lastFed = new Food();
}
getFoodStock(){
var gameStateref=database.ref('gameState');
gameStateref.on("value",function(data) {
    gameState=data.val();

})
}
 updateFoodStock(state){
database.ref('/').update({
    gameState:state
})

}
deductFood (){
if (gameState===0) {
  

}




}
display(){
var x=80;y=100;
ImageMode(CENTER);
image(this.image,720,220,70,70);

if (this.foodStock!=0) {
    for (var i =0 < this.foodStock;i++) {
        if (i%10==0) {
            x=0;
            y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30
    }
}



}