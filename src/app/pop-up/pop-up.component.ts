import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit{
  @Input() isVisible: boolean = false;
  ngOnInit(): void {
    // Automatically close the popup after 3 seconds
    setTimeout(() => {
      this.closePopup();
    }, 3000);
  }

  closePopup() {
    const popup = document.getElementById('postAddedPopup');
    if (popup) {
      popup.style.display = 'none';
    }
  }
}
