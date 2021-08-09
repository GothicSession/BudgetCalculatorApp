import { EditItemModalComponent } from './../edit-item-modal/edit-item-modal.component';
import { BudgetItem } from './../../shared/modules/budget-item-model';
import { EventEmitter,Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {


@Input() budgetItems:BudgetItem[];
@Output() delete:EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>()
@Output() update:EventEmitter<any> = new EventEmitter<any>()
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item:BudgetItem){
    this.delete.emit(item);
  }
  onCardClicked(item:BudgetItem){
    const dialogRef=this.dialog.open(EditItemModalComponent,{
      width:'580px',
      data:item
    })
    dialogRef.afterClosed().subscribe(result=>{
      if (result){
        this.update.emit({
          old:item,
          new:result
        })
      }
    })
  }
}
export interface UpdateEvent{
  old:BudgetItem;
  new:BudgetItem
  }