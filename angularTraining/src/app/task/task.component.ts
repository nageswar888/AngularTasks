import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  myTextarea: any;
  deleteData : any;
  date= new Date();
 //data  = new Array(' ');
data: any;
  userFilter: any = { name: '' };
  text="this is static text";
  note=true;
  textArea=false;
  exist=false;
  constructor(private localstorage :LocalStorage) {
    localstorage.getItem('user').subscribe((data) => {

      this.data=data;
    });
  }

  ngOnInit() {

  }

  disable(){
    this.note=false;
    this.textArea=true;
    alert(this.textArea);

  }
  save(){
    alert(this.myTextarea);
    this.data.push('abcg');
    this.data.push('abcg');
    this.myTextarea='';
    this.note=true;
    this.localstorage.setItem('user',this.data).subscribe(() =>{});

  }
  delete(){
    for(let index=0; index<this.data.length; index++){
      if(this.data[index]==this.deleteData){

        this.data.splice(index,1);
        this.localstorage.setItem('user',this.data).subscribe(() =>{});
        this.myTextarea='';
      }
    }
  }
  displayContainingData(content : any){
    this.myTextarea=content;
    this.deleteData=content;

  }

}
