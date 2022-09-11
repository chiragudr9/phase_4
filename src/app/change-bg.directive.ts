import { Directive,Input ,ElementRef,HostListener,Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  @Input() iscorrect: boolean=false;
  constructor(private ef : ElementRef, private render : Renderer2)
   {}
  @HostListener('click') answer(){
    if(this.iscorrect){
      this.render.setStyle(this.ef.nativeElement,'background','green');
      this.render.setStyle(this.ef.nativeElement,'color','#fff');
      this.render.setStyle(this.ef.nativeElement,'border','2px solid grey');
    }
    else{
      this.render.setStyle(this.ef.nativeElement,'background','red');
      this.render.setStyle(this.ef.nativeElement,'color','#fff');
      this.render.setStyle(this.ef.nativeElement,'border','2px solid grey');
    
    }
  }

}
