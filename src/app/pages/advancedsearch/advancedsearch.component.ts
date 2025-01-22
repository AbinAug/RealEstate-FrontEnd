import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-advancedsearch',
  imports: [ReactiveFormsModule],
  templateUrl: './advancedsearch.component.html',
  styleUrl: './advancedsearch.component.css'
})
export class AdvancedSearchComponent implements OnInit {
  searchForm!: FormGroup;
 
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchTerm: [''],
      title: [''],
      location: [''],
      price: ['']
    });
  }

  onSearch(): void {
    console.log('Search criteria:', this.searchForm.value);
    // Pass search criteria to a service or parent component
  }

  resetForm(): void {
    this.searchForm.reset();
  }
}
