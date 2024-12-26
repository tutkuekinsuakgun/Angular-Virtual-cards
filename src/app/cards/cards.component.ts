import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: false,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  // Kart listesi
  cards = [
    { provider: 'Ixaris', reference: '348h4_34324', cardNumber: '1234 5678 9012 9839', balance: '45₺', imageUrl: 'assets/shiba.jpg' },
    { provider: 'Sunrate', reference: '34223gfg45345', cardNumber: '3567 6846 8937 7846', balance: '433₺', imageUrl: 'assets/shiba.jpg' },
    { provider: 'USBank', reference: '4657e564342', cardNumber: '7583 5840 4843 4840', balance: '4324₺', imageUrl: 'assets/shiba.jpg' },
    { provider: 'Connexpay', reference: 'sdsasedf455', cardNumber: '5748 7382 3738 3839', balance: '0₺', imageUrl: 'assets/shiba.jpg' },
    { provider: 'Voxel', reference: 'fefefe6546656', cardNumber: '4682 3848 3829 9284', balance: '3423₺', imageUrl: 'assets/shiba.jpg' },
    { provider: 'Amadeus', reference: '34343255_4fsd', cardNumber: '5738 3234 3748 8329', balance: '2₺', imageUrl: 'assets/shiba.jpg' },
    { provider: 'Pamelo', reference: '43935f_4rrw', cardNumber: '1234 4738 3743 4383', balance: '4322₺', imageUrl: 'assets/shiba.jpg' },
    { provider: 'Ixaris', reference: '492349_dfssf', cardNumber: '3439 4382 2328 9392', balance: '3432₺', imageUrl: 'assets/shiba.jpg' },

  ];

  // Yeni kart eklemek için form modeli
  newCard = {
    provider: '',
    reference: '',
    cardNumber: '',
    balance: ''
  };

  showForm: boolean = false; // Başlangıçta form kapalı

  // Kart ekleme fonksiyonu
  addCard() {
    const newCardData = { ...this.newCard, imageUrl: 'https://www.dijitalperformans.com/wp-content/uploads/2024/08/sanal-kart-nedir-nasil-guvenli-alisveris-yapilir.jpg" alt="Kart Görseli"' };
    this.cards.unshift(newCardData); // En başa ekle
    this.resetForm();
    this.showForm = false; // Kart eklendikten sonra formu kapat
  }

  // Formu sıfırla
  resetForm() {
    this.newCard = { provider: '', reference: '', cardNumber: '', balance: '' };
  }
}
