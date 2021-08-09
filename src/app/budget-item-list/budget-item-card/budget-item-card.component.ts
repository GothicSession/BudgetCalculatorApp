import { BudgetItem } from './../../../shared/modules/budget-item-model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item:BudgetItem
  @Output() xButtonClick:EventEmitter<any> = new EventEmitter<any>()
  @Output() cardClick:EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  onXButtonClicked(){
    this.xButtonClick.emit()
  }
  onCardClicked(){
    this.cardClick.emit()
  }
}
