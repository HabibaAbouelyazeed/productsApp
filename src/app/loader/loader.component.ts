import { Component } from '@angular/core';
import { LoadingService } from '../shared/services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  isLoading !: boolean;
  constructor(private loadingService: LoadingService){}

  ngOnInit(){
    this.loadingService.getLoader().subscribe(
      (data) => this.isLoading = data,
      (error) => console.log(error)
    );
  }
}
