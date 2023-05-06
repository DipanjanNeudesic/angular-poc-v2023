import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/shared/interfaces/store/Repository';

@Component({
  selector: 'ag-tablerow',
  templateUrl: './tablerow.component.html',
  styleUrls: ['./tablerow.component.scss']
})
export class TablerowComponent implements OnInit {

  @Input() row: Repository | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
