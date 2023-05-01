import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  images:string[]=['./assets/images/1.jpg','./assets/images/2.jpg','./assets/images/3.jpg','./assets/images/4.jpg','./assets/images/5.jpg']
  imgSrc:string=this.images[0];
  Timer:any=0;
  
  next(){
    for(let i=0;i<this.images.length-1;i++){
      if(i!=4){

      
      if(this.imgSrc==this.images[i]){
        //console.log(this.imgSrc)
        this.imgSrc=this.images[++i];
        console.log(i)
        console.log(this.imgSrc)
        
      }
    }}
  }
  prev(){
    for(let i=this.images.length-1;i>=0;i--){
      if(i!=0){
      if(this.imgSrc==this.images[i]){
        //console.log(this.imgSrc)
        this.imgSrc=this.images[--i];
        //console.log(i)
        //console.log(this.imgSrc)
        if(i==-1){
          this.imgSrc=this.images[4];
            
          }
      }
    }
  }
  }
  slide(){
   while(this.Timer==0){
    this.Timer = setInterval(() => {
      for (let i=0;i<this.images.length;i++) {
          if (this.imgSrc == this.images[i]) {
            this.imgSrc=this.images[++i]
              if (i == 5) {
                  i = 0;
                  this.imgSrc=this.images[i];
              }

          }
      }

  }, 1000);
   } 
   
  }
  stop(){
    clearInterval(this.Timer);
    this.Timer = 0;

  }
}
