
import { Component, OnInit, Input } from '@angular/core';
//import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SearchService } from '../../services/search.service';
import { SearchConfig } from '../../config/search.config'

@Component({
	selector: 'app-search-result',
	templateUrl: './search-result.component.html',
	styleUrls: ['./search-result.component.css'],
	providers: [SearchService]
})
export class SearchResultComponent implements OnInit {

	 public searchItemName : String;
	public itemList : any = [];
	public flag=false;
	public resultFlag=false;
	constructor(private searchService : SearchService) { }

	ngOnInit() {
	}

	@Input()
	set itemName(itemName : String){
		this.searchItemName=itemName;
		if(this.searchItemName){
			this.itemList=null;	
			this.flag=false;		
			this.searchService.searchItem(SearchConfig.apiUrl+this.searchItemName).subscribe((res)=>{
				this.itemList=res;
				this.resultFlag=true;
				console.log(this.itemList);
				if(this.itemList==null){
					console.log("List empty");
					this.flag=false;
					alert("No Result Found");
				}
				else{
					this.flag=true;
				}
			},error=>this.handleError(error))		
		}
		
	}

	// storeItem(){
	// 	this.searchService.searchItem(SearchConfig.apiUrl).subscribe((res)=>{
	// 		this.itemList=res;
	// 	},error=>this.handleError(error))
	// 	this.itemList=this.searchService.searchItem(SearchConfig.apiUrl);
	// }

	private handleError(error) {
		console.log("Logging the error occured in the component");
		//alert("No Result Found");
		this.flag=true;
		this.resultFlag=false;
		console.log(this.resultFlag);
		console.log(this.flag)
	}
}
