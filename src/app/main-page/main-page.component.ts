import { UpdateEvent } from './../budget-item-list/budget-item-list.component';
import { BudgetItem } from './../../shared/modules/budget-item-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  BudgetItems:BudgetItem[] = new Array<BudgetItem>();
  totalBudget:number=0

  ngOnInit(): void {
  }

  addItem(newItem:BudgetItem){
    this.BudgetItems.push(newItem)
    this.totalBudget+=newItem.amount;
  }
  deleteItem(item:BudgetItem){
    let index=this.BudgetItems.indexOf(item)
    this.BudgetItems.splice(index,1)
    this.totalBudget-=item.amount;
  }

  updateItem(updateEvent:UpdateEvent){
    this.BudgetItems[this.BudgetItems.indexOf(updateEvent.old)]=updateEvent.new;

    this.totalBudget-=updateEvent.old.amount;
    this.totalBudget+=updateEvent.new.amount;
  }

}
