import { Component } from '@angular/core';


import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feed-me-now-page',
  templateUrl: './feed-me-now-page.component.html',
  styleUrls: ['./feed-me-now-page.component.css']
})
export class FeedMeNowPageComponent {

  orderFoods: string[] = [
    "Temcobell", "Burger Kang", "MacDoughnuts", "Mochi's and Sushi's", "Mon-Keigh Joes", "Los Pollos Hermanos"];

  onHandFoods: string[] = [
    "Cold Pizza", "Cereal", "Amazing Pot Roast Leftovers", "Microwave Pot Pie", "Pizza Rolls", "Ham Sandwich"
  ]

  randomOnHandFood: string = ''
  randomOrderFood: string = ''


  addNewFastFood = (): void => {
    this.orderFoods.push("fastFoodName")
  }
  //  fastFood="";

  randomizer = (array: string[]): string => {
    return array[Math.floor(Math.random() * array.length)]
  }

  randomizeOnHandFood = (): void => {
    this.randomOnHandFood = this.randomizer(this.onHandFoods)
  }

  randomizeOrderFood = (): void => {
    this.randomOrderFood = this.randomizer(this.orderFoods)
  }

  // randomizer(){
  randomFastFood: string = this.orderFoods[Math.floor(Math.random() * this.orderFoods.length)];
  //  this.fastFood= randomFastFood
  //  return this.fastFood
  //   }

}



