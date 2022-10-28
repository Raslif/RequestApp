import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

interface RequestDetails {
  refNo: string;
  createdDate: string;
  category: string;
  subCategory: string;
  description: string;
  noOfNotes: number;
}

const listOfRequests: RequestDetails[] = [
  {
    refNo: 'Ref 1',
    createdDate: new Date().toDateString(),
    category: 'Test Category',
    subCategory: 'Test Sub Category',
    description: 'Test Description',
    noOfNotes: 1,
  },
  {
    refNo: 'Ref 2',
    createdDate: new Date().toDateString(),
    category: 'Test Category',
    subCategory: 'Test Sub Category',
    description: 'Test Description',
    noOfNotes: 2,
  },
  {
    refNo: 'Ref 3',
    createdDate: new Date().toDateString(),
    category: 'Test Category',
    subCategory: 'Hai',
    description: 'Test Description',
    noOfNotes: 3,
  },
  {
    refNo: 'Ref 4',
    createdDate: new Date().toDateString(),
    category: 'Test Category',
    subCategory: 'Test Sub Category',
    description: 'Test Description',
    noOfNotes: 2,
  },
];

function search(text: string): RequestDetails[] {
  return listOfRequests.filter((request) => {
    const term = text.toLowerCase();
    return (
      request.refNo.toLowerCase().includes(term) ||
      request.createdDate.toLowerCase().includes(term) ||
      request.category.toLowerCase().includes(term) ||
      request.subCategory.toLowerCase().includes(term) ||
      request.description.toLowerCase().includes(term)
    );
  });
}

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css'],
  providers: [],
})
export class RequestDetailsComponent implements OnInit {
  listOfRequests$: Observable<RequestDetails[]>;
  model: NgbDateStruct;
  filter = new FormControl('', { nonNullable: true });

  constructor() {}

  ngOnInit(): void {
    this.listOfRequests$ = this.filter.valueChanges.pipe(
      startWith(''),
      map((text) => search(text))
    );
  }

  onViewRequestDetails(refNo: string) {
    console.log(refNo);
  }

  onEditRequestDetails(refNo: string) {
    console.log(refNo);
  }
}
